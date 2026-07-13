import {
  ɵɵdefineInjectable
} from "./chunk-AVLIJGNB.js";
import {
  __spreadValues
} from "./chunk-Y6Q6HMFU.js";

// src/app/shared/services/reporting-timezone/reporting-timezone.service.ts
var ReportingTimezoneService = class _ReportingTimezoneService {
  constructor() {
    this.storageKey = "emo.reporting-timezone.confirmed";
  }
  get detectedTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  }
  get confirmedTimezone() {
    const value = localStorage.getItem(this.storageKey);
    return value && this.isSupported(value) ? value : null;
  }
  get appliedTimezone() {
    return this.confirmedTimezone || "UTC";
  }
  get isConfirmed() {
    return this.confirmedTimezone !== null;
  }
  confirm(timezone) {
    const value = (timezone || "").trim();
    if (!this.isSupported(value))
      return false;
    localStorage.setItem(this.storageKey, value);
    return true;
  }
  clear() {
    localStorage.removeItem(this.storageKey);
  }
  getSupportedTimezones() {
    const intl = Intl;
    const supported = intl.supportedValuesOf?.("timeZone") || [];
    const values = supported.length ? supported : [
      "UTC",
      "Asia/Karachi",
      "Asia/Dubai",
      "Asia/Kolkata",
      "Europe/London",
      "America/New_York",
      "Australia/Sydney"
    ];
    return values.includes("UTC") ? values : ["UTC", ...values];
  }
  formatTimestamp(value, options) {
    const date = value instanceof Date ? value : new Date(value);
    if (!Number.isFinite(date.getTime()))
      return "";
    return new Intl.DateTimeFormat("en-GB", __spreadValues({
      timeZone: this.appliedTimezone,
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }, options)).format(date);
  }
  isSupported(timezone) {
    if (!timezone)
      return false;
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: timezone }).format();
      return true;
    } catch {
      return false;
    }
  }
  static {
    this.\u0275fac = function ReportingTimezoneService_Factory(t) {
      return new (t || _ReportingTimezoneService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportingTimezoneService, factory: _ReportingTimezoneService.\u0275fac, providedIn: "root" });
  }
};

export {
  ReportingTimezoneService
};
//# sourceMappingURL=chunk-LMRTHEWX.js.map
