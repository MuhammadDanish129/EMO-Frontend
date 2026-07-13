import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-7CONLPWZ.js";
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-AVLIJGNB.js";

// src/app/shared/yx-select/yx-select.component.ts
var _c0 = ["searchInput"];
function YxSelectComponent_label_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function YxSelectComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 10);
    \u0275\u0275text(1);
    \u0275\u0275template(2, YxSelectComponent_label_1_span_2_Template, 2, 0, "span", 11);
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
function YxSelectComponent_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 13, 0);
    \u0275\u0275twoWayListener("ngModelChange", function YxSelectComponent_input_3_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchTerm, $event) || (ctx_r0.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function YxSelectComponent_input_3_Template_input_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    })("keydown", function YxSelectComponent_input_3_Template_input_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSearchKeydown($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchTerm);
    \u0275\u0275property("placeholder", ctx_r0.selectedLabel || ctx_r0.placeholder);
  }
}
function YxSelectComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-[rgb(var(--text-muted))]", !ctx_r0.selectedLabel);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedLabel || ctx_r0.placeholder, " ");
  }
}
function YxSelectComponent_div_6_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click", function YxSelectComponent_div_6_ng_container_1_div_1_Template_div_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.select(item_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("yx-selected", item_r4[ctx_r0.valueKey] === ctx_r0.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4[ctx_r0.labelKey], " ");
  }
}
function YxSelectComponent_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, YxSelectComponent_div_6_ng_container_1_div_1_Template, 2, 3, "div", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filteredItems);
  }
}
function YxSelectComponent_div_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "No options found");
    \u0275\u0275elementEnd();
  }
}
function YxSelectComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, YxSelectComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 16)(2, YxSelectComponent_div_6_ng_template_2_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noOptions_r5 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredItems.length)("ngIfElse", noOptions_r5);
  }
}
function YxSelectComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
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
    this.placement = "bottom";
    this.searchKeys = [];
    this.enableSearch = false;
    this.valueChange = new EventEmitter();
    this.open = false;
    this.searchTerm = "";
  }
  get filteredItems() {
    if (!this.enableSearch || !this.searchTerm)
      return this.items;
    const term = this.searchTerm.toLowerCase();
    const keys = this.searchKeys.length ? this.searchKeys : [this.labelKey];
    return this.items.filter((item) => keys.some((key) => String(item[key] ?? "").toLowerCase().includes(term)));
  }
  get selectedLabel() {
    const selected = this.items.find((i) => i[this.valueKey] === this.value);
    return selected ? selected[this.labelKey] : null;
  }
  toggle() {
    if (this.disabled)
      return;
    this.open = !this.open;
    if (this.open && this.enableSearch) {
      this.searchTerm = "";
      this.focusSearchInput();
    }
  }
  onSearchKeydown(event) {
    event.stopPropagation();
    if (event.key === "Escape") {
      this.closePanel();
      return;
    }
    if (event.key === "Enter" && this.filteredItems.length) {
      event.preventDefault();
      this.select(this.filteredItems[0]);
    }
  }
  select(item) {
    if (this.disabled)
      return;
    this.value = item[this.valueKey];
    this.valueChange.emit(this.value);
    this.closePanel();
  }
  closePanel() {
    this.open = false;
    this.searchTerm = "";
  }
  focusSearchInput() {
    setTimeout(() => this.searchInput?.nativeElement.focus());
  }
  static {
    this.\u0275fac = function YxSelectComponent_Factory(t) {
      return new (t || _YxSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _YxSelectComponent, selectors: [["yx-select"]], viewQuery: function YxSelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
      }
    }, inputs: { items: "items", value: "value", labelKey: "labelKey", valueKey: "valueKey", placeholder: "placeholder", label: "label", required: "required", error: "error", disabled: "disabled", placement: "placement", searchKeys: "searchKeys", enableSearch: "enableSearch" }, outputs: { valueChange: "valueChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 13, consts: [["searchInput", ""], ["noOptions", ""], [1, "yx-select"], ["class", "yx-label block text-xs font-semibold mb-1", 4, "ngIf"], [1, "yx-select-trigger", 3, "click"], ["type", "text", "class", "yx-select-search-input text-sm", 3, "ngModel", "placeholder", "ngModelChange", "click", "keydown", 4, "ngIf"], ["class", "text-sm", 3, "text-[rgb(var(--text-muted))]", 4, "ngIf"], [1, "las", "la-angle-down", "transition-transform"], ["class", "yx-select-panel", 4, "ngIf"], ["class", "text-xs font-medium text-[rgb(var(--danger))] mt-1", 4, "ngIf"], [1, "yx-label", "block", "text-xs", "font-semibold", "mb-1"], ["class", "text-[rgb(var(--red-500))]", 4, "ngIf"], [1, "text-[rgb(var(--red-500))]"], ["type", "text", 1, "yx-select-search-input", "text-sm", 3, "ngModelChange", "click", "keydown", "ngModel", "placeholder"], [1, "text-sm"], [1, "yx-select-panel"], [4, "ngIf", "ngIfElse"], ["class", "yx-select-option", 3, "yx-selected", "click", 4, "ngFor", "ngForOf"], [1, "yx-select-option", 3, "click"], [1, "yx-select-empty"], [1, "text-xs", "font-medium", "text-[rgb(var(--danger))]", "mt-1"]], template: function YxSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275template(1, YxSelectComponent_label_1_Template, 3, 2, "label", 3);
        \u0275\u0275elementStart(2, "div", 4);
        \u0275\u0275listener("click", function YxSelectComponent_Template_div_click_2_listener() {
          return ctx.toggle();
        });
        \u0275\u0275template(3, YxSelectComponent_input_3_Template, 2, 2, "input", 5)(4, YxSelectComponent_span_4_Template, 2, 3, "span", 6);
        \u0275\u0275element(5, "i", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, YxSelectComponent_div_6_Template, 4, 2, "div", 8)(7, YxSelectComponent_p_7_Template, 2, 1, "p", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("yx-select-up", ctx.placement === "top");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.label);
        \u0275\u0275advance();
        \u0275\u0275classProp("yx-error", ctx.error)("yx-disabled", ctx.disabled);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.enableSearch && ctx.open);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.enableSearch || !ctx.open);
        \u0275\u0275advance();
        \u0275\u0275classProp("rotate-180", ctx.open);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.open);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.yx-select-trigger[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 2.625rem;\n  min-height: 2.625rem;\n}\n.yx-select-trigger[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  line-height: 1.25rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.yx-select-trigger[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  flex: none;\n}\n.yx-select-search-input[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n  width: 100%;\n  height: 1.25rem;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: rgb(var(--default-text-color));\n  font: inherit;\n  line-height: 1.25rem;\n}\n.yx-select-search-input[_ngcontent-%COMP%]::placeholder {\n  color: rgb(var(--text-muted));\n}\n.yx-select-up[_ngcontent-%COMP%]   .yx-select-panel[_ngcontent-%COMP%] {\n  top: auto;\n  bottom: calc(100% + 6px);\n  margin-top: 0;\n  margin-bottom: 6px;\n}\n.yx-select-up[_ngcontent-%COMP%]   .yx-select-option[_ngcontent-%COMP%] {\n  scroll-margin-bottom: 0.5rem;\n}\n.yx-select-empty[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  color: rgb(var(--text-muted));\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=yx-select.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(YxSelectComponent, { className: "YxSelectComponent", filePath: "src\\app\\shared\\yx-select\\yx-select.component.ts", lineNumber: 12 });
})();

export {
  YxSelectComponent
};
//# sourceMappingURL=chunk-L5ZIRAMR.js.map
