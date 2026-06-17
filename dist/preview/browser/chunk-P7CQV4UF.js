import {
  ManagementService
} from "./chunk-TEI4X4OW.js";
import {
  MaterialModuleModule
} from "./chunk-OKZQW6PV.js";
import "./chunk-OWIRED5M.js";
import {
  YxSelectComponent
} from "./chunk-VUCKRGWV.js";
import {
  UserService
} from "./chunk-H6LTRMYQ.js";
import {
  Router
} from "./chunk-J4QH6UQS.js";
import "./chunk-YGYCE7FQ.js";
import "./chunk-5JUZCUNR.js";
import {
  MatSlideToggleModule
} from "./chunk-LVRCF6MZ.js";
import "./chunk-L4J3DKML.js";
import {
  ToastrService
} from "./chunk-5USDJHRC.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor,
  ReactiveFormsModule
} from "./chunk-3FUH7QM2.js";
import {
  environment
} from "./chunk-LJGINEDX.js";
import "./chunk-6U6LEG24.js";
import {
  CommonModule,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  HttpClient,
  Injectable,
  InjectionToken,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  Renderer2,
  forwardRef,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-R5AMMNLH.js";
import {
  __async
} from "./chunk-6EVL5ZQD.js";

// node_modules/flatpickr/dist/esm/types/options.js
var HOOKS = [
  "onChange",
  "onClose",
  "onDayCreate",
  "onDestroy",
  "onKeyDown",
  "onMonthChange",
  "onOpen",
  "onParseConfig",
  "onReady",
  "onValueUpdate",
  "onYearChange",
  "onPreCalendarPosition"
];
var defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: function(err) {
    return typeof console !== "undefined" && console.warn(err);
  },
  getWeek: function(givenDate) {
    var date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: /* @__PURE__ */ new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: void 0,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};

// node_modules/flatpickr/dist/esm/l10n/default.js
var english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  },
  months: {
    shorthand: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    longhand: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function(nth) {
    var s = nth % 100;
    if (s > 3 && s < 21)
      return "th";
    switch (s % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
var default_default = english;

// node_modules/flatpickr/dist/esm/utils/index.js
var pad = function(number, length) {
  if (length === void 0) {
    length = 2;
  }
  return ("000" + number).slice(length * -1);
};
var int = function(bool) {
  return bool === true ? 1 : 0;
};
function debounce(fn, wait) {
  var t;
  return function() {
    var _this = this;
    var args = arguments;
    clearTimeout(t);
    t = setTimeout(function() {
      return fn.apply(_this, args);
    }, wait);
  };
}
var arrayify = function(obj) {
  return obj instanceof Array ? obj : [obj];
};

// node_modules/flatpickr/dist/esm/utils/dom.js
function toggleClass(elem, className, bool) {
  if (bool === true)
    return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  var e = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e.className = className;
  if (content !== void 0)
    e.textContent = content;
  return e;
}
function clearNode(node) {
  while (node.firstChild)
    node.removeChild(node.firstChild);
}
function findParent(node, condition) {
  if (condition(node))
    return node;
  else if (node.parentNode)
    return findParent(node.parentNode, condition);
  return void 0;
}
function createNumberInput(inputClassName, opts) {
  var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }
  if (opts !== void 0)
    for (var key in opts)
      numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }
    return event.target;
  } catch (error) {
    return event.target;
  }
}

