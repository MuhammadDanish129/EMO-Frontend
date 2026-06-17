import {
  AuthService,
  NavService
} from "./chunk-3BGFXJK3.js";
import {
  UserService
} from "./chunk-H6LTRMYQ.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-J4QH6UQS.js";
import {
  ApplicationRef,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentFactoryResolver$1,
  DOCUMENT,
  Directive,
  DomSanitizer,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Injector,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  ViewportScroller,
  fromEvent,
  isPlatformBrowser,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-R5AMMNLH.js";
import {
  __async,
  __commonJS,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-6EVL5ZQD.js";

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    "use strict";
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    "use strict";
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    "use strict";
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/now.js
var require_now = __commonJS({
  "node_modules/lodash/now.js"(exports, module) {
    "use strict";
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module.exports = now;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    "use strict";
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module) {
    "use strict";
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    "use strict";
    var root = require_root();
    var Symbol = root.Symbol;
    module.exports = Symbol;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    "use strict";
    var Symbol = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    "use strict";
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    "use strict";
    var Symbol = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    "use strict";
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    "use strict";
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module) {
    "use strict";
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "node_modules/lodash/debounce.js"(exports, module) {
    "use strict";
    var isObject = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce2(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce2;
  }
});

// node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "node_modules/lodash/throttle.js"(exports, module) {
    "use strict";
    var debounce2 = require_debounce();
    var isObject = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";
    function throttle2(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce2(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module.exports = throttle2;
  }
});

// src/app/shared/directives/fullscreen.directive.ts
var FullscreenDirective = class _FullscreenDirective {
  constructor(document2, elementRef) {
    this.document = document2;
    this.elementRef = elementRef;
    this.fullScreen = false;
  }
  ngOnInit() {
    this.elem = this.elementRef.nativeElement.ownerDocument.documentElement;
  }
  onClick() {
    this.fullScreen = !this.fullScreen;
    if (this.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        this.elem.msRequestFullscreen();
      }
    } else {
      if (!this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        this.document.msExitFullscreen();
      }
    }
  }
  static {
    this.\u0275fac = function FullscreenDirective_Factory(t) {
      return new (t || _FullscreenDirective)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FullscreenDirective, selectors: [["", "appFullscreen", ""]], hostBindings: function FullscreenDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function FullscreenDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    } });
  }
};

// src/app/shared/components/header/header.component.ts
var _c0 = (a0) => ({ "!rounded-full": a0, "font-medium": true, "dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10": true });
var HeaderComponent = class _HeaderComponent {
  constructor(navServices, _authService, _userService, router, elementRef, renderer) {
    this.navServices = navServices;
    this._authService = _authService;
    this._userService = _userService;
    this.router = router;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.cartItemCount = 5;
    this.notificationCount = 5;
    this.currentUser = null;
    this.avatar = "";
    this.isCollapsed = true;
    this.isFullScreen = false;
    this.fullScreenIconVisible = true;
    this.exitFullScreenIconVisible = false;
    this.SearchResultEmpty = false;
    this.isCartEmpty = false;
    this.isNotifyEmpty = false;
    this.navServices.items.subscribe((menuItems) => {
      this.items = menuItems;
    });
  }
  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
    this.fullScreenIconVisible = !this.isFullScreen;
    this.exitFullScreenIconVisible = this.isFullScreen;
  }
  singOut() {
    this._authService.signOutLocal();
    this.router.navigate(["/auth/login"]);
  }
  themeChange(type, type1, type2) {
    this.elementRef.nativeElement.ownerDocument.documentElement?.setAttribute("class", type);
    this.elementRef.nativeElement.ownerDocument.documentElement?.setAttribute("style", "");
    localStorage.removeItem("ynex-background-mode-body");
    localStorage.removeItem("ynex-background-mode-dark");
    localStorage.setItem("ynex-theme-mode", type);
    this.elementRef.nativeElement.ownerDocument.documentElement?.setAttribute("data-header-styles", type1);
    localStorage.setItem("ynex-header-mode", type1);
    this.elementRef.nativeElement.ownerDocument.documentElement?.setAttribute("data-menu-styles", type2);
    localStorage.setItem("ynex-menu-mode", type2);
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (type == "dark") {
      const darkbtn = document.querySelector("#switcher-dark-theme");
      darkbtn.checked = true;
      this.renderer.setAttribute(htmlElement, "data-menu-style", "dark");
    } else {
      const lightbtn = document.querySelector("#switcher-light-theme");
      lightbtn.checked = true;
      this.renderer.setAttribute(htmlElement, "data-menu-style", "light");
    }
  }
  toggleSidebar() {
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (localStorage.getItem("data-toggled") == "true") {
      document.querySelector("html")?.getAttribute("data-toggled") == "icon-overlay-close";
    } else if (html?.getAttribute("data-vertical-style") == "overlay") {
      document.querySelector("html")?.getAttribute("data-toggled") != null ? document.querySelector("html")?.removeAttribute("data-toggled") : document.querySelector("html")?.setAttribute("data-toggled", "icon-overlay-close");
    } else if (localStorage.getItem("ynex-sidemenu-styles") == "closed") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "close-menu-close" ? "" : "close-menu-close");
    } else if (localStorage.getItem("ynex-sidemenu-styles") == "icontext") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "icon-text-close" ? "" : "icon-text-close");
    } else if (localStorage.getItem("ynex-sidemenu-styles") == "detached") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "detached-close" ? "" : "detached-close");
    } else if (localStorage.getItem("ynex-sidemenu-styles") == "doublemenu") {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "double-menu-close" ? "double-menu-open" : "double-menu-close");
    }
    if (window.innerWidth <= 992) {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "open" ? "close" : "open");
      if (html?.getAttribute("data-toggled") == "open") {
        document.querySelector("#responsive-overlay")?.classList.add("active");
      }
    }
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.currentUser = yield this._userService.user$;
      this.avatar = this._userService.avatar$;
    });
  }
  Search(searchText) {
    if (!searchText)
      return this.menuItems = [];
    const items = [];
    searchText = searchText.toLowerCase().trim();
    this.items.filter((menuItems) => {
      if (!menuItems?.title)
        return false;
      if (menuItems.type === "link" && menuItems.title.toLowerCase().includes(searchText)) {
        if (menuItems.title.toLowerCase().startsWith(searchText)) {
          items.push(menuItems);
        }
      }
      if (!menuItems.children)
        return false;
      menuItems.children.filter((subItems) => {
        if (!subItems?.title)
          return false;
        if (subItems.type === "link" && subItems.title.toLowerCase().includes(searchText)) {
          if (subItems.title.toLowerCase().startsWith(searchText)) {
            items.push(subItems);
          }
        }
        if (!subItems.children)
          return false;
        subItems.children.filter((subSubItems) => {
          if (subSubItems.title?.toLowerCase().includes(searchText)) {
            if (subSubItems.title.toLowerCase().startsWith(searchText)) {
              items.push(subSubItems);
            }
          }
        });
        return true;
      });
      return this.menuItems = items;
    });
    if (!items.length) {
      this.SearchResultEmpty = true;
    } else {
      this.SearchResultEmpty = false;
    }
    return true;
  }
  //  Used to clear previous search result
  clearSearch() {
    this.text = "";
    this.menuItems = [];
    this.SearchResultEmpty = false;
    return this.text, this.menuItems;
  }
  removeRow(rowId) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
    this.cartItemCount--;
    this.isCartEmpty = this.cartItemCount === 0;
  }
  removeTags(rowId) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
  }
  removeNotify(rowId) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
    this.notificationCount--;
    this.isNotifyEmpty = this.notificationCount === 0;
  }
  handleCardClick(event) {
    event.stopPropagation();
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(t) {
      return new (t || _HeaderComponent)(\u0275\u0275directiveInject(NavService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 40, vars: 8, consts: [[1, "app-header"], ["aria-label", "Global", 1, "main-header", "!h-[3.75rem]"], [1, "main-header-container", "ps-[0.725rem]", "pe-[1rem]"], [1, "header-content-left"], [1, "header-element"], [1, "horizontal-logo"], ["routerLink", "/dashboard/crm", 1, "header-logo"], ["src", "./assets/images/brand-logos/desktop-logo.png", "alt", "logo", 1, "desktop-logo"], ["src", "./assets/images/brand-logos/toggle-logo.png", "alt", "logo", 1, "toggle-logo"], ["src", "./assets/images/brand-logos/desktop-dark.png", "alt", "logo", 1, "desktop-dark"], ["src", "./assets/images/brand-logos/toggle-dark.png", "alt", "logo", 1, "toggle-dark"], ["src", "./assets/images/brand-logos/desktop-white.png", "alt", "logo", 1, "desktop-white"], ["src", "./assets/images/brand-logos/toggle-white.png", "alt", "logo", 1, "toggle-white"], [1, "header-element", "md:px-[0.325rem]", "!items-center"], ["aria-label", "Hide Sidebar", "href", "javascript:void(0);", 1, "sidemenu-toggle", "animated-arrow", "hor-toggle", "horizontal-navtoggle", "inline-flex", "items-center", 3, "click"], [1, "header-content-right"], [1, "header-element", "header-theme-mode", "hidden", "!items-center", "sm:block", "!py-[1rem]", "md:!px-[0.65rem]", "px-2"], ["aria-label", "anchor", "href", "javascript:void(0);", "data-hs-theme-click-value", "dark", 1, "hs-dark-mode-active:hidden", "flex", "hs-dark-mode", "group", "flex-shrink-0", "justify-center", "items-center", "gap-2", "rounded-full", "font-medium", "transition-all", "text-xs", "dark:bg-bgdark", "dark:hover:bg-black/20", "dark:text-[#8c9097]", "dark:text-white/50", "dark:hover:text-white", "dark:focus:ring-white/10", "dark:focus:ring-offset-white/10", 3, "click"], [1, "bx", "bx-moon", "header-link-icon"], ["aria-label", "anchor", "href", "javascript:void(0);", "data-hs-theme-click-value", "light", 1, "hs-dark-mode-active:flex", "hidden", "hs-dark-mode", "group", "flex-shrink-0", "justify-center", "items-center", "gap-2", "rounded-full", "font-medium", "text-defaulttextcolor", "transition-all", "text-xs", "dark:bg-bodybg", "dark:bg-bgdark", "dark:hover:bg-black/20", "dark:text-[#8c9097]", "dark:text-white/50", "dark:hover:text-white", "dark:focus:ring-white/10", "dark:focus:ring-offset-white/10", 3, "click"], [1, "bx", "bx-sun", "header-link-icon"], [1, "header-element", "header-fullscreen", "py-[1rem]", "md:px-[0.65rem]", "px-2"], ["aria-label", "anchor", "appFullscreen", "", 1, "inline-flex", "flex-shrink-0", "justify-center", "items-center", "gap-2", 3, "click", "ngClass"], [1, "bx", "bx-fullscreen", "full-screen-open", "header-link-icon", 3, "hidden"], [1, "bx", "bx-exit-fullscreen", "full-screen-close", "header-link-icon", 3, "hidden"], [1, "header-element", "md:!px-[0.65rem]", "px-2", "hs-dropdown", "!items-center", "ti-dropdown", "[--placement:bottom-left]", "hover:cursor-pointer"], ["id", "dropdown-profile", "type", "button", 1, "hs-dropdown-toggle", "ti-dropdown-toggle", "!gap-2", "!p-0", "flex-shrink-0", "sm:me-2", "me-0", "!rounded-full", "overflow-hidden", "!border-0", "!shadow-none", "text-xs", "align-middle"], ["alt", "Profile Avatar", 1, "w-10", "h-10", "rounded-full", "object-cover", "block", "border", "border-[rgb(var(--primary))]", 3, "src"], [1, "md:block", "hidden", "dropdown-profile"], [1, "font-semibold", "mb-0", "leading-none", "text-[#323946]", "text-[0.813rem]"], [1, "opacity-[0.7]", "font-normal", "text-[rgb(var(--primary))]", "block", "text-[0.6875rem]"], ["aria-labelledby", "dropdown-profile", 1, "hs-dropdown-menu", "ti-dropdown-menu", "!-mt-3", "border-0", "w-[11rem]", "!p-0", "border-defaultborder", "hidden", "main-header-dropdown", "pt-0", "overflow-hidden", "header-profile-dropdown", "dropdown-menu-end"], [1, "text-defaulttextcolor", "font-medium", "dark:text-[#8c9097]", "dark:text-white/50"], ["href", "javascript:void(0);", 1, "w-full", "ti-dropdown-item", "!text-[0.8125rem]", "!p-[0.65rem]", "!gap-x-0", "!inline-flex", 3, "click"], [1, "ti", "ti-logout", "text-[1.125rem]", "me-2", "opacity-[0.7]"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
        \u0275\u0275element(7, "img", 7)(8, "img", 8)(9, "img", 9)(10, "img", 10)(11, "img", 11)(12, "img", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 13)(14, "a", 14);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_14_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275element(15, "span");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 15)(17, "div", 16)(18, "a", 17);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_18_listener() {
          return ctx.themeChange("dark", "dark", "dark");
        });
        \u0275\u0275element(19, "i", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "a", 19);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_20_listener() {
          return ctx.themeChange("light", "light", "dark");
        });
        \u0275\u0275element(21, "i", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 21)(23, "a", 22);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_23_listener() {
          return ctx.toggleFullScreen();
        });
        \u0275\u0275element(24, "i", 23)(25, "i", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 25)(27, "button", 26);
        \u0275\u0275element(28, "img", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 28)(30, "p", 29);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 30);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 31)(35, "ul", 32)(36, "li")(37, "a", 33);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_37_listener() {
          return ctx.singOut();
        });
        \u0275\u0275element(38, "i", 34);
        \u0275\u0275text(39, "Log Out");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c0, !ctx.isFullScreen));
        \u0275\u0275advance();
        \u0275\u0275property("hidden", !ctx.fullScreenIconVisible);
        \u0275\u0275advance();
        \u0275\u0275property("hidden", !ctx.exitFullScreenIconVisible);
        \u0275\u0275advance(3);
        \u0275\u0275property("src", ctx.avatar, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.subUserTypeName);
      }
    }, dependencies: [NgClass, RouterLink, FullscreenDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\shared\\components\\header\\header.component.ts", lineNumber: 20 });
})();

