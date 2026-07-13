import {
  DeviceService
} from "./chunk-23MD4Y7N.js";
import {
  FacilityService
} from "./chunk-SS76AF3O.js";
import {
  BuildingService
} from "./chunk-JHVMKIIT.js";
import {
  FloorService
} from "./chunk-RU3Q4DPZ.js";
import {
  SectionService
} from "./chunk-23BVNQNJ.js";
import {
  OfficeService
} from "./chunk-ZKTKUHMD.js";
import {
  YxSelectComponent
} from "./chunk-L5ZIRAMR.js";
import {
  SensorCommandService
} from "./chunk-AIWP64L7.js";
import {
  LiveAlertsService,
  SocketService
} from "./chunk-ULHVIHAW.js";
import {
  MaterialModuleModule
} from "./chunk-7LK7NDKG.js";
import {
  MatSlideToggleModule
} from "./chunk-3ZFR3IJH.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-7CONLPWZ.js";
import {
  UserService
} from "./chunk-WHOMYXFN.js";
import {
  ToastrService
} from "./chunk-SFDR4GMF.js";
import {
  Router
} from "./chunk-5DAVUJF5.js";
import {
  CommonModule,
  NgClass,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-AVLIJGNB.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-Y6Q6HMFU.js";

// src/app/components/dashboards/live-consumption/live-consumption.component.ts
var _forTrack0 = ($index, $item) => $item.sensorId;
function LiveConsumptionComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "yx-select", 19);
    \u0275\u0275twoWayListener("valueChange", function LiveConsumptionComponent_Conditional_0_Conditional_10_Template_yx_select_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedFacilityId, $event) || (ctx_r2.selectedFacilityId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function LiveConsumptionComponent_Conditional_0_Conditional_10_Template_yx_select_valueChange_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onFacilityChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "yx-select", 20);
    \u0275\u0275twoWayListener("valueChange", function LiveConsumptionComponent_Conditional_0_Conditional_10_Template_yx_select_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedBuildingId, $event) || (ctx_r2.selectedBuildingId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function LiveConsumptionComponent_Conditional_0_Conditional_10_Template_yx_select_valueChange_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onBuildingChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "yx-select", 21);
    \u0275\u0275twoWayListener("valueChange", function LiveConsumptionComponent_Conditional_0_Conditional_10_Template_yx_select_valueChange_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedFloorId, $event) || (ctx_r2.selectedFloorId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function LiveConsumptionComponent_Conditional_0_Conditional_10_Template_yx_select_valueChange_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onFloorChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "yx-select", 22);
    \u0275\u0275twoWayListener("valueChange", function LiveConsumptionComponent_Conditional_0_Conditional_10_Template_yx_select_valueChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedSectionId, $event) || (ctx_r2.selectedSectionId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function LiveConsumptionComponent_Conditional_0_Conditional_10_Template_yx_select_valueChange_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSectionChange());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("items", ctx_r2.facilities)("enableSearch", true);
    \u0275\u0275twoWayProperty("value", ctx_r2.selectedFacilityId);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r2.buildings)("enableSearch", true);
    \u0275\u0275twoWayProperty("value", ctx_r2.selectedBuildingId);
    \u0275\u0275property("disabled", !ctx_r2.selectedFacilityId);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r2.floors)("enableSearch", true);
    \u0275\u0275twoWayProperty("value", ctx_r2.selectedFloorId);
    \u0275\u0275property("disabled", !ctx_r2.selectedBuildingId);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r2.sections)("enableSearch", true);
    \u0275\u0275twoWayProperty("value", ctx_r2.selectedSectionId);
    \u0275\u0275property("disabled", !ctx_r2.selectedFloorId);
  }
}
function LiveConsumptionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "div")(4, "h1", 11);
    \u0275\u0275text(5, " Energy Command Center ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 12);
    \u0275\u0275text(7, " Monitor live sensor readings. ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(8, "div", 13)(9, "div", 14);
    \u0275\u0275template(10, LiveConsumptionComponent_Conditional_0_Conditional_10_Template, 4, 15);
    \u0275\u0275elementStart(11, "yx-select", 15);
    \u0275\u0275twoWayListener("valueChange", function LiveConsumptionComponent_Conditional_0_Template_yx_select_valueChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedOfficeId, $event) || (ctx_r2.selectedOfficeId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function LiveConsumptionComponent_Conditional_0_Template_yx_select_valueChange_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onOfficeChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "yx-select", 16);
    \u0275\u0275twoWayListener("valueChange", function LiveConsumptionComponent_Conditional_0_Template_yx_select_valueChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedDeviceId, $event) || (ctx_r2.selectedDeviceId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function LiveConsumptionComponent_Conditional_0_Template_yx_select_valueChange_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDeviceChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 17);
    \u0275\u0275element(14, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275conditional(10, ctx_r2.isBusinessUser() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r2.offices)("enableSearch", true);
    \u0275\u0275twoWayProperty("value", ctx_r2.selectedOfficeId);
    \u0275\u0275property("disabled", ctx_r2.isBusinessUser() && !ctx_r2.selectedSectionId);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r2.devices)("enableSearch", true);
    \u0275\u0275twoWayProperty("value", ctx_r2.selectedDeviceId);
    \u0275\u0275property("disabled", !ctx_r2.selectedOfficeId);
  }
}
function LiveConsumptionComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 23)(2, "div", 24);
    \u0275\u0275element(3, "span", 25)(4, "span", 26)(5, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 28);
    \u0275\u0275text(7, " Listening for Live Sensor Data ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 29);
    \u0275\u0275text(9, " Socket is connected and waiting for readings from the selected hierarchy level. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 30);
    \u0275\u0275element(11, "span", 31);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275styleProp("background-color", ctx_r2.isSocketConnected ? "rgb(var(--success))" : "rgb(var(--danger))");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isSocketConnected ? "Connected to live stream" : "Connecting to socket...", " ");
  }
}
function LiveConsumptionComponent_Conditional_11_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "i", 73);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "LIVE");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("background-color", "rgb(var(--success-100))")("color", "rgb(var(--success-700))");
  }
}
function LiveConsumptionComponent_Conditional_11_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275element(1, "i", 74);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "STALE");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275styleProp("background-color", "rgb(var(--danger-100))")("color", "rgb(var(--danger-700))");
  }
}
function LiveConsumptionComponent_Conditional_11_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 75);
  }
  if (rf & 2) {
    \u0275\u0275styleProp("background-color", "rgb(var(--success))");
  }
}
function LiveConsumptionComponent_Conditional_11_For_2_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sensor_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", "rgb(var(--gray-100))")("color", "rgb(var(--gray-700))");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Relay: ", ctx_r2.getRelayStateText(sensor_r5), " ");
  }
}
function LiveConsumptionComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "div", 37)(4, "div", 38)(5, "p", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 43);
    \u0275\u0275template(14, LiveConsumptionComponent_Conditional_11_For_2_Conditional_14_Template, 4, 4, "div", 44)(15, LiveConsumptionComponent_Conditional_11_For_2_Conditional_15_Template, 4, 4);
    \u0275\u0275elementStart(16, "div", 45);
    \u0275\u0275template(17, LiveConsumptionComponent_Conditional_11_For_2_Conditional_17_Template, 1, 2, "span", 46);
    \u0275\u0275element(18, "span", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 48)(20, "p", 49);
    \u0275\u0275text(21);
    \u0275\u0275elementStart(22, "span", 50);
    \u0275\u0275text(23, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementStart(25, "span", 50);
    \u0275\u0275text(26, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementStart(28, "span", 50);
    \u0275\u0275text(29, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementStart(31, "span", 50);
    \u0275\u0275text(32, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 51)(35, "div", 52)(36, "div", 53)(37, "div")(38, "p", 54);
    \u0275\u0275element(39, "i", 55);
    \u0275\u0275text(40, " Energy ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 56);
    \u0275\u0275text(42, " kWh ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "p", 57);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 58)(46, "div", 59)(47, "p", 60);
    \u0275\u0275text(48, " Active ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 61);
    \u0275\u0275text(50);
    \u0275\u0275elementStart(51, "span", 62);
    \u0275\u0275text(52, "W");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 59)(54, "p", 60);
    \u0275\u0275text(55, " Apparent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p", 61);
    \u0275\u0275text(57);
    \u0275\u0275elementStart(58, "span", 62);
    \u0275\u0275text(59, "VA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 59)(61, "p", 60);
    \u0275\u0275text(62, " Reactive ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p", 61);
    \u0275\u0275text(64);
    \u0275\u0275elementStart(65, "span", 62);
    \u0275\u0275text(66, "VAR");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 59)(68, "p", 60);
    \u0275\u0275text(69, " PF ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "p", 61);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 63)(73, "div", 64)(74, "p", 65);
    \u0275\u0275text(75, "Voltage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "p", 66);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 64)(79, "p", 65);
    \u0275\u0275text(80, "Current");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "p", 66);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 64)(84, "p", 65);
    \u0275\u0275text(85, "Freq");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "p", 66);
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(88, "div", 67)(89, "div", 68)(90, "div")(91, "p", 65);
    \u0275\u0275text(92, "Last Seen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "p", 69);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "div", 70);
    \u0275\u0275element(96, "div", 71);
    \u0275\u0275elementStart(97, "button", 72);
    \u0275\u0275listener("click", function LiveConsumptionComponent_Conditional_11_For_2_Template_button_click_97_listener() {
      const sensor_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleRelay(sensor_r5));
    });
    \u0275\u0275element(98, "i");
    \u0275\u0275text(99);
    \u0275\u0275elementEnd();
    \u0275\u0275template(100, LiveConsumptionComponent_Conditional_11_For_2_Conditional_100_Template, 2, 5, "div", 44);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const sensor_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-color", ctx_r2.isSensorLive(sensor_r5) ? "rgb(var(--primary))" : "rgb(var(--danger))");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", sensor_r5.sensorName || sensor_r5.label || "Unnamed Sensor", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", sensor_r5.utilityName || "Utility", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", sensor_r5.applianceName || "No appliance assigned", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", sensor_r5.deviceName || "Device", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(14, ctx_r2.isSensorLive(sensor_r5) ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(17, sensor_r5.pulse && ctx_r2.isSensorLive(sensor_r5) ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.isSensorLive(sensor_r5) ? "rgb(var(--success))" : "rgb(var(--danger))");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", sensor_r5.facilityName || "Facility", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", sensor_r5.buildingName || "Building", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", sensor_r5.floorName || "Floor", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", sensor_r5.sectionName || "Section", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", sensor_r5.officeName || "Office", " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("opacity", ctx_r2.isSensorLive(sensor_r5) ? "1" : "0.65");
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r2.isSensorLive(sensor_r5) ? "rgb(var(--primary))" : "rgb(var(--danger))")("background-color", ctx_r2.isSensorLive(sensor_r5) ? "rgb(var(--primary) / 0.05)" : "rgb(var(--danger) / 0.05)");
    \u0275\u0275advance(8);
    \u0275\u0275styleProp("color", ctx_r2.isSensorLive(sensor_r5) ? "rgb(var(--primary))" : "rgb(var(--danger))");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sensor_r5.activeEnergy.toFixed(3), " ");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", sensor_r5.isLive ? "rgb(var(--primary))" : "rgb(var(--danger))");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sensor_r5.activePower.toFixed(1), " ");
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("color", sensor_r5.isLive ? "rgb(var(--primary))" : "rgb(var(--danger))");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sensor_r5.apparentPower.toFixed(1), " ");
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("color", sensor_r5.isLive ? "rgb(var(--primary))" : "rgb(var(--danger))");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sensor_r5.reactivePower.toFixed(1), " ");
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("color", sensor_r5.isLive ? "rgb(var(--primary))" : "rgb(var(--danger))");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sensor_r5.powerFactor.toFixed(2), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", sensor_r5.voltage.toFixed(1), " V");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", sensor_r5.current.toFixed(3), " A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", sensor_r5.frequency.toFixed(1), " Hz");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.getLastSeenText(sensor_r5));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r2.isSensorLive(sensor_r5) ? "rgb(var(--primary-100))" : "rgb(var(--danger-100))")("color", ctx_r2.isSensorLive(sensor_r5) ? "rgb(var(--primary-700))" : "rgb(var(--danger-700))");
    \u0275\u0275advance();
    \u0275\u0275classProp("is-on", ctx_r2.isRelayOn(sensor_r5));
    \u0275\u0275property("disabled", sensor_r5.isCommanding || !sensor_r5.sensorId);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.isRelayOn(sensor_r5) ? "ri-shut-down-line" : "ri-play-circle-line");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sensor_r5.isCommanding ? "Sending..." : ctx_r2.isRelayOn(sensor_r5) ? "Turn Off" : "Turn On", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(100, sensor_r5.relayState || sensor_r5.relayEnabled !== void 0 ? 100 : -1);
  }
}
function LiveConsumptionComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275repeaterCreate(1, LiveConsumptionComponent_Conditional_11_For_2_Template, 101, 51, "div", 33, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredSensors);
  }
}
var LiveConsumptionComponent = class _LiveConsumptionComponent {
  constructor(facilityService, buildingService, floorService, sectionService, officeService, deviceService, router, userService, toaster, socketService, sensorCommandService, liveAlertsService) {
    this.facilityService = facilityService;
    this.buildingService = buildingService;
    this.floorService = floorService;
    this.sectionService = sectionService;
    this.officeService = officeService;
    this.deviceService = deviceService;
    this.router = router;
    this.userService = userService;
    this.toaster = toaster;
    this.socketService = socketService;
    this.sensorCommandService = sensorCommandService;
    this.liveAlertsService = liveAlertsService;
    this.embedded = false;
    this.scopeType = "business";
    this.scopeId = "";
    this.facilities = [];
    this.buildings = [];
    this.floors = [];
    this.sections = [];
    this.offices = [];
    this.devices = [];
    this.isWaitingForLiveData = false;
    this.tenantOfficeIds = [];
    this.subscribedRooms = /* @__PURE__ */ new Set();
    this.selectedFacilityId = "";
    this.selectedBuildingId = "";
    this.selectedFloorId = "";
    this.selectedSectionId = "";
    this.selectedOfficeId = "";
    this.selectedDeviceId = "";
    this.selectedScopeType = "business";
    this.selectedScopeId = "";
    this.isLoading = false;
    this.searchText = "";
    this.sensors = [];
    this.filteredSensors = [];
    this.SENSOR_TIMEOUT = 12e3;
    this.initialized = false;
    this.subscribedRoom = null;
    this.socketEvents = [
      // Events emitted by your current Node socket server
      "sensorUpdate",
      "businessUpdate",
      "facilityUpdate",
      "buildingUpdate",
      "floorUpdate",
      "sectionUpdate",
      "officeUpdate",
      "deviceUpdate",
      // Backward compatibility / old names
      "sensorUpdates",
      "scopeUpdate",
      "liveData",
      "deviceUpdates"
    ];
    this.socketEventHandlers = /* @__PURE__ */ new Map();
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.currentUser = yield this.userService.user$;
      this.registerSocketListeners();
      this.socketService.connect();
      this.initialized = true;
      if (this.embedded) {
        this.subscribeEmbeddedScope();
      } else {
        this.selectedScopeType = "business";
        this.selectedScopeId = this.getBusinessId();
        if (this.isTenantUser()) {
          this.loadTenantOffices();
        } else if (this.selectedScopeId) {
          this.subscribeToScope("business", this.selectedScopeId);
        } else {
          console.warn("Business id not found in current user:", this.currentUser);
          this.toaster.warning("Business id not found. Live readings cannot be subscribed.");
        }
        this.loadFacilities();
      }
      this.refreshTimer = setInterval(() => {
        this.filteredSensors = [...this.filteredSensors];
      }, 1e3);
    });
  }
  ngOnChanges(changes) {
    if (!this.initialized || !this.embedded)
      return;
    if (changes["scopeType"] || changes["scopeId"] || changes["embedded"]) {
      this.subscribeEmbeddedScope();
    }
  }
  subscribeEmbeddedScope() {
    const id = String(this.scopeId || "").trim();
    if (!id)
      return;
    this.searchText = "";
    this.subscribeToScope(this.scopeType, id);
  }
  ngOnDestroy() {
    clearInterval(this.refreshTimer);
    if (this.subscribedRoom) {
      this.unsubscribeRoom(this.subscribedRoom);
      this.subscribedRoom = null;
    }
    this.socketEventHandlers.forEach((handler, event) => this.socketService.off(event, handler));
    this.socketEventHandlers.clear();
  }
  get isSocketConnected() {
    return this.socketService.isConnected();
  }
  isTenantUser() {
    return Number(this.currentUser?.userTypeLevel) === 2;
  }
  isBusinessUser() {
    return Number(this.currentUser?.userTypeLevel) === 1;
  }
  getUserId() {
    return String(this.currentUser?.userId ?? this.currentUser?.user_id ?? this.currentUser?.id ?? "").trim();
  }
  loadTenantOffices() {
    this.isLoading = true;
    const userId = this.getUserId();
    this.officeService.getOfficeByTenantId(userId).subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.success === false) {
          this.toaster.error(res.remarks || "Failed to load tenant offices");
          return;
        }
        this.offices = res.data ?? [];
        this.tenantOfficeIds = this.offices.map((x) => String(x.officeId));
        this.subscribeToTenantOffices();
      },
      error: () => {
        this.isLoading = false;
        this.offices = [];
        this.tenantOfficeIds = [];
        this.toaster.error("Failed to load tenant offices");
      }
    });
  }
  subscribeToTenantOffices() {
    this.unsubscribeAllRooms();
    this.selectedScopeType = "office";
    this.selectedScopeId = "tenant-offices";
    this.sensors = [];
    this.filteredSensors = [];
    this.isWaitingForLiveData = true;
    this.tenantOfficeIds.forEach((officeId) => {
      const room = `office:${officeId}`;
      this.subscribedRooms.add(room);
      this.emitSocket("subscribe-office", officeId);
    });
    console.log("\u2705 Tenant subscribed offices:", this.tenantOfficeIds);
  }
  unsubscribeAllRooms() {
    this.subscribedRooms.forEach((room) => this.unsubscribeRoom(room));
    this.subscribedRooms.clear();
    this.subscribedRoom = null;
  }
  loadFacilities() {
    this.isLoading = true;
    this.facilityService.getFacilities().subscribe({
      next: (res) => {
        this.isLoading = false;
        if (res.success === false) {
          this.toaster.error(res.remarks || "Failed to load facilities");
          return;
        }
        this.facilities = res.data ?? [];
      },
      error: () => {
        this.isLoading = false;
        this.facilities = [];
        this.toaster.error("Failed to load facilities");
      }
    });
  }
  onFacilityChange() {
    this.resetBelow("facility");
    if (!this.selectedFacilityId) {
      this.subscribeToScope("business", this.getBusinessId());
      return;
    }
    this.subscribeToScope("facility", this.selectedFacilityId);
    this.buildingService.getBuildingByFacilityId(this.selectedFacilityId).subscribe((res) => this.buildings = res.data || []);
  }
  onBuildingChange() {
    this.resetBelow("building");
    if (!this.selectedBuildingId) {
      this.subscribeToScope("facility", this.selectedFacilityId);
      return;
    }
    this.subscribeToScope("building", this.selectedBuildingId);
    this.floorService.getFloorByBuildingId(this.selectedBuildingId).subscribe((res) => this.floors = res.data || []);
  }
  onFloorChange() {
    this.resetBelow("floor");
    if (!this.selectedFloorId) {
      this.subscribeToScope("building", this.selectedBuildingId);
      return;
    }
    this.subscribeToScope("floor", this.selectedFloorId);
    this.sectionService.getSectionByFloorId(this.selectedFloorId).subscribe((res) => this.sections = res.data || []);
  }
  onSectionChange() {
    this.resetBelow("section");
    if (!this.selectedSectionId) {
      this.subscribeToScope("floor", this.selectedFloorId);
      return;
    }
    this.subscribeToScope("section", this.selectedSectionId);
    this.officeService.GetAvailableOfficesBySectionId(this.selectedSectionId).subscribe({
      next: (res) => {
        this.offices = res.data || [];
      },
      error: () => {
        this.offices = [];
        this.toaster.error("Failed to load offices");
      }
    });
  }
  // onOfficeChange(): void {
  //   this.resetBelow('office');
  //   if (!this.selectedOfficeId) {
  //     this.subscribeToScope('section', this.selectedSectionId);
  //     return;
  //   }
  //   this.subscribeToScope('office', this.selectedOfficeId);
  //   const service: any = this.deviceService as any;
  //   if (service.getDeviceByOfficeId) {
  //     service.getDeviceByOfficeId(this.selectedOfficeId)
  //       .subscribe((res: any) => this.devices = res.data || []);
  //   } else if (service.getDevicesByOfficeId) {
  //     service.getDevicesByOfficeId(this.selectedOfficeId)
  //       .subscribe((res: any) => this.devices = res.data || []);
  //   } else {
  //     console.warn('DeviceService has no getDeviceByOfficeId/getDevicesByOfficeId method');
  //   }
  // }
  onOfficeChange() {
    this.resetBelow("office");
    if (!this.selectedOfficeId) {
      if (this.isTenantUser()) {
        this.subscribeToTenantOffices();
      } else {
        this.subscribeToScope("section", this.selectedSectionId);
      }
      return;
    }
    this.subscribeToScope("office", this.selectedOfficeId);
    const service = this.deviceService;
    if (service.getDeviceByOfficeId) {
      service.getDeviceByOfficeId(this.selectedOfficeId).subscribe((res) => this.devices = res.data || []);
    } else if (service.getDevicesByOfficeId) {
      service.getDevicesByOfficeId(this.selectedOfficeId).subscribe((res) => this.devices = res.data || []);
    }
  }
  onDeviceChange() {
    if (!this.selectedDeviceId) {
      this.subscribeToScope("office", this.selectedOfficeId);
      return;
    }
    this.subscribeToScope("device", this.selectedDeviceId);
  }
  // private subscribeToScope(type: ScopeType, id: string): void {
  //   const cleanId = String(id || '').trim();
  //   if (!cleanId) {
  //     console.warn(`Cannot subscribe to ${type}. Empty id received.`);
  //     return;
  //   }
  //   const nextRoom = `${type}:${cleanId}`;
  //   if (this.subscribedRoom && this.subscribedRoom !== nextRoom) {
  //     this.unsubscribeRoom(this.subscribedRoom);
  //   }
  //   this.selectedScopeType = type;
  //   this.selectedScopeId = cleanId;
  //   this.subscribedRoom = nextRoom;
  //   this.sensors = [];
  //   this.filteredSensors = [];
  //   this.emitSocket(`subscribe-${type}`, cleanId);
  //   console.log('✅ Subscribed:', `subscribe-${type}`, cleanId);
  // }
  subscribeToScope(type, id) {
    this.isWaitingForLiveData = true;
    const cleanId = String(id || "").trim();
    if (!cleanId)
      return;
    this.unsubscribeAllRooms();
    const nextRoom = `${type}:${cleanId}`;
    this.selectedScopeType = type;
    this.selectedScopeId = cleanId;
    this.subscribedRoom = nextRoom;
    this.subscribedRooms.add(nextRoom);
    this.sensors = [];
    this.filteredSensors = [];
    this.subscribeSocketScope(type, cleanId);
    console.log("\u2705 Subscribed:", `subscribe-${type}`, cleanId);
  }
  unsubscribeRoom(room) {
    const [type, id] = room.split(":");
    if (!type || !id)
      return;
    this.unsubscribeSocketScope(type, id);
    console.log("\u{1F6D1} Unsubscribed:", `unsubscribe-${type}`, id);
  }
  registerSocketListeners() {
    this.socketEvents.forEach((event) => {
      const handler = (data) => {
        console.log(`========== ${event} RECEIVED ==========`);
        console.log(data);
        this.handleSocketData(data);
      };
      this.socketEventHandlers.set(event, handler);
      this.socketService.on(event, handler);
    });
    this.socketService.on("connect", () => {
      console.log("\u2705 Socket connected");
      if (this.subscribedRoom) {
        const [type, id] = this.subscribedRoom.split(":");
        this.emitSocket(`subscribe-${type}`, id);
        console.log("\u{1F501} Re-subscribed after connect:", this.subscribedRoom);
      }
    });
    this.socketService.on("reconnect", () => {
      console.log("\u2705 Socket reconnected");
      if (this.subscribedRoom) {
        const [type, id] = this.subscribedRoom.split(":");
        this.emitSocket(`subscribe-${type}`, id);
        console.log("\u{1F501} Re-subscribed after reconnect:", this.subscribedRoom);
      }
    });
    this.socketService.on("disconnect", (reason) => {
      console.warn("\u{1F6D1} Socket disconnected:", reason);
    });
  }
  subscribeSocketScope(type, id) {
    switch (type) {
      case "business":
        this.socketService.subscribeBusiness(id);
        break;
      case "facility":
        this.socketService.subscribeFacility(id);
        break;
      case "building":
        this.socketService.subscribeBuilding(id);
        break;
      case "floor":
        this.socketService.subscribeFloor(id);
        break;
      case "section":
        this.socketService.subscribeSection(id);
        break;
      case "office":
        this.socketService.subscribeOffice(id);
        break;
      case "device":
        this.socketService.subscribeDevice(id);
        break;
    }
  }
  unsubscribeSocketScope(type, id) {
    switch (type) {
      case "business":
        this.socketService.unsubscribeBusiness(id);
        break;
      case "facility":
        this.socketService.unsubscribeFacility(id);
        break;
      case "building":
        this.socketService.unsubscribeBuilding(id);
        break;
      case "floor":
        this.socketService.unsubscribeFloor(id);
        break;
      case "section":
        this.socketService.unsubscribeSection(id);
        break;
      case "office":
        this.socketService.unsubscribeOffice(id);
        break;
      case "device":
        this.socketService.unsubscribeDevice(id);
        break;
    }
  }
  handleSocketData(data) {
    const packets = Array.isArray(data) ? data : [data];
    packets.forEach((packet) => {
      const sensors = this.extractSensors(packet);
      if (!sensors.length) {
        console.warn("Socket packet received but no sensors found:", packet);
      }
      sensors.forEach((sensor) => {
        const card = this.mapSensorToCard(packet, sensor);
        if (!card.sensorId) {
          console.warn("Mapped sensor skipped because sensorId is missing:", { packet, sensor, card });
          return;
        }
        const existing = this.sensors.find((x) => x.sensorId === card.sensorId);
        if (existing) {
          Object.assign(existing, card, {
            lastSeen: Date.now(),
            pulse: true
          });
          setTimeout(() => existing.pulse = false, 900);
        } else {
          this.sensors.push(__spreadProps(__spreadValues({}, card), {
            lastSeen: Date.now(),
            pulse: true
          }));
          setTimeout(() => {
            const added = this.sensors.find((x) => x.sensorId === card.sensorId);
            if (added)
              added.pulse = false;
          }, 900);
        }
      });
    });
    this.refreshFilteredSensors();
  }
  extractSensors(packet) {
    if (packet?.sensor)
      return [packet.sensor];
    if (Array.isArray(packet?.sensors))
      return packet.sensors;
    if (Array.isArray(packet?.ss))
      return packet.ss;
    if (packet?.sensorId || packet?.sid)
      return [packet];
    return [];
  }
  mapSensorToCard(packet, sensor) {
    const chain = packet.chain || packet.sensorChain || sensor.chain || {};
    const sensorId = String(sensor.sensorId ?? sensor.sid ?? packet.sensorId ?? chain.sensorId ?? "");
    return {
      sensorId,
      sensorName: chain.sensorName ?? sensor.sensorName ?? sensor.label ?? sensor.lb,
      label: sensor.label ?? sensor.lb,
      deviceId: chain.deviceId ?? packet.deviceId ?? packet.device,
      deviceName: chain.deviceName ?? packet.deviceName ?? packet.device,
      officeId: chain.officeId,
      officeName: chain.officeName,
      sectionId: chain.sectionId,
      sectionName: chain.sectionName,
      floorId: chain.floorId,
      floorName: chain.floorName,
      buildingId: chain.buildingId,
      buildingName: chain.buildingName,
      facilityId: chain.facilityId,
      facilityName: chain.facilityName,
      businessId: chain.businessId,
      businessName: chain.businessName,
      utilityId: chain.utilityId,
      utilityName: chain.utilityName,
      applianceId: chain.applianceId,
      applianceName: chain.applianceName,
      voltage: this.toNumber(sensor.voltage ?? sensor.v),
      current: this.toNumber(sensor.current ?? sensor.c),
      activePower: this.toNumber(sensor.activePower ?? sensor.acp ?? sensor.power),
      reactivePower: this.toNumber(sensor.reactivePower ?? sensor.rep),
      apparentPower: this.toNumber(sensor.apparentPower ?? sensor.app),
      powerFactor: this.toNumber(sensor.powerFactor ?? sensor.pf),
      frequency: this.toNumber(sensor.frequency ?? sensor.f),
      activeEnergy: this.toNumber(sensor.activeEnergy ?? sensor.energyKwh ?? sensor.energy_kwh ?? sensor.ekwh ?? sensor.energyWh ?? sensor.energy_wh ?? sensor.ewh),
      // If packet reached this component, treat it as live unless server explicitly says false.
      isLive: Boolean(sensor.isLive ?? sensor.live ?? true),
      relayState: sensor.relayState ?? sensor.rs ?? null,
      relayEnabled: sensor.relayEnabled ?? sensor.re ?? void 0,
      lastSeen: Date.now(),
      pulse: true,
      raw: packet
    };
  }
  emitSocket(event, data) {
    const svc = this.socketService;
    console.log("\u{1F4E1} Socket emit:", event, data);
    if (typeof svc.emit === "function") {
      svc.emit(event, data);
      return;
    }
    if (svc.socket?.emit) {
      svc.socket.emit(event, data);
      return;
    }
    if (event === "subscribe-device" && typeof svc.subscribeDevice === "function") {
      svc.subscribeDevice(data);
      return;
    }
    if (event === "unsubscribe-device" && typeof svc.unsubscribeDevice === "function") {
      svc.unsubscribeDevice(data);
      return;
    }
    console.warn("SocketService does not expose emit/socket.emit for:", event);
  }
  searchSensors() {
    this.refreshFilteredSensors();
  }
  refreshFilteredSensors() {
    const term = this.searchText.toLowerCase().trim();
    if (!term) {
      this.filteredSensors = [...this.sensors];
      return;
    }
    this.filteredSensors = this.sensors.filter((x) => x.sensorName?.toLowerCase().includes(term) || x.label?.toLowerCase().includes(term) || x.applianceName?.toLowerCase().includes(term) || x.deviceName?.toLowerCase().includes(term) || x.officeName?.toLowerCase().includes(term) || x.utilityName?.toLowerCase().includes(term) || x.businessName?.toLowerCase().includes(term) || x.facilityName?.toLowerCase().includes(term) || x.buildingName?.toLowerCase().includes(term) || x.floorName?.toLowerCase().includes(term) || x.sectionName?.toLowerCase().includes(term));
  }
  isSensorLive(sensor) {
    return Date.now() - sensor.lastSeen < this.SENSOR_TIMEOUT;
  }
  getApplianceLabel(sensor) {
    return sensor.applianceName || sensor.sensorName || sensor.deviceName || "Unassigned appliance";
  }
  isRelayOn(sensor) {
    const state = String(sensor.relayState || "").trim().toUpperCase();
    if (["ON", "POWER_ON", "STANDBY", "TRUE", "1"].includes(state)) {
      return true;
    }
    if (["OFF", "POWER_OFF", "FALSE", "0"].includes(state)) {
      return false;
    }
    return Boolean(sensor.relayEnabled);
  }
  getRelayStateText(sensor) {
    const state = String(sensor.relayState || "").trim().toUpperCase();
    if (state === "STANDBY") {
      return "STANDBY";
    }
    return this.isRelayOn(sensor) ? "ON" : "OFF";
  }
  toggleRelay(sensor) {
    if (!sensor.sensorId || sensor.isCommanding) {
      return;
    }
    const command = this.isRelayOn(sensor) ? "OFF" : "ON";
    const action = command === "ON" ? "turn on" : "turn off";
    const applianceName = this.getApplianceLabel(sensor);
    const confirmed = window.confirm(`Do you want to ${action} ${applianceName}?`);
    if (!confirmed) {
      return;
    }
    sensor.isCommanding = true;
    this.sensorCommandService.sendRelayCommand({
      sensorId: sensor.sensorId,
      command,
      reason: `live_consumption_manual_${command.toLowerCase()}`
    }).subscribe({
      next: (res) => {
        sensor.isCommanding = false;
        if (!res.success) {
          this.toaster.error(res.remarks || `Failed to ${action} appliance`);
          return;
        }
        this.applyRelayState(sensor, command);
        if (command === "OFF") {
          this.liveAlertsService.resolveIdleAlertForSensor(sensor.sensorId);
        }
        this.toaster.success(`${applianceName} ${command === "ON" ? "turned on" : "turned off"}`);
      },
      error: () => {
        sensor.isCommanding = false;
        this.toaster.error(`Failed to ${action} appliance`);
      }
    });
  }
  applyRelayState(sensor, command) {
    sensor.relayState = command;
    sensor.relayEnabled = command === "ON";
    this.refreshFilteredSensors();
  }
  getLastSeenText(sensor) {
    if (!sensor.lastSeen)
      return "No data";
    const seconds = Math.floor((Date.now() - sensor.lastSeen) / 1e3);
    if (seconds < 5)
      return "Just now";
    if (seconds < 60)
      return `${seconds} sec ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60)
      return `${minutes} min ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours} hr ago`;
  }
  getScopeLabel() {
    return `${this.selectedScopeType.toUpperCase()} LIVE VIEW`;
  }
  getScopeText() {
    return this.selectedScopeId ? `${this.selectedScopeType}:${this.selectedScopeId}` : "No scope selected";
  }
  trackSensor(index, sensor) {
    return sensor.sensorId || String(index);
  }
  resetBelow(level) {
    if (level === "facility") {
      this.selectedBuildingId = "";
      this.selectedFloorId = "";
      this.selectedSectionId = "";
      this.selectedOfficeId = "";
      this.selectedDeviceId = "";
      this.buildings = [];
      this.floors = [];
      this.sections = [];
      this.offices = [];
      this.devices = [];
    }
    if (level === "building") {
      this.selectedFloorId = "";
      this.selectedSectionId = "";
      this.selectedOfficeId = "";
      this.selectedDeviceId = "";
      this.floors = [];
      this.sections = [];
      this.offices = [];
      this.devices = [];
    }
    if (level === "floor") {
      this.selectedSectionId = "";
      this.selectedOfficeId = "";
      this.selectedDeviceId = "";
      this.sections = [];
      this.offices = [];
      this.devices = [];
    }
    if (level === "section") {
      this.selectedOfficeId = "";
      this.selectedDeviceId = "";
      this.offices = [];
      this.devices = [];
    }
    if (level === "office") {
      this.selectedDeviceId = "";
      this.devices = [];
    }
  }
  getBusinessId() {
    return String(this.currentUser?.businessId ?? this.currentUser?.fkBusiness ?? this.currentUser?.fk_business ?? this.currentUser?.business?.businessId ?? this.currentUser?.business?.business_id ?? "").trim();
  }
  clearFilters() {
    if (this.subscribedRoom) {
      this.unsubscribeRoom(this.subscribedRoom);
    }
    this.selectedFacilityId = "";
    this.selectedBuildingId = "";
    this.selectedFloorId = "";
    this.selectedSectionId = "";
    this.selectedOfficeId = "";
    this.selectedDeviceId = "";
    this.buildings = [];
    this.floors = [];
    this.sections = [];
    this.offices = [];
    this.devices = [];
    this.searchText = "";
    this.sensors = [];
    this.filteredSensors = [];
    this.selectedScopeType = "business";
    this.selectedScopeId = this.getBusinessId();
    this.subscribeToScope("business", this.selectedScopeId);
    console.log("\u{1F504} Reset to Business Scope:", this.selectedScopeId);
  }
  toNumber(value) {
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
  }
  static {
    this.\u0275fac = function LiveConsumptionComponent_Factory(t) {
      return new (t || _LiveConsumptionComponent)(\u0275\u0275directiveInject(FacilityService), \u0275\u0275directiveInject(BuildingService), \u0275\u0275directiveInject(FloorService), \u0275\u0275directiveInject(SectionService), \u0275\u0275directiveInject(OfficeService), \u0275\u0275directiveInject(DeviceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(SocketService), \u0275\u0275directiveInject(SensorCommandService), \u0275\u0275directiveInject(LiveAlertsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LiveConsumptionComponent, selectors: [["app-live-consumption"]], inputs: { embedded: "embedded", scopeType: "scopeType", scopeId: "scopeId" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 12, vars: 5, consts: [[1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mb-6", 3, "ngClass"], [1, "flex", "flex-col", "gap-3", "px-4", "py-3", "border-b", "border-[rgb(var(--input-border))]", "md:flex-row", "md:items-center", "md:justify-between"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "text-[rgb(var(--text-muted))]"], [1, "rounded-full", "bg-[rgb(var(--primary))]/10", "px-2", "py-0.5", "text-xs", "font-semibold", "text-[rgb(var(--primary))]"], [1, "w-full", "md:w-72"], ["type", "text", "placeholder", "Search sensor, device, office...", 1, "yx-input", "w-full", "rounded-lg", "border", "px-3", "py-2", "text-xs", "border-[rgb(var(--input-border))]", "focus:border-[rgb(var(--primary))]", "focus:ring-1", "focus:ring-[rgb(var(--primary))]", 3, "ngModelChange", "input", "ngModel"], [1, "flex", "flex-col", "items-center", "justify-center", "px-6", "py-14", "text-center"], [1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-3", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-xl", "md:text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-xs", "md:text-sm", "text-white/80", "max-w-2xl"], [1, "rounded-md", "bg-[rgb(var(--light))]", "shadow-md", "mx-5", "p-4", "mb-5"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "xl:grid-cols-6", "gap-4"], ["labelKey", "officeName", "valueKey", "officeId", "placeholder", "Office", 3, "valueChange", "items", "enableSearch", "value", "disabled"], ["labelKey", "deviceName", "valueKey", "deviceId", "placeholder", "Device", 3, "valueChange", "items", "enableSearch", "value", "disabled"], [1, "mt-4", "flex", "flex-col", "gap-3", "lg:flex-row", "lg:items-center", "lg:justify-between"], [1, "flex", "flex-col", "gap-2", "md:flex-row", "md:items-center"], ["labelKey", "facilityName", "valueKey", "facilityId", "placeholder", "Facility", 3, "valueChange", "items", "enableSearch", "value"], ["labelKey", "buildingName", "valueKey", "buildingId", "placeholder", "Building", 3, "valueChange", "items", "enableSearch", "value", "disabled"], ["labelKey", "floorName", "valueKey", "floorId", "placeholder", "Floor", 3, "valueChange", "items", "enableSearch", "value", "disabled"], ["labelKey", "sectionName", "valueKey", "sectionId", "placeholder", "Section", 3, "valueChange", "items", "enableSearch", "value", "disabled"], [1, "flex", "justify-center"], [1, "flex", "items-end", "gap-2", "h-10"], [1, "h-3", "w-3", "rounded-full", "bg-[rgb(var(--primary))]", "animate-bounce"], [1, "h-3", "w-3", "rounded-full", "bg-[rgb(var(--primary))]", "animate-bounce", "[animation-delay:150ms]"], [1, "h-3", "w-3", "rounded-full", "bg-[rgb(var(--primary))]", "animate-bounce", "[animation-delay:300ms]"], [1, "mt-5", "text-base", "font-semibold", "text-[rgb(var(--default-text-color))]"], [1, "mt-2", "max-w-md", "text-sm", "text-[rgb(var(--text-muted))]"], [1, "mt-4", "flex", "items-center", "gap-2", "rounded-full", "border", "border-[rgb(var(--input-border))]", "px-3", "py-1.5", "text-xs", "text-[rgb(var(--text-muted))]"], [1, "h-2", "w-2", "rounded-full", "animate-pulse"], [1, "grid", "gap-4", "p-4", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "2xl:grid-cols-4"], [1, "rounded-xl", "border", "overflow-hidden", "transition-all", "duration-300", "hover:-translate-y-0.5", "hover:shadow-lg", 2, "background", "rgb(var(--light))", 3, "border-color"], [1, "rounded-xl", "border", "overflow-hidden", "transition-all", "duration-300", "hover:-translate-y-0.5", "hover:shadow-lg", 2, "background", "rgb(var(--light))"], [1, "px-3", "py-3", "border-b", "border-[rgb(var(--input-border))]"], [1, "flex", "items-start", "justify-between", "gap-2"], [1, "min-w-0", "flex-1"], [1, "flex", "items-center", "gap-1.5", "min-w-0"], [1, "truncate", "text-sm", "font-semibold", "text-[rgb(var(--default-text-color))]"], [1, "shrink-0", "text-[9px]", "px-1.5", "py-0.5", "rounded-full", "bg-[rgb(var(--primary))]", "text-white"], [1, "mt-0.5", "text-[10px]", "text-[rgb(var(--primary))]", "truncate"], [1, "mt-0.5", "text-[10px]", "text-[rgb(var(--text-muted))]", "truncate"], [1, "flex", "items-center", "gap-1.5", "shrink-0"], [1, "flex", "items-center", "gap-1", "rounded-full", "px-2", "py-0.5", "text-[9px]", "font-medium", 3, "background-color", "color"], [1, "relative"], [1, "absolute", "inset-0", "rounded-full", "animate-ping", 3, "background-color"], [1, "relative", "block", "h-2.5", "w-2.5", "rounded-full"], [1, "mt-2", "rounded-md", "bg-[rgb(var(--light))]/60", "px-2", "py-1.5"], [1, "text-[10px]", "leading-4", "text-[rgb(var(--text-muted))]", "break-words"], [1, "mx-1", "text-[rgb(var(--primary))]"], [1, "p-3", "transition-all", "duration-300"], [1, "rounded-lg", "px-3", "py-2.5", "border"], [1, "flex", "items-end", "justify-between", "gap-3"], [1, "text-[9px]", "uppercase", "tracking-[0.2em]", "text-[rgb(var(--text-muted))]"], [1, "ti", "ti-activity-heartbeat", "text-xs", "text-[rgb(var(--primary))]"], [1, "mt-0.5", "text-[10px]", "text-[rgb(var(--text-muted))]"], [1, "text-[24px]", "leading-none", "tracking-[0.05em]", 2, "font-family", "'Digital-7', monospace"], [1, "grid", "grid-cols-4", "gap-2", "mt-2"], [1, "rounded-lg", "border", "border-[rgb(var(--primary-200))]", "px-2", "py-2", "text-center"], [1, "text-[9px]", "uppercase", "text-[rgb(var(--text-muted))]"], [1, "mt-1", "text-[15px]", "font-semibold"], [1, "text-[8px]", "text-[rgb(var(--text-muted))]"], [1, "grid", "grid-cols-3", "gap-2", "mt-2", "text-center"], [1, "rounded-md", "border", "border-[rgb(var(--primary-200))]", "px-2", "py-1.5"], [1, "text-[9px]", "text-[rgb(var(--text-muted))]"], [1, "text-xs", "font-semibold"], [1, "border-t", "border-[rgb(var(--input-border))]", "px-3", "py-2"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "text-[11px]", "font-medium"], [1, "flex", "flex-wrap", "justify-end", "gap-1.5"], [1, "flex", "items-center", "gap-1", "rounded-full", "px-2", "py-0.5", "text-[9px]", "font-medium"], ["type", "button", 1, "live-relay-action", 3, "click", "disabled"], [1, "ti", "ti-wifi"], [1, "ti", "ti-wifi-off"], [1, "absolute", "inset-0", "rounded-full", "animate-ping"]], template: function LiveConsumptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, LiveConsumptionComponent_Conditional_0_Template, 15, 9);
        \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "span", 3);
        \u0275\u0275text(5, " Total Sensors: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function LiveConsumptionComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("input", function LiveConsumptionComponent_Template_input_input_9_listener() {
          return ctx.searchSensors();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(10, LiveConsumptionComponent_Conditional_10_Template, 13, 3, "div", 7)(11, LiveConsumptionComponent_Conditional_11_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, !ctx.embedded ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", ctx.embedded ? "mx-0" : "mx-5");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.filteredSensors.length, " ");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance();
        \u0275\u0275conditional(10, ctx.filteredSensors.length === 0 ? 10 : 11);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatSlideToggleModule,
      MaterialModuleModule,
      YxSelectComponent
    ], styles: ["\n\n.live-relay-action[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  min-height: 1.35rem;\n  border: 1px solid rgba(var(--primary), 0.35);\n  border-radius: 999px;\n  background: rgba(var(--primary), 0.08);\n  color: rgb(var(--primary));\n  font-size: 0.56rem;\n  font-weight: 700;\n  line-height: 1;\n  padding: 0.25rem 0.5rem;\n  transition:\n    opacity 160ms ease,\n    transform 160ms ease,\n    background 160ms ease;\n}\n.live-relay-action[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  background: rgba(var(--primary), 0.14);\n}\n.live-relay-action.is-on[_ngcontent-%COMP%] {\n  border-color: rgba(var(--danger), 0.35);\n  background: rgba(var(--danger), 0.08);\n  color: rgb(var(--danger));\n}\n.live-relay-action[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.58;\n}\n/*# sourceMappingURL=live-consumption.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LiveConsumptionComponent, { className: "LiveConsumptionComponent", filePath: "src\\app\\components\\dashboards\\live-consumption\\live-consumption.component.ts", lineNumber: 92 });
})();

export {
  LiveConsumptionComponent
};
//# sourceMappingURL=chunk-RXIVY263.js.map
