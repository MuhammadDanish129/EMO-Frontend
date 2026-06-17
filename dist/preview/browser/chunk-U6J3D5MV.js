import {
  AgreementService
} from "./chunk-L3SOLV6A.js";
import {
  UserAddUpdateComponent
} from "./chunk-WIFJZX2X.js";
import "./chunk-TEI4X4OW.js";
import "./chunk-AQYXGAJ6.js";
import "./chunk-VUCKRGWV.js";
import "./chunk-H6LTRMYQ.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-J4QH6UQS.js";
import "./chunk-LVRCF6MZ.js";
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
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-R5AMMNLH.js";
import "./chunk-6EVL5ZQD.js";

// src/app/components/core/agreement-management/agreement-tenant-management/agreement-tenant-management.component.ts
var _c0 = (a0, a1, a2) => ({ "la-mars yx-gender-male": a0, "la-venus yx-gender-female": a1, "la-genderless yx-gender-other": a2 });
var _c1 = () => ["Male", "Female", "Other", "Prefer Not To Say"];
var _c2 = (a0, a1, a2, a3, a4) => ({ "la-mars yx-gender-male": a0, "la-venus yx-gender-female": a1, "la-transgender yx-gender-other": a2, "la-user-secret yx-gender-na": a3, "la-genderless yx-gender-default": a4 });
function AgreementTenantManagementComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275element(2, "span", 23);
    \u0275\u0275text(3, " Loading tenants... ");
    \u0275\u0275elementEnd()();
  }
}
function AgreementTenantManagementComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275element(2, "img", 28);
    \u0275\u0275elementStart(3, "div", 29)(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 34)(13, "div")(14, "div", 35);
    \u0275\u0275text(15, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 36);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "div", 35);
    \u0275\u0275text(20, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "i", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 38)(23, "button", 39);
    \u0275\u0275listener("click", function AgreementTenantManagementComponent_div_25_div_1_Template_button_click_23_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editUser(u_r2));
    });
    \u0275\u0275element(24, "i", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.getUserAvatar(u_r2), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", u_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r2.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", u_r2.subUserTypeName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", u_r2.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r2.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(u_r2.userPhone);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(8, _c0, u_r2.genderName === "Male", u_r2.genderName === "Female", u_r2.genderName !== "Male" && u_r2.genderName !== "Female"));
  }
}
function AgreementTenantManagementComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275template(1, AgreementTenantManagementComponent_div_25_div_1_Template, 25, 12, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pagedUsers);
  }
}
function AgreementTenantManagementComponent_div_26_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 49)(1, "td", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 51)(4, "div", 27);
    \u0275\u0275element(5, "img", 28);
    \u0275\u0275elementStart(6, "div", 52)(7, "span", 53);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 31);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 32);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td", 51);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 51)(16, "div", 54);
    \u0275\u0275element(17, "i", 55);
    \u0275\u0275elementStart(18, "div", 56);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td", 51)(21, "span", 33);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 57)(24, "div", 58)(25, "button", 59);
    \u0275\u0275listener("click", function AgreementTenantManagementComponent_div_26_tr_17_Template_button_click_25_listener() {
      const u_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editUser(u_r5));
    });
    \u0275\u0275element(26, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 60);
    \u0275\u0275text(28, " Edit User ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const u_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageIndex * ctx_r2.pageSize + i_r6 + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r2.getUserAvatar(u_r5), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r5.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", u_r5.subUserTypeName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r5.userPhone);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(11, _c2, u_r5.genderName === "Male", u_r5.genderName === "Female", u_r5.genderName === "Other", u_r5.genderName === "Prefer Not To Say", !\u0275\u0275pureFunction0(10, _c1).includes(u_r5.genderName)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", u_r5.genderName || "Not Specified", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", u_r5.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r5.isActive ? "Active" : "Inactive", " ");
  }
}
function AgreementTenantManagementComponent_div_26_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 61);
    \u0275\u0275text(2, " No record found ");
    \u0275\u0275elementEnd()();
  }
}
function AgreementTenantManagementComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "table", 42)(2, "thead", 43)(3, "tr")(4, "th", 44);
    \u0275\u0275text(5, "Sr #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 44);
    \u0275\u0275text(7, "Tenant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 44);
    \u0275\u0275text(9, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 44);
    \u0275\u0275text(11, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 44);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 45);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 46);
    \u0275\u0275template(17, AgreementTenantManagementComponent_div_26_tr_17_Template, 29, 17, "tr", 47)(18, AgreementTenantManagementComponent_div_26_tr_18_Template, 3, 0, "tr", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r2.pagedUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pagedUsers.length === 0);
  }
}
function AgreementTenantManagementComponent_div_27_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function AgreementTenantManagementComponent_div_27_button_6_Template_button_click_0_listener() {
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
function AgreementTenantManagementComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "p", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "button", 65);
    \u0275\u0275listener("click", function AgreementTenantManagementComponent_div_27_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prevPage());
    });
    \u0275\u0275text(5, " Prev ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AgreementTenantManagementComponent_div_27_button_6_Template, 2, 2, "button", 66);
    \u0275\u0275elementStart(7, "button", 65);
    \u0275\u0275listener("click", function AgreementTenantManagementComponent_div_27_Template_button_click_7_listener() {
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
    \u0275\u0275textInterpolate3(" Showing ", ctx_r2.pageIndex * ctx_r2.pageSize + 1, " \u2013 ", ctx_r2.pageEnd, " of ", ctx_r2.filteredTenants.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.pageIndex === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", (ctx_r2.pageIndex + 1) * ctx_r2.pageSize >= ctx_r2.filteredTenants.length);
  }
}
var AgreementTenantManagementComponent = class _AgreementTenantManagementComponent {
  constructor(route, service, dialog, toaster, router) {
    this.route = route;
    this.service = service;
    this.dialog = dialog;
    this.toaster = toaster;
    this.router = router;
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.tenants = [];
    this.filteredTenants = [];
  }
  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.agreementId = nav?.extras?.state?.["agreementId"] || history.state?.agreementId;
    console.log("Received AgreementId:", this.agreementId);
    if (this.agreementId) {
      this.loadTenant();
    } else {
      console.error("AgreementId missing!");
    }
  }
  /* ================= LOAD ================= */
  loadTenant() {
    this.isLoading = true;
    this.service.getTenants(this.agreementId).subscribe({
      next: (res) => {
        if (res.success) {
          this.tenants = res.data ?? [];
          this.filteredTenants = [...this.tenants];
          this.pageIndex = 0;
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.toaster.error("Failed to load Tenants");
      }
    });
  }
  getUserAvatar(u) {
    if (u?.imageBase64)
      return u.imageBase64;
    switch ((u?.genderName || "").toLowerCase()) {
      case "male":
        return "assets/images/avatars/male.jpg";
      case "female":
        return "assets/images/avatars/female.jpg";
      default:
        return "assets/images/avatars/other.jpg";
    }
  }
  /* ================= SEARCH ================= */
  searchUsers() {
    const term = this.searchText.toLowerCase().trim();
    this.filteredTenants = !term ? [...this.tenants] : this.tenants.filter((u) => u.name.toLowerCase().includes(term) || u.username.toLowerCase().includes(term) || u.subUserTypeName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* ================= PAGINATION ================= */
  get pagedUsers() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredTenants.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredTenants.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredTenants.length);
  }
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredTenants.length) {
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
  /* ================= ACTION ================= */
  editUser(user) {
    this.dialog.open(UserAddUpdateComponent, {
      width: "720px",
      maxWidth: "95vw",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: { mode: "edit", value: user }
    }).afterClosed().subscribe((res) => {
      if (res)
        this.loadTenant();
    });
  }
  goToAgreement() {
    this.router.navigate(["/core/agreement-management"]);
  }
  static {
    this.\u0275fac = function AgreementTenantManagementComponent_Factory(t) {
      return new (t || _AgreementTenantManagementComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AgreementService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AgreementTenantManagementComponent, selectors: [["app-business-admin-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 6, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "px-6", "py-3", "mb-4", "bg-[rgb(var(--light))]", "border-b", "border-[rgb(var(--gray-200))]"], [1, "flex", "flex-wrap", "items-center", "gap-1", "text-sm"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--gray-600))]", "hover:text-[rgb(var(--primary))]", "transition", "font-medium", 3, "click"], [1, "las", "la-file-contract", "text-base"], [1, "las", "la-angle-right", "text-[rgb(var(--gray-400))]", "text-xs", "mx-1"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--primary))]", "font-semibold"], [1, "las", "la-user", "text-base"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold", "text-[rgb(var(--primary))]"], ["type", "text", "placeholder", "Search tenant...", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "block md:hidden p-4 space-y-3", 4, "ngIf"], ["class", "hidden md:block overflow-x-auto", 4, "ngIf"], ["class", "flex items-center justify-between px-4 py-3 border-t", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], [1, "flex", "flex-col", "items-center", "gap-3", "text-sm", "text-muted"], [1, "h-8", "w-8", "rounded-full", "border-2", "border-[rgb(var(--primary))]", "border-t-transparent", "animate-spin"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "rounded-xl border bg-[rgb(var(--light))] shadow-sm p-4", 4, "ngFor", "ngForOf"], [1, "rounded-xl", "border", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-center", "gap-3"], [1, "h-12", "w-12", "rounded-full", "object-cover", "border", 3, "src"], [1, "flex-1"], [1, "font-semibold", "text-sm"], [1, "text-xs", "text-gray-500"], [1, "text-[11px]", "text-[rgb(var(--primary))]"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-4", "grid", "grid-cols-2", "gap-3", "text-sm"], [1, "text-xs", "text-stone-600"], [1, "font-medium"], [1, "las", "text-lg", 3, "ngClass"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "pt-3"], ["type", "button", 1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [1, "text-sm"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3"], [1, "flex", "flex-col", "leading-tight"], [1, "font-semibold"], [1, "relative", "inline-flex", "items-center", "group"], [1, "las", "text-lg", "cursor-pointer", 3, "ngClass"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "hidden", "group-hover:flex", "items-center", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "/*", "LIGHT", "THEME", "*/", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], [1, "px-3", "py-3", "text-center"], [1, "relative", "inline-flex", "group"], ["type", "button", 1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", "hover:bg-[rgb(var(--indigo-200))]", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], ["colspan", "6", 1, "text-center", "py-16"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], ["type", "button", 1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["type", "button", "class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function AgreementTenantManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Agreement Tenant Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage tenants assigned to this agreement. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(8, "div", 5)(9, "nav", 6)(10, "button", 7);
        \u0275\u0275listener("click", function AgreementTenantManagementComponent_Template_button_click_10_listener() {
          return ctx.goToAgreement();
        });
        \u0275\u0275element(11, "i", 8);
        \u0275\u0275text(12, " Agreements ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "i", 9);
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275element(15, "i", 11);
        \u0275\u0275text(16, " Tenants ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "p", 14);
        \u0275\u0275text(20, " Total Tenants: ");
        \u0275\u0275elementStart(21, "span", 15);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function AgreementTenantManagementComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AgreementTenantManagementComponent_Template_input_ngModelChange_23_listener() {
          return ctx.searchUsers();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(24, AgreementTenantManagementComponent_div_24_Template, 4, 0, "div", 17)(25, AgreementTenantManagementComponent_div_25_Template, 2, 1, "div", 18)(26, AgreementTenantManagementComponent_div_26_Template, 19, 2, "div", 19)(27, AgreementTenantManagementComponent_div_27_Template, 9, 6, "div", 20);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(22);
        \u0275\u0275textInterpolate1(" ", ctx.filteredTenants.length, " ");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AgreementTenantManagementComponent, { className: "AgreementTenantManagementComponent", filePath: "src\\app\\components\\core\\agreement-management\\agreement-tenant-management\\agreement-tenant-management.component.ts", lineNumber: 22 });
})();
export {
  AgreementTenantManagementComponent
};
//# sourceMappingURL=chunk-U6J3D5MV.js.map