// node_modules/simplebar-core/dist/index.mjs
var import_debounce = __toESM(require_debounce(), 1);
var import_throttle = __toESM(require_throttle(), 1);
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function getElementWindow$1(element) {
  if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
    return window;
  }
  return element.ownerDocument.defaultView;
}
function getElementDocument$1(element) {
  if (!element || !element.ownerDocument) {
    return document;
  }
  return element.ownerDocument;
}
var getOptions$1 = function(obj) {
  var initialObj = {};
  var options = Array.prototype.reduce.call(obj, function(acc, attribute) {
    var option = attribute.name.match(/data-simplebar-(.+)/);
    if (option) {
      var key = option[1].replace(/\W+(.)/g, function(_, chr) {
        return chr.toUpperCase();
      });
      switch (attribute.value) {
        case "true":
          acc[key] = true;
          break;
        case "false":
          acc[key] = false;
          break;
        case void 0:
          acc[key] = true;
          break;
        default:
          acc[key] = attribute.value;
      }
    }
    return acc;
  }, initialObj);
  return options;
};
function addClasses$1(el, classes) {
  var _a;
  if (!el)
    return;
  (_a = el.classList).add.apply(_a, classes.split(" "));
}
function removeClasses$1(el, classes) {
  if (!el)
    return;
  classes.split(" ").forEach(function(className) {
    el.classList.remove(className);
  });
}
function classNamesToQuery$1(classNames) {
  return ".".concat(classNames.split(" ").join("."));
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var helpers = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  addClasses: addClasses$1,
  canUseDOM,
  classNamesToQuery: classNamesToQuery$1,
  getElementDocument: getElementDocument$1,
  getElementWindow: getElementWindow$1,
  getOptions: getOptions$1,
  removeClasses: removeClasses$1
});
var cachedScrollbarWidth = null;
var cachedDevicePixelRatio = null;
if (canUseDOM) {
  window.addEventListener("resize", function() {
    if (cachedDevicePixelRatio !== window.devicePixelRatio) {
      cachedDevicePixelRatio = window.devicePixelRatio;
      cachedScrollbarWidth = null;
    }
  });
}
function scrollbarWidth() {
  if (cachedScrollbarWidth === null) {
    if (typeof document === "undefined") {
      cachedScrollbarWidth = 0;
      return cachedScrollbarWidth;
    }
    var body = document.body;
    var box = document.createElement("div");
    box.classList.add("simplebar-hide-scrollbar");
    body.appendChild(box);
    var width = box.getBoundingClientRect().right;
    body.removeChild(box);
    cachedScrollbarWidth = width;
  }
  return cachedScrollbarWidth;
}
var getElementWindow = getElementWindow$1;
var getElementDocument = getElementDocument$1;
var getOptions = getOptions$1;
var addClasses = addClasses$1;
var removeClasses = removeClasses$1;
var classNamesToQuery = classNamesToQuery$1;
var SimpleBarCore = (
  /** @class */
  function() {
    function SimpleBarCore2(element, options) {
      if (options === void 0) {
        options = {};
      }
      var _this = this;
      this.removePreventClickId = null;
      this.minScrollbarWidth = 20;
      this.stopScrollDelay = 175;
      this.isScrolling = false;
      this.isMouseEntering = false;
      this.isDragging = false;
      this.scrollXTicking = false;
      this.scrollYTicking = false;
      this.wrapperEl = null;
      this.contentWrapperEl = null;
      this.contentEl = null;
      this.offsetEl = null;
      this.maskEl = null;
      this.placeholderEl = null;
      this.heightAutoObserverWrapperEl = null;
      this.heightAutoObserverEl = null;
      this.rtlHelpers = null;
      this.scrollbarWidth = 0;
      this.resizeObserver = null;
      this.mutationObserver = null;
      this.elStyles = null;
      this.isRtl = null;
      this.mouseX = 0;
      this.mouseY = 0;
      this.onMouseMove = function() {
      };
      this.onWindowResize = function() {
      };
      this.onStopScrolling = function() {
      };
      this.onMouseEntered = function() {
      };
      this.onScroll = function() {
        var elWindow = getElementWindow(_this.el);
        if (!_this.scrollXTicking) {
          elWindow.requestAnimationFrame(_this.scrollX);
          _this.scrollXTicking = true;
        }
        if (!_this.scrollYTicking) {
          elWindow.requestAnimationFrame(_this.scrollY);
          _this.scrollYTicking = true;
        }
        if (!_this.isScrolling) {
          _this.isScrolling = true;
          addClasses(_this.el, _this.classNames.scrolling);
        }
        _this.showScrollbar("x");
        _this.showScrollbar("y");
        _this.onStopScrolling();
      };
      this.scrollX = function() {
        if (_this.axis.x.isOverflowing) {
          _this.positionScrollbar("x");
        }
        _this.scrollXTicking = false;
      };
      this.scrollY = function() {
        if (_this.axis.y.isOverflowing) {
          _this.positionScrollbar("y");
        }
        _this.scrollYTicking = false;
      };
      this._onStopScrolling = function() {
        removeClasses(_this.el, _this.classNames.scrolling);
        if (_this.options.autoHide) {
          _this.hideScrollbar("x");
          _this.hideScrollbar("y");
        }
        _this.isScrolling = false;
      };
      this.onMouseEnter = function() {
        if (!_this.isMouseEntering) {
          addClasses(_this.el, _this.classNames.mouseEntered);
          _this.showScrollbar("x");
          _this.showScrollbar("y");
          _this.isMouseEntering = true;
        }
        _this.onMouseEntered();
      };
      this._onMouseEntered = function() {
        removeClasses(_this.el, _this.classNames.mouseEntered);
        if (_this.options.autoHide) {
          _this.hideScrollbar("x");
          _this.hideScrollbar("y");
        }
        _this.isMouseEntering = false;
      };
      this._onMouseMove = function(e) {
        _this.mouseX = e.clientX;
        _this.mouseY = e.clientY;
        if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
          _this.onMouseMoveForAxis("x");
        }
        if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
          _this.onMouseMoveForAxis("y");
        }
      };
      this.onMouseLeave = function() {
        _this.onMouseMove.cancel();
        if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
          _this.onMouseLeaveForAxis("x");
        }
        if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
          _this.onMouseLeaveForAxis("y");
        }
        _this.mouseX = -1;
        _this.mouseY = -1;
      };
      this._onWindowResize = function() {
        _this.scrollbarWidth = _this.getScrollbarWidth();
        _this.hideNativeScrollbar();
      };
      this.onPointerEvent = function(e) {
        if (!_this.axis.x.track.el || !_this.axis.y.track.el || !_this.axis.x.scrollbar.el || !_this.axis.y.scrollbar.el)
          return;
        var isWithinTrackXBounds, isWithinTrackYBounds;
        _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
        _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
        if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
          isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
        }
        if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
          isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
        }
        if (isWithinTrackXBounds || isWithinTrackYBounds) {
          e.stopPropagation();
          if (e.type === "pointerdown" && e.pointerType !== "touch") {
            if (isWithinTrackXBounds) {
              _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();
              if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
                _this.onDragStart(e, "x");
              } else {
                _this.onTrackClick(e, "x");
              }
            }
            if (isWithinTrackYBounds) {
              _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();
              if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
                _this.onDragStart(e, "y");
              } else {
                _this.onTrackClick(e, "y");
              }
            }
          }
        }
      };
      this.drag = function(e) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (!_this.draggedAxis || !_this.contentWrapperEl)
          return;
        var eventOffset;
        var track = _this.axis[_this.draggedAxis].track;
        var trackSize = (_b = (_a = track.rect) === null || _a === void 0 ? void 0 : _a[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _b !== void 0 ? _b : 0;
        var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
        var contentSize = (_d = (_c = _this.contentWrapperEl) === null || _c === void 0 ? void 0 : _c[_this.axis[_this.draggedAxis].scrollSizeAttr]) !== null && _d !== void 0 ? _d : 0;
        var hostSize = parseInt((_f = (_e = _this.elStyles) === null || _e === void 0 ? void 0 : _e[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _f !== void 0 ? _f : "0px", 10);
        e.preventDefault();
        e.stopPropagation();
        if (_this.draggedAxis === "y") {
          eventOffset = e.pageY;
        } else {
          eventOffset = e.pageX;
        }
        var dragPos = eventOffset - ((_h = (_g = track.rect) === null || _g === void 0 ? void 0 : _g[_this.axis[_this.draggedAxis].offsetAttr]) !== null && _h !== void 0 ? _h : 0) - _this.axis[_this.draggedAxis].dragOffset;
        dragPos = _this.draggedAxis === "x" && _this.isRtl ? ((_k = (_j = track.rect) === null || _j === void 0 ? void 0 : _j[_this.axis[_this.draggedAxis].sizeAttr]) !== null && _k !== void 0 ? _k : 0) - scrollbar.size - dragPos : dragPos;
        var dragPerc = dragPos / (trackSize - scrollbar.size);
        var scrollPos = dragPerc * (contentSize - hostSize);
        if (_this.draggedAxis === "x" && _this.isRtl) {
          scrollPos = ((_l = SimpleBarCore2.getRtlHelpers()) === null || _l === void 0 ? void 0 : _l.isScrollingToNegative) ? -scrollPos : scrollPos;
        }
        _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
      };
      this.onEndDrag = function(e) {
        _this.isDragging = false;
        var elDocument = getElementDocument(_this.el);
        var elWindow = getElementWindow(_this.el);
        e.preventDefault();
        e.stopPropagation();
        removeClasses(_this.el, _this.classNames.dragging);
        _this.onStopScrolling();
        elDocument.removeEventListener("mousemove", _this.drag, true);
        elDocument.removeEventListener("mouseup", _this.onEndDrag, true);
        _this.removePreventClickId = elWindow.setTimeout(function() {
          elDocument.removeEventListener("click", _this.preventClick, true);
          elDocument.removeEventListener("dblclick", _this.preventClick, true);
          _this.removePreventClickId = null;
        });
      };
      this.preventClick = function(e) {
        e.preventDefault();
        e.stopPropagation();
      };
      this.el = element;
      this.options = __assign(__assign({}, SimpleBarCore2.defaultOptions), options);
      this.classNames = __assign(__assign({}, SimpleBarCore2.defaultOptions.classNames), options.classNames);
      this.axis = {
        x: {
          scrollOffsetAttr: "scrollLeft",
          sizeAttr: "width",
          scrollSizeAttr: "scrollWidth",
          offsetSizeAttr: "offsetWidth",
          offsetAttr: "left",
          overflowAttr: "overflowX",
          dragOffset: 0,
          isOverflowing: true,
          forceVisible: false,
          track: { size: null, el: null, rect: null, isVisible: false },
          scrollbar: { size: null, el: null, rect: null, isVisible: false }
        },
        y: {
          scrollOffsetAttr: "scrollTop",
          sizeAttr: "height",
          scrollSizeAttr: "scrollHeight",
          offsetSizeAttr: "offsetHeight",
          offsetAttr: "top",
          overflowAttr: "overflowY",
          dragOffset: 0,
          isOverflowing: true,
          forceVisible: false,
          track: { size: null, el: null, rect: null, isVisible: false },
          scrollbar: { size: null, el: null, rect: null, isVisible: false }
        }
      };
      if (typeof this.el !== "object" || !this.el.nodeName) {
        throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
      }
      this.onMouseMove = (0, import_throttle.default)(this._onMouseMove, 64);
      this.onWindowResize = (0, import_debounce.default)(this._onWindowResize, 64, { leading: true });
      this.onStopScrolling = (0, import_debounce.default)(this._onStopScrolling, this.stopScrollDelay);
      this.onMouseEntered = (0, import_debounce.default)(this._onMouseEntered, this.stopScrollDelay);
      this.init();
    }
    SimpleBarCore2.getRtlHelpers = function() {
      if (SimpleBarCore2.rtlHelpers) {
        return SimpleBarCore2.rtlHelpers;
      }
      var dummyDiv = document.createElement("div");
      dummyDiv.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
      var scrollbarDummyEl = dummyDiv.firstElementChild;
      var dummyChild = scrollbarDummyEl === null || scrollbarDummyEl === void 0 ? void 0 : scrollbarDummyEl.firstElementChild;
      if (!dummyChild)
        return null;
      document.body.appendChild(scrollbarDummyEl);
      scrollbarDummyEl.scrollLeft = 0;
      var dummyContainerOffset = SimpleBarCore2.getOffset(scrollbarDummyEl);
      var dummyChildOffset = SimpleBarCore2.getOffset(dummyChild);
      scrollbarDummyEl.scrollLeft = -999;
      var dummyChildOffsetAfterScroll = SimpleBarCore2.getOffset(dummyChild);
      document.body.removeChild(scrollbarDummyEl);
      SimpleBarCore2.rtlHelpers = {
        // determines if the scrolling is responding with negative values
        isScrollOriginAtZero: dummyContainerOffset.left !== dummyChildOffset.left,
        // determines if the origin scrollbar position is inverted or not (positioned on left or right)
        isScrollingToNegative: dummyChildOffset.left !== dummyChildOffsetAfterScroll.left
      };
      return SimpleBarCore2.rtlHelpers;
    };
    SimpleBarCore2.prototype.getScrollbarWidth = function() {
      try {
        if (this.contentWrapperEl && getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style) {
          return 0;
        } else {
          return scrollbarWidth();
        }
      } catch (e) {
        return scrollbarWidth();
      }
    };
    SimpleBarCore2.getOffset = function(el) {
      var rect = el.getBoundingClientRect();
      var elDocument = getElementDocument(el);
      var elWindow = getElementWindow(el);
      return {
        top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
        left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
      };
    };
    SimpleBarCore2.prototype.init = function() {
      if (canUseDOM) {
        this.initDOM();
        this.rtlHelpers = SimpleBarCore2.getRtlHelpers();
        this.scrollbarWidth = this.getScrollbarWidth();
        this.recalculate();
        this.initListeners();
      }
    };
    SimpleBarCore2.prototype.initDOM = function() {
      var _a, _b;
      this.wrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.wrapper));
      this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(classNamesToQuery(this.classNames.contentWrapper));
      this.contentEl = this.options.contentNode || this.el.querySelector(classNamesToQuery(this.classNames.contentEl));
      this.offsetEl = this.el.querySelector(classNamesToQuery(this.classNames.offset));
      this.maskEl = this.el.querySelector(classNamesToQuery(this.classNames.mask));
      this.placeholderEl = this.findChild(this.wrapperEl, classNamesToQuery(this.classNames.placeholder));
      this.heightAutoObserverWrapperEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverWrapperEl));
      this.heightAutoObserverEl = this.el.querySelector(classNamesToQuery(this.classNames.heightAutoObserverEl));
      this.axis.x.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.horizontal)));
      this.axis.y.track.el = this.findChild(this.el, "".concat(classNamesToQuery(this.classNames.track)).concat(classNamesToQuery(this.classNames.vertical)));
      this.axis.x.scrollbar.el = ((_a = this.axis.x.track.el) === null || _a === void 0 ? void 0 : _a.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
      this.axis.y.scrollbar.el = ((_b = this.axis.y.track.el) === null || _b === void 0 ? void 0 : _b.querySelector(classNamesToQuery(this.classNames.scrollbar))) || null;
      if (!this.options.autoHide) {
        addClasses(this.axis.x.scrollbar.el, this.classNames.visible);
        addClasses(this.axis.y.scrollbar.el, this.classNames.visible);
      }
    };
    SimpleBarCore2.prototype.initListeners = function() {
      var _this = this;
      var _a;
      var elWindow = getElementWindow(this.el);
      this.el.addEventListener("mouseenter", this.onMouseEnter);
      this.el.addEventListener("pointerdown", this.onPointerEvent, true);
      this.el.addEventListener("mousemove", this.onMouseMove);
      this.el.addEventListener("mouseleave", this.onMouseLeave);
      (_a = this.contentWrapperEl) === null || _a === void 0 ? void 0 : _a.addEventListener("scroll", this.onScroll);
      elWindow.addEventListener("resize", this.onWindowResize);
      if (!this.contentEl)
        return;
      if (window.ResizeObserver) {
        var resizeObserverStarted_1 = false;
        var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
        this.resizeObserver = new resizeObserver(function() {
          if (!resizeObserverStarted_1)
            return;
          elWindow.requestAnimationFrame(function() {
            _this.recalculate();
          });
        });
        this.resizeObserver.observe(this.el);
        this.resizeObserver.observe(this.contentEl);
        elWindow.requestAnimationFrame(function() {
          resizeObserverStarted_1 = true;
        });
      }
      this.mutationObserver = new elWindow.MutationObserver(function() {
        elWindow.requestAnimationFrame(function() {
          _this.recalculate();
        });
      });
      this.mutationObserver.observe(this.contentEl, {
        childList: true,
        subtree: true,
        characterData: true
      });
    };
    SimpleBarCore2.prototype.recalculate = function() {
      if (!this.heightAutoObserverEl || !this.contentEl || !this.contentWrapperEl || !this.wrapperEl || !this.placeholderEl)
        return;
      var elWindow = getElementWindow(this.el);
      this.elStyles = elWindow.getComputedStyle(this.el);
      this.isRtl = this.elStyles.direction === "rtl";
      var contentElOffsetWidth = this.contentEl.offsetWidth;
      var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
      var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1 || contentElOffsetWidth > 0;
      var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
      var elOverflowX = this.elStyles.overflowX;
      var elOverflowY = this.elStyles.overflowY;
      this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft);
      this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
      var contentElScrollHeight = this.contentEl.scrollHeight;
      var contentElScrollWidth = this.contentEl.scrollWidth;
      this.contentWrapperEl.style.height = isHeightAuto ? "auto" : "100%";
      this.placeholderEl.style.width = isWidthAuto ? "".concat(contentElOffsetWidth || contentElScrollWidth, "px") : "auto";
      this.placeholderEl.style.height = "".concat(contentElScrollHeight, "px");
      var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
      this.axis.x.isOverflowing = contentElOffsetWidth !== 0 && contentElScrollWidth > contentElOffsetWidth;
      this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight;
      this.axis.x.isOverflowing = elOverflowX === "hidden" ? false : this.axis.x.isOverflowing;
      this.axis.y.isOverflowing = elOverflowY === "hidden" ? false : this.axis.y.isOverflowing;
      this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === true;
      this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === true;
      this.hideNativeScrollbar();
      var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
      var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
      this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
      this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
      this.axis.x.scrollbar.size = this.getScrollbarSize("x");
      this.axis.y.scrollbar.size = this.getScrollbarSize("y");
      if (this.axis.x.scrollbar.el)
        this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px");
      if (this.axis.y.scrollbar.el)
        this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px");
      this.positionScrollbar("x");
      this.positionScrollbar("y");
      this.toggleTrackVisibility("x");
      this.toggleTrackVisibility("y");
    };
    SimpleBarCore2.prototype.getScrollbarSize = function(axis) {
      var _a, _b;
      if (axis === void 0) {
        axis = "y";
      }
      if (!this.axis[axis].isOverflowing || !this.contentEl) {
        return 0;
      }
      var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
      var trackSize = (_b = (_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) !== null && _b !== void 0 ? _b : 0;
      var scrollbarRatio = trackSize / contentSize;
      var scrollbarSize;
      scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);
      if (this.options.scrollbarMaxSize) {
        scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
      }
      return scrollbarSize;
    };
    SimpleBarCore2.prototype.positionScrollbar = function(axis) {
      var _a, _b, _c;
      if (axis === void 0) {
        axis = "y";
      }
      var scrollbar = this.axis[axis].scrollbar;
      if (!this.axis[axis].isOverflowing || !this.contentWrapperEl || !scrollbar.el || !this.elStyles) {
        return;
      }
      var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
      var trackSize = ((_a = this.axis[axis].track.el) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetSizeAttr]) || 0;
      var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
      var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
      scrollOffset = axis === "x" && this.isRtl && ((_b = SimpleBarCore2.getRtlHelpers()) === null || _b === void 0 ? void 0 : _b.isScrollOriginAtZero) ? -scrollOffset : scrollOffset;
      if (axis === "x" && this.isRtl) {
        scrollOffset = ((_c = SimpleBarCore2.getRtlHelpers()) === null || _c === void 0 ? void 0 : _c.isScrollingToNegative) ? scrollOffset : -scrollOffset;
      }
      var scrollPourcent = scrollOffset / (contentSize - hostSize);
      var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
      handleOffset = axis === "x" && this.isRtl ? -handleOffset + (trackSize - scrollbar.size) : handleOffset;
      scrollbar.el.style.transform = axis === "x" ? "translate3d(".concat(handleOffset, "px, 0, 0)") : "translate3d(0, ".concat(handleOffset, "px, 0)");
    };
    SimpleBarCore2.prototype.toggleTrackVisibility = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      var track = this.axis[axis].track.el;
      var scrollbar = this.axis[axis].scrollbar.el;
      if (!track || !scrollbar || !this.contentWrapperEl)
        return;
      if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
        track.style.visibility = "visible";
        this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "scroll";
        this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(axis));
      } else {
        track.style.visibility = "hidden";
        this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "hidden";
        this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(axis));
      }
      if (this.axis[axis].isOverflowing) {
        scrollbar.style.display = "block";
      } else {
        scrollbar.style.display = "none";
      }
    };
    SimpleBarCore2.prototype.showScrollbar = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      if (this.axis[axis].isOverflowing && !this.axis[axis].scrollbar.isVisible) {
        addClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
        this.axis[axis].scrollbar.isVisible = true;
      }
    };
    SimpleBarCore2.prototype.hideScrollbar = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      if (this.isDragging)
        return;
      if (this.axis[axis].isOverflowing && this.axis[axis].scrollbar.isVisible) {
        removeClasses(this.axis[axis].scrollbar.el, this.classNames.visible);
        this.axis[axis].scrollbar.isVisible = false;
      }
    };
    SimpleBarCore2.prototype.hideNativeScrollbar = function() {
      if (!this.offsetEl)
        return;
      this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px";
      this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px";
    };
    SimpleBarCore2.prototype.onMouseMoveForAxis = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      var currentAxis = this.axis[axis];
      if (!currentAxis.track.el || !currentAxis.scrollbar.el)
        return;
      currentAxis.track.rect = currentAxis.track.el.getBoundingClientRect();
      currentAxis.scrollbar.rect = currentAxis.scrollbar.el.getBoundingClientRect();
      if (this.isWithinBounds(currentAxis.track.rect)) {
        this.showScrollbar(axis);
        addClasses(currentAxis.track.el, this.classNames.hover);
        if (this.isWithinBounds(currentAxis.scrollbar.rect)) {
          addClasses(currentAxis.scrollbar.el, this.classNames.hover);
        } else {
          removeClasses(currentAxis.scrollbar.el, this.classNames.hover);
        }
      } else {
        removeClasses(currentAxis.track.el, this.classNames.hover);
        if (this.options.autoHide) {
          this.hideScrollbar(axis);
        }
      }
    };
    SimpleBarCore2.prototype.onMouseLeaveForAxis = function(axis) {
      if (axis === void 0) {
        axis = "y";
      }
      removeClasses(this.axis[axis].track.el, this.classNames.hover);
      removeClasses(this.axis[axis].scrollbar.el, this.classNames.hover);
      if (this.options.autoHide) {
        this.hideScrollbar(axis);
      }
    };
    SimpleBarCore2.prototype.onDragStart = function(e, axis) {
      var _a;
      if (axis === void 0) {
        axis = "y";
      }
      this.isDragging = true;
      var elDocument = getElementDocument(this.el);
      var elWindow = getElementWindow(this.el);
      var scrollbar = this.axis[axis].scrollbar;
      var eventOffset = axis === "y" ? e.pageY : e.pageX;
      this.axis[axis].dragOffset = eventOffset - (((_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) || 0);
      this.draggedAxis = axis;
      addClasses(this.el, this.classNames.dragging);
      elDocument.addEventListener("mousemove", this.drag, true);
      elDocument.addEventListener("mouseup", this.onEndDrag, true);
      if (this.removePreventClickId === null) {
        elDocument.addEventListener("click", this.preventClick, true);
        elDocument.addEventListener("dblclick", this.preventClick, true);
      } else {
        elWindow.clearTimeout(this.removePreventClickId);
        this.removePreventClickId = null;
      }
    };
    SimpleBarCore2.prototype.onTrackClick = function(e, axis) {
      var _this = this;
      var _a, _b, _c, _d;
      if (axis === void 0) {
        axis = "y";
      }
      var currentAxis = this.axis[axis];
      if (!this.options.clickOnTrack || !currentAxis.scrollbar.el || !this.contentWrapperEl)
        return;
      e.preventDefault();
      var elWindow = getElementWindow(this.el);
      this.axis[axis].scrollbar.rect = currentAxis.scrollbar.el.getBoundingClientRect();
      var scrollbar = this.axis[axis].scrollbar;
      var scrollbarOffset = (_b = (_a = scrollbar.rect) === null || _a === void 0 ? void 0 : _a[this.axis[axis].offsetAttr]) !== null && _b !== void 0 ? _b : 0;
      var hostSize = parseInt((_d = (_c = this.elStyles) === null || _c === void 0 ? void 0 : _c[this.axis[axis].sizeAttr]) !== null && _d !== void 0 ? _d : "0px", 10);
      var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
      var t = axis === "y" ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
      var dir = t < 0 ? -1 : 1;
      var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;
      var speed = 40;
      var scrollTo = function() {
        if (!_this.contentWrapperEl)
          return;
        if (dir === -1) {
          if (scrolled > scrollSize) {
            scrolled -= speed;
            _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
            elWindow.requestAnimationFrame(scrollTo);
          }
        } else {
          if (scrolled < scrollSize) {
            scrolled += speed;
            _this.contentWrapperEl[_this.axis[axis].scrollOffsetAttr] = scrolled;
            elWindow.requestAnimationFrame(scrollTo);
          }
        }
      };
      scrollTo();
    };
    SimpleBarCore2.prototype.getContentElement = function() {
      return this.contentEl;
    };
    SimpleBarCore2.prototype.getScrollElement = function() {
      return this.contentWrapperEl;
    };
    SimpleBarCore2.prototype.removeListeners = function() {
      var elWindow = getElementWindow(this.el);
      this.el.removeEventListener("mouseenter", this.onMouseEnter);
      this.el.removeEventListener("pointerdown", this.onPointerEvent, true);
      this.el.removeEventListener("mousemove", this.onMouseMove);
      this.el.removeEventListener("mouseleave", this.onMouseLeave);
      if (this.contentWrapperEl) {
        this.contentWrapperEl.removeEventListener("scroll", this.onScroll);
      }
      elWindow.removeEventListener("resize", this.onWindowResize);
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
      }
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
      this.onMouseMove.cancel();
      this.onWindowResize.cancel();
      this.onStopScrolling.cancel();
      this.onMouseEntered.cancel();
    };
    SimpleBarCore2.prototype.unMount = function() {
      this.removeListeners();
    };
    SimpleBarCore2.prototype.isWithinBounds = function(bbox) {
      return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
    };
    SimpleBarCore2.prototype.findChild = function(el, query) {
      var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
      return Array.prototype.filter.call(el.children, function(child) {
        return matches.call(child, query);
      })[0];
    };
    SimpleBarCore2.rtlHelpers = null;
    SimpleBarCore2.defaultOptions = {
      forceVisible: false,
      clickOnTrack: true,
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      ariaLabel: "scrollable content",
      tabIndex: 0,
      classNames: {
        contentEl: "simplebar-content",
        contentWrapper: "simplebar-content-wrapper",
        offset: "simplebar-offset",
        mask: "simplebar-mask",
        wrapper: "simplebar-wrapper",
        placeholder: "simplebar-placeholder",
        scrollbar: "simplebar-scrollbar",
        track: "simplebar-track",
        heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
        heightAutoObserverEl: "simplebar-height-auto-observer",
        visible: "simplebar-visible",
        horizontal: "simplebar-horizontal",
        vertical: "simplebar-vertical",
        hover: "simplebar-hover",
        dragging: "simplebar-dragging",
        scrolling: "simplebar-scrolling",
        scrollable: "simplebar-scrollable",
        mouseEntered: "simplebar-mouse-entered"
      },
      scrollableNode: null,
      contentNode: null,
      autoHide: true
    };
    SimpleBarCore2.getOptions = getOptions;
    SimpleBarCore2.helpers = helpers;
    return SimpleBarCore2;
  }()
);

// node_modules/simplebar-angular/fesm2022/simplebar-angular.mjs
var _c02 = ["*"];
var SimplebarAngularComponent = class _SimplebarAngularComponent {
  constructor(elRef, zone) {
    this.zone = zone;
    this.options = {};
    this.elRef = elRef;
  }
  ngOnInit() {
    this.ariaLabel = this.options.ariaLabel || SimpleBarCore.defaultOptions.ariaLabel;
    this.tabIndex = (this.options.tabIndex || SimpleBarCore.defaultOptions.tabIndex).toString();
  }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.SimpleBar = new SimpleBarCore(this.elRef.nativeElement, this.options || {});
    });
  }
  ngOnDestroy() {
    this.SimpleBar?.unMount();
    this.SimpleBar = null;
  }
  static {
    this.\u0275fac = function SimplebarAngularComponent_Factory(t) {
      return new (t || _SimplebarAngularComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _SimplebarAngularComponent,
      selectors: [["ngx-simplebar"]],
      hostAttrs: ["data-simplebar", "init"],
      inputs: {
        options: "options"
      },
      ngContentSelectors: _c02,
      decls: 13,
      vars: 2,
      consts: [[1, "simplebar-wrapper"], [1, "simplebar-height-auto-observer-wrapper"], [1, "simplebar-height-auto-observer"], [1, "simplebar-mask"], [1, "simplebar-offset"], ["role", "region", 1, "simplebar-content-wrapper"], [1, "simplebar-content"], [1, "simplebar-placeholder"], [1, "simplebar-track", "simplebar-horizontal"], [1, "simplebar-scrollbar"], [1, "simplebar-track", "simplebar-vertical"]],
      template: function SimplebarAngularComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
          \u0275\u0275element(2, "div", 2);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
          \u0275\u0275projection(7);
          \u0275\u0275elementEnd()()()();
          \u0275\u0275element(8, "div", 7);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(9, "div", 8);
          \u0275\u0275element(10, "div", 9);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(11, "div", 10);
          \u0275\u0275element(12, "div", 9);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance(5);
          \u0275\u0275attribute("tabIndex", ctx.tabIndex)("aria-label", ctx.ariaLabel);
        }
      },
      styles: ['[data-simplebar]{position:relative;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;position:absolute;overflow:hidden;padding:0;margin:0;inset:0;width:auto!important;height:auto!important;z-index:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;position:absolute;inset:0;padding:0;margin:0;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{display:none;width:0;height:0}.simplebar-content:before,.simplebar-content:after{content:" ";display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;position:absolute;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;overflow:hidden;pointer-events:none;z-index:-1}.simplebar-track{z-index:1;position:absolute;right:0;bottom:0;pointer-events:none;overflow:hidden}[data-simplebar].simplebar-dragging,[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:"";background:#000;border-radius:7px;left:2px;right:2px;opacity:0;transition:opacity .2s .5s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;transition-delay:0s;transition-duration:0s}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-scrollbar:before{inset:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{inset:0 auto 0 0;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.simplebar-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll;-ms-overflow-style:scrollbar!important}.simplebar-dummy-scrollbar-size>div{width:200%;height:200%;margin:10px 0}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}\n', "ngx-simplebar{display:block}\n"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimplebarAngularComponent, [{
    type: Component,
    args: [{
      selector: "ngx-simplebar",
      host: {
        "data-simplebar": "init"
      },
      encapsulation: ViewEncapsulation$1.None,
      template: '<div class="simplebar-wrapper">\n  <div class="simplebar-height-auto-observer-wrapper">\n    <div class="simplebar-height-auto-observer"></div>\n  </div>\n  <div class="simplebar-mask">\n    <div class="simplebar-offset">\n      <div class="simplebar-content-wrapper" [attr.tabIndex]="tabIndex" role="region" [attr.aria-label]="ariaLabel">\n        <div class="simplebar-content">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="simplebar-placeholder"></div>\n</div>\n<div class="simplebar-track simplebar-horizontal">\n  <div class="simplebar-scrollbar"></div>\n</div>\n<div class="simplebar-track simplebar-vertical">\n  <div class="simplebar-scrollbar"></div>\n</div>\n',
      styles: ['[data-simplebar]{position:relative;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;position:absolute;overflow:hidden;padding:0;margin:0;inset:0;width:auto!important;height:auto!important;z-index:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;position:absolute;inset:0;padding:0;margin:0;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{display:none;width:0;height:0}.simplebar-content:before,.simplebar-content:after{content:" ";display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;position:absolute;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;overflow:hidden;pointer-events:none;z-index:-1}.simplebar-track{z-index:1;position:absolute;right:0;bottom:0;pointer-events:none;overflow:hidden}[data-simplebar].simplebar-dragging,[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:"";background:#000;border-radius:7px;left:2px;right:2px;opacity:0;transition:opacity .2s .5s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;transition-delay:0s;transition-duration:0s}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-scrollbar:before{inset:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{inset:0 auto 0 0;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.simplebar-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll;-ms-overflow-style:scrollbar!important}.simplebar-dummy-scrollbar-size>div{width:200%;height:200%;margin:10px 0}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}\n', "ngx-simplebar{display:block}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    options: [{
      type: Input,
      args: ["options"]
    }]
  });
})();
var SimplebarAngularModule = class _SimplebarAngularModule {
  static {
    this.\u0275fac = function SimplebarAngularModule_Factory(t) {
      return new (t || _SimplebarAngularModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _SimplebarAngularModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimplebarAngularModule, [{
    type: NgModule,
    args: [{
      declarations: [SimplebarAngularComponent],
      imports: [],
      exports: [SimplebarAngularComponent],
      schemas: []
    }]
  }], null, null);
})();

// src/app/shared/components/sidebar/sidebar.ts
function switcherArrowFn() {
  const slideLeft = document.querySelector(".slide-left");
  const slideRight = document.querySelector(".slide-right");
  checkHoriMenu();
  if (slideLeft) {
    fromEvent(slideLeft, "click").subscribe(() => {
      const menuNav = document.querySelector(".main-menu");
      const Html = document.querySelector("html");
      const mainContainer1 = document.querySelector(".main-sidebar");
      const marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginLeft.split("px")[0]));
      const marginRightValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginRight.split("px")[0]));
      const mainContainer1Width = mainContainer1.offsetWidth;
      if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
        if (!(Html.getAttribute("dir") === "rtl")) {
          if (marginLeftValue < 0 && !(Math.abs(marginLeftValue) < mainContainer1Width)) {
            menuNav.style.marginRight = 0;
            menuNav.style.marginLeft = Number(menuNav.style.marginLeft.split("px")[0]) + Math.abs(mainContainer1Width) + "px";
            slideRight.classList.remove("hidden");
          } else if (marginLeftValue >= 0) {
            menuNav.style.marginLeft = "0px";
            slideLeft.classList.add("hidden");
            slideRight.classList.remove("hidden");
          } else {
            menuNav.style.marginLeft = "0px";
            slideLeft.classList.add("hidden");
            slideRight.classList.remove("hidden");
          }
        } else {
          if (marginRightValue < 0 && !(Math.abs(marginRightValue) < mainContainer1Width)) {
            menuNav.style.marginLeft = 0;
            menuNav.style.marginRight = Number(menuNav.style.marginRight.split("px")[0]) + Math.abs(mainContainer1Width) + "px";
            slideRight.classList.remove("hidden");
          } else if (marginRightValue >= 0) {
            menuNav.style.marginRight = "0px";
            slideLeft.classList.add("hidden");
            slideRight.classList.remove("hidden");
          } else {
            menuNav.style.marginRight = "0px";
            slideLeft.classList.add("hidden");
            slideRight.classList.remove("hidden");
          }
        }
      } else {
        menuNav.style.marginLeft = "0px";
        menuNav.style.marginRight = "0px";
      }
      const element = document.querySelector(".main-menu > .slide.open");
      const element1 = document.querySelector(".main-menu > .slide.open >ul");
      if (element) {
        element.classList.remove("active");
      }
      if (element1) {
        element1.style.display = "none";
      }
    });
  }
  if (slideRight) {
    fromEvent(slideRight, "click").subscribe(() => {
      const menuNav = document.querySelector(".main-menu");
      const Html = document.querySelector("html");
      const mainContainer1 = document.querySelector(".main-sidebar");
      const marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginLeft.split("px")[0]));
      const marginRightValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginRight.split("px")[0]));
      const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
      let mainContainer1Width = mainContainer1.offsetWidth;
      if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
        if (!(Html.getAttribute("dir") === "rtl")) {
          if (Math.abs(check) > Math.abs(marginLeftValue)) {
            menuNav.style.marginRight = 0;
            if (!(Math.abs(check) > Math.abs(marginLeftValue) + mainContainer1Width)) {
              mainContainer1Width = Math.abs(check) - Math.abs(marginLeftValue);
              slideRight.classList.add("hidden");
            }
            menuNav.style.marginLeft = Number(menuNav.style.marginLeft.split("px")[0]) - Math.abs(mainContainer1Width) + "px";
            slideLeft.classList.remove("hidden");
          }
        } else {
          if (Math.abs(check) > Math.abs(marginRightValue)) {
            menuNav.style.marginLeft = 0;
            if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
              mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
              slideRight.classList.add("hidden");
            }
            menuNav.style.marginRight = Number(menuNav.style.marginRight.split("px")[0]) - Math.abs(mainContainer1Width) + "px";
            slideLeft.classList.remove("hidden");
          }
        }
      }
      const element = document.querySelector(".main-menu > .slide.open");
      const element1 = document.querySelector(".main-menu > .slide.open >ul");
      if (element) {
        element.classList.remove("active");
      }
      if (element1) {
        element1.style.display = "none";
      }
    });
  }
}
function checkHoriMenu() {
  if (document.querySelector(".slide-left")) {
    const menuNav = document.querySelector(".main-menu");
    const mainContainer1 = document.querySelector(".main-sidebar");
    const slideLeft = document.querySelector(".slide-left");
    const slideRight = document.querySelector(".slide-right");
    const Html = document.querySelector("html");
    const marginLeftValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginLeft.split("px")[0]));
    const marginRightValue = Math.ceil(Number(window.getComputedStyle(menuNav).marginRight.split("px")[0]));
    const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
    if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
      slideRight.classList.remove("hidden");
      slideLeft.classList.add("hidden");
    } else {
      slideRight.classList.add("hidden");
      slideLeft.classList.add("hidden");
      menuNav.style.marginLeft = "0px";
      menuNav.style.marginRight = "0px";
    }
    if (!(Html.getAttribute("dir") === "rtl")) {
      if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
        if (Math.abs(check) < Math.abs(marginLeftValue)) {
          menuNav.style.marginLeft = -check + "px";
          slideLeft.classList.remove("hidden");
          slideRight.classList.add("hidden");
        }
      }
      if (marginLeftValue == 0) {
        slideLeft.classList.add("hidden");
        slideRight.classList.remove("hidden");
      } else {
        slideLeft.classList.remove("hidden");
      }
    } else {
      if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
        if (Math.abs(check) < Math.abs(marginRightValue)) {
          menuNav.style.marginRight = -check + "px";
          slideLeft.classList.remove("hidden");
          slideRight.classList.add("hidden");
        }
      }
      if (marginRightValue == 0) {
        slideLeft.classList.add("hidden");
      } else {
        slideLeft.classList.remove("hidden");
      }
    }
    if (marginLeftValue != 0 || marginRightValue != 0) {
      slideLeft.classList.remove("hidden");
    }
  }
}

