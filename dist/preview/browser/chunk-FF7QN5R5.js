import {
  ColorPickerModule,
  ColorPickerService,
  SimplebarAngularModule,
  SwitcherComponent,
  dynamicLightPrimaryColor,
  hexToRgba,
  localStorageBackUp
} from "./chunk-6SVHGHML.js";
import {
  RouterModule,
  RouterOutlet
} from "./chunk-J4QH6UQS.js";
import {
  FormsModule,
  ReactiveFormsModule
} from "./chunk-3FUH7QM2.js";
import {
  CommonModule,
  DOCUMENT,
  ElementRef,
  Renderer2,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-R5AMMNLH.js";

// src/app/shared/components/page-header/page-header.component.ts
var PageHeaderComponent = class _PageHeaderComponent {
  static {
    this.\u0275fac = function PageHeaderComponent_Factory(t) {
      return new (t || _PageHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageHeaderComponent, selectors: [["app-page-header"]], inputs: { title: "title", title1: "title1", activeTitle: "activeTitle" }, decls: 11, vars: 3, consts: [[1, "block", "justify-between", "page-header", "md:flex"], [1, "!text-defaulttextcolor", "dark:!text-defaulttextcolor/70", "dark:text-white", "dark:hover:text-white", "!text-[1.125rem]", "font-semibold"], [1, "flex", "items-center", "whitespace-nowrap", "min-w-0"], [1, "text-[0.813rem]", "ps-[0.5rem]"], ["href", "javascript:void(0);", 1, "flex", "items-center", "text-primary", "hover:text-primary", "dark:text-primary", "truncate"], [1, "ti", "ti-chevrons-right", "flex-shrink-0", "text-[#8c9097]", "dark:text-white/50", "px-[0.5rem]", "overflow-visible", "rtl:rotate-180"], ["aria-current", "page", 1, "text-[0.813rem]", "text-defaulttextcolor", "font-semibold", "hover:text-primary", "dark:text-[#8c9097]", "dark:text-white/50"]], template: function PageHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h3", 1);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "ol", 2)(5, "li", 3)(6, "a", 4);
        \u0275\u0275text(7);
        \u0275\u0275element(8, "i", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "li", 6);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", ctx.title, " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.activeTitle, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.title1, " ");
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageHeaderComponent, { className: "PageHeaderComponent", filePath: "src\\app\\shared\\components\\page-header\\page-header.component.ts", lineNumber: 8 });
})();

// src/app/shared/layouts/authentication-layout/authentication-layout.component.ts
var AuthenticationLayoutComponent = class _AuthenticationLayoutComponent {
  static {
    this.\u0275fac = function AuthenticationLayoutComponent_Factory(t) {
      return new (t || _AuthenticationLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthenticationLayoutComponent, selectors: [["app-authentication-layout"]], decls: 2, vars: 0, template: function AuthenticationLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-switcher")(1, "router-outlet");
      }
    }, dependencies: [RouterOutlet, SwitcherComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthenticationLayoutComponent, { className: "AuthenticationLayoutComponent", filePath: "src\\app\\shared\\layouts\\authentication-layout\\authentication-layout.component.ts", lineNumber: 8 });
})();

// src/app/shared/components/landing-switcher/landing-switcher.component.ts
var LandingSwitcherComponent = class _LandingSwitcherComponent {
  constructor(document2, elementRef, renderer, el) {
    this.document = document2;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.el = el;
    this.CheckOpe = () => {
      if (localStorage.getItem("ynex-dir") == "rtl") {
        this.RtlChecked = true;
      }
      if (localStorage.getItem("ynex-dir") == "rtl") {
        this.darkchecked = true;
      }
    };
    this.color1 = "#1457e6";
    this.localDark = localStorage;
    this.localdata = localStorage;
    this.expande = false;
    this.expande1 = false;
    this.expande2 = false;
    this.body = document2.querySelector("body");
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    const bodyElement = document2.body;
  }
  // public localdata = localStorage;
  ngOnInit() {
    localStorageBackUp();
    this.CheckOpe();
  }
  themeChange(type, type1) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, "class", type);
    localStorage.setItem("ynex-theme-mode", type);
    this.renderer.setAttribute(htmlElement, "data-header-styles", type1);
    localStorage.setItem("ynex-header-mode", type1);
    if (localStorage.getItem("ynex-header-mode") === type1) {
      this.renderer.removeAttribute(htmlElement, "style");
    }
  }
  primary(type) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    htmlElement.style.setProperty("--primary", type);
    htmlElement.style.setProperty("--primary-rgb", type);
    localStorage.setItem("ynex-primary-mode", type);
  }
  //primary theme change
  dynamicLightPrimary(data) {
    this.color1 = data.color;
    const dynamicPrimaryLight = document.querySelectorAll("input.color-primary-light");
    dynamicLightPrimaryColor(dynamicPrimaryLight, this.color1);
    localStorage.setItem("ynexlight-primary-color", hexToRgba(this.color1) || "");
    localStorage.setItem("ynexlight-primary-color1", hexToRgba(this.color1) || "");
    localStorage.setItem("ynexlight-mode", "true");
    this.body?.classList.remove("transparent-mode");
    this.body?.classList.add("light-mode");
    this.body?.classList.remove("dark");
    this.body?.classList.remove("bg-img1");
    localStorage.removeItem("ynex-primary-mode");
  }
  DirectionsChange(type) {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, "dir", type);
    localStorage.setItem("ynex-dir", type);
  }
  reset() {
    localStorage.clear();
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;
    htmlElement.removeAttribute("style");
    htmlElement.setAttribute("class", "light");
    htmlElement.setAttribute("dir", "ltr");
    htmlElement.setAttribute("data-nav-layout", "horizontal");
    htmlElement.setAttribute("data-page-style", "regular");
    htmlElement.setAttribute("data-header-styles", "light");
    htmlElement.setAttribute("data-menu-styles", "dark");
    htmlElement.setAttribute("bg-img", "dark");
    htmlElement.removeAttribute("data-toggled");
    htmlElement.removeAttribute("style");
    this.toggleExpand();
  }
  toggleExpand() {
    this.expande = !this.expande;
    if (localStorage.getItem("data-menu-styles") == "light") {
      document.querySelector("html")?.setAttribute("data-menu-styles", "light");
    } else if (localStorage.getItem("data-menu-styles") == "dark") {
      document.querySelector("html")?.setAttribute("data-menu-styles", "dark");
    }
  }
  static {
    this.\u0275fac = function LandingSwitcherComponent_Factory(t) {
      return new (t || _LandingSwitcherComponent)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingSwitcherComponent, selectors: [["app-landing-switcher"]], decls: 60, vars: 3, consts: [["id", "hs-overlay-switcher", "tabindex", "-1", 1, "hs-overlay", "hidden", "ti-offcanvas", "ti-offcanvas-right"], [1, "ti-offcanvas-header"], [1, "ti-offcanvas-title"], ["type", "button", "data-hs-overlay", "#hs-overlay-switcher", 1, "ti-btn", "flex-shrink-0", "p-0", "transition-none", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "hover:text-gray-700", "focus:ring-gray-400", "focus:ring-offset-white", "dark:hover:text-white/80", "dark:focus:ring-white/10", "dark:focus:ring-offset-white/10"], [1, "sr-only"], [1, "ri-close-circle-line", "leading-none", "text-lg"], ["id", "switcher-body", 1, "ti-offcanvas-body"], [1, "switcher-style-head"], [1, "grid", "grid-cols-3", "gap-6", "switcher-style"], [1, "flex"], ["type", "radio", "name", "theme-style", "id", "switcher-light-theme", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-light-theme", 1, "text-xs", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "font-semibold", "ms-2"], ["type", "radio", "name", "theme-style", "id", "switcher-dark-theme", "checked", "", 1, "ti-form-radio", 3, "click"], ["for", "switcher-dark-theme", 1, "text-xs", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "font-semibold", "ms-2"], ["type", "radio", "name", "direction", "id", "switcher-ltr", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-ltr", 1, "text-xs", "font-semibold", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2"], ["type", "radio", "name", "direction", "id", "switcher-rtl", 1, "ti-form-radio", 3, "click", "checked"], ["for", "switcher-rtl", 1, "text-xs", "font-semibold", "text-defaulttextcolor", "dark:text-defaulttextcolor/70", "ms-2"], [1, "theme-colors"], [1, "flex", "switcher-style", "space-x-3", "rtl:space-x-reverse"], [1, "ti-form-radio", "switch-select"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary", "checked", "", 1, "ti-form-radio", "color-input", "color-primary-1", 3, "click"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary1", 1, "ti-form-radio", "color-input", "color-primary-2", 3, "click"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary2", 1, "ti-form-radio", "color-input", "color-primary-3", 3, "click"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary3", 1, "ti-form-radio", "color-input", "color-primary-4", 3, "click"], ["type", "radio", "name", "theme-primary", "id", "switcher-primary4", 1, "ti-form-radio", "color-input", "color-primary-5", 3, "click"], [1, "ti-form-radio", "switch-select", "ps-0", "mt-1", "color-primary-light"], [1, "theme-container-primary"], [1, "pickr-container-primary"], [1, "ti-offcanvas-footer", "sm:flex", "justify-between"], ["href", "https://themeforest.net/user/spruko/portfolio", "target", "_blank", 1, "w-full", "ti-btn", "ti-btn-primary-full", "m-1"], ["href", "https://themeforest.net/user/spruko/portfolio", "target", "_blank", 1, "w-full", "ti-btn", "ti-btn-secondary-full", "m-1"], ["href", "javascript:void(0);", "id", "reset-all", 1, "w-full", "ti-btn", "ti-btn-danger-full", "m-1", 3, "click"]], template: function LandingSwitcherComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "p");
        \u0275\u0275text(1, "landing-switcher works!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 0)(3, "div", 1)(4, "h5", 2);
        \u0275\u0275text(5, " Switcher ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 3)(7, "span", 4);
        \u0275\u0275text(8, "Close modal");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "i", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 6)(11, "div")(12, "div")(13, "p", 7);
        \u0275\u0275text(14, "Theme Color Mode:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 8)(16, "div", 9)(17, "input", 10);
        \u0275\u0275listener("click", function LandingSwitcherComponent_Template_input_click_17_listener() {
          return ctx.themeChange("light", "light");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "label", 11);
        \u0275\u0275text(19, "Light");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 9)(21, "input", 12);
        \u0275\u0275listener("click", function LandingSwitcherComponent_Template_input_click_21_listener() {
          return ctx.themeChange("dark", "dark");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "label", 13);
        \u0275\u0275text(23, "Dark");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "div")(25, "p", 7);
        \u0275\u0275text(26, "Directions:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 8)(28, "div", 9)(29, "input", 14);
        \u0275\u0275listener("click", function LandingSwitcherComponent_Template_input_click_29_listener() {
          return ctx.DirectionsChange("ltr");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "label", 15);
        \u0275\u0275text(31, "LTR");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 9)(33, "input", 16);
        \u0275\u0275listener("click", function LandingSwitcherComponent_Template_input_click_33_listener() {
          return ctx.DirectionsChange("rtl");
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "label", 17);
        \u0275\u0275text(35, "RTL");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 18)(37, "p", 7);
        \u0275\u0275text(38, "Theme Primary:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 19)(40, "div", 20)(41, "input", 21);
        \u0275\u0275listener("click", function LandingSwitcherComponent_Template_input_click_41_listener() {
          return ctx.primary("58 88 146");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 20)(43, "input", 22);
        \u0275\u0275listener("click", function LandingSwitcherComponent_Template_input_click_43_listener() {
          return ctx.primary("92 144 163");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 20)(45, "input", 23);
        \u0275\u0275listener("click", function LandingSwitcherComponent_Template_input_click_45_listener() {
          return ctx.primary("161 90 223");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 20)(47, "input", 24);
        \u0275\u0275listener("click", function LandingSwitcherComponent_Template_input_click_47_listener() {
          return ctx.primary("78 172 76");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 20)(49, "input", 25);
        \u0275\u0275listener("click", function LandingSwitcherComponent_Template_input_click_49_listener() {
          return ctx.primary("223 90 90");
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 26);
        \u0275\u0275element(51, "div", 27)(52, "div", 28);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(53, "div", 29)(54, "a", 30);
        \u0275\u0275text(55, "Buy Now");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "a", 31);
        \u0275\u0275text(57, "Our Portfolio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "a", 32);
        \u0275\u0275listener("click", function LandingSwitcherComponent_Template_a_click_58_listener() {
          return ctx.reset();
        });
        \u0275\u0275text(59, "Reset");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275property("checked", ctx.localDark["synto-theme-mode"] != "dark");
        \u0275\u0275advance(12);
        \u0275\u0275property("checked", ctx.localdata["ynex-dir"] != "rtl");
        \u0275\u0275advance(4);
        \u0275\u0275property("checked", ctx.localdata["ynex-dir"] == "rtl");
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingSwitcherComponent, { className: "LandingSwitcherComponent", filePath: "src\\app\\shared\\components\\landing-switcher\\landing-switcher.component.ts", lineNumber: 11 });
})();

// src/app/shared/layouts/landing-layout/landing-layout.component.ts
var LandingLayoutComponent = class _LandingLayoutComponent {
  static {
    this.\u0275fac = function LandingLayoutComponent_Factory(t) {
      return new (t || _LandingLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingLayoutComponent, selectors: [["app-landing-layout"]], decls: 2, vars: 0, template: function LandingLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet")(1, "app-landing-switcher");
      }
    }, dependencies: [RouterOutlet, LandingSwitcherComponent] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingLayoutComponent, { className: "LandingLayoutComponent", filePath: "src\\app\\shared\\layouts\\landing-layout\\landing-layout.component.ts", lineNumber: 9 });
})();

// src/app/shared/shared.module.ts
var SharedModule = class _SharedModule {
  static {
    this.\u0275fac = function SharedModule_Factory(t) {
      return new (t || _SharedModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [ColorPickerService], imports: [
      CommonModule,
      RouterModule,
      SimplebarAngularModule,
      FormsModule,
      ReactiveFormsModule,
      ColorPickerModule
      // NgxColorsModule
    ] });
  }
};

export {
  SharedModule
};
//# sourceMappingURL=chunk-FF7QN5R5.js.map
