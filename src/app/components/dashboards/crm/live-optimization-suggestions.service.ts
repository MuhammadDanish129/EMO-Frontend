import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { SocketService } from '../live-consumption/socket.services';
import {
  CrmDashboardSuggestionResponseDTO,
  OptimizationSuggestionSocketItemDTO,
  OptimizationSuggestionsSocketPayloadDTO
} from './crm.type';

@Injectable({ providedIn: 'root' })
export class LiveOptimizationSuggestionsService {
  private readonly suggestionsSubject = new BehaviorSubject<CrmDashboardSuggestionResponseDTO[]>([]);
  private businessId = '';
  private hasSocketSnapshot = false;

  readonly suggestions$ = this.suggestionsSubject.asObservable();
  readonly count$ = this.suggestions$.pipe(map(items => items.length));

  constructor(private readonly socketService: SocketService) {}

  get suggestions(): CrmDashboardSuggestionResponseDTO[] {
    return this.suggestionsSubject.value;
  }

  start(businessId?: string | null): void {
    const cleanBusinessId = String(businessId || '').trim();
    if (!cleanBusinessId || this.businessId === cleanBusinessId) {
      return;
    }

    this.stop();
    this.businessId = cleanBusinessId;
    this.hasSocketSnapshot = false;
    this.socketService.connect();
    this.socketService.on('optimization-suggestions', this.handleSuggestions);
    this.socketService.subscribeBusiness(cleanBusinessId);
  }

  stop(clearSuggestions = true): void {
    if (this.businessId) {
      this.socketService.unsubscribeBusiness(this.businessId);
    }

    this.socketService.off('optimization-suggestions', this.handleSuggestions);
    this.businessId = '';
    this.hasSocketSnapshot = false;

    if (clearSuggestions) {
      this.suggestionsSubject.next([]);
    }
  }

  replaceSnapshot(items: CrmDashboardSuggestionResponseDTO[] | null | undefined): void {
    if (this.hasSocketSnapshot) {
      return;
    }
    this.suggestionsSubject.next(this.sortSuggestions(items ?? []));
  }

  private handleSuggestions = (payload: OptimizationSuggestionsSocketPayloadDTO): void => {
    if (!payload || String(payload.businessId || '') !== this.businessId) {
      return;
    }

    const items = (payload.suggestions ?? []).map(item => this.normalizeSuggestion(item));
    this.hasSocketSnapshot = true;
    this.suggestionsSubject.next(this.sortSuggestions(items));
  };

  private normalizeSuggestion(item: OptimizationSuggestionSocketItemDTO): CrmDashboardSuggestionResponseDTO {
    return {
      suggestionId: item.reasonCode,
      severity: item.severity || 'info',
      type: item.type || 'general',
      title: item.title || 'Optimization suggestion',
      message: item.description || '',
      action: item.recommendation || '',
      estimatedSavingKwh: item.estimatedSavingKwh ?? null,
      estimatedSavingCost: item.estimatedSavingCost ?? null,
      sensorId: item.sensorId || '',
      sensorName: '',
      applianceId: item.applianceId || '',
      applianceName: item.affectedAppliance || '',
      utilityName: item.affectedUtility || '',
      officeName: item.affectedOffice || '',
      timeBucket: item.detectedAtUtc || '',
      canApplyAction: Boolean(item.canApplyAction),
      conflictsWithPeakHour: Boolean(item.conflictsWithPeakHour),
      reasonCode: item.reasonCode || ''
    };
  }

  private sortSuggestions(items: CrmDashboardSuggestionResponseDTO[]): CrmDashboardSuggestionResponseDTO[] {
    return [...items].sort((first, second) => {
      const severityDifference = this.severityRank(second.severity) - this.severityRank(first.severity);
      if (severityDifference !== 0) return severityDifference;

      return this.timeValue(second.timeBucket) - this.timeValue(first.timeBucket);
    });
  }

  private severityRank(value: string): number {
    switch ((value || '').toLowerCase()) {
      case 'critical': return 4;
      case 'warning': return 3;
      case 'opportunity': return 2;
      case 'info': return 1;
      default: return 0;
    }
  }

  private timeValue(value: string): number {
    const parsed = new Date(value || '').getTime();
    return Number.isFinite(parsed) ? parsed : 0;
  }
}