// node_modules/flatpickr/dist/esm/utils/formatting.js
var doNothing = function() {
  return void 0;
};
var monthToStr = function(monthNumber, shorthand, locale) {
  return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = {
  D: doNothing,
  F: function(dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  H: function(dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  J: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  K: function(dateObj, amPM, locale) {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function(dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: function(_, unixSeconds) {
    return new Date(parseFloat(unixSeconds) * 1e3);
  },
  W: function(dateObj, weekNum, locale) {
    var weekNumber = parseInt(weekNum);
    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: function(dateObj, year) {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: function(_, ISODate) {
    return new Date(ISODate);
  },
  d: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  h: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  i: function(dateObj, minutes) {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: function(_, unixMillSeconds) {
    return new Date(parseFloat(unixMillSeconds));
  },
  w: doNothing,
  y: function(dateObj, year) {
    dateObj.setFullYear(2e3 + parseFloat(year));
  }
};
var tokenRegex = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
var formats = {
  Z: function(date) {
    return date.toISOString();
  },
  D: function(date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function(date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function(date, locale, options) {
    return pad(formats.h(date, locale, options));
  },
  H: function(date) {
    return pad(date.getHours());
  },
  J: function(date, locale) {
    return locale.ordinal !== void 0 ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: function(date, locale) {
    return locale.amPM[int(date.getHours() > 11)];
  },
  M: function(date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: function(date) {
    return pad(date.getSeconds());
  },
  U: function(date) {
    return date.getTime() / 1e3;
  },
  W: function(date, _, options) {
    return options.getWeek(date);
  },
  Y: function(date) {
    return pad(date.getFullYear(), 4);
  },
  d: function(date) {
    return pad(date.getDate());
  },
  h: function(date) {
    return date.getHours() % 12 ? date.getHours() % 12 : 12;
  },
  i: function(date) {
    return pad(date.getMinutes());
  },
  j: function(date) {
    return date.getDate();
  },
  l: function(date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: function(date) {
    return pad(date.getMonth() + 1);
  },
  n: function(date) {
    return date.getMonth() + 1;
  },
  s: function(date) {
    return date.getSeconds();
  },
  u: function(date) {
    return date.getTime();
  },
  w: function(date) {
    return date.getDay();
  },
  y: function(date) {
    return String(date.getFullYear()).substring(2);
  }
};

// node_modules/flatpickr/dist/esm/utils/dates.js
var createDateFormatter = function(_a) {
  var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
  return function(dateObj, frmt, overrideLocale) {
    var locale = overrideLocale || l10n;
    if (config.formatDate !== void 0 && !isMobile) {
      return config.formatDate(dateObj, frmt, locale);
    }
    return frmt.split("").map(function(c, i, arr) {
      return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
    }).join("");
  };
};
var createDateParser = function(_a) {
  var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
  return function(date, givenFormat, timeless, customLocale) {
    if (date !== 0 && !date)
      return void 0;
    var locale = customLocale || l10n;
    var parsedDate;
    var dateOrig = date;
    if (date instanceof Date)
      parsedDate = new Date(date.getTime());
    else if (typeof date !== "string" && date.toFixed !== void 0)
      parsedDate = new Date(date);
    else if (typeof date === "string") {
      var format = givenFormat || (config || defaults).dateFormat;
      var datestr = String(date).trim();
      if (datestr === "today") {
        parsedDate = /* @__PURE__ */ new Date();
        timeless = true;
      } else if (config && config.parseDate) {
        parsedDate = config.parseDate(date, format);
      } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
        parsedDate = new Date(date);
      } else {
        var matched = void 0, ops = [];
        for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
          var token = format[i];
          var isBackSlash = token === "\\";
          var escaped = format[i - 1] === "\\" || isBackSlash;
          if (tokenRegex[token] && !escaped) {
            regexStr += tokenRegex[token];
            var match = new RegExp(regexStr).exec(date);
            if (match && (matched = true)) {
              ops[token !== "Y" ? "push" : "unshift"]({
                fn: revFormat[token],
                val: match[++matchIndex]
              });
            }
          } else if (!isBackSlash)
            regexStr += ".";
        }
        parsedDate = !config || !config.noCalendar ? new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
        ops.forEach(function(_a2) {
          var fn = _a2.fn, val = _a2.val;
          return parsedDate = fn(parsedDate, val, locale) || parsedDate;
        });
        parsedDate = matched ? parsedDate : void 0;
      }
    }
    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
      config.errorHandler(new Error("Invalid date provided: " + dateOrig));
      return void 0;
    }
    if (timeless === true)
      parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
  };
};
function compareDates(date1, date2, timeless) {
  if (timeless === void 0) {
    timeless = true;
  }
  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }
  return date1.getTime() - date2.getTime();
}
var isBetween = function(ts, ts1, ts2) {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function(secondsSinceMidnight) {
  var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
  return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
  DAY: 864e5
};
function getDefaultHours(config) {
  var hours = config.defaultHour;
  var minutes = config.defaultMinute;
  var seconds = config.defaultSeconds;
  if (config.minDate !== void 0) {
    var minHour = config.minDate.getHours();
    var minMinutes = config.minDate.getMinutes();
    var minSeconds = config.minDate.getSeconds();
    if (hours < minHour) {
      hours = minHour;
    }
    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }
    if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
      seconds = config.minDate.getSeconds();
  }
  if (config.maxDate !== void 0) {
    var maxHr = config.maxDate.getHours();
    var maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr)
      minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes)
      seconds = config.maxDate.getSeconds();
  }
  return { hours, minutes, seconds };
}

// node_modules/flatpickr/dist/esm/utils/polyfills.js
if (typeof Object.assign !== "function") {
  Object.assign = function(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }
    var _loop_1 = function(source2) {
      if (source2) {
        Object.keys(source2).forEach(function(key) {
          return target[key] = source2[key];
        });
      }
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
      var source = args_1[_a];
      _loop_1(source);
    }
    return target;
  };
}

// node_modules/flatpickr/dist/esm/index.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __spreadArrays = function() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
};
var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
  var self = {
    config: __assign(__assign({}, defaults), flatpickr.defaultConfig),
    l10n: default_default
  };
  self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
  self._handlers = [];
  self.pluginElements = [];
  self.loadedPlugins = [];
  self._bind = bind;
  self._setHoursFromDate = setHoursFromDate;
  self._positionCalendar = positionCalendar;
  self.changeMonth = changeMonth;
  self.changeYear = changeYear;
  self.clear = clear;
  self.close = close;
  self.onMouseOver = onMouseOver;
  self._createElement = createElement;
  self.createDay = createDay;
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.updateValue = updateValue;
  self.open = open;
  self.redraw = redraw;
  self.set = set;
  self.setDate = setDate;
  self.toggle = toggle;
  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth: function(month, yr) {
        if (month === void 0) {
          month = self.currentMonth;
        }
        if (yr === void 0) {
          yr = self.currentYear;
        }
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0))
          return 29;
        return self.l10n.daysInMonth[month];
      }
    };
  }
  function init() {
    self.element = self.input = element;
    self.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self.isMobile)
      build();
    bindEvents();
    if (self.selectedDates.length || self.config.noCalendar) {
      if (self.config.enableTime) {
        setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : void 0);
      }
      updateValue(false);
    }
    setCalendarWidth();
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!self.isMobile && isSafari) {
      positionCalendar();
    }
    triggerEvent("onReady");
  }
  function getClosestActiveElement() {
    var _a;
    return ((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
  }
  function bindToInstance(fn) {
    return fn.bind(self);
  }
  function setCalendarWidth() {
    var config = self.config;
    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function() {
        if (self.calendarContainer !== void 0) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }
        if (self.daysContainer !== void 0) {
          var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== void 0 ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }
  function updateTime(e) {
    if (self.selectedDates.length === 0) {
      var defaultDate = self.config.minDate === void 0 || compareDates(/* @__PURE__ */ new Date(), self.config.minDate) >= 0 ? /* @__PURE__ */ new Date() : new Date(self.config.minDate.getTime());
      var defaults2 = getDefaultHours(self.config);
      defaultDate.setHours(defaults2.hours, defaults2.minutes, defaults2.seconds, defaultDate.getMilliseconds());
      self.selectedDates = [defaultDate];
      self.latestSelectedDateObj = defaultDate;
    }
    if (e !== void 0 && e.type !== "blur") {
      timeWrapper(e);
    }
    var prevValue = self._input.value;
    setHoursFromInputs();
    updateValue();
    if (self._input.value !== prevValue) {
      self._debouncedChange();
    }
  }
  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
  }
  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return hour % 12;
    }
  }
  function setHoursFromInputs() {
    if (self.hourElement === void 0 || self.minuteElement === void 0)
      return;
    var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== void 0 ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
    if (self.amPM !== void 0) {
      hours = ampm2military(hours, self.amPM.textContent);
    }
    var limitMinHours = self.config.minTime !== void 0 || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    var limitMaxHours = self.config.maxTime !== void 0 || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
    if (self.config.maxTime !== void 0 && self.config.minTime !== void 0 && self.config.minTime > self.config.maxTime) {
      var minBound = calculateSecondsSinceMidnight(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
      var maxBound = calculateSecondsSinceMidnight(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
      var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
      if (currentTime > maxBound && currentTime < minBound) {
        var result = parseSeconds(minBound);
        hours = result[0];
        minutes = result[1];
        seconds = result[2];
      }
    } else {
      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== void 0 ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours())
          minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes())
          seconds = Math.min(seconds, maxTime.getSeconds());
      }
      if (limitMinHours) {
        var minTime = self.config.minTime !== void 0 ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours() && minutes < minTime.getMinutes())
          minutes = minTime.getMinutes();
        if (minutes === minTime.getMinutes())
          seconds = Math.max(seconds, minTime.getSeconds());
      }
    }
    setHours(hours, minutes, seconds);
  }
  function setHoursFromDate(dateObj) {
    var date = dateObj || self.latestSelectedDateObj;
    if (date && date instanceof Date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }
  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== void 0) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }
    if (!self.hourElement || !self.minuteElement || self.isMobile)
      return;
    self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
    self.minuteElement.value = pad(minutes);
    if (self.amPM !== void 0)
      self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
    if (self.secondElement !== void 0)
      self.secondElement.value = pad(seconds);
  }
  function onYearInput(event) {
    var eventTarget = getEventTarget(event);
    var year = parseInt(eventTarget.value) + (event.delta || 0);
    if (year / 1e3 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }
  function bind(element2, event, handler, options) {
    if (event instanceof Array)
      return event.forEach(function(ev) {
        return bind(element2, ev, handler, options);
      });
    if (element2 instanceof Array)
      return element2.forEach(function(el) {
        return bind(el, event, handler, options);
      });
    element2.addEventListener(event, handler, options);
    self._handlers.push({
      remove: function() {
        return element2.removeEventListener(event, handler, options);
      }
    });
  }
  function triggerChange() {
    triggerEvent("onChange");
  }
  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(function(evt) {
        Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function(el) {
          return bind(el, "click", self[evt]);
        });
      });
    }
    if (self.isMobile) {
      setupMobile();
      return;
    }
    var debouncedResize = debounce(onResize, 50);
    self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
      bind(self.daysContainer, "mouseover", function(e) {
        if (self.config.mode === "range")
          onMouseOver(getEventTarget(e));
      });
    bind(self._input, "keydown", onKeyDown);
    if (self.calendarContainer !== void 0) {
      bind(self.calendarContainer, "keydown", onKeyDown);
    }
    if (!self.config.inline && !self.config.static)
      bind(window, "resize", debouncedResize);
    if (window.ontouchstart !== void 0)
      bind(window.document, "touchstart", documentClick);
    else
      bind(window.document, "mousedown", documentClick);
    bind(window.document, "focus", documentClick, { capture: true });
    if (self.config.clickOpens === true) {
      bind(self._input, "focus", self.open);
      bind(self._input, "click", self.open);
    }
    if (self.daysContainer !== void 0) {
      bind(self.monthNav, "click", onMonthNavClick);
      bind(self.monthNav, ["keyup", "increment"], onYearInput);
      bind(self.daysContainer, "click", selectDate);
    }
    if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0) {
      var selText = function(e) {
        return getEventTarget(e).select();
      };
      bind(self.timeContainer, ["increment"], updateTime);
      bind(self.timeContainer, "blur", updateTime, { capture: true });
      bind(self.timeContainer, "click", timeIncrement);
      bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== void 0)
        bind(self.secondElement, "focus", function() {
          return self.secondElement && self.secondElement.select();
        });
      if (self.amPM !== void 0) {
        bind(self.amPM, "click", function(e) {
          updateTime(e);
        });
      }
    }
    if (self.config.allowInput) {
      bind(self._input, "blur", onBlur);
    }
  }
  function jumpToDate(jumpDate, triggerChange2) {
    var jumpTo = jumpDate !== void 0 ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    var oldYear = self.currentYear;
    var oldMonth = self.currentMonth;
    try {
      if (jumpTo !== void 0) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e);
    }
    if (triggerChange2 && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    if (triggerChange2 && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }
    self.redraw();
  }
  function timeIncrement(e) {
    var eventTarget = getEventTarget(e);
    if (~eventTarget.className.indexOf("arrow"))
      incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }
  function incrementNumInput(e, delta, inputElem) {
    var target = e && getEventTarget(e);
    var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    var event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }
  function build() {
    var fragment = window.document.createDocumentFragment();
    self.calendarContainer = createElement("div", "flatpickr-calendar");
    self.calendarContainer.tabIndex = -1;
    if (!self.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self.innerContainer = createElement("div", "flatpickr-innerContainer");
      if (self.config.weekNumbers) {
        var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
        self.innerContainer.appendChild(weekWrapper);
        self.weekNumbers = weekNumbers;
        self.weekWrapper = weekWrapper;
      }
      self.rContainer = createElement("div", "flatpickr-rContainer");
      self.rContainer.appendChild(buildWeekdays());
      if (!self.daysContainer) {
        self.daysContainer = createElement("div", "flatpickr-days");
        self.daysContainer.tabIndex = -1;
      }
      buildDays();
      self.rContainer.appendChild(self.daysContainer);
      self.innerContainer.appendChild(self.rContainer);
      fragment.appendChild(self.innerContainer);
    }
    if (self.config.enableTime) {
      fragment.appendChild(buildTime());
    }
    toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
    toggleClass(self.calendarContainer, "animate", self.config.animate === true);
    toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
    self.calendarContainer.appendChild(fragment);
    var customAppend = self.config.appendTo !== void 0 && self.config.appendTo.nodeType !== void 0;
    if (self.config.inline || self.config.static) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
      if (self.config.inline) {
        if (!customAppend && self.element.parentNode)
          self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
        else if (self.config.appendTo !== void 0)
          self.config.appendTo.appendChild(self.calendarContainer);
      }
      if (self.config.static) {
        var wrapper = createElement("div", "flatpickr-wrapper");
        if (self.element.parentNode)
          self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput)
          wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }
    if (!self.config.static && !self.config.inline)
      (self.config.appendTo !== void 0 ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }
  function createDay(className, date, _dayNumber, i) {
    var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
    if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
      self.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }
    if (dateIsEnabled) {
      dayElement.tabIndex = -1;
      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self.selectedDateElem = dayElement;
        if (self.config.mode === "range") {
          toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
          toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay")
            dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }
    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date))
        dayElement.classList.add("inRange");
    }
    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && i % 7 === 6) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }
    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }
  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range")
      onMouseOver(targetNode);
  }
  function getFirstAvailableDay(delta) {
    var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    for (var m = startMonth; m != endMonth; m += delta) {
      var month = self.daysContainer.children[m];
      var startIndex = delta > 0 ? 0 : month.children.length - 1;
      var endIndex = delta > 0 ? month.children.length : -1;
      for (var i = startIndex; i != endIndex; i += delta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
          return c;
      }
    }
    return void 0;
  }
  function getNextAvailableDay(current, delta) {
    var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    var loopDelta = delta > 0 ? 1 : -1;
    for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
      var month = self.daysContainer.children[m];
      var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      var numMonthDays = month.children.length;
      for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta))
          return focusOnDayElem(c);
      }
    }
    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return void 0;
  }
  function focusOnDay(current, offset) {
    var activeElement = getClosestActiveElement();
    var dayFocused = isInView(activeElement || document.body);
    var startElem = current !== void 0 ? current : dayFocused ? activeElement : self.selectedDateElem !== void 0 && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== void 0 && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
    if (startElem === void 0) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }
  function buildMonthDays(year, month) {
    var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }
    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }
    for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }
    var dayContainer = createElement("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }
  function buildDays() {
    if (self.daysContainer === void 0) {
      return;
    }
    clearNode(self.daysContainer);
    if (self.weekNumbers)
      clearNode(self.weekNumbers);
    var frag = document.createDocumentFragment();
    for (var i = 0; i < self.config.showMonths; i++) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
    }
    self.daysContainer.appendChild(frag);
    self.days = self.daysContainer.firstChild;
    if (self.config.mode === "range" && self.selectedDates.length === 1) {
      onMouseOver();
    }
  }
  function buildMonthSwitch() {
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown")
      return;
    var shouldBuildMonth = function(month2) {
      if (self.config.minDate !== void 0 && self.currentYear === self.config.minDate.getFullYear() && month2 < self.config.minDate.getMonth()) {
        return false;
      }
      return !(self.config.maxDate !== void 0 && self.currentYear === self.config.maxDate.getFullYear() && month2 > self.config.maxDate.getMonth());
    };
    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";
    for (var i = 0; i < 12; i++) {
      if (!shouldBuildMonth(i))
        continue;
      var month = createElement("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self.currentYear, i).getMonth().toString();
      month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
      month.tabIndex = -1;
      if (self.currentMonth === i) {
        month.selected = true;
      }
      self.monthsDropdownContainer.appendChild(month);
    }
  }
  function buildMonth() {
    var container = createElement("div", "flatpickr-month");
    var monthNavFragment = window.document.createDocumentFragment();
    var monthElement;
    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = createElement("span", "cur-month");
    } else {
      self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
      self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
      bind(self.monthsDropdownContainer, "change", function(e) {
        var target = getEventTarget(e);
        var selectedMonth = parseInt(target.value, 10);
        self.changeMonth(selectedMonth - self.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self.monthsDropdownContainer;
    }
    var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
    var yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }
    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }
    var currentMonth = createElement("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container,
      yearElement,
      monthElement
    };
  }
  function buildMonths() {
    clearNode(self.monthNav);
    self.monthNav.appendChild(self.prevMonthNav);
    if (self.config.showMonths) {
      self.yearElements = [];
      self.monthElements = [];
    }
    for (var m = self.config.showMonths; m--; ) {
      var month = buildMonth();
      self.yearElements.push(month.yearElement);
      self.monthElements.push(month.monthElement);
      self.monthNav.appendChild(month.container);
    }
    self.monthNav.appendChild(self.nextMonthNav);
  }
  function buildMonthNav() {
    self.monthNav = createElement("div", "flatpickr-months");
    self.yearElements = [];
    self.monthElements = [];
    self.prevMonthNav = createElement("span", "flatpickr-prev-month");
    self.prevMonthNav.innerHTML = self.config.prevArrow;
    self.nextMonthNav = createElement("span", "flatpickr-next-month");
    self.nextMonthNav.innerHTML = self.config.nextArrow;
    buildMonths();
    Object.defineProperty(self, "_hidePrevMonthArrow", {
      get: function() {
        return self.__hidePrevMonthArrow;
      },
      set: function(bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: function() {
        return self.__hideNextMonthArrow;
      },
      set: function(bool) {
        if (self.__hideNextMonthArrow !== bool) {
          toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }
    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }
  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar)
      self.calendarContainer.classList.add("noCalendar");
    var defaults2 = getDefaultHours(self.config);
    self.timeContainer = createElement("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    var separator = createElement("span", "flatpickr-time-separator", ":");
    var hourInput = createNumberInput("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    var minuteInput = createNumberInput("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults2.hours : military2ampm(defaults2.hours));
    self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults2.minutes);
    self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
    self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
    self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
    self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
    self.hourElement.setAttribute("maxlength", "2");
    self.minuteElement.setAttribute("min", "0");
    self.minuteElement.setAttribute("max", "59");
    self.minuteElement.setAttribute("maxlength", "2");
    self.timeContainer.appendChild(hourInput);
    self.timeContainer.appendChild(separator);
    self.timeContainer.appendChild(minuteInput);
    if (self.config.time_24hr)
      self.timeContainer.classList.add("time24hr");
    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      var secondInput = createNumberInput("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults2.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }
    if (!self.config.time_24hr) {
      self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }
    return self.timeContainer;
  }
  function buildWeekdays() {
    if (!self.weekdayContainer)
      self.weekdayContainer = createElement("div", "flatpickr-weekdays");
    else
      clearNode(self.weekdayContainer);
    for (var i = self.config.showMonths; i--; ) {
      var container = createElement("div", "flatpickr-weekdaycontainer");
      self.weekdayContainer.appendChild(container);
    }
    updateWeekdays();
    return self.weekdayContainer;
  }
  function updateWeekdays() {
    if (!self.weekdayContainer) {
      return;
    }
    var firstDayOfWeek = self.l10n.firstDayOfWeek;
    var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
    }
    for (var i = self.config.showMonths; i--; ) {
      self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
    }
  }
  function buildWeeks() {
    self.calendarContainer.classList.add("hasWeeks");
    var weekWrapper = createElement("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
    var weekNumbers = createElement("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper,
      weekNumbers
    };
  }
  function changeMonth(value, isOffset) {
    if (isOffset === void 0) {
      isOffset = true;
    }
    var delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true)
      return;
    self.currentMonth += delta;
    if (self.currentMonth < 0 || self.currentMonth > 11) {
      self.currentYear += self.currentMonth > 11 ? 1 : -1;
      self.currentMonth = (self.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }
  function clear(triggerChangeEvent, toInitial) {
    if (triggerChangeEvent === void 0) {
      triggerChangeEvent = true;
    }
    if (toInitial === void 0) {
      toInitial = true;
    }
    self.input.value = "";
    if (self.altInput !== void 0)
      self.altInput.value = "";
    if (self.mobileInput !== void 0)
      self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = void 0;
    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }
    if (self.config.enableTime === true) {
      var _a = getDefaultHours(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
      setHours(hours, minutes, seconds);
    }
    self.redraw();
    if (triggerChangeEvent)
      triggerEvent("onChange");
  }
  function close() {
    self.isOpen = false;
    if (!self.isMobile) {
      if (self.calendarContainer !== void 0) {
        self.calendarContainer.classList.remove("open");
      }
      if (self._input !== void 0) {
        self._input.classList.remove("active");
      }
    }
    triggerEvent("onClose");
  }
  function destroy() {
    if (self.config !== void 0)
      triggerEvent("onDestroy");
    for (var i = self._handlers.length; i--; ) {
      self._handlers[i].remove();
    }
    self._handlers = [];
    if (self.mobileInput) {
      if (self.mobileInput.parentNode)
        self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = void 0;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config.static && self.calendarContainer.parentNode) {
        var wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
        if (wrapper.parentNode) {
          while (wrapper.firstChild)
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          wrapper.parentNode.removeChild(wrapper);
        }
      } else
        self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }
    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode)
        self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }
    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }
    [
      "_showTimeInput",
      "latestSelectedDateObj",
      "_hideNextMonthArrow",
      "_hidePrevMonthArrow",
      "__hideNextMonthArrow",
      "__hidePrevMonthArrow",
      "isMobile",
      "isOpen",
      "selectedDateElem",
      "minDateHasTime",
      "maxDateHasTime",
      "days",
      "daysContainer",
      "_input",
      "_positionElement",
      "innerContainer",
      "rContainer",
      "monthNav",
      "todayDateElem",
      "calendarContainer",
      "weekdayContainer",
      "prevMonthNav",
      "nextMonthNav",
      "monthsDropdownContainer",
      "currentMonthElement",
      "currentYearElement",
      "navigationCurrentMonth",
      "selectedDateElem",
      "config"
    ].forEach(function(k) {
      try {
        delete self[k];
      } catch (_) {
      }
    });
  }
  function isCalendarElem(elem) {
    return self.calendarContainer.contains(elem);
  }
  function documentClick(e) {
    if (self.isOpen && !self.config.inline) {
      var eventTarget_1 = getEventTarget(e);
      var isCalendarElement = isCalendarElem(eventTarget_1);
      var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
      var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
      var isIgnored = !self.config.ignoredFocusElements.some(function(elem) {
        return elem.contains(eventTarget_1);
      });
      if (lostFocus && isIgnored) {
        if (self.config.allowInput) {
          self.setDate(self._input.value, false, self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        }
        if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0 && self.input.value !== "" && self.input.value !== void 0) {
          updateTime();
        }
        self.close();
        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1)
          self.clear(false);
      }
    }
  }
  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear())
      return;
    var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;
    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }
    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }
  function isEnabled(date, timeless) {
    var _a;
    if (timeless === void 0) {
      timeless = true;
    }
    var dateToCheck = self.parseDate(date, void 0, timeless);
    if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== void 0 ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== void 0 ? timeless : !self.maxDateHasTime) > 0)
      return false;
    if (!self.config.enable && self.config.disable.length === 0)
      return true;
    if (dateToCheck === void 0)
      return false;
    var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
    for (var i = 0, d = void 0; i < array.length; i++) {
      d = array[i];
      if (typeof d === "function" && d(dateToCheck))
        return bool;
      else if (d instanceof Date && dateToCheck !== void 0 && d.getTime() === dateToCheck.getTime())
        return bool;
      else if (typeof d === "string") {
        var parsed = self.parseDate(d, void 0, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d === "object" && dateToCheck !== void 0 && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime())
        return bool;
    }
    return !bool;
  }
  function isInView(elem) {
    if (self.daysContainer !== void 0)
      return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }
  function onBlur(e) {
    var isInput = e.target === self._input;
    var valueChanged = self._input.value.trimEnd() !== getDateStr();
    if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
      self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }
  function onKeyDown(e) {
    var eventTarget = getEventTarget(e);
    var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    var allowInput = self.config.allowInput;
    var allowKeydown = self.isOpen && (!allowInput || !isInput);
    var allowInlineKeydown = self.config.inline && isInput && !allowInput;
    if (e.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        self.close();
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
      switch (e.keyCode) {
        case 13:
          if (isTimeObj) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else
            selectDate(e);
          break;
        case 27:
          e.preventDefault();
          focusAndClose();
          break;
        case 8:
        case 46:
          if (isInput && !self.config.allowInput) {
            e.preventDefault();
            self.clear();
          }
          break;
        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e.preventDefault();
            var activeElement = getClosestActiveElement();
            if (self.daysContainer !== void 0 && (allowInput === false || activeElement && isInView(activeElement))) {
              var delta_1 = e.keyCode === 39 ? 1 : -1;
              if (!e.ctrlKey)
                focusOnDay(void 0, delta_1);
              else {
                e.stopPropagation();
                changeMonth(delta_1);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement)
            self.hourElement.focus();
          break;
        case 38:
        case 40:
          e.preventDefault();
          var delta = e.keyCode === 40 ? 1 : -1;
          if (self.daysContainer && eventTarget.$i !== void 0 || eventTarget === self.input || eventTarget === self.altInput) {
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj)
              focusOnDay(void 0, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement)
              self.hourElement.focus();
            updateTime(e);
            self._debouncedChange();
          }
          break;
        case 9:
          if (isTimeObj) {
            var elems = [
              self.hourElement,
              self.minuteElement,
              self.secondElement,
              self.amPM
            ].concat(self.pluginElements).filter(function(x) {
              return x;
            });
            var i = elems.indexOf(eventTarget);
            if (i !== -1) {
              var target = elems[i + (e.shiftKey ? -1 : 1)];
              e.preventDefault();
              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
            e.preventDefault();
            self._input.focus();
          }
          break;
        default:
          break;
      }
    }
    if (self.amPM !== void 0 && eventTarget === self.amPM) {
      switch (e.key) {
        case self.l10n.amPM[0].charAt(0):
        case self.l10n.amPM[0].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;
        case self.l10n.amPM[1].charAt(0):
        case self.l10n.amPM[1].charAt(0).toLowerCase():
          self.amPM.textContent = self.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }
    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e);
    }
  }
  function onMouseOver(elem, cellClass) {
    if (cellClass === void 0) {
      cellClass = "flatpickr-day";
    }
    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled")))
      return;
    var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], void 0, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    var containsDisabled = false;
    var minRange = 0, maxRange = 0;
    for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange))
          minRange = t;
        else if (t > initialDate && (!maxRange || t < maxRange))
          maxRange = t;
      }
    }
    var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
    hoverableCells.forEach(function(dayElem) {
      var date = dayElem.dateObj;
      var timestamp = date.getTime();
      var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
      if (outOfRange) {
        dayElem.classList.add("notAllowed");
        ["inRange", "startRange", "endRange"].forEach(function(c) {
          dayElem.classList.remove(c);
        });
        return;
      } else if (containsDisabled && !outOfRange)
        return;
      ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(c) {
        dayElem.classList.remove(c);
      });
      if (elem !== void 0) {
        elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
        if (initialDate < hoverDate && timestamp === initialDate)
          dayElem.classList.add("startRange");
        else if (initialDate > hoverDate && timestamp === initialDate)
          dayElem.classList.add("endRange");
        if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate))
          dayElem.classList.add("inRange");
      }
    });
  }
  function onResize() {
    if (self.isOpen && !self.config.static && !self.config.inline)
      positionCalendar();
  }
  function open(e, positionElement) {
    if (positionElement === void 0) {
      positionElement = self._positionElement;
    }
    if (self.isMobile === true) {
      if (e) {
        e.preventDefault();
        var eventTarget = getEventTarget(e);
        if (eventTarget) {
          eventTarget.blur();
        }
      }
      if (self.mobileInput !== void 0) {
        self.mobileInput.focus();
        self.mobileInput.click();
      }
      triggerEvent("onOpen");
      return;
    } else if (self._input.disabled || self.config.inline) {
      return;
    }
    var wasOpen = self.isOpen;
    self.isOpen = true;
    if (!wasOpen) {
      self.calendarContainer.classList.add("open");
      self._input.classList.add("active");
      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }
    if (self.config.enableTime === true && self.config.noCalendar === true) {
      if (self.config.allowInput === false && (e === void 0 || !self.timeContainer.contains(e.relatedTarget))) {
        setTimeout(function() {
          return self.hourElement.select();
        }, 50);
      }
    }
  }
  function minMaxDateSetter(type) {
    return function(date) {
      var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
      var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
      if (dateObj !== void 0) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }
      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter(function(d) {
          return isEnabled(d);
        });
        if (!self.selectedDates.length && type === "min")
          setHoursFromDate(dateObj);
        updateValue();
      }
      if (self.daysContainer) {
        redraw();
        if (dateObj !== void 0)
          self.currentYearElement[type] = dateObj.getFullYear().toString();
        else
          self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== void 0 && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }
  function parseConfig() {
    var boolOpts = [
      "wrap",
      "weekNumbers",
      "allowInput",
      "allowInvalidPreload",
      "clickOpens",
      "time_24hr",
      "enableTime",
      "noCalendar",
      "altInput",
      "shorthandCurrentMonth",
      "inline",
      "static",
      "enableSeconds",
      "disableMobile"
    ];
    var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
    var formats2 = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: function() {
        return self.config._enable;
      },
      set: function(dates) {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: function() {
        return self.config._disable;
      },
      set: function(dates) {
        self.config._disable = parseDateRules(dates);
      }
    });
    var timeMode = userConfig.mode === "time";
    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
      formats2.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }
    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
      formats2.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
    }
    Object.defineProperty(self.config, "minDate", {
      get: function() {
        return self.config._minDate;
      },
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: function() {
        return self.config._maxDate;
      },
      set: minMaxDateSetter("max")
    });
    var minMaxTimeSetter = function(type) {
      return function(val) {
        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
      };
    };
    Object.defineProperty(self.config, "minTime", {
      get: function() {
        return self.config._minTime;
      },
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: function() {
        return self.config._maxTime;
      },
      set: minMaxTimeSetter("max")
    });
    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }
    Object.assign(self.config, formats2, userConfig);
    for (var i = 0; i < boolOpts.length; i++)
      self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
    HOOKS.filter(function(hook) {
      return self.config[hook] !== void 0;
    }).forEach(function(hook) {
      self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
    });
    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (var i = 0; i < self.config.plugins.length; i++) {
      var pluginConf = self.config.plugins[i](self) || {};
      for (var key in pluginConf) {
        if (HOOKS.indexOf(key) > -1) {
          self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined")
          self.config[key] = pluginConf[key];
      }
    }
    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }
    triggerEvent("onParseConfig");
  }
  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }
  function setupLocale() {
    if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined")
      self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
    self.l10n = __assign(__assign({}, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : void 0);
    tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
    tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
    tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
    tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
    tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
    var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
    if (userConfig.time_24hr === void 0 && flatpickr.defaultConfig.time_24hr === void 0) {
      self.config.time_24hr = self.l10n.time_24hr;
    }
    self.formatDate = createDateFormatter(self);
    self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
  }
  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }
    if (self.calendarContainer === void 0)
      return;
    triggerEvent("onPreCalendarPosition");
    var positionElement = customPositionElement || self._positionElement;
    var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function(acc, child) {
      return acc + child.offsetHeight;
    }, 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
    toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline)
      return;
    var left = window.pageXOffset + inputBounds.left;
    var isCenter = false;
    var isRight = false;
    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }
    toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    toggleClass(self.calendarContainer, "arrowCenter", isCenter);
    toggleClass(self.calendarContainer, "arrowRight", isRight);
    var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
    toggleClass(self.calendarContainer, "rightMost", rightMost);
    if (self.config.static)
      return;
    self.calendarContainer.style.top = top + "px";
    if (!rightMost) {
      self.calendarContainer.style.left = left + "px";
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = right + "px";
    } else {
      var doc = getDocumentStyleSheet();
      if (doc === void 0)
        return;
      var bodyWidth = window.document.body.offsetWidth;
      var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      var centerBefore = ".flatpickr-calendar.centerMost:before";
      var centerAfter = ".flatpickr-calendar.centerMost:after";
      var centerIndex = doc.cssRules.length;
      var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
      toggleClass(self.calendarContainer, "rightMost", false);
      toggleClass(self.calendarContainer, "centerMost", true);
      doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
      self.calendarContainer.style.left = centerLeft + "px";
      self.calendarContainer.style.right = "auto";
    }
  }
  function getDocumentStyleSheet() {
    var editableSheet = null;
    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      if (!sheet.cssRules)
        continue;
      try {
        sheet.cssRules;
      } catch (err) {
        continue;
      }
      editableSheet = sheet;
      break;
    }
    return editableSheet != null ? editableSheet : createStyleSheet();
  }
  function createStyleSheet() {
    var style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }
  function redraw() {
    if (self.config.noCalendar || self.isMobile)
      return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }
  function focusAndClose() {
    self._input.focus();
    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }
  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();
    var isSelectable = function(day) {
      return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    };
    var t = findParent(getEventTarget(e), isSelectable);
    if (t === void 0)
      return;
    var target = t;
    var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single")
      self.selectedDates = [selectedDate];
    else if (self.config.mode === "multiple") {
      var selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex)
        self.selectedDates.splice(parseInt(selectedIndex), 1);
      else
        self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }
      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
        self.selectedDates.sort(function(a, b) {
          return a.getTime() - b.getTime();
        });
    }
    setHoursFromInputs();
    if (shouldChangeMonth) {
      var isNewYear = self.currentYear !== selectedDate.getFullYear();
      self.currentYear = selectedDate.getFullYear();
      self.currentMonth = selectedDate.getMonth();
      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      triggerEvent("onMonthChange");
    }
    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1)
      focusOnDayElem(target);
    else if (self.selectedDateElem !== void 0 && self.hourElement === void 0) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== void 0)
      self.hourElement !== void 0 && self.hourElement.focus();
    if (self.config.closeOnSelect) {
      var single = self.config.mode === "single" && !self.config.enableTime;
      var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
      if (single || range) {
        focusAndClose();
      }
    }
    triggerChange();
  }
  var CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    positionElement: [updatePositionElement],
    clickOpens: [
      function() {
        if (self.config.clickOpens === true) {
          bind(self._input, "focus", self.open);
          bind(self._input, "click", self.open);
        } else {
          self._input.removeEventListener("focus", self.open);
          self._input.removeEventListener("click", self.open);
        }
      }
    ]
  };
  function set(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self.config, option);
      for (var key in option) {
        if (CALLBACKS[key] !== void 0)
          CALLBACKS[key].forEach(function(x) {
            return x();
          });
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== void 0)
        CALLBACKS[option].forEach(function(x) {
          return x();
        });
      else if (HOOKS.indexOf(option) > -1)
        self.config[option] = arrayify(value);
    }
    self.redraw();
    updateValue(true);
  }
  function setSelectedDate(inputDate, format) {
    var dates = [];
    if (inputDate instanceof Array)
      dates = inputDate.map(function(d) {
        return self.parseDate(d, format);
      });
    else if (inputDate instanceof Date || typeof inputDate === "number")
      dates = [self.parseDate(inputDate, format)];
    else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;
        case "multiple":
          dates = inputDate.split(self.config.conjunction).map(function(date) {
            return self.parseDate(date, format);
          });
          break;
        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map(function(date) {
            return self.parseDate(date, format);
          });
          break;
        default:
          break;
      }
    } else
      self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function(d) {
      return d instanceof Date && isEnabled(d, false);
    });
    if (self.config.mode === "range")
      self.selectedDates.sort(function(a, b) {
        return a.getTime() - b.getTime();
      });
  }
  function setDate(date, triggerChange2, format) {
    if (triggerChange2 === void 0) {
      triggerChange2 = false;
    }
    if (format === void 0) {
      format = self.config.dateFormat;
    }
    if (date !== 0 && !date || date instanceof Array && date.length === 0)
      return self.clear(triggerChange2);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(void 0, triggerChange2);
    setHoursFromDate();
    if (self.selectedDates.length === 0) {
      self.clear(false);
    }
    updateValue(triggerChange2);
    if (triggerChange2)
      triggerEvent("onChange");
  }
  function parseDateRules(arr) {
    return arr.slice().map(function(rule) {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, void 0, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to)
        return {
          from: self.parseDate(rule.from, void 0),
          to: self.parseDate(rule.to, void 0)
        };
      return rule;
    }).filter(function(x) {
      return x;
    });
  }
  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || /* @__PURE__ */ new Date();
    var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate)
      setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0)
      self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== void 0)
      self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== void 0)
      self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
  }
  function setupInputs() {
    self.input = getInputElem();
    if (!self.input) {
      self.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    self.input._type = self.input.type;
    self.input.type = "text";
    self.input.classList.add("flatpickr-input");
    self._input = self.input;
    if (self.config.altInput) {
      self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
      self._input = self.altInput;
      self.altInput.placeholder = self.input.placeholder;
      self.altInput.disabled = self.input.disabled;
      self.altInput.required = self.input.required;
      self.altInput.tabIndex = self.input.tabIndex;
      self.altInput.type = "text";
      self.input.setAttribute("type", "hidden");
      if (!self.config.static && self.input.parentNode)
        self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }
    if (!self.config.allowInput)
      self._input.setAttribute("readonly", "readonly");
    updatePositionElement();
  }
  function updatePositionElement() {
    self._positionElement = self.config.positionElement || self._input;
  }
  function setupMobile() {
    var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }
    if (self.config.minDate)
      self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate)
      self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step"))
      self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== void 0)
      self.altInput.type = "hidden";
    try {
      if (self.input.parentNode)
        self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {
    }
    bind(self.mobileInput, "change", function(e) {
      self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }
  function toggle(e) {
    if (self.isOpen === true)
      return self.close();
    self.open(e);
  }
  function triggerEvent(event, data) {
    if (self.config === void 0)
      return;
    var hooks = self.config[event];
    if (hooks !== void 0 && hooks.length > 0) {
      for (var i = 0; hooks[i] && i < hooks.length; i++)
        hooks[i](self.selectedDates, self.input.value, self, data);
    }
    if (event === "onChange") {
      self.input.dispatchEvent(createEvent("change"));
      self.input.dispatchEvent(createEvent("input"));
    }
  }
  function createEvent(name) {
    var e = document.createEvent("Event");
    e.initEvent(name, true, true);
    return e;
  }
  function isDateSelected(date) {
    for (var i = 0; i < self.selectedDates.length; i++) {
      var selectedDate = self.selectedDates[i];
      if (selectedDate instanceof Date && compareDates(selectedDate, date) === 0)
        return "" + i;
    }
    return false;
  }
  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2)
      return false;
    return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
  }
  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav)
      return;
    self.yearElements.forEach(function(yearElement, i) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);
      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d.getMonth().toString();
      }
      yearElement.value = d.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== void 0 && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== void 0 && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }
  function getDateStr(specificFormat) {
    var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
    return self.selectedDates.map(function(dObj) {
      return self.formatDate(dObj, format);
    }).filter(function(d, i, arr) {
      return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
    }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }
  function updateValue(triggerChange2) {
    if (triggerChange2 === void 0) {
      triggerChange2 = true;
    }
    if (self.mobileInput !== void 0 && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== void 0 ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }
    self.input.value = getDateStr(self.config.dateFormat);
    if (self.altInput !== void 0) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }
    if (triggerChange2 !== false)
      triggerEvent("onValueUpdate");
  }
  function onMonthNavClick(e) {
    var eventTarget = getEventTarget(e);
    var isPrevMonth = self.prevMonthNav.contains(eventTarget);
    var isNextMonth = self.nextMonthNav.contains(eventTarget);
    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }
  function timeWrapper(e) {
    e.preventDefault();
    var isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
    if (self.amPM !== void 0 && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
    }
    var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
    var newValue = curValue + step * delta;
    if (typeof input.value !== "undefined" && input.value.length === 2) {
      var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
      if (newValue < min) {
        newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
        if (isMinuteElem)
          incrementNumInput(void 0, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
        if (isMinuteElem)
          incrementNumInput(void 0, 1, self.hourElement);
      }
      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
      }
      input.value = pad(newValue);
    }
  }
  init();
  return self;
}
function _flatpickr(nodeList, config) {
  var nodes = Array.prototype.slice.call(nodeList).filter(function(x) {
    return x instanceof HTMLElement;
  });
  var instances = [];
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    try {
      if (node.getAttribute("data-fp-omit") !== null)
        continue;
      if (node._flatpickr !== void 0) {
        node._flatpickr.destroy();
        node._flatpickr = void 0;
      }
      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }
  return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
  HTMLElement.prototype.flatpickr = function(config) {
    return _flatpickr([this], config);
  };
}
var flatpickr = function(selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: __assign({}, default_default),
  default: __assign({}, default_default)
};
flatpickr.localize = function(l10n) {
  flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function(config) {
  flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = createDateParser({});
flatpickr.formatDate = createDateFormatter({});
flatpickr.compareDates = compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
}
Date.prototype.fp_incr = function(days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}
var esm_default = flatpickr;

// node_modules/angularx-flatpickr/fesm2020/angularx-flatpickr.mjs
var FlatpickrDefaults = class {
  constructor() {
    this.altFormat = "F j, Y";
    this.altInput = false;
    this.altInputClass = "";
    this.allowInput = false;
    this.allowInvalidPreload = false;
    this.appendTo = void 0;
    this.ariaDateFormat = "F j, Y";
    this.clickOpens = true;
    this.dateFormat = "Y-m-d";
    this.defaultHour = 12;
    this.defaultMinute = 0;
    this.defaultSeconds = 0;
    this.disable = [];
    this.disableMobile = false;
    this.enableTime = false;
    this.enableSeconds = false;
    this.formatDate = void 0;
    this.hourIncrement = 1;
    this.inline = false;
    this.maxDate = void 0;
    this.minDate = void 0;
    this.maxTime = void 0;
    this.minTime = void 0;
    this.minuteIncrement = 5;
    this.mode = "single";
    this.nextArrow = ">";
    this.noCalendar = false;
    this.now = /* @__PURE__ */ new Date();
    this.prevArrow = "<";
    this.shorthandCurrentMonth = false;
    this.static = false;
    this.time24hr = false;
    this.utc = false;
    this.weekNumbers = false;
    this.wrap = false;
    this.plugins = [];
    this.locale = "default";
    this.convertModelValue = false;
    this.showMonths = 1;
    this.monthSelectorType = "static";
    this.ignoredFocusElements = [];
  }
};
FlatpickrDefaults.\u0275fac = function FlatpickrDefaults_Factory(t) {
  return new (t || FlatpickrDefaults)();
};
FlatpickrDefaults.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: FlatpickrDefaults,
  factory: FlatpickrDefaults.\u0275fac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatpickrDefaults, [{
    type: Injectable
  }], null, null);
})();
var FLATPICKR_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FlatpickrDirective),
  multi: true
};
var FlatpickrDirective = class {
  constructor(elm, defaults2, renderer) {
    this.elm = elm;
    this.defaults = defaults2;
    this.renderer = renderer;
    this.options = {};
    this.ignoredFocusElements = [];
    this.flatpickrReady = new EventEmitter();
    this.flatpickrChange = new EventEmitter();
    this.flatpickrValueUpdate = new EventEmitter();
    this.flatpickrOpen = new EventEmitter();
    this.flatpickrClose = new EventEmitter();
    this.flatpickrMonthChange = new EventEmitter();
    this.flatpickrYearChange = new EventEmitter();
    this.flatpickrDayCreate = new EventEmitter();
    this.isDisabled = false;
    this.onChangeFn = () => {
    };
    this.onTouchedFn = () => {
    };
  }
  ngAfterViewInit() {
    const options = {
      altFormat: this.altFormat,
      altInput: this.altInput,
      altInputClass: this.altInputClass,
      allowInput: this.allowInput,
      allowInvalidPreload: this.allowInvalidPreload,
      appendTo: this.appendTo,
      ariaDateFormat: this.ariaDateFormat,
      clickOpens: this.clickOpens,
      dateFormat: this.dateFormat,
      defaultHour: this.defaultHour,
      defaultMinute: this.defaultMinute,
      defaultSeconds: this.defaultSeconds,
      disable: this.disable,
      disableMobile: this.disableMobile,
      enable: this.enable,
      enableTime: this.enableTime,
      enableSeconds: this.enableSeconds,
      formatDate: this.formatDate,
      hourIncrement: this.hourIncrement,
      defaultDate: this.initialValue,
      inline: this.inline,
      maxDate: this.maxDate,
      minDate: this.minDate,
      maxTime: this.maxTime,
      minTime: this.minTime,
      minuteIncrement: this.minuteIncrement,
      mode: this.mode,
      nextArrow: this.nextArrow,
      noCalendar: this.noCalendar,
      now: this.now,
      parseDate: this.parseDate,
      prevArrow: this.prevArrow,
      shorthandCurrentMonth: this.shorthandCurrentMonth,
      showMonths: this.showMonths,
      monthSelectorType: this.monthSelectorType,
      static: this.static,
      time24hr: this.time24hr,
      weekNumbers: this.weekNumbers,
      getWeek: this.getWeek,
      wrap: this.wrap,
      plugins: this.plugins,
      locale: this.locale,
      ignoredFocusElements: this.ignoredFocusElements,
      onChange: (selectedDates, dateString, instance) => {
        this.flatpickrChange.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onOpen: (selectedDates, dateString, instance) => {
        this.flatpickrOpen.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onClose: (selectedDates, dateString, instance) => {
        this.flatpickrClose.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onMonthChange: (selectedDates, dateString, instance) => {
        this.flatpickrMonthChange.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onYearChange: (selectedDates, dateString, instance) => {
        this.flatpickrYearChange.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onReady: (selectedDates, dateString, instance) => {
        this.flatpickrReady.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onValueUpdate: (selectedDates, dateString, instance) => {
        this.flatpickrValueUpdate.emit({
          selectedDates,
          dateString,
          instance
        });
      },
      onDayCreate: (selectedDates, dateString, instance, dayElement) => {
        this.flatpickrDayCreate.emit({
          selectedDates,
          dateString,
          instance,
          dayElement
        });
      }
    };
    Object.keys(options).forEach((key) => {
      if (typeof options[key] === "undefined") {
        if (typeof this.options[key] !== "undefined") {
          options[key] = this.options[key];
        } else {
          options[key] = this.defaults[key];
        }
      }
    });
    options.time_24hr = options.time24hr;
    options.altInputClass = (options.altInputClass || "") + " " + this.elm.nativeElement.className;
    if (!options.enable) {
      delete options.enable;
    }
    this.instance = esm_default(this.elm.nativeElement, options);
    this.setDisabledState(this.isDisabled);
  }
  ngOnChanges(changes) {
    if (this.instance) {
      Object.keys(changes).forEach((inputKey) => {
        this.instance.set(inputKey, this[inputKey]);
      });
    }
  }
  ngOnDestroy() {
    if (this.instance) {
      this.instance.destroy();
    }
  }
  writeValue(value) {
    let convertedValue = value;
    if (this.convertModelValue && this.mode === "range" && value) {
      convertedValue = [value.from, value.to];
    }
    if (this.instance) {
      this.instance.setDate(convertedValue);
    } else {
      this.initialValue = convertedValue;
    }
  }
  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouchedFn = fn;
  }
  setDisabledState(isDisabled) {
    this.isDisabled = isDisabled;
    if (this.instance) {
      if (this.isDisabled) {
        this.renderer.setProperty(this.instance._input, "disabled", "disabled");
      } else {
        this.renderer.removeAttribute(this.instance._input, "disabled");
      }
    }
  }
  inputChanged() {
    const value = this.elm.nativeElement.value;
    if (this.convertModelValue && typeof value === "string") {
      switch (this.mode) {
        case "multiple":
          const dates = value.split("; ").map((str) => this.instance.parseDate(str, this.instance.config.dateFormat, !this.instance.config.enableTime));
          this.onChangeFn(dates);
          break;
        case "range":
          const [from, to] = value.split(this.instance.l10n.rangeSeparator).map((str) => this.instance.parseDate(str, this.instance.config.dateFormat, !this.instance.config.enableTime));
          this.onChangeFn({
            from,
            to
          });
          break;
        case "single":
        default:
          this.onChangeFn(this.instance.parseDate(value, this.instance.config.dateFormat, !this.instance.config.enableTime));
      }
    } else {
      this.onChangeFn(value);
    }
  }
};
FlatpickrDirective.\u0275fac = function FlatpickrDirective_Factory(t) {
  return new (t || FlatpickrDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FlatpickrDefaults), \u0275\u0275directiveInject(Renderer2));
};
FlatpickrDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: FlatpickrDirective,
  selectors: [["", "mwlFlatpickr", ""]],
  hostBindings: function FlatpickrDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("blur", function FlatpickrDirective_blur_HostBindingHandler() {
        return ctx.onTouchedFn();
      })("input", function FlatpickrDirective_input_HostBindingHandler() {
        return ctx.inputChanged();
      });
    }
  },
  inputs: {
    options: "options",
    altFormat: "altFormat",
    altInput: "altInput",
    altInputClass: "altInputClass",
    allowInput: "allowInput",
    allowInvalidPreload: "allowInvalidPreload",
    appendTo: "appendTo",
    ariaDateFormat: "ariaDateFormat",
    clickOpens: "clickOpens",
    dateFormat: "dateFormat",
    defaultHour: "defaultHour",
    defaultMinute: "defaultMinute",
    defaultSeconds: "defaultSeconds",
    disable: "disable",
    disableMobile: "disableMobile",
    enable: "enable",
    enableTime: "enableTime",
    enableSeconds: "enableSeconds",
    formatDate: "formatDate",
    hourIncrement: "hourIncrement",
    inline: "inline",
    maxDate: "maxDate",
    minDate: "minDate",
    maxTime: "maxTime",
    minTime: "minTime",
    minuteIncrement: "minuteIncrement",
    mode: "mode",
    nextArrow: "nextArrow",
    noCalendar: "noCalendar",
    now: "now",
    parseDate: "parseDate",
    prevArrow: "prevArrow",
    shorthandCurrentMonth: "shorthandCurrentMonth",
    showMonths: "showMonths",
    static: "static",
    time24hr: "time24hr",
    weekNumbers: "weekNumbers",
    getWeek: "getWeek",
    wrap: "wrap",
    plugins: "plugins",
    locale: "locale",
    convertModelValue: "convertModelValue",
    monthSelectorType: "monthSelectorType",
    ignoredFocusElements: "ignoredFocusElements"
  },
  outputs: {
    flatpickrReady: "flatpickrReady",
    flatpickrChange: "flatpickrChange",
    flatpickrValueUpdate: "flatpickrValueUpdate",
    flatpickrOpen: "flatpickrOpen",
    flatpickrClose: "flatpickrClose",
    flatpickrMonthChange: "flatpickrMonthChange",
    flatpickrYearChange: "flatpickrYearChange",
    flatpickrDayCreate: "flatpickrDayCreate"
  },
  exportAs: ["mwlFlatpickr"],
  features: [\u0275\u0275ProvidersFeature([FLATPICKR_CONTROL_VALUE_ACCESSOR]), \u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatpickrDirective, [{
    type: Directive,
    args: [{
      selector: "[mwlFlatpickr]",
      providers: [FLATPICKR_CONTROL_VALUE_ACCESSOR],
      exportAs: "mwlFlatpickr"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: FlatpickrDefaults
    }, {
      type: Renderer2
    }];
  }, {
    options: [{
      type: Input
    }],
    altFormat: [{
      type: Input
    }],
    altInput: [{
      type: Input
    }],
    altInputClass: [{
      type: Input
    }],
    allowInput: [{
      type: Input
    }],
    allowInvalidPreload: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    ariaDateFormat: [{
      type: Input
    }],
    clickOpens: [{
      type: Input
    }],
    dateFormat: [{
      type: Input
    }],
    defaultHour: [{
      type: Input
    }],
    defaultMinute: [{
      type: Input
    }],
    defaultSeconds: [{
      type: Input
    }],
    disable: [{
      type: Input
    }],
    disableMobile: [{
      type: Input
    }],
    enable: [{
      type: Input
    }],
    enableTime: [{
      type: Input
    }],
    enableSeconds: [{
      type: Input
    }],
    formatDate: [{
      type: Input
    }],
    hourIncrement: [{
      type: Input
    }],
    inline: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxTime: [{
      type: Input
    }],
    minTime: [{
      type: Input
    }],
    minuteIncrement: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    nextArrow: [{
      type: Input
    }],
    noCalendar: [{
      type: Input
    }],
    now: [{
      type: Input
    }],
    parseDate: [{
      type: Input
    }],
    prevArrow: [{
      type: Input
    }],
    shorthandCurrentMonth: [{
      type: Input
    }],
    showMonths: [{
      type: Input
    }],
    static: [{
      type: Input
    }],
    time24hr: [{
      type: Input
    }],
    weekNumbers: [{
      type: Input
    }],
    getWeek: [{
      type: Input
    }],
    wrap: [{
      type: Input
    }],
    plugins: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    convertModelValue: [{
      type: Input
    }],
    monthSelectorType: [{
      type: Input
    }],
    ignoredFocusElements: [{
      type: Input
    }],
    flatpickrReady: [{
      type: Output
    }],
    flatpickrChange: [{
      type: Output
    }],
    flatpickrValueUpdate: [{
      type: Output
    }],
    flatpickrOpen: [{
      type: Output
    }],
    flatpickrClose: [{
      type: Output
    }],
    flatpickrMonthChange: [{
      type: Output
    }],
    flatpickrYearChange: [{
      type: Output
    }],
    flatpickrDayCreate: [{
      type: Output
    }],
    onTouchedFn: [{
      type: HostListener,
      args: ["blur"]
    }],
    inputChanged: [{
      type: HostListener,
      args: ["input"]
    }]
  });
})();
var USER_DEFAULTS = new InjectionToken("flatpickr defaults");
function defaultsFactory(userDefaults) {
  const defaults2 = new FlatpickrDefaults();
  Object.assign(defaults2, userDefaults);
  return defaults2;
}
var FlatpickrModule = class _FlatpickrModule {
  static forRoot(userDefaults = {}) {
    return {
      ngModule: _FlatpickrModule,
      providers: [{
        provide: USER_DEFAULTS,
        useValue: userDefaults
      }, {
        provide: FlatpickrDefaults,
        useFactory: defaultsFactory,
        deps: [USER_DEFAULTS]
      }]
    };
  }
};
FlatpickrModule.\u0275fac = function FlatpickrModule_Factory(t) {
  return new (t || FlatpickrModule)();
};
FlatpickrModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: FlatpickrModule
});
FlatpickrModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatpickrModule, [{
    type: NgModule,
    args: [{
      declarations: [FlatpickrDirective],
      exports: [FlatpickrDirective]
    }]
  }], null, null);
})();