// src/app/shared/components/sidebar/sidebar.component.ts
var _c03 = ["iconContainer"];
var _c1 = (a0) => ({ "sticky-pin": a0 });
var _c2 = (a0, a1, a2, a3) => ({ "slide__category": a0, "slide has-sub": a1, "open": a2, "active": a3 });
var _c3 = (a0) => [a0];
var _c4 = (a0) => ({ active: a0 });
var _c5 = (a0) => ({ display: a0 });
function SidebarComponent_For_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menuItem_r1.headTitle);
  }
}
function SidebarComponent_For_17_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 24);
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngClass", menuItem_r1.icon);
  }
}
function SidebarComponent_For_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275listener("click", function SidebarComponent_For_17_Conditional_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const menuItem_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.setNavActive(menuItem_r1);
      return \u0275\u0275resetView(ctx_r2.menuOpen());
    });
    \u0275\u0275template(1, SidebarComponent_For_17_Conditional_2_Conditional_1_Template, 1, 1, "i", 24);
    \u0275\u0275elementStart(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c3, menuItem_r1.path));
    \u0275\u0275advance();
    \u0275\u0275conditional(1, menuItem_r1.icon ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", menuItem_r1.title, " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate2("badge !bg-", menuItem_r1.badgeClass, "/10 !text-", menuItem_r1.badgeText, " ms-2");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", menuItem_r1.badgeValue, " ");
  }
}
function SidebarComponent_For_17_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 24);
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngClass", menuItem_r1.icon);
  }
}
function SidebarComponent_For_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275listener("click", function SidebarComponent_For_17_Conditional_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const menuItem_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setNavActive(menuItem_r1));
    });
    \u0275\u0275template(1, SidebarComponent_For_17_Conditional_3_Conditional_1_Template, 1, 1, "i", 24);
    \u0275\u0275elementStart(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(1, menuItem_r1.icon ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menuItem_r1.title);
  }
}
function SidebarComponent_For_17_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 24);
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngClass", menuItem_r1.icon);
  }
}
function SidebarComponent_For_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275listener("click", function SidebarComponent_For_17_Conditional_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const menuItem_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleNavActive(menuItem_r1));
    });
    \u0275\u0275template(1, SidebarComponent_For_17_Conditional_4_Conditional_1_Template, 1, 1, "i", 24);
    \u0275\u0275elementStart(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c4, menuItem_r1.selected));
    \u0275\u0275advance();
    \u0275\u0275conditional(1, menuItem_r1.icon ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(menuItem_r1.title);
  }
}
function SidebarComponent_For_17_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 29)(1, "a", 23);
    \u0275\u0275listener("click", function SidebarComponent_For_17_Conditional_5_For_2_Template_a_click_1_listener() {
      const child_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setNavActive(child_r7));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c3, child_r7.path));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", child_r7.title, " ");
  }
}
function SidebarComponent_For_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 22);
    \u0275\u0275repeaterCreate(1, SidebarComponent_For_17_Conditional_5_For_2_Template, 3, 4, "li", 29, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menuItem_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(1, _c5, menuItem_r1.active ? "block" : "none"));
    \u0275\u0275advance();
    \u0275\u0275repeater(menuItem_r1.children);
  }
}
function SidebarComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 15);
    \u0275\u0275template(1, SidebarComponent_For_17_Conditional_1_Template, 2, 1, "span", 18)(2, SidebarComponent_For_17_Conditional_2_Template, 6, 10, "a", 19)(3, SidebarComponent_For_17_Conditional_3_Template, 4, 2, "a", 20)(4, SidebarComponent_For_17_Conditional_4_Template, 5, 5, "a", 21)(5, SidebarComponent_For_17_Conditional_5_Template, 3, 3, "ul", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(6, _c2, menuItem_r1.headTitle, menuItem_r1.title, menuItem_r1.active, menuItem_r1.selected));
    \u0275\u0275advance();
    \u0275\u0275conditional(1, menuItem_r1.headTitle ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, menuItem_r1.type === "link" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, menuItem_r1.type === "empty" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, menuItem_r1.type === "sub" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, menuItem_r1.children ? 5 : -1);
  }
}
var SidebarComponent = class _SidebarComponent {
  // options = { autoHide: false, scrollbarMinSize: 100 };
  onWindowScroll() {
    const navScrollElement = this.elementRef.nativeElement.querySelector(".nav-scroll");
    this.scrolled = window.scrollY > 10;
    const sections = document.querySelectorAll(".side-menu__item");
    const scrollPos = window.scrollY || this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop || document.body.scrollTop;
    sections.forEach((ele, i) => {
      const currLink = sections[i];
      const val = currLink.getAttribute("value");
      const refElement = document.querySelector("#" + val);
      if (refElement !== null) {
        const scrollTopMinus = scrollPos + 73;
        if (refElement.offsetTop <= scrollTopMinus && refElement.offsetTop + refElement.offsetHeight > scrollTopMinus) {
          if (navScrollElement) {
            this.renderer.removeClass(navScrollElement, "active");
          }
          currLink.classList.add("active");
        } else {
          currLink.classList.remove("active");
        }
      }
    });
  }
  constructor(navServices, sanitizer, router, renderer, elementRef) {
    this.navServices = navServices;
    this.sanitizer = sanitizer;
    this.router = router;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.scrolled = false;
    this.eventTriggered = false;
    this.localdata = localStorage;
    this.options = { autoHide: false, scrollbarMinSize: 100 };
    this.WindowPreSize = [window.innerWidth];
    this.isCollapsed = false;
    this.screenWidth = window.innerWidth;
  }
  ngOnInit() {
    let bodyElement = document.querySelector(".main-content");
    bodyElement.onclick = () => {
      if (localStorage.getItem("ynex-menu-style") == "icon-click" || localStorage.getItem("ynex-menu-style") == "menu-click" || localStorage.getItem("ynex-menu-style") == "icon-hover" || localStorage.getItem("valexlayout") == "horizontal") {
        document.querySelectorAll(".main-menu .slide-menu.child1").forEach((ele) => {
          ele.style.display = "none";
        });
      }
    };
    this.menuResizeFn();
    this.menuitemsSubscribe$ = this.navServices.items.subscribe((items) => {
      this.menuItems = items;
    });
    this.ParentActive();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.ParentActive();
      }
    });
    const WindowResize = fromEvent(window, "resize");
    if (WindowResize) {
      this.windowSubscribe$ = WindowResize.subscribe(() => {
        checkHoriMenu();
      });
    }
    switcherArrowFn();
    checkHoriMenu();
    if (document.documentElement.getAttribute("data-nav-layout") == "horizontal" && window.innerWidth > 992) {
      this.closeNavActive();
    }
  }
  //Active Nav State
  setNavActive(item) {
    this.menuItems?.filter((menuItem) => {
      if (menuItem !== item) {
        menuItem.active = false;
        this.navServices.collapseSidebar = false;
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
        menuItem.selected = true;
      }
      if (menuItem.children) {
        menuItem.children?.filter((submenuItems) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
            menuItem.selected = true;
            submenuItems.selected = true;
          }
          if (submenuItems.children) {
            submenuItems.children?.forEach((subsubmenuItems) => {
              if (subsubmenuItems.children && subsubmenuItems.children.includes(item)) {
                menuItem.active = true;
                submenuItems.active = true;
                subsubmenuItems.active = true;
                menuItem.selected = true;
                submenuItems.selected = true;
                subsubmenuItems.selected = true;
              }
            });
          }
        });
      }
    });
  }
  // Toggle menu
  toggleNavActive(item) {
    if (localStorage.getItem("ynex-sidemenu-styles") == "icontext") {
      document.querySelector("html")?.setAttribute("icon-text", "open");
    } else {
      document.querySelector("html")?.removeAttribute("icon-text");
    }
    if (localStorage.getItem("ynex-sidemenu-styles") == "doublemenu") {
      if (item.active)
        return;
    } else {
    }
    if (!item.active) {
      this.menuItems?.forEach((a) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        a?.children?.forEach((b) => {
          if (a.children.includes(item)) {
            b.active = false;
          } else {
            b.active = false;
          }
          b?.children?.forEach((c) => {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
        });
      });
    }
    item.active = !item.active;
  }
  // Close Nav menu
  closeNavActive() {
    this.menuItems?.forEach((a) => {
      if (this.menuItems) {
        a.active = false;
      }
      a?.children?.forEach((b) => {
        if (a.children) {
          b.active = false;
        }
      });
    });
  }
  ParentActive() {
    this.menuItems.map((element) => {
      if (element.children) {
        element.active = false;
        element.selected = false;
        element.children.map((ele) => {
          if (ele.path == this.router.url) {
            element.active = true;
            element.selected = true;
          }
          if (ele.children) {
            ele.active = false;
            ele.children.map((child1) => {
              if (child1.path == this.router.url) {
                element.active = true;
                element.selected = true;
                ele.active = true;
                ele.selected = true;
              }
            });
          }
        });
      }
    });
  }
  getSanitizedSVG(svgContent, menu) {
    const svg = this.renderer.createElement("svg", "http://www.w3.org/2000/svg");
    svg.innerHTML = svgContent;
    svg.classList.add("side-menu__icon");
    this.renderer.listen(svg, "click", () => {
      this.toggleNavActive(menu);
    });
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }
  ngOnDestroy() {
    this.menuitemsSubscribe$.unsubscribe();
    this.windowSubscribe$.unsubscribe();
    this.elementRef.nativeElement.ownerDocument.documentElement, "data-nav-layout", "vertical";
    const WindowResize = fromEvent(window, "resize");
    if (WindowResize) {
      this.windowSubscribe$ = WindowResize.subscribe(() => {
        checkHoriMenu();
      });
    }
  }
  menuOpen() {
    const mainContent = document.querySelector(".main-content");
    if (localStorage["Ynexverticalstyles"] === "icontext" && localStorage["iconText"] !== "open") {
      this.updateTheme(__spreadProps(__spreadValues({}, this.getCurrentTheme()), { iconText: "open" }));
      mainContent?.addEventListener("click", (_event) => {
        this.updateTheme(__spreadProps(__spreadValues({}, this.getCurrentTheme()), { iconText: "" }));
      });
    }
    if (localStorage["Ynexverticalstyles"] === "doublemenu" && this.getCurrentTheme().dataToggled !== "double-menu-open") {
      this.updateTheme(__spreadProps(__spreadValues({}, this.getCurrentTheme()), { dataToggled: "double-menu-open" }));
    }
  }
  // Replace this method with your actual method or service call to update the theme
  updateTheme(updatedTheme) {
    console.log("Update Theme:", updatedTheme);
  }
  // Replace this method with your actual method or service call to get the current theme
  getCurrentTheme() {
    return {};
  }
  onResize(event) {
    this.menuResizeFn();
    this.screenWidth = window.innerWidth;
    if (!this.eventTriggered && this.screenWidth <= 992) {
      document.documentElement?.setAttribute("data-toggled", "close");
      this.eventTriggered = true;
    } else if (this.screenWidth > 992) {
      this.eventTriggered = false;
    }
  }
  menuResizeFn() {
    this.WindowPreSize.push(window.innerWidth);
    if (this.WindowPreSize.length > 2) {
      this.WindowPreSize.shift();
    }
    if (this.WindowPreSize.length > 1) {
      const html = document.documentElement;
      if (this.WindowPreSize[this.WindowPreSize.length - 1] < 992 && this.WindowPreSize[this.WindowPreSize.length - 2] >= 992) {
        html.setAttribute("data-toggled", "close");
      }
      if (this.WindowPreSize[this.WindowPreSize.length - 1] >= 992 && this.WindowPreSize[this.WindowPreSize.length - 2] < 992) {
        html.removeAttribute("data-toggled");
        document.querySelector("#responsive-overlay")?.classList.remove("active");
      }
    }
  }
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(t) {
      return new (t || _SidebarComponent)(\u0275\u0275directiveInject(NavService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconContainer = _t.first);
      }
    }, hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function SidebarComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, \u0275\u0275resolveWindow)("resize", function SidebarComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, decls: 21, vars: 4, consts: [["id", "sidebar", 1, "app-sidebar", 3, "ngClass"], [1, "main-sidebar-header"], ["routerLink", "/dashboard/crm", 1, "header-logo"], ["src", "./assets/images/brand-logos/smart-meter.png", "alt", "logo", 1, "desktop-logo"], ["src", "./assets/images/brand-logos/smart-meter.png", "alt", "logo", 1, "toggle-logo"], ["src", "./assets/images/brand-logos/smart-meter.png", "alt", "logo", 1, "desktop-dark"], ["src", "./assets/images/brand-logos/smart-meter.png", "alt", "logo", 1, "toggle-dark"], ["src", "./assets/images/brand-logos/smart-meter.png", "alt", "logo", 1, "desktop-white"], ["src", "./assets/images/brand-logos/smart-meter.png", "alt", "logo", 1, "toggle-white"], ["id", "sidebar-scroll", 1, "main-sidebar", 3, "options"], [1, "main-menu-container", "nav", "nav-pills", "flex-column", "sub-open"], ["id", "slide-left", 1, "slide-left"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "#7b8191", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"], [1, "main-menu"], [1, "slide", 3, "ngClass"], ["id", "slide-right", 1, "slide-right"], ["d", "M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"], [1, "category-name"], ["routerLinkActive", "active", 1, "side-menu__item", 3, "routerLink"], ["href", "javascript:;", 1, "side-menu__item"], ["href", "javascript:;", 1, "side-menu__item", 3, "ngClass"], [1, "slide-menu", "child1", 3, "ngStyle"], ["routerLinkActive", "active", 1, "side-menu__item", 3, "click", "routerLink"], [1, "side-menu__icon", 3, "ngClass"], [1, "side-menu__label"], ["href", "javascript:;", 1, "side-menu__item", 3, "click"], ["href", "javascript:;", 1, "side-menu__item", 3, "click", "ngClass"], [1, "fe", "fe-chevron-right", "side-menu__angle"], [1, "slide"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "aside", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275element(3, "img", 3)(4, "img", 4)(5, "img", 5)(6, "img", 6)(7, "img", 7)(8, "img", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div")(10, "ngx-simplebar", 9)(11, "nav", 10)(12, "div", 11);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 12);
        \u0275\u0275element(14, "path", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(15, "ul", 14);
        \u0275\u0275repeaterCreate(16, SidebarComponent_For_17_Template, 6, 11, "li", 15, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(19, "svg", 12);
        \u0275\u0275element(20, "path", 17);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c1, ctx.scrolled));
        \u0275\u0275advance(10);
        \u0275\u0275property("options", ctx.options);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.menuItems);
      }
    }, dependencies: [NgClass, NgStyle, RouterLink, RouterLinkActive, SimplebarAngularComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src\\app\\shared\\components\\sidebar\\sidebar.component.ts", lineNumber: 13 });
})();

