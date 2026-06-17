import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-3FUH7QM2.js";
import {
  CommonModule,
  EventEmitter,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-R5AMMNLH.js";

// src/app/shared/yx-select/yx-select.component.ts
function YxSelectComponent_label_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function YxSelectComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 7);
    \u0275\u0275text(1);
    \u0275\u0275template(2, YxSelectComponent_label_1_span_2_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.required);
  }
}
function YxSelectComponent_div_6_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function YxSelectComponent_div_6_input_1_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.searchTerm, $event) || (ctx_r0.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchTerm);
  }
}
function YxSelectComponent_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function YxSelectComponent_div_6_div_2_Template_div_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.select(item_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("yx-selected", item_r4[ctx_r0.valueKey] === ctx_r0.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4[ctx_r0.labelKey], " ");
  }
}
function YxSelectComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, YxSelectComponent_div_6_input_1_Template, 1, 1, "input", 11)(2, YxSelectComponent_div_6_div_2_Template, 2, 3, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.enableSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filteredItems);
  }
}
function YxSelectComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.error, " ");
  }
}
var YxSelectComponent = class _YxSelectComponent {
  constructor() {
    this.items = [];
    this.labelKey = "label";
    this.valueKey = "value";
    this.placeholder = "Select";
    this.label = "";
    this.required = false;
    this.error = null;
    this.disabled = false;
    this.enableSearch = false;
    this.valueChange = new EventEmitter();
    this.open = false;
    this.searchTerm = "";
  }
  get filteredItems() {
    if (!this.enableSearch || !this.searchTerm)
      return this.items;
    const term = this.searchTerm.toLowerCase();
    return this.items.filter((item) => (item[this.labelKey] || "").toLowerCase().includes(term));
  }
  get selectedLabel() {
    const selected = this.items.find((i) => i[this.valueKey] === this.value);
    return selected ? selected[this.labelKey] : null;
  }
  toggle() {
    if (this.disabled)
      return;
    this.open = !this.open;
  }
  select(item) {
    if (this.disabled)
      return;
    this.value = item[this.valueKey];
    this.valueChange.emit(this.value);
    this.open = false;
  }
  static {
    this.\u0275fac = function YxSelectComponent_Factory(t) {
      return new (t || _YxSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _YxSelectComponent, selectors: [["yx-select"]], inputs: { items: "items", value: "value", labelKey: "labelKey", valueKey: "valueKey", placeholder: "placeholder", label: "label", required: "required", error: "error", disabled: "disabled", enableSearch: "enableSearch" }, outputs: { valueChange: "valueChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 12, consts: [[1, "yx-select"], ["class", "yx-label block text-xs font-semibold mb-1", 4, "ngIf"], [1, "yx-select-trigger", 3, "click"], [1, "text-sm"], [1, "las", "la-angle-down", "transition-transform"], ["class", "yx-select-panel", 4, "ngIf"], ["class", "text-xs font-medium text-[rgb(var(--danger))] mt-1", 4, "ngIf"], [1, "yx-label", "block", "text-xs", "font-semibold", "mb-1"], ["class", "text-[rgb(var(--red-500))]", 4, "ngIf"], [1, "text-[rgb(var(--red-500))]"], [1, "yx-select-panel"], ["type", "text", "placeholder", "Search...", "class", "w-full p-2 border-b border-gray-200 mb-2 text-sm focus:outline-none rounded", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "yx-select-option", 3, "yx-selected", "click", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Search...", 1, "w-full", "p-2", "border-b", "border-gray-200", "mb-2", "text-sm", "focus:outline-none", "rounded", 3, "ngModelChange", "ngModel"], [1, "yx-select-option", 3, "click"], [1, "text-xs", "font-medium", "text-[rgb(var(--danger))]", "mt-1"]], template: function YxSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, YxSelectComponent_label_1_Template, 3, 2, "label", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275listener("click", function YxSelectComponent_Template_div_click_2_listener() {
          return ctx.toggle();
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, YxSelectComponent_div_6_Template, 3, 2, "div", 5)(7, YxSelectComponent_p_7_Template, 2, 1, "p", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.label);
        \u0275\u0275advance();
        \u0275\u0275classProp("yx-error", ctx.error)("yx-disabled", ctx.disabled);
        \u0275\u0275advance();
        \u0275\u0275classProp("text-[rgb(var(--text-muted))]", !ctx.selectedLabel);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.selectedLabel || ctx.placeholder, " ");
        \u0275\u0275advance();
        \u0275\u0275classProp("rotate-180", ctx.open);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.open);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(YxSelectComponent, { className: "YxSelectComponent", filePath: "src\\app\\shared\\yx-select\\yx-select.component.ts", lineNumber: 11 });
})();

export {
  YxSelectComponent
};
//# sourceMappingURL=chunk-VUCKRGWV.js.map
