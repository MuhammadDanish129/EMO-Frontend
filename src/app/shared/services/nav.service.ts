// import { Injectable, OnDestroy } from '@angular/core';
// import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
// import { takeUntil, debounceTime } from 'rxjs/operators';
// import { Router } from '@angular/router';
// // Menu
// export interface Menu {
//   headTitle?: string;
//   headTitle2?: string;
//   path?: string;
//   title?: string;
//   icon?: string;
//   type?: string;
//   badgeValue?: string;
//   badgeClass?: string;
//   badgeText?: string;
//   active?: boolean;
//   selected?: boolean;
//   bookmark?: boolean;
//   children?: Menu[];
//   children2?: Menu[];
//   Menusub?: boolean;
//   target?: boolean;
//   menutype?:string
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class NavService implements OnDestroy {
//   private unsubscriber: Subject<any> = new Subject();
//   public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
//     window.innerWidth
//   );

//   // Search Box
//   public search = false;

//   // Language
//   public language = false;

//   // Mega Menu
//   public megaMenu = false;
//   public levelMenu = false;
//   public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

//   // Collapse Sidebar
//   public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

//   // For Horizontal Layout Mobile
//   public horizontal: boolean = window.innerWidth < 991 ? false : true;

//   // Full screen
//   public fullScreen = false;
//   active: any;

//   constructor(private router: Router) {
//     this.setScreenWidth(window.innerWidth);
//     fromEvent(window, 'resize')
//       .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
//       .subscribe((evt: any) => {
//         this.setScreenWidth(evt.target.innerWidth);
//         if (evt.target.innerWidth < 991) {
//           this.collapseSidebar = true;
//           this.megaMenu = false;
//           this.levelMenu = false;
//         }
//         if (evt.target.innerWidth < 1199) {
//           this.megaMenuColapse = true;
//         }
//       });
//     if (window.innerWidth < 991) {
//       // Detect Route change sidebar close
//       this.router.events.subscribe((event) => {
//         this.collapseSidebar = true;
//         this.megaMenu = false;
//         this.levelMenu = false;
//       });
//     }
//   }

//   ngOnDestroy() {
//     this.unsubscriber.next;
//     this.unsubscriber.complete();
//   }

//   private setScreenWidth(width: number): void {
//     this.screenWidth.next(width);
//   }

//   MENUITEMS: Menu[] = [
//     // Dashboard
//     { headTitle: 'MAIN'
//      },
//     {
//       title: 'Dashboards',
//       icon: 'las la-chart-bar',
//       type: 'link',
//       selected : false,
//       active: false,
//       path: '/dashboard',
//     },

//     { headTitle: 'MANAGEMENT' },
//     {
//       title: 'User Type',
//       type: 'link',
//       active: false,
//       selected : false,
//       icon: 'las la-users',
//       path: '/management/user-type',
//     },
//      {
//       title: 'User Sub Type',
//       type: 'link',
//       active: false,
//       selected : false,
//       icon: 'las la-users-cog',
//       path: '/management/sub-user-type',
//     }
//     ,
//     {
//       title: 'Users',
//       type: 'link',
//       active: false,
//       selected : false,
//       icon: 'las la-user-cog',
//       path: '/management/user',
//     },
//      { headTitle: 'CORE MANAGEMENT' },
//      {
//       title: 'Business Management',
//       type: 'link',
//       active: false,
//       selected : false,
//       icon: 'las la-briefcase',
//       path: '/core/business-management',
//     },
//     {
//       title: 'Facility Management',
//       type: 'link',
//       active: false,
//       selected : false,
//       icon: 'las la-building',
//       path: '/core/facility-management',
//     },

//      { headTitle: 'Device Utility MANAGEMENT' },
//      {
//       title: 'Utility Management',
//       type: 'link',
//       active: false,
//       selected : false,
//       icon: 'las la-briefcase',
//       path: '/device/utility-management',
//     },
//     // {
//     //   title: 'Sub Section',
//     //   type: 'link',
//     //   active: false,
//     //   selected : false,
//     //   icon: 'box',
//     //   path: '/management/subsection',
//     // },

//     // { headTitle: 'MODULES' },
//     // {
//     //   title: 'Facility',
//     //   type: 'sub',
//     //   active: false,
//     //   selected : false,
//     //   icon: 'file-blank',
//     //   badgeClass: 'secondary',
//     //   badgeText: 'secondary',
//     //   badgeValue: 'New',
//     //   children: [

//     //     {
//     //       title: 'File Manger',
//     //       type: 'sub',
//     //       active: false,
//     //       children: [
//     //         {
//     //           path: '/pages/filemanager/filemanager',
//     //           title: 'File Manger',
//     //           type: 'link',
//     //         },
//     //       ],
//     //     },

//     //   ],
//     // },



//   ];

//   items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
// }


import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from './user/user.service';
import { User } from './user/user.type';

export interface Menu {
  headTitle?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeValue?: string;
  badgeClass?: string;
  badgeText?: string;
  active?: boolean;
  selected?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  children2?: Menu[];
  Menusub?: boolean;
  target?: boolean;
  menutype?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NavService implements OnDestroy {

  currentUser: User | null = null;
  private unsubscriber = new Subject<void>();
  private initialized = false;

  public screenWidth = new BehaviorSubject<number>(window.innerWidth);

  public search = false;
  public language = false;
  public megaMenu = false;
  public levelMenu = false;
  public megaMenuColapse = window.innerWidth < 1199;
  public collapseSidebar = window.innerWidth < 991;
  public horizontal = window.innerWidth >= 991;
  public fullScreen = false;
  active: any;

  constructor(
    private router: Router,
    private _userService: UserService
  ) {

    this.setScreenWidth(window.innerWidth);

    fromEvent(window, 'resize')
      .pipe(debounceTime(500), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {

        this.setScreenWidth(evt.target.innerWidth);

        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          this.megaMenu = false;
          this.levelMenu = false;
        }

        if (evt.target.innerWidth < 1199) {
          this.megaMenuColapse = true;
        }
      });

    if (window.innerWidth < 991) {
      this.router.events.subscribe(() => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }

    this.init();
  }

  // ⭐ FIXED INIT
  async init(): Promise<void> {

    this.initialized = true;
    this.items.next([]);

    this.currentUser = await this._userService.get();   // ⭐ IMPORTANT FIX

    if (!this.currentUser) {
      this.resetMenu();
      return;
    }

    this.setMenuByLevel(this.currentUser.userTypeLevel);
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [

    { headTitle: 'MAIN' },
    {
      title: 'Live consumptions',
      icon: 'las la-chart-bar',
      type: 'link',
      path: '/live-consumption',
    },
    {
      title: 'Dashboards',
      icon: 'las la-chart-bar',
      type: 'link',
      path: '/dashboard',
    },
     {
  title: 'System Dashboards',
  icon: 'las la-chart-bar',
  type: 'link',
  path: '/dashboard/system-dashboard',
},


    { headTitle: 'MANAGEMENT' },
    {
      title: 'User Type',
      icon: 'las la-users',
      type: 'link',
      path: '/management/user-type',
    },
    {
      title: 'User Sub Type',
      icon: 'las la-users-cog',
      type: 'link',
      path: '/management/sub-user-type',
    },
    {
      title: 'Users',
      icon: 'las la-user-cog',
      type: 'link',
      path: '/management/user',
    },

    { headTitle: 'CORE MANAGEMENT' },
    {
      title: 'Business Management',
      icon: 'ri-briefcase-4-line',
      type: 'link',
      path: '/core/business-management',
    },
    {
      title: 'Facility Management',
      icon: 'ri-community-line',
      type: 'link',
      path: '/core/facility-management',
    },
    {
      title: 'Tenant Management',
      icon: 'las la-users',
      type: 'link',
      path: '/core/tenant-management',
    },
    {
      title: 'Office Tenant Assignment',
      icon: 'ri-door-open-line',
      type: 'link',
      path: '/core/tenant-office-assignment',
    },
    
    {
      title: 'Agreement Management',
      icon: 'las la-file-contract',
      type: 'link',
      path: '/core/agreement-management',
    },
//      {
//       title: 'Device Management',
//       icon: 'las la-microchip',
//       type: 'link',
//       path: '/core/device-management',
//     },
// {
//       title: 'Sensor Management',
//       icon: 'las la-briefcase',
//       type: 'link',
//       path: '/core/sensor-management',
//     },
    { headTitle: 'DEVICE UTILITY MANAGEMENT' },
    {
      title: 'Utility Management',
      icon: 'ri-plug-line',
      type: 'link',
      path: '/device/utility-management',
    },
    
  ];

  private MENU_ACCESS: Record<number, string[]> = {

    0: [
      'User Type',
      'User Sub Type',
      'Users',
      'Utility Management',
      'Business Management',
      'System Dashboards'
    ],

    1: [
      'User Sub Type',
      'Users',
      'Device Management',
      'Facility Management',
      'Dashboards',
      'Office Tenant Assignment',
      'Sensor Management',
      'Agreement Management',
      'Tenant Management',
      'Live consumptions'
    ],

    2: [
      'Dashboards',
      'Live consumptions'
    ]
  };

  setMenuByLevel(level: number): void {

    const allowed = this.MENU_ACCESS[level] || [];
    const result: Menu[] = [];

    let header: Menu | null = null;
    let bucket: Menu[] = [];

    for (const item of this.MENUITEMS) {

      if (item.headTitle) {

        if (header && bucket.length) {
          result.push(header, ...bucket);
        }

        header = item;
        bucket = [];
        continue;
      }

      if (allowed.includes(item.title ?? '')) {
        bucket.push(item);
      }
    }

    if (header && bucket.length) {
      result.push(header, ...bucket);
    }

    this.items.next(result);
  }

  resetMenu(): void {
    this.initialized = false;
    this.currentUser = null;
    this.items.next([]);
  }

  items = new BehaviorSubject<Menu[]>([]);
}

