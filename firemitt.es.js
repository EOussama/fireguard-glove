var R = Object.defineProperty;
var U = (r, e, t) => e in r ? R(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var v = (r, e, t) => (U(r, typeof e != "symbol" ? e + "" : e, t), t);
var m = /* @__PURE__ */ ((r) => (r[r.Loaded = 0] = "Loaded", r[r.Config = 1] = "Config", r[r.AuthSucceded = 2] = "AuthSucceded", r[r.AuthFailed = 3] = "AuthFailed", r))(m || {}), u = /* @__PURE__ */ ((r) => (r[r.InvalidURL = 1] = "InvalidURL", r[r.InvalidApp = 2] = "InvalidApp", r[r.InvalidAppName = 3] = "InvalidAppName", r[r.InvalidProvider = 4] = "InvalidProvider", r[r.InvalidFirebaseConfig = 5] = "InvalidFirebaseConfig", r))(u || {});
class p extends Error {
  /**
   * @description
   * Creates a new instance of the BaseError class with the specified error message.
   *
   * @param type The type of the error.
   * @param message The error message describing the reason for the error.
   */
  constructor(t, s) {
    super(s);
    /**
     * @description
     * The type of the error.
     */
    v(this, "type");
    this.type = t, this.name = `${$.getName(u, t)}Error` ?? "BaseError";
  }
  /**
   * @description
   * Returns a string representation of the error message, prefixed with "[<errorName>]".
   *
   * @returns A formatted error message.
   */
  toString() {
    return `[${this.name}] ${this.message}.`;
  }
  /**
   * @description
   * Returns serialized error object.
   */
  toObject() {
    return {
      type: this.type,
      name: this.name,
      message: this.message
    };
  }
}
class y extends p {
  /**
   * @description
   * Creates a new instance of the InvalidURLError class with a default error message.
   * The default error message indicates that an invalid URL was provided for a Fireguard instance.
   */
  constructor() {
    super(u.InvalidURL, "Invalid URL name, please specify a valid URL for a Fireguard instance");
  }
}
class P extends p {
  /**
   * @description
   * Creates a new instance of the InvalidAppError class with a default error message.
   * The default error message indicates that Firebase initialization failed due to an invalid configuration.
   */
  constructor() {
    super(u.InvalidApp, "Invalid Firebase app, failed initializing fire base with the given configuration");
  }
}
class b extends p {
  /**
   * @description
   * Creates a new instance of the InvalidAppNameError class with a default error message.
   * The default error message indicates that an invalid app name was provided.
   */
  constructor() {
    super(u.InvalidAppName, "Invalid app name, please specify a name for your app");
  }
}
class j extends p {
  /**
   * @description
   * Creates a ne0w instance of the InvalidProviderError class with a specific error message.
   *
   * @param providerName The invalid provider name that caused the error.
   */
  constructor(e) {
    super(u.InvalidProvider, `Invalid provider, "${e}" is not a valid provider name`);
  }
}
class N extends p {
  /**
   * @description
   * Creates a new instance of the InvalidFirebaseConfigError class with a default error message.
   * The default error message indicates that Firebase initialization failed due to an invalid configuration.
   */
  constructor() {
    super(u.InvalidFirebaseConfig, "Invalid Firebase configuration");
  }
}
class $ {
  /**
   * @description
   * Returns the name for an enum value.
   *
   * @param enumType The enumurator.
   * @param enumValue The enum value.
   *
   * @returns {TUnsafe<keyof T>} A key name corresponding to the input value.
   */
  static getName(e, t) {
    return Object.keys(e).find((a) => e[a] === t);
  }
}
class I {
  /**
   * @description
   * Initializes the EventHelper with a target window.
   * 
   * This method sets the target window where the messages will be posted to.
   * 
   * @static
   * @param {Window} target - The target window to which messages will be sent.
   * @returns {boolean} Returns true if the target is successfully set, otherwise false.
   */
  static init(e) {
    return this.target = e, !!this.target;
  }
  /**
   * @description
   * Sends a message to the target window.
   * 
   * This method encodes a message of the specified event type and data, then posts it to the target window.
   * 
   * @static
   * @template T - The type of data being sent.
   * @param {EventType} type - The type of event.
   * @param {T} [data] - Optional data to be included in the event message.
   * @returns {typeof EventHelper} Returns the EventHelper class for method chaining.
   */
  static send(e, t) {
    const s = { ...t }, a = { type: e, payload: s }, d = C.encode(a);
    return this.target.postMessage(d, "*"), this;
  }
  /**
   * @description
   * Sets up an event listener for a specific event type.
   * 
   * This method listens for messages of the specified event type and executes the provided function when such an event occurs.
   * 
   * @static
   * @template T - The expected type of data in the event message.
   * @param {EventType} type - The type of event to listen for.
   * @param {(data?: T) => any} func - The function to execute when the event is received. It receives the event data as an argument.
   * @returns {typeof EventHelper} Returns the EventHelper class for method chaining.
   */
  static on(e, t) {
    const s = (a) => {
      if (a.isTrusted) {
        const d = C.decode(a.data);
        d.type === e && (t(d.payload), window.removeEventListener("message", s));
      }
    };
    return window.addEventListener("message", s), this;
  }
}
v(I, "target");
class S {
  /**
   * @description
   * Creates a `TDim` object representing dimensions, ensuring valid numeric values.
   * 
   * @static
   * @param {TUnsafe<number>} width - Potentially undefined or null width value.
   * @param {TUnsafe<number>} height - Potentially undefined or null height value.
   * @returns {TDim} The dimensions object with width and height.
   */
  static getDim(e, t) {
    const s = parseFloat((e ?? 450).toString()), a = parseFloat((t ?? 260).toString());
    return { width: s, height: a };
  }
  /**
   * @description
   * Generates a `TPos` object representing the position, using default values if necessary.
   * 
   * @static
   * @param {TUnsafe<number>} x - Potentially undefined or null x-coordinate.
   * @param {TUnsafe<number>} y - Potentially undefined or null y-coordinate.
   * @param {number} width - The width of the element, used to calculate default x-coordinate.
   * @returns {TPos} The position object with x and y coordinates.
   */
  static getPos(e, t, s) {
    const a = parseFloat((t ?? 50).toString());
    return { x: parseFloat((e ?? window.screen.width / 2 - s / 2).toString()), y: a };
  }
  /**
   * @description
   * Validates and returns a URL string, throwing an error if invalid.
   * 
   * @static
   * @param {TUnsafe<string>} url - The potentially undefined or null URL.
   * @returns {string} The validated URL string.
   * @throws {InvalidURLError} If the URL is invalid.
   */
  static getURL(e) {
    try {
      const t = new URL(e ?? "");
      if (t.protocol !== "http:" && t.protocol !== "https:")
        throw Error();
      return t.toString();
    } catch {
      throw new y();
    }
  }
  /**
   * @description
   * Creates a `TFireguardConfig` object from partial options, with fallbacks for theme and Firebase configurations.
   * 
   * @static
   * @param {TUnsafe<Partial<TFireguardOptions>>} config - The potentially undefined or null Fireguard configuration options.
   * @param {Partial<TTheme>} [fallbackTheme] - Optional fallback theme settings.
   * @returns {TFireguardConfig} The constructed Fireguard configuration object.
   * @throws {InvalidAppNameError} If the application name is invalid.
   * @throws {InvalidFirebaseConfigError} If the Firebase configuration is invalid.
   */
  static getFireguardConfig(e, t) {
    var i, l, h, w, o, F, L, c, A, x;
    const s = (e == null ? void 0 : e.name) ?? "", a = (e == null ? void 0 : e.logo) ?? "", d = {
      text: ((i = e == null ? void 0 : e.theme) == null ? void 0 : i.text) || (t == null ? void 0 : t.text) || "#1a3544",
      primary: ((l = e == null ? void 0 : e.theme) == null ? void 0 : l.primary) || (t == null ? void 0 : t.primary) || "#ffe536",
      secondary: ((h = e == null ? void 0 : e.theme) == null ? void 0 : h.secondary) || (t == null ? void 0 : t.secondary) || "#1a3544"
    }, n = (e == null ? void 0 : e.firebase) ?? {
      apiKey: ((w = e == null ? void 0 : e.firebase) == null ? void 0 : w.apiKey) ?? "",
      appId: ((o = e == null ? void 0 : e.firebase) == null ? void 0 : o.appId) ?? "",
      projectId: ((F = e == null ? void 0 : e.firebase) == null ? void 0 : F.projectId) ?? "",
      authDomain: ((L = e == null ? void 0 : e.firebase) == null ? void 0 : L.authDomain) ?? "",
      measurementId: ((c = e == null ? void 0 : e.firebase) == null ? void 0 : c.measurementId) ?? "",
      storageBucket: ((A = e == null ? void 0 : e.firebase) == null ? void 0 : A.storageBucket) ?? "",
      messagingSenderId: ((x = e == null ? void 0 : e.firebase) == null ? void 0 : x.messagingSenderId) ?? ""
    };
    if (s.length === 0)
      throw new b();
    if (Object.keys(n).length === 0)
      throw new N();
    return { name: s, logo: a, theme: d, firebase: n };
  }
  /**
   * @description
   * Initializes and returns a `TFiremittConfig` object based on the provided Firemitt options.
   * 
   * @static
   * @param {TFiremittOptions} options - The Firemitt options to initialize the configuration.
   * @returns {TFiremittConfig} The initialized Firemitt configuration object.
   */
  static init(e) {
    var n, i, l, h;
    const t = this.getURL(e.url), s = this.getDim((n = e == null ? void 0 : e.dim) == null ? void 0 : n.width, (i = e == null ? void 0 : e.dim) == null ? void 0 : i.height), a = this.getPos((l = e == null ? void 0 : e.pos) == null ? void 0 : l.x, (h = e == null ? void 0 : e.pos) == null ? void 0 : h.y, s.width), d = this.getFireguardConfig(e == null ? void 0 : e.config);
    return { url: t, dim: s, pos: a, fireguard: d };
  }
  /**
   * @description
   * Constructs a string representing window features (flags) for window.open based on the given Firemitt configuration.
   * 
   * @static
   * @param {TFiremittConfig} config - The Firemitt configuration object.
   * @returns {string} A string of window feature flags for use in window.open.
   */
  static getFlags(e) {
    return [
      `width=${e.dim.width}`,
      `height=${e.dim.height}`,
      `left=${e.pos.x}`,
      `top=${e.pos.y}`
    ].join(",");
  }
}
class C {
  /**
   * @description
   * Encodes a message into a Base64 string.
   * 
   * This static method takes a message of type `TMessage<T>` and converts it into a Base64 encoded string.
   * It first stringifies the message into JSON, and then encodes this JSON string into Base64.
   * 
   * @static
   * @template T - The type of the payload in the message.
   * @param {TMessage<T>} message - The message to be encoded.
   * @returns {string} The Base64 encoded string representation of the message.
   */
  static encode(e) {
    const t = JSON.stringify(e);
    return btoa(t);
  }
  /**
   * @description
   * Decodes a Base64 string back into a message.
   * 
   * This static method takes a Base64 encoded string and decodes it back into a message of type `TMessage<T>`.
   * It first decodes the Base64 string into a JSON string, and then parses this JSON string back into a message object.
   * 
   * @static
   * @template T - The expected type of the payload in the decoded message.
   * @param {string} base64 - The Base64 encoded string to be decoded.
   * @returns {TMessage<T>} The decoded message object.
   */
  static decode(e) {
    const t = atob(e);
    return JSON.parse(t);
  }
}
class B {
  /**
   * @description
   * Initiates authentication using Firemitt options.
   * 
   * This static method opens a new window with the Firemitt URL and sets up event listeners to handle the authentication process.
   * It listens for authentication success or failure events and resolves or rejects the promise accordingly.
   * 
   * @static
   * @param {TFiremittOptions} options - The options required to configure and initiate the Firemitt authentication process.
   * @returns {Promise<string>} A promise that resolves with the authentication token on success, or rejects with an error on failure.
   */
  static auth(e) {
    const t = S.init(e), s = S.getFlags(t), a = window.open(t.url, "_blank", s);
    return new Promise((d, n) => {
      I.init(a) && I.on(m.Loaded, () => {
        I.send(m.Config, t.fireguard).on(m.AuthSucceded, ({ token: i }) => d(i)).on(m.AuthFailed, ({ error: i }) => n(i));
      });
    });
  }
}
export {
  C as Base64helper,
  p as BaseError,
  S as ConfigHelper,
  $ as EnumHelper,
  u as ErrorType,
  I as EventHelper,
  m as EventType,
  B as FiremittHelper,
  P as InvalidAppError,
  b as InvalidAppNameError,
  N as InvalidFirebaseConfigError,
  j as InvalidProviderError,
  y as InvalidURLError
};