// node_modules/ngx-color-picker/fesm2022/ngx-color-picker.mjs
var _c04 = ["dialogPopup"];
var _c12 = ["hueSlider"];
var _c22 = ["alphaSlider"];
function ColorPickerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("arrow arrow-", ctx_r1.cpUsePosition, "");
    \u0275\u0275styleProp("left", ctx_r1.cpArrowPosition)("top", ctx_r1.arrowTop, "px");
  }
}
function ColorPickerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("newValue", function ColorPickerComponent_div_3_Template_div_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onColorChange($event));
    })("dragStart", function ColorPickerComponent_div_3_Template_div_dragStart_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragStart("saturation-lightness"));
    })("dragEnd", function ColorPickerComponent_div_3_Template_div_dragEnd_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnd("saturation-lightness"));
    });
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r1.hueSliderColor);
    \u0275\u0275property("rgX", 1)("rgY", 1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("top", ctx_r1.slider == null ? null : ctx_r1.slider.v, "px")("left", ctx_r1.slider == null ? null : ctx_r1.slider.s, "px");
  }
}
function ColorPickerComponent__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 29);
    \u0275\u0275element(1, "path", 30)(2, "path", 31);
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ColorPickerComponent_button_9_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddPresetColor($event, ctx_r1.selectedColor));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cpAddColorButtonClass);
    \u0275\u0275property("disabled", ctx_r1.cpPresetColors && ctx_r1.cpPresetColors.length >= ctx_r1.cpMaxPresetColorsLength);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.cpAddColorButtonText, " ");
  }
}
function ColorPickerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33);
  }
}
function ColorPickerComponent_div_21_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_input_6_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_input_6_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.a);
  }
}
function ColorPickerComponent_div_21_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCyanInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMagentaInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onYellowInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_21_Template_input_keyup_enter_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_21_Template_input_newValue_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlackInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ColorPickerComponent_div_21_input_6_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35)(8, "div");
    \u0275\u0275text(9, "C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11, "M");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div");
    \u0275\u0275text(13, "Y");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15, "K");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ColorPickerComponent_div_21_div_16_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 3 ? "none" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.c);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.m);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.y);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.cmykText == null ? null : ctx_r1.cmykText.k);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_22_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_input_5_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_input_5_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.a);
  }
}
function ColorPickerComponent_div_22_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 35)(2, "input", 41);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHueInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSaturationInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_22_Template_input_keyup_enter_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_22_Template_input_newValue_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLightnessInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ColorPickerComponent_div_22_input_5_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 35)(7, "div");
    \u0275\u0275text(8, "H");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10, "S");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12, "L");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ColorPickerComponent_div_22_div_13_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 2 ? "none" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 360)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.h);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.s);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 100)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.l);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_23_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_input_5_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_input_5_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.a);
  }
}
function ColorPickerComponent_div_23_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 35)(2, "input", 43);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRedInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 43);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGreenInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 43);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_23_Template_input_keyup_enter_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_23_Template_input_newValue_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlueInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ColorPickerComponent_div_23_input_5_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 35)(7, "div");
    \u0275\u0275text(8, "R");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10, "G");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12, "B");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ColorPickerComponent_div_23_div_13_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 1 ? "none" : "block");
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 255)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.r);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 255)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.g);
    \u0275\u0275advance();
    \u0275\u0275property("rg", 255)("value", ctx_r1.rgbaText == null ? null : ctx_r1.rgbaText.b);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_24_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_24_input_3_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_24_input_3_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.hexAlpha);
  }
}
function ColorPickerComponent_div_24_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "A");
    \u0275\u0275elementEnd();
  }
}
function ColorPickerComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 35)(2, "input", 45);
    \u0275\u0275listener("blur", function ColorPickerComponent_div_24_Template_input_blur_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHexInput(null));
    })("keyup.enter", function ColorPickerComponent_div_24_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_24_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHexInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ColorPickerComponent_div_24_input_3_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "div");
    \u0275\u0275text(6, "Hex");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ColorPickerComponent_div_24_div_7_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.format !== 0 ? "none" : "block");
    \u0275\u0275classProp("hex-alpha", ctx_r1.cpAlphaChannel === "forced");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.hexText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel === "forced");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel === "forced");
  }
}
function ColorPickerComponent_div_25_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_25_input_3_Template_input_keyup_enter_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_25_input_3_Template_input_newValue_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAlphaInput($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("rg", 1)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.a);
  }
}
function ColorPickerComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 35)(2, "input", 36);
    \u0275\u0275listener("keyup.enter", function ColorPickerComponent_div_25_Template_input_keyup_enter_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    })("newValue", function ColorPickerComponent_div_25_Template_input_newValue_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onValueInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ColorPickerComponent_div_25_input_3_Template, 1, 2, "input", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "div");
    \u0275\u0275text(6, "V");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275text(8, "A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("rg", 100)("value", ctx_r1.hslaText == null ? null : ctx_r1.hslaText.l);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAlphaChannel !== "disabled");
  }
}
function ColorPickerComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 48);
    \u0275\u0275listener("click", function ColorPickerComponent_div_26_Template_span_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFormatToggle(-1));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 48);
    \u0275\u0275listener("click", function ColorPickerComponent_div_26_Template_span_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFormatToggle(1));
    });
    \u0275\u0275elementEnd()();
  }
}
function ColorPickerComponent_div_27_div_4_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275listener("click", function ColorPickerComponent_div_27_div_4_div_1_span_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const color_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRemovePresetColor($event, color_r17));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cpRemoveColorButtonClass);
  }
}
function ColorPickerComponent_div_27_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function ColorPickerComponent_div_27_div_4_div_1_Template_div_click_0_listener() {
      const color_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setColorFromString(color_r17));
    });
    \u0275\u0275template(1, ColorPickerComponent_div_27_div_4_div_1_span_1_Template, 1, 3, "span", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background-color", color_r17);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpAddColorButton);
  }
}
function ColorPickerComponent_div_27_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ColorPickerComponent_div_27_div_4_div_1_Template, 2, 3, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpPresetColorsClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cpPresetColors);
  }
}
function ColorPickerComponent_div_27_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpPresetEmptyMessageClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpPresetEmptyMessage);
  }
}
function ColorPickerComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "hr");
    \u0275\u0275elementStart(2, "div", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ColorPickerComponent_div_27_div_4_Template, 2, 4, "div", 51)(5, ColorPickerComponent_div_27_div_5_Template, 2, 4, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cpPresetLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpPresetColors == null ? null : ctx_r1.cpPresetColors.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.cpPresetColors == null ? null : ctx_r1.cpPresetColors.length) && ctx_r1.cpAddColorButton);
  }
}
function ColorPickerComponent_div_28_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ColorPickerComponent_div_28_button_1_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCancelColor($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpCancelButtonClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpCancelButtonText);
  }
}
function ColorPickerComponent_div_28_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function ColorPickerComponent_div_28_button_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAcceptColor($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cpOKButtonClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cpOKButtonText);
  }
}
function ColorPickerComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, ColorPickerComponent_div_28_button_1_Template, 2, 4, "button", 57)(2, ColorPickerComponent_div_28_button_2_Template, 2, 4, "button", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpCancelButton);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cpOKButton);
  }
}
function ColorPickerComponent_div_29_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ColorPickerComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, ColorPickerComponent_div_29_ng_container_1_Template, 1, 0, "ng-container", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.cpExtraTemplate);
  }
}
var ColorFormats;
(function(ColorFormats2) {
  ColorFormats2[ColorFormats2["HEX"] = 0] = "HEX";
  ColorFormats2[ColorFormats2["RGBA"] = 1] = "RGBA";
  ColorFormats2[ColorFormats2["HSLA"] = 2] = "HSLA";
  ColorFormats2[ColorFormats2["CMYK"] = 3] = "CMYK";
})(ColorFormats || (ColorFormats = {}));
var Rgba = class {
  r;
  g;
  b;
  a;
  constructor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
};
var Hsva = class {
  h;
  s;
  v;
  a;
  constructor(h, s, v, a) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }
};
var Hsla = class {
  h;
  s;
  l;
  a;
  constructor(h, s, l, a) {
    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a;
  }
};
var Cmyk = class {
  c;
  m;
  y;
  k;
  a;
  constructor(c, m, y, k, a = 1) {
    this.c = c;
    this.m = m;
    this.y = y;
    this.k = k;
    this.a = a;
  }
};
function calculateAutoPositioning(elBounds, triggerElBounds) {
  let usePositionX = "right";
  let usePositionY = "bottom";
  const {
    height,
    width
  } = elBounds;
  const {
    top,
    left
  } = triggerElBounds;
  const bottom = top + triggerElBounds.height;
  const right = left + triggerElBounds.width;
  const collisionTop = top - height < 0;
  const collisionBottom = bottom + height > (window.innerHeight || document.documentElement.clientHeight);
  const collisionLeft = left - width < 0;
  const collisionRight = right + width > (window.innerWidth || document.documentElement.clientWidth);
  const collisionAll = collisionTop && collisionBottom && collisionLeft && collisionRight;
  if (collisionBottom) {
    usePositionY = "top";
  }
  if (collisionTop) {
    usePositionY = "bottom";
  }
  if (collisionLeft) {
    usePositionX = "right";
  }
  if (collisionRight) {
    usePositionX = "left";
  }
  if (collisionAll) {
    const postions = ["left", "right", "top", "bottom"];
    return postions.reduce((prev, next) => elBounds[prev] > elBounds[next] ? prev : next);
  }
  if (collisionLeft && collisionRight) {
    if (collisionTop) {
      return "bottom";
    }
    if (collisionBottom) {
      return "top";
    }
    return top > bottom ? "top" : "bottom";
  }
  if (collisionTop && collisionBottom) {
    if (collisionLeft) {
      return "right";
    }
    if (collisionRight) {
      return "left";
    }
    return left > right ? "left" : "right";
  }
  return `${usePositionY}-${usePositionX}`;
}
function detectIE() {
  let ua = "";
  if (typeof navigator !== "undefined") {
    ua = navigator.userAgent.toLowerCase();
  }
  const msie = ua.indexOf("msie ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }
  return false;
}
var TextDirective = class _TextDirective {
  rg;
  text;
  newValue = new EventEmitter();
  inputChange(event) {
    const value = event.target.value;
    if (this.rg === void 0) {
      this.newValue.emit(value);
    } else {
      const numeric = parseFloat(value);
      this.newValue.emit({
        v: numeric,
        rg: this.rg
      });
    }
  }
  static \u0275fac = function TextDirective_Factory(t) {
    return new (t || _TextDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TextDirective,
    selectors: [["", "text", ""]],
    hostBindings: function TextDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function TextDirective_input_HostBindingHandler($event) {
          return ctx.inputChange($event);
        });
      }
    },
    inputs: {
      rg: "rg",
      text: "text"
    },
    outputs: {
      newValue: "newValue"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextDirective, [{
    type: Directive,
    args: [{
      selector: "[text]"
    }]
  }], null, {
    rg: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    newValue: [{
      type: Output
    }],
    inputChange: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var SliderDirective = class _SliderDirective {
  elRef;
  listenerMove;
  listenerStop;
  rgX;
  rgY;
  slider;
  dragEnd = new EventEmitter();
  dragStart = new EventEmitter();
  newValue = new EventEmitter();
  mouseDown(event) {
    this.start(event);
  }
  touchStart(event) {
    this.start(event);
  }
  constructor(elRef) {
    this.elRef = elRef;
    this.listenerMove = (event) => this.move(event);
    this.listenerStop = () => this.stop();
  }
  move(event) {
    event.preventDefault();
    this.setCursor(event);
  }
  start(event) {
    this.setCursor(event);
    event.stopPropagation();
    document.addEventListener("mouseup", this.listenerStop);
    document.addEventListener("touchend", this.listenerStop);
    document.addEventListener("mousemove", this.listenerMove);
    document.addEventListener("touchmove", this.listenerMove);
    this.dragStart.emit();
  }
  stop() {
    document.removeEventListener("mouseup", this.listenerStop);
    document.removeEventListener("touchend", this.listenerStop);
    document.removeEventListener("mousemove", this.listenerMove);
    document.removeEventListener("touchmove", this.listenerMove);
    this.dragEnd.emit();
  }
  getX(event) {
    const position = this.elRef.nativeElement.getBoundingClientRect();
    const pageX = event.pageX !== void 0 ? event.pageX : event.touches[0].pageX;
    return pageX - position.left - window.pageXOffset;
  }
  getY(event) {
    const position = this.elRef.nativeElement.getBoundingClientRect();
    const pageY = event.pageY !== void 0 ? event.pageY : event.touches[0].pageY;
    return pageY - position.top - window.pageYOffset;
  }
  setCursor(event) {
    const width = this.elRef.nativeElement.offsetWidth;
    const height = this.elRef.nativeElement.offsetHeight;
    const x = Math.max(0, Math.min(this.getX(event), width));
    const y = Math.max(0, Math.min(this.getY(event), height));
    if (this.rgX !== void 0 && this.rgY !== void 0) {
      this.newValue.emit({
        s: x / width,
        v: 1 - y / height,
        rgX: this.rgX,
        rgY: this.rgY
      });
    } else if (this.rgX === void 0 && this.rgY !== void 0) {
      this.newValue.emit({
        v: y / height,
        rgY: this.rgY
      });
    } else if (this.rgX !== void 0 && this.rgY === void 0) {
      this.newValue.emit({
        v: x / width,
        rgX: this.rgX
      });
    }
  }
  static \u0275fac = function SliderDirective_Factory(t) {
    return new (t || _SliderDirective)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SliderDirective,
    selectors: [["", "slider", ""]],
    hostBindings: function SliderDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mousedown", function SliderDirective_mousedown_HostBindingHandler($event) {
          return ctx.mouseDown($event);
        })("touchstart", function SliderDirective_touchstart_HostBindingHandler($event) {
          return ctx.touchStart($event);
        });
      }
    },
    inputs: {
      rgX: "rgX",
      rgY: "rgY",
      slider: "slider"
    },
    outputs: {
      dragEnd: "dragEnd",
      dragStart: "dragStart",
      newValue: "newValue"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderDirective, [{
    type: Directive,
    args: [{
      selector: "[slider]"
    }]
  }], () => [{
    type: ElementRef
  }], {
    rgX: [{
      type: Input
    }],
    rgY: [{
      type: Input
    }],
    slider: [{
      type: Input
    }],
    dragEnd: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    newValue: [{
      type: Output
    }],
    mouseDown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    touchStart: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }]
  });
})();
var SliderPosition = class {
  h;
  s;
  v;
  a;
  constructor(h, s, v, a) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }
};
var SliderDimension = class {
  h;
  s;
  v;
  a;
  constructor(h, s, v, a) {
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }
};
var ColorPickerService = class _ColorPickerService {
  active = null;
  setActive(active) {
    if (this.active && this.active !== active && this.active.cpDialogDisplay !== "inline") {
      this.active.closeDialog();
    }
    this.active = active;
  }
  hsva2hsla(hsva) {
    const h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
    if (v === 0) {
      return new Hsla(h, 0, 0, a);
    } else if (s === 0 && v === 1) {
      return new Hsla(h, 1, 1, a);
    } else {
      const l = v * (2 - s) / 2;
      return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
    }
  }
  hsla2hsva(hsla) {
    const h = Math.min(hsla.h, 1), s = Math.min(hsla.s, 1);
    const l = Math.min(hsla.l, 1), a = Math.min(hsla.a, 1);
    if (l === 0) {
      return new Hsva(h, 0, 0, a);
    } else {
      const v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
      return new Hsva(h, 2 * (v - l) / v, v, a);
    }
  }
  hsvaToRgba(hsva) {
    let r, g, b;
    const h = hsva.h, s = hsva.s, v = hsva.v, a = hsva.a;
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0:
        r = v, g = t, b = p;
        break;
      case 1:
        r = q, g = v, b = p;
        break;
      case 2:
        r = p, g = v, b = t;
        break;
      case 3:
        r = p, g = q, b = v;
        break;
      case 4:
        r = t, g = p, b = v;
        break;
      case 5:
        r = v, g = p, b = q;
        break;
      default:
        r = 0, g = 0, b = 0;
    }
    return new Rgba(r, g, b, a);
  }
  cmykToRgb(cmyk) {
    const r = (1 - cmyk.c) * (1 - cmyk.k);
    const g = (1 - cmyk.m) * (1 - cmyk.k);
    const b = (1 - cmyk.y) * (1 - cmyk.k);
    return new Rgba(r, g, b, cmyk.a);
  }
  rgbaToCmyk(rgba) {
    const k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
    if (k === 1) {
      return new Cmyk(0, 0, 0, 1, rgba.a);
    } else {
      const c = (1 - rgba.r - k) / (1 - k);
      const m = (1 - rgba.g - k) / (1 - k);
      const y = (1 - rgba.b - k) / (1 - k);
      return new Cmyk(c, m, y, k, rgba.a);
    }
  }
  rgbaToHsva(rgba) {
    let h, s;
    const r = Math.min(rgba.r, 1), g = Math.min(rgba.g, 1);
    const b = Math.min(rgba.b, 1), a = Math.min(rgba.a, 1);
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const v = max, d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max === min) {
      h = 0;
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          h = 0;
      }
      h /= 6;
    }
    return new Hsva(h, s, v, a);
  }
  rgbaToHex(rgba, allowHex8) {
    let hex = "#" + (1 << 24 | rgba.r << 16 | rgba.g << 8 | rgba.b).toString(16).substr(1);
    if (allowHex8) {
      hex += (1 << 8 | Math.round(rgba.a * 255)).toString(16).substr(1);
    }
    return hex;
  }
  normalizeCMYK(cmyk) {
    return new Cmyk(cmyk.c / 100, cmyk.m / 100, cmyk.y / 100, cmyk.k / 100, cmyk.a);
  }
  denormalizeCMYK(cmyk) {
    return new Cmyk(Math.floor(cmyk.c * 100), Math.floor(cmyk.m * 100), Math.floor(cmyk.y * 100), Math.floor(cmyk.k * 100), cmyk.a);
  }
  denormalizeRGBA(rgba) {
    return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
  }
  stringToHsva(colorString = "", allowHex8 = false) {
    let hsva = null;
    colorString = (colorString || "").toLowerCase();
    const stringParsers = [{
      re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function(execResult) {
        return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
      }
    }, {
      re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function(execResult) {
        return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
      }
    }];
    if (allowHex8) {
      stringParsers.push({
        re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
        parse: function(execResult) {
          return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || "FF", 16) / 255);
        }
      });
    } else {
      stringParsers.push({
        re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
        parse: function(execResult) {
          return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
        }
      });
    }
    stringParsers.push({
      re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
      parse: function(execResult) {
        return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
      }
    });
    for (const key in stringParsers) {
      if (stringParsers.hasOwnProperty(key)) {
        const parser = stringParsers[key];
        const match = parser.re.exec(colorString), color = match && parser.parse(match);
        if (color) {
          if (color instanceof Rgba) {
            hsva = this.rgbaToHsva(color);
          } else if (color instanceof Hsla) {
            hsva = this.hsla2hsva(color);
          }
          return hsva;
        }
      }
    }
    return hsva;
  }
  outputFormat(hsva, outputFormat, alphaChannel) {
    if (outputFormat === "auto") {
      outputFormat = hsva.a < 1 ? "rgba" : "hex";
    }
    switch (outputFormat) {
      case "hsla":
        const hsla = this.hsva2hsla(hsva);
        const hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
        if (hsva.a < 1 || alphaChannel === "always") {
          return "hsla(" + hslaText.h + "," + hslaText.s + "%," + hslaText.l + "%," + hslaText.a + ")";
        } else {
          return "hsl(" + hslaText.h + "," + hslaText.s + "%," + hslaText.l + "%)";
        }
      case "rgba":
        const rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
        if (hsva.a < 1 || alphaChannel === "always") {
          return "rgba(" + rgba.r + "," + rgba.g + "," + rgba.b + "," + Math.round(rgba.a * 100) / 100 + ")";
        } else {
          return "rgb(" + rgba.r + "," + rgba.g + "," + rgba.b + ")";
        }
      default:
        const allowHex8 = alphaChannel === "always" || alphaChannel === "forced";
        return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
    }
  }
  static \u0275fac = function ColorPickerService_Factory(t) {
    return new (t || _ColorPickerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ColorPickerService,
    factory: _ColorPickerService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerService, [{
    type: Injectable
  }], null, null);
})();
var SUPPORTS_TOUCH = typeof window !== "undefined" && "ontouchstart" in window;
var ColorPickerComponent = class _ColorPickerComponent {
  ngZone;
  elRef;
  cdRef;
  document;
  platformId;
  service;
  isIE10 = false;
  cmyk;
  hsva;
  width;
  height;
  cmykColor;
  outputColor;
  initialColor;
  fallbackColor;
  listenerResize;
  listenerMouseDown;
  directiveInstance;
  sliderH;
  sliderDimMax;
  directiveElementRef;
  dialogArrowSize = 10;
  dialogArrowOffset = 15;
  dialogInputFields = [ColorFormats.HEX, ColorFormats.RGBA, ColorFormats.HSLA, ColorFormats.CMYK];
  useRootViewContainer = false;
  show;
  hidden;
  top;
  left;
  position;
  format;
  slider;
  hexText;
  hexAlpha;
  cmykText;
  hslaText;
  rgbaText;
  arrowTop;
  selectedColor;
  hueSliderColor;
  alphaSliderColor;
  cpWidth;
  cpHeight;
  cpColorMode;
  cpCmykEnabled;
  cpAlphaChannel;
  cpOutputFormat;
  cpDisableInput;
  cpDialogDisplay;
  cpIgnoredElements;
  cpSaveClickOutside;
  cpCloseClickOutside;
  cpPosition;
  cpUsePosition;
  cpPositionOffset;
  cpOKButton;
  cpOKButtonText;
  cpOKButtonClass;
  cpCancelButton;
  cpCancelButtonText;
  cpCancelButtonClass;
  cpEyeDropper;
  eyeDropperSupported;
  cpPresetLabel;
  cpPresetColors;
  cpPresetColorsClass;
  cpMaxPresetColorsLength;
  cpPresetEmptyMessage;
  cpPresetEmptyMessageClass;
  cpAddColorButton;
  cpAddColorButtonText;
  cpAddColorButtonClass;
  cpRemoveColorButtonClass;
  cpArrowPosition;
  cpTriggerElement;
  cpExtraTemplate;
  dialogElement;
  hueSlider;
  alphaSlider;
  handleEsc(event) {
    if (this.show && this.cpDialogDisplay === "popup") {
      this.onCancelColor(event);
    }
  }
  handleEnter(event) {
    if (this.show && this.cpDialogDisplay === "popup") {
      this.onAcceptColor(event);
    }
  }
  constructor(ngZone, elRef, cdRef, document2, platformId, service) {
    this.ngZone = ngZone;
    this.elRef = elRef;
    this.cdRef = cdRef;
    this.document = document2;
    this.platformId = platformId;
    this.service = service;
    this.eyeDropperSupported = isPlatformBrowser(this.platformId) && "EyeDropper" in this.document.defaultView;
  }
  ngOnInit() {
    this.slider = new SliderPosition(0, 0, 0, 0);
    const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
    const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
    this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
    if (this.cpCmykEnabled) {
      this.format = ColorFormats.CMYK;
    } else if (this.cpOutputFormat === "rgba") {
      this.format = ColorFormats.RGBA;
    } else if (this.cpOutputFormat === "hsla") {
      this.format = ColorFormats.HSLA;
    } else {
      this.format = ColorFormats.HEX;
    }
    this.listenerMouseDown = (event) => {
      this.onMouseDown(event);
    };
    this.listenerResize = () => {
      this.onResize();
    };
    this.openDialog(this.initialColor, false);
  }
  ngOnDestroy() {
    this.closeDialog();
  }
  ngAfterViewInit() {
    if (this.cpWidth !== 230 || this.cpDialogDisplay === "inline") {
      const hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
      const alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
      this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
      this.updateColorPicker(false);
      this.cdRef.detectChanges();
    }
  }
  openDialog(color, emit = true) {
    this.service.setActive(this);
    if (!this.width) {
      this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
    }
    if (!this.height) {
      this.height = 320;
    }
    this.setInitialColor(color);
    this.setColorFromString(color, emit);
    this.openColorPicker();
  }
  closeDialog() {
    this.closeColorPicker();
  }
  setupDialog(instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpCmykEnabled, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpPresetColorsClass, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass, cpEyeDropper, cpTriggerElement, cpExtraTemplate) {
    this.setInitialColor(color);
    this.setColorMode(cpColorMode);
    this.isIE10 = detectIE() === 10;
    this.directiveInstance = instance;
    this.directiveElementRef = elementRef;
    this.cpDisableInput = cpDisableInput;
    this.cpCmykEnabled = cpCmykEnabled;
    this.cpAlphaChannel = cpAlphaChannel;
    this.cpOutputFormat = cpOutputFormat;
    this.cpDialogDisplay = cpDialogDisplay;
    this.cpIgnoredElements = cpIgnoredElements;
    this.cpSaveClickOutside = cpSaveClickOutside;
    this.cpCloseClickOutside = cpCloseClickOutside;
    this.useRootViewContainer = cpUseRootViewContainer;
    this.width = this.cpWidth = parseInt(cpWidth, 10);
    this.height = this.cpHeight = parseInt(cpHeight, 10);
    this.cpPosition = cpPosition;
    this.cpPositionOffset = parseInt(cpPositionOffset, 10);
    this.cpOKButton = cpOKButton;
    this.cpOKButtonText = cpOKButtonText;
    this.cpOKButtonClass = cpOKButtonClass;
    this.cpCancelButton = cpCancelButton;
    this.cpCancelButtonText = cpCancelButtonText;
    this.cpCancelButtonClass = cpCancelButtonClass;
    this.cpEyeDropper = cpEyeDropper;
    this.fallbackColor = cpFallbackColor || "#fff";
    this.setPresetConfig(cpPresetLabel, cpPresetColors);
    this.cpPresetColorsClass = cpPresetColorsClass;
    this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
    this.cpPresetEmptyMessage = cpPresetEmptyMessage;
    this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
    this.cpAddColorButton = cpAddColorButton;
    this.cpAddColorButtonText = cpAddColorButtonText;
    this.cpAddColorButtonClass = cpAddColorButtonClass;
    this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
    this.cpTriggerElement = cpTriggerElement;
    this.cpExtraTemplate = cpExtraTemplate;
    if (!cpPositionRelativeToArrow) {
      this.dialogArrowOffset = 0;
    }
    if (cpDialogDisplay === "inline") {
      this.dialogArrowSize = 0;
      this.dialogArrowOffset = 0;
    }
    if (cpOutputFormat === "hex" && cpAlphaChannel !== "always" && cpAlphaChannel !== "forced") {
      this.cpAlphaChannel = "disabled";
    }
  }
  setColorMode(mode) {
    switch (mode.toString().toUpperCase()) {
      case "1":
      case "C":
      case "COLOR":
        this.cpColorMode = 1;
        break;
      case "2":
      case "G":
      case "GRAYSCALE":
        this.cpColorMode = 2;
        break;
      case "3":
      case "P":
      case "PRESETS":
        this.cpColorMode = 3;
        break;
      default:
        this.cpColorMode = 1;
    }
  }
  setInitialColor(color) {
    this.initialColor = color;
  }
  setPresetConfig(cpPresetLabel, cpPresetColors) {
    this.cpPresetLabel = cpPresetLabel;
    this.cpPresetColors = cpPresetColors;
  }
  setColorFromString(value, emit = true, update = true) {
    let hsva;
    if (this.cpAlphaChannel === "always" || this.cpAlphaChannel === "forced") {
      hsva = this.service.stringToHsva(value, true);
      if (!hsva && !this.hsva) {
        hsva = this.service.stringToHsva(value, false);
      }
    } else {
      hsva = this.service.stringToHsva(value, false);
    }
    if (!hsva && !this.hsva) {
      hsva = this.service.stringToHsva(this.fallbackColor, false);
    }
    if (hsva) {
      this.hsva = hsva;
      this.sliderH = this.hsva.h;
      if (this.cpOutputFormat === "hex" && this.cpAlphaChannel === "disabled") {
        this.hsva.a = 1;
      }
      this.updateColorPicker(emit, update);
    }
  }
  onResize() {
    if (this.position === "fixed") {
      this.setDialogPosition();
    } else if (this.cpDialogDisplay !== "inline") {
      this.closeColorPicker();
    }
  }
  onDragEnd(slider) {
    this.directiveInstance.sliderDragEnd({
      slider,
      color: this.outputColor
    });
  }
  onDragStart(slider) {
    this.directiveInstance.sliderDragStart({
      slider,
      color: this.outputColor
    });
  }
  onMouseDown(event) {
    if (this.show && !this.isIE10 && this.cpDialogDisplay === "popup" && event.target !== this.directiveElementRef.nativeElement && !this.isDescendant(this.elRef.nativeElement, event.target) && !this.isDescendant(this.directiveElementRef.nativeElement, event.target) && this.cpIgnoredElements.filter((item) => item === event.target).length === 0) {
      this.ngZone.run(() => {
        if (this.cpSaveClickOutside) {
          this.directiveInstance.colorSelected(this.outputColor);
        } else {
          this.hsva = null;
          this.setColorFromString(this.initialColor, false);
          if (this.cpCmykEnabled) {
            this.directiveInstance.cmykChanged(this.cmykColor);
          }
          this.directiveInstance.colorChanged(this.initialColor);
          this.directiveInstance.colorCanceled();
        }
        if (this.cpCloseClickOutside) {
          this.closeColorPicker();
        }
      });
    }
  }
  onAcceptColor(event) {
    event.stopPropagation();
    if (this.outputColor) {
      this.directiveInstance.colorSelected(this.outputColor);
    }
    if (this.cpDialogDisplay === "popup") {
      this.closeColorPicker();
    }
  }
  onCancelColor(event) {
    this.hsva = null;
    event.stopPropagation();
    this.directiveInstance.colorCanceled();
    this.setColorFromString(this.initialColor, true);
    if (this.cpDialogDisplay === "popup") {
      if (this.cpCmykEnabled) {
        this.directiveInstance.cmykChanged(this.cmykColor);
      }
      this.directiveInstance.colorChanged(this.initialColor, true);
      this.closeColorPicker();
    }
  }
  onEyeDropper() {
    if (!this.eyeDropperSupported)
      return;
    const eyeDropper = new window.EyeDropper();
    eyeDropper.open().then((eyeDropperResult) => {
      this.setColorFromString(eyeDropperResult.sRGBHex, true);
    });
  }
  onFormatToggle(change) {
    const availableFormats = this.dialogInputFields.length - (this.cpCmykEnabled ? 0 : 1);
    const nextFormat = ((this.dialogInputFields.indexOf(this.format) + change) % availableFormats + availableFormats) % availableFormats;
    this.format = this.dialogInputFields[nextFormat];
  }
  onColorChange(value) {
    this.hsva.s = value.s / value.rgX;
    this.hsva.v = value.v / value.rgY;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "lightness",
      value: this.hsva.v,
      color: this.outputColor
    });
    this.directiveInstance.sliderChanged({
      slider: "saturation",
      value: this.hsva.s,
      color: this.outputColor
    });
  }
  onHueChange(value) {
    this.hsva.h = value.v / value.rgX;
    this.sliderH = this.hsva.h;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "hue",
      value: this.hsva.h,
      color: this.outputColor
    });
  }
  onValueChange(value) {
    this.hsva.v = value.v / value.rgX;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "value",
      value: this.hsva.v,
      color: this.outputColor
    });
  }
  onAlphaChange(value) {
    this.hsva.a = value.v / value.rgX;
    this.updateColorPicker();
    this.directiveInstance.sliderChanged({
      slider: "alpha",
      value: this.hsva.a,
      color: this.outputColor
    });
  }
  onHexInput(value) {
    if (value === null) {
      this.updateColorPicker();
    } else {
      if (value && value[0] !== "#") {
        value = "#" + value;
      }
      let validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;
      if (this.cpAlphaChannel === "always") {
        validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
      }
      const valid = validHex.test(value);
      if (valid) {
        if (value.length < 5) {
          value = "#" + value.substring(1).split("").map((c) => c + c).join("");
        }
        if (this.cpAlphaChannel === "forced") {
          value += Math.round(this.hsva.a * 255).toString(16);
        }
        this.setColorFromString(value, true, false);
      }
      this.directiveInstance.inputChanged({
        input: "hex",
        valid,
        value,
        color: this.outputColor
      });
    }
  }
  onRedInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      rgba.r = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "red",
      valid,
      value: rgba.r,
      color: this.outputColor
    });
  }
  onBlueInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      rgba.b = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "blue",
      valid,
      value: rgba.b,
      color: this.outputColor
    });
  }
  onGreenInput(value) {
    const rgba = this.service.hsvaToRgba(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      rgba.g = value.v / value.rg;
      this.hsva = this.service.rgbaToHsva(rgba);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "green",
      valid,
      value: rgba.g,
      color: this.outputColor
    });
  }
  onHueInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.hsva.h = value.v / value.rg;
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "hue",
      valid,
      value: this.hsva.h,
      color: this.outputColor
    });
  }
  onValueInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.hsva.v = value.v / value.rg;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "value",
      valid,
      value: this.hsva.v,
      color: this.outputColor
    });
  }
  onAlphaInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.hsva.a = value.v / value.rg;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "alpha",
      valid,
      value: this.hsva.a,
      color: this.outputColor
    });
  }
  onLightnessInput(value) {
    const hsla = this.service.hsva2hsla(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      hsla.l = value.v / value.rg;
      this.hsva = this.service.hsla2hsva(hsla);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "lightness",
      valid,
      value: hsla.l,
      color: this.outputColor
    });
  }
  onSaturationInput(value) {
    const hsla = this.service.hsva2hsla(this.hsva);
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      hsla.s = value.v / value.rg;
      this.hsva = this.service.hsla2hsva(hsla);
      this.sliderH = this.hsva.h;
      this.updateColorPicker();
    }
    this.directiveInstance.inputChanged({
      input: "saturation",
      valid,
      value: hsla.s,
      color: this.outputColor
    });
  }
  onCyanInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.c = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "cyan",
      valid: true,
      value: this.cmyk.c,
      color: this.outputColor
    });
  }
  onMagentaInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.m = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "magenta",
      valid: true,
      value: this.cmyk.m,
      color: this.outputColor
    });
  }
  onYellowInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.y = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "yellow",
      valid: true,
      value: this.cmyk.y,
      color: this.outputColor
    });
  }
  onBlackInput(value) {
    const valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
    if (valid) {
      this.cmyk.k = value.v;
      this.updateColorPicker(false, true, true);
    }
    this.directiveInstance.inputChanged({
      input: "black",
      valid: true,
      value: this.cmyk.k,
      color: this.outputColor
    });
  }
  onAddPresetColor(event, value) {
    event.stopPropagation();
    if (!this.cpPresetColors.filter((color) => color === value).length) {
      this.cpPresetColors = this.cpPresetColors.concat(value);
      this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    }
  }
  onRemovePresetColor(event, value) {
    event.stopPropagation();
    this.cpPresetColors = this.cpPresetColors.filter((color) => color !== value);
    this.directiveInstance.presetColorsChanged(this.cpPresetColors);
  }
  // Private helper functions for the color picker dialog status
  openColorPicker() {
    if (!this.show) {
      this.show = true;
      this.hidden = true;
      setTimeout(() => {
        this.hidden = false;
        this.setDialogPosition();
        this.cdRef.detectChanges();
      }, 0);
      this.directiveInstance.stateChanged(true);
      if (!this.isIE10) {
        this.ngZone.runOutsideAngular(() => {
          if (SUPPORTS_TOUCH) {
            document.addEventListener("touchstart", this.listenerMouseDown);
          } else {
            document.addEventListener("mousedown", this.listenerMouseDown);
          }
        });
      }
      window.addEventListener("resize", this.listenerResize);
    }
  }
  closeColorPicker() {
    if (this.show) {
      this.show = false;
      this.directiveInstance.stateChanged(false);
      if (!this.isIE10) {
        if (SUPPORTS_TOUCH) {
          document.removeEventListener("touchstart", this.listenerMouseDown);
        } else {
          document.removeEventListener("mousedown", this.listenerMouseDown);
        }
      }
      window.removeEventListener("resize", this.listenerResize);
      if (!this.cdRef["destroyed"]) {
        this.cdRef.detectChanges();
      }
    }
  }
  updateColorPicker(emit = true, update = true, cmykInput = false) {
    if (this.sliderDimMax) {
      if (this.cpColorMode === 2) {
        this.hsva.s = 0;
      }
      let hue, hsla, rgba;
      const lastOutput = this.outputColor;
      hsla = this.service.hsva2hsla(this.hsva);
      if (!this.cpCmykEnabled) {
        rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
      } else {
        if (!cmykInput) {
          rgba = this.service.hsvaToRgba(this.hsva);
          this.cmyk = this.service.denormalizeCMYK(this.service.rgbaToCmyk(rgba));
        } else {
          rgba = this.service.cmykToRgb(this.service.normalizeCMYK(this.cmyk));
          this.hsva = this.service.rgbaToHsva(rgba);
        }
        rgba = this.service.denormalizeRGBA(rgba);
        this.sliderH = this.hsva.h;
      }
      hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
      if (update) {
        this.hslaText = new Hsla(Math.round(hsla.h * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
        this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
        if (this.cpCmykEnabled) {
          this.cmykText = new Cmyk(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k, Math.round(this.cmyk.a * 100) / 100);
        }
        const allowHex8 = this.cpAlphaChannel === "always";
        this.hexText = this.service.rgbaToHex(rgba, allowHex8);
        this.hexAlpha = this.rgbaText.a;
      }
      if (this.cpOutputFormat === "auto") {
        if (this.format !== ColorFormats.RGBA && this.format !== ColorFormats.CMYK && this.format !== ColorFormats.HSLA) {
          if (this.hsva.a < 1) {
            this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
          }
        }
      }
      this.hueSliderColor = "rgb(" + hue.r + "," + hue.g + "," + hue.b + ")";
      this.alphaSliderColor = "rgb(" + rgba.r + "," + rgba.g + "," + rgba.b + ")";
      this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
      this.selectedColor = this.service.outputFormat(this.hsva, "rgba", null);
      if (this.format !== ColorFormats.CMYK) {
        this.cmykColor = "";
      } else {
        if (this.cpAlphaChannel === "always" || this.cpAlphaChannel === "enabled" || this.cpAlphaChannel === "forced") {
          const alpha = Math.round(this.cmyk.a * 100) / 100;
          this.cmykColor = `cmyka(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k},${alpha})`;
        } else {
          this.cmykColor = `cmyk(${this.cmyk.c},${this.cmyk.m},${this.cmyk.y},${this.cmyk.k})`;
        }
      }
      this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
      if (emit && lastOutput !== this.outputColor) {
        if (this.cpCmykEnabled) {
          this.directiveInstance.cmykChanged(this.cmykColor);
        }
        this.directiveInstance.colorChanged(this.outputColor);
      }
    }
  }
  // Private helper functions for the color picker dialog positioning
  setDialogPosition() {
    if (this.cpDialogDisplay === "inline") {
      this.position = "relative";
    } else {
      let position = "static", transform = "", style;
      let parentNode = null, transformNode = null;
      let node = this.directiveElementRef.nativeElement.parentNode;
      const dialogHeight = this.dialogElement.nativeElement.offsetHeight;
      while (node !== null && node.tagName !== "HTML") {
        style = window.getComputedStyle(node);
        position = style.getPropertyValue("position");
        transform = style.getPropertyValue("transform");
        if (position !== "static" && parentNode === null) {
          parentNode = node;
        }
        if (transform && transform !== "none" && transformNode === null) {
          transformNode = node;
        }
        if (position === "fixed") {
          parentNode = transformNode;
          break;
        }
        node = node.parentNode;
      }
      const boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, position !== "fixed");
      if (this.useRootViewContainer || position === "fixed" && (!parentNode || parentNode instanceof HTMLUnknownElement)) {
        this.top = boxDirective.top;
        this.left = boxDirective.left;
      } else {
        if (parentNode === null) {
          parentNode = node;
        }
        const boxParent = this.createDialogBox(parentNode, position !== "fixed");
        this.top = boxDirective.top - boxParent.top;
        this.left = boxDirective.left - boxParent.left;
      }
      if (position === "fixed") {
        this.position = "fixed";
      }
      let usePosition = this.cpPosition;
      const dialogBounds = this.dialogElement.nativeElement.getBoundingClientRect();
      if (this.cpPosition === "auto") {
        const triggerBounds = this.cpTriggerElement.nativeElement.getBoundingClientRect();
        usePosition = calculateAutoPositioning(dialogBounds, triggerBounds);
      }
      this.arrowTop = usePosition === "top" ? dialogHeight - 1 : void 0;
      this.cpArrowPosition = void 0;
      switch (usePosition) {
        case "top":
          this.top -= dialogHeight + this.dialogArrowSize;
          this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
          break;
        case "bottom":
          this.top += boxDirective.height + this.dialogArrowSize;
          this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
          break;
        case "top-left":
        case "left-top":
          this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
          this.left -= this.cpWidth + this.dialogArrowSize - 2 - this.dialogArrowOffset;
          break;
        case "top-right":
        case "right-top":
          this.top -= dialogHeight - boxDirective.height + boxDirective.height * this.cpPositionOffset / 100;
          this.left += boxDirective.width + this.dialogArrowSize - 2 - this.dialogArrowOffset;
          break;
        case "left":
        case "bottom-left":
        case "left-bottom":
          this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
          this.left -= this.cpWidth + this.dialogArrowSize - 2;
          break;
        case "right":
        case "bottom-right":
        case "right-bottom":
        default:
          this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
          this.left += boxDirective.width + this.dialogArrowSize - 2;
          break;
      }
      const windowInnerHeight = window.innerHeight;
      const windowInnerWidth = window.innerWidth;
      const elRefClientRect = this.elRef.nativeElement.getBoundingClientRect();
      const bottom = this.top + dialogBounds.height;
      if (bottom > windowInnerHeight) {
        this.top = windowInnerHeight - dialogBounds.height;
        this.cpArrowPosition = elRefClientRect.x / 2 - 20;
      }
      const right = this.left + dialogBounds.width;
      if (right > windowInnerWidth) {
        this.left = windowInnerWidth - dialogBounds.width;
        this.cpArrowPosition = elRefClientRect.x / 2 - 20;
      }
      this.cpUsePosition = usePosition;
    }
  }
  // Private helper functions for the color picker dialog positioning and opening
  isDescendant(parent, child) {
    let node = child.parentNode;
    while (node !== null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }
  createDialogBox(element, offset) {
    const {
      top,
      left
    } = element.getBoundingClientRect();
    return {
      top: top + (offset ? window.pageYOffset : 0),
      left: left + (offset ? window.pageXOffset : 0),
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  static \u0275fac = function ColorPickerComponent_Factory(t) {
    return new (t || _ColorPickerComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ColorPickerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ColorPickerComponent,
    selectors: [["color-picker"]],
    viewQuery: function ColorPickerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 7);
        \u0275\u0275viewQuery(_c12, 7);
        \u0275\u0275viewQuery(_c22, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dialogElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hueSlider = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.alphaSlider = _t.first);
      }
    },
    hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keyup.esc", function ColorPickerComponent_keyup_esc_HostBindingHandler($event) {
          return ctx.handleEsc($event);
        }, false, \u0275\u0275resolveDocument)("keyup.enter", function ColorPickerComponent_keyup_enter_HostBindingHandler($event) {
          return ctx.handleEnter($event);
        }, false, \u0275\u0275resolveDocument);
      }
    },
    decls: 30,
    vars: 51,
    consts: [["dialogPopup", ""], ["hueSlider", ""], ["valueSlider", ""], ["alphaSlider", ""], [1, "color-picker", 3, "click"], [3, "left", "class", "top", 4, "ngIf"], ["class", "saturation-lightness", 3, "slider", "rgX", "rgY", "background-color", "newValue", "dragStart", "dragEnd", 4, "ngIf"], [1, "hue-alpha", "box"], [1, "left"], [1, "selected-color-background"], [1, "selected-color", 3, "click"], ["class", "eyedropper-icon", "xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 4, "ngIf"], ["type", "button", 3, "class", "disabled", "click", 4, "ngIf"], [1, "right"], ["style", "height: 16px;", 4, "ngIf"], [1, "hue", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX"], [1, "cursor"], [1, "value", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX"], [1, "alpha", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX"], ["class", "cmyk-text", 3, "display", 4, "ngIf"], ["class", "hsla-text", 3, "display", 4, "ngIf"], ["class", "rgba-text", 3, "display", 4, "ngIf"], ["class", "hex-text", 3, "hex-alpha", "display", 4, "ngIf"], ["class", "value-text", 4, "ngIf"], ["class", "type-policy", 4, "ngIf"], ["class", "preset-area", 4, "ngIf"], ["class", "button-area", 4, "ngIf"], ["class", "extra-template", 4, "ngIf"], [1, "saturation-lightness", 3, "newValue", "dragStart", "dragEnd", "slider", "rgX", "rgY"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24px", "viewBox", "0 0 24 24", "width", "24px", "fill", "#000000", 1, "eyedropper-icon"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M17.66 5.41l.92.92-2.69 2.69-.92-.92 2.69-2.69M17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"], ["type", "button", 3, "click", "disabled"], [2, "height", "16px"], [1, "cmyk-text"], [1, "box"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "100", 3, "keyup.enter", "newValue", "text", "rg", "value"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "text", "rg", "value", "keyup.enter", "newValue", 4, "ngIf"], [4, "ngIf"], ["type", "number", "pattern", "[0-9]+([\\.,][0-9]{1,2})?", "min", "0", "max", "1", "step", "0.1", 3, "keyup.enter", "newValue", "text", "rg", "value"], [1, "hsla-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "360", 3, "keyup.enter", "newValue", "text", "rg", "value"], [1, "rgba-text"], ["type", "number", "pattern", "[0-9]*", "min", "0", "max", "255", 3, "keyup.enter", "newValue", "text", "rg", "value"], [1, "hex-text"], [3, "blur", "keyup.enter", "newValue", "text", "value"], [1, "value-text"], [1, "type-policy"], [1, "type-policy-arrow", 3, "click"], [1, "preset-area"], [1, "preset-label"], [3, "class", 4, "ngIf"], ["class", "preset-color", 3, "backgroundColor", "click", 4, "ngFor", "ngForOf"], [1, "preset-color", 3, "click"], [3, "class", "click", 4, "ngIf"], [3, "click"], [1, "button-area"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"], [1, "extra-template"], [4, "ngTemplateOutlet"]],
    template: function ColorPickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4, 0);
        \u0275\u0275listener("click", function ColorPickerComponent_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275template(2, ColorPickerComponent_div_2_Template, 1, 7, "div", 5)(3, ColorPickerComponent_div_3_Template, 2, 8, "div", 6);
        \u0275\u0275elementStart(4, "div", 7)(5, "div", 8);
        \u0275\u0275element(6, "div", 9);
        \u0275\u0275elementStart(7, "div", 10);
        \u0275\u0275listener("click", function ColorPickerComponent_Template_div_click_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.eyeDropperSupported && ctx.cpEyeDropper && ctx.onEyeDropper());
        });
        \u0275\u0275template(8, ColorPickerComponent__svg_svg_8_Template, 3, 0, "svg", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, ColorPickerComponent_button_9_Template, 2, 5, "button", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 13);
        \u0275\u0275template(11, ColorPickerComponent_div_11_Template, 1, 0, "div", 14);
        \u0275\u0275elementStart(12, "div", 15, 1);
        \u0275\u0275listener("newValue", function ColorPickerComponent_Template_div_newValue_12_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onHueChange($event));
        })("dragStart", function ColorPickerComponent_Template_div_dragStart_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragStart("hue"));
        })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragEnd("hue"));
        });
        \u0275\u0275element(14, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 17, 2);
        \u0275\u0275listener("newValue", function ColorPickerComponent_Template_div_newValue_15_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onValueChange($event));
        })("dragStart", function ColorPickerComponent_Template_div_dragStart_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragStart("value"));
        })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragEnd("value"));
        });
        \u0275\u0275element(17, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 18, 3);
        \u0275\u0275listener("newValue", function ColorPickerComponent_Template_div_newValue_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onAlphaChange($event));
        })("dragStart", function ColorPickerComponent_Template_div_dragStart_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragStart("alpha"));
        })("dragEnd", function ColorPickerComponent_Template_div_dragEnd_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragEnd("alpha"));
        });
        \u0275\u0275element(20, "div", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(21, ColorPickerComponent_div_21_Template, 17, 12, "div", 19)(22, ColorPickerComponent_div_22_Template, 14, 10, "div", 20)(23, ColorPickerComponent_div_23_Template, 14, 10, "div", 21)(24, ColorPickerComponent_div_24_Template, 8, 7, "div", 22)(25, ColorPickerComponent_div_25_Template, 9, 3, "div", 23)(26, ColorPickerComponent_div_26_Template, 3, 0, "div", 24)(27, ColorPickerComponent_div_27_Template, 6, 3, "div", 25)(28, ColorPickerComponent_div_28_Template, 3, 2, "div", 26)(29, ColorPickerComponent_div_29_Template, 2, 1, "div", 27);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("display", !ctx.show ? "none" : "block")("visibility", ctx.hidden ? "hidden" : "visible")("top", ctx.top, "px")("left", ctx.left, "px")("position", ctx.position)("height", ctx.cpHeight, "px")("width", ctx.cpWidth, "px");
        \u0275\u0275classProp("open", ctx.show);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.cpDialogDisplay === "popup");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("background-color", ctx.selectedColor)("cursor", ctx.eyeDropperSupported && ctx.cpEyeDropper ? "pointer" : null);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.eyeDropperSupported && ctx.cpEyeDropper);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cpAddColorButton);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.cpAlphaChannel === "disabled");
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", (ctx.cpColorMode || 1) === 1 ? "block" : "none");
        \u0275\u0275property("rgX", 1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.slider == null ? null : ctx.slider.h, "px");
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", (ctx.cpColorMode || 1) === 2 ? "block" : "none");
        \u0275\u0275property("rgX", 1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("right", ctx.slider == null ? null : ctx.slider.v, "px");
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.cpAlphaChannel === "disabled" ? "none" : "block")("background-color", ctx.alphaSliderColor);
        \u0275\u0275property("rgX", 1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("left", ctx.slider == null ? null : ctx.slider.a, "px");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cpDisableInput && (ctx.cpColorMode || 1) === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.cpPresetColors == null ? null : ctx.cpPresetColors.length) || ctx.cpAddColorButton);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cpOKButton || ctx.cpCancelButton);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cpExtraTemplate);
      }
    },
    dependencies: [NgForOf, NgIf, NgTemplateOutlet, TextDirective, SliderDirective],
    styles: ['.color-picker{position:absolute;z-index:1000;width:230px;height:auto;border:#777 solid 1px;cursor:default;-webkit-user-select:none;user-select:none;background-color:#fff}.color-picker *{box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .arrow{position:absolute;z-index:999999;width:0;height:0;border-style:solid}.color-picker .arrow.arrow-top{left:8px;border-width:10px 5px;border-color:#777 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-bottom{top:-20px;left:8px;border-width:10px 5px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #777 rgba(0,0,0,0)}.color-picker .arrow.arrow-top-left,.color-picker .arrow.arrow-left-top{right:-21px;bottom:8px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-top-right,.color-picker .arrow.arrow-right-top{bottom:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom,.color-picker .arrow.arrow-bottom-left{top:8px;right:-21px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom,.color-picker .arrow.arrow-bottom-right{top:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .cursor{position:relative;width:16px;height:16px;border:#222 solid 2px;border-radius:50%;cursor:default}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{overflow:hidden;width:100%;padding:4px;font-size:11px;white-space:nowrap;text-align:left;text-overflow:ellipsis;color:#555}.color-picker .preset-area .preset-color{position:relative;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;border:#a9a9a9 solid 1px;border-radius:25%;cursor:pointer}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hex-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{float:left;flex:1 1 auto;text-align:center;color:#555;clear:left}.color-picker .hex-text .box input{flex:1 1 auto;padding:1px;border:#a9a9a9 solid 1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{flex:1 1 auto;margin-right:8px;text-align:center;color:#555}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{float:left;flex:1;padding:1px;margin:0 8px 0 0;border:#a9a9a9 solid 1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .value{direction:rtl;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=)}.color-picker .alpha{direction:ltr;width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .type-policy{position:absolute;top:218px;right:12px;width:16px;height:24px;background-size:8px 16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center}.color-picker .type-policy .type-policy-arrow{display:block;width:100%;height:50%}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;border:1px solid #a9a9a9;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}.color-picker .saturation-lightness{direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.color-picker .cp-add-color-button-class{position:absolute;display:inline;padding:0;margin:3px -3px;border:0;cursor:pointer;background:transparent}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{cursor:not-allowed;color:#999}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{position:absolute;top:-5px;right:-5px;display:block;width:10px;height:10px;border-radius:50%;cursor:pointer;text-align:center;background:#fff;box-shadow:1px 1px 5px #333}.color-picker .cp-remove-color-button-class:before{content:"x";position:relative;bottom:3.5px;display:inline-block;font-size:10px}.color-picker .eyedropper-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff;mix-blend-mode:exclusion}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerComponent, [{
    type: Component,
    args: [{
      selector: "color-picker",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div #dialogPopup class="color-picker" [class.open]="show" [style.display]="!show ? 'none' : 'block'" [style.visibility]="hidden ? 'hidden' : 'visible'" [style.top.px]="top" [style.left.px]="left" [style.position]="position" [style.height.px]="cpHeight" [style.width.px]="cpWidth" (click)="$event.stopPropagation()">
  <div *ngIf="cpDialogDisplay === 'popup'" [style.left]="cpArrowPosition" class="arrow arrow-{{cpUsePosition}}" [style.top.px]="arrowTop"></div>

  <div *ngIf="(cpColorMode ||\xA01) === 1" class="saturation-lightness" [slider] [rgX]="1" [rgY]="1" [style.background-color]="hueSliderColor" (newValue)="onColorChange($event)" (dragStart)="onDragStart('saturation-lightness')" (dragEnd)="onDragEnd('saturation-lightness')">
    <div class="cursor" [style.top.px]="slider?.v" [style.left.px]="slider?.s"></div>
  </div>

  <div class="hue-alpha box">
    <div class="left">
      <div class="selected-color-background"></div>

      <div class="selected-color" [style.background-color]="selectedColor" [style.cursor]="eyeDropperSupported && cpEyeDropper ? 'pointer' : null" (click)="eyeDropperSupported && cpEyeDropper && onEyeDropper()">
        <svg *ngIf="eyeDropperSupported && cpEyeDropper" class="eyedropper-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.66 5.41l.92.92-2.69 2.69-.92-.92 2.69-2.69M17.67 3c-.26 0-.51.1-.71.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42l-2.34-2.34c-.2-.19-.45-.29-.7-.29zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"/></svg>
      </div>

      <button *ngIf="cpAddColorButton" type="button" class="{{cpAddColorButtonClass}}" [disabled]="cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength" (click)="onAddPresetColor($event, selectedColor)">
        {{cpAddColorButtonText}}
      </button>
    </div>

    <div class="right">
      <div *ngIf="cpAlphaChannel==='disabled'" style="height: 16px;"></div>

      <div #hueSlider class="hue" [slider] [rgX]="1" [style.display]="(cpColorMode ||\xA01) === 1 ? 'block' : 'none'" (newValue)="onHueChange($event)" (dragStart)="onDragStart('hue')" (dragEnd)="onDragEnd('hue')">
        <div class="cursor" [style.left.px]="slider?.h"></div>
      </div>

      <div #valueSlider class="value" [slider] [rgX]="1" [style.display]="(cpColorMode ||\xA01) === 2 ? 'block': 'none'" (newValue)="onValueChange($event)" (dragStart)="onDragStart('value')" (dragEnd)="onDragEnd('value')">
        <div class="cursor" [style.right.px]="slider?.v"></div>
      </div>

      <div #alphaSlider class="alpha" [slider] [rgX]="1" [style.display]="cpAlphaChannel === 'disabled' ? 'none' : 'block'" [style.background-color]="alphaSliderColor" (newValue)="onAlphaChange($event)" (dragStart)="onDragStart('alpha')" (dragEnd)="onDragEnd('alpha')">
        <div class="cursor" [style.left.px]="slider?.a"></div>
      </div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1" class="cmyk-text" [style.display]="format !== 3 ? 'none' : 'block'">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.c" (keyup.enter)="onAcceptColor($event)" (newValue)="onCyanInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.m" (keyup.enter)="onAcceptColor($event)" (newValue)="onMagentaInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.y" (keyup.enter)="onAcceptColor($event)" (newValue)="onYellowInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="cmykText?.k" (keyup.enter)="onAcceptColor($event)" (newValue)="onBlackInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="cmykText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

     <div class="box">
      <div>C</div><div>M</div><div>Y</div><div>K</div><div *ngIf="cpAlphaChannel!=='disabled'" >A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1 " class="hsla-text" [style.display]="format !== 2 ? 'none' : 'block'">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="360" [text] [rg]="360" [value]="hslaText?.h" (keyup.enter)="onAcceptColor($event)" (newValue)="onHueInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="hslaText?.s" (keyup.enter)="onAcceptColor($event)" (newValue)="onSaturationInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="hslaText?.l" (keyup.enter)="onAcceptColor($event)" (newValue)="onLightnessInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="hslaText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

    <div class="box">
      <div>H</div><div>S</div><div>L</div><div *ngIf="cpAlphaChannel!=='disabled'">A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1 " [style.display]="format !== 1 ? 'none' : 'block'" class="rgba-text">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="255" [text] [rg]="255" [value]="rgbaText?.r" (keyup.enter)="onAcceptColor($event)" (newValue)="onRedInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="255" [text] [rg]="255" [value]="rgbaText?.g" (keyup.enter)="onAcceptColor($event)" (newValue)="onGreenInput($event)" />
      <input type="number" pattern="[0-9]*" min="0" max="255" [text] [rg]="255" [value]="rgbaText?.b" (keyup.enter)="onAcceptColor($event)" (newValue)="onBlueInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="rgbaText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

    <div class="box">
      <div>R</div><div>G</div><div>B</div><div *ngIf="cpAlphaChannel!=='disabled'" >A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1" class="hex-text" [class.hex-alpha]="cpAlphaChannel==='forced'"
    [style.display]="format !== 0 ? 'none' : 'block'">
    <div class="box">
      <input [text] [value]="hexText" (blur)="onHexInput(null)" (keyup.enter)="onAcceptColor($event)" (newValue)="onHexInput($event)"/>
      <input *ngIf="cpAlphaChannel==='forced'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1" [text] [rg]="1" [value]="hexAlpha" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)"/>
    </div>

    <div class="box">
      <div>Hex</div>
      <div *ngIf="cpAlphaChannel==='forced'">A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 2" class="value-text">
    <div class="box">
      <input type="number" pattern="[0-9]*" min="0" max="100" [text] [rg]="100" [value]="hslaText?.l" (keyup.enter)="onAcceptColor($event)" (newValue)="onValueInput($event)" />
      <input *ngIf="cpAlphaChannel!=='disabled'" type="number" pattern="[0-9]+([\\.,][0-9]{1,2})?" min="0" max="1" step="0.1"  [text] [rg]="1" [value]="hslaText?.a" (keyup.enter)="onAcceptColor($event)" (newValue)="onAlphaInput($event)" />
    </div>

    <div class="box">
      <div>V</div><div>A</div>
    </div>
  </div>

  <div *ngIf="!cpDisableInput && (cpColorMode ||\xA01) === 1" class="type-policy">
    <span class="type-policy-arrow" (click)="onFormatToggle(-1)"></span>
    <span class="type-policy-arrow" (click)="onFormatToggle(1)"></span>
  </div>

  <div *ngIf="cpPresetColors?.length || cpAddColorButton" class="preset-area">
    <hr>

    <div class="preset-label">{{cpPresetLabel}}</div>

    <div *ngIf="cpPresetColors?.length" class="{{cpPresetColorsClass}}">
      <div *ngFor="let color of cpPresetColors" class="preset-color" [style.backgroundColor]="color" (click)="setColorFromString(color)">
        <span *ngIf="cpAddColorButton" class="{{cpRemoveColorButtonClass}}" (click)="onRemovePresetColor($event, color)"></span>
      </div>
    </div>

    <div *ngIf="!cpPresetColors?.length && cpAddColorButton" class="{{cpPresetEmptyMessageClass}}">{{cpPresetEmptyMessage}}</div>
  </div>

  <div *ngIf="cpOKButton || cpCancelButton" class="button-area">
    <button *ngIf="cpCancelButton" type="button" class="{{cpCancelButtonClass}}" (click)="onCancelColor($event)">{{cpCancelButtonText}}</button>

    <button *ngIf="cpOKButton" type="button" class="{{cpOKButtonClass}}" (click)="onAcceptColor($event)">{{cpOKButtonText}}</button>
  </div>

  <div class="extra-template" *ngIf="cpExtraTemplate">
    <ng-container *ngTemplateOutlet="cpExtraTemplate"></ng-container>
  </div>
</div>
`,
      styles: ['.color-picker{position:absolute;z-index:1000;width:230px;height:auto;border:#777 solid 1px;cursor:default;-webkit-user-select:none;user-select:none;background-color:#fff}.color-picker *{box-sizing:border-box;margin:0;font-size:11px}.color-picker input{width:0;height:26px;min-width:0;font-size:13px;text-align:center;color:#000}.color-picker input:invalid,.color-picker input:-moz-ui-invalid,.color-picker input:-moz-submit-invalid{box-shadow:none}.color-picker input::-webkit-inner-spin-button,.color-picker input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.color-picker .arrow{position:absolute;z-index:999999;width:0;height:0;border-style:solid}.color-picker .arrow.arrow-top{left:8px;border-width:10px 5px;border-color:#777 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-bottom{top:-20px;left:8px;border-width:10px 5px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #777 rgba(0,0,0,0)}.color-picker .arrow.arrow-top-left,.color-picker .arrow.arrow-left-top{right:-21px;bottom:8px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-top-right,.color-picker .arrow.arrow-right-top{bottom:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .arrow.arrow-left,.color-picker .arrow.arrow-left-bottom,.color-picker .arrow.arrow-bottom-left{top:8px;right:-21px;border-width:5px 10px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #777}.color-picker .arrow.arrow-right,.color-picker .arrow.arrow-right-bottom,.color-picker .arrow.arrow-bottom-right{top:8px;left:-20px;border-width:5px 10px;border-color:rgba(0,0,0,0) #777 rgba(0,0,0,0) rgba(0,0,0,0)}.color-picker .cursor{position:relative;width:16px;height:16px;border:#222 solid 2px;border-radius:50%;cursor:default}.color-picker .box{display:flex;padding:4px 8px}.color-picker .left{position:relative;padding:16px 8px}.color-picker .right{flex:1 1 auto;padding:12px 8px}.color-picker .button-area{padding:0 16px 16px;text-align:right}.color-picker .button-area button{margin-left:8px}.color-picker .preset-area{padding:4px 15px}.color-picker .preset-area .preset-label{overflow:hidden;width:100%;padding:4px;font-size:11px;white-space:nowrap;text-align:left;text-overflow:ellipsis;color:#555}.color-picker .preset-area .preset-color{position:relative;display:inline-block;width:18px;height:18px;margin:4px 6px 8px;border:#a9a9a9 solid 1px;border-radius:25%;cursor:pointer}.color-picker .preset-area .preset-empty-message{min-height:18px;margin-top:4px;margin-bottom:8px;font-style:italic;text-align:center}.color-picker .hex-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .hex-text .box{padding:0 24px 8px 8px}.color-picker .hex-text .box div{float:left;flex:1 1 auto;text-align:center;color:#555;clear:left}.color-picker .hex-text .box input{flex:1 1 auto;padding:1px;border:#a9a9a9 solid 1px}.color-picker .hex-alpha .box div:first-child,.color-picker .hex-alpha .box input:first-child{flex-grow:3;margin-right:8px}.color-picker .cmyk-text,.color-picker .hsla-text,.color-picker .rgba-text,.color-picker .value-text{width:100%;padding:4px 8px;font-size:11px}.color-picker .cmyk-text .box,.color-picker .hsla-text .box,.color-picker .rgba-text .box{padding:0 24px 8px 8px}.color-picker .value-text .box{padding:0 8px 8px}.color-picker .cmyk-text .box div,.color-picker .hsla-text .box div,.color-picker .rgba-text .box div,.color-picker .value-text .box div{flex:1 1 auto;margin-right:8px;text-align:center;color:#555}.color-picker .cmyk-text .box div:last-child,.color-picker .hsla-text .box div:last-child,.color-picker .rgba-text .box div:last-child,.color-picker .value-text .box div:last-child{margin-right:0}.color-picker .cmyk-text .box input,.color-picker .hsla-text .box input,.color-picker .rgba-text .box input,.color-picker .value-text .box input{float:left;flex:1;padding:1px;margin:0 8px 0 0;border:#a9a9a9 solid 1px}.color-picker .cmyk-text .box input:last-child,.color-picker .hsla-text .box input:last-child,.color-picker .rgba-text .box input:last-child,.color-picker .value-text .box input:last-child{margin-right:0}.color-picker .hue-alpha{align-items:center;margin-bottom:3px}.color-picker .hue{direction:ltr;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC)}.color-picker .value{direction:rtl;width:100%;height:16px;margin-bottom:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=)}.color-picker .alpha{direction:ltr;width:100%;height:16px;border:none;cursor:pointer;background-size:100% 100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==)}.color-picker .type-policy{position:absolute;top:218px;right:12px;width:16px;height:24px;background-size:8px 16px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center}.color-picker .type-policy .type-policy-arrow{display:block;width:100%;height:50%}.color-picker .selected-color{position:absolute;top:16px;left:8px;width:40px;height:40px;border:1px solid #a9a9a9;border-radius:50%}.color-picker .selected-color-background{width:40px;height:40px;border-radius:50%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC)}.color-picker .saturation-lightness{direction:ltr;width:100%;height:130px;border:none;cursor:pointer;touch-action:manipulation;background-size:100% 100%;background-image:url(data:image/png;base64,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)}.color-picker .cp-add-color-button-class{position:absolute;display:inline;padding:0;margin:3px -3px;border:0;cursor:pointer;background:transparent}.color-picker .cp-add-color-button-class:hover{text-decoration:underline}.color-picker .cp-add-color-button-class:disabled{cursor:not-allowed;color:#999}.color-picker .cp-add-color-button-class:disabled:hover{text-decoration:none}.color-picker .cp-remove-color-button-class{position:absolute;top:-5px;right:-5px;display:block;width:10px;height:10px;border-radius:50%;cursor:pointer;text-align:center;background:#fff;box-shadow:1px 1px 5px #333}.color-picker .cp-remove-color-button-class:before{content:"x";position:relative;bottom:3.5px;display:inline-block;font-size:10px}.color-picker .eyedropper-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff;mix-blend-mode:exclusion}\n']
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ColorPickerService
  }], {
    dialogElement: [{
      type: ViewChild,
      args: ["dialogPopup", {
        static: true
      }]
    }],
    hueSlider: [{
      type: ViewChild,
      args: ["hueSlider", {
        static: true
      }]
    }],
    alphaSlider: [{
      type: ViewChild,
      args: ["alphaSlider", {
        static: true
      }]
    }],
    handleEsc: [{
      type: HostListener,
      args: ["document:keyup.esc", ["$event"]]
    }],
    handleEnter: [{
      type: HostListener,
      args: ["document:keyup.enter", ["$event"]]
    }]
  });
})();
var NG_DEV_MODE = typeof ngDevMode === "undefined" || !!ngDevMode;
var ColorPickerDirective = class _ColorPickerDirective {
  injector;
  cfr;
  appRef;
  vcRef;
  elRef;
  _service;
  dialog;
  dialogCreated = false;
  ignoreChanges = false;
  cmpRef;
  viewAttachedToAppRef = false;
  colorPicker;
  cpWidth = "230px";
  cpHeight = "auto";
  cpToggle = false;
  cpDisabled = false;
  cpIgnoredElements = [];
  cpFallbackColor = "";
  cpColorMode = "color";
  cpCmykEnabled = false;
  cpOutputFormat = "auto";
  cpAlphaChannel = "enabled";
  cpDisableInput = false;
  cpDialogDisplay = "popup";
  cpSaveClickOutside = true;
  cpCloseClickOutside = true;
  cpUseRootViewContainer = false;
  cpPosition = "auto";
  cpPositionOffset = "0%";
  cpPositionRelativeToArrow = false;
  cpOKButton = false;
  cpOKButtonText = "OK";
  cpOKButtonClass = "cp-ok-button-class";
  cpCancelButton = false;
  cpCancelButtonText = "Cancel";
  cpCancelButtonClass = "cp-cancel-button-class";
  cpEyeDropper = false;
  cpPresetLabel = "Preset colors";
  cpPresetColors;
  cpPresetColorsClass = "cp-preset-colors-class";
  cpMaxPresetColorsLength = 6;
  cpPresetEmptyMessage = "No colors added";
  cpPresetEmptyMessageClass = "preset-empty-message";
  cpAddColorButton = false;
  cpAddColorButtonText = "Add color";
  cpAddColorButtonClass = "cp-add-color-button-class";
  cpRemoveColorButtonClass = "cp-remove-color-button-class";
  cpArrowPosition = 0;
  cpExtraTemplate;
  cpInputChange = new EventEmitter(true);
  cpToggleChange = new EventEmitter(true);
  cpSliderChange = new EventEmitter(true);
  cpSliderDragEnd = new EventEmitter(true);
  cpSliderDragStart = new EventEmitter(true);
  colorPickerOpen = new EventEmitter(true);
  colorPickerClose = new EventEmitter(true);
  colorPickerCancel = new EventEmitter(true);
  colorPickerSelect = new EventEmitter(true);
  colorPickerChange = new EventEmitter(false);
  cpCmykColorChange = new EventEmitter(true);
  cpPresetColorsChange = new EventEmitter(true);
  handleClick() {
    this.inputFocus();
  }
  handleFocus() {
    this.inputFocus();
  }
  handleInput(event) {
    this.inputChange(event);
  }
  constructor(injector, cfr, appRef, vcRef, elRef, _service) {
    this.injector = injector;
    this.cfr = cfr;
    this.appRef = appRef;
    this.vcRef = vcRef;
    this.elRef = elRef;
    this._service = _service;
  }
  ngOnDestroy() {
    if (this.cmpRef != null) {
      if (this.viewAttachedToAppRef) {
        this.appRef.detachView(this.cmpRef.hostView);
      }
      this.cmpRef.destroy();
      this.cmpRef = null;
      this.dialog = null;
    }
  }
  ngOnChanges(changes) {
    if (changes.cpToggle && !this.cpDisabled) {
      if (changes.cpToggle.currentValue) {
        this.openDialog();
      } else if (!changes.cpToggle.currentValue) {
        this.closeDialog();
      }
    }
    if (changes.colorPicker) {
      if (this.dialog && !this.ignoreChanges) {
        if (this.cpDialogDisplay === "inline") {
          this.dialog.setInitialColor(changes.colorPicker.currentValue);
        }
        this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
        if (this.cpUseRootViewContainer && this.cpDialogDisplay !== "inline") {
          this.cmpRef.changeDetectorRef.detectChanges();
        }
      }
      this.ignoreChanges = false;
    }
    if (changes.cpPresetLabel || changes.cpPresetColors) {
      if (this.dialog) {
        this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
      }
    }
  }
  openDialog() {
    if (!this.dialogCreated) {
      let vcRef = this.vcRef;
      this.dialogCreated = true;
      this.viewAttachedToAppRef = false;
      if (this.cpUseRootViewContainer && this.cpDialogDisplay !== "inline") {
        const classOfRootComponent = this.appRef.componentTypes[0];
        const appInstance = this.injector.get(classOfRootComponent, Injector.NULL);
        if (appInstance !== Injector.NULL) {
          vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
          if (NG_DEV_MODE && vcRef === this.vcRef) {
            console.warn("You are using cpUseRootViewContainer, but the root component is not exposing viewContainerRef!Please expose it by adding 'public vcRef: ViewContainerRef' to the constructor.");
          }
        } else {
          this.viewAttachedToAppRef = true;
        }
      }
      const compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
      if (this.viewAttachedToAppRef) {
        this.cmpRef = compFactory.create(this.injector);
        this.appRef.attachView(this.cmpRef.hostView);
        document.body.appendChild(this.cmpRef.hostView.rootNodes[0]);
      } else {
        const injector = Injector.create({
          providers: [],
          // We shouldn't use `vcRef.parentInjector` since it's been deprecated long time ago and might be removed
          // in newer Angular versions: https://github.com/angular/angular/pull/25174.
          parent: vcRef.injector
        });
        this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
      }
      this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpCmykEnabled, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpPresetColorsClass, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass, this.cpEyeDropper, this.elRef, this.cpExtraTemplate);
      this.dialog = this.cmpRef.instance;
      if (this.vcRef !== vcRef) {
        this.cmpRef.changeDetectorRef.detectChanges();
      }
    } else if (this.dialog) {
      this.dialog.openDialog(this.colorPicker);
    }
  }
  closeDialog() {
    if (this.dialog && this.cpDialogDisplay === "popup") {
      this.dialog.closeDialog();
    }
  }
  cmykChanged(value) {
    this.cpCmykColorChange.emit(value);
  }
  stateChanged(state) {
    this.cpToggleChange.emit(state);
    if (state) {
      this.colorPickerOpen.emit(this.colorPicker);
    } else {
      this.colorPickerClose.emit(this.colorPicker);
    }
  }
  colorChanged(value, ignore = true) {
    this.ignoreChanges = ignore;
    this.colorPickerChange.emit(value);
  }
  colorSelected(value) {
    this.colorPickerSelect.emit(value);
  }
  colorCanceled() {
    this.colorPickerCancel.emit();
  }
  inputFocus() {
    const element = this.elRef.nativeElement;
    const ignored = this.cpIgnoredElements.filter((item) => item === element);
    if (!this.cpDisabled && !ignored.length) {
      if (typeof document !== "undefined" && element === document.activeElement) {
        this.openDialog();
      } else if (!this.dialog || !this.dialog.show) {
        this.openDialog();
      } else {
        this.closeDialog();
      }
    }
  }
  inputChange(event) {
    if (this.dialog) {
      this.dialog.setColorFromString(event.target.value, true);
    } else {
      this.colorPicker = event.target.value;
      this.colorPickerChange.emit(this.colorPicker);
    }
  }
  inputChanged(event) {
    this.cpInputChange.emit(event);
  }
  sliderChanged(event) {
    this.cpSliderChange.emit(event);
  }
  sliderDragEnd(event) {
    this.cpSliderDragEnd.emit(event);
  }
  sliderDragStart(event) {
    this.cpSliderDragStart.emit(event);
  }
  presetColorsChanged(value) {
    this.cpPresetColorsChange.emit(value);
  }
  static \u0275fac = function ColorPickerDirective_Factory(t) {
    return new (t || _ColorPickerDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(ApplicationRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ColorPickerService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ColorPickerDirective,
    selectors: [["", "colorPicker", ""]],
    hostBindings: function ColorPickerDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function ColorPickerDirective_click_HostBindingHandler() {
          return ctx.handleClick();
        })("focus", function ColorPickerDirective_focus_HostBindingHandler() {
          return ctx.handleFocus();
        })("input", function ColorPickerDirective_input_HostBindingHandler($event) {
          return ctx.handleInput($event);
        });
      }
    },
    inputs: {
      colorPicker: "colorPicker",
      cpWidth: "cpWidth",
      cpHeight: "cpHeight",
      cpToggle: "cpToggle",
      cpDisabled: "cpDisabled",
      cpIgnoredElements: "cpIgnoredElements",
      cpFallbackColor: "cpFallbackColor",
      cpColorMode: "cpColorMode",
      cpCmykEnabled: "cpCmykEnabled",
      cpOutputFormat: "cpOutputFormat",
      cpAlphaChannel: "cpAlphaChannel",
      cpDisableInput: "cpDisableInput",
      cpDialogDisplay: "cpDialogDisplay",
      cpSaveClickOutside: "cpSaveClickOutside",
      cpCloseClickOutside: "cpCloseClickOutside",
      cpUseRootViewContainer: "cpUseRootViewContainer",
      cpPosition: "cpPosition",
      cpPositionOffset: "cpPositionOffset",
      cpPositionRelativeToArrow: "cpPositionRelativeToArrow",
      cpOKButton: "cpOKButton",
      cpOKButtonText: "cpOKButtonText",
      cpOKButtonClass: "cpOKButtonClass",
      cpCancelButton: "cpCancelButton",
      cpCancelButtonText: "cpCancelButtonText",
      cpCancelButtonClass: "cpCancelButtonClass",
      cpEyeDropper: "cpEyeDropper",
      cpPresetLabel: "cpPresetLabel",
      cpPresetColors: "cpPresetColors",
      cpPresetColorsClass: "cpPresetColorsClass",
      cpMaxPresetColorsLength: "cpMaxPresetColorsLength",
      cpPresetEmptyMessage: "cpPresetEmptyMessage",
      cpPresetEmptyMessageClass: "cpPresetEmptyMessageClass",
      cpAddColorButton: "cpAddColorButton",
      cpAddColorButtonText: "cpAddColorButtonText",
      cpAddColorButtonClass: "cpAddColorButtonClass",
      cpRemoveColorButtonClass: "cpRemoveColorButtonClass",
      cpArrowPosition: "cpArrowPosition",
      cpExtraTemplate: "cpExtraTemplate"
    },
    outputs: {
      cpInputChange: "cpInputChange",
      cpToggleChange: "cpToggleChange",
      cpSliderChange: "cpSliderChange",
      cpSliderDragEnd: "cpSliderDragEnd",
      cpSliderDragStart: "cpSliderDragStart",
      colorPickerOpen: "colorPickerOpen",
      colorPickerClose: "colorPickerClose",
      colorPickerCancel: "colorPickerCancel",
      colorPickerSelect: "colorPickerSelect",
      colorPickerChange: "colorPickerChange",
      cpCmykColorChange: "cpCmykColorChange",
      cpPresetColorsChange: "cpPresetColorsChange"
    },
    exportAs: ["ngxColorPicker"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerDirective, [{
    type: Directive,
    args: [{
      selector: "[colorPicker]",
      exportAs: "ngxColorPicker"
    }]
  }], () => [{
    type: Injector
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: ApplicationRef
  }, {
    type: ViewContainerRef
  }, {
    type: ElementRef
  }, {
    type: ColorPickerService
  }], {
    colorPicker: [{
      type: Input
    }],
    cpWidth: [{
      type: Input
    }],
    cpHeight: [{
      type: Input
    }],
    cpToggle: [{
      type: Input
    }],
    cpDisabled: [{
      type: Input
    }],
    cpIgnoredElements: [{
      type: Input
    }],
    cpFallbackColor: [{
      type: Input
    }],
    cpColorMode: [{
      type: Input
    }],
    cpCmykEnabled: [{
      type: Input
    }],
    cpOutputFormat: [{
      type: Input
    }],
    cpAlphaChannel: [{
      type: Input
    }],
    cpDisableInput: [{
      type: Input
    }],
    cpDialogDisplay: [{
      type: Input
    }],
    cpSaveClickOutside: [{
      type: Input
    }],
    cpCloseClickOutside: [{
      type: Input
    }],
    cpUseRootViewContainer: [{
      type: Input
    }],
    cpPosition: [{
      type: Input
    }],
    cpPositionOffset: [{
      type: Input
    }],
    cpPositionRelativeToArrow: [{
      type: Input
    }],
    cpOKButton: [{
      type: Input
    }],
    cpOKButtonText: [{
      type: Input
    }],
    cpOKButtonClass: [{
      type: Input
    }],
    cpCancelButton: [{
      type: Input
    }],
    cpCancelButtonText: [{
      type: Input
    }],
    cpCancelButtonClass: [{
      type: Input
    }],
    cpEyeDropper: [{
      type: Input
    }],
    cpPresetLabel: [{
      type: Input
    }],
    cpPresetColors: [{
      type: Input
    }],
    cpPresetColorsClass: [{
      type: Input
    }],
    cpMaxPresetColorsLength: [{
      type: Input
    }],
    cpPresetEmptyMessage: [{
      type: Input
    }],
    cpPresetEmptyMessageClass: [{
      type: Input
    }],
    cpAddColorButton: [{
      type: Input
    }],
    cpAddColorButtonText: [{
      type: Input
    }],
    cpAddColorButtonClass: [{
      type: Input
    }],
    cpRemoveColorButtonClass: [{
      type: Input
    }],
    cpArrowPosition: [{
      type: Input
    }],
    cpExtraTemplate: [{
      type: Input
    }],
    cpInputChange: [{
      type: Output
    }],
    cpToggleChange: [{
      type: Output
    }],
    cpSliderChange: [{
      type: Output
    }],
    cpSliderDragEnd: [{
      type: Output
    }],
    cpSliderDragStart: [{
      type: Output
    }],
    colorPickerOpen: [{
      type: Output
    }],
    colorPickerClose: [{
      type: Output
    }],
    colorPickerCancel: [{
      type: Output
    }],
    colorPickerSelect: [{
      type: Output
    }],
    colorPickerChange: [{
      type: Output
    }],
    cpCmykColorChange: [{
      type: Output
    }],
    cpPresetColorsChange: [{
      type: Output
    }],
    handleClick: [{
      type: HostListener,
      args: ["click"]
    }],
    handleFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    handleInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var ColorPickerModule = class _ColorPickerModule {
  static \u0275fac = function ColorPickerModule_Factory(t) {
    return new (t || _ColorPickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ColorPickerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [ColorPickerService],
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [ColorPickerDirective],
      providers: [ColorPickerService],
      declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective]
    }]
  }], null, null);
})();

// src/app/shared/components/switcher/switcher.ts
function handleThemeUpdate(cssVars) {
  const root = document.querySelector(":root");
  const keys = Object.keys(cssVars);
  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
var isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);
var getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"));
var convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16);
function hexToRgba(hexValue) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `${r} ${g} ${b}`;
}
function hexToRgba1(hexValue) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b] = hexArr.map(convertHexUnitTo256);
  return `${r} ${g} ${b}`;
}
function hexToRgba2(hexValue) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `${r - 14}, ${g - 14}, ${b - 14}`;
}
function hexToRgba3(hexValue) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `${r - 9}, ${g - 9}, ${b - 9}`;
}
function dynamicLightPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName = `--${item.getAttribute("data-id")}`;
    const cssPropName1 = `--color-${item.getAttribute("data-id1")}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba1(color),
      [cssPropName1]: hexToRgba(color)
    });
  });
}
function dynamicBgTrasnsparentPrimaryColor(primaryColor, color) {
  primaryColor.forEach((item) => {
    const cssPropName3 = `--${item.getAttribute("data-id3")}`;
    const cssPropName1 = `--body-${item.getAttribute("data-id5")}`;
    const cssPropName2 = `--dark-${item.getAttribute("data-id6")}`;
    handleThemeUpdate({
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba2(color),
      [cssPropName3]: hexToRgba3(color)
    });
  });
}
function localStorageBackUp() {
  let html = document.querySelector("html");
  if (localStorage.getItem("data-header-styles") == "dark") {
    if (localStorage.getItem("ynex-theme-mode")) {
      const type = localStorage.getItem("ynex-theme-mode");
      html?.setAttribute("class", type);
    }
    if (html?.setAttribute("class", "dark")) {
      const light = document.getElementById("switcher-light");
      light.checked = true;
    } else {
      if (html?.setAttribute("class", "light")) {
        const light = document.getElementById("switcher-light");
        light.checked = true;
      }
    }
  }
  if (localStorage.getItem("ynex-dir") == "rtl") {
    html?.setAttribute("dir", "rtl");
  }
  if (localStorage.getItem("ynex-theme-mode")) {
    const type = localStorage.getItem("ynex-theme-mode");
    html?.setAttribute("class", type);
  }
  if (localStorage.getItem("ynex-nav-mode")) {
    const type = localStorage.getItem("ynex-nav-mode");
    html?.setAttribute("data-nav-layout", type);
    if (type == "horizontal") {
      html?.setAttribute("data-nav-style", "menu-click");
      html?.removeAttribute("data-vertical-style");
    }
  }
  if (localStorage.getItem("ynex-page-mode")) {
    const type = localStorage.getItem("ynex-page-mode");
    html?.setAttribute("data-page-style", type);
  }
  if (localStorage.getItem("ynex-width-mode")) {
    const type = localStorage.getItem("ynex-width-mode");
    html?.setAttribute("data-width", type);
  }
  if (localStorage.getItem("ynex-menu-position")) {
    const type = localStorage.getItem("ynex-menu-position");
    html?.setAttribute("data-menu-position", type);
  }
  if (localStorage.getItem("ynex-menu-mode")) {
    const type = localStorage.getItem("ynex-menu-mode");
    html?.setAttribute("data-menu-styles", type);
  }
  if (localStorage.getItem("ynex-header-position")) {
    const type = localStorage.getItem("ynex-header-position");
    html?.setAttribute("data-header-position", type);
  }
  if (localStorage.getItem("ynex-loader")) {
    const type = localStorage.getItem("ynex-loader");
    html?.setAttribute("loader", type);
  }
  if (localStorage.getItem("ynex-header-mode")) {
    const type = localStorage.getItem("ynex-header-mode");
    html?.setAttribute("data-header-styles", type);
  }
  if (localStorage.getItem("ynex-background-mode-body")) {
    const bodytype = localStorage.getItem("ynex-background-mode-body");
    const darktype = localStorage.getItem("ynex-background-mode-dark");
    const lighttype = localStorage.getItem("ynex-background-mode-light");
    const event = localStorage.getItem("ynex-theme-mode");
    html?.style.setProperty("--body-bg", bodytype);
    html?.style.setProperty("--dark-bg", darktype);
    html?.style.setProperty("--light", lighttype);
    html?.setAttribute("class", event);
  }
  if (localStorage.getItem("ynexlight-background-body")) {
    const bodytype = localStorage.getItem("ynexlight-background-body");
    const darktype = localStorage.getItem("ynexlight-background-dark");
    const lighttype = localStorage.getItem("ynexlight-background-light");
    html?.style.setProperty("--body-bg", bodytype);
    html?.style.setProperty("--dark-bg", darktype);
    html?.style.setProperty("--light", lighttype);
    html?.classList.add("dark");
  }
  if (localStorage.getItem("ynexlight-background-light")) {
    const bodytype = localStorage.getItem("ynexlight-background-body");
    const darktype = localStorage.getItem("ynexlight-background-dark");
    const lighttype = localStorage.getItem("ynexlight-background-light");
    html?.style.setProperty("--body-bg", bodytype);
    html?.style.setProperty("--dark-bg", darktype);
    html?.style.setProperty("--light", lighttype);
    html?.classList.add("dark");
  }
  if (localStorage.getItem("ynex-menu-style")) {
    const type1 = localStorage.getItem("ynex-menu-style");
    html?.setAttribute("data-nav-style", type1);
    const type = localStorage.getItem("ynex-menu-style-toggled");
    html?.setAttribute("data-toggled", type);
  }
  if (localStorage.getItem("ynex-sidemenu-styles")) {
    const type1 = localStorage.getItem("ynex-sidemenu-styles");
    html?.setAttribute("data-vertical-style", type1);
    const type = localStorage.getItem("ynex-sidemenu-styles-toggled");
    html?.setAttribute("data-toggled", type);
  }
  if (localStorage.getItem("ynex-sidemenu-styles-toggled")) {
    const type1 = localStorage.getItem("ynex-sidemenu-styles");
    html?.setAttribute("data-vertical-style", type1);
    const type = localStorage.getItem("ynex-sidemenu-styles-toggled");
    html?.setAttribute("data-toggled", type);
  }
  if (localStorage.getItem("ynex-image")) {
    const type = localStorage.getItem("ynex-image");
    html?.setAttribute("bg-img", type);
  }
  if (localStorage.getItem("ynex-primary-mode")) {
    const type = localStorage.getItem("ynex-primary-mode");
    html?.style.setProperty("--primary-rgb", type);
    html?.style.setProperty("--primary", type);
  }
  if (localStorage.getItem("ynexlight-primary-color")) {
    const type = localStorage.getItem("ynexlight-primary-color");
    html?.style.setProperty("--primary-rgb", type);
    html?.style.setProperty("-primary", type);
  }
  if (localStorage.getItem("ynexlight-primary-color1")) {
    const type = localStorage.getItem("ynexlight-primary-color1");
    html?.style.setProperty("--primary", type);
  }
}

