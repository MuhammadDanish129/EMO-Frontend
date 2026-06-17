import {
  AgreementService
} from "./chunk-L3SOLV6A.js";
import {
  Router
} from "./chunk-J4QH6UQS.js";
import {
  ConfirmDialogComponent
} from "./chunk-2YM3HG7T.js";
import "./chunk-5JUZCUNR.js";
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
import "./chunk-6EVL5ZQD.js";

// src/app/components/core/agreement-management/agreement-office-management/agreement-office-management.component.ts
function AgreementOfficeManagementComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275element(2, "span", 23);
    \u0275\u0275text(3, " Loading offices... ");
    \u0275\u0275elementEnd()();
  }
}
function AgreementOfficeManagementComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div")(3, "div", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 32)(10, "button", 33);
    \u0275\u0275listener("click", function AgreementOfficeManagementComponent_div_25_div_1_Template_button_click_10_listener() {
      const o_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeRoomFromAgreement(o_r2.officeId));
    });
    \u0275\u0275element(11, "i", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", o_r2.officeName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", o_r2.sectionName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", o_r2.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r2.isActive ? "Active" : "Inactive", " ");
  }
}
function AgreementOfficeManagementComponent_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "p", 36);
    \u0275\u0275text(2, "No Record Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 37);
    \u0275\u0275text(4, " Try adjusting search. ");
    \u0275\u0275elementEnd()();
  }
}
function AgreementOfficeManagementComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, AgreementOfficeManagementComponent_div_25_div_1_Template, 12, 4, "div", 25)(2, AgreementOfficeManagementComponent_div_25_div_2_Template, 5, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pagedOffices);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pagedOffices.length === 0);
  }
}
function AgreementOfficeManagementComponent_div_26_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 45)(1, "td", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 49)(8, "span", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 50)(11, "div", 51)(12, "button", 52);
    \u0275\u0275listener("click", function AgreementOfficeManagementComponent_div_26_tr_15_Template_button_click_12_listener($event) {
      const o_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.removeRoomFromAgreement(o_r5.officeId));
    });
    \u0275\u0275element(13, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 53);
    \u0275\u0275text(15, " Remove ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageIndex * ctx_r2.pageSize + i_r6 + 1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", o_r5.officeName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", o_r5.sectionName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", o_r5.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r5.isActive ? "Active" : "Inactive", " ");
  }
}
function AgreementOfficeManagementComponent_div_26_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275text(2, " No record found ");
    \u0275\u0275elementEnd()();
  }
}
function AgreementOfficeManagementComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "table", 39)(2, "thead", 40)(3, "tr")(4, "th", 41);
    \u0275\u0275text(5, "Sr #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 41);
    \u0275\u0275text(7, "Office");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 41);
    \u0275\u0275text(9, "Section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 41);
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 41);
    \u0275\u0275text(13, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody", 42);
    \u0275\u0275template(15, AgreementOfficeManagementComponent_div_26_tr_15_Template, 16, 5, "tr", 43)(16, AgreementOfficeManagementComponent_div_26_tr_16_Template, 3, 0, "tr", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r2.pagedOffices);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pagedOffices.length === 0);
  }
}
function AgreementOfficeManagementComponent_div_27_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function AgreementOfficeManagementComponent_div_27_button_6_Template_button_click_0_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToPage(p_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", p_r9 === ctx_r2.pageIndex ? "bg-[rgb(var(--primary))] text-white" : "hover:bg-gray-100");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r9 + 1, " ");
  }
}
function AgreementOfficeManagementComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "p", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 57)(4, "button", 58);
    \u0275\u0275listener("click", function AgreementOfficeManagementComponent_div_27_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prevPage());
    });
    \u0275\u0275text(5, " Prev ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AgreementOfficeManagementComponent_div_27_button_6_Template, 2, 2, "button", 59);
    \u0275\u0275elementStart(7, "button", 58);
    \u0275\u0275listener("click", function AgreementOfficeManagementComponent_div_27_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(8, " Next ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Showing ", ctx_r2.pageIndex * ctx_r2.pageSize + 1, " \u2013 ", ctx_r2.pageEnd, " of ", ctx_r2.filteredOffices.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.pageIndex === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", (ctx_r2.pageIndex + 1) * ctx_r2.pageSize >= ctx_r2.filteredOffices.length);
  }
}
var AgreementOfficeManagementComponent = class _AgreementOfficeManagementComponent {
  constructor(service, dialog, toaster, router) {
    this.service = service;
    this.dialog = dialog;
    this.toaster = toaster;
    this.router = router;
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.offices = [];
    this.filteredOffices = [];
  }
  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.agreementId = nav?.extras?.state?.["agreementId"] || history.state?.agreementId;
    console.log("Received AgreementId:", this.agreementId);
    if (this.agreementId) {
      this.loadOffices();
    } else {
      console.error("AgreementId missing!");
    }
  }
  /* ================= LOAD ================= */
  loadOffices() {
    this.isLoading = true;
    this.service.getOfficesByAgreementId(this.agreementId).subscribe({
      next: (res) => {
        if (res.success) {
          console.log(res.data);
          this.offices = res.data ?? [];
          this.filteredOffices = [...this.offices];
          this.pageIndex = 0;
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.toaster.error("Failed to load Offices");
      }
    });
  }
  /* ================= SEARCH ================= */
  searchOffices() {
    const term = this.searchText.toLowerCase().trim();
    this.filteredOffices = !term ? [...this.offices] : this.offices.filter((o) => o.officeName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* ================= PAGINATION ================= */
  get pagedOffices() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredOffices.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredOffices.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredOffices.length);
  }
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredOffices.length) {
      this.pageIndex++;
    }
  }
  prevPage() {
    if (this.pageIndex > 0)
      this.pageIndex--;
  }
  goToPage(i) {
    this.pageIndex = i;
  }
  /* ================= NAV ================= */
  goToAgreement() {
    this.router.navigate(["/core/agreement-management"]);
  }
  removeRoomFromAgreement(officeId) {
    const confirmationDialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "420px",
      disableClose: true,
      data: {
        title: "Remove Room from Agreement",
        message: "Are you sure you want to remove this room from the agreement? This will unassign the room and affect linked tenants.",
        confirmText: "Remove",
        cancelText: "Cancel",
        variant: "danger",
        showActions: true
      }
    });
    confirmationDialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      const payload = {
        agreementId: this.agreementId,
        officeId
      };
      this.service.removeOfficeFromAgreement(payload).subscribe({
        next: (res) => {
          if (res.success) {
            this.toaster.success("Room removed from agreement successfully");
            this.loadOffices();
          } else {
            this.toaster.error(res.remarks || "Failed to remove room");
          }
        },
        error: () => {
          this.toaster.error("Failed to remove room");
        }
      });
    });
  }
  static {
    this.\u0275fac = function AgreementOfficeManagementComponent_Factory(t) {
      return new (t || _AgreementOfficeManagementComponent)(\u0275\u0275directiveInject(AgreementService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgreementOfficeManagementComponent, selectors: [["app-agreement-office-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 6, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "px-6", "py-3", "mb-4", "bg-[rgb(var(--light))]", "border-b", "border-[rgb(var(--gray-200))]"], [1, "flex", "flex-wrap", "items-center", "gap-1", "text-sm"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--gray-600))]", "hover:text-[rgb(var(--primary))]", "transition", "font-medium", 3, "click"], [1, "las", "la-file-contract", "text-base"], [1, "las", "la-angle-right", "text-[rgb(var(--gray-400))]", "text-xs", "mx-1"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--primary))]", "font-semibold"], [1, "las", "la-briefcase", "text-base"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold", "text-[rgb(var(--primary))]"], ["type", "text", "placeholder", "Search office...", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "block md:hidden p-4 space-y-3", 4, "ngIf"], ["class", "hidden md:block overflow-x-auto", 4, "ngIf"], ["class", "flex items-center justify-between px-4 py-3 border-t", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], [1, "flex", "flex-col", "items-center", "gap-3", "text-sm", "text-muted"], [1, "h-8", "w-8", "rounded-full", "border-2", "border-[rgb(var(--primary))]", "border-t-transparent", "animate-spin"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "rounded-xl border bg-[rgb(var(--light))] shadow-sm p-4", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "rounded-xl", "border", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-start", "justify-between"], [1, "font-semibold", "text-sm", "text-indigo-600", "flex", "items-center", "gap-2"], [1, "text-[11px]", "text-[rgb(var(--primary))]"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "pt-3"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-600", "mt-1"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "text-sm"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3", "font-semibold", "text-indigo-600"], [1, "px-4", "py-3", "font-medium", "text-indigo-600"], [1, "px-4", "py-3"], [1, "px-5", "py-4"], [1, "relative", "inline-flex", "group"], ["type", "button", 1, "rounded-lg", "p-2", "transition", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", "hover:bg-[rgb(var(--red-200))]", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], ["colspan", "4", 1, "text-center", "py-16"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function AgreementOfficeManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Agreement Office Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage offices assigned to this agreement. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(8, "div", 5)(9, "nav", 6)(10, "button", 7);
        \u0275\u0275listener("click", function AgreementOfficeManagementComponent_Template_button_click_10_listener() {
          return ctx.goToAgreement();
        });
        \u0275\u0275element(11, "i", 8);
        \u0275\u0275text(12, " Agreements ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "i", 9);
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275element(15, "i", 11);
        \u0275\u0275text(16, " Offices ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "p", 14);
        \u0275\u0275text(20, " Total Offices: ");
        \u0275\u0275elementStart(21, "span", 15);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function AgreementOfficeManagementComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AgreementOfficeManagementComponent_Template_input_ngModelChange_23_listener() {
          return ctx.searchOffices();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(24, AgreementOfficeManagementComponent_div_24_Template, 4, 0, "div", 17)(25, AgreementOfficeManagementComponent_div_25_Template, 3, 2, "div", 18)(26, AgreementOfficeManagementComponent_div_26_Template, 17, 2, "div", 19)(27, AgreementOfficeManagementComponent_div_27_Template, 9, 6, "div", 20);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275textInterpolate1(" ", ctx.filteredOffices.length, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgreementOfficeManagementComponent, { className: "AgreementOfficeManagementComponent", filePath: "src\\app\\components\\core\\agreement-management\\agreement-office-management\\agreement-office-management.component.ts", lineNumber: 20 });
})();
export {
  AgreementOfficeManagementComponent
};
//# sourceMappingURL=chunk-WGOHWJH4.js.map
