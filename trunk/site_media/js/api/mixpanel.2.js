(function () {
    var j = !0,
        m = null,
        s = !1;

    function y() {
        return function () {}
    }(function (r) {
        function k() {}
        function d() {}
        function C(a, b, e) {
            var l, f = "mixpanel" === e ? r : r[e];
            if (f && !c.isArray(f)) i.error("You have already initialized " + e);
            else return l = new d, l.q(a, b, e), l.people = new k, l.people.q(l), z = z || l.b("debug"), c.c(f) || (l.p(f), l.p.call(l.people, f.people)), l
        }
        function h(a) {
            this.props = {};
            this.P = s;
            this.name = a.cookie_name ? "mp_" + a.cookie_name : "mp_" + a.token + "_mixpanel";
            this.load();
            this.ea(a);
            this.La(a);
            this.save()
        }
        function D() {
            this.Z = "submit"
        }
        function A() {
            this.Z = "click"
        }
        function u() {}

        function v() {
            if (!v.ra) I = v.ra = j, J = s, c.a(w, function (a) {
                a.ka()
            })
        }
        var z = s,
            I = s,
            c = {},
            H = Array.prototype,
            B = Object.prototype,
            K = H.slice,
            E = B.toString,
            F = B.hasOwnProperty,
            t = window.console,
            L = window.navigator,
            o = window.document,
            p = L.userAgent,
            N = r.__SV || 0,
            G = window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
            J = !G && -1 == p.indexOf("MSIE"),
            O = {
                api_host: ("https:" == o.location.protocol ? "https://" : "http://") + "api.mixpanel.com",
                cross_subdomain_cookie: j,
                cookie_name: "",
                loaded: y(),
                store_google: j,
                save_referrer: j,
                test: s,
                img: s,
                track_pageview: j,
                debug: s,
                track_links_timeout: 300,
                cookie_expiration: 365,
                upgrade: s,
                disable_cookie: s,
                ip: j
            };
        (function () {
            var a = H.forEach,
                b = H.indexOf,
                e = Array.isArray,
                l = {},
                f = c.a = function (b, e, c) {
                    if (b != m) if (a && b.forEach === a) b.forEach(e, c);
                    else if (b.length === +b.length) for (var f = 0, d = b.length; f < d && !(f in b && e.call(c, b[f], f, b) === l); f++);
                    else for (f in b) if (F.call(b, f) && e.call(c, b[f], f, b) === l) break
                };
            c.extend = function (a) {
                f(K.call(arguments, 1), function (b) {
                    for (var e in b) void 0 !== b[e] && (a[e] = b[e])
                });
                return a
            };
            c.isArray = e ||
            function (a) {
                return "[object Array]" === E.call(a)
            };
            c.Aa = function (a) {
                try {
                    return /^\s*\bfunction\b/.test(a)
                } catch (b) {
                    return s
                }
            };
            c.xa = function (a) {
                return !(!a || !F.call(a, "callee"))
            };
            c.o = function (a) {
                return !a ? [] : a.o ? a.o() : c.isArray(a) || c.xa(a) ? K.call(a) : c.Na(a)
            };
            c.Na = function (a) {
                var b = [];
                if (a == m) return b;
                f(a, function (a) {
                    b[b.length] = a
                });
                return b
            };
            c.Oa = function (a) {
                return a
            };
            c.wa = function (a, e) {
                var c = s;
                if (a == m) return c;
                if (b && a.indexOf === b) return -1 != a.indexOf(e);
                f(a, function (a) {
                    if (c || (c = a === e)) return l
                });
                return c
            };
            c.e = function (a, b) {
                return -1 !== a.indexOf(b)
            }
        })();
        c.V = function (a, b) {
            a.prototype = new b;
            a.Ha = b.prototype
        };
        c.f = function (a) {
            return a === Object(a) && !c.isArray(a)
        };
        c.D = function (a) {
            if (c.f(a)) {
                for (var b in a) if (F.call(a, b)) return s;
                return j
            }
            return s
        };
        c.c = function (a) {
            return void 0 === a
        };
        c.Pa = function (a) {
            return "[object String]" == E.call(a)
        };
        c.za = function (a) {
            return "[object Date]" == E.call(a)
        };
        c.S = function (a) {
            c.a(a, function (b, e) {
                c.za(b) ? a[e] = c.sa(b) : c.f(b) && (a[e] = c.S(b))
            });
            return a
        };
        c.sa = function (a) {
            function b(a) {
                return 10 > a ? "0" + a : a
            }
            return a.getUTCFullYear() + "-" + b(a.getUTCMonth() + 1) + "-" + b(a.getUTCDate()) + "T" + b(a.getUTCHours()) + ":" + b(a.getUTCMinutes()) + ":" + b(a.getUTCSeconds())
        };
        c.truncate = function (a, b) {
            var e;
            "string" === typeof a ? e = a.slice(0, b) : c.isArray(a) ? (e = [], c.a(a, function (a) {
                e.push(c.truncate(a, b))
            })) : c.f(a) ? (e = {}, c.a(a, function (a, f) {
                e[f] = c.truncate(a, b)
            })) : e = a;
            return e
        };
        c.m = function (a) {
            function b(a, c) {
                var g = "",
                    q = 0,
                    x = q = "",
                    x = 0,
                    d = g,
                    h = [],
                    n = c[a];
                n && "object" === typeof n && "function" === typeof n.toJSON && (n = n.toJSON(a));
                switch (typeof n) {
                case "string":
                    return e(n);
                case "number":
                    return isFinite(n) ? "" + n : "null";
                case "boolean":
                case "null":
                    return "" + n;
                case "object":
                    if (!n) return "null";
                    g += "    ";
                    h = [];
                    if ("[object Array]" === E.apply(n)) {
                        x = n.length;
                        for (q = 0; q < x; q += 1) h[q] = b(q, n) || "null";
                        return x = 0 === h.length ? "[]" : g ? "[\n" + g + h.join(",\n" + g) + "\n" + d + "]" : "[" + h.join(",") + "]"
                    }
                    for (q in n) F.call(n, q) && (x = b(q, n)) && h.push(e(q) + (g ? ": " : ":") + x);
                    return x = 0 === h.length ? "{}" : g ? "{" + h.join(",") + "" + d + "}" : "{" + h.join(",") + "}"
                }
            }
            function e(a) {
                var b = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    e = {
                        "\u0008": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\u000c": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    };
                b.lastIndex = 0;
                return b.test(a) ? '"' + a.replace(b, function (a) {
                    var b = e[a];
                    return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + a + '"'
            }
            return b("", {
                "": a
            })
        };
        c.N = function (a) {
            var b, e, l, f, g = 0,
                q = 0,
                d = "",
                d = [];
            if (!a) return a;
            a = c.Ma(a);
            do b = a.charCodeAt(g++), e = a.charCodeAt(g++), l = a.charCodeAt(g++), f = b << 16 | e << 8 | l, b = f >> 18 & 63, e = f >> 12 & 63, l = f >> 6 & 63, f &= 63, d[q++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f);
            while (g < a.length);
            d = d.join("");
            switch (a.length % 3) {
            case 1:
                d = d.slice(0, -2) + "==";
                break;
            case 2:
                d = d.slice(0, -1) + "="
            }
            return d
        };
        c.Ma = function (a) {
            var a = (a + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n"),
                b = "",
                e, c, f = 0,
                g;
            e = c = 0;
            f = a.length;
            for (g = 0; g < f; g++) {
                var q = a.charCodeAt(g),
                    d = m;
                128 > q ? c++ : d = 127 < q && 2048 > q ? String.fromCharCode(q >> 6 | 192, q & 63 | 128) : String.fromCharCode(q >> 12 | 224, q >> 6 & 63 | 128, q & 63 | 128);
                d !== m && (c > e && (b += a.substring(e, c)), b += d, e = c = g + 1)
            }
            c > e && (b += a.substring(e, a.length));
            return b
        };
        c.ia = function () {
            function a() {
                function a(b, e) {
                    var c, f = 0;
                    for (c = 0; c < e.length; c++) f |= g[c] << 8 * c;
                    return b ^ f
                }
                var b, c, g = [],
                    d = 0;
                for (b = 0; b < p.length; b++) c = p.charCodeAt(b), g.unshift(c & 255), 4 <= g.length && (d = a(d, g), g = []);
                0 < g.length && (d = a(d, g));
                return d.toString(16)
            }
            function b() {
                for (var a = 1 * new Date, b = 0; a == 1 * new Date;) b++;
                return a.toString(16) + b.toString(16)
            }
            return function () {
                var e = (screen.height * screen.width).toString(16);
                return b() + "-" + Math.random().toString(16).replace(".", "") + "-" + a() + "-" + e + "-" + b()
            }
        }();
        c.ya = function () {
            return /(google web preview|baiduspider|yandexbot)/i.test(p) ? j : s
        };
        c.ha = function (a) {
            var b, e, l, f = [];
            "undefined" === typeof b && (b = "&");
            c.a(a, function (a, b) {
                e = encodeURIComponent(a.toString());
                l = encodeURIComponent(b);
                f[f.length] = l + "=" + e
            });
            return f.join(b)
        };
        c.T = function (a, b) {
            var b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"),
                e = RegExp("[\\?&]" + b + "=([^&#]*)").exec(a);
            return e === m || e && "string" !== typeof e[1] && e[1].length ? "" : decodeURIComponent(e[1]).replace(/\+/g, " ")
        };
        c.cookie = {
            get: function (a) {
                for (var a = a + "=", b = o.cookie.split(";"), e = 0; e < b.length; e++) {
                    for (var c = b[e];
                    " " == c.charAt(0);) c = c.substring(1, c.length);
                    if (0 == c.indexOf(a)) return decodeURIComponent(c.substring(a.length, c.length))
                }
                return m
            },
            eval: function (a) {
                var b;
                try {
                    b = eval("(" + c.cookie.get(a) + ")") || {}
                } catch (e) {}
                return b
            },
            set: function (a, b, e, c) {
                var l;
                var f = "",
                    g = "";
                c && (l = (f = (f = o.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i)) ? f[0] : "") ? "; domain=." + f : "", f = l);
                e && (g = new Date, g.setTime(g.getTime() + 864E5 * e), g = "; expires=" + g.toGMTString());
                o.cookie = a + "=" + encodeURIComponent(b) + g + "; path=/" + f
            },
            remove: function (a, b) {
                c.cookie.set(a, "", -1, b)
            }
        };
        c.aa = function () {
            function a(a, l, f) {
                return function (g) {
                    if (g = g || b(window.event)) {
                        var d = j,
                            h;
                        c.Aa(f) && (h = f(g));
                        g = l.call(a, g);
                        if (s === h || s === g) d = s;
                        return d
                    }
                }
            }
            function b(a) {
                if (a) a.preventDefault = b.preventDefault, a.stopPropagation = b.stopPropagation;
                return a
            }
            b.preventDefault = function () {
                this.returnValue = s
            };
            b.stopPropagation = function () {
                this.cancelBubble = j
            };
            return function (b, c, f, g) {
                b ? b.addEventListener && !g ? b.addEventListener(c, f, s) : (c = "on" + c, b[c] = a(b, f, b[c])) : i.error("No valid element provided to register_event")
            }
        }();
        c.qa = function () {
            return function (a) {
                if (!o.getElementsByTagName) return [];
                for (var a = a.split(" "), b, c = Array(o), l = 0; l < a.length; l++) if (b = a[l].replace(/^\s+/, "").replace(/\s+$/, ""), -1 < b.indexOf("#")) {
                    b = b.split("#");
                    var f = b[0],
                        c = o.getElementById(b[1]);
                    if (!c || f && c.nodeName.toLowerCase() != f) return [];
                    c = Array(c)
                } else if (-1 < b.indexOf(".")) {
                    b = b.split(".");
                    var f = b[0],
                        g = b[1];
                    f || (f = "*");
                    b = [];
                    for (var d = 0, h = 0; h < c.length; h++) {
                        var i;
                        i = "*" == f ? c[h].all ? c[h].all : c[h].getElementsByTagName("*") : c[h].getElementsByTagName(f);
                        for (var k = 0; k < i.length; k++) b[d++] = i[k]
                    }
                    c = [];
                    for (d = f = 0; d < b.length; d++) b[d].className && b[d].className.match(RegExp("\\b" + g + "\\b")) && (c[f++] = b[d])
                } else if (b.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)) {
                    var f = RegExp.$1,
                        n = RegExp.$2,
                        g = RegExp.$3,
                        p = RegExp.$4;
                    f || (f = "*");
                    b = [];
                    for (h = d = 0; h < c.length; h++) {
                        i = "*" == f ? c[h].all ? c[h].all : c[h].getElementsByTagName("*") : c[h].getElementsByTagName(f);
                        for (k = 0; k < i.length; k++) b[d++] = i[k]
                    }
                    c = [];
                    f = 0;
                    switch (g) {
                    case "=":
                        g = function (a) {
                            return a.getAttribute(n) == p
                        };
                        break;
                    case "~":
                        g = function (a) {
                            return a.getAttribute(n).match(RegExp("\\b" + p + "\\b"))
                        };
                        break;
                    case "|":
                        g = function (a) {
                            return a.getAttribute(n).match(RegExp("^" + p + "-?"))
                        };
                        break;
                    case "^":
                        g = function (a) {
                            return 0 == a.getAttribute(n).indexOf(p)
                        };
                        break;
                    case "$":
                        g = function (a) {
                            return a.getAttribute(n).lastIndexOf(p) == a.getAttribute(n).length - p.length
                        };
                        break;
                    case "*":
                        g = function (a) {
                            return -1 < a.getAttribute(n).indexOf(p)
                        };
                        break;
                    default:
                        g = function (a) {
                            return a.getAttribute(n)
                        }
                    }
                    c = [];
                    for (d = f = 0; d < b.length; d++) g(b[d]) && (c[f++] = b[d])
                } else {
                    f = b;
                    b = [];
                    for (h = d = 0; h < c.length; h++) {
                        i = c[h].getElementsByTagName(f);
                        for (k = 0; k < i.length; k++) b[d++] = i[k]
                    }
                    c = b
                }
                return c
            }
        }();
        c.info = {
            oa: function () {
                var a = "",
                    b = {};
                c.a("utm_source utm_medium utm_campaign utm_content utm_term".split(" "), function (e) {
                    a = c.T(o.URL, e);
                    a.length && (b[e] = a)
                });
                return b
            },
            Da: function (a) {
                return 0 === a.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === a.search("https?://(.*)bing.com") ? "bing" : 0 === a.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === a.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : m
            },
            Ea: function (a) {
                var b = c.info.Da(a),
                    e = {};
                if (b !== m) e.$search_engine = b, a = c.T(a, "yahoo" != b ? "q" : "p"), a.length && (e.mp_keyword = a);
                return e
            },
            O: function () {
                var a = L.vendor || "";
                return window.opera ? c.e(p, "Mini") ? "Opera Mini" : "Opera" : c.e(p, "Chrome") ? "Chrome" : c.e(a, "Apple") ? c.e(p, "Mobile") ? "iOS Mobile" : "Safari" : c.e(p, "Android") ? "Android Mobile" : c.e(a, "KDE") ? "Konqueror" : c.e(p, "Firefox") ? "Firefox" : c.e(p, "MSIE") ? "Internet Explorer" : c.e(p, "Gecko") ? "Mozilla" : ""
            },
            Y: function () {
                return /Windows/i.test(p) ? "Windows" : /iPhone/.test(p) ? "iPhone" : /Android/.test(p) ? "Android" : /Mac/i.test(p) ? "Mac OS X" : /X11/.test(p) || /Linux/.test(p) ? "Linux" : ""
            },
            $: function (a) {
                a = a.split("/");
                return 3 <= a.length ? a[2] : ""
            },
            k: function () {
                return {
                    $os: c.info.Y(),
                    $browser: c.info.O(),
                    $referrer: o.referrer,
                    $referring_domain: c.info.$(o.referrer),
                    mp_lib: "web"
                }
            },
            Ca: function (a) {
                a = {
                    mp_page: a,
                    mp_referrer: o.referrer,
                    mp_browser: c.info.O(),
                    mp_platform: c.info.Y()
                };
                c.a(a, y());
                return a
            }
        };
        var i = {
            log: function () {
                if (z && !c.c(t) && t) try {
                    t.log.apply(t, arguments)
                } catch (a) {
                    t.log("<< MPLib >>"), c.a(arguments, function (a) {
                        t.log(a)
                    }), t.log("<</ MPLib >>")
                }
            },
            error: function () {
                if (z && !c.c(t) && t) {
                    var a = ["Mixpanel error:"].concat(c.o(arguments));
                    try {
                        t.error.apply(t, a)
                    } catch (b) {
                        c.a(a, function (a) {
                            t.error(a)
                        })
                    }
                }
            }
        };
        u.prototype.n = y();
        u.prototype.A = y();
        u.prototype.u = y();
        u.prototype.C = function (a) {
            this.W = a;
            return this
        };
        u.prototype.l = function (a, b, e, d) {
            var f = this,
                g = c.qa(a);
            if (0 == g.length) i.error("The DOM query (" + a + ") returned 0 elements");
            else return c.a(g, function (a) {
                c.aa(a, this.Z, function (a) {
                    var c = {},
                        g = f.n(e, this),
                        h = f.W.b("track_links_timeout");
                    f.A(a, this, c);
                    window.setTimeout(f.ca(d, g, c, j), h);
                    f.W.l(b, g, f.ca(d, g, c))
                })
            }, this), j
        };
        u.prototype.ca = function (a, b, c, d) {
            var d = d || s,
                f = this;
            return function () {
                if (!c.na) c.na = j, a && a(d, b) === s || f.u(b, c, d)
            }
        };
        u.prototype.n = function (a, b) {
            return "function" === typeof a ? a(b) : c.extend({}, a)
        };
        c.V(A, u);
        A.prototype.n = function (a, b) {
            var c = A.Ha.n.apply(this, arguments);
            if (b.href) c.url = b.href;
            return c
        };
        A.prototype.A = function (a, b, c) {
            c.X = 2 === a.which || a.metaKey || "_blank" === b.target;
            c.href = b.href;
            c.X || a.preventDefault()
        };
        A.prototype.u = function (a, b) {
            b.X || setTimeout(function () {
                window.location = b.href
            }, 0)
        };
        c.V(D, u);
        D.prototype.A = function (a, b, c) {
            c.element = b;
            a.preventDefault()
        };
        D.prototype.u = function (a, b) {
            setTimeout(function () {
                b.element.submit()
            }, 0)
        };
        h.prototype.k = function () {
            var a = {};
            c.a(this.props, function (b, c) {
                "__mps" !== c && "__mpa" !== c && (a[c] = b)
            });
            return a
        };
        h.prototype.load = function () {
            if (!this.disabled) {
                var a = c.cookie.eval(this.name);
                a && (this.props = c.extend({}, a))
            }
        };
        h.prototype.La = function (a) {
            var b = a.upgrade,
                e;
            if (b) e = "mp_super_properties", "string" === typeof b && (e = b), b = c.cookie.eval(e), c.cookie.remove(e), c.cookie.remove(e, j), b && (this.props = c.extend(this.props, b.all, b.events));
            if (!a.cookie_name && "mixpanel" !== a.name && (e = "mp_" + a.token + "_" + a.name, b = c.cookie.eval(e))) c.cookie.remove(e), c.cookie.remove(e, j), this.h(b)
        };
        h.prototype.save = function () {
            this.disabled || c.cookie.set(this.name, c.m(this.props), this.B, this.v)
        };
        h.prototype.remove = function () {
            c.cookie.remove(this.name, s);
            c.cookie.remove(this.name, j)
        };
        h.prototype.clear = function () {
            this.remove();
            this.props = {}
        };
        h.prototype.h = function (a, b, e) {
            return c.f(a) ? ("undefined" === typeof b && (b = "None"), this.B = "undefined" === typeof e ? this.Q : e, c.a(a, function (a, c) {
                if (!this.props[c] || this.props[c] === b) this.props[c] = a
            }, this), this.save(), j) : s
        };
        h.prototype.i = function (a, b) {
            return c.f(a) ? (this.B = "undefined" === typeof b ? this.Q : b, c.extend(this.props, a), this.save(), j) : s
        };
        h.prototype.G = function (a) {
            a in this.props && (delete this.props[a], this.save())
        };
        h.prototype.Ka = function () {
            if (!this.P) this.h(c.info.oa()), this.P = j
        };
        h.prototype.ga = function (a) {
            this.i(c.info.Ea(a))
        };
        h.prototype.fa = function (a) {
            this.h({
                $initial_referrer: a || "$direct",
                $initial_referring_domain: c.info.$(a) || "$direct"
            }, "")
        };
        h.prototype.ea = function (a) {
            this.Q = this.B = a.cookie_expiration;
            this.Ga(a.disable_cookie);
            this.Fa(a.cross_subdomain_cookie)
        };
        h.prototype.Ga = function (a) {
            (this.disabled = a) && this.remove()
        };
        h.prototype.Fa = function (a) {
            if (a !== this.v) this.v = a, this.remove(), this.save()
        };
        h.prototype.ta = function () {
            return this.v
        };
        h.prototype.H = function (a, b) {
            var e = this.K(a),
                d = b[a],
                f = this.j("$set"),
                g = this.j("$add");
            c.c(f) && (f = this.props.__mps = {});
            c.c(g) && (g = this.props.__mpa = {});
            "__mps" === e ? (c.extend(f, d), this.s("$add", d)) : "__mpa" === e && c.a(d, function (a, b) {
                b in f ? f[b] += a : (b in g || (g[b] = 0), g[b] += a)
            }, this);
            i.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):");
            i.log(b);
            this.save()
        };
        h.prototype.s = function (a, b) {
            var e = this.j(a);
            c.c(e) || c.a(b, function (a, b) {
                delete e[b]
            }, this);
            this.save()
        };
        h.prototype.K = function (a) {
            if ("$set" === a) return "__mps";
            if ("$add" === a) return "__mpa";
            i.error("Invalid queue:", a)
        };
        h.prototype.j = function (a) {
            return this.props[this.K(a)]
        };
        d.prototype.C = function (a, b, c) {
            if ("undefined" === typeof c) i.error("You must name your new library: init(token, config, name)");
            else if ("mixpanel" === c) i.error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
            else return a = C(a, b, c), r[c] = a, a.r(), a
        };
        d.prototype.q = function (a, b, e) {
            this.config = {};
            this.ba(c.extend({}, O, b, {
                name: e,
                token: a,
                callback_fn: ("mixpanel" === e ? e : "mixpanel." + e) + "._jsc"
            }));
            this._jsc = y();
            this.z = [];
            this.F = [];
            this.w = [];
            this.R = s;
            this.cookie = new h(this.config)
        };
        d.prototype.r = function () {
            this.b("loaded")(this);
            this.b("track_pageview") && this.da()
        };
        d.prototype.ka = function () {
            c.a(this.z, function (a) {
                this.t.apply(this, a)
            }, this);
            c.a(this.F, function (a) {
                this.g.apply(this, a)
            }, this);
            delete this.z;
            delete this.F
        };
        d.prototype.t = function (a, b) {
            if (this.b("img")) return i.error("You can't use DOM tracking functions with img = true."), s;
            if (!I) return this.z.push([a, b]), s;
            var c = (new a).C(this);
            return c.l.apply(c, b)
        };
        d.prototype.M = function (a, b) {
            if (c.c(a)) return m;
            if (G) return function (c) {
                a(c, b)
            };
            var e = this._jsc,
                d = "" + Math.floor(1E8 * Math.random()),
                f = this.b("callback_fn") + '["' + d + '"]';
            e[d] = function (c) {
                delete e[d];
                a(c, b)
            };
            return f
        };
        d.prototype.g = function (a, b, e) {
            if (J) this.F.push(arguments);
            else if (this.b("test") && (b.test = 1), this.b("img") && (b.img = 1), e && !G && (b.callback = e), b.ip = this.b("ip") ? 1 : 0, b._ = (new Date).getTime().toString(), a += "?" + c.ha(b), "img" in b) {
                var d = o.createElement("img");
                d.src = a;
                o.body.appendChild(d)
            } else if (G) {
                var f = new XMLHttpRequest;
                f.open("GET", a, j);
                f.withCredentials = j;
                f.onreadystatechange = function () {
                    4 === f.readyState && (200 === f.status ? e && e(Number(f.responseText)) : (i.error("Bad HTTP status", f.status + " " + f.statusText), e && e(0)))
                };
                f.send(m)
            } else {
                d = o.createElement("script");
                d.type = "text/javascript";
                d.async = j;
                d.defer = j;
                d.src = a;
                var g = o.getElementsByTagName("script")[0];
                g.parentNode.insertBefore(d, g)
            }
        };
        d.prototype.p = function (a) {
            var b, e = [];
            c.a(a, function (a) {
                a && (b = a[0], "function" === typeof a ? a.call(this) : c.isArray(a) && -1 != b.indexOf("track") && "function" === typeof this[b] ? e.push(a) : this[b].apply(this, a.slice(1)))
            }, this);
            c.a(e, function (a) {
                this[a[0]].apply(this, a.slice(1))
            }, this)
        };
        d.prototype.push = function (a) {
            this.p([a])
        };
        d.prototype.disable = function (a) {
            "undefined" === typeof a ? this.R = j : this.w = this.w.concat(a)
        };
        d.prototype.l = function (a, b, e) {
            if ("undefined" === typeof a) i.error("No event name provided to mixpanel.track");
            else if (c.ya() || this.R || c.wa(this.w, a))"undefined" !== typeof e && e(0);
            else return b = b || {}, b.token = b.Qa || this.b("token"), this.h({
                distinct_id: c.ia()
            }, ""), this.cookie.ga(o.referrer), this.b("store_google") && this.cookie.Ka(), this.b("save_referrer") && this.cookie.fa(o.referrer), b = c.extend({}, c.info.k(), this.cookie.k(), b), a = c.truncate({
                event: a,
                properties: b
            }, 255), b = c.m(a), b = c.N(b), i.log("MIXPANEL REQUEST:"), i.log(a), this.g(this.b("api_host") + "/track/", {
                data: b
            }, this.M(e, a)), a
        };
        d.prototype.da = function (a) {
            if ("undefined" === typeof a) a = o.location.href;
            this.l("mp_page_view", c.info.Ca(a))
        };
        d.prototype.Ja = function () {
            return this.t.call(this, A, arguments)
        };
        d.prototype.Ia = function () {
            return this.t.call(this, D, arguments)
        };
        d.prototype.i = function (a, b) {
            this.cookie.i(a, b)
        };
        d.prototype.h = function (a, b, c) {
            this.cookie.h(a, b, c)
        };
        d.prototype.G = function (a) {
            this.cookie.G(a)
        };
        d.prototype.va = function (a, b, c) {
            this.ja = j;
            this.cookie.i({
                distinct_id: a
            });
            this.people.ma(b, c)
        };
        d.prototype.Ba = function (a) {
            this.cookie.i({
                mp_name_tag: a
            })
        };
        d.prototype.ba = function (a) {
            c.f(a) && (c.extend(this.config, a), this.cookie && this.cookie.ea(this.config), z = z || this.b("debug"))
        };
        d.prototype.b = function (a) {
            return this.config[a]
        };
        d.prototype.ua = function (a) {
            return this.cookie.props[a]
        };
        k.prototype.q = function (a) {
            this.d = a
        };
        k.prototype.set = function (a, b, e) {
            var d = {},
                f = {};
            c.f(a) ? (c.a(a, function (a, b) {
                "$distinct_id" == b || "$token" == b || (f[b] = a)
            }), e = b) : f[a] = b;
            d.$set = f;
            return this.g(d, e)
        };
        k.prototype.U = function (a, b, e) {
            var d = {},
                f = {};
            c.f(a) ? (c.a(a, function (a, b) {
                "$distinct_id" == b || "$token" == b || (isNaN(parseFloat(a)) ? i.error("Invalid increment value passed to mixpanel.people.increment - must be a number") : f[b] = a)
            }), e = b) : (c.c(b) && (b = 1), f[a] = b);
            d.$add = f;
            return this.g(d, e)
        };
        k.prototype.pa = function () {
            if (this.L()) return this.g({
                $delete: this.J()
            });
            i.error("mixpanel.people.delete_user() requires you to call identify() first")
        };
        k.prototype.g = function (a, b) {
            if (1.1 > N) i.error("'mixpanel.people' object not initialized. Please ensure you're using the latest version of the Mixpanel code snippet.");
            else {
                a.$token = this.I("token");
                a.$distinct_id = this.J();
                var e = c.S(a),
                    d = c.truncate(e, 255),
                    e = c.m(e),
                    e = c.N(e);
                if (!this.L()) return this.la(a), c.c(b) || b(-1), d;
                i.log("MIXPANEL PEOPLE REQUEST:");
                i.log(d);
                this.d.g(this.I("api_host") + "/engage/", {
                    data: e
                }, this.d.M(b, d));
                return d
            }
        };
        k.prototype.I = function (a) {
            return this.d.b(a)
        };
        k.prototype.L = function () {
            return this.d.ja === j
        };
        k.prototype.J = function () {
            return this.d.cookie.k().distinct_id
        };
        k.prototype.la = function (a) {
            "$set" in a ? this.d.cookie.H("$set", a) : "$add" in a ? this.d.cookie.H("$add", a) : i.error("Invalid call to _enqueue():", a)
        };
        k.prototype.ma = function (a, b) {
            var e = this,
                d = this.d.cookie.j("$set"),
                f = this.d.cookie.j("$add");
            !c.D(d) && !c.c(d) && this.set(d, function (b, f) {
                1 == b && e.d.cookie.s("$set", d);
                c.c(a) || a(b, f)
            });
            !c.D(f) && !c.c(f) && this.U(f, function (a, d) {
                1 == a && e.d.cookie.s("$add", f);
                c.c(b) || b(a, d)
            })
        };
        c.toArray = c.o;
        c.isObject = c.f;
        c.JSONEncode = c.m;
        c.isEmptyObject = c.D;
        d.prototype.init = d.prototype.C;
        d.prototype.disable = d.prototype.disable;
        d.prototype.track = d.prototype.l;
        d.prototype.track_links = d.prototype.Ja;
        d.prototype.track_forms = d.prototype.Ia;
        d.prototype.track_pageview = d.prototype.da;
        d.prototype.register = d.prototype.i;
        d.prototype.register_once = d.prototype.h;
        d.prototype.unregister = d.prototype.G;
        d.prototype.identify = d.prototype.va;
        d.prototype.name_tag = d.prototype.Ba;
        d.prototype.set_config = d.prototype.ba;
        d.prototype.get_config = d.prototype.b;
        d.prototype.get_property = d.prototype.ua;
        h.prototype.properties = h.prototype.k;
        h.prototype.update_search_keyword = h.prototype.ga;
        h.prototype.update_referrer_info = h.prototype.fa;
        h.prototype.get_cross_subdomain = h.prototype.ta;
        h.prototype.clear = h.prototype.clear;
        k.prototype.set = k.prototype.set;
        k.prototype.increment = k.prototype.U;
        k.prototype.delete_user = k.prototype.pa;
        if ("undefined" === typeof r || "undefined" === typeof r._i) i.error("'mixpanel' object not initialized. Ensure you are using the latest version of the Mixpanel JS Library along with the snippet we provide.");
        else {
            var w = {};
            c.a(r._i, function (a) {
                var b;
                a && c.isArray(a) && (b = a[a.length - 1], a = C.apply(this, a), w[b] = a)
            });
            var P = function () {
                    c.a(w, function (a, b) {
                        "mixpanel" !== b && (r[b] = a)
                    });
                    r._ = c
                };
            r.init = function (a, b, c) {
                c ? r[c] || (r[c] = w[c] = C(a, b, c), r[c].r()) : (c = r, w.mixpanel ? c = w.mixpanel : a && (c = C(a, b, "mixpanel")), window.mixpanel = r = c, P())
            };
            r.init();
            c.a(w, function (a) {
                a.r()
            });
            if (o.addEventListener)"complete" == o.readyState ? v() : o.addEventListener("DOMContentLoaded", v, s);
            else if (o.attachEvent) {
                o.attachEvent("onreadystatechange", v);
                B = s;
                try {
                    B = window.frameElement == m
                } catch (Q) {}
                if (o.documentElement.doScroll && B) {
                    var M = function () {
                            try {
                                o.documentElement.doScroll("left")
                            } catch (a) {
                                setTimeout(M, 1);
                                return
                            }
                            v()
                        };
                    M()
                }
            }
            c.aa(window, "load", v, j)
        }
    })(window.mixpanel);
})();