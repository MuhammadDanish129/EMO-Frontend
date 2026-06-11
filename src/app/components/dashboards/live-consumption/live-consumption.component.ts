import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { YxSelectComponent } from '../../../shared/yx-select/yx-select.component';
import { UserService } from '../../../shared/services/user/user.service';

import { FacilityService } from '../../core/facility-management/facility-management.service';
import { BuildingService } from '../../core/building-management/building-management.service';
import { FloorService } from '../../core/floor-management/floor-management.service';
import { SectionService } from '../../core/section-management/section-management.service';
import { OfficeService } from '../../core/office-management/office-management.service';
import { DeviceService } from '../../core/device-management/device-management.service';
import { SocketService } from './socket.services';

type ScopeType =
  | 'business'
  | 'facility'
  | 'building'
  | 'floor'
  | 'section'
  | 'office'
  | 'device';

interface LiveSensorCard {
  sensorId: string;
  sensorName?: string;
  label?: string;
  deviceId?: string;
  deviceName?: string;
  officeId?: string;
  officeName?: string;
  sectionId?: string;
  sectionName?: string;
  floorId?: string;
  floorName?: string;
  buildingId?: string;
  buildingName?: string;
  facilityId?: string;
  facilityName?: string;
  businessId?: string;
  businessName?: string;
  utilityId?: string;
  utilityName?: string;
  voltage: number;
  current: number;
  activePower: number;
  reactivePower: number;
  apparentPower: number;
  powerFactor: number;
  frequency: number;
  activeEnergy: number;
  isLive: boolean;
  relayState?: string | null;
  lastSeen: number;
  pulse: boolean;
  raw?: any;
}

@Component({
  selector: 'app-live-consumption',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MaterialModuleModule,
    YxSelectComponent
  ],
  templateUrl: './live-consumption.component.html',
  styleUrl: './live-consumption.component.scss'
})
export class LiveConsumptionComponent implements OnInit, OnDestroy {

  currentUser: any;

  facilities: any[] = [];
  buildings: any[] = [];
  floors: any[] = [];
  sections: any[] = [];
  offices: any[] = [];
  devices: any[] = [];
  isWaitingForLiveData=false;

  tenantOfficeIds: string[] = [];
private subscribedRooms = new Set<string>();

  selectedFacilityId = '';
  selectedBuildingId = '';
  selectedFloorId = '';
  selectedSectionId = '';
  selectedOfficeId = '';
  selectedDeviceId = '';

  selectedScopeType: ScopeType = 'business';
  selectedScopeId = '';

  isLoading = false;
  searchText = '';

  sensors: LiveSensorCard[] = [];
  filteredSensors: LiveSensorCard[] = [];

  private readonly SENSOR_TIMEOUT = 12000;
  private refreshTimer: any;
  private subscribedRoom: string | null = null;

  private readonly socketEvents = [
    // Events emitted by your current Node socket server
    'sensorUpdate',
    'businessUpdate',
    'facilityUpdate',
    'buildingUpdate',
    'floorUpdate',
    'sectionUpdate',
    'officeUpdate',
    'deviceUpdate',

    // Backward compatibility / old names
    'sensorUpdates',
    'scopeUpdate',
    'liveData',
    'deviceUpdates'
  ];

  constructor(
    private facilityService: FacilityService,
    private buildingService: BuildingService,
    private floorService: FloorService,
    private sectionService: SectionService,
    private officeService: OfficeService,
    private deviceService: DeviceService,
    private router: Router,
    private userService: UserService,
    private toaster: ToastrService,
    private socketService: SocketService
  ) {}