// src/app/shared/components/switcher/switcher.component.ts
var SwitcherComponent = class _SwitcherComponent {
  constructor(renderer, elementRef, navServices) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.navServices = navServices;
    this.body = document.querySelector("body");
    this.localdata = localStorage;
    this.color4 = "#6c5ffc";
    this.color1 = "#1457e6";
    this.color = "#1ae715";
  }
  themeChange(type, type1, type2) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, "class", type);
    localStorage.setItem("ynex-theme-mode", type);
    this.renderer.setAttribute(htmlElement, "data-header-styles", type1);
    localStorage.setItem("ynex-header-mode", type1);
    this.renderer.setAttribute(htmlElement, "data-menu-styles", type2);
    localStorage.setItem("ynex-menu-mode", type2);
    if (localStorage.getItem("ynex-header-mode") == "light") {
      this.elementRef.nativeElement.ownerDocument.documentElement?.removeAttribute("style");
    }
    if (localStorage.getItem("ynex-theme-mode") == "light") {
      this.elementRef.nativeElement.ownerDocument.documentElement?.removeAttribute("style");
      localStorage.removeItem("ynexlight-background-light");
      localStorage.removeItem("ynexlight-background-body");
      localStorage.removeItem("ynexlight-background-dark");
      localStorage.removeItem("ynex-background-mode-dark");
      localStorage.removeItem("ynex-background-mode-body");
      localStorage.removeItem("ynex-background-mode-light");
      localStorage.removeItem("ynex-background-mode-input");
    }
  }
  DirectionsChange(type) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, "dir", type);
    localStorage.setItem("ynex-dir", type);
  }
  NavigationChange(type) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, "data-nav-layout", type);
    if (type == "vertical") {
      this.renderer.setAttribute(htmlElement, "data-vertical-style", "overlay");
      this.renderer.removeAttribute(htmlElement, "data-nav-style");
    }
    if (type == "horizontal") {
      this.renderer.setAttribute(htmlElement, "data-nav-style", "menu-click");
      this.renderer.removeAttribute(htmlElement, "data-vertical-style");
      localStorage.setItem("ynex-menu-style", "menu-click");
      setTimeout(() => {
        const mainContentElement = document.querySelector(".main-content");
        if (mainContentElement) {
          mainContentElement.click();
        }
      }, 100);
    } else {
      this.renderer.setAttribute(htmlElement, "data-menu-styles", "dark");
      localStorage.removeItem("ynex-menu-style");
    }
    localStorage.setItem("ynex-nav-mode", type);
  }
  Menustyles(type, type1) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    localStorage.setItem("ynex-menu-style", type);
    this.renderer.setAttribute(htmlElement, "data-toggled", type1);
    localStorage.setItem("ynex-menu-style", type1);
    this.renderer.setAttribute(htmlElement, "data-toggled", type1);
    localStorage.setItem("ynex-menu-style", type1);
  }
  Menus(type, type1) {
    this.navServices.items.subscribe((items) => {
      this.menuItems = items;
    });
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, "data-nav-style", type1);
    localStorage.setItem("ynex-menu-style", type1);
    localStorage.setItem("ynex-menu-style-toggled", type);
    this.renderer.setAttribute(htmlElement, "data-toggled", type);
    this.renderer.removeAttribute(htmlElement, "data-vertical-style");
    localStorage.removeItem("ynex-sidemenu-styles");
    localStorage.removeItem("ynex-sidemenu-styles-toggled");
  }
  SideMenus(type, type1) {
    this.navServices.items.subscribe((items) => {
      this.menuItems = items;
    });
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, "data-vertical-style", type1);
    if (localStorage.getItem("ynex-sidemenu-styles") == "closed") {
      this.renderer.setAttribute(htmlElement, "data-toggled", type);
    } else if (localStorage.getItem("ynex-sidemenu-styles") == "closed") {
      this.renderer.removeAttribute(htmlElement, "data-toggled");
    }
    localStorage.setItem("ynex-sidemenu-styles", type1);
    localStorage.setItem("ynex-sidemenu-styles-toggled", type);
    this.renderer.setAttribute(htmlElement, "data-toggled", type);
    this.renderer.removeAttribute(htmlElement, "data-nav-style");
    if (type1 === "icon-text") {
      this.renderer.setAttribute(htmlElement, "icon-text", "open");
    } else {
      this.renderer.removeAttribute(htmlElement, "icon-text");
    }
  }
  PageChange(type) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, "data-page-style", type);
    localStorage.setItem("ynex-page-mode", type);
  }
  WidthChange(type) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, "data-width", type);
    localStorage.setItem("ynex-width-mode", type);
  }
  MenuChange(type) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, "data-menu-position", type);
    localStorage.setItem("ynex-menu-position", type);
  }
  menuTheme(type) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, "data-menu-styles", type);
    localStorage.setItem("ynex-menu-mode", type);
  }
  HeaderChange(type) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, "data-header-position", type);
    localStorage.setItem("ynex-header-position", type);
  }
  Loader(type) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, "loader", type);
    localStorage.setItem("ynex-loader", type);
  }
  headerTheme(type) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, "data-header-styles", type);
    localStorage.setItem("ynex-header-mode", type);
  }
  closeMenu(type1) {
    if (type1 == "icon-hover" || type1 == "menu-hover") {
      this.menuItems?.forEach((a) => {
        if (this.menuItems) {
          a.active = false;
        }
        a?.children?.forEach((b) => {
          if (a.children) {
            b.active = false;
          }
        });
      });
    }
  }
  primary(type) {
    this.elementRef.nativeElement.ownerDocument.documentElement?.style.setProperty("--primary", type);
    this.elementRef.nativeElement.ownerDocument.documentElement?.style.setProperty("--primary-rgb", type);
    localStorage.setItem("ynex-primary-mode", type);
  }
  background(lightBg, inputBorder, bodyBg, darkBg, type, type1) {
    this.elementRef.nativeElement.ownerDocument.documentElement?.style.setProperty("--light", lightBg);
    this.elementRef.nativeElement.ownerDocument.documentElement?.style.setProperty("--input-border", inputBorder);
    this.elementRef.nativeElement.ownerDocument.documentElement?.style.setProperty("--body-bg", bodyBg);
    this.elementRef.nativeElement.ownerDocument.documentElement?.style.setProperty("--dark-bg", darkBg);
    localStorage.setItem("ynex-background-mode-body", bodyBg);
    localStorage.setItem("ynex-background-mode-dark", darkBg);
    localStorage.setItem("ynex-background-mode-light", lightBg);
    localStorage.setItem("ynex-background-mode-input", inputBorder);
    this.elementRef.nativeElement.ownerDocument.documentElement?.setAttribute("class", type);
    localStorage.setItem("ynex-theme-mode", type);
    this.elementRef.nativeElement.ownerDocument.documentElement?.setAttribute("data-header-styles", type1);
    localStorage.setItem("ynex-header-mode", type1);
    this.elementRef.nativeElement.ownerDocument.documentElement?.setAttribute("data-menu-styles", type1);
    localStorage.setItem("ynex-menu-mode", type1);
    localStorage.removeItem("ynexlight-background-dark");
    localStorage.removeItem("ynexlight-background-body");
    localStorage.removeItem("ynexlight-background-light");
  }
  //primary theme change
  dynamicLightPrimary(data) {
    this.color1 = data.color;
    const dynamicPrimaryLight = document.querySelectorAll("button.pcr-button");
    dynamicLightPrimaryColor(dynamicPrimaryLight, this.color1);
    localStorage.setItem("ynexlight-primary-color", hexToRgba(this.color1) || "");
    localStorage.setItem("ynexlight-primary-color1", hexToRgba(this.color1) || "");
    localStorage.setItem("ynexlight-mode", "true");
    this.body?.classList.remove("transparent-mode");
    this.body?.classList.add("light-mode");
    this.body?.classList.remove("dark");
    this.body?.classList.remove("bg-img1");
  }
  dynamicTranparentBgPrimary(data) {
    const darkChecked = document.getElementById("switcher-dark-theme");
    if (darkChecked) {
      darkChecked.checked = true;
    }
    this.color4 = data.color;
    const dynamicPrimaryBgTrasnsparent = document.querySelectorAll("button.pcr-button");
    dynamicBgTrasnsparentPrimaryColor(dynamicPrimaryBgTrasnsparent, this.color4);
    this.elementRef.nativeElement.ownerDocument.documentElement?.setAttribute("class", "dark");
    this.elementRef.nativeElement.ownerDocument.documentElement?.setAttribute("data-header-styles", "dark");
    this.elementRef.nativeElement.ownerDocument.documentElement?.setAttribute("data-menu-styles", "dark");
    localStorage.setItem("ynexlight-background-body", hexToRgba(this.color4) || "");
    localStorage.setItem("ynexlight-background-dark", hexToRgba2(this.color4) || "");
    localStorage.setItem("ynexlight-background-light", hexToRgba3(this.color4) || "");
    localStorage.setItem("ynex-header-mode", "dark");
    localStorage.setItem("ynex-theme-mode", "dark");
    localStorage.removeItem("ynexDark");
    localStorage.removeItem("ynexLight");
    this.elementRef.nativeElement.ownerDocument.documentElement?.classList.add("dark");
    document.querySelector(".app-header")?.classList.add("hor-header", "fixed-header", "visible-title", "stickyClass");
  }
  ImageTheme(type) {
    this.elementRef.nativeElement.ownerDocument.documentElement?.setAttribute("bg-img", type);
    localStorage.setItem("ynex-image", type);
  }
  reset() {
    localStorage.clear();
    const html = this.elementRef.nativeElement.ownerDocument.documentElement;
    const body = document.querySelector("body");
    html.style = "";
    html.setAttribute("class", "light");
    html.setAttribute("data-vertical-style", "overlay");
    html.setAttribute("dir", "ltr");
    html.setAttribute("data-nav-layout", "vertical");
    html.removeAttribute("data-page-style", "regular");
    html.removeAttribute("data-width", "full-width");
    html.removeAttribute("data-menu-position", "fixed");
    html.removeAttribute("data-header-position", "fixed");
    html.setAttribute("data-header-styles", "light");
    html.setAttribute("data-menu-styles", "dark");
    html.removeAttribute("bg-img", "dark");
    html.removeAttribute("data-toggled", "overlay");
    body.removeAttribute("class");
    html.removeAttribute("data-nav-style");
    const menuclickclosed = document.getElementById("switcher-menu-click");
    menuclickclosed.checked = false;
    const menuhoverclosed = document.getElementById("switcher-menu-hover");
    menuhoverclosed.checked = false;
    const iconclickclosed = document.getElementById("switcher-icon-click");
    iconclickclosed.checked = false;
    const iconhoverclosed = document.getElementById("switcher-icon-hover");
    iconhoverclosed.checked = false;
    const defaultclickchecked = document.getElementById("switcher-default-menu");
    if (defaultclickchecked) {
      defaultclickchecked.checked = true;
    }
    const Light = document.getElementById("switcher-light-theme");
    if (Light) {
      Light.checked = true;
    }
    const menuscrollable = document.getElementById("switcher-menu-fixed");
    if (menuscrollable) {
      menuscrollable.checked = true;
    }
    const headerscrollable = document.getElementById("switcher-header-fixed");
    if (headerscrollable) {
      headerscrollable.checked = true;
    }
  }
  ngOnInit() {
    localStorageBackUp();
    this.closeMenu(localStorage.getItem("ynex-menu-style"));
  }
  static {
    this.\u0275fac = function SwitcherComponent_Factory(t) {
      return new (t || _SwitcherComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NavService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SwitcherComponent, selectors: [["app-switcher"]], decls: 272, vars: 60, consts: [["id", "hs-overlay-switcher", "tabindex", "-1", 1, "hs-overlay", "hidden", "ti-offcanvas", "ti-offcanvas-right"], [1, "ti-offcanvas-header", "z-10", "relative"], [1, "ti-offcanvas-title"], ["type", "button", "data-hs-overlay", "#hs-overlay-switcher", 1, "ti-btn", "flex-shrink-0", "p-0", "transition-none", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "hover:text-gray-700", "focus:ring-gray-400", "focus:ring-offset-white", "dark:hover:text-white/80", "dark:focus:ring-white/10", "dark:focus:ring-offset-white/10"], [1, "sr-only"], [1, "ri-close-circle-line", "leading-none", "text-lg"], [1, "ti-offcanvas-body", "!p-0", "!border-b", "dark:border-white/10", "z-10", "relative", "!h-auto"], ["aria-label", "Tabs", "role", "tablist", 1, "flex", "rtl:space-x-reverse"], ["type", "button", "id", "switcher-item-1", "data-hs-tab", "#switcher-1", "aria-controls", "switcher-1", "role", "tab", 1, "hs-tab-active:bg-success/20", "w-full", "!py-2", "!px-4", "hs-tab-active:border-b-transparent", "text-defaultsize", "border-0", "hs-tab-active:text-success", "dark:hs-tab-active:bg-success/20", "dark:hs-tab-active:border-b-white/10", "dark:hs-tab-active:text-success", "-mb-px", "bg-white", "font-semibold", "text-center", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "rounded-none", "hover:text-gray-700", "dark:bg-bodybg", "dark:border-white/10", "dark:hover:text-gray-300", "active"], ["type", "button", "id", "switcher-item-2", "data-hs-tab", "#switcher-2", "aria-controls", "switcher-2", "role", "tab", 1, "hs-tab-active:bg-success/20", "w-full", "!py-2", "!px-4", "hs-tab-active:border-b-transparent", "text-defaultsize", "border-0", "hs-tab-active:text-success", "dark:hs-tab-active:bg-success/20", "dark:hs-tab-active:border-b-white/10", "dark:hs-tab-active:text-success", "-mb-px", "bg-white", "font-semibold", "text-center", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "rounded-none", "hover:text-gray-700", "dark:bg-bodybg", "dark:border-white/10", "dark:hover:text-gray-300"], ["id", "switcher-body", 1, "ti-offcanvas-body"], ["id", "switcher-1", "role", "tabpanel", "aria-labelledby", "switcher-item-1", 1, ""], [1, ""], [1, "switcher-style-head"], [1, "grid", "grid-cols-3", "switcher-style"], [1, "flex", "items-center"], ["type", "radio", "name", "theme-style", "id", "switcher-light-theme", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-light-theme", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "theme-style", "id", "switcher-dark-theme", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-dark-theme", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "direction", "id", "switcher-ltr", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-ltr", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "direction", "id", "switcher-rtl", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-rtl", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "navigation-style", "id", "switcher-vertical", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-vertical", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "navigation-style", "id", "switcher-horizontal", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-horizontal", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], [1, "grid", "grid-cols-2", "gap-2", "switcher-style"], [1, "flex"], ["type", "radio", "name", "navigation-data-menu-styles", "id", "switcher-menu-click", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-menu-click", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "navigation-data-menu-styles", "id", "switcher-menu-hover", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-menu-hover", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "navigation-data-menu-styles", "id", "switcher-icon-click", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-icon-click", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "navigation-data-menu-styles", "id", "switcher-icon-hover", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-icon-hover", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], [1, "px-4", "text-secondary", "text-xs"], [1, "me-2"], [1, "sidemenu-layout-styles"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-default-menu", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-default-menu", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-closed-menu", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-closed-menu", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-icontext-menu", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-icontext-menu", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-icon-overlay", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-icon-overlay", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-detached", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-detached", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "sidemenu-layout-styles", "id", "switcher-double-menu", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-double-menu", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "data-page-styles", "id", "switcher-regular", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-regular", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "data-page-styles", "id", "switcher-classic", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-classic", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "data-page-styles", "id", "switcher-modern", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-modern", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "layout-width", "id", "switcher-full-width", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-full-width", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "layout-width", "id", "switcher-boxed", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-boxed", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "data-menu-positions", "id", "switcher-menu-fixed", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-menu-fixed", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "data-menu-positions", "id", "switcher-menu-scroll", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-menu-scroll", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "data-header-positions", "id", "switcher-header-fixed", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-header-fixed", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["type", "radio", "name", "data-header-positions", "id", "switcher-header-scroll", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-header-scroll", 1, "text-defaultsize", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2", "font-semibold"], ["id", "switcher-2", "role", "tabpanel", "aria-labelledby", "switcher-item-2", 1, "hidden"], [1, "theme-colors"], [1, "flex", "switcher-style", "space-x-3", "rtl:space-x-reverse"], [1, "hs-tooltip", "ti-main-tooltip", "ti-form-radio", "switch-select"], ["type", "radio", "name", "menu-colors", "id", "switcher-menu-light", 1, "hs-tooltip-toggle", "ti-form-radio", "color-input", "color-white", 3, "click", "checked"], ["role", "tooltip", 1, "hs-tooltip-content", "ti-main-tooltip-content", "!py-1", "!px-2", "!bg-black", "text-xs", "font-medium", "!text-white", "shadow-sm", "dark:!bg-black"], ["type", "radio", "name", "menu-colors", "id", "switcher-menu-dark", 1, "hs-tooltip-toggle", "ti-form-radio", "color-input", "color-dark", 3, "click", "checked"], ["type", "radio", "name", "menu-colors", "id", "switcher-menu-primary", 1, "hs-tooltip-toggle", "ti-form-radio", "color-input", "color-primary", 3, "click", "checked"], ["type", "radio", "name", "menu-colors", "id", "switcher-menu-gradient", 1, "hs-tooltip-toggle", "ti-form-radio", "color-input", "color-gradient", 3, "click", "checked"], ["type", "radio", "name", "menu-colors", "id", "switcher-menu-transparent", 1, "hs-tooltip-toggle", "ti-form-radio", "color-input", "color-transparent", 3, "click", "checked"], [1, "px-4", "text-[#8c9097]", "dark:text-white/50", "text-[.6875rem]"], ["type", "radio", "name", "header-colors", "id", "switcher-header-light", 1, "hs-tooltip-toggle", "ti-form-radio", "color-input", "color-white", "!border", 3, "click", "checked"], ["type", "radio", "name", "header-colors", "id", "switcher-header-dark", 1, "hs-tooltip-toggle", "ti-form-radio", "color-input", "color-dark", 3, "click", "checked"], ["type", "radio", "name", "header-colors", "id", "switcher-header-primary", 1, "hs-tooltip-toggle", "ti-form-radio", "color-input", "color-primary", 3, "click", "checked"], ["type", "radio", "name", "header-colors", "id", "switcher-header-gradient", 1, "hs-tooltip-toggle", "ti-form-radio", "color-input", "color-gradient", 3, "click", "checked"], ["type", "radio", "name", "header-colors", "id", "switcher-header-transparent", 1, "hs-tooltip-toggle", "ti-form-radio", "color-input", "color-transparent", 3, "click", "checked"], [1, "ti-form-radio", "switch-select"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary", "checked", "", 1, "ti-form-radio", "color-input", "color-primary-1", 3, "click"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary1", 1, "ti-form-radio", "color-input", "color-primary-2", 3, "click", "checked"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary2", 1, "ti-form-radio", "color-input", "color-primary-3", 3, "click", "checked"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary3", 1, "ti-form-radio", "color-input", "color-primary-4", 3, "click", "checked"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary4", 1, "ti-form-radio", "color-input", "color-primary-5", 3, "click", "checked"], [1, "ti-form-radio", "switch-select", "ps-0", "mt-1", "color-primary-light"], [1, "theme-container-primary"], [1, "pickr-container-primary"], [1, "pickr"], ["type", "button", "role", "button", "aria-label", "toggle color picker dialog", "id", "lightPrimaryColorID", "data-id", "primary", "data-id1", "primary-rgb", 1, "pcr-button", "color-primary-light", 2, "--pcr-color", "rgba(132, 90, 223, 1)", 3, "colorPickerChange", "cpSliderDragEnd", "cpAlphaChannel", "cpOutputFormat", "colorPicker"], ["type", "radio", "name", "theme-background", "id", "switcher-background", 1, "ti-form-radio", "color-input", "color-bg-1", 3, "click", "checked"], ["type", "radio", "name", "theme-background", "id", "switcher-background1", 1, "ti-form-radio", "color-input", "color-bg-2", 3, "click", "checked"], ["type", "radio", "name", "theme-background", "id", "switcher-background2", 1, "ti-form-radio", "color-input", "color-bg-3", 3, "click", "checked"], ["type", "radio", "name", "theme-background", "id", "switcher-background3", 1, "ti-form-radio", "color-input", "color-bg-4", 3, "click", "checked"], ["type", "radio", "name", "theme-background", "id", "switcher-background4", 1, "ti-form-radio", "color-input", "color-bg-5", 3, "click", "checked"], [1, "ti-form-radio", "switch-select", "ps-0", "mt-1", "color-bg-transparent"], [1, "theme-container-background", "hidden"], [1, "pickr-container-background"], ["id", "transparentBgColorID", "data-id3", "light", "data-id5", "bg", "data-id6", "bg", 1, "pcr-button", "color-bg-transparent", 3, "colorPickerChange", "cpSliderDragEnd", "cpToggle", "cpAlphaChannel", "cpOutputFormat", "colorPicker"], [1, "menu-image", "theme-colors"], [1, "flex", "switcher-style", "space-x-3", "rtl:space-x-reverse", "flex-wrap", "gap-3"], ["type", "radio", "name", "theme-images", "id", "switcher-bg-img", 1, "ti-form-radio", "bgimage-input", "bg-img1", 3, "click", "checked"], ["type", "radio", "name", "theme-images", "id", "switcher-bg-img1", 1, "ti-form-radio", "bgimage-input", "bg-img2", 3, "click", "checked"], ["type", "radio", "name", "theme-images", "id", "switcher-bg-img2", 1, "ti-form-radio", "bgimage-input", "bg-img3", 3, "click", "checked"], ["type", "radio", "name", "theme-images", "id", "switcher-bg-img3", 1, "ti-form-radio", "bgimage-input", "bg-img4", 3, "click", "checked"], ["type", "radio", "name", "theme-images", "id", "switcher-bg-img4", 1, "ti-form-radio", "bgimage-input", "bg-img5", 3, "click", "checked"], [1, "ti-offcanvas-footer", "sm:flex", "justify-between"], ["href", "javascript:void(0);", "id", "reset-all", 1, "w-full", "ti-btn", "ti-btn-danger-full", "m-1", 3, "click"]], template: function SwitcherComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2);
        \u0275\u0275text(3, " Switcher ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3)(5, "span", 4);
        \u0275\u0275text(6, "Close modal");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "i", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "button", 8);
        \u0275\u0275text(11, " Theme Style ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 9);
        \u0275\u0275text(13, " Theme Colors ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "p", 13);
        \u0275\u0275text(18, "Theme Color Mode:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 14)(20, "div", 15)(21, "input", 16);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_21_listener() {
          return ctx.themeChange("light", "light", "dark");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "label", 17);
        \u0275\u0275text(23, "Light");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 15)(25, "input", 18);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_25_listener() {
          return ctx.themeChange("dark", "dark", "dark");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "label", 19);
        \u0275\u0275text(27, "Dark");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div")(29, "p", 13);
        \u0275\u0275text(30, "Directions:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 14)(32, "div", 15)(33, "input", 20);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_33_listener() {
          return ctx.DirectionsChange("ltr");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "label", 21);
        \u0275\u0275text(35, "LTR");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 15)(37, "input", 22);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_37_listener() {
          return ctx.DirectionsChange("rtl");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "label", 23);
        \u0275\u0275text(39, "RTL");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(40, "div")(41, "p", 13);
        \u0275\u0275text(42, "Navigation Styles:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 14)(44, "div", 15)(45, "input", 24);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_45_listener() {
          return ctx.NavigationChange("vertical");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "label", 25);
        \u0275\u0275text(47, "Vertical");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 15)(49, "input", 26);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_49_listener() {
          return ctx.NavigationChange("horizontal");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "label", 27);
        \u0275\u0275text(51, "Horizontal");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "div")(53, "p", 13);
        \u0275\u0275text(54, "Navigation Menu Style:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 28)(56, "div", 29)(57, "input", 30);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_57_listener() {
          return ctx.Menus("menu-click-closed", "menu-click");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "label", 31);
        \u0275\u0275text(59, "Menu Click");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 29)(61, "input", 32);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_61_listener() {
          return ctx.Menus("menu-hover-closed", "menu-hover");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "label", 33);
        \u0275\u0275text(63, "Menu Hover");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 29)(65, "input", 34);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_65_listener() {
          return ctx.Menus("icon-click-closed", "icon-click");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "label", 35);
        \u0275\u0275text(67, "Icon Click");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 29)(69, "input", 36);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_69_listener() {
          return ctx.Menus("icon-hover-closed", "icon-hover");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "label", 37);
        \u0275\u0275text(71, "Icon Hover");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "div", 38)(73, "b", 39);
        \u0275\u0275text(74, "Note:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(75, "Works same for both Vertical and Horizontal ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "div", 40)(77, "p", 13);
        \u0275\u0275text(78, "Sidemenu Layout Syles:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 28)(80, "div", 29)(81, "input", 41);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_81_listener() {
          return ctx.SideMenus("", "overlay");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "label", 42);
        \u0275\u0275text(83, "Default Menu");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 29)(85, "input", 43);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_85_listener() {
          return ctx.SideMenus("close-menu-close", "closed");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "label", 44);
        \u0275\u0275text(87, " Closed Menu");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "div", 29)(89, "input", 45);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_89_listener() {
          return ctx.SideMenus("icon-text-close", "icontext");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "label", 46);
        \u0275\u0275text(91, "Icon Text");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "div", 29)(93, "input", 47);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_93_listener() {
          return ctx.SideMenus("icon-overlay-close", "overlay");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "label", 48);
        \u0275\u0275text(95, "Icon Overlay");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(96, "div", 29)(97, "input", 49);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_97_listener() {
          return ctx.SideMenus("detached-close", "detached");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "label", 50);
        \u0275\u0275text(99, "Detached");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "div", 29)(101, "input", 51);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_101_listener() {
          return ctx.SideMenus("double-menu-open", "doublemenu");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "label", 52);
        \u0275\u0275text(103, "Double Menu");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(104, "div", 38)(105, "b", 39);
        \u0275\u0275text(106, "Note:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(107, "Navigation menu styles won't work here.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "div")(109, "p", 13);
        \u0275\u0275text(110, "Page Styles:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 14)(112, "div", 29)(113, "input", 53);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_113_listener() {
          return ctx.PageChange("regular");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "label", 54);
        \u0275\u0275text(115, "Regular");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "div", 29)(117, "input", 55);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_117_listener() {
          return ctx.PageChange("classic");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "label", 56);
        \u0275\u0275text(119, "Classic");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(120, "div", 29)(121, "input", 57);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_121_listener() {
          return ctx.PageChange("modern");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "label", 58);
        \u0275\u0275text(123, " Modern");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(124, "div")(125, "p", 13);
        \u0275\u0275text(126, "Layout Width Styles:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "div", 14)(128, "div", 29)(129, "input", 59);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_129_listener() {
          return ctx.WidthChange("full-width");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "label", 60);
        \u0275\u0275text(131, "FullWidth");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "div", 29)(133, "input", 61);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_133_listener() {
          return ctx.WidthChange("boxed");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "label", 62);
        \u0275\u0275text(135, "Boxed");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(136, "div")(137, "p", 13);
        \u0275\u0275text(138, "Menu Positions:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "div", 14)(140, "div", 29)(141, "input", 63);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_141_listener() {
          return ctx.MenuChange("fixed");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "label", 64);
        \u0275\u0275text(143, "Fixed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "div", 29)(145, "input", 65);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_145_listener() {
          return ctx.MenuChange("scrollable");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "label", 66);
        \u0275\u0275text(147, "Scrollable ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(148, "div")(149, "p", 13);
        \u0275\u0275text(150, "Header Positions:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "div", 14)(152, "div", 29)(153, "input", 67);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_153_listener() {
          return ctx.HeaderChange("fixed");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "label", 68);
        \u0275\u0275text(155, " Fixed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(156, "div", 29)(157, "input", 69);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_157_listener() {
          return ctx.HeaderChange("scrollable");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "label", 70);
        \u0275\u0275text(159, "Scrollable ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(160, "div", 71)(161, "div", 72)(162, "p", 13);
        \u0275\u0275text(163, "Menu Colors:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "div", 73)(165, "div", 74)(166, "input", 75);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_166_listener() {
          return ctx.menuTheme("light");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "span", 76);
        \u0275\u0275text(168, " Light Menu ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(169, "div", 74)(170, "input", 77);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_170_listener() {
          return ctx.menuTheme("dark");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "span", 76);
        \u0275\u0275text(172, " Dark Menu ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(173, "div", 74)(174, "input", 78);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_174_listener() {
          return ctx.menuTheme("color");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "span", 76);
        \u0275\u0275text(176, " Color Menu ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(177, "div", 74)(178, "input", 79);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_178_listener() {
          return ctx.menuTheme("gradient");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "span", 76);
        \u0275\u0275text(180, " Gradient Menu ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(181, "div", 74)(182, "input", 80);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_182_listener() {
          return ctx.menuTheme("transparent");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "span", 76);
        \u0275\u0275text(184, " Transparent Menu ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(185, "div", 81)(186, "b", 39);
        \u0275\u0275text(187, "Note:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(188, "If you want to change color Menu dynamically change from below Theme Primary color picker.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(189, "div", 72)(190, "p", 13);
        \u0275\u0275text(191, "Header Colors:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "div", 73)(193, "div", 74)(194, "input", 82);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_194_listener() {
          return ctx.headerTheme("light");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(195, "span", 76);
        \u0275\u0275text(196, " Light Header ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(197, "div", 74)(198, "input", 83);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_198_listener() {
          return ctx.headerTheme("dark");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "span", 76);
        \u0275\u0275text(200, " Dark Header ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(201, "div", 74)(202, "input", 84);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_202_listener() {
          return ctx.headerTheme("color");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "span", 76);
        \u0275\u0275text(204, " Color Header ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(205, "div", 74)(206, "input", 85);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_206_listener() {
          return ctx.headerTheme("gradient");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "span", 76);
        \u0275\u0275text(208, " Gradient Header ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(209, "div", 74)(210, "input", 86);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_210_listener() {
          return ctx.headerTheme("transparent");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "span", 76);
        \u0275\u0275text(212, " Transparent Header ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(213, "div", 81)(214, "b", 39);
        \u0275\u0275text(215, "Note:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(216, "If you want to change color Header dynamically change from below Theme Primary color picker.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(217, "div", 72)(218, "p", 13);
        \u0275\u0275text(219, "Theme Primary:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "div", 73)(221, "div", 87)(222, "input", 88);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_222_listener() {
          return ctx.primary("58 88 146");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(223, "div", 87)(224, "input", 89);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_224_listener() {
          return ctx.primary("92 144 163");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(225, "div", 87)(226, "input", 90);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_226_listener() {
          return ctx.primary("161 90 223");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(227, "div", 87)(228, "input", 91);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_228_listener() {
          return ctx.primary("78 172 76");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(229, "div", 87)(230, "input", 92);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_230_listener() {
          return ctx.primary("223 90 90");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(231, "div", 93);
        \u0275\u0275element(232, "div", 94);
        \u0275\u0275elementStart(233, "div", 95)(234, "div", 96)(235, "button", 97);
        \u0275\u0275twoWayListener("colorPickerChange", function SwitcherComponent_Template_button_colorPickerChange_235_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.color1, $event) || (ctx.color1 = $event);
          return $event;
        });
        \u0275\u0275listener("cpSliderDragEnd", function SwitcherComponent_Template_button_cpSliderDragEnd_235_listener($event) {
          return ctx.dynamicLightPrimary($event);
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(236, "div", 72)(237, "p", 13);
        \u0275\u0275text(238, "Theme Background:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "div", 73)(240, "div", 87)(241, "input", 98);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_241_listener() {
          return ctx.background("55 67 98", "55 67 98", "64 76 107", "50 62 93", "dark", "dark");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(242, "div", 87)(243, "input", 99);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_243_listener() {
          return ctx.background("86 98 55", "86 98 55", "95 107 64", "81 93 50", "dark", "dark");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(244, "div", 87)(245, "input", 100);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_245_listener() {
          return ctx.background("84 55 98", "84 55 98", "93 64 107", "79 50 93", "dark", "dark");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(246, "div", 87)(247, "input", 101);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_247_listener() {
          return ctx.background("55 93 98", "55 93 98", "64 101 107", "50 87 93", "dark", "dark");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(248, "div", 87)(249, "input", 102);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_249_listener() {
          return ctx.background("98 55 55", "98 55 55", "107 64 64", "93 50 50", "dark", "dark");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(250, "div", 103);
        \u0275\u0275element(251, "div", 104);
        \u0275\u0275elementStart(252, "div", 105)(253, "div", 96)(254, "button", 106);
        \u0275\u0275twoWayListener("colorPickerChange", function SwitcherComponent_Template_button_colorPickerChange_254_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.color4, $event) || (ctx.color4 = $event);
          return $event;
        });
        \u0275\u0275listener("cpSliderDragEnd", function SwitcherComponent_Template_button_cpSliderDragEnd_254_listener($event) {
          return ctx.dynamicTranparentBgPrimary($event);
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(255, "div", 107)(256, "p", 13);
        \u0275\u0275text(257, "Menu With Background Image:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(258, "div", 108)(259, "div", 87)(260, "input", 109);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_260_listener() {
          return ctx.ImageTheme("bgimg1");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(261, "div", 87)(262, "input", 110);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_262_listener() {
          return ctx.ImageTheme("bgimg2");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(263, "div", 87)(264, "input", 111);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_264_listener() {
          return ctx.ImageTheme("bgimg3");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(265, "div", 87)(266, "input", 112);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_266_listener() {
          return ctx.ImageTheme("bgimg4");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(267, "div", 87)(268, "input", 113);
        \u0275\u0275listener("click", function SwitcherComponent_Template_input_click_268_listener() {
          return ctx.ImageTheme("bgimg5");
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(269, "div", 114)(270, "a", 115);
        \u0275\u0275listener("click", function SwitcherComponent_Template_a_click_270_listener() {
          return ctx.reset();
        });
        \u0275\u0275text(271, "Reset");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275property("checked", ctx.localdata["ynex-theme-mode"] != "dark");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-theme-mode"] == "dark");
        \u0275\u0275advance(8);
        \u0275\u0275property("checked", ctx.localdata["ynex-dir"] != "rtl");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-dir"] == "rtl");
        \u0275\u0275advance(8);
        \u0275\u0275property("checked", ctx.localdata["ynex-nav-mode"] != "horizontal");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-nav-mode"] == "horizontal");
        \u0275\u0275advance(8);
        \u0275\u0275property("checked", ctx.localdata["ynex-menu-style"] == "menu-click");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-menu-style"] == "menu-hover");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-menu-style"] == "icon-click");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-menu-style"] == "icon-hover");
        \u0275\u0275advance(12);
        \u0275\u0275property("checked", ctx.localdata["ynex-sidemenu-styles"] == "default-menu" || !ctx.localdata["ynex-sidemenu-styles"] && !ctx.localdata["ynex-menu-style"]);
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-sidemenu-styles"] == "closed-menu");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-sidemenu-styles"] == "icon-text");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-sidemenu-styles"] == "icon-overlay");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-sidemenu-styles"] == "detached");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-sidemenu-styles"] == "double-menu");
        \u0275\u0275advance(12);
        \u0275\u0275property("checked", ctx.localdata["ynex-page-mode"] != "classic");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-page-mode"] == "classic");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-page-mode"] == "modern");
        \u0275\u0275advance(8);
        \u0275\u0275property("checked", ctx.localdata["ynex-width-mode"] != "boxed");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-width-mode"] == "boxed");
        \u0275\u0275advance(8);
        \u0275\u0275property("checked", ctx.localdata["ynex-menu-mode"] != "scrollable");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-menu-mode"] == "scrollable");
        \u0275\u0275advance(8);
        \u0275\u0275property("checked", ctx.localdata["ynex-header-mode"] != "scrollable");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-header-mode"] == "scrollable");
        \u0275\u0275advance(9);
        \u0275\u0275property("checked", ctx.localdata["ynex-menu-mode"] == "light");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-menu-mode"] == "dark");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-menu-mode"] == "color");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-menu-mode"] == "gradient");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-menu-mode"] == "transparent");
        \u0275\u0275advance(12);
        \u0275\u0275property("checked", ctx.localdata["ynex-header-mode"] == "light");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-header-mode"] == "dark");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-header-mode"] == "color");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-header-mode"] == "gradient");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-header-mode"] == "transparent");
        \u0275\u0275advance(14);
        \u0275\u0275property("checked", ctx.localdata["ynex-primary-mode"] == "92 144 163");
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.localdata["ynex-primary-mode"] == "161 90 223");
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.localdata["ynex-primary-mode"] == "78 172 76");
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.localdata["ynex-primary-mode"] == "223 90 90");
        \u0275\u0275advance(5);
        \u0275\u0275styleProp("background", ctx.color1);
        \u0275\u0275property("cpAlphaChannel", "disabled")("cpOutputFormat", "hex");
        \u0275\u0275twoWayProperty("colorPicker", ctx.color1);
        \u0275\u0275advance(6);
        \u0275\u0275property("checked", ctx.localdata["ynex-background-mode-dark"] == "50 62 93");
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.localdata["ynex-background-mode-dark"] == "81 93 50");
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.localdata["ynex-background-mode-dark"] == "79 50 93");
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.localdata["ynex-background-mode-dark"] == "50 87 93");
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.localdata["ynex-background-mode-dark"] == "93 50 50");
        \u0275\u0275advance(5);
        \u0275\u0275styleProp("background", ctx.color4);
        \u0275\u0275property("cpToggle", true)("cpAlphaChannel", "disabled")("cpOutputFormat", "hex");
        \u0275\u0275twoWayProperty("colorPicker", ctx.color4);
        \u0275\u0275advance(6);
        \u0275\u0275property("checked", ctx.localdata["ynex-image"] == "bgimg1");
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.localdata["ynex-image"] == "bgimg2");
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.localdata["ynex-image"] == "bgimg3");
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.localdata["ynex-image"] == "bgimg4");
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.localdata["ynex-image"] == "bgimg5");
      }
    }, dependencies: [ColorPickerDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SwitcherComponent, { className: "SwitcherComponent", filePath: "src\\app\\shared\\components\\switcher\\switcher.component.ts", lineNumber: 9 });
})();

