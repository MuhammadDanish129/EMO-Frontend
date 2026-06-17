import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-R5AMMNLH.js";
import {
  __async
} from "./chunk-6EVL5ZQD.js";

// src/app/shared/crypto.service.ts
var WebCryptoService = class _WebCryptoService {
  constructor() {
    this.secretKey = "enexol$2024!";
  }
  getKey() {
    return __async(this, null, function* () {
      const enc = new TextEncoder();
      const keyData = enc.encode(this.secretKey.padEnd(32, "0").substring(0, 32));
      return yield crypto.subtle.importKey("raw", keyData, "AES-GCM", false, ["encrypt", "decrypt"]);
    });
  }
  encrypt(data) {
    return __async(this, null, function* () {
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const key = yield this.getKey();
      const encoded = new TextEncoder().encode(JSON.stringify(data));
      const encrypted = yield crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, encoded);
      const encryptedData = new Uint8Array(encrypted);
      const fullData = new Uint8Array(iv.length + encryptedData.length);
      fullData.set(iv, 0);
      fullData.set(encryptedData, iv.length);
      return btoa(String.fromCharCode(...fullData));
    });
  }
  decrypt(encryptedStr) {
    return __async(this, null, function* () {
      const fullData = Uint8Array.from(atob(encryptedStr), (c) => c.charCodeAt(0));
      const iv = fullData.slice(0, 12);
      const data = fullData.slice(12);
      const key = yield this.getKey();
      const decrypted = yield crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data);
      const decoded = new TextDecoder().decode(decrypted);
      return JSON.parse(decoded);
    });
  }
  static {
    this.\u0275fac = function WebCryptoService_Factory(t) {
      return new (t || _WebCryptoService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WebCryptoService, factory: _WebCryptoService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/services/user/user.service.ts
var UserService = class _UserService {
  /**
   * Constructor
   */
  constructor(cryptoService) {
    this.cryptoService = cryptoService;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for user (decrypting the encrypted data)
   */
  get user$() {
    const encryptedUser = localStorage.getItem("auth_user");
    if (encryptedUser) {
      return this.cryptoService.decrypt(encryptedUser).then((decryptedUser) => decryptedUser).catch((error) => {
        console.error("Error decrypting user data", error);
        return null;
      });
    }
    return Promise.resolve(null);
  }
  get avatar$() {
    return localStorage.getItem("userAvatar") ?? "";
  }
  /**
   * Setter for user (encrypting the user data before storing)
   *
   * @param value
   */
  set user(value) {
    if (value) {
      this.cryptoService.encrypt(value).then((encryptedData) => {
        localStorage.setItem("auth_user", encryptedData);
      });
    } else {
      localStorage.removeItem("auth_user");
    }
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get the current logged in user data
   */
  get() {
    return __async(this, null, function* () {
      return yield this.user$;
    });
  }
  /**
   * Update the user
   *
   * @param user
   */
  update(user) {
    this.user = user;
  }
  static {
    this.\u0275fac = function UserService_Factory(t) {
      return new (t || _UserService)(\u0275\u0275inject(WebCryptoService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
  }
};

export {
  WebCryptoService,
  UserService
};
//# sourceMappingURL=chunk-H6LTRMYQ.js.map
