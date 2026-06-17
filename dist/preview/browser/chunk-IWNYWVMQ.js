import {
  ContactPersonManagementComponent
} from "./chunk-LN7WLD7H.js";
import {
  AgreementService
} from "./chunk-L3SOLV6A.js";
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
  MatSlideToggleModule
} from "./chunk-LVRCF6MZ.js";
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
import {
  __async
} from "./chunk-6EVL5ZQD.js";

// src/app/components/core/agreement-management/agreement-management.component.ts
function AgreementManagementComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275element(2, "div", 34);
    \u0275\u0275elementStart(3, "p", 35);
    \u0275\u0275text(4, " Loading Agreements... ");
    \u0275\u0275elementEnd()()();
  }
}
function AgreementManagementComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "div", 38)(3, "div", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 41);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 42)(10, "span", 43);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 44);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 45)(15, "button", 46);
    \u0275\u0275listener("click", function AgreementManagementComponent_div_22_Template_button_click_15_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewTenants(st_r2.agreementId));
    });
    \u0275\u0275element(16, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 46);
    \u0275\u0275listener("click", function AgreementManagementComponent_div_22_Template_button_click_17_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewOffices(st_r2.agreementId));
    });
    \u0275\u0275element(18, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 49);
    \u0275\u0275listener("click", function AgreementManagementComponent_div_22_Template_button_click_19_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(st_r2.agreementId));
    });
    \u0275\u0275element(20, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 51);
    \u0275\u0275listener("click", function AgreementManagementComponent_div_22_Template_button_click_21_listener() {
      const st_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openContacts(st_r2.agreementId));
    });
    \u0275\u0275element(22, "i", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const st_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", st_r2.agreementName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", st_r2.tenantName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", st_r2.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", st_r2.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Start: ", ctx_r2.formatDate(st_r2.agreementStartDate), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" End: ", ctx_r2.formatDate(st_r2.agreementEndDate), " ");
  }
}
function AgreementManagementComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "p", 54);
    \u0275\u0275text(2, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 55);
    \u0275\u0275text(4, " Try adjusting your search or add a new agreement. ");
    \u0275\u0275elementEnd()();
  }
}
function AgreementManagementComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 56)(2, "div", 33);
    \u0275\u0275element(3, "div", 34);
    \u0275\u0275elementStart(4, "p", 57);
    \u0275\u0275text(5, " Loading Agreements... ");
    \u0275\u0275elementEnd()()()();
  }
}
function AgreementManagementComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 58)(1, "td", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 60)(4, "div", 61)(5, "span", 62);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td", 59);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 60)(10, "div", 63)(11, "span", 64);
    \u0275\u0275element(12, "i", 65);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 66);
    \u0275\u0275element(15, "i", 67);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td", 60)(18, "span", 68);
    \u0275\u0275element(19, "span", 69);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 60)(22, "div", 70)(23, "div", 71)(24, "button", 72);
    \u0275\u0275listener("click", function AgreementManagementComponent_tr_42_Template_button_click_24_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewTenants(st_r5.agreementId));
    });
    \u0275\u0275element(25, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 73);
    \u0275\u0275text(27, " View Tenant ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 51);
    \u0275\u0275listener("click", function AgreementManagementComponent_tr_42_Template_button_click_28_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openContacts(st_r5.agreementId));
    });
    \u0275\u0275element(29, "i", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 71)(31, "button", 74);
    \u0275\u0275listener("click", function AgreementManagementComponent_tr_42_Template_button_click_31_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewOffices(st_r5.agreementId));
    });
    \u0275\u0275element(32, "i", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 73);
    \u0275\u0275text(34, " View Offices ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 71)(36, "button", 75);
    \u0275\u0275listener("click", function AgreementManagementComponent_tr_42_Template_button_click_36_listener() {
      const st_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(st_r5.agreementId));
    });
    \u0275\u0275element(37, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 73);
    \u0275\u0275text(39, " Delete ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const st_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageIndex * ctx_r2.pageSize + i_r6 + 1, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", st_r5.agreementName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", st_r5.tenantName, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Start: ", ctx_r2.formatDate(st_r5.agreementStartDate), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" End: ", ctx_r2.formatDate(st_r5.agreementEndDate), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", st_r5.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", st_r5.isActive ? "bg-success" : "bg-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", st_r5.isActive ? "Active" : "Inactive", " ");
  }
}
function AgreementManagementComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 76)(2, "p", 54);
    \u0275\u0275text(3, " No Record Found ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 55);
    \u0275\u0275text(5, " Try adjusting search or create a new agreement. ");
    \u0275\u0275elementEnd()()();
  }
}
function AgreementManagementComponent_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function AgreementManagementComponent_button_50_Template_button_click_0_listener() {
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
function AgreementManagementComponent_app_contact_person_management_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-contact-person-management", 78);
    \u0275\u0275listener("onClose", function AgreementManagementComponent_app_contact_person_management_53_Template_app_contact_person_management_onClose_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeContacts());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("agreementId", ctx_r2.selectedAgreementId);
  }
}
var AgreementManagementComponent = class _AgreementManagementComponent {
  constructor(agreementService, toaster, _userService, dialog, router) {
    this.agreementService = agreementService;
    this.toaster = toaster;
    this._userService = _userService;
    this.dialog = dialog;
    this.router = router;
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.Agreements = [];
    this.filteredAgreements = [];
    this.selectedAgreementId = null;
    this.showContactModal = false;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.currentUser = yield this._userService.user$;
      this.loadAgreements(this.currentUser.fkBusiness);
    });
  }
  /* ================= LOAD ================= */
  loadAgreements(fkBusiness) {
    this.isLoading = true;
    this.agreementService.getByBusinessId(fkBusiness).subscribe({
      next: (res) => {
        if (res.success === false) {
          this.toaster.error(res.remarks || "Failed to load agreements");
          this.isLoading = false;
          return;
        }
        this.Agreements = res.data ?? [];
        this.filteredAgreements = [...this.Agreements];
        this.pageIndex = 0;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.toaster.error("Failed to load agreements");
      }
    });
  }
  /* ================= DATE ================= */
  formatDate(date) {
    if (!date)
      return "-";
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  /* ================= SEARCH ================= */
  searchAgreements() {
    const term = this.searchText.toLowerCase().trim();
    this.filteredAgreements = !term ? [...this.Agreements] : this.Agreements.filter((x) => x.agreementName.toLowerCase().includes(term) || x.tenantName.toLowerCase().includes(term) || x.officeName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* ================= PAGINATION ================= */
  get pagedAgreements() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredAgreements.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredAgreements.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredAgreements.length);
  }
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredAgreements.length) {
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
  /* ================= ADD ================= */
  addAgreement() {
    console.log("Add Agreement Clicked");
  }
  /* ================= EDIT ================= */
  edit(st) {
    console.log("Edit Agreement", st);
  }
  viewTenants(agreementId) {
    console.log(agreementId);
    this.router.navigate(["/core/agreement-tenant-management"], {
      state: {
        agreementId
      }
    });
  }
  openContacts(id) {
    this.selectedAgreementId = id;
    this.showContactModal = true;
  }
  closeContacts() {
    this.showContactModal = false;
  }
  viewOffices(agreementId) {
    console.log(agreementId);
    this.router.navigate(["/core/agreement-office-management"], {
      state: {
        agreementId
      }
    });
  }
  /* ================= DELETE ================= */
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
      this.agreementService.deleteAgreement(id).subscribe({
        next: (res) => {
          if (res.success) {
            this.toaster.success("Agreement deleted");
            this.loadAgreements(this.currentUser.fkBusiness);
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
  static {
    this.\u0275fac = function AgreementManagementComponent_Factory(t) {
      return new (t || _AgreementManagementComponent)(\u0275\u0275directiveInject(AgreementService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgreementManagementComponent, selectors: [["app-agreement-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 15, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "px-6", "py-3", "mb-4", "bg-[rgb(var(--light))]", "border-b", "border-[rgb(var(--gray-200))]"], [1, "flex", "flex-wrap", "items-center", "gap-1", "text-sm"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--primary))]", "font-semibold"], [1, "las", "la-file-contract", "text-base"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold"], ["placeholder", "Search Agreements...", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "py-14 text-center", 4, "ngIf"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", 4, "ngFor", "ngForOf"], ["class", "py-16 text-center", 4, "ngIf"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-xs", "tracking-wider", "text-[rgb(var(--gray-500))]"], [1, "px-5", "py-3", "text-left", "font-semibold"], [1, "px-5", "py-3", "text-center", "font-semibold"], [1, "text-sm", "divide-y", "divide-[rgb(var(--gray-200))]"], [4, "ngIf"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "agreementId", "onClose", 4, "ngIf"], [1, "py-14", "text-center"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "h-10", "w-10", "animate-spin", "rounded-full", "border-4", "border-gray-200", "border-t-[rgb(var(--primary))]"], [1, "text-sm", "font-medium", "text-gray-500"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-center", "gap-3"], [1, "flex-1"], [1, "font-semibold", "text-sm", "text-indigo-600"], [1, "text-xs", "text-gray-500"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-3", "flex", "gap-2", "text-xs"], [1, "flex-1", "px-2", "py-1", "rounded", "bg-blue-50", "text-blue-600"], [1, "flex-1", "px-2", "py-1", "rounded", "bg-purple-50", "text-purple-600", "text-right"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-user", "text-lg"], [1, "las", "la-briefcase", "text-lg"], [1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", 3, "click"], [1, "las", "la-trash", "text-lg"], [1, "rounded-lg", "p-2", "bg-green-100", "text-green-600", "hover:bg-green-200", "hover:scale-105", 3, "click"], [1, "las", "la-address-book", "text-lg"], [1, "py-16", "text-center"], [1, "text-sm", "font-semibold"], [1, "text-xs", "text-gray-600", "mt-1"], ["colspan", "7", 1, "px-6", "py-16", "text-center"], [1, "text-sm", "text-gray-500", "font-medium"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]"], [1, "px-5", "py-4", "font-medium", "text-[rgb(var(--gray-700))]"], [1, "px-5", "py-4"], [1, "flex", "flex-col"], [1, "font-semibold", "text-indigo-600", "group-hover:text-indigo-700"], [1, "flex", "flex-col", "gap-1.5", "text-xs"], [1, "inline-flex", "items-center", "gap-1", "px-2.5", "py-1", "rounded-md", "bg-blue-50", "text-blue-700", "font-medium"], [1, "las", "la-calendar", "text-sm"], [1, "inline-flex", "items-center", "gap-1", "px-2.5", "py-1", "rounded-md", "bg-purple-50", "text-purple-700", "font-medium"], [1, "las", "la-calendar-check", "text-sm"], [1, "inline-flex", "items-center", "gap-1.5", "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "h-1.5", "w-1.5", "rounded-full", 3, "ngClass"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], [1, "rounded-lg", "p-2", "transition", "bg-[rgb(var(--cyan-100))]", "text-[rgb(var(--cyan))]", "hover:bg-[rgb(var(--cyan-200))]", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], [1, "rounded-lg", "p-2", "transition", "bg-[rgb(var(--blue-100))]", "text-[rgb(var(--blue-600))]", "hover:bg-[rgb(var(--blue-200))]", "hover:scale-105", 3, "click"], [1, "rounded-lg", "p-2", "transition", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", "hover:bg-[rgb(var(--red-200))]", "hover:scale-105", 3, "click"], ["colspan", "7", 1, "px-6", "py-20", "text-center"], [1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"], [3, "onClose", "agreementId"]], template: function AgreementManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Agreement Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage Agreements linked with Tenant and Office. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(8, "div", 5)(9, "nav", 6)(10, "span", 7);
        \u0275\u0275element(11, "i", 8);
        \u0275\u0275text(12, " Agreements ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "p", 11);
        \u0275\u0275text(16, " Total Agreements: ");
        \u0275\u0275elementStart(17, "span", 12);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "input", 13);
        \u0275\u0275twoWayListener("ngModelChange", function AgreementManagementComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AgreementManagementComponent_Template_input_ngModelChange_19_listener() {
          return ctx.searchAgreements();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 14);
        \u0275\u0275template(21, AgreementManagementComponent_div_21_Template, 5, 0, "div", 15)(22, AgreementManagementComponent_div_22_Template, 23, 6, "div", 16)(23, AgreementManagementComponent_div_23_Template, 5, 0, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 18)(25, "table", 19)(26, "thead", 20)(27, "tr")(28, "th", 21);
        \u0275\u0275text(29, "Sr #");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th", 21);
        \u0275\u0275text(31, "Agreement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th", 21);
        \u0275\u0275text(33, "Tenant");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "th", 21);
        \u0275\u0275text(35, "Duration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th", 21);
        \u0275\u0275text(37, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th", 22);
        \u0275\u0275text(39, "Actions");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "tbody", 23);
        \u0275\u0275template(41, AgreementManagementComponent_tr_41_Template, 6, 0, "tr", 24)(42, AgreementManagementComponent_tr_42_Template, 40, 8, "tr", 25)(43, AgreementManagementComponent_tr_43_Template, 6, 0, "tr", 24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div", 26)(45, "p", 27);
        \u0275\u0275text(46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 28)(48, "button", 29);
        \u0275\u0275listener("click", function AgreementManagementComponent_Template_button_click_48_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275text(49, " Prev ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(50, AgreementManagementComponent_button_50_Template, 2, 2, "button", 30);
        \u0275\u0275elementStart(51, "button", 29);
        \u0275\u0275listener("click", function AgreementManagementComponent_Template_button_click_51_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275text(52, " Next ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(53, AgreementManagementComponent_app_contact_person_management_53_Template, 1, 1, "app-contact-person-management", 31);
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275textInterpolate1(" ", ctx.filteredAgreements.length, " ");
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedAgreements);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedAgreements.length === 0);
        \u0275\u0275advance(18);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.pagedAgreements);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.pagedAgreements.length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Showing ", ctx.pageIndex * ctx.pageSize + 1, " \u2013 ", ctx.pageEnd, " of ", ctx.filteredAgreements.length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.pageIndex === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", (ctx.pageIndex + 1) * ctx.pageSize >= ctx.filteredAgreements.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showContactModal);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSlideToggleModule, MaterialModuleModule, ContactPersonManagementComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgreementManagementComponent, { className: "AgreementManagementComponent", filePath: "src\\app\\components\\core\\agreement-management\\agreement-management.component.ts", lineNumber: 21 });
})();
export {
  AgreementManagementComponent
};
//# sourceMappingURL=chunk-IWNYWVMQ.js.map