// src/app/shared/components/tab-to-top/tab-to-top.component.ts
var _c05 = (a0) => ({ display: a0 });
var TabToTopComponent = class _TabToTopComponent {
  constructor(viewScroller) {
    this.viewScroller = viewScroller;
    this.show = false;
  }
  ngOnInit() {
  }
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 600) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  taptotop() {
    let body = document.querySelector("body");
    body.style.scrollBehavior = "smooth";
    this.viewScroller.scrollToPosition([0, 0]);
  }
  static {
    this.\u0275fac = function TabToTopComponent_Factory(t) {
      return new (t || _TabToTopComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabToTopComponent, selectors: [["app-tab-to-top"]], hostBindings: function TabToTopComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function TabToTopComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, decls: 3, vars: 3, consts: [[1, "scrollToTop", 2, "display", "flex", 3, "click", "ngStyle"], [1, "arrow"], [1, "ri-arrow-up-s-fill", "text-xl", "leading-loose"]], template: function TabToTopComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("click", function TabToTopComponent_Template_div_click_0_listener() {
          return ctx.taptotop();
        });
        \u0275\u0275elementStart(1, "span", 1);
        \u0275\u0275element(2, "i", 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(1, _c05, ctx.show ? "block" : "none"));
      }
    }, dependencies: [NgStyle] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabToTopComponent, { className: "TabToTopComponent", filePath: "src\\app\\shared\\components\\tab-to-top\\tab-to-top.component.ts", lineNumber: 9 });
})();

