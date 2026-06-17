import {
  UserAddUpdateComponent,
  UserManagementService
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

// src/app/components/core/business-management/business-admin-management/business-admin-management.component.ts
var _c0 = (a0, a1, a2) => ({ "la-mars yx-gender-male": a0, "la-venus yx-gender-female": a1, "la-genderless yx-gender-other": a2 });
var _c1 = () => ["Male", "Female", "Other", "Prefer Not To Say"];
var _c2 = (a0, a1, a2, a3, a4) => ({ "la-mars yx-gender-male": a0, "la-venus yx-gender-female": a1, "la-transgender yx-gender-other": a2, "la-user-secret yx-gender-na": a3, "la-genderless yx-gender-default": a4 });
function BusinessAdminManagementComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275element(2, "span", 24);
    \u0275\u0275text(3, " Loading admins... ");
    \u0275\u0275elementEnd()();
  }
}
function BusinessAdminManagementComponent_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275element(2, "img", 29);
    \u0275\u0275elementStart(3, "div", 30)(4, "div", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 34);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 35)(13, "div")(14, "div", 36);
    \u0275\u0275text(15, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 37);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "div", 38);
    \u0275\u0275text(20, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "i", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 40)(23, "button", 41);
    \u0275\u0275listener("click", function BusinessAdminManagementComponent_div_27_div_1_Template_button_click_23_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editUser(u_r2));
    });
    \u0275\u0275element(24, "i", 42);
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
function BusinessAdminManagementComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, BusinessAdminManagementComponent_div_27_div_1_Template, 25, 12, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pagedUsers);
  }
}
function BusinessAdminManagementComponent_div_28_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 51)(1, "td", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 53)(4, "div", 28);
    \u0275\u0275element(5, "img", 29);
    \u0275\u0275elementStart(6, "div", 54)(7, "span", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "td", 53);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 53)(16, "div", 56);
    \u0275\u0275element(17, "i", 57);
    \u0275\u0275elementStart(18, "div", 58);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td", 53)(21, "span", 34);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 59)(24, "div", 60)(25, "button", 41);
    \u0275\u0275listener("click", function BusinessAdminManagementComponent_div_28_tr_17_Template_button_click_25_listener() {
      const u_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editUser(u_r5));
    });
    \u0275\u0275element(26, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 61);
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
function BusinessAdminManagementComponent_div_28_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62);
    \u0275\u0275text(2, " No record found ");
    \u0275\u0275elementEnd()();
  }
}
function BusinessAdminManagementComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "table", 44)(2, "thead", 45)(3, "tr")(4, "th", 46);
    \u0275\u0275text(5, "Sr #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 46);
    \u0275\u0275text(7, "Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 46);
    \u0275\u0275text(9, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 46);
    \u0275\u0275text(11, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 46);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 47);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 48);
    \u0275\u0275template(17, BusinessAdminManagementComponent_div_28_tr_17_Template, 29, 17, "tr", 49)(18, BusinessAdminManagementComponent_div_28_tr_18_Template, 3, 0, "tr", 50);
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
function BusinessAdminManagementComponent_div_29_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function BusinessAdminManagementComponent_div_29_button_6_Template_button_click_0_listener() {
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
function BusinessAdminManagementComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "p", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 65)(4, "button", 66);
    \u0275\u0275listener("click", function BusinessAdminManagementComponent_div_29_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prevPage());
    });
    \u0275\u0275text(5, " Prev ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, BusinessAdminManagementComponent_div_29_button_6_Template, 2, 2, "button", 67);
    \u0275\u0275elementStart(7, "button", 66);
    \u0275\u0275listener("click", function BusinessAdminManagementComponent_div_29_Template_button_click_7_listener() {
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
    \u0275\u0275textInterpolate3(" Showing ", ctx_r2.pageIndex * ctx_r2.pageSize + 1, " \u2013 ", ctx_r2.pageEnd, " of ", ctx_r2.filteredAdmins.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.pageIndex === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", (ctx_r2.pageIndex + 1) * ctx_r2.pageSize >= ctx_r2.filteredAdmins.length);
  }
}
var BusinessAdminManagementComponent = class _BusinessAdminManagementComponent {
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
    this.admins = [];
    this.filteredAdmins = [];
  }
  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.businessId = nav?.extras?.state?.["businessId"] || history.state?.businessId;
    console.log("Received BusinessId:", this.businessId);
    if (this.businessId) {
      this.loadAdmins();
    } else {
      console.error("BusinessId missing!");
    }
  }
  /* ================= LOAD ================= */
  loadAdmins() {
    this.isLoading = true;
    this.service.getBusinessAdmins(this.businessId).subscribe({
      next: (res) => {
        if (res.success) {
          this.admins = res.data ?? [];
          this.filteredAdmins = [...this.admins];
          this.pageIndex = 0;
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.toaster.error("Failed to load admins");
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
    this.filteredAdmins = !term ? [...this.admins] : this.admins.filter((u) => u.name.toLowerCase().includes(term) || u.username.toLowerCase().includes(term) || u.subUserTypeName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* ================= PAGINATION ================= */
  get pagedUsers() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredAdmins.slice(start, start + this.pageSize);
  }
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredAdmins.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredAdmins.length);
  }
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredAdmins.length) {
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
        this.loadAdmins();
    });
  }
  goToBusinesses() {
    this.router.navigate(["/core/business-management"], {
      state: {}
    });
  }
  static {
    this.\u0275fac = function BusinessAdminManagementComponent_Factory(t) {
      return new (t || _BusinessAdminManagementComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UserManagementService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BusinessAdminManagementComponent, selectors: [["app-business-admin-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 6, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "px-6", "py-3", "mb-4", "bg-[rgb(var(--light))]", "border-b", "border-[rgb(var(--gray-200))]"], [1, "flex", "items-center", "gap-1", "text-xs", "sm:text-sm"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--gray-600))]", "hover:text-[rgb(var(--primary))]", "transition", "font-medium", 3, "click"], [1, "las", "la-briefcase", "text-sm", "sm:text-base"], [1, "hidden", "sm:inline"], [1, "las", "la-angle-right", "text-[rgb(var(--gray-400))]", "text-xs", "mx-1"], [1, "flex", "items-center", "gap-1", "text-[rgb(var(--primary))]", "font-semibold"], [1, "las", "la-users", "text-sm", "sm:text-base"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold", "text-[rgb(var(--primary))]"], ["type", "text", "placeholder", "Search admins...", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "block md:hidden p-4 space-y-3", 4, "ngIf"], ["class", "hidden md:block overflow-x-auto", 4, "ngIf"], ["class", "flex items-center justify-between px-4 py-3 border-t", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], [1, "flex", "flex-col", "items-center", "gap-3", "text-sm", "text-muted"], [1, "h-8", "w-8", "rounded-full", "border-2", "border-[rgb(var(--primary))]", "border-t-transparent", "animate-spin"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", 4, "ngFor", "ngForOf"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4"], [1, "flex", "items-center", "gap-3"], [1, "h-12", "w-12", "rounded-full", "object-cover", "border", 3, "src"], [1, "flex-1"], [1, "font-semibold", "text-sm"], [1, "text-xs", "text-gray-500"], [1, "text-[11px]", "text-[rgb(var(--primary))]"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-4", "grid", "grid-cols-2", "gap-3", "text-sm"], [1, "text-xs", "text-stone-600", "text-gray-500"], [1, "font-small"], [1, "text-xs", "text-stone-600"], [1, "las", "text-lg", 3, "ngClass"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], ["type", "button", 1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [1, "text-sm"], ["class", "border-b hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "border-b", "hover:text-[rgb(var(--gray-900))]", "hover:bg-[rgb(var(--primary-100))]"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3"], [1, "flex", "flex-col", "leading-tight"], [1, "font-semibold"], [1, "relative", "inline-flex", "items-center", "group"], [1, "las", "text-lg", "cursor-pointer", 3, "ngClass"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "hidden", "group-hover:flex", "items-center", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "/*", "LIGHT", "THEME", "*/", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], [1, "px-3", "py-3", "text-center"], [1, "relative", "inline-flex", "group"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], ["colspan", "6", 1, "text-center", "py-16"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], ["type", "button", 1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["type", "button", "class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function BusinessAdminManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " Business Admin Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage admins assigned to this business. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(8, "div", 5)(9, "nav", 6)(10, "button", 7);
        \u0275\u0275listener("click", function BusinessAdminManagementComponent_Template_button_click_10_listener() {
          return ctx.goToBusinesses();
        });
        \u0275\u0275element(11, "i", 8);
        \u0275\u0275elementStart(12, "span", 9);
        \u0275\u0275text(13, "Business");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(14, "i", 10);
        \u0275\u0275elementStart(15, "span", 11);
        \u0275\u0275element(16, "i", 12);
        \u0275\u0275elementStart(17, "span", 9);
        \u0275\u0275text(18, "Business Admins");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(19, "div", 13)(20, "div", 14)(21, "p", 15);
        \u0275\u0275text(22, " Total Admins: ");
        \u0275\u0275elementStart(23, "span", 16);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function BusinessAdminManagementComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function BusinessAdminManagementComponent_Template_input_ngModelChange_25_listener() {
          return ctx.searchUsers();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(26, BusinessAdminManagementComponent_div_26_Template, 4, 0, "div", 18)(27, BusinessAdminManagementComponent_div_27_Template, 2, 1, "div", 19)(28, BusinessAdminManagementComponent_div_28_Template, 19, 2, "div", 20)(29, BusinessAdminManagementComponent_div_29_Template, 9, 6, "div", 21);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(24);
        \u0275\u0275textInterpolate1(" ", ctx.filteredAdmins.length, " ");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BusinessAdminManagementComponent, { className: "BusinessAdminManagementComponent", filePath: "src\\app\\components\\core\\business-management\\business-admin-management\\business-admin-management.component.ts", lineNumber: 20 });
})();
export {
  BusinessAdminManagementComponent
};
//# sourceMappingURL=chunk-62XAVUU5.js.map
