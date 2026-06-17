import {
  SharedModule
} from "./chunk-FF7QN5R5.js";
import "./chunk-6SVHGHML.js";
import "./chunk-3BGFXJK3.js";
import {
  SectionService
} from "./chunk-JZCFIY3V.js";
import {
  MaterialModuleModule
} from "./chunk-OKZQW6PV.js";
import "./chunk-OWIRED5M.js";
import {
  UserService
} from "./chunk-H6LTRMYQ.js";
import {
  Router
} from "./chunk-J4QH6UQS.js";
import {
  ConfirmDialogComponent
} from "./chunk-2YM3HG7T.js";
import "./chunk-YGYCE7FQ.js";
import "./chunk-5JUZCUNR.js";
import {
  MatSlideToggle
} from "./chunk-LVRCF6MZ.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-L4J3DKML.js";
import {
  ToastrService
} from "./chunk-5USDJHRC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-3FUH7QM2.js";
import "./chunk-LJGINEDX.js";
import "./chunk-6U6LEG24.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-R5AMMNLH.js";
import {
  __async,
  __spreadValues
} from "./chunk-6EVL5ZQD.js";

// src/app/components/core/section-management/section-management-add-update/section-management-add-update.component.ts
function SectionManagementAddUpdateComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.sectionName, " ");
  }
}
function SectionManagementAddUpdateComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 20);
  }
}
var SectionManagementAddUpdateComponent = class _SectionManagementAddUpdateComponent {
  /* ================= MODE ================= */
  get isEditMode() {
    return this.data?.mode === "edit";
  }
  constructor(dialogRef, sectionService, toaster, _userService, data) {
    this.dialogRef = dialogRef;
    this.sectionService = sectionService;
    this.toaster = toaster;
    this._userService = _userService;
    this.data = data;
    this.isSaving = false;
    this.currentUser = null;
    this.fieldErrors = {};
    this.model = {
      sectionName: "",
      fkFloor: "",
      isActive: true
    };
  }
  /* ================= INIT ================= */
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.data?.mode === "edit" && this.data.value) {
        this.model = __spreadValues({}, this.data.value);
      }
      this.currentUser = yield this._userService.user$;
      this.model.fkBusiness = this.currentUser?.fkBusiness;
      if (this.data?.floorId) {
        this.model.fkFloor = this.data.floorId;
      }
    });
  }
  /* ================= VALIDATION ================= */
  onNameChange() {
    if (this.fieldErrors.sectionName) {
      this.fieldErrors.sectionName = "";
    }
  }
  /* ================= ACTIONS ================= */
  close() {
    this.dialogRef.close();
  }
  save() {
    this.fieldErrors = {};
    if (!this.model.sectionName?.trim()) {
      this.fieldErrors.sectionName = "Section Name is required";
    }
    if (Object.keys(this.fieldErrors).length > 0)
      return;
    this.isSaving = true;
    const api$ = this.isEditMode ? this.sectionService.updateSection(this.model) : this.sectionService.addSection(this.model);
    api$.subscribe({
      next: (res) => {
        if (res.success) {
          this.toaster.success(this.isEditMode ? "Section Updated Successfully" : "Section Added Successfully");
          setTimeout(() => this.dialogRef.close("saved"), 400);
        } else {
          this.toaster.error(res.remarks || "Operation failed");
        }
        this.isSaving = false;
      },
      error: () => {
        this.toaster.error("Something went wrong");
        this.isSaving = false;
      }
    });
  }
  static {
    this.\u0275fac = function SectionManagementAddUpdateComponent_Factory(t) {
      return new (t || _SectionManagementAddUpdateComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SectionService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionManagementAddUpdateComponent, selectors: [["app-section-management-add-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 9, consts: [[1, "w-full", "max-w-md", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]", "shadow-md"], [1, "text-sm", "font-semibold", "tracking-wide", "text-white"], [1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "px-6", "py-5", "space-y-5"], [1, "space-y-1.5", "yx-field"], [1, "yx-label", "block", "text-xs", "font-semibold"], [1, "text-[rgb(var(--red-500))]"], ["type", "text", 1, "yx-input", "w-full", "rounded-lg", "border", "px-3", "py-2", "text-sm", 3, "ngModelChange", "ngModel"], ["class", "text-xs font-medium text-[rgb(var(--danger))]", 4, "ngIf"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4", "flex", "justify-between", "items-center"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-[rgb(var(--text-muted))]"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-[rgb(var(--default-border))]"], [1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "hover:bg-red", "hover:text-white", "border", "border-[rgb(var(--gray-300))]", 3, "click"], [1, "rounded-lg", "px-5", "py-2", "text-sm", "font-semibold", "bg-[rgb(var(--primary-600))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", "flex", "items-center", "gap-2", "disabled:opacity-60", 3, "click", "disabled"], ["class", "h-4 w-4 animate-spin rounded-full\n               border-2 border-white/40 border-t-white", 4, "ngIf"], [1, "text-xs", "font-medium", "text-[rgb(var(--danger))]"], [1, "h-4", "w-4", "animate-spin", "rounded-full", "border-2", "border-white/40", "border-t-white"]], template: function SectionManagementAddUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function SectionManagementAddUpdateComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "label", 7);
        \u0275\u0275text(9, " Section Name ");
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function SectionManagementAddUpdateComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.sectionName, $event) || (ctx.model.sectionName = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, SectionManagementAddUpdateComponent_p_13_Template, 2, 1, "p", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11)(15, "div")(16, "p", 12);
        \u0275\u0275text(17, "Active Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 13);
        \u0275\u0275text(19, " Inactive sections cannot be used. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "mat-slide-toggle", 14);
        \u0275\u0275twoWayListener("ngModelChange", function SectionManagementAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_20_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.isActive, $event) || (ctx.model.isActive = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 15)(22, "button", 16);
        \u0275\u0275listener("click", function SectionManagementAddUpdateComponent_Template_button_click_22_listener() {
          return ctx.close();
        });
        \u0275\u0275text(23, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 17);
        \u0275\u0275listener("click", function SectionManagementAddUpdateComponent_Template_button_click_24_listener() {
          return ctx.save();
        });
        \u0275\u0275template(25, SectionManagementAddUpdateComponent_span_25_Template, 1, 0, "span", 18);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update Section" : "Add Section", " ");
        \u0275\u0275advance(9);
        \u0275\u0275classProp("yx-error", ctx.fieldErrors.sectionName);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.sectionName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.sectionName);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.isActive);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSaving);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isSaving ? ctx.isEditMode ? "Updating..." : "Saving..." : ctx.isEditMode ? "Update Section" : "Save Section", " ");
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      SharedModule,
      MaterialModuleModule,
      MatSlideToggle
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionManagementAddUpdateComponent, { className: "SectionManagementAddUpdateComponent", filePath: "src\\app\\components\\core\\section-management\\section-management-add-update\\section-management-add-update.component.ts", lineNumber: 29 });
})();

