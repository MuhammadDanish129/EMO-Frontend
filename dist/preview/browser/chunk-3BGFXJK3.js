import {
  UserService,
  WebCryptoService
} from "./chunk-H6LTRMYQ.js";
import {
  Router
} from "./chunk-J4QH6UQS.js";
import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  BehaviorSubject,
  HttpClient,
  Subject,
  catchError,
  debounceTime,
  from,
  fromEvent,
  map,
  of,
  switchMap,
  takeUntil,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-R5AMMNLH.js";
import {
  __async
} from "./chunk-6EVL5ZQD.js";

// src/app/shared/services/nav.service.ts
var NavService = class _NavService {
  constructor(router, _userService) {
    this.router = router;
    this._userService = _userService;
    this.currentUser = null;
    this.unsubscriber = new Subject();
    this.initialized = false;
    this.screenWidth = new BehaviorSubject(window.innerWidth);
    this.search = false;
    this.language = false;
    this.megaMenu = false;
    this.levelMenu = false;
    this.megaMenuColapse = window.innerWidth < 1199;
    this.collapseSidebar = window.innerWidth < 991;
    this.horizontal = window.innerWidth >= 991;
    this.fullScreen = false;
    this.MENUITEMS = [
      { headTitle: "MAIN" },
      {
        title: "Live consumptions",
        icon: "las la-chart-bar",
        type: "link",
        path: "/live-consumption"
      },
      {
        title: "Dashboards",
        icon: "las la-chart-bar",
        type: "link",
        path: "/dashboard"
      },
      { headTitle: "MANAGEMENT" },
      {
        title: "User Type",
        icon: "las la-users",
        type: "link",
        path: "/management/user-type"
      },
      {
        title: "User Sub Type",
        icon: "las la-users-cog",
        type: "link",
        path: "/management/sub-user-type"
      },
      {
        title: "Users",
        icon: "las la-user-cog",
        type: "link",
        path: "/management/user"
      },
      { headTitle: "CORE MANAGEMENT" },
      {
        title: "Business Management",
        icon: "las la-briefcase",
        type: "link",
        path: "/core/business-management"
      },
      {
        title: "Facility Management",
        icon: "las la-building",
        type: "link",
        path: "/core/facility-management"
      },
      {
        title: "Tenant Management",
        icon: "las la-users",
        type: "link",
        path: "/core/tenant-management"
      },
      {
        title: "Office Tenant Assignment",
        icon: "las la-briefcase",
        type: "link",
        path: "/core/tenant-office-assignment"
      },
      {
        title: "Agreement Management",
        icon: "las la-file-contract",
        type: "link",
        path: "/core/agreement-management"
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
      { headTitle: "DEVICE UTILITY MANAGEMENT" },
      {
        title: "Utility Management",
        icon: "las la-briefcase",
        type: "link",
        path: "/device/utility-management"
      }
    ];
    this.MENU_ACCESS = {
      0: [
        "User Type",
        "User Sub Type",
        "Users",
        "Utility Management",
        "Business Management"
      ],
      1: [
        "User Sub Type",
        "Users",
        "Device Management",
        "Facility Management",
        "Dashboards",
        "Office Tenant Assignment",
        "Sensor Management",
        "Agreement Management",
        "Tenant Management",
        "Live consumptions"
      ],
      2: [
        "Dashboards",
        "Live consumptions"
      ]
    };
    this.items = new BehaviorSubject([]);
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, "resize").pipe(debounceTime(500), takeUntil(this.unsubscriber)).subscribe((evt) => {
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
  init() {
    return __async(this, null, function* () {
      this.initialized = true;
      this.items.next([]);
      this.currentUser = yield this._userService.get();
      if (!this.currentUser) {
        this.resetMenu();
        return;
      }
      this.setMenuByLevel(this.currentUser.userTypeLevel);
    });
  }
  ngOnDestroy() {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
  setScreenWidth(width) {
    this.screenWidth.next(width);
  }
  setMenuByLevel(level) {
    const allowed = this.MENU_ACCESS[level] || [];
    const result = [];
    let header = null;
    let bucket = [];
    for (const item of this.MENUITEMS) {
      if (item.headTitle) {
        if (header && bucket.length) {
          result.push(header, ...bucket);
        }
        header = item;
        bucket = [];
        continue;
      }
      if (allowed.includes(item.title ?? "")) {
        bucket.push(item);
      }
    }
    if (header && bucket.length) {
      result.push(header, ...bucket);
    }
    this.items.next(result);
  }
  resetMenu() {
    this.initialized = false;
    this.currentUser = null;
    this.items.next([]);
  }
  static {
    this.\u0275fac = function NavService_Factory(t) {
      return new (t || _NavService)(\u0275\u0275inject(Router), \u0275\u0275inject(UserService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NavService, factory: _NavService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(http, router, cryptoService, navService) {
    this.http = http;
    this.router = router;
    this.cryptoService = cryptoService;
    this.navService = navService;
    this.baseUrl = environment.baseUrl;
    this.authUrl = this.baseUrl + "/auth";
    this.sessionKey = "auth_user";
  }
  //   login(username: string, password: string): Observable<boolean> {
  //   return this.http
  //     .post<any>(this.authUrl, { username, password })
  //     .pipe(
  //       switchMap((response) => {
  //         const securePayload = {
  //           userId: response.data.userId,
  //           name: response.data.name,
  //           username: response.data.username,
  //           userToken: response.data.userToken,
  //           fkSubUserType: response.data.fkSubUserType,
  //           subUserTypeLevel: response.data.subUserTypeLevel,
  //           subUserTypeName: response.data.subUserTypeName,
  //           fkUserType: response.data.fkUserType,
  //           fkGender: response.data.fkGender,
  //           genderName: response.data.genderName,
  //           isActive: response.data.isActive,
  //           fkBusiness: response.data.fkBusiness,
  //           businessName:response.data.businessName,
  //           userTypeLevel: response.data.userTypeLevel,
  //           fkHandler:response.data.fkHandler,
  //           handlerName:response.data.handlerName
  //         };
  //         // store avatar separately (NOT encrypted)
  //         if (response.data.imageBase64) {
  //           localStorage.setItem(
  //             'userAvatar',
  //             response.data.imageBase64
  //           );
  //         }
  //         return from(this.cryptoService.encrypt(securePayload)).pipe(
  //         tap((encryptedData) => {
  //   this.accessToken = response.data.userToken;
  //   localStorage.setItem(this.sessionKey, encryptedData);
  //   setTimeout(() => {
  //     this.navService.init();   // ⭐ FORCE NAV REFRESH
  //   }, 50);
  // }),
  //           map(() => true)
  //         );
  //       }),
  //       catchError((err) => {
  //         console.error('Login failed', err);
  //         return of(false);
  //       })
  //     );
  // }
  login(username, password) {
    return this.http.post(this.authUrl, { username, password }).pipe(switchMap((response) => {
      if (!response?.success) {
        return of(response);
      }
      const securePayload = {
        userId: response.data.userId,
        name: response.data.name,
        username: response.data.username,
        userToken: response.data.userToken,
        fkSubUserType: response.data.fkSubUserType,
        subUserTypeLevel: response.data.subUserTypeLevel,
        subUserTypeName: response.data.subUserTypeName,
        fkUserType: response.data.fkUserType,
        fkGender: response.data.fkGender,
        genderName: response.data.genderName,
        isActive: response.data.isActive,
        fkBusiness: response.data.fkBusiness,
        businessName: response.data.businessName,
        userTypeLevel: response.data.userTypeLevel,
        fkHandler: response.data.fkHandler,
        handlerName: response.data.handlerName
      };
      if (response.data.imageBase64) {
        localStorage.setItem("userAvatar", response.data.imageBase64);
      }
      return from(this.cryptoService.encrypt(securePayload)).pipe(
        tap((encryptedData) => {
          this.accessToken = response.data.userToken;
          localStorage.setItem(this.sessionKey, encryptedData);
          setTimeout(() => {
            this.navService.init();
          }, 50);
        }),
        map(() => response)
        // ✅ return full backend response
      );
    }), catchError((err) => {
      console.error("Login failed", err);
      return of({
        success: false,
        remarks: err?.error?.remarks || "Server error occurred"
      });
    }));
  }
  signOutLocal() {
    localStorage.removeItem(this.sessionKey);
    localStorage.removeItem("otherInfo");
    this.router.navigate(["/sign-in"]);
    this.navService.resetMenu();
    return of(true);
  }
  logout() {
    localStorage.removeItem(this.sessionKey);
    this.router.navigate(["/sign-in"]);
  }
  isAuthenticated() {
    return !!localStorage.getItem(this.sessionKey);
  }
  getUser() {
    return __async(this, null, function* () {
      const encrypted = localStorage.getItem(this.sessionKey);
      if (!encrypted)
        return null;
      try {
        return yield this.cryptoService.decrypt(encrypted);
      } catch (e) {
        console.error("Decryption failed", e);
        return null;
      }
    });
  }
  get accessToken() {
    return localStorage.getItem("otherInfo") ?? "";
  }
  set accessToken(token) {
    localStorage.setItem("otherInfo", token);
  }
  check() {
    return of(this.isAuthenticated());
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router), \u0275\u0275inject(WebCryptoService), \u0275\u0275inject(NavService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  NavService,
  AuthService
};
//# sourceMappingURL=chunk-3BGFXJK3.js.map
