import {
  ManagementService
} from "./chunk-TEI4X4OW.js";
import {
  SubUserTypeService
} from "./chunk-AQYXGAJ6.js";
import {
  SharedModule
} from "./chunk-FF7QN5R5.js";
import {
  MatStepperModule
} from "./chunk-OWIRED5M.js";
import {
  YxSelectComponent
} from "./chunk-VUCKRGWV.js";
import {
  UserService
} from "./chunk-H6LTRMYQ.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-J4QH6UQS.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-LVRCF6MZ.js";
import {
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-R5AMMNLH.js";
import {
  __async
} from "./chunk-6EVL5ZQD.js";

// src/app/components/core/business-management/business-management.service.ts
var BusinessService = class _BusinessService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  /** ===============================
   *  GET ALL SUB USER TYPES
   *  =============================== */
  getBusinesses() {
    return this.http.get(`${this.baseUrl}/Business`);
  }
  /** ===============================
   *  GET BY USER TYPE ID (OPTIONAL BUT USEFUL)
   *  =============================== */
  getBusinessByUserId(userId) {
    return this.http.get(`${this.baseUrl}/Business`);
  }
  /** ===============================
   *  ADD SUB USER TYPE
   *  =============================== */
  addBusiness(model) {
    return this.http.post(`${this.baseUrl}/Business`, model);
  }
  AddBusinessAndBusinessAdmin(model) {
    return this.http.post(`${this.baseUrl}/Business/AddBusinessAndBusinessAdmin`, model);
  }
  /** ===============================
   *  UPDATE SUB USER TYPE
   *  =============================== */
  updateBusiness(model) {
    return this.http.put(`${this.baseUrl}/Business`, model);
  }
  /** ===============================
   *  DELETE SUB USER TYPE
   *  =============================== */
  deleteBusiness(id) {
    return this.http.delete(`${this.baseUrl}/Business`, { params: { id } });
  }
  static {
    this.\u0275fac = function BusinessService_Factory(t) {
      return new (t || _BusinessService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BusinessService, factory: _BusinessService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/core/business-management/business-management-add-update/business-management-add-update.component.ts
function BusinessManagementAddUpdateComponent_ng_container_22_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fieldErrors.businessName, "\n");
  }
}
function BusinessManagementAddUpdateComponent_ng_container_22_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fieldErrors.businessEmail, "\n");
  }
}
function BusinessManagementAddUpdateComponent_ng_container_22_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fieldErrors.businessContact, "\n");
  }
}
function BusinessManagementAddUpdateComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 23)(2, "div", 24)(3, "p", 25);
    \u0275\u0275text(4, " Business Information ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26)(6, "label", 27);
    \u0275\u0275text(7, "Business Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_22_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.businessName, $event) || (ctx_r1.model.businessName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_22_Template_input_ngModelChange_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fieldErrors.businessName = null);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, BusinessManagementAddUpdateComponent_ng_container_22_p_9_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 26)(11, "label", 27);
    \u0275\u0275text(12, "Business Email *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_22_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.businessEmail, $event) || (ctx_r1.model.businessEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_22_Template_input_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fieldErrors.businessEmail = null);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, BusinessManagementAddUpdateComponent_ng_container_22_p_14_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 26)(16, "label", 27);
    \u0275\u0275text(17, "Business Contact *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_22_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.businessContact, $event) || (ctx_r1.model.businessContact = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_22_Template_input_ngModelChange_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fieldErrors.businessContact = null);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, BusinessManagementAddUpdateComponent_ng_container_22_p_19_Template, 2, 1, "p", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 30)(21, "div")(22, "p", 31);
    \u0275\u0275text(23, "Active Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 32);
    \u0275\u0275text(25, "Inactive users cannot login");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-slide-toggle", 33);
    \u0275\u0275twoWayListener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_22_Template_mat_slide_toggle_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.businessIsActive, $event) || (ctx_r1.model.businessIsActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.businessName);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.businessName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fieldErrors.businessName);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.businessEmail);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.businessEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fieldErrors.businessEmail);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.businessContact);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.businessContact);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fieldErrors.businessContact);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.businessIsActive);
    \u0275\u0275property("disabled", ctx_r1.model.isControlsDisabled);
  }
}
function BusinessManagementAddUpdateComponent_ng_container_23_img_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 57);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.model.avatarPreview, \u0275\u0275sanitizeUrl);
  }
}
function BusinessManagementAddUpdateComponent_ng_container_23_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementStart(2, "p", 60);
    \u0275\u0275text(3, "Drag or Click");
    \u0275\u0275elementEnd()();
  }
}
function BusinessManagementAddUpdateComponent_ng_container_23_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function BusinessManagementAddUpdateComponent_ng_container_23_button_7_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.removeImage();
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275elementEnd();
  }
}
function BusinessManagementAddUpdateComponent_ng_container_23_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1, " Full name is required ");
    \u0275\u0275elementEnd();
  }
}
function BusinessManagementAddUpdateComponent_ng_container_23_p_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1, " Username is required ");
    \u0275\u0275elementEnd();
  }
}
function BusinessManagementAddUpdateComponent_ng_container_23_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, " If you do not want to change the password, leave this field empty. ");
    \u0275\u0275elementEnd()();
  }
}
function BusinessManagementAddUpdateComponent_ng_container_23_p_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fieldErrors.password, " ");
  }
}
function BusinessManagementAddUpdateComponent_ng_container_23_div_58_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fieldErrors.confirmPassword, " ");
  }
}
function BusinessManagementAddUpdateComponent_ng_container_23_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "label", 27);
    \u0275\u0275text(2, "Confirm Password ");
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4, " *");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 49)(6, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_23_div_58_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.model.confirmPassword, $event) || (ctx_r1.model.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_23_div_58_Template_input_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.fieldErrors.confirmPassword = null);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 51);
    \u0275\u0275listener("click", function BusinessManagementAddUpdateComponent_ng_container_23_div_58_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleConfirmPassword());
    });
    \u0275\u0275element(8, "i", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, BusinessManagementAddUpdateComponent_ng_container_23_div_58_p_9_Template, 2, 1, "p", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.confirmPassword);
    \u0275\u0275property("type", ctx_r1.showConfirmPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.confirmPassword);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.showConfirmPassword ? "la-eye-slash" : "la-eye");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fieldErrors.confirmPassword);
  }
}
function BusinessManagementAddUpdateComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 23)(2, "div", 35)(3, "div", 36)(4, "div", 37);
    \u0275\u0275listener("dragover", function BusinessManagementAddUpdateComponent_ng_container_23_Template_div_dragover_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragOver($event));
    })("drop", function BusinessManagementAddUpdateComponent_ng_container_23_Template_div_drop_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    })("click", function BusinessManagementAddUpdateComponent_ng_container_23_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const fileInput_r4 = \u0275\u0275reference(9);
      return \u0275\u0275resetView(fileInput_r4.click());
    });
    \u0275\u0275template(5, BusinessManagementAddUpdateComponent_ng_container_23_img_5_Template, 1, 1, "img", 38)(6, BusinessManagementAddUpdateComponent_ng_container_23_div_6_Template, 4, 0, "div", 39)(7, BusinessManagementAddUpdateComponent_ng_container_23_button_7_Template, 2, 0, "button", 40);
    \u0275\u0275elementStart(8, "input", 41, 0);
    \u0275\u0275listener("change", function BusinessManagementAddUpdateComponent_ng_container_23_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileInput($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 32);
    \u0275\u0275text(11, "Upload user profile picture");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 42)(13, "p", 43);
    \u0275\u0275text(14, " Basic Information ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 26)(16, "label", 27);
    \u0275\u0275text(17, "Full Name ");
    \u0275\u0275elementStart(18, "span", 44);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_23_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.name, $event) || (ctx_r1.model.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_23_Template_input_ngModelChange_20_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fieldErrors.name = null);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, BusinessManagementAddUpdateComponent_ng_container_23_p_21_Template, 2, 0, "p", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 26)(23, "label", 27);
    \u0275\u0275text(24, "Username ");
    \u0275\u0275elementStart(25, "span", 44);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_23_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.userName, $event) || (ctx_r1.model.userName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_23_Template_input_ngModelChange_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fieldErrors.username = null);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, BusinessManagementAddUpdateComponent_ng_container_23_p_28_Template, 2, 0, "p", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 26)(30, "label", 27);
    \u0275\u0275text(31, " Phone ");
    \u0275\u0275elementStart(32, "span", 47);
    \u0275\u0275text(33, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_23_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.phone, $event) || (ctx_r1.model.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 42)(36, "p", 43);
    \u0275\u0275text(37, " Security ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, BusinessManagementAddUpdateComponent_ng_container_23_div_38_Template, 4, 0, "div", 48);
    \u0275\u0275elementStart(39, "div", 26)(40, "label", 27);
    \u0275\u0275text(41, "Password ");
    \u0275\u0275elementStart(42, "span", 44);
    \u0275\u0275text(43, " *");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 49)(45, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_23_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.password, $event) || (ctx_r1.model.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_23_Template_input_ngModelChange_45_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fieldErrors.password = null);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 51);
    \u0275\u0275listener("click", function BusinessManagementAddUpdateComponent_ng_container_23_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePassword());
    });
    \u0275\u0275element(47, "i", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "ul", 53)(49, "li");
    \u0275\u0275text(50, "\u2022 6\u201310 characters long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "li");
    \u0275\u0275text(52, "\u2022 At least 1 uppercase letter (A\u2013Z)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "li");
    \u0275\u0275text(54, "\u2022 At least 1 number (0\u20139)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "li");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(57, BusinessManagementAddUpdateComponent_ng_container_23_p_57_Template, 2, 1, "p", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, BusinessManagementAddUpdateComponent_ng_container_23_div_58_Template, 10, 6, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 42)(60, "p", 43);
    \u0275\u0275text(61, " Role & Access ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "yx-select", 56);
    \u0275\u0275twoWayListener("valueChange", function BusinessManagementAddUpdateComponent_ng_container_23_Template_yx_select_valueChange_62_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.fkGender, $event) || (ctx_r1.model.fkGender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function BusinessManagementAddUpdateComponent_ng_container_23_Template_yx_select_valueChange_62_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fieldErrors.gender = null);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 30)(64, "div")(65, "p", 31);
    \u0275\u0275text(66, "Active Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "p", 32);
    \u0275\u0275text(68, "Inactive users cannot login");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "mat-slide-toggle", 33);
    \u0275\u0275twoWayListener("ngModelChange", function BusinessManagementAddUpdateComponent_ng_container_23_Template_mat_slide_toggle_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.model.isActive, $event) || (ctx_r1.model.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.model.avatarPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.model.avatarPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.model.avatarPreview);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.name || ctx_r1.fieldErrors.username || ctx_r1.fieldErrors.phone);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.name);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fieldErrors.name);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("opacity-60", ctx_r1.isEditMode)("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.username);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.userName);
    \u0275\u0275property("disabled", ctx_r1.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fieldErrors.username);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.phone);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.password || ctx_r1.fieldErrors.confirmPassword)("border-gray-200", !(ctx_r1.fieldErrors.password || ctx_r1.fieldErrors.confirmPassword));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isEditMode);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.password);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.password);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.showPassword ? "la-eye-slash" : "la-eye");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" \u2022 At least 1 special character (", "@ # $ % ^ * ( ) _ - = + ~ `", ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fieldErrors.password);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.model.password.length > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.gender || ctx_r1.fieldErrors.subUserType);
    \u0275\u0275advance(3);
    \u0275\u0275property("items", ctx_r1.genders);
    \u0275\u0275twoWayProperty("value", ctx_r1.model.fkGender);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.model.isActive);
    \u0275\u0275property("disabled", ctx_r1.model.isControlsDisabled);
  }
}
function BusinessManagementAddUpdateComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function BusinessManagementAddUpdateComponent_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentStep = 0);
    });
    \u0275\u0275text(1, " Back ");
    \u0275\u0275elementEnd();
  }
}
function BusinessManagementAddUpdateComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function BusinessManagementAddUpdateComponent_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function BusinessManagementAddUpdateComponent_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(1, " Cancel ");
    \u0275\u0275elementEnd();
  }
}
function BusinessManagementAddUpdateComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function BusinessManagementAddUpdateComponent_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToAdminStep());
    });
    \u0275\u0275text(1, " Next ");
    \u0275\u0275elementEnd();
  }
}
function BusinessManagementAddUpdateComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function BusinessManagementAddUpdateComponent_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitAll());
    });
    \u0275\u0275text(1, " Save Business ");
    \u0275\u0275elementEnd();
  }
}
var BusinessManagementAddUpdateComponent = class _BusinessManagementAddUpdateComponent {
  constructor(dialogRef, route, router, userService, subUserTypeService, managementService, businessService, toaster) {
    this.dialogRef = dialogRef;
    this.route = route;
    this.router = router;
    this.userService = userService;
    this.subUserTypeService = subUserTypeService;
    this.managementService = managementService;
    this.businessService = businessService;
    this.toaster = toaster;
    this.mode = "add";
    this.currentStep = 0;
    this.isSaving = false;
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.businessId = "";
    this.genders = [];
    this.subUserTypes = [];
    this.model = {
      // ===== USER =====
      id: "",
      name: "",
      userName: "",
      phone: "",
      fkGender: "",
      fkSubUserType: "",
      isActive: true,
      password: "",
      confirmPassword: "",
      // ===== IMAGE =====
      avatarFile: null,
      avatarPreview: "",
      // ===== BUSINESS =====
      businessName: "",
      businessEmail: "",
      businessContact: "",
      businessIsActive: true,
      // ===== UI =====
      isControlsDisabled: false
    };
    this.fieldErrors = {};
  }
  get isEditMode() {
    return this.mode === "edit";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.route.queryParams.subscribe((params) => {
        this.mode = params["mode"] || "add";
      });
      this.getGenders();
      this.currentUser = yield this.userService.user$;
      this.businessId = this.currentUser?.fkBusiness;
    });
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
  /* ================= DROPDOWNS ================= */
  getGenders() {
    this.managementService.getAll().subscribe({
      next: (res) => this.genders = res.data ?? [],
      error: () => this.toaster.error("Failed to load genders")
    });
  }
  loadSubUserTypes(userId) {
    this.subUserTypeService.getSubUserTypesOfBusinessAdmin(userId).subscribe({
      next: (res) => this.subUserTypes = res.data ?? [],
      error: () => this.toaster.error("Failed to load sub user types")
    });
  }
  validateBusinessInfo() {
    this.fieldErrors = this.fieldErrors || {};
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
    return !(this.fieldErrors.businessName || this.fieldErrors.businessEmail || this.fieldErrors.businessContact);
  }
  goToAdminStep() {
    if (!this.validateBusinessInfo())
      return;
    this.currentStep = 1;
  }
  /* ================= IMAGE ================= */
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
  onDragOver(event) {
    event.preventDefault();
  }
  onDrop(event) {
    event.preventDefault();
    const file = event.dataTransfer?.files?.[0];
    if (file)
      this.processFile(file);
  }
  /* ================= VALIDATION ================= */
  validateAdmin() {
    this.fieldErrors = {};
    if (!this.model.businessName.trim())
      this.fieldErrors.businessName = true;
    if (!this.model.name.trim())
      this.fieldErrors.name = true;
    if (!this.model.userName.trim())
      this.fieldErrors.username = true;
    if (!this.model.fkGender)
      this.fieldErrors.gender = true;
    if (!this.model.password) {
      this.fieldErrors.password = "Password is required";
    } else if (!this.isPasswordValid(this.model.password)) {
      this.fieldErrors.password = "Password complexity invalid";
    }
    if (this.model.password !== this.model.confirmPassword) {
      this.fieldErrors.confirmPassword = "Passwords do not match";
    }
    return Object.keys(this.fieldErrors).length === 0;
  }
  buildImagePayload() {
    let imageBase64 = void 0;
    let isImageChanged = false;
    if (this.model.avatarPreview) {
      imageBase64 = this.model.avatarPreview;
      isImageChanged = true;
    }
    return { imageBase64, isImageChanged };
  }
  /* ================= SUBMIT ================= */
  submitAll() {
    if (!this.validateAdmin())
      return;
    this.isSaving = true;
    const imagePayload = this.buildImagePayload();
    const payload = {
      // ===== BUSINESS =====
      businessName: this.model.businessName,
      businessEmail: this.model.businessEmail,
      businessContact: this.model.businessContact,
      isActive: this.model.businessIsActive,
      BusinessisActive: this.model.businessIsActive,
      // ===== USER =====
      name: this.model.name,
      username: this.model.userName,
      userPhoneNo: this.model.phone,
      fkGender: this.model.fkGender,
      // fkSubUserType: this.model.fkSubUserType,
      userPassword: this.model.password,
      fkUser: this.currentUser?.userId ?? "",
      // ===== IMAGE =====
      imageBase64: imagePayload.imageBase64,
      isImageChanged: imagePayload.isImageChanged
    };
    console.log(payload);
    this.businessService.AddBusinessAndBusinessAdmin(payload).subscribe({
      next: () => {
        this.toaster.success("Business And Admin created successfully");
        this.dialogRef.close("saved");
      },
      error: () => {
        this.toaster.error("Creation failed");
        this.isSaving = false;
      }
    });
  }
  close() {
    this.dialogRef.close();
  }
  static {
    this.\u0275fac = function BusinessManagementAddUpdateComponent_Factory(t) {
      return new (t || _BusinessManagementAddUpdateComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(SubUserTypeService), \u0275\u0275directiveInject(ManagementService), \u0275\u0275directiveInject(BusinessService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BusinessManagementAddUpdateComponent, selectors: [["app-business-management-add-update"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 26, consts: [["fileInput", ""], [1, "w-full", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl", "max-h-[90vh]", "flex", "flex-col"], [1, "flex", "items-center", "justify-between", "px-6", "py-3", "bg-[rgb(var(--primary))]"], [1, "text-sm", "font-semibold", "text-white"], ["type", "button", 1, "rounded-lg", "p-2", "text-white/80", "bg-white/10", "hover:bg-red", 3, "click"], [1, "las", "la-times"], [1, "flex-1", "px-1", "py-1", "overflow-y-auto"], [1, "yx-stepper"], [1, "flex", "items-center", "justify-between", "px-6", "pt-4"], [1, "flex", "items-center", "gap-3", "cursor-pointer", 3, "click"], [1, "h-10", "w-10", "rounded-full", "flex", "items-center", "justify-center", "transition"], [1, "las", "la-building", "text-lg"], [1, "text-sm", "font-semibold"], [1, "flex-1", "h-[2px]", "mx-4", "bg-[rgb(var(--gray-200))]", "relative"], [1, "absolute", "left-0", "top-0", "h-full", "bg-[rgb(var(--primary))]", "transition-all"], [1, "las", "la-user-shield", "text-lg"], [1, "mt-4"], [4, "ngIf"], [1, "flex", "items-center", "justify-between", "gap-3", "px-6", "py-4", "border-t", "border-[rgb(var(--default-border))]"], ["class", "rounded-lg px-4 py-2 text-sm font-medium\n           border border-[rgb(var(--gray-300))]\n           hover:bg-red", 3, "click", 4, "ngIf"], [1, "flex", "gap-3"], ["class", "rounded-lg px-4 py-2 text-sm font-medium\n            border border-[rgb(var(--gray-300))]\n            hover:bg-[rgb(var(--danger))] hover:text-white", 3, "click", 4, "ngIf"], ["class", "rounded-lg px-5 py-2 text-sm font-semibold\n             bg-[rgb(var(--primary-600))] text-white\n             hover:bg-[rgb(var(--primary-700))]", 3, "click", 4, "ngIf"], [1, "px-6", "py-2", "overflow-y-auto", "space-y-3"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-5", "space-y-4"], [1, "text-[rgb(var(--primary))]", "font-semibold", "uppercase", "tracking-wide"], [1, "yx-field"], [1, "yx-label"], [1, "yx-input", "w-full", 3, "ngModelChange", "ngModel"], ["class", "text-xs text-[rgb(var(--danger))] mt-1", 4, "ngIf"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-4", "flex", "justify-between", "items-center"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-muted"], ["color", "primary", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-xs", "text-[rgb(var(--danger))]", "mt-1"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-5"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "relative", "h-36", "w-36", "rounded-full", "border-2", "border-dashed", "border-[rgb(var(--primary-300))]", "flex", "items-center", "justify-center", "cursor-pointer", 3, "dragover", "drop", "click"], ["class", "h-full w-full rounded-full object-cover", 3, "src", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["type", "button", "class", "absolute -top-2 -right-2 h-7 w-7 rounded-full\n                                 bg-[rgb(var(--danger))] text-white flex items-center justify-center", 3, "click", 4, "ngIf"], ["type", "file", "hidden", "", "accept", "image/*", 3, "change"], [1, "rounded-lg", "p-5", "space-y-4", "border", "border-[rgb(var(--gray-200))]"], [1, "text-[rgb(var(--primary))]", "font-semibold", "uppercase", "tracking-wide", "text-muted"], [1, "text-[rgb(var(--red-500))]"], ["class", "text-xs mt-1 text-[rgb(var(--danger))]", 4, "ngIf"], [1, "yx-input", "w-full", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-muted"], ["class", "flex items-start gap-2 text-xs text-[rgb(var(--primary))]", 4, "ngIf"], [1, "relative"], [1, "yx-input", "w-full", "pr-10", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "absolute", "inset-y-0", "right-3", "text-muted", 3, "click"], [1, "las", 3, "ngClass"], [1, "mt-2", "text-xs", "space-y-1", "text-[rgb(var(--primary))]"], ["class", "text-xs mt-2 text-[rgb(var(--danger))]", 4, "ngIf"], ["class", "yx-field animate-confirm", 4, "ngIf"], ["label", "Gender", "labelKey", "genderName", "valueKey", "genderId", "placeholder", "Select Gender", 3, "valueChange", "items", "value"], [1, "h-full", "w-full", "rounded-full", "object-cover", 3, "src"], [1, "text-center"], [1, "las", "la-cloud-upload-alt", "text-3xl", "text-[rgb(var(--primary))]"], [1, "text-xs", "mt-1", "text-muted"], ["type", "button", 1, "absolute", "-top-2", "-right-2", "h-7", "w-7", "rounded-full", "bg-[rgb(var(--danger))]", "text-white", "flex", "items-center", "justify-center", 3, "click"], [1, "las", "la-times", "text-sm"], [1, "text-xs", "mt-1", "text-[rgb(var(--danger))]"], [1, "flex", "items-start", "gap-2", "text-xs", "text-[rgb(var(--primary))]"], [1, "las", "la-info-circle", "mt-[1px]"], [1, "text-xs", "mt-2", "text-[rgb(var(--danger))]"], [1, "yx-field", "animate-confirm"], [1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "border", "border-[rgb(var(--gray-300))]", "hover:bg-red", 3, "click"], [1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "border", "border-[rgb(var(--gray-300))]", "hover:bg-[rgb(var(--danger))]", "hover:text-white", 3, "click"], [1, "rounded-lg", "px-5", "py-2", "text-sm", "font-semibold", "bg-[rgb(var(--primary-600))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", 3, "click"]], template: function BusinessManagementAddUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "span", 3);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 4);
        \u0275\u0275listener("click", function BusinessManagementAddUpdateComponent_Template_button_click_4_listener() {
          return ctx.close();
        });
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
        \u0275\u0275listener("click", function BusinessManagementAddUpdateComponent_Template_div_click_9_listener() {
          return ctx.currentStep = 0;
        });
        \u0275\u0275elementStart(10, "div", 10);
        \u0275\u0275element(11, "i", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 12);
        \u0275\u0275text(13, " Business Info ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 13);
        \u0275\u0275element(15, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 9);
        \u0275\u0275listener("click", function BusinessManagementAddUpdateComponent_Template_div_click_16_listener() {
          return ctx.goToAdminStep();
        });
        \u0275\u0275elementStart(17, "div", 10);
        \u0275\u0275element(18, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 12);
        \u0275\u0275text(20, " Business Admin ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 16);
        \u0275\u0275template(22, BusinessManagementAddUpdateComponent_ng_container_22_Template, 27, 14, "ng-container", 17)(23, BusinessManagementAddUpdateComponent_ng_container_23_Template, 70, 36, "ng-container", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 18);
        \u0275\u0275template(25, BusinessManagementAddUpdateComponent_button_25_Template, 2, 0, "button", 19)(26, BusinessManagementAddUpdateComponent_div_26_Template, 1, 0, "div", 17);
        \u0275\u0275elementStart(27, "div", 20);
        \u0275\u0275template(28, BusinessManagementAddUpdateComponent_button_28_Template, 2, 0, "button", 21)(29, BusinessManagementAddUpdateComponent_button_29_Template, 2, 0, "button", 22)(30, BusinessManagementAddUpdateComponent_button_30_Template, 2, 0, "button", 22);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Edit Business" : "Add Business", " ");
        \u0275\u0275advance(7);
        \u0275\u0275classProp("bg-[rgb(var(--primary))]", ctx.currentStep >= 0)("text-white", ctx.currentStep >= 0)("bg-[rgb(var(--gray-200))]", ctx.currentStep < 0);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("text-[rgb(var(--primary))]", ctx.currentStep >= 0);
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("width", ctx.currentStep >= 1 ? 100 : 0, "%");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("bg-[rgb(var(--primary))]", ctx.currentStep >= 1)("text-white", ctx.currentStep >= 1)("bg-[rgb(var(--gray-200))]", ctx.currentStep < 1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("text-[rgb(var(--primary))]", ctx.currentStep >= 1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.currentStep === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.currentStep === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.currentStep === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 1);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgIf,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatSlideToggleModule,
      MatSlideToggle,
      MatStepperModule,
      YxSelectComponent,
      SharedModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BusinessManagementAddUpdateComponent, { className: "BusinessManagementAddUpdateComponent", filePath: "src\\app\\components\\core\\business-management\\business-management-add-update\\business-management-add-update.component.ts", lineNumber: 41 });
})();

export {
  BusinessService,
  BusinessManagementAddUpdateComponent
};
//# sourceMappingURL=chunk-JPDUJBBE.js.map