// src/app/components/core/section-management/section-management.component.ts
function SectionManagementComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275element(2, "div", 41);
    \u0275\u0275elementStart(3, "p", 35);
    \u0275\u0275text(4, " Loading Sections... ");
    \u0275\u0275elementEnd()()();
  }
}
function SectionManagementComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "div")(3, "div", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 46)(8, "button", 47);
    \u0275\u0275listener("click", function SectionManagementComponent_div_42_Template_button_click_8_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToOffice(s_r2.sectionId));
    });
    \u0275\u0275element(9, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 49);
    \u0275\u0275listener("click", function SectionManagementComponent_div_42_Template_button_click_10_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(s_r2));
    });
    \u0275\u0275element(11, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 51);
    \u0275\u0275listener("click", function SectionManagementComponent_div_42_Template_button_click_12_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(s_r2.sectionId));
    });
    \u0275\u0275element(13, "i", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", s_r2.sectionName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", s_r2.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r2.isActive ? "Active" : "Inactive", " ");
  }
}
function SectionManagementComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "p", 54);
    \u0275\u0275text(2, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 55);
    \u0275\u0275text(4, " Try adjusting search or add a new section. ");
    \u0275\u0275elementEnd()();
  }
}
function SectionManagementComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 56);
    \u0275\u0275text(2, " Loading Sections... ");
    \u0275\u0275elementEnd()();
  }
}
function SectionManagementComponent_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 57)(1, "td", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 60)(6, "span", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 61)(9, "div", 62)(10, "div", 63)(11, "button", 64);
    \u0275\u0275listener("click", function SectionManagementComponent_tr_58_Template_button_click_11_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToOffice(s_r5.sectionId));
    });
    \u0275\u0275element(12, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 65);
    \u0275\u0275text(14, " Manage Offices ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 63)(16, "button", 66);
    \u0275\u0275listener("click", function SectionManagementComponent_tr_58_Template_button_click_16_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(s_r5));
    });
    \u0275\u0275element(17, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 65);
    \u0275\u0275text(19, " Edit Section ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 63)(21, "button", 67);
    \u0275\u0275listener("click", function SectionManagementComponent_tr_58_Template_button_click_21_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(s_r5.sectionId));
    });
    \u0275\u0275element(22, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 65);
    \u0275\u0275text(24, " Delete Section ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageIndex * ctx_r2.pageSize + i_r6 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", s_r5.sectionName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", s_r5.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r5.isActive ? "Active" : "Inactive", " ");
  }
}
function SectionManagementComponent_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 68)(2, "p", 54);
    \u0275\u0275text(3, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 55);
    \u0275\u0275text(5, " Try adjusting search or create a new Section. ");
    \u0275\u0275elementEnd()()();
  }
}
function SectionManagementComponent_button_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function SectionManagementComponent_button_66_Template_button_click_0_listener() {
      const p_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(p_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", p_r8 === ctx_r2.pageIndex ? "bg-[rgb(var(--primary))] text-white" : "hover:bg-gray-100");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r8 + 1, " ");
  }
}
var SectionManagementComponent = class _SectionManagementComponent {
  constructor(_sectionService, _toaster, dialog, _userService, router) {
    this._sectionService = _sectionService;
    this._toaster = _toaster;
    this.dialog = dialog;
    this._userService = _userService;
    this.router = router;
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.Sections = [];
    this.filteredSections = [];
  }
  /* ================= INIT ================= */
  ngOnInit() {
    return __async(this, null, function* () {
      const nav = history.state;
      console.log("breadcrumb 4", nav);
      this.fkFloor = nav.fkFloor || nav.fkFloor;
      this.fkBuilding = nav.fkBuilding;
      this.fkFacility = nav.fkFacility;
      this.fkBusiness = nav.fkBusiness;
      this.currentUser = yield this._userService.user$;
      this.loadSections(this.fkFloor);
    });
  }
  /* ================= LOAD ================= */
  loadSections(fkFloor) {
    this.isLoading = true;
    this._sectionService.getSectionByFloorId(fkFloor).subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || "Failed to load Sections");
          this.isLoading = false;
          return;
        }
        this.Sections = res.data ?? [];
        this.filteredSections = [...this.Sections];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.Sections = [];
        this.filteredSections = [];
        this.isLoading = false;
        this._toaster.error("Failed to load Sections");
      }
    });
  }
  /* ================= PAGINATION ================= */
  get pagedSections() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredSections.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredSections.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredSections.length);
  }
  /* ================= SEARCH ================= */
  searchSections() {
    const term = this.searchText.toLowerCase().trim();
    this.filteredSections = !term ? [...this.Sections] : this.Sections.filter((s) => s.sectionName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* ================= ADD ================= */
  addSection() {
    const dialogRef = this.dialog.open(SectionManagementAddUpdateComponent, {
      width: "420px",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: {
        mode: "add",
        floorId: this.fkFloor
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "saved") {
        this.loadSections(this.fkFloor);
      }
    });
  }
  /* ================= EDIT ================= */
  edit(st) {
    const dialogRef = this.dialog.open(SectionManagementAddUpdateComponent, {
      width: "420px",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: {
        mode: "edit",
        value: st
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "saved") {
        this.loadSections(this.fkFloor);
      }
    });
  }
  /* ================= DELETE ================= */
  delete(id) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "420px",
      disableClose: true,
      data: {
        title: "Delete Section",
        message: "Deleting this section is permanent.",
        confirmText: "Delete",
        cancelText: "Cancel",
        variant: "danger",
        showActions: true
      }
    });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this._sectionService.deleteSection(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("Section deleted");
            this.loadSections(this.fkFloor);
          } else {
            this._toaster.error(res.remarks || "Delete failed");
          }
        },
        error: () => {
          this._toaster.error("Delete failed");
        }
      });
    });
  }
  /* ================= PAGINATION CONTROLS ================= */
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredSections.length) {
      this.pageIndex++;
    }
  }
  prevPage() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
    }
  }
  goToPage(i) {
    this.pageIndex = i;
  }
  goToOffice(id) {
    this.router.navigate(["/core/office-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding,
        fkFloor: this.fkFloor,
        fkSection: id
      }
    });
  }
  goToFloor(id) {
    this.router.navigate(["/core/floor-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility,
        fkBuilding: this.fkBuilding
      }
    });
  }
  goToBuilding(id) {
    this.router.navigate(["/core/building-management"], {
      state: {
        fkBusiness: this.fkBusiness,
        fkFacility: this.fkFacility
      }
    });
  }
  goToFacility(id) {
    this.router.navigate(["/core/facility-management"], {
      state: {
        fkBusiness: this.fkBusiness
      }
    });
  }
  static {
    this.\u0275fac = function SectionManagementComponent_Factory(t) {
      return new (t || _SectionManagementComponent)(\u0275\u0275directiveInject(SectionService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionManagementComponent, selectors: [["app-section-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 69, vars: 14, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:gap-3", "md:items-center"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-plus-circle", "text-lg"], [1, "px-6", "py-3", "mb-4", "bg-[rgb(var(--light))]", "border-b", "border-[rgb(var(--gray-200))]"], [1, "flex", "items-center", "gap-1", "text-xs", "sm:text-sm"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--gray-600))]", "hover:text-[rgb(var(--primary))]", "transition", "font-medium", 3, "click"], [1, "las", "la-building", "text-sm", "sm:text-base"], [1, "hidden", "sm:inline"], [1, "las", "la-angle-right", "text-[rgb(var(--gray-400))]", "text-xs", "mx-1"], [1, "las", "la-city", "text-sm", "sm:text-base"], [1, "las", "la-layer-group", "text-sm", "sm:text-base"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--primary))]", "font-semibold"], [1, "las", "la-sitemap", "text-sm", "sm:text-base"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold"], ["type", "text", "placeholder", "Search Sections..", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "py-14 text-center", 4, "ngIf"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [4, "ngIf"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "py-14", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-start", "justify-between"], [1, "font-semibold", "text-indigo-600", "text-sm"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", 3, "click"], [1, "las", "la-briefcase", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-600", "mt-1"], ["colspan", "4", 1, "px-6", "py-14", "text-center"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3", "font-semibold", "text-indigo-600"], [1, "px-4", "py-3"], [1, "px-3", "py-3", "text-center"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", "hover:bg-[rgb(var(--blue-200))]", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", "hover:bg-[rgb(var(--indigo-200))]", "hover:scale-105", 3, "click"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", "hover:bg-[rgb(var(--red-200))]", "hover:scale-105", 3, "click"], ["colspan", "7", 1, "px-6", "py-20", "text-center"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function SectionManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Section Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage sections linked with selected floor. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function SectionManagementComponent_Template_button_click_9_listener() {
          return ctx.addSection();
        });
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275text(11, " Add Section ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "nav", 9)(14, "button", 10);
        \u0275\u0275listener("click", function SectionManagementComponent_Template_button_click_14_listener() {
          return ctx.goToFacility(ctx.fkBusiness);
        });
        \u0275\u0275element(15, "i", 11);
        \u0275\u0275elementStart(16, "span", 12);
        \u0275\u0275text(17, "Facility");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(18, "i", 13);
        \u0275\u0275elementStart(19, "button", 10);
        \u0275\u0275listener("click", function SectionManagementComponent_Template_button_click_19_listener() {
          return ctx.goToBuilding(ctx.fkFacility);
        });
        \u0275\u0275element(20, "i", 14);
        \u0275\u0275elementStart(21, "span", 12);
        \u0275\u0275text(22, "Building");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(23, "i", 13);
        \u0275\u0275elementStart(24, "button", 10);
        \u0275\u0275listener("click", function SectionManagementComponent_Template_button_click_24_listener() {
          return ctx.goToFloor(ctx.fkFloor);
        });
        \u0275\u0275element(25, "i", 15);
        \u0275\u0275elementStart(26, "span", 12);
        \u0275\u0275text(27, "Floor");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(28, "i", 13);
        \u0275\u0275elementStart(29, "span", 16);
        \u0275\u0275element(30, "i", 17);
        \u0275\u0275elementStart(31, "span", 12);
        \u0275\u0275text(32, "Section");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "div", 18)(34, "div", 19)(35, "p", 20);
        \u0275\u0275text(36, " Total Sections: ");
        \u0275\u0275elementStart(37, "span", 21);
        \u0275\u0275text(38);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "input", 22);
        \u0275\u0275twoWayListener("ngModelChange", function SectionManagementComponent_Template_input_ngModelChange_39_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function SectionManagementComponent_Template_input_ngModelChange_39_listener() {
          return ctx.searchSections();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 23);
        \u0275\u0275template(41, SectionManagementComponent_div_41_Template, 5, 0, "div", 24)(42, SectionManagementComponent_div_42_Template, 14, 3, "div", 25)(43, SectionManagementComponent_div_43_Template, 5, 0, "div", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 27)(45, "table", 28)(46, "thead", 29)(47, "tr")(48, "th", 30);
        \u0275\u0275text(49, "Sr #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "th", 30);
        \u0275\u0275text(51, "Section");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "th", 30);
        \u0275\u0275text(53, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "th", 31);
        \u0275\u0275text(55, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "tbody");
        \u0275\u0275template(57, SectionManagementComponent_tr_57_Template, 3, 0, "tr", 32)(58, SectionManagementComponent_tr_58_Template, 25, 4, "tr", 33)(59, SectionManagementComponent_tr_59_Template, 6, 0, "tr", 32);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "div", 34)(61, "p", 35);
        \u0275\u0275text(62);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 36)(64, "button", 37);
        \u0275\u0275listener("click", function SectionManagementComponent_Template_button_click_64_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(65, " Prev ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(66, SectionManagementComponent_button_66_Template, 2, 2, "button", 38);
        \u0275\u0275elementStart(67, "button", 37);
        \u0275\u0275listener("click", function SectionManagementComponent_Template_button_click_67_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(68, " Next ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(38);
        \u0275\u0275textInterpolate1(" ", ctx.filteredSections.length, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedSections);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedSections.length === 0);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedSections);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedSections.length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.pageIndex * ctx.pageSize + 1, " \u2013 ", ctx.pageEnd, " of ", ctx.filteredSections.length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.pageIndex === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", (ctx.pageIndex + 1) * ctx.pageSize >= ctx.filteredSections.length);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MaterialModuleModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionManagementComponent, { className: "SectionManagementComponent", filePath: "src\\app\\components\\core\\section-management\\section-management.component.ts", lineNumber: 24 });
})();
export {
  SectionManagementComponent
};
//# sourceMappingURL=chunk-V5CJPWHX.js.map
