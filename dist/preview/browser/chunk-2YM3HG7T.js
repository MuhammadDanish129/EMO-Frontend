import {
  MatButtonModule
} from "./chunk-5JUZCUNR.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-L4J3DKML.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-R5AMMNLH.js";

// src/app/shared/confirmation-dialouge/confirmation-dialog.component.ts
var _c0 = (a0, a1, a2) => ({ "alert-primary": a0, "alert-warning": a1, "alert-danger": a2 });
var _c1 = (a0, a1, a2) => ({ "fill-primary": a0, "fill-warning": a1, "fill-danger": a2 });
var _c2 = (a0, a1, a2) => ({ "bg-primary": a0, "bg-warning": a1, "bg-danger": a2 });
function ConfirmDialogComponent__svg_path_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 14);
  }
}
function ConfirmDialogComponent__svg_path_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 15);
  }
}
function ConfirmDialogComponent__svg_path_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 16);
  }
}
function ConfirmDialogComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ConfirmDialogComponent_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirm());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c2, ctx_r1.data.variant === "info", ctx_r1.data.variant === "warning", ctx_r1.data.variant === "danger"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.confirmText || "Confirm", " ");
  }
}
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  get showActions() {
    return this.data.showActions !== false;
  }
  confirm() {
    this.dialogRef.close(true);
  }
  cancel() {
    this.dialogRef.close(false);
  }
  static {
    this.\u0275fac = function ConfirmDialogComponent_Factory(t) {
      return new (t || _ConfirmDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 17, consts: [[1, "box", "bg-white", "border-0", "relative", "yx-confirm-dialog"], ["type", "button", "aria-label", "Close", 1, "yx-dialog-close", 3, "click"], [1, "bi", "bi-x"], [1, "custom-alert1", "text-center", "px-6", "pt-5", "pb-2", 3, "ngClass"], ["xmlns", "http://www.w3.org/2000/svg", "height", "1.6rem", "width", "1.6rem", "viewBox", "0 0 24 24", 1, "custom-alert-icon", "inline-flex", "mb-2", 3, "ngClass"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z", 4, "ngIf"], ["d", "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z", 4, "ngIf"], ["d", "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z", 4, "ngIf"], [1, "text-[1.15rem]", "font-medium", "mb-1"], [1, "text-sm", "mb-0", "leading-relaxed"], [1, "flex", "justify-center", "gap-3", "pt-3", "pb-4", "border", "border-[(rgb(var(--light)))]"], ["type", "button", 1, "ti-btn", "yx-btn-outline-primary", "!py-1.5", "!px-4", "text-sm", 3, "click"], ["type", "button", "class", "ti-btn !py-1.5 !px-4 text-sm text-white", 3, "ngClass", "click", 4, "ngIf"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"], ["d", "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"], ["d", "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"], ["type", "button", 1, "ti-btn", "!py-1.5", "!px-4", "text-sm", "text-white", 3, "click", "ngClass"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_1_listener() {
          return ctx.cancel();
        });
        \u0275\u0275element(2, "i", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 4);
        \u0275\u0275element(5, "path", 5);
        \u0275\u0275template(6, ConfirmDialogComponent__svg_path_6_Template, 1, 0, "path", 6)(7, ConfirmDialogComponent__svg_path_7_Template, 1, 0, "path", 7)(8, ConfirmDialogComponent__svg_path_8_Template, 1, 0, "path", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(9, "h5", 9);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 10);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 11)(14, "button", 12);
        \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_14_listener() {
          return ctx.cancel();
        });
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, ConfirmDialogComponent_button_16_Template, 2, 6, "button", 13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(9, _c0, ctx.data.variant === "info", ctx.data.variant === "warning", ctx.data.variant === "danger"));
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(13, _c1, ctx.data.variant === "info", ctx.data.variant === "warning", ctx.data.variant === "danger"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.data.variant === "info");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.variant === "warning");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.variant === "danger");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.data.title || "Confirmation", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.data.message || "Are you sure you want to continue?", " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.data.cancelText || "Cancel", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.showActions !== false);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, MatDialogModule, MatButtonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src\\app\\shared\\confirmation-dialouge\\confirmation-dialog.component.ts", lineNumber: 24 });
})();

export {
  ConfirmDialogComponent
};
//# sourceMappingURL=chunk-2YM3HG7T.js.map
