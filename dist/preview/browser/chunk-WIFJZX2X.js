import {
  ManagementService
} from "./chunk-TEI4X4OW.js";
import {
  SubUserTypeService
} from "./chunk-AQYXGAJ6.js";
import {
  YxSelectComponent
} from "./chunk-VUCKRGWV.js";
import {
  UserService
} from "./chunk-H6LTRMYQ.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-LVRCF6MZ.js";
import {
  MAT_DIALOG_DATA,
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
import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  CommonModule,
  HttpClient,
  NgClass,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-R5AMMNLH.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-6EVL5ZQD.js";

// src/app/components/management/user/user.service.ts
var UserManagementService = class _UserManagementService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  getUsers(userId) {
    return this.http.get(`${this.baseUrl}/User/GetUsers`, { params: { userId } });
  }
  addUser(request) {
    return this.http.post(`${this.baseUrl}/User`, request);
  }
  updateUser(request) {
    return this.http.put(`${this.baseUrl}/User`, request);
  }
  deleteUser(id) {
    return this.http.delete(`${this.baseUrl}/User`, { params: { id } });
  }
  getBusinessAdmins(businessId) {
    return this.http.get(`${this.baseUrl}/User/GetBusinessAdminsByBusinessId`, { params: { businessId } });
  }
  static {
    this.\u0275fac = function UserManagementService_Factory(t) {
      return new (t || _UserManagementService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserManagementService, factory: _UserManagementService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/management/user/user-add-update/user-add-update.component.ts
var _c0 = (a0, a1) => ({ "border-[rgb(var(--danger))]": a0, "border-[rgb(var(--gray-200))]": a1 });
function UserAddUpdateComponent_img_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r2.model.avatarPreview, \u0275\u0275sanitizeUrl);
  }
}
function UserAddUpdateComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementStart(2, "p", 46);
    \u0275\u0275text(3, "Drag or Click");
    \u0275\u0275elementEnd()();
  }
}
function UserAddUpdateComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function UserAddUpdateComponent_button_12_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.removeImage();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275elementEnd();
  }
}
function UserAddUpdateComponent_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1, " Full name is required ");
    \u0275\u0275elementEnd();
  }
}
function UserAddUpdateComponent_p_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1, " Username is required ");
    \u0275\u0275elementEnd();
  }
}
function UserAddUpdateComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, " If you do not want to change the password, leave this field empty. ");
    \u0275\u0275elementEnd()();
  }
}
function UserAddUpdateComponent_p_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.fieldErrors.password, " ");
  }
}
function UserAddUpdateComponent_div_63_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.fieldErrors.confirmPassword, " ");
  }
}
function UserAddUpdateComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "label", 18);
    \u0275\u0275text(2, "Confirm Password ");
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4, " *");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 26)(6, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function UserAddUpdateComponent_div_63_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.model.confirmPassword, $event) || (ctx_r2.model.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function UserAddUpdateComponent_div_63_Template_input_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.fieldErrors.confirmPassword = null);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 28);
    \u0275\u0275listener("click", function UserAddUpdateComponent_div_63_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleConfirmPassword());
    });
    \u0275\u0275element(8, "i", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, UserAddUpdateComponent_div_63_p_9_Template, 2, 1, "p", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r2.fieldErrors.confirmPassword);
    \u0275\u0275property("type", ctx_r2.showConfirmPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.model.confirmPassword);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.showConfirmPassword ? "la-eye-slash" : "la-eye");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.fieldErrors.confirmPassword);
  }
}
function UserAddUpdateComponent_p_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1, " Gender is required ");
    \u0275\u0275elementEnd();
  }
}
function UserAddUpdateComponent_p_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1, " Sub User Type is required ");
    \u0275\u0275elementEnd();
  }
}
var UserAddUpdateComponent = class _UserAddUpdateComponent {
  get isEditMode() {
    return this.data?.mode === "edit";
  }
  get isControlsDisabled() {
    return this.isEditMode && this.model.id === this.currentUser?.userId;
  }
  constructor(dialogRef, userService, subUserTypeService, managementService, userManagementService, toaster, data) {
    this.dialogRef = dialogRef;
    this.userService = userService;
    this.subUserTypeService = subUserTypeService;
    this.managementService = managementService;
    this.userManagementService = userManagementService;
    this.toaster = toaster;
    this.data = data;
    this.isSaving = false;
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.currentUser = null;
    this.genders = [];
    this.subUserTypes = [];
    this.model = {
      id: "",
      name: "",
      userName: "",
      phone: "",
      fkGender: "",
      fkSubUserType: "",
      isActive: true,
      fkHandler: this.currentUser?.userId,
      password: "",
      confirmPassword: "",
      avatarFile: null,
      avatarPreview: "",
      fkBusiness: ""
    };
    this.fieldErrors = {};
    if (this.isEditMode && data?.value) {
      this.model = __spreadProps(__spreadValues(__spreadValues({}, this.model), data.value), {
        id: data.value.userId,
        avatarPreview: data.value.imageBase64 ?? "",
        avatarFile: null,
        password: "",
        confirmPassword: "",
        phone: this.data.value.userPhone
      });
    }
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.getGenders();
      this.currentUser = yield this.userService.user$;
      this.model.fkBusiness = this.currentUser?.fkBusiness ?? "";
      if (!this.isEditMode) {
        this.loadSubUserTypes(this.currentUser?.userId ?? "");
      } else {
        this.subUserTypes = [
          {
            subUserTypeId: this.data.value.fkSubUserType,
            subUserTypeName: this.data.value.subUserTypeName,
            subUserTypeLevel: this.data.value.subUserTypeLevel
          }
        ];
      }
    });
  }
  /* ================= IMAGE UPLOADER ================= */
  onDragOver(event) {
    event.preventDefault();
  }
  onDrop(event) {
    event.preventDefault();
    const file = event.dataTransfer?.files?.[0];
    if (file)
      this.processFile(file);
  }
  onFileInput(event) {
    const input = event.target;
    if (input.files?.[0]) {
      this.processFile(input.files[0]);
    }
  }
  processFile(file) {
    if (!file.type.startsWith("image/")) {
      this.toaster.error("Only image files are allowed");
      return;
    }
    this.model.avatarFile = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.model.avatarPreview = reader.result;
    };
    reader.readAsDataURL(file);
  }
  removeImage() {
    this.model.avatarFile = null;
    this.model.avatarPreview = "";
  }
  /* ================= PASSWORD ================= */
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  isPasswordValid(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^*()_\-=+~`])[A-Za-z\d@#$%^*()_\-=+~`]{6,10}$/;
    return regex.test(password);
  }
  /* ================= DATA LOAD ================= */
  getGenders() {
    this.managementService.getAll().subscribe({
      next: (res) => this.genders = res.data ?? [],
      error: () => this.toaster.error("Failed to load genders")
    });
  }
  loadSubUserTypes(userId) {
    this.subUserTypeService.getActiveSubUserTypesByUserId(userId).subscribe({
      next: (res) => this.subUserTypes = res.data ?? [],
      error: () => this.toaster.error("Failed to load sub user types")
    });
  }
  /* ================= VALIDATION ================= */
  validate() {
    this.fieldErrors = {};
    if (!this.model.name.trim())
      this.fieldErrors.name = true;
    if (!this.model.userName.trim())
      this.fieldErrors.username = true;
    if (!this.model.fkGender)
      this.fieldErrors.gender = true;
    if (!this.model.fkSubUserType)
      this.fieldErrors.subUserType = true;
    if (!this.isEditMode) {
      if (!this.model.password) {
        this.fieldErrors.password = "Password is required";
      } else if (!this.isPasswordValid(this.model.password)) {
        this.fieldErrors.password = "Password does not meet the required complexity";
      }
      if (this.model.password !== this.model.confirmPassword) {
        this.fieldErrors.confirmPassword = "Passwords do not match";
      }
    }
    return Object.keys(this.fieldErrors).length === 0;
  }
  /* ================= DEFAULT AVATAR HELPERS ================= */
  getDefaultAvatarPath(genderName) {
    switch ((genderName || "").toLowerCase()) {
      case "male":
        return "assets/images/avatars/male.jpg";
      case "female":
        return "assets/images/avatars/female.jpg";
      default:
        return "assets/images/avatars/other.jpg";
    }
  }
  convertImageToBase64(path) {
    return __async(this, null, function* () {
      const response = yield fetch(path);
      const blob = yield response.blob();
      return yield new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    });
  }
  /* ================= SAVE ================= */
  save() {
    return __async(this, null, function* () {
      if (!this.validate())
        return;
      const selectedSubUserType = this.subUserTypes.find((x) => x.subUserTypeId === this.model.fkSubUserType);
      const currentUserLevel = this.currentUser?.subUserTypeLevel ?? 1e3;
      if (!this.isEditMode && selectedSubUserType && selectedSubUserType.subUserTypeLevel <= currentUserLevel) {
        this.toaster.warning("You are not authorized to assign this sub user type.");
        return;
      }
      let imageBase64 = void 0;
      let isImageChanged = false;
      if (!this.isEditMode) {
        if (this.model.avatarPreview) {
          imageBase64 = this.model.avatarPreview;
        } else {
          const gender = this.genders.find((g) => g.genderId === this.model.fkGender);
          if (gender) {
            imageBase64 = yield this.convertImageToBase64(this.getDefaultAvatarPath(gender.genderName));
          }
        }
        isImageChanged = true;
      } else {
        if (this.model.avatarFile) {
          imageBase64 = this.model.avatarPreview;
          isImageChanged = true;
        } else if (this.model.avatarPreview === "") {
          isImageChanged = true;
        }
      }
      const payload = {
        userId: this.isEditMode ? this.model.id : void 0,
        name: this.model.name,
        username: this.model.userName,
        userPhoneNo: this.model.phone,
        fkGender: this.model.fkGender,
        fkSubUserType: this.model.fkSubUserType,
        isActive: this.model.isActive,
        fkBusiness: this.model.fkBusiness ? this.model.fkBusiness : "",
        fkHandler: this.currentUser?.userId,
        userPassword: this.isEditMode ? void 0 : this.model.password,
        imageBase64,
        isImageChanged
      };
      if (this.isEditMode) {
        console.log(payload);
        this.userManagementService.updateUser(payload).subscribe({
          next: (res) => {
            if (res.success) {
              this.toaster.success("User updated successfully");
              this.dialogRef.close(true);
            } else {
              this.toaster.warning(res.remarks);
            }
          },
          error: () => this.toaster.error("Something went wrong")
        });
      } else {
        this.userManagementService.addUser(payload).subscribe({
          next: (res) => {
            if (res.success) {
              this.toaster.success("User added successfully");
              this.dialogRef.close(true);
            } else {
              this.toaster.warning(res.remarks);
            }
          },
          error: () => this.toaster.error("Something went wrong")
        });
      }
    });
  }
  close() {
    this.dialogRef.close();
  }
  static {
    this.\u0275fac = function UserAddUpdateComponent_Factory(t) {
      return new (t || _UserAddUpdateComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(SubUserTypeService), \u0275\u0275directiveInject(ManagementService), \u0275\u0275directiveInject(UserManagementService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserAddUpdateComponent, selectors: [["app-user-add-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 85, vars: 49, consts: [["fileInput", ""], [1, "w-full", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl", "max-h-[90vh]", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]"], [1, "text-sm", "font-semibold", "text-white"], ["type", "button", 1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", "transition", 3, "click"], [1, "las", "la-times"], [1, "px-6", "py-2", "overflow-y-auto", "space-y-3"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-5"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "relative", "h-36", "w-36", "rounded-full", "border-2", "border-dashed", "border-[rgb(var(--primary-300))]", "flex", "items-center", "justify-center", "cursor-pointer", 3, "dragover", "drop", "click"], ["class", "h-full w-full rounded-full object-cover", 3, "src", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["type", "button", "class", "absolute -top-2 -right-2 h-7 w-7 rounded-full\n                         bg-[rgb(var(--danger))] text-white flex items-center justify-center", 3, "click", 4, "ngIf"], ["type", "file", "hidden", "", "accept", "image/*", 3, "change"], [1, "text-xs", "text-muted"], [1, "rounded-lg", "p-5", "space-y-4", "border", 3, "ngClass"], [1, "text-[rgb(var(--primary))]", "font-semibold", "uppercase", "tracking-wide", "text-muted"], [1, "yx-field"], [1, "yx-label"], [1, "text-[rgb(var(--red-500))]"], [1, "yx-input", "w-full", 3, "ngModelChange", "ngModel"], ["class", "text-xs mt-1 text-[rgb(var(--danger))]", 4, "ngIf"], [1, "yx-input", "w-full", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-muted"], [1, "rounded-lg", "p-5", "space-y-4", "border", "border-[rgb(var(--gray-200))]", 3, "ngClass"], ["class", "flex items-start gap-2 text-xs text-[rgb(var(--primary))]", 4, "ngIf"], [1, "relative"], [1, "yx-input", "w-full", "pr-10", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "absolute", "inset-y-0", "right-3", "text-muted", 3, "click"], [1, "las", 3, "ngClass"], [1, "mt-2", "text-xs", "space-y-1", "text-[rgb(var(--primary))]"], ["class", "text-xs mt-2 text-[rgb(var(--danger))]", 4, "ngIf"], ["class", "yx-field animate-confirm", 4, "ngIf"], [1, "space-y-2"], ["label", "Gender", "labelKey", "genderName", "valueKey", "genderId", 3, "valueChange", "items", "placeholder", "value", "disabled"], ["class", "text-xs text-[rgb(var(--danger))]", 4, "ngIf"], ["label", "Sub User Type", "labelKey", "subUserTypeName", "valueKey", "subUserTypeId", "placeholder", "Select Sub User Type", 3, "valueChange", "items", "value", "disabled"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4", "flex", "justify-between", "items-center"], [1, "text-sm", "text-[rgb(var(--primary))]", "font-medium"], ["color", "primary", 3, "ngModelChange", "ngModel", "disabled"], [1, "flex", "justify-end", "gap-3", "px-6", "py-4", "border-t"], ["type", "button", 1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "hover:bg-[rgb(var(--red-500))]", "hover:text-white", "border", "border-[rgb(var(--gray-300))]", 3, "click"], ["type", "button", 1, "rounded-lg", "px-6", "py-2", "bg-[rgb(var(--primary))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", 3, "click"], [1, "h-full", "w-full", "rounded-full", "object-cover", 3, "src"], [1, "text-center"], [1, "las", "la-cloud-upload-alt", "text-3xl", "text-[rgb(var(--primary))]"], [1, "text-xs", "mt-1", "text-muted"], ["type", "button", 1, "absolute", "-top-2", "-right-2", "h-7", "w-7", "rounded-full", "bg-[rgb(var(--danger))]", "text-white", "flex", "items-center", "justify-center", 3, "click"], [1, "las", "la-times", "text-sm"], [1, "text-xs", "mt-1", "text-[rgb(var(--danger))]"], [1, "flex", "items-start", "gap-2", "text-xs", "text-[rgb(var(--primary))]"], [1, "las", "la-info-circle", "mt-[1px]"], [1, "text-xs", "mt-2", "text-[rgb(var(--danger))]"], [1, "yx-field", "animate-confirm"], [1, "text-xs", "text-[rgb(var(--danger))]"]], template: function UserAddUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "span", 3);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 4);
        \u0275\u0275listener("click", function UserAddUpdateComponent_Template_button_click_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.close());
        });
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
        \u0275\u0275listener("dragover", function UserAddUpdateComponent_Template_div_dragover_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDragOver($event));
        })("drop", function UserAddUpdateComponent_Template_div_drop_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDrop($event));
        })("click", function UserAddUpdateComponent_Template_div_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          const fileInput_r2 = \u0275\u0275reference(14);
          return \u0275\u0275resetView(fileInput_r2.click());
        });
        \u0275\u0275template(10, UserAddUpdateComponent_img_10_Template, 1, 1, "img", 10)(11, UserAddUpdateComponent_div_11_Template, 4, 0, "div", 11)(12, UserAddUpdateComponent_button_12_Template, 2, 0, "button", 12);
        \u0275\u0275elementStart(13, "input", 13, 0);
        \u0275\u0275listener("change", function UserAddUpdateComponent_Template_input_change_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFileInput($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "p", 14);
        \u0275\u0275text(16, "Upload user profile picture");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 15)(18, "p", 16);
        \u0275\u0275text(19, " Basic Information ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 17)(21, "label", 18);
        \u0275\u0275text(22, "Full Name ");
        \u0275\u0275elementStart(23, "span", 19);
        \u0275\u0275text(24, " *");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "input", 20);
        \u0275\u0275twoWayListener("ngModelChange", function UserAddUpdateComponent_Template_input_ngModelChange_25_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.name, $event) || (ctx.model.name = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function UserAddUpdateComponent_Template_input_ngModelChange_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.fieldErrors.name = null);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, UserAddUpdateComponent_p_26_Template, 2, 0, "p", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 17)(28, "label", 18);
        \u0275\u0275text(29, "Username ");
        \u0275\u0275elementStart(30, "span", 19);
        \u0275\u0275text(31, " *");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "input", 22);
        \u0275\u0275twoWayListener("ngModelChange", function UserAddUpdateComponent_Template_input_ngModelChange_32_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.userName, $event) || (ctx.model.userName = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function UserAddUpdateComponent_Template_input_ngModelChange_32_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.fieldErrors.username = null);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, UserAddUpdateComponent_p_33_Template, 2, 0, "p", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 17)(35, "label", 18);
        \u0275\u0275text(36, " Phone ");
        \u0275\u0275elementStart(37, "span", 23);
        \u0275\u0275text(38, "(optional)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "input", 20);
        \u0275\u0275twoWayListener("ngModelChange", function UserAddUpdateComponent_Template_input_ngModelChange_39_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.phone, $event) || (ctx.model.phone = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "div", 24)(41, "p", 16);
        \u0275\u0275text(42, " Security ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(43, UserAddUpdateComponent_div_43_Template, 4, 0, "div", 25);
        \u0275\u0275elementStart(44, "div", 17)(45, "label", 18);
        \u0275\u0275text(46, "Password ");
        \u0275\u0275elementStart(47, "span", 19);
        \u0275\u0275text(48, " *");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 26)(50, "input", 27);
        \u0275\u0275twoWayListener("ngModelChange", function UserAddUpdateComponent_Template_input_ngModelChange_50_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.password, $event) || (ctx.model.password = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function UserAddUpdateComponent_Template_input_ngModelChange_50_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.fieldErrors.password = null);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 28);
        \u0275\u0275listener("click", function UserAddUpdateComponent_Template_button_click_51_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.togglePassword());
        });
        \u0275\u0275element(52, "i", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "ul", 30)(54, "li");
        \u0275\u0275text(55, "\u2022 6\u201310 characters long");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "li");
        \u0275\u0275text(57, "\u2022 At least 1 uppercase letter (A\u2013Z)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "li");
        \u0275\u0275text(59, "\u2022 At least 1 number (0\u20139)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li");
        \u0275\u0275text(61);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(62, UserAddUpdateComponent_p_62_Template, 2, 1, "p", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275template(63, UserAddUpdateComponent_div_63_Template, 10, 6, "div", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 15)(65, "p", 16);
        \u0275\u0275text(66, " Role & Access ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 33)(68, "yx-select", 34);
        \u0275\u0275twoWayListener("valueChange", function UserAddUpdateComponent_Template_yx_select_valueChange_68_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.fkGender, $event) || (ctx.model.fkGender = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("valueChange", function UserAddUpdateComponent_Template_yx_select_valueChange_68_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.fieldErrors.gender = null);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(69, UserAddUpdateComponent_p_69_Template, 2, 0, "p", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 33)(71, "yx-select", 36);
        \u0275\u0275twoWayListener("valueChange", function UserAddUpdateComponent_Template_yx_select_valueChange_71_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.fkSubUserType, $event) || (ctx.model.fkSubUserType = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("valueChange", function UserAddUpdateComponent_Template_yx_select_valueChange_71_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.fieldErrors.subUserType = null);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(72, UserAddUpdateComponent_p_72_Template, 2, 0, "p", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 37)(74, "div")(75, "p", 38);
        \u0275\u0275text(76, "Active Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "p", 14);
        \u0275\u0275text(78, "Inactive users cannot login");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "mat-slide-toggle", 39);
        \u0275\u0275twoWayListener("ngModelChange", function UserAddUpdateComponent_Template_mat_slide_toggle_ngModelChange_79_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.model.isActive, $event) || (ctx.model.isActive = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "div", 40)(81, "button", 41);
        \u0275\u0275listener("click", function UserAddUpdateComponent_Template_button_click_81_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.close());
        });
        \u0275\u0275text(82, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "button", 42);
        \u0275\u0275listener("click", function UserAddUpdateComponent_Template_button_click_83_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.save());
        });
        \u0275\u0275text(84);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update User" : "Add User", " ");
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.model.avatarPreview);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.model.avatarPreview);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.model.avatarPreview);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(40, _c0, ctx.fieldErrors.name || ctx.fieldErrors.username || ctx.fieldErrors.phone, !(ctx.fieldErrors.name || ctx.fieldErrors.username || ctx.fieldErrors.phone)));
        \u0275\u0275advance(8);
        \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx.fieldErrors.name);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.name);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.name);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("opacity-60", ctx.isEditMode)("border-[rgb(var(--danger))]", ctx.fieldErrors.username);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.userName);
        \u0275\u0275property("disabled", ctx.isEditMode);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.username);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.phone);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(43, _c0, ctx.fieldErrors.password || ctx.fieldErrors.confirmPassword, !(ctx.fieldErrors.password || ctx.fieldErrors.confirmPassword)));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.isEditMode);
        \u0275\u0275advance(7);
        \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx.fieldErrors.password);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.model.password);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.showPassword ? "la-eye-slash" : "la-eye");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" \u2022 At least 1 special character (", "@ # $ % ^ * ( ) _ - = + ~ `", ") ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.password);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.model.password.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(46, _c0, ctx.fieldErrors.gender || ctx.fieldErrors.subUserType, !(ctx.fieldErrors.gender || ctx.fieldErrors.subUserType)));
        \u0275\u0275advance(4);
        \u0275\u0275property("items", ctx.genders)("placeholder", ctx.genders.length ? "Select Gender" : "No Gender Found");
        \u0275\u0275twoWayProperty("value", ctx.model.fkGender);
        \u0275\u0275property("disabled", !ctx.genders.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.gender);
        \u0275\u0275advance(2);
        \u0275\u0275property("items", ctx.subUserTypes);
        \u0275\u0275twoWayProperty("value", ctx.model.fkSubUserType);
        \u0275\u0275property("disabled", ctx.isEditMode || !ctx.subUserTypes.length || ctx.isControlsDisabled);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.fieldErrors.subUserType);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.model.isActive);
        \u0275\u0275property("disabled", ctx.isControlsDisabled);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update User" : "Save User", " ");
      }
    }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatSlideToggleModule, MatSlideToggle, YxSelectComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserAddUpdateComponent, { className: "UserAddUpdateComponent", filePath: "src\\app\\components\\management\\user\\user-add-update\\user-add-update.component.ts", lineNumber: 30 });
})();

export {
  UserManagementService,
  UserAddUpdateComponent
};
//# sourceMappingURL=chunk-WIFJZX2X.js.map