// src/app/shared/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  static {
    this.\u0275fac = function FooterComponent_Factory(t) {
      return new (t || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 0, consts: [[1, "footer", "mt-auto", "xl:ps-[15rem]", "font-normal", "font-inter", "bg-white", "text-defaultsize", "leading-normal", "text-[0.813]", "shadow-[0_0_0.4rem_rgba(0,0,0,0.1)]", "dark:bg-bodybg", "py-4", "text-center"], [1, "container"], [1, "text-gray", "dark:text-defaulttextcolor/50"], ["id", "year"], ["href", "https://enexol.com", "target", "_blank", "rel", "noopener noreferrer", 1, "text-defaulttextcolor", "font-semibold", "dark:text-defaulttextcolor"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, " Copyright \xA9 ");
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "2026");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "a", 4);
        \u0275\u0275text(7, " Enexol ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, ". All rights reserved ");
        \u0275\u0275elementEnd()()();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\shared\\components\\footer\\footer.component.ts", lineNumber: 9 });
})();

// src/app/shared/directives/hover-effect-sidebar.directive.ts
var HoverEffectSidebarDirective = class _HoverEffectSidebarDirective {
  constructor(eleRef, render, elementRef) {
    this.eleRef = eleRef;
    this.render = render;
    this.elementRef = elementRef;
  }
  onHover() {
    if (window.innerWidth > 768) {
      this.elementRef.nativeElement.ownerDocument.documentElement?.setAttribute("icon-overlay", "open");
    }
  }
  onLeave() {
    if (window.innerWidth > 768) {
      this.elementRef.nativeElement.ownerDocument.documentElement?.removeAttribute("icon-overlay");
    }
  }
  static {
    this.\u0275fac = function HoverEffectSidebarDirective_Factory(t) {
      return new (t || _HoverEffectSidebarDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HoverEffectSidebarDirective, selectors: [["", "appHoverEffectSidebar", ""]], hostBindings: function HoverEffectSidebarDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mouseover", function HoverEffectSidebarDirective_mouseover_HostBindingHandler() {
          return ctx.onHover();
        })("mouseleave", function HoverEffectSidebarDirective_mouseleave_HostBindingHandler() {
          return ctx.onLeave();
        });
      }
    } });
  }
};

