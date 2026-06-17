import {
  AgreementService
} from "./chunk-L3SOLV6A.js";
import {
  ConfirmDialogComponent
} from "./chunk-2YM3HG7T.js";
import {
  MatDialog
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
import {
  CommonModule,
  EventEmitter,
  NgForOf,
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
import {
  __spreadValues
} from "./chunk-6EVL5ZQD.js";

// src/app/components/core/agreement-management/contact-person-management/contact-person-management.component.ts
function ContactPersonManagementComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275element(2, "span", 12);
    \u0275\u0275text(3, " Loading contact persons... ");
    \u0275\u0275elementEnd()();
  }
}
function ContactPersonManagementComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275element(2, "i", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 25);
    \u0275\u0275text(6, " Add a contact person to get started ");
    \u0275\u0275elementEnd()();
  }
}
function ContactPersonManagementComponent_div_12_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32)(5, "p", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 34)(8, "div", 35);
    \u0275\u0275element(9, "i", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 37);
    \u0275\u0275element(12, "i", 38);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 39)(15, "button", 40);
    \u0275\u0275listener("click", function ContactPersonManagementComponent_div_12_div_3_div_1_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r2);
      const cp_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.enableEdit(cp_r3));
    });
    \u0275\u0275element(16, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 42);
    \u0275\u0275listener("click", function ContactPersonManagementComponent_div_12_div_3_div_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r2);
      const cp_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.delete(cp_r3.contactPersonId));
    });
    \u0275\u0275element(18, "i", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cp_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cp_r3.contactPersonName == null ? null : cp_r3.contactPersonName.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cp_r3.contactPersonName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", cp_r3.contactPersonPhone, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cp_r3.contactPersonEmail, " ");
  }
}
function ContactPersonManagementComponent_div_12_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "label", 46);
    \u0275\u0275text(3, " Full Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ContactPersonManagementComponent_div_12_div_3_div_2_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const cp_r3 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(cp_r3.contactPersonName, $event) || (cp_r3.contactPersonName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 45)(6, "label", 46);
    \u0275\u0275text(7, " Phone Number ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ContactPersonManagementComponent_div_12_div_3_div_2_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const cp_r3 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(cp_r3.contactPersonPhone, $event) || (cp_r3.contactPersonPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 45)(10, "label", 46);
    \u0275\u0275text(11, " Email Address ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ContactPersonManagementComponent_div_12_div_3_div_2_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const cp_r3 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(cp_r3.contactPersonEmail, $event) || (cp_r3.contactPersonEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 50)(14, "button", 51);
    \u0275\u0275listener("click", function ContactPersonManagementComponent_div_12_div_3_div_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const cp_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.cancel(cp_r3));
    });
    \u0275\u0275text(15, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 52);
    \u0275\u0275listener("click", function ContactPersonManagementComponent_div_12_div_3_div_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r5);
      const cp_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.save(cp_r3));
    });
    \u0275\u0275text(17, " Save ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cp_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", cp_r3.contactPersonName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", cp_r3.contactPersonPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", cp_r3.contactPersonEmail);
  }
}
function ContactPersonManagementComponent_div_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, ContactPersonManagementComponent_div_12_div_3_div_1_Template, 19, 4, "div", 27)(2, ContactPersonManagementComponent_div_12_div_3_div_2_Template, 18, 3, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cp_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cp_r3.isEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cp_r3.isEdit);
  }
}
function ContactPersonManagementComponent_div_12_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57)(2, "div", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 59)(5, "span", 60);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 61)(8, "span", 62);
    \u0275\u0275element(9, "i", 63);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 62);
    \u0275\u0275element(12, "i", 64);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 65)(15, "div", 66)(16, "button", 67);
    \u0275\u0275listener("click", function ContactPersonManagementComponent_div_12_div_5_div_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r6);
      const cp_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.enableEdit(cp_r7));
    });
    \u0275\u0275element(17, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 68);
    \u0275\u0275text(19, " Edit ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 66)(21, "button", 69);
    \u0275\u0275listener("click", function ContactPersonManagementComponent_div_12_div_5_div_1_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r6);
      const cp_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.delete(cp_r7.contactPersonId));
    });
    \u0275\u0275element(22, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 68);
    \u0275\u0275text(24, " Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cp_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cp_r7.contactPersonName == null ? null : cp_r7.contactPersonName.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cp_r7.contactPersonName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", cp_r7.contactPersonPhone, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", cp_r7.contactPersonEmail, " ");
  }
}
function ContactPersonManagementComponent_div_12_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "div")(2, "label", 71);
    \u0275\u0275text(3, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ContactPersonManagementComponent_div_12_div_5_div_2_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const cp_r7 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(cp_r7.contactPersonName, $event) || (cp_r7.contactPersonName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "label", 71);
    \u0275\u0275text(7, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ContactPersonManagementComponent_div_12_div_5_div_2_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r8);
      const cp_r7 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(cp_r7.contactPersonPhone, $event) || (cp_r7.contactPersonPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "label", 71);
    \u0275\u0275text(11, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ContactPersonManagementComponent_div_12_div_5_div_2_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const cp_r7 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(cp_r7.contactPersonEmail, $event) || (cp_r7.contactPersonEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 73)(14, "button", 74);
    \u0275\u0275listener("click", function ContactPersonManagementComponent_div_12_div_5_div_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r8);
      const cp_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.cancel(cp_r7));
    });
    \u0275\u0275text(15, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 75);
    \u0275\u0275listener("click", function ContactPersonManagementComponent_div_12_div_5_div_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r8);
      const cp_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.save(cp_r7));
    });
    \u0275\u0275text(17, " Save ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cp_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", cp_r7.contactPersonName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", cp_r7.contactPersonPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", cp_r7.contactPersonEmail);
  }
}
function ContactPersonManagementComponent_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, ContactPersonManagementComponent_div_12_div_5_div_1_Template, 25, 4, "div", 54)(2, ContactPersonManagementComponent_div_12_div_5_div_2_Template, 18, 3, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cp_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cp_r7.isEdit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cp_r7.isEdit);
  }
}
function ContactPersonManagementComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, ContactPersonManagementComponent_div_12_div_1_Template, 7, 0, "div", 14);
    \u0275\u0275elementStart(2, "div", 15);
    \u0275\u0275template(3, ContactPersonManagementComponent_div_12_div_3_Template, 3, 2, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17);
    \u0275\u0275template(5, ContactPersonManagementComponent_div_12_div_5_Template, 3, 2, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19)(7, "button", 20);
    \u0275\u0275listener("click", function ContactPersonManagementComponent_div_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.close());
    });
    \u0275\u0275text(8, " Cancel ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.contactPersons.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.contactPersons);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.contactPersons);
  }
}
var ContactPersonManagementComponent = class _ContactPersonManagementComponent {
  constructor(agreementService, toaster, dialog) {
    this.agreementService = agreementService;
    this.toaster = toaster;
    this.dialog = dialog;
    this.onClose = new EventEmitter();
    this.contactPersons = [];
    this.isLoading = false;
  }
  ngOnInit() {
    this.loadContacts();
  }
  // ================= LOAD =================
  loadContacts() {
    this.isLoading = true;
    this.agreementService.getContactPersons(this.agreementId).subscribe({
      next: (res) => {
        this.contactPersons = res.data || [];
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert("Failed to load contact persons");
      }
    });
  }
  // ================= EDIT =================
  enableEdit(cp) {
    cp.isEdit = true;
    cp._backup = __spreadValues({}, cp);
  }
  cancel(cp) {
    Object.assign(cp, cp._backup);
    cp.isEdit = false;
  }
  // ================= SAVE =================
  save(cp) {
    if (!cp.contactPersonName || !cp.contactPersonPhone) {
      alert("Name and Phone are required");
      return;
    }
    const payload = {
      contactPersonId: cp.contactPersonId,
      contactPersonName: cp.contactPersonName,
      contactPersonPhone: cp.contactPersonPhone,
      contactPersonEmail: cp.contactPersonEmail,
      fkAgreement: this.agreementId,
      isActive: true
    };
    this.agreementService.updatecontactPerson(payload).subscribe({
      next: () => {
        cp.isEdit = false;
      },
      error: () => {
        alert("Update failed");
      }
    });
  }
  // ================= DELETE =================
  delete(id) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "420px",
      disableClose: true,
      data: {
        title: "Delete Agreement",
        message: "Deleting this Agreement will remove it permanently. This action cannot be undone.",
        confirmText: "Delete",
        cancelText: "Cancel",
        variant: "danger",
        showActions: true
      }
    });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.agreementService.deleteContactPerson(id).subscribe({
        next: (res) => {
          if (res.success) {
            this.toaster.success("Contact deleted");
            this.loadContacts();
          } else {
            this.toaster.error(res.remarks || "Delete failed");
          }
        },
        error: () => {
          this.toaster.error("Delete failed");
        }
      });
    });
  }
  // ================= CLOSE =================
  close() {
    this.onClose.emit();
  }
  static {
    this.\u0275fac = function ContactPersonManagementComponent_Factory(t) {
      return new (t || _ContactPersonManagementComponent)(\u0275\u0275directiveInject(AgreementService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactPersonManagementComponent, selectors: [["app-contact-person-management"]], inputs: { agreementId: "agreementId" }, outputs: { onClose: "onClose" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [[1, "fixed", "inset-0", "bg-black/40", "flex", "items-center", "justify-center", "z-50"], [1, "bg-[rgb(var(--light))]", "rounded-xl", "shadow-xl", "w-[95%]", "sm:w-[650px]", "max-h-[90vh]", "flex", "flex-col", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]"], [1, "text-sm", "font-semibold", "text-white"], [1, "text-xs", "text-white/80", "mt-0.5"], ["type", "button", 1, "rounded-lg", "p-2", "text-white/80", "hover:bg-white/10", "hover:text-white", "transition", 3, "click"], [1, "las", "la-times", "text-lg"], [1, "flex-1", "overflow-y-auto"], ["class", "flex items-center justify-center py-16", 4, "ngIf"], ["class", "p-4 bg-[rgb(var(--light))]", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-16"], [1, "flex", "flex-col", "items-center", "gap-3", "text-sm", "text-muted"], [1, "h-8", "w-8", "rounded-full", "border-2", "border-[rgb(var(--primary))]", "border-t-transparent", "animate-spin"], [1, "p-4", "bg-[rgb(var(--light))]"], ["class", "flex flex-col items-center justify-center py-16 text-center", 4, "ngIf"], [1, "block", "md:hidden", "space-y-4"], ["class", "rounded-xl border border-[rgb(var(--gray-300))] shadow-sm p-4 space-y-4 bg-[rgb(var(--light))]", 4, "ngFor", "ngForOf"], [1, "hidden", "md:block", "space-y-2"], ["class", "rounded-lg border border-[rgb(var(--gray-300))] bg-[rgb(var(--light))] px-4 py-3 transition hover:shadow-md", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "bg-[rgb(var(--light))]", "mt-2"], ["type", "button", 1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "border", "border-[rgb(var(--gray-300))]", "hover:bg-[rgb(var(--red-500))]", "hover:text-white", "transition", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "text-center"], [1, "h-14", "w-14", "rounded-full", "bg-[rgb(var(--primary-100))]", "flex", "items-center", "justify-center"], [1, "las", "la-user-slash", "text-2xl", "text-[rgb(var(--primary))]"], [1, "mt-3", "text-sm", "font-medium", "text-[rgb(var(--Dark))]"], [1, "text-xs", "text-gray-500", "mt-1"], [1, "rounded-xl", "border", "border-[rgb(var(--gray-300))]", "shadow-sm", "p-4", "space-y-4", "bg-[rgb(var(--light))]"], ["class", "space-y-3", 4, "ngIf"], ["class", "space-y-4 border-t border-[rgb(var(--gray-300))] pt-3", 4, "ngIf"], [1, "space-y-3"], [1, "flex", "items-start", "gap-3"], [1, "h-12", "w-12", "rounded-full", "bg-[rgb(var(--primary-100))]", "flex", "items-center", "justify-center", "text-lg", "font-semibold", "text-[rgb(var(--primary))]"], [1, "flex-1"], [1, "font-semibold", "text-base", "text-[rgb(var(--Dark))]"], [1, "mt-2", "space-y-1"], [1, "flex", "items-center", "gap-2", "text-sm", "text-gray-500"], [1, "las", "la-phone", "text-base"], [1, "flex", "items-center", "gap-2", "text-sm", "text-gray-500", "break-all"], [1, "las", "la-envelope", "text-base"], [1, "flex", "justify-end", "gap-2", "pt-3", "border-t"], [1, "rounded-lg", "p-2.5", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", 3, "click"], [1, "las", "la-pen", "text-lg"], [1, "rounded-lg", "p-2.5", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg"], [1, "space-y-4", "border-t", "border-[rgb(var(--gray-300))]", "pt-3"], [1, "space-y-1"], [1, "text-xs", "font-medium", "text-gray-500"], ["placeholder", "Enter full name", 1, "w-full", "px-3", "py-2", "border", "rounded-lg", "text-sm", "border-[rgb(var(--input-border))]", "focus:ring-2", "focus:ring-[rgb(var(--primary))]/20", "focus:outline-none", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter phone number", 1, "w-full", "px-3", "py-2", "border", "rounded-lg", "text-sm", "border-[rgb(var(--input-border))]", "focus:ring-2", "focus:ring-[rgb(var(--primary))]/20", "focus:outline-none", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter email address", 1, "w-full", "px-3", "py-2", "border", "rounded-lg", "text-sm", "border-[rgb(var(--input-border))]", "focus:ring-2", "focus:ring-[rgb(var(--primary))]/20", "focus:outline-none", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2", "pt-2"], [1, "flex-1", "border", "rounded-lg", "py-2", "text-sm", "hover:bg-gray-100", "transition", 3, "click"], [1, "flex-1", "bg-[rgb(var(--primary))]", "text-white", "rounded-lg", "py-2", "text-sm", "hover:bg-[rgb(var(--primary-700))]", "transition", 3, "click"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-300))]", "bg-[rgb(var(--light))]", "px-4", "py-3", "transition", "hover:shadow-md"], ["class", "flex items-center justify-between", 4, "ngIf"], ["class", "mt-3 pt-3 border-t border-[rgb(var(--gray-300))] grid grid-cols-3 gap-3 items-end", 4, "ngIf"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-4", "flex-1"], [1, "h-10", "w-10", "rounded-full", "bg-[rgb(var(--primary-100))]", "flex", "items-center", "justify-center", "text-sm", "font-semibold", "text-[rgb(var(--primary))]"], [1, "flex", "flex-col"], [1, "font-medium", "text-sm", "text-[rgb(var(--Dark))]"], [1, "flex", "items-center", "gap-6", "text-xs", "text-gray-500", "mt-1"], [1, "flex", "items-center", "gap-1"], [1, "las", "la-phone", "text-sm"], [1, "las", "la-envelope", "text-sm"], [1, "flex", "items-center", "gap-2"], [1, "relative", "group"], [1, "rounded-lg", "p-2.5", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", "hover:bg-[rgb(var(--blue-200))]", "hover:scale-105", "transition", 3, "click"], [1, "absolute", "-top-8", "left-1/2", "-translate-x-1/2", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-xs", "rounded-md", "bg-[rgb(var(--primary-100))]"], [1, "rounded-lg", "p-2.5", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", "hover:bg-[rgb(var(--red-200))]", "hover:scale-105", "transition", 3, "click"], [1, "mt-3", "pt-3", "border-t", "border-[rgb(var(--gray-300))]", "grid", "grid-cols-3", "gap-3", "items-end"], [1, "text-xs", "text-gray-500"], [1, "w-full", "mt-1", "px-3", "py-2", "border", "rounded-lg", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "col-span-3", "flex", "justify-end", "gap-2", "mt-2"], [1, "rounded-lg", "px-4", "py-2", "text-xs", "border", "border-[rgb(var(--gray-300))]", "hover:bg-[rgb(var(--red-500))]", "hover:text-white", "transition", 3, "click"], [1, "px-4", "py-2", "text-xs", "rounded-lg", "bg-[rgb(var(--primary))]", "text-white", 3, "click"]], template: function ContactPersonManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "p", 3);
        \u0275\u0275text(5, " Contact Persons ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage and update agreement contact persons ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 5);
        \u0275\u0275listener("click", function ContactPersonManagementComponent_Template_button_click_8_listener() {
          return ctx.close();
        });
        \u0275\u0275element(9, "i", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275template(11, ContactPersonManagementComponent_div_11_Template, 4, 0, "div", 8)(12, ContactPersonManagementComponent_div_12_Template, 9, 3, "div", 9);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactPersonManagementComponent, { className: "ContactPersonManagementComponent", filePath: "src\\app\\components\\core\\agreement-management\\contact-person-management\\contact-person-management.component.ts", lineNumber: 17 });
})();

export {
  ContactPersonManagementComponent
};
//# sourceMappingURL=chunk-LN7WLD7H.js.map
