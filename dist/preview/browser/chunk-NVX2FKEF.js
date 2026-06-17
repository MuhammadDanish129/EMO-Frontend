import {
  UserAddUpdateComponent,
  UserManagementService
} from "./chunk-WIFJZX2X.js";
import "./chunk-TEI4X4OW.js";
import "./chunk-AQYXGAJ6.js";
import "./chunk-VUCKRGWV.js";
import {
  UserService
} from "./chunk-H6LTRMYQ.js";
import {
  ConfirmDialogComponent
} from "./chunk-2YM3HG7T.js";
import "./chunk-5JUZCUNR.js";
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
import {
  __async
} from "./chunk-6EVL5ZQD.js";

// src/app/components/management/user/user.component.ts
var _c0 = (a0, a1, a2) => ({ "la-mars yx-gender-male": a0, "la-venus yx-gender-female": a1, "la-genderless yx-gender-other": a2 });
var _c1 = () => ["Male", "Female", "Other", "Prefer Not To Say"];
var _c2 = (a0, a1, a2, a3, a4) => ({ "la-mars yx-gender-male": a0, "la-venus yx-gender-female": a1, "la-transgender yx-gender-other": a2, "la-user-secret yx-gender-na": a3, "la-genderless yx-gender-default": a4 });
function UserComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275element(2, "span", 18);
    \u0275\u0275text(3, " Loading users... ");
    \u0275\u0275elementEnd()();
  }
}
function UserComponent_div_19_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, " You ");
    \u0275\u0275elementEnd();
  }
}
function UserComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275element(2, "img", 23);
    \u0275\u0275elementStart(3, "div", 24)(4, "div", 25);
    \u0275\u0275text(5);
    \u0275\u0275template(6, UserComponent_div_19_div_1_span_6_Template, 2, 0, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 30)(14, "div")(15, "div", 31);
    \u0275\u0275text(16, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 32);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "div", 31);
    \u0275\u0275text(21, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "i", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 34)(24, "button", 35);
    \u0275\u0275listener("click", function UserComponent_div_19_div_1_Template_button_click_24_listener() {
      const u_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editUser(u_r2));
    });
    \u0275\u0275element(25, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 37);
    \u0275\u0275element(27, "i", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", u_r2.userId === (ctx_r2.currentUser == null ? null : ctx_r2.currentUser.userId) ? "border-2 border-[rgb(var(--primary))] bg-[rgb(var(--primary-50))]" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.getUserAvatar(u_r2), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", u_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r2.userId === (ctx_r2.currentUser == null ? null : ctx_r2.currentUser.userId));
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
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(10, _c0, u_r2.genderName === "Male", u_r2.genderName === "Female", u_r2.genderName !== "Male" && u_r2.genderName !== "Female"));
  }
}
function UserComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, UserComponent_div_19_div_1_Template, 28, 14, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pagedUsers);
  }
}
function UserComponent_div_20_tr_17_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1, " You ");
    \u0275\u0275elementEnd();
  }
}
function UserComponent_div_20_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 47)(1, "td", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 49)(4, "div", 22);
    \u0275\u0275element(5, "img", 23);
    \u0275\u0275elementStart(6, "div", 50)(7, "span", 51);
    \u0275\u0275text(8);
    \u0275\u0275template(9, UserComponent_div_20_tr_17_span_9_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 27);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 28);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "td", 49);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 49)(17, "div", 53);
    \u0275\u0275element(18, "i", 54);
    \u0275\u0275elementStart(19, "div", 55);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td", 49)(22, "span", 29);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 56)(25, "div", 57)(26, "div", 58)(27, "button", 59);
    \u0275\u0275listener("click", function UserComponent_div_20_tr_17_Template_button_click_27_listener() {
      const u_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.editUser(u_r5));
    });
    \u0275\u0275element(28, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 60);
    \u0275\u0275text(30, " Edit User ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 58)(32, "button", 61);
    \u0275\u0275listener("click", function UserComponent_div_20_tr_17_Template_button_click_32_listener() {
      const u_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteUser(u_r5.userId));
    });
    \u0275\u0275element(33, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 60);
    \u0275\u0275text(35, " Delete User ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const u_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", u_r5.userId === (ctx_r2.currentUser == null ? null : ctx_r2.currentUser.userId) ? "bg-[rgb(var(--primary-100))] border-l-4 border-[rgb(var(--primary))] text-[rgb(var(--gray-900))] " : "hover:text-[rgb(var(--gray-900))] hover:bg-[rgb(var(--primary-100))]");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.pageIndex * ctx_r2.pageSize + i_r6 + 1, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r2.getUserAvatar(u_r5), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", u_r5.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r5.userId === (ctx_r2.currentUser == null ? null : ctx_r2.currentUser.userId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r5.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", u_r5.subUserTypeName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r5.userPhone);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(13, _c2, u_r5.genderName === "Male", u_r5.genderName === "Female", u_r5.genderName === "Other", u_r5.genderName === "Prefer Not To Say", !\u0275\u0275pureFunction0(12, _c1).includes(u_r5.genderName)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", u_r5.genderName || "Not Specified", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", u_r5.isActive ? "bg-success/10 text-success" : "bg-danger/10 text-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r5.isActive ? "Active" : "Inactive", " ");
  }
}
function UserComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "table", 41)(2, "thead", 42)(3, "tr")(4, "th", 43);
    \u0275\u0275text(5, "Sr #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 43);
    \u0275\u0275text(7, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 43);
    \u0275\u0275text(9, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 43);
    \u0275\u0275text(11, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 43);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 44);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 45);
    \u0275\u0275template(17, UserComponent_div_20_tr_17_Template, 36, 19, "tr", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r2.pagedUsers);
  }
}
function UserComponent_div_21_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function UserComponent_div_21_button_6_Template_button_click_0_listener() {
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
function UserComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62)(1, "p", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "button", 65);
    \u0275\u0275listener("click", function UserComponent_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prevPage());
    });
    \u0275\u0275text(5, " Prev ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UserComponent_div_21_button_6_Template, 2, 2, "button", 66);
    \u0275\u0275elementStart(7, "button", 65);
    \u0275\u0275listener("click", function UserComponent_div_21_Template_button_click_7_listener() {
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
    \u0275\u0275textInterpolate3(" Showing ", ctx_r2.pageIndex * ctx_r2.pageSize + 1, " \u2013 ", ctx_r2.pageEnd, " of ", ctx_r2.filteredUsers.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.pageIndex === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", (ctx_r2.pageIndex + 1) * ctx_r2.pageSize >= ctx_r2.filteredUsers.length);
  }
}
var UserComponent = class _UserComponent {
  constructor(dialog, userManagementService, userService, toaster) {
    this.dialog = dialog;
    this.userManagementService = userManagementService;
    this.userService = userService;
    this.toaster = toaster;
    this.searchText = "";
    this.pageIndex = 0;
    this.pageSize = 5;
    this.isLoading = false;
    this.currentUser = null;
    this.users = [];
    this.filteredUsers = [];
  }
  /* ================= INIT ================= */
  ngOnInit() {
    return __async(this, null, function* () {
      this.currentUser = yield this.userService.user$;
      this.loadUsers(this.currentUser?.userId ?? "");
    });
  }
  /* ================= LOAD ================= */
  loadUsers(userId) {
    this.isLoading = true;
    this.userManagementService.getUsers(userId).subscribe({
      next: (res) => {
        if (res.success) {
          this.users = res.data ?? [];
          this.filteredUsers = [...this.users];
          this.pageIndex = 0;
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.toaster.error("Something went wrong");
      }
    });
  }
  /* ================= CURRENT USER SEPARATION ================= */
  get myUser() {
    if (!this.currentUser)
      return null;
    return this.filteredUsers.find((u) => u.userId === this.currentUser?.userId) ?? null;
  }
  get pagedUsers() {
    const start = this.pageIndex * this.pageSize;
    return this.filteredUsers.slice(start, start + this.pageSize);
  }
  get otherUsers() {
    if (!this.currentUser)
      return this.pagedUsers;
    return this.pagedUsers.filter((u) => u.userId !== this.currentUser?.userId);
  }
  /* ================= AVATAR ================= */
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
    this.filteredUsers = !term ? [...this.users] : this.users.filter((u) => u.name.toLowerCase().includes(term) || u.username.toLowerCase().includes(term) || u.subUserTypeName.toLowerCase().includes(term));
    this.pageIndex = 0;
  }
  /* ================= PAGINATION ================= */
  get pages() {
    return Array.from({ length: Math.ceil(this.filteredUsers.length / this.pageSize) }, (_, i) => i);
  }
  get pageEnd() {
    return Math.min((this.pageIndex + 1) * this.pageSize, this.filteredUsers.length);
  }
  nextPage() {
    if ((this.pageIndex + 1) * this.pageSize < this.filteredUsers.length) {
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
  /* ================= ACTIONS ================= */
  addUser() {
    this.dialog.open(UserAddUpdateComponent, {
      width: "720px",
      maxWidth: "95vw",
      disableClose: true,
      autoFocus: false,
      panelClass: "ynex-dialog",
      data: { mode: "add" }
    }).afterClosed().subscribe((res) => {
      if (res)
        this.loadUsers(this.currentUser?.userId ?? "");
    });
  }
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
        this.loadUsers(this.currentUser?.userId ?? "");
    });
  }
  deleteUser(id) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "420px",
      disableClose: true,
      data: {
        title: "Delete User",
        message: "Deleting this user will remove it permanently. This action cannot be undone.",
        confirmText: "Delete",
        cancelText: "Cancel",
        variant: "danger",
        showActions: true
      }
    });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.userManagementService.deleteUser(id).subscribe({
        next: (res) => {
          if (res.success) {
            this.toaster.success("User deleted");
            this.loadUsers(this.currentUser?.userId ?? "");
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
    this.\u0275fac = function UserComponent_Factory(t) {
      return new (t || _UserComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(UserManagementService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserComponent, selectors: [["app-user"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 6, consts: [[1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], ["type", "button", 1, "flex", "items-center", "justify-center", "gap-2", "rounded-lg", "bg-white/95", "px-4", "py-2", "text-sm", "font-semibold", "text-[rgb(var(--primary))]", 3, "click"], [1, "las", "la-user-plus", "text-lg"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "mb-6"], [1, "flex", "flex-col", "gap-2", "p-4", "border-b", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-sm", "text-[rgb(var(--primary))]"], [1, "font-semibold", "text-[rgb(var(--primary))]"], ["type", "text", "placeholder", "Search users...", 1, "yx-input", "w-full", "sm:w-64", "rounded-lg", "border", "px-3", "py-2", "text-sm", "border-[rgb(var(--input-border))]", 3, "ngModelChange", "ngModel"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "block md:hidden p-4 space-y-3", 4, "ngIf"], ["class", "hidden md:block overflow-x-auto", 4, "ngIf"], ["class", "flex items-center justify-between px-4 py-3 border-t", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-20"], [1, "flex", "flex-col", "items-center", "gap-3", "text-sm", "text-muted"], [1, "h-8", "w-8", "rounded-full", "border-2", "border-[rgb(var(--primary))]", "border-t-transparent", "animate-spin"], [1, "block", "md:hidden", "p-4", "space-y-3"], ["class", "rounded-xl border border-[rgb(var(--primary-200))] bg-[rgb(var(--light))] shadow-sm p-4", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "rounded-xl", "border", "border-[rgb(var(--primary-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-4", 3, "ngClass"], [1, "flex", "items-center", "gap-3"], [1, "h-12", "w-12", "rounded-full", "object-cover", "border", 3, "src"], [1, "flex-1"], [1, "font-semibold", "text-sm", "flex", "items-center", "gap-2"], ["class", "text-[10px] px-2 py-0.5 rounded-full\n                         bg-[rgb(var(--primary))] text-white", 4, "ngIf"], [1, "text-xs", "text-gray-500"], [1, "text-[11px]", "text-[rgb(var(--primary))]"], [1, "rounded-full", "px-3", "py-1", "text-xs", "font-semibold", 3, "ngClass"], [1, "mt-4", "grid", "grid-cols-2", "gap-3", "text-sm"], [1, "text-xs", "text-stone-600"], [1, "font-medium"], [1, "las", "text-lg", 3, "ngClass"], [1, "mt-4", "flex", "justify-end", "gap-2", "border-t", "border-[rgb(var(--primary-200))]", "pt-3"], ["type", "button", 1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", 3, "click"], [1, "las", "la-edit", "text-lg"], ["type", "button", 1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]"], [1, "las", "la-trash", "text-lg"], [1, "text-[10px]", "px-2", "py-0.5", "rounded-full", "bg-[rgb(var(--primary))]", "text-white"], [1, "hidden", "md:block", "overflow-x-auto"], [1, "min-w-full", "bg-[rgb(var(--light))]"], [1, "bg-[rgb(var(--gray-200))]", "text-sm", "text-[rgb(var(--gray-500))]"], [1, "px-4", "py-3", "text-left"], [1, "px-4", "py-3", "text-center"], [1, "text-sm"], ["class", "border-b", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "border-b", 3, "ngClass"], [1, "px-4", "py-3", "font-medium"], [1, "px-4", "py-3"], [1, "flex", "flex-col", "leading-tight"], [1, "font-semibold", "flex", "items-center", "gap-2"], ["class", "text-[10px] px-2 py-0.5 rounded-full\n                               bg-[rgb(var(--primary))] text-white ", 4, "ngIf"], [1, "relative", "inline-flex", "items-center", "group"], [1, "las", "text-lg", "cursor-pointer", 3, "ngClass"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "hidden", "group-hover:flex", "items-center", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "/*", "LIGHT", "THEME", "*/", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], [1, "px-3", "py-3", "text-center"], [1, "flex", "justify-center", "gap-2"], [1, "relative", "group"], ["type", "button", 1, "rounded-lg", "p-2", "bg-[rgb(var(--indigo-100))]", "text-[rgb(var(--indigo-600))]", "hover:bg-[rgb(var(--indigo-200))]", "hover:scale-105", 3, "click"], [1, "absolute", "z-50", "-top-8", "left-1/2", "-translate-x-1/2", "flex", "opacity-0", "group-hover:opacity-100", "px-2", "py-1", "text-[11px]", "font-medium", "rounded-md", "shadow-sm", "whitespace-nowrap", "transition", "duration-200", "pointer-events-none", "bg-[rgb(var(--primary-100))]", "text-[rgb(var(--gray-900))]", "border", "border-[rgb(var(--primary-200))]"], ["type", "button", 1, "rounded-lg", "p-2", "bg-[rgb(var(--red-100))]", "text-[rgb(var(--red-600))]", "hover:bg-[rgb(var(--red-200))]", "hover:scale-105", 3, "click"], [1, "flex", "items-center", "justify-between", "px-4", "py-3", "border-t"], [1, "text-sm", "text-gray-500"], [1, "flex", "gap-1"], ["type", "button", 1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "disabled"], ["type", "button", "class", "px-3 py-2 rounded-lg border text-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "px-3", "py-2", "rounded-lg", "border", "text-sm", 3, "click", "ngClass"]], template: function UserComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        \u0275\u0275text(5, " User Management ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Manage system users, their access and current status. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 5);
        \u0275\u0275listener("click", function UserComponent_Template_button_click_8_listener() {
          return ctx.addUser();
        });
        \u0275\u0275element(9, "i", 6);
        \u0275\u0275text(10, " Add User ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "p", 9);
        \u0275\u0275text(14, " Total Users: ");
        \u0275\u0275elementStart(15, "span", 10);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function UserComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function UserComponent_Template_input_ngModelChange_17_listener() {
          return ctx.searchUsers();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, UserComponent_div_18_Template, 4, 0, "div", 12)(19, UserComponent_div_19_Template, 2, 1, "div", 13)(20, UserComponent_div_20_Template, 18, 1, "div", 14)(21, UserComponent_div_21_Template, 9, 6, "div", 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate1(" ", ctx.filteredUsers.length, " ");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserComponent, { className: "UserComponent", filePath: "src\\app\\components\\management\\user\\user.component.ts", lineNumber: 21 });
})();
export {
  UserComponent
};
//# sourceMappingURL=chunk-NVX2FKEF.js.map