// src/app/shared/layouts/content-layout/content-layout.component.ts
var ContentLayoutComponent = class _ContentLayoutComponent {
  constructor(navServices, elementRef, renderer) {
    this.navServices = navServices;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.navServices.items.subscribe((menuItems) => {
      this.menuItems = menuItems;
    });
  }
  clearToggle() {
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    html?.setAttribute("data-toggled", "close");
    document.querySelector("#responsive-overlay")?.classList.remove("active");
  }
  togglesidemenuBody() {
    if (localStorage.getItem("ynex-sidemenu-styles") == "icontext") {
      document.documentElement.removeAttribute("icon-text");
    }
    if (document.documentElement.getAttribute("data-nav-layout") == "horizontal" && window.innerWidth > 992) {
      this.closeMenu();
    }
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (window.innerWidth <= 992) {
      html?.setAttribute("data-toggled", html?.getAttribute("data-toggled") == "close" ? "close" : "close");
    }
  }
  closeMenu() {
    this.menuItems?.forEach((a) => {
      if (this.menuItems) {
        a.active = false;
      }
      a?.children?.forEach((b) => {
        if (a.children) {
          b.active = false;
        }
      });
    });
  }
  static {
    this.\u0275fac = function ContentLayoutComponent_Factory(t) {
      return new (t || _ContentLayoutComponent)(\u0275\u0275directiveInject(NavService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContentLayoutComponent, selectors: [["app-content-layout"]], decls: 10, vars: 0, consts: [[1, "page"], ["appHoverEffectSidebar", ""], [1, "content"], [1, "main-content", 3, "click"], ["id", "responsive-overlay", 3, "click"]], template: function ContentLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-switcher");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "app-header")(3, "app-sidebar", 1);
        \u0275\u0275elementStart(4, "div", 2)(5, "div", 3);
        \u0275\u0275listener("click", function ContentLayoutComponent_Template_div_click_5_listener() {
          return ctx.togglesidemenuBody();
        });
        \u0275\u0275element(6, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(7, "app-footer")(8, "app-tab-to-top");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 4);
        \u0275\u0275listener("click", function ContentLayoutComponent_Template_div_click_9_listener() {
          return ctx.clearToggle();
        });
        \u0275\u0275elementEnd();
      }
    }, dependencies: [RouterOutlet, HeaderComponent, SidebarComponent, SwitcherComponent, TabToTopComponent, FooterComponent, HoverEffectSidebarDirective] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContentLayoutComponent, { className: "ContentLayoutComponent", filePath: "src\\app\\shared\\layouts\\content-layout\\content-layout.component.ts", lineNumber: 8 });
})();

export {
  SimplebarAngularModule,
  hexToRgba,
  dynamicLightPrimaryColor,
  localStorageBackUp,
  ColorPickerService,
  ColorPickerModule,
  SwitcherComponent,
  ContentLayoutComponent
};
//# sourceMappingURL=chunk-6SVHGHML.js.map