// src/app/components/core/tenant-office-assignment/tenant-office-assignment.service.ts
var TenantService = class _TenantService {
  constructor(http) {
    this.http = http;
    this.baseUrl = environment.baseUrl;
  }
  getTenantsByBusiness(id) {
    return this.http.get(`${this.baseUrl}/Tenant/GetByBusinenssId`, { params: { id } });
  }
  assignTenant(payload) {
    return this.http.post(`${this.baseUrl}/Tenant/AssignTenant`, payload);
  }
  static {
    this.\u0275fac = function TenantService_Factory(t) {
      return new (t || _TenantService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TenantService, factory: _TenantService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/core/tenant-office-assignment/assign-tenant/assign-tenant.component.ts
var _c0 = ["startDateInput"];
var _c1 = ["endDateInput"];
function AssignTenantComponent_ng_container_23_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "yx-select", 33);
    \u0275\u0275twoWayListener("valueChange", function AssignTenantComponent_ng_container_23_div_13_Template_yx_select_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedTenantId, $event) || (ctx_r1.selectedTenantId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r1.tenants)("enableSearch", true);
    \u0275\u0275twoWayProperty("value", ctx_r1.selectedTenantId);
  }
}
function AssignTenantComponent_ng_container_23_div_14_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1, " Full name is required ");
    \u0275\u0275elementEnd();
  }
}
function AssignTenantComponent_ng_container_23_div_14_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1, " Username is required ");
    \u0275\u0275elementEnd();
  }
}
function AssignTenantComponent_ng_container_23_div_14_p_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fieldErrors.password, " ");
  }
}
function AssignTenantComponent_ng_container_23_div_14_div_50_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fieldErrors.confirmPassword, " ");
  }
}
function AssignTenantComponent_ng_container_23_div_14_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "label", 38);
    \u0275\u0275text(2, " Confirm Password ");
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 44)(6, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function AssignTenantComponent_ng_container_23_div_14_div_50_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.confirmPassword, $event) || (ctx_r1.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AssignTenantComponent_ng_container_23_div_14_div_50_Template_input_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.fieldErrors.confirmPassword = null);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 46);
    \u0275\u0275listener("click", function AssignTenantComponent_ng_container_23_div_14_div_50_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleConfirmPassword());
    });
    \u0275\u0275element(8, "i", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, AssignTenantComponent_ng_container_23_div_14_div_50_p_9_Template, 2, 1, "p", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.confirmPassword);
    \u0275\u0275property("type", ctx_r1.showConfirmPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.confirmPassword);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.showConfirmPassword ? "la-eye-slash" : "la-eye");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fieldErrors.confirmPassword);
  }
}
function AssignTenantComponent_ng_container_23_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "p", 36);
    \u0275\u0275text(3, " Basic Information ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 37)(5, "label", 38);
    \u0275\u0275text(6, " Full Name ");
    \u0275\u0275elementStart(7, "span", 39);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function AssignTenantComponent_ng_container_23_div_14_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.tenantModel.name, $event) || (ctx_r1.tenantModel.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AssignTenantComponent_ng_container_23_div_14_Template_input_ngModelChange_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.fieldErrors.name = null);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AssignTenantComponent_ng_container_23_div_14_p_10_Template, 2, 0, "p", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 37)(12, "label", 38);
    \u0275\u0275text(13, " Username ");
    \u0275\u0275elementStart(14, "span", 39);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function AssignTenantComponent_ng_container_23_div_14_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.tenantModel.userName, $event) || (ctx_r1.tenantModel.userName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AssignTenantComponent_ng_container_23_div_14_Template_input_ngModelChange_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.fieldErrors.username = null);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AssignTenantComponent_ng_container_23_div_14_p_17_Template, 2, 0, "p", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 37)(19, "label", 38);
    \u0275\u0275text(20, " Phone ");
    \u0275\u0275elementStart(21, "span", 42);
    \u0275\u0275text(22, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function AssignTenantComponent_ng_container_23_div_14_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.tenantModel.userPhoneNo, $event) || (ctx_r1.tenantModel.userPhoneNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 35)(25, "p", 36);
    \u0275\u0275text(26, " Role & Access ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "yx-select", 43);
    \u0275\u0275twoWayListener("valueChange", function AssignTenantComponent_ng_container_23_div_14_Template_yx_select_valueChange_27_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.tenantModel.fkGender, $event) || (ctx_r1.tenantModel.fkGender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 35)(29, "p", 36);
    \u0275\u0275text(30, " Security ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 37)(32, "label", 38);
    \u0275\u0275text(33, " Password ");
    \u0275\u0275elementStart(34, "span", 39);
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 44)(37, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function AssignTenantComponent_ng_container_23_div_14_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.tenantModel.userPassword, $event) || (ctx_r1.tenantModel.userPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AssignTenantComponent_ng_container_23_div_14_Template_input_ngModelChange_37_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.fieldErrors.password = null);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 46);
    \u0275\u0275listener("click", function AssignTenantComponent_ng_container_23_div_14_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePassword());
    });
    \u0275\u0275element(39, "i", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "ul", 48)(41, "li");
    \u0275\u0275text(42, "\u2022 6\u201310 characters long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "li");
    \u0275\u0275text(44, "\u2022 At least 1 uppercase letter (A\u2013Z)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "li");
    \u0275\u0275text(46, "\u2022 At least 1 number (0\u20139)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "li");
    \u0275\u0275text(48, "\u2022 At least 1 special character (@ # $ % ^ * ( ) _ - = + ~ `)");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, AssignTenantComponent_ng_container_23_div_14_p_49_Template, 2, 1, "p", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, AssignTenantComponent_ng_container_23_div_14_div_50_Template, 10, 6, "div", 50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.name || ctx_r1.fieldErrors.username);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.name);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tenantModel.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fieldErrors.name);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.username);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tenantModel.userName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.fieldErrors.username);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tenantModel.userPhoneNo);
    \u0275\u0275advance(4);
    \u0275\u0275property("items", ctx_r1.genders);
    \u0275\u0275twoWayProperty("value", ctx_r1.tenantModel.fkGender);
    \u0275\u0275advance();
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.password || ctx_r1.fieldErrors.confirmPassword);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("border-[rgb(var(--danger))]", ctx_r1.fieldErrors.password);
    \u0275\u0275property("type", ctx_r1.showPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tenantModel.userPassword);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.showPassword ? "la-eye-slash" : "la-eye");
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.fieldErrors.password);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.tenantModel.userPassword || "").length > 0);
  }
}
function AssignTenantComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 24)(2, "p", 25);
    \u0275\u0275text(3, " Tenant Information ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 26)(5, "label", 27)(6, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function AssignTenantComponent_ng_container_23_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tenantMode, $event) || (ctx_r1.tenantMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AssignTenantComponent_ng_container_23_Template_input_change_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTenantModeChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Existing Tenant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label", 27)(10, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function AssignTenantComponent_ng_container_23_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.tenantMode, $event) || (ctx_r1.tenantMode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AssignTenantComponent_ng_container_23_Template_input_change_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTenantModeChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "New Tenant");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, AssignTenantComponent_ng_container_23_div_13_Template, 2, 3, "div", 30)(14, AssignTenantComponent_ng_container_23_div_14_Template, 51, 22, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tenantMode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tenantMode);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.tenantMode === "existing");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tenantMode === "new");
  }
}
function AssignTenantComponent_ng_container_24_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "p", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 63);
    \u0275\u0275listener("click", function AssignTenantComponent_ng_container_24_div_12_Template_button_click_4_listener() {
      const i_r8 = \u0275\u0275restoreView(_r7).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeContact(i_r8));
    });
    \u0275\u0275element(5, "i", 64);
    \u0275\u0275text(6, " Remove ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 65)(8, "div", 37)(9, "label", 66);
    \u0275\u0275text(10, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function AssignTenantComponent_ng_container_24_div_12_Template_input_ngModelChange_11_listener($event) {
      const cp_r9 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(cp_r9.contactPersonName, $event) || (cp_r9.contactPersonName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 37)(13, "label", 66);
    \u0275\u0275text(14, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function AssignTenantComponent_ng_container_24_div_12_Template_input_ngModelChange_15_listener($event) {
      const cp_r9 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(cp_r9.contactPersonPhone, $event) || (cp_r9.contactPersonPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 37)(17, "label", 66);
    \u0275\u0275text(18, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function AssignTenantComponent_ng_container_24_div_12_Template_input_ngModelChange_19_listener($event) {
      const cp_r9 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(cp_r9.contactPersonEmail, $event) || (cp_r9.contactPersonEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cp_r9 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Contact #", i_r8 + 1, " ");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", cp_r9.contactPersonName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", cp_r9.contactPersonPhone);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", cp_r9.contactPersonEmail);
  }
}
function AssignTenantComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 54)(2, "div", 55)(3, "div")(4, "p", 25);
    \u0275\u0275text(5, " Contact Persons ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 56);
    \u0275\u0275text(7, " Add one or more contact persons for tenant communication ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 57);
    \u0275\u0275listener("click", function AssignTenantComponent_ng_container_24_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addContact());
    });
    \u0275\u0275element(9, "i", 58);
    \u0275\u0275text(10, " Add Contact ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 34);
    \u0275\u0275template(12, AssignTenantComponent_ng_container_24_div_12_Template, 20, 4, "div", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.contactPersons);
  }
}
function AssignTenantComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 70)(2, "div", 71)(3, "p", 72);
    \u0275\u0275text(4, " Agreement Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 73);
    \u0275\u0275text(6, " Define the agreement duration and description for tenant allocation ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 74)(8, "div", 37)(9, "label", 38);
    \u0275\u0275text(10, "Agreement Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 75)(12, "span", 76);
    \u0275\u0275listener("click", function AssignTenantComponent_ng_container_25_Template_span_click_12_listener() {
      \u0275\u0275restoreView(_r10);
      const startDateInput_r11 = \u0275\u0275reference(15);
      return \u0275\u0275resetView(startDateInput_r11.focus());
    });
    \u0275\u0275element(13, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 78, 0);
    \u0275\u0275twoWayListener("ngModelChange", function AssignTenantComponent_ng_container_25_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.range.controls.start.value, $event) || (ctx_r1.range.controls.start.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 37)(17, "label", 38);
    \u0275\u0275text(18, "Agreement End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 75)(20, "span", 76);
    \u0275\u0275listener("click", function AssignTenantComponent_ng_container_25_Template_span_click_20_listener() {
      \u0275\u0275restoreView(_r10);
      const endDateInput_r12 = \u0275\u0275reference(23);
      return \u0275\u0275resetView(endDateInput_r12.focus());
    });
    \u0275\u0275element(21, "i", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 79, 1);
    \u0275\u0275twoWayListener("ngModelChange", function AssignTenantComponent_ng_container_25_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.range.controls.end.value, $event) || (ctx_r1.range.controls.end.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 37)(25, "label", 38);
    \u0275\u0275text(26, "Agreement Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function AssignTenantComponent_ng_container_25_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.agreementModel.agreementName, $event) || (ctx_r1.agreementModel.agreementName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 37)(29, "label", 38);
    \u0275\u0275text(30, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "textarea", 81);
    \u0275\u0275twoWayListener("ngModelChange", function AssignTenantComponent_ng_container_25_Template_textarea_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.agreementModel.agreementDescription, $event) || (ctx_r1.agreementModel.agreementDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(32, "      ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275property("altInput", true)("altFormat", "F j, Y")("dateFormat", "Y-m-d");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.range.controls.start.value);
    \u0275\u0275advance(8);
    \u0275\u0275property("altInput", true)("altFormat", "F j, Y")("dateFormat", "Y-m-d");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.range.controls.end.value);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.agreementModel.agreementName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.agreementModel.agreementDescription);
  }
}
function AssignTenantComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function AssignTenantComponent_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelAssignment());
    });
    \u0275\u0275text(1, " Cancel ");
    \u0275\u0275elementEnd();
  }
}
function AssignTenantComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275listener("click", function AssignTenantComponent_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.currentStep = ctx_r1.currentStep - 1);
    });
    \u0275\u0275text(1, " Back ");
    \u0275\u0275elementEnd();
  }
}
function AssignTenantComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function AssignTenantComponent_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToNextStep());
    });
    \u0275\u0275text(1, " Next ");
    \u0275\u0275elementEnd();
  }
}
function AssignTenantComponent_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function AssignTenantComponent_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitAll());
    });
    \u0275\u0275text(1, " Assign Tenant ");
    \u0275\u0275elementEnd();
  }
}
var AssignTenantComponent = class _AssignTenantComponent {
  goToNextStep() {
    if (this.currentStep === 0 && !this.validateStep1())
      return;
    if (this.currentStep === 1 && !this.validateStep2())
      return;
    this.currentStep = this.currentStep + 1;
  }
  constructor(router, userService, tenantService, managementService, toaster) {
    this.router = router;
    this.userService = userService;
    this.tenantService = tenantService;
    this.managementService = managementService;
    this.toaster = toaster;
    this.currentStep = 0;
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.officeIds = [];
    this.businessId = "";
    this.tenantMode = "new";
    this.genders = [];
    this.tenants = [];
    this.isOpen = false;
    this.searchTerm = "";
    this.filteredItems = [];
    this.items = [];
    this.labelKey = "name";
    this.placeholder = "Select option";
    this.selectedTenantId = "";
    this.fieldErrors = {};
    this.range = new FormGroup({
      start: new FormControl(null),
      end: new FormControl(null)
    });
    this.tenantModel = {
      name: "",
      userName: "",
      userPassword: "",
      userPhoneNo: "",
      fkGender: "",
      isActive: true,
      fkHandler: null,
      fkBusiness: null
    };
    this.confirmPassword = "";
    this.contactPersons = [
      {
        contactPersonName: "",
        contactPersonPhone: "",
        contactPersonEmail: ""
      }
    ];
    this.agreementModel = {
      agreementName: "",
      agreementDescription: "",
      agreementStartDate: "",
      agreementEndDate: ""
    };
    this.flatpickrDateOptions = {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d"
    };
    this.isSaving = false;
    this.isLoading = false;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.officeIds = history.state?.officeIds || [];
      if (!this.officeIds.length) {
        this.router.navigate(["/core/tenant-office-assignment"]);
        return;
      }
      this.currentUser = yield this.userService.user$;
      this.businessId = this.currentUser?.fkBusiness;
      this.loadGenders();
    });
  }
  /* ================= LOADERS ================= */
  loadGenders() {
    this.managementService.getAll().subscribe({
      next: (res) => this.genders = res.data ?? [],
      error: () => {
        this.genders = [];
        this.toaster.error("Failed to load genders");
      }
    });
  }
  /* ================= DROPDOWN FUNCTIONS ================= */
  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.filteredItems = [...this.items];
    }
  }
  filterItems() {
    const term = this.searchTerm.toLowerCase();
    this.filteredItems = this.items.filter((item) => item[this.labelKey]?.toLowerCase().includes(term));
  }
  select(item) {
    this.selectedTenantId = item.id || item.tenantId;
    this.isOpen = false;
  }
  getSelectedLabel() {
    const selected = this.items.find((x) => (x.id || x.tenantId) === this.selectedTenantId);
    return selected ? selected[this.labelKey] : "";
  }
  loadTenants() {
    this.isLoading = true;
    this.tenantService.getTenantsByBusiness(this.businessId).subscribe({
      next: (res) => {
        if (res.success === false) {
          this.toaster.error(res.remarks || "Failed to load tenants");
          this.isLoading = false;
          return;
        }
        this.tenants = res.data ?? [];
        this.isLoading = false;
      },
      error: () => {
        this.tenants = [];
        this.isLoading = false;
        this.toaster.error("Failed to load tenants");
      }
    });
  }
  onTenantModeChange() {
    if (this.tenantMode === "existing") {
      if (!this.tenants || this.tenants.length === 0) {
        this.loadTenants();
      }
    }
    if (this.tenantMode === "new") {
      this.selectedTenantId = "";
    }
  }
  /* ================= CONTACT ================= */
  addContact() {
    this.contactPersons.push({
      contactPersonName: "",
      contactPersonPhone: "",
      contactPersonEmail: ""
    });
  }
  removeContact(i) {
    this.contactPersons.splice(i, 1);
  }
  /* ================= PASSWORD VALIDATION ================= */
  isPasswordValid(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^*()_\-=+~`])[A-Za-z\d@#$%^*()_\-=+~`]{6,10}$/;
    return regex.test(password);
  }
  /* ================= VALIDATION ================= */
  validateStep1() {
    if (this.tenantMode === "existing") {
      if (!this.selectedTenantId) {
        this.toaster.error("Select tenant");
        return false;
      }
      return true;
    }
    this.fieldErrors = {};
    if (!this.tenantModel.name?.trim())
      this.fieldErrors.name = true;
    if (!this.tenantModel.userName?.trim())
      this.fieldErrors.username = true;
    if (!this.tenantModel.userPassword) {
      this.fieldErrors.password = "Password is required";
    }
    if (this.tenantModel.userPassword !== this.confirmPassword) {
      this.fieldErrors.confirmPassword = "Passwords do not match";
    }
    if (Object.keys(this.fieldErrors).length > 0)
      return false;
    if (!this.isPasswordValid(this.tenantModel.userPassword || "")) {
      this.toaster.error("Password must be 6-10 chars, include uppercase, number & special char");
      return false;
    }
    return true;
  }
  validateStep2() {
    if (!this.contactPersons.length)
      return false;
    return this.contactPersons.every((x) => x.contactPersonName && x.contactPersonPhone && x.contactPersonEmail);
  }
  // validateStep3(): boolean {
  //   return !!(
  //     this.agreementModel.agreementName &&
  //     this.range.controls.start.value &&
  //     this.range.controls.end.value
  //   );
  // }
  validateStep3() {
    if (!this.agreementModel.agreementName) {
      this.toaster.error("Agreement name is required");
      return false;
    }
    if (!this.range.controls.start.value) {
      this.toaster.error("Start date is required");
      return false;
    }
    if (!this.range.controls.end.value) {
      this.toaster.error("End date is required");
      return false;
    }
    if (this.range.controls.start.value > this.range.controls.end.value) {
      this.toaster.error("Start date cannot be after end date");
      return false;
    }
    return true;
  }
  navigateStep(step) {
    if (step === 0) {
      this.currentStep = 0;
      return;
    }
    if (step >= 1) {
      if (!this.validateStep1())
        return;
    }
    if (step >= 2) {
      if (!this.validateStep1())
        return;
      if (!this.validateStep2())
        return;
    }
    this.currentStep = step;
  }
  /* ================= DATE CHANGE ================= */
  onStartDateChange(date) {
    if (date instanceof Array)
      date = date[0];
    this.range.controls.start.setValue(date);
  }
  onEndDateChange(date) {
    if (date instanceof Array)
      date = date[0];
    this.range.controls.end.setValue(date);
  }
  /* ================= DATE PREP ================= */
  prepareAgreementDates() {
    const startDate = this.range.controls.start.value;
    const endDate = this.range.controls.end.value;
    if (!startDate || !endDate)
      return;
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);
    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);
    this.agreementModel.agreementStartDate = start.toISOString();
    this.agreementModel.agreementEndDate = end.toISOString();
  }
  /* ================= PASSWORD TOGGLES ================= */
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  cancelAssignment() {
    this.router.navigate(["/core/tenant-office-assignment"]);
  }
  /* ================= SUBMIT ================= */
  submitAll() {
    if (!this.validateStep1())
      return;
    if (!this.validateStep2()) {
      this.toaster.error("Fill all contact persons");
      return;
    }
    if (!this.validateStep3()) {
      return;
    }
    this.prepareAgreementDates();
    this.tenantModel.fkBusiness = this.businessId;
    this.isSaving = true;
    const payload = {
      fkOffices: this.officeIds,
      agreement: this.agreementModel,
      contactPerson: this.contactPersons
    };
    if (this.tenantMode === "existing") {
      payload.fkTenant = this.selectedTenantId;
    } else {
      payload.tenant = this.tenantModel;
    }
    this.tenantService.assignTenant(payload).subscribe({
      next: (res) => {
        if (res.success) {
          this.toaster.success("Tenant assigned successfully");
          this.router.navigate(["/core/tenant-office-assignment"]);
        } else {
          this.toaster.error(res.remarks || "Assignment failed");
          this.isSaving = false;
        }
      },
      error: () => {
        this.toaster.error("Assignment failed");
        this.isSaving = false;
      }
    });
  }
  static {
    this.\u0275fac = function AssignTenantComponent_Factory(t) {
      return new (t || _AssignTenantComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(TenantService), \u0275\u0275directiveInject(ManagementService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssignTenantComponent, selectors: [["app-assign-tenant"]], viewQuery: function AssignTenantComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.startDateInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.endDateInput = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275ProvidersFeature([FlatpickrDefaults]), \u0275\u0275StandaloneFeature], decls: 33, vars: 12, consts: [["startDateInput", ""], ["endDateInput", ""], [1, "w-full", "rounded-t-xl", "bg-[rgb(var(--light))]", "shadow-xl", "flex", "flex-col", "h-screen"], [1, "-mt-2", "mb-4"], [1, "px-6", "py-4", "bg-[rgb(var(--primary))]"], [1, "flex", "flex-col", "gap-4", "pt-3", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-white", "text-2xl", "font-semibold", "tracking-wide"], [1, "mt-0.5", "text-sm", "text-white/80", "max-w-2xl"], [1, "px-8", "pt-6", "pb-4"], [1, "relative", "flex", "items-center", "justify-between"], [1, "absolute", "left-0", "right-0", "top-1/2", "-translate-y-1/2", "h-[6px]", "rounded-full", "bg-[rgb(var(--gray-200))]"], [1, "absolute", "left-0", "top-1/2", "-translate-y-1/2", "h-[6px]", "rounded-full", "bg-[rgb(var(--primary))]", "transition-all", "duration-500"], [1, "relative", "z-10", "cursor-pointer", 3, "click"], [1, "w-14", "h-14", "rounded-full", "flex", "items-center", "justify-center", "border-4", "shadow-lg", "transition-all", "duration-300", 3, "ngClass"], [1, "las", "la-user", "text-xl"], [1, "las", "la-address-book", "text-xl"], [1, "las", "la-file-contract", "text-xl"], [1, "flex-1", "overflow-y-auto", "px-6", "pb-6", "space-y-6"], [4, "ngIf"], [1, "flex", "items-center", "justify-end", "gap-3", "px-6", "py-4", "border-t", "border-[rgb(var(--default-border))]"], [1, "flex-1"], [1, "flex", "gap-3"], ["class", "rounded-lg px-4 py-2 text-sm font-medium border border-[rgb(var(--gray-300))] hover:bg-red hover:text-white", 3, "click", 4, "ngIf"], ["class", "rounded-lg px-5 py-2 text-sm font-semibold bg-[rgb(var(--primary))] text-white hover:bg-[rgb(var(--primary-700))]", 3, "click", 4, "ngIf"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-5", "space-y-4", "min-h-[400px]"], [1, "text-[rgb(var(--primary))]", "font-semibold", "uppercase", "tracking-wide"], [1, "flex", "gap-6"], [1, "flex", "items-center", "gap-2", "cursor-pointer"], ["type", "radio", "value", "existing", 3, "ngModelChange", "change", "ngModel"], ["type", "radio", "value", "new", 3, "ngModelChange", "change", "ngModel"], ["class", "space-y-3 h-45", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [1, "space-y-3", "h-45"], ["labelKey", "tenantName", "valueKey", "tenantId", "placeholder", "Select Tenant", 3, "valueChange", "items", "enableSearch", "value"], [1, "space-y-4"], [1, "rounded-lg", "p-5", "space-y-4", "border", "border-[rgb(var(--gray-200))]"], [1, "text-[rgb(var(--primary))]", "font-semibold", "uppercase", "tracking-wide", "text-muted"], [1, "yx-field"], [1, "yx-label"], [1, "text-[rgb(var(--red-500))]"], [1, "yx-input", "w-full", 3, "ngModelChange", "ngModel"], ["class", "text-xs mt-1 text-[rgb(var(--danger))]", 4, "ngIf"], [1, "text-muted"], ["label", "Gender", "labelKey", "genderName", "valueKey", "genderId", "placeholder", "Select Gender", 3, "valueChange", "items", "value"], [1, "relative"], [1, "yx-input", "w-full", "pr-10", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "absolute", "inset-y-0", "right-3", "text-muted", 3, "click"], [1, "las", 3, "ngClass"], [1, "mt-2", "text-xs", "space-y-1", "text-[rgb(var(--primary))]"], ["class", "text-xs mt-2 text-[rgb(var(--danger))]", 4, "ngIf"], ["class", "yx-field animate-confirm", 4, "ngIf"], [1, "text-xs", "mt-1", "text-[rgb(var(--danger))]"], [1, "text-xs", "mt-2", "text-[rgb(var(--danger))]"], [1, "yx-field", "animate-confirm"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-6", "shadow-sm", "min-h-[400px]"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "text-xs", "text-muted", "mt-1"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "rounded-lg", "bg-[rgb(var(--primary))]", "text-white", "hover:shadow-md", "hover:scale-[1.02]", "active:scale-[0.98]", "transition", 3, "click"], [1, "las", "la-plus", "text-lg"], ["class", "rounded-lg border border-[rgb(var(--gray-200))]\n                  p-5 bg-[rgb(var(--light))]\n                  hover:shadow-sm transition", 4, "ngFor", "ngForOf"], [1, "rounded-lg", "border", "border-[rgb(var(--gray-200))]", "p-5", "bg-[rgb(var(--light))]", "hover:shadow-sm", "transition"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-sm", "font-semibold", "text-[rgb(var(--primary))]"], [1, "flex", "items-center", "gap-1", "px-3", "py-1.5", "rounded-md", "text-[rgb(var(--danger))]", "bg-[rgb(var(--danger)/0.08)]", "hover:bg-[rgb(var(--danger)/0.15)]", "transition", "text-sm", "font-medium", 3, "click"], [1, "las", "la-trash", "text-base"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], [1, "yx-label", "text-xs"], ["placeholder", "Enter full name", 1, "yx-input", "w-full", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter phone number", 1, "yx-input", "w-full", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter email address", 1, "yx-input", "w-full", 3, "ngModelChange", "ngModel"], [1, "rounded-xl", "border", "border-[rgb(var(--gray-200))]", "bg-[rgb(var(--light))]", "shadow-sm", "p-6", "space-y-6", "min-h-[400px]"], [1, "space-y-1"], [1, "text-[rgb(var(--primary))]", "font-semibold", "uppercase", "tracking-wider", "text-sm"], [1, "text-xs", "text-muted"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "w-full"], [1, "flex", "items-center", "border", "border-[rgb(var(--gray-200))]", "rounded-lg", "focus-within:ring-2", "focus-within:ring-[rgb(var(--primary-300))]"], ["tabindex", "0", 1, "flex", "items-center", "justify-center", "px-3", "h-12", "text-[rgb(var(--primary))]", "cursor-pointer", 3, "click"], [1, "las", "la-calendar", "text-xl"], ["mwlFlatpickr", "", "placeholder", "Select start date", 1, "w-full", "h-12", "border-l-0", "px-2", "text-sm", "focus:outline-none", "rounded-r-lg", 3, "ngModelChange", "altInput", "altFormat", "dateFormat", "ngModel"], ["mwlFlatpickr", "", "placeholder", "Select end date", 1, "w-full", "h-12", "border-l-0", "px-2", "text-sm", "focus:outline-none", "rounded-r-lg", 3, "ngModelChange", "altInput", "altFormat", "dateFormat", "ngModel"], ["placeholder", "Enter agreement name", 1, "yx-input", "w-full", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter agreement description", 1, "yx-input", "w-full", "min-h-[110px]", 3, "ngModelChange", "ngModel"], [1, "rounded-lg", "px-4", "py-2", "text-sm", "font-medium", "border", "border-[rgb(var(--gray-300))]", "hover:bg-red", "hover:text-white", 3, "click"], [1, "rounded-lg", "px-5", "py-2", "text-sm", "font-semibold", "bg-[rgb(var(--primary))]", "text-white", "hover:bg-[rgb(var(--primary-700))]", 3, "click"]], template: function AssignTenantComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div")(5, "h1", 6);
        \u0275\u0275text(6, " Tenant Assignment ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 7);
        \u0275\u0275text(8, " Assign tenant to the selected offices ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(9, "div", 8)(10, "div", 9);
        \u0275\u0275element(11, "div", 10)(12, "div", 11);
        \u0275\u0275elementStart(13, "div", 12);
        \u0275\u0275listener("click", function AssignTenantComponent_Template_div_click_13_listener() {
          return ctx.navigateStep(0);
        });
        \u0275\u0275elementStart(14, "div", 13);
        \u0275\u0275element(15, "i", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 12);
        \u0275\u0275listener("click", function AssignTenantComponent_Template_div_click_16_listener() {
          return ctx.navigateStep(1);
        });
        \u0275\u0275elementStart(17, "div", 13);
        \u0275\u0275element(18, "i", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 12);
        \u0275\u0275listener("click", function AssignTenantComponent_Template_div_click_19_listener() {
          return ctx.navigateStep(2);
        });
        \u0275\u0275elementStart(20, "div", 13);
        \u0275\u0275element(21, "i", 16);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(22, "div", 17);
        \u0275\u0275template(23, AssignTenantComponent_ng_container_23_Template, 15, 4, "ng-container", 18)(24, AssignTenantComponent_ng_container_24_Template, 13, 1, "ng-container", 18)(25, AssignTenantComponent_ng_container_25_Template, 33, 10, "ng-container", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 19);
        \u0275\u0275element(27, "div", 20);
        \u0275\u0275elementStart(28, "div", 21);
        \u0275\u0275template(29, AssignTenantComponent_button_29_Template, 2, 0, "button", 22)(30, AssignTenantComponent_button_30_Template, 2, 0, "button", 22)(31, AssignTenantComponent_button_31_Template, 2, 0, "button", 23)(32, AssignTenantComponent_button_32_Template, 2, 0, "button", 23);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275styleProp("width", ctx.currentStep === 0 ? 0 : ctx.currentStep === 1 ? 50 : 100, "%");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", ctx.currentStep >= 0 ? "bg-[rgb(var(--primary))] border-white text-white scale-105" : "bg-white border-[rgb(var(--gray-300))] text-[rgb(var(--dark))]");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.currentStep >= 1 ? "bg-[rgb(var(--primary))] border-white text-white scale-105" : "bg-white border-[rgb(var(--gray-300))] text-[rgb(var(--dark))]");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.currentStep >= 2 ? "bg-[rgb(var(--primary))] border-white text-white scale-105" : "bg-white border-[rgb(var(--gray-300))] text-[rgb(var(--dark))]");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.currentStep === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 2);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.currentStep === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep < 2);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentStep === 2);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      FormsModule,
      DefaultValueAccessor,
      RadioControlValueAccessor,
      NgControlStatus,
      NgModel,
      ReactiveFormsModule,
      MatSlideToggleModule,
      YxSelectComponent,
      MaterialModuleModule,
      FlatpickrModule,
      FlatpickrDirective
    ], styles: ['@charset "UTF-8";\n\n\n\ninput[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n}\ninput[type=date][_ngcontent-%COMP%] {\n  appearance: none;\n  -webkit-appearance: none;\n}\n/*# sourceMappingURL=assign-tenant.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssignTenantComponent, { className: "AssignTenantComponent", filePath: "src\\app\\components\\core\\tenant-office-assignment\\assign-tenant\\assign-tenant.component.ts", lineNumber: 36 });
})();
export {
  AssignTenantComponent
};
//# sourceMappingURL=chunk-P7CQV4UF.js.map
