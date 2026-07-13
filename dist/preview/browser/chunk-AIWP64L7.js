import {
  environment
} from "./chunk-LJGINEDX.js";
import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-AVLIJGNB.js";

// src/app/components/dashboards/crm/sensor-command.service.ts
var SensorCommandService = class _SensorCommandService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl + "/SensorCommand";
  }
  sendRelayCommand(model) {
    return this.http.post(`${this.baseUrl}/Relay`, model);
  }
  static {
    this.\u0275fac = function SensorCommandService_Factory(t) {
      return new (t || _SensorCommandService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SensorCommandService, factory: _SensorCommandService.\u0275fac, providedIn: "root" });
  }
};

export {
  SensorCommandService
};
//# sourceMappingURL=chunk-AIWP64L7.js.map
