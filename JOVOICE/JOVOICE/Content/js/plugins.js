/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
        : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = []
        , d = a.document
        , e = c.slice
        , f = c.concat
        , g = c.push
        , h = c.indexOf
        , i = {}
        , j = i.toString
        , k = i.hasOwnProperty
        , l = {}
        , m = "1.12.4"
        , n = function (a, b) {
            return new n.fn.init(a, b)
        }
        , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , p = /^-ms-/
        , q = /-([\da-z])/gi
        , r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function () {
            return e.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
                b.context = this.context,
                b
        },
        each: function (a) {
            return n.each(this, a)
        },
        map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length
                , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    },
        n.extend = n.fn.extend = function () {
            var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
            for ("boolean" == typeof g && (j = g,
                g = arguments[h] || {},
                h++),
                "object" == typeof g || n.isFunction(g) || (g = {}),
                h === i && (g = this,
                    h--); i > h; h++)
                if (null != (e = arguments[h]))
                    for (d in e)
                        a = g[d],
                            c = e[d],
                            g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1,
                                f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {},
                                g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }
        ,
        n.extend({
            expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (a) {
                throw new Error(a)
            },
            noop: function () { },
            isFunction: function (a) {
                return "function" === n.type(a)
            },
            isArray: Array.isArray || function (a) {
                return "array" === n.type(a)
            }
            ,
            isWindow: function (a) {
                return null != a && a == a.window
            },
            isNumeric: function (a) {
                var b = a && a.toString();
                return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
            },
            isEmptyObject: function (a) {
                var b;
                for (b in a)
                    return !1;
                return !0
            },
            isPlainObject: function (a) {
                var b;
                if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
                    return !1;
                try {
                    if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (c) {
                    return !1
                }
                if (!l.ownFirst)
                    for (b in a)
                        return k.call(a, b);
                for (b in a)
                    ;
                return void 0 === b || k.call(a, b)
            },
            type: function (a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
            },
            globalEval: function (b) {
                b && n.trim(b) && (a.execScript || function (b) {
                    a.eval.call(a, b)
                }
                )(b)
            },
            camelCase: function (a) {
                return a.replace(p, "ms-").replace(q, r)
            },
            nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function (a, b) {
                var c, d = 0;
                if (s(a)) {
                    for (c = a.length; c > d; d++)
                        if (b.call(a[d], d, a[d]) === !1)
                            break
                } else
                    for (d in a)
                        if (b.call(a[d], d, a[d]) === !1)
                            break;
                return a
            },
            trim: function (a) {
                return null == a ? "" : (a + "").replace(o, "")
            },
            makeArray: function (a, b) {
                var c = b || [];
                return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)),
                    c
            },
            inArray: function (a, b, c) {
                var d;
                if (b) {
                    if (h)
                        return h.call(b, a, c);
                    for (d = b.length,
                        c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                        if (c in b && b[c] === a)
                            return c
                }
                return -1
            },
            merge: function (a, b) {
                var c = +b.length
                    , d = 0
                    , e = a.length;
                while (c > d)
                    a[e++] = b[d++];
                if (c !== c)
                    while (void 0 !== b[d])
                        a[e++] = b[d++];
                return a.length = e,
                    a
            },
            grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                    d = !b(a[f], f),
                        d !== h && e.push(a[f]);
                return e
            },
            map: function (a, b, c) {
                var d, e, g = 0, h = [];
                if (s(a))
                    for (d = a.length; d > g; g++)
                        e = b(a[g], g, c),
                            null != e && h.push(e);
                else
                    for (g in a)
                        e = b(a[g], g, c),
                            null != e && h.push(e);
                return f.apply([], h)
            },
            guid: 1,
            proxy: function (a, b) {
                var c, d, f;
                return "string" == typeof b && (f = a[b],
                    b = a,
                    a = f),
                    n.isFunction(a) ? (c = e.call(arguments, 2),
                        d = function () {
                            return a.apply(b || this, c.concat(e.call(arguments)))
                        }
                        ,
                        d.guid = a.guid = a.guid || n.guid++,
                        d) : void 0
            },
            now: function () {
                return +new Date
            },
            support: l
        }),
        "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
        n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
            i["[object " + b + "]"] = b.toLowerCase()
        });
    function s(a) {
        var b = !!a && "length" in a && a.length
            , c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function (a, b) {
            return a === b && (l = !0),
                0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+", "g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ca = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, da = function () {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
                E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                }
                    : function (a, b) {
                        var c = a.length
                            , d = 0;
                        while (a[c++] = b[d++])
                            ;
                        a.length = c - 1
                    }
            }
        }
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [],
                "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x)
                return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b),
                b = b || n,
                p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f)))
                                return d;
                            if (j.id === f)
                                return d.push(j),
                                    d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j),
                                d
                    } else {
                        if (o[2])
                            return H.apply(d, b.getElementsByTagName(a)),
                                d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(f)),
                                d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x)
                        w = b,
                            s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u),
                            r = g(a),
                            h = r.length,
                            l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--)
                            r[h] = l + " " + qa(r[h]);
                        s = r.join(","),
                            w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s)
                        try {
                            return H.apply(d, w.querySelectorAll(s)),
                                d
                        } catch (y) { } finally {
                            k === u && b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                    b[c + " "] = e
            }
            return b
        }
        function ha(a) {
            return a[u] = !0,
                a
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                    b = null
            }
        }
        function ja(a, b) {
            var c = a.split("|")
                , e = c.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function ka(a, b) {
            var c = b && a
                , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function la(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function na(a) {
            return ha(function (b) {
                return b = +b,
                    ha(function (c, d) {
                        var e, f = a([], c.length, b), g = f.length;
                        while (g--)
                            c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
            })
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {},
            f = fa.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }
            ,
            m = fa.setDocument = function (a) {
                var b, e, g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
                    o = n.documentElement,
                    p = !f(n),
                    (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
                    c.attributes = ia(function (a) {
                        return a.className = "i",
                            !a.getAttribute("className")
                    }),
                    c.getElementsByTagName = ia(function (a) {
                        return a.appendChild(n.createComment("")),
                            !a.getElementsByTagName("*").length
                    }),
                    c.getElementsByClassName = Z.test(n.getElementsByClassName),
                    c.getById = ia(function (a) {
                        return o.appendChild(a).id = u,
                            !n.getElementsByName || !n.getElementsByName(u).length
                    }),
                    c.getById ? (d.find.ID = function (a, b) {
                        if ("undefined" != typeof b.getElementById && p) {
                            var c = b.getElementById(a);
                            return c ? [c] : []
                        }
                    }
                        ,
                        d.filter.ID = function (a) {
                            var b = a.replace(ba, ca);
                            return function (a) {
                                return a.getAttribute("id") === b
                            }
                        }
                    ) : (delete d.find.ID,
                        d.filter.ID = function (a) {
                            var b = a.replace(ba, ca);
                            return function (a) {
                                var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                                return c && c.value === b
                            }
                        }
                    ),
                    d.find.TAG = c.getElementsByTagName ? function (a, b) {
                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                    }
                        : function (a, b) {
                            var c, d = [], e = 0, f = b.getElementsByTagName(a);
                            if ("*" === a) {
                                while (c = f[e++])
                                    1 === c.nodeType && d.push(c);
                                return d
                            }
                            return f
                        }
                    ,
                    d.find.CLASS = c.getElementsByClassName && function (a, b) {
                        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
                    }
                    ,
                    r = [],
                    q = [],
                    (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
                        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                            a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                            a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                            a.querySelectorAll(":checked").length || q.push(":checked"),
                            a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                    }),
                        ia(function (a) {
                            var b = n.createElement("input");
                            b.setAttribute("type", "hidden"),
                                a.appendChild(b).setAttribute("name", "D"),
                                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                                a.querySelectorAll("*,:x"),
                                q.push(",.*:")
                        })),
                    (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
                        c.disconnectedMatch = s.call(a, "div"),
                            s.call(a, "[s!='']:x"),
                            r.push("!=", O)
                    }),
                    q = q.length && new RegExp(q.join("|")),
                    r = r.length && new RegExp(r.join("|")),
                    b = Z.test(o.compareDocumentPosition),
                    t = b || Z.test(o.contains) ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a
                            , d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    }
                        : function (a, b) {
                            if (b)
                                while (b = b.parentNode)
                                    if (b === a)
                                        return !0;
                            return !1
                        }
                    ,
                    B = b ? function (a, b) {
                        if (a === b)
                            return l = !0,
                                0;
                        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                            1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                    }
                        : function (a, b) {
                            if (a === b)
                                return l = !0,
                                    0;
                            var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                            if (!e || !f)
                                return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                            if (e === f)
                                return ka(a, b);
                            c = a;
                            while (c = c.parentNode)
                                g.unshift(c);
                            c = b;
                            while (c = c.parentNode)
                                h.unshift(c);
                            while (g[d] === h[d])
                                d++;
                            return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
                        }
                    ,
                    n) : n
            }
            ,
            fa.matches = function (a, b) {
                return fa(a, null, null, b)
            }
            ,
            fa.matchesSelector = function (a, b) {
                if ((a.ownerDocument || a) !== n && m(a),
                    b = b.replace(T, "='$1']"),
                    c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
                    try {
                        var d = s.call(a, b);
                        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                            return d
                    } catch (e) { }
                return fa(b, n, null, [a]).length > 0
            }
            ,
            fa.contains = function (a, b) {
                return (a.ownerDocument || a) !== n && m(a),
                    t(a, b)
            }
            ,
            fa.attr = function (a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()]
                    , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }
            ,
            fa.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }
            ,
            fa.uniqueSort = function (a) {
                var b, d = [], e = 0, f = 0;
                if (l = !c.detectDuplicates,
                    k = !c.sortStable && a.slice(0),
                    a.sort(B),
                    l) {
                    while (b = a[f++])
                        b === a[f] && (e = d.push(f));
                    while (e--)
                        a.splice(d[e], 1)
                }
                return k = null,
                    a
            }
            ,
            e = fa.getText = function (a) {
                var b, c = "", d = 0, f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent)
                            return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling)
                            c += e(a)
                    } else if (3 === f || 4 === f)
                        return a.nodeValue
                } else
                    while (b = a[d++])
                        c += e(b);
                return c
            }
            ,
            d = fa.selectors = {
                cacheLength: 50,
                createPseudo: ha,
                match: W,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (a) {
                        return a[1] = a[1].replace(ba, ca),
                            a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca),
                            "~=" === a[2] && (a[3] = " " + a[3] + " "),
                            a.slice(0, 4)
                    },
                    CHILD: function (a) {
                        return a[1] = a[1].toLowerCase(),
                            "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]),
                                a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                                a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]),
                            a
                    },
                    PSEUDO: function (a) {
                        var b, c = !a[6] && a[2];
                        return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                            a[2] = c.slice(0, b)),
                            a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(ba, ca).toLowerCase();
                        return "*" === a ? function () {
                            return !0
                        }
                            : function (a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b
                            }
                    },
                    CLASS: function (a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (a, b, c) {
                        return function (d) {
                            var e = fa.attr(d, a);
                            return null == e ? "!=" === b : b ? (e += "",
                                "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                        }
                    },
                    CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3)
                            , g = "last" !== a.slice(-4)
                            , h = "of-type" === b;
                        return 1 === d && 0 === e ? function (a) {
                            return !!a.parentNode
                        }
                            : function (b, c, i) {
                                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                                if (q) {
                                    if (f) {
                                        while (p) {
                                            m = b;
                                            while (m = m[p])
                                                if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                                    return !1;
                                            o = p = "only" === a && !o && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (o = [g ? q.firstChild : q.lastChild],
                                        g && s) {
                                        m = q,
                                            l = m[u] || (m[u] = {}),
                                            k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                            j = k[a] || [],
                                            n = j[0] === w && j[1],
                                            t = n && j[2],
                                            m = n && q.childNodes[n];
                                        while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                            if (1 === m.nodeType && ++t && m === b) {
                                                k[a] = [w, n, t];
                                                break
                                            }
                                    } else if (s && (m = b,
                                        l = m[u] || (m[u] = {}),
                                        k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                        j = k[a] || [],
                                        n = j[0] === w && j[1],
                                        t = n),
                                        t === !1)
                                        while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                            if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}),
                                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                                k[a] = [w, t]),
                                                m === b))
                                                break;
                                    return t -= e,
                                        t === d || t % d === 0 && t / d >= 0
                                }
                            }
                    },
                    PSEUDO: function (a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                            d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
                                var d, f = e(a, b), g = f.length;
                                while (g--)
                                    d = J(a, f[g]),
                                        a[d] = !(c[d] = f[g])
                            }) : function (a) {
                                return e(a, 0, c)
                            }
                        ) : e
                    }
                },
                pseudos: {
                    not: ha(function (a) {
                        var b = []
                            , c = []
                            , d = h(a.replace(Q, "$1"));
                        return d[u] ? ha(function (a, b, c, e) {
                            var f, g = d(a, null, e, []), h = a.length;
                            while (h--)
                                (f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function (a, e, f) {
                            return b[0] = a,
                                d(b, null, f, c),
                                b[0] = null,
                                !c.pop()
                        }
                    }),
                    has: ha(function (a) {
                        return function (b) {
                            return fa(a, b).length > 0
                        }
                    }),
                    contains: ha(function (a) {
                        return a = a.replace(ba, ca),
                            function (b) {
                                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                            }
                    }),
                    lang: ha(function (a) {
                        return V.test(a || "") || fa.error("unsupported lang: " + a),
                            a = a.replace(ba, ca).toLowerCase(),
                            function (b) {
                                var c;
                                do
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                        return c = c.toLowerCase(),
                                            c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function (a) {
                        return a === o
                    },
                    focus: function (a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function (a) {
                        return a.disabled === !1
                    },
                    disabled: function (a) {
                        return a.disabled === !0
                    },
                    checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex,
                            a.selected === !0
                    },
                    empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function (a) {
                        return !d.pseudos.empty(a)
                    },
                    header: function (a) {
                        return Y.test(a.nodeName)
                    },
                    input: function (a) {
                        return X.test(a.nodeName)
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function (a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: na(function () {
                        return [0]
                    }),
                    last: na(function (a, b) {
                        return [b - 1]
                    }),
                    eq: na(function (a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: na(function (a, b) {
                        for (var c = 0; b > c; c += 2)
                            a.push(c);
                        return a
                    }),
                    odd: na(function (a, b) {
                        for (var c = 1; b > c; c += 2)
                            a.push(c);
                        return a
                    }),
                    lt: na(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;)
                            a.push(d);
                        return a
                    }),
                    gt: na(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;)
                            a.push(d);
                        return a
                    })
                }
            },
            d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = ma(b);
        function pa() { }
        pa.prototype = d.filters = d.pseudos,
            d.setFilters = new pa,
            g = fa.tokenize = function (a, b) {
                var c, e, f, g, h, i, j, k = z[a + " "];
                if (k)
                    return b ? 0 : k.slice(0);
                h = a,
                    i = [],
                    j = d.preFilter;
                while (h) {
                    c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                        i.push(f = [])),
                        c = !1,
                        (e = S.exec(h)) && (c = e.shift(),
                            f.push({
                                value: c,
                                type: e[0].replace(Q, " ")
                            }),
                            h = h.slice(c.length));
                    for (g in d.filter)
                        !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                            f.push({
                                value: c,
                                type: g,
                                matches: e
                            }),
                            h = h.slice(c.length));
                    if (!c)
                        break
                }
                return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
            }
            ;
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function ra(a, b, c) {
            var d = b.dir
                , e = c && "parentNode" === d
                , f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
                : function (b, c, g) {
                    var h, i, j, k = [w, f];
                    if (g) {
                        while (b = b[d])
                            if ((1 === b.nodeType || e) && a(b, c, g))
                                return !0
                    } else
                        while (b = b[d])
                            if (1 === b.nodeType || e) {
                                if (j = b[u] || (b[u] = {}),
                                    i = j[b.uniqueID] || (j[b.uniqueID] = {}),
                                    (h = i[d]) && h[0] === w && h[1] === f)
                                    return k[2] = h[2];
                                if (i[d] = k,
                                    k[2] = a(b, c, g))
                                    return !0
                            }
                }
        }
        function sa(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
                : a[0]
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fa(a, b[d], c);
            return c
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                    j && b.push(h)));
            return g
        }
        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)),
                e && !e[u] && (e = va(e, f)),
                ha(function (f, g, h, i) {
                    var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i),
                        d) {
                        j = ua(r, n),
                            d(j, [], h, i),
                            k = j.length;
                        while (k--)
                            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                j = [],
                                    k = r.length;
                                while (k--)
                                    (l = r[k]) && j.push(q[k] = l);
                                e(null, r = [], j, i)
                            }
                            k = r.length;
                            while (k--)
                                (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    } else
                        r = ua(r === g ? r.splice(o, r.length) : r),
                            e ? e(null, g, r, i) : H.apply(g, r)
                })
        }
        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
                return a === b
            }, h, !0), l = ra(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                    e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                        c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }
        function xa(a, b) {
            var c = b.length > 0
                , e = a.length > 0
                , f = function (f, g, h, i, k) {
                    var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0,
                                g || l.ownerDocument === n || (m(l),
                                    h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--,
                            f && t.push(l))
                    }
                    if (r += s,
                        c && s !== r) {
                        o = 0;
                        while (q = b[o++])
                            q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--)
                                    t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u),
                            k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y,
                        j = v),
                        t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                    c = b.length;
                while (c--)
                    f = wa(b[c]),
                        f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)),
                    f.selector = a
            }
            return f
        }
            ,
            i = fa.select = function (a, b, e, f) {
                var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
                if (e = e || [],
                    1 === o.length) {
                    if (j = o[0] = o[0].slice(0),
                        j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                        if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0],
                            !b)
                            return e;
                        n && (b = b.parentNode),
                            a = a.slice(j.shift().value.length)
                    }
                    i = W.needsContext.test(a) ? 0 : j.length;
                    while (i--) {
                        if (k = j[i],
                            d.relative[l = k.type])
                            break;
                        if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                            if (j.splice(i, 1),
                                a = f.length && qa(j),
                                !a)
                                return H.apply(e, f),
                                    e;
                            break
                        }
                    }
                }
                return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b),
                    e
            }
            ,
            c.sortStable = u.split("").sort(B).join("") === u,
            c.detectDuplicates = !!l,
            m(),
            c.sortDetached = ia(function (a) {
                return 1 & a.compareDocumentPosition(n.createElement("div"))
            }),
            ia(function (a) {
                return a.innerHTML = "<a href='#'></a>",
                    "#" === a.firstChild.getAttribute("href")
            }) || ja("type|href|height|width", function (a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }),
            c.attributes && ia(function (a) {
                return a.innerHTML = "<input/>",
                    a.firstChild.setAttribute("value", ""),
                    "" === a.firstChild.getAttribute("value")
            }) || ja("value", function (a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }),
            ia(function (a) {
                return null == a.getAttribute("disabled")
            }) || ja(K, function (a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }),
            fa
    }(a);
    n.find = t,
        n.expr = t.selectors,
        n.expr[":"] = n.expr.pseudos,
        n.uniqueSort = n.unique = t.uniqueSort,
        n.text = t.getText,
        n.isXMLDoc = t.isXML,
        n.contains = t.contains;
    var u = function (a, b, c) {
        var d = []
            , e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && n(a).is(c))
                    break;
                d.push(a)
            }
        return d
    }
        , v = function (a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
        , w = n.expr.match.needsContext
        , x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
        , y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function (a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (y.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
                return 1 === a.nodeType
            }))
    }
        ,
        n.fn.extend({
            find: function (a) {
                var b, c = [], d = this, e = d.length;
                if ("string" != typeof a)
                    return this.pushStack(n(a).filter(function () {
                        for (b = 0; e > b; b++)
                            if (n.contains(d[b], this))
                                return !0
                    }));
                for (b = 0; e > b; b++)
                    n.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? n.unique(c) : c),
                    c.selector = this.selector ? this.selector + " " + a : a,
                    c
            },
            filter: function (a) {
                return this.pushStack(z(this, a || [], !1))
            },
            not: function (a) {
                return this.pushStack(z(this, a || [], !0))
            },
            is: function (a) {
                return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
            }
        });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function (a, b, c) {
        var e, f;
        if (!a)
            return this;
        if (c = c || A,
            "string" == typeof a) {
            if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a),
                !e || !e[1] && b)
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b,
                    n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)),
                    x.test(e[1]) && n.isPlainObject(b))
                    for (e in b)
                        n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            if (f = d.getElementById(e[2]),
                f && f.parentNode) {
                if (f.id !== e[2])
                    return A.find(a);
                this.length = 1,
                    this[0] = f
            }
            return this.context = d,
                this.selector = a,
                this
        }
        return a.nodeType ? (this.context = this[0] = a,
            this.length = 1,
            this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
                this.context = a.context),
                n.makeArray(a, this))
    }
        ;
    C.prototype = n.fn,
        A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/
        , E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function (a) {
            var b, c = n(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b]))
                        return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function F(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return u(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function (a) {
            return F(a, "nextSibling")
        },
        prev: function (a) {
            return F(a, "previousSibling")
        },
        nextAll: function (a) {
            return u(a, "nextSibling")
        },
        prevAll: function (a) {
            return u(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function (a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return v(a.firstChild)
        },
        contents: function (a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
                d && "string" == typeof d && (e = n.filter(d, e)),
                this.length > 1 && (E[a] || (e = n.uniqueSort(e)),
                    D.test(a) && (e = e.reverse())),
                this.pushStack(e)
        }
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function (a, c) {
            b[c] = !0
        }),
            b
    }
    n.Callbacks = function (a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function () {
            for (e = a.once,
                d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length)
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
                        c = !1)
            }
            a.memory || (c = !1),
                b = !1,
                e && (f = c ? [] : "")
        }, j = {
            add: function () {
                return f && (c && !b && (h = f.length - 1,
                    g.push(c)),
                    function d(b) {
                        n.each(b, function (b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments),
                    c && !b && i()),
                    this
            },
            remove: function () {
                return n.each(arguments, function (a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1)
                        f.splice(c, 1),
                            h >= c && h--
                }),
                    this
            },
            has: function (a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0
            },
            empty: function () {
                return f && (f = []),
                    this
            },
            disable: function () {
                return e = g = [],
                    f = c = "",
                    this
            },
            disabled: function () {
                return !f
            },
            lock: function () {
                return e = !0,
                    c || j.disable(),
                    this
            },
            locked: function () {
                return !!e
            },
            fireWith: function (a, c) {
                return e || (c = c || [],
                    c = [a, c.slice ? c.slice() : c],
                    g.push(c),
                    b || i()),
                    this
            },
            fire: function () {
                return j.fireWith(this, arguments),
                    this
            },
            fired: function () {
                return !!d
            }
        };
        return j
    }
        ,
        n.extend({
            Deferred: function (a) {
                var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
                    , c = "pending"
                    , d = {
                        state: function () {
                            return c
                        },
                        always: function () {
                            return e.done(arguments).fail(arguments),
                                this
                        },
                        then: function () {
                            var a = arguments;
                            return n.Deferred(function (c) {
                                n.each(b, function (b, f) {
                                    var g = n.isFunction(a[b]) && a[b];
                                    e[f[1]](function () {
                                        var a = g && g.apply(this, arguments);
                                        a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }),
                                    a = null
                            }).promise()
                        },
                        promise: function (a) {
                            return null != a ? n.extend(a, d) : d
                        }
                    }
                    , e = {};
                return d.pipe = d.then,
                    n.each(b, function (a, f) {
                        var g = f[2]
                            , h = f[3];
                        d[f[1]] = g.add,
                            h && g.add(function () {
                                c = h
                            }, b[1 ^ a][2].disable, b[2][2].lock),
                            e[f[0]] = function () {
                                return e[f[0] + "With"](this === e ? d : this, arguments),
                                    this
                            }
                            ,
                            e[f[0] + "With"] = g.fireWith
                    }),
                    d.promise(e),
                    a && a.call(e, e),
                    e
            },
            when: function (a) {
                var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                    return function (d) {
                        b[a] = this,
                            c[a] = arguments.length > 1 ? e.call(arguments) : d,
                            c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                }, i, j, k;
                if (d > 1)
                    for (i = new Array(d),
                        j = new Array(d),
                        k = new Array(d); d > b; b++)
                        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
                return f || g.resolveWith(k, c),
                    g.promise()
            }
        });
    var I;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a),
            this
    }
        ,
        n.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (a) {
                a ? n.readyWait++ : n.ready(!0)
            },
            ready: function (a) {
                (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
                    a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]),
                        n.fn.triggerHandler && (n(d).triggerHandler("ready"),
                            n(d).off("ready"))))
            }
        });
    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K),
            a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K),
                a.detachEvent("onload", K))
    }
    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(),
            n.ready())
    }
    n.ready.promise = function (b) {
        if (!I)
            if (I = n.Deferred(),
                "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll)
                a.setTimeout(n.ready);
            else if (d.addEventListener)
                d.addEventListener("DOMContentLoaded", K),
                    a.addEventListener("load", K);
            else {
                d.attachEvent("onreadystatechange", K),
                    a.attachEvent("onload", K);
                var c = !1;
                try {
                    c = null == a.frameElement && d.documentElement
                } catch (e) { }
                c && c.doScroll && !function f() {
                    if (!n.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (b) {
                            return a.setTimeout(f, 50)
                        }
                        J(),
                            n.ready()
                    }
                }()
            }
        return I.promise(b)
    }
        ,
        n.ready.promise();
    var L;
    for (L in n(l))
        break;
    l.ownFirst = "0" === L,
        l.inlineBlockNeedsLayout = !1,
        n(function () {
            var a, b, c, e;
            c = d.getElementsByTagName("body")[0],
                c && c.style && (b = d.createElement("div"),
                    e = d.createElement("div"),
                    e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    c.appendChild(e).appendChild(b),
                    "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                        l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
                        a && (c.style.zoom = 1)),
                    c.removeChild(e))
        }),
        function () {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var M = function (a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()]
            , c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    }
        , N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , O = /([A-Z])/g;
    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d),
                "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) { }
                n.data(a, b, c)
            } else
                c = void 0;
        }
        return c
    }
    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || n.guid++ : h),
                    j[k] || (j[k] = i ? {} : {
                        toJSON: n.noop
                    }),
                    "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)),
                    g = j[k],
                    e || (g.data || (g.data = {}),
                        g = g.data),
                    void 0 !== d && (g[n.camelCase(b)] = d),
                    "string" == typeof b ? (f = g[b],
                        null == f && (f = g[n.camelCase(b)])) : f = g,
                    f
        }
    }
    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType, g = f ? n.cache : a, h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b),
                        b = b in d ? [b] : b.split(" ")),
                        e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                    Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando],
                !!a && !Q(a)
        },
        data: function (a, b, c) {
            return R(a, b, c)
        },
        removeData: function (a, b) {
            return S(a, b)
        },
        _data: function (a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return S(a, b, !0)
        }
    }),
        n.fn.extend({
            data: function (a, b) {
                var c, d, e, f = this[0], g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f),
                        1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--)
                            g[c] && (d = g[c].name,
                                0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                                    P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function () {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function () {
                    n.data(this, a, b)
                }) : f ? P(f, a, n.data(f, a)) : void 0
            },
            removeData: function (a) {
                return this.each(function () {
                    n.removeData(this, a)
                })
            }
        }),
        n.extend({
            queue: function (a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue",
                    d = n._data(a, b),
                    c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)),
                    d || []) : void 0
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = n.queue(a, b)
                    , d = c.length
                    , e = c.shift()
                    , f = n._queueHooks(a, b)
                    , g = function () {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(),
                    d--),
                    e && ("fx" === b && c.unshift("inprogress"),
                        delete f.stop,
                        e.call(a, g, f)),
                    !d && f && f.empty.fire()
            },
            _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function () {
                        n._removeData(a, b + "queue"),
                            n._removeData(a, c)
                    })
                })
            }
        }),
        n.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return "string" != typeof a && (b = a,
                    a = "fx",
                    c--),
                    arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                        var c = n.queue(this, a, b);
                        n._queueHooks(this, a),
                            "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                    })
            },
            dequeue: function (a) {
                return this.each(function () {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", [])
            },
            promise: function (a, b) {
                var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                    --d || e.resolveWith(f, [f])
                };
                "string" != typeof a && (b = a,
                    a = void 0),
                    a = a || "fx";
                while (g--)
                    c = n._data(f[g], a + "queueHooks"),
                        c && c.empty && (d++,
                            c.empty.add(h));
                return h(),
                    e.promise(b)
            }
        }),
        function () {
            var a;
            l.shrinkWrapBlocks = function () {
                if (null != a)
                    return a;
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0],
                    c && c.style ? (b = d.createElement("div"),
                        e = d.createElement("div"),
                        e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                        c.appendChild(e).appendChild(b),
                        "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                            b.appendChild(d.createElement("div")).style.width = "5px",
                            a = 3 !== b.offsetWidth),
                        c.removeChild(e),
                        a) : void 0
            }
        }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i")
        , V = ["Top", "Right", "Bottom", "Left"]
        , W = function (a, b) {
            return a = b || a,
                "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };
    function X(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function () {
            return d.cur()
        }
            : function () {
                return n.css(a, b, "")
            }
            , i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
                c = c || [],
                k = +i || 1;
            do
                f = f || ".5",
                    k /= f,
                    n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0,
            e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
            d && (d.unit = j,
                d.start = k,
                d.end = e)),
            e
    }
    var Y = function (a, b, c, d, e, f, g) {
        var h = 0
            , i = a.length
            , j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)
                Y(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
            n.isFunction(d) || (g = !0),
            j && (g ? (b.call(a, d),
                b = null) : (j = b,
                    b = function (a, b, c) {
                        return j.call(n(a), c)
                    }
            )),
            b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
        , Z = /^(?:checkbox|radio)$/i
        , $ = /<([\w:-]+)/
        , _ = /^$|\/(?:java|ecma)script/i
        , aa = /^\s+/
        , ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function ca(a) {
        var b = ba.split("|")
            , c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    !function () {
        var a = d.createElement("div")
            , b = d.createDocumentFragment()
            , c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            l.leadingWhitespace = 3 === a.firstChild.nodeType,
            l.tbody = !a.getElementsByTagName("tbody").length,
            l.htmlSerialize = !!a.getElementsByTagName("link").length,
            l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML,
            c.type = "checkbox",
            c.checked = !0,
            b.appendChild(c),
            l.appendChecked = c.checked,
            a.innerHTML = "<textarea>x</textarea>",
            l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue,
            b.appendChild(a),
            c = d.createElement("input"),
            c.setAttribute("type", "radio"),
            c.setAttribute("checked", "checked"),
            c.setAttribute("name", "t"),
            a.appendChild(c),
            l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
            l.noCloneEvent = !!a.addEventListener,
            a[n.expando] = 1,
            l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option,
        da.tbody = da.tfoot = da.colgroup = da.caption = da.thead,
        da.th = da.td;
    function ea(a, b) {
        var c, d, e = 0, f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
                c = a.childNodes || a; null != (d = c[e]); e++)
                !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }
    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/
        , ha = /<tbody/i;
    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }
    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r],
                g || 0 === g)
                if ("object" === n.type(g))
                    n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
                    i = i || p.appendChild(b.createElement("div")),
                        j = ($.exec(g) || ["", ""])[1].toLowerCase(),
                        m = da[j] || da._default,
                        i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2],
                        f = m[0];
                    while (f--)
                        i = i.lastChild;
                    if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])),
                        !l.tbody) {
                        g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild,
                            f = g && g.childNodes.length;
                        while (f--)
                            n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
                    }
                    n.merge(q, i.childNodes),
                        i.textContent = "";
                    while (i.firstChild)
                        i.removeChild(i.firstChild);
                    i = p.lastChild
                } else
                    q.push(b.createTextNode(g));
        i && p.removeChild(i),
            l.appendChecked || n.grep(ea(q, "input"), ia),
            r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1)
                e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g),
                i = ea(p.appendChild(g), "script"),
                h && fa(i),
                c) {
                f = 0;
                while (g = i[f++])
                    _.test(g.type || "") && c.push(g)
            }
        return i = null,
            p
    }
    !function () {
        var b, c, e = d.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b,
                (l[b] = c in a) || (e.setAttribute(c, "t"),
                    l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i
        , la = /^key/
        , ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , na = /^(?:focusinfocus|focusoutblur)$/
        , oa = /^([^.]*)(?:\.(.+)|)/;
    function pa() {
        return !0
    }
    function qa() {
        return !1
    }
    function ra() {
        try {
            return d.activeElement
        } catch (a) { }
    }
    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c,
                c = void 0);
            for (h in b)
                sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c,
            d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
                d = void 0) : (e = d,
                    d = c,
                    c = void 0)),
            e === !1)
            e = qa;
        else if (!e)
            return a;
        return 1 === f && (g = e,
            e = function (a) {
                return n().off(a),
                    g.apply(this, arguments)
            }
            ,
            e.guid = g.guid || (g.guid = n.guid++)),
            a.each(function () {
                n.event.add(this, b, e, d, c)
            })
    }
    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c,
                    c = i.handler,
                    e = i.selector),
                    c.guid || (c.guid = n.guid++),
                    (g = r.events) || (g = r.events = {}),
                    (k = r.handle) || (k = r.handle = function (a) {
                        return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                    }
                        ,
                        k.elem = a),
                    b = (b || "").match(G) || [""],
                    h = b.length;
                while (h--)
                    f = oa.exec(b[h]) || [],
                        o = q = f[1],
                        p = (f[2] || "").split(".").sort(),
                        o && (j = n.event.special[o] || {},
                            o = (e ? j.delegateType : j.bindType) || o,
                            j = n.event.special[o] || {},
                            l = n.extend({
                                type: o,
                                origType: q,
                                data: d,
                                handler: c,
                                guid: c.guid,
                                selector: e,
                                needsContext: e && n.expr.match.needsContext.test(e),
                                namespace: p.join(".")
                            }, i),
                            (m = g[o]) || (m = g[o] = [],
                                m.delegateCount = 0,
                                j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))),
                            j.add && (j.add.call(a, l),
                                l.handler.guid || (l.handler.guid = c.guid)),
                            e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                            n.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""],
                    j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [],
                        o = q = h[1],
                        p = (h[2] || "").split(".").sort(),
                        o) {
                        l = n.event.special[o] || {},
                            o = (d ? l.delegateType : l.bindType) || o,
                            m = k[o] || [],
                            h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            i = f = m.length;
                        while (f--)
                            g = m[f],
                                !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1),
                                    g.selector && m.delegateCount--,
                                    l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                            delete k[o])
                    } else
                        for (o in k)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle,
                    n._removeData(a, "events"))
            }
        },
        trigger: function (b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d,
                3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."),
                    q = r.shift(),
                    r.sort()),
                    h = q.indexOf(":") < 0 && "on" + q,
                    b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b),
                    b.isTrigger = f ? 2 : 3,
                    b.namespace = r.join("."),
                    b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    b.result = void 0,
                    b.target || (b.target = e),
                    c = null == c ? [b] : n.makeArray(c, [b]),
                    l = n.event.special[q] || {},
                    f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q,
                        na.test(j + q) || (i = i.parentNode); i; i = i.parentNode)
                        p.push(i),
                            m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped())
                    b.type = o > 1 ? j : l.bindType || q,
                        g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"),
                        g && g.apply(i, c),
                        g = h && i[h],
                        g && g.apply && M(i) && (b.result = g.apply(i, c),
                            b.result === !1 && b.preventDefault());
                if (b.type = q,
                    !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h],
                        m && (e[h] = null),
                        n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) { }
                    n.event.triggered = void 0,
                        m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (n._data(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a,
                a.delegateTarget = this,
                !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j),
                    b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                        c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g,
                            a.data = g.data,
                            d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                            void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
                                a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                    a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [],
                            c = 0; h > c; c++)
                            f = b[c],
                                e = f.selector + " ",
                                void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length),
                                d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
                g
        },
        fix: function (a) {
            if (a[n.expando])
                return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}),
                e = h.props ? this.props.concat(h.props) : this.props,
                a = new n.Event(g),
                b = e.length;
            while (b--)
                c = e[b],
                    a[c] = g[c];
            return a.target || (a.target = g.srcElement || d),
                3 === a.target.nodeType && (a.target = a.target.parentNode),
                a.metaKey = !!a.metaKey,
                h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                    a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, e, f, g = b.button, h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d,
                    f = e.documentElement,
                    c = e.body,
                    a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0),
                    a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)),
                    !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h),
                    a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                    a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== ra() && this.focus)
                        try {
                            return this.focus(),
                                !1
                        } catch (a) { }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === ra() && this.blur ? (this.blur(),
                        !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                        !1) : void 0
                },
                _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b),
                d.isDefaultPrevented() && c.preventDefault()
        }
    },
        n.removeEvent = d.removeEventListener ? function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c)
        }
            : function (a, b, c) {
                var d = "on" + b;
                a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null),
                    a.detachEvent(d, c))
            }
        ,
        n.Event = function (a, b) {
            return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
                this.type = a.type,
                this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a,
                b && n.extend(this, b),
                this.timeStamp = a && a.timeStamp || n.now(),
                void (this[n.expando] = !0)) : new n.Event(a, b)
        }
        ,
        n.Event.prototype = {
            constructor: n.Event,
            isDefaultPrevented: qa,
            isPropagationStopped: qa,
            isImmediatePropagationStopped: qa,
            preventDefault: function () {
                var a = this.originalEvent;
                this.isDefaultPrevented = pa,
                    a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                this.isPropagationStopped = pa,
                    a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(),
                        a.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = pa,
                    a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        n.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (a, b) {
            n.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function (a) {
                    var c, d = this, e = a.relatedTarget, f = a.handleObj;
                    return e && (e === d || n.contains(d, e)) || (a.type = f.origType,
                        c = f.handler.apply(this, arguments),
                        a.type = b),
                        c
                }
            }
        }),
        l.submit || (n.event.special.submit = {
            setup: function () {
                return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
                    var b = a.target
                        , c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                    c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
                        a._submitBubble = !0
                    }),
                        n._data(c, "submit", !0))
                })
            },
            postDispatch: function (a) {
                a._submitBubble && (delete a._submitBubble,
                    this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
            },
            teardown: function () {
                return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
            }
        }),
        l.change || (n.event.special.change = {
            setup: function () {
                return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
                    "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
                }),
                    n.event.add(this, "click._change", function (a) {
                        this._justChanged && !a.isTrigger && (this._justChanged = !1),
                            n.event.simulate("change", this, a)
                    })),
                    !1) : void n.event.add(this, "beforeactivate._change", function (a) {
                        var b = a.target;
                        ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
                            !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                        }),
                            n._data(b, "change", !0))
                    })
            },
            handle: function (a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function () {
                return n.event.remove(this, "._change"),
                    !ka.test(this.nodeName)
            }
        }),
        l.focusin || n.each({
            focus: "focusin",
            blur: "focusout"
        }, function (a, b) {
            var c = function (a) {
                n.event.simulate(b, a.target, n.event.fix(a))
            };
            n.event.special[b] = {
                setup: function () {
                    var d = this.ownerDocument || this
                        , e = n._data(d, b);
                    e || d.addEventListener(a, c, !0),
                        n._data(d, b, (e || 0) + 1)
                },
                teardown: function () {
                    var d = this.ownerDocument || this
                        , e = n._data(d, b) - 1;
                    e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0),
                        n._removeData(d, b))
                }
            }
        }),
        n.fn.extend({
            on: function (a, b, c, d) {
                return sa(this, a, b, c, d)
            },
            one: function (a, b, c, d) {
                return sa(this, a, b, c, d, 1)
            },
            off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)
                    return d = a.handleObj,
                        n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                        this;
                if ("object" == typeof a) {
                    for (e in a)
                        this.off(e, b, a[e]);
                    return this
                }
                return b !== !1 && "function" != typeof b || (c = b,
                    b = void 0),
                    c === !1 && (c = qa),
                    this.each(function () {
                        n.event.remove(this, a, c, b)
                    })
            },
            trigger: function (a, b) {
                return this.each(function () {
                    n.event.trigger(a, b, this)
                })
            },
            triggerHandler: function (a, b) {
                var c = this[0];
                return c ? n.event.trigger(a, b, c, !0) : void 0
            }
        });
    var ta = / jQuery\d+="(?:null|\d+)"/g
        , ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i")
        , va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
        , wa = /<script|<style|<link/i
        , xa = /checked\s*(?:[^=]|=\s*.checked.)/i
        , ya = /^true\/(.*)/
        , za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        , Aa = ca(d)
        , Ba = Aa.appendChild(d.createElement("div"));
    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type,
            a
    }
    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
            a
    }
    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                    g.events = {};
                for (c in h)
                    for (d = 0,
                        e = h[c].length; e > d; d++)
                        n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }
    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
                !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events)
                    n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text,
                Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
                    l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
                        b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }
    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q))
            return a.each(function (e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())),
                    Ha(f, b, c, d)
            });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d),
            e = k.firstChild,
            1 === k.childNodes.length && (k = e),
            e || d)) {
            for (i = n.map(ea(k, "script"), Da),
                h = i.length; o > m; m++)
                g = k,
                    m !== p && (g = n.clone(g, !0, !0),
                        h && n.merge(i, ea(g, "script"))),
                    c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument,
                    n.map(i, Ea),
                    m = 0; h > m; m++)
                    g = i[m],
                        _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }
    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || n.cleanData(ea(d)),
                d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")),
                    d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function (a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function (a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML,
                Ba.removeChild(f = Ba.firstChild)),
                !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f),
                    h = ea(a),
                    g = 0; null != (e = h[g]); ++g)
                    d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a),
                        d = d || ea(f),
                        g = 0; null != (e = h[g]); g++)
                        Fa(e, d[g]);
                else
                    Fa(a, f);
            return d = ea(f, "script"),
                d.length > 0 && fa(d, !i && ea(a, "script")),
                d = h = e = null,
                f
        },
        cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i],
                    g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f],
                        k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i),
                        c.push(f))
                }
        }
    }),
        n.fn.extend({
            domManip: Ha,
            detach: function (a) {
                return Ia(this, a, !0)
            },
            remove: function (a) {
                return Ia(this, a)
            },
            text: function (a) {
                return Y(this, function (a) {
                    return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function () {
                return Ha(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = Ca(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function () {
                return Ha(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = Ca(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function () {
                return Ha(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function () {
                return Ha(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    1 === a.nodeType && n.cleanData(ea(a, !1));
                    while (a.firstChild)
                        a.removeChild(a.firstChild);
                    a.options && n.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function (a, b) {
                return a = null == a ? !1 : a,
                    b = null == b ? a : b,
                    this.map(function () {
                        return n.clone(this, a, b)
                    })
            },
            html: function (a) {
                return Y(this, function (a) {
                    var b = this[0] || {}
                        , c = 0
                        , d = this.length;
                    if (void 0 === a)
                        return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                    if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = n.htmlPrefilter(a);
                        try {
                            for (; d > c; c++)
                                b = this[c] || {},
                                    1 === b.nodeType && (n.cleanData(ea(b, !1)),
                                        b.innerHTML = a);
                            b = 0
                        } catch (e) { }
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function () {
                var a = [];
                return Ha(this, arguments, function (b) {
                    var c = this.parentNode;
                    n.inArray(this, a) < 0 && (n.cleanData(ea(this)),
                        c && c.replaceChild(b, this))
                }, a)
            }
        }),
        n.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (a, b) {
            n.fn[a] = function (a) {
                for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++)
                    c = d === h ? this : this.clone(!0),
                        n(f[d])[b](c),
                        g.apply(e, c.get());
                return this.pushStack(e)
            }
        });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };
    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body)
            , d = n.css(c[0], "display");
        return c.detach(),
            d
    }
    function Ma(a) {
        var b = d
            , c = Ka[a];
        return c || (c = La(a, b),
            "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
                b = (Ja[0].contentWindow || Ja[0].contentDocument).document,
                b.write(),
                b.close(),
                c = La(a, b),
                Ja.detach()),
            Ka[a] = c),
            c
    }
    var Na = /^margin/
        , Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i")
        , Pa = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b)
                g[f] = a.style[f],
                    a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b)
                a.style[f] = g[f];
            return e
        }
        , Qa = d.documentElement;
    !function () {
        var b, c, e, f, g, h, i = d.createElement("div"), j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5",
                l.opacity = "0.5" === j.style.opacity,
                l.cssFloat = !!j.style.cssFloat,
                j.style.backgroundClip = "content-box",
                j.cloneNode(!0).style.backgroundClip = "",
                l.clearCloneStyle = "content-box" === j.style.backgroundClip,
                i = d.createElement("div"),
                i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                j.innerHTML = "",
                i.appendChild(j),
                l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing,
                n.extend(l, {
                    reliableHiddenOffsets: function () {
                        return null == b && k(),
                            f
                    },
                    boxSizingReliable: function () {
                        return null == b && k(),
                            e
                    },
                    pixelMarginRight: function () {
                        return null == b && k(),
                            c
                    },
                    pixelPosition: function () {
                        return null == b && k(),
                            b
                    },
                    reliableMarginRight: function () {
                        return null == b && k(),
                            g
                    },
                    reliableMarginLeft: function () {
                        return null == b && k(),
                            h
                    }
                });
            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i),
                    j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    b = e = h = !1,
                    c = g = !0,
                    a.getComputedStyle && (l = a.getComputedStyle(j),
                        b = "1%" !== (l || {}).top,
                        h = "2px" === (l || {}).marginLeft,
                        e = "4px" === (l || {
                            width: "4px"
                        }).width,
                        j.style.marginRight = "50%",
                        c = "4px" === (l || {
                            marginRight: "4px"
                        }).marginRight,
                        k = j.appendChild(d.createElement("div")),
                        k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                        k.style.marginRight = k.style.width = "0",
                        j.style.width = "1px",
                        g = !parseFloat((a.getComputedStyle(k) || {}).marginRight),
                        j.removeChild(k)),
                    j.style.display = "none",
                    f = 0 === j.getClientRects().length,
                    f && (j.style.display = "",
                        j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                        j.childNodes[0].style.borderCollapse = "separate",
                        k = j.getElementsByTagName("td"),
                        k[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                        f = 0 === k[0].offsetHeight,
                        f && (k[0].style.display = "",
                            k[1].style.display = "none",
                            f = 0 === k[0].offsetHeight)),
                    m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function (b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a),
            c.getComputedStyle(b)
    }
        ,
        Sa = function (a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ra(a),
                g = c ? c.getPropertyValue(b) || c[b] : void 0,
                "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
                c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width,
                    e = h.minWidth,
                    f = h.maxWidth,
                    h.minWidth = h.maxWidth = h.width = g,
                    g = c.width,
                    h.width = d,
                    h.minWidth = e,
                    h.maxWidth = f),
                void 0 === g ? g : g + ""
        }
    ) : Qa.currentStyle && (Ra = function (a) {
        return a.currentStyle
    }
        ,
        Sa = function (a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ra(a),
                g = c ? c[b] : void 0,
                null == g && h && h[b] && (g = h[b]),
                Oa.test(g) && !Ta.test(b) && (d = h.left,
                    e = a.runtimeStyle,
                    f = e && e.left,
                    f && (e.left = a.currentStyle.left),
                    h.left = "fontSize" === b ? "1em" : g,
                    g = h.pixelLeft + "px",
                    h.left = d,
                    f && (e.left = f)),
                void 0 === g ? g : g + "" || "auto"
        }
    );
    function Ua(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i
        , Wa = /opacity\s*=\s*([^)]*)/i
        , Xa = /^(none|table(?!-c[ea]).+)/
        , Ya = new RegExp("^(" + T + ")(.*)$", "i")
        , Za = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
        , $a = {
            letterSpacing: "0",
            fontWeight: "400"
        }
        , _a = ["Webkit", "O", "Moz", "ms"]
        , ab = d.createElement("div").style;
    function bb(a) {
        if (a in ab)
            return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1)
            , c = _a.length;
        while (c--)
            if (a = _a[c] + b,
                a in ab)
                return a
    }
    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
                d.style && (f[g] = n._data(d, "olddisplay"),
                    c = d.style.display,
                    b ? (f[g] || "none" !== c || (d.style.display = ""),
                        "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d),
                            (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
                d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + V[f], !0, e)),
                d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)),
                    "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e),
                        "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }
    function fb(a, b, c) {
        var d = !0
            , e = "width" === b ? a.offsetWidth : a.offsetHeight
            , f = Ra(a)
            , g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f),
                (0 > e || null == e) && (e = a.style[b]),
                Oa.test(e))
                return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]),
                e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h),
                    g = n.cssHooks[b] || n.cssHooks[h],
                    void 0 === c)
                    return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                    "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e),
                        f = "number"),
                    null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")),
                        l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                        !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) { }
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h),
                g = n.cssHooks[b] || n.cssHooks[h],
                g && "get" in g && (f = g.get(a, !0, c)),
                void 0 === f && (f = Sa(a, b, d)),
                "normal" === f && b in $a && (f = $a[b]),
                "" === c || c ? (e = parseFloat(f),
                    c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }),
        n.each(["height", "width"], function (a, b) {
            n.cssHooks[b] = {
                get: function (a, c, d) {
                    return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
                        return fb(a, b, d)
                    }) : fb(a, b, d) : void 0
                },
                set: function (a, c, d) {
                    var e = d && Ra(a);
                    return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }),
        l.opacity || (n.cssHooks.opacity = {
            get: function (a, b) {
                return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function (a, b) {
                var c = a.style
                    , d = a.currentStyle
                    , e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
                    , f = d && d.filter || c.filter || "";
                c.zoom = 1,
                    (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"),
                        "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
            }
        }),
        n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
            return b ? Pa(a, {
                display: "inline-block"
            }, Sa, [a, "marginRight"]) : void 0
        }),
        n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
            return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
                marginLeft: 0
            }, function () {
                return a.getBoundingClientRect().left
            }) : 0)) + "px" : void 0
        }),
        n.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (a, b) {
            n.cssHooks[a + b] = {
                expand: function (c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                        e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            },
                Na.test(a) || (n.cssHooks[a + b].set = db)
        }),
        n.fn.extend({
            css: function (a, b) {
                return Y(this, function (a, b, c) {
                    var d, e, f = {}, g = 0;
                    if (n.isArray(b)) {
                        for (d = Ra(a),
                            e = b.length; e > g; g++)
                            f[b[g]] = n.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function () {
                return cb(this, !0)
            },
            hide: function () {
                return cb(this)
            },
            toggle: function (a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                    W(this) ? n(this).show() : n(this).hide()
                })
            }
        });
    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb,
        gb.prototype = {
            constructor: gb,
            init: function (a, b, c, d, e, f) {
                this.elem = a,
                    this.prop = c,
                    this.easing = e || n.easing._default,
                    this.options = b,
                    this.start = this.now = this.cur(),
                    this.end = d,
                    this.unit = f || (n.cssNumber[c] ? "" : "px")
            },
            cur: function () {
                var a = gb.propHooks[this.prop];
                return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
            },
            run: function (a) {
                var b, c = gb.propHooks[this.prop];
                return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
                    this.now = (this.end - this.start) * b + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : gb.propHooks._default.set(this),
                    this
            }
        },
        gb.prototype.init.prototype = gb.prototype,
        gb.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""),
                        b && "auto" !== b ? b : 0)
                },
                set: function (a) {
                    n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
                }
            }
        },
        gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
            set: function (a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        },
        n.easing = {
            linear: function (a) {
                return a
            },
            swing: function (a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            _default: "swing"
        },
        n.fx = gb.prototype.init,
        n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/, kb = /queueHooks$/;
    function lb() {
        return a.setTimeout(function () {
            hb = void 0
        }),
            hb = n.now()
    }
    function mb(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = V[e],
                d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
            d
    }
    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && W(a), r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"),
            null == h.unqueued && (h.unqueued = 0,
                i = h.empty.fire,
                h.empty.fire = function () {
                    h.unqueued || i()
                }
            ),
            h.unqueued++,
            m.always(function () {
                m.always(function () {
                    h.unqueued--,
                        n.queue(a, "fx").length || h.empty.fire()
                })
            })),
            1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY],
                j = n.css(a, "display"),
                k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j,
                "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
            c.overflow && (p.overflow = "hidden",
                l.shrinkWrapBlocks() || m.always(function () {
                    p.overflow = c.overflow[0],
                        p.overflowX = c.overflow[1],
                        p.overflowY = c.overflow[2]
                }));
        for (d in b)
            if (e = b[d],
                jb.exec(e)) {
                if (delete b[d],
                    f = f || "toggle" === e,
                    e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d])
                        continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else
                j = void 0;
        if (n.isEmptyObject(o))
            "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}),
                f && (r.hidden = !q),
                q ? n(a).show() : m.done(function () {
                    n(a).hide()
                }),
                m.done(function () {
                    var b;
                    n._removeData(a, "fxshow");
                    for (b in o)
                        n.style(a, b, o[b])
                });
            for (d in o)
                g = nb(q ? r[d] : 0, d, m),
                    d in r || (r[d] = g.start,
                        q && (g.end = g.start,
                            g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c),
                e = b[d],
                f = a[c],
                n.isArray(f) && (e = f[1],
                    f = a[c] = f[0]),
                c !== d && (a[d] = f,
                    delete a[c]),
                g = n.cssHooks[d],
                g && "expand" in g) {
                f = g.expand(f),
                    delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                        b[c] = e)
            } else
                b[d] = e
    }
    function qb(a, b, c) {
        var d, e, f = 0, g = qb.prefilters.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)
                return !1;
            for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
                1 > f && i ? c : (h.resolveWith(a, [j]),
                    !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: hb || lb(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                    d
            },
            stop: function (b) {
                var c = 0
                    , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]),
                    h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                    this
            }
        }), k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts))
                return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
                    d;
        return n.map(k, nb, j),
            n.isFunction(j.opts.start) && j.opts.start.call(a, j),
            n.fx.timer(n.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })),
            j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
        tweeners: {
            "*": [function (a, b) {
                var c = this.createTween(a, b);
                return X(c.elem, a, U.exec(b), c),
                    c
            }
            ]
        },
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a,
                a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                    qb.tweeners[c] = qb.tweeners[c] || [],
                    qb.tweeners[c].unshift(b)
        },
        prefilters: [ob],
        prefilter: function (a, b) {
            b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
        }
    }),
        n.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
                null != d.queue && d.queue !== !0 || (d.queue = "fx"),
                d.old = d.complete,
                d.complete = function () {
                    n.isFunction(d.old) && d.old.call(this),
                        d.queue && n.dequeue(this, d.queue)
                }
                ,
                d
        }
        ,
        n.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function (a, b, c, d) {
                var e = n.isEmptyObject(a)
                    , f = n.speed(b, c, d)
                    , g = function () {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g,
                    e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop,
                        b(c)
                };
                return "string" != typeof a && (c = b,
                    b = a,
                    a = void 0),
                    b && a !== !1 && this.queue(a || "fx", []),
                    this.each(function () {
                        var b = !0
                            , e = null != a && a + "queueHooks"
                            , f = n.timers
                            , g = n._data(this);
                        if (e)
                            g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g)
                                g[e] && g[e].stop && kb.test(e) && d(g[e]);
                        for (e = f.length; e--;)
                            f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                                b = !1,
                                f.splice(e, 1));
                        !b && c || n.dequeue(this, a)
                    })
            },
            finish: function (a) {
                return a !== !1 && (a = a || "fx"),
                    this.each(function () {
                        var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                        for (c.finish = !0,
                            n.queue(this, a, []),
                            e && e.stop && e.stop.call(this, !0),
                            b = f.length; b--;)
                            f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                                f.splice(b, 1));
                        for (b = 0; g > b; b++)
                            d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
            }
        }),
        n.each(["toggle", "show", "hide"], function (a, b) {
            var c = n.fn[b];
            n.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
            }
        }),
        n.each({
            slideDown: mb("show"),
            slideUp: mb("hide"),
            slideToggle: mb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            n.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }),
        n.timers = [],
        n.fx.tick = function () {
            var a, b = n.timers, c = 0;
            for (hb = n.now(); c < b.length; c++)
                a = b[c],
                    a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(),
                hb = void 0
        }
        ,
        n.fx.timer = function (a) {
            n.timers.push(a),
                a() ? n.fx.start() : n.timers.pop()
        }
        ,
        n.fx.interval = 13,
        n.fx.start = function () {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
        }
        ,
        n.fx.stop = function () {
            a.clearInterval(ib),
                ib = null
        }
        ,
        n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        n.fn.delay = function (b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b,
                c = c || "fx",
                this.queue(c, function (c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function () {
                        a.clearTimeout(e)
                    }
                })
        }
        ,
        function () {
            var a, b = d.createElement("input"), c = d.createElement("div"), e = d.createElement("select"), f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"),
                c.setAttribute("className", "t"),
                c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                a = c.getElementsByTagName("a")[0],
                b.setAttribute("type", "checkbox"),
                c.appendChild(b),
                a = c.getElementsByTagName("a")[0],
                a.style.cssText = "top:1px",
                l.getSetAttribute = "t" !== c.className,
                l.style = /top/.test(a.getAttribute("style")),
                l.hrefNormalized = "/a" === a.getAttribute("href"),
                l.checkOn = !!b.value,
                l.optSelected = f.selected,
                l.enctype = !!d.createElement("form").enctype,
                e.disabled = !0,
                l.optDisabled = !f.disabled,
                b = d.createElement("input"),
                b.setAttribute("value", ""),
                l.input = "" === b.getAttribute("value"),
                b.value = "t",
                b.setAttribute("type", "radio"),
                l.radioValue = "t" === b.value
        }();
    var rb = /\r/g
        , sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a),
                        this.each(function (c) {
                            var e;
                            1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                                null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                                    return null == a ? "" : a + ""
                                })),
                                b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                                b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                        });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                        b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                            "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }),
        n.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = n.find.attr(a, "value");
                        return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                    }
                },
                select: {
                    get: function (a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i],
                                (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                                if (b = n(c).val(),
                                    f)
                                    return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function (a, b) {
                        var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                        while (g--)
                            if (d = e[g],
                                n.inArray(n.valHooks.option.get(d), f) > -1)
                                try {
                                    d.selected = c = !0
                                } catch (h) {
                                    d.scrollHeight
                                }
                            else
                                d.selected = !1;
                        return c || (a.selectedIndex = -1),
                            e
                    }
                }
            }
        }),
        n.each(["radio", "checkbox"], function () {
            n.valHooks[this] = {
                set: function (a, b) {
                    return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
                }
            },
                l.checkOn || (n.valHooks[this].get = function (a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                }
                )
        });
    var tb, ub, vb = n.expr.attrHandle, wb = /^(?:checked|selected)$/i, xb = l.getSetAttribute, yb = l.input;
    n.fn.extend({
        attr: function (a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }),
        n.extend({
            attr: function (a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                        e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)),
                        void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
                            c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b),
                                null == d ? void 0 : d))
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b),
                                c && (a.value = c),
                                b
                        }
                    }
                }
            },
            removeAttr: function (a, b) {
                var c, d, e = 0, f = b && b.match(G);
                if (f && 1 === a.nodeType)
                    while (c = f[e++])
                        d = n.propFix[c] || c,
                            n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""),
                            a.removeAttribute(xb ? c : d)
            }
        }),
        ub = {
            set: function (a, b, c) {
                return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0,
                    c
            }
        },
        n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = vb[b] || n.find.attr;
            yb && xb || !wb.test(b) ? vb[b] = function (a, b, d) {
                var e, f;
                return d || (f = vb[b],
                    vb[b] = e,
                    e = null != c(a, b, d) ? b.toLowerCase() : null,
                    vb[b] = f),
                    e
            }
                : vb[b] = function (a, b, c) {
                    return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
                }
        }),
        yb && xb || (n.attrHooks.value = {
            set: function (a, b, c) {
                return n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c)
            }
        }),
        xb || (tb = {
            set: function (a, b, c) {
                var d = a.getAttributeNode(c);
                return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
                    d.value = b += "",
                    "value" === c || b === a.getAttribute(c) ? b : void 0
            }
        },
            vb.id = vb.name = vb.coords = function (a, b, c) {
                var d;
                return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
            }
            ,
            n.valHooks.button = {
                get: function (a, b) {
                    var c = a.getAttributeNode(b);
                    return c && c.specified ? c.value : void 0
                },
                set: tb.set
            },
            n.attrHooks.contenteditable = {
                set: function (a, b, c) {
                    tb.set(a, "" === b ? !1 : b, c)
                }
            },
            n.each(["width", "height"], function (a, b) {
                n.attrHooks[b] = {
                    set: function (a, c) {
                        return "" === c ? (a.setAttribute(b, "auto"),
                            c) : void 0
                    }
                }
            })),
        l.style || (n.attrHooks.style = {
            get: function (a) {
                return a.style.cssText || void 0
            },
            set: function (a, b) {
                return a.style.cssText = b + ""
            }
        });
    var zb = /^(?:input|select|textarea|button|object)$/i
        , Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = n.propFix[a] || a,
                this.each(function () {
                    try {
                        this[a] = void 0,
                            delete this[a]
                    } catch (b) { }
                })
        }
    }),
        n.extend({
            prop: function (a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b,
                        e = n.propHooks[b]),
                        void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = n.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
        l.hrefNormalized || n.each(["href", "src"], function (a, b) {
            n.propHooks[b] = {
                get: function (a) {
                    return a.getAttribute(b, 4)
                }
            }
        }),
        l.optSelected || (n.propHooks.selected = {
            get: function (a) {
                var b = a.parentNode;
                return b && (b.selectedIndex,
                    b.parentNode && b.parentNode.selectedIndex),
                    null
            },
            set: function (a) {
                var b = a.parentNode;
                b && (b.selectedIndex,
                    b.parentNode && b.parentNode.selectedIndex)
            }
        }),
        n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            n.propFix[this.toLowerCase()] = this
        }),
        l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;
    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).addClass(a.call(this, b, Cb(this)))
                });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c),
                        d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d),
                            e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).removeClass(a.call(this, b, Cb(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c),
                        d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        h = n.trim(d),
                            e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0,
                        e = n(this),
                        f = a.match(G) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    void 0 !== a && "boolean" !== c || (b = Cb(this),
                        b && n._data(this, "__className__", b),
                        n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function (a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1)
                    return !0;
            return !1
        }
    }),
        n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
            n.fn[b] = function (a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }),
        n.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        });
    var Db = a.location
        , Eb = n.now()
        , Fb = /\?/
        , Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function (a, b, e, f) {
            return c && b && (d = 0),
                0 === d ? a : (c = e || b,
                    d += !f - !e,
                    "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }
        ,
        n.parseXML = function (b) {
            var c, d;
            if (!b || "string" != typeof b)
                return null;
            try {
                a.DOMParser ? (d = new a.DOMParser,
                    c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"),
                        c.async = "false",
                        c.loadXML(b))
            } catch (e) {
                c = void 0
            }
            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b),
                c
        }
        ;
    var Hb = /#.*$/
        , Ib = /([?&])_=[^&]*/
        , Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
        , Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
        , Lb = /^(?:GET|HEAD)$/
        , Mb = /^\/\//
        , Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
        , Ob = {}
        , Pb = {}
        , Qb = "*/".concat("*")
        , Rb = Db.href
        , Sb = Nb.exec(Rb.toLowerCase()) || [];
    function Tb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b,
                b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                        (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Ub(a, b, c, d) {
        var e = {}
            , f = a === Pb;
        function g(h) {
            var i;
            return e[h] = !0,
                n.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                        g(j),
                        !1)
                }),
                i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c),
            a
    }
    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
                void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f),
            c[f]) : void 0
    }
    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
                !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                i = f,
                f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                        !g)
                        for (e in j)
                            if (h = e.split(" "),
                                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                    k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function (b, c) {
            "object" == typeof b && (c = b,
                b = void 0),
                c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c), m = l.context || l, o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event, p = n.Deferred(), q = n.Callbacks("once memory"), r = l.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (2 === u) {
                        if (!k) {
                            k = {};
                            while (b = Jb.exec(g))
                                k[b[1].toLowerCase()] = b[2]
                        }
                        b = k[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function () {
                    return 2 === u ? g : null
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a,
                        s[a] = b),
                        this
                },
                overrideMimeType: function (a) {
                    return u || (l.mimeType = a),
                        this
                },
                statusCode: function (a) {
                    var b;
                    if (a)
                        if (2 > u)
                            for (b in a)
                                r[b] = [r[b], a[b]];
                        else
                            w.always(a[w.status]);
                    return this
                },
                abort: function (a) {
                    var b = a || v;
                    return j && j.abort(b),
                        y(0, b),
                        this
                }
            };
            if (p.promise(w).complete = q.add,
                w.success = w.done,
                w.error = w.fail,
                l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"),
                l.type = c.method || c.type || l.method || l.type,
                l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""],
                null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()),
                    l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))),
                l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)),
                Ub(Ob, l, c, w),
                2 === u)
                return w;
            i = n.event && l.global,
                i && 0 === n.active++ && n.event.trigger("ajaxStart"),
                l.type = l.type.toUpperCase(),
                l.hasContent = !Lb.test(l.type),
                f = l.url,
                l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data,
                    delete l.data),
                    l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
                l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]),
                    n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
                (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType),
                w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers)
                w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u))
                return w.abort();
            v = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1,
                    i && o.trigger("ajaxSend", [w, l]),
                    2 === u)
                    return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function () {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1,
                        j.send(s, y)
                } catch (x) {
                    if (!(2 > u))
                        throw x;
                    y(-1, x)
                }
            } else
                y(-1, "No Transport");
            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2,
                    h && a.clearTimeout(h),
                    j = void 0,
                    g = e || "",
                    w.readyState = b > 0 ? 4 : 0,
                    k = b >= 200 && 300 > b || 304 === b,
                    d && (v = Wb(l, w, d)),
                    v = Xb(l, v, w, k),
                    k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"),
                        x && (n.lastModified[f] = x),
                        x = w.getResponseHeader("etag"),
                        x && (n.etag[f] = x)),
                        204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state,
                            s = v.data,
                            t = v.error,
                            k = !t)) : (t = y,
                                !b && y || (y = "error",
                                    0 > b && (b = 0))),
                    w.status = b,
                    w.statusText = (c || y) + "",
                    k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]),
                    w.statusCode(r),
                    r = void 0,
                    i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]),
                    q.fireWith(m, [w, y]),
                    i && (o.trigger("ajaxComplete", [w, l]),
                        --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }),
        n.each(["get", "post"], function (a, b) {
            n[b] = function (a, c, d, e) {
                return n.isFunction(c) && (e = e || d,
                    d = c,
                    c = void 0),
                    n.ajax(n.extend({
                        url: a,
                        type: b,
                        dataType: e,
                        data: c,
                        success: d
                    }, n.isPlainObject(a) && a))
            }
        }),
        n._evalUrl = function (a) {
            return n.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        n.fn.extend({
            wrapAll: function (a) {
                if (n.isFunction(a))
                    return this.each(function (b) {
                        n(this).wrapAll(a.call(this, b))
                    });
                if (this[0]) {
                    var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                        b.map(function () {
                            var a = this;
                            while (a.firstChild && 1 === a.firstChild.nodeType)
                                a = a.firstChild;
                            return a
                        }).append(this)
                }
                return this
            },
            wrapInner: function (a) {
                return n.isFunction(a) ? this.each(function (b) {
                    n(this).wrapInner(a.call(this, b))
                }) : this.each(function () {
                    var b = n(this)
                        , c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function (a) {
                var b = n.isFunction(a);
                return this.each(function (c) {
                    n(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
                }).end()
            }
        });
    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }
    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a))
            return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type)
                return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function (a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }
        ,
        n.expr.filters.visible = function (a) {
            return !n.expr.filters.hidden(a)
        }
        ;
    var $b = /%20/g
        , _b = /\[\]$/
        , ac = /\r?\n/g
        , bc = /^(?:submit|button|image|reset|file)$/i
        , cc = /^(?:input|select|textarea|keygen)/i;
    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function (b, e) {
                c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b,
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
            n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function () {
                e(this.name, this.value)
            });
        else
            for (c in a)
                dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }
        ,
        n.fn.extend({
            serialize: function () {
                return n.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var a = n.prop(this, "elements");
                    return a ? n.makeArray(a) : this
                }).filter(function () {
                    var a = this.type;
                    return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
                }).map(function (a, b) {
                    var c = n(this).val();
                    return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                        return {
                            name: b.name,
                            value: a.replace(ac, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(ac, "\r\n")
                    }
                }).get()
            }
        }),
        n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
            return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
        }
            : hc;
    var ec = 0
        , fc = {}
        , gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in fc)
            fc[a](void 0, !0)
    }),
        l.cors = !!gc && "withCredentials" in gc,
        gc = l.ajax = !!gc,
        gc && n.ajaxTransport(function (b) {
            if (!b.crossDomain || l.cors) {
                var c;
                return {
                    send: function (d, e) {
                        var f, g = b.xhr(), h = ++ec;
                        if (g.open(b.type, b.url, b.async, b.username, b.password),
                            b.xhrFields)
                            for (f in b.xhrFields)
                                g[f] = b.xhrFields[f];
                        b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType),
                            b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                        for (f in d)
                            void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                        g.send(b.hasContent && b.data || null),
                            c = function (a, d) {
                                var f, i, j;
                                if (c && (d || 4 === g.readyState))
                                    if (delete fc[h],
                                        c = void 0,
                                        g.onreadystatechange = n.noop,
                                        d)
                                        4 !== g.readyState && g.abort();
                                    else {
                                        j = {},
                                            f = g.status,
                                            "string" == typeof g.responseText && (j.text = g.responseText);
                                        try {
                                            i = g.statusText
                                        } catch (k) {
                                            i = ""
                                        }
                                        f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                                    }
                                j && e(f, i, j, g.getAllResponseHeaders())
                            }
                            ,
                            b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                    },
                    abort: function () {
                        c && c(void 0, !0)
                    }
                }
            }
        });
    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) { }
    }
    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) { }
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (a) {
                return n.globalEval(a),
                    a
            }
        }
    }),
        n.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1),
                a.crossDomain && (a.type = "GET",
                    a.global = !1)
        }),
        n.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var b, c = d.head || n("head")[0] || d.documentElement;
                return {
                    send: function (e, f) {
                        b = d.createElement("script"),
                            b.async = !0,
                            a.scriptCharset && (b.charset = a.scriptCharset),
                            b.src = a.url,
                            b.onload = b.onreadystatechange = function (a, c) {
                                (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
                                    b.parentNode && b.parentNode.removeChild(b),
                                    b = null,
                                    c || f(200, "success"))
                            }
                            ,
                            c.insertBefore(b, c.firstChild)
                    },
                    abort: function () {
                        b && b.onload(void 0, !0)
                    }
                }
            }
        });
    var jc = []
        , kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0,
                a
        }
    }),
        n.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                b.converters["script json"] = function () {
                    return g || n.error(e + " was not called"),
                        g[0]
                }
                ,
                b.dataTypes[0] = "json",
                f = a[e],
                a[e] = function () {
                    g = arguments
                }
                ,
                d.always(function () {
                    void 0 === f ? n(a).removeProp(e) : a[e] = f,
                        b[e] && (b.jsonpCallback = c.jsonpCallback,
                            jc.push(e)),
                        g && n.isFunction(f) && f(g[0]),
                        g = f = void 0
                }),
                "script") : void 0
        }),
        n.parseHTML = function (a, b, c) {
            if (!a || "string" != typeof a)
                return null;
            "boolean" == typeof b && (c = b,
                b = !1),
                b = b || d;
            var e = x.exec(a)
                , f = !c && [];
            return e ? [b.createElement(e[1])] : (e = ja([a], b, f),
                f && f.length && n(f).remove(),
                n.merge([], e.childNodes))
        }
        ;
    var lc = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && lc)
            return lc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)),
            a = a.slice(0, h)),
            n.isFunction(b) ? (c = b,
                b = void 0) : b && "object" == typeof b && (e = "POST"),
            g.length > 0 && n.ajax({
                url: a,
                type: e || "GET",
                dataType: "html",
                data: b
            }).done(function (a) {
                f = arguments,
                    g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
            }).always(c && function (a, b) {
                g.each(function () {
                    c.apply(this, f || [a.responseText, b, a])
                })
            }
            ),
            this
    }
        ,
        n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
            n.fn[b] = function (a) {
                return this.on(b, a)
            }
        }),
        n.expr.filters.animated = function (a) {
            return n.grep(n.timers, function (b) {
                return a === b.elem
            }).length
        }
        ;
    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"),
                h = l.offset(),
                f = n.css(a, "top"),
                i = n.css(a, "left"),
                j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1,
                j ? (d = l.position(),
                    g = d.top,
                    e = d.left) : (g = parseFloat(f) || 0,
                        e = parseFloat(i) || 0),
                n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
                null != b.top && (m.top = b.top - h.top + g),
                null != b.left && (m.left = b.left - h.left + e),
                "using" in b ? b.using.call(a, m) : l.css(m)
        }
    },
        n.fn.extend({
            offset: function (a) {
                if (arguments.length)
                    return void 0 === a ? this : this.each(function (b) {
                        n.offset.setOffset(this, a, b)
                    });
                var b, c, d = {
                    top: 0,
                    left: 0
                }, e = this[0], f = e && e.ownerDocument;
                if (f)
                    return b = f.documentElement,
                        n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()),
                            c = mc(f),
                        {
                            top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                            left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                        }) : d
            },
            position: function () {
                if (this[0]) {
                    var a, b, c = {
                        top: 0,
                        left: 0
                    }, d = this[0];
                    return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                        b = this.offset(),
                        n.nodeName(a[0], "html") || (c = a.offset()),
                        c.top += n.css(a[0], "borderTopWidth", !0),
                        c.left += n.css(a[0], "borderLeftWidth", !0)),
                    {
                        top: b.top - c.top - n.css(d, "marginTop", !0),
                        left: b.left - c.left - n.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var a = this.offsetParent;
                    while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))
                        a = a.offsetParent;
                    return a || Qa
                })
            }
        }),
        n.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (a, b) {
            var c = /Y/.test(b);
            n.fn[a] = function (d) {
                return Y(this, function (a, d, e) {
                    var f = mc(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
                }, a, d, arguments.length, null)
            }
        }),
        n.each(["top", "left"], function (a, b) {
            n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
                return c ? (c = Sa(a, b),
                    Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
            })
        }),
        n.each({
            Height: "height",
            Width: "width"
        }, function (a, b) {
            n.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function (c, d) {
                n.fn[d] = function (d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d)
                        , g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Y(this, function (b, c, d) {
                        var e;
                        return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                            Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }),
        n.fn.extend({
            bind: function (a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function (a, b) {
                return this.off(a, null, b)
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function (a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        }),
        n.fn.size = function () {
            return this.length
        }
        ,
        n.fn.andSelf = n.fn.addBack,
        "function" == typeof define && define.amd && define("jquery", [], function () {
            return n
        });
    var nc = a.jQuery
        , oc = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = oc),
            b && a.jQuery === n && (a.jQuery = nc),
            n
    }
        ,
        b || (a.jQuery = a.$ = n),
        n
});

/*!
  * Bootstrap v4.5.2 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery)
}(this, (function (t, e) {
    "use strict";
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
        }
    }
    function i(t, e, i) {
        return e && n(t.prototype, e),
            i && n(t, i),
            t
    }
    function o() {
        return (o = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }
        ).apply(this, arguments)
    }
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    function r(t) {
        var n = this
            , i = !1;
        return e(this).one(s.TRANSITION_END, (function () {
            i = !0
        }
        )),
            setTimeout((function () {
                i || s.triggerTransitionEnd(n)
            }
            ), t),
            this
    }
    var s = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function (t) {
            if (!t)
                return 0;
            var n = e(t).css("transition-duration")
                , i = e(t).css("transition-delay")
                , o = parseFloat(n)
                , r = parseFloat(i);
            return o || r ? (n = n.split(",")[0],
                i = i.split(",")[0],
                1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        reflow: function (t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function (t) {
            e(t).trigger("transitionend")
        },
        supportsTransitionEnd: function () {
            return Boolean("transitionend")
        },
        isElement: function (t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function (t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                        , r = e[i]
                        , a = r && s.isElement(r) ? "element" : null === (l = r) || "undefined" == typeof l ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(o).test(a))
                        throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
                }
            var l
        },
        findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? s.findShadowRoot(t.parentNode) : null
        },
        jQueryDetection: function () {
            if ("undefined" == typeof e)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = e.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4)
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    s.jQueryDetection(),
        e.fn.emulateTransitionEnd = r,
        e.event.special[s.TRANSITION_END] = {
            bindType: "transitionend",
            delegateType: "transitionend",
            handle: function (t) {
                if (e(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        };
    var a = "alert"
        , l = e.fn[a]
        , c = function () {
            function t(t) {
                this._element = t
            }
            var n = t.prototype;
            return n.close = function (t) {
                var e = this._element;
                t && (e = this._getRootElement(t)),
                    this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }
                ,
                n.dispose = function () {
                    e.removeData(this._element, "bs.alert"),
                        this._element = null
                }
                ,
                n._getRootElement = function (t) {
                    var n = s.getSelectorFromElement(t)
                        , i = !1;
                    return n && (i = document.querySelector(n)),
                        i || (i = e(t).closest(".alert")[0]),
                        i
                }
                ,
                n._triggerCloseEvent = function (t) {
                    var n = e.Event("close.bs.alert");
                    return e(t).trigger(n),
                        n
                }
                ,
                n._removeElement = function (t) {
                    var n = this;
                    if (e(t).removeClass("show"),
                        e(t).hasClass("fade")) {
                        var i = s.getTransitionDurationFromElement(t);
                        e(t).one(s.TRANSITION_END, (function (e) {
                            return n._destroyElement(t, e)
                        }
                        )).emulateTransitionEnd(i)
                    } else
                        this._destroyElement(t)
                }
                ,
                n._destroyElement = function (t) {
                    e(t).detach().trigger("closed.bs.alert").remove()
                }
                ,
                t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this)
                            , o = i.data("bs.alert");
                        o || (o = new t(this),
                            i.data("bs.alert", o)),
                            "close" === n && o[n](this)
                    }
                    ))
                }
                ,
                t._handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(),
                            t.close(this)
                    }
                }
                ,
                i(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.2"
                    }
                }]),
                t
        }();
    e(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', c._handleDismiss(new c)),
        e.fn[a] = c._jQueryInterface,
        e.fn[a].Constructor = c,
        e.fn[a].noConflict = function () {
            return e.fn[a] = l,
                c._jQueryInterface
        }
        ;
    var h = e.fn.button
        , u = function () {
            function t(t) {
                this._element = t
            }
            var n = t.prototype;
            return n.toggle = function () {
                var t = !0
                    , n = !0
                    , i = e(this._element).closest('[data-toggle="buttons"]')[0];
                if (i) {
                    var o = this._element.querySelector('input:not([type="hidden"])');
                    if (o) {
                        if ("radio" === o.type)
                            if (o.checked && this._element.classList.contains("active"))
                                t = !1;
                            else {
                                var r = i.querySelector(".active");
                                r && e(r).removeClass("active")
                            }
                        t && ("checkbox" !== o.type && "radio" !== o.type || (o.checked = !this._element.classList.contains("active")),
                            e(o).trigger("change")),
                            o.focus(),
                            n = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")),
                    t && e(this._element).toggleClass("active"))
            }
                ,
                n.dispose = function () {
                    e.removeData(this._element, "bs.button"),
                        this._element = null
                }
                ,
                t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this).data("bs.button");
                        i || (i = new t(this),
                            e(this).data("bs.button", i)),
                            "toggle" === n && i[n]()
                    }
                    ))
                }
                ,
                i(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.2"
                    }
                }]),
                t
        }();
    e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function (t) {
        var n = t.target
            , i = n;
        if (e(n).hasClass("btn") || (n = e(n).closest(".btn")[0]),
            !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))
            t.preventDefault();
        else {
            var o = n.querySelector('input:not([type="hidden"])');
            if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled")))
                return void t.preventDefault();
            ("LABEL" !== i.tagName || o && "checkbox" !== o.type) && u._jQueryInterface.call(e(n), "toggle")
        }
    }
    )).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function (t) {
        var n = e(t.target).closest(".btn")[0];
        e(n).toggleClass("focus", /^focus(in)?$/.test(t.type))
    }
    )),
        e(window).on("load.bs.button.data-api", (function () {
            for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
                var i = t[e]
                    , o = i.querySelector('input:not([type="hidden"])');
                o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
            }
            for (var r = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < s; r++) {
                var a = t[r];
                "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
            }
        }
        )),
        e.fn.button = u._jQueryInterface,
        e.fn.button.Constructor = u,
        e.fn.button.noConflict = function () {
            return e.fn.button = h,
                u._jQueryInterface
        }
        ;
    var f = "carousel"
        , d = ".bs.carousel"
        , p = e.fn[f]
        , m = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        }
        , g = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }
        , _ = {
            TOUCH: "touch",
            PEN: "pen"
        }
        , v = function () {
            function t(t, e) {
                this._items = null,
                    this._interval = null,
                    this._activeElement = null,
                    this._isPaused = !1,
                    this._isSliding = !1,
                    this.touchTimeout = null,
                    this.touchStartX = 0,
                    this.touchDeltaX = 0,
                    this._config = this._getConfig(e),
                    this._element = t,
                    this._indicatorsElement = this._element.querySelector(".carousel-indicators"),
                    this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0,
                    this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
                    this._addEventListeners()
            }
            var n = t.prototype;
            return n.next = function () {
                this._isSliding || this._slide("next")
            }
                ,
                n.nextWhenVisible = function () {
                    !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                }
                ,
                n.prev = function () {
                    this._isSliding || this._slide("prev")
                }
                ,
                n.pause = function (t) {
                    t || (this._isPaused = !0),
                        this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (s.triggerTransitionEnd(this._element),
                            this.cycle(!0)),
                        clearInterval(this._interval),
                        this._interval = null
                }
                ,
                n.cycle = function (t) {
                    t || (this._isPaused = !1),
                        this._interval && (clearInterval(this._interval),
                            this._interval = null),
                        this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }
                ,
                n.to = function (t) {
                    var n = this;
                    this._activeElement = this._element.querySelector(".active.carousel-item");
                    var i = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || t < 0))
                        if (this._isSliding)
                            e(this._element).one("slid.bs.carousel", (function () {
                                return n.to(t)
                            }
                            ));
                        else {
                            if (i === t)
                                return this.pause(),
                                    void this.cycle();
                            var o = t > i ? "next" : "prev";
                            this._slide(o, this._items[t])
                        }
                }
                ,
                n.dispose = function () {
                    e(this._element).off(d),
                        e.removeData(this._element, "bs.carousel"),
                        this._items = null,
                        this._config = null,
                        this._element = null,
                        this._interval = null,
                        this._isPaused = null,
                        this._isSliding = null,
                        this._activeElement = null,
                        this._indicatorsElement = null
                }
                ,
                n._getConfig = function (t) {
                    return t = o({}, m, t),
                        s.typeCheckConfig(f, t, g),
                        t
                }
                ,
                n._handleSwipe = function () {
                    var t = Math.abs(this.touchDeltaX);
                    if (!(t <= 40)) {
                        var e = t / this.touchDeltaX;
                        this.touchDeltaX = 0,
                            e > 0 && this.prev(),
                            e < 0 && this.next()
                    }
                }
                ,
                n._addEventListeners = function () {
                    var t = this;
                    this._config.keyboard && e(this._element).on("keydown.bs.carousel", (function (e) {
                        return t._keydown(e)
                    }
                    )),
                        "hover" === this._config.pause && e(this._element).on("mouseenter.bs.carousel", (function (e) {
                            return t.pause(e)
                        }
                        )).on("mouseleave.bs.carousel", (function (e) {
                            return t.cycle(e)
                        }
                        )),
                        this._config.touch && this._addTouchEventListeners()
                }
                ,
                n._addTouchEventListeners = function () {
                    var t = this;
                    if (this._touchSupported) {
                        var n = function (e) {
                            t._pointerEvent && _[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                        }
                            , i = function (e) {
                                t._pointerEvent && _[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                                    t._handleSwipe(),
                                    "hover" === t._config.pause && (t.pause(),
                                        t.touchTimeout && clearTimeout(t.touchTimeout),
                                        t.touchTimeout = setTimeout((function (e) {
                                            return t.cycle(e)
                                        }
                                        ), 500 + t._config.interval))
                            };
                        e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function (t) {
                            return t.preventDefault()
                        }
                        )),
                            this._pointerEvent ? (e(this._element).on("pointerdown.bs.carousel", (function (t) {
                                return n(t)
                            }
                            )),
                                e(this._element).on("pointerup.bs.carousel", (function (t) {
                                    return i(t)
                                }
                                )),
                                this._element.classList.add("pointer-event")) : (e(this._element).on("touchstart.bs.carousel", (function (t) {
                                    return n(t)
                                }
                                )),
                                    e(this._element).on("touchmove.bs.carousel", (function (e) {
                                        return function (e) {
                                            e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
                                        }(e)
                                    }
                                    )),
                                    e(this._element).on("touchend.bs.carousel", (function (t) {
                                        return i(t)
                                    }
                                    )))
                    }
                }
                ,
                n._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                        switch (t.which) {
                            case 37:
                                t.preventDefault(),
                                    this.prev();
                                break;
                            case 39:
                                t.preventDefault(),
                                    this.next()
                        }
                }
                ,
                n._getItemIndex = function (t) {
                    return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [],
                        this._items.indexOf(t)
                }
                ,
                n._getItemByDirection = function (t, e) {
                    var n = "next" === t
                        , i = "prev" === t
                        , o = this._getItemIndex(e)
                        , r = this._items.length - 1;
                    if ((i && 0 === o || n && o === r) && !this._config.wrap)
                        return e;
                    var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                    return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                }
                ,
                n._triggerSlideEvent = function (t, n) {
                    var i = this._getItemIndex(t)
                        , o = this._getItemIndex(this._element.querySelector(".active.carousel-item"))
                        , r = e.Event("slide.bs.carousel", {
                            relatedTarget: t,
                            direction: n,
                            from: o,
                            to: i
                        });
                    return e(this._element).trigger(r),
                        r
                }
                ,
                n._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                        e(n).removeClass("active");
                        var i = this._indicatorsElement.children[this._getItemIndex(t)];
                        i && e(i).addClass("active")
                    }
                }
                ,
                n._slide = function (t, n) {
                    var i, o, r, a = this, l = this._element.querySelector(".active.carousel-item"), c = this._getItemIndex(l), h = n || l && this._getItemByDirection(t, l), u = this._getItemIndex(h), f = Boolean(this._interval);
                    if ("next" === t ? (i = "carousel-item-left",
                        o = "carousel-item-next",
                        r = "left") : (i = "carousel-item-right",
                            o = "carousel-item-prev",
                            r = "right"),
                        h && e(h).hasClass("active"))
                        this._isSliding = !1;
                    else if (!this._triggerSlideEvent(h, r).isDefaultPrevented() && l && h) {
                        this._isSliding = !0,
                            f && this.pause(),
                            this._setActiveIndicatorElement(h);
                        var d = e.Event("slid.bs.carousel", {
                            relatedTarget: h,
                            direction: r,
                            from: c,
                            to: u
                        });
                        if (e(this._element).hasClass("slide")) {
                            e(h).addClass(o),
                                s.reflow(h),
                                e(l).addClass(i),
                                e(h).addClass(i);
                            var p = parseInt(h.getAttribute("data-interval"), 10);
                            p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                                this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                            var m = s.getTransitionDurationFromElement(l);
                            e(l).one(s.TRANSITION_END, (function () {
                                e(h).removeClass(i + " " + o).addClass("active"),
                                    e(l).removeClass("active " + o + " " + i),
                                    a._isSliding = !1,
                                    setTimeout((function () {
                                        return e(a._element).trigger(d)
                                    }
                                    ), 0)
                            }
                            )).emulateTransitionEnd(m)
                        } else
                            e(l).removeClass("active"),
                                e(h).addClass("active"),
                                this._isSliding = !1,
                                e(this._element).trigger(d);
                        f && this.cycle()
                    }
                }
                ,
                t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this).data("bs.carousel")
                            , r = o({}, m, e(this).data());
                        "object" == typeof n && (r = o({}, r, n));
                        var s = "string" == typeof n ? n : r.slide;
                        if (i || (i = new t(this, r),
                            e(this).data("bs.carousel", i)),
                            "number" == typeof n)
                            i.to(n);
                        else if ("string" == typeof s) {
                            if ("undefined" == typeof i[s])
                                throw new TypeError('No method named "' + s + '"');
                            i[s]()
                        } else
                            r.interval && r.ride && (i.pause(),
                                i.cycle())
                    }
                    ))
                }
                ,
                t._dataApiClickHandler = function (n) {
                    var i = s.getSelectorFromElement(this);
                    if (i) {
                        var r = e(i)[0];
                        if (r && e(r).hasClass("carousel")) {
                            var a = o({}, e(r).data(), e(this).data())
                                , l = this.getAttribute("data-slide-to");
                            l && (a.interval = !1),
                                t._jQueryInterface.call(e(r), a),
                                l && e(r).data("bs.carousel").to(l),
                                n.preventDefault()
                        }
                    }
                }
                ,
                i(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.2"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return m
                    }
                }]),
                t
        }();
    e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", v._dataApiClickHandler),
        e(window).on("load.bs.carousel.data-api", (function () {
            for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = t.length; n < i; n++) {
                var o = e(t[n]);
                v._jQueryInterface.call(o, o.data())
            }
        }
        )),
        e.fn[f] = v._jQueryInterface,
        e.fn[f].Constructor = v,
        e.fn[f].noConflict = function () {
            return e.fn[f] = p,
                v._jQueryInterface
        }
        ;
    var b = "collapse"
        , y = e.fn[b]
        , w = {
            toggle: !0,
            parent: ""
        }
        , E = {
            toggle: "boolean",
            parent: "(string|element)"
        }
        , T = function () {
            function t(t, e) {
                this._isTransitioning = !1,
                    this._element = t,
                    this._config = this._getConfig(e),
                    this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
                    var r = n[i]
                        , a = s.getSelectorFromElement(r)
                        , l = [].slice.call(document.querySelectorAll(a)).filter((function (e) {
                            return e === t
                        }
                        ));
                    null !== a && l.length > 0 && (this._selector = a,
                        this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null,
                    this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                    this._config.toggle && this.toggle()
            }
            var n = t.prototype;
            return n.toggle = function () {
                e(this._element).hasClass("show") ? this.hide() : this.show()
            }
                ,
                n.show = function () {
                    var n, i, o = this;
                    if (!this._isTransitioning && !e(this._element).hasClass("show") && (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function (t) {
                        return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains("collapse")
                    }
                    ))).length && (n = null),
                        !(n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                        var r = e.Event("show.bs.collapse");
                        if (e(this._element).trigger(r),
                            !r.isDefaultPrevented()) {
                            n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"),
                                i || e(n).data("bs.collapse", null));
                            var a = this._getDimension();
                            e(this._element).removeClass("collapse").addClass("collapsing"),
                                this._element.style[a] = 0,
                                this._triggerArray.length && e(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                            var l = "scroll" + (a[0].toUpperCase() + a.slice(1))
                                , c = s.getTransitionDurationFromElement(this._element);
                            e(this._element).one(s.TRANSITION_END, (function () {
                                e(o._element).removeClass("collapsing").addClass("collapse show"),
                                    o._element.style[a] = "",
                                    o.setTransitioning(!1),
                                    e(o._element).trigger("shown.bs.collapse")
                            }
                            )).emulateTransitionEnd(c),
                                this._element.style[a] = this._element[l] + "px"
                        }
                    }
                }
                ,
                n.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && e(this._element).hasClass("show")) {
                        var n = e.Event("hide.bs.collapse");
                        if (e(this._element).trigger(n),
                            !n.isDefaultPrevented()) {
                            var i = this._getDimension();
                            this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                                s.reflow(this._element),
                                e(this._element).addClass("collapsing").removeClass("collapse show");
                            var o = this._triggerArray.length;
                            if (o > 0)
                                for (var r = 0; r < o; r++) {
                                    var a = this._triggerArray[r]
                                        , l = s.getSelectorFromElement(a);
                                    if (null !== l)
                                        e([].slice.call(document.querySelectorAll(l))).hasClass("show") || e(a).addClass("collapsed").attr("aria-expanded", !1)
                                }
                            this.setTransitioning(!0);
                            this._element.style[i] = "";
                            var c = s.getTransitionDurationFromElement(this._element);
                            e(this._element).one(s.TRANSITION_END, (function () {
                                t.setTransitioning(!1),
                                    e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                            }
                            )).emulateTransitionEnd(c)
                        }
                    }
                }
                ,
                n.setTransitioning = function (t) {
                    this._isTransitioning = t
                }
                ,
                n.dispose = function () {
                    e.removeData(this._element, "bs.collapse"),
                        this._config = null,
                        this._parent = null,
                        this._element = null,
                        this._triggerArray = null,
                        this._isTransitioning = null
                }
                ,
                n._getConfig = function (t) {
                    return (t = o({}, w, t)).toggle = Boolean(t.toggle),
                        s.typeCheckConfig(b, t, E),
                        t
                }
                ,
                n._getDimension = function () {
                    return e(this._element).hasClass("width") ? "width" : "height"
                }
                ,
                n._getParent = function () {
                    var n, i = this;
                    s.isElement(this._config.parent) ? (n = this._config.parent,
                        "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                    var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
                        , r = [].slice.call(n.querySelectorAll(o));
                    return e(r).each((function (e, n) {
                        i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
                    }
                    )),
                        n
                }
                ,
                n._addAriaAndCollapsedClass = function (t, n) {
                    var i = e(t).hasClass("show");
                    n.length && e(n).toggleClass("collapsed", !i).attr("aria-expanded", i)
                }
                ,
                t._getTargetFromElement = function (t) {
                    var e = s.getSelectorFromElement(t);
                    return e ? document.querySelector(e) : null
                }
                ,
                t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this)
                            , r = i.data("bs.collapse")
                            , s = o({}, w, i.data(), "object" == typeof n && n ? n : {});
                        if (!r && s.toggle && "string" == typeof n && /show|hide/.test(n) && (s.toggle = !1),
                            r || (r = new t(this, s),
                                i.data("bs.collapse", r)),
                            "string" == typeof n) {
                            if ("undefined" == typeof r[n])
                                throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    }
                    ))
                }
                ,
                i(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.2"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return w
                    }
                }]),
                t
        }();
    e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = e(this)
            , i = s.getSelectorFromElement(this)
            , o = [].slice.call(document.querySelectorAll(i));
        e(o).each((function () {
            var t = e(this)
                , i = t.data("bs.collapse") ? "toggle" : n.data();
            T._jQueryInterface.call(t, i)
        }
        ))
    }
    )),
        e.fn[b] = T._jQueryInterface,
        e.fn[b].Constructor = T,
        e.fn[b].noConflict = function () {
            return e.fn[b] = y,
                T._jQueryInterface
        }
        ;
    var C = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
        , S = function () {
            for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
                if (C && navigator.userAgent.indexOf(t[e]) >= 0)
                    return 1;
            return 0
        }();
    var D = C && window.Promise ? function (t) {
        var e = !1;
        return function () {
            e || (e = !0,
                window.Promise.resolve().then((function () {
                    e = !1,
                        t()
                }
                )))
        }
    }
        : function (t) {
            var e = !1;
            return function () {
                e || (e = !0,
                    setTimeout((function () {
                        e = !1,
                            t()
                    }
                    ), S))
            }
        }
        ;
    function N(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }
    function k(t, e) {
        if (1 !== t.nodeType)
            return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n
    }
    function A(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }
    function I(t) {
        if (!t)
            return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = k(t)
            , n = e.overflow
            , i = e.overflowX
            , o = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? t : I(A(t))
    }
    function O(t) {
        return t && t.referenceNode ? t.referenceNode : t
    }
    var x = C && !(!window.MSInputMethodContext || !document.documentMode)
        , j = C && /MSIE 10/.test(navigator.userAgent);
    function L(t) {
        return 11 === t ? x : 10 === t ? j : x || j
    }
    function P(t) {
        if (!t)
            return document.documentElement;
        for (var e = L(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;)
            n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === k(n, "position") ? P(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }
    function F(t) {
        return null !== t.parentNode ? F(t.parentNode) : t
    }
    function R(t, e) {
        if (!(t && t.nodeType && e && e.nodeType))
            return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING
            , i = n ? t : e
            , o = n ? e : t
            , r = document.createRange();
        r.setStart(i, 0),
            r.setEnd(o, 0);
        var s, a, l = r.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(o))
            return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && P(s.firstElementChild) !== s ? P(l) : l;
        var c = F(t);
        return c.host ? R(c.host, e) : R(t, F(e).host)
    }
    function H(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top"
            , n = "top" === e ? "scrollTop" : "scrollLeft"
            , i = t.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var o = t.ownerDocument.documentElement
                , r = t.ownerDocument.scrollingElement || o;
            return r[n]
        }
        return t[n]
    }
    function M(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
            , i = H(e, "top")
            , o = H(e, "left")
            , r = n ? -1 : 1;
        return t.top += i * r,
            t.bottom += i * r,
            t.left += o * r,
            t.right += o * r,
            t
    }
    function B(t, e) {
        var n = "x" === e ? "Left" : "Top"
            , i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"])
    }
    function q(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], L(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
    }
    function Q(t) {
        var e = t.body
            , n = t.documentElement
            , i = L(10) && getComputedStyle(n);
        return {
            height: q("Height", e, n, i),
            width: q("Width", e, n, i)
        }
    }
    var W = function (t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
        , U = function () {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i)
                }
            }
            return function (e, n, i) {
                return n && t(e.prototype, n),
                    i && t(e, i),
                    e
            }
        }()
        , V = function (t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
                t
        }
        , Y = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }
        ;
    function z(t) {
        return Y({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }
    function X(t) {
        var e = {};
        try {
            if (L(10)) {
                e = t.getBoundingClientRect();
                var n = H(t, "top")
                    , i = H(t, "left");
                e.top += n,
                    e.left += i,
                    e.bottom += n,
                    e.right += i
            } else
                e = t.getBoundingClientRect()
        } catch (t) { }
        var o = {
            left: e.left,
            top: e.top,
            width: e.right - e.left,
            height: e.bottom - e.top
        }
            , r = "HTML" === t.nodeName ? Q(t.ownerDocument) : {}
            , s = r.width || t.clientWidth || o.width
            , a = r.height || t.clientHeight || o.height
            , l = t.offsetWidth - s
            , c = t.offsetHeight - a;
        if (l || c) {
            var h = k(t);
            l -= B(h, "x"),
                c -= B(h, "y"),
                o.width -= l,
                o.height -= c
        }
        return z(o)
    }
    function K(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
            , i = L(10)
            , o = "HTML" === e.nodeName
            , r = X(t)
            , s = X(e)
            , a = I(t)
            , l = k(e)
            , c = parseFloat(l.borderTopWidth)
            , h = parseFloat(l.borderLeftWidth);
        n && o && (s.top = Math.max(s.top, 0),
            s.left = Math.max(s.left, 0));
        var u = z({
            top: r.top - s.top - c,
            left: r.left - s.left - h,
            width: r.width,
            height: r.height
        });
        if (u.marginTop = 0,
            u.marginLeft = 0,
            !i && o) {
            var f = parseFloat(l.marginTop)
                , d = parseFloat(l.marginLeft);
            u.top -= c - f,
                u.bottom -= c - f,
                u.left -= h - d,
                u.right -= h - d,
                u.marginTop = f,
                u.marginLeft = d
        }
        return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (u = M(u, e)),
            u
    }
    function G(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            , n = t.ownerDocument.documentElement
            , i = K(t, n)
            , o = Math.max(n.clientWidth, window.innerWidth || 0)
            , r = Math.max(n.clientHeight, window.innerHeight || 0)
            , s = e ? 0 : H(n)
            , a = e ? 0 : H(n, "left")
            , l = {
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: o,
                height: r
            };
        return z(l)
    }
    function $(t) {
        var e = t.nodeName;
        if ("BODY" === e || "HTML" === e)
            return !1;
        if ("fixed" === k(t, "position"))
            return !0;
        var n = A(t);
        return !!n && $(n)
    }
    function J(t) {
        if (!t || !t.parentElement || L())
            return document.documentElement;
        for (var e = t.parentElement; e && "none" === k(e, "transform");)
            e = e.parentElement;
        return e || document.documentElement
    }
    function Z(t, e, n, i) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
            , r = {
                top: 0,
                left: 0
            }
            , s = o ? J(t) : R(t, O(e));
        if ("viewport" === i)
            r = G(s, o);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = I(A(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
            var l = K(a, s, o);
            if ("HTML" !== a.nodeName || $(s))
                r = l;
            else {
                var c = Q(t.ownerDocument)
                    , h = c.height
                    , u = c.width;
                r.top += l.top - l.marginTop,
                    r.bottom = h + l.top,
                    r.left += l.left - l.marginLeft,
                    r.right = u + l.left
            }
        }
        var f = "number" == typeof (n = n || 0);
        return r.left += f ? n : n.left || 0,
            r.top += f ? n : n.top || 0,
            r.right -= f ? n : n.right || 0,
            r.bottom -= f ? n : n.bottom || 0,
            r
    }
    function tt(t) {
        return t.width * t.height
    }
    function et(t, e, n, i, o) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto"))
            return t;
        var s = Z(n, i, r, o)
            , a = {
                top: {
                    width: s.width,
                    height: e.top - s.top
                },
                right: {
                    width: s.right - e.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - e.bottom
                },
                left: {
                    width: e.left - s.left,
                    height: s.height
                }
            }
            , l = Object.keys(a).map((function (t) {
                return Y({
                    key: t
                }, a[t], {
                    area: tt(a[t])
                })
            }
            )).sort((function (t, e) {
                return e.area - t.area
            }
            ))
            , c = l.filter((function (t) {
                var e = t.width
                    , i = t.height;
                return e >= n.clientWidth && i >= n.clientHeight
            }
            ))
            , h = c.length > 0 ? c[0].key : l[0].key
            , u = t.split("-")[1];
        return h + (u ? "-" + u : "")
    }
    function nt(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
            , o = i ? J(e) : R(e, O(n));
        return K(n, o, i)
    }
    function it(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t)
            , n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0)
            , i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }
    function ot(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, (function (t) {
            return e[t]
        }
        ))
    }
    function rt(t, e, n) {
        n = n.split("-")[0];
        var i = it(t)
            , o = {
                width: i.width,
                height: i.height
            }
            , r = -1 !== ["right", "left"].indexOf(n)
            , s = r ? "top" : "left"
            , a = r ? "left" : "top"
            , l = r ? "height" : "width"
            , c = r ? "width" : "height";
        return o[s] = e[s] + e[l] / 2 - i[l] / 2,
            o[a] = n === a ? e[a] - i[c] : e[ot(a)],
            o
    }
    function st(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }
    function at(t, e, n) {
        return (void 0 === n ? t : t.slice(0, function (t, e, n) {
            if (Array.prototype.findIndex)
                return t.findIndex((function (t) {
                    return t[e] === n
                }
                ));
            var i = st(t, (function (t) {
                return t[e] === n
            }
            ));
            return t.indexOf(i)
        }(t, "name", n))).forEach((function (t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t.function || t.fn;
            t.enabled && N(n) && (e.offsets.popper = z(e.offsets.popper),
                e.offsets.reference = z(e.offsets.reference),
                e = n(e, t))
        }
        )),
            e
    }
    function lt() {
        if (!this.state.isDestroyed) {
            var t = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            t.offsets.reference = nt(this.state, this.popper, this.reference, this.options.positionFixed),
                t.placement = et(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                t.originalPlacement = t.placement,
                t.positionFixed = this.options.positionFixed,
                t.offsets.popper = rt(this.popper, t.offsets.reference, t.placement),
                t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                t = at(this.modifiers, t),
                this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0,
                    this.options.onCreate(t))
        }
    }
    function ct(t, e) {
        return t.some((function (t) {
            var n = t.name;
            return t.enabled && n === e
        }
        ))
    }
    function ht(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var o = e[i]
                , r = o ? "" + o + n : t;
            if ("undefined" != typeof document.body.style[r])
                return r
        }
        return null
    }
    function ut() {
        return this.state.isDestroyed = !0,
            ct(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                this.popper.style.position = "",
                this.popper.style.top = "",
                this.popper.style.left = "",
                this.popper.style.right = "",
                this.popper.style.bottom = "",
                this.popper.style.willChange = "",
                this.popper.style[ht("transform")] = ""),
            this.disableEventListeners(),
            this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
            this
    }
    function ft(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }
    function dt(t, e, n, i) {
        n.updateBound = i,
            ft(t).addEventListener("resize", n.updateBound, {
                passive: !0
            });
        var o = I(t);
        return function t(e, n, i, o) {
            var r = "BODY" === e.nodeName
                , s = r ? e.ownerDocument.defaultView : e;
            s.addEventListener(n, i, {
                passive: !0
            }),
                r || t(I(s.parentNode), n, i, o),
                o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents),
            n.scrollElement = o,
            n.eventsEnabled = !0,
            n
    }
    function pt() {
        this.state.eventsEnabled || (this.state = dt(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function mt() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
            this.state = (t = this.reference,
                e = this.state,
                ft(t).removeEventListener("resize", e.updateBound),
                e.scrollParents.forEach((function (t) {
                    t.removeEventListener("scroll", e.updateBound)
                }
                )),
                e.updateBound = null,
                e.scrollParents = [],
                e.scrollElement = null,
                e.eventsEnabled = !1,
                e))
    }
    function gt(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }
    function _t(t, e) {
        Object.keys(e).forEach((function (n) {
            var i = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && gt(e[n]) && (i = "px"),
                t.style[n] = e[n] + i
        }
        ))
    }
    var vt = C && /Firefox/i.test(navigator.userAgent);
    function bt(t, e, n) {
        var i = st(t, (function (t) {
            return t.name === e
        }
        ))
            , o = !!i && t.some((function (t) {
                return t.name === n && t.enabled && t.order < i.order
            }
            ));
        if (!o) {
            var r = "`" + e + "`"
                , s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }
    var yt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
        , wt = yt.slice(3);
    function Et(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            , n = wt.indexOf(t)
            , i = wt.slice(n + 1).concat(wt.slice(0, n));
        return e ? i.reverse() : i
    }
    var Tt = "flip"
        , Ct = "clockwise"
        , St = "counterclockwise";
    function Dt(t, e, n, i) {
        var o = [0, 0]
            , r = -1 !== ["right", "left"].indexOf(i)
            , s = t.split(/(\+|\-)/).map((function (t) {
                return t.trim()
            }
            ))
            , a = s.indexOf(st(s, (function (t) {
                return -1 !== t.search(/,|\s/)
            }
            )));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/
            , c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (c = c.map((function (t, i) {
            var o = (1 === i ? !r : r) ? "height" : "width"
                , s = !1;
            return t.reduce((function (t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e,
                    s = !0,
                    t) : s ? (t[t.length - 1] += e,
                        s = !1,
                        t) : t.concat(e)
            }
            ), []).map((function (t) {
                return function (t, e, n, i) {
                    var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                        , r = +o[1]
                        , s = o[2];
                    if (!r)
                        return t;
                    if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return z(a)[e] / 100 * r
                    }
                    if ("vh" === s || "vw" === s) {
                        return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r
                    }
                    return r
                }(t, o, e, n)
            }
            ))
        }
        ))).forEach((function (t, e) {
            t.forEach((function (n, i) {
                gt(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1))
            }
            ))
        }
        )),
            o
    }
    var Nt = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () { },
        onUpdate: function () { },
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function (t) {
                    var e = t.placement
                        , n = e.split("-")[0]
                        , i = e.split("-")[1];
                    if (i) {
                        var o = t.offsets
                            , r = o.reference
                            , s = o.popper
                            , a = -1 !== ["bottom", "top"].indexOf(n)
                            , l = a ? "left" : "top"
                            , c = a ? "width" : "height"
                            , h = {
                                start: V({}, l, r[l]),
                                end: V({}, l, r[l] + r[c] - s[c])
                            };
                        t.offsets.popper = Y({}, s, h[i])
                    }
                    return t
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function (t, e) {
                    var n = e.offset
                        , i = t.placement
                        , o = t.offsets
                        , r = o.popper
                        , s = o.reference
                        , a = i.split("-")[0]
                        , l = void 0;
                    return l = gt(+n) ? [+n, 0] : Dt(n, r, s, a),
                        "left" === a ? (r.top += l[0],
                            r.left -= l[1]) : "right" === a ? (r.top += l[0],
                                r.left += l[1]) : "top" === a ? (r.left += l[0],
                                    r.top -= l[1]) : "bottom" === a && (r.left += l[0],
                                        r.top += l[1]),
                        t.popper = r,
                        t
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function (t, e) {
                    var n = e.boundariesElement || P(t.instance.popper);
                    t.instance.reference === n && (n = P(n));
                    var i = ht("transform")
                        , o = t.instance.popper.style
                        , r = o.top
                        , s = o.left
                        , a = o[i];
                    o.top = "",
                        o.left = "",
                        o[i] = "";
                    var l = Z(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                    o.top = r,
                        o.left = s,
                        o[i] = a,
                        e.boundaries = l;
                    var c = e.priority
                        , h = t.offsets.popper
                        , u = {
                            primary: function (t) {
                                var n = h[t];
                                return h[t] < l[t] && !e.escapeWithReference && (n = Math.max(h[t], l[t])),
                                    V({}, t, n)
                            },
                            secondary: function (t) {
                                var n = "right" === t ? "left" : "top"
                                    , i = h[n];
                                return h[t] > l[t] && !e.escapeWithReference && (i = Math.min(h[n], l[t] - ("right" === t ? h.width : h.height))),
                                    V({}, n, i)
                            }
                        };
                    return c.forEach((function (t) {
                        var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                        h = Y({}, h, u[e](t))
                    }
                    )),
                        t.offsets.popper = h,
                        t
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function (t) {
                    var e = t.offsets
                        , n = e.popper
                        , i = e.reference
                        , o = t.placement.split("-")[0]
                        , r = Math.floor
                        , s = -1 !== ["top", "bottom"].indexOf(o)
                        , a = s ? "right" : "bottom"
                        , l = s ? "left" : "top"
                        , c = s ? "width" : "height";
                    return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
                        n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
                        t
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function (t, e) {
                    var n;
                    if (!bt(t.instance.modifiers, "arrow", "keepTogether"))
                        return t;
                    var i = e.element;
                    if ("string" == typeof i) {
                        if (!(i = t.instance.popper.querySelector(i)))
                            return t
                    } else if (!t.instance.popper.contains(i))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                            t;
                    var o = t.placement.split("-")[0]
                        , r = t.offsets
                        , s = r.popper
                        , a = r.reference
                        , l = -1 !== ["left", "right"].indexOf(o)
                        , c = l ? "height" : "width"
                        , h = l ? "Top" : "Left"
                        , u = h.toLowerCase()
                        , f = l ? "left" : "top"
                        , d = l ? "bottom" : "right"
                        , p = it(i)[c];
                    a[d] - p < s[u] && (t.offsets.popper[u] -= s[u] - (a[d] - p)),
                        a[u] + p > s[d] && (t.offsets.popper[u] += a[u] + p - s[d]),
                        t.offsets.popper = z(t.offsets.popper);
                    var m = a[u] + a[c] / 2 - p / 2
                        , g = k(t.instance.popper)
                        , _ = parseFloat(g["margin" + h])
                        , v = parseFloat(g["border" + h + "Width"])
                        , b = m - t.offsets.popper[u] - _ - v;
                    return b = Math.max(Math.min(s[c] - p, b), 0),
                        t.arrowElement = i,
                        t.offsets.arrow = (V(n = {}, u, Math.round(b)),
                            V(n, f, ""),
                            n),
                        t
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function (t, e) {
                    if (ct(t.instance.modifiers, "inner"))
                        return t;
                    if (t.flipped && t.placement === t.originalPlacement)
                        return t;
                    var n = Z(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed)
                        , i = t.placement.split("-")[0]
                        , o = ot(i)
                        , r = t.placement.split("-")[1] || ""
                        , s = [];
                    switch (e.behavior) {
                        case Tt:
                            s = [i, o];
                            break;
                        case Ct:
                            s = Et(i);
                            break;
                        case St:
                            s = Et(i, !0);
                            break;
                        default:
                            s = e.behavior
                    }
                    return s.forEach((function (a, l) {
                        if (i !== a || s.length === l + 1)
                            return t;
                        i = t.placement.split("-")[0],
                            o = ot(i);
                        var c = t.offsets.popper
                            , h = t.offsets.reference
                            , u = Math.floor
                            , f = "left" === i && u(c.right) > u(h.left) || "right" === i && u(c.left) < u(h.right) || "top" === i && u(c.bottom) > u(h.top) || "bottom" === i && u(c.top) < u(h.bottom)
                            , d = u(c.left) < u(n.left)
                            , p = u(c.right) > u(n.right)
                            , m = u(c.top) < u(n.top)
                            , g = u(c.bottom) > u(n.bottom)
                            , _ = "left" === i && d || "right" === i && p || "top" === i && m || "bottom" === i && g
                            , v = -1 !== ["top", "bottom"].indexOf(i)
                            , b = !!e.flipVariations && (v && "start" === r && d || v && "end" === r && p || !v && "start" === r && m || !v && "end" === r && g)
                            , y = !!e.flipVariationsByContent && (v && "start" === r && p || v && "end" === r && d || !v && "start" === r && g || !v && "end" === r && m)
                            , w = b || y;
                        (f || _ || w) && (t.flipped = !0,
                            (f || _) && (i = s[l + 1]),
                            w && (r = function (t) {
                                return "end" === t ? "start" : "start" === t ? "end" : t
                            }(r)),
                            t.placement = i + (r ? "-" + r : ""),
                            t.offsets.popper = Y({}, t.offsets.popper, rt(t.instance.popper, t.offsets.reference, t.placement)),
                            t = at(t.instance.modifiers, t, "flip"))
                    }
                    )),
                        t
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function (t) {
                    var e = t.placement
                        , n = e.split("-")[0]
                        , i = t.offsets
                        , o = i.popper
                        , r = i.reference
                        , s = -1 !== ["left", "right"].indexOf(n)
                        , a = -1 === ["top", "left"].indexOf(n);
                    return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0),
                        t.placement = ot(e),
                        t.offsets.popper = z(o),
                        t
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function (t) {
                    if (!bt(t.instance.modifiers, "hide", "preventOverflow"))
                        return t;
                    var e = t.offsets.reference
                        , n = st(t.instance.modifiers, (function (t) {
                            return "preventOverflow" === t.name
                        }
                        )).boundaries;
                    if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                        if (!0 === t.hide)
                            return t;
                        t.hide = !0,
                            t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide)
                            return t;
                        t.hide = !1,
                            t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function (t, e) {
                    var n = e.x
                        , i = e.y
                        , o = t.offsets.popper
                        , r = st(t.instance.modifiers, (function (t) {
                            return "applyStyle" === t.name
                        }
                        )).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s = void 0 !== r ? r : e.gpuAcceleration
                        , a = P(t.instance.popper)
                        , l = X(a)
                        , c = {
                            position: o.position
                        }
                        , h = function (t, e) {
                            var n = t.offsets
                                , i = n.popper
                                , o = n.reference
                                , r = Math.round
                                , s = Math.floor
                                , a = function (t) {
                                    return t
                                }
                                , l = r(o.width)
                                , c = r(i.width)
                                , h = -1 !== ["left", "right"].indexOf(t.placement)
                                , u = -1 !== t.placement.indexOf("-")
                                , f = e ? h || u || l % 2 == c % 2 ? r : s : a
                                , d = e ? r : a;
                            return {
                                left: f(l % 2 == 1 && c % 2 == 1 && !u && e ? i.left - 1 : i.left),
                                top: d(i.top),
                                bottom: d(i.bottom),
                                right: f(i.right)
                            }
                        }(t, window.devicePixelRatio < 2 || !vt)
                        , u = "bottom" === n ? "top" : "bottom"
                        , f = "right" === i ? "left" : "right"
                        , d = ht("transform")
                        , p = void 0
                        , m = void 0;
                    if (m = "bottom" === u ? "HTML" === a.nodeName ? -a.clientHeight + h.bottom : -l.height + h.bottom : h.top,
                        p = "right" === f ? "HTML" === a.nodeName ? -a.clientWidth + h.right : -l.width + h.right : h.left,
                        s && d)
                        c[d] = "translate3d(" + p + "px, " + m + "px, 0)",
                            c[u] = 0,
                            c[f] = 0,
                            c.willChange = "transform";
                    else {
                        var g = "bottom" === u ? -1 : 1
                            , _ = "right" === f ? -1 : 1;
                        c[u] = m * g,
                            c[f] = p * _,
                            c.willChange = u + ", " + f
                    }
                    var v = {
                        "x-placement": t.placement
                    };
                    return t.attributes = Y({}, v, t.attributes),
                        t.styles = Y({}, c, t.styles),
                        t.arrowStyles = Y({}, t.offsets.arrow, t.arrowStyles),
                        t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function (t) {
                    var e, n;
                    return _t(t.instance.popper, t.styles),
                        e = t.instance.popper,
                        n = t.attributes,
                        Object.keys(n).forEach((function (t) {
                            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                        }
                        )),
                        t.arrowElement && Object.keys(t.arrowStyles).length && _t(t.arrowElement, t.arrowStyles),
                        t
                },
                onLoad: function (t, e, n, i, o) {
                    var r = nt(o, e, t, n.positionFixed)
                        , s = et(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return e.setAttribute("x-placement", s),
                        _t(e, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }),
                        n
                },
                gpuAcceleration: void 0
            }
        }
    }
        , kt = function () {
            function t(e, n) {
                var i = this
                    , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                W(this, t),
                    this.scheduleUpdate = function () {
                        return requestAnimationFrame(i.update)
                    }
                    ,
                    this.update = D(this.update.bind(this)),
                    this.options = Y({}, t.Defaults, o),
                    this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    },
                    this.reference = e && e.jquery ? e[0] : e,
                    this.popper = n && n.jquery ? n[0] : n,
                    this.options.modifiers = {},
                    Object.keys(Y({}, t.Defaults.modifiers, o.modifiers)).forEach((function (e) {
                        i.options.modifiers[e] = Y({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                    }
                    )),
                    this.modifiers = Object.keys(this.options.modifiers).map((function (t) {
                        return Y({
                            name: t
                        }, i.options.modifiers[t])
                    }
                    )).sort((function (t, e) {
                        return t.order - e.order
                    }
                    )),
                    this.modifiers.forEach((function (t) {
                        t.enabled && N(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                    }
                    )),
                    this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(),
                    this.state.eventsEnabled = r
            }
            return U(t, [{
                key: "update",
                value: function () {
                    return lt.call(this)
                }
            }, {
                key: "destroy",
                value: function () {
                    return ut.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function () {
                    return pt.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function () {
                    return mt.call(this)
                }
            }]),
                t
        }();
    kt.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
        kt.placements = yt,
        kt.Defaults = Nt;
    var At = "dropdown"
        , It = e.fn[At]
        , Ot = new RegExp("38|40|27")
        , xt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        }
        , jt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        }
        , Lt = function () {
            function t(t, e) {
                this._element = t,
                    this._popper = null,
                    this._config = this._getConfig(e),
                    this._menu = this._getMenuElement(),
                    this._inNavbar = this._detectNavbar(),
                    this._addEventListeners()
            }
            var n = t.prototype;
            return n.toggle = function () {
                if (!this._element.disabled && !e(this._element).hasClass("disabled")) {
                    var n = e(this._menu).hasClass("show");
                    t._clearMenus(),
                        n || this.show(!0)
                }
            }
                ,
                n.show = function (n) {
                    if (void 0 === n && (n = !1),
                        !(this._element.disabled || e(this._element).hasClass("disabled") || e(this._menu).hasClass("show"))) {
                        var i = {
                            relatedTarget: this._element
                        }
                            , o = e.Event("show.bs.dropdown", i)
                            , r = t._getParentFromElement(this._element);
                        if (e(r).trigger(o),
                            !o.isDefaultPrevented()) {
                            if (!this._inNavbar && n) {
                                if ("undefined" == typeof kt)
                                    throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var a = this._element;
                                "parent" === this._config.reference ? a = r : s.isElement(this._config.reference) && (a = this._config.reference,
                                    "undefined" != typeof this._config.reference.jquery && (a = this._config.reference[0])),
                                    "scrollParent" !== this._config.boundary && e(r).addClass("position-static"),
                                    this._popper = new kt(a, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === e(r).closest(".navbar-nav").length && e(document.body).children().on("mouseover", null, e.noop),
                                this._element.focus(),
                                this._element.setAttribute("aria-expanded", !0),
                                e(this._menu).toggleClass("show"),
                                e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown", i))
                        }
                    }
                }
                ,
                n.hide = function () {
                    if (!this._element.disabled && !e(this._element).hasClass("disabled") && e(this._menu).hasClass("show")) {
                        var n = {
                            relatedTarget: this._element
                        }
                            , i = e.Event("hide.bs.dropdown", n)
                            , o = t._getParentFromElement(this._element);
                        e(o).trigger(i),
                            i.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                                e(this._menu).toggleClass("show"),
                                e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown", n)))
                    }
                }
                ,
                n.dispose = function () {
                    e.removeData(this._element, "bs.dropdown"),
                        e(this._element).off(".bs.dropdown"),
                        this._element = null,
                        this._menu = null,
                        null !== this._popper && (this._popper.destroy(),
                            this._popper = null)
                }
                ,
                n.update = function () {
                    this._inNavbar = this._detectNavbar(),
                        null !== this._popper && this._popper.scheduleUpdate()
                }
                ,
                n._addEventListeners = function () {
                    var t = this;
                    e(this._element).on("click.bs.dropdown", (function (e) {
                        e.preventDefault(),
                            e.stopPropagation(),
                            t.toggle()
                    }
                    ))
                }
                ,
                n._getConfig = function (t) {
                    return t = o({}, this.constructor.Default, e(this._element).data(), t),
                        s.typeCheckConfig(At, t, this.constructor.DefaultType),
                        t
                }
                ,
                n._getMenuElement = function () {
                    if (!this._menu) {
                        var e = t._getParentFromElement(this._element);
                        e && (this._menu = e.querySelector(".dropdown-menu"))
                    }
                    return this._menu
                }
                ,
                n._getPlacement = function () {
                    var t = e(this._element.parentNode)
                        , n = "bottom-start";
                    return t.hasClass("dropup") ? n = e(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : e(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"),
                        n
                }
                ,
                n._detectNavbar = function () {
                    return e(this._element).closest(".navbar").length > 0
                }
                ,
                n._getOffset = function () {
                    var t = this
                        , e = {};
                    return "function" == typeof this._config.offset ? e.fn = function (e) {
                        return e.offsets = o({}, e.offsets, t._config.offset(e.offsets, t._element) || {}),
                            e
                    }
                        : e.offset = this._config.offset,
                        e
                }
                ,
                n._getPopperConfig = function () {
                    var t = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (t.modifiers.applyStyle = {
                        enabled: !1
                    }),
                        o({}, t, this._config.popperConfig)
                }
                ,
                t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this).data("bs.dropdown");
                        if (i || (i = new t(this, "object" == typeof n ? n : null),
                            e(this).data("bs.dropdown", i)),
                            "string" == typeof n) {
                            if ("undefined" == typeof i[n])
                                throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }
                    ))
                }
                ,
                t._clearMenus = function (n) {
                    if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                        for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), o = 0, r = i.length; o < r; o++) {
                            var s = t._getParentFromElement(i[o])
                                , a = e(i[o]).data("bs.dropdown")
                                , l = {
                                    relatedTarget: i[o]
                                };
                            if (n && "click" === n.type && (l.clickEvent = n),
                                a) {
                                var c = a._menu;
                                if (e(s).hasClass("show") && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && e.contains(s, n.target))) {
                                    var h = e.Event("hide.bs.dropdown", l);
                                    e(s).trigger(h),
                                        h.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                                            i[o].setAttribute("aria-expanded", "false"),
                                            a._popper && a._popper.destroy(),
                                            e(c).removeClass("show"),
                                            e(s).removeClass("show").trigger(e.Event("hidden.bs.dropdown", l)))
                                }
                            }
                        }
                }
                ,
                t._getParentFromElement = function (t) {
                    var e, n = s.getSelectorFromElement(t);
                    return n && (e = document.querySelector(n)),
                        e || t.parentNode
                }
                ,
                t._dataApiKeydownHandler = function (n) {
                    if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || e(n.target).closest(".dropdown-menu").length) : !Ot.test(n.which)) && !this.disabled && !e(this).hasClass("disabled")) {
                        var i = t._getParentFromElement(this)
                            , o = e(i).hasClass("show");
                        if (o || 27 !== n.which) {
                            if (n.preventDefault(),
                                n.stopPropagation(),
                                !o || o && (27 === n.which || 32 === n.which))
                                return 27 === n.which && e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"),
                                    void e(this).trigger("click");
                            var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function (t) {
                                return e(t).is(":visible")
                            }
                            ));
                            if (0 !== r.length) {
                                var s = r.indexOf(n.target);
                                38 === n.which && s > 0 && s--,
                                    40 === n.which && s < r.length - 1 && s++,
                                    s < 0 && (s = 0),
                                    r[s].focus()
                            }
                        }
                    }
                }
                ,
                i(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.2"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return xt
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return jt
                    }
                }]),
                t
        }();
    e(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', Lt._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Lt._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Lt._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function (t) {
        t.preventDefault(),
            t.stopPropagation(),
            Lt._jQueryInterface.call(e(this), "toggle")
    }
    )).on("click.bs.dropdown.data-api", ".dropdown form", (function (t) {
        t.stopPropagation()
    }
    )),
        e.fn[At] = Lt._jQueryInterface,
        e.fn[At].Constructor = Lt,
        e.fn[At].noConflict = function () {
            return e.fn[At] = It,
                Lt._jQueryInterface
        }
        ;
    var Pt = e.fn.modal
        , Ft = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }
        , Rt = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }
        , Ht = function () {
            function t(t, e) {
                this._config = this._getConfig(e),
                    this._element = t,
                    this._dialog = t.querySelector(".modal-dialog"),
                    this._backdrop = null,
                    this._isShown = !1,
                    this._isBodyOverflowing = !1,
                    this._ignoreBackdropClick = !1,
                    this._isTransitioning = !1,
                    this._scrollbarWidth = 0
            }
            var n = t.prototype;
            return n.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }
                ,
                n.show = function (t) {
                    var n = this;
                    if (!this._isShown && !this._isTransitioning) {
                        e(this._element).hasClass("fade") && (this._isTransitioning = !0);
                        var i = e.Event("show.bs.modal", {
                            relatedTarget: t
                        });
                        e(this._element).trigger(i),
                            this._isShown || i.isDefaultPrevented() || (this._isShown = !0,
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                e(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function (t) {
                                    return n.hide(t)
                                }
                                )),
                                e(this._dialog).on("mousedown.dismiss.bs.modal", (function () {
                                    e(n._element).one("mouseup.dismiss.bs.modal", (function (t) {
                                        e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                    }
                                    ))
                                }
                                )),
                                this._showBackdrop((function () {
                                    return n._showElement(t)
                                }
                                )))
                    }
                }
                ,
                n.hide = function (t) {
                    var n = this;
                    if (t && t.preventDefault(),
                        this._isShown && !this._isTransitioning) {
                        var i = e.Event("hide.bs.modal");
                        if (e(this._element).trigger(i),
                            this._isShown && !i.isDefaultPrevented()) {
                            this._isShown = !1;
                            var o = e(this._element).hasClass("fade");
                            if (o && (this._isTransitioning = !0),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                e(document).off("focusin.bs.modal"),
                                e(this._element).removeClass("show"),
                                e(this._element).off("click.dismiss.bs.modal"),
                                e(this._dialog).off("mousedown.dismiss.bs.modal"),
                                o) {
                                var r = s.getTransitionDurationFromElement(this._element);
                                e(this._element).one(s.TRANSITION_END, (function (t) {
                                    return n._hideModal(t)
                                }
                                )).emulateTransitionEnd(r)
                            } else
                                this._hideModal()
                        }
                    }
                }
                ,
                n.dispose = function () {
                    [window, this._element, this._dialog].forEach((function (t) {
                        return e(t).off(".bs.modal")
                    }
                    )),
                        e(document).off("focusin.bs.modal"),
                        e.removeData(this._element, "bs.modal"),
                        this._config = null,
                        this._element = null,
                        this._dialog = null,
                        this._backdrop = null,
                        this._isShown = null,
                        this._isBodyOverflowing = null,
                        this._ignoreBackdropClick = null,
                        this._isTransitioning = null,
                        this._scrollbarWidth = null
                }
                ,
                n.handleUpdate = function () {
                    this._adjustDialog()
                }
                ,
                n._getConfig = function (t) {
                    return t = o({}, Ft, t),
                        s.typeCheckConfig("modal", t, Rt),
                        t
                }
                ,
                n._triggerBackdropTransition = function () {
                    var t = this;
                    if ("static" === this._config.backdrop) {
                        var n = e.Event("hidePrevented.bs.modal");
                        if (e(this._element).trigger(n),
                            n.defaultPrevented)
                            return;
                        var i = this._element.scrollHeight > document.documentElement.clientHeight;
                        i || (this._element.style.overflowY = "hidden"),
                            this._element.classList.add("modal-static");
                        var o = s.getTransitionDurationFromElement(this._dialog);
                        e(this._element).off(s.TRANSITION_END),
                            e(this._element).one(s.TRANSITION_END, (function () {
                                t._element.classList.remove("modal-static"),
                                    i || e(t._element).one(s.TRANSITION_END, (function () {
                                        t._element.style.overflowY = ""
                                    }
                                    )).emulateTransitionEnd(t._element, o)
                            }
                            )).emulateTransitionEnd(o),
                            this._element.focus()
                    } else
                        this.hide()
                }
                ,
                n._showElement = function (t) {
                    var n = this
                        , i = e(this._element).hasClass("fade")
                        , o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                        this._element.style.display = "block",
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        e(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0,
                        i && s.reflow(this._element),
                        e(this._element).addClass("show"),
                        this._config.focus && this._enforceFocus();
                    var r = e.Event("shown.bs.modal", {
                        relatedTarget: t
                    })
                        , a = function () {
                            n._config.focus && n._element.focus(),
                                n._isTransitioning = !1,
                                e(n._element).trigger(r)
                        };
                    if (i) {
                        var l = s.getTransitionDurationFromElement(this._dialog);
                        e(this._dialog).one(s.TRANSITION_END, a).emulateTransitionEnd(l)
                    } else
                        a()
                }
                ,
                n._enforceFocus = function () {
                    var t = this;
                    e(document).off("focusin.bs.modal").on("focusin.bs.modal", (function (n) {
                        document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                    }
                    ))
                }
                ,
                n._setEscapeEvent = function () {
                    var t = this;
                    this._isShown ? e(this._element).on("keydown.dismiss.bs.modal", (function (e) {
                        t._config.keyboard && 27 === e.which ? (e.preventDefault(),
                            t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition()
                    }
                    )) : this._isShown || e(this._element).off("keydown.dismiss.bs.modal")
                }
                ,
                n._setResizeEvent = function () {
                    var t = this;
                    this._isShown ? e(window).on("resize.bs.modal", (function (e) {
                        return t.handleUpdate(e)
                    }
                    )) : e(window).off("resize.bs.modal")
                }
                ,
                n._hideModal = function () {
                    var t = this;
                    this._element.style.display = "none",
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        this._isTransitioning = !1,
                        this._showBackdrop((function () {
                            e(document.body).removeClass("modal-open"),
                                t._resetAdjustments(),
                                t._resetScrollbar(),
                                e(t._element).trigger("hidden.bs.modal")
                        }
                        ))
                }
                ,
                n._removeBackdrop = function () {
                    this._backdrop && (e(this._backdrop).remove(),
                        this._backdrop = null)
                }
                ,
                n._showBackdrop = function (t) {
                    var n = this
                        , i = e(this._element).hasClass("fade") ? "fade" : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"),
                            this._backdrop.className = "modal-backdrop",
                            i && this._backdrop.classList.add(i),
                            e(this._backdrop).appendTo(document.body),
                            e(this._element).on("click.dismiss.bs.modal", (function (t) {
                                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && n._triggerBackdropTransition()
                            }
                            )),
                            i && s.reflow(this._backdrop),
                            e(this._backdrop).addClass("show"),
                            !t)
                            return;
                        if (!i)
                            return void t();
                        var o = s.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(o)
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass("show");
                        var r = function () {
                            n._removeBackdrop(),
                                t && t()
                        };
                        if (e(this._element).hasClass("fade")) {
                            var a = s.getTransitionDurationFromElement(this._backdrop);
                            e(this._backdrop).one(s.TRANSITION_END, r).emulateTransitionEnd(a)
                        } else
                            r()
                    } else
                        t && t()
                }
                ,
                n._adjustDialog = function () {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                        this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }
                ,
                n._resetAdjustments = function () {
                    this._element.style.paddingLeft = "",
                        this._element.style.paddingRight = ""
                }
                ,
                n._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth,
                        this._scrollbarWidth = this._getScrollbarWidth()
                }
                ,
                n._setScrollbar = function () {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"))
                            , i = [].slice.call(document.querySelectorAll(".sticky-top"));
                        e(n).each((function (n, i) {
                            var o = i.style.paddingRight
                                , r = e(i).css("padding-right");
                            e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
                        }
                        )),
                            e(i).each((function (n, i) {
                                var o = i.style.marginRight
                                    , r = e(i).css("margin-right");
                                e(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
                            }
                            ));
                        var o = document.body.style.paddingRight
                            , r = e(document.body).css("padding-right");
                        e(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                    }
                    e(document.body).addClass("modal-open")
                }
                ,
                n._resetScrollbar = function () {
                    var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                    e(t).each((function (t, n) {
                        var i = e(n).data("padding-right");
                        e(n).removeData("padding-right"),
                            n.style.paddingRight = i || ""
                    }
                    ));
                    var n = [].slice.call(document.querySelectorAll(".sticky-top"));
                    e(n).each((function (t, n) {
                        var i = e(n).data("margin-right");
                        "undefined" != typeof i && e(n).css("margin-right", i).removeData("margin-right")
                    }
                    ));
                    var i = e(document.body).data("padding-right");
                    e(document.body).removeData("padding-right"),
                        document.body.style.paddingRight = i || ""
                }
                ,
                n._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    t.className = "modal-scrollbar-measure",
                        document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t),
                        e
                }
                ,
                t._jQueryInterface = function (n, i) {
                    return this.each((function () {
                        var r = e(this).data("bs.modal")
                            , s = o({}, Ft, e(this).data(), "object" == typeof n && n ? n : {});
                        if (r || (r = new t(this, s),
                            e(this).data("bs.modal", r)),
                            "string" == typeof n) {
                            if ("undefined" == typeof r[n])
                                throw new TypeError('No method named "' + n + '"');
                            r[n](i)
                        } else
                            s.show && r.show(i)
                    }
                    ))
                }
                ,
                i(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.2"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Ft
                    }
                }]),
                t
        }();
    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function (t) {
        var n, i = this, r = s.getSelectorFromElement(this);
        r && (n = document.querySelector(r));
        var a = e(n).data("bs.modal") ? "toggle" : o({}, e(n).data(), e(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var l = e(n).one("show.bs.modal", (function (t) {
            t.isDefaultPrevented() || l.one("hidden.bs.modal", (function () {
                e(i).is(":visible") && i.focus()
            }
            ))
        }
        ));
        Ht._jQueryInterface.call(e(n), a, this)
    }
    )),
        e.fn.modal = Ht._jQueryInterface,
        e.fn.modal.Constructor = Ht,
        e.fn.modal.noConflict = function () {
            return e.fn.modal = Pt,
                Ht._jQueryInterface
        }
        ;
    var Mt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
        , Bt = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }
        , qt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi
        , Qt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function Wt(t, e, n) {
        if (0 === t.length)
            return t;
        if (n && "function" == typeof n)
            return n(t);
        for (var i = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(i.body.querySelectorAll("*")), s = function (t, n) {
            var i = r[t]
                , s = i.nodeName.toLowerCase();
            if (-1 === o.indexOf(i.nodeName.toLowerCase()))
                return i.parentNode.removeChild(i),
                    "continue";
            var a = [].slice.call(i.attributes)
                , l = [].concat(e["*"] || [], e[s] || []);
            a.forEach((function (t) {
                (function (t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(n))
                        return -1 === Mt.indexOf(n) || Boolean(t.nodeValue.match(qt) || t.nodeValue.match(Qt));
                    for (var i = e.filter((function (t) {
                        return t instanceof RegExp
                    }
                    )), o = 0, r = i.length; o < r; o++)
                        if (n.match(i[o]))
                            return !0;
                    return !1
                }
                )(t, l) || i.removeAttribute(t.nodeName)
            }
            ))
        }, a = 0, l = r.length; a < l; a++)
            s(a);
        return i.body.innerHTML
    }
    var Ut = "tooltip"
        , Vt = e.fn[Ut]
        , Yt = new RegExp("(^|\\s)bs-tooltip\\S+", "g")
        , zt = ["sanitize", "whiteList", "sanitizeFn"]
        , Xt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        }
        , Kt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }
        , Gt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Bt,
            popperConfig: null
        }
        , $t = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        }
        , Jt = function () {
            function t(t, e) {
                if ("undefined" == typeof kt)
                    throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0,
                    this._timeout = 0,
                    this._hoverState = "",
                    this._activeTrigger = {},
                    this._popper = null,
                    this.element = t,
                    this.config = this._getConfig(e),
                    this.tip = null,
                    this._setListeners()
            }
            var n = t.prototype;
            return n.enable = function () {
                this._isEnabled = !0
            }
                ,
                n.disable = function () {
                    this._isEnabled = !1
                }
                ,
                n.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }
                ,
                n.toggle = function (t) {
                    if (this._isEnabled)
                        if (t) {
                            var n = this.constructor.DATA_KEY
                                , i = e(t.currentTarget).data(n);
                            i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()),
                                e(t.currentTarget).data(n, i)),
                                i._activeTrigger.click = !i._activeTrigger.click,
                                i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                        } else {
                            if (e(this.getTipElement()).hasClass("show"))
                                return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }
                ,
                n.dispose = function () {
                    clearTimeout(this._timeout),
                        e.removeData(this.element, this.constructor.DATA_KEY),
                        e(this.element).off(this.constructor.EVENT_KEY),
                        e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
                        this.tip && e(this.tip).remove(),
                        this._isEnabled = null,
                        this._timeout = null,
                        this._hoverState = null,
                        this._activeTrigger = null,
                        this._popper && this._popper.destroy(),
                        this._popper = null,
                        this.element = null,
                        this.config = null,
                        this.tip = null
                }
                ,
                n.show = function () {
                    var t = this;
                    if ("none" === e(this.element).css("display"))
                        throw new Error("Please use show on visible elements");
                    var n = e.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        e(this.element).trigger(n);
                        var i = s.findShadowRoot(this.element)
                            , o = e.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                        if (n.isDefaultPrevented() || !o)
                            return;
                        var r = this.getTipElement()
                            , a = s.getUID(this.constructor.NAME);
                        r.setAttribute("id", a),
                            this.element.setAttribute("aria-describedby", a),
                            this.setContent(),
                            this.config.animation && e(r).addClass("fade");
                        var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                            , c = this._getAttachment(l);
                        this.addAttachmentClass(c);
                        var h = this._getContainer();
                        e(r).data(this.constructor.DATA_KEY, this),
                            e.contains(this.element.ownerDocument.documentElement, this.tip) || e(r).appendTo(h),
                            e(this.element).trigger(this.constructor.Event.INSERTED),
                            this._popper = new kt(this.element, r, this._getPopperConfig(c)),
                            e(r).addClass("show"),
                            "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                        var u = function () {
                            t.config.animation && t._fixTransition();
                            var n = t._hoverState;
                            t._hoverState = null,
                                e(t.element).trigger(t.constructor.Event.SHOWN),
                                "out" === n && t._leave(null, t)
                        };
                        if (e(this.tip).hasClass("fade")) {
                            var f = s.getTransitionDurationFromElement(this.tip);
                            e(this.tip).one(s.TRANSITION_END, u).emulateTransitionEnd(f)
                        } else
                            u()
                    }
                }
                ,
                n.hide = function (t) {
                    var n = this
                        , i = this.getTipElement()
                        , o = e.Event(this.constructor.Event.HIDE)
                        , r = function () {
                            "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i),
                                n._cleanTipClass(),
                                n.element.removeAttribute("aria-describedby"),
                                e(n.element).trigger(n.constructor.Event.HIDDEN),
                                null !== n._popper && n._popper.destroy(),
                                t && t()
                        };
                    if (e(this.element).trigger(o),
                        !o.isDefaultPrevented()) {
                        if (e(i).removeClass("show"),
                            "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop),
                            this._activeTrigger.click = !1,
                            this._activeTrigger.focus = !1,
                            this._activeTrigger.hover = !1,
                            e(this.tip).hasClass("fade")) {
                            var a = s.getTransitionDurationFromElement(i);
                            e(i).one(s.TRANSITION_END, r).emulateTransitionEnd(a)
                        } else
                            r();
                        this._hoverState = ""
                    }
                }
                ,
                n.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }
                ,
                n.isWithContent = function () {
                    return Boolean(this.getTitle())
                }
                ,
                n.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-tooltip-" + t)
                }
                ,
                n.getTipElement = function () {
                    return this.tip = this.tip || e(this.config.template)[0],
                        this.tip
                }
                ,
                n.setContent = function () {
                    var t = this.getTipElement();
                    this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()),
                        e(t).removeClass("fade show")
                }
                ,
                n.setElementContent = function (t, n) {
                    "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Wt(n, this.config.whiteList, this.config.sanitizeFn)),
                        t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())
                }
                ,
                n.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                        t
                }
                ,
                n._getPopperConfig = function (t) {
                    var e = this;
                    return o({}, {
                        placement: t,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function (t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }, this.config.popperConfig)
                }
                ,
                n._getOffset = function () {
                    var t = this
                        , e = {};
                    return "function" == typeof this.config.offset ? e.fn = function (e) {
                        return e.offsets = o({}, e.offsets, t.config.offset(e.offsets, t.element) || {}),
                            e
                    }
                        : e.offset = this.config.offset,
                        e
                }
                ,
                n._getContainer = function () {
                    return !1 === this.config.container ? document.body : s.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
                }
                ,
                n._getAttachment = function (t) {
                    return Kt[t.toUpperCase()]
                }
                ,
                n._setListeners = function () {
                    var t = this;
                    this.config.trigger.split(" ").forEach((function (n) {
                        if ("click" === n)
                            e(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function (e) {
                                return t.toggle(e)
                            }
                            ));
                        else if ("manual" !== n) {
                            var i = "hover" === n ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN
                                , o = "hover" === n ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                            e(t.element).on(i, t.config.selector, (function (e) {
                                return t._enter(e)
                            }
                            )).on(o, t.config.selector, (function (e) {
                                return t._leave(e)
                            }
                            ))
                        }
                    }
                    )),
                        this._hideModalHandler = function () {
                            t.element && t.hide()
                        }
                        ,
                        e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
                        this.config.selector ? this.config = o({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                }
                ,
                n._fixTitle = function () {
                    var t = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                        this.element.setAttribute("title", ""))
                }
                ,
                n._enter = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()),
                        e(t.currentTarget).data(i, n)),
                        t && (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
                        e(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout),
                            n._hoverState = "show",
                            n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function () {
                                "show" === n._hoverState && n.show()
                            }
                            ), n.config.delay.show) : n.show())
                }
                ,
                n._leave = function (t, n) {
                    var i = this.constructor.DATA_KEY;
                    (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()),
                        e(t.currentTarget).data(i, n)),
                        t && (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1),
                        n._isWithActiveTrigger() || (clearTimeout(n._timeout),
                            n._hoverState = "out",
                            n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function () {
                                "out" === n._hoverState && n.hide()
                            }
                            ), n.config.delay.hide) : n.hide())
                }
                ,
                n._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger)
                        if (this._activeTrigger[t])
                            return !0;
                    return !1
                }
                ,
                n._getConfig = function (t) {
                    var n = e(this.element).data();
                    return Object.keys(n).forEach((function (t) {
                        -1 !== zt.indexOf(t) && delete n[t]
                    }
                    )),
                        "number" == typeof (t = o({}, this.constructor.Default, n, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                            show: t.delay,
                            hide: t.delay
                        }),
                        "number" == typeof t.title && (t.title = t.title.toString()),
                        "number" == typeof t.content && (t.content = t.content.toString()),
                        s.typeCheckConfig(Ut, t, this.constructor.DefaultType),
                        t.sanitize && (t.template = Wt(t.template, t.whiteList, t.sanitizeFn)),
                        t
                }
                ,
                n._getDelegateConfig = function () {
                    var t = {};
                    if (this.config)
                        for (var e in this.config)
                            this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t
                }
                ,
                n._cleanTipClass = function () {
                    var t = e(this.getTipElement())
                        , n = t.attr("class").match(Yt);
                    null !== n && n.length && t.removeClass(n.join(""))
                }
                ,
                n._handlePopperPlacementChange = function (t) {
                    this.tip = t.instance.popper,
                        this._cleanTipClass(),
                        this.addAttachmentClass(this._getAttachment(t.placement))
                }
                ,
                n._fixTransition = function () {
                    var t = this.getTipElement()
                        , n = this.config.animation;
                    null === t.getAttribute("x-placement") && (e(t).removeClass("fade"),
                        this.config.animation = !1,
                        this.hide(),
                        this.show(),
                        this.config.animation = n)
                }
                ,
                t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this).data("bs.tooltip")
                            , o = "object" == typeof n && n;
                        if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this, o),
                            e(this).data("bs.tooltip", i)),
                            "string" == typeof n)) {
                            if ("undefined" == typeof i[n])
                                throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }
                    ))
                }
                ,
                i(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.2"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Gt
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return Ut
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return "bs.tooltip"
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return $t
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return ".bs.tooltip"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return Xt
                    }
                }]),
                t
        }();
    e.fn[Ut] = Jt._jQueryInterface,
        e.fn[Ut].Constructor = Jt,
        e.fn[Ut].noConflict = function () {
            return e.fn[Ut] = Vt,
                Jt._jQueryInterface
        }
        ;
    var Zt = "popover"
        , te = e.fn[Zt]
        , ee = new RegExp("(^|\\s)bs-popover\\S+", "g")
        , ne = o({}, Jt.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
        , ie = o({}, Jt.DefaultType, {
            content: "(string|element|function)"
        })
        , oe = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        }
        , re = function (t) {
            var n, o;
            function r() {
                return t.apply(this, arguments) || this
            }
            o = t,
                (n = r).prototype = Object.create(o.prototype),
                n.prototype.constructor = n,
                n.__proto__ = o;
            var s = r.prototype;
            return s.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }
                ,
                s.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-popover-" + t)
                }
                ,
                s.getTipElement = function () {
                    return this.tip = this.tip || e(this.config.template)[0],
                        this.tip
                }
                ,
                s.setContent = function () {
                    var t = e(this.getTipElement());
                    this.setElementContent(t.find(".popover-header"), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)),
                        this.setElementContent(t.find(".popover-body"), n),
                        t.removeClass("fade show")
                }
                ,
                s._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }
                ,
                s._cleanTipClass = function () {
                    var t = e(this.getTipElement())
                        , n = t.attr("class").match(ee);
                    null !== n && n.length > 0 && t.removeClass(n.join(""))
                }
                ,
                r._jQueryInterface = function (t) {
                    return this.each((function () {
                        var n = e(this).data("bs.popover")
                            , i = "object" == typeof t ? t : null;
                        if ((n || !/dispose|hide/.test(t)) && (n || (n = new r(this, i),
                            e(this).data("bs.popover", n)),
                            "string" == typeof t)) {
                            if ("undefined" == typeof n[t])
                                throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    }
                    ))
                }
                ,
                i(r, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.2"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return ne
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return Zt
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return "bs.popover"
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return oe
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return ".bs.popover"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return ie
                    }
                }]),
                r
        }(Jt);
    e.fn[Zt] = re._jQueryInterface,
        e.fn[Zt].Constructor = re,
        e.fn[Zt].noConflict = function () {
            return e.fn[Zt] = te,
                re._jQueryInterface
        }
        ;
    var se = "scrollspy"
        , ae = e.fn[se]
        , le = {
            offset: 10,
            method: "auto",
            target: ""
        }
        , ce = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }
        , he = function () {
            function t(t, n) {
                var i = this;
                this._element = t,
                    this._scrollElement = "BODY" === t.tagName ? window : t,
                    this._config = this._getConfig(n),
                    this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item",
                    this._offsets = [],
                    this._targets = [],
                    this._activeTarget = null,
                    this._scrollHeight = 0,
                    e(this._scrollElement).on("scroll.bs.scrollspy", (function (t) {
                        return i._process(t)
                    }
                    )),
                    this.refresh(),
                    this._process()
            }
            var n = t.prototype;
            return n.refresh = function () {
                var t = this
                    , n = this._scrollElement === this._scrollElement.window ? "offset" : "position"
                    , i = "auto" === this._config.method ? n : this._config.method
                    , o = "position" === i ? this._getScrollTop() : 0;
                this._offsets = [],
                    this._targets = [],
                    this._scrollHeight = this._getScrollHeight(),
                    [].slice.call(document.querySelectorAll(this._selector)).map((function (t) {
                        var n, r = s.getSelectorFromElement(t);
                        if (r && (n = document.querySelector(r)),
                            n) {
                            var a = n.getBoundingClientRect();
                            if (a.width || a.height)
                                return [e(n)[i]().top + o, r]
                        }
                        return null
                    }
                    )).filter((function (t) {
                        return t
                    }
                    )).sort((function (t, e) {
                        return t[0] - e[0]
                    }
                    )).forEach((function (e) {
                        t._offsets.push(e[0]),
                            t._targets.push(e[1])
                    }
                    ))
            }
                ,
                n.dispose = function () {
                    e.removeData(this._element, "bs.scrollspy"),
                        e(this._scrollElement).off(".bs.scrollspy"),
                        this._element = null,
                        this._scrollElement = null,
                        this._config = null,
                        this._selector = null,
                        this._offsets = null,
                        this._targets = null,
                        this._activeTarget = null,
                        this._scrollHeight = null
                }
                ,
                n._getConfig = function (t) {
                    if ("string" != typeof (t = o({}, le, "object" == typeof t && t ? t : {})).target && s.isElement(t.target)) {
                        var n = e(t.target).attr("id");
                        n || (n = s.getUID(se),
                            e(t.target).attr("id", n)),
                            t.target = "#" + n
                    }
                    return s.typeCheckConfig(se, t, ce),
                        t
                }
                ,
                n._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }
                ,
                n._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
                ,
                n._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }
                ,
                n._process = function () {
                    var t = this._getScrollTop() + this._config.offset
                        , e = this._getScrollHeight()
                        , n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(),
                        t >= n) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                            return this._activeTarget = null,
                                void this._clear();
                        for (var o = this._offsets.length; o--;) {
                            this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                        }
                    }
                }
                ,
                n._activate = function (t) {
                    this._activeTarget = t,
                        this._clear();
                    var n = this._selector.split(",").map((function (e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    }
                    ))
                        , i = e([].slice.call(document.querySelectorAll(n.join(","))));
                    i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"),
                        i.addClass("active")) : (i.addClass("active"),
                            i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),
                            i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),
                        e(this._scrollElement).trigger("activate.bs.scrollspy", {
                            relatedTarget: t
                        })
                }
                ,
                n._clear = function () {
                    [].slice.call(document.querySelectorAll(this._selector)).filter((function (t) {
                        return t.classList.contains("active")
                    }
                    )).forEach((function (t) {
                        return t.classList.remove("active")
                    }
                    ))
                }
                ,
                t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this).data("bs.scrollspy");
                        if (i || (i = new t(this, "object" == typeof n && n),
                            e(this).data("bs.scrollspy", i)),
                            "string" == typeof n) {
                            if ("undefined" == typeof i[n])
                                throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    }
                    ))
                }
                ,
                i(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.2"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return le
                    }
                }]),
                t
        }();
    e(window).on("load.bs.scrollspy.data-api", (function () {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = t.length; n--;) {
            var i = e(t[n]);
            he._jQueryInterface.call(i, i.data())
        }
    }
    )),
        e.fn[se] = he._jQueryInterface,
        e.fn[se].Constructor = he,
        e.fn[se].noConflict = function () {
            return e.fn[se] = ae,
                he._jQueryInterface
        }
        ;
    var ue = e.fn.tab
        , fe = function () {
            function t(t) {
                this._element = t
            }
            var n = t.prototype;
            return n.show = function () {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass("active") || e(this._element).hasClass("disabled"))) {
                    var n, i, o = e(this._element).closest(".nav, .list-group")[0], r = s.getSelectorFromElement(this._element);
                    if (o) {
                        var a = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
                        i = (i = e.makeArray(e(o).find(a)))[i.length - 1]
                    }
                    var l = e.Event("hide.bs.tab", {
                        relatedTarget: this._element
                    })
                        , c = e.Event("show.bs.tab", {
                            relatedTarget: i
                        });
                    if (i && e(i).trigger(l),
                        e(this._element).trigger(c),
                        !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
                        r && (n = document.querySelector(r)),
                            this._activate(this._element, o);
                        var h = function () {
                            var n = e.Event("hidden.bs.tab", {
                                relatedTarget: t._element
                            })
                                , o = e.Event("shown.bs.tab", {
                                    relatedTarget: i
                                });
                            e(i).trigger(n),
                                e(t._element).trigger(o)
                        };
                        n ? this._activate(n, n.parentNode, h) : h()
                    }
                }
            }
                ,
                n.dispose = function () {
                    e.removeData(this._element, "bs.tab"),
                        this._element = null
                }
                ,
                n._activate = function (t, n, i) {
                    var o = this
                        , r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? e(n).children(".active") : e(n).find("> li > .active"))[0]
                        , a = i && r && e(r).hasClass("fade")
                        , l = function () {
                            return o._transitionComplete(t, r, i)
                        };
                    if (r && a) {
                        var c = s.getTransitionDurationFromElement(r);
                        e(r).removeClass("show").one(s.TRANSITION_END, l).emulateTransitionEnd(c)
                    } else
                        l()
                }
                ,
                n._transitionComplete = function (t, n, i) {
                    if (n) {
                        e(n).removeClass("active");
                        var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
                        o && e(o).removeClass("active"),
                            "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                    }
                    if (e(t).addClass("active"),
                        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
                        s.reflow(t),
                        t.classList.contains("fade") && t.classList.add("show"),
                        t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
                        var r = e(t).closest(".dropdown")[0];
                        if (r) {
                            var a = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                            e(a).addClass("active")
                        }
                        t.setAttribute("aria-expanded", !0)
                    }
                    i && i()
                }
                ,
                t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this)
                            , o = i.data("bs.tab");
                        if (o || (o = new t(this),
                            i.data("bs.tab", o)),
                            "string" == typeof n) {
                            if ("undefined" == typeof o[n])
                                throw new TypeError('No method named "' + n + '"');
                            o[n]()
                        }
                    }
                    ))
                }
                ,
                i(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.2"
                    }
                }]),
                t
        }();
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function (t) {
        t.preventDefault(),
            fe._jQueryInterface.call(e(this), "show")
    }
    )),
        e.fn.tab = fe._jQueryInterface,
        e.fn.tab.Constructor = fe,
        e.fn.tab.noConflict = function () {
            return e.fn.tab = ue,
                fe._jQueryInterface
        }
        ;
    var de = e.fn.toast
        , pe = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        }
        , me = {
            animation: !0,
            autohide: !0,
            delay: 500
        }
        , ge = function () {
            function t(t, e) {
                this._element = t,
                    this._config = this._getConfig(e),
                    this._timeout = null,
                    this._setListeners()
            }
            var n = t.prototype;
            return n.show = function () {
                var t = this
                    , n = e.Event("show.bs.toast");
                if (e(this._element).trigger(n),
                    !n.isDefaultPrevented()) {
                    this._clearTimeout(),
                        this._config.animation && this._element.classList.add("fade");
                    var i = function () {
                        t._element.classList.remove("showing"),
                            t._element.classList.add("show"),
                            e(t._element).trigger("shown.bs.toast"),
                            t._config.autohide && (t._timeout = setTimeout((function () {
                                t.hide()
                            }
                            ), t._config.delay))
                    };
                    if (this._element.classList.remove("hide"),
                        s.reflow(this._element),
                        this._element.classList.add("showing"),
                        this._config.animation) {
                        var o = s.getTransitionDurationFromElement(this._element);
                        e(this._element).one(s.TRANSITION_END, i).emulateTransitionEnd(o)
                    } else
                        i()
                }
            }
                ,
                n.hide = function () {
                    if (this._element.classList.contains("show")) {
                        var t = e.Event("hide.bs.toast");
                        e(this._element).trigger(t),
                            t.isDefaultPrevented() || this._close()
                    }
                }
                ,
                n.dispose = function () {
                    this._clearTimeout(),
                        this._element.classList.contains("show") && this._element.classList.remove("show"),
                        e(this._element).off("click.dismiss.bs.toast"),
                        e.removeData(this._element, "bs.toast"),
                        this._element = null,
                        this._config = null
                }
                ,
                n._getConfig = function (t) {
                    return t = o({}, me, e(this._element).data(), "object" == typeof t && t ? t : {}),
                        s.typeCheckConfig("toast", t, this.constructor.DefaultType),
                        t
                }
                ,
                n._setListeners = function () {
                    var t = this;
                    e(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function () {
                        return t.hide()
                    }
                    ))
                }
                ,
                n._close = function () {
                    var t = this
                        , n = function () {
                            t._element.classList.add("hide"),
                                e(t._element).trigger("hidden.bs.toast")
                        };
                    if (this._element.classList.remove("show"),
                        this._config.animation) {
                        var i = s.getTransitionDurationFromElement(this._element);
                        e(this._element).one(s.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else
                        n()
                }
                ,
                n._clearTimeout = function () {
                    clearTimeout(this._timeout),
                        this._timeout = null
                }
                ,
                t._jQueryInterface = function (n) {
                    return this.each((function () {
                        var i = e(this)
                            , o = i.data("bs.toast");
                        if (o || (o = new t(this, "object" == typeof n && n),
                            i.data("bs.toast", o)),
                            "string" == typeof n) {
                            if ("undefined" == typeof o[n])
                                throw new TypeError('No method named "' + n + '"');
                            o[n](this)
                        }
                    }
                    ))
                }
                ,
                i(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.5.2"
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return pe
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return me
                    }
                }]),
                t
        }();
    e.fn.toast = ge._jQueryInterface,
        e.fn.toast.Constructor = ge,
        e.fn.toast.noConflict = function () {
            return e.fn.toast = de,
                ge._jQueryInterface
        }
        ,
        t.Alert = c,
        t.Button = u,
        t.Carousel = v,
        t.Collapse = T,
        t.Dropdown = Lt,
        t.Modal = Ht,
        t.Popover = re,
        t.Scrollspy = he,
        t.Tab = fe,
        t.Toast = ge,
        t.Tooltip = Jt,
        t.Util = s,
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
}
));

/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
(function (e) {
    "use strict";
    e.fn.counterUp = function (t) {
        var n = e.extend({
            time: 400,
            delay: 10
        }, t);
        return this.each(function () {
            var t = e(this)
                , r = n
                , i = function () {
                    var e = []
                        , n = r.time / r.delay
                        , i = t.text()
                        , s = /[0-9]+,[0-9]+/.test(i);
                    i = i.replace(/,/g, "");
                    var o = /^[0-9]+$/.test(i)
                        , u = /^[0-9]+\.[0-9]+$/.test(i)
                        , a = u ? (i.split(".")[1] || []).length : 0;
                    for (var f = n; f >= 1; f--) {
                        var l = parseInt(i / n * f);
                        u && (l = parseFloat(i / n * f).toFixed(a));
                        if (s)
                            while (/(\d+)(\d{3})/.test(l.toString()))
                                l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        e.unshift(l)
                    }
                    t.data("counterup-nums", e);
                    t.text("0");
                    var c = function () {
                        t.text(t.data("counterup-nums").shift());
                        if (t.data("counterup-nums").length)
                            setTimeout(t.data("counterup-func"), r.delay);
                        else {
                            delete t.data("counterup-nums");
                            t.data("counterup-nums", null);
                            t.data("counterup-func", null)
                        }
                    };
                    t.data("counterup-func", c);
                    setTimeout(t.data("counterup-func"), r.delay)
                };
            t.waypoint(i, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
}
)(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 * 
 *
*/
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function (e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function (e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function (e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function (e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function (e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function (e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function (e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function (e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function (e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function (e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function (e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function (e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function (e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});

// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
    var t = [].indexOf || function (t) {
        for (var e = 0, n = this.length; e < n; e++) {
            if (e in this && this[e] === t)
                return e
        }
        return -1
    }
        , e = [].slice;
    (function (t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function (n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    }
    )(window, function (n, r) {
        var i, o, l, s, f, u, c, a, h, d, p, y, v, w, g, m;
        i = n(r);
        a = t.call(r, "ontouchstart") >= 0;
        s = {
            horizontal: {},
            vertical: {}
        };
        f = 1;
        c = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function () {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                this.element[u] = this.id;
                c[this.id] = this;
                t.bind(y, function () {
                    var t;
                    if (!(e.didScroll || a)) {
                        e.didScroll = true;
                        t = function () {
                            e.doScroll();
                            return e.didScroll = false
                        }
                            ;
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function () {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function () {
                            n[m]("refresh");
                            return e.didResize = false
                        }
                            ;
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }
            t.prototype.doScroll = function () {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (a && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function (t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function (t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function (t, e) {
                        return t.offset - e.offset
                    });
                    if (!o) {
                        l.reverse()
                    }
                    return n.each(l, function (t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            }
                ;
            t.prototype.refresh = function () {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function (t, e) {
                    return n.each(i.waypoints[t], function (t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            }
                ;
            t.prototype.checkEmpty = function () {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete c[this.id]
                }
            }
                ;
            return t
        }();
        l = function () {
            function t(t, e, r) {
                var i, o;
                if (r.offset === "bottom-in-view") {
                    r.offset = function () {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = this.element[w]) != null ? o : [];
                i.push(this.id);
                this.element[w] = i
            }
            t.prototype.trigger = function (t) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            }
                ;
            t.prototype.disable = function () {
                return this.enabled = false
            }
                ;
            t.prototype.enable = function () {
                this.context.refresh();
                return this.enabled = true
            }
                ;
            t.prototype.destroy = function () {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            }
                ;
            t.getWaypointsByElement = function (t) {
                var e, r;
                r = t[w];
                if (!r) {
                    return []
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function (t) {
                    return e[t]
                })
            }
                ;
            return t
        }();
        d = {
            init: function (t, e) {
                var r;
                e = n.extend({}, n.fn[g].defaults, e);
                if ((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function () {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = c[i[0][u]];
                    if (!r) {
                        r = new o(i)
                    }
                    return new l(t, r, e)
                });
                n[m]("refresh");
                return this
            },
            disable: function () {
                return d._invoke.call(this, "disable")
            },
            enable: function () {
                return d._invoke.call(this, "enable")
            },
            destroy: function () {
                return d._invoke.call(this, "destroy")
            },
            prev: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            },
            next: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            },
            _traverse: function (t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical"
                }
                if (e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function () {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            },
            _invoke: function (t) {
                this.each(function () {
                    var e;
                    e = l.getWaypointsByElement(this);
                    return n.each(e, function (e, n) {
                        n[t]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[g] = function () {
            var t, r;
            r = arguments[0],
                t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t)
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        }
            ;
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function () {
                return n.each(c, function (t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function () {
                var t;
                return (t = r.innerHeight) != null ? t : i.height()
            },
            aggregate: function (t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = c[n(t)[0][u]]) != null ? i.waypoints : void 0
                }
                if (!e) {
                    return []
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function (t, i) {
                    n.each(e[t], function (t, e) {
                        return i.push(e)
                    });
                    i.sort(function (t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function (t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            },
            above: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function (t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function (t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function (t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function (t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function () {
                return h._invoke("enable")
            },
            disable: function () {
                return h._invoke("disable")
            },
            destroy: function () {
                return h._invoke("destroy")
            },
            extendFn: function (t, e) {
                return d[t] = e
            },
            _invoke: function (t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function (e, n) {
                    n[t]();
                    return true
                })
            },
            _filter: function (t, e, r) {
                var i, o;
                i = c[n(t)[0][u]];
                if (!i) {
                    return []
                }
                o = [];
                n.each(i.waypoints[e], function (t, e) {
                    if (r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function (t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function (t) {
                    return t.element
                })
            }
        };
        n[m] = function () {
            var t, n;
            n = arguments[0],
                t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        }
            ;
        n[m].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.on("load.waypoints", function () {
            return n[m]("refresh")
        })
    })
}
).call(this);

/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 10, 2017
 */
!function () {
    "use strict";
    var e, a = function (s, i) {
        function r(e) {
            return Math.floor(e)
        }
        function n() {
            var e = T.params.autoplay
                , a = T.slides.eq(T.activeIndex);
            a.attr("data-swiper-autoplay") && (e = a.attr("data-swiper-autoplay") || T.params.autoplay),
                T.autoplayTimeoutId = setTimeout(function () {
                    T.params.loop ? (T.fixLoop(),
                        T._slideNext(),
                        T.emit("onAutoplay", T)) : T.isEnd ? i.autoplayStopOnLast ? T.stopAutoplay() : (T._slideTo(0),
                            T.emit("onAutoplay", T)) : (T._slideNext(),
                                T.emit("onAutoplay", T))
                }, e)
        }
        function o(a, t) {
            var s = e(a.target);
            if (!s.is(t))
                if ("string" == typeof t)
                    s = s.parents(t);
                else if (t.nodeType) {
                    var i;
                    return s.parents().each(function (e, a) {
                        a === t && (i = t)
                    }),
                        i ? t : void 0
                }
            if (0 !== s.length)
                return s[0]
        }
        function l(e, a) {
            a = a || {};
            var t = window.MutationObserver || window.WebkitMutationObserver
                , s = new t(function (e) {
                    e.forEach(function (e) {
                        T.onResize(!0),
                            T.emit("onObserverUpdate", T, e)
                    })
                }
                );
            s.observe(e, {
                attributes: void 0 === a.attributes || a.attributes,
                childList: void 0 === a.childList || a.childList,
                characterData: void 0 === a.characterData || a.characterData
            }),
                T.observers.push(s)
        }
        function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = e.keyCode || e.charCode;
            if (!T.params.allowSwipeToNext && (T.isHorizontal() && 39 === a || !T.isHorizontal() && 40 === a))
                return !1;
            if (!T.params.allowSwipeToPrev && (T.isHorizontal() && 37 === a || !T.isHorizontal() && 38 === a))
                return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === a || 39 === a || 38 === a || 40 === a) {
                    var t = !1;
                    if (T.container.parents("." + T.params.slideClass).length > 0 && 0 === T.container.parents("." + T.params.slideActiveClass).length)
                        return;
                    var s = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    }
                        , i = window.innerWidth
                        , r = window.innerHeight
                        , n = T.container.offset();
                    T.rtl && (n.left = n.left - T.container[0].scrollLeft);
                    for (var o = [[n.left, n.top], [n.left + T.width, n.top], [n.left, n.top + T.height], [n.left + T.width, n.top + T.height]], l = 0; l < o.length; l++) {
                        var p = o[l];
                        p[0] >= s.left && p[0] <= s.left + i && p[1] >= s.top && p[1] <= s.top + r && (t = !0)
                    }
                    if (!t)
                        return
                }
                T.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                    (39 === a && !T.rtl || 37 === a && T.rtl) && T.slideNext(),
                    (37 === a && !T.rtl || 39 === a && T.rtl) && T.slidePrev()) : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                        40 === a && T.slideNext(),
                        38 === a && T.slidePrev()),
                    T.emit("onKeyPress", T, a)
            }
        }
        function d(e) {
            var a = 0
                , t = 0
                , s = 0
                , i = 0;
            return "detail" in e && (t = e.detail),
                "wheelDelta" in e && (t = -e.wheelDelta / 120),
                "wheelDeltaY" in e && (t = -e.wheelDeltaY / 120),
                "wheelDeltaX" in e && (a = -e.wheelDeltaX / 120),
                "axis" in e && e.axis === e.HORIZONTAL_AXIS && (a = t,
                    t = 0),
                s = 10 * a,
                i = 10 * t,
                "deltaY" in e && (i = e.deltaY),
                "deltaX" in e && (s = e.deltaX),
                (s || i) && e.deltaMode && (1 === e.deltaMode ? (s *= 40,
                    i *= 40) : (s *= 800,
                        i *= 800)),
                s && !a && (a = s < 1 ? -1 : 1),
                i && !t && (t = i < 1 ? -1 : 1),
            {
                spinX: a,
                spinY: t,
                pixelX: s,
                pixelY: i
            }
        }
        function u(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = 0
                , t = T.rtl ? -1 : 1
                , s = d(e);
            if (T.params.mousewheelForceToAxis)
                if (T.isHorizontal()) {
                    if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY)))
                        return;
                    a = s.pixelX * t
                } else {
                    if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX)))
                        return;
                    a = s.pixelY
                }
            else
                a = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * t : -s.pixelY;
            if (0 !== a) {
                if (T.params.mousewheelInvert && (a = -a),
                    T.params.freeMode) {
                    var i = T.getWrapperTranslate() + a * T.params.mousewheelSensitivity
                        , r = T.isBeginning
                        , n = T.isEnd;
                    if (i >= T.minTranslate() && (i = T.minTranslate()),
                        i <= T.maxTranslate() && (i = T.maxTranslate()),
                        T.setWrapperTransition(0),
                        T.setWrapperTranslate(i),
                        T.updateProgress(),
                        T.updateActiveIndex(),
                        (!r && T.isBeginning || !n && T.isEnd) && T.updateClasses(),
                        T.params.freeModeSticky ? (clearTimeout(T.mousewheel.timeout),
                            T.mousewheel.timeout = setTimeout(function () {
                                T.slideReset()
                            }, 300)) : T.params.lazyLoading && T.lazy && T.lazy.load(),
                        T.emit("onScroll", T, e),
                        T.params.autoplay && T.params.autoplayDisableOnInteraction && T.stopAutoplay(),
                        0 === i || i === T.maxTranslate())
                        return
                } else {
                    if ((new window.Date).getTime() - T.mousewheel.lastScrollTime > 60)
                        if (a < 0)
                            if (T.isEnd && !T.params.loop || T.animating) {
                                if (T.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                T.slideNext(),
                                    T.emit("onScroll", T, e);
                        else if (T.isBeginning && !T.params.loop || T.animating) {
                            if (T.params.mousewheelReleaseOnEdges)
                                return !0
                        } else
                            T.slidePrev(),
                                T.emit("onScroll", T, e);
                    T.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    !1
            }
        }
        function c(a, t) {
            a = e(a);
            var s, i, r, n = T.rtl ? -1 : 1;
            s = a.attr("data-swiper-parallax") || "0",
                i = a.attr("data-swiper-parallax-x"),
                r = a.attr("data-swiper-parallax-y"),
                i || r ? (i = i || "0",
                    r = r || "0") : T.isHorizontal() ? (i = s,
                        r = "0") : (r = s,
                            i = "0"),
                i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t * n + "%" : i * t * n + "px",
                r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t + "%" : r * t + "px",
                a.transform("translate3d(" + i + ", " + r + ",0px)")
        }
        function m(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
                e
        }
        if (!(this instanceof a))
            return new a(s, i);
        var h = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            zoom: !1,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: !0,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: "container",
            hashnav: !1,
            hashnavWatchState: !1,
            history: !1,
            replaceState: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            normalizeSlideIndex: !0,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            paginationClickableClass: "swiper-pagination-clickable",
            paginationModifierClass: "swiper-pagination-",
            lazyLoadingClass: "swiper-lazy",
            lazyStatusLoadingClass: "swiper-lazy-loading",
            lazyStatusLoadedClass: "swiper-lazy-loaded",
            lazyPreloaderClass: "swiper-lazy-preloader",
            notificationClass: "swiper-notification",
            preloaderClass: "preloader",
            zoomContainerClass: "swiper-zoom-container",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }
            , g = i && i.virtualTranslate;
        i = i || {};
        var f = {};
        for (var v in i)
            if ("object" != typeof i[v] || null === i[v] || (i[v].nodeType || i[v] === window || i[v] === document || void 0 !== t && i[v] instanceof t || "undefined" != typeof jQuery && i[v] instanceof jQuery))
                f[v] = i[v];
            else {
                f[v] = {};
                for (var w in i[v])
                    f[v][w] = i[v][w]
            }
        for (var y in h)
            if (void 0 === i[y])
                i[y] = h[y];
            else if ("object" == typeof i[y])
                for (var x in h[y])
                    void 0 === i[y][x] && (i[y][x] = h[y][x]);
        var T = this;
        if (T.params = i,
            T.originalParams = f,
            T.classNames = [],
            void 0 !== e && void 0 !== t && (e = t),
            (void 0 !== e || (e = void 0 === t ? window.Dom7 || window.Zepto || window.jQuery : t)) && (T.$ = e,
                T.currentBreakpoint = void 0,
                T.getActiveBreakpoint = function () {
                    if (!T.params.breakpoints)
                        return !1;
                    var e, a = !1, t = [];
                    for (e in T.params.breakpoints)
                        T.params.breakpoints.hasOwnProperty(e) && t.push(e);
                    t.sort(function (e, a) {
                        return parseInt(e, 10) > parseInt(a, 10)
                    });
                    for (var s = 0; s < t.length; s++)
                        (e = t[s]) >= window.innerWidth && !a && (a = e);
                    return a || "max"
                }
                ,
                T.setBreakpoint = function () {
                    var e = T.getActiveBreakpoint();
                    if (e && T.currentBreakpoint !== e) {
                        var a = e in T.params.breakpoints ? T.params.breakpoints[e] : T.originalParams
                            , t = T.params.loop && a.slidesPerView !== T.params.slidesPerView;
                        for (var s in a)
                            T.params[s] = a[s];
                        T.currentBreakpoint = e,
                            t && T.destroyLoop && T.reLoop(!0)
                    }
                }
                ,
                T.params.breakpoints && T.setBreakpoint(),
                T.container = e(s),
                0 !== T.container.length)) {
            if (T.container.length > 1) {
                var b = [];
                return T.container.each(function () {
                    b.push(new a(this, i))
                }),
                    b
            }
            T.container[0].swiper = T,
                T.container.data("swiper", T),
                T.classNames.push(T.params.containerModifierClass + T.params.direction),
                T.params.freeMode && T.classNames.push(T.params.containerModifierClass + "free-mode"),
                T.support.flexbox || (T.classNames.push(T.params.containerModifierClass + "no-flexbox"),
                    T.params.slidesPerColumn = 1),
                T.params.autoHeight && T.classNames.push(T.params.containerModifierClass + "autoheight"),
                (T.params.parallax || T.params.watchSlidesVisibility) && (T.params.watchSlidesProgress = !0),
                T.params.touchReleaseOnEdges && (T.params.resistanceRatio = 0),
                ["cube", "coverflow", "flip"].indexOf(T.params.effect) >= 0 && (T.support.transforms3d ? (T.params.watchSlidesProgress = !0,
                    T.classNames.push(T.params.containerModifierClass + "3d")) : T.params.effect = "slide"),
                "slide" !== T.params.effect && T.classNames.push(T.params.containerModifierClass + T.params.effect),
                "cube" === T.params.effect && (T.params.resistanceRatio = 0,
                    T.params.slidesPerView = 1,
                    T.params.slidesPerColumn = 1,
                    T.params.slidesPerGroup = 1,
                    T.params.centeredSlides = !1,
                    T.params.spaceBetween = 0,
                    T.params.virtualTranslate = !0),
                "fade" !== T.params.effect && "flip" !== T.params.effect || (T.params.slidesPerView = 1,
                    T.params.slidesPerColumn = 1,
                    T.params.slidesPerGroup = 1,
                    T.params.watchSlidesProgress = !0,
                    T.params.spaceBetween = 0,
                    void 0 === g && (T.params.virtualTranslate = !0)),
                T.params.grabCursor && T.support.touch && (T.params.grabCursor = !1),
                T.wrapper = T.container.children("." + T.params.wrapperClass),
                T.params.pagination && (T.paginationContainer = e(T.params.pagination),
                    T.params.uniqueNavElements && "string" == typeof T.params.pagination && T.paginationContainer.length > 1 && 1 === T.container.find(T.params.pagination).length && (T.paginationContainer = T.container.find(T.params.pagination)),
                    "bullets" === T.params.paginationType && T.params.paginationClickable ? T.paginationContainer.addClass(T.params.paginationModifierClass + "clickable") : T.params.paginationClickable = !1,
                    T.paginationContainer.addClass(T.params.paginationModifierClass + T.params.paginationType)),
                (T.params.nextButton || T.params.prevButton) && (T.params.nextButton && (T.nextButton = e(T.params.nextButton),
                    T.params.uniqueNavElements && "string" == typeof T.params.nextButton && T.nextButton.length > 1 && 1 === T.container.find(T.params.nextButton).length && (T.nextButton = T.container.find(T.params.nextButton))),
                    T.params.prevButton && (T.prevButton = e(T.params.prevButton),
                        T.params.uniqueNavElements && "string" == typeof T.params.prevButton && T.prevButton.length > 1 && 1 === T.container.find(T.params.prevButton).length && (T.prevButton = T.container.find(T.params.prevButton)))),
                T.isHorizontal = function () {
                    return "horizontal" === T.params.direction
                }
                ,
                T.rtl = T.isHorizontal() && ("rtl" === T.container[0].dir.toLowerCase() || "rtl" === T.container.css("direction")),
                T.rtl && T.classNames.push(T.params.containerModifierClass + "rtl"),
                T.rtl && (T.wrongRTL = "-webkit-box" === T.wrapper.css("display")),
                T.params.slidesPerColumn > 1 && T.classNames.push(T.params.containerModifierClass + "multirow"),
                T.device.android && T.classNames.push(T.params.containerModifierClass + "android"),
                T.container.addClass(T.classNames.join(" ")),
                T.translate = 0,
                T.progress = 0,
                T.velocity = 0,
                T.lockSwipeToNext = function () {
                    T.params.allowSwipeToNext = !1,
                        T.params.allowSwipeToPrev === !1 && T.params.grabCursor && T.unsetGrabCursor()
                }
                ,
                T.lockSwipeToPrev = function () {
                    T.params.allowSwipeToPrev = !1,
                        T.params.allowSwipeToNext === !1 && T.params.grabCursor && T.unsetGrabCursor()
                }
                ,
                T.lockSwipes = function () {
                    T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !1,
                        T.params.grabCursor && T.unsetGrabCursor()
                }
                ,
                T.unlockSwipeToNext = function () {
                    T.params.allowSwipeToNext = !0,
                        T.params.allowSwipeToPrev === !0 && T.params.grabCursor && T.setGrabCursor()
                }
                ,
                T.unlockSwipeToPrev = function () {
                    T.params.allowSwipeToPrev = !0,
                        T.params.allowSwipeToNext === !0 && T.params.grabCursor && T.setGrabCursor()
                }
                ,
                T.unlockSwipes = function () {
                    T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !0,
                        T.params.grabCursor && T.setGrabCursor()
                }
                ,
                T.setGrabCursor = function (e) {
                    T.container[0].style.cursor = "move",
                        T.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                        T.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                        T.container[0].style.cursor = e ? "grabbing" : "grab"
                }
                ,
                T.unsetGrabCursor = function () {
                    T.container[0].style.cursor = ""
                }
                ,
                T.params.grabCursor && T.setGrabCursor(),
                T.imagesToLoad = [],
                T.imagesLoaded = 0,
                T.loadImage = function (e, a, t, s, i, r) {
                    function n() {
                        r && r()
                    }
                    var o;
                    e.complete && i ? n() : a ? (o = new window.Image,
                        o.onload = n,
                        o.onerror = n,
                        s && (o.sizes = s),
                        t && (o.srcset = t),
                        a && (o.src = a)) : n()
                }
                ,
                T.preloadImages = function () {
                    function e() {
                        void 0 !== T && null !== T && T && (void 0 !== T.imagesLoaded && T.imagesLoaded++,
                            T.imagesLoaded === T.imagesToLoad.length && (T.params.updateOnImagesReady && T.update(),
                                T.emit("onImagesReady", T)))
                    }
                    T.imagesToLoad = T.container.find("img");
                    for (var a = 0; a < T.imagesToLoad.length; a++)
                        T.loadImage(T.imagesToLoad[a], T.imagesToLoad[a].currentSrc || T.imagesToLoad[a].getAttribute("src"), T.imagesToLoad[a].srcset || T.imagesToLoad[a].getAttribute("srcset"), T.imagesToLoad[a].sizes || T.imagesToLoad[a].getAttribute("sizes"), !0, e)
                }
                ,
                T.autoplayTimeoutId = void 0,
                T.autoplaying = !1,
                T.autoplayPaused = !1,
                T.startAutoplay = function () {
                    return void 0 === T.autoplayTimeoutId && (!!T.params.autoplay && (!T.autoplaying && (T.autoplaying = !0,
                        T.emit("onAutoplayStart", T),
                        void n())))
                }
                ,
                T.stopAutoplay = function (e) {
                    T.autoplayTimeoutId && (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId),
                        T.autoplaying = !1,
                        T.autoplayTimeoutId = void 0,
                        T.emit("onAutoplayStop", T))
                }
                ,
                T.pauseAutoplay = function (e) {
                    T.autoplayPaused || (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId),
                        T.autoplayPaused = !0,
                        0 === e ? (T.autoplayPaused = !1,
                            n()) : T.wrapper.transitionEnd(function () {
                                T && (T.autoplayPaused = !1,
                                    T.autoplaying ? n() : T.stopAutoplay())
                            }))
                }
                ,
                T.minTranslate = function () {
                    return -T.snapGrid[0]
                }
                ,
                T.maxTranslate = function () {
                    return -T.snapGrid[T.snapGrid.length - 1]
                }
                ,
                T.updateAutoHeight = function () {
                    var e, a = [], t = 0;
                    if ("auto" !== T.params.slidesPerView && T.params.slidesPerView > 1)
                        for (e = 0; e < Math.ceil(T.params.slidesPerView); e++) {
                            var s = T.activeIndex + e;
                            if (s > T.slides.length)
                                break;
                            a.push(T.slides.eq(s)[0])
                        }
                    else
                        a.push(T.slides.eq(T.activeIndex)[0]);
                    for (e = 0; e < a.length; e++)
                        if (void 0 !== a[e]) {
                            var i = a[e].offsetHeight;
                            t = i > t ? i : t
                        }
                    t && T.wrapper.css("height", t + "px")
                }
                ,
                T.updateContainerSize = function () {
                    var e, a;
                    e = void 0 !== T.params.width ? T.params.width : T.container[0].clientWidth,
                        a = void 0 !== T.params.height ? T.params.height : T.container[0].clientHeight,
                        0 === e && T.isHorizontal() || 0 === a && !T.isHorizontal() || (e = e - parseInt(T.container.css("padding-left"), 10) - parseInt(T.container.css("padding-right"), 10),
                            a = a - parseInt(T.container.css("padding-top"), 10) - parseInt(T.container.css("padding-bottom"), 10),
                            T.width = e,
                            T.height = a,
                            T.size = T.isHorizontal() ? T.width : T.height)
                }
                ,
                T.updateSlidesSize = function () {
                    T.slides = T.wrapper.children("." + T.params.slideClass),
                        T.snapGrid = [],
                        T.slidesGrid = [],
                        T.slidesSizesGrid = [];
                    var e, a = T.params.spaceBetween, t = -T.params.slidesOffsetBefore, s = 0, i = 0;
                    if (void 0 !== T.size) {
                        "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * T.size),
                            T.virtualSize = -a,
                            T.rtl ? T.slides.css({
                                marginLeft: "",
                                marginTop: ""
                            }) : T.slides.css({
                                marginRight: "",
                                marginBottom: ""
                            });
                        var n;
                        T.params.slidesPerColumn > 1 && (n = Math.floor(T.slides.length / T.params.slidesPerColumn) === T.slides.length / T.params.slidesPerColumn ? T.slides.length : Math.ceil(T.slides.length / T.params.slidesPerColumn) * T.params.slidesPerColumn,
                            "auto" !== T.params.slidesPerView && "row" === T.params.slidesPerColumnFill && (n = Math.max(n, T.params.slidesPerView * T.params.slidesPerColumn)));
                        var o, l = T.params.slidesPerColumn, p = n / l, d = p - (T.params.slidesPerColumn * p - T.slides.length);
                        for (e = 0; e < T.slides.length; e++) {
                            o = 0;
                            var u = T.slides.eq(e);
                            if (T.params.slidesPerColumn > 1) {
                                var c, m, h;
                                "column" === T.params.slidesPerColumnFill ? (m = Math.floor(e / l),
                                    h = e - m * l,
                                    (m > d || m === d && h === l - 1) && ++h >= l && (h = 0,
                                        m++),
                                    c = m + h * n / l,
                                    u.css({
                                        "-webkit-box-ordinal-group": c,
                                        "-moz-box-ordinal-group": c,
                                        "-ms-flex-order": c,
                                        "-webkit-order": c,
                                        order: c
                                    })) : (h = Math.floor(e / p),
                                        m = e - h * p),
                                    u.css("margin-" + (T.isHorizontal() ? "top" : "left"), 0 !== h && T.params.spaceBetween && T.params.spaceBetween + "px").attr("data-swiper-column", m).attr("data-swiper-row", h)
                            }
                            "none" !== u.css("display") && ("auto" === T.params.slidesPerView ? (o = T.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0),
                                T.params.roundLengths && (o = r(o))) : (o = (T.size - (T.params.slidesPerView - 1) * a) / T.params.slidesPerView,
                                    T.params.roundLengths && (o = r(o)),
                                    T.isHorizontal() ? T.slides[e].style.width = o + "px" : T.slides[e].style.height = o + "px"),
                                T.slides[e].swiperSlideSize = o,
                                T.slidesSizesGrid.push(o),
                                T.params.centeredSlides ? (t = t + o / 2 + s / 2 + a,
                                    0 === s && 0 !== e && (t = t - T.size / 2 - a),
                                    0 === e && (t = t - T.size / 2 - a),
                                    Math.abs(t) < .001 && (t = 0),
                                    i % T.params.slidesPerGroup == 0 && T.snapGrid.push(t),
                                    T.slidesGrid.push(t)) : (i % T.params.slidesPerGroup == 0 && T.snapGrid.push(t),
                                        T.slidesGrid.push(t),
                                        t = t + o + a),
                                T.virtualSize += o + a,
                                s = o,
                                i++)
                        }
                        T.virtualSize = Math.max(T.virtualSize, T.size) + T.params.slidesOffsetAfter;
                        var g;
                        if (T.rtl && T.wrongRTL && ("slide" === T.params.effect || "coverflow" === T.params.effect) && T.wrapper.css({
                            width: T.virtualSize + T.params.spaceBetween + "px"
                        }),
                            T.support.flexbox && !T.params.setWrapperSize || (T.isHorizontal() ? T.wrapper.css({
                                width: T.virtualSize + T.params.spaceBetween + "px"
                            }) : T.wrapper.css({
                                height: T.virtualSize + T.params.spaceBetween + "px"
                            })),
                            T.params.slidesPerColumn > 1 && (T.virtualSize = (o + T.params.spaceBetween) * n,
                                T.virtualSize = Math.ceil(T.virtualSize / T.params.slidesPerColumn) - T.params.spaceBetween,
                                T.isHorizontal() ? T.wrapper.css({
                                    width: T.virtualSize + T.params.spaceBetween + "px"
                                }) : T.wrapper.css({
                                    height: T.virtualSize + T.params.spaceBetween + "px"
                                }),
                                T.params.centeredSlides)) {
                            for (g = [],
                                e = 0; e < T.snapGrid.length; e++)
                                T.snapGrid[e] < T.virtualSize + T.snapGrid[0] && g.push(T.snapGrid[e]);
                            T.snapGrid = g
                        }
                        if (!T.params.centeredSlides) {
                            for (g = [],
                                e = 0; e < T.snapGrid.length; e++)
                                T.snapGrid[e] <= T.virtualSize - T.size && g.push(T.snapGrid[e]);
                            T.snapGrid = g,
                                Math.floor(T.virtualSize - T.size) - Math.floor(T.snapGrid[T.snapGrid.length - 1]) > 1 && T.snapGrid.push(T.virtualSize - T.size)
                        }
                        0 === T.snapGrid.length && (T.snapGrid = [0]),
                            0 !== T.params.spaceBetween && (T.isHorizontal() ? T.rtl ? T.slides.css({
                                marginLeft: a + "px"
                            }) : T.slides.css({
                                marginRight: a + "px"
                            }) : T.slides.css({
                                marginBottom: a + "px"
                            })),
                            T.params.watchSlidesProgress && T.updateSlidesOffset()
                    }
                }
                ,
                T.updateSlidesOffset = function () {
                    for (var e = 0; e < T.slides.length; e++)
                        T.slides[e].swiperSlideOffset = T.isHorizontal() ? T.slides[e].offsetLeft : T.slides[e].offsetTop
                }
                ,
                T.currentSlidesPerView = function () {
                    var e, a, t = 1;
                    if (T.params.centeredSlides) {
                        var s, i = T.slides[T.activeIndex].swiperSlideSize;
                        for (e = T.activeIndex + 1; e < T.slides.length; e++)
                            T.slides[e] && !s && (i += T.slides[e].swiperSlideSize,
                                t++,
                                i > T.size && (s = !0));
                        for (a = T.activeIndex - 1; a >= 0; a--)
                            T.slides[a] && !s && (i += T.slides[a].swiperSlideSize,
                                t++,
                                i > T.size && (s = !0))
                    } else
                        for (e = T.activeIndex + 1; e < T.slides.length; e++)
                            T.slidesGrid[e] - T.slidesGrid[T.activeIndex] < T.size && t++;
                    return t
                }
                ,
                T.updateSlidesProgress = function (e) {
                    if (void 0 === e && (e = T.translate || 0),
                        0 !== T.slides.length) {
                        void 0 === T.slides[0].swiperSlideOffset && T.updateSlidesOffset();
                        var a = -e;
                        T.rtl && (a = e),
                            T.slides.removeClass(T.params.slideVisibleClass);
                        for (var t = 0; t < T.slides.length; t++) {
                            var s = T.slides[t]
                                , i = (a + (T.params.centeredSlides ? T.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + T.params.spaceBetween);
                            if (T.params.watchSlidesVisibility) {
                                var r = -(a - s.swiperSlideOffset)
                                    , n = r + T.slidesSizesGrid[t];
                                (r >= 0 && r < T.size || n > 0 && n <= T.size || r <= 0 && n >= T.size) && T.slides.eq(t).addClass(T.params.slideVisibleClass)
                            }
                            s.progress = T.rtl ? -i : i
                        }
                    }
                }
                ,
                T.updateProgress = function (e) {
                    void 0 === e && (e = T.translate || 0);
                    var a = T.maxTranslate() - T.minTranslate()
                        , t = T.isBeginning
                        , s = T.isEnd;
                    0 === a ? (T.progress = 0,
                        T.isBeginning = T.isEnd = !0) : (T.progress = (e - T.minTranslate()) / a,
                            T.isBeginning = T.progress <= 0,
                            T.isEnd = T.progress >= 1),
                        T.isBeginning && !t && T.emit("onReachBeginning", T),
                        T.isEnd && !s && T.emit("onReachEnd", T),
                        T.params.watchSlidesProgress && T.updateSlidesProgress(e),
                        T.emit("onProgress", T, T.progress)
                }
                ,
                T.updateActiveIndex = function () {
                    var e, a, t, s = T.rtl ? T.translate : -T.translate;
                    for (a = 0; a < T.slidesGrid.length; a++)
                        void 0 !== T.slidesGrid[a + 1] ? s >= T.slidesGrid[a] && s < T.slidesGrid[a + 1] - (T.slidesGrid[a + 1] - T.slidesGrid[a]) / 2 ? e = a : s >= T.slidesGrid[a] && s < T.slidesGrid[a + 1] && (e = a + 1) : s >= T.slidesGrid[a] && (e = a);
                    T.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
                        t = Math.floor(e / T.params.slidesPerGroup),
                        t >= T.snapGrid.length && (t = T.snapGrid.length - 1),
                        e !== T.activeIndex && (T.snapIndex = t,
                            T.previousIndex = T.activeIndex,
                            T.activeIndex = e,
                            T.updateClasses(),
                            T.updateRealIndex())
                }
                ,
                T.updateRealIndex = function () {
                    T.realIndex = parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index") || T.activeIndex, 10)
                }
                ,
                T.updateClasses = function () {
                    T.slides.removeClass(T.params.slideActiveClass + " " + T.params.slideNextClass + " " + T.params.slidePrevClass + " " + T.params.slideDuplicateActiveClass + " " + T.params.slideDuplicateNextClass + " " + T.params.slideDuplicatePrevClass);
                    var a = T.slides.eq(T.activeIndex);
                    a.addClass(T.params.slideActiveClass),
                        i.loop && (a.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass));
                    var t = a.next("." + T.params.slideClass).addClass(T.params.slideNextClass);
                    T.params.loop && 0 === t.length && (t = T.slides.eq(0),
                        t.addClass(T.params.slideNextClass));
                    var s = a.prev("." + T.params.slideClass).addClass(T.params.slidePrevClass);
                    if (T.params.loop && 0 === s.length && (s = T.slides.eq(-1),
                        s.addClass(T.params.slidePrevClass)),
                        i.loop && (t.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass),
                            s.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass)),
                        T.paginationContainer && T.paginationContainer.length > 0) {
                        var r, n = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length;
                        if (T.params.loop ? (r = Math.ceil((T.activeIndex - T.loopedSlides) / T.params.slidesPerGroup),
                            r > T.slides.length - 1 - 2 * T.loopedSlides && (r -= T.slides.length - 2 * T.loopedSlides),
                            r > n - 1 && (r -= n),
                            r < 0 && "bullets" !== T.params.paginationType && (r = n + r)) : r = void 0 !== T.snapIndex ? T.snapIndex : T.activeIndex || 0,
                            "bullets" === T.params.paginationType && T.bullets && T.bullets.length > 0 && (T.bullets.removeClass(T.params.bulletActiveClass),
                                T.paginationContainer.length > 1 ? T.bullets.each(function () {
                                    e(this).index() === r && e(this).addClass(T.params.bulletActiveClass)
                                }) : T.bullets.eq(r).addClass(T.params.bulletActiveClass)),
                            "fraction" === T.params.paginationType && (T.paginationContainer.find("." + T.params.paginationCurrentClass).text(r + 1),
                                T.paginationContainer.find("." + T.params.paginationTotalClass).text(n)),
                            "progress" === T.params.paginationType) {
                            var o = (r + 1) / n
                                , l = o
                                , p = 1;
                            T.isHorizontal() || (p = o,
                                l = 1),
                                T.paginationContainer.find("." + T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(T.params.speed)
                        }
                        "custom" === T.params.paginationType && T.params.paginationCustomRender && (T.paginationContainer.html(T.params.paginationCustomRender(T, r + 1, n)),
                            T.emit("onPaginationRendered", T, T.paginationContainer[0]))
                    }
                    T.params.loop || (T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.isBeginning ? (T.prevButton.addClass(T.params.buttonDisabledClass),
                        T.params.a11y && T.a11y && T.a11y.disable(T.prevButton)) : (T.prevButton.removeClass(T.params.buttonDisabledClass),
                            T.params.a11y && T.a11y && T.a11y.enable(T.prevButton))),
                        T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.isEnd ? (T.nextButton.addClass(T.params.buttonDisabledClass),
                            T.params.a11y && T.a11y && T.a11y.disable(T.nextButton)) : (T.nextButton.removeClass(T.params.buttonDisabledClass),
                                T.params.a11y && T.a11y && T.a11y.enable(T.nextButton))))
                }
                ,
                T.updatePagination = function () {
                    if (T.params.pagination && T.paginationContainer && T.paginationContainer.length > 0) {
                        var e = "";
                        if ("bullets" === T.params.paginationType) {
                            for (var a = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length, t = 0; t < a; t++)
                                e += T.params.paginationBulletRender ? T.params.paginationBulletRender(T, t, T.params.bulletClass) : "<" + T.params.paginationElement + ' class="' + T.params.bulletClass + '"></' + T.params.paginationElement + ">";
                            T.paginationContainer.html(e),
                                T.bullets = T.paginationContainer.find("." + T.params.bulletClass),
                                T.params.paginationClickable && T.params.a11y && T.a11y && T.a11y.initPagination()
                        }
                        "fraction" === T.params.paginationType && (e = T.params.paginationFractionRender ? T.params.paginationFractionRender(T, T.params.paginationCurrentClass, T.params.paginationTotalClass) : '<span class="' + T.params.paginationCurrentClass + '"></span> / <span class="' + T.params.paginationTotalClass + '"></span>',
                            T.paginationContainer.html(e)),
                            "progress" === T.params.paginationType && (e = T.params.paginationProgressRender ? T.params.paginationProgressRender(T, T.params.paginationProgressbarClass) : '<span class="' + T.params.paginationProgressbarClass + '"></span>',
                                T.paginationContainer.html(e)),
                            "custom" !== T.params.paginationType && T.emit("onPaginationRendered", T, T.paginationContainer[0])
                    }
                }
                ,
                T.update = function (e) {
                    function a() {
                        T.rtl,
                            T.translate;
                        t = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate()),
                            T.setWrapperTranslate(t),
                            T.updateActiveIndex(),
                            T.updateClasses()
                    }
                    if (T) {
                        T.updateContainerSize(),
                            T.updateSlidesSize(),
                            T.updateProgress(),
                            T.updatePagination(),
                            T.updateClasses(),
                            T.params.scrollbar && T.scrollbar && T.scrollbar.set();
                        var t;
                        if (e) {
                            T.controller && T.controller.spline && (T.controller.spline = void 0),
                                T.params.freeMode ? (a(),
                                    T.params.autoHeight && T.updateAutoHeight()) : (("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0)) || a()
                        } else
                            T.params.autoHeight && T.updateAutoHeight()
                    }
                }
                ,
                T.onResize = function (e) {
                    T.params.onBeforeResize && T.params.onBeforeResize(T),
                        T.params.breakpoints && T.setBreakpoint();
                    var a = T.params.allowSwipeToPrev
                        , t = T.params.allowSwipeToNext;
                    T.params.allowSwipeToPrev = T.params.allowSwipeToNext = !0,
                        T.updateContainerSize(),
                        T.updateSlidesSize(),
                        ("auto" === T.params.slidesPerView || T.params.freeMode || e) && T.updatePagination(),
                        T.params.scrollbar && T.scrollbar && T.scrollbar.set(),
                        T.controller && T.controller.spline && (T.controller.spline = void 0);
                    var s = !1;
                    if (T.params.freeMode) {
                        var i = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate());
                        T.setWrapperTranslate(i),
                            T.updateActiveIndex(),
                            T.updateClasses(),
                            T.params.autoHeight && T.updateAutoHeight()
                    } else
                        T.updateClasses(),
                            s = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0);
                    T.params.lazyLoading && !s && T.lazy && T.lazy.load(),
                        T.params.allowSwipeToPrev = a,
                        T.params.allowSwipeToNext = t,
                        T.params.onAfterResize && T.params.onAfterResize(T)
                }
                ,
                T.touchEventsDesktop = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                },
                window.navigator.pointerEnabled ? T.touchEventsDesktop = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled && (T.touchEventsDesktop = {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }),
                T.touchEvents = {
                    start: T.support.touch || !T.params.simulateTouch ? "touchstart" : T.touchEventsDesktop.start,
                    move: T.support.touch || !T.params.simulateTouch ? "touchmove" : T.touchEventsDesktop.move,
                    end: T.support.touch || !T.params.simulateTouch ? "touchend" : T.touchEventsDesktop.end
                },
                (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === T.params.touchEventsTarget ? T.container : T.wrapper).addClass("swiper-wp8-" + T.params.direction),
                T.initEvents = function (e) {
                    var a = e ? "off" : "on"
                        , t = e ? "removeEventListener" : "addEventListener"
                        , s = "container" === T.params.touchEventsTarget ? T.container[0] : T.wrapper[0]
                        , r = T.support.touch ? s : document
                        , n = !!T.params.nested;
                    if (T.browser.ie)
                        s[t](T.touchEvents.start, T.onTouchStart, !1),
                            r[t](T.touchEvents.move, T.onTouchMove, n),
                            r[t](T.touchEvents.end, T.onTouchEnd, !1);
                    else {
                        if (T.support.touch) {
                            var o = !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s[t](T.touchEvents.start, T.onTouchStart, o),
                                s[t](T.touchEvents.move, T.onTouchMove, n),
                                s[t](T.touchEvents.end, T.onTouchEnd, o)
                        }
                        (i.simulateTouch && !T.device.ios && !T.device.android || i.simulateTouch && !T.support.touch && T.device.ios) && (s[t]("mousedown", T.onTouchStart, !1),
                            document[t]("mousemove", T.onTouchMove, n),
                            document[t]("mouseup", T.onTouchEnd, !1))
                    }
                    window[t]("resize", T.onResize),
                        T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.nextButton[a]("click", T.onClickNext),
                            T.params.a11y && T.a11y && T.nextButton[a]("keydown", T.a11y.onEnterKey)),
                        T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.prevButton[a]("click", T.onClickPrev),
                            T.params.a11y && T.a11y && T.prevButton[a]("keydown", T.a11y.onEnterKey)),
                        T.params.pagination && T.params.paginationClickable && (T.paginationContainer[a]("click", "." + T.params.bulletClass, T.onClickIndex),
                            T.params.a11y && T.a11y && T.paginationContainer[a]("keydown", "." + T.params.bulletClass, T.a11y.onEnterKey)),
                        (T.params.preventClicks || T.params.preventClicksPropagation) && s[t]("click", T.preventClicks, !0)
                }
                ,
                T.attachEvents = function () {
                    T.initEvents()
                }
                ,
                T.detachEvents = function () {
                    T.initEvents(!0)
                }
                ,
                T.allowClick = !0,
                T.preventClicks = function (e) {
                    T.allowClick || (T.params.preventClicks && e.preventDefault(),
                        T.params.preventClicksPropagation && T.animating && (e.stopPropagation(),
                            e.stopImmediatePropagation()))
                }
                ,
                T.onClickNext = function (e) {
                    e.preventDefault(),
                        T.isEnd && !T.params.loop || T.slideNext()
                }
                ,
                T.onClickPrev = function (e) {
                    e.preventDefault(),
                        T.isBeginning && !T.params.loop || T.slidePrev()
                }
                ,
                T.onClickIndex = function (a) {
                    a.preventDefault();
                    var t = e(this).index() * T.params.slidesPerGroup;
                    T.params.loop && (t += T.loopedSlides),
                        T.slideTo(t)
                }
                ,
                T.updateClickedSlide = function (a) {
                    var t = o(a, "." + T.params.slideClass)
                        , s = !1;
                    if (t)
                        for (var i = 0; i < T.slides.length; i++)
                            T.slides[i] === t && (s = !0);
                    if (!t || !s)
                        return T.clickedSlide = void 0,
                            void (T.clickedIndex = void 0);
                    if (T.clickedSlide = t,
                        T.clickedIndex = e(t).index(),
                        T.params.slideToClickedSlide && void 0 !== T.clickedIndex && T.clickedIndex !== T.activeIndex) {
                        var r, n = T.clickedIndex, l = "auto" === T.params.slidesPerView ? T.currentSlidesPerView() : T.params.slidesPerView;
                        if (T.params.loop) {
                            if (T.animating)
                                return;
                            r = parseInt(e(T.clickedSlide).attr("data-swiper-slide-index"), 10),
                                T.params.centeredSlides ? n < T.loopedSlides - l / 2 || n > T.slides.length - T.loopedSlides + l / 2 ? (T.fixLoop(),
                                    n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(),
                                    setTimeout(function () {
                                        T.slideTo(n)
                                    }, 0)) : T.slideTo(n) : n > T.slides.length - l ? (T.fixLoop(),
                                        n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(),
                                        setTimeout(function () {
                                            T.slideTo(n)
                                        }, 0)) : T.slideTo(n)
                        } else
                            T.slideTo(n)
                    }
                }
                ;
            var S, C, z, M, E, P, I, k, L, D, B = "input, select, textarea, button, video", H = Date.now(), G = [];
            T.animating = !1,
                T.touches = {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                };
            var X, A;
            T.onTouchStart = function (a) {
                if (a.originalEvent && (a = a.originalEvent),
                    (X = "touchstart" === a.type) || !("which" in a) || 3 !== a.which) {
                    if (T.params.noSwiping && o(a, "." + T.params.noSwipingClass))
                        return void (T.allowClick = !0);
                    if (!T.params.swipeHandler || o(a, T.params.swipeHandler)) {
                        var t = T.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX
                            , s = T.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                        if (!(T.device.ios && T.params.iOSEdgeSwipeDetection && t <= T.params.iOSEdgeSwipeThreshold)) {
                            if (S = !0,
                                C = !1,
                                z = !0,
                                E = void 0,
                                A = void 0,
                                T.touches.startX = t,
                                T.touches.startY = s,
                                M = Date.now(),
                                T.allowClick = !0,
                                T.updateContainerSize(),
                                T.swipeDirection = void 0,
                                T.params.threshold > 0 && (k = !1),
                                "touchstart" !== a.type) {
                                var i = !0;
                                e(a.target).is(B) && (i = !1),
                                    document.activeElement && e(document.activeElement).is(B) && document.activeElement.blur(),
                                    i && a.preventDefault()
                            }
                            T.emit("onTouchStart", T, a)
                        }
                    }
                }
            }
                ,
                T.onTouchMove = function (a) {
                    if (a.originalEvent && (a = a.originalEvent),
                        !X || "mousemove" !== a.type) {
                        if (a.preventedByNestedSwiper)
                            return T.touches.startX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                                void (T.touches.startY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY);
                        if (T.params.onlyExternal)
                            return T.allowClick = !1,
                                void (S && (T.touches.startX = T.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                                    T.touches.startY = T.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY,
                                    M = Date.now()));
                        if (X && T.params.touchReleaseOnEdges && !T.params.loop)
                            if (T.isHorizontal()) {
                                if (T.touches.currentX < T.touches.startX && T.translate <= T.maxTranslate() || T.touches.currentX > T.touches.startX && T.translate >= T.minTranslate())
                                    return
                            } else if (T.touches.currentY < T.touches.startY && T.translate <= T.maxTranslate() || T.touches.currentY > T.touches.startY && T.translate >= T.minTranslate())
                                return;
                        if (X && document.activeElement && a.target === document.activeElement && e(a.target).is(B))
                            return C = !0,
                                void (T.allowClick = !1);
                        if (z && T.emit("onTouchMove", T, a),
                            !(a.targetTouches && a.targetTouches.length > 1)) {
                            if (T.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                                T.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY,
                                void 0 === E) {
                                var t;
                                T.isHorizontal() && T.touches.currentY === T.touches.startY || !T.isHorizontal() && T.touches.currentX === T.touches.startX ? E = !1 : (t = 180 * Math.atan2(Math.abs(T.touches.currentY - T.touches.startY), Math.abs(T.touches.currentX - T.touches.startX)) / Math.PI,
                                    E = T.isHorizontal() ? t > T.params.touchAngle : 90 - t > T.params.touchAngle)
                            }
                            if (E && T.emit("onTouchMoveOpposite", T, a),
                                void 0 === A && (T.touches.currentX === T.touches.startX && T.touches.currentY === T.touches.startY || (A = !0)),
                                S) {
                                if (E)
                                    return void (S = !1);
                                if (A) {
                                    T.allowClick = !1,
                                        T.emit("onSliderMove", T, a),
                                        a.preventDefault(),
                                        T.params.touchMoveStopPropagation && !T.params.nested && a.stopPropagation(),
                                        C || (i.loop && T.fixLoop(),
                                            I = T.getWrapperTranslate(),
                                            T.setWrapperTransition(0),
                                            T.animating && T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                                            T.params.autoplay && T.autoplaying && (T.params.autoplayDisableOnInteraction ? T.stopAutoplay() : T.pauseAutoplay()),
                                            D = !1,
                                            !T.params.grabCursor || T.params.allowSwipeToNext !== !0 && T.params.allowSwipeToPrev !== !0 || T.setGrabCursor(!0)),
                                        C = !0;
                                    var s = T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY;
                                    s *= T.params.touchRatio,
                                        T.rtl && (s = -s),
                                        T.swipeDirection = s > 0 ? "prev" : "next",
                                        P = s + I;
                                    var r = !0;
                                    if (s > 0 && P > T.minTranslate() ? (r = !1,
                                        T.params.resistance && (P = T.minTranslate() - 1 + Math.pow(-T.minTranslate() + I + s, T.params.resistanceRatio))) : s < 0 && P < T.maxTranslate() && (r = !1,
                                            T.params.resistance && (P = T.maxTranslate() + 1 - Math.pow(T.maxTranslate() - I - s, T.params.resistanceRatio))),
                                        r && (a.preventedByNestedSwiper = !0),
                                        !T.params.allowSwipeToNext && "next" === T.swipeDirection && P < I && (P = I),
                                        !T.params.allowSwipeToPrev && "prev" === T.swipeDirection && P > I && (P = I),
                                        T.params.threshold > 0) {
                                        if (!(Math.abs(s) > T.params.threshold || k))
                                            return void (P = I);
                                        if (!k)
                                            return k = !0,
                                                T.touches.startX = T.touches.currentX,
                                                T.touches.startY = T.touches.currentY,
                                                P = I,
                                                void (T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY)
                                    }
                                    T.params.followFinger && ((T.params.freeMode || T.params.watchSlidesProgress) && T.updateActiveIndex(),
                                        T.params.freeMode && (0 === G.length && G.push({
                                            position: T.touches[T.isHorizontal() ? "startX" : "startY"],
                                            time: M
                                        }),
                                            G.push({
                                                position: T.touches[T.isHorizontal() ? "currentX" : "currentY"],
                                                time: (new window.Date).getTime()
                                            })),
                                        T.updateProgress(P),
                                        T.setWrapperTranslate(P))
                                }
                            }
                        }
                    }
                }
                ,
                T.onTouchEnd = function (a) {
                    if (a.originalEvent && (a = a.originalEvent),
                        z && T.emit("onTouchEnd", T, a),
                        z = !1,
                        S) {
                        T.params.grabCursor && C && S && (T.params.allowSwipeToNext === !0 || T.params.allowSwipeToPrev === !0) && T.setGrabCursor(!1);
                        var t = Date.now()
                            , s = t - M;
                        if (T.allowClick && (T.updateClickedSlide(a),
                            T.emit("onTap", T, a),
                            s < 300 && t - H > 300 && (L && clearTimeout(L),
                                L = setTimeout(function () {
                                    T && (T.params.paginationHide && T.paginationContainer.length > 0 && !e(a.target).hasClass(T.params.bulletClass) && T.paginationContainer.toggleClass(T.params.paginationHiddenClass),
                                        T.emit("onClick", T, a))
                                }, 300)),
                            s < 300 && t - H < 300 && (L && clearTimeout(L),
                                T.emit("onDoubleTap", T, a))),
                            H = Date.now(),
                            setTimeout(function () {
                                T && (T.allowClick = !0)
                            }, 0),
                            !S || !C || !T.swipeDirection || 0 === T.touches.diff || P === I)
                            return void (S = C = !1);
                        S = C = !1;
                        var i;
                        if (i = T.params.followFinger ? T.rtl ? T.translate : -T.translate : -P,
                            T.params.freeMode) {
                            if (i < -T.minTranslate())
                                return void T.slideTo(T.activeIndex);
                            if (i > -T.maxTranslate())
                                return void (T.slides.length < T.snapGrid.length ? T.slideTo(T.snapGrid.length - 1) : T.slideTo(T.slides.length - 1));
                            if (T.params.freeModeMomentum) {
                                if (G.length > 1) {
                                    var r = G.pop()
                                        , n = G.pop()
                                        , o = r.position - n.position
                                        , l = r.time - n.time;
                                    T.velocity = o / l,
                                        T.velocity = T.velocity / 2,
                                        Math.abs(T.velocity) < T.params.freeModeMinimumVelocity && (T.velocity = 0),
                                        (l > 150 || (new window.Date).getTime() - r.time > 300) && (T.velocity = 0)
                                } else
                                    T.velocity = 0;
                                T.velocity = T.velocity * T.params.freeModeMomentumVelocityRatio,
                                    G.length = 0;
                                var p = 1e3 * T.params.freeModeMomentumRatio
                                    , d = T.velocity * p
                                    , u = T.translate + d;
                                T.rtl && (u = -u);
                                var c, m = !1, h = 20 * Math.abs(T.velocity) * T.params.freeModeMomentumBounceRatio;
                                if (u < T.maxTranslate())
                                    T.params.freeModeMomentumBounce ? (u + T.maxTranslate() < -h && (u = T.maxTranslate() - h),
                                        c = T.maxTranslate(),
                                        m = !0,
                                        D = !0) : u = T.maxTranslate();
                                else if (u > T.minTranslate())
                                    T.params.freeModeMomentumBounce ? (u - T.minTranslate() > h && (u = T.minTranslate() + h),
                                        c = T.minTranslate(),
                                        m = !0,
                                        D = !0) : u = T.minTranslate();
                                else if (T.params.freeModeSticky) {
                                    var g, f = 0;
                                    for (f = 0; f < T.snapGrid.length; f += 1)
                                        if (T.snapGrid[f] > -u) {
                                            g = f;
                                            break
                                        }
                                    u = Math.abs(T.snapGrid[g] - u) < Math.abs(T.snapGrid[g - 1] - u) || "next" === T.swipeDirection ? T.snapGrid[g] : T.snapGrid[g - 1],
                                        T.rtl || (u = -u)
                                }
                                if (0 !== T.velocity)
                                    p = T.rtl ? Math.abs((-u - T.translate) / T.velocity) : Math.abs((u - T.translate) / T.velocity);
                                else if (T.params.freeModeSticky)
                                    return void T.slideReset();
                                T.params.freeModeMomentumBounce && m ? (T.updateProgress(c),
                                    T.setWrapperTransition(p),
                                    T.setWrapperTranslate(u),
                                    T.onTransitionStart(),
                                    T.animating = !0,
                                    T.wrapper.transitionEnd(function () {
                                        T && D && (T.emit("onMomentumBounce", T),
                                            T.setWrapperTransition(T.params.speed),
                                            T.setWrapperTranslate(c),
                                            T.wrapper.transitionEnd(function () {
                                                T && T.onTransitionEnd()
                                            }))
                                    })) : T.velocity ? (T.updateProgress(u),
                                        T.setWrapperTransition(p),
                                        T.setWrapperTranslate(u),
                                        T.onTransitionStart(),
                                        T.animating || (T.animating = !0,
                                            T.wrapper.transitionEnd(function () {
                                                T && T.onTransitionEnd()
                                            }))) : T.updateProgress(u),
                                    T.updateActiveIndex()
                            }
                            return void ((!T.params.freeModeMomentum || s >= T.params.longSwipesMs) && (T.updateProgress(),
                                T.updateActiveIndex()))
                        }
                        var v, w = 0, y = T.slidesSizesGrid[0];
                        for (v = 0; v < T.slidesGrid.length; v += T.params.slidesPerGroup)
                            void 0 !== T.slidesGrid[v + T.params.slidesPerGroup] ? i >= T.slidesGrid[v] && i < T.slidesGrid[v + T.params.slidesPerGroup] && (w = v,
                                y = T.slidesGrid[v + T.params.slidesPerGroup] - T.slidesGrid[v]) : i >= T.slidesGrid[v] && (w = v,
                                    y = T.slidesGrid[T.slidesGrid.length - 1] - T.slidesGrid[T.slidesGrid.length - 2]);
                        var x = (i - T.slidesGrid[w]) / y;
                        if (s > T.params.longSwipesMs) {
                            if (!T.params.longSwipes)
                                return void T.slideTo(T.activeIndex);
                            "next" === T.swipeDirection && (x >= T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w)),
                                "prev" === T.swipeDirection && (x > 1 - T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w))
                        } else {
                            if (!T.params.shortSwipes)
                                return void T.slideTo(T.activeIndex);
                            "next" === T.swipeDirection && T.slideTo(w + T.params.slidesPerGroup),
                                "prev" === T.swipeDirection && T.slideTo(w)
                        }
                    }
                }
                ,
                T._slideTo = function (e, a) {
                    return T.slideTo(e, a, !0, !0)
                }
                ,
                T.slideTo = function (e, a, t, s) {
                    void 0 === t && (t = !0),
                        void 0 === e && (e = 0),
                        e < 0 && (e = 0),
                        T.snapIndex = Math.floor(e / T.params.slidesPerGroup),
                        T.snapIndex >= T.snapGrid.length && (T.snapIndex = T.snapGrid.length - 1);
                    var i = -T.snapGrid[T.snapIndex];
                    if (T.params.autoplay && T.autoplaying && (s || !T.params.autoplayDisableOnInteraction ? T.pauseAutoplay(a) : T.stopAutoplay()),
                        T.updateProgress(i),
                        T.params.normalizeSlideIndex)
                        for (var r = 0; r < T.slidesGrid.length; r++)
                            -Math.floor(100 * i) >= Math.floor(100 * T.slidesGrid[r]) && (e = r);
                    return !(!T.params.allowSwipeToNext && i < T.translate && i < T.minTranslate()) && (!(!T.params.allowSwipeToPrev && i > T.translate && i > T.maxTranslate() && (T.activeIndex || 0) !== e) && (void 0 === a && (a = T.params.speed),
                        T.previousIndex = T.activeIndex || 0,
                        T.activeIndex = e,
                        T.updateRealIndex(),
                        T.rtl && -i === T.translate || !T.rtl && i === T.translate ? (T.params.autoHeight && T.updateAutoHeight(),
                            T.updateClasses(),
                            "slide" !== T.params.effect && T.setWrapperTranslate(i),
                            !1) : (T.updateClasses(),
                                T.onTransitionStart(t),
                                0 === a || T.browser.lteIE9 ? (T.setWrapperTranslate(i),
                                    T.setWrapperTransition(0),
                                    T.onTransitionEnd(t)) : (T.setWrapperTranslate(i),
                                        T.setWrapperTransition(a),
                                        T.animating || (T.animating = !0,
                                            T.wrapper.transitionEnd(function () {
                                                T && T.onTransitionEnd(t)
                                            }))),
                                !0)))
                }
                ,
                T.onTransitionStart = function (e) {
                    void 0 === e && (e = !0),
                        T.params.autoHeight && T.updateAutoHeight(),
                        T.lazy && T.lazy.onTransitionStart(),
                        e && (T.emit("onTransitionStart", T),
                            T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeStart", T),
                                T.activeIndex > T.previousIndex ? T.emit("onSlideNextStart", T) : T.emit("onSlidePrevStart", T)))
                }
                ,
                T.onTransitionEnd = function (e) {
                    T.animating = !1,
                        T.setWrapperTransition(0),
                        void 0 === e && (e = !0),
                        T.lazy && T.lazy.onTransitionEnd(),
                        e && (T.emit("onTransitionEnd", T),
                            T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeEnd", T),
                                T.activeIndex > T.previousIndex ? T.emit("onSlideNextEnd", T) : T.emit("onSlidePrevEnd", T))),
                        T.params.history && T.history && T.history.setHistory(T.params.history, T.activeIndex),
                        T.params.hashnav && T.hashnav && T.hashnav.setHash()
                }
                ,
                T.slideNext = function (e, a, t) {
                    if (T.params.loop) {
                        if (T.animating)
                            return !1;
                        T.fixLoop();
                        T.container[0].clientLeft;
                        return T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t)
                    }
                    return T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t)
                }
                ,
                T._slideNext = function (e) {
                    return T.slideNext(!0, e, !0)
                }
                ,
                T.slidePrev = function (e, a, t) {
                    if (T.params.loop) {
                        if (T.animating)
                            return !1;
                        T.fixLoop();
                        T.container[0].clientLeft;
                        return T.slideTo(T.activeIndex - 1, a, e, t)
                    }
                    return T.slideTo(T.activeIndex - 1, a, e, t)
                }
                ,
                T._slidePrev = function (e) {
                    return T.slidePrev(!0, e, !0)
                }
                ,
                T.slideReset = function (e, a, t) {
                    return T.slideTo(T.activeIndex, a, e)
                }
                ,
                T.disableTouchControl = function () {
                    return T.params.onlyExternal = !0,
                        !0
                }
                ,
                T.enableTouchControl = function () {
                    return T.params.onlyExternal = !1,
                        !0
                }
                ,
                T.setWrapperTransition = function (e, a) {
                    T.wrapper.transition(e),
                        "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTransition(e),
                        T.params.parallax && T.parallax && T.parallax.setTransition(e),
                        T.params.scrollbar && T.scrollbar && T.scrollbar.setTransition(e),
                        T.params.control && T.controller && T.controller.setTransition(e, a),
                        T.emit("onSetTransition", T, e)
                }
                ,
                T.setWrapperTranslate = function (e, a, t) {
                    var s = 0
                        , i = 0;
                    T.isHorizontal() ? s = T.rtl ? -e : e : i = e,
                        T.params.roundLengths && (s = r(s),
                            i = r(i)),
                        T.params.virtualTranslate || (T.support.transforms3d ? T.wrapper.transform("translate3d(" + s + "px, " + i + "px, 0px)") : T.wrapper.transform("translate(" + s + "px, " + i + "px)")),
                        T.translate = T.isHorizontal() ? s : i;
                    var n, o = T.maxTranslate() - T.minTranslate();
                    n = 0 === o ? 0 : (e - T.minTranslate()) / o,
                        n !== T.progress && T.updateProgress(e),
                        a && T.updateActiveIndex(),
                        "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTranslate(T.translate),
                        T.params.parallax && T.parallax && T.parallax.setTranslate(T.translate),
                        T.params.scrollbar && T.scrollbar && T.scrollbar.setTranslate(T.translate),
                        T.params.control && T.controller && T.controller.setTranslate(T.translate, t),
                        T.emit("onSetTranslate", T, T.translate)
                }
                ,
                T.getTranslate = function (e, a) {
                    var t, s, i, r;
                    return void 0 === a && (a = "x"),
                        T.params.virtualTranslate ? T.rtl ? -T.translate : T.translate : (i = window.getComputedStyle(e, null),
                            window.WebKitCSSMatrix ? (s = i.transform || i.webkitTransform,
                                s.split(",").length > 6 && (s = s.split(", ").map(function (e) {
                                    return e.replace(",", ".")
                                }).join(", ")),
                                r = new window.WebKitCSSMatrix("none" === s ? "" : s)) : (r = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                                    t = r.toString().split(",")),
                            "x" === a && (s = window.WebKitCSSMatrix ? r.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])),
                            "y" === a && (s = window.WebKitCSSMatrix ? r.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])),
                            T.rtl && s && (s = -s),
                            s || 0)
                }
                ,
                T.getWrapperTranslate = function (e) {
                    return void 0 === e && (e = T.isHorizontal() ? "x" : "y"),
                        T.getTranslate(T.wrapper[0], e)
                }
                ,
                T.observers = [],
                T.initObservers = function () {
                    if (T.params.observeParents)
                        for (var e = T.container.parents(), a = 0; a < e.length; a++)
                            l(e[a]);
                    l(T.container[0], {
                        childList: !1
                    }),
                        l(T.wrapper[0], {
                            attributes: !1
                        })
                }
                ,
                T.disconnectObservers = function () {
                    for (var e = 0; e < T.observers.length; e++)
                        T.observers[e].disconnect();
                    T.observers = []
                }
                ,
                T.createLoop = function () {
                    T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove();
                    var a = T.wrapper.children("." + T.params.slideClass);
                    "auto" !== T.params.slidesPerView || T.params.loopedSlides || (T.params.loopedSlides = a.length),
                        T.loopedSlides = parseInt(T.params.loopedSlides || T.params.slidesPerView, 10),
                        T.loopedSlides = T.loopedSlides + T.params.loopAdditionalSlides,
                        T.loopedSlides > a.length && (T.loopedSlides = a.length);
                    var t, s = [], i = [];
                    for (a.each(function (t, r) {
                        var n = e(this);
                        t < T.loopedSlides && i.push(r),
                            t < a.length && t >= a.length - T.loopedSlides && s.push(r),
                            n.attr("data-swiper-slide-index", t)
                    }),
                        t = 0; t < i.length; t++)
                        T.wrapper.append(e(i[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));
                    for (t = s.length - 1; t >= 0; t--)
                        T.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass))
                }
                ,
                T.destroyLoop = function () {
                    T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove(),
                        T.slides.removeAttr("data-swiper-slide-index")
                }
                ,
                T.reLoop = function (e) {
                    var a = T.activeIndex - T.loopedSlides;
                    T.destroyLoop(),
                        T.createLoop(),
                        T.updateSlidesSize(),
                        e && T.slideTo(a + T.loopedSlides, 0, !1)
                }
                ,
                T.fixLoop = function () {
                    var e;
                    T.activeIndex < T.loopedSlides ? (e = T.slides.length - 3 * T.loopedSlides + T.activeIndex,
                        e += T.loopedSlides,
                        T.slideTo(e, 0, !1, !0)) : ("auto" === T.params.slidesPerView && T.activeIndex >= 2 * T.loopedSlides || T.activeIndex > T.slides.length - 2 * T.params.slidesPerView) && (e = -T.slides.length + T.activeIndex + T.loopedSlides,
                            e += T.loopedSlides,
                            T.slideTo(e, 0, !1, !0))
                }
                ,
                T.appendSlide = function (e) {
                    if (T.params.loop && T.destroyLoop(),
                        "object" == typeof e && e.length)
                        for (var a = 0; a < e.length; a++)
                            e[a] && T.wrapper.append(e[a]);
                    else
                        T.wrapper.append(e);
                    T.params.loop && T.createLoop(),
                        T.params.observer && T.support.observer || T.update(!0)
                }
                ,
                T.prependSlide = function (e) {
                    T.params.loop && T.destroyLoop();
                    var a = T.activeIndex + 1;
                    if ("object" == typeof e && e.length) {
                        for (var t = 0; t < e.length; t++)
                            e[t] && T.wrapper.prepend(e[t]);
                        a = T.activeIndex + e.length
                    } else
                        T.wrapper.prepend(e);
                    T.params.loop && T.createLoop(),
                        T.params.observer && T.support.observer || T.update(!0),
                        T.slideTo(a, 0, !1)
                }
                ,
                T.removeSlide = function (e) {
                    T.params.loop && (T.destroyLoop(),
                        T.slides = T.wrapper.children("." + T.params.slideClass));
                    var a, t = T.activeIndex;
                    if ("object" == typeof e && e.length) {
                        for (var s = 0; s < e.length; s++)
                            a = e[s],
                                T.slides[a] && T.slides.eq(a).remove(),
                                a < t && t--;
                        t = Math.max(t, 0)
                    } else
                        a = e,
                            T.slides[a] && T.slides.eq(a).remove(),
                            a < t && t--,
                            t = Math.max(t, 0);
                    T.params.loop && T.createLoop(),
                        T.params.observer && T.support.observer || T.update(!0),
                        T.params.loop ? T.slideTo(t + T.loopedSlides, 0, !1) : T.slideTo(t, 0, !1)
                }
                ,
                T.removeAllSlides = function () {
                    for (var e = [], a = 0; a < T.slides.length; a++)
                        e.push(a);
                    T.removeSlide(e)
                }
                ,
                T.effects = {
                    fade: {
                        setTranslate: function () {
                            for (var e = 0; e < T.slides.length; e++) {
                                var a = T.slides.eq(e)
                                    , t = a[0].swiperSlideOffset
                                    , s = -t;
                                T.params.virtualTranslate || (s -= T.translate);
                                var i = 0;
                                T.isHorizontal() || (i = s,
                                    s = 0);
                                var r = T.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                                a.css({
                                    opacity: r
                                }).transform("translate3d(" + s + "px, " + i + "px, 0px)")
                            }
                        },
                        setTransition: function (e) {
                            if (T.slides.transition(e),
                                T.params.virtualTranslate && 0 !== e) {
                                var a = !1;
                                T.slides.transitionEnd(function () {
                                    if (!a && T) {
                                        a = !0,
                                            T.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++)
                                            T.wrapper.trigger(e[t])
                                    }
                                })
                            }
                        }
                    },
                    flip: {
                        setTranslate: function () {
                            for (var a = 0; a < T.slides.length; a++) {
                                var t = T.slides.eq(a)
                                    , s = t[0].progress;
                                T.params.flip.limitRotation && (s = Math.max(Math.min(t[0].progress, 1), -1));
                                var i = t[0].swiperSlideOffset
                                    , r = -180 * s
                                    , n = r
                                    , o = 0
                                    , l = -i
                                    , p = 0;
                                if (T.isHorizontal() ? T.rtl && (n = -n) : (p = l,
                                    l = 0,
                                    o = -n,
                                    n = 0),
                                    t[0].style.zIndex = -Math.abs(Math.round(s)) + T.slides.length,
                                    T.params.flip.slideShadows) {
                                    var d = T.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                                        , u = T.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                    0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'),
                                        t.append(d)),
                                        0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                            t.append(u)),
                                        d.length && (d[0].style.opacity = Math.max(-s, 0)),
                                        u.length && (u[0].style.opacity = Math.max(s, 0))
                                }
                                t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                            }
                        },
                        setTransition: function (a) {
                            if (T.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),
                                T.params.virtualTranslate && 0 !== a) {
                                var t = !1;
                                T.slides.eq(T.activeIndex).transitionEnd(function () {
                                    if (!t && T && e(this).hasClass(T.params.slideActiveClass)) {
                                        t = !0,
                                            T.animating = !1;
                                        for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], s = 0; s < a.length; s++)
                                            T.wrapper.trigger(a[s])
                                    }
                                })
                            }
                        }
                    },
                    cube: {
                        setTranslate: function () {
                            var a, t = 0;
                            T.params.cube.shadow && (T.isHorizontal() ? (a = T.wrapper.find(".swiper-cube-shadow"),
                                0 === a.length && (a = e('<div class="swiper-cube-shadow"></div>'),
                                    T.wrapper.append(a)),
                                a.css({
                                    height: T.width + "px"
                                })) : (a = T.container.find(".swiper-cube-shadow"),
                                    0 === a.length && (a = e('<div class="swiper-cube-shadow"></div>'),
                                        T.container.append(a))));
                            for (var s = 0; s < T.slides.length; s++) {
                                var i = T.slides.eq(s)
                                    , r = 90 * s
                                    , n = Math.floor(r / 360);
                                T.rtl && (r = -r,
                                    n = Math.floor(-r / 360));
                                var o = Math.max(Math.min(i[0].progress, 1), -1)
                                    , l = 0
                                    , p = 0
                                    , d = 0;
                                s % 4 == 0 ? (l = 4 * -n * T.size,
                                    d = 0) : (s - 1) % 4 == 0 ? (l = 0,
                                        d = 4 * -n * T.size) : (s - 2) % 4 == 0 ? (l = T.size + 4 * n * T.size,
                                            d = T.size) : (s - 3) % 4 == 0 && (l = -T.size,
                                                d = 3 * T.size + 4 * T.size * n),
                                    T.rtl && (l = -l),
                                    T.isHorizontal() || (p = l,
                                        l = 0);
                                var u = "rotateX(" + (T.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (T.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
                                if (o <= 1 && o > -1 && (t = 90 * s + 90 * o,
                                    T.rtl && (t = 90 * -s - 90 * o)),
                                    i.transform(u),
                                    T.params.cube.slideShadows) {
                                    var c = T.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top")
                                        , m = T.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                    0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'),
                                        i.append(c)),
                                        0 === m.length && (m = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                            i.append(m)),
                                        c.length && (c[0].style.opacity = Math.max(-o, 0)),
                                        m.length && (m[0].style.opacity = Math.max(o, 0))
                                }
                            }
                            if (T.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                "transform-origin": "50% 50% -" + T.size / 2 + "px"
                            }),
                                T.params.cube.shadow)
                                if (T.isHorizontal())
                                    a.transform("translate3d(0px, " + (T.width / 2 + T.params.cube.shadowOffset) + "px, " + -T.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + T.params.cube.shadowScale + ")");
                                else {
                                    var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90)
                                        , g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2)
                                        , f = T.params.cube.shadowScale
                                        , v = T.params.cube.shadowScale / g
                                        , w = T.params.cube.shadowOffset;
                                    a.transform("scale3d(" + f + ", 1, " + v + ") translate3d(0px, " + (T.height / 2 + w) + "px, " + -T.height / 2 / v + "px) rotateX(-90deg)")
                                }
                            var y = T.isSafari || T.isUiWebView ? -T.size / 2 : 0;
                            T.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (T.isHorizontal() ? 0 : t) + "deg) rotateY(" + (T.isHorizontal() ? -t : 0) + "deg)")
                        },
                        setTransition: function (e) {
                            T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                                T.params.cube.shadow && !T.isHorizontal() && T.container.find(".swiper-cube-shadow").transition(e)
                        }
                    },
                    coverflow: {
                        setTranslate: function () {
                            for (var a = T.translate, t = T.isHorizontal() ? -a + T.width / 2 : -a + T.height / 2, s = T.isHorizontal() ? T.params.coverflow.rotate : -T.params.coverflow.rotate, i = T.params.coverflow.depth, r = 0, n = T.slides.length; r < n; r++) {
                                var o = T.slides.eq(r)
                                    , l = T.slidesSizesGrid[r]
                                    , p = o[0].swiperSlideOffset
                                    , d = (t - p - l / 2) / l * T.params.coverflow.modifier
                                    , u = T.isHorizontal() ? s * d : 0
                                    , c = T.isHorizontal() ? 0 : s * d
                                    , m = -i * Math.abs(d)
                                    , h = T.isHorizontal() ? 0 : T.params.coverflow.stretch * d
                                    , g = T.isHorizontal() ? T.params.coverflow.stretch * d : 0;
                                Math.abs(g) < .001 && (g = 0),
                                    Math.abs(h) < .001 && (h = 0),
                                    Math.abs(m) < .001 && (m = 0),
                                    Math.abs(u) < .001 && (u = 0),
                                    Math.abs(c) < .001 && (c = 0);
                                var f = "translate3d(" + g + "px," + h + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
                                if (o.transform(f),
                                    o[0].style.zIndex = 1 - Math.abs(Math.round(d)),
                                    T.params.coverflow.slideShadows) {
                                    var v = T.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top")
                                        , w = T.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                    0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'),
                                        o.append(v)),
                                        0 === w.length && (w = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                            o.append(w)),
                                        v.length && (v[0].style.opacity = d > 0 ? d : 0),
                                        w.length && (w[0].style.opacity = -d > 0 ? -d : 0)
                                }
                            }
                            if (T.browser.ie) {
                                T.wrapper[0].style.perspectiveOrigin = t + "px 50%"
                            }
                        },
                        setTransition: function (e) {
                            T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                },
                T.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function (a, t) {
                        if (void 0 !== a && (void 0 === t && (t = !0),
                            0 !== T.slides.length)) {
                            var s = T.slides.eq(a)
                                , i = s.find("." + T.params.lazyLoadingClass + ":not(." + T.params.lazyStatusLoadedClass + "):not(." + T.params.lazyStatusLoadingClass + ")");
                            !s.hasClass(T.params.lazyLoadingClass) || s.hasClass(T.params.lazyStatusLoadedClass) || s.hasClass(T.params.lazyStatusLoadingClass) || (i = i.add(s[0])),
                                0 !== i.length && i.each(function () {
                                    var a = e(this);
                                    a.addClass(T.params.lazyStatusLoadingClass);
                                    var i = a.attr("data-background")
                                        , r = a.attr("data-src")
                                        , n = a.attr("data-srcset")
                                        , o = a.attr("data-sizes");
                                    T.loadImage(a[0], r || i, n, o, !1, function () {
                                        if (void 0 !== T && null !== T && T) {
                                            if (i ? (a.css("background-image", 'url("' + i + '")'),
                                                a.removeAttr("data-background")) : (n && (a.attr("srcset", n),
                                                    a.removeAttr("data-srcset")),
                                                    o && (a.attr("sizes", o),
                                                        a.removeAttr("data-sizes")),
                                                    r && (a.attr("src", r),
                                                        a.removeAttr("data-src"))),
                                                a.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass),
                                                s.find("." + T.params.lazyPreloaderClass + ", ." + T.params.preloaderClass).remove(),
                                                T.params.loop && t) {
                                                var e = s.attr("data-swiper-slide-index");
                                                if (s.hasClass(T.params.slideDuplicateClass)) {
                                                    var l = T.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + T.params.slideDuplicateClass + ")");
                                                    T.lazy.loadImageInSlide(l.index(), !1)
                                                } else {
                                                    var p = T.wrapper.children("." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                    T.lazy.loadImageInSlide(p.index(), !1)
                                                }
                                            }
                                            T.emit("onLazyImageReady", T, s[0], a[0])
                                        }
                                    }),
                                        T.emit("onLazyImageLoad", T, s[0], a[0])
                                })
                        }
                    },
                    load: function () {
                        var a, t = T.params.slidesPerView;
                        if ("auto" === t && (t = 0),
                            T.lazy.initialImageLoaded || (T.lazy.initialImageLoaded = !0),
                            T.params.watchSlidesVisibility)
                            T.wrapper.children("." + T.params.slideVisibleClass).each(function () {
                                T.lazy.loadImageInSlide(e(this).index())
                            });
                        else if (t > 1)
                            for (a = T.activeIndex; a < T.activeIndex + t; a++)
                                T.slides[a] && T.lazy.loadImageInSlide(a);
                        else
                            T.lazy.loadImageInSlide(T.activeIndex);
                        if (T.params.lazyLoadingInPrevNext)
                            if (t > 1 || T.params.lazyLoadingInPrevNextAmount && T.params.lazyLoadingInPrevNextAmount > 1) {
                                var s = T.params.lazyLoadingInPrevNextAmount
                                    , i = t
                                    , r = Math.min(T.activeIndex + i + Math.max(s, i), T.slides.length)
                                    , n = Math.max(T.activeIndex - Math.max(i, s), 0);
                                for (a = T.activeIndex + t; a < r; a++)
                                    T.slides[a] && T.lazy.loadImageInSlide(a);
                                for (a = n; a < T.activeIndex; a++)
                                    T.slides[a] && T.lazy.loadImageInSlide(a)
                            } else {
                                var o = T.wrapper.children("." + T.params.slideNextClass);
                                o.length > 0 && T.lazy.loadImageInSlide(o.index());
                                var l = T.wrapper.children("." + T.params.slidePrevClass);
                                l.length > 0 && T.lazy.loadImageInSlide(l.index())
                            }
                    },
                    onTransitionStart: function () {
                        T.params.lazyLoading && (T.params.lazyLoadingOnTransitionStart || !T.params.lazyLoadingOnTransitionStart && !T.lazy.initialImageLoaded) && T.lazy.load()
                    },
                    onTransitionEnd: function () {
                        T.params.lazyLoading && !T.params.lazyLoadingOnTransitionStart && T.lazy.load()
                    }
                },
                T.scrollbar = {
                    isTouched: !1,
                    setDragPosition: function (e) {
                        var a = T.scrollbar
                            , t = T.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
                            , s = t - a.track.offset()[T.isHorizontal() ? "left" : "top"] - a.dragSize / 2
                            , i = -T.minTranslate() * a.moveDivider
                            , r = -T.maxTranslate() * a.moveDivider;
                        s < i ? s = i : s > r && (s = r),
                            s = -s / a.moveDivider,
                            T.updateProgress(s),
                            T.setWrapperTranslate(s, !0)
                    },
                    dragStart: function (e) {
                        var a = T.scrollbar;
                        a.isTouched = !0,
                            e.preventDefault(),
                            e.stopPropagation(),
                            a.setDragPosition(e),
                            clearTimeout(a.dragTimeout),
                            a.track.transition(0),
                            T.params.scrollbarHide && a.track.css("opacity", 1),
                            T.wrapper.transition(100),
                            a.drag.transition(100),
                            T.emit("onScrollbarDragStart", T)
                    },
                    dragMove: function (e) {
                        var a = T.scrollbar;
                        a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                            a.setDragPosition(e),
                            T.wrapper.transition(0),
                            a.track.transition(0),
                            a.drag.transition(0),
                            T.emit("onScrollbarDragMove", T))
                    },
                    dragEnd: function (e) {
                        var a = T.scrollbar;
                        a.isTouched && (a.isTouched = !1,
                            T.params.scrollbarHide && (clearTimeout(a.dragTimeout),
                                a.dragTimeout = setTimeout(function () {
                                    a.track.css("opacity", 0),
                                        a.track.transition(400)
                                }, 1e3)),
                            T.emit("onScrollbarDragEnd", T),
                            T.params.scrollbarSnapOnRelease && T.slideReset())
                    },
                    draggableEvents: function () {
                        return T.params.simulateTouch !== !1 || T.support.touch ? T.touchEvents : T.touchEventsDesktop
                    }(),
                    enableDraggable: function () {
                        var a = T.scrollbar
                            , t = T.support.touch ? a.track : document;
                        e(a.track).on(a.draggableEvents.start, a.dragStart),
                            e(t).on(a.draggableEvents.move, a.dragMove),
                            e(t).on(a.draggableEvents.end, a.dragEnd)
                    },
                    disableDraggable: function () {
                        var a = T.scrollbar
                            , t = T.support.touch ? a.track : document;
                        e(a.track).off(a.draggableEvents.start, a.dragStart),
                            e(t).off(a.draggableEvents.move, a.dragMove),
                            e(t).off(a.draggableEvents.end, a.dragEnd)
                    },
                    set: function () {
                        if (T.params.scrollbar) {
                            var a = T.scrollbar;
                            a.track = e(T.params.scrollbar),
                                T.params.uniqueNavElements && "string" == typeof T.params.scrollbar && a.track.length > 1 && 1 === T.container.find(T.params.scrollbar).length && (a.track = T.container.find(T.params.scrollbar)),
                                a.drag = a.track.find(".swiper-scrollbar-drag"),
                                0 === a.drag.length && (a.drag = e('<div class="swiper-scrollbar-drag"></div>'),
                                    a.track.append(a.drag)),
                                a.drag[0].style.width = "",
                                a.drag[0].style.height = "",
                                a.trackSize = T.isHorizontal() ? a.track[0].offsetWidth : a.track[0].offsetHeight,
                                a.divider = T.size / T.virtualSize,
                                a.moveDivider = a.divider * (a.trackSize / T.size),
                                a.dragSize = a.trackSize * a.divider,
                                T.isHorizontal() ? a.drag[0].style.width = a.dragSize + "px" : a.drag[0].style.height = a.dragSize + "px",
                                a.divider >= 1 ? a.track[0].style.display = "none" : a.track[0].style.display = "",
                                T.params.scrollbarHide && (a.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function () {
                        if (T.params.scrollbar) {
                            var e, a = T.scrollbar, t = (T.translate,
                                a.dragSize);
                            e = (a.trackSize - a.dragSize) * T.progress,
                                T.rtl && T.isHorizontal() ? (e = -e,
                                    e > 0 ? (t = a.dragSize - e,
                                        e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : e < 0 ? (t = a.dragSize + e,
                                            e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e),
                                T.isHorizontal() ? (T.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"),
                                    a.drag[0].style.width = t + "px") : (T.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"),
                                        a.drag[0].style.height = t + "px"),
                                T.params.scrollbarHide && (clearTimeout(a.timeout),
                                    a.track[0].style.opacity = 1,
                                    a.timeout = setTimeout(function () {
                                        a.track[0].style.opacity = 0,
                                            a.track.transition(400)
                                    }, 1e3))
                        }
                    },
                    setTransition: function (e) {
                        T.params.scrollbar && T.scrollbar.drag.transition(e)
                    }
                },
                T.controller = {
                    LinearSpline: function (e, a) {
                        var t = function () {
                            var e, a, t;
                            return function (s, i) {
                                for (a = -1,
                                    e = s.length; e - a > 1;)
                                    s[t = e + a >> 1] <= i ? a = t : e = t;
                                return e
                            }
                        }();
                        this.x = e,
                            this.y = a,
                            this.lastIndex = e.length - 1;
                        var s, i;
                        this.x.length;
                        this.interpolate = function (e) {
                            return e ? (i = t(this.x, e),
                                s = i - 1,
                                (e - this.x[s]) * (this.y[i] - this.y[s]) / (this.x[i] - this.x[s]) + this.y[s]) : 0
                        }
                    },
                    getInterpolateFunction: function (e) {
                        T.controller.spline || (T.controller.spline = T.params.loop ? new T.controller.LinearSpline(T.slidesGrid, e.slidesGrid) : new T.controller.LinearSpline(T.snapGrid, e.snapGrid))
                    },
                    setTranslate: function (e, t) {
                        function s(a) {
                            e = a.rtl && "horizontal" === a.params.direction ? -T.translate : T.translate,
                                "slide" === T.params.controlBy && (T.controller.getInterpolateFunction(a),
                                    r = -T.controller.spline.interpolate(-e)),
                                r && "container" !== T.params.controlBy || (i = (a.maxTranslate() - a.minTranslate()) / (T.maxTranslate() - T.minTranslate()),
                                    r = (e - T.minTranslate()) * i + a.minTranslate()),
                                T.params.controlInverse && (r = a.maxTranslate() - r),
                                a.updateProgress(r),
                                a.setWrapperTranslate(r, !1, T),
                                a.updateActiveIndex()
                        }
                        var i, r, n = T.params.control;
                        if (Array.isArray(n))
                            for (var o = 0; o < n.length; o++)
                                n[o] !== t && n[o] instanceof a && s(n[o]);
                        else
                            n instanceof a && t !== n && s(n)
                    },
                    setTransition: function (e, t) {
                        function s(a) {
                            a.setWrapperTransition(e, T),
                                0 !== e && (a.onTransitionStart(),
                                    a.wrapper.transitionEnd(function () {
                                        r && (a.params.loop && "slide" === T.params.controlBy && a.fixLoop(),
                                            a.onTransitionEnd())
                                    }))
                        }
                        var i, r = T.params.control;
                        if (Array.isArray(r))
                            for (i = 0; i < r.length; i++)
                                r[i] !== t && r[i] instanceof a && s(r[i]);
                        else
                            r instanceof a && t !== r && s(r)
                    }
                },
                T.hashnav = {
                    onHashCange: function (e, a) {
                        var t = document.location.hash.replace("#", "");
                        t !== T.slides.eq(T.activeIndex).attr("data-hash") && T.slideTo(T.wrapper.children("." + T.params.slideClass + '[data-hash="' + t + '"]').index())
                    },
                    attachEvents: function (a) {
                        var t = a ? "off" : "on";
                        e(window)[t]("hashchange", T.hashnav.onHashCange)
                    },
                    setHash: function () {
                        if (T.hashnav.initialized && T.params.hashnav)
                            if (T.params.replaceState && window.history && window.history.replaceState)
                                window.history.replaceState(null, null, "#" + T.slides.eq(T.activeIndex).attr("data-hash") || "");
                            else {
                                var e = T.slides.eq(T.activeIndex)
                                    , a = e.attr("data-hash") || e.attr("data-history");
                                document.location.hash = a || ""
                            }
                    },
                    init: function () {
                        if (T.params.hashnav && !T.params.history) {
                            T.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e)
                                for (var a = 0, t = T.slides.length; a < t; a++) {
                                    var s = T.slides.eq(a)
                                        , i = s.attr("data-hash") || s.attr("data-history");
                                    if (i === e && !s.hasClass(T.params.slideDuplicateClass)) {
                                        var r = s.index();
                                        T.slideTo(r, 0, T.params.runCallbacksOnInit, !0)
                                    }
                                }
                            T.params.hashnavWatchState && T.hashnav.attachEvents()
                        }
                    },
                    destroy: function () {
                        T.params.hashnavWatchState && T.hashnav.attachEvents(!0)
                    }
                },
                T.history = {
                    init: function () {
                        if (T.params.history) {
                            if (!window.history || !window.history.pushState)
                                return T.params.history = !1,
                                    void (T.params.hashnav = !0);
                            T.history.initialized = !0,
                                this.paths = this.getPathValues(),
                                (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, T.params.runCallbacksOnInit),
                                    T.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                        }
                    },
                    setHistoryPopState: function () {
                        T.history.paths = T.history.getPathValues(),
                            T.history.scrollToSlide(T.params.speed, T.history.paths.value, !1)
                    },
                    getPathValues: function () {
                        var e = window.location.pathname.slice(1).split("/")
                            , a = e.length;
                        return {
                            key: e[a - 2],
                            value: e[a - 1]
                        }
                    },
                    setHistory: function (e, a) {
                        if (T.history.initialized && T.params.history) {
                            var t = T.slides.eq(a)
                                , s = this.slugify(t.attr("data-history"));
                            window.location.pathname.includes(e) || (s = e + "/" + s),
                                T.params.replaceState ? window.history.replaceState(null, null, s) : window.history.pushState(null, null, s)
                        }
                    },
                    slugify: function (e) {
                        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    },
                    scrollToSlide: function (e, a, t) {
                        if (a)
                            for (var s = 0, i = T.slides.length; s < i; s++) {
                                var r = T.slides.eq(s)
                                    , n = this.slugify(r.attr("data-history"));
                                if (n === a && !r.hasClass(T.params.slideDuplicateClass)) {
                                    var o = r.index();
                                    T.slideTo(o, e, t)
                                }
                            }
                        else
                            T.slideTo(0, e, t)
                    }
                },
                T.disableKeyboardControl = function () {
                    T.params.keyboardControl = !1,
                        e(document).off("keydown", p)
                }
                ,
                T.enableKeyboardControl = function () {
                    T.params.keyboardControl = !0,
                        e(document).on("keydown", p)
                }
                ,
                T.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                },
                T.params.mousewheelControl && (T.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                    var e = "onwheel" in document;
                    if (!e) {
                        var a = document.createElement("div");
                        a.setAttribute("onwheel", "return;"),
                            e = "function" == typeof a.onwheel
                    }
                    return !e && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (e = document.implementation.hasFeature("Events.wheel", "3.0")),
                        e
                }() ? "wheel" : "mousewheel"),
                T.disableMousewheelControl = function () {
                    if (!T.mousewheel.event)
                        return !1;
                    var a = T.container;
                    return "container" !== T.params.mousewheelEventsTarged && (a = e(T.params.mousewheelEventsTarged)),
                        a.off(T.mousewheel.event, u),
                        T.params.mousewheelControl = !1,
                        !0
                }
                ,
                T.enableMousewheelControl = function () {
                    if (!T.mousewheel.event)
                        return !1;
                    var a = T.container;
                    return "container" !== T.params.mousewheelEventsTarged && (a = e(T.params.mousewheelEventsTarged)),
                        a.on(T.mousewheel.event, u),
                        T.params.mousewheelControl = !0,
                        !0
                }
                ,
                T.parallax = {
                    setTranslate: function () {
                        T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                            c(this, T.progress)
                        }),
                            T.slides.each(function () {
                                var a = e(this);
                                a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                    c(this, Math.min(Math.max(a[0].progress, -1), 1))
                                })
                            })
                    },
                    setTransition: function (a) {
                        void 0 === a && (a = T.params.speed),
                            T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                                var t = e(this)
                                    , s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || a;
                                0 === a && (s = 0),
                                    t.transition(s)
                            })
                    }
                },
                T.zoom = {
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        slide: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        image: void 0,
                        imageWrap: void 0,
                        zoomMax: T.params.zoomMax
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    },
                    getDistanceBetweenTouches: function (e) {
                        if (e.targetTouches.length < 2)
                            return 1;
                        var a = e.targetTouches[0].pageX
                            , t = e.targetTouches[0].pageY
                            , s = e.targetTouches[1].pageX
                            , i = e.targetTouches[1].pageY;
                        return Math.sqrt(Math.pow(s - a, 2) + Math.pow(i - t, 2))
                    },
                    onGestureStart: function (a) {
                        var t = T.zoom;
                        if (!T.support.gestures) {
                            if ("touchstart" !== a.type || "touchstart" === a.type && a.targetTouches.length < 2)
                                return;
                            t.gesture.scaleStart = t.getDistanceBetweenTouches(a)
                        }
                        if (!(t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = e(this),
                            0 === t.gesture.slide.length && (t.gesture.slide = T.slides.eq(T.activeIndex)),
                            t.gesture.image = t.gesture.slide.find("img, svg, canvas"),
                            t.gesture.imageWrap = t.gesture.image.parent("." + T.params.zoomContainerClass),
                            t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || T.params.zoomMax,
                            0 !== t.gesture.imageWrap.length)))
                            return void (t.gesture.image = void 0);
                        t.gesture.image.transition(0),
                            t.isScaling = !0
                    },
                    onGestureChange: function (e) {
                        var a = T.zoom;
                        if (!T.support.gestures) {
                            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                                return;
                            a.gesture.scaleMove = a.getDistanceBetweenTouches(e)
                        }
                        a.gesture.image && 0 !== a.gesture.image.length && (T.support.gestures ? a.scale = e.scale * a.currentScale : a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale,
                            a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, .5)),
                            a.scale < T.params.zoomMin && (a.scale = T.params.zoomMin + 1 - Math.pow(T.params.zoomMin - a.scale + 1, .5)),
                            a.gesture.image.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
                    },
                    onGestureEnd: function (e) {
                        var a = T.zoom;
                        !T.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), T.params.zoomMin),
                            a.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"),
                            a.currentScale = a.scale,
                            a.isScaling = !1,
                            1 === a.scale && (a.gesture.slide = void 0))
                    },
                    onTouchStart: function (e, a) {
                        var t = e.zoom;
                        t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ("android" === e.device.os && a.preventDefault(),
                            t.image.isTouched = !0,
                            t.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
                            t.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY))
                    },
                    onTouchMove: function (e) {
                        var a = T.zoom;
                        if (a.gesture.image && 0 !== a.gesture.image.length && (T.allowClick = !1,
                            a.image.isTouched && a.gesture.slide)) {
                            a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth,
                                a.image.height = a.gesture.image[0].offsetHeight,
                                a.image.startX = T.getTranslate(a.gesture.imageWrap[0], "x") || 0,
                                a.image.startY = T.getTranslate(a.gesture.imageWrap[0], "y") || 0,
                                a.gesture.slideWidth = a.gesture.slide[0].offsetWidth,
                                a.gesture.slideHeight = a.gesture.slide[0].offsetHeight,
                                a.gesture.imageWrap.transition(0),
                                T.rtl && (a.image.startX = -a.image.startX),
                                T.rtl && (a.image.startY = -a.image.startY));
                            var t = a.image.width * a.scale
                                , s = a.image.height * a.scale;
                            if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
                                if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0),
                                    a.image.maxX = -a.image.minX,
                                    a.image.minY = Math.min(a.gesture.slideHeight / 2 - s / 2, 0),
                                    a.image.maxY = -a.image.minY,
                                    a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                    a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                                    !a.image.isMoved && !a.isScaling) {
                                    if (T.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x)
                                        return void (a.image.isTouched = !1);
                                    if (!T.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y)
                                        return void (a.image.isTouched = !1)
                                }
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    a.image.isMoved = !0,
                                    a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX,
                                    a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY,
                                    a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)),
                                    a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)),
                                    a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)),
                                    a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)),
                                    a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x),
                                    a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y),
                                    a.velocity.prevTime || (a.velocity.prevTime = Date.now()),
                                    a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2,
                                    a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2,
                                    Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0),
                                    Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0),
                                    a.velocity.prevPositionX = a.image.touchesCurrent.x,
                                    a.velocity.prevPositionY = a.image.touchesCurrent.y,
                                    a.velocity.prevTime = Date.now(),
                                    a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)")
                            }
                        }
                    },
                    onTouchEnd: function (e, a) {
                        var t = e.zoom;
                        if (t.gesture.image && 0 !== t.gesture.image.length) {
                            if (!t.image.isTouched || !t.image.isMoved)
                                return t.image.isTouched = !1,
                                    void (t.image.isMoved = !1);
                            t.image.isTouched = !1,
                                t.image.isMoved = !1;
                            var s = 300
                                , i = 300
                                , r = t.velocity.x * s
                                , n = t.image.currentX + r
                                , o = t.velocity.y * i
                                , l = t.image.currentY + o;
                            0 !== t.velocity.x && (s = Math.abs((n - t.image.currentX) / t.velocity.x)),
                                0 !== t.velocity.y && (i = Math.abs((l - t.image.currentY) / t.velocity.y));
                            var p = Math.max(s, i);
                            t.image.currentX = n,
                                t.image.currentY = l;
                            var d = t.image.width * t.scale
                                , u = t.image.height * t.scale;
                            t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0),
                                t.image.maxX = -t.image.minX,
                                t.image.minY = Math.min(t.gesture.slideHeight / 2 - u / 2, 0),
                                t.image.maxY = -t.image.minY,
                                t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX),
                                t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY),
                                t.gesture.imageWrap.transition(p).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                        }
                    },
                    onTransitionEnd: function (e) {
                        var a = e.zoom;
                        a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                            a.gesture.imageWrap.transform("translate3d(0,0,0)"),
                            a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0,
                            a.scale = a.currentScale = 1)
                    },
                    toggleZoom: function (a, t) {
                        var s = a.zoom;
                        if (s.gesture.slide || (s.gesture.slide = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex),
                            s.gesture.image = s.gesture.slide.find("img, svg, canvas"),
                            s.gesture.imageWrap = s.gesture.image.parent("." + a.params.zoomContainerClass)),
                            s.gesture.image && 0 !== s.gesture.image.length) {
                            var i, r, n, o, l, p, d, u, c, m, h, g, f, v, w, y, x, T;
                            void 0 === s.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX,
                                r = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = s.image.touchesStart.x,
                                    r = s.image.touchesStart.y),
                                s.scale && 1 !== s.scale ? (s.scale = s.currentScale = 1,
                                    s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                                    s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                                    s.gesture.slide = void 0) : (s.scale = s.currentScale = s.gesture.imageWrap.attr("data-swiper-zoom") || a.params.zoomMax,
                                        t ? (x = s.gesture.slide[0].offsetWidth,
                                            T = s.gesture.slide[0].offsetHeight,
                                            n = s.gesture.slide.offset().left,
                                            o = s.gesture.slide.offset().top,
                                            l = n + x / 2 - i,
                                            p = o + T / 2 - r,
                                            c = s.gesture.image[0].offsetWidth,
                                            m = s.gesture.image[0].offsetHeight,
                                            h = c * s.scale,
                                            g = m * s.scale,
                                            f = Math.min(x / 2 - h / 2, 0),
                                            v = Math.min(T / 2 - g / 2, 0),
                                            w = -f,
                                            y = -v,
                                            d = l * s.scale,
                                            u = p * s.scale,
                                            d < f && (d = f),
                                            d > w && (d = w),
                                            u < v && (u = v),
                                            u > y && (u = y)) : (d = 0,
                                                u = 0),
                                        s.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + u + "px,0)"),
                                        s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"))
                        }
                    },
                    attachEvents: function (a) {
                        var t = a ? "off" : "on";
                        if (T.params.zoom) {
                            var s = (T.slides,
                                !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                });
                            T.support.gestures ? (T.slides[t]("gesturestart", T.zoom.onGestureStart, s),
                                T.slides[t]("gesturechange", T.zoom.onGestureChange, s),
                                T.slides[t]("gestureend", T.zoom.onGestureEnd, s)) : "touchstart" === T.touchEvents.start && (T.slides[t](T.touchEvents.start, T.zoom.onGestureStart, s),
                                    T.slides[t](T.touchEvents.move, T.zoom.onGestureChange, s),
                                    T.slides[t](T.touchEvents.end, T.zoom.onGestureEnd, s)),
                                T[t]("touchStart", T.zoom.onTouchStart),
                                T.slides.each(function (a, s) {
                                    e(s).find("." + T.params.zoomContainerClass).length > 0 && e(s)[t](T.touchEvents.move, T.zoom.onTouchMove)
                                }),
                                T[t]("touchEnd", T.zoom.onTouchEnd),
                                T[t]("transitionEnd", T.zoom.onTransitionEnd),
                                T.params.zoomToggle && T.on("doubleTap", T.zoom.toggleZoom)
                        }
                    },
                    init: function () {
                        T.zoom.attachEvents()
                    },
                    destroy: function () {
                        T.zoom.attachEvents(!0)
                    }
                },
                T._plugins = [];
            for (var Y in T.plugins) {
                var O = T.plugins[Y](T, T.params[Y]);
                O && T._plugins.push(O)
            }
            return T.callPlugins = function (e) {
                for (var a = 0; a < T._plugins.length; a++)
                    e in T._plugins[a] && T._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
                ,
                T.emitterEventListeners = {},
                T.emit = function (e) {
                    T.params[e] && T.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var a;
                    if (T.emitterEventListeners[e])
                        for (a = 0; a < T.emitterEventListeners[e].length; a++)
                            T.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    T.callPlugins && T.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }
                ,
                T.on = function (e, a) {
                    return e = m(e),
                        T.emitterEventListeners[e] || (T.emitterEventListeners[e] = []),
                        T.emitterEventListeners[e].push(a),
                        T
                }
                ,
                T.off = function (e, a) {
                    var t;
                    if (e = m(e),
                        void 0 === a)
                        return T.emitterEventListeners[e] = [],
                            T;
                    if (T.emitterEventListeners[e] && 0 !== T.emitterEventListeners[e].length) {
                        for (t = 0; t < T.emitterEventListeners[e].length; t++)
                            T.emitterEventListeners[e][t] === a && T.emitterEventListeners[e].splice(t, 1);
                        return T
                    }
                }
                ,
                T.once = function (e, a) {
                    e = m(e);
                    var t = function () {
                        a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                            T.off(e, t)
                    };
                    return T.on(e, t),
                        T
                }
                ,
                T.a11y = {
                    makeFocusable: function (e) {
                        return e.attr("tabIndex", "0"),
                            e
                    },
                    addRole: function (e, a) {
                        return e.attr("role", a),
                            e
                    },
                    addLabel: function (e, a) {
                        return e.attr("aria-label", a),
                            e
                    },
                    disable: function (e) {
                        return e.attr("aria-disabled", !0),
                            e
                    },
                    enable: function (e) {
                        return e.attr("aria-disabled", !1),
                            e
                    },
                    onEnterKey: function (a) {
                        13 === a.keyCode && (e(a.target).is(T.params.nextButton) ? (T.onClickNext(a),
                            T.isEnd ? T.a11y.notify(T.params.lastSlideMessage) : T.a11y.notify(T.params.nextSlideMessage)) : e(a.target).is(T.params.prevButton) && (T.onClickPrev(a),
                                T.isBeginning ? T.a11y.notify(T.params.firstSlideMessage) : T.a11y.notify(T.params.prevSlideMessage)),
                            e(a.target).is("." + T.params.bulletClass) && e(a.target)[0].click())
                    },
                    liveRegion: e('<span class="' + T.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function (e) {
                        var a = T.a11y.liveRegion;
                        0 !== a.length && (a.html(""),
                            a.html(e))
                    },
                    init: function () {
                        T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.a11y.makeFocusable(T.nextButton),
                            T.a11y.addRole(T.nextButton, "button"),
                            T.a11y.addLabel(T.nextButton, T.params.nextSlideMessage)),
                            T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.a11y.makeFocusable(T.prevButton),
                                T.a11y.addRole(T.prevButton, "button"),
                                T.a11y.addLabel(T.prevButton, T.params.prevSlideMessage)),
                            e(T.container).append(T.a11y.liveRegion)
                    },
                    initPagination: function () {
                        T.params.pagination && T.params.paginationClickable && T.bullets && T.bullets.length && T.bullets.each(function () {
                            var a = e(this);
                            T.a11y.makeFocusable(a),
                                T.a11y.addRole(a, "button"),
                                T.a11y.addLabel(a, T.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                        })
                    },
                    destroy: function () {
                        T.a11y.liveRegion && T.a11y.liveRegion.length > 0 && T.a11y.liveRegion.remove()
                    }
                },
                T.init = function () {
                    T.params.loop && T.createLoop(),
                        T.updateContainerSize(),
                        T.updateSlidesSize(),
                        T.updatePagination(),
                        T.params.scrollbar && T.scrollbar && (T.scrollbar.set(),
                            T.params.scrollbarDraggable && T.scrollbar.enableDraggable()),
                        "slide" !== T.params.effect && T.effects[T.params.effect] && (T.params.loop || T.updateProgress(),
                            T.effects[T.params.effect].setTranslate()),
                        T.params.loop ? T.slideTo(T.params.initialSlide + T.loopedSlides, 0, T.params.runCallbacksOnInit) : (T.slideTo(T.params.initialSlide, 0, T.params.runCallbacksOnInit),
                            0 === T.params.initialSlide && (T.parallax && T.params.parallax && T.parallax.setTranslate(),
                                T.lazy && T.params.lazyLoading && (T.lazy.load(),
                                    T.lazy.initialImageLoaded = !0))),
                        T.attachEvents(),
                        T.params.observer && T.support.observer && T.initObservers(),
                        T.params.preloadImages && !T.params.lazyLoading && T.preloadImages(),
                        T.params.zoom && T.zoom && T.zoom.init(),
                        T.params.autoplay && T.startAutoplay(),
                        T.params.keyboardControl && T.enableKeyboardControl && T.enableKeyboardControl(),
                        T.params.mousewheelControl && T.enableMousewheelControl && T.enableMousewheelControl(),
                        T.params.hashnavReplaceState && (T.params.replaceState = T.params.hashnavReplaceState),
                        T.params.history && T.history && T.history.init(),
                        T.params.hashnav && T.hashnav && T.hashnav.init(),
                        T.params.a11y && T.a11y && T.a11y.init(),
                        T.emit("onInit", T)
                }
                ,
                T.cleanupStyles = function () {
                    T.container.removeClass(T.classNames.join(" ")).removeAttr("style"),
                        T.wrapper.removeAttr("style"),
                        T.slides && T.slides.length && T.slides.removeClass([T.params.slideVisibleClass, T.params.slideActiveClass, T.params.slideNextClass, T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                        T.paginationContainer && T.paginationContainer.length && T.paginationContainer.removeClass(T.params.paginationHiddenClass),
                        T.bullets && T.bullets.length && T.bullets.removeClass(T.params.bulletActiveClass),
                        T.params.prevButton && e(T.params.prevButton).removeClass(T.params.buttonDisabledClass),
                        T.params.nextButton && e(T.params.nextButton).removeClass(T.params.buttonDisabledClass),
                        T.params.scrollbar && T.scrollbar && (T.scrollbar.track && T.scrollbar.track.length && T.scrollbar.track.removeAttr("style"),
                            T.scrollbar.drag && T.scrollbar.drag.length && T.scrollbar.drag.removeAttr("style"))
                }
                ,
                T.destroy = function (e, a) {
                    T.detachEvents(),
                        T.stopAutoplay(),
                        T.params.scrollbar && T.scrollbar && T.params.scrollbarDraggable && T.scrollbar.disableDraggable(),
                        T.params.loop && T.destroyLoop(),
                        a && T.cleanupStyles(),
                        T.disconnectObservers(),
                        T.params.zoom && T.zoom && T.zoom.destroy(),
                        T.params.keyboardControl && T.disableKeyboardControl && T.disableKeyboardControl(),
                        T.params.mousewheelControl && T.disableMousewheelControl && T.disableMousewheelControl(),
                        T.params.a11y && T.a11y && T.a11y.destroy(),
                        T.params.history && !T.params.replaceState && window.removeEventListener("popstate", T.history.setHistoryPopState),
                        T.params.hashnav && T.hashnav && T.hashnav.destroy(),
                        T.emit("onDestroy"),
                        e !== !1 && (T = null)
                }
                ,
                T.init(),
                T
        }
    };
    a.prototype = {
        isSafari: function () {
            var e = window.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function (e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function () {
                var e = document.createElement("div");
                return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->",
                    1 === e.getElementsByTagName("i").length
            }()
        },
        device: function () {
            var e = window.navigator.userAgent
                , a = e.match(/(Android);?[\s\/]+([\d.]+)?/)
                , t = e.match(/(iPad).*OS\s([\d_]+)/)
                , s = e.match(/(iPod)(.*OS\s([\d_]+))?/)
                , i = !t && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: t || i || s,
                android: a
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function () {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function () {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                    if (a[t] in e)
                        return !0
            }(),
            observer: function () {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }(),
            passiveListener: function () {
                var e = !1;
                try {
                    var a = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, a)
                } catch (e) { }
                return e
            }(),
            gestures: function () {
                return "ongesturestart" in window
            }()
        },
        plugins: {}
    };
    for (var t = (function () {
        var e = function (e) {
            var a = this
                , t = 0;
            for (t = 0; t < e.length; t++)
                a[t] = e[t];
            return a.length = e.length,
                this
        }
            , a = function (a, t) {
                var s = []
                    , i = 0;
                if (a && !t && a instanceof e)
                    return a;
                if (a)
                    if ("string" == typeof a) {
                        var r, n, o = a.trim();
                        if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                            var l = "div";
                            for (0 === o.indexOf("<li") && (l = "ul"),
                                0 === o.indexOf("<tr") && (l = "tbody"),
                                0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"),
                                0 === o.indexOf("<tbody") && (l = "table"),
                                0 === o.indexOf("<option") && (l = "select"),
                                n = document.createElement(l),
                                n.innerHTML = a,
                                i = 0; i < n.childNodes.length; i++)
                                s.push(n.childNodes[i])
                        } else
                            for (r = t || "#" !== a[0] || a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(a) : [document.getElementById(a.split("#")[1])],
                                i = 0; i < r.length; i++)
                                r[i] && s.push(r[i])
                    } else if (a.nodeType || a === window || a === document)
                        s.push(a);
                    else if (a.length > 0 && a[0].nodeType)
                        for (i = 0; i < a.length; i++)
                            s.push(a[i]);
                return new e(s)
            };
        return e.prototype = {
            addClass: function (e) {
                if (void 0 === e)
                    return this;
                for (var a = e.split(" "), t = 0; t < a.length; t++)
                    for (var s = 0; s < this.length; s++)
                        this[s].classList.add(a[t]);
                return this
            },
            removeClass: function (e) {
                for (var a = e.split(" "), t = 0; t < a.length; t++)
                    for (var s = 0; s < this.length; s++)
                        this[s].classList.remove(a[t]);
                return this
            },
            hasClass: function (e) {
                return !!this[0] && this[0].classList.contains(e)
            },
            toggleClass: function (e) {
                for (var a = e.split(" "), t = 0; t < a.length; t++)
                    for (var s = 0; s < this.length; s++)
                        this[s].classList.toggle(a[t]);
                return this
            },
            attr: function (e, a) {
                if (1 === arguments.length && "string" == typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (var t = 0; t < this.length; t++)
                    if (2 === arguments.length)
                        this[t].setAttribute(e, a);
                    else
                        for (var s in e)
                            this[t][s] = e[s],
                                this[t].setAttribute(s, e[s]);
                return this
            },
            removeAttr: function (e) {
                for (var a = 0; a < this.length; a++)
                    this[a].removeAttribute(e);
                return this
            },
            data: function (e, a) {
                if (void 0 !== a) {
                    for (var t = 0; t < this.length; t++) {
                        var s = this[t];
                        s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}),
                            s.dom7ElementDataStorage[e] = a
                    }
                    return this
                }
                if (this[0]) {
                    var i = this[0].getAttribute("data-" + e);
                    return i ? i : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
                }
            },
            transform: function (e) {
                for (var a = 0; a < this.length; a++) {
                    var t = this[a].style;
                    t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
                }
                return this
            },
            transition: function (e) {
                "string" != typeof e && (e += "ms");
                for (var a = 0; a < this.length; a++) {
                    var t = this[a].style;
                    t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
                }
                return this
            },
            on: function (e, t, s, i) {
                function r(e) {
                    var i = e.target;
                    if (a(i).is(t))
                        s.call(i, e);
                    else
                        for (var r = a(i).parents(), n = 0; n < r.length; n++)
                            a(r[n]).is(t) && s.call(r[n], e)
                }
                var n, o, l = e.split(" ");
                for (n = 0; n < this.length; n++)
                    if ("function" == typeof t || t === !1)
                        for ("function" == typeof t && (s = arguments[1],
                            i = arguments[2] || !1),
                            o = 0; o < l.length; o++)
                            this[n].addEventListener(l[o], s, i);
                    else
                        for (o = 0; o < l.length; o++)
                            this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []),
                                this[n].dom7LiveListeners.push({
                                    listener: s,
                                    liveListener: r
                                }),
                                this[n].addEventListener(l[o], r, i);
                return this
            },
            off: function (e, a, t, s) {
                for (var i = e.split(" "), r = 0; r < i.length; r++)
                    for (var n = 0; n < this.length; n++)
                        if ("function" == typeof a || a === !1)
                            "function" == typeof a && (t = arguments[1],
                                s = arguments[2] || !1),
                                this[n].removeEventListener(i[r], t, s);
                        else if (this[n].dom7LiveListeners)
                            for (var o = 0; o < this[n].dom7LiveListeners.length; o++)
                                this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(i[r], this[n].dom7LiveListeners[o].liveListener, s);
                return this
            },
            once: function (e, a, t, s) {
                function i(n) {
                    t(n),
                        r.off(e, a, i, s)
                }
                var r = this;
                "function" == typeof a && (a = !1,
                    t = arguments[1],
                    s = arguments[2]),
                    r.on(e, a, i, s)
            },
            trigger: function (e, a) {
                for (var t = 0; t < this.length; t++) {
                    var s;
                    try {
                        s = new window.CustomEvent(e, {
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (t) {
                        s = document.createEvent("Event"),
                            s.initEvent(e, !0, !0),
                            s.detail = a
                    }
                    this[t].dispatchEvent(s)
                }
                return this
            },
            transitionEnd: function (e) {
                function a(r) {
                    if (r.target === this)
                        for (e.call(this, r),
                            t = 0; t < s.length; t++)
                            i.off(s[t], a)
                }
                var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = this;
                if (e)
                    for (t = 0; t < s.length; t++)
                        i.on(s[t], a);
                return this
            },
            width: function () {
                return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
            },
            outerWidth: function (e) {
                return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
            },
            height: function () {
                return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
            },
            outerHeight: function (e) {
                return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
            },
            offset: function () {
                if (this.length > 0) {
                    var e = this[0]
                        , a = e.getBoundingClientRect()
                        , t = document.body
                        , s = e.clientTop || t.clientTop || 0
                        , i = e.clientLeft || t.clientLeft || 0
                        , r = window.pageYOffset || e.scrollTop
                        , n = window.pageXOffset || e.scrollLeft;
                    return {
                        top: a.top + r - s,
                        left: a.left + n - i
                    }
                }
                return null
            },
            css: function (e, a) {
                var t;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (t = 0; t < this.length; t++)
                            for (var s in e)
                                this[t].style[s] = e[s];
                        return this
                    }
                    if (this[0])
                        return window.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (t = 0; t < this.length; t++)
                        this[t].style[e] = a;
                    return this
                }
                return this
            },
            each: function (e) {
                for (var a = 0; a < this.length; a++)
                    e.call(this[a], a, this[a]);
                return this
            },
            html: function (e) {
                if (void 0 === e)
                    return this[0] ? this[0].innerHTML : void 0;
                for (var a = 0; a < this.length; a++)
                    this[a].innerHTML = e;
                return this
            },
            text: function (e) {
                if (void 0 === e)
                    return this[0] ? this[0].textContent.trim() : null;
                for (var a = 0; a < this.length; a++)
                    this[a].textContent = e;
                return this
            },
            is: function (t) {
                if (!this[0])
                    return !1;
                var s, i;
                if ("string" == typeof t) {
                    var r = this[0];
                    if (r === document)
                        return t === document;
                    if (r === window)
                        return t === window;
                    if (r.matches)
                        return r.matches(t);
                    if (r.webkitMatchesSelector)
                        return r.webkitMatchesSelector(t);
                    if (r.mozMatchesSelector)
                        return r.mozMatchesSelector(t);
                    if (r.msMatchesSelector)
                        return r.msMatchesSelector(t);
                    for (s = a(t),
                        i = 0; i < s.length; i++)
                        if (s[i] === this[0])
                            return !0;
                    return !1
                }
                if (t === document)
                    return this[0] === document;
                if (t === window)
                    return this[0] === window;
                if (t.nodeType || t instanceof e) {
                    for (s = t.nodeType ? [t] : t,
                        i = 0; i < s.length; i++)
                        if (s[i] === this[0])
                            return !0;
                    return !1
                }
                return !1
            },
            index: function () {
                if (this[0]) {
                    for (var e = this[0], a = 0; null !== (e = e.previousSibling);)
                        1 === e.nodeType && a++;
                    return a
                }
            },
            eq: function (a) {
                if (void 0 === a)
                    return this;
                var t, s = this.length;
                return a > s - 1 ? new e([]) : a < 0 ? (t = s + a,
                    new e(t < 0 ? [] : [this[t]])) : new e([this[a]])
            },
            append: function (a) {
                var t, s;
                for (t = 0; t < this.length; t++)
                    if ("string" == typeof a) {
                        var i = document.createElement("div");
                        for (i.innerHTML = a; i.firstChild;)
                            this[t].appendChild(i.firstChild)
                    } else if (a instanceof e)
                        for (s = 0; s < a.length; s++)
                            this[t].appendChild(a[s]);
                    else
                        this[t].appendChild(a);
                return this
            },
            prepend: function (a) {
                var t, s;
                for (t = 0; t < this.length; t++)
                    if ("string" == typeof a) {
                        var i = document.createElement("div");
                        for (i.innerHTML = a,
                            s = i.childNodes.length - 1; s >= 0; s--)
                            this[t].insertBefore(i.childNodes[s], this[t].childNodes[0])
                    } else if (a instanceof e)
                        for (s = 0; s < a.length; s++)
                            this[t].insertBefore(a[s], this[t].childNodes[0]);
                    else
                        this[t].insertBefore(a, this[t].childNodes[0]);
                return this
            },
            insertBefore: function (e) {
                for (var t = a(e), s = 0; s < this.length; s++)
                    if (1 === t.length)
                        t[0].parentNode.insertBefore(this[s], t[0]);
                    else if (t.length > 1)
                        for (var i = 0; i < t.length; i++)
                            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i])
            },
            insertAfter: function (e) {
                for (var t = a(e), s = 0; s < this.length; s++)
                    if (1 === t.length)
                        t[0].parentNode.insertBefore(this[s], t[0].nextSibling);
                    else if (t.length > 1)
                        for (var i = 0; i < t.length; i++)
                            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i].nextSibling)
            },
            next: function (t) {
                return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
            },
            nextAll: function (t) {
                var s = []
                    , i = this[0];
                if (!i)
                    return new e([]);
                for (; i.nextElementSibling;) {
                    var r = i.nextElementSibling;
                    t ? a(r).is(t) && s.push(r) : s.push(r),
                        i = r
                }
                return new e(s)
            },
            prev: function (t) {
                return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
            },
            prevAll: function (t) {
                var s = []
                    , i = this[0];
                if (!i)
                    return new e([]);
                for (; i.previousElementSibling;) {
                    var r = i.previousElementSibling;
                    t ? a(r).is(t) && s.push(r) : s.push(r),
                        i = r
                }
                return new e(s)
            },
            parent: function (e) {
                for (var t = [], s = 0; s < this.length; s++)
                    e ? a(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode);
                return a(a.unique(t))
            },
            parents: function (e) {
                for (var t = [], s = 0; s < this.length; s++)
                    for (var i = this[s].parentNode; i;)
                        e ? a(i).is(e) && t.push(i) : t.push(i),
                            i = i.parentNode;
                return a(a.unique(t))
            },
            find: function (a) {
                for (var t = [], s = 0; s < this.length; s++)
                    for (var i = this[s].querySelectorAll(a), r = 0; r < i.length; r++)
                        t.push(i[r]);
                return new e(t)
            },
            children: function (t) {
                for (var s = [], i = 0; i < this.length; i++)
                    for (var r = this[i].childNodes, n = 0; n < r.length; n++)
                        t ? 1 === r[n].nodeType && a(r[n]).is(t) && s.push(r[n]) : 1 === r[n].nodeType && s.push(r[n]);
                return new e(a.unique(s))
            },
            remove: function () {
                for (var e = 0; e < this.length; e++)
                    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function () {
                var e, t, s = this;
                for (e = 0; e < arguments.length; e++) {
                    var i = a(arguments[e]);
                    for (t = 0; t < i.length; t++)
                        s[s.length] = i[t],
                            s.length++
                }
                return s
            }
        },
            a.fn = e.prototype,
            a.unique = function (e) {
                for (var a = [], t = 0; t < e.length; t++)
                    a.indexOf(e[t]) === -1 && a.push(e[t]);
                return a
            }
            ,
            a
    }()), s = ["jQuery", "Zepto", "Dom7"], i = 0; i < s.length; i++)
        window[s[i]] && function (e) {
            e.fn.swiper = function (t) {
                var s;
                return e(this).each(function () {
                    var e = new a(this, t);
                    s || (s = e)
                }),
                    s
            }
        }(window[s[i]]);
    var r;
    r = void 0 === t ? window.Dom7 || window.Zepto || window.jQuery : t,
        r && ("transitionEnd" in r.fn || (r.fn.transitionEnd = function (e) {
            function a(r) {
                if (r.target === this)
                    for (e.call(this, r),
                        t = 0; t < s.length; t++)
                        i.off(s[t], a)
            }
            var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = this;
            if (e)
                for (t = 0; t < s.length; t++)
                    i.on(s[t], a);
            return this
        }
        ),
            "transform" in r.fn || (r.fn.transform = function (e) {
                for (var a = 0; a < this.length; a++) {
                    var t = this[a].style;
                    t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
                }
                return this
            }
            ),
            "transition" in r.fn || (r.fn.transition = function (e) {
                "string" != typeof e && (e += "ms");
                for (var a = 0; a < this.length; a++) {
                    var t = this[a].style;
                    t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
                }
                return this
            }
            ),
            "outerWidth" in r.fn || (r.fn.outerWidth = function (e) {
                return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
            }
            )),
        window.Swiper = a
}(),
    "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
        "use strict";
        return window.Swiper
    });
//# sourceMappingURL=maps/swiper.min.js.map

//theiaStickySidebar 

(function ($) {
    $.fn.theiaStickySidebar = function (options) {
        var defaults = {
            'containerSelector': '',
            'additionalMarginTop': 0,
            'additionalMarginBottom': 0,
            'updateSidebarHeight': true,
            'minWidth': 0,
            'sidebarBehavior': 'modern'
        };
        options = $.extend(defaults, options);
        options.additionalMarginTop = parseInt(options.additionalMarginTop) || 0;
        options.additionalMarginBottom = parseInt(options.additionalMarginBottom) || 0;
        tryInitOrHookIntoEvents(options, this);
        function tryInitOrHookIntoEvents(options, $that) {
            var success = tryInit(options, $that);
            if (!success) {
                console.log('TST: Body width smaller than options.minWidth. Init is delayed.');
                $(document).scroll(function (options, $that) {
                    return function (evt) {
                        var success = tryInit(options, $that);
                        if (success) {
                            $(this).unbind(evt);
                        }
                    }
                        ;
                }(options, $that));
                $(window).resize(function (options, $that) {
                    return function (evt) {
                        var success = tryInit(options, $that);
                        if (success) {
                            $(this).unbind(evt);
                        }
                    }
                        ;
                }(options, $that))
            }
        }
        function tryInit(options, $that) {
            if (options.initialized === true) {
                return true;
            }
            if ($('body').width() < options.minWidth) {
                return false;
            }
            init(options, $that);
            return true;
        }
        function init(options, $that) {
            options.initialized = true;
            $('head').append($('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));
            $that.each(function () {
                console.log('TST: Doing init.');
                var o = {};
                o.sidebar = $(this);
                o.options = options || {};
                o.container = $(o.options.containerSelector);
                if (o.container.size() == 0) {
                    o.container = o.sidebar.parent();
                }
                o.sidebar.parents().css('-webkit-transform', 'none');
                o.sidebar.css({
                    'position': 'relative',
                    'overflow': 'visible',
                    '-webkit-box-sizing': 'border-box',
                    '-moz-box-sizing': 'border-box',
                    'box-sizing': 'border-box'
                });
                o.stickySidebar = o.sidebar.find('.theiaStickySidebar');
                if (o.stickySidebar.length == 0) {
                    o.sidebar.find('script').remove();
                    o.stickySidebar = $('<div>').addClass('theiaStickySidebar').append(o.sidebar.children());
                    o.sidebar.append(o.stickySidebar);
                }
                o.marginTop = parseInt(o.sidebar.css('margin-top'));
                o.marginBottom = parseInt(o.sidebar.css('margin-bottom'));
                o.paddingTop = parseInt(o.sidebar.css('padding-top'));
                o.paddingBottom = parseInt(o.sidebar.css('padding-bottom'));
                var collapsedTopHeight = o.stickySidebar.offset().top;
                var collapsedBottomHeight = o.stickySidebar.outerHeight();
                o.stickySidebar.css('padding-top', 1);
                o.stickySidebar.css('padding-bottom', 1);
                collapsedTopHeight -= o.stickySidebar.offset().top;
                collapsedBottomHeight = o.stickySidebar.outerHeight() - collapsedBottomHeight - collapsedTopHeight;
                if (collapsedTopHeight == 0) {
                    o.stickySidebar.css('padding-top', 0);
                    o.stickySidebarPaddingTop = 0;
                } else {
                    o.stickySidebarPaddingTop = 1;
                }
                if (collapsedBottomHeight == 0) {
                    o.stickySidebar.css('padding-bottom', 0);
                    o.stickySidebarPaddingBottom = 0;
                } else {
                    o.stickySidebarPaddingBottom = 1;
                }
                o.previousScrollTop = null;
                o.fixedScrollTop = 0;
                resetSidebar();
                o.onScroll = function (o) {
                    if (!o.stickySidebar.is(":visible")) {
                        return;
                    }
                    if ($('body').width() < o.options.minWidth) {
                        resetSidebar();
                        return;
                    }
                    if (o.sidebar.outerWidth(true) + 50 > o.container.width()) {
                        resetSidebar();
                        return;
                    }
                    var scrollTop = $(document).scrollTop();
                    var position = 'static';
                    if (scrollTop >= o.container.offset().top + (o.paddingTop + o.marginTop - o.options.additionalMarginTop)) {
                        var offsetTop = o.paddingTop + o.marginTop + options.additionalMarginTop;
                        var offsetBottom = o.paddingBottom + o.marginBottom + options.additionalMarginBottom;
                        var containerTop = o.container.offset().top;
                        var containerBottom = o.container.offset().top + getClearedHeight(o.container);
                        var windowOffsetTop = 0 + options.additionalMarginTop;
                        var windowOffsetBottom;
                        var sidebarSmallerThanWindow = (o.stickySidebar.outerHeight() + offsetTop + offsetBottom) < $(window).height();
                        if (sidebarSmallerThanWindow) {
                            windowOffsetBottom = windowOffsetTop + o.stickySidebar.outerHeight();
                        } else {
                            windowOffsetBottom = $(window).height() - o.marginBottom - o.paddingBottom - options.additionalMarginBottom;
                        }
                        var staticLimitTop = containerTop - scrollTop + o.paddingTop + o.marginTop;
                        var staticLimitBottom = containerBottom - scrollTop - o.paddingBottom - o.marginBottom;
                        var top = o.stickySidebar.offset().top - scrollTop;
                        var scrollTopDiff = o.previousScrollTop - scrollTop;
                        if (o.stickySidebar.css('position') == 'fixed') {
                            if (o.options.sidebarBehavior == 'modern') {
                                top += scrollTopDiff;
                            }
                        }
                        if (o.options.sidebarBehavior == 'legacy') {
                            top = windowOffsetBottom - o.stickySidebar.outerHeight();
                            top = Math.max(top, windowOffsetBottom - o.stickySidebar.outerHeight());
                        }
                        if (scrollTopDiff > 0) {
                            top = Math.min(top, windowOffsetTop);
                        } else {
                            top = Math.max(top, windowOffsetBottom - o.stickySidebar.outerHeight());
                        }
                        top = Math.max(top, staticLimitTop);
                        top = Math.min(top, staticLimitBottom - o.stickySidebar.outerHeight());
                        var sidebarSameHeightAsContainer = o.container.height() == o.stickySidebar.outerHeight();
                        if (!sidebarSameHeightAsContainer && top == windowOffsetTop) {
                            position = 'fixed';
                        } else if (!sidebarSameHeightAsContainer && top == windowOffsetBottom - o.stickySidebar.outerHeight()) {
                            position = 'fixed';
                        } else if (scrollTop + top - o.sidebar.offset().top - o.paddingTop <= options.additionalMarginTop) {
                            position = 'static';
                        } else {
                            position = 'absolute';
                        }
                    }
                    if (position == 'fixed') {
                        o.stickySidebar.css({
                            'position': 'fixed',
                            'width': o.sidebar.width(),
                            'top': top,
                            'left': o.sidebar.offset().left + parseInt(o.sidebar.css('padding-left'))
                        });
                    } else if (position == 'absolute') {
                        var css = {};
                        if (o.stickySidebar.css('position') != 'absolute') {
                            css.position = 'absolute';
                            css.top = scrollTop + top - o.sidebar.offset().top - o.stickySidebarPaddingTop - o.stickySidebarPaddingBottom;
                        }
                        css.width = o.sidebar.width();
                        css.left = '';
                        o.stickySidebar.css(css);
                    } else if (position == 'static') {
                        resetSidebar();
                    }
                    if (position != 'static') {
                        if (o.options.updateSidebarHeight == true) {
                            o.sidebar.css({
                                'min-height': o.stickySidebar.outerHeight() + o.stickySidebar.offset().top - o.sidebar.offset().top + o.paddingBottom
                            });
                        }
                    }
                    o.previousScrollTop = scrollTop;
                }
                    ;
                o.onScroll(o);
                $(document).scroll(function (o) {
                    return function () {
                        o.onScroll(o);
                    }
                        ;
                }(o));
                $(window).resize(function (o) {
                    return function () {
                        o.stickySidebar.css({
                            'position': 'static'
                        });
                        o.onScroll(o);
                    }
                        ;
                }(o));
                function resetSidebar() {
                    o.fixedScrollTop = 0;
                    o.sidebar.css({
                        'min-height': '1px'
                    });
                    o.stickySidebar.css({
                        'position': 'static',
                        'width': ''
                    });
                }
                function getClearedHeight(e) {
                    var height = e.height();
                    e.children().each(function () {
                        height = Math.max(height, $(this).height());
                    });
                    return height;
                }
            });
        }
    }
}
)(jQuery);

/*!
 * Isotope PACKAGED v3.0.4
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

!function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function (t, u) {
                var h = a.data(u, i);
                if (!h)
                    return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0))
                    return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }),
                void 0 !== n ? n : t
        }
        function h(t, e) {
            t.each(function (t, o) {
                var n = a.data(o, i);
                n ? (n.option(e),
                    n._init()) : (n = new s(o, e),
                        a.data(o, i, n))
            })
        }
        a = a || e || t.jQuery,
            a && (s.prototype.option || (s.prototype.option = function (t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }
            ),
                a.fn[i] = function (t) {
                    if ("string" == typeof t) {
                        var e = n.call(arguments, 1);
                        return u(this, t, e)
                    }
                    return h(this, t),
                        this
                }
                ,
                o(a))
    }
    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var n = Array.prototype.slice
        , s = t.console
        , r = "undefined" == typeof s ? function () { }
            : function (t) {
                s.error(t)
            }
        ;
    return o(e || t.jQuery),
        i
}),
    function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function () {
        function t() { }
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var i = this._events = this._events || {}
                    , o = i[t] = i[t] || [];
                return o.indexOf(e) == -1 && o.push(e),
                    this
            }
        }
            ,
            e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = this._onceEvents = this._onceEvents || {}
                        , o = i[t] = i[t] || {};
                    return o[e] = !0,
                        this
                }
            }
            ,
            e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var o = i.indexOf(e);
                    return o != -1 && i.splice(o, 1),
                        this
                }
            }
            ,
            e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var o = 0
                        , n = i[o];
                    e = e || [];
                    for (var s = this._onceEvents && this._onceEvents[t]; n;) {
                        var r = s && s[n];
                        r && (this.off(t, n),
                            delete s[n]),
                            n.apply(this, e),
                            o += r ? 0 : 1,
                            n = i[o]
                    }
                    return this
                }
            }
            ,
            t
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function () {
        "use strict";
        function t(t) {
            var e = parseFloat(t)
                , i = t.indexOf("%") == -1 && !isNaN(e);
            return i && e
        }
        function e() { }
        function i() {
            for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; e < h; e++) {
                var i = u[e];
                t[i] = 0
            }
            return t
        }
        function o(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
                e
        }
        function n() {
            if (!d) {
                d = !0;
                var e = document.createElement("div");
                e.style.width = "200px",
                    e.style.padding = "1px 2px 3px 4px",
                    e.style.borderStyle = "solid",
                    e.style.borderWidth = "1px 2px 3px 4px",
                    e.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var n = o(e);
                s.isBoxSizeOuter = r = 200 == t(n.width),
                    i.removeChild(e)
            }
        }
        function s(e) {
            if (n(),
                "string" == typeof e && (e = document.querySelector(e)),
                e && "object" == typeof e && e.nodeType) {
                var s = o(e);
                if ("none" == s.display)
                    return i();
                var a = {};
                a.width = e.offsetWidth,
                    a.height = e.offsetHeight;
                for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                    var f = u[l]
                        , c = s[f]
                        , m = parseFloat(c);
                    a[f] = isNaN(m) ? 0 : m
                }
                var p = a.paddingLeft + a.paddingRight
                    , y = a.paddingTop + a.paddingBottom
                    , g = a.marginLeft + a.marginRight
                    , v = a.marginTop + a.marginBottom
                    , _ = a.borderLeftWidth + a.borderRightWidth
                    , I = a.borderTopWidth + a.borderBottomWidth
                    , z = d && r
                    , x = t(s.width);
                x !== !1 && (a.width = x + (z ? 0 : p + _));
                var S = t(s.height);
                return S !== !1 && (a.height = S + (z ? 0 : y + I)),
                    a.innerWidth = a.width - (p + _),
                    a.innerHeight = a.height - (y + I),
                    a.outerWidth = a.width + g,
                    a.outerHeight = a.height + v,
                    a
            }
        }
        var r, a = "undefined" == typeof console ? e : function (t) {
            console.error(t)
        }
            , u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = u.length, d = !1;
        return s
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function () {
        "use strict";
        var t = function () {
            var t = window.Element.prototype;
            if (t.matches)
                return "matches";
            if (t.matchesSelector)
                return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var o = e[i]
                    , n = o + "MatchesSelector";
                if (t[n])
                    return n
            }
        }();
        return function (e, i) {
            return e[t](i)
        }
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function (t, e) {
        var i = {};
        i.extend = function (t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        }
            ,
            i.modulo = function (t, e) {
                return (t % e + e) % e
            }
            ,
            i.makeArray = function (t) {
                var e = [];
                if (Array.isArray(t))
                    e = t;
                else if (t && "object" == typeof t && "number" == typeof t.length)
                    for (var i = 0; i < t.length; i++)
                        e.push(t[i]);
                else
                    e.push(t);
                return e
            }
            ,
            i.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                i != -1 && t.splice(i, 1)
            }
            ,
            i.getParent = function (t, i) {
                for (; t.parentNode && t != document.body;)
                    if (t = t.parentNode,
                        e(t, i))
                        return t
            }
            ,
            i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t
            }
            ,
            i.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }
            ,
            i.filterFindElements = function (t, o) {
                t = i.makeArray(t);
                var n = [];
                return t.forEach(function (t) {
                    if (t instanceof HTMLElement) {
                        if (!o)
                            return void n.push(t);
                        e(t, o) && n.push(t);
                        for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                            n.push(i[s])
                    }
                }),
                    n
            }
            ,
            i.debounceMethod = function (t, e, i) {
                var o = t.prototype[e]
                    , n = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[n];
                    t && clearTimeout(t);
                    var e = arguments
                        , s = this;
                    this[n] = setTimeout(function () {
                        o.apply(s, e),
                            delete s[n]
                    }, i || 100)
                }
            }
            ,
            i.docReady = function (t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
            }
            ,
            i.toDashed = function (t) {
                return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                    return e + "-" + i
                }).toLowerCase()
            }
            ;
        var o = t.console;
        return i.htmlInit = function (e, n) {
            i.docReady(function () {
                var s = i.toDashed(n)
                    , r = "data-" + s
                    , a = document.querySelectorAll("[" + r + "]")
                    , u = document.querySelectorAll(".js-" + s)
                    , h = i.makeArray(a).concat(i.makeArray(u))
                    , d = r + "-options"
                    , l = t.jQuery;
                h.forEach(function (t) {
                    var i, s = t.getAttribute(r) || t.getAttribute(d);
                    try {
                        i = s && JSON.parse(s)
                    } catch (a) {
                        return void (o && o.error("Error parsing " + r + " on " + t.className + ": " + a))
                    }
                    var u = new e(t, i);
                    l && l.data(t, n, u)
                })
            })
        }
            ,
            i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
            t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function (t, e) {
        "use strict";
        function i(t) {
            for (var e in t)
                return !1;
            return e = null,
                !0
        }
        function o(t, e) {
            t && (this.element = t,
                this.layout = e,
                this.position = {
                    x: 0,
                    y: 0
                },
                this._create())
        }
        function n(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }
        var s = document.documentElement.style
            , r = "string" == typeof s.transition ? "transition" : "WebkitTransition"
            , a = "string" == typeof s.transform ? "transform" : "WebkitTransform"
            , u = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[r]
            , h = {
                transform: a,
                transition: r,
                transitionDuration: r + "Duration",
                transitionProperty: r + "Property",
                transitionDelay: r + "Delay"
            }
            , d = o.prototype = Object.create(t.prototype);
        d.constructor = o,
            d._create = function () {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                },
                    this.css({
                        position: "absolute"
                    })
            }
            ,
            d.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }
            ,
            d.getSize = function () {
                this.size = e(this.element)
            }
            ,
            d.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    var o = h[i] || i;
                    e[o] = t[i]
                }
            }
            ,
            d.getPosition = function () {
                var t = getComputedStyle(this.element)
                    , e = this.layout._getOption("originLeft")
                    , i = this.layout._getOption("originTop")
                    , o = t[e ? "left" : "right"]
                    , n = t[i ? "top" : "bottom"]
                    , s = this.layout.size
                    , r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10)
                    , a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
                r = isNaN(r) ? 0 : r,
                    a = isNaN(a) ? 0 : a,
                    r -= e ? s.paddingLeft : s.paddingRight,
                    a -= i ? s.paddingTop : s.paddingBottom,
                    this.position.x = r,
                    this.position.y = a
            }
            ,
            d.layoutPosition = function () {
                var t = this.layout.size
                    , e = {}
                    , i = this.layout._getOption("originLeft")
                    , o = this.layout._getOption("originTop")
                    , n = i ? "paddingLeft" : "paddingRight"
                    , s = i ? "left" : "right"
                    , r = i ? "right" : "left"
                    , a = this.position.x + t[n];
                e[s] = this.getXValue(a),
                    e[r] = "";
                var u = o ? "paddingTop" : "paddingBottom"
                    , h = o ? "top" : "bottom"
                    , d = o ? "bottom" : "top"
                    , l = this.position.y + t[u];
                e[h] = this.getYValue(l),
                    e[d] = "",
                    this.css(e),
                    this.emitEvent("layout", [this])
            }
            ,
            d.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
            }
            ,
            d.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
            }
            ,
            d._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x
                    , o = this.position.y
                    , n = parseInt(t, 10)
                    , s = parseInt(e, 10)
                    , r = n === this.position.x && s === this.position.y;
                if (this.setPosition(t, e),
                    r && !this.isTransitioning)
                    return void this.layoutPosition();
                var a = t - i
                    , u = e - o
                    , h = {};
                h.transform = this.getTranslate(a, u),
                    this.transition({
                        to: h,
                        onTransitionEnd: {
                            transform: this.layoutPosition
                        },
                        isCleaning: !0
                    })
            }
            ,
            d.getTranslate = function (t, e) {
                var i = this.layout._getOption("originLeft")
                    , o = this.layout._getOption("originTop");
                return t = i ? t : -t,
                    e = o ? e : -e,
                    "translate3d(" + t + "px, " + e + "px, 0)"
            }
            ,
            d.goTo = function (t, e) {
                this.setPosition(t, e),
                    this.layoutPosition()
            }
            ,
            d.moveTo = d._transitionTo,
            d.setPosition = function (t, e) {
                this.position.x = parseInt(t, 10),
                    this.position.y = parseInt(e, 10)
            }
            ,
            d._nonTransition = function (t) {
                this.css(t.to),
                    t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd)
                    t.onTransitionEnd[e].call(this)
            }
            ,
            d.transition = function (t) {
                if (!parseFloat(this.layout.options.transitionDuration))
                    return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd)
                    e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to)
                    e.ingProperties[i] = !0,
                        t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var o = this.element.offsetHeight;
                    o = null
                }
                this.enableTransition(t.to),
                    this.css(t.to),
                    this.isTransitioning = !0
            }
            ;
        var l = "opacity," + n(a);
        d.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t,
                    this.css({
                        transitionProperty: l,
                        transitionDuration: t,
                        transitionDelay: this.staggerDelay || 0
                    }),
                    this.element.addEventListener(u, this, !1)
            }
        }
            ,
            d.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t)
            }
            ,
            d.onotransitionend = function (t) {
                this.ontransitionend(t)
            }
            ;
        var f = {
            "-webkit-transform": "transform"
        };
        d.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn
                    , o = f[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[o],
                    i(e.ingProperties) && this.disableTransition(),
                    o in e.clean && (this.element.style[t.propertyName] = "",
                        delete e.clean[o]),
                    o in e.onEnd) {
                    var n = e.onEnd[o];
                    n.call(this),
                        delete e.onEnd[o]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }
            ,
            d.disableTransition = function () {
                this.removeTransitionStyles(),
                    this.element.removeEventListener(u, this, !1),
                    this.isTransitioning = !1
            }
            ,
            d._removeStyles = function (t) {
                var e = {};
                for (var i in t)
                    e[i] = "";
                this.css(e)
            }
            ;
        var c = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return d.removeTransitionStyles = function () {
            this.css(c)
        }
            ,
            d.stagger = function (t) {
                t = isNaN(t) ? 0 : t,
                    this.staggerDelay = t + "ms"
            }
            ,
            d.removeElem = function () {
                this.element.parentNode.removeChild(this.element),
                    this.css({
                        display: ""
                    }),
                    this.emitEvent("remove", [this])
            }
            ,
            d.remove = function () {
                return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
                    this.removeElem()
                }),
                    void this.hide()) : void this.removeElem()
            }
            ,
            d.reveal = function () {
                delete this.isHidden,
                    this.css({
                        display: ""
                    });
                var t = this.layout.options
                    , e = {}
                    , i = this.getHideRevealTransitionEndProperty("visibleStyle");
                e[i] = this.onRevealTransitionEnd,
                    this.transition({
                        from: t.hiddenStyle,
                        to: t.visibleStyle,
                        isCleaning: !0,
                        onTransitionEnd: e
                    })
            }
            ,
            d.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal")
            }
            ,
            d.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity)
                    return "opacity";
                for (var i in e)
                    return i
            }
            ,
            d.hide = function () {
                this.isHidden = !0,
                    this.css({
                        display: ""
                    });
                var t = this.layout.options
                    , e = {}
                    , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
                e[i] = this.onHideTransitionEnd,
                    this.transition({
                        from: t.visibleStyle,
                        to: t.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: e
                    })
            }
            ,
            d.onHideTransitionEnd = function () {
                this.isHidden && (this.css({
                    display: "none"
                }),
                    this.emitEvent("hide"))
            }
            ,
            d.destroy = function () {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }
            ,
            o
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
            return e(t, i, o, n, s)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function (t, e, i, o, n) {
        "use strict";
        function s(t, e) {
            var i = o.getQueryElement(t);
            if (!i)
                return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i,
                h && (this.$element = h(this.element)),
                this.options = o.extend({}, this.constructor.defaults),
                this.option(e);
            var n = ++l;
            this.element.outlayerGUID = n,
                f[n] = this,
                this._create();
            var s = this._getOption("initLayout");
            s && this.layout()
        }
        function r(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype),
                e.prototype.constructor = e,
                e
        }
        function a(t) {
            if ("number" == typeof t)
                return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/)
                , i = e && e[1]
                , o = e && e[2];
            if (!i.length)
                return 0;
            i = parseFloat(i);
            var n = m[o] || 1;
            return i * n
        }
        var u = t.console
            , h = t.jQuery
            , d = function () { }
            , l = 0
            , f = {};
        s.namespace = "outlayer",
            s.Item = n,
            s.defaults = {
                containerStyle: {
                    position: "relative"
                },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            };
        var c = s.prototype;
        o.extend(c, e.prototype),
            c.option = function (t) {
                o.extend(this.options, t)
            }
            ,
            c._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
            }
            ,
            s.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer"
            },
            c._create = function () {
                this.reloadItems(),
                    this.stamps = [],
                    this.stamp(this.options.stamp),
                    o.extend(this.element.style, this.options.containerStyle);
                var t = this._getOption("resize");
                t && this.bindResize()
            }
            ,
            c.reloadItems = function () {
                this.items = this._itemize(this.element.children)
            }
            ,
            c._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
                    var s = e[n]
                        , r = new i(s, this);
                    o.push(r)
                }
                return o
            }
            ,
            c._filterFindItemElements = function (t) {
                return o.filterFindElements(t, this.options.itemSelector)
            }
            ,
            c.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element
                })
            }
            ,
            c.layout = function () {
                this._resetLayout(),
                    this._manageStamps();
                var t = this._getOption("layoutInstant")
                    , e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e),
                    this._isLayoutInited = !0
            }
            ,
            c._init = c.layout,
            c._resetLayout = function () {
                this.getSize()
            }
            ,
            c.getSize = function () {
                this.size = i(this.element)
            }
            ,
            c._getMeasurement = function (t, e) {
                var o, n = this.options[t];
                n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n),
                    this[t] = o ? i(o)[e] : n) : this[t] = 0
            }
            ,
            c.layoutItems = function (t, e) {
                t = this._getItemsForLayout(t),
                    this._layoutItems(t, e),
                    this._postLayout()
            }
            ,
            c._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored
                })
            }
            ,
            c._layoutItems = function (t, e) {
                if (this._emitCompleteOnItems("layout", t),
                    t && t.length) {
                    var i = [];
                    t.forEach(function (t) {
                        var o = this._getItemLayoutPosition(t);
                        o.item = t,
                            o.isInstant = e || t.isLayoutInstant,
                            i.push(o)
                    }, this),
                        this._processLayoutQueue(i)
                }
            }
            ,
            c._getItemLayoutPosition = function () {
                return {
                    x: 0,
                    y: 0
                }
            }
            ,
            c._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e)
                    }, this)
            }
            ,
            c.updateStagger = function () {
                var t = this.options.stagger;
                return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
                    this.stagger)
            }
            ,
            c._positionItem = function (t, e, i, o, n) {
                o ? t.goTo(e, i) : (t.stagger(n * this.stagger),
                    t.moveTo(e, i))
            }
            ,
            c._postLayout = function () {
                this.resizeContainer()
            }
            ,
            c.resizeContainer = function () {
                var t = this._getOption("resizeContainer");
                if (t) {
                    var e = this._getContainerSize();
                    e && (this._setContainerMeasure(e.width, !0),
                        this._setContainerMeasure(e.height, !1))
                }
            }
            ,
            c._getContainerSize = d,
            c._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                        t = Math.max(t, 0),
                        this.element.style[e ? "width" : "height"] = t + "px"
                }
            }
            ,
            c._emitCompleteOnItems = function (t, e) {
                function i() {
                    n.dispatchEvent(t + "Complete", null, [e])
                }
                function o() {
                    r++,
                        r == s && i()
                }
                var n = this
                    , s = e.length;
                if (!e || !s)
                    return void i();
                var r = 0;
                e.forEach(function (e) {
                    e.once(t, o)
                })
            }
            ,
            c.dispatchEvent = function (t, e, i) {
                var o = e ? [e].concat(i) : i;
                if (this.emitEvent(t, o),
                    h)
                    if (this.$element = this.$element || h(this.element),
                        e) {
                        var n = h.Event(e);
                        n.type = t,
                            this.$element.trigger(n, i)
                    } else
                        this.$element.trigger(t, i)
            }
            ,
            c.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }
            ,
            c.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }
            ,
            c.stamp = function (t) {
                t = this._find(t),
                    t && (this.stamps = this.stamps.concat(t),
                        t.forEach(this.ignore, this))
            }
            ,
            c.unstamp = function (t) {
                t = this._find(t),
                    t && t.forEach(function (t) {
                        o.removeFrom(this.stamps, t),
                            this.unignore(t)
                    }, this)
            }
            ,
            c._find = function (t) {
                if (t)
                    return "string" == typeof t && (t = this.element.querySelectorAll(t)),
                        t = o.makeArray(t)
            }
            ,
            c._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(),
                    this.stamps.forEach(this._manageStamp, this))
            }
            ,
            c._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect()
                    , e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }
            ,
            c._manageStamp = d,
            c._getElementOffset = function (t) {
                var e = t.getBoundingClientRect()
                    , o = this._boundingRect
                    , n = i(t)
                    , s = {
                        left: e.left - o.left - n.marginLeft,
                        top: e.top - o.top - n.marginTop,
                        right: o.right - e.right - n.marginRight,
                        bottom: o.bottom - e.bottom - n.marginBottom
                    };
                return s
            }
            ,
            c.handleEvent = o.handleEvent,
            c.bindResize = function () {
                t.addEventListener("resize", this),
                    this.isResizeBound = !0
            }
            ,
            c.unbindResize = function () {
                t.removeEventListener("resize", this),
                    this.isResizeBound = !1
            }
            ,
            c.onresize = function () {
                this.resize()
            }
            ,
            o.debounceMethod(s, "onresize", 100),
            c.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }
            ,
            c.needsResizeLayout = function () {
                var t = i(this.element)
                    , e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth
            }
            ,
            c.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)),
                    e
            }
            ,
            c.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0),
                    this.reveal(e))
            }
            ,
            c.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i),
                        this._resetLayout(),
                        this._manageStamps(),
                        this.layoutItems(e, !0),
                        this.reveal(e),
                        this.layoutItems(i)
                }
            }
            ,
            c.reveal = function (t) {
                if (this._emitCompleteOnItems("reveal", t),
                    t && t.length) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e),
                            t.reveal()
                    })
                }
            }
            ,
            c.hide = function (t) {
                if (this._emitCompleteOnItems("hide", t),
                    t && t.length) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e),
                            t.hide()
                    })
                }
            }
            ,
            c.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e)
            }
            ,
            c.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e)
            }
            ,
            c.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t)
                        return i
                }
            }
            ,
            c.getItems = function (t) {
                t = o.makeArray(t);
                var e = [];
                return t.forEach(function (t) {
                    var i = this.getItem(t);
                    i && e.push(i)
                }, this),
                    e
            }
            ,
            c.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e && e.length && e.forEach(function (t) {
                        t.remove(),
                            o.removeFrom(this.items, t)
                    }, this)
            }
            ,
            c.destroy = function () {
                var t = this.element.style;
                t.height = "",
                    t.position = "",
                    t.width = "",
                    this.items.forEach(function (t) {
                        t.destroy()
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete f[e],
                    delete this.element.outlayerGUID,
                    h && h.removeData(this.element, this.constructor.namespace)
            }
            ,
            s.data = function (t) {
                t = o.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && f[e]
            }
            ,
            s.create = function (t, e) {
                var i = r(s);
                return i.defaults = o.extend({}, s.defaults),
                    o.extend(i.defaults, e),
                    i.compatOptions = o.extend({}, s.compatOptions),
                    i.namespace = t,
                    i.data = s.data,
                    i.Item = r(n),
                    o.htmlInit(i, t),
                    h && h.bridget && h.bridget(t, i),
                    i
            }
            ;
        var m = {
            ms: 1,
            s: 1e3
        };
        return s.Item = n,
            s
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
            t.Isotope.Item = e(t.Outlayer))
    }(window, function (t) {
        "use strict";
        function e() {
            t.Item.apply(this, arguments)
        }
        var i = e.prototype = Object.create(t.Item.prototype)
            , o = i._create;
        i._create = function () {
            this.id = this.layout.itemGUID++,
                o.call(this),
                this.sortData = {}
        }
            ,
            i.updateSortData = function () {
                if (!this.isIgnored) {
                    this.sortData.id = this.id,
                        this.sortData["original-order"] = this.id,
                        this.sortData.random = Math.random();
                    var t = this.layout.options.getSortData
                        , e = this.layout._sorters;
                    for (var i in t) {
                        var o = e[i];
                        this.sortData[i] = o(this.element, this)
                    }
                }
            }
            ;
        var n = i.destroy;
        return i.destroy = function () {
            n.apply(this, arguments),
                this.css({
                    display: ""
                })
        }
            ,
            e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
            t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function (t, e) {
        "use strict";
        function i(t) {
            this.isotope = t,
                t && (this.options = t.options[this.namespace],
                    this.element = t.element,
                    this.items = t.filteredItems,
                    this.size = t.size)
        }
        var o = i.prototype
            , n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
        return n.forEach(function (t) {
            o[t] = function () {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }),
            o.needsVerticalResizeLayout = function () {
                var e = t(this.isotope.element)
                    , i = this.isotope.size && e;
                return i && e.innerHeight != this.isotope.size.innerHeight
            }
            ,
            o._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments)
            }
            ,
            o.getColumnWidth = function () {
                this.getSegmentSize("column", "Width")
            }
            ,
            o.getRowHeight = function () {
                this.getSegmentSize("row", "Height")
            }
            ,
            o.getSegmentSize = function (t, e) {
                var i = t + e
                    , o = "outer" + e;
                if (this._getMeasurement(i, o),
                    !this[i]) {
                    var n = this.getFirstItemSize();
                    this[i] = n && n[o] || this.isotope.size["inner" + e]
                }
            }
            ,
            o.getFirstItemSize = function () {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element)
            }
            ,
            o.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments)
            }
            ,
            o.getSize = function () {
                this.isotope.getSize(),
                    this.size = this.isotope.size
            }
            ,
            i.modes = {},
            i.create = function (t, e) {
                function n() {
                    i.apply(this, arguments)
                }
                return n.prototype = Object.create(o),
                    n.prototype.constructor = n,
                    e && (n.options = e),
                    n.prototype.namespace = t,
                    i.modes[t] = n,
                    n
            }
            ,
            i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function (t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var o = i.prototype;
        return o._resetLayout = function () {
            this.getSize(),
                this._getMeasurement("columnWidth", "outerWidth"),
                this._getMeasurement("gutter", "outerWidth"),
                this.measureColumns(),
                this.colYs = [];
            for (var t = 0; t < this.cols; t++)
                this.colYs.push(0);
            this.maxY = 0,
                this.horizontalColIndex = 0
        }
            ,
            o.measureColumns = function () {
                if (this.getContainerWidth(),
                    !this.columnWidth) {
                    var t = this.items[0]
                        , i = t && t.element;
                    this.columnWidth = i && e(i).outerWidth || this.containerWidth
                }
                var o = this.columnWidth += this.gutter
                    , n = this.containerWidth + this.gutter
                    , s = n / o
                    , r = o - n % o
                    , a = r && r < 1 ? "round" : "floor";
                s = Math[a](s),
                    this.cols = Math.max(s, 1)
            }
            ,
            o.getContainerWidth = function () {
                var t = this._getOption("fitWidth")
                    , i = t ? this.element.parentNode : this.element
                    , o = e(i);
                this.containerWidth = o && o.innerWidth
            }
            ,
            o._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth
                    , i = e && e < 1 ? "round" : "ceil"
                    , o = Math[i](t.size.outerWidth / this.columnWidth);
                o = Math.min(o, this.cols);
                for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
                    x: this.columnWidth * s.col,
                    y: s.y
                }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++)
                    this.colYs[h] = a;
                return r
            }
            ,
            o._getTopColPosition = function (t) {
                var e = this._getTopColGroup(t)
                    , i = Math.min.apply(Math, e);
                return {
                    col: e.indexOf(i),
                    y: i
                }
            }
            ,
            o._getTopColGroup = function (t) {
                if (t < 2)
                    return this.colYs;
                for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
                    e[o] = this._getColGroupY(o, t);
                return e
            }
            ,
            o._getColGroupY = function (t, e) {
                if (e < 2)
                    return this.colYs[t];
                var i = this.colYs.slice(t, t + e);
                return Math.max.apply(Math, i)
            }
            ,
            o._getHorizontalColPosition = function (t, e) {
                var i = this.horizontalColIndex % this.cols
                    , o = t > 1 && i + t > this.cols;
                i = o ? 0 : i;
                var n = e.size.outerWidth && e.size.outerHeight;
                return this.horizontalColIndex = n ? i + t : this.horizontalColIndex,
                {
                    col: i,
                    y: this._getColGroupY(i, t)
                }
            }
            ,
            o._manageStamp = function (t) {
                var i = e(t)
                    , o = this._getElementOffset(t)
                    , n = this._getOption("originLeft")
                    , s = n ? o.left : o.right
                    , r = s + i.outerWidth
                    , a = Math.floor(s / this.columnWidth);
                a = Math.max(0, a);
                var u = Math.floor(r / this.columnWidth);
                u -= r % this.columnWidth ? 0 : 1,
                    u = Math.min(this.cols - 1, u);
                for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++)
                    this.colYs[l] = Math.max(d, this.colYs[l])
            }
            ,
            o._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
                    t
            }
            ,
            o._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)
                    t++;
                return (this.cols - t) * this.columnWidth - this.gutter
            }
            ,
            o.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(),
                    t != this.containerWidth
            }
            ,
            i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function (t, e) {
        "use strict";
        var i = t.create("masonry")
            , o = i.prototype
            , n = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var s in e.prototype)
            n[s] || (o[s] = e.prototype[s]);
        var r = o.measureColumns;
        o.measureColumns = function () {
            this.items = this.isotope.filteredItems,
                r.call(this)
        }
            ;
        var a = o._getOption;
        return o._getOption = function (t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        }
            ,
            i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function (t) {
        "use strict";
        var e = t.create("fitRows")
            , i = e.prototype;
        return i._resetLayout = function () {
            this.x = 0,
                this.y = 0,
                this.maxY = 0,
                this._getMeasurement("gutter", "outerWidth")
        }
            ,
            i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter
                    , i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > i && (this.x = 0,
                    this.y = this.maxY);
                var o = {
                    x: this.x,
                    y: this.y
                };
                return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
                    this.x += e,
                    o
            }
            ,
            i._getContainerSize = function () {
                return {
                    height: this.maxY
                }
            }
            ,
            e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function (t) {
        "use strict";
        var e = t.create("vertical", {
            horizontalAlignment: 0
        })
            , i = e.prototype;
        return i._resetLayout = function () {
            this.y = 0
        }
            ,
            i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
                    , i = this.y;
                return this.y += t.size.outerHeight,
                {
                    x: e,
                    y: i
                }
            }
            ,
            i._getContainerSize = function () {
                return {
                    height: this.y
                }
            }
            ,
            e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function (t, e, i, o, n, s, r) {
        function a(t, e) {
            return function (i, o) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n]
                        , r = i.sortData[s]
                        , a = o.sortData[s];
                    if (r > a || r < a) {
                        var u = void 0 !== e[s] ? e[s] : e
                            , h = u ? 1 : -1;
                        return (r > a ? 1 : -1) * h
                    }
                }
                return 0
            }
        }
        var u = t.jQuery
            , h = String.prototype.trim ? function (t) {
                return t.trim()
            }
                : function (t) {
                    return t.replace(/^\s+|\s+$/g, "")
                }
            , d = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        d.Item = s,
            d.LayoutMode = r;
        var l = d.prototype;
        l._create = function () {
            this.itemGUID = 0,
                this._sorters = {},
                this._getSorters(),
                e.prototype._create.call(this),
                this.modes = {},
                this.filteredItems = this.items,
                this.sortHistory = ["original-order"];
            for (var t in r.modes)
                this._initLayoutMode(t)
        }
            ,
            l.reloadItems = function () {
                this.itemGUID = 0,
                    e.prototype.reloadItems.call(this)
            }
            ,
            l._itemize = function () {
                for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.id = this.itemGUID++
                }
                return this._updateItemsSortData(t),
                    t
            }
            ,
            l._initLayoutMode = function (t) {
                var e = r.modes[t]
                    , i = this.options[t] || {};
                this.options[t] = e.options ? n.extend(e.options, i) : i,
                    this.modes[t] = new e(this)
            }
            ,
            l.layout = function () {
                return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
            }
            ,
            l._layout = function () {
                var t = this._getIsInstant();
                this._resetLayout(),
                    this._manageStamps(),
                    this.layoutItems(this.filteredItems, t),
                    this._isLayoutInited = !0
            }
            ,
            l.arrange = function (t) {
                this.option(t),
                    this._getIsInstant();
                var e = this._filter(this.items);
                this.filteredItems = e.matches,
                    this._bindArrangeComplete(),
                    this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
                    this._sort(),
                    this._layout()
            }
            ,
            l._init = l.arrange,
            l._hideReveal = function (t) {
                this.reveal(t.needReveal),
                    this.hide(t.needHide)
            }
            ,
            l._getIsInstant = function () {
                var t = this._getOption("layoutInstant")
                    , e = void 0 !== t ? t : !this._isLayoutInited;
                return this._isInstant = e,
                    e
            }
            ,
            l._bindArrangeComplete = function () {
                function t() {
                    e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
                }
                var e, i, o, n = this;
                this.once("layoutComplete", function () {
                    e = !0,
                        t()
                }),
                    this.once("hideComplete", function () {
                        i = !0,
                            t()
                    }),
                    this.once("revealComplete", function () {
                        o = !0,
                            t()
                    })
            }
            ,
            l._filter = function (t) {
                var e = this.options.filter;
                e = e || "*";
                for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
                    var a = t[r];
                    if (!a.isIgnored) {
                        var u = s(a);
                        u && i.push(a),
                            u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
                    }
                }
                return {
                    matches: i,
                    needReveal: o,
                    needHide: n
                }
            }
            ,
            l._getFilterTest = function (t) {
                return u && this.options.isJQueryFiltering ? function (e) {
                    return u(e.element).is(t)
                }
                    : "function" == typeof t ? function (e) {
                        return t(e.element)
                    }
                        : function (e) {
                            return o(e.element, t)
                        }
            }
            ,
            l.updateSortData = function (t) {
                var e;
                t ? (t = n.makeArray(t),
                    e = this.getItems(t)) : e = this.items,
                    this._getSorters(),
                    this._updateItemsSortData(e)
            }
            ,
            l._getSorters = function () {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = f(i)
                }
            }
            ,
            l._updateItemsSortData = function (t) {
                for (var e = t && t.length, i = 0; e && i < e; i++) {
                    var o = t[i];
                    o.updateSortData()
                }
            }
            ;
        var f = function () {
            function t(t) {
                if ("string" != typeof t)
                    return t;
                var i = h(t).split(" ")
                    , o = i[0]
                    , n = o.match(/^\[(.+)\]$/)
                    , s = n && n[1]
                    , r = e(s, o)
                    , a = d.sortDataParsers[i[1]];
                return t = a ? function (t) {
                    return t && a(r(t))
                }
                    : function (t) {
                        return t && r(t)
                    }
            }
            function e(t, e) {
                return t ? function (e) {
                    return e.getAttribute(t)
                }
                    : function (t) {
                        var i = t.querySelector(e);
                        return i && i.textContent
                    }
            }
            return t
        }();
        d.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10)
            },
            parseFloat: function (t) {
                return parseFloat(t)
            }
        },
            l._sort = function () {
                if (this.options.sortBy) {
                    var t = n.makeArray(this.options.sortBy);
                    this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                    var e = a(this.sortHistory, this.options.sortAscending);
                    this.filteredItems.sort(e)
                }
            }
            ,
            l._getIsSameSortBy = function (t) {
                for (var e = 0; e < t.length; e++)
                    if (t[e] != this.sortHistory[e])
                        return !1;
                return !0
            }
            ,
            l._mode = function () {
                var t = this.options.layoutMode
                    , e = this.modes[t];
                if (!e)
                    throw new Error("No layout mode: " + t);
                return e.options = this.options[t],
                    e
            }
            ,
            l._resetLayout = function () {
                e.prototype._resetLayout.call(this),
                    this._mode()._resetLayout()
            }
            ,
            l._getItemLayoutPosition = function (t) {
                return this._mode()._getItemLayoutPosition(t)
            }
            ,
            l._manageStamp = function (t) {
                this._mode()._manageStamp(t)
            }
            ,
            l._getContainerSize = function () {
                return this._mode()._getContainerSize()
            }
            ,
            l.needsResizeLayout = function () {
                return this._mode().needsResizeLayout()
            }
            ,
            l.appended = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i)
                }
            }
            ,
            l.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    this._resetLayout(),
                        this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(this.filteredItems),
                        this.filteredItems = i.concat(this.filteredItems),
                        this.items = e.concat(this.items)
                }
            }
            ,
            l._filterRevealAdded = function (t) {
                var e = this._filter(t);
                return this.hide(e.needHide),
                    this.reveal(e.matches),
                    this.layoutItems(e.matches, !0),
                    e.matches
            }
            ,
            l.insert = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i, o, n = e.length;
                    for (i = 0; i < n; i++)
                        o = e[i],
                            this.element.appendChild(o.element);
                    var s = this._filter(e).matches;
                    for (i = 0; i < n; i++)
                        e[i].isLayoutInstant = !0;
                    for (this.arrange(),
                        i = 0; i < n; i++)
                        delete e[i].isLayoutInstant;
                    this.reveal(s)
                }
            }
            ;
        var c = l.remove;
        return l.remove = function (t) {
            t = n.makeArray(t);
            var e = this.getItems(t);
            c.call(this, t);
            for (var i = e && e.length, o = 0; i && o < i; o++) {
                var s = e[o];
                n.removeFrom(this.filteredItems, s)
            }
        }
            ,
            l.shuffle = function () {
                for (var t = 0; t < this.items.length; t++) {
                    var e = this.items[t];
                    e.sortData.random = Math.random()
                }
                this.options.sortBy = "random",
                    this._sort(),
                    this._layout()
            }
            ,
            l._noTransition = function (t, e) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var o = t.apply(this, e);
                return this.options.transitionDuration = i,
                    o
            }
            ,
            l.getFilteredItemElements = function () {
                return this.filteredItems.map(function (t) {
                    return t.element
                })
            }
            ,
            d
    });

// CountDown Clock
// Version   : 1.0.1
// Developer : Ekrem KAYA
// Website   : http://e-piksel.com
// GitHub    : https://github.com/epiksel/countdown

!function (t) {
    t.fn.countdown = function (e, n) {
        function o() {
            var t = new Date(r.date)
                , e = s()
                , o = t - e;
            if (0 > o)
                return clearInterval(d),
                    void (n && "function" == typeof n && n());
            var a = 1e3
                , f = 60 * a
                , u = 60 * f
                , l = 24 * u
                , c = Math.floor(o / l)
                , h = Math.floor(o % l / u)
                , x = Math.floor(o % u / f)
                , g = Math.floor(o % f / a)
                , y = 1 === c ? r.day : r.days
                , m = 1 === h ? r.hour : r.hours
                , v = 1 === x ? r.minute : r.minutes
                , D = 1 === g ? r.second : r.seconds;
            c = String(c).length >= 2 ? c : "0" + c,
                h = String(h).length >= 2 ? h : "0" + h,
                x = String(x).length >= 2 ? x : "0" + x,
                g = String(g).length >= 2 ? g : "0" + g,
                i.find(".days").text(c),
                i.find(".hours").text(h),
                i.find(".minutes").text(x),
                i.find(".seconds").text(g),
                i.find(".days_text").text(y),
                i.find(".hours_text").text(m),
                i.find(".minutes_text").text(v),
                i.find(".seconds_text").text(D)
        }
        var r = t.extend({
            date: null,
            offset: null,
            day: "Day",
            days: "Days",
            hour: "Hour",
            hours: "Hours",
            minute: "Minute",
            minutes: "Minutes",
            second: "Second",
            seconds: "Seconds"
        }, e);
        r.date || t.error("Date is not defined."),
            Date.parse(r.date) || t.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");
        var i = this
            , s = function () {
                var t = new Date
                    , e = t.getTime() + 6e4 * t.getTimezoneOffset()
                    , n = new Date(e + 36e5 * r.offset);
                return n
            }
            , d = setInterval(o, 1e3)
    }
}(jQuery);

//lightcase 

!function (t) {
    "use strict";
    var e = {
        cache: {},
        support: {},
        objects: {},
        init: function (e) {
            return this.each(function () {
                t(this).unbind("click.lightcase").bind("click.lightcase", function (i) {
                    i.preventDefault(),
                        t(this).lightcase("start", e)
                })
            })
        },
        start: function (i) {
            e.origin = lightcase.origin = this,
                e.settings = lightcase.settings = t.extend(!0, {
                    idPrefix: "lightcase-",
                    classPrefix: "lightcase-",
                    attrPrefix: "lc-",
                    transition: "elastic",
                    transitionOpen: null,
                    transitionClose: null,
                    transitionIn: null,
                    transitionOut: null,
                    cssTransitions: !0,
                    speedIn: 250,
                    speedOut: 250,
                    width: null,
                    height: null,
                    maxWidth: 800,
                    maxHeight: 500,
                    forceWidth: !1,
                    forceHeight: !1,
                    liveResize: !0,
                    fullScreenModeForMobile: !0,
                    mobileMatchExpression: /(iphone|ipod|ipad|android|blackberry|symbian)/,
                    disableShrink: !1,
                    fixedRatio: !0,
                    shrinkFactor: .75,
                    overlayOpacity: .9,
                    slideshow: !1,
                    slideshowAutoStart: !0,
                    timeout: 5e3,
                    swipe: !0,
                    useKeys: !0,
                    useCategories: !0,
                    useAsCollection: !1,
                    navigateEndless: !0,
                    closeOnOverlayClick: !0,
                    title: null,
                    caption: null,
                    showTitle: !0,
                    showCaption: !0,
                    showSequenceInfo: !0,
                    inline: {
                        width: "auto",
                        height: "auto"
                    },
                    ajax: {
                        width: "auto",
                        height: "auto",
                        type: "get",
                        dataType: "html",
                        data: {}
                    },
                    iframe: {
                        width: 800,
                        height: 500,
                        frameborder: 0
                    },
                    flash: {
                        width: 400,
                        height: 205,
                        wmode: "transparent"
                    },
                    video: {
                        width: 400,
                        height: 225,
                        poster: "",
                        preload: "auto",
                        controls: !0,
                        autobuffer: !0,
                        autoplay: !0,
                        loop: !1
                    },
                    attr: "data-rel",
                    href: null,
                    type: null,
                    typeMapping: {
                        image: "jpg,jpeg,gif,png,bmp",
                        flash: "swf",
                        video: "mp4,mov,ogv,ogg,webm",
                        iframe: "html,php",
                        ajax: "json,txt",
                        inline: "#"
                    },
                    errorMessage: function () {
                        return '<p class="' + e.settings.classPrefix + 'error">' + e.settings.labels.errorMessage + "</p>"
                    },
                    labels: {
                        errorMessage: "Source could not be found...",
                        "sequenceInfo.of": " of ",
                        close: "Close",
                        "navigator.prev": "Prev",
                        "navigator.next": "Next",
                        "navigator.play": "Play",
                        "navigator.pause": "Pause"
                    },
                    markup: function () {
                        e.objects.body.append(e.objects.overlay = t('<div id="' + e.settings.idPrefix + 'overlay"></div>'), e.objects.loading = t('<div id="' + e.settings.idPrefix + 'loading" class="' + e.settings.classPrefix + 'icon-spin"></div>'), e.objects["case"] = t('<div id="' + e.settings.idPrefix + 'case" aria-hidden="true" role="dialog"></div>')),
                            e.objects["case"].after(e.objects.close = t('<a href="#" class="' + e.settings.classPrefix + 'icon-close"><span>' + e.settings.labels.close + "</span></a>"), e.objects.nav = t('<div id="' + e.settings.idPrefix + 'nav"></div>')),
                            e.objects.nav.append(e.objects.prev = t('<a href="#" class="' + e.settings.classPrefix + 'icon-prev"><span>' + e.settings.labels["navigator.prev"] + "</span></a>").hide(), e.objects.next = t('<a href="#" class="' + e.settings.classPrefix + 'icon-next"><span>' + e.settings.labels["navigator.next"] + "</span></a>").hide(), e.objects.play = t('<a href="#" class="' + e.settings.classPrefix + 'icon-play"><span>' + e.settings.labels["navigator.play"] + "</span></a>").hide(), e.objects.pause = t('<a href="#" class="' + e.settings.classPrefix + 'icon-pause"><span>' + e.settings.labels["navigator.pause"] + "</span></a>").hide()),
                            e.objects["case"].append(e.objects.content = t('<div id="' + e.settings.idPrefix + 'content"></div>'), e.objects.info = t('<div id="' + e.settings.idPrefix + 'info"></div>')),
                            e.objects.content.append(e.objects.contentInner = t('<div class="' + e.settings.classPrefix + 'contentInner"></div>')),
                            e.objects.info.append(e.objects.sequenceInfo = t('<div id="' + e.settings.idPrefix + 'sequenceInfo"></div>'), e.objects.title = t('<h4 id="' + e.settings.idPrefix + 'title"></h4>'), e.objects.caption = t('<p id="' + e.settings.idPrefix + 'caption"></p>'))
                    },
                    onInit: {},
                    onStart: {},
                    onFinish: {},
                    onResize: {},
                    onClose: {},
                    onCleanup: {}
                }, i, e.origin.data ? e.origin.data("lc-options") : {}),
                e.objects.document = t("html"),
                e.objects.body = t("body"),
                e._callHooks(e.settings.onInit),
                e.objectData = e._setObjectData(this),
                e._addElements(),
                e._open(),
                e.dimensions = e.getViewportDimensions()
        },
        get: function (t) {
            return e.objects[t]
        },
        getObjectData: function () {
            return e.objectData
        },
        _setObjectData: function (i) {
            var s = t(i)
                , n = {
                    "this": t(i),
                    title: e.settings.title || s.attr(e._prefixAttributeName("title")) || s.attr("title"),
                    caption: e.settings.caption || s.attr(e._prefixAttributeName("caption")) || s.children("img").attr("alt"),
                    url: e._determineUrl(),
                    requestType: e.settings.ajax.type,
                    requestData: e.settings.ajax.data,
                    requestDataType: e.settings.ajax.dataType,
                    rel: s.attr(e._determineAttributeSelector()),
                    type: e.settings.type || e._verifyDataType(e._determineUrl()),
                    isPartOfSequence: e.settings.useAsCollection || e._isPartOfSequence(s.attr(e.settings.attr), ":"),
                    isPartOfSequenceWithSlideshow: e._isPartOfSequence(s.attr(e.settings.attr), ":slideshow"),
                    currentIndex: t(e._determineAttributeSelector()).index(s),
                    sequenceLength: t(e._determineAttributeSelector()).length
                };
            return n.sequenceInfo = n.currentIndex + 1 + e.settings.labels["sequenceInfo.of"] + n.sequenceLength,
                n.prevIndex = n.currentIndex - 1,
                n.nextIndex = n.currentIndex + 1,
                n
        },
        _prefixAttributeName: function (t) {
            return "data-" + e.settings.attrPrefix + t
        },
        _determineLinkTarget: function () {
            return e.settings.href || t(e.origin).attr(e._prefixAttributeName("href")) || t(e.origin).attr("href")
        },
        _determineAttributeSelector: function () {
            var i = t(e.origin)
                , s = "";
            if ("undefined" != typeof e.cache.selector)
                s = e.cache.selector;
            else if (e.settings.useCategories === !0 && i.attr(e._prefixAttributeName("categories"))) {
                var n = i.attr(e._prefixAttributeName("categories")).split(" ");
                t.each(n, function (t, i) {
                    t > 0 && (s += ","),
                        s += "[" + e._prefixAttributeName("categories") + '~="' + i + '"]'
                })
            } else
                s = "[" + e.settings.attr + '="' + i.attr(e.settings.attr) + '"]';
            return e.cache.selector = s,
                s
        },
        _determineUrl: function () {
            var i, s = e._verifyDataUrl(e._determineLinkTarget()), n = 0, a = 0, o = "";
            return t.each(s, function (t, s) {
                switch (e._verifyDataType(s.url)) {
                    case "video":
                        var c = document.createElement("video")
                            , r = e._verifyDataType(s.url) + "/" + e._getFileUrlSuffix(s.url);
                        "probably" !== o && o !== c.canPlayType(r) && "" !== c.canPlayType(r) && (o = c.canPlayType(r),
                            i = s.url);
                        break;
                    default:
                        e._devicePixelRatio() >= s.density && s.density >= a && e._matchMedia()("screen and (min-width:" + s.width + "px)").matches && s.width >= n && (n = s.width,
                            a = s.density,
                            i = s.url)
                }
            }),
                i
        },
        _normalizeUrl: function (t) {
            var e = /^\d+$/;
            return t.split(",").map(function (t) {
                var i = {
                    width: 0,
                    density: 0
                };
                return t.trim().split(/\s+/).forEach(function (t, s) {
                    if (0 === s)
                        return i.url = t;
                    var n = t.substring(0, t.length - 1)
                        , a = t[t.length - 1]
                        , o = parseInt(n, 10)
                        , c = parseFloat(n);
                    "w" === a && e.test(n) ? i.width = o : "h" === a && e.test(n) ? i.height = o : "x" !== a || isNaN(c) || (i.density = c)
                }),
                    i
            })
        },
        _isPartOfSequence: function (i, s) {
            var n = t("[" + e.settings.attr + '="' + i + '"]')
                , a = new RegExp(s);
            return a.test(i) && n.length > 1
        },
        isSlideshowEnabled: function () {
            return e.objectData.isPartOfSequence && (e.settings.slideshow === !0 || e.objectData.isPartOfSequenceWithSlideshow === !0)
        },
        _loadContent: function () {
            e.cache.originalObject && e._restoreObject(),
                e._createObject()
        },
        _createObject: function () {
            var i;
            switch (e.objectData.type) {
                case "image":
                    i = t(new Image),
                        i.attr({
                            src: e.objectData.url,
                            alt: e.objectData.title
                        });
                    break;
                case "inline":
                    i = t('<div class="' + e.settings.classPrefix + 'inlineWrap"></div>'),
                        i.html(e._cloneObject(t(e.objectData.url))),
                        t.each(e.settings.inline, function (t, s) {
                            i.attr(e._prefixAttributeName(t), s)
                        });
                    break;
                case "ajax":
                    i = t('<div class="' + e.settings.classPrefix + 'inlineWrap"></div>'),
                        t.each(e.settings.ajax, function (t, s) {
                            "data" !== t && i.attr(e._prefixAttributeName(t), s)
                        });
                    break;
                case "flash":
                    i = t('<embed src="' + e.objectData.url + '" type="application/x-shockwave-flash"></embed>'),
                        t.each(e.settings.flash, function (t, e) {
                            i.attr(t, e)
                        });
                    break;
                case "video":
                    i = t("<video></video>"),
                        i.attr("src", e.objectData.url),
                        t.each(e.settings.video, function (t, e) {
                            i.attr(t, e)
                        });
                    break;
                default:
                    i = t("<iframe></iframe>"),
                        i.attr({
                            src: e.objectData.url
                        }),
                        t.each(e.settings.iframe, function (t, e) {
                            i.attr(t, e)
                        })
            }
            e._addObject(i),
                e._loadObject(i)
        },
        _addObject: function (t) {
            e.objects.contentInner.html(t),
                e._loading("start"),
                e._callHooks(e.settings.onStart),
                e.settings.showSequenceInfo === !0 && e.objectData.isPartOfSequence ? (e.objects.sequenceInfo.html(e.objectData.sequenceInfo),
                    e.objects.sequenceInfo.show()) : (e.objects.sequenceInfo.empty(),
                        e.objects.sequenceInfo.hide()),
                e.settings.showTitle === !0 && void 0 !== e.objectData.title && "" !== e.objectData.title ? (e.objects.title.html(e.objectData.title),
                    e.objects.title.show()) : (e.objects.title.empty(),
                        e.objects.title.hide()),
                e.settings.showCaption === !0 && void 0 !== e.objectData.caption && "" !== e.objectData.caption ? (e.objects.caption.html(e.objectData.caption),
                    e.objects.caption.show()) : (e.objects.caption.empty(),
                        e.objects.caption.hide())
        },
        _loadObject: function (i) {
            switch (e.objectData.type) {
                case "inline":
                    t(e.objectData.url) ? e._showContent(i) : e.error();
                    break;
                case "ajax":
                    t.ajax(t.extend({}, e.settings.ajax, {
                        url: e.objectData.url,
                        type: e.objectData.requestType,
                        dataType: e.objectData.requestDataType,
                        data: e.objectData.requestData,
                        success: function (t, s, n) {
                            "json" === e.objectData.requestDataType ? e.objectData.data = t : i.html(t),
                                e._showContent(i)
                        },
                        error: function (t, i, s) {
                            e.error()
                        }
                    }));
                    break;
                case "flash":
                    e._showContent(i);
                    break;
                case "video":
                    "function" == typeof i.get(0).canPlayType || 0 === e.objects["case"].find("video").length ? e._showContent(i) : e.error();
                    break;
                default:
                    e.objectData.url ? (i.on("load", function () {
                        e._showContent(i)
                    }),
                        i.on("error", function () {
                            e.error()
                        })) : e.error()
            }
        },
        error: function () {
            e.objectData.type = "error";
            var i = t('<div class="' + e.settings.classPrefix + 'inlineWrap"></div>');
            i.html(e.settings.errorMessage),
                e.objects.contentInner.html(i),
                e._showContent(e.objects.contentInner)
        },
        _calculateDimensions: function (t) {
            e._cleanupDimensions();
            var i = {
                ratio: 1,
                objectWidth: t.attr("width") ? t.attr("width") : t.attr(e._prefixAttributeName("width")),
                objectHeight: t.attr("height") ? t.attr("height") : t.attr(e._prefixAttributeName("height"))
            };
            if (!e.settings.disableShrink)
                switch (i.maxWidth = parseInt(e.dimensions.windowWidth * e.settings.shrinkFactor),
                i.maxHeight = parseInt(e.dimensions.windowHeight * e.settings.shrinkFactor),
                i.maxWidth > e.settings.maxWidth && (i.maxWidth = e.settings.maxWidth),
                i.maxHeight > e.settings.maxHeight && (i.maxHeight = e.settings.maxHeight),
                i.differenceWidthAsPercent = parseInt(100 / i.maxWidth * i.objectWidth),
                i.differenceHeightAsPercent = parseInt(100 / i.maxHeight * i.objectHeight),
                e.objectData.type) {
                    case "image":
                    case "flash":
                    case "video":
                    case "iframe":
                    case "ajax":
                    case "inline":
                        if ("image" === e.objectData.type || e.settings.fixedRatio === !0) {
                            i.differenceWidthAsPercent > 100 && i.differenceWidthAsPercent > i.differenceHeightAsPercent && (i.objectWidth = i.maxWidth,
                                i.objectHeight = parseInt(i.objectHeight / i.differenceWidthAsPercent * 100)),
                                i.differenceHeightAsPercent > 100 && i.differenceHeightAsPercent > i.differenceWidthAsPercent && (i.objectWidth = parseInt(i.objectWidth / i.differenceHeightAsPercent * 100),
                                    i.objectHeight = i.maxHeight),
                                i.differenceHeightAsPercent > 100 && i.differenceWidthAsPercent < i.differenceHeightAsPercent && (i.objectWidth = parseInt(i.maxWidth / i.differenceHeightAsPercent * i.differenceWidthAsPercent),
                                    i.objectHeight = i.maxHeight);
                            break
                        }
                    case "error":
                        !isNaN(i.objectWidth) && i.objectWidth > i.maxWidth && (i.objectWidth = i.maxWidth);
                        break;
                    default:
                        (isNaN(i.objectWidth) || i.objectWidth > i.maxWidth) && !e.settings.forceWidth && (i.objectWidth = i.maxWidth),
                            (isNaN(i.objectHeight) && "auto" !== i.objectHeight || i.objectHeight > i.maxHeight) && !e.settings.forceHeight && (i.objectHeight = i.maxHeight)
                }
            if (e.settings.forceWidth) {
                try {
                    i.objectWidth = e.settings[e.objectData.type].width
                } catch (s) {
                    i.objectWidth = e.settings.width || i.objectWidth
                }
                i.maxWidth = null
            }
            if (t.attr(e._prefixAttributeName("max-width")) && (i.maxWidth = t.attr(e._prefixAttributeName("max-width"))),
                e.settings.forceHeight) {
                try {
                    i.objectHeight = e.settings[e.objectData.type].height
                } catch (s) {
                    i.objectHeight = e.settings.height || i.objectHeight
                }
                i.maxHeight = null
            }
            t.attr(e._prefixAttributeName("max-height")) && (i.maxHeight = t.attr(e._prefixAttributeName("max-height"))),
                e._adjustDimensions(t, i)
        },
        _adjustDimensions: function (t, i) {
            t.css({
                width: i.objectWidth,
                height: i.objectHeight,
                "max-width": i.maxWidth,
                "max-height": i.maxHeight
            }),
                e.objects.contentInner.css({
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    "max-width": "100%"
                }),
                e.objects["case"].css({
                    width: e.objects.contentInner.outerWidth()
                }),
                e.objects["case"].css({
                    "margin-top": parseInt(-(e.objects["case"].outerHeight() / 2)),
                    "margin-left": parseInt(-(e.objects["case"].outerWidth() / 2))
                })
        },
        _loading: function (t) {
            "start" === t ? (e.objects["case"].addClass(e.settings.classPrefix + "loading"),
                e.objects.loading.show()) : "end" === t && (e.objects["case"].removeClass(e.settings.classPrefix + "loading"),
                    e.objects.loading.hide())
        },
        getViewportDimensions: function () {
            return {
                windowWidth: t(window).innerWidth(),
                windowHeight: t(window).innerHeight()
            }
        },
        _verifyDataUrl: function (t) {
            return t && void 0 !== t && "" !== t ? (t.indexOf("#") > -1 && (t = t.split("#"),
                t = "#" + t[t.length - 1]),
                e._normalizeUrl(t.toString())) : !1
        },
        _getFileUrlSuffix: function (t) {
            return t.toLowerCase().split("?")[0].split(".")[1]
        },
        _verifyDataType: function (t) {
            var i = e.settings.typeMapping;
            if (!t)
                return !1;
            for (var s in i)
                if (i.hasOwnProperty(s))
                    for (var n = i[s].split(","), a = 0; a < n.length; a++) {
                        var o = n[a].toLowerCase()
                            , c = new RegExp(".(" + o + ")$", "i")
                            , r = t.toLowerCase().split("?")[0].substr(-5);
                        if (c.test(r) === !0 || "inline" === s && t.indexOf(o) > -1)
                            return s
                    }
            return "iframe"
        },
        _addElements: function () {
            "undefined" != typeof e.objects["case"] && t("#" + e.objects["case"].attr("id")).length || e.settings.markup()
        },
        _showContent: function (t) {
            switch (e.objects.document.attr(e._prefixAttributeName("type"), e.objectData.type),
            e.cache.object = t,
            e._calculateDimensions(t),
            e._callHooks(e.settings.onFinish),
            e.transition["in"]()) {
                case "scrollTop":
                case "scrollRight":
                case "scrollBottom":
                case "scrollLeft":
                case "scrollHorizontal":
                case "scrollVertical":
                    e.transition.scroll(e.objects["case"], "in", e.settings.speedIn),
                        e.transition.fade(e.objects.contentInner, "in", e.settings.speedIn);
                    break;
                case "elastic":
                    e.objects["case"].css("opacity") < 1 && (e.transition.zoom(e.objects["case"], "in", e.settings.speedIn),
                        e.transition.fade(e.objects.contentInner, "in", e.settings.speedIn));
                case "fade":
                case "fadeInline":
                    e.transition.fade(e.objects["case"], "in", e.settings.speedIn),
                        e.transition.fade(e.objects.contentInner, "in", e.settings.speedIn);
                    break;
                default:
                    e.transition.fade(e.objects["case"], "in", 0)
            }
            e._loading("end"),
                e.isBusy = !1,
                e.cache.firstOpened || (e.cache.firstOpened = e.objectData["this"]),
                e.objects.info.hide(),
                setTimeout(function () {
                    e.transition.fade(e.objects.info, "in", e.settings.speedIn)
                }, e.settings.speedIn)
        },
        _processContent: function () {
            switch (e.isBusy = !0,
            e.transition.fade(e.objects.info, "out", 0),
            e.settings.transitionOut) {
                case "scrollTop":
                case "scrollRight":
                case "scrollBottom":
                case "scrollLeft":
                case "scrollVertical":
                case "scrollHorizontal":
                    e.objects["case"].is(":hidden") ? (e.transition.fade(e.objects.contentInner, "out", 0),
                        e.transition.fade(e.objects["case"], "out", 0, 0, function () {
                            e._loadContent()
                        })) : e.transition.scroll(e.objects["case"], "out", e.settings.speedOut, function () {
                            e._loadContent()
                        });
                    break;
                case "fade":
                    e.objects["case"].is(":hidden") ? e.transition.fade(e.objects["case"], "out", 0, 0, function () {
                        e._loadContent()
                    }) : e.transition.fade(e.objects["case"], "out", e.settings.speedOut, 0, function () {
                        e._loadContent()
                    });
                    break;
                case "fadeInline":
                case "elastic":
                    e.objects["case"].is(":hidden") ? e.transition.fade(e.objects["case"], "out", 0, 0, function () {
                        e._loadContent()
                    }) : e.transition.fade(e.objects.contentInner, "out", e.settings.speedOut, 0, function () {
                        e._loadContent()
                    });
                    break;
                default:
                    e.transition.fade(e.objects["case"], "out", 0, 0, function () {
                        e._loadContent()
                    })
            }
        },
        _handleEvents: function () {
            e._unbindEvents(),
                e.objects.nav.children().not(e.objects.close).hide(),
                e.isSlideshowEnabled() && (e.settings.slideshowAutoStart !== !0 && !e.isSlideshowStarted || e.objects.nav.hasClass(e.settings.classPrefix + "paused") ? e._stopTimeout() : e._startTimeout()),
                e.settings.liveResize && e._watchResizeInteraction(),
                e.objects.close.click(function (t) {
                    t.preventDefault(),
                        e.close()
                }),
                e.settings.closeOnOverlayClick === !0 && e.objects.overlay.css("cursor", "pointer").click(function (t) {
                    t.preventDefault(),
                        e.close()
                }),
                e.settings.useKeys === !0 && e._addKeyEvents(),
                e.objectData.isPartOfSequence && (e.objects.nav.attr(e._prefixAttributeName("ispartofsequence"), !0),
                    e.objects.nav.data("items", e._setNavigation()),
                    e.objects.prev.click(function (t) {
                        t.preventDefault(),
                            e.settings.navigateEndless !== !0 && e.item.isFirst() || (e.objects.prev.unbind("click"),
                                e.cache.action = "prev",
                                e.objects.nav.data("items").prev.click(),
                                e.isSlideshowEnabled() && e._stopTimeout())
                    }),
                    e.objects.next.click(function (t) {
                        t.preventDefault(),
                            e.settings.navigateEndless !== !0 && e.item.isLast() || (e.objects.next.unbind("click"),
                                e.cache.action = "next",
                                e.objects.nav.data("items").next.click(),
                                e.isSlideshowEnabled() && e._stopTimeout())
                    }),
                    e.isSlideshowEnabled() && (e.objects.play.click(function (t) {
                        t.preventDefault(),
                            e._startTimeout()
                    }),
                        e.objects.pause.click(function (t) {
                            t.preventDefault(),
                                e._stopTimeout()
                        })),
                    e.settings.swipe === !0 && (t.isPlainObject(t.event.special.swipeleft) && e.objects["case"].on("swipeleft", function (t) {
                        t.preventDefault(),
                            e.objects.next.click(),
                            e.isSlideshowEnabled() && e._stopTimeout()
                    }),
                        t.isPlainObject(t.event.special.swiperight) && e.objects["case"].on("swiperight", function (t) {
                            t.preventDefault(),
                                e.objects.prev.click(),
                                e.isSlideshowEnabled() && e._stopTimeout()
                        })))
        },
        _addKeyEvents: function () {
            t(document).bind("keyup.lightcase", function (t) {
                if (!e.isBusy)
                    switch (t.keyCode) {
                        case 27:
                            e.objects.close.click();
                            break;
                        case 37:
                            e.objectData.isPartOfSequence && e.objects.prev.click();
                            break;
                        case 39:
                            e.objectData.isPartOfSequence && e.objects.next.click()
                    }
            })
        },
        _startTimeout: function () {
            e.isSlideshowStarted = !0,
                e.objects.play.hide(),
                e.objects.pause.show(),
                e.cache.action = "next",
                e.objects.nav.removeClass(e.settings.classPrefix + "paused"),
                e.timeout = setTimeout(function () {
                    e.objects.nav.data("items").next.click()
                }, e.settings.timeout)
        },
        _stopTimeout: function () {
            e.objects.play.show(),
                e.objects.pause.hide(),
                e.objects.nav.addClass(e.settings.classPrefix + "paused"),
                clearTimeout(e.timeout)
        },
        _setNavigation: function () {
            var i = t(e.cache.selector || e.settings.attr)
                , s = e.objectData.sequenceLength - 1
                , n = {
                    prev: i.eq(e.objectData.prevIndex),
                    next: i.eq(e.objectData.nextIndex)
                };
            return e.objectData.currentIndex > 0 ? e.objects.prev.show() : n.prevItem = i.eq(s),
                e.objectData.nextIndex <= s ? e.objects.next.show() : n.next = i.eq(0),
                e.settings.navigateEndless === !0 && (e.objects.prev.show(),
                    e.objects.next.show()),
                n
        },
        item: {
            isFirst: function () {
                return 0 === e.objectData.currentIndex
            },
            isFirstOpened: function () {
                return e.objectData["this"].is(e.cache.firstOpened)
            },
            isLast: function () {
                return e.objectData.currentIndex === e.objectData.sequenceLength - 1
            }
        },
        _cloneObject: function (t) {
            var i = t.clone()
                , s = t.attr("id");
            return t.is(":hidden") ? (e._cacheObjectData(t),
                t.attr("id", e.settings.idPrefix + "temp-" + s).empty()) : i.removeAttr("id"),
                i.show()
        },
        isMobileDevice: function () {
            var t = navigator.userAgent.toLowerCase()
                , i = t.match(e.settings.mobileMatchExpression);
            return i ? !0 : !1
        },
        isTransitionSupported: function () {
            var t = e.objects.body.get(0)
                , i = !1
                , s = {
                    transition: "",
                    WebkitTransition: "-webkit-",
                    MozTransition: "-moz-",
                    OTransition: "-o-",
                    MsTransition: "-ms-"
                };
            for (var n in s)
                s.hasOwnProperty(n) && n in t.style && (e.support.transition = s[n],
                    i = !0);
            return i
        },
        transition: {
            "in": function () {
                return e.settings.transitionOpen && !e.cache.firstOpened ? e.settings.transitionOpen : e.settings.transitionIn
            },
            fade: function (t, i, s, n, a) {
                var o = "in" === i
                    , c = {}
                    , r = t.css("opacity")
                    , l = {}
                    , d = n ? n : o ? 1 : 0;
                (e.isOpen || !o) && (c.opacity = r,
                    l.opacity = d,
                    t.css(c).show(),
                    e.support.transitions ? (l[e.support.transition + "transition"] = s + "ms ease",
                        setTimeout(function () {
                            t.css(l),
                                setTimeout(function () {
                                    t.css(e.support.transition + "transition", ""),
                                        !a || !e.isOpen && o || a()
                                }, s)
                        }, 15)) : (t.stop(),
                            t.animate(l, s, a)))
            },
            scroll: function (t, i, s, n) {
                var a = "in" === i
                    , o = a ? e.settings.transitionIn : e.settings.transitionOut
                    , c = "left"
                    , r = {}
                    , l = a ? 0 : 1
                    , d = a ? "-50%" : "50%"
                    , u = {}
                    , h = a ? 1 : 0
                    , f = a ? "50%" : "-50%";
                if (e.isOpen || !a) {
                    switch (o) {
                        case "scrollTop":
                            c = "top";
                            break;
                        case "scrollRight":
                            d = a ? "150%" : "50%",
                                f = a ? "50%" : "150%";
                            break;
                        case "scrollBottom":
                            c = "top",
                                d = a ? "150%" : "50%",
                                f = a ? "50%" : "150%";
                            break;
                        case "scrollHorizontal":
                            d = a ? "150%" : "50%",
                                f = a ? "50%" : "-50%";
                            break;
                        case "scrollVertical":
                            c = "top",
                                d = a ? "-50%" : "50%",
                                f = a ? "50%" : "150%"
                    }
                    if ("prev" === e.cache.action)
                        switch (o) {
                            case "scrollHorizontal":
                                d = a ? "-50%" : "50%",
                                    f = a ? "50%" : "150%";
                                break;
                            case "scrollVertical":
                                d = a ? "150%" : "50%",
                                    f = a ? "50%" : "-50%"
                        }
                    r.opacity = l,
                        r[c] = d,
                        u.opacity = h,
                        u[c] = f,
                        t.css(r).show(),
                        e.support.transitions ? (u[e.support.transition + "transition"] = s + "ms ease",
                            setTimeout(function () {
                                t.css(u),
                                    setTimeout(function () {
                                        t.css(e.support.transition + "transition", ""),
                                            !n || !e.isOpen && a || n()
                                    }, s)
                            }, 15)) : (t.stop(),
                                t.animate(u, s, n))
                }
            },
            zoom: function (t, i, s, n) {
                var a = "in" === i
                    , o = {}
                    , c = t.css("opacity")
                    , r = a ? "scale(0.75)" : "scale(1)"
                    , l = {}
                    , d = a ? 1 : 0
                    , u = a ? "scale(1)" : "scale(0.75)";
                (e.isOpen || !a) && (o.opacity = c,
                    o[e.support.transition + "transform"] = r,
                    l.opacity = d,
                    t.css(o).show(),
                    e.support.transitions ? (l[e.support.transition + "transform"] = u,
                        l[e.support.transition + "transition"] = s + "ms ease",
                        setTimeout(function () {
                            t.css(l),
                                setTimeout(function () {
                                    t.css(e.support.transition + "transform", ""),
                                        t.css(e.support.transition + "transition", ""),
                                        !n || !e.isOpen && a || n()
                                }, s)
                        }, 15)) : (t.stop(),
                            t.animate(l, s, n)))
            }
        },
        _callHooks: function (i) {
            "object" == typeof i && t.each(i, function (t, i) {
                "function" == typeof i && i.call(e.origin)
            })
        },
        _cacheObjectData: function (i) {
            t.data(i, "cache", {
                id: i.attr("id"),
                content: i.html()
            }),
                e.cache.originalObject = i
        },
        _restoreObject: function () {
            var i = t('[id^="' + e.settings.idPrefix + 'temp-"]');
            i.attr("id", t.data(e.cache.originalObject, "cache").id),
                i.html(t.data(e.cache.originalObject, "cache").content)
        },
        resize: function () {
            e.isOpen && (e.isSlideshowEnabled() && e._stopTimeout(),
                e.dimensions = e.getViewportDimensions(),
                e._calculateDimensions(e.cache.object),
                e._callHooks(e.settings.onResize))
        },
        _watchResizeInteraction: function () {
            t(window).resize(e.resize)
        },
        _unwatchResizeInteraction: function () {
            t(window).off("resize", e.resize)
        },
        _switchToFullScreenMode: function () {
            e.settings.shrinkFactor = 1,
                e.settings.overlayOpacity = 1,
                t("html").addClass(e.settings.classPrefix + "fullScreenMode")
        },
        _open: function () {
            switch (e.isOpen = !0,
            e.support.transitions = e.settings.cssTransitions ? e.isTransitionSupported() : !1,
            e.support.mobileDevice = e.isMobileDevice(),
            e.support.mobileDevice && (t("html").addClass(e.settings.classPrefix + "isMobileDevice"),
                e.settings.fullScreenModeForMobile && e._switchToFullScreenMode()),
            e.settings.transitionIn || (e.settings.transitionIn = e.settings.transition),
            e.settings.transitionOut || (e.settings.transitionOut = e.settings.transition),
            e.transition["in"]()) {
                case "fade":
                case "fadeInline":
                case "elastic":
                case "scrollTop":
                case "scrollRight":
                case "scrollBottom":
                case "scrollLeft":
                case "scrollVertical":
                case "scrollHorizontal":
                    e.objects["case"].is(":hidden") && (e.objects.close.css("opacity", 0),
                        e.objects.overlay.css("opacity", 0),
                        e.objects["case"].css("opacity", 0),
                        e.objects.contentInner.css("opacity", 0)),
                        e.transition.fade(e.objects.overlay, "in", e.settings.speedIn, e.settings.overlayOpacity, function () {
                            e.transition.fade(e.objects.close, "in", e.settings.speedIn),
                                e._handleEvents(),
                                e._processContent()
                        });
                    break;
                default:
                    e.transition.fade(e.objects.overlay, "in", 0, e.settings.overlayOpacity, function () {
                        e.transition.fade(e.objects.close, "in", 0),
                            e._handleEvents(),
                            e._processContent()
                    })
            }
            e.objects.document.addClass(e.settings.classPrefix + "open"),
                e.objects["case"].attr("aria-hidden", "false")
        },
        close: function () {
            switch (e.isOpen = !1,
            e.isSlideshowEnabled() && (e._stopTimeout(),
                e.isSlideshowStarted = !1,
                e.objects.nav.removeClass(e.settings.classPrefix + "paused")),
            e.objects.loading.hide(),
            e._unbindEvents(),
            e._unwatchResizeInteraction(),
            t("html").removeClass(e.settings.classPrefix + "open"),
            e.objects["case"].attr("aria-hidden", "true"),
            e.objects.nav.children().hide(),
            e.objects.close.hide(),
            e._callHooks(e.settings.onClose),
            e.transition.fade(e.objects.info, "out", 0),
            e.settings.transitionClose || e.settings.transitionOut) {
                case "fade":
                case "fadeInline":
                case "scrollTop":
                case "scrollRight":
                case "scrollBottom":
                case "scrollLeft":
                case "scrollHorizontal":
                case "scrollVertical":
                    e.transition.fade(e.objects["case"], "out", e.settings.speedOut, 0, function () {
                        e.transition.fade(e.objects.overlay, "out", e.settings.speedOut, 0, function () {
                            e.cleanup()
                        })
                    });
                    break;
                case "elastic":
                    e.transition.zoom(e.objects["case"], "out", e.settings.speedOut, function () {
                        e.transition.fade(e.objects.overlay, "out", e.settings.speedOut, 0, function () {
                            e.cleanup()
                        })
                    });
                    break;
                default:
                    e.cleanup()
            }
        },
        _unbindEvents: function () {
            e.objects.overlay.unbind("click"),
                t(document).unbind("keyup.lightcase"),
                e.objects["case"].unbind("swipeleft").unbind("swiperight"),
                e.objects.prev.unbind("click"),
                e.objects.next.unbind("click"),
                e.objects.play.unbind("click"),
                e.objects.pause.unbind("click"),
                e.objects.close.unbind("click")
        },
        _cleanupDimensions: function () {
            var t = e.objects.contentInner.css("opacity");
            e.objects["case"].css({
                width: "",
                height: "",
                top: "",
                left: "",
                "margin-top": "",
                "margin-left": ""
            }),
                e.objects.contentInner.removeAttr("style").css("opacity", t),
                e.objects.contentInner.children().removeAttr("style")
        },
        cleanup: function () {
            e._cleanupDimensions(),
                e.objects.loading.hide(),
                e.objects.overlay.hide(),
                e.objects["case"].hide(),
                e.objects.prev.hide(),
                e.objects.next.hide(),
                e.objects.play.hide(),
                e.objects.pause.hide(),
                e.objects.document.removeAttr(e._prefixAttributeName("type")),
                e.objects.nav.removeAttr(e._prefixAttributeName("ispartofsequence")),
                e.objects.contentInner.empty().hide(),
                e.objects.info.children().empty(),
                e.cache.originalObject && e._restoreObject(),
                e._callHooks(e.settings.onCleanup),
                e.cache = {}
        },
        _matchMedia: function () {
            return window.matchMedia || window.msMatchMedia
        },
        _devicePixelRatio: function () {
            return window.devicePixelRatio || 1
        },
        _isPublicMethod: function (t) {
            return "function" == typeof e[t] && "_" !== t.charAt(0)
        },
        _export: function () {
            window.lightcase = {},
                t.each(e, function (t) {
                    e._isPublicMethod(t) && (lightcase[t] = e[t])
                })
        }
    };
    e._export(),
        t.fn.lightcase = function (i) {
            return e._isPublicMethod(i) ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.lightcase") : e.init.apply(this, arguments)
        }
}(jQuery);