  async ngOnInit(): Promise<void> {
    this.currentUser = await this.userService.user$;

    this.selectedScopeType = 'business';
    this.selectedScopeId = this.getBusinessId();

    this.registerSocketListeners();

    this.socketService.connect();
  if (this.isTenantUser()) {
    this.loadTenantOffices();
  } else {
    if (this.selectedScopeId) {
      this.subscribeToScope('business', this.selectedScopeId);
    } else {
      console.warn('Business id not found in current user:', this.currentUser);
      this.toaster.warning('Business id not found. Live readings cannot be subscribed.');
    }
  }

    this.loadFacilities();

    this.refreshTimer = setInterval(() => {
      this.filteredSensors = [...this.filteredSensors];
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.refreshTimer);

    if (this.subscribedRoom) {
      this.unsubscribeRoom(this.subscribedRoom);
    }

    this.socketEvents.forEach(event => this.socketService.off(event));

    // If your SocketService forwards native Socket.IO events, this will clean them too.
    this.socketService.off('connect');
    this.socketService.off('reconnect');
    this.socketService.off('disconnect');
  }

  get isSocketConnected(): boolean {
    return this.socketService.isConnected();
  }

  isTenantUser(): boolean {
  return Number(this.currentUser?.userTypeLevel) === 2;
}

isBusinessUser(): boolean {
  return Number(this.currentUser?.userTypeLevel) === 1;
}

private getUserId(): string {
  return String(
    this.currentUser?.userId ??
    this.currentUser?.user_id ??
    this.currentUser?.id ??
    ''
  ).trim();
}

private loadTenantOffices(): void {
  this.isLoading = true;

  const userId = this.getUserId();

  this.officeService.getOfficeByTenantId(userId).subscribe({
    next: (res: any) => {
      this.isLoading = false;

      if (res.success === false) {
        this.toaster.error(res.remarks || 'Failed to load tenant offices');
        return;
      }

      this.offices = res.data ?? [];
      this.tenantOfficeIds = this.offices.map(x => String(x.officeId));

      this.subscribeToTenantOffices();
    },
    error: () => {
      this.isLoading = false;
      this.offices = [];
      this.tenantOfficeIds = [];
      this.toaster.error('Failed to load tenant offices');
    }
  });
}

private subscribeToTenantOffices(): void {
  this.unsubscribeAllRooms();

  this.selectedScopeType = 'office';
  this.selectedScopeId = 'tenant-offices';

  this.sensors = [];
  this.filteredSensors = [];
  this.isWaitingForLiveData = true;

  this.tenantOfficeIds.forEach(officeId => {
    const room = `office:${officeId}`;
    this.subscribedRooms.add(room);
    this.emitSocket('subscribe-office', officeId);
  });

  console.log('✅ Tenant subscribed offices:', this.tenantOfficeIds);
}

private unsubscribeAllRooms(): void {
  this.subscribedRooms.forEach(room => this.unsubscribeRoom(room));
  this.subscribedRooms.clear();

  if (this.subscribedRoom) {
    this.unsubscribeRoom(this.subscribedRoom);
    this.subscribedRoom = null;
  }
}
  loadFacilities(): void {
    this.isLoading = true;

    this.facilityService.getFacilities().subscribe({
      next: (res) => {
        this.isLoading = false;

        if (res.success === false) {
          this.toaster.error(res.remarks || 'Failed to load facilities');
          return;
        }

        this.facilities = res.data ?? [];
      },
      error: () => {
        this.isLoading = false;
        this.facilities = [];
        this.toaster.error('Failed to load facilities');
      }
    });
  }

  onFacilityChange(): void {
    this.resetBelow('facility');

    if (!this.selectedFacilityId) {
      this.subscribeToScope('business', this.getBusinessId());
      return;
    }

    this.subscribeToScope('facility', this.selectedFacilityId);

    this.buildingService
      .getBuildingByFacilityId(this.selectedFacilityId)
      .subscribe(res => this.buildings = res.data || []);
  }

  onBuildingChange(): void {
    this.resetBelow('building');

    if (!this.selectedBuildingId) {
      this.subscribeToScope('facility', this.selectedFacilityId);
      return;
    }

    this.subscribeToScope('building', this.selectedBuildingId);

    this.floorService
      .getFloorByBuildingId(this.selectedBuildingId)
      .subscribe(res => this.floors = res.data || []);
  }

  onFloorChange(): void {
    this.resetBelow('floor');

    if (!this.selectedFloorId) {
      this.subscribeToScope('building', this.selectedBuildingId);
      return;
    }

    this.subscribeToScope('floor', this.selectedFloorId);

    this.sectionService
      .getSectionByFloorId(this.selectedFloorId)
      .subscribe(res => this.sections = res.data || []);
  }

  onSectionChange(): void {
    this.resetBelow('section');

    if (!this.selectedSectionId) {
      this.subscribeToScope('floor', this.selectedFloorId);
      return;
    }

    this.subscribeToScope('section', this.selectedSectionId);

    this.officeService
      .GetAvailableOfficesBySectionId(this.selectedSectionId)
      .subscribe({
        next: (res) => {
          this.offices = res.data || [];
        },
        error: () => {
          this.offices = [];
          this.toaster.error('Failed to load offices');
        }
      });
  }

  // onOfficeChange(): void {
  //   this.resetBelow('office');

  //   if (!this.selectedOfficeId) {
  //     this.subscribeToScope('section', this.selectedSectionId);
  //     return;
  //   }

  //   this.subscribeToScope('office', this.selectedOfficeId);

  //   const service: any = this.deviceService as any;

  //   if (service.getDeviceByOfficeId) {
  //     service.getDeviceByOfficeId(this.selectedOfficeId)
  //       .subscribe((res: any) => this.devices = res.data || []);
  //   } else if (service.getDevicesByOfficeId) {
  //     service.getDevicesByOfficeId(this.selectedOfficeId)
  //       .subscribe((res: any) => this.devices = res.data || []);
  //   } else {
  //     console.warn('DeviceService has no getDeviceByOfficeId/getDevicesByOfficeId method');
  //   }
  // }


  onOfficeChange(): void {
  this.resetBelow('office');

  if (!this.selectedOfficeId) {
    if (this.isTenantUser()) {
      this.subscribeToTenantOffices();
    } else {
      this.subscribeToScope('section', this.selectedSectionId);
    }
    return;
  }

  this.subscribeToScope('office', this.selectedOfficeId);

  const service: any = this.deviceService as any;

  if (service.getDeviceByOfficeId) {
    service.getDeviceByOfficeId(this.selectedOfficeId)
      .subscribe((res: any) => this.devices = res.data || []);
  } else if (service.getDevicesByOfficeId) {
    service.getDevicesByOfficeId(this.selectedOfficeId)
      .subscribe((res: any) => this.devices = res.data || []);
  }
}
  onDeviceChange(): void {
    if (!this.selectedDeviceId) {
      this.subscribeToScope('office', this.selectedOfficeId);
      return;
    }

    this.subscribeToScope('device', this.selectedDeviceId);
  }

  // private subscribeToScope(type: ScopeType, id: string): void {
  //   const cleanId = String(id || '').trim();

  //   if (!cleanId) {
  //     console.warn(`Cannot subscribe to ${type}. Empty id received.`);
  //     return;
  //   }

  //   const nextRoom = `${type}:${cleanId}`;

  //   if (this.subscribedRoom && this.subscribedRoom !== nextRoom) {
  //     this.unsubscribeRoom(this.subscribedRoom);
  //   }

  //   this.selectedScopeType = type;
  //   this.selectedScopeId = cleanId;
  //   this.subscribedRoom = nextRoom;

  //   this.sensors = [];
  //   this.filteredSensors = [];

  //   this.emitSocket(`subscribe-${type}`, cleanId);

  //   console.log('✅ Subscribed:', `subscribe-${type}`, cleanId);
  // }
private subscribeToScope(type: ScopeType, id: string): void {
  this.isWaitingForLiveData = true;

  const cleanId = String(id || '').trim();
  if (!cleanId) return;

  this.unsubscribeAllRooms();

  const nextRoom = `${type}:${cleanId}`;

  this.selectedScopeType = type;
  this.selectedScopeId = cleanId;
  this.subscribedRoom = nextRoom;
  this.subscribedRooms.add(nextRoom);

  this.sensors = [];
  this.filteredSensors = [];

  this.emitSocket(`subscribe-${type}`, cleanId);

  console.log('✅ Subscribed:', `subscribe-${type}`, cleanId);
}
  private unsubscribeRoom(room: string): void {
    const [type, id] = room.split(':');
    if (!type || !id) return;

    this.emitSocket(`unsubscribe-${type}`, id);
    console.log('🛑 Unsubscribed:', `unsubscribe-${type}`, id);
  }

  private registerSocketListeners(): void {
    this.socketEvents.forEach(event => this.socketService.off(event));

    this.socketEvents.forEach(event => {
      this.socketService.on(event, (data: any) => {
        console.log(`========== ${event} RECEIVED ==========`);
        console.log(data);
        this.handleSocketData(data);
      });
    });

    // Re-subscribe after reconnect. This prevents silent no-data issue after refresh/reconnect.
    this.socketService.off('connect');
    this.socketService.on('connect', () => {
      console.log('✅ Socket connected');

      if (this.subscribedRoom) {
        const [type, id] = this.subscribedRoom.split(':') as [ScopeType, string];
        this.emitSocket(`subscribe-${type}`, id);
        console.log('🔁 Re-subscribed after connect:', this.subscribedRoom);
      }
    });

    this.socketService.off('reconnect');
    this.socketService.on('reconnect', () => {
      console.log('✅ Socket reconnected');

      if (this.subscribedRoom) {
        const [type, id] = this.subscribedRoom.split(':') as [ScopeType, string];
        this.emitSocket(`subscribe-${type}`, id);
        console.log('🔁 Re-subscribed after reconnect:', this.subscribedRoom);
      }
    });

    this.socketService.off('disconnect');
    this.socketService.on('disconnect', (reason: any) => {
      console.warn('🛑 Socket disconnected:', reason);
    });
  }

  private handleSocketData(data: any): void {
    const packets = Array.isArray(data) ? data : [data];

    packets.forEach(packet => {
      const sensors = this.extractSensors(packet);

      if (!sensors.length) {
        console.warn('Socket packet received but no sensors found:', packet);
      }

      sensors.forEach(sensor => {
        const card = this.mapSensorToCard(packet, sensor);

        if (!card.sensorId) {
          console.warn('Mapped sensor skipped because sensorId is missing:', { packet, sensor, card });
          return;
        }

        const existing = this.sensors.find(x => x.sensorId === card.sensorId);

        if (existing) {
          Object.assign(existing, card, {
            lastSeen: Date.now(),
            pulse: true
          });

          setTimeout(() => existing.pulse = false, 900);
        } else {
          this.sensors.push({
            ...card,
            lastSeen: Date.now(),
            pulse: true
          });

          setTimeout(() => {
            const added = this.sensors.find(x => x.sensorId === card.sensorId);
            if (added) added.pulse = false;
          }, 900);
        }
      });
    });

    this.refreshFilteredSensors();
  }

  private extractSensors(packet: any): any[] {
    // Current Node service sends: { sensorId, sensor, chain, ... }
    if (packet?.sensor) return [packet.sensor];

    // Old/multi-sensor packet shapes
    if (Array.isArray(packet?.sensors)) return packet.sensors;
    if (Array.isArray(packet?.ss)) return packet.ss;

    // Direct single sensor packet shape
    if (packet?.sensorId || packet?.sid) return [packet];

    return [];
  }

  private mapSensorToCard(packet: any, sensor: any): LiveSensorCard {
    const chain = packet.chain || packet.sensorChain || sensor.chain || {};
    const sensorId = String(
      sensor.sensorId ??
      sensor.sid ??
      packet.sensorId ??
      chain.sensorId ??
      ''
    );

    return {
      sensorId,
      sensorName: chain.sensorName ?? sensor.sensorName ?? sensor.label ?? sensor.lb,
      label: sensor.label ?? sensor.lb,

      deviceId: chain.deviceId ?? packet.deviceId ?? packet.device,
      deviceName: chain.deviceName ?? packet.deviceName ?? packet.device,

      officeId: chain.officeId,
      officeName: chain.officeName,

      sectionId: chain.sectionId,
      sectionName: chain.sectionName,

      floorId: chain.floorId,
      floorName: chain.floorName,

      buildingId: chain.buildingId,
      buildingName: chain.buildingName,

      facilityId: chain.facilityId,
      facilityName: chain.facilityName,

      businessId: chain.businessId,
      businessName: chain.businessName,

      utilityId: chain.utilityId,
      utilityName: chain.utilityName,

      voltage: this.toNumber(sensor.voltage ?? sensor.v),
      current: this.toNumber(sensor.current ?? sensor.c),

      activePower: this.toNumber(sensor.activePower ?? sensor.acp ?? sensor.power),
      reactivePower: this.toNumber(sensor.reactivePower ?? sensor.rep),
      apparentPower: this.toNumber(sensor.apparentPower ?? sensor.app),

      powerFactor: this.toNumber(sensor.powerFactor ?? sensor.pf),
      frequency: this.toNumber(sensor.frequency ?? sensor.f),

      activeEnergy: this.toNumber(
        sensor.activeEnergy ??
        sensor.energyKwh ??
        sensor.energy_kwh ??
        sensor.ekwh ??
        sensor.energyWh ??
        sensor.energy_wh ??
        sensor.ewh
      ),

      // If packet reached this component, treat it as live unless server explicitly says false.
      isLive: Boolean(sensor.isLive ?? sensor.live ?? true),
      relayState: sensor.relayState ?? sensor.rs ?? null,

      lastSeen: Date.now(),
      pulse: true,
      raw: packet
    };
  }

  private emitSocket(event: string, data: any): void {
    const svc: any = this.socketService as any;

    console.log('📡 Socket emit:', event, data);

    if (typeof svc.emit === 'function') {
      svc.emit(event, data);
      return;
    }

    if (svc.socket?.emit) {
      svc.socket.emit(event, data);
      return;
    }

    // Old SocketService fallback only supported device before.
    if (event === 'subscribe-device' && typeof svc.subscribeDevice === 'function') {
      svc.subscribeDevice(data);
      return;
    }

    if (event === 'unsubscribe-device' && typeof svc.unsubscribeDevice === 'function') {
      svc.unsubscribeDevice(data);
      return;
    }

    console.warn('SocketService does not expose emit/socket.emit for:', event);
  }

  searchSensors(): void {
    this.refreshFilteredSensors();
  }

  private refreshFilteredSensors(): void {
    const term = this.searchText.toLowerCase().trim();

    if (!term) {
      this.filteredSensors = [...this.sensors];
      return;
    }

    this.filteredSensors = this.sensors.filter(x =>
      x.sensorName?.toLowerCase().includes(term) ||
      x.label?.toLowerCase().includes(term) ||
      x.deviceName?.toLowerCase().includes(term) ||
      x.officeName?.toLowerCase().includes(term) ||
      x.utilityName?.toLowerCase().includes(term) ||
      x.businessName?.toLowerCase().includes(term) ||
      x.facilityName?.toLowerCase().includes(term) ||
      x.buildingName?.toLowerCase().includes(term) ||
      x.floorName?.toLowerCase().includes(term) ||
      x.sectionName?.toLowerCase().includes(term)
    );
  }

  isSensorLive(sensor: LiveSensorCard): boolean {
    return Date.now() - sensor.lastSeen < this.SENSOR_TIMEOUT;
  }

  getLastSeenText(sensor: LiveSensorCard): string {
    if (!sensor.lastSeen) return 'No data';

    const seconds = Math.floor((Date.now() - sensor.lastSeen) / 1000);

    if (seconds < 5) return 'Just now';
    if (seconds < 60) return `${seconds} sec ago`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} min ago`;

    const hours = Math.floor(minutes / 60);
    return `${hours} hr ago`;
  }

  getScopeLabel(): string {
    return `${this.selectedScopeType.toUpperCase()} LIVE VIEW`;
  }

  getScopeText(): string {
    return this.selectedScopeId
      ? `${this.selectedScopeType}:${this.selectedScopeId}`
      : 'No scope selected';
  }

  trackSensor(index: number, sensor: LiveSensorCard): string {
    return sensor.sensorId || String(index);
  }

  private resetBelow(level: string): void {
    if (level === 'facility') {
      this.selectedBuildingId = '';
      this.selectedFloorId = '';
      this.selectedSectionId = '';
      this.selectedOfficeId = '';
      this.selectedDeviceId = '';
      this.buildings = [];
      this.floors = [];
      this.sections = [];
      this.offices = [];
      this.devices = [];
    }

    if (level === 'building') {
      this.selectedFloorId = '';
      this.selectedSectionId = '';
      this.selectedOfficeId = '';
      this.selectedDeviceId = '';
      this.floors = [];
      this.sections = [];
      this.offices = [];
      this.devices = [];
    }

    if (level === 'floor') {
      this.selectedSectionId = '';
      this.selectedOfficeId = '';
      this.selectedDeviceId = '';
      this.sections = [];
      this.offices = [];
      this.devices = [];
    }

    if (level === 'section') {
      this.selectedOfficeId = '';
      this.selectedDeviceId = '';
      this.offices = [];
      this.devices = [];
    }

    if (level === 'office') {
      this.selectedDeviceId = '';
      this.devices = [];
    }
  }

  private getBusinessId(): string {
    return String(
      this.currentUser?.businessId ??
      this.currentUser?.fkBusiness ??
      this.currentUser?.fk_business ??
      this.currentUser?.business?.businessId ??
      this.currentUser?.business?.business_id ??
      ''
    ).trim();
  }

clearFilters(): void {

  if (this.subscribedRoom) {
    this.unsubscribeRoom(this.subscribedRoom);
  }

  // Clear selections
  this.selectedFacilityId = '';
  this.selectedBuildingId = '';
  this.selectedFloorId = '';
  this.selectedSectionId = '';
  this.selectedOfficeId = '';
  this.selectedDeviceId = '';

  // Clear child dropdown data
  this.buildings = [];
  this.floors = [];
  this.sections = [];
  this.offices = [];
  this.devices = [];

  // Clear search
  this.searchText = '';

  // Reset sensor list
  this.sensors = [];
  this.filteredSensors = [];

  // Return to business scope
  this.selectedScopeType = 'business';
  this.selectedScopeId = this.getBusinessId();

  // Subscribe again
  this.subscribeToScope(
    'business',
    this.selectedScopeId
  );

  console.log(
    '🔄 Reset to Business Scope:',
    this.selectedScopeId
  );
}
  
  private toNumber(value: any): number {
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
  }
}
