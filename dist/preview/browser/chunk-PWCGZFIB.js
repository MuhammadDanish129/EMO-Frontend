import {
  BusinessManagementAddUpdateComponent,
  BusinessService
} from "./chunk-JPDUJBBE.js";
import "./chunk-TEI4X4OW.js";
import "./chunk-AQYXGAJ6.js";
import "./chunk-FF7QN5R5.js";
import "./chunk-6SVHGHML.js";
import "./chunk-3BGFXJK3.js";
import {
  MaterialModuleModule
} from "./chunk-OKZQW6PV.js";
import "./chunk-OWIRED5M.js";
import "./chunk-VUCKRGWV.js";
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
  MatSlideToggle,
  MatSlideToggleModule
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
  __async
} from "./chunk-6EVL5ZQD.js";

// src/app/components/core/business-management/business-management-update/business-management-update.component.ts
function BusinessManagementUpdateComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.businessName, " ");
  }
}
function BusinessManagementUpdateComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.businessEmail, " ");
  }
}
function BusinessManagementUpdateComponent_p_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.fieldErrors.businessContact, " ");
  }
}
var BusinessManagementUpdateComponent = class _BusinessManagementUpdateComponent {
  constructor(dialogRef, businessService, userService, toaster, data) {
    this.dialogRef = dialogRef;
    this.businessService = businessService;
    this.userService = userService;
    this.toaster = toaster;
    this.data = data;
    this.isSaving = false;
    this.model = {
      businessId: "",
      businessName: "",
      businessEmail: "",
      businessContact: "",
      isActive: true
    };
    this.fieldErrors = {};
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.currentUser = yield this.userService.user$;
      if (this.data?.mode === "edit" && this.data?.value) {
        const st = this.data.value;
        this.model.businessId = st.businessId;
        this.model.businessName = st.businessName;
        this.model.businessEmail = st.businessEmail;
        this.model.businessContact = st.businessContact;
        this.model.isActive = st.isActive;
      }
    });
  }
  /* ================= VALIDATION ================= */
  validate() {
    this.fieldErrors = {};
    if (!this.model.businessName.trim()) {
      this.fieldErrors.businessName = "Business name is required";
    }
    if (!this.model.businessEmail.trim()) {
      this.fieldErrors.businessEmail = "Business email is required";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.model.businessEmail)) {
      this.fieldErrors.businessEmail = "Invalid email format";
    }
    if (!this.model.businessContact.trim()) {
      this.fieldErrors.businessContact = "Business contact is required";
    }
    return Object.keys(this.fieldErrors).length === 0;
  }
  /* ================= UPDATE ================= */
  updateBusiness() {
    if (!this.validate())
      return;
    this.isSaving = true;
    const payload = {
      businessId: this.model.businessId,
      businessName: this.model.businessName,
      businessEmail: this.model.businessEmail,
      businessContact: this.model.businessContact,
      isActive: this.model.isActive,
      fkUser: this.currentUser?.userId
    };
    this.businessService.updateBusiness(payload).subscribe({
      next: () => {
        this.toaster.success("Business updated successfully");
        this.dialogRef.close("updated");
      },
      error: () => {
        this.toaster.error("Update failed");
        this.isSaving = false;
      }
    });
  }
  close() {
    this.dialogRef.close();
  }
  static {
    this.\u0275fac = function BusinessManagementUpdateComponent_Factory(t) {
      return new (t || _BusinessManagementUpdateComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(BusinessService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BusinessManagementUpdateComponent, selectors: [["app-business-management-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 13, consts: [[1, "w-full", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl", "max-h-[90vh]", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]"], [1, "text-sm", "font-semibold", "text-white"], ["type", "button", 1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", 3, "click"], [1, "las", "la-times"], [1, "flex-1", "px-6", "py-4", "overflow-y-auto", "space-y-4"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-5", "space-y-4"], [1, "text-[rgb(var(--primary))]", "font-semibold", "uppercase", "tracking-wide"], [1, "yx-field"], [1, "yx-label"], [1, "yx-input", "w-full", 3, "ngModelChange", "ngModel"], ["class", "text-xs text-[rgb(var(--danger))] mt-1", 4, "ngIf"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4", "flex", "justify-between", "items-center"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-muted"], ["color", "primary", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-[rgb(var(--default-border))]"], [1, "rounded-lg", "px-4", "py-2", "border", "border-[rgb(var(--gray-300))]", 3, "click"], [1, "rounded-lg", "px-5", "py-2", "bg-[rgb(var(--primary-600))]", "text-white", 3, "click"], [1, "text-xs", "text-[rgb(var(--danger))]", "mt-1"]], template: function BusinessManagementUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, " Update Business ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function BusinessManagementUpdateComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275element(5, "i", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "p", 7);
        \u0275\u0275text(9, " Business Information ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
        \u0275\u0275text(12, "Business Name *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function BusinessManagementUpdateComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.businessName, $event) || (ctx.model.businessName = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function BusinessManagementUpdateComponent_Template_input_ngModelChange_13_listener() {
          return ctx.fieldErrors.businessName = null;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, BusinessManagementUpdateComponent_p_14_Template, 2, 1, "p", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 8)(16, "label", 9);
        \u0275\u0275text(17, "Business Email *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function BusinessManagementUpdateComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.businessEmail, $event) || (ctx.model.businessEmail = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function BusinessManagementUpdateComponent_Template_input_ngModelChange_18_listener() {
          return ctx.fieldErrors.businessEmail = null;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, BusinessManagementUpdateComponent_p_19_Template, 2, 1, "p", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 8)(21, "label", 9);
        \u0275\u0275text(22, "Business Contact *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function BusinessManagementUpdateComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.businessContact, $event) || (ctx.model.businessContact = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function BusinessManagementUpdateComponent_Template_input_ngModelChange_23_listener() {
          return ctx.fieldErrors.businessContact = null;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, BusinessManagementUpdateComponent_p_24_Template, 2, 1, "p", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 12)(26, "div")(27, "p", 13);
        \u0275\u0275text(28, "Active Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p", 14);
        \u0275\u0275text(30, "Inactive users cannot login");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "mat-slide-toggle", 15);
        \u0275\u0275twoWayListener("ngModelChange", function BusinessManagementUpdateComponent_Template_mat_slide_toggle_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.model.isActive, $event) || (ctx.model.isActive = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 16)(33, "button", 17);
        \u0275\u0275listener("click", function BusinessManagementUpdateComponent_Template_button_click_33_listener() {
          return ctx.close();
        });
        \u0275\u0275text(34, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 18);
        \u0275\u0275listener("click", function BusinessManagementUpdateComponent_Template_button_click_35_listener() {
          return ctx.updateBusiness();
        });
        \u0275\u0275text(36, " Update Business ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx.fieldErrors.businessName);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.businessName);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.businessName);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx.fieldErrors.businessEmail);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.businessEmail);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.businessEmail);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx.fieldErrors.businessContact);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.businessContact);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.businessContact);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.isActive);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSlideToggleModule, MatSlideToggle] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BusinessManagementUpdateComponent, { className: "BusinessManagementUpdateComponent", filePath: "src\\app\\components\\core\\business-management\\business-management-update\\business-management-update.component.ts", lineNumber: 26 });
})();

// src/app/components/core/business-management/business-management.component.ts
function BusinessManagementComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275element(2, "div", 32);
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4, " Loading Businesses... ");
    \u0275\u0275elementEnd()()();
  }
}
function BusinessManagementComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div")(3, "div", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 39)(10, "div")(11, "div", 40);
    \u0275\u0275text(12, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 41);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 42)(16, "button", 43);
    \u0275\u0275listener("click", function BusinessManagementComponent_div_21_Template_button_click_16_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBusiness(st_r2));
    });
    \u0275\u0275element(17, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 45);
    \u0275\u0275listener("click", function BusinessManagementComponent_div_21_Template_button_click_18_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewAdmins(st_r2.businessId));
    });
    \u0275\u0275element(19, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 47);
    \u0275\u0275listener("click", function BusinessManagementComponent_div_21_Template_button_click_20_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(st_r2.fkUser));
    });
    \u0275\u0275element(21, "i", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const st_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", st_r2.businessName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", st_r2.userName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", st_r2.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", st_r2.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", st_r2.businessEmail, " ");
  }
}
function BusinessManagementComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "p", 50);
    \u0275\u0275text(2, " No record found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 51);
    \u0275\u0275text(4, " Try adjusting your search or add a new business. ");
    \u0275\u0275elementEnd()();
  }
}
function BusinessManagementComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 52)(2, "div", 31);
    \u0275\u0275element(3, "div", 32);
    \u0275\u0275elementStart(4, "p", 33);
    \u0275\u0275text(5, " Loading Businesses... ");
    \u0275\u0275elementEnd()()()();
  }
}
function BusinessManagementComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 53)(1, "td", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 55)(4, "div", 56)(5, "span", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "td", 55)(10, "div", 56)(11, "span", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td", 55)(14, "div", 56)(15, "span", 57);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td", 55)(18, "span", 38);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 59)(21, "div", 60)(22, "div", 61)(23, "button", 43);
    \u0275\u0275listener("click", function BusinessManagementComponent_tr_41_Template_button_click_23_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editBusiness(st_r5));
    });
    \u0275\u0275element(24, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 62);
    \u0275\u0275text(26, " Edit Business ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 61)(28, "button", 45);
    \u0275\u0275listener("click", function BusinessManagementComponent_tr_41_Template_button_click_28_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewAdmins(st_r5.businessId));
    });
    \u0275\u0275element(29, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 62);
    \u0275\u0275text(31, " View Admins ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 61)(33, "button", 47);
    \u0275\u0275listener("click", function BusinessManagementComponent_tr_41_Template_button_click_33_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(st_r5.businessId));
    });
    \u0275\u0275element(34, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 62);
    \u0275\u0275text(36, " Delete Business ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const st_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageIndex * ctx_r2.pageSize + i_r6 + 1, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", st_r5.businessName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", st_r5.userName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", st_r5.businessEmail, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", st_r5.businessContact, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", st_r5.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", st_r5.isActive ? "Active" : "Inactive", " ");
  }
}
function BusinessManagementComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 63)(2, "p", 64);
    \u0275\u0275text(3, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 65);
    \u0275\u0275text(5, " Try adjusting search or create a new Business. ");
    \u0275\u0275elementEnd()()();
  }
}
function BusinessManagementComponent_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function BusinessManagementComponent_button_49_Template_button_click_0_listener() {
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
var BusinessManagementComponent = class _BusinessManagementComponent {
  constructor(_businessService, _toaster, dialog, _userService, router) {
    this._businessService = _businessService;
    this._toaster = _toaster;
    this.dialog = dialog;
    this._userService = _userService;
    this.router = router;
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.businesses = [];
    this.filteredBusinesses = [];
  }
  /* =============================
   * INIT
   * ============================= */
  ngOnInit() {
    return __async(this, null, function* () {
      this.currentUser = yield this._userService.user$;
      this.loadBusinesses(this.currentUser.userId);
    });
  }
  /* =============================
   * LOAD
   * ============================= */
  loadBusinesses(userId) {
    this.isLoading = true;
    this._businessService.getBusinessByUserId(userId).subscribe({
      next: (res) => {
        if (res.success === false) {
          this._toaster.error(res.remarks || "Failed to load Businesses");
          this.isLoading = false;
          return;
        }
        this.businesses = res.data ?? [];
        this.filteredBusinesses = [...this.businesses];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.businesses = [];
        this.filteredBusinesses = [];
        this.isLoading = false;
        this._toaster.error("Failed to load businesses");
      }
    });
  }
  /* =============================
   * PAGINATION
   * ============================= */
  get pagedBusinesses() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredBusinesses.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredBusinesses.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredBusinesses.length);
  }
  /* =============================
   * SEARCH
   * ============================= */
  searchBusinesses() {
    const term = this.searchText.toLowerCase().trim();
    this.filteredBusinesses = !term ? [...this.businesses] : this.businesses.filter((st) => st.businessName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* =============================
   * ADD
   * ============================= */
  // addBusiness() {
  //   const dialogRef = this.dialog.open(BusinessManagementAddUpdateComponent, {
  //     width: '720px',
  //     maxWidth: '95vw',
  //     disableClose: true,
  //     autoFocus: false,
  //     panelClass: 'ynex-dialog',
  //     data: {
  //       mode: 'add'
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === 'saved') {
  //       this.loadBusinesses(this.currentUser.userId);
  //     }
  //   });
  // }
  /* =============================
   * EDIT
   * ============================= */
  // edit(st: BusinessResponseDTO) {
  //   const dialogRef = this.dialog.open(BusinessManagementAddUpdateComponent, {
  //     width: '720px',
  //     maxWidth: '95vw',
  //     disableClose: true,
  //     autoFocus: false,
  //     panelClass: 'ynex-dialog',
  //     data: {
  //       mode: 'edit',
  //       value: st
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === 'saved') {
  //       this.loadBusinesses(this.currentUser.userId);
  //     }
  //   });
  // }
  editBusiness(st) {
    const dialogRef = this.dialog.open(BusinessManagementUpdateComponent, {
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
      if (result === "updated") {
        this.loadBusinesses(this.currentUser.userId);
      }
    });
  }
  add() {
    const dialogRef = this.dialog.open(BusinessManagementAddUpdateComponent, {
      width: "720px",
      maxWidth: "95vw",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: {
        mode: "add"
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "saved") {
        this.loadBusinesses(this.currentUser.userId);
      }
    });
  }
  viewAdmins(businessId) {
    console.log(businessId);
    this.router.navigate(["/core/business-admin-management"], {
      state: {
        businessId
      }
    });
  }
  /* =============================
   * DELETE
   * ============================= */
  delete(id) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "420px",
      disableClose: true,
      data: {
        title: "Delete Business",
        message: "Deleting this Business will remove it permanently. This action cannot be undone.",
        confirmText: "Delete",
        cancelText: "Cancel",
        variant: "danger",
        showActions: true
      }
    });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this._businessService.deleteBusiness(id).subscribe({
        next: (res) => {
          if (res.success) {
            this._toaster.success("Business deleted");
            this.loadBusinesses(this.currentUser.userId);
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
  /* =============================
   * HIERARCHY
   * ============================= */
  // openHierarchy() {
  //   const dialogRef = this.dialog.open(SubUserTypeHierarchyComponent, {
  //     width: '720px',
  //     maxWidth: '90vw',
  //     disableClose: true,
  //     panelClass: 'yx-enterprise-dialog',
  //     data: this.subUserTypes
  //   });
  //   dialogRef.afterClosed().subscribe(payload => {
  //     if (!payload) return;
  //     this._subUserTypeService.updateSubUserTypeHierarchy(payload).subscribe({
  //       next: (res) => {
  //         if (res.success) {
  //           this._toaster.success('Hierarchy updated successfully');
  //           this.loadSubUserTypes(this.currentUser.userId);
  //         } else {
  //           this._toaster.error(res.remarks || 'Failed to update hierarchy');
  //         }
  //       },
  //       error: () => {
  //         this._toaster.error('Failed to update hierarchy');
  //       }
  //     });
  //   });
  // }
  /* =============================
   * PAGE CONTROLS
   * ============================= */
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredBusinesses.length) {
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
  static {
    this.\u0275fac = function BusinessManagementComponent_Factory(t) {
      return new (t || _BusinessManagementComponent)(\u0275\u0275directiveInject(BusinessService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BusinessManagementComponent, selectors: [["app-business-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 14, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "flex", "flex-col", "gap-2", "sm:flex-row", "sm:gap-3", "md:items-center"], [1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-sitemap", "text-lg"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold", "text-[rgb(var(--primary))]"], ["type", "text", "placeholder", "Search Businesses..", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "flex py-14 items-center justify-center", 4, "ngIf"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [1, "text-sm"], [4, "ngIf"], ["class", "border-b hover:bg-[rgb(var(--primary-100))]  hover:text-[rgb(var(--gray-900))]", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "flex", "py-14", "items-center", "justify-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "text-sm", "font-medium", "text-gray-500"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-start", "justify-between", "gap-3"], [1, "font-semibold", "text-indigo-600", "text-sm"], [1, "text-xs", "text-gray-500"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-4", "grid", "grid-cols-1", "gap-3", "text-sm"], [1, "text-xs", "text-stone-600"], [1, "font-medium", "break-all"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-users", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-400", "mt-1"], ["colspan", "6", 1, "px-6", "py-14", "text-center"], [1, "border-b", "hover:bg-[rgb(var(--primary-100))]", "hover:text-[rgb(var(--gray-900))]"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3"], [1, "flex", "flex-col"], [1, "font-semibold", "text-indigo-600"], [1, "text-xs", "text-[rgb(var(--primary))]"], [1, "px-3", "py-3", "text-center"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], ["colspan", "7", 1, "px-6", "py-20", "text-center"], [1, "text-sm", "font-semibold", "text-gray-700"], [1, "text-xs", "text-gray-600", "mt-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function BusinessManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Business Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage Businesses linked with their respective user. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
        \u0275\u0275listener("click", function BusinessManagementComponent_Template_button_click_9_listener() {
          return ctx.add();
        });
        \u0275\u0275element(10, "i", 7);
        \u0275\u0275text(11, " Add Business ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "p", 10);
        \u0275\u0275text(15, " Total Businesses: ");
        \u0275\u0275elementStart(16, "span", 11);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function BusinessManagementComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function BusinessManagementComponent_Template_input_ngModelChange_18_listener() {
          return ctx.searchBusinesses();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 13);
        \u0275\u0275template(20, BusinessManagementComponent_div_20_Template, 5, 0, "div", 14)(21, BusinessManagementComponent_div_21_Template, 22, 5, "div", 15)(22, BusinessManagementComponent_div_22_Template, 5, 0, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 17)(24, "table", 18)(25, "thead", 19)(26, "tr")(27, "th", 20);
        \u0275\u0275text(28, "Sr #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th", 20);
        \u0275\u0275text(30, "Business");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th", 20);
        \u0275\u0275text(32, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th", 20);
        \u0275\u0275text(34, "Contact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th", 20);
        \u0275\u0275text(36, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th", 21);
        \u0275\u0275text(38, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "tbody", 22);
        \u0275\u0275template(40, BusinessManagementComponent_tr_40_Template, 6, 0, "tr", 23)(41, BusinessManagementComponent_tr_41_Template, 37, 7, "tr", 24)(42, BusinessManagementComponent_tr_42_Template, 6, 0, "tr", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 25)(44, "p", 26);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 27)(47, "button", 28);
        \u0275\u0275listener("click", function BusinessManagementComponent_Template_button_click_47_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(48, " Prev ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(49, BusinessManagementComponent_button_49_Template, 2, 2, "button", 29);
        \u0275\u0275elementStart(50, "button", 28);
        \u0275\u0275listener("click", function BusinessManagementComponent_Template_button_click_50_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(51, " Next ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate1(" ", ctx.filteredBusinesses.length, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedBusinesses);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedBusinesses.length === 0);
        \u0275\u0275advance(18);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedBusinesses);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedBusinesses.length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.pageIndex * ctx.pageSize + 1, " \u2013 ", ctx.pageEnd, " of ", ctx.filteredBusinesses.length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.pageIndex === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", (ctx.pageIndex + 1) * ctx.pageSize >= ctx.filteredBusinesses.length);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSlideToggleModule, MaterialModuleModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BusinessManagementComponent, { className: "BusinessManagementComponent", filePath: "src\\app\\components\\core\\business-management\\business-management.component.ts", lineNumber: 23 });
})();
export {
  BusinessManagementComponent
};
//# sourceMappingURL=chunk-PWCGZFIB.js.map
