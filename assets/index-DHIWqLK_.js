(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var vd = { exports: {} },
  Vs = {},
  wd = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oi = Symbol.for("react.element"),
  hg = Symbol.for("react.portal"),
  pg = Symbol.for("react.fragment"),
  mg = Symbol.for("react.strict_mode"),
  gg = Symbol.for("react.profiler"),
  yg = Symbol.for("react.provider"),
  vg = Symbol.for("react.context"),
  wg = Symbol.for("react.forward_ref"),
  xg = Symbol.for("react.suspense"),
  Sg = Symbol.for("react.memo"),
  kg = Symbol.for("react.lazy"),
  Ou = Symbol.iterator;
function Pg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ou && e[Ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Sd = Object.assign,
  kd = {};
function Jn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = kd),
    (this.updater = n || xd);
}
Jn.prototype.isReactComponent = {};
Jn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Pd() {}
Pd.prototype = Jn.prototype;
function ol(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = kd),
    (this.updater = n || xd);
}
var al = (ol.prototype = new Pd());
al.constructor = ol;
Sd(al, Jn.prototype);
al.isPureReactComponent = !0;
var ju = Array.isArray,
  Cd = Object.prototype.hasOwnProperty,
  ll = { current: null },
  Td = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ed(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Cd.call(t, r) && !Td.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: oi,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: ll.current,
  };
}
function Cg(e, t) {
  return {
    $$typeof: oi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ul(e) {
  return typeof e == "object" && e !== null && e.$$typeof === oi;
}
function Tg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Mu = /\/+/g;
function oo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Tg("" + e.key)
    : t.toString(36);
}
function zi(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case oi:
          case hg:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + oo(o, 0) : r),
      ju(i)
        ? ((n = ""),
          e != null && (n = e.replace(Mu, "$&/") + "/"),
          zi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ul(i) &&
            (i = Cg(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Mu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), ju(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + oo(s, a);
      o += zi(s, t, n, l, i);
    }
  else if (((l = Pg(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + oo(s, a++)), (o += zi(s, t, n, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function yi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    zi(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Eg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  $i = { transition: null },
  Lg = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: $i,
    ReactCurrentOwner: ll,
  };
function Ld() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = {
  map: yi,
  forEach: function (e, t, n) {
    yi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      yi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      yi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ul(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
M.Component = Jn;
M.Fragment = pg;
M.Profiler = gg;
M.PureComponent = ol;
M.StrictMode = mg;
M.Suspense = xg;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lg;
M.act = Ld;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Sd({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = ll.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Cd.call(t, l) &&
        !Td.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: oi, type: e.type, key: i, ref: s, props: r, _owner: o };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: vg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: yg, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = Ed;
M.createFactory = function (e) {
  var t = Ed.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: wg, render: e };
};
M.isValidElement = ul;
M.lazy = function (e) {
  return { $$typeof: kg, _payload: { _status: -1, _result: e }, _init: Eg };
};
M.memo = function (e, t) {
  return { $$typeof: Sg, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = $i.transition;
  $i.transition = {};
  try {
    e();
  } finally {
    $i.transition = t;
  }
};
M.unstable_act = Ld;
M.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
M.useContext = function (e) {
  return xe.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
M.useId = function () {
  return xe.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return xe.current.useRef(e);
};
M.useState = function (e) {
  return xe.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return xe.current.useTransition();
};
M.version = "18.3.1";
wd.exports = M;
var R = wd.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _g = R,
  Ng = Symbol.for("react.element"),
  Rg = Symbol.for("react.fragment"),
  Ag = Object.prototype.hasOwnProperty,
  Dg = _g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Og = { key: !0, ref: !0, __self: !0, __source: !0 };
function _d(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Ag.call(t, r) && !Og.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Ng,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Dg.current,
  };
}
Vs.Fragment = Rg;
Vs.jsx = _d;
Vs.jsxs = _d;
vd.exports = Vs;
var x = vd.exports,
  Nd = { exports: {} },
  je = {},
  Rd = { exports: {} },
  Ad = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, O) {
    var j = L.length;
    L.push(O);
    e: for (; 0 < j; ) {
      var q = (j - 1) >>> 1,
        ie = L[q];
      if (0 < i(ie, O)) (L[q] = O), (L[j] = ie), (j = q);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var O = L[0],
      j = L.pop();
    if (j !== O) {
      L[0] = j;
      e: for (var q = 0, ie = L.length, mi = ie >>> 1; q < mi; ) {
        var Qt = 2 * (q + 1) - 1,
          so = L[Qt],
          Yt = Qt + 1,
          gi = L[Yt];
        if (0 > i(so, j))
          Yt < ie && 0 > i(gi, so)
            ? ((L[q] = gi), (L[Yt] = j), (q = Yt))
            : ((L[q] = so), (L[Qt] = j), (q = Qt));
        else if (Yt < ie && 0 > i(gi, j)) (L[q] = gi), (L[Yt] = j), (q = Yt);
        else break e;
      }
    }
    return O;
  }
  function i(L, O) {
    var j = L.sortIndex - O.sortIndex;
    return j !== 0 ? j : L.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    g = !1,
    y = !1,
    v = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(L) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= L)
        r(u), (O.sortIndex = O.expirationTime), t(l, O);
      else break;
      O = n(u);
    }
  }
  function w(L) {
    if (((v = !1), m(L), !y))
      if (n(l) !== null) (y = !0), Gt(S);
      else {
        var O = n(u);
        O !== null && V(w, O.startTime - L);
      }
  }
  function S(L, O) {
    (y = !1), v && ((v = !1), p(P), (P = -1)), (g = !0);
    var j = f;
    try {
      for (
        m(O), d = n(l);
        d !== null && (!(d.expirationTime > O) || (L && !I()));

      ) {
        var q = d.callback;
        if (typeof q == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var ie = q(d.expirationTime <= O);
          (O = e.unstable_now()),
            typeof ie == "function" ? (d.callback = ie) : d === n(l) && r(l),
            m(O);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var mi = !0;
      else {
        var Qt = n(u);
        Qt !== null && V(w, Qt.startTime - O), (mi = !1);
      }
      return mi;
    } finally {
      (d = null), (f = j), (g = !1);
    }
  }
  var C = !1,
    T = null,
    P = -1,
    D = 5,
    N = -1;
  function I() {
    return !(e.unstable_now() - N < D);
  }
  function Je() {
    if (T !== null) {
      var L = e.unstable_now();
      N = L;
      var O = !0;
      try {
        O = T(!0, L);
      } finally {
        O ? Le() : ((C = !1), (T = null));
      }
    } else C = !1;
  }
  var Le;
  if (typeof h == "function")
    Le = function () {
      h(Je);
    };
  else if (typeof MessageChannel < "u") {
    var We = new MessageChannel(),
      Ht = We.port2;
    (We.port1.onmessage = Je),
      (Le = function () {
        Ht.postMessage(null);
      });
  } else
    Le = function () {
      k(Je, 0);
    };
  function Gt(L) {
    (T = L), C || ((C = !0), Le());
  }
  function V(L, O) {
    P = k(function () {
      L(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), Gt(S));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (D = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (L) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = f;
      }
      var j = f;
      f = O;
      try {
        return L();
      } finally {
        f = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, O) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var j = f;
      f = L;
      try {
        return O();
      } finally {
        f = j;
      }
    }),
    (e.unstable_scheduleCallback = function (L, O, j) {
      var q = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? q + j : q))
          : (j = q),
        L)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = j + ie),
        (L = {
          id: c++,
          callback: O,
          priorityLevel: L,
          startTime: j,
          expirationTime: ie,
          sortIndex: -1,
        }),
        j > q
          ? ((L.sortIndex = j),
            t(u, L),
            n(l) === null &&
              L === n(u) &&
              (v ? (p(P), (P = -1)) : (v = !0), V(w, j - q)))
          : ((L.sortIndex = ie), t(l, L), y || g || ((y = !0), Gt(S))),
        L
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (L) {
      var O = f;
      return function () {
        var j = f;
        f = O;
        try {
          return L.apply(this, arguments);
        } finally {
          f = j;
        }
      };
    });
})(Ad);
Rd.exports = Ad;
var jg = Rd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mg = R,
  De = jg;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Dd = new Set(),
  Fr = {};
function mn(e, t) {
  bn(e, t), bn(e + "Capture", t);
}
function bn(e, t) {
  for (Fr[e] = t, e = 0; e < t.length; e++) Dd.add(t[e]);
}
var mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Go = Object.prototype.hasOwnProperty,
  Vg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vu = {},
  Fu = {};
function Fg(e) {
  return Go.call(Fu, e)
    ? !0
    : Go.call(Vu, e)
    ? !1
    : Vg.test(e)
    ? (Fu[e] = !0)
    : ((Vu[e] = !0), !1);
}
function Ig(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function zg(e, t, n, r) {
  if (t === null || typeof t > "u" || Ig(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Se(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cl = /[\-:]([a-z])/g;
function fl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(cl, fl);
    fe[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(cl, fl);
    fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(cl, fl);
  fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new Se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function dl(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zg(t, n, i, r) && (n = null),
    r || i === null
      ? Fg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xt = Mg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  vi = Symbol.for("react.element"),
  xn = Symbol.for("react.portal"),
  Sn = Symbol.for("react.fragment"),
  hl = Symbol.for("react.strict_mode"),
  Qo = Symbol.for("react.profiler"),
  Od = Symbol.for("react.provider"),
  jd = Symbol.for("react.context"),
  pl = Symbol.for("react.forward_ref"),
  Yo = Symbol.for("react.suspense"),
  Xo = Symbol.for("react.suspense_list"),
  ml = Symbol.for("react.memo"),
  Ct = Symbol.for("react.lazy"),
  Md = Symbol.for("react.offscreen"),
  Iu = Symbol.iterator;
function sr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Iu && e[Iu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  ao;
function yr(e) {
  if (ao === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ao = (t && t[1]) || "";
    }
  return (
    `
` +
    ao +
    e
  );
}
var lo = !1;
function uo(e, t) {
  if (!e || lo) return "";
  lo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (lo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? yr(e) : "";
}
function $g(e) {
  switch (e.tag) {
    case 5:
      return yr(e.type);
    case 16:
      return yr("Lazy");
    case 13:
      return yr("Suspense");
    case 19:
      return yr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = uo(e.type, !1)), e;
    case 11:
      return (e = uo(e.type.render, !1)), e;
    case 1:
      return (e = uo(e.type, !0)), e;
    default:
      return "";
  }
}
function qo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sn:
      return "Fragment";
    case xn:
      return "Portal";
    case Qo:
      return "Profiler";
    case hl:
      return "StrictMode";
    case Yo:
      return "Suspense";
    case Xo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case jd:
        return (e.displayName || "Context") + ".Consumer";
      case Od:
        return (e._context.displayName || "Context") + ".Provider";
      case pl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ml:
        return (
          (t = e.displayName || null), t !== null ? t : qo(e.type) || "Memo"
        );
      case Ct:
        (t = e._payload), (e = e._init);
        try {
          return qo(e(t));
        } catch {}
    }
  return null;
}
function Ug(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return qo(t);
    case 8:
      return t === hl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function It(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Vd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Bg(e) {
  var t = Vd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function wi(e) {
  e._valueTracker || (e._valueTracker = Bg(e));
}
function Fd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Vd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function es(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Zo(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function zu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = It(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Id(e, t) {
  (t = t.checked), t != null && dl(e, "checked", t, !1);
}
function Jo(e, t) {
  Id(e, t);
  var n = It(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ea(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ea(e, t.type, It(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function $u(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ea(e, t, n) {
  (t !== "number" || es(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vr = Array.isArray;
function Fn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + It(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ta(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Uu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (vr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: It(n) };
}
function zd(e, t) {
  var n = It(t.value),
    r = It(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Bu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $d(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function na(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? $d(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var xi,
  Ud = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        xi = xi || document.createElement("div"),
          xi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = xi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ir(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Cr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  bg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cr).forEach(function (e) {
  bg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cr[t] = Cr[e]);
  });
});
function Bd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Cr.hasOwnProperty(e) && Cr[e])
    ? ("" + t).trim()
    : t + "px";
}
function bd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Bd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Wg = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ra(e, t) {
  if (t) {
    if (Wg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function ia(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var sa = null;
function gl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var oa = null,
  In = null,
  zn = null;
function bu(e) {
  if ((e = ui(e))) {
    if (typeof oa != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = Us(t)), oa(e.stateNode, e.type, t));
  }
}
function Wd(e) {
  In ? (zn ? zn.push(e) : (zn = [e])) : (In = e);
}
function Kd() {
  if (In) {
    var e = In,
      t = zn;
    if (((zn = In = null), bu(e), t)) for (e = 0; e < t.length; e++) bu(t[e]);
  }
}
function Hd(e, t) {
  return e(t);
}
function Gd() {}
var co = !1;
function Qd(e, t, n) {
  if (co) return e(t, n);
  co = !0;
  try {
    return Hd(e, t, n);
  } finally {
    (co = !1), (In !== null || zn !== null) && (Gd(), Kd());
  }
}
function zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Us(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var aa = !1;
if (mt)
  try {
    var or = {};
    Object.defineProperty(or, "passive", {
      get: function () {
        aa = !0;
      },
    }),
      window.addEventListener("test", or, or),
      window.removeEventListener("test", or, or);
  } catch {
    aa = !1;
  }
function Kg(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Tr = !1,
  ts = null,
  ns = !1,
  la = null,
  Hg = {
    onError: function (e) {
      (Tr = !0), (ts = e);
    },
  };
function Gg(e, t, n, r, i, s, o, a, l) {
  (Tr = !1), (ts = null), Kg.apply(Hg, arguments);
}
function Qg(e, t, n, r, i, s, o, a, l) {
  if ((Gg.apply(this, arguments), Tr)) {
    if (Tr) {
      var u = ts;
      (Tr = !1), (ts = null);
    } else throw Error(E(198));
    ns || ((ns = !0), (la = u));
  }
}
function gn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Yd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Wu(e) {
  if (gn(e) !== e) throw Error(E(188));
}
function Yg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = gn(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Wu(i), e;
        if (s === r) return Wu(i), t;
        s = s.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Xd(e) {
  return (e = Yg(e)), e !== null ? qd(e) : null;
}
function qd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Zd = De.unstable_scheduleCallback,
  Ku = De.unstable_cancelCallback,
  Xg = De.unstable_shouldYield,
  qg = De.unstable_requestPaint,
  J = De.unstable_now,
  Zg = De.unstable_getCurrentPriorityLevel,
  yl = De.unstable_ImmediatePriority,
  Jd = De.unstable_UserBlockingPriority,
  rs = De.unstable_NormalPriority,
  Jg = De.unstable_LowPriority,
  eh = De.unstable_IdlePriority,
  Fs = null,
  it = null;
function ey(e) {
  if (it && typeof it.onCommitFiberRoot == "function")
    try {
      it.onCommitFiberRoot(Fs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : ry,
  ty = Math.log,
  ny = Math.LN2;
function ry(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ty(e) / ny) | 0)) | 0;
}
var Si = 64,
  ki = 4194304;
function wr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function is(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = wr(a)) : ((s &= o), s !== 0 && (r = wr(s)));
  } else (o = n & ~i), o !== 0 ? (r = wr(o)) : s !== 0 && (r = wr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Xe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function iy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function sy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Xe(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = iy(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function ua(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function th() {
  var e = Si;
  return (Si <<= 1), !(Si & 4194240) && (Si = 64), e;
}
function fo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ai(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xe(t)),
    (e[t] = n);
}
function oy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Xe(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function vl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var z = 0;
function nh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var rh,
  wl,
  ih,
  sh,
  oh,
  ca = !1,
  Pi = [],
  Rt = null,
  At = null,
  Dt = null,
  $r = new Map(),
  Ur = new Map(),
  Et = [],
  ay =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Hu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Rt = null;
      break;
    case "dragenter":
    case "dragleave":
      At = null;
      break;
    case "mouseover":
    case "mouseout":
      Dt = null;
      break;
    case "pointerover":
    case "pointerout":
      $r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ur.delete(t.pointerId);
  }
}
function ar(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = ui(t)), t !== null && wl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function ly(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Rt = ar(Rt, e, t, n, r, i)), !0;
    case "dragenter":
      return (At = ar(At, e, t, n, r, i)), !0;
    case "mouseover":
      return (Dt = ar(Dt, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return $r.set(s, ar($r.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Ur.set(s, ar(Ur.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ah(e) {
  var t = tn(e.target);
  if (t !== null) {
    var n = gn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Yd(n)), t !== null)) {
          (e.blockedOn = t),
            oh(e.priority, function () {
              ih(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ui(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (sa = r), n.target.dispatchEvent(r), (sa = null);
    } else return (t = ui(n)), t !== null && wl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Gu(e, t, n) {
  Ui(e) && n.delete(t);
}
function uy() {
  (ca = !1),
    Rt !== null && Ui(Rt) && (Rt = null),
    At !== null && Ui(At) && (At = null),
    Dt !== null && Ui(Dt) && (Dt = null),
    $r.forEach(Gu),
    Ur.forEach(Gu);
}
function lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ca ||
      ((ca = !0),
      De.unstable_scheduleCallback(De.unstable_NormalPriority, uy)));
}
function Br(e) {
  function t(i) {
    return lr(i, e);
  }
  if (0 < Pi.length) {
    lr(Pi[0], e);
    for (var n = 1; n < Pi.length; n++) {
      var r = Pi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Rt !== null && lr(Rt, e),
      At !== null && lr(At, e),
      Dt !== null && lr(Dt, e),
      $r.forEach(t),
      Ur.forEach(t),
      n = 0;
    n < Et.length;
    n++
  )
    (r = Et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Et.length && ((n = Et[0]), n.blockedOn === null); )
    ah(n), n.blockedOn === null && Et.shift();
}
var $n = xt.ReactCurrentBatchConfig,
  ss = !0;
function cy(e, t, n, r) {
  var i = z,
    s = $n.transition;
  $n.transition = null;
  try {
    (z = 1), xl(e, t, n, r);
  } finally {
    (z = i), ($n.transition = s);
  }
}
function fy(e, t, n, r) {
  var i = z,
    s = $n.transition;
  $n.transition = null;
  try {
    (z = 4), xl(e, t, n, r);
  } finally {
    (z = i), ($n.transition = s);
  }
}
function xl(e, t, n, r) {
  if (ss) {
    var i = fa(e, t, n, r);
    if (i === null) ko(e, t, r, os, n), Hu(e, r);
    else if (ly(i, e, t, n, r)) r.stopPropagation();
    else if ((Hu(e, r), t & 4 && -1 < ay.indexOf(e))) {
      for (; i !== null; ) {
        var s = ui(i);
        if (
          (s !== null && rh(s),
          (s = fa(e, t, n, r)),
          s === null && ko(e, t, r, os, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else ko(e, t, r, null, n);
  }
}
var os = null;
function fa(e, t, n, r) {
  if (((os = null), (e = gl(r)), (e = tn(e)), e !== null))
    if (((t = gn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Yd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (os = e), null;
}
function lh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Zg()) {
        case yl:
          return 1;
        case Jd:
          return 4;
        case rs:
        case Jg:
          return 16;
        case eh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _t = null,
  Sl = null,
  Bi = null;
function uh() {
  if (Bi) return Bi;
  var e,
    t = Sl,
    n = t.length,
    r,
    i = "value" in _t ? _t.value : _t.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Bi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function bi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ci() {
  return !0;
}
function Qu() {
  return !1;
}
function Me(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ci
        : Qu),
      (this.isPropagationStopped = Qu),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ci));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ci));
      },
      persist: function () {},
      isPersistent: Ci,
    }),
    t
  );
}
var er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  kl = Me(er),
  li = Q({}, er, { view: 0, detail: 0 }),
  dy = Me(li),
  ho,
  po,
  ur,
  Is = Q({}, li, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ur &&
            (ur && e.type === "mousemove"
              ? ((ho = e.screenX - ur.screenX), (po = e.screenY - ur.screenY))
              : (po = ho = 0),
            (ur = e)),
          ho);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : po;
    },
  }),
  Yu = Me(Is),
  hy = Q({}, Is, { dataTransfer: 0 }),
  py = Me(hy),
  my = Q({}, li, { relatedTarget: 0 }),
  mo = Me(my),
  gy = Q({}, er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yy = Me(gy),
  vy = Q({}, er, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  wy = Me(vy),
  xy = Q({}, er, { data: 0 }),
  Xu = Me(xy),
  Sy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ky = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Py = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Cy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Py[e]) ? !!t[e] : !1;
}
function Pl() {
  return Cy;
}
var Ty = Q({}, li, {
    key: function (e) {
      if (e.key) {
        var t = Sy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = bi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ky[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pl,
    charCode: function (e) {
      return e.type === "keypress" ? bi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? bi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ey = Me(Ty),
  Ly = Q({}, Is, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qu = Me(Ly),
  _y = Q({}, li, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pl,
  }),
  Ny = Me(_y),
  Ry = Q({}, er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ay = Me(Ry),
  Dy = Q({}, Is, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Oy = Me(Dy),
  jy = [9, 13, 27, 32],
  Cl = mt && "CompositionEvent" in window,
  Er = null;
mt && "documentMode" in document && (Er = document.documentMode);
var My = mt && "TextEvent" in window && !Er,
  ch = mt && (!Cl || (Er && 8 < Er && 11 >= Er)),
  Zu = " ",
  Ju = !1;
function fh(e, t) {
  switch (e) {
    case "keyup":
      return jy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function dh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var kn = !1;
function Vy(e, t) {
  switch (e) {
    case "compositionend":
      return dh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ju = !0), Zu);
    case "textInput":
      return (e = t.data), e === Zu && Ju ? null : e;
    default:
      return null;
  }
}
function Fy(e, t) {
  if (kn)
    return e === "compositionend" || (!Cl && fh(e, t))
      ? ((e = uh()), (Bi = Sl = _t = null), (kn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ch && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Iy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ec(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Iy[e.type] : t === "textarea";
}
function hh(e, t, n, r) {
  Wd(r),
    (t = as(t, "onChange")),
    0 < t.length &&
      ((n = new kl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Lr = null,
  br = null;
function zy(e) {
  Ch(e, 0);
}
function zs(e) {
  var t = Tn(e);
  if (Fd(t)) return e;
}
function $y(e, t) {
  if (e === "change") return t;
}
var ph = !1;
if (mt) {
  var go;
  if (mt) {
    var yo = "oninput" in document;
    if (!yo) {
      var tc = document.createElement("div");
      tc.setAttribute("oninput", "return;"),
        (yo = typeof tc.oninput == "function");
    }
    go = yo;
  } else go = !1;
  ph = go && (!document.documentMode || 9 < document.documentMode);
}
function nc() {
  Lr && (Lr.detachEvent("onpropertychange", mh), (br = Lr = null));
}
function mh(e) {
  if (e.propertyName === "value" && zs(br)) {
    var t = [];
    hh(t, br, e, gl(e)), Qd(zy, t);
  }
}
function Uy(e, t, n) {
  e === "focusin"
    ? (nc(), (Lr = t), (br = n), Lr.attachEvent("onpropertychange", mh))
    : e === "focusout" && nc();
}
function By(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return zs(br);
}
function by(e, t) {
  if (e === "click") return zs(t);
}
function Wy(e, t) {
  if (e === "input" || e === "change") return zs(t);
}
function Ky(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : Ky;
function Wr(e, t) {
  if (Ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Go.call(t, i) || !Ze(e[i], t[i])) return !1;
  }
  return !0;
}
function rc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ic(e, t) {
  var n = rc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = rc(n);
  }
}
function gh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? gh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function yh() {
  for (var e = window, t = es(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = es(e.document);
  }
  return t;
}
function Tl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Hy(e) {
  var t = yh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    gh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Tl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = ic(n, s));
        var o = ic(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Gy = mt && "documentMode" in document && 11 >= document.documentMode,
  Pn = null,
  da = null,
  _r = null,
  ha = !1;
function sc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ha ||
    Pn == null ||
    Pn !== es(r) ||
    ((r = Pn),
    "selectionStart" in r && Tl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (_r && Wr(_r, r)) ||
      ((_r = r),
      (r = as(da, "onSelect")),
      0 < r.length &&
        ((t = new kl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Pn))));
}
function Ti(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Cn = {
    animationend: Ti("Animation", "AnimationEnd"),
    animationiteration: Ti("Animation", "AnimationIteration"),
    animationstart: Ti("Animation", "AnimationStart"),
    transitionend: Ti("Transition", "TransitionEnd"),
  },
  vo = {},
  vh = {};
mt &&
  ((vh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Cn.animationend.animation,
    delete Cn.animationiteration.animation,
    delete Cn.animationstart.animation),
  "TransitionEvent" in window || delete Cn.transitionend.transition);
function $s(e) {
  if (vo[e]) return vo[e];
  if (!Cn[e]) return e;
  var t = Cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in vh) return (vo[e] = t[n]);
  return e;
}
var wh = $s("animationend"),
  xh = $s("animationiteration"),
  Sh = $s("animationstart"),
  kh = $s("transitionend"),
  Ph = new Map(),
  oc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Bt(e, t) {
  Ph.set(e, t), mn(t, [e]);
}
for (var wo = 0; wo < oc.length; wo++) {
  var xo = oc[wo],
    Qy = xo.toLowerCase(),
    Yy = xo[0].toUpperCase() + xo.slice(1);
  Bt(Qy, "on" + Yy);
}
Bt(wh, "onAnimationEnd");
Bt(xh, "onAnimationIteration");
Bt(Sh, "onAnimationStart");
Bt("dblclick", "onDoubleClick");
Bt("focusin", "onFocus");
Bt("focusout", "onBlur");
Bt(kh, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
mn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
mn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
mn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
mn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Xy = new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));
function ac(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Qg(r, t, void 0, e), (e.currentTarget = null);
}
function Ch(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          ac(i, a, u), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          ac(i, a, u), (s = l);
        }
    }
  }
  if (ns) throw ((e = la), (ns = !1), (la = null), e);
}
function U(e, t) {
  var n = t[va];
  n === void 0 && (n = t[va] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Th(t, e, 2, !1), n.add(r));
}
function So(e, t, n) {
  var r = 0;
  t && (r |= 4), Th(n, e, r, t);
}
var Ei = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[Ei]) {
    (e[Ei] = !0),
      Dd.forEach(function (n) {
        n !== "selectionchange" && (Xy.has(n) || So(n, !1, e), So(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ei] || ((t[Ei] = !0), So("selectionchange", !1, t));
  }
}
function Th(e, t, n, r) {
  switch (lh(t)) {
    case 1:
      var i = cy;
      break;
    case 4:
      i = fy;
      break;
    default:
      i = xl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !aa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ko(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = tn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Qd(function () {
    var u = s,
      c = gl(n),
      d = [];
    e: {
      var f = Ph.get(e);
      if (f !== void 0) {
        var g = kl,
          y = e;
        switch (e) {
          case "keypress":
            if (bi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Ey;
            break;
          case "focusin":
            (y = "focus"), (g = mo);
            break;
          case "focusout":
            (y = "blur"), (g = mo);
            break;
          case "beforeblur":
          case "afterblur":
            g = mo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Yu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = py;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Ny;
            break;
          case wh:
          case xh:
          case Sh:
            g = yy;
            break;
          case kh:
            g = Ay;
            break;
          case "scroll":
            g = dy;
            break;
          case "wheel":
            g = Oy;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = wy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = qu;
        }
        var v = (t & 4) !== 0,
          k = !v && e === "scroll",
          p = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              p !== null && ((w = zr(h, p)), w != null && v.push(Hr(h, w, m)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((f = new g(f, y, null, n, c)), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          f &&
            n !== sa &&
            (y = n.relatedTarget || n.fromElement) &&
            (tn(y) || y[gt]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? tn(y) : null),
              y !== null &&
                ((k = gn(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = Yu),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = qu),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (k = g == null ? f : Tn(g)),
            (m = y == null ? f : Tn(y)),
            (f = new v(w, h + "leave", g, n, c)),
            (f.target = k),
            (f.relatedTarget = m),
            (w = null),
            tn(c) === u &&
              ((v = new v(p, h + "enter", y, n, c)),
              (v.target = m),
              (v.relatedTarget = k),
              (w = v)),
            (k = w),
            g && y)
          )
            t: {
              for (v = g, p = y, h = 0, m = v; m; m = yn(m)) h++;
              for (m = 0, w = p; w; w = yn(w)) m++;
              for (; 0 < h - m; ) (v = yn(v)), h--;
              for (; 0 < m - h; ) (p = yn(p)), m--;
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = yn(v)), (p = yn(p));
              }
              v = null;
            }
          else v = null;
          g !== null && lc(d, f, g, v, !1),
            y !== null && k !== null && lc(d, k, y, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? Tn(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === "select" || (g === "input" && f.type === "file"))
        )
          var S = $y;
        else if (ec(f))
          if (ph) S = Wy;
          else {
            S = By;
            var C = Uy;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (S = by);
        if (S && (S = S(e, u))) {
          hh(d, S, n, c);
          break e;
        }
        C && C(e, f, u),
          e === "focusout" &&
            (C = f._wrapperState) &&
            C.controlled &&
            f.type === "number" &&
            ea(f, "number", f.value);
      }
      switch (((C = u ? Tn(u) : window), e)) {
        case "focusin":
          (ec(C) || C.contentEditable === "true") &&
            ((Pn = C), (da = u), (_r = null));
          break;
        case "focusout":
          _r = da = Pn = null;
          break;
        case "mousedown":
          ha = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ha = !1), sc(d, n, c);
          break;
        case "selectionchange":
          if (Gy) break;
        case "keydown":
        case "keyup":
          sc(d, n, c);
      }
      var T;
      if (Cl)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        kn
          ? fh(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (ch &&
          n.locale !== "ko" &&
          (kn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && kn && (T = uh())
            : ((_t = c),
              (Sl = "value" in _t ? _t.value : _t.textContent),
              (kn = !0))),
        (C = as(u, P)),
        0 < C.length &&
          ((P = new Xu(P, e, null, n, c)),
          d.push({ event: P, listeners: C }),
          T ? (P.data = T) : ((T = dh(n)), T !== null && (P.data = T)))),
        (T = My ? Vy(e, n) : Fy(e, n)) &&
          ((u = as(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Xu("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    Ch(d, t);
  });
}
function Hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function as(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = zr(e, n)),
      s != null && r.unshift(Hr(e, s, i)),
      (s = zr(e, t)),
      s != null && r.push(Hr(e, s, i))),
      (e = e.return);
  }
  return r;
}
function yn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function lc(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = zr(n, s)), l != null && o.unshift(Hr(n, l, a)))
        : i || ((l = zr(n, s)), l != null && o.push(Hr(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var qy = /\r\n?/g,
  Zy = /\u0000|\uFFFD/g;
function uc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      qy,
      `
`
    )
    .replace(Zy, "");
}
function Li(e, t, n) {
  if (((t = uc(t)), uc(e) !== t && n)) throw Error(E(425));
}
function ls() {}
var pa = null,
  ma = null;
function ga(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ya = typeof setTimeout == "function" ? setTimeout : void 0,
  Jy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  cc = typeof Promise == "function" ? Promise : void 0,
  ev =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof cc < "u"
      ? function (e) {
          return cc.resolve(null).then(e).catch(tv);
        }
      : ya;
function tv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Po(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Br(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Br(t);
}
function Ot(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var tr = Math.random().toString(36).slice(2),
  nt = "__reactFiber$" + tr,
  Gr = "__reactProps$" + tr,
  gt = "__reactContainer$" + tr,
  va = "__reactEvents$" + tr,
  nv = "__reactListeners$" + tr,
  rv = "__reactHandles$" + tr;
function tn(e) {
  var t = e[nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[gt] || n[nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fc(e); e !== null; ) {
          if ((n = e[nt])) return n;
          e = fc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ui(e) {
  return (
    (e = e[nt] || e[gt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Tn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Us(e) {
  return e[Gr] || null;
}
var wa = [],
  En = -1;
function bt(e) {
  return { current: e };
}
function B(e) {
  0 > En || ((e.current = wa[En]), (wa[En] = null), En--);
}
function $(e, t) {
  En++, (wa[En] = e.current), (e.current = t);
}
var zt = {},
  ye = bt(zt),
  Ce = bt(!1),
  cn = zt;
function Wn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function us() {
  B(Ce), B(ye);
}
function dc(e, t, n) {
  if (ye.current !== zt) throw Error(E(168));
  $(ye, t), $(Ce, n);
}
function Eh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(E(108, Ug(e) || "Unknown", i));
  return Q({}, n, r);
}
function cs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zt),
    (cn = ye.current),
    $(ye, e),
    $(Ce, Ce.current),
    !0
  );
}
function hc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = Eh(e, t, cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(Ce),
      B(ye),
      $(ye, e))
    : B(Ce),
    $(Ce, n);
}
var ut = null,
  Bs = !1,
  Co = !1;
function Lh(e) {
  ut === null ? (ut = [e]) : ut.push(e);
}
function iv(e) {
  (Bs = !0), Lh(e);
}
function Wt() {
  if (!Co && ut !== null) {
    Co = !0;
    var e = 0,
      t = z;
    try {
      var n = ut;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ut = null), (Bs = !1);
    } catch (i) {
      throw (ut !== null && (ut = ut.slice(e + 1)), Zd(yl, Wt), i);
    } finally {
      (z = t), (Co = !1);
    }
  }
  return null;
}
var Ln = [],
  _n = 0,
  fs = null,
  ds = 0,
  Ie = [],
  ze = 0,
  fn = null,
  ct = 1,
  ft = "";
function qt(e, t) {
  (Ln[_n++] = ds), (Ln[_n++] = fs), (fs = e), (ds = t);
}
function _h(e, t, n) {
  (Ie[ze++] = ct), (Ie[ze++] = ft), (Ie[ze++] = fn), (fn = e);
  var r = ct;
  e = ft;
  var i = 32 - Xe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Xe(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (ct = (1 << (32 - Xe(t) + i)) | (n << i) | r),
      (ft = s + e);
  } else (ct = (1 << s) | (n << i) | r), (ft = e);
}
function El(e) {
  e.return !== null && (qt(e, 1), _h(e, 1, 0));
}
function Ll(e) {
  for (; e === fs; )
    (fs = Ln[--_n]), (Ln[_n] = null), (ds = Ln[--_n]), (Ln[_n] = null);
  for (; e === fn; )
    (fn = Ie[--ze]),
      (Ie[ze] = null),
      (ft = Ie[--ze]),
      (Ie[ze] = null),
      (ct = Ie[--ze]),
      (Ie[ze] = null);
}
var Re = null,
  Ne = null,
  W = !1,
  Ye = null;
function Nh(e, t) {
  var n = $e(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function pc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Re = e), (Ne = Ot(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Re = e), (Ne = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = fn !== null ? { id: ct, overflow: ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = $e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Re = e),
            (Ne = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Sa(e) {
  if (W) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!pc(e, t)) {
        if (xa(e)) throw Error(E(418));
        t = Ot(n.nextSibling);
        var r = Re;
        t && pc(e, t)
          ? Nh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Re = e));
      }
    } else {
      if (xa(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Re = e);
    }
  }
}
function mc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Re = e;
}
function _i(e) {
  if (e !== Re) return !1;
  if (!W) return mc(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ga(e.type, e.memoizedProps))),
    t && (t = Ne))
  ) {
    if (xa(e)) throw (Rh(), Error(E(418)));
    for (; t; ) Nh(e, t), (t = Ot(t.nextSibling));
  }
  if ((mc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ne = Ot(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = Re ? Ot(e.stateNode.nextSibling) : null;
  return !0;
}
function Rh() {
  for (var e = Ne; e; ) e = Ot(e.nextSibling);
}
function Kn() {
  (Ne = Re = null), (W = !1);
}
function _l(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var sv = xt.ReactCurrentBatchConfig;
function cr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Ni(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function gc(e) {
  var t = e._init;
  return t(e._payload);
}
function Ah(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Ft(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, m, w) {
    return h === null || h.tag !== 6
      ? ((h = Ao(m, p.mode, w)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function l(p, h, m, w) {
    var S = m.type;
    return S === Sn
      ? c(p, h, m.props.children, w, m.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Ct &&
            gc(S) === h.type))
      ? ((w = i(h, m.props)), (w.ref = cr(p, h, m)), (w.return = p), w)
      : ((w = Xi(m.type, m.key, m.props, null, p.mode, w)),
        (w.ref = cr(p, h, m)),
        (w.return = p),
        w);
  }
  function u(p, h, m, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Do(m, p.mode, w)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, w, S) {
    return h === null || h.tag !== 7
      ? ((h = an(m, p.mode, w, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function d(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Ao("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case vi:
          return (
            (m = Xi(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = cr(p, null, h)),
            (m.return = p),
            m
          );
        case xn:
          return (h = Do(h, p.mode, m)), (h.return = p), h;
        case Ct:
          var w = h._init;
          return d(p, w(h._payload), m);
      }
      if (vr(h) || sr(h))
        return (h = an(h, p.mode, m, null)), (h.return = p), h;
      Ni(p, h);
    }
    return null;
  }
  function f(p, h, m, w) {
    var S = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : a(p, h, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case vi:
          return m.key === S ? l(p, h, m, w) : null;
        case xn:
          return m.key === S ? u(p, h, m, w) : null;
        case Ct:
          return (S = m._init), f(p, h, S(m._payload), w);
      }
      if (vr(m) || sr(m)) return S !== null ? null : c(p, h, m, w, null);
      Ni(p, m);
    }
    return null;
  }
  function g(p, h, m, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (p = p.get(m) || null), a(h, p, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case vi:
          return (p = p.get(w.key === null ? m : w.key) || null), l(h, p, w, S);
        case xn:
          return (p = p.get(w.key === null ? m : w.key) || null), u(h, p, w, S);
        case Ct:
          var C = w._init;
          return g(p, h, m, C(w._payload), S);
      }
      if (vr(w) || sr(w)) return (p = p.get(m) || null), c(h, p, w, S, null);
      Ni(h, w);
    }
    return null;
  }
  function y(p, h, m, w) {
    for (
      var S = null, C = null, T = h, P = (h = 0), D = null;
      T !== null && P < m.length;
      P++
    ) {
      T.index > P ? ((D = T), (T = null)) : (D = T.sibling);
      var N = f(p, T, m[P], w);
      if (N === null) {
        T === null && (T = D);
        break;
      }
      e && T && N.alternate === null && t(p, T),
        (h = s(N, h, P)),
        C === null ? (S = N) : (C.sibling = N),
        (C = N),
        (T = D);
    }
    if (P === m.length) return n(p, T), W && qt(p, P), S;
    if (T === null) {
      for (; P < m.length; P++)
        (T = d(p, m[P], w)),
          T !== null &&
            ((h = s(T, h, P)), C === null ? (S = T) : (C.sibling = T), (C = T));
      return W && qt(p, P), S;
    }
    for (T = r(p, T); P < m.length; P++)
      (D = g(T, p, P, m[P], w)),
        D !== null &&
          (e && D.alternate !== null && T.delete(D.key === null ? P : D.key),
          (h = s(D, h, P)),
          C === null ? (S = D) : (C.sibling = D),
          (C = D));
    return (
      e &&
        T.forEach(function (I) {
          return t(p, I);
        }),
      W && qt(p, P),
      S
    );
  }
  function v(p, h, m, w) {
    var S = sr(m);
    if (typeof S != "function") throw Error(E(150));
    if (((m = S.call(m)), m == null)) throw Error(E(151));
    for (
      var C = (S = null), T = h, P = (h = 0), D = null, N = m.next();
      T !== null && !N.done;
      P++, N = m.next()
    ) {
      T.index > P ? ((D = T), (T = null)) : (D = T.sibling);
      var I = f(p, T, N.value, w);
      if (I === null) {
        T === null && (T = D);
        break;
      }
      e && T && I.alternate === null && t(p, T),
        (h = s(I, h, P)),
        C === null ? (S = I) : (C.sibling = I),
        (C = I),
        (T = D);
    }
    if (N.done) return n(p, T), W && qt(p, P), S;
    if (T === null) {
      for (; !N.done; P++, N = m.next())
        (N = d(p, N.value, w)),
          N !== null &&
            ((h = s(N, h, P)), C === null ? (S = N) : (C.sibling = N), (C = N));
      return W && qt(p, P), S;
    }
    for (T = r(p, T); !N.done; P++, N = m.next())
      (N = g(T, p, P, N.value, w)),
        N !== null &&
          (e && N.alternate !== null && T.delete(N.key === null ? P : N.key),
          (h = s(N, h, P)),
          C === null ? (S = N) : (C.sibling = N),
          (C = N));
    return (
      e &&
        T.forEach(function (Je) {
          return t(p, Je);
        }),
      W && qt(p, P),
      S
    );
  }
  function k(p, h, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Sn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case vi:
          e: {
            for (var S = m.key, C = h; C !== null; ) {
              if (C.key === S) {
                if (((S = m.type), S === Sn)) {
                  if (C.tag === 7) {
                    n(p, C.sibling),
                      (h = i(C, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Ct &&
                    gc(S) === C.type)
                ) {
                  n(p, C.sibling),
                    (h = i(C, m.props)),
                    (h.ref = cr(p, C, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, C);
                break;
              } else t(p, C);
              C = C.sibling;
            }
            m.type === Sn
              ? ((h = an(m.props.children, p.mode, w, m.key)),
                (h.return = p),
                (p = h))
              : ((w = Xi(m.type, m.key, m.props, null, p.mode, w)),
                (w.ref = cr(p, h, m)),
                (w.return = p),
                (p = w));
          }
          return o(p);
        case xn:
          e: {
            for (C = m.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = Do(m, p.mode, w)), (h.return = p), (p = h);
          }
          return o(p);
        case Ct:
          return (C = m._init), k(p, h, C(m._payload), w);
      }
      if (vr(m)) return y(p, h, m, w);
      if (sr(m)) return v(p, h, m, w);
      Ni(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = Ao(m, p.mode, w)), (h.return = p), (p = h)),
        o(p))
      : n(p, h);
  }
  return k;
}
var Hn = Ah(!0),
  Dh = Ah(!1),
  hs = bt(null),
  ps = null,
  Nn = null,
  Nl = null;
function Rl() {
  Nl = Nn = ps = null;
}
function Al(e) {
  var t = hs.current;
  B(hs), (e._currentValue = t);
}
function ka(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Un(e, t) {
  (ps = e),
    (Nl = Nn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function Be(e) {
  var t = e._currentValue;
  if (Nl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Nn === null)) {
      if (ps === null) throw Error(E(308));
      (Nn = e), (ps.dependencies = { lanes: 0, firstContext: e });
    } else Nn = Nn.next = e;
  return t;
}
var nn = null;
function Dl(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function Oh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Dl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    yt(e, r)
  );
}
function yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Tt = !1;
function Ol(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function jh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function dt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      yt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Dl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    yt(e, n)
  );
}
function Wi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vl(e, n);
  }
}
function yc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ms(e, t, n, r) {
  var i = e.updateQueue;
  Tt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (c = u = l = null), (a = s);
    do {
      var f = a.lane,
        g = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            v = a;
          switch (((f = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                d = y.call(g, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (f = typeof y == "function" ? y.call(g, d, f) : y),
                f == null)
              )
                break e;
              d = Q({}, d, f);
              break e;
            case 2:
              Tt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = d)) : (c = c.next = g),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (hn |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function vc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(E(191, i));
        i.call(r);
      }
    }
}
var ci = {},
  st = bt(ci),
  Qr = bt(ci),
  Yr = bt(ci);
function rn(e) {
  if (e === ci) throw Error(E(174));
  return e;
}
function jl(e, t) {
  switch (($(Yr, t), $(Qr, e), $(st, ci), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : na(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = na(t, e));
  }
  B(st), $(st, t);
}
function Gn() {
  B(st), B(Qr), B(Yr);
}
function Mh(e) {
  rn(Yr.current);
  var t = rn(st.current),
    n = na(t, e.type);
  t !== n && ($(Qr, e), $(st, n));
}
function Ml(e) {
  Qr.current === e && (B(st), B(Qr));
}
var K = bt(0);
function gs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var To = [];
function Vl() {
  for (var e = 0; e < To.length; e++)
    To[e]._workInProgressVersionPrimary = null;
  To.length = 0;
}
var Ki = xt.ReactCurrentDispatcher,
  Eo = xt.ReactCurrentBatchConfig,
  dn = 0,
  G = null,
  te = null,
  se = null,
  ys = !1,
  Nr = !1,
  Xr = 0,
  ov = 0;
function de() {
  throw Error(E(321));
}
function Fl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ze(e[n], t[n])) return !1;
  return !0;
}
function Il(e, t, n, r, i, s) {
  if (
    ((dn = s),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ki.current = e === null || e.memoizedState === null ? cv : fv),
    (e = n(r, i)),
    Nr)
  ) {
    s = 0;
    do {
      if (((Nr = !1), (Xr = 0), 25 <= s)) throw Error(E(301));
      (s += 1),
        (se = te = null),
        (t.updateQueue = null),
        (Ki.current = dv),
        (e = n(r, i));
    } while (Nr);
  }
  if (
    ((Ki.current = vs),
    (t = te !== null && te.next !== null),
    (dn = 0),
    (se = te = G = null),
    (ys = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function zl() {
  var e = Xr !== 0;
  return (Xr = 0), e;
}
function tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return se === null ? (G.memoizedState = se = e) : (se = se.next = e), se;
}
function be() {
  if (te === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = se === null ? G.memoizedState : se.next;
  if (t !== null) (se = t), (te = e);
  else {
    if (e === null) throw Error(E(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      se === null ? (G.memoizedState = se = e) : (se = se.next = e);
  }
  return se;
}
function qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Lo(e) {
  var t = be(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = te,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((dn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (G.lanes |= c),
          (hn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (o = r) : (l.next = a),
      Ze(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (G.lanes |= s), (hn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function _o(e) {
  var t = be(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Ze(s, t.memoizedState) || (Pe = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Vh() {}
function Fh(e, t) {
  var n = G,
    r = be(),
    i = t(),
    s = !Ze(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    $l($h.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (se !== null && se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Zr(9, zh.bind(null, n, r, i, t), void 0, null),
      oe === null)
    )
      throw Error(E(349));
    dn & 30 || Ih(n, t, i);
  }
  return i;
}
function Ih(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Uh(t) && Bh(e);
}
function $h(e, t, n) {
  return n(function () {
    Uh(t) && Bh(e);
  });
}
function Uh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ze(e, n);
  } catch {
    return !0;
  }
}
function Bh(e) {
  var t = yt(e, 1);
  t !== null && qe(t, e, 1, -1);
}
function wc(e) {
  var t = tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = uv.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function Zr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function bh() {
  return be().memoizedState;
}
function Hi(e, t, n, r) {
  var i = tt();
  (G.flags |= e),
    (i.memoizedState = Zr(1 | t, n, void 0, r === void 0 ? null : r));
}
function bs(e, t, n, r) {
  var i = be();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (te !== null) {
    var o = te.memoizedState;
    if (((s = o.destroy), r !== null && Fl(r, o.deps))) {
      i.memoizedState = Zr(t, n, s, r);
      return;
    }
  }
  (G.flags |= e), (i.memoizedState = Zr(1 | t, n, s, r));
}
function xc(e, t) {
  return Hi(8390656, 8, e, t);
}
function $l(e, t) {
  return bs(2048, 8, e, t);
}
function Wh(e, t) {
  return bs(4, 2, e, t);
}
function Kh(e, t) {
  return bs(4, 4, e, t);
}
function Hh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Gh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), bs(4, 4, Hh.bind(null, t, e), n)
  );
}
function Ul() {}
function Qh(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yh(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xh(e, t, n) {
  return dn & 21
    ? (Ze(n, t) || ((n = th()), (G.lanes |= n), (hn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function av(e, t) {
  var n = z;
  (z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Eo.transition;
  Eo.transition = {};
  try {
    e(!1), t();
  } finally {
    (z = n), (Eo.transition = r);
  }
}
function qh() {
  return be().memoizedState;
}
function lv(e, t, n) {
  var r = Vt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Zh(e))
  )
    Jh(t, n);
  else if (((n = Oh(e, t, n, r)), n !== null)) {
    var i = we();
    qe(n, e, r, i), ep(n, t, r);
  }
}
function uv(e, t, n) {
  var r = Vt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zh(e)) Jh(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Ze(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Dl(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Oh(e, t, i, r)),
      n !== null && ((i = we()), qe(n, e, r, i), ep(n, t, r));
  }
}
function Zh(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function Jh(e, t) {
  Nr = ys = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ep(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vl(e, n);
  }
}
var vs = {
    readContext: Be,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  cv = {
    readContext: Be,
    useCallback: function (e, t) {
      return (tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Be,
    useEffect: xc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hi(4194308, 4, Hh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = tt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = tt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = lv.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wc,
    useDebugValue: Ul,
    useDeferredValue: function (e) {
      return (tt().memoizedState = e);
    },
    useTransition: function () {
      var e = wc(!1),
        t = e[0];
      return (e = av.bind(null, e[1])), (tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        i = tt();
      if (W) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), oe === null)) throw Error(E(349));
        dn & 30 || Ih(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        xc($h.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Zr(9, zh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = tt(),
        t = oe.identifierPrefix;
      if (W) {
        var n = ft,
          r = ct;
        (n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ov++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  fv = {
    readContext: Be,
    useCallback: Qh,
    useContext: Be,
    useEffect: $l,
    useImperativeHandle: Gh,
    useInsertionEffect: Wh,
    useLayoutEffect: Kh,
    useMemo: Yh,
    useReducer: Lo,
    useRef: bh,
    useState: function () {
      return Lo(qr);
    },
    useDebugValue: Ul,
    useDeferredValue: function (e) {
      var t = be();
      return Xh(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = Lo(qr)[0],
        t = be().memoizedState;
      return [e, t];
    },
    useMutableSource: Vh,
    useSyncExternalStore: Fh,
    useId: qh,
    unstable_isNewReconciler: !1,
  },
  dv = {
    readContext: Be,
    useCallback: Qh,
    useContext: Be,
    useEffect: $l,
    useImperativeHandle: Gh,
    useInsertionEffect: Wh,
    useLayoutEffect: Kh,
    useMemo: Yh,
    useReducer: _o,
    useRef: bh,
    useState: function () {
      return _o(qr);
    },
    useDebugValue: Ul,
    useDeferredValue: function (e) {
      var t = be();
      return te === null ? (t.memoizedState = e) : Xh(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = _o(qr)[0],
        t = be().memoizedState;
      return [e, t];
    },
    useMutableSource: Vh,
    useSyncExternalStore: Fh,
    useId: qh,
    unstable_isNewReconciler: !1,
  };
function Ge(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Pa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ws = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      i = Vt(e),
      s = dt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = jt(e, s, i)),
      t !== null && (qe(t, e, i, r), Wi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      i = Vt(e),
      s = dt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = jt(e, s, i)),
      t !== null && (qe(t, e, i, r), Wi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = we(),
      r = Vt(e),
      i = dt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = jt(e, i, r)),
      t !== null && (qe(t, e, r, n), Wi(t, e, r));
  },
};
function Sc(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Wr(n, r) || !Wr(i, s)
      : !0
  );
}
function tp(e, t, n) {
  var r = !1,
    i = zt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Be(s))
      : ((i = Te(t) ? cn : ye.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Wn(e, i) : zt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ws),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function kc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ws.enqueueReplaceState(t, t.state, null);
}
function Ca(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ol(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Be(s))
    : ((s = Te(t) ? cn : ye.current), (i.context = Wn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Pa(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ws.enqueueReplaceState(i, i.state, null),
      ms(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Qn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += $g(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function No(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ta(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var hv = typeof WeakMap == "function" ? WeakMap : Map;
function np(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xs || ((xs = !0), (Ma = r)), Ta(e, t);
    }),
    n
  );
}
function rp(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ta(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Ta(e, t),
          typeof r != "function" &&
            (Mt === null ? (Mt = new Set([this])) : Mt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Pc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new hv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Lv.bind(null, e, t, n)), t.then(e, e));
}
function Cc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Tc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = dt(-1, 1)), (t.tag = 2), jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var pv = xt.ReactCurrentOwner,
  Pe = !1;
function ve(e, t, n, r) {
  t.child = e === null ? Dh(t, null, n, r) : Hn(t, e.child, n, r);
}
function Ec(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Un(t, i),
    (r = Il(e, t, n, r, s, i)),
    (n = zl()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (W && n && El(t), (t.flags |= 1), ve(e, t, r, i), t.child)
  );
}
function Lc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Yl(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), ip(e, t, s, r, i))
      : ((e = Xi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Wr), n(o, r) && e.ref === t.ref)
    )
      return vt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ft(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ip(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Wr(s, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Pe = !0);
      else return (t.lanes = e.lanes), vt(e, t, i);
  }
  return Ea(e, t, n, r, i);
}
function sp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(An, _e),
        (_e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          $(An, _e),
          (_e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        $(An, _e),
        (_e |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      $(An, _e),
      (_e |= r);
  return ve(e, t, i, n), t.child;
}
function op(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ea(e, t, n, r, i) {
  var s = Te(n) ? cn : ye.current;
  return (
    (s = Wn(t, s)),
    Un(t, i),
    (n = Il(e, t, n, r, s, i)),
    (r = zl()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (W && r && El(t), (t.flags |= 1), ve(e, t, n, i), t.child)
  );
}
function _c(e, t, n, r, i) {
  if (Te(n)) {
    var s = !0;
    cs(t);
  } else s = !1;
  if ((Un(t, i), t.stateNode === null))
    Gi(e, t), tp(t, n, r), Ca(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Be(u))
      : ((u = Te(n) ? cn : ye.current), (u = Wn(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && kc(t, o, r, u)),
      (Tt = !1);
    var f = t.memoizedState;
    (o.state = f),
      ms(t, r, o, i),
      (l = t.memoizedState),
      a !== r || f !== l || Ce.current || Tt
        ? (typeof c == "function" && (Pa(t, n, c, r), (l = t.memoizedState)),
          (a = Tt || Sc(t, n, a, r, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      jh(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Ge(t.type, a)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Be(l))
        : ((l = Te(n) ? cn : ye.current), (l = Wn(t, l)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && kc(t, o, r, l)),
      (Tt = !1),
      (f = t.memoizedState),
      (o.state = f),
      ms(t, r, o, i);
    var y = t.memoizedState;
    a !== d || f !== y || Ce.current || Tt
      ? (typeof g == "function" && (Pa(t, n, g, r), (y = t.memoizedState)),
        (u = Tt || Sc(t, n, u, r, f, y, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return La(e, t, n, r, s, i);
}
function La(e, t, n, r, i, s) {
  op(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && hc(t, n, !1), vt(e, t, s);
  (r = t.stateNode), (pv.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Hn(t, e.child, null, s)), (t.child = Hn(t, null, a, s)))
      : ve(e, t, a, s),
    (t.memoizedState = r.state),
    i && hc(t, n, !0),
    t.child
  );
}
function ap(e) {
  var t = e.stateNode;
  t.pendingContext
    ? dc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && dc(e, t.context, !1),
    jl(e, t.containerInfo);
}
function Nc(e, t, n, r, i) {
  return Kn(), _l(i), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var _a = { dehydrated: null, treeContext: null, retryLane: 0 };
function Na(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function lp(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    $(K, i & 1),
    e === null)
  )
    return (
      Sa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Gs(o, r, 0, null)),
              (e = an(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Na(n)),
              (t.memoizedState = _a),
              e)
            : Bl(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return mv(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Ft(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Ft(a, s)) : ((s = an(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Na(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = _a),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Ft(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Bl(e, t) {
  return (
    (t = Gs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ri(e, t, n, r) {
  return (
    r !== null && _l(r),
    Hn(t, e.child, null, n),
    (e = Bl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function mv(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = No(Error(E(422)))), Ri(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Gs({ mode: "visible", children: r.children }, i, 0, null)),
        (s = an(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Hn(t, e.child, null, o),
        (t.child.memoizedState = Na(o)),
        (t.memoizedState = _a),
        s);
  if (!(t.mode & 1)) return Ri(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(E(419))), (r = No(s, r, void 0)), Ri(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Pe || a)) {
    if (((r = oe), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), yt(e, i), qe(r, e, i, -1));
    }
    return Ql(), (r = No(Error(E(421)))), Ri(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = _v.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ne = Ot(i.nextSibling)),
      (Re = t),
      (W = !0),
      (Ye = null),
      e !== null &&
        ((Ie[ze++] = ct),
        (Ie[ze++] = ft),
        (Ie[ze++] = fn),
        (ct = e.id),
        (ft = e.overflow),
        (fn = t)),
      (t = Bl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Rc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ka(e.return, t, n);
}
function Ro(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function up(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ve(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rc(e, n, t);
        else if (e.tag === 19) Rc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if (($(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && gs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ro(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && gs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ro(t, !0, n, null, s);
        break;
      case "together":
        Ro(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Gi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (hn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function gv(e, t, n) {
  switch (t.tag) {
    case 3:
      ap(t), Kn();
      break;
    case 5:
      Mh(t);
      break;
    case 1:
      Te(t.type) && cs(t);
      break;
    case 4:
      jl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      $(hs, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? ($(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? lp(e, t, n)
          : ($(K, K.current & 1),
            (e = vt(e, t, n)),
            e !== null ? e.sibling : null);
      $(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return up(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        $(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), sp(e, t, n);
  }
  return vt(e, t, n);
}
var cp, Ra, fp, dp;
cp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ra = function () {};
fp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), rn(st.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Zo(e, i)), (r = Zo(e, r)), (s = []);
        break;
      case "select":
        (i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = ta(e, i)), (r = ta(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ls);
    }
    ra(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Fr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Fr.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && U("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
dp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function fr(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function yv(e, t, n) {
  var r = t.pendingProps;
  switch ((Ll(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return he(t), null;
    case 1:
      return Te(t.type) && us(), he(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Gn(),
        B(Ce),
        B(ye),
        Vl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_i(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (Ia(Ye), (Ye = null)))),
        Ra(e, t),
        he(t),
        null
      );
    case 5:
      Ml(t);
      var i = rn(Yr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        fp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return he(t), null;
        }
        if (((e = rn(st.current)), _i(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[nt] = t), (r[Gr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < xr.length; i++) U(xr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              zu(r, s), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              Uu(r, s), U("invalid", r);
          }
          ra(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Li(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Li(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Fr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              wi(r), $u(r, s, !0);
              break;
            case "textarea":
              wi(r), Bu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ls);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = $d(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[nt] = t),
            (e[Gr] = r),
            cp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ia(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < xr.length; i++) U(xr[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                zu(e, r), (i = Zo(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Uu(e, r), (i = ta(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            ra(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? bd(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Ud(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Ir(e, l)
                    : typeof l == "number" && Ir(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Fr.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && U("scroll", e)
                      : l != null && dl(e, s, l, o));
              }
            switch (n) {
              case "input":
                wi(e), $u(e, r, !1);
                break;
              case "textarea":
                wi(e), Bu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + It(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Fn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Fn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ls);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) dp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = rn(Yr.current)), rn(st.current), _i(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[nt] = t),
            (s = r.nodeValue !== n) && ((e = Re), e !== null))
          )
            switch (e.tag) {
              case 3:
                Li(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Li(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[nt] = t),
            (t.stateNode = r);
      }
      return he(t), null;
    case 13:
      if (
        (B(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Ne !== null && t.mode & 1 && !(t.flags & 128))
          Rh(), Kn(), (t.flags |= 98560), (s = !1);
        else if (((s = _i(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(E(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(E(317));
            s[nt] = t;
          } else
            Kn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          he(t), (s = !1);
        } else Ye !== null && (Ia(Ye), (Ye = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? ne === 0 && (ne = 3) : Ql())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        Gn(), Ra(e, t), e === null && Kr(t.stateNode.containerInfo), he(t), null
      );
    case 10:
      return Al(t.type._context), he(t), null;
    case 17:
      return Te(t.type) && us(), he(t), null;
    case 19:
      if ((B(K), (s = t.memoizedState), s === null)) return he(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) fr(s, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = gs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    fr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return $(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            J() > Yn &&
            ((t.flags |= 128), (r = !0), fr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              fr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !W)
            )
              return he(t), null;
          } else
            2 * J() - s.renderingStartTime > Yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), fr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = J()),
          (t.sibling = null),
          (n = K.current),
          $(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        Gl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? _e & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function vv(e, t) {
  switch ((Ll(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && us(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Gn(),
        B(Ce),
        B(ye),
        Vl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ml(t), null;
    case 13:
      if ((B(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        Kn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(K), null;
    case 4:
      return Gn(), null;
    case 10:
      return Al(t.type._context), null;
    case 22:
    case 23:
      return Gl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ai = !1,
  me = !1,
  wv = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function Rn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function Aa(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var Ac = !1;
function xv(e, t) {
  if (((pa = ss), (e = yh()), Tl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (f = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (a = o),
                f === s && ++c === r && (l = o),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ma = { focusedElem: e, selectionRange: n }, ss = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    k = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ge(t.type, v),
                      k
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (w) {
          X(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (y = Ac), (Ac = !1), y;
}
function Rr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Aa(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ks(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Da(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function hp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), hp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[nt], delete t[Gr], delete t[va], delete t[nv], delete t[rv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function pp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Dc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || pp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Oa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ls));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oa(e, t, n), e = e.sibling; e !== null; ) Oa(e, t, n), (e = e.sibling);
}
function ja(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ja(e, t, n), e = e.sibling; e !== null; ) ja(e, t, n), (e = e.sibling);
}
var ae = null,
  Qe = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; ) mp(e, t, n), (n = n.sibling);
}
function mp(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == "function")
    try {
      it.onCommitFiberUnmount(Fs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || Rn(n, t);
    case 6:
      var r = ae,
        i = Qe;
      (ae = null),
        kt(e, t, n),
        (ae = r),
        (Qe = i),
        ae !== null &&
          (Qe
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (Qe
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? Po(e.parentNode, n)
              : e.nodeType === 1 && Po(e, n),
            Br(e))
          : Po(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (i = Qe),
        (ae = n.stateNode.containerInfo),
        (Qe = !0),
        kt(e, t, n),
        (ae = r),
        (Qe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Aa(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (Rn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          X(n, t, a);
        }
      kt(e, t, n);
      break;
    case 21:
      kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), kt(e, t, n), (me = r))
        : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function Oc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new wv()),
      t.forEach(function (r) {
        var i = Nv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ae = a.stateNode), (Qe = !1);
              break e;
            case 3:
              (ae = a.stateNode.containerInfo), (Qe = !0);
              break e;
            case 4:
              (ae = a.stateNode.containerInfo), (Qe = !0);
              break e;
          }
          a = a.return;
        }
        if (ae === null) throw Error(E(160));
        mp(s, o, i), (ae = null), (Qe = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        X(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) gp(t, e), (t = t.sibling);
}
function gp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), et(e), r & 4)) {
        try {
          Rr(3, e, e.return), Ks(3, e);
        } catch (v) {
          X(e, e.return, v);
        }
        try {
          Rr(5, e, e.return);
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 1:
      Ke(t, e), et(e), r & 512 && n !== null && Rn(n, n.return);
      break;
    case 5:
      if (
        (Ke(t, e),
        et(e),
        r & 512 && n !== null && Rn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ir(i, "");
        } catch (v) {
          X(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Id(i, s),
              ia(a, o);
            var u = ia(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? bd(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Ud(i, d)
                : c === "children"
                ? Ir(i, d)
                : dl(i, c, d, u);
            }
            switch (a) {
              case "input":
                Jo(i, s);
                break;
              case "textarea":
                zd(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Fn(i, !!s.multiple, g, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Fn(i, !!s.multiple, s.defaultValue, !0)
                      : Fn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Gr] = s;
          } catch (v) {
            X(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), et(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Ke(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Br(t.containerInfo);
        } catch (v) {
          X(e, e.return, v);
        }
      break;
    case 4:
      Ke(t, e), et(e);
      break;
    case 13:
      Ke(t, e),
        et(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Kl = J())),
        r & 4 && Oc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (u = me) || c), Ke(t, e), (me = u)) : Ke(t, e),
        et(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (_ = e, c = e.child; c !== null; ) {
            for (d = _ = c; _ !== null; ) {
              switch (((f = _), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rr(4, f, f.return);
                  break;
                case 1:
                  Rn(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      X(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Rn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Mc(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (_ = g)) : Mc(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Bd("display", o)));
              } catch (v) {
                X(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                X(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Ke(t, e), et(e), r & 4 && Oc(e);
      break;
    case 21:
      break;
    default:
      Ke(t, e), et(e);
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (pp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ir(i, ""), (r.flags &= -33));
          var s = Dc(e);
          ja(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Dc(e);
          Oa(e, a, o);
          break;
        default:
          throw Error(E(161));
      }
    } catch (l) {
      X(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Sv(e, t, n) {
  (_ = e), yp(e);
}
function yp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var i = _,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ai;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || me;
        a = Ai;
        var u = me;
        if (((Ai = o), (me = l) && !u))
          for (_ = i; _ !== null; )
            (o = _),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Vc(i)
                : l !== null
                ? ((l.return = o), (_ = l))
                : Vc(i);
        for (; s !== null; ) (_ = s), yp(s), (s = s.sibling);
        (_ = i), (Ai = a), (me = u);
      }
      jc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (_ = s)) : jc(e);
  }
}
function jc(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Ks(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ge(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && vc(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                vc(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Br(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        me || (t.flags & 512 && Da(t));
      } catch (f) {
        X(t, t.return, f);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Mc(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Vc(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ks(4, t);
          } catch (l) {
            X(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              X(t, i, l);
            }
          }
          var s = t.return;
          try {
            Da(t);
          } catch (l) {
            X(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Da(t);
          } catch (l) {
            X(t, o, l);
          }
      }
    } catch (l) {
      X(t, t.return, l);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (_ = a);
      break;
    }
    _ = t.return;
  }
}
var kv = Math.ceil,
  ws = xt.ReactCurrentDispatcher,
  bl = xt.ReactCurrentOwner,
  Ue = xt.ReactCurrentBatchConfig,
  F = 0,
  oe = null,
  ee = null,
  ce = 0,
  _e = 0,
  An = bt(0),
  ne = 0,
  Jr = null,
  hn = 0,
  Hs = 0,
  Wl = 0,
  Ar = null,
  ke = null,
  Kl = 0,
  Yn = 1 / 0,
  lt = null,
  xs = !1,
  Ma = null,
  Mt = null,
  Di = !1,
  Nt = null,
  Ss = 0,
  Dr = 0,
  Va = null,
  Qi = -1,
  Yi = 0;
function we() {
  return F & 6 ? J() : Qi !== -1 ? Qi : (Qi = J());
}
function Vt(e) {
  return e.mode & 1
    ? F & 2 && ce !== 0
      ? ce & -ce
      : sv.transition !== null
      ? (Yi === 0 && (Yi = th()), Yi)
      : ((e = z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : lh(e.type))),
        e)
    : 1;
}
function qe(e, t, n, r) {
  if (50 < Dr) throw ((Dr = 0), (Va = null), Error(E(185)));
  ai(e, n, r),
    (!(F & 2) || e !== oe) &&
      (e === oe && (!(F & 2) && (Hs |= n), ne === 4 && Lt(e, ce)),
      Ee(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Yn = J() + 500), Bs && Wt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  sy(e, t);
  var r = is(e, e === oe ? ce : 0);
  if (r === 0)
    n !== null && Ku(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ku(n), t === 1))
      e.tag === 0 ? iv(Fc.bind(null, e)) : Lh(Fc.bind(null, e)),
        ev(function () {
          !(F & 6) && Wt();
        }),
        (n = null);
    else {
      switch (nh(r)) {
        case 1:
          n = yl;
          break;
        case 4:
          n = Jd;
          break;
        case 16:
          n = rs;
          break;
        case 536870912:
          n = eh;
          break;
        default:
          n = rs;
      }
      n = Tp(n, vp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function vp(e, t) {
  if (((Qi = -1), (Yi = 0), F & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (Bn() && e.callbackNode !== n) return null;
  var r = is(e, e === oe ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ks(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var s = xp();
    (oe !== e || ce !== t) && ((lt = null), (Yn = J() + 500), on(e, t));
    do
      try {
        Tv();
        break;
      } catch (a) {
        wp(e, a);
      }
    while (!0);
    Rl(),
      (ws.current = s),
      (F = i),
      ee !== null ? (t = 0) : ((oe = null), (ce = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ua(e)), i !== 0 && ((r = i), (t = Fa(e, i)))), t === 1)
    )
      throw ((n = Jr), on(e, 0), Lt(e, r), Ee(e, J()), n);
    if (t === 6) Lt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Pv(i) &&
          ((t = ks(e, r)),
          t === 2 && ((s = ua(e)), s !== 0 && ((r = s), (t = Fa(e, s)))),
          t === 1))
      )
        throw ((n = Jr), on(e, 0), Lt(e, r), Ee(e, J()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Zt(e, ke, lt);
          break;
        case 3:
          if (
            (Lt(e, r), (r & 130023424) === r && ((t = Kl + 500 - J()), 10 < t))
          ) {
            if (is(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ya(Zt.bind(null, e, ke, lt), t);
            break;
          }
          Zt(e, ke, lt);
          break;
        case 4:
          if ((Lt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Xe(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * kv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ya(Zt.bind(null, e, ke, lt), r);
            break;
          }
          Zt(e, ke, lt);
          break;
        case 5:
          Zt(e, ke, lt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ee(e, J()), e.callbackNode === n ? vp.bind(null, e) : null;
}
function Fa(e, t) {
  var n = Ar;
  return (
    e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256),
    (e = ks(e, t)),
    e !== 2 && ((t = ke), (ke = n), t !== null && Ia(t)),
    e
  );
}
function Ia(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function Pv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ze(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Lt(e, t) {
  for (
    t &= ~Wl,
      t &= ~Hs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Xe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Fc(e) {
  if (F & 6) throw Error(E(327));
  Bn();
  var t = is(e, 0);
  if (!(t & 1)) return Ee(e, J()), null;
  var n = ks(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ua(e);
    r !== 0 && ((t = r), (n = Fa(e, r)));
  }
  if (n === 1) throw ((n = Jr), on(e, 0), Lt(e, t), Ee(e, J()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Zt(e, ke, lt),
    Ee(e, J()),
    null
  );
}
function Hl(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Yn = J() + 500), Bs && Wt());
  }
}
function pn(e) {
  Nt !== null && Nt.tag === 0 && !(F & 6) && Bn();
  var t = F;
  F |= 1;
  var n = Ue.transition,
    r = z;
  try {
    if (((Ue.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), (Ue.transition = n), (F = t), !(F & 6) && Wt();
  }
}
function Gl() {
  (_e = An.current), B(An);
}
function on(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Jy(n)), ee !== null))
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch ((Ll(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && us();
          break;
        case 3:
          Gn(), B(Ce), B(ye), Vl();
          break;
        case 5:
          Ml(r);
          break;
        case 4:
          Gn();
          break;
        case 13:
          B(K);
          break;
        case 19:
          B(K);
          break;
        case 10:
          Al(r.type._context);
          break;
        case 22:
        case 23:
          Gl();
      }
      n = n.return;
    }
  if (
    ((oe = e),
    (ee = e = Ft(e.current, null)),
    (ce = _e = t),
    (ne = 0),
    (Jr = null),
    (Wl = Hs = hn = 0),
    (ke = Ar = null),
    nn !== null)
  ) {
    for (t = 0; t < nn.length; t++)
      if (((n = nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    nn = null;
  }
  return e;
}
function wp(e, t) {
  do {
    var n = ee;
    try {
      if ((Rl(), (Ki.current = vs), ys)) {
        for (var r = G.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ys = !1;
      }
      if (
        ((dn = 0),
        (se = te = G = null),
        (Nr = !1),
        (Xr = 0),
        (bl.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (Jr = t), (ee = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = ce),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = Cc(o);
          if (g !== null) {
            (g.flags &= -257),
              Tc(g, o, a, s, t),
              g.mode & 1 && Pc(s, u, t),
              (t = g),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Pc(s, u, t), Ql();
              break e;
            }
            l = Error(E(426));
          }
        } else if (W && a.mode & 1) {
          var k = Cc(o);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Tc(k, o, a, s, t),
              _l(Qn(l, a));
            break e;
          }
        }
        (s = l = Qn(l, a)),
          ne !== 4 && (ne = 2),
          Ar === null ? (Ar = [s]) : Ar.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = np(s, l, t);
              yc(s, p);
              break e;
            case 1:
              a = l;
              var h = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Mt === null || !Mt.has(m))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var w = rp(s, a, t);
                yc(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      kp(n);
    } catch (S) {
      (t = S), ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function xp() {
  var e = ws.current;
  return (ws.current = vs), e === null ? vs : e;
}
function Ql() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    oe === null || (!(hn & 268435455) && !(Hs & 268435455)) || Lt(oe, ce);
}
function ks(e, t) {
  var n = F;
  F |= 2;
  var r = xp();
  (oe !== e || ce !== t) && ((lt = null), on(e, t));
  do
    try {
      Cv();
      break;
    } catch (i) {
      wp(e, i);
    }
  while (!0);
  if ((Rl(), (F = n), (ws.current = r), ee !== null)) throw Error(E(261));
  return (oe = null), (ce = 0), ne;
}
function Cv() {
  for (; ee !== null; ) Sp(ee);
}
function Tv() {
  for (; ee !== null && !Xg(); ) Sp(ee);
}
function Sp(e) {
  var t = Cp(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    t === null ? kp(e) : (ee = t),
    (bl.current = null);
}
function kp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = vv(n, t)), n !== null)) {
        (n.flags &= 32767), (ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (ee = null);
        return;
      }
    } else if (((n = yv(n, t, _e)), n !== null)) {
      ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Zt(e, t, n) {
  var r = z,
    i = Ue.transition;
  try {
    (Ue.transition = null), (z = 1), Ev(e, t, n, r);
  } finally {
    (Ue.transition = i), (z = r);
  }
  return null;
}
function Ev(e, t, n, r) {
  do Bn();
  while (Nt !== null);
  if (F & 6) throw Error(E(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (oy(e, s),
    e === oe && ((ee = oe = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Di ||
      ((Di = !0),
      Tp(rs, function () {
        return Bn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ue.transition), (Ue.transition = null);
    var o = z;
    z = 1;
    var a = F;
    (F |= 4),
      (bl.current = null),
      xv(e, n),
      gp(n, e),
      Hy(ma),
      (ss = !!pa),
      (ma = pa = null),
      (e.current = n),
      Sv(n),
      qg(),
      (F = a),
      (z = o),
      (Ue.transition = s);
  } else e.current = n;
  if (
    (Di && ((Di = !1), (Nt = e), (Ss = i)),
    (s = e.pendingLanes),
    s === 0 && (Mt = null),
    ey(n.stateNode),
    Ee(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (xs) throw ((xs = !1), (e = Ma), (Ma = null), e);
  return (
    Ss & 1 && e.tag !== 0 && Bn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Va ? Dr++ : ((Dr = 0), (Va = e))) : (Dr = 0),
    Wt(),
    null
  );
}
function Bn() {
  if (Nt !== null) {
    var e = nh(Ss),
      t = Ue.transition,
      n = z;
    try {
      if (((Ue.transition = null), (z = 16 > e ? 16 : e), Nt === null))
        var r = !1;
      else {
        if (((e = Nt), (Nt = null), (Ss = 0), F & 6)) throw Error(E(331));
        var i = F;
        for (F |= 4, _ = e.current; _ !== null; ) {
          var s = _,
            o = s.child;
          if (_.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (_ = u; _ !== null; ) {
                  var c = _;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (_ = d);
                  else
                    for (; _ !== null; ) {
                      c = _;
                      var f = c.sibling,
                        g = c.return;
                      if ((hp(c), c === u)) {
                        _ = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = g), (_ = f);
                        break;
                      }
                      _ = g;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var k = v.sibling;
                    (v.sibling = null), (v = k);
                  } while (v !== null);
                }
              }
              _ = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (_ = o);
          else
            e: for (; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rr(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (_ = p);
                break e;
              }
              _ = s.return;
            }
        }
        var h = e.current;
        for (_ = h; _ !== null; ) {
          o = _;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (_ = m);
          else
            e: for (o = h; _ !== null; ) {
              if (((a = _), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ks(9, a);
                  }
                } catch (S) {
                  X(a, a.return, S);
                }
              if (a === o) {
                _ = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (_ = w);
                break e;
              }
              _ = a.return;
            }
        }
        if (
          ((F = i), Wt(), it && typeof it.onPostCommitFiberRoot == "function")
        )
          try {
            it.onPostCommitFiberRoot(Fs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = n), (Ue.transition = t);
    }
  }
  return !1;
}
function Ic(e, t, n) {
  (t = Qn(n, t)),
    (t = np(e, t, 1)),
    (e = jt(e, t, 1)),
    (t = we()),
    e !== null && (ai(e, 1, t), Ee(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) Ic(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ic(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Mt === null || !Mt.has(r)))
        ) {
          (e = Qn(n, e)),
            (e = rp(t, e, 1)),
            (t = jt(t, e, 1)),
            (e = we()),
            t !== null && (ai(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Lv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    oe === e &&
      (ce & n) === n &&
      (ne === 4 || (ne === 3 && (ce & 130023424) === ce && 500 > J() - Kl)
        ? on(e, 0)
        : (Wl |= n)),
    Ee(e, t);
}
function Pp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ki), (ki <<= 1), !(ki & 130023424) && (ki = 4194304))
      : (t = 1));
  var n = we();
  (e = yt(e, t)), e !== null && (ai(e, t, n), Ee(e, n));
}
function _v(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Pp(e, n);
}
function Nv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), Pp(e, n);
}
var Cp;
Cp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ce.current) Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), gv(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else (Pe = !1), W && t.flags & 1048576 && _h(t, ds, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Gi(e, t), (e = t.pendingProps);
      var i = Wn(t, ye.current);
      Un(t, n), (i = Il(null, t, r, e, i, n));
      var s = zl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((s = !0), cs(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ol(t),
            (i.updater = Ws),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ca(t, r, e, n),
            (t = La(null, t, r, !0, s, n)))
          : ((t.tag = 0), W && s && El(t), ve(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Gi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Av(r)),
          (e = Ge(r, e)),
          i)
        ) {
          case 0:
            t = Ea(null, t, r, e, n);
            break e;
          case 1:
            t = _c(null, t, r, e, n);
            break e;
          case 11:
            t = Ec(null, t, r, e, n);
            break e;
          case 14:
            t = Lc(null, t, r, Ge(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Ea(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        _c(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((ap(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          jh(e, t),
          ms(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Qn(Error(E(423)), t)), (t = Nc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Qn(Error(E(424)), t)), (t = Nc(e, t, r, n, i));
            break e;
          } else
            for (
              Ne = Ot(t.stateNode.containerInfo.firstChild),
                Re = t,
                W = !0,
                Ye = null,
                n = Dh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Kn(), r === i)) {
            t = vt(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Mh(t),
        e === null && Sa(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        ga(r, i) ? (o = null) : s !== null && ga(r, s) && (t.flags |= 32),
        op(e, t),
        ve(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Sa(t), null;
    case 13:
      return lp(e, t, n);
    case 4:
      return (
        jl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Hn(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Ec(e, t, r, i, n)
      );
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          $(hs, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Ze(s.value, o)) {
            if (s.children === i.children && !Ce.current) {
              t = vt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = dt(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      ka(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(E(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  ka(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        ve(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Un(t, n),
        (i = Be(i)),
        (r = r(i)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ge(r, t.pendingProps)),
        (i = Ge(r.type, i)),
        Lc(e, t, r, i, n)
      );
    case 15:
      return ip(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Gi(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), cs(t)) : (e = !1),
        Un(t, n),
        tp(t, r, i),
        Ca(t, r, i, n),
        La(null, t, r, !0, e, n)
      );
    case 19:
      return up(e, t, n);
    case 22:
      return sp(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Tp(e, t) {
  return Zd(e, t);
}
function Rv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function $e(e, t, n, r) {
  return new Rv(e, t, n, r);
}
function Yl(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Av(e) {
  if (typeof e == "function") return Yl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === pl)) return 11;
    if (e === ml) return 14;
  }
  return 2;
}
function Ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = $e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Xi(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Yl(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Sn:
        return an(n.children, i, s, t);
      case hl:
        (o = 8), (i |= 8);
        break;
      case Qo:
        return (
          (e = $e(12, n, t, i | 2)), (e.elementType = Qo), (e.lanes = s), e
        );
      case Yo:
        return (e = $e(13, n, t, i)), (e.elementType = Yo), (e.lanes = s), e;
      case Xo:
        return (e = $e(19, n, t, i)), (e.elementType = Xo), (e.lanes = s), e;
      case Md:
        return Gs(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Od:
              o = 10;
              break e;
            case jd:
              o = 9;
              break e;
            case pl:
              o = 11;
              break e;
            case ml:
              o = 14;
              break e;
            case Ct:
              (o = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = $e(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function an(e, t, n, r) {
  return (e = $e(7, e, r, t)), (e.lanes = n), e;
}
function Gs(e, t, n, r) {
  return (
    (e = $e(22, e, r, t)),
    (e.elementType = Md),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ao(e, t, n) {
  return (e = $e(6, e, null, t)), (e.lanes = n), e;
}
function Do(e, t, n) {
  return (
    (t = $e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Dv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = fo(0)),
    (this.expirationTimes = fo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = fo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Xl(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new Dv(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = $e(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ol(s),
    e
  );
}
function Ov(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ep(e) {
  if (!e) return zt;
  e = e._reactInternals;
  e: {
    if (gn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return Eh(e, n, t);
  }
  return t;
}
function Lp(e, t, n, r, i, s, o, a, l) {
  return (
    (e = Xl(n, r, !0, e, i, s, o, a, l)),
    (e.context = Ep(null)),
    (n = e.current),
    (r = we()),
    (i = Vt(n)),
    (s = dt(r, i)),
    (s.callback = t ?? null),
    jt(n, s, i),
    (e.current.lanes = i),
    ai(e, i, r),
    Ee(e, r),
    e
  );
}
function Qs(e, t, n, r) {
  var i = t.current,
    s = we(),
    o = Vt(i);
  return (
    (n = Ep(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = dt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jt(i, t, o)),
    e !== null && (qe(e, i, o, s), Wi(e, i, o)),
    o
  );
}
function Ps(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ql(e, t) {
  zc(e, t), (e = e.alternate) && zc(e, t);
}
function jv() {
  return null;
}
var _p =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Zl(e) {
  this._internalRoot = e;
}
Ys.prototype.render = Zl.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Qs(e, t, null, null);
};
Ys.prototype.unmount = Zl.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    pn(function () {
      Qs(null, e, null, null);
    }),
      (t[gt] = null);
  }
};
function Ys(e) {
  this._internalRoot = e;
}
Ys.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = sh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
    Et.splice(n, 0, e), n === 0 && ah(e);
  }
};
function Jl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Xs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function $c() {}
function Mv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Ps(o);
        s.call(u);
      };
    }
    var o = Lp(t, r, e, 0, null, !1, !1, "", $c);
    return (
      (e._reactRootContainer = o),
      (e[gt] = o.current),
      Kr(e.nodeType === 8 ? e.parentNode : e),
      pn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ps(l);
      a.call(u);
    };
  }
  var l = Xl(e, 0, !1, null, null, !1, !1, "", $c);
  return (
    (e._reactRootContainer = l),
    (e[gt] = l.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    pn(function () {
      Qs(t, l, n, r);
    }),
    l
  );
}
function qs(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Ps(o);
        a.call(l);
      };
    }
    Qs(t, o, e, i);
  } else o = Mv(n, t, e, i, r);
  return Ps(o);
}
rh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wr(t.pendingLanes);
        n !== 0 &&
          (vl(t, n | 1), Ee(t, J()), !(F & 6) && ((Yn = J() + 500), Wt()));
      }
      break;
    case 13:
      pn(function () {
        var r = yt(e, 1);
        if (r !== null) {
          var i = we();
          qe(r, e, 1, i);
        }
      }),
        ql(e, 1);
  }
};
wl = function (e) {
  if (e.tag === 13) {
    var t = yt(e, 134217728);
    if (t !== null) {
      var n = we();
      qe(t, e, 134217728, n);
    }
    ql(e, 134217728);
  }
};
ih = function (e) {
  if (e.tag === 13) {
    var t = Vt(e),
      n = yt(e, t);
    if (n !== null) {
      var r = we();
      qe(n, e, t, r);
    }
    ql(e, t);
  }
};
sh = function () {
  return z;
};
oh = function (e, t) {
  var n = z;
  try {
    return (z = e), t();
  } finally {
    z = n;
  }
};
oa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Jo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Us(r);
            if (!i) throw Error(E(90));
            Fd(r), Jo(r, i);
          }
        }
      }
      break;
    case "textarea":
      zd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Fn(e, !!n.multiple, t, !1);
  }
};
Hd = Hl;
Gd = pn;
var Vv = { usingClientEntryPoint: !1, Events: [ui, Tn, Us, Wd, Kd, Hl] },
  dr = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Fv = {
    bundleType: dr.bundleType,
    version: dr.version,
    rendererPackageName: dr.rendererPackageName,
    rendererConfig: dr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Xd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: dr.findFiberByHostInstance || jv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Oi.isDisabled && Oi.supportsFiber)
    try {
      (Fs = Oi.inject(Fv)), (it = Oi);
    } catch {}
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vv;
je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Jl(t)) throw Error(E(200));
  return Ov(e, t, null, n);
};
je.createRoot = function (e, t) {
  if (!Jl(e)) throw Error(E(299));
  var n = !1,
    r = "",
    i = _p;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Xl(e, 1, !1, null, null, n, !1, r, i)),
    (e[gt] = t.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    new Zl(t)
  );
};
je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = Xd(t)), (e = e === null ? null : e.stateNode), e;
};
je.flushSync = function (e) {
  return pn(e);
};
je.hydrate = function (e, t, n) {
  if (!Xs(t)) throw Error(E(200));
  return qs(null, e, t, !0, n);
};
je.hydrateRoot = function (e, t, n) {
  if (!Jl(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = _p;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Lp(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[gt] = t.current),
    Kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ys(t);
};
je.render = function (e, t, n) {
  if (!Xs(t)) throw Error(E(200));
  return qs(null, e, t, !1, n);
};
je.unmountComponentAtNode = function (e) {
  if (!Xs(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (pn(function () {
        qs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[gt] = null);
        });
      }),
      !0)
    : !1;
};
je.unstable_batchedUpdates = Hl;
je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Xs(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return qs(e, t, n, !1, r);
};
je.version = "18.3.1-next-f1338f8080-20240426";
function Np() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Np);
    } catch (e) {
      console.error(e);
    }
}
Np(), (Nd.exports = je);
var Iv = Nd.exports,
  Rp,
  Uc = Iv;
(Rp = Uc.createRoot), Uc.hydrateRoot;
const Ap = R.createContext({});
function zv(e) {
  const t = R.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const eu = R.createContext(null),
  Dp = R.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function $v(e = !0) {
  const t = R.useContext(eu);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = R.useId();
  R.useEffect(() => {
    e && i(s);
  }, [e]);
  const o = R.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const tu = typeof window < "u",
  Uv = tu ? R.useLayoutEffect : R.useEffect,
  Ae = (e) => e;
let za = Ae;
function nu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Xn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  ht = (e) => e * 1e3,
  pt = (e) => e / 1e3,
  Bv = { skipAnimations: !1, useManualTiming: !1 };
function bv(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    s.has(u) && (l.schedule(u), e()), u(o);
  }
  const l = {
    schedule: (u, c = !1, d = !1) => {
      const g = d && r ? t : n;
      return c && s.add(u), g.has(u) || g.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    process: (u) => {
      if (((o = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        i && ((i = !1), l.process(u));
    },
  };
  return l;
}
const ji = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Wv = 40;
function Op(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = ji.reduce((p, h) => ((p[h] = bv(s)), p), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: d,
      postRender: f,
    } = o,
    g = () => {
      const p = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, Wv), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g));
    },
    y = () => {
      (n = !0), (r = !0), i.isProcessing || e(g);
    };
  return {
    schedule: ji.reduce((p, h) => {
      const m = o[h];
      return (p[h] = (w, S = !1, C = !1) => (n || y(), m.schedule(w, S, C))), p;
    }, {}),
    cancel: (p) => {
      for (let h = 0; h < ji.length; h++) o[ji[h]].cancel(p);
    },
    state: i,
    steps: o,
  };
}
const {
    schedule: b,
    cancel: $t,
    state: le,
    steps: Oo,
  } = Op(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ae, !0),
  jp = R.createContext({ strict: !1 }),
  Bc = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  qn = {};
for (const e in Bc) qn[e] = { isEnabled: (t) => Bc[e].some((n) => !!t[n]) };
function Kv(e) {
  for (const t in e) qn[t] = { ...qn[t], ...e[t] };
}
const Hv = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Cs(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Hv.has(e)
  );
}
let Mp = (e) => !Cs(e);
function Gv(e) {
  e && (Mp = (t) => (t.startsWith("on") ? !Cs(t) : e(t)));
}
try {
  Gv(require("@emotion/is-prop-valid").default);
} catch {}
function Qv(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Mp(i) ||
        (n === !0 && Cs(i)) ||
        (!t && !Cs(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Yv(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const Zs = R.createContext({});
function ei(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Js(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const ru = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  iu = ["initial", ...ru];
function eo(e) {
  return Js(e.animate) || iu.some((t) => ei(e[t]));
}
function Vp(e) {
  return !!(eo(e) || e.variants);
}
function Xv(e, t) {
  if (eo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ei(n) ? n : void 0,
      animate: ei(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function qv(e) {
  const { initial: t, animate: n } = Xv(e, R.useContext(Zs));
  return R.useMemo(() => ({ initial: t, animate: n }), [bc(t), bc(n)]);
}
function bc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Zv = Symbol.for("motionComponentSymbol");
function Dn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Jv(e, t, n) {
  return R.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Dn(n) && (n.current = r));
    },
    [t]
  );
}
const su = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  e0 = "framerAppearId",
  Fp = "data-" + su(e0),
  { schedule: ou, cancel: _P } = Op(queueMicrotask, !1),
  Ip = R.createContext({});
function t0(e, t, n, r, i) {
  var s, o;
  const { visualElement: a } = R.useContext(Zs),
    l = R.useContext(jp),
    u = R.useContext(eu),
    c = R.useContext(Dp).reducedMotion,
    d = R.useRef(null);
  (r = r || l.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const f = d.current,
    g = R.useContext(Ip);
  f &&
    !f.projection &&
    i &&
    (f.type === "html" || f.type === "svg") &&
    n0(d.current, n, i, g);
  const y = R.useRef(!1);
  R.useInsertionEffect(() => {
    f && y.current && f.update(n, u);
  });
  const v = n[Fp],
    k = R.useRef(
      !!v &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, v)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, v))
    );
  return (
    Uv(() => {
      f &&
        ((y.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        ou.render(f.render),
        k.current && f.animationState && f.animationState.animateChanges());
    }),
    R.useEffect(() => {
      f &&
        (!k.current && f.animationState && f.animationState.animateChanges(),
        k.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null ||
              p === void 0 ||
              p.call(window, v);
          }),
          (k.current = !1)));
    }),
    f
  );
}
function n0(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : zp(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && Dn(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function zp(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : zp(e.parent);
}
function r0({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var s, o;
  e && Kv(e);
  function a(u, c) {
    let d;
    const f = { ...R.useContext(Dp), ...u, layoutId: i0(u) },
      { isStatic: g } = f,
      y = qv(u),
      v = r(u, g);
    if (!g && tu) {
      s0();
      const k = o0(f);
      (d = k.MeasureLayout),
        (y.visualElement = t0(i, v, f, t, k.ProjectionNode));
    }
    return x.jsxs(Zs.Provider, {
      value: y,
      children: [
        d && y.visualElement
          ? x.jsx(d, { visualElement: y.visualElement, ...f })
          : null,
        n(i, u, Jv(v, y.visualElement, c), v, g, y.visualElement),
      ],
    });
  }
  a.displayName = `motion.${
    typeof i == "string"
      ? i
      : `create(${
          (o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !==
            null && o !== void 0
            ? o
            : ""
        })`
  }`;
  const l = R.forwardRef(a);
  return (l[Zv] = i), l;
}
function i0({ layoutId: e }) {
  const t = R.useContext(Ap).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function s0(e, t) {
  R.useContext(jp).strict;
}
function o0(e) {
  const { drag: t, layout: n } = qn;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const a0 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function au(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(a0.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function $p(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const Up = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Bp(e, t, n, r) {
  $p(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Up.has(i) ? i : su(i), t.attrs[i]);
}
const ge = (e) => !!(e && e.getVelocity),
  nr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  rr = new Set(nr),
  Ts = {};
function l0(e) {
  Object.assign(Ts, e);
}
function bp(e, { layout: t, layoutId: n }) {
  return (
    rr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ts[e] || e === "opacity"))
  );
}
function lu(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (ge(i[o]) ||
      (t.style && ge(t.style[o])) ||
      bp(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function Wp(e, t, n) {
  const r = lu(e, t, n);
  for (const i in e)
    if (ge(e[i]) || ge(t[i])) {
      const s =
        nr.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function Wc(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function uu(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Wc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Wc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
const $a = (e) => Array.isArray(e),
  u0 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  c0 = (e) => ($a(e) ? e[e.length - 1] || 0 : e);
function qi(e) {
  const t = ge(e) ? e.get() : e;
  return u0(t) ? t.toValue() : t;
}
function f0(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  s
) {
  const o = { latestValues: d0(r, i, s, e), renderState: t() };
  return n && (o.mount = (a) => n(r, a, o)), o;
}
const Kp = (e) => (t, n) => {
  const r = R.useContext(Zs),
    i = R.useContext(eu),
    s = () => f0(e, t, r, i);
  return n ? s() : zv(s);
};
function d0(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const f in s) i[f] = qi(s[f]);
  let { initial: o, animate: a } = e;
  const l = eo(e),
    u = Vp(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? a : o;
  if (d && typeof d != "boolean" && !Js(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let g = 0; g < f.length; g++) {
      const y = uu(e, f[g]);
      if (y) {
        const { transitionEnd: v, transition: k, ...p } = y;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const w = c ? m.length - 1 : 0;
            m = m[w];
          }
          m !== null && (i[h] = m);
        }
        for (const h in v) i[h] = v[h];
      }
    }
  }
  return i;
}
const cu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Hp = () => ({ ...cu(), attrs: {} }),
  Gp = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Qp = Gp("--"),
  h0 = Gp("var(--"),
  fu = (e) => (h0(e) ? p0.test(e.split("/*")[0].trim()) : !1),
  p0 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Yp = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  wt = (e, t, n) => (n > t ? t : n < e ? e : n),
  ir = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ti = { ...ir, transform: (e) => wt(0, 1, e) },
  Mi = { ...ir, default: 1 },
  fi = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Pt = fi("deg"),
  ot = fi("%"),
  A = fi("px"),
  m0 = fi("vh"),
  g0 = fi("vw"),
  Kc = {
    ...ot,
    parse: (e) => ot.parse(e) / 100,
    transform: (e) => ot.transform(e * 100),
  },
  y0 = {
    borderWidth: A,
    borderTopWidth: A,
    borderRightWidth: A,
    borderBottomWidth: A,
    borderLeftWidth: A,
    borderRadius: A,
    radius: A,
    borderTopLeftRadius: A,
    borderTopRightRadius: A,
    borderBottomRightRadius: A,
    borderBottomLeftRadius: A,
    width: A,
    maxWidth: A,
    height: A,
    maxHeight: A,
    top: A,
    right: A,
    bottom: A,
    left: A,
    padding: A,
    paddingTop: A,
    paddingRight: A,
    paddingBottom: A,
    paddingLeft: A,
    margin: A,
    marginTop: A,
    marginRight: A,
    marginBottom: A,
    marginLeft: A,
    backgroundPositionX: A,
    backgroundPositionY: A,
  },
  v0 = {
    rotate: Pt,
    rotateX: Pt,
    rotateY: Pt,
    rotateZ: Pt,
    scale: Mi,
    scaleX: Mi,
    scaleY: Mi,
    scaleZ: Mi,
    skew: Pt,
    skewX: Pt,
    skewY: Pt,
    distance: A,
    translateX: A,
    translateY: A,
    translateZ: A,
    x: A,
    y: A,
    z: A,
    perspective: A,
    transformPerspective: A,
    opacity: ti,
    originX: Kc,
    originY: Kc,
    originZ: A,
  },
  Hc = { ...ir, transform: Math.round },
  du = {
    ...y0,
    ...v0,
    zIndex: Hc,
    size: A,
    fillOpacity: ti,
    strokeOpacity: ti,
    numOctaves: Hc,
  },
  w0 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  x0 = nr.length;
function S0(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < x0; s++) {
    const o = nr[s],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = Yp(a, du[o]);
      if (!l) {
        i = !1;
        const c = w0[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function hu(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (rr.has(l)) {
      o = !0;
      continue;
    } else if (Qp(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Yp(u, du[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = S0(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function Gc(e, t, n) {
  return typeof e == "string" ? e : A.transform(t + n * e);
}
function k0(e, t, n) {
  const r = Gc(t, e.x, e.width),
    i = Gc(n, e.y, e.height);
  return `${r} ${i}`;
}
const P0 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  C0 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function T0(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? P0 : C0;
  e[s.offset] = A.transform(-r);
  const o = A.transform(t),
    a = A.transform(n);
  e[s.array] = `${o} ${a}`;
}
function pu(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d
) {
  if ((hu(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: g, dimensions: y } = e;
  f.transform && (y && (g.transform = f.transform), delete f.transform),
    y &&
      (i !== void 0 || s !== void 0 || g.transform) &&
      (g.transformOrigin = k0(
        y,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && T0(f, o, a, l, !1);
}
const mu = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  E0 = {
    useVisualState: Kp({
      scrapeMotionValuesFromProps: Wp,
      createRenderState: Hp,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        b.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          b.render(() => {
            pu(n, r, mu(t.tagName), e.transformTemplate), Bp(t, n);
          });
      },
    }),
  },
  L0 = {
    useVisualState: Kp({
      scrapeMotionValuesFromProps: lu,
      createRenderState: cu,
    }),
  };
function Xp(e, t, n) {
  for (const r in t) !ge(t[r]) && !bp(r, n) && (e[r] = t[r]);
}
function _0({ transformTemplate: e }, t) {
  return R.useMemo(() => {
    const n = cu();
    return hu(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function N0(e, t) {
  const n = e.style || {},
    r = {};
  return Xp(r, n, e), Object.assign(r, _0(e, t)), r;
}
function R0(e, t) {
  const n = {},
    r = N0(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function A0(e, t, n, r) {
  const i = R.useMemo(() => {
    const s = Hp();
    return (
      pu(s, t, mu(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    Xp(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function D0(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (au(n) ? A0 : R0)(r, s, o, n),
      u = Qv(r, typeof n == "string", e),
      c = n !== R.Fragment ? { ...u, ...l, ref: i } : {},
      { children: d } = r,
      f = R.useMemo(() => (ge(d) ? d.get() : d), [d]);
    return R.createElement(n, { ...c, children: f });
  };
}
function O0(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(au(r) ? E0 : L0),
      preloadedFeatures: e,
      useRender: D0(i),
      createVisualElement: t,
      Component: r,
    };
    return r0(o);
  };
}
function qp(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function to(e, t, n) {
  const r = e.getProps();
  return uu(r, t, n !== void 0 ? n : r.custom, e);
}
const j0 = nu(() => window.ScrollTimeline !== void 0);
class M0 {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t))
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (j0() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == "function") return n(i);
    });
    return () => {
      r.forEach((i, s) => {
        i && i(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class V0 extends M0 {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function gu(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Ua = 2e4;
function Zp(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ua; ) (t += n), (r = e.next(t));
  return t >= Ua ? 1 / 0 : t;
}
function yu(e) {
  return typeof e == "function";
}
function Qc(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const vu = (e) => Array.isArray(e) && typeof e[0] == "number",
  F0 = { linearEasing: void 0 };
function I0(e, t) {
  const n = nu(e);
  return () => {
    var r;
    return (r = F0[t]) !== null && r !== void 0 ? r : n();
  };
}
const Es = I0(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Jp = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(Xn(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function em(e) {
  return !!(
    (typeof e == "function" && Es()) ||
    !e ||
    (typeof e == "string" && (e in Ba || Es())) ||
    vu(e) ||
    (Array.isArray(e) && e.every(em))
  );
}
const Sr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Ba = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Sr([0, 0.65, 0.55, 1]),
    circOut: Sr([0.55, 0, 1, 0.45]),
    backIn: Sr([0.31, 0.01, 0.66, -0.59]),
    backOut: Sr([0.33, 1.53, 0.69, 0.99]),
  };
function tm(e, t) {
  if (e)
    return typeof e == "function" && Es()
      ? Jp(e, t)
      : vu(e)
      ? Sr(e)
      : Array.isArray(e)
      ? e.map((n) => tm(n, t) || Ba.easeOut)
      : Ba[e];
}
const He = { x: !1, y: !1 };
function nm() {
  return He.x || He.y;
}
function z0(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function rm(e, t) {
  const n = z0(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Yc(e) {
  return (t) => {
    t.pointerType === "touch" || nm() || e(t);
  };
}
function $0(e, t, n = {}) {
  const [r, i, s] = rm(e, n),
    o = Yc((a) => {
      const { target: l } = a,
        u = t(a);
      if (typeof u != "function" || !l) return;
      const c = Yc((d) => {
        u(d), l.removeEventListener("pointerleave", c);
      });
      l.addEventListener("pointerleave", c, i);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, i);
    }),
    s
  );
}
const im = (e, t) => (t ? (e === t ? !0 : im(e, t.parentElement)) : !1),
  wu = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  U0 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function B0(e) {
  return U0.has(e.tagName) || e.tabIndex !== -1;
}
const kr = new WeakSet();
function Xc(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function jo(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const b0 = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Xc(() => {
    if (kr.has(n)) return;
    jo(n, "down");
    const i = Xc(() => {
        jo(n, "up");
      }),
      s = () => jo(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function qc(e) {
  return wu(e) && !nm();
}
function W0(e, t, n = {}) {
  const [r, i, s] = rm(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!qc(a) || kr.has(l)) return;
      kr.add(l);
      const u = t(a),
        c = (g, y) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            !(!qc(g) || !kr.has(l)) &&
              (kr.delete(l), typeof u == "function" && u(g, { success: y }));
        },
        d = (g) => {
          c(g, n.useGlobalTarget || im(l, g.target));
        },
        f = (g) => {
          c(g, !1);
        };
      window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i);
    };
  return (
    r.forEach((a) => {
      !B0(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        a.addEventListener("focus", (u) => b0(u, i), i);
    }),
    s
  );
}
function K0(e) {
  return e === "x" || e === "y"
    ? He[e]
      ? null
      : ((He[e] = !0),
        () => {
          He[e] = !1;
        })
    : He.x || He.y
    ? null
    : ((He.x = He.y = !0),
      () => {
        He.x = He.y = !1;
      });
}
const sm = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...nr,
]);
let Zi;
function H0() {
  Zi = void 0;
}
const at = {
  now: () => (
    Zi === void 0 &&
      at.set(
        le.isProcessing || Bv.useManualTiming ? le.timestamp : performance.now()
      ),
    Zi
  ),
  set: (e) => {
    (Zi = e), queueMicrotask(H0);
  },
};
function xu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Su(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class ku {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return xu(this.subscriptions, t), () => Su(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function om(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Zc = 30,
  G0 = (e) => !isNaN(parseFloat(e));
class Q0 {
  constructor(t, n = {}) {
    (this.version = "11.17.0"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = at.now();
        this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = at.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = G0(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new ku());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            b.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = at.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Zc
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Zc);
    return om(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ni(e, t) {
  return new Q0(e, t);
}
function Y0(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ni(n));
}
function X0(e, t) {
  const n = to(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = c0(s[o]);
    Y0(e, o, a);
  }
}
function q0(e) {
  return !!(ge(e) && e.add);
}
function ba(e, t) {
  const n = e.getValue("willChange");
  if (q0(n)) return n.add(t);
}
function am(e) {
  return e.props[Fp];
}
const lm = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Z0 = 1e-7,
  J0 = 12;
function e1(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = lm(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > Z0 && ++a < J0);
  return o;
}
function di(e, t, n, r) {
  if (e === t && n === r) return Ae;
  const i = (s) => e1(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : lm(i(s), t, r));
}
const um = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  cm = (e) => (t) => 1 - e(1 - t),
  fm = di(0.33, 1.53, 0.69, 0.99),
  Pu = cm(fm),
  dm = um(Pu),
  hm = (e) =>
    (e *= 2) < 1 ? 0.5 * Pu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Cu = (e) => 1 - Math.sin(Math.acos(e)),
  pm = cm(Cu),
  mm = um(Cu),
  gm = (e) => /^0[^.\s]+$/u.test(e);
function t1(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || gm(e)
    : !0;
}
const Or = (e) => Math.round(e * 1e5) / 1e5,
  Tu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function n1(e) {
  return e == null;
}
const r1 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Eu = (e, t) => (n) =>
    !!(
      (typeof n == "string" && r1.test(n) && n.startsWith(e)) ||
      (t && !n1(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  ym = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(Tu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  i1 = (e) => wt(0, 255, e),
  Mo = { ...ir, transform: (e) => Math.round(i1(e)) },
  sn = {
    test: Eu("rgb", "red"),
    parse: ym("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Mo.transform(e) +
      ", " +
      Mo.transform(t) +
      ", " +
      Mo.transform(n) +
      ", " +
      Or(ti.transform(r)) +
      ")",
  };
function s1(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Wa = { test: Eu("#"), parse: s1, transform: sn.transform },
  On = {
    test: Eu("hsl", "hue"),
    parse: ym("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      ot.transform(Or(t)) +
      ", " +
      ot.transform(Or(n)) +
      ", " +
      Or(ti.transform(r)) +
      ")",
  },
  pe = {
    test: (e) => sn.test(e) || Wa.test(e) || On.test(e),
    parse: (e) =>
      sn.test(e) ? sn.parse(e) : On.test(e) ? On.parse(e) : Wa.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? sn.transform(e)
        : On.transform(e),
  },
  o1 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function a1(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Tu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(o1)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const vm = "number",
  wm = "color",
  l1 = "var",
  u1 = "var(",
  Jc = "${}",
  c1 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ri(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      c1,
      (l) => (
        pe.test(l)
          ? (r.color.push(s), i.push(wm), n.push(pe.parse(l)))
          : l.startsWith(u1)
          ? (r.var.push(s), i.push(l1), n.push(l))
          : (r.number.push(s), i.push(vm), n.push(parseFloat(l))),
        ++s,
        Jc
      )
    )
    .split(Jc);
  return { values: n, split: a, indexes: r, types: i };
}
function xm(e) {
  return ri(e).values;
}
function Sm(e) {
  const { split: t, types: n } = ri(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === vm
          ? (s += Or(i[o]))
          : a === wm
          ? (s += pe.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const f1 = (e) => (typeof e == "number" ? 0 : e);
function d1(e) {
  const t = xm(e);
  return Sm(e)(t.map(f1));
}
const Ut = {
    test: a1,
    parse: xm,
    createTransformer: Sm,
    getAnimatableNone: d1,
  },
  h1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function p1(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Tu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = h1.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const m1 = /\b([a-z-]*)\(.*?\)/gu,
  Ka = {
    ...Ut,
    getAnimatableNone: (e) => {
      const t = e.match(m1);
      return t ? t.map(p1).join(" ") : e;
    },
  },
  g1 = {
    ...du,
    color: pe,
    backgroundColor: pe,
    outlineColor: pe,
    fill: pe,
    stroke: pe,
    borderColor: pe,
    borderTopColor: pe,
    borderRightColor: pe,
    borderBottomColor: pe,
    borderLeftColor: pe,
    filter: Ka,
    WebkitFilter: Ka,
  },
  Lu = (e) => g1[e];
function km(e, t) {
  let n = Lu(e);
  return (
    n !== Ka && (n = Ut), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const y1 = new Set(["auto", "none", "0"]);
function v1(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !y1.has(s) && ri(s).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const s of t) e[s] = km(n, i);
}
const ef = (e) => e === ir || e === A,
  tf = (e, t) => parseFloat(e.split(", ")[t]),
  nf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return tf(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? tf(s[1], e) : 0;
      }
    },
  w1 = new Set(["x", "y", "z"]),
  x1 = nr.filter((e) => !w1.has(e));
function S1(e) {
  const t = [];
  return (
    x1.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Zn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: nf(4, 13),
  y: nf(5, 14),
};
Zn.translateX = Zn.x;
Zn.translateY = Zn.y;
const ln = new Set();
let Ha = !1,
  Ga = !1;
function Pm() {
  if (Ga) {
    const e = Array.from(ln).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = S1(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Ga = !1), (Ha = !1), ln.forEach((e) => e.complete()), ln.clear();
}
function Cm() {
  ln.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ga = !0);
  });
}
function k1() {
  Cm(), Pm();
}
class _u {
  constructor(t, n, r, i, s, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (ln.add(this), Ha || ((Ha = !0), b.read(Cm), b.resolveKeyframes(Pm)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]);
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      ln.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), ln.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Tm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  P1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function C1(e) {
  const t = P1.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Em(e, t, n = 1) {
  const [r, i] = C1(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return Tm(o) ? parseFloat(o) : o;
  }
  return fu(i) ? Em(i, t, n + 1) : i;
}
const Lm = (e) => (t) => t.test(e),
  T1 = { test: (e) => e === "auto", parse: (e) => e },
  _m = [ir, A, ot, Pt, g0, m0, T1],
  rf = (e) => _m.find(Lm(e));
class Nm extends _u {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), fu(u))) {
        const c = Em(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !sm.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = rf(i),
      a = rf(s);
    if (o !== a)
      if (ef(o) && ef(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) t1(t[i]) && r.push(i);
    r.length && v1(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Zn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    (i[o] = Zn[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
const sf = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Ut.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function E1(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function L1(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = sf(i, t),
    a = sf(s, t);
  return !o || !a ? !1 : E1(e) || ((n === "spring" || yu(n)) && r);
}
const _1 = (e) => e !== null;
function no(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(_1),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const N1 = 40;
class Rm {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = at.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > N1
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && k1(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = at.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !L1(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        l == null || l(no(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const H = (e, t, n) => e + (t - e) * n;
function Vo(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function R1({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Vo(l, a, e + 1 / 3)), (s = Vo(l, a, e)), (o = Vo(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ls(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Fo = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  A1 = [Wa, sn, On],
  D1 = (e) => A1.find((t) => t.test(e));
function of(e) {
  const t = D1(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === On && (n = R1(n)), n;
}
const af = (e, t) => {
    const n = of(e),
      r = of(t);
    if (!n || !r) return Ls(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Fo(n.red, r.red, s)),
      (i.green = Fo(n.green, r.green, s)),
      (i.blue = Fo(n.blue, r.blue, s)),
      (i.alpha = H(n.alpha, r.alpha, s)),
      sn.transform(i)
    );
  },
  O1 = (e, t) => (n) => t(e(n)),
  hi = (...e) => e.reduce(O1),
  Qa = new Set(["none", "hidden"]);
function j1(e, t) {
  return Qa.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function M1(e, t) {
  return (n) => H(e, t, n);
}
function Nu(e) {
  return typeof e == "number"
    ? M1
    : typeof e == "string"
    ? fu(e)
      ? Ls
      : pe.test(e)
      ? af
      : I1
    : Array.isArray(e)
    ? Am
    : typeof e == "object"
    ? pe.test(e)
      ? af
      : V1
    : Ls;
}
function Am(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => Nu(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function V1(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Nu(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function F1(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][i[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[s] = l), i[o]++;
  }
  return r;
}
const I1 = (e, t) => {
  const n = Ut.createTransformer(t),
    r = ri(e),
    i = ri(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Qa.has(e) && !i.values.length) || (Qa.has(t) && !r.values.length)
      ? j1(e, t)
      : hi(Am(F1(r, i), i.values), n)
    : Ls(e, t);
};
function Dm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? H(e, t, n)
    : Nu(e)(e, t);
}
const z1 = 5;
function Om(e, t, n) {
  const r = Math.max(t - z1, 0);
  return om(n - e(r), t - r);
}
const Y = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Io = 0.001;
function $1({
  duration: e = Y.duration,
  bounce: t = Y.bounce,
  velocity: n = Y.velocity,
  mass: r = Y.mass,
}) {
  let i,
    s,
    o = 1 - t;
  (o = wt(Y.minDamping, Y.maxDamping, o)),
    (e = wt(Y.minDuration, Y.maxDuration, pt(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            d = c * e,
            f = c - n,
            g = Ya(u, o),
            y = Math.exp(-d);
          return Io - (f / g) * y;
        }),
        (s = (u) => {
          const d = u * o * e,
            f = d * n + n,
            g = Math.pow(o, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            v = Ya(Math.pow(u, 2), o);
          return ((-i(u) + Io > 0 ? -1 : 1) * ((f - g) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Io + c * d;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = B1(i, s, a);
  if (((e = ht(e)), isNaN(l)))
    return { stiffness: Y.stiffness, damping: Y.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const U1 = 12;
function B1(e, t, n) {
  let r = n;
  for (let i = 1; i < U1; i++) r = r - e(r) / t(r);
  return r;
}
function Ya(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const b1 = ["duration", "bounce"],
  W1 = ["stiffness", "damping", "mass"];
function lf(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function K1(e) {
  let t = {
    velocity: Y.velocity,
    stiffness: Y.stiffness,
    damping: Y.damping,
    mass: Y.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!lf(e, W1) && lf(e, b1))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * wt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: Y.mass, stiffness: i, damping: s };
    } else {
      const n = $1(e);
      (t = { ...t, ...n, mass: Y.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function jm(e = Y.visualDuration, t = Y.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: g,
    } = K1({ ...n, velocity: -pt(n.velocity || 0) }),
    y = f || 0,
    v = u / (2 * Math.sqrt(l * c)),
    k = o - s,
    p = pt(Math.sqrt(l / c)),
    h = Math.abs(k) < 5;
  r || (r = h ? Y.restSpeed.granular : Y.restSpeed.default),
    i || (i = h ? Y.restDelta.granular : Y.restDelta.default);
  let m;
  if (v < 1) {
    const S = Ya(p, v);
    m = (C) => {
      const T = Math.exp(-v * p * C);
      return (
        o - T * (((y + v * p * k) / S) * Math.sin(S * C) + k * Math.cos(S * C))
      );
    };
  } else if (v === 1) m = (S) => o - Math.exp(-p * S) * (k + (y + p * k) * S);
  else {
    const S = p * Math.sqrt(v * v - 1);
    m = (C) => {
      const T = Math.exp(-v * p * C),
        P = Math.min(S * C, 300);
      return (
        o - (T * ((y + v * p * k) * Math.sinh(P) + S * k * Math.cosh(P))) / S
      );
    };
  }
  const w = {
    calculatedDuration: (g && d) || null,
    next: (S) => {
      const C = m(S);
      if (g) a.done = S >= d;
      else {
        let T = 0;
        v < 1 && (T = S === 0 ? ht(y) : Om(m, S, C));
        const P = Math.abs(T) <= r,
          D = Math.abs(o - C) <= i;
        a.done = P && D;
      }
      return (a.value = a.done ? o : C), a;
    },
    toString: () => {
      const S = Math.min(Zp(w), Ua),
        C = Jp((T) => w.next(S * T).value, S, 30);
      return S + "ms " + C;
    },
  };
  return w;
}
function uf({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    g = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    y = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
        ? a
        : l;
  let v = n * t;
  const k = d + v,
    p = o === void 0 ? k : o(k);
  p !== k && (v = p - d);
  const h = (P) => -v * Math.exp(-P / r),
    m = (P) => p + h(P),
    w = (P) => {
      const D = h(P),
        N = m(P);
      (f.done = Math.abs(D) <= u), (f.value = f.done ? p : N);
    };
  let S, C;
  const T = (P) => {
    g(f.value) &&
      ((S = P),
      (C = jm({
        keyframes: [f.value, y(f.value)],
        velocity: Om(m, P, f.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let D = !1;
        return (
          !C && S === void 0 && ((D = !0), w(P), T(P)),
          S !== void 0 && P >= S ? C.next(P - S) : (!D && w(P), f)
        );
      },
    }
  );
}
const H1 = di(0.42, 0, 1, 1),
  G1 = di(0, 0, 0.58, 1),
  Mm = di(0.42, 0, 0.58, 1),
  Q1 = (e) => Array.isArray(e) && typeof e[0] != "number",
  cf = {
    linear: Ae,
    easeIn: H1,
    easeInOut: Mm,
    easeOut: G1,
    circIn: Cu,
    circInOut: mm,
    circOut: pm,
    backIn: Pu,
    backInOut: dm,
    backOut: fm,
    anticipate: hm,
  },
  ff = (e) => {
    if (vu(e)) {
      za(e.length === 4);
      const [t, n, r, i] = e;
      return di(t, n, r, i);
    } else if (typeof e == "string") return za(cf[e] !== void 0), cf[e];
    return e;
  };
function Y1(e, t, n) {
  const r = [],
    i = n || Dm,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Ae : t;
      a = hi(l, a);
    }
    r.push(a);
  }
  return r;
}
function X1(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((za(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Y1(t, r, i),
    l = a.length,
    u = (c) => {
      if (o && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = Xn(e[d], e[d + 1], c);
      return a[d](f);
    };
  return n ? (c) => u(wt(e[0], e[s - 1], c)) : u;
}
function q1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Xn(0, t, r);
    e.push(H(n, 1, i));
  }
}
function Z1(e) {
  const t = [0];
  return q1(t, e.length - 1), t;
}
function J1(e, t) {
  return e.map((n) => n * t);
}
function ew(e, t) {
  return e.map(() => t || Mm).splice(0, e.length - 1);
}
function _s({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = Q1(r) ? r.map(ff) : ff(r),
    s = { done: !1, value: t[0] },
    o = J1(n && n.length === t.length ? n : Z1(t), e),
    a = X1(o, t, { ease: Array.isArray(i) ? i : ew(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const tw = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => b.update(t, !0),
      stop: () => $t(t),
      now: () => (le.isProcessing ? le.timestamp : at.now()),
    };
  },
  nw = { decay: uf, inertia: uf, tween: _s, keyframes: _s, spring: jm },
  rw = (e) => e / 100;
class Ru extends Rm {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || _u,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new o(s, a, n, r, i)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      a = yu(n) ? n : nw[n] || _s;
    let l, u;
    a !== _s &&
      typeof t[0] != "number" &&
      ((l = hi(rw, Dm(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    s === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = Zp(c));
    const { calculatedDuration: d } = c,
      f = d + i,
      g = f * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: g,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: f,
      repeat: g,
      repeatType: y,
      repeatDelay: v,
      onUpdate: k,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let m = this.currentTime,
      w = s;
    if (g) {
      const P = Math.min(this.currentTime, c) / d;
      let D = Math.floor(P),
        N = P % 1;
      !N && P >= 1 && (N = 1),
        N === 1 && D--,
        (D = Math.min(D, g + 1)),
        !!(D % 2) &&
          (y === "reverse"
            ? ((N = 1 - N), v && (N -= v / d))
            : y === "mirror" && (w = o)),
        (m = wt(0, 1, N) * d);
    }
    const S = h ? { done: !1, value: l[0] } : w.next(m);
    a && (S.value = a(S.value));
    let { done: C } = S;
    !h &&
      u !== null &&
      (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const T =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && C));
    return (
      T && i !== void 0 && (S.value = no(l, this.options, i)),
      k && k(S.value),
      T && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? pt(t.calculatedDuration) : 0;
  }
  get time() {
    return pt(this.currentTime);
  }
  set time(t) {
    (t = ht(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = pt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = tw, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const iw = new Set(["opacity", "clipPath", "filter", "transform"]);
function sw(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = tm(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const ow = nu(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Ns = 10,
  aw = 2e4;
function lw(e) {
  return yu(e.type) || e.type === "spring" || !em(e.ease);
}
function uw(e, t) {
  const n = new Ru({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < aw; ) (r = n.sample(s)), i.push(r.value), (s += Ns);
  return { times: void 0, keyframes: i, duration: s - Ns, ease: "linear" };
}
const Vm = { anticipate: hm, backInOut: dm, circInOut: mm };
function cw(e) {
  return e in Vm;
}
class df extends Rm {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    (this.resolver = new Nm(
      s,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: s,
      ease: o,
      type: a,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof o == "string" && Es() && cw(o) && (o = Vm[o]), lw(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: g,
          motionValue: y,
          element: v,
          ...k
        } = this.options,
        p = uw(t, k);
      (t = p.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = p.duration),
        (s = p.times),
        (o = p.ease),
        (a = "keyframes");
    }
    const d = sw(l.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: s,
      ease: o,
    });
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Qc(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: f } = this.options;
            l.set(no(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: d, duration: i, times: s, type: a, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return pt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return pt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = ht(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ae;
      const { animation: r } = n;
      Qc(r, t);
    }
    return Ae;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: d,
          element: f,
          ...g
        } = this.options,
        y = new Ru({
          ...g,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        v = ht(this.time);
      u.setWithVelocity(y.sample(v - Ns).value, y.sample(v).value, Ns);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: a,
    } = t;
    return (
      ow() &&
      r &&
      iw.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const fw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  dw = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  hw = { type: "keyframes", duration: 0.8 },
  pw = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  mw = (e, { keyframes: t }) =>
    t.length > 2
      ? hw
      : rr.has(e)
      ? e.startsWith("scale")
        ? dw(t[1])
        : fw
      : pw;
function gw({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Au =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const a = gu(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - ht(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        o(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    gw(a) || (c = { ...c, ...mw(e, c) }),
      c.duration && (c.duration = ht(c.duration)),
      c.repeatDelay && (c.repeatDelay = ht(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (d = !0)),
      d && !s && t.get() !== void 0)
    ) {
      const f = no(c.keyframes, a);
      if (f !== void 0)
        return (
          b.update(() => {
            c.onUpdate(f), c.onComplete();
          }),
          new V0([])
        );
    }
    return !s && df.supports(c) ? new df(c) : new Ru(c);
  };
function yw({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Fm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const d in l) {
    const f = e.getValue(
        d,
        (s = e.latestValues[d]) !== null && s !== void 0 ? s : null
      ),
      g = l[d];
    if (g === void 0 || (c && yw(c, d))) continue;
    const y = { delay: n, ...gu(o || {}, d) };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const p = am(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, d, b);
        h !== null && ((y.startTime = h), (v = !0));
      }
    }
    ba(e, d),
      f.start(
        Au(d, f, g, e.shouldReduceMotion && sm.has(d) ? { type: !1 } : y, e, v)
      );
    const k = f.animation;
    k && u.push(k);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        b.update(() => {
          a && X0(e, a);
        });
      }),
    u
  );
}
function Xa(e, t, n = {}) {
  var r;
  const i = to(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(Fm(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = s;
            return vw(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [o, a] : [a, o];
    return u().then(() => c());
  } else return Promise.all([o(), a(n.delay)]);
}
function vw(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(ww)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          o.push(
            Xa(u, t, { ...s, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function ww(e, t) {
  return e.sortNodePosition(t);
}
function xw(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Xa(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Xa(e, t, n);
  else {
    const i = typeof t == "function" ? to(e, t, n.custom) : t;
    r = Promise.all(Fm(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Sw = iu.length;
function Im(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Im(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Sw; n++) {
    const r = iu[n],
      i = e.props[r];
    (ei(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const kw = [...ru].reverse(),
  Pw = ru.length;
function Cw(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => xw(e, n, r)));
}
function Tw(e) {
  let t = Cw(e),
    n = hf(),
    r = !0;
  const i = (l) => (u, c) => {
    var d;
    const f = to(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: g, transitionEnd: y, ...v } = f;
      u = { ...u, ...v, ...y };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e,
      c = Im(e.parent) || {},
      d = [],
      f = new Set();
    let g = {},
      y = 1 / 0;
    for (let k = 0; k < Pw; k++) {
      const p = kw[k],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        w = ei(m),
        S = p === l ? h.isActive : null;
      S === !1 && (y = k);
      let C = m === c[p] && m !== u[p] && w;
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (h.protectedKeys = { ...g }),
        (!h.isActive && S === null) ||
          (!m && !h.prevProp) ||
          Js(m) ||
          typeof m == "boolean")
      )
        continue;
      const T = Ew(h.prevProp, m);
      let P = T || (p === l && h.isActive && !C && w) || (k > y && w),
        D = !1;
      const N = Array.isArray(m) ? m : [m];
      let I = N.reduce(i(p), {});
      S === !1 && (I = {});
      const { prevResolvedValues: Je = {} } = h,
        Le = { ...Je, ...I },
        We = (V) => {
          (P = !0),
            f.has(V) && ((D = !0), f.delete(V)),
            (h.needsAnimating[V] = !0);
          const L = e.getValue(V);
          L && (L.liveStyle = !1);
        };
      for (const V in Le) {
        const L = I[V],
          O = Je[V];
        if (g.hasOwnProperty(V)) continue;
        let j = !1;
        $a(L) && $a(O) ? (j = !qp(L, O)) : (j = L !== O),
          j
            ? L != null
              ? We(V)
              : f.add(V)
            : L !== void 0 && f.has(V)
            ? We(V)
            : (h.protectedKeys[V] = !0);
      }
      (h.prevProp = m),
        (h.prevResolvedValues = I),
        h.isActive && (g = { ...g, ...I }),
        r && e.blockInitialAnimation && (P = !1),
        P &&
          (!(C && T) || D) &&
          d.push(...N.map((V) => ({ animation: V, options: { type: p } })));
    }
    if (f.size) {
      const k = {};
      f.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        m && (m.liveStyle = !0), (k[p] = h ?? null);
      }),
        d.push({ animation: k });
    }
    let v = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var g;
        return (g = f.animationState) === null || g === void 0
          ? void 0
          : g.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = o(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      (n = hf()), (r = !0);
    },
  };
}
function Ew(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !qp(t, e) : !1;
}
function Xt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function hf() {
  return {
    animate: Xt(!0),
    whileInView: Xt(),
    whileHover: Xt(),
    whileTap: Xt(),
    whileDrag: Xt(),
    whileFocus: Xt(),
    exit: Xt(),
  };
}
class Kt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class Lw extends Kt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Tw(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Js(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let _w = 0;
class Nw extends Kt {
  constructor() {
    super(...arguments), (this.id = _w++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const Rw = { animation: { Feature: Lw }, exit: { Feature: Nw } };
function ii(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function pi(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const Aw = (e) => (t) => wu(t) && e(t, pi(t));
function jr(e, t, n, r) {
  return ii(e, t, Aw(n), r);
}
const pf = (e, t) => Math.abs(e - t);
function Dw(e, t) {
  const n = pf(e.x, t.x),
    r = pf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class zm {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = $o(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          g = Dw(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !g) return;
        const { point: y } = d,
          { timestamp: v } = le;
        this.history.push({ ...y, timestamp: v });
        const { onStart: k, onMove: p } = this.handlers;
        f ||
          (k && k(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = zo(f, this.transformPagePoint)),
          b.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const k = $o(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : zo(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(d, k), y && y(d, k);
      }),
      !wu(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = pi(t),
      a = zo(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = le;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, $o(a, this.history)),
      (this.removeListeners = hi(
        jr(this.contextWindow, "pointermove", this.handlePointerMove),
        jr(this.contextWindow, "pointerup", this.handlePointerUp),
        jr(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), $t(this.updatePoint);
  }
}
function zo(e, t) {
  return t ? { point: t(e.point) } : e;
}
function mf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function $o({ point: e }, t) {
  return {
    point: e,
    delta: mf(e, $m(t)),
    offset: mf(e, Ow(t)),
    velocity: jw(t, 0.1),
  };
}
function Ow(e) {
  return e[0];
}
function $m(e) {
  return e[e.length - 1];
}
function jw(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = $m(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > ht(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = pt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const Um = 1e-4,
  Mw = 1 - Um,
  Vw = 1 + Um,
  Bm = 0.01,
  Fw = 0 - Bm,
  Iw = 0 + Bm;
function Oe(e) {
  return e.max - e.min;
}
function zw(e, t, n) {
  return Math.abs(e - t) <= n;
}
function gf(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = H(t.min, t.max, e.origin)),
    (e.scale = Oe(n) / Oe(t)),
    (e.translate = H(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Mw && e.scale <= Vw) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Fw && e.translate <= Iw) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Mr(e, t, n, r) {
  gf(e.x, t.x, n.x, r ? r.originX : void 0),
    gf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function yf(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Oe(t));
}
function $w(e, t, n) {
  yf(e.x, t.x, n.x), yf(e.y, t.y, n.y);
}
function vf(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Oe(t));
}
function Vr(e, t, n) {
  vf(e.x, t.x, n.x), vf(e.y, t.y, n.y);
}
function Uw(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? H(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? H(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function wf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function Bw(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: wf(e.x, n, i), y: wf(e.y, t, r) };
}
function xf(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function bw(e, t) {
  return { x: xf(e.x, t.x), y: xf(e.y, t.y) };
}
function Ww(e, t) {
  let n = 0.5;
  const r = Oe(e),
    i = Oe(t);
  return (
    i > r
      ? (n = Xn(t.min, t.max - r, e.min))
      : r > i && (n = Xn(e.min, e.max - i, t.min)),
    wt(0, 1, n)
  );
}
function Kw(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const qa = 0.35;
function Hw(e = qa) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = qa),
    { x: Sf(e, "left", "right"), y: Sf(e, "top", "bottom") }
  );
}
function Sf(e, t, n) {
  return { min: kf(e, t), max: kf(e, n) };
}
function kf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Pf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  jn = () => ({ x: Pf(), y: Pf() }),
  Cf = () => ({ min: 0, max: 0 }),
  Z = () => ({ x: Cf(), y: Cf() });
function Fe(e) {
  return [e("x"), e("y")];
}
function bm({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Gw({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Qw(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Uo(e) {
  return e === void 0 || e === 1;
}
function Za({ scale: e, scaleX: t, scaleY: n }) {
  return !Uo(e) || !Uo(t) || !Uo(n);
}
function Jt(e) {
  return (
    Za(e) ||
    Wm(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Wm(e) {
  return Tf(e.x) || Tf(e.y);
}
function Tf(e) {
  return e && e !== "0%";
}
function Rs(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Ef(e, t, n, r, i) {
  return i !== void 0 && (e = Rs(e, i, r)), Rs(e, n, r) + t;
}
function Ja(e, t = 0, n = 1, r, i) {
  (e.min = Ef(e.min, t, n, r, i)), (e.max = Ef(e.max, t, n, r, i));
}
function Km(e, { x: t, y: n }) {
  Ja(e.x, t.translate, t.scale, t.originPoint),
    Ja(e.y, n.translate, n.scale, n.originPoint);
}
const Lf = 0.999999999999,
  _f = 1.0000000000001;
function Yw(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Vn(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Km(e, o)),
      r && Jt(s.latestValues) && Vn(e, s.latestValues));
  }
  t.x < _f && t.x > Lf && (t.x = 1), t.y < _f && t.y > Lf && (t.y = 1);
}
function Mn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Nf(e, t, n, r, i = 0.5) {
  const s = H(e.min, e.max, i);
  Ja(e, t, n, s, r);
}
function Vn(e, t) {
  Nf(e.x, t.x, t.scaleX, t.scale, t.originX),
    Nf(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Hm(e, t) {
  return bm(Qw(e.getBoundingClientRect(), t));
}
function Xw(e, t, n) {
  const r = Hm(e, n),
    { scroll: i } = t;
  return i && (Mn(r.x, i.offset.x), Mn(r.y, i.offset.y)), r;
}
const Gm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  qw = new WeakMap();
class Zw {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Z()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(pi(c).point);
      },
      s = (c, d) => {
        const { drag: f, dragPropagation: g, onDragStart: y } = this.getProps();
        if (
          f &&
          !g &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = K0(f)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Fe((k) => {
            let p = this.getAxisMotionValue(k).get() || 0;
            if (ot.test(p)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const m = h.layout.layoutBox[k];
                m && (p = Oe(m) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[k] = p;
          }),
          y && b.postRender(() => y(c, d)),
          ba(this.visualElement, "transform");
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      o = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: g,
          onDirectionLock: y,
          onDrag: v,
        } = this.getProps();
        if (!f && !this.openDragLock) return;
        const { offset: k } = d;
        if (g && this.currentDirection === null) {
          (this.currentDirection = Jw(k)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, k),
          this.updateAxis("y", d.point, k),
          this.visualElement.render(),
          v && v(c, d);
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        Fe((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new zm(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Gm(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && b.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Vi(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = Uw(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && Dn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = Bw(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = Hw(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Fe((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = Kw(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Dn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = Xw(r, i.root, this.visualElement.getTransformPagePoint());
    let o = bw(i.layout.layoutBox, s);
    if (n) {
      const a = n(Gw(o));
      (this.hasMutatedConstraints = !!a), a && (o = bm(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Fe((c) => {
        if (!Vi(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        o && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      ba(this.visualElement, t), r.start(Au(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Fe((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Fe((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Fe((n) => {
      const { drag: r } = this.getProps();
      if (!Vi(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - H(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Dn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Fe((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = Ww({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Fe((o) => {
        if (!Vi(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(H(l, u, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    qw.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = jr(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Dn(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      b.read(r);
    const o = ii(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Fe((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = qa,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Vi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Jw(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class ex extends Kt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ae),
      (this.removeListeners = Ae),
      (this.controls = new Zw(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ae);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Rf = (e) => (t, n) => {
  e && b.postRender(() => e(t, n));
};
class tx extends Kt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ae);
  }
  onPointerDown(t) {
    this.session = new zm(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Gm(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Rf(t),
      onStart: Rf(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && b.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = jr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ji = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Af(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const hr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (A.test(e)) e = parseFloat(e);
        else return e;
      const n = Af(e, t.target.x),
        r = Af(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  nx = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Ut.parse(e);
      if (i.length > 5) return r;
      const s = Ut.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const u = H(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  };
class rx extends R.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    l0(ix),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ji.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              b.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      ou.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Qm(e) {
  const [t, n] = $v(),
    r = R.useContext(Ap);
  return x.jsx(rx, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: R.useContext(Ip),
    isPresent: t,
    safeToRemove: n,
  });
}
const ix = {
  borderRadius: {
    ...hr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: hr,
  borderTopRightRadius: hr,
  borderBottomLeftRadius: hr,
  borderBottomRightRadius: hr,
  boxShadow: nx,
};
function sx(e, t, n) {
  const r = ge(e) ? e : ni(e);
  return r.start(Au("", r, t, n)), r.animation;
}
function ox(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const ax = (e, t) => e.depth - t.depth;
class lx {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    xu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Su(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(ax),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function ux(e, t) {
  const n = at.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && ($t(r), e(s - t));
    };
  return b.read(r, !0), () => $t(r);
}
const Ym = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  cx = Ym.length,
  Df = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Of = (e) => typeof e == "number" || A.test(e);
function fx(e, t, n, r, i, s) {
  i
    ? ((e.opacity = H(0, n.opacity !== void 0 ? n.opacity : 1, dx(r))),
      (e.opacityExit = H(t.opacity !== void 0 ? t.opacity : 1, 0, hx(r))))
    : s &&
      (e.opacity = H(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < cx; o++) {
    const a = `border${Ym[o]}Radius`;
    let l = jf(t, a),
      u = jf(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Of(l) === Of(u)
        ? ((e[a] = Math.max(H(Df(l), Df(u), r), 0)),
          (ot.test(u) || ot.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = H(t.rotate || 0, n.rotate || 0, r));
}
function jf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const dx = Xm(0, 0.5, pm),
  hx = Xm(0.5, 0.95, Ae);
function Xm(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Xn(e, t, r)));
}
function Mf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ve(e, t) {
  Mf(e.x, t.x), Mf(e.y, t.y);
}
function Vf(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Ff(e, t, n, r, i) {
  return (
    (e -= t), (e = Rs(e, 1 / n, r)), i !== void 0 && (e = Rs(e, 1 / i, r)), e
  );
}
function px(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (ot.test(t) &&
      ((t = parseFloat(t)), (t = H(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = H(s.min, s.max, r);
  e === s && (a -= t),
    (e.min = Ff(e.min, t, n, a, i)),
    (e.max = Ff(e.max, t, n, a, i));
}
function If(e, t, [n, r, i], s, o) {
  px(e, t[n], t[r], t[i], t.scale, s, o);
}
const mx = ["x", "scaleX", "originX"],
  gx = ["y", "scaleY", "originY"];
function zf(e, t, n, r) {
  If(e.x, t, mx, n ? n.x : void 0, r ? r.x : void 0),
    If(e.y, t, gx, n ? n.y : void 0, r ? r.y : void 0);
}
function $f(e) {
  return e.translate === 0 && e.scale === 1;
}
function qm(e) {
  return $f(e.x) && $f(e.y);
}
function Uf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function yx(e, t) {
  return Uf(e.x, t.x) && Uf(e.y, t.y);
}
function Bf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Zm(e, t) {
  return Bf(e.x, t.x) && Bf(e.y, t.y);
}
function bf(e) {
  return Oe(e.x) / Oe(e.y);
}
function Wf(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class vx {
  constructor() {
    this.members = [];
  }
  add(t) {
    xu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Su(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function wx(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: g,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      g && (r += `skewX(${g}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const en = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Pr = typeof window < "u" && window.MotionDebug !== void 0,
  Bo = ["", "X", "Y", "Z"],
  xx = { visibility: "hidden" },
  Kf = 1e3;
let Sx = 0;
function bo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Jm(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = am(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", b, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Jm(r);
}
function eg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = Sx++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Pr &&
              (en.totalNodes =
                en.resolvedTargetDeltas =
                en.recalculatedProjection =
                  0),
            this.nodes.forEach(Cx),
            this.nodes.forEach(Nx),
            this.nodes.forEach(Rx),
            this.nodes.forEach(Tx),
            Pr && window.MotionDebug.record(en);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new lx());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new ku()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = ox(o)), (this.instance = o);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = ux(f, 250)),
            Ji.hasAnimatedSinceResize &&
              ((Ji.hasAnimatedSinceResize = !1), this.nodes.forEach(Gf));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: g,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || Mx,
                { onLayoutAnimationStart: k, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !Zm(this.targetLayout, y) || g,
                m = !f && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, m);
                const w = { ...gu(v, "layout"), onPlay: k, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                f || Gf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        $t(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Ax),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Jm(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Hf);
        return;
      }
      this.isUpdating || this.nodes.forEach(Lx),
        (this.isUpdating = !1),
        this.nodes.forEach(_x),
        this.nodes.forEach(kx),
        this.nodes.forEach(Px),
        this.clearAllSnapshots();
      const a = at.now();
      (le.delta = wt(0, 1e3 / 60, a - le.timestamp)),
        (le.timestamp = a),
        (le.isProcessing = !0),
        Oo.update.process(le),
        Oo.preRender.process(le),
        Oo.render.process(le),
        (le.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), ou.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Ex), this.sharedNodes.forEach(Dx);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        b.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      b.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Z()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !qm(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (a || Jt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        Vx(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return Z();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(Fx)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Mn(l.x, c.offset.x), Mn(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = Z();
      if (
        (Ve(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && Ve(l, o), Mn(l.x, d.offset.x), Mn(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = Z();
      Ve(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Vn(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Jt(c.latestValues) && Vn(l, c.latestValues);
      }
      return Jt(this.latestValues) && Vn(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = Z();
      Ve(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Jt(u.latestValues)) continue;
        Za(u.latestValues) && u.updateSnapshot();
        const c = Z(),
          d = u.measurePageBox();
        Ve(c, d),
          zf(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Jt(this.latestValues) && zf(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== le.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = le.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Z()),
              (this.relativeTargetOrigin = Z()),
              Vr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              Ve(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Z()), (this.targetWithTransforms = Z())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                $w(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ve(this.target, this.layout.layoutBox),
                Km(this.target, this.targetDelta))
              : Ve(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Z()),
                (this.relativeTargetOrigin = Z()),
                Vr(this.relativeTargetOrigin, this.target, g.target),
                Ve(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Pr && en.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Za(this.parent.latestValues) ||
          Wm(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === le.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      Ve(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        g = this.treeScale.y;
      Yw(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = Z()));
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Vf(this.prevProjectionDelta.x, this.projectionDelta.x),
          Vf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Mr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== g ||
          !Wf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Wf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        Pr && en.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = jn()),
        (this.projectionDelta = jn()),
        (this.projectionDeltaWithTransform = jn());
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = jn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Z(),
        g = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = g !== y,
        k = this.getStack(),
        p = !k || k.members.length <= 1,
        h = !!(v && !p && this.options.crossfade === !0 && !this.path.some(jx));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (w) => {
        const S = w / 1e3;
        Qf(d.x, o.x, S),
          Qf(d.y, o.y, S),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Vr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Ox(this.relativeTarget, this.relativeTargetOrigin, f, S),
            m && yx(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = Z()),
            Ve(m, this.relativeTarget)),
          v &&
            ((this.animationValues = c), fx(c, u, this.latestValues, S, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          ($t(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = b.update(() => {
          (Ji.hasAnimatedSinceResize = !0),
            (this.currentAnimation = sx(0, Kf, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Kf),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          tg(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Z();
          const d = Oe(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
          const f = Oe(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + f);
        }
        Ve(a, l),
          Vn(a, c),
          Mr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new vx()),
        this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && bo("z", o, u, this.animationValues);
      for (let c = 0; c < Bo.length; c++)
        bo(`rotate${Bo[c]}`, o, u, this.animationValues),
          bo(`skew${Bo[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return xx;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = qi(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = qi(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !Jt(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = wx(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: g, y } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const v in Ts) {
        if (f[v] === void 0) continue;
        const { correct: k, applyTo: p } = Ts[v],
          h = u.transform === "none" ? f[v] : k(f[v], d);
        if (p) {
          const m = p.length;
          for (let w = 0; w < m; w++) u[p[w]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? qi(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Hf),
        this.root.sharedNodes.clear();
    }
  };
}
function kx(e) {
  e.updateLayout();
}
function Px(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? Fe((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            g = Oe(f);
          (f.min = r[d].min), (f.max = f.min + g);
        })
      : tg(s, n.layoutBox, r) &&
        Fe((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            g = Oe(r[d]);
          (f.max = f.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + g));
        });
    const a = jn();
    Mr(a, r, n.layoutBox);
    const l = jn();
    o ? Mr(l, e.applyTransform(i, !0), n.measuredBox) : Mr(l, r, n.layoutBox);
    const u = !qm(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: g } = d;
        if (f && g) {
          const y = Z();
          Vr(y, n.layoutBox, f.layoutBox);
          const v = Z();
          Vr(v, r, g.layoutBox),
            Zm(y, v) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Cx(e) {
  Pr && en.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Tx(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Ex(e) {
  e.clearSnapshot();
}
function Hf(e) {
  e.clearMeasurements();
}
function Lx(e) {
  e.isLayoutDirty = !1;
}
function _x(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Gf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Nx(e) {
  e.resolveTargetDelta();
}
function Rx(e) {
  e.calcProjection();
}
function Ax(e) {
  e.resetSkewAndRotation();
}
function Dx(e) {
  e.removeLeadSnapshot();
}
function Qf(e, t, n) {
  (e.translate = H(t.translate, 0, n)),
    (e.scale = H(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Yf(e, t, n, r) {
  (e.min = H(t.min, n.min, r)), (e.max = H(t.max, n.max, r));
}
function Ox(e, t, n, r) {
  Yf(e.x, t.x, n.x, r), Yf(e.y, t.y, n.y, r);
}
function jx(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Mx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Xf = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  qf = Xf("applewebkit/") && !Xf("chrome/") ? Math.round : Ae;
function Zf(e) {
  (e.min = qf(e.min)), (e.max = qf(e.max));
}
function Vx(e) {
  Zf(e.x), Zf(e.y);
}
function tg(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !zw(bf(t), bf(n), 0.2))
  );
}
function Fx(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const Ix = eg({
    attachResizeListener: (e, t) => ii(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Wo = { current: void 0 },
  ng = eg({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Wo.current) {
        const e = new Ix({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Wo.current = e);
      }
      return Wo.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  zx = {
    pan: { Feature: tx },
    drag: { Feature: ex, ProjectionNode: ng, MeasureLayout: Qm },
  };
function Jf(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && b.postRender(() => s(t, pi(t)));
}
class $x extends Kt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = $0(
        t,
        (n) => (Jf(this.node, n, "Start"), (r) => Jf(this.node, r, "End"))
      ));
  }
  unmount() {}
}
class Ux extends Kt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = hi(
      ii(this.node.current, "focus", () => this.onFocus()),
      ii(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function ed(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && b.postRender(() => s(t, pi(t)));
}
class Bx extends Kt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = W0(
        t,
        (n) => (
          ed(this.node, n, "Start"),
          (r, { success: i }) => ed(this.node, r, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const el = new WeakMap(),
  Ko = new WeakMap(),
  bx = (e) => {
    const t = el.get(e.target);
    t && t(e);
  },
  Wx = (e) => {
    e.forEach(bx);
  };
function Kx({ root: e, ...t }) {
  const n = e || document;
  Ko.has(n) || Ko.set(n, {});
  const r = Ko.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Wx, { root: e, ...t })), r[i];
}
function Hx(e, t, n) {
  const r = Kx(t);
  return (
    el.set(e, n),
    r.observe(e),
    () => {
      el.delete(e), r.unobserve(e);
    }
  );
}
const Gx = { some: 0, all: 1 };
class Qx extends Kt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Gx[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return Hx(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Yx(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Yx({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Xx = {
    inView: { Feature: Qx },
    tap: { Feature: Bx },
    focus: { Feature: Ux },
    hover: { Feature: $x },
  },
  qx = { layout: { ProjectionNode: ng, MeasureLayout: Qm } },
  tl = { current: null },
  rg = { current: !1 };
function Zx() {
  if (((rg.current = !0), !!tu))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (tl.current = e.matches);
      e.addListener(t), t();
    } else tl.current = !1;
}
const Jx = [..._m, pe, Ut],
  eS = (e) => Jx.find(Lm(e)),
  td = new WeakMap();
function tS(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (ge(i)) e.addValue(r, i);
    else if (ge(s)) e.addValue(r, ni(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, ni(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const nd = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class nS {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = _u),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const f = at.now();
        this.renderScheduledAt < f &&
          ((this.renderScheduledAt = f), b.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = eo(n)),
      (this.isVariantNode = Vp(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const f in d) {
      const g = d[f];
      l[f] !== void 0 && ge(g) && g.set(l[f], !1);
    }
  }
  mount(t) {
    (this.current = t),
      td.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      rg.current || Zx(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : tl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    td.delete(this.current),
      this.projection && this.projection.unmount(),
      $t(this.notifyUpdate),
      $t(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = rr.has(t),
      i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && b.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in qn) {
      const n = qn[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Z();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < nd.length; r++) {
      const i = nd[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = tS(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ni(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Tm(i) || gm(i))
          ? (i = parseFloat(i))
          : !eS(i) && Ut.test(n) && (i = km(t, n)),
        this.setBaseTarget(t, ge(i) ? i.get() : i)),
      ge(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = uu(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !ge(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new ku()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class ig extends nS {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Nm);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ge(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function rS(e) {
  return window.getComputedStyle(e);
}
class iS extends ig {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = $p);
  }
  readValueFromInstance(t, n) {
    if (rr.has(n)) {
      const r = Lu(n);
      return (r && r.default) || 0;
    } else {
      const r = rS(t),
        i = (Qp(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Hm(t, n);
  }
  build(t, n, r) {
    hu(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return lu(t, n, r);
  }
}
class sS extends ig {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Z);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (rr.has(n)) {
      const r = Lu(n);
      return (r && r.default) || 0;
    }
    return (n = Up.has(n) ? n : su(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Wp(t, n, r);
  }
  build(t, n, r) {
    pu(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Bp(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = mu(t.tagName)), super.mount(t);
  }
}
const oS = (e, t) =>
    au(e) ? new sS(t) : new iS(t, { allowProjection: e !== R.Fragment }),
  aS = O0({ ...Rw, ...Xx, ...zx, ...qx }, oS),
  ue = Yv(aS);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var lS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uS = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  St = (e, t) => {
    const n = R.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: o,
          className: a = "",
          children: l,
          ...u
        },
        c
      ) =>
        R.createElement(
          "svg",
          {
            ref: c,
            ...lS,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: o ? (Number(s) * 24) / Number(i) : s,
            className: ["lucide", `lucide-${uS(e)}`, a].join(" "),
            ...u,
          },
          [
            ...t.map(([d, f]) => R.createElement(d, f)),
            ...(Array.isArray(l) ? l : [l]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cS = St("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fS = St("Code2", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dS = St("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hS = St("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pS = St("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mS = St("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gS = St("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yS = St("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vS = St("Twitter", [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ]),
  wS = (e, t, n, r) => {
    var s, o, a, l;
    const i = [n, { code: t, ...(r || {}) }];
    if (
      (o = (s = e == null ? void 0 : e.services) == null ? void 0 : s.logger) !=
        null &&
      o.forward
    )
      return e.services.logger.forward(i, "warn", "react-i18next::", !0);
    un(i[0]) && (i[0] = `react-i18next:: ${i[0]}`),
      (l = (a = e == null ? void 0 : e.services) == null ? void 0 : a.logger) !=
        null && l.warn
        ? e.services.logger.warn(...i)
        : console != null && console.warn && console.warn(...i);
  },
  rd = {},
  nl = (e, t, n, r) => {
    (un(n) && rd[n]) || (un(n) && (rd[n] = new Date()), wS(e, t, n, r));
  },
  sg = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const n = () => {
        setTimeout(() => {
          e.off("initialized", n);
        }, 0),
          t();
      };
      e.on("initialized", n);
    }
  },
  rl = (e, t, n) => {
    e.loadNamespaces(t, sg(e, n));
  },
  id = (e, t, n, r) => {
    if (
      (un(n) && (n = [n]),
      e.options.preload && e.options.preload.indexOf(t) > -1)
    )
      return rl(e, n, r);
    n.forEach((i) => {
      e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
    }),
      e.loadLanguages(t, sg(e, r));
  },
  xS = (e, t, n = {}) =>
    !t.languages || !t.languages.length
      ? (nl(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: t.languages,
        }),
        !0)
      : t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (r, i) => {
            var s;
            if (
              ((s = n.bindI18n) == null
                ? void 0
                : s.indexOf("languageChanging")) > -1 &&
              r.services.backendConnector.backend &&
              r.isLanguageChangingTo &&
              !i(r.isLanguageChangingTo, e)
            )
              return !1;
          },
        }),
  un = (e) => typeof e == "string",
  SS = (e) => typeof e == "object" && e !== null,
  kS =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  PS = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  CS = (e) => PS[e],
  TS = (e) => e.replace(kS, CS);
let il = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: TS,
};
const ES = (e = {}) => {
    il = { ...il, ...e };
  },
  LS = () => il;
let og;
const _S = (e) => {
    og = e;
  },
  NS = () => og,
  RS = {
    type: "3rdParty",
    init(e) {
      ES(e.options.react), _S(e);
    },
  },
  AS = R.createContext();
class DS {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const OS = (e, t) => {
    const n = R.useRef();
    return (
      R.useEffect(() => {
        n.current = e;
      }, [e, t]),
      n.current
    );
  },
  ag = (e, t, n, r) => e.getFixedT(t, n, r),
  jS = (e, t, n, r) => R.useCallback(ag(e, t, n, r), [e, t, n, r]),
  ro = (e, t = {}) => {
    var w, S, C, T;
    const { i18n: n } = t,
      { i18n: r, defaultNS: i } = R.useContext(AS) || {},
      s = n || r || NS();
    if ((s && !s.reportNamespaces && (s.reportNamespaces = new DS()), !s)) {
      nl(
        s,
        "NO_I18NEXT_INSTANCE",
        "useTranslation: You will need to pass in an i18next instance by using initReactI18next"
      );
      const P = (N, I) =>
          un(I)
            ? I
            : SS(I) && un(I.defaultValue)
            ? I.defaultValue
            : Array.isArray(N)
            ? N[N.length - 1]
            : N,
        D = [P, {}, !1];
      return (D.t = P), (D.i18n = {}), (D.ready = !1), D;
    }
    (w = s.options.react) != null &&
      w.wait &&
      nl(
        s,
        "DEPRECATED_OPTION",
        "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
      );
    const o = { ...LS(), ...s.options.react, ...t },
      { useSuspense: a, keyPrefix: l } = o;
    let u = i || ((S = s.options) == null ? void 0 : S.defaultNS);
    (u = un(u) ? [u] : u || ["translation"]),
      (T = (C = s.reportNamespaces).addUsedNamespaces) == null || T.call(C, u);
    const c =
        (s.isInitialized || s.initializedStoreOnce) &&
        u.every((P) => xS(P, s, o)),
      d = jS(s, t.lng || null, o.nsMode === "fallback" ? u : u[0], l),
      f = () => d,
      g = () => ag(s, t.lng || null, o.nsMode === "fallback" ? u : u[0], l),
      [y, v] = R.useState(f);
    let k = u.join();
    t.lng && (k = `${t.lng}${k}`);
    const p = OS(k),
      h = R.useRef(!0);
    R.useEffect(() => {
      const { bindI18n: P, bindI18nStore: D } = o;
      (h.current = !0),
        !c &&
          !a &&
          (t.lng
            ? id(s, t.lng, u, () => {
                h.current && v(g);
              })
            : rl(s, u, () => {
                h.current && v(g);
              })),
        c && p && p !== k && h.current && v(g);
      const N = () => {
        h.current && v(g);
      };
      return (
        P && (s == null || s.on(P, N)),
        D && (s == null || s.store.on(D, N)),
        () => {
          (h.current = !1),
            s && (P == null || P.split(" ").forEach((I) => s.off(I, N))),
            D && s && D.split(" ").forEach((I) => s.store.off(I, N));
        }
      );
    }, [s, k]),
      R.useEffect(() => {
        h.current && c && v(f);
      }, [s, l, c]);
    const m = [y, s, c];
    if (((m.t = y), (m.i18n = s), (m.ready = c), c || (!c && !a))) return m;
    throw new Promise((P) => {
      t.lng ? id(s, t.lng, u, () => P()) : rl(s, u, () => P());
    });
  },
  MS = () => {
    const { t: e } = ro();
    return x.jsxs("section", {
      className: "hero",
      children: [
        x.jsx("div", {
          className: "hero__image",
          children: x.jsx("video", {
            autoPlay: !0,
            loop: !0,
            muted: !0,
            children: x.jsx("source", {
              src: "https://assets.mixkit.co/videos/308/308-720.mp4",
            }),
          }),
        }),
        x.jsxs(ue.div, {
          className: "hero__content",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: [
            x.jsx(ue.h1, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 },
              children: e("heading"),
            }),
            x.jsx(ue.p, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.4 },
              children: e("mainPreef"),
            }),
            x.jsxs(ue.a, {
              href: "#contact",
              className: "cta-button",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.6 },
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: [
                e("getStart"),
                x.jsx(cS, {
                  size: 16,
                  style: { display: "inline", marginLeft: "0.5rem" },
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  VS = () => {
    const { t: e } = ro();
    return x.jsx("footer", {
      className: "footer",
      children: x.jsxs("div", {
        className: "footer__container",
        children: [
          x.jsxs("div", {
            className: "footer__grid",
            children: [
              x.jsxs(ue.div, {
                className: "footer__info",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                children: [
                  x.jsx("h3", { children: e("company_name") }),
                  x.jsx("p", { children: e("tagline") }),
                  x.jsxs("div", {
                    className: "footer__contact",
                    children: [
                      x.jsxs("p", {
                        children: [
                          x.jsx(mS, { size: 16 }),
                          " contact@niletechsoft.com",
                        ],
                      }),
                      x.jsxs("p", {
                        children: [
                          x.jsx(yS, { size: 16 }),
                          " +1 (555) 123-4567",
                        ],
                      }),
                      x.jsxs("p", {
                        children: [x.jsx(gS, { size: 16 }), e("address")],
                      }),
                    ],
                  }),
                ],
              }),
              x.jsxs(ue.div, {
                className: "footer__links",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                children: [
                  x.jsx("h4", { children: e("quick_links_title") }),
                  x.jsxs("ul", {
                    children: [
                      x.jsx("li", {
                        children: x.jsx("a", {
                          href: "#about",
                          children: e("quick_links.about_us"),
                        }),
                      }),
                      x.jsx("li", {
                        children: x.jsx("a", {
                          href: "#services",
                          children: e("quick_links.services"),
                        }),
                      }),
                      x.jsx("li", {
                        children: x.jsx("a", {
                          href: "#work",
                          children: e("quick_links.our_work"),
                        }),
                      }),
                      x.jsx("li", {
                        children: x.jsx("a", {
                          href: "#contact",
                          children: e("quick_links.contact"),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              x.jsxs(ue.div, {
                className: "footer__links",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                children: [
                  x.jsx("h4", { children: e("services_title") }),
                  x.jsxs("ul", {
                    children: [
                      x.jsx("li", {
                        children: x.jsx("a", {
                          href: "#services",
                          children: e("services.custom_development"),
                        }),
                      }),
                      x.jsx("li", {
                        children: x.jsx("a", {
                          href: "#services",
                          children: e("services.web_applications"),
                        }),
                      }),
                      x.jsx("li", {
                        children: x.jsx("a", {
                          href: "#services",
                          children: e("services.mobile_development"),
                        }),
                      }),
                      x.jsx("li", {
                        children: x.jsx("a", {
                          href: "#services",
                          children: e("services.enterprise_solutions"),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              x.jsxs(ue.div, {
                className: "footer__links",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                children: [
                  x.jsx("h4", { children: e("connect_with_us_title") }),
                  x.jsxs("div", {
                    className: "footer__social",
                    children: [
                      x.jsx("a", {
                        href: "https://facebook.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: x.jsx(dS, { size: 24 }),
                      }),
                      x.jsx("a", {
                        href: "https://twitter.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: x.jsx(vS, { size: 24 }),
                      }),
                      x.jsx("a", {
                        href: "https://instagram.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: x.jsx(hS, { size: 24 }),
                      }),
                      x.jsx("a", {
                        href: "https://linkedin.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: x.jsx(pS, { size: 24 }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          x.jsx("div", {
            className: "footer__bottom",
            children: x.jsxs("p", {
              children: ["© ", new Date().getFullYear(), " ", e("copyright")],
            }),
          }),
        ],
      }),
    });
  };
/*! js-cookie v3.0.5 | MIT */ function Fi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) e[r] = n[r];
  }
  return e;
}
var FS = {
  read: function (e) {
    return (
      e[0] === '"' && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  },
};
function sl(e, t) {
  function n(i, s, o) {
    if (!(typeof document > "u")) {
      (o = Fi({}, t, o)),
        typeof o.expires == "number" &&
          (o.expires = new Date(Date.now() + o.expires * 864e5)),
        o.expires && (o.expires = o.expires.toUTCString()),
        (i = encodeURIComponent(i)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape));
      var a = "";
      for (var l in o)
        o[l] &&
          ((a += "; " + l), o[l] !== !0 && (a += "=" + o[l].split(";")[0]));
      return (document.cookie = i + "=" + e.write(s, i) + a);
    }
  }
  function r(i) {
    if (!(typeof document > "u" || (arguments.length && !i))) {
      for (
        var s = document.cookie ? document.cookie.split("; ") : [],
          o = {},
          a = 0;
        a < s.length;
        a++
      ) {
        var l = s[a].split("="),
          u = l.slice(1).join("=");
        try {
          var c = decodeURIComponent(l[0]);
          if (((o[c] = e.read(u, c)), i === c)) break;
        } catch {}
      }
      return i ? o[i] : o;
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (i, s) {
        n(i, "", Fi({}, s, { expires: -1 }));
      },
      withAttributes: function (i) {
        return sl(this.converter, Fi({}, this.attributes, i));
      },
      withConverter: function (i) {
        return sl(Fi({}, this.converter, i), this.attributes);
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    }
  );
}
var IS = sl(FS, { path: "/" });
const zS = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  },
};
class As {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || "i18next:"),
      (this.logger = t || zS),
      (this.options = n),
      (this.debug = n.debug);
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, i) {
    return i && !this.debug
      ? null
      : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`),
        this.logger[n](t));
  }
  create(t) {
    return new As(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new As(this.logger, t)
    );
  }
}
var rt = new As();
class io {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(" ").forEach((r) => {
        (this.observers[r] = this.observers[r] || []),
          this.observers[r].push(n);
      }),
      this
    );
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t] = this.observers[t].filter((r) => r !== n);
    }
  }
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      r[i - 1] = arguments[i];
    this.observers[t] &&
      [].concat(this.observers[t]).forEach((o) => {
        o(...r);
      }),
      this.observers["*"] &&
        [].concat(this.observers["*"]).forEach((o) => {
          o.apply(o, [t, ...r]);
        });
  }
}
function pr() {
  let e, t;
  const n = new Promise((r, i) => {
    (e = r), (t = i);
  });
  return (n.resolve = e), (n.reject = t), n;
}
function sd(e) {
  return e == null ? "" : "" + e;
}
function $S(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
function Du(e, t, n) {
  function r(o) {
    return o && o.indexOf("###") > -1 ? o.replace(/###/g, ".") : o;
  }
  function i() {
    return !e || typeof e == "string";
  }
  const s = typeof t != "string" ? [].concat(t) : t.split(".");
  for (; s.length > 1; ) {
    if (i()) return {};
    const o = r(s.shift());
    !e[o] && n && (e[o] = new n()),
      Object.prototype.hasOwnProperty.call(e, o) ? (e = e[o]) : (e = {});
  }
  return i() ? {} : { obj: e, k: r(s.shift()) };
}
function od(e, t, n) {
  const { obj: r, k: i } = Du(e, t, Object);
  r[i] = n;
}
function US(e, t, n, r) {
  const { obj: i, k: s } = Du(e, t, Object);
  (i[s] = i[s] || []), i[s].push(n);
}
function Ds(e, t) {
  const { obj: n, k: r } = Du(e, t);
  if (n) return n[r];
}
function BS(e, t, n) {
  const r = Ds(e, n);
  return r !== void 0 ? r : Ds(t, n);
}
function lg(e, t, n) {
  for (const r in t)
    r !== "__proto__" &&
      r !== "constructor" &&
      (r in e
        ? typeof e[r] == "string" ||
          e[r] instanceof String ||
          typeof t[r] == "string" ||
          t[r] instanceof String
          ? n && (e[r] = t[r])
          : lg(e[r], t[r], n)
        : (e[r] = t[r]));
  return e;
}
function vn(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var bS = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
function WS(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => bS[t]) : e;
}
const KS = [" ", ",", "?", "!", ";"];
function HS(e, t, n) {
  (t = t || ""), (n = n || "");
  const r = KS.filter((o) => t.indexOf(o) < 0 && n.indexOf(o) < 0);
  if (r.length === 0) return !0;
  const i = new RegExp(`(${r.map((o) => (o === "?" ? "\\?" : o)).join("|")})`);
  let s = !i.test(e);
  if (!s) {
    const o = e.indexOf(n);
    o > 0 && !i.test(e.substring(0, o)) && (s = !0);
  }
  return s;
}
function Os(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e) return;
  if (e[t]) return e[t];
  const r = t.split(n);
  let i = e;
  for (let s = 0; s < r.length; ++s) {
    if (!i || (typeof i[r[s]] == "string" && s + 1 < r.length)) return;
    if (i[r[s]] === void 0) {
      let o = 2,
        a = r.slice(s, s + o).join(n),
        l = i[a];
      for (; l === void 0 && r.length > s + o; )
        o++, (a = r.slice(s, s + o).join(n)), (l = i[a]);
      if (l === void 0) return;
      if (l === null) return null;
      if (t.endsWith(a)) {
        if (typeof l == "string") return l;
        if (a && typeof l[a] == "string") return l[a];
      }
      const u = r.slice(s + o).join(n);
      return u ? Os(l, u, n) : void 0;
    }
    i = i[r[s]];
  }
  return i;
}
function js(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class ad extends io {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const s =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      o =
        i.ignoreJSONStructure !== void 0
          ? i.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let a = [t, n];
    r && typeof r != "string" && (a = a.concat(r)),
      r && typeof r == "string" && (a = a.concat(s ? r.split(s) : r)),
      t.indexOf(".") > -1 && (a = t.split("."));
    const l = Ds(this.data, a);
    return l || !o || typeof r != "string"
      ? l
      : Os(this.data && this.data[t] && this.data[t][n], r, s);
  }
  addResource(t, n, r, i) {
    let s =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const o =
      s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(o ? r.split(o) : r)),
      t.indexOf(".") > -1 && ((a = t.split(".")), (i = n), (n = a[1])),
      this.addNamespaces(n),
      od(this.data, a, i),
      s.silent || this.emit("added", t, n, r, i);
  }
  addResources(t, n, r) {
    let i =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const s in r)
      (typeof r[s] == "string" ||
        Object.prototype.toString.apply(r[s]) === "[object Array]") &&
        this.addResource(t, n, s, r[s], { silent: !0 });
    i.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, i, s) {
    let o =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1 },
      a = [t, n];
    t.indexOf(".") > -1 && ((a = t.split(".")), (i = r), (r = n), (n = a[1])),
      this.addNamespaces(n);
    let l = Ds(this.data, a) || {};
    i ? lg(l, r, s) : (l = { ...l, ...r }),
      od(this.data, a, l),
      o.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === "v1"
        ? { ...this.getResource(t, n) }
        : this.getResource(t, n)
    );
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(
      (i) => n[i] && Object.keys(n[i]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var ug = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return (
      e.forEach((s) => {
        this.processors[s] && (t = this.processors[s].process(t, n, r, i));
      }),
      t
    );
  },
};
const ld = {};
class Ms extends io {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      $S(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        t,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = rt.create("translator"));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let s = n.ns || this.options.defaultNS || [];
    const o = r && t.indexOf(r) > -1,
      a =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !HS(t, r, i);
    if (o && !a) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return { key: t, namespaces: s };
      const u = t.split(r);
      (r !== i || (r === i && this.options.ns.indexOf(u[0]) > -1)) &&
        (s = u.shift()),
        (t = u.join(i));
    }
    return typeof s == "string" && (s = [s]), { key: t, namespaces: s };
  }
  translate(t, n, r) {
    if (
      (typeof n != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == "object" && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const i =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      s =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: o, namespaces: a } = this.extractFromKey(t[t.length - 1], n),
      l = a[a.length - 1],
      u = n.lng || this.language,
      c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (c) {
        const w = n.nsSeparator || this.options.nsSeparator;
        return i
          ? {
              res: `${l}${w}${o}`,
              usedKey: o,
              exactUsedKey: o,
              usedLng: u,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${l}${w}${o}`;
      }
      return i
        ? {
            res: o,
            usedKey: o,
            exactUsedKey: o,
            usedLng: u,
            usedNS: l,
            usedParams: this.getUsedParamsDetails(n),
          }
        : o;
    }
    const d = this.resolve(t, n);
    let f = d && d.res;
    const g = (d && d.usedKey) || o,
      y = (d && d.exactUsedKey) || o,
      v = Object.prototype.toString.apply(f),
      k = ["[object Number]", "[object Function]", "[object RegExp]"],
      p = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      h = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      h &&
      f &&
      typeof f != "string" &&
      typeof f != "boolean" &&
      typeof f != "number" &&
      k.indexOf(v) < 0 &&
      !(typeof p == "string" && v === "[object Array]")
    ) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!"
          );
        const w = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(g, f, { ...n, ns: a })
          : `key '${o} (${this.language})' returned an object instead of string.`;
        return i
          ? ((d.res = w), (d.usedParams = this.getUsedParamsDetails(n)), d)
          : w;
      }
      if (s) {
        const w = v === "[object Array]",
          S = w ? [] : {},
          C = w ? y : g;
        for (const T in f)
          if (Object.prototype.hasOwnProperty.call(f, T)) {
            const P = `${C}${s}${T}`;
            (S[T] = this.translate(P, { ...n, joinArrays: !1, ns: a })),
              S[T] === P && (S[T] = f[T]);
          }
        f = S;
      }
    } else if (h && typeof p == "string" && v === "[object Array]")
      (f = f.join(p)), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let w = !1,
        S = !1;
      const C = n.count !== void 0 && typeof n.count != "string",
        T = Ms.hasDefaultValue(n),
        P = C ? this.pluralResolver.getSuffix(u, n.count, n) : "",
        D =
          n.ordinal && C
            ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 })
            : "",
        N = n[`defaultValue${P}`] || n[`defaultValue${D}`] || n.defaultValue;
      !this.isValidLookup(f) && T && ((w = !0), (f = N)),
        this.isValidLookup(f) || ((S = !0), (f = o));
      const Je =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          S
            ? void 0
            : f,
        Le = T && N !== f && this.options.updateMissing;
      if (S || w || Le) {
        if (
          (this.logger.log(
            Le ? "updateKey" : "missingKey",
            u,
            l,
            o,
            Le ? N : f
          ),
          s)
        ) {
          const V = this.resolve(o, { ...n, keySeparator: !1 });
          V &&
            V.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
            );
        }
        let We = [];
        const Ht = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        );
        if (this.options.saveMissingTo === "fallback" && Ht && Ht[0])
          for (let V = 0; V < Ht.length; V++) We.push(Ht[V]);
        else
          this.options.saveMissingTo === "all"
            ? (We = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : We.push(n.lng || this.language);
        const Gt = (V, L, O) => {
          const j = T && O !== f ? O : Je;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(V, l, L, j, Le, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(V, l, L, j, Le, n),
            this.emit("missingKey", V, l, L, f);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && C
            ? We.forEach((V) => {
                this.pluralResolver.getSuffixes(V, n).forEach((L) => {
                  Gt([V], o + L, n[`defaultValue${L}`] || N);
                });
              })
            : Gt(We, o, N));
      }
      (f = this.extendTranslation(f, t, n, d, r)),
        S &&
          f === o &&
          this.options.appendNamespaceToMissingKey &&
          (f = `${l}:${o}`),
        (S || w) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== "v1"
            ? (f = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o,
                w ? f : void 0
              ))
            : (f = this.options.parseMissingKeyHandler(f)));
    }
    return i
      ? ((d.res = f), (d.usedParams = this.getUsedParamsDetails(n)), d)
      : f;
  }
  extendTranslation(t, n, r, i, s) {
    var o = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i }
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const u =
        typeof t == "string" &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const f = t.match(this.interpolator.nestingRegexp);
        c = f && f.length;
      }
      let d = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (d = { ...this.options.interpolation.defaultVariables, ...d }),
        (t = this.interpolator.interpolate(t, d, r.lng || this.language, r)),
        u)
      ) {
        const f = t.match(this.interpolator.nestingRegexp),
          g = f && f.length;
        c < g && (r.nest = !1);
      }
      !r.lng &&
        this.options.compatibilityAPI !== "v1" &&
        i &&
        i.res &&
        (r.lng = i.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var f = arguments.length, g = new Array(f), y = 0;
                y < f;
                y++
              )
                g[y] = arguments[y];
              return s && s[0] === g[0] && !r.context
                ? (o.logger.warn(
                    `It seems you are nesting recursively key: ${g[0]} in key: ${n[0]}`
                  ),
                  null)
                : o.translate(...g, n);
            },
            r
          )),
        r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess,
      l = typeof a == "string" ? [a] : a;
    return (
      t != null &&
        l &&
        l.length &&
        r.applyPostProcessor !== !1 &&
        (t = ug.handle(
          l,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...i,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      i,
      s,
      o,
      a;
    return (
      typeof t == "string" && (t = [t]),
      t.forEach((l) => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(l, n),
          c = u.key;
        i = c;
        let d = u.namespaces;
        this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
        const f = n.count !== void 0 && typeof n.count != "string",
          g =
            f &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          y =
            n.context !== void 0 &&
            (typeof n.context == "string" || typeof n.context == "number") &&
            n.context !== "",
          v = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              );
        d.forEach((k) => {
          this.isValidLookup(r) ||
            ((a = k),
            !ld[`${v[0]}-${k}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(a) &&
              ((ld[`${v[0]}-${k}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${v.join(
                  ", "
                )}" won't get resolved as namespace "${a}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
              )),
            v.forEach((p) => {
              if (this.isValidLookup(r)) return;
              o = p;
              const h = [c];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(h, c, p, k, n);
              else {
                let w;
                f && (w = this.pluralResolver.getSuffix(p, n.count, n));
                const S = `${this.options.pluralSeparator}zero`,
                  C = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (f &&
                    (h.push(c + w),
                    n.ordinal &&
                      w.indexOf(C) === 0 &&
                      h.push(c + w.replace(C, this.options.pluralSeparator)),
                    g && h.push(c + S)),
                  y)
                ) {
                  const T = `${c}${this.options.contextSeparator}${n.context}`;
                  h.push(T),
                    f &&
                      (h.push(T + w),
                      n.ordinal &&
                        w.indexOf(C) === 0 &&
                        h.push(T + w.replace(C, this.options.pluralSeparator)),
                      g && h.push(T + S));
                }
              }
              let m;
              for (; (m = h.pop()); )
                this.isValidLookup(r) ||
                  ((s = m), (r = this.getResource(p, k, m, n)));
            }));
        });
      }),
      { res: r, usedKey: i, exactUsedKey: s, usedLng: o, usedNS: a }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === "")
    );
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, i)
      : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      r = t.replace && typeof t.replace != "string";
    let i = r ? t.replace : t;
    if (
      (r && typeof t.count < "u" && (i.count = t.count),
      this.options.interpolation.defaultVariables &&
        (i = { ...this.options.interpolation.defaultVariables, ...i }),
      !r)
    ) {
      i = { ...i };
      for (const s of n) delete i[s];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        n === r.substring(0, n.length) &&
        t[r] !== void 0
      )
        return !0;
    return !1;
  }
}
function Ho(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class ud {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = rt.create("languageUtils"));
  }
  getScriptPartFromCode(t) {
    if (((t = js(t)), !t || t.indexOf("-") < 0)) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (((t = js(t)), !t || t.indexOf("-") < 0)) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return (
        this.options.lowerCaseLng
          ? (r = r.map((i) => i.toLowerCase()))
          : r.length === 2
          ? ((r[0] = r[0].toLowerCase()),
            (r[1] = r[1].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Ho(r[1].toLowerCase())))
          : r.length === 3 &&
            ((r[0] = r[0].toLowerCase()),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Ho(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 &&
              (r[2] = Ho(r[2].toLowerCase()))),
        r.join("-")
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return (
      t.forEach((r) => {
        if (n) return;
        const i = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const i = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(i)) return (n = i);
          n = this.options.supportedLngs.find((s) => {
            if (s === i) return s;
            if (
              !(s.indexOf("-") < 0 && i.indexOf("-") < 0) &&
              s.indexOf(i) === 0
            )
              return s;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (
      (typeof t == "function" && (t = t(n)),
      typeof t == "string" && (t = [t]),
      Object.prototype.toString.apply(t) === "[object Array]")
    )
      return t;
    if (!n) return t.default || [];
    let r = t[n];
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    );
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      i = [],
      s = (o) => {
        o &&
          (this.isSupportedCode(o)
            ? i.push(o)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${o}`
              ));
      };
    return (
      typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            s(this.formatLanguageCode(t)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            s(this.getScriptPartFromCode(t)),
          this.options.load !== "currentOnly" &&
            s(this.getLanguagePartFromCode(t)))
        : typeof t == "string" && s(this.formatLanguageCode(t)),
      r.forEach((o) => {
        i.indexOf(o) < 0 && s(this.formatLanguageCode(o));
      }),
      i
    );
  }
}
let GS = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  QS = {
    1: function (e) {
      return +(e > 1);
    },
    2: function (e) {
      return +(e != 1);
    },
    3: function (e) {
      return 0;
    },
    4: function (e) {
      return e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2;
    },
    5: function (e) {
      return e == 0
        ? 0
        : e == 1
        ? 1
        : e == 2
        ? 2
        : e % 100 >= 3 && e % 100 <= 10
        ? 3
        : e % 100 >= 11
        ? 4
        : 5;
    },
    6: function (e) {
      return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
    },
    7: function (e) {
      return e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2;
    },
    8: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
    },
    9: function (e) {
      return +(e >= 2);
    },
    10: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
    },
    11: function (e) {
      return e == 1 || e == 11
        ? 0
        : e == 2 || e == 12
        ? 1
        : e > 2 && e < 20
        ? 2
        : 3;
    },
    12: function (e) {
      return +(e % 10 != 1 || e % 100 == 11);
    },
    13: function (e) {
      return +(e !== 0);
    },
    14: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
    },
    15: function (e) {
      return e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2;
    },
    16: function (e) {
      return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
    },
    17: function (e) {
      return e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1;
    },
    18: function (e) {
      return e == 0 ? 0 : e == 1 ? 1 : 2;
    },
    19: function (e) {
      return e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
        ? 1
        : e % 100 > 10 && e % 100 < 20
        ? 2
        : 3;
    },
    20: function (e) {
      return e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2;
    },
    21: function (e) {
      return e % 100 == 1
        ? 1
        : e % 100 == 2
        ? 2
        : e % 100 == 3 || e % 100 == 4
        ? 3
        : 0;
    },
    22: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
    },
  };
const YS = ["v1", "v2", "v3"],
  XS = ["v4"],
  cd = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function qS() {
  const e = {};
  return (
    GS.forEach((t) => {
      t.lngs.forEach((n) => {
        e[n] = { numbers: t.nr, plurals: QS[t.fc] };
      });
    }),
    e
  );
}
class ZS {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = rt.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        XS.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
        )),
      (this.rules = qS());
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(js(t), {
          type: n.ordinal ? "ordinal" : "cardinal",
        });
      } catch {
        return;
      }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    );
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((i, s) => cd[i] - cd[s])
            .map(
              (i) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ""
                }${i}`
            )
        : r.numbers.map((i) => this.getSuffix(t, i, n))
      : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(t, r);
    return i
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            r.ordinal ? `ordinal${this.options.prepend}` : ""
          }${i.select(n)}`
        : this.getSuffixRetroCompatible(i, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let i = t.numbers[r];
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (i === 2 ? (i = "plural") : i === 1 && (i = ""));
    const s = () =>
      this.options.prepend && i.toString()
        ? this.options.prepend + i.toString()
        : i.toString();
    return this.options.compatibilityJSON === "v1"
      ? i === 1
        ? ""
        : typeof i == "number"
        ? `_plural_${i.toString()}`
        : s()
      : this.options.compatibilityJSON === "v2" ||
        (this.options.simplifyPluralSuffix &&
          t.numbers.length === 2 &&
          t.numbers[0] === 1)
      ? s()
      : this.options.prepend && r.toString()
      ? this.options.prepend + r.toString()
      : r.toString();
  }
  shouldUseIntlApi() {
    return !YS.includes(this.options.compatibilityJSON);
  }
}
function fd(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
    i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
    s = BS(e, t, n);
  return (
    !s &&
      i &&
      typeof n == "string" &&
      ((s = Os(e, n, r)), s === void 0 && (s = Os(t, n, r))),
    s
  );
}
class JS {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = rt.create("interpolator")),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const n = t.interpolation;
    (this.escape = n.escape !== void 0 ? n.escape : WS),
      (this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0),
      (this.useRawValueToEscape =
        n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1),
      (this.prefix = n.prefix ? vn(n.prefix) : n.prefixEscaped || "{{"),
      (this.suffix = n.suffix ? vn(n.suffix) : n.suffixEscaped || "}}"),
      (this.formatSeparator = n.formatSeparator
        ? n.formatSeparator
        : n.formatSeparator || ","),
      (this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || ""),
      (this.nestingPrefix = n.nestingPrefix
        ? vn(n.nestingPrefix)
        : n.nestingPrefixEscaped || vn("$t(")),
      (this.nestingSuffix = n.nestingSuffix
        ? vn(n.nestingSuffix)
        : n.nestingSuffixEscaped || vn(")")),
      (this.nestingOptionsSeparator = n.nestingOptionsSeparator
        ? n.nestingOptionsSeparator
        : n.nestingOptionsSeparator || ","),
      (this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3),
      (this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(t, "g");
    const n = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(n, "g");
    const r = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(r, "g");
  }
  interpolate(t, n, r, i) {
    let s, o, a;
    const l =
      (this.options &&
        this.options.interpolation &&
        this.options.interpolation.defaultVariables) ||
      {};
    function u(y) {
      return y.replace(/\$/g, "$$$$");
    }
    const c = (y) => {
      if (y.indexOf(this.formatSeparator) < 0) {
        const h = fd(
          n,
          l,
          y,
          this.options.keySeparator,
          this.options.ignoreJSONStructure
        );
        return this.alwaysFormat
          ? this.format(h, void 0, r, { ...i, ...n, interpolationkey: y })
          : h;
      }
      const v = y.split(this.formatSeparator),
        k = v.shift().trim(),
        p = v.join(this.formatSeparator).trim();
      return this.format(
        fd(
          n,
          l,
          k,
          this.options.keySeparator,
          this.options.ignoreJSONStructure
        ),
        p,
        r,
        { ...i, ...n, interpolationkey: k }
      );
    };
    this.resetRegExp();
    const d =
        (i && i.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      f =
        i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (y) => u(y) },
        {
          regex: this.regexp,
          safeValue: (y) => (this.escapeValue ? u(this.escape(y)) : u(y)),
        },
      ].forEach((y) => {
        for (a = 0; (s = y.regex.exec(t)); ) {
          const v = s[1].trim();
          if (((o = c(v)), o === void 0))
            if (typeof d == "function") {
              const p = d(t, s, i);
              o = typeof p == "string" ? p : "";
            } else if (i && Object.prototype.hasOwnProperty.call(i, v)) o = "";
            else if (f) {
              o = s[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${v} for interpolating ${t}`
              ),
                (o = "");
          else typeof o != "string" && !this.useRawValueToEscape && (o = sd(o));
          const k = y.safeValue(o);
          if (
            ((t = t.replace(s[0], k)),
            f
              ? ((y.regex.lastIndex += o.length),
                (y.regex.lastIndex -= s[0].length))
              : (y.regex.lastIndex = 0),
            a++,
            a >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i,
      s,
      o;
    function a(l, u) {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const d = l.split(new RegExp(`${c}[ ]*{`));
      let f = `{${d[1]}`;
      (l = d[0]), (f = this.interpolate(f, o));
      const g = f.match(/'/g),
        y = f.match(/"/g);
      ((g && g.length % 2 === 0 && !y) || y.length % 2 !== 0) &&
        (f = f.replace(/'/g, '"'));
      try {
        (o = JSON.parse(f)), u && (o = { ...u, ...o });
      } catch (v) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${l}`,
            v
          ),
          `${l}${c}${f}`
        );
      }
      return delete o.defaultValue, l;
    }
    for (; (i = this.nestingRegexp.exec(t)); ) {
      let l = [];
      (o = { ...r }),
        (o = o.replace && typeof o.replace != "string" ? o.replace : o),
        (o.applyPostProcessor = !1),
        delete o.defaultValue;
      let u = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const c = i[1].split(this.formatSeparator).map((d) => d.trim());
        (i[1] = c.shift()), (l = c), (u = !0);
      }
      if (
        ((s = n(a.call(this, i[1].trim(), o), o)),
        s && i[0] === t && typeof s != "string")
      )
        return s;
      typeof s != "string" && (s = sd(s)),
        s ||
          (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),
          (s = "")),
        u &&
          (s = l.reduce(
            (c, d) =>
              this.format(c, d, r.lng, { ...r, interpolationkey: i[1].trim() }),
            s.trim()
          )),
        (t = t.replace(i[0], s)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
function ek(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    t === "currency" && i.indexOf(":") < 0
      ? n.currency || (n.currency = i.trim())
      : t === "relativetime" && i.indexOf(":") < 0
      ? n.range || (n.range = i.trim())
      : i.split(";").forEach((o) => {
          if (!o) return;
          const [a, ...l] = o.split(":"),
            u = l
              .join(":")
              .trim()
              .replace(/^'+|'+$/g, "");
          n[a.trim()] || (n[a.trim()] = u),
            u === "false" && (n[a.trim()] = !1),
            u === "true" && (n[a.trim()] = !0),
            isNaN(u) || (n[a.trim()] = parseInt(u, 10));
        });
  }
  return { formatName: t, formatOptions: n };
}
function wn(e) {
  const t = {};
  return function (r, i, s) {
    const o = i + JSON.stringify(s);
    let a = t[o];
    return a || ((a = e(js(i), s)), (t[o] = a)), a(r);
  };
}
class tk {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = rt.create("formatter")),
      (this.options = t),
      (this.formats = {
        number: wn((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r });
          return (s) => i.format(s);
        }),
        currency: wn((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r, style: "currency" });
          return (s) => i.format(s);
        }),
        datetime: wn((n, r) => {
          const i = new Intl.DateTimeFormat(n, { ...r });
          return (s) => i.format(s);
        }),
        relativetime: wn((n, r) => {
          const i = new Intl.RelativeTimeFormat(n, { ...r });
          return (s) => i.format(s, r.range || "day");
        }),
        list: wn((n, r) => {
          const i = new Intl.ListFormat(n, { ...r });
          return (s) => i.format(s);
        }),
      }),
      this.init(t);
  }
  init(t) {
    const r = (
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    ).interpolation;
    this.formatSeparator = r.formatSeparator
      ? r.formatSeparator
      : r.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = wn(n);
  }
  format(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((a, l) => {
      const { formatName: u, formatOptions: c } = ek(l);
      if (this.formats[u]) {
        let d = a;
        try {
          const f =
              (i && i.formatParams && i.formatParams[i.interpolationkey]) || {},
            g = f.locale || f.lng || i.locale || i.lng || r;
          d = this.formats[u](a, g, { ...c, ...i, ...f });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else this.logger.warn(`there was no format function for ${u}`);
      return a;
    }, t);
  }
}
function nk(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class rk extends io {
  constructor(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = i),
      (this.logger = rt.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, i.backend, i);
  }
  queueLoad(t, n, r, i) {
    const s = {},
      o = {},
      a = {},
      l = {};
    return (
      t.forEach((u) => {
        let c = !0;
        n.forEach((d) => {
          const f = `${u}|${d}`;
          !r.reload && this.store.hasResourceBundle(u, d)
            ? (this.state[f] = 2)
            : this.state[f] < 0 ||
              (this.state[f] === 1
                ? o[f] === void 0 && (o[f] = !0)
                : ((this.state[f] = 1),
                  (c = !1),
                  o[f] === void 0 && (o[f] = !0),
                  s[f] === void 0 && (s[f] = !0),
                  l[d] === void 0 && (l[d] = !0)));
        }),
          c || (a[u] = !0);
      }),
      (Object.keys(s).length || Object.keys(o).length) &&
        this.queue.push({
          pending: o,
          pendingCount: Object.keys(o).length,
          loaded: {},
          errors: [],
          callback: i,
        }),
      {
        toLoad: Object.keys(s),
        pending: Object.keys(o),
        toLoadLanguages: Object.keys(a),
        toLoadNamespaces: Object.keys(l),
      }
    );
  }
  loaded(t, n, r) {
    const i = t.split("|"),
      s = i[0],
      o = i[1];
    n && this.emit("failedLoading", s, o, n),
      r && this.store.addResourceBundle(s, o, r),
      (this.state[t] = n ? -1 : 2);
    const a = {};
    this.queue.forEach((l) => {
      US(l.loaded, [s], o),
        nk(l, t),
        n && l.errors.push(n),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach((u) => {
            a[u] || (a[u] = {});
            const c = l.loaded[u];
            c.length &&
              c.forEach((d) => {
                a[u][d] === void 0 && (a[u][d] = !0);
              });
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback());
    }),
      this.emit("loaded", a),
      (this.queue = this.queue.filter((l) => !l.done));
  }
  read(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      s =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      o = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: s,
        callback: o,
      });
      return;
    }
    this.readingCalls++;
    const a = (u, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const d = this.waitingReads.shift();
          this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
        }
        if (u && c && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, i + 1, s * 2, o);
          }, s);
          return;
        }
        o(u, c);
      },
      l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(t, n);
        u && typeof u.then == "function"
          ? u.then((c) => a(null, c)).catch(a)
          : a(null, u);
      } catch (u) {
        a(u);
      }
      return;
    }
    return l(t, n, a);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources."
        ),
        i && i()
      );
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)),
      typeof n == "string" && (n = [n]);
    const s = this.queueLoad(t, n, r, i);
    if (!s.toLoad.length) return s.pending.length || i(), null;
    s.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"),
      i = r[0],
      s = r[1];
    this.read(i, s, "read", void 0, void 0, (o, a) => {
      o &&
        this.logger.warn(
          `${n}loading namespace ${s} for language ${i} failed`,
          o
        ),
        !o &&
          a &&
          this.logger.log(`${n}loaded namespace ${s} for language ${i}`, a),
        this.loaded(t, o, a);
    });
  }
  saveMissing(t, n, r, i, s) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      a =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
      );
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const l = { ...o, isUpdate: s },
          u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? (c = u(t, n, r, i, l)) : (c = u(t, n, r, i)),
              c && typeof c.then == "function"
                ? c.then((d) => a(null, d)).catch(a)
                : a(null, c);
          } catch (c) {
            a(c);
          }
        else u(t, n, r, i, a, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
function dd() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (t) {
      let n = {};
      if (
        (typeof t[1] == "object" && (n = t[1]),
        typeof t[1] == "string" && (n.defaultValue = t[1]),
        typeof t[2] == "string" && (n.tDescription = t[2]),
        typeof t[2] == "object" || typeof t[3] == "object")
      ) {
        const r = t[3] || t[2];
        Object.keys(r).forEach((i) => {
          n[i] = r[i];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  };
}
function hd(e) {
  return (
    typeof e.ns == "string" && (e.ns = [e.ns]),
    typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf("cimode") < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    e
  );
}
function Ii() {}
function ik(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class si extends io {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = hd(t)),
      (this.services = {}),
      (this.logger = rt),
      (this.modules = { external: [] }),
      ik(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    typeof n == "function" && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (typeof n.ns == "string"
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const i = dd();
    (this.options = { ...i, ...this.options, ...hd(n) }),
      this.options.compatibilityAPI !== "v1" &&
        (this.options.interpolation = {
          ...i.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    function s(c) {
      return c ? (typeof c == "function" ? new c() : c) : null;
    }
    if (!this.options.isClone) {
      this.modules.logger
        ? rt.init(s(this.modules.logger), this.options)
        : rt.init(null, this.options);
      let c;
      this.modules.formatter
        ? (c = this.modules.formatter)
        : typeof Intl < "u" && (c = tk);
      const d = new ud(this.options);
      this.store = new ad(this.options.resources, this.options);
      const f = this.services;
      (f.logger = rt),
        (f.resourceStore = this.store),
        (f.languageUtils = d),
        (f.pluralResolver = new ZS(d, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === i.interpolation.format) &&
          ((f.formatter = s(c)),
          f.formatter.init(f, this.options),
          (this.options.interpolation.format = f.formatter.format.bind(
            f.formatter
          ))),
        (f.interpolator = new JS(this.options)),
        (f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (f.backendConnector = new rk(
          s(this.modules.backend),
          f.resourceStore,
          f,
          this.options
        )),
        f.backendConnector.on("*", function (g) {
          for (
            var y = arguments.length, v = new Array(y > 1 ? y - 1 : 0), k = 1;
            k < y;
            k++
          )
            v[k - 1] = arguments[k];
          t.emit(g, ...v);
        }),
        this.modules.languageDetector &&
          ((f.languageDetector = s(this.modules.languageDetector)),
          f.languageDetector.init &&
            f.languageDetector.init(f, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((f.i18nFormat = s(this.modules.i18nFormat)),
          f.i18nFormat.init && f.i18nFormat.init(this)),
        (this.translator = new Ms(this.services, this.options)),
        this.translator.on("*", function (g) {
          for (
            var y = arguments.length, v = new Array(y > 1 ? y - 1 : 0), k = 1;
            k < y;
            k++
          )
            v[k - 1] = arguments[k];
          t.emit(g, ...v);
        }),
        this.modules.external.forEach((g) => {
          g.init && g.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = Ii),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined"
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments), t;
        };
      });
    const l = pr(),
      u = () => {
        const c = (d, f) => {
          this.isInitialized &&
            !this.initializedStoreOnce &&
            this.logger.warn(
              "init: i18next is already initialized. You should call init just once!"
            ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            l.resolve(f),
            r(d, f);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== "v1" &&
          !this.isInitialized
        )
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? u()
        : setTimeout(u, 0),
      l
    );
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ii;
    const i = typeof t == "string" ? t : this.language;
    if (
      (typeof t == "function" && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        i &&
        i.toLowerCase() === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const s = [],
        o = (a) => {
          if (!a || a === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(a).forEach((u) => {
            u !== "cimode" && s.indexOf(u) < 0 && s.push(u);
          });
        };
      i
        ? o(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((l) => o(l)),
        this.options.preload && this.options.preload.forEach((a) => o(a)),
        this.services.backendConnector.load(s, this.options.ns, (a) => {
          !a &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(a);
        });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const i = pr();
    return (
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = Ii),
      this.services.backendConnector.reload(t, n, (s) => {
        i.resolve(), r(s);
      }),
      i
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()"
      );
    if (!t.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
      );
    return (
      t.type === "backend" && (this.modules.backend = t),
      (t.type === "logger" || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === "languageDetector" && (this.modules.languageDetector = t),
      t.type === "i18nFormat" && (this.modules.i18nFormat = t),
      t.type === "postProcessor" && ug.addPostProcessor(t),
      t.type === "formatter" && (this.modules.formatter = t),
      t.type === "3rdParty" && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (
          !(["cimode", "dev"].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const i = pr();
    this.emit("languageChanging", t);
    const s = (l) => {
        (this.language = l),
          (this.languages = this.services.languageUtils.toResolveHierarchy(l)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(l);
      },
      o = (l, u) => {
        u
          ? (s(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", u),
            this.logger.log("languageChanged", u))
          : (this.isLanguageChangingTo = void 0),
          i.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(l, function () {
              return r.t(...arguments);
            });
      },
      a = (l) => {
        !t && !l && this.services.languageDetector && (l = []);
        const u =
          typeof l == "string"
            ? l
            : this.services.languageUtils.getBestMatchFromCodes(l);
        u &&
          (this.language || s(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, (c) => {
            o(c, u);
          });
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? a(this.services.languageDetector.detect())
        : !t &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(a)
          : this.services.languageDetector.detect(a)
        : a(t),
      i
    );
  }
  getFixedT(t, n, r) {
    var i = this;
    const s = function (o, a) {
      let l;
      if (typeof a != "object") {
        for (
          var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), d = 2;
          d < u;
          d++
        )
          c[d - 2] = arguments[d];
        l = i.options.overloadTranslationOptionHandler([o, a].concat(c));
      } else l = { ...a };
      (l.lng = l.lng || s.lng),
        (l.lngs = l.lngs || s.lngs),
        (l.ns = l.ns || s.ns),
        (l.keyPrefix = l.keyPrefix || r || s.keyPrefix);
      const f = i.options.keySeparator || ".";
      let g;
      return (
        l.keyPrefix && Array.isArray(o)
          ? (g = o.map((y) => `${l.keyPrefix}${f}${y}`))
          : (g = l.keyPrefix ? `${l.keyPrefix}${f}${o}` : o),
        i.t(g, l)
      );
    };
    return (
      typeof t == "string" ? (s.lng = t) : (s.lngs = t),
      (s.ns = n),
      (s.keyPrefix = r),
      s
    );
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      i = this.options ? this.options.fallbackLng : !1,
      s = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const o = (a, l) => {
      const u = this.services.backendConnector.state[`${a}|${l}`];
      return u === -1 || u === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, o);
      if (a !== void 0) return a;
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (o(r, t) && (!i || o(s, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = pr();
    return this.options.ns
      ? (typeof t == "string" && (t = [t]),
        t.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
        }),
        this.loadResources((i) => {
          r.resolve(), n && n(i);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = pr();
    typeof t == "string" && (t = [t]);
    const i = this.options.preload || [],
      s = t.filter((o) => i.indexOf(o) < 0);
    return s.length
      ? ((this.options.preload = i.concat(s)),
        this.loadResources((o) => {
          r.resolve(), n && n(o);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return "rtl";
    const n = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      r = (this.services && this.services.languageUtils) || new ud(dd());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new si(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ii;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = { ...this.options, ...t, isClone: !0 },
      s = new si(i);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (s.logger = s.logger.clone(t)),
      ["store", "services", "language"].forEach((a) => {
        s[a] = this[a];
      }),
      (s.services = { ...this.services }),
      (s.services.utils = { hasLoadedNamespace: s.hasLoadedNamespace.bind(s) }),
      r &&
        ((s.store = new ad(this.store.data, i)),
        (s.services.resourceStore = s.store)),
      (s.translator = new Ms(s.services, i)),
      s.translator.on("*", function (a) {
        for (
          var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1;
          c < l;
          c++
        )
          u[c - 1] = arguments[c];
        s.emit(a, ...u);
      }),
      s.init(i, n),
      (s.translator.options = i),
      (s.translator.backendConnector.services.utils = {
        hasLoadedNamespace: s.hasLoadedNamespace.bind(s),
      }),
      s
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const re = si.createInstance();
re.createInstance = si.createInstance;
re.createInstance;
re.dir;
re.init;
re.loadResources;
re.reloadResources;
re.use;
re.changeLanguage;
re.getFixedT;
re.t;
re.exists;
re.setDefaultNamespace;
re.hasLoadedNamespace;
re.loadNamespaces;
re.loadLanguages;
const { slice: sk, forEach: ok } = [];
function ak(e) {
  return (
    ok.call(sk.call(arguments, 1), (t) => {
      if (t) for (const n in t) e[n] === void 0 && (e[n] = t[n]);
    }),
    e
  );
}
const pd = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  lk = function (e, t) {
    const r =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { path: "/" },
      i = encodeURIComponent(t);
    let s = `${e}=${i}`;
    if (r.maxAge > 0) {
      const o = r.maxAge - 0;
      if (Number.isNaN(o)) throw new Error("maxAge should be a Number");
      s += `; Max-Age=${Math.floor(o)}`;
    }
    if (r.domain) {
      if (!pd.test(r.domain)) throw new TypeError("option domain is invalid");
      s += `; Domain=${r.domain}`;
    }
    if (r.path) {
      if (!pd.test(r.path)) throw new TypeError("option path is invalid");
      s += `; Path=${r.path}`;
    }
    if (r.expires) {
      if (typeof r.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      s += `; Expires=${r.expires.toUTCString()}`;
    }
    if (
      (r.httpOnly && (s += "; HttpOnly"),
      r.secure && (s += "; Secure"),
      r.sameSite)
    )
      switch (
        typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite
      ) {
        case !0:
          s += "; SameSite=Strict";
          break;
        case "lax":
          s += "; SameSite=Lax";
          break;
        case "strict":
          s += "; SameSite=Strict";
          break;
        case "none":
          s += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    return s;
  },
  md = {
    create(e, t, n, r) {
      let i =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      n &&
        ((i.expires = new Date()),
        i.expires.setTime(i.expires.getTime() + n * 60 * 1e3)),
        r && (i.domain = r),
        (document.cookie = lk(e, encodeURIComponent(t), i));
    },
    read(e) {
      const t = `${e}=`,
        n = document.cookie.split(";");
      for (let r = 0; r < n.length; r++) {
        let i = n[r];
        for (; i.charAt(0) === " "; ) i = i.substring(1, i.length);
        if (i.indexOf(t) === 0) return i.substring(t.length, i.length);
      }
      return null;
    },
    remove(e) {
      this.create(e, "", -1);
    },
  };
var uk = {
    name: "cookie",
    lookup(e) {
      let { lookupCookie: t } = e;
      if (t && typeof document < "u") return md.read(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let {
        lookupCookie: n,
        cookieMinutes: r,
        cookieDomain: i,
        cookieOptions: s,
      } = t;
      n && typeof document < "u" && md.create(n, e, r, i, s);
    },
  },
  ck = {
    name: "querystring",
    lookup(e) {
      var r;
      let { lookupQuerystring: t } = e,
        n;
      if (typeof window < "u") {
        let { search: i } = window.location;
        !window.location.search &&
          ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 &&
          (i = window.location.hash.substring(
            window.location.hash.indexOf("?")
          ));
        const o = i.substring(1).split("&");
        for (let a = 0; a < o.length; a++) {
          const l = o[a].indexOf("=");
          l > 0 && o[a].substring(0, l) === t && (n = o[a].substring(l + 1));
        }
      }
      return n;
    },
  };
let mr = null;
const gd = () => {
  if (mr !== null) return mr;
  try {
    mr = window !== "undefined" && window.localStorage !== null;
    const e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    mr = !1;
  }
  return mr;
};
var fk = {
  name: "localStorage",
  lookup(e) {
    let { lookupLocalStorage: t } = e;
    if (t && gd()) return window.localStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let { lookupLocalStorage: n } = t;
    n && gd() && window.localStorage.setItem(n, e);
  },
};
let gr = null;
const yd = () => {
  if (gr !== null) return gr;
  try {
    gr = window !== "undefined" && window.sessionStorage !== null;
    const e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"),
      window.sessionStorage.removeItem(e);
  } catch {
    gr = !1;
  }
  return gr;
};
var dk = {
    name: "sessionStorage",
    lookup(e) {
      let { lookupSessionStorage: t } = e;
      if (t && yd()) return window.sessionStorage.getItem(t) || void 0;
    },
    cacheUserLanguage(e, t) {
      let { lookupSessionStorage: n } = t;
      n && yd() && window.sessionStorage.setItem(n, e);
    },
  },
  hk = {
    name: "navigator",
    lookup(e) {
      const t = [];
      if (typeof navigator < "u") {
        const { languages: n, userLanguage: r, language: i } = navigator;
        if (n) for (let s = 0; s < n.length; s++) t.push(n[s]);
        r && t.push(r), i && t.push(i);
      }
      return t.length > 0 ? t : void 0;
    },
  },
  pk = {
    name: "htmlTag",
    lookup(e) {
      let { htmlTag: t } = e,
        n;
      const r = t || (typeof document < "u" ? document.documentElement : null);
      return (
        r &&
          typeof r.getAttribute == "function" &&
          (n = r.getAttribute("lang")),
        n
      );
    },
  },
  mk = {
    name: "path",
    lookup(e) {
      var i;
      let { lookupFromPathIndex: t } = e;
      if (typeof window > "u") return;
      const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(n)
        ? (i = n[typeof t == "number" ? t : 0]) == null
          ? void 0
          : i.replace("/", "")
        : void 0;
    },
  },
  gk = {
    name: "subdomain",
    lookup(e) {
      var i, s;
      let { lookupFromSubdomainIndex: t } = e;
      const n = typeof t == "number" ? t + 1 : 1,
        r =
          typeof window < "u" &&
          ((s = (i = window.location) == null ? void 0 : i.hostname) == null
            ? void 0
            : s.match(
                /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
              ));
      if (r) return r[n];
    },
  };
let cg = !1;
try {
  document.cookie, (cg = !0);
} catch {}
const fg = [
  "querystring",
  "cookie",
  "localStorage",
  "sessionStorage",
  "navigator",
  "htmlTag",
];
cg || fg.splice(1, 1);
const yk = () => ({
  order: fg,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  convertDetectedLanguage: (e) => e,
});
class dg {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.type = "languageDetector"), (this.detectors = {}), this.init(t, n);
  }
  init() {
    let t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : { languageUtils: {} },
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (this.services = t),
      (this.options = ak(n, this.options || {}, yk())),
      typeof this.options.convertDetectedLanguage == "string" &&
        this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
        (this.options.convertDetectedLanguage = (i) => i.replace("-", "_")),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = r),
      this.addDetector(uk),
      this.addDetector(ck),
      this.addDetector(fk),
      this.addDetector(dk),
      this.addDetector(hk),
      this.addDetector(pk),
      this.addDetector(mk),
      this.addDetector(gk);
  }
  addDetector(t) {
    return (this.detectors[t.name] = t), this;
  }
  detect() {
    let t =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : this.options.order,
      n = [];
    return (
      t.forEach((r) => {
        if (this.detectors[r]) {
          let i = this.detectors[r].lookup(this.options);
          i && typeof i == "string" && (i = [i]), i && (n = n.concat(i));
        }
      }),
      (n = n.map((r) => this.options.convertDetectedLanguage(r))),
      this.services &&
      this.services.languageUtils &&
      this.services.languageUtils.getBestMatchFromCodes
        ? n
        : n.length > 0
        ? n[0]
        : null
    );
  }
  cacheUserLanguage(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : this.options.caches;
    n &&
      ((this.options.excludeCacheFor &&
        this.options.excludeCacheFor.indexOf(t) > -1) ||
        n.forEach((r) => {
          this.detectors[r] &&
            this.detectors[r].cacheUserLanguage(t, this.options);
        }));
  }
}
dg.type = "languageDetector";
const vk = "Leading technology through innovative software solutions",
  wk =
    "  We transform complex challenges into elegant software solutions that drive innovation and business growth.",
  xk = "  Get Started",
  Sk = "Nile Tech Soft",
  kk = "About Us",
  Pk = "Our Services",
  Ck = "Our Work",
  Tk = "Contact Us",
  Ek = "Nile Tech Soft",
  Lk =
    "Transforming ideas into digital reality through innovative software solutions.",
  _k = "contact@niletechsoft.com",
  Nk = "+1 (555) 123-4567",
  Rk = "123 Tech Street, Silicon Valley, CA",
  Ak = {
    about_us: "About Us",
    services: "Services",
    our_work: "Our Work",
    contact: "Contact",
  },
  Dk = {
    custom_development: "Custom Development",
    web_applications: "Web Applications",
    mobile_development: "Mobile Development",
    enterprise_solutions: "Enterprise Solutions",
  },
  Ok = "Connect With Us",
  jk = {
    title: "Financial Analytics Dashboard",
    description: "Real-time financial data visualization and reporting system.",
  },
  Mk = {
    title: "Healthcare Management System",
    description:
      "Integrated solution for managing medical records and appointments.",
  },
  Vk = {
    title: "E-commerce Platform",
    description:
      "A full-featured online shopping platform with advanced analytics.",
  },
  Fk = {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
  },
  Ik = {
    title: "Web Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies.",
  },
  zk = {
    title: "Custom Software Development",
    description:
      "Tailored solutions designed to meet your specific business needs.",
  },
  $k = {
    title: "Expert Team",
    description:
      "Our team of experienced developers brings diverse expertise to every project.",
  },
  Uk = {
    title: "Our Previous Work",
    description: "Successful projects that showcase our expertise.",
  },
  Bk = {
    title: "Our Services",
    description: "Comprehensive software solutions for your business needs.",
  },
  bk = {
    title: "About Us",
    description: "Leading the way in innovative software solutions.",
  },
  Wk = "Nile Tech Soft. All rights reserved.",
  Kk = "Connect With Us",
  Hk = "Services",
  Gk = "Quick Links",
  Qk = {
    heading: vk,
    mainPreef: wk,
    getStart: xk,
    siteLogo: Sk,
    aboutUs: kk,
    ourServices: Pk,
    ourWork: Ck,
    contactUs: Tk,
    company_name: Ek,
    tagline: Lk,
    contact_email: _k,
    contact_phone: Nk,
    address: Rk,
    quick_links: Ak,
    services: Dk,
    connect_with_us: Ok,
    financial_analytics_dashboard: jk,
    healthcare_management_system: Mk,
    e_commerce_platform: Vk,
    mobile_development: Fk,
    web_development: Ik,
    custom_software_development: zk,
    expert_team: $k,
    previous_work: Uk,
    services_sec: Bk,
    about_us: bk,
    copyright: Wk,
    connect_with_us_title: Kk,
    services_title: Hk,
    quick_links_title: Gk,
  },
  Yk = "ريادة التقنية من خلال حلول برمجية مبتكرة",
  Xk =
    "نحوّل التحديات المعقدة إلى حلول برمجية أنيقة تعزز الابتكار ونمو الأعمال",
  qk = " ابداء الان",
  Zk = "النيل لتكنولوجيا البرمجات",
  Jk = "من نحن",
  eP = "خدماتنا",
  tP = "أعمالنا",
  nP = "تواصل معنا",
  rP = "النيل لتكنولوجيا البرمجات",
  iP = "تحويل الأفكار إلى واقع رقمي من خلال حلول البرمجيات المبتكرة.",
  sP = "123 Tech Street, Silicon Valley, CA",
  oP = {
    about_us: "من نحن",
    services: "الخدمات",
    our_work: "أعمالنا",
    contact: "اتصل بنا",
  },
  aP = {
    custom_development: "التطوير المخصص",
    web_applications: "تطبيقات الويب",
    mobile_development: "تطوير التطبيقات المحمولة",
    enterprise_solutions: "حلول المؤسسات",
  },
  lP = "اتصل بنا",
  uP = {
    title: "لوحة تحليلات مالية",
    description: "نظام عرض البيانات المالية في الوقت الفعلي وإعداد التقارير.",
  },
  cP = {
    title: "نظام إدارة الرعاية الصحية",
    description: "حل متكامل لإدارة السجلات الطبية والمواعيد.",
  },
  fP = {
    title: "منصة التجارة الإلكترونية",
    description: "منصة تسوق عبر الإنترنت كاملة المزايا مع تحليلات متقدمة.",
  },
  dP = {
    title: "تطوير التطبيقات المحمولة",
    description: "تطبيقات محمولة أصلية وعبر الأنظمة الأساسية لـ iOS و Android.",
  },
  hP = {
    title: "تطوير الويب",
    description: "تطبيقات ويب حديثة ومتجاوبة تم بناؤها باستخدام تقنيات متطورة.",
  },
  pP = {
    title: "تطوير البرمجيات المخصصة",
    description: "حلول مخصصة مصممة لتلبية احتياجات أعمالك الخاصة.",
  },
  mP = {
    title: "فريق الخبراء",
    description: "يقدم فريقنا من المطورين ذوي الخبرة خبرات متنوعة في كل مشروع.",
  },
  gP = { title: "أعمالنا السابقة", description: "مشاريع ناجحة تعرض خبرتنا." },
  yP = { title: "خدماتنا", description: "حلول برمجية شاملة لاحتياجات عملك." },
  vP = {
    title: "من نحن",
    description: "نحن نتصدر الطريق في الحلول البرمجية المبتكرة.",
  },
  wP = "جميع الحقوق محفوظ لنيل لتكنولوجيا البرمجات.",
  xP = "اتصل بنا",
  SP = "الخدمات",
  kP = "الروابط السريعة",
  PP = {
    heading: Yk,
    mainPreef: Xk,
    getStart: qk,
    siteLogo: Zk,
    aboutUs: Jk,
    ourServices: eP,
    ourWork: tP,
    contactUs: nP,
    company_name: rP,
    tagline: iP,
    address: sP,
    quick_links: oP,
    services: aP,
    connect_with_us: lP,
    financial_analytics_dashboard: uP,
    healthcare_management_system: cP,
    e_commerce_platform: fP,
    mobile_development: dP,
    web_development: hP,
    custom_software_development: pP,
    expert_team: mP,
    previous_work: gP,
    services_sec: yP,
    about_us: vP,
    copyright: wP,
    connect_with_us_title: xP,
    services_title: SP,
    quick_links_title: kP,
  },
  CP = { en: { translation: Qk }, ar: { translation: PP } };
re.use(dg)
  .use(RS)
  .init({
    resources: CP,
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    interpolation: { escapeValue: !1 },
    react: { useSuspense: !1 },
  });
const TP = () => {
    const e = R.useRef(null),
      t = async (r) => {
        console.log("done");
        try {
          await re.changeLanguage(r), IS.set("i18next", r, { expires: 7 });
        } catch (i) {
          console.error("Failed to change language:", i);
        }
      },
      n = () => {
        e.current && (e.current.checked === !1 ? t("ar") : t("en"));
      };
    return (
      R.useEffect(() => {
        e.current &&
          (re.language === "en"
            ? (e.current.checked = !0)
            : (e.current.checked = !1)),
          n();
      }, [re.language]),
      x.jsx("div", {
        children: x.jsx("center", {
          children: x.jsxs("div", {
            className: "switch",
            children: [
              x.jsx("input", {
                id: "language-toggle",
                className: "check-toggle check-toggle-round-flat",
                type: "checkbox",
                ref: e,
                onChange: () => n(),
              }),
              x.jsx("label", { htmlFor: "language-toggle" }),
              x.jsx("span", { className: "on", children: "Ar" }),
              x.jsx("span", { className: "off", children: "EN" }),
            ],
          }),
        }),
      })
    );
  },
  EP = () => {
    const { t: e } = ro();
    return (
      window.addEventListener("scroll", () => {
        const t = document.querySelector(".navbar");
        t && t.classList.toggle("scrolled", window.scrollY > 0);
      }),
      x.jsx("nav", {
        className: "navbar",
        children: x.jsxs("div", {
          className: "navbar__container",
          children: [
            x.jsxs(ue.a, {
              href: "/",
              className: "navbar__logo",
              children: [
                x.jsx(fS, { size: 32, color: "#2563eb" }),
                x.jsx("span", { children: e("siteLogo") }),
              ],
            }),
            x.jsxs("div", {
              className: "navbar__menu",
              children: [
                x.jsx("a", { href: "#about", children: e("aboutUs") }),
                x.jsx("a", { href: "#services", children: e("ourServices") }),
                x.jsx("a", { href: "#work", children: e("ourWork") }),
                x.jsx("a", {
                  href: "#contact",
                  className: "cta",
                  children: e("contactUs"),
                }),
              ],
            }),
            x.jsx(TP, {}),
          ],
        }),
      })
    );
  };
function LP() {
  const { t: e } = ro();
  return x.jsxs("div", {
    children: [
      x.jsx(EP, {}),
      x.jsx(MS, {}),
      x.jsx(ue.section, {
        id: "about",
        className: "section section--gray",
        initial: { opacity: 0, y: 100 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        children: x.jsxs("div", {
          className: "section__container",
          children: [
            x.jsxs("div", {
              className: "section__header",
              children: [
                x.jsx("h2", { children: e("about_us.title") }),
                x.jsx("p", { children: e("about_us.description") }),
              ],
            }),
            x.jsxs("div", {
              className: "cards-grid",
              children: [
                x.jsxs(ue.div, {
                  className: "card",
                  children: [
                    x.jsx("div", {
                      className: "card__image",
                      children: x.jsx("img", {
                        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
                        alt: "Team collaboration",
                      }),
                    }),
                    x.jsxs("div", {
                      className: "card__content",
                      children: [
                        x.jsx("h3", { children: e("expert_team.title") }),
                        x.jsx("p", { children: e("expert_team.description") }),
                      ],
                    }),
                  ],
                }),
                x.jsxs(ue.div, {
                  className: "card",
                  children: [
                    x.jsx("div", {
                      className: "card__image",
                      children: x.jsx("img", {
                        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
                        alt: "Team collaboration",
                      }),
                    }),
                    x.jsxs("div", {
                      className: "card__content",
                      children: [
                        x.jsx("h3", { children: e("expert_team.title") }),
                        x.jsx("p", { children: e("expert_team.description") }),
                      ],
                    }),
                  ],
                }),
                x.jsxs(ue.div, {
                  className: "card",
                  children: [
                    x.jsx("div", {
                      className: "card__image",
                      children: x.jsx("img", {
                        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
                        alt: "Team collaboration",
                      }),
                    }),
                    x.jsxs("div", {
                      className: "card__content",
                      children: [
                        x.jsx("h3", { children: e("expert_team.title") }),
                        x.jsx("p", { children: e("expert_team.description") }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      x.jsx(ue.section, {
        id: "services",
        className: "section",
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: !0 },
        children: x.jsxs("div", {
          className: "section__container",
          children: [
            x.jsxs("div", {
              className: "section__header",
              children: [
                x.jsx("h2", { children: e("services_sec.title") }),
                x.jsx("p", { children: e("services_sec.description") }),
              ],
            }),
            x.jsx("div", {
              className: "cards-grid",
              children: [
                {
                  title: e("custom_software_development.title"),
                  description: e("custom_software_development.description"),
                  image:
                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: e("web_development.title"),
                  description: e("web_development.description"),
                  image:
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: e("mobile_development.title"),
                  description: e("mobile_development.description"),
                  image:
                    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
                },
              ].map((t, n) =>
                x.jsxs(
                  ue.div,
                  {
                    className: "card",
                    children: [
                      x.jsx("div", {
                        className: "card__image",
                        children: x.jsx("img", { src: t.image, alt: t.title }),
                      }),
                      x.jsxs("div", {
                        className: "card__content",
                        children: [
                          x.jsx("h3", { children: t.title }),
                          x.jsx("p", { children: t.description }),
                        ],
                      }),
                    ],
                  },
                  n
                )
              ),
            }),
          ],
        }),
      }),
      x.jsx(ue.section, {
        id: "work",
        className: "section section--gray",
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: !0 },
        children: x.jsxs("div", {
          className: "section__container",
          children: [
            x.jsxs("div", {
              className: "section__header",
              children: [
                x.jsx("h2", { children: e("previous_work.title") }),
                x.jsx("p", { children: e("previous_work.description") }),
              ],
            }),
            x.jsx("div", {
              className: "cards-grid",
              children: [
                {
                  title: e("e_commerce_platform.title"),
                  description: e("e_commerce_platform.description"),
                  image:
                    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: e("healthcare_management_system.title"),
                  description: e("healthcare_management_system.description"),
                  image:
                    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: e("financial_analytics_dashboard.title"),
                  description: e("financial_analytics_dashboard.description"),
                  image:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
                },
              ].map((t, n) =>
                x.jsxs(
                  ue.div,
                  {
                    className: "card",
                    children: [
                      x.jsx("div", {
                        className: "card__image",
                        children: x.jsx("img", { src: t.image, alt: t.title }),
                      }),
                      x.jsxs("div", {
                        className: "card__content",
                        children: [
                          x.jsx("h3", { children: t.title }),
                          x.jsx("p", { children: t.description }),
                        ],
                      }),
                    ],
                  },
                  n
                )
              ),
            }),
          ],
        }),
      }),
      x.jsx(VS, {}),
    ],
  });
}
Rp(document.getElementById("root")).render(
  x.jsx(R.StrictMode, { children: x.jsx(LP, {}) })
);
