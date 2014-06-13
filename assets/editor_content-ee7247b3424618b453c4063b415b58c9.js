/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
!function(e, t) {
    function n(e) {
        var t = e.length, n = ut.type(e);
        return ut.isWindow(e) ? !1 :1 === e.nodeType && t ? !0 :"array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function r(e) {
        var t = Et[e] = {};
        return ut.each(e.match(ct) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function i(e, n, r, i) {
        if (ut.acceptData(e)) {
            var o, a, s = ut.expando, u = "string" == typeof n, l = e.nodeType, c = l ? ut.cache :e, f = l ? e[s] :e[s] && s;
            if (f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = Z.pop() || ut.guid++ :f = s), 
            c[f] || (c[f] = {}, l || (c[f].toJSON = ut.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[f] = ut.extend(c[f], n) :c[f].data = ut.extend(c[f].data, n)), 
            o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[ut.camelCase(n)] = r), 
            u ? (a = o[n], null == a && (a = o[ut.camelCase(n)])) :a = o, a;
        }
    }
    function o(e, t, n) {
        if (ut.acceptData(e)) {
            var r, i, o, a = e.nodeType, u = a ? ut.cache :e, l = a ? e[ut.expando] :ut.expando;
            if (u[l]) {
                if (t && (o = n ? u[l] :u[l].data)) {
                    ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) :t in o ? t = [ t ] :(t = ut.camelCase(t), 
                    t = t in o ? [ t ] :t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
                    if (!(n ? s :ut.isEmptyObject)(o)) return;
                }
                (n || (delete u[l].data, s(u[l]))) && (a ? ut.cleanData([ e ], !0) :ut.support.deleteExpando || u != u.window ? delete u[l] :u[l] = null);
            }
        }
    }
    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Ct, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 :"false" === r ? !1 :"null" === r ? null :+r + "" === r ? +r :Nt.test(r) ? ut.parseJSON(r) :r;
                } catch (o) {}
                ut.data(e, n, r);
            } else r = t;
        }
        return r;
    }
    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    function u() {
        return !0;
    }
    function l() {
        return !1;
    }
    function c(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e;
    }
    function f(e, t, n) {
        if (t = t || 0, ut.isFunction(t)) return ut.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n;
        });
        if (t.nodeType) return ut.grep(e, function(e) {
            return e === t === n;
        });
        if ("string" == typeof t) {
            var r = ut.grep(e, function(e) {
                return 1 === e.nodeType;
            });
            if (Wt.test(t)) return ut.filter(t, r, !n);
            t = ut.filter(t, r);
        }
        return ut.grep(e, function(e) {
            return ut.inArray(e, t) >= 0 === n;
        });
    }
    function p(e) {
        var t = Vt.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (;t.length; ) n.createElement(t.pop());
        return n;
    }
    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
    }
    function h(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e;
    }
    function g(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] :e.removeAttribute("type"), e;
    }
    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ut._data(n, "globalEval", !t || ut._data(t[r], "globalEval"));
    }
    function y(e, t) {
        if (1 === t.nodeType && ut.hasData(e)) {
            var n, r, i, o = ut._data(e), a = ut._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) ut.event.add(t, n, s[n][r]);
            }
            a.data && (a.data = ut.extend({}, a.data));
        }
    }
    function v(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
                i = ut._data(t);
                for (r in i.events) ut.removeEvent(t, r, i.handle);
                t.removeAttribute(ut.expando);
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) :"object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
            ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) :"input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
            t.value !== e.value && (t.value = e.value)) :"option" === n ? t.defaultSelected = t.selected = e.defaultSelected :("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
        }
    }
    function b(e, n) {
        var r, i, o = 0, a = typeof e.getElementsByTagName !== X ? e.getElementsByTagName(n || "*") :typeof e.querySelectorAll !== X ? e.querySelectorAll(n || "*") :t;
        if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || ut.nodeName(i, n) ? a.push(i) :ut.merge(a, b(i, n));
        return n === t || n && ut.nodeName(e, n) ? ut.merge([ e ], a) :a;
    }
    function x(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked);
    }
    function w(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Cn.length; i--; ) if (t = Cn[i] + n, 
        t in e) return t;
        return r;
    }
    function T(e, t) {
        return e = t || e, "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e);
    }
    function E(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ut._data(r, "olddisplay"), 
        n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && T(r) && (o[a] = ut._data(r, "olddisplay", k(r.nodeName)))) :o[a] || (i = T(r), 
        (n && "none" !== n || !i) && ut._data(r, "olddisplay", i ? n :ut.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" :"none"));
        return e;
    }
    function N(e, t, n) {
        var r = vn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") :t;
    }
    function C(e, t, n, r, i) {
        for (var o = n === (r ? "border" :"content") ? 4 :"width" === t ? 1 :0, a = 0; 4 > o; o += 2) "margin" === n && (a += ut.css(e, n + Nn[o], !0, i)), 
        r ? ("content" === n && (a -= ut.css(e, "padding" + Nn[o], !0, i)), "margin" !== n && (a -= ut.css(e, "border" + Nn[o] + "Width", !0, i))) :(a += ut.css(e, "padding" + Nn[o], !0, i), 
        "padding" !== n && (a += ut.css(e, "border" + Nn[o] + "Width", !0, i)));
        return a;
    }
    function _(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth :e.offsetHeight, o = fn(e), a = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = pn(e, t, o), (0 > i || null == i) && (i = e.style[t]), bn.test(i)) return i;
            r = a && (ut.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + C(e, t, n || (a ? "border" :"content"), r, o) + "px";
    }
    function k(e) {
        var t = G, n = wn[e];
        return n || (n = S(e, t), "none" !== n && n || (cn = (cn || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), 
        t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), 
        t.close(), n = S(e, t), cn.detach()), wn[e] = n), n;
    }
    function S(e, t) {
        var n = ut(t.createElement(e)).appendTo(t.body), r = ut.css(n[0], "display");
        return n.remove(), r;
    }
    function A(e, t, n, r) {
        var i;
        if (ut.isArray(t)) ut.each(t, function(t, i) {
            n || kn.test(e) ? r(e, i) :A(e + "[" + ("object" == typeof i ? t :"") + "]", i, n, r);
        }); else if (n || "object" !== ut.type(t)) r(e, t); else for (i in t) A(e + "[" + i + "]", t[i], n, r);
    }
    function L(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(ct) || [];
            if (ut.isFunction(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", 
            (e[r] = e[r] || []).unshift(n)) :(e[r] = e[r] || []).push(n);
        };
    }
    function D(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, ut.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) :void 0 :(t.dataTypes.unshift(l), 
                i(l), !1);
            }), u;
        }
        var o = {}, a = e === $n;
        return i(t.dataTypes[0]) || !o["*"] && i("*");
    }
    function j(e, n) {
        var r, i, o = ut.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e :r || (r = {}))[i] = n[i]);
        return r && ut.extend(!0, e, r), e;
    }
    function O(e, n, r) {
        var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields;
        for (s in c) s in r && (n[c[s]] = r[s]);
        for (;"*" === l[0]; ) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (s in u) if (u[s] && u[s].test(o)) {
            l.unshift(s);
            break;
        }
        if (l[0] in r) a = l[0]; else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break;
                }
                i || (i = s);
            }
            a = a || i;
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) :void 0;
    }
    function F(e, t) {
        var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
        for (;r = u[++s]; ) if ("*" !== r) {
            if ("*" !== l && l !== r) {
                if (i = a[l + " " + r] || a["* " + r], !i) for (n in a) if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                    i === !0 ? i = a[n] :a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                    break;
                }
                if (i !== !0) if (i && e["throws"]) t = i(t); else try {
                    t = i(t);
                } catch (c) {
                    return {
                        state:"parsererror",
                        error:i ? c :"No conversion from " + l + " to " + r
                    };
                }
            }
            l = r;
        }
        return {
            state:"success",
            data:t
        };
    }
    function M() {
        try {
            return new e.XMLHttpRequest();
        } catch (t) {}
    }
    function R() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function H() {
        return setTimeout(function() {
            Zn = t;
        }), Zn = ut.now();
    }
    function q(e, t) {
        ut.each(t, function(t, n) {
            for (var r = (or[t] || []).concat(or["*"]), i = 0, o = r.length; o > i; i++) if (r[i].call(e, t, n)) return;
        });
    }
    function B(e, t, n) {
        var r, i, o = 0, a = ir.length, s = ut.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (i) return !1;
            for (var t = Zn || H(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
            return s.notifyWith(e, [ l, o, n ]), 1 > o && u ? n :(s.resolveWith(e, [ l ]), !1);
        }, l = s.promise({
            elem:e,
            props:ut.extend({}, t),
            opts:ut.extend(!0, {
                specialEasing:{}
            }, n),
            originalProperties:t,
            originalOptions:n,
            startTime:Zn || H(),
            duration:n.duration,
            tweens:[],
            createTween:function(t, n) {
                var r = ut.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r;
            },
            stop:function(t) {
                var n = 0, r = t ? l.tweens.length :0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? s.resolveWith(e, [ l, t ]) :s.rejectWith(e, [ l, t ]), this;
            }
        }), c = l.props;
        for (I(c, l.opts.specialEasing); a > o; o++) if (r = ir[o].call(l, e, c, l.opts)) return r;
        return q(l, c), ut.isFunction(l.opts.start) && l.opts.start.call(e, l), ut.fx.timer(ut.extend(u, {
            elem:e,
            anim:l,
            queue:l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    function I(e, t) {
        var n, r, i, o, a;
        for (i in e) if (r = ut.camelCase(i), o = t[r], n = e[i], ut.isArray(n) && (o = n[1], 
        n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = ut.cssHooks[r], a && "expand" in a) {
            n = a.expand(n), delete e[r];
            for (i in n) i in e || (e[i] = n[i], t[i] = o);
        } else t[r] = o;
    }
    function P(e, t, n) {
        var r, i, o, a, s, u, l, c, f, p = this, d = e.style, h = {}, g = [], m = e.nodeType && T(e);
        n.queue || (c = ut._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, 
        f = c.empty.fire, c.empty.fire = function() {
            c.unqueued || f();
        }), c.unqueued++, p.always(function() {
            p.always(function() {
                c.unqueued--, ut.queue(e, "fx").length || c.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ d.overflow, d.overflowX, d.overflowY ], 
        "inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? d.zoom = 1 :d.display = "inline-block")), 
        n.overflow && (d.overflow = "hidden", ut.support.shrinkWrapBlocks || p.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
        }));
        for (i in t) if (a = t[i], tr.exec(a)) {
            if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" :"show")) continue;
            g.push(i);
        }
        if (o = g.length) {
            s = ut._data(e, "fxshow") || ut._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), 
            u && (s.hidden = !m), m ? ut(e).show() :p.done(function() {
                ut(e).hide();
            }), p.done(function() {
                var t;
                ut._removeData(e, "fxshow");
                for (t in h) ut.style(e, t, h[t]);
            });
            for (i = 0; o > i; i++) r = g[i], l = p.createTween(r, m ? s[r] :0), h[r] = s[r] || ut.style(e, r), 
            r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 :0));
        }
    }
    function U(e, t, n, r, i) {
        return new U.prototype.init(e, t, n, r, i);
    }
    function W(e, t) {
        var n, r = {
            height:e
        }, i = 0;
        for (t = t ? 1 :0; 4 > i; i += 2 - t) n = Nn[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function $(e) {
        return ut.isWindow(e) ? e :9 === e.nodeType ? e.defaultView || e.parentWindow :!1;
    }
    var z, V, X = typeof t, G = e.document, J = e.location, Y = e.jQuery, Q = e.$, K = {}, Z = [], et = "1.9.1", tt = Z.concat, nt = Z.push, rt = Z.slice, it = Z.indexOf, ot = K.toString, at = K.hasOwnProperty, st = et.trim, ut = function(e, t) {
        return new ut.fn.init(e, t, V);
    }, lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ct = /\S+/g, ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, pt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ht = /^[\],:{}\s]*$/, gt = /(?:^|:|,)(?:\s*\[)+/g, mt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, yt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, vt = /^-ms-/, bt = /-([\da-z])/gi, xt = function(e, t) {
        return t.toUpperCase();
    }, wt = function(e) {
        (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (Tt(), 
        ut.ready());
    }, Tt = function() {
        G.addEventListener ? (G.removeEventListener("DOMContentLoaded", wt, !1), e.removeEventListener("load", wt, !1)) :(G.detachEvent("onreadystatechange", wt), 
        e.detachEvent("onload", wt));
    };
    ut.fn = ut.prototype = {
        jquery:et,
        constructor:ut,
        init:function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] :pt.exec(e), 
                !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) :this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ut ? n[0] :n, ut.merge(this, ut.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n :G, !0)), 
                    dt.test(i[1]) && ut.isPlainObject(n)) for (i in n) ut.isFunction(this[i]) ? this[i](n[i]) :this.attr(i, n[i]);
                    return this;
                }
                if (o = G.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o;
                }
                return this.context = G, this.selector = e, this;
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) :ut.isFunction(e) ? r.ready(e) :(e.selector !== t && (this.selector = e.selector, 
            this.context = e.context), ut.makeArray(e, this));
        },
        selector:"",
        length:0,
        size:function() {
            return this.length;
        },
        toArray:function() {
            return rt.call(this);
        },
        get:function(e) {
            return null == e ? this.toArray() :0 > e ? this[this.length + e] :this[e];
        },
        pushStack:function(e) {
            var t = ut.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each:function(e, t) {
            return ut.each(this, e, t);
        },
        ready:function(e) {
            return ut.ready.promise().done(e), this;
        },
        slice:function() {
            return this.pushStack(rt.apply(this, arguments));
        },
        first:function() {
            return this.eq(0);
        },
        last:function() {
            return this.eq(-1);
        },
        eq:function(e) {
            var t = this.length, n = +e + (0 > e ? t :0);
            return this.pushStack(n >= 0 && t > n ? [ this[n] ] :[]);
        },
        map:function(e) {
            return this.pushStack(ut.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        end:function() {
            return this.prevObject || this.constructor(null);
        },
        push:nt,
        sort:[].sort,
        splice:[].splice
    }, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || ut.isFunction(s) || (s = {}), 
        l === u && (s = this, --u); l > u; u++) if (null != (o = arguments[u])) for (i in o) e = s[i], 
        r = o[i], s !== r && (c && r && (ut.isPlainObject(r) || (n = ut.isArray(r))) ? (n ? (n = !1, 
        a = e && ut.isArray(e) ? e :[]) :a = e && ut.isPlainObject(e) ? e :{}, s[i] = ut.extend(c, a, r)) :r !== t && (s[i] = r));
        return s;
    }, ut.extend({
        noConflict:function(t) {
            return e.$ === ut && (e.$ = Q), t && e.jQuery === ut && (e.jQuery = Y), ut;
        },
        isReady:!1,
        readyWait:1,
        holdReady:function(e) {
            e ? ut.readyWait++ :ut.ready(!0);
        },
        ready:function(e) {
            if (e === !0 ? !--ut.readyWait :!ut.isReady) {
                if (!G.body) return setTimeout(ut.ready);
                ut.isReady = !0, e !== !0 && --ut.readyWait > 0 || (z.resolveWith(G, [ ut ]), ut.fn.trigger && ut(G).trigger("ready").off("ready"));
            }
        },
        isFunction:function(e) {
            return "function" === ut.type(e);
        },
        isArray:Array.isArray || function(e) {
            return "array" === ut.type(e);
        },
        isWindow:function(e) {
            return null != e && e == e.window;
        },
        isNumeric:function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type:function(e) {
            return null == e ? String(e) :"object" == typeof e || "function" == typeof e ? K[ot.call(e)] || "object" :typeof e;
        },
        isPlainObject:function(e) {
            if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e)) return !1;
            try {
                if (e.constructor && !at.call(e, "constructor") && !at.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (n) {
                return !1;
            }
            var r;
            for (r in e) ;
            return r === t || at.call(e, r);
        },
        isEmptyObject:function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        error:function(e) {
            throw new Error(e);
        },
        parseHTML:function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || G;
            var r = dt.exec(e), i = !n && [];
            return r ? [ t.createElement(r[1]) ] :(r = ut.buildFragment([ e ], t, i), i && ut(i).remove(), 
            ut.merge([], r.childNodes));
        },
        parseJSON:function(t) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(t) :null === t ? t :"string" == typeof t && (t = ut.trim(t), 
            t && ht.test(t.replace(mt, "@").replace(yt, "]").replace(gt, ""))) ? new Function("return " + t)() :(ut.error("Invalid JSON: " + t), 
            void 0);
        },
        parseXML:function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, "text/xml")) :(r = new ActiveXObject("Microsoft.XMLDOM"), 
                r.async = "false", r.loadXML(n));
            } catch (o) {
                r = t;
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n), 
            r;
        },
        noop:function() {},
        globalEval:function(t) {
            t && ut.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t);
            })(t);
        },
        camelCase:function(e) {
            return e.replace(vt, "ms-").replace(bt, xt);
        },
        nodeName:function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each:function(e, t, r) {
            var i, o = 0, a = e.length, s = n(e);
            if (r) {
                if (s) for (;a > o && (i = t.apply(e[o], r), i !== !1); o++) ; else for (o in e) if (i = t.apply(e[o], r), 
                i === !1) break;
            } else if (s) for (;a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++) ; else for (o in e) if (i = t.call(e[o], o, e[o]), 
            i === !1) break;
            return e;
        },
        trim:st && !st.call("﻿ ") ? function(e) {
            return null == e ? "" :st.call(e);
        } :function(e) {
            return null == e ? "" :(e + "").replace(ft, "");
        },
        makeArray:function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ut.merge(r, "string" == typeof e ? [ e ] :e) :nt.call(r, e)), 
            r;
        },
        inArray:function(e, t, n) {
            var r;
            if (t) {
                if (it) return it.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) :n :0; r > n; n++) if (n in t && t[n] === e) return n;
            }
            return -1;
        },
        merge:function(e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) for (;r > o; o++) e[i++] = n[o]; else for (;n[o] !== t; ) e[i++] = n[o++];
            return e.length = i, e;
        },
        grep:function(e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i;
        },
        map:function(e, t, r) {
            var i, o = 0, a = e.length, s = n(e), u = [];
            if (s) for (;a > o; o++) i = t(e[o], o, r), null != i && (u[u.length] = i); else for (o in e) i = t(e[o], o, r), 
            null != i && (u[u.length] = i);
            return tt.apply([], u);
        },
        guid:1,
        proxy:function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), ut.isFunction(e) ? (r = rt.call(arguments, 2), 
            i = function() {
                return e.apply(n || this, r.concat(rt.call(arguments)));
            }, i.guid = e.guid = e.guid || ut.guid++, i) :t;
        },
        access:function(e, n, r, i, o, a, s) {
            var u = 0, l = e.length, c = null == r;
            if ("object" === ut.type(r)) {
                o = !0;
                for (u in r) ut.access(e, n, u, r[u], !0, a, s);
            } else if (i !== t && (o = !0, ut.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), 
            n = null) :(c = n, n = function(e, t, n) {
                return c.call(ut(e), n);
            })), n)) for (;l > u; u++) n(e[u], r, s ? i :i.call(e[u], u, n(e[u], r)));
            return o ? e :c ? n.call(e) :l ? n(e[0], r) :a;
        },
        now:function() {
            return new Date().getTime();
        }
    }), ut.ready.promise = function(t) {
        if (!z) if (z = ut.Deferred(), "complete" === G.readyState) setTimeout(ut.ready); else if (G.addEventListener) G.addEventListener("DOMContentLoaded", wt, !1), 
        e.addEventListener("load", wt, !1); else {
            G.attachEvent("onreadystatechange", wt), e.attachEvent("onload", wt);
            var n = !1;
            try {
                n = null == e.frameElement && G.documentElement;
            } catch (r) {}
            n && n.doScroll && !function i() {
                if (!ut.isReady) {
                    try {
                        n.doScroll("left");
                    } catch (e) {
                        return setTimeout(i, 50);
                    }
                    Tt(), ut.ready();
                }
            }();
        }
        return z.promise(t);
    }, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        K["[object " + t + "]"] = t.toLowerCase();
    }), V = ut(G);
    var Et = {};
    ut.Callbacks = function(e) {
        e = "string" == typeof e ? Et[e] || r(e) :ut.extend({}, e);
        var n, i, o, a, s, u, l = [], c = !e.once && [], f = function(t) {
            for (i = e.memory && t, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && a > s; s++) if (l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                i = !1;
                break;
            }
            n = !1, l && (c ? c.length && f(c.shift()) :i ? l = [] :p.disable());
        }, p = {
            add:function() {
                if (l) {
                    var t = l.length;
                    !function r(t) {
                        ut.each(t, function(t, n) {
                            var i = ut.type(n);
                            "function" === i ? e.unique && p.has(n) || l.push(n) :n && n.length && "string" !== i && r(n);
                        });
                    }(arguments), n ? a = l.length :i && (u = t, f(i));
                }
                return this;
            },
            remove:function() {
                return l && ut.each(arguments, function(e, t) {
                    for (var r; (r = ut.inArray(t, l, r)) > -1; ) l.splice(r, 1), n && (a >= r && a--, 
                    s >= r && s--);
                }), this;
            },
            has:function(e) {
                return e ? ut.inArray(e, l) > -1 :!(!l || !l.length);
            },
            empty:function() {
                return l = [], this;
            },
            disable:function() {
                return l = c = i = t, this;
            },
            disabled:function() {
                return !l;
            },
            lock:function() {
                return c = t, i || p.disable(), this;
            },
            locked:function() {
                return !c;
            },
            fireWith:function(e, t) {
                return t = t || [], t = [ e, t.slice ? t.slice() :t ], !l || o && !c || (n ? c.push(t) :f(t)), 
                this;
            },
            fire:function() {
                return p.fireWith(this, arguments), this;
            },
            fired:function() {
                return !!o;
            }
        };
        return p;
    }, ut.extend({
        Deferred:function(e) {
            var t = [ [ "resolve", "done", ut.Callbacks("once memory"), "resolved" ], [ "reject", "fail", ut.Callbacks("once memory"), "rejected" ], [ "notify", "progress", ut.Callbacks("memory") ] ], n = "pending", r = {
                state:function() {
                    return n;
                },
                always:function() {
                    return i.done(arguments).fail(arguments), this;
                },
                then:function() {
                    var e = arguments;
                    return ut.Deferred(function(n) {
                        ut.each(t, function(t, o) {
                            var a = o[0], s = ut.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) :n[a + "With"](this === r ? n.promise() :this, s ? [ e ] :arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise:function(e) {
                    return null != e ? ut.extend(e, r) :r;
                }
            }, i = {};
            return r.pipe = r.then, ut.each(t, function(e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s;
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r :this, arguments), this;
                }, i[o[0] + "With"] = a.fireWith;
            }), r.promise(i), e && e.call(i, i), i;
        },
        when:function(e) {
            var t, n, r, i = 0, o = rt.call(arguments), a = o.length, s = 1 !== a || e && ut.isFunction(e.promise) ? a :0, u = 1 === s ? e :ut.Deferred(), l = function(e, n, r) {
                return function(i) {
                    n[e] = this, r[e] = arguments.length > 1 ? rt.call(arguments) :i, r === t ? u.notifyWith(n, r) :--s || u.resolveWith(n, r);
                };
            };
            if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ut.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) :--s;
            return s || u.resolveWith(r, o), u.promise();
        }
    }), ut.support = function() {
        var t, n, r, i, o, a, s, u, l, c, f = G.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        n = f.getElementsByTagName("*"), r = f.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        o = G.createElement("select"), s = o.appendChild(G.createElement("option")), i = f.getElementsByTagName("input")[0], 
        r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute:"t" !== f.className,
            leadingWhitespace:3 === f.firstChild.nodeType,
            tbody:!f.getElementsByTagName("tbody").length,
            htmlSerialize:!!f.getElementsByTagName("link").length,
            style:/top/.test(r.getAttribute("style")),
            hrefNormalized:"/a" === r.getAttribute("href"),
            opacity:/^0.5/.test(r.style.opacity),
            cssFloat:!!r.style.cssFloat,
            checkOn:!!i.value,
            optSelected:s.selected,
            enctype:!!G.createElement("form").enctype,
            html5Clone:"<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML,
            boxModel:"CSS1Compat" === G.compatMode,
            deleteExpando:!0,
            noCloneEvent:!0,
            inlineBlockNeedsLayout:!1,
            shrinkWrapBlocks:!1,
            reliableMarginRight:!0,
            boxSizingReliable:!0,
            pixelPosition:!1
        }, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, 
        t.optDisabled = !s.disabled;
        try {
            delete f.test;
        } catch (p) {
            t.deleteExpando = !1;
        }
        i = G.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), 
        i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, 
        i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = G.createDocumentFragment(), 
        a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        f.attachEvent && (f.attachEvent("onclick", function() {
            t.noCloneEvent = !1;
        }), f.cloneNode(!0).click());
        for (c in {
            submit:!0,
            change:!0,
            focusin:!0
        }) f.setAttribute(u = "on" + c, "t"), t[c + "Bubbles"] = u in e || f.attributes[u].expando === !1;
        return f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", 
        t.clearCloneStyle = "content-box" === f.style.backgroundClip, ut(function() {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = G.getElementsByTagName("body")[0];
            a && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
            l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", 
            t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
            t.boxSizing = 4 === f.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, 
            e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, 
            t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
                width:"4px"
            }).width, r = f.appendChild(G.createElement("div")), r.style.cssText = f.style.cssText = o, 
            r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), 
            typeof f.style.zoom !== X && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", 
            t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", 
            f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), 
            a.removeChild(n), n = f = i = r = null);
        }), n = o = a = s = r = i = null, t;
    }();
    var Nt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Ct = /([A-Z])/g;
    ut.extend({
        cache:{},
        expando:"jQuery" + (et + Math.random()).replace(/\D/g, ""),
        noData:{
            embed:!0,
            object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet:!0
        },
        hasData:function(e) {
            return e = e.nodeType ? ut.cache[e[ut.expando]] :e[ut.expando], !!e && !s(e);
        },
        data:function(e, t, n) {
            return i(e, t, n);
        },
        removeData:function(e, t) {
            return o(e, t);
        },
        _data:function(e, t, n) {
            return i(e, t, n, !0);
        },
        _removeData:function(e, t) {
            return o(e, t, !0);
        },
        acceptData:function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t;
        }
    }), ut.fn.extend({
        data:function(e, n) {
            var r, i, o = this[0], s = 0, u = null;
            if (e === t) {
                if (this.length && (u = ut.data(o), 1 === o.nodeType && !ut._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; s < r.length; s++) i = r[s].name, i.indexOf("data-") || (i = ut.camelCase(i.slice(5)), 
                    a(o, i, u[i]));
                    ut._data(o, "parsedAttrs", !0);
                }
                return u;
            }
            return "object" == typeof e ? this.each(function() {
                ut.data(this, e);
            }) :ut.access(this, function(n) {
                return n === t ? o ? a(o, e, ut.data(o, e)) :null :(this.each(function() {
                    ut.data(this, e, n);
                }), void 0);
            }, null, n, arguments.length > 1, null, !0);
        },
        removeData:function(e) {
            return this.each(function() {
                ut.removeData(this, e);
            });
        }
    }), ut.extend({
        queue:function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ut._data(e, t), n && (!r || ut.isArray(n) ? r = ut._data(e, t, ut.makeArray(n)) :r.push(n)), 
            r || []) :void 0;
        },
        dequeue:function(e, t) {
            t = t || "fx";
            var n = ut.queue(e, t), r = n.length, i = n.shift(), o = ut._queueHooks(e, t), a = function() {
                ut.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        },
        _queueHooks:function(e, t) {
            var n = t + "queueHooks";
            return ut._data(e, n) || ut._data(e, n, {
                empty:ut.Callbacks("once memory").add(function() {
                    ut._removeData(e, t + "queue"), ut._removeData(e, n);
                })
            });
        }
    }), ut.fn.extend({
        queue:function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? ut.queue(this[0], e) :n === t ? this :this.each(function() {
                var t = ut.queue(this, e, n);
                ut._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e);
            });
        },
        dequeue:function(e) {
            return this.each(function() {
                ut.dequeue(this, e);
            });
        },
        delay:function(e, t) {
            return e = ut.fx ? ut.fx.speeds[e] || e :e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue:function(e) {
            return this.queue(e || "fx", []);
        },
        promise:function(e, n) {
            var r, i = 1, o = ut.Deferred(), a = this, s = this.length, u = function() {
                --i || o.resolveWith(a, [ a ]);
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--; ) r = ut._data(a[s], e + "queueHooks"), 
            r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n);
        }
    });
    var _t, kt, St = /[\t\r\n]/g, At = /\r/g, Lt = /^(?:input|select|textarea|button|object)$/i, Dt = /^(?:a|area)$/i, jt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Ot = /^(?:checked|selected)$/i, Ft = ut.support.getSetAttribute, Mt = ut.support.input;
    ut.fn.extend({
        attr:function(e, t) {
            return ut.access(this, ut.attr, e, t, arguments.length > 1);
        },
        removeAttr:function(e) {
            return this.each(function() {
                ut.removeAttr(this, e);
            });
        },
        prop:function(e, t) {
            return ut.access(this, ut.prop, e, t, arguments.length > 1);
        },
        removeProp:function(e) {
            return e = ut.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e];
                } catch (n) {}
            });
        },
        addClass:function(e) {
            var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
            if (ut.isFunction(e)) return this.each(function(t) {
                ut(this).addClass(e.call(this, t, this.className));
            });
            if (u) for (t = (e || "").match(ct) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(St, " ") :" ")) {
                for (o = 0; i = t[o++]; ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                n.className = ut.trim(r);
            }
            return this;
        },
        removeClass:function(e) {
            var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (ut.isFunction(e)) return this.each(function(t) {
                ut(this).removeClass(e.call(this, t, this.className));
            });
            if (u) for (t = (e || "").match(ct) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(St, " ") :"")) {
                for (o = 0; i = t[o++]; ) for (;r.indexOf(" " + i + " ") >= 0; ) r = r.replace(" " + i + " ", " ");
                n.className = e ? ut.trim(r) :"";
            }
            return this;
        },
        toggleClass:function(e, t) {
            var n = typeof e, r = "boolean" == typeof t;
            return ut.isFunction(e) ? this.each(function(n) {
                ut(this).toggleClass(e.call(this, n, this.className, t), t);
            }) :this.each(function() {
                if ("string" === n) for (var i, o = 0, a = ut(this), s = t, u = e.match(ct) || []; i = u[o++]; ) s = r ? s :!a.hasClass(i), 
                a[s ? "addClass" :"removeClass"](i); else (n === X || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), 
                this.className = this.className || e === !1 ? "" :ut._data(this, "__className__") || "");
            });
        },
        hasClass:function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(St, " ").indexOf(t) >= 0) return !0;
            return !1;
        },
        val:function(e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length) return i = ut.isFunction(e), this.each(function(n) {
                    var o, a = ut(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, a.val()) :e, null == o ? o = "" :"number" == typeof o ? o += "" :ut.isArray(o) && (o = ut.map(o, function(e) {
                        return null == e ? "" :e + "";
                    })), r = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o));
                });
                if (o) return r = ut.valHooks[o.type] || ut.valHooks[o.nodeName.toLowerCase()], 
                r && "get" in r && (n = r.get(o, "value")) !== t ? n :(n = o.value, "string" == typeof n ? n.replace(At, "") :null == n ? "" :n);
            }
        }
    }), ut.extend({
        valHooks:{
            option:{
                get:function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value :e.text;
                }
            },
            select:{
                get:function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null :[], s = o ? i + 1 :r.length, u = 0 > i ? s :o ? i :0; s > u; u++) if (n = r[u], 
                    !(!n.selected && u !== i || (ut.support.optDisabled ? n.disabled :null !== n.getAttribute("disabled")) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ut(n).val(), o) return t;
                        a.push(t);
                    }
                    return a;
                },
                set:function(e, t) {
                    var n = ut.makeArray(t);
                    return ut(e).find("option").each(function() {
                        this.selected = ut.inArray(ut(this).val(), n) >= 0;
                    }), n.length || (e.selectedIndex = -1), n;
                }
            }
        },
        attr:function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === X ? ut.prop(e, n, r) :(o = 1 !== s || !ut.isXMLDoc(e), 
            o && (n = n.toLowerCase(), i = ut.attrHooks[n] || (jt.test(n) ? kt :_t)), r === t ? i && o && "get" in i && null !== (a = i.get(e, n)) ? a :(typeof e.getAttribute !== X && (a = e.getAttribute(n)), 
            null == a ? t :a) :null !== r ? i && o && "set" in i && (a = i.set(e, r, n)) !== t ? a :(e.setAttribute(n, r + ""), 
            r) :(ut.removeAttr(e, n), void 0));
        },
        removeAttr:function(e, t) {
            var n, r, i = 0, o = t && t.match(ct);
            if (o && 1 === e.nodeType) for (;n = o[i++]; ) r = ut.propFix[n] || n, jt.test(n) ? !Ft && Ot.test(n) ? e[ut.camelCase("default-" + n)] = e[r] = !1 :e[r] = !1 :ut.attr(e, n, ""), 
            e.removeAttribute(Ft ? n :r);
        },
        attrHooks:{
            type:{
                set:function(e, t) {
                    if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        propFix:{
            tabindex:"tabIndex",
            readonly:"readOnly",
            "for":"htmlFor",
            "class":"className",
            maxlength:"maxLength",
            cellspacing:"cellSpacing",
            cellpadding:"cellPadding",
            rowspan:"rowSpan",
            colspan:"colSpan",
            usemap:"useMap",
            frameborder:"frameBorder",
            contenteditable:"contentEditable"
        },
        prop:function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ut.isXMLDoc(e), a && (n = ut.propFix[n] || n, 
            o = ut.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i :e[n] = r :o && "get" in o && null !== (i = o.get(e, n)) ? i :e[n];
        },
        propHooks:{
            tabIndex:{
                get:function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) :Lt.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 :t;
                }
            }
        }
    }), kt = {
        get:function(e, n) {
            var r = ut.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n), o = "boolean" == typeof r ? Mt && Ft ? null != i :Ot.test(n) ? e[ut.camelCase("default-" + n)] :!!i :e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() :t;
        },
        set:function(e, t, n) {
            return t === !1 ? ut.removeAttr(e, n) :Mt && Ft || !Ot.test(n) ? e.setAttribute(!Ft && ut.propFix[n] || n, n) :e[ut.camelCase("default-" + n)] = e[n] = !0, 
            n;
        }
    }, Mt && Ft || (ut.attrHooks.value = {
        get:function(e, n) {
            var r = e.getAttributeNode(n);
            return ut.nodeName(e, "input") ? e.defaultValue :r && r.specified ? r.value :t;
        },
        set:function(e, t, n) {
            return ut.nodeName(e, "input") ? (e.defaultValue = t, void 0) :_t && _t.set(e, t, n);
        }
    }), Ft || (_t = ut.valHooks.button = {
        get:function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value :r.specified) ? r.value :t;
        },
        set:function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", 
            "value" === r || n === e.getAttribute(r) ? n :t;
        }
    }, ut.attrHooks.contenteditable = {
        get:_t.get,
        set:function(e, t, n) {
            _t.set(e, "" === t ? !1 :t, n);
        }
    }, ut.each([ "width", "height" ], function(e, t) {
        ut.attrHooks[t] = ut.extend(ut.attrHooks[t], {
            set:function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) :void 0;
            }
        });
    })), ut.support.hrefNormalized || (ut.each([ "href", "src", "width", "height" ], function(e, n) {
        ut.attrHooks[n] = ut.extend(ut.attrHooks[n], {
            get:function(e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t :r;
            }
        });
    }), ut.each([ "href", "src" ], function(e, t) {
        ut.propHooks[t] = {
            get:function(e) {
                return e.getAttribute(t, 4);
            }
        };
    })), ut.support.style || (ut.attrHooks.style = {
        get:function(e) {
            return e.style.cssText || t;
        },
        set:function(e, t) {
            return e.style.cssText = t + "";
        }
    }), ut.support.optSelected || (ut.propHooks.selected = ut.extend(ut.propHooks.selected, {
        get:function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    })), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.support.checkOn || ut.each([ "radio", "checkbox" ], function() {
        ut.valHooks[this] = {
            get:function(e) {
                return null === e.getAttribute("value") ? "on" :e.value;
            }
        };
    }), ut.each([ "radio", "checkbox" ], function() {
        ut.valHooks[this] = ut.extend(ut.valHooks[this], {
            set:function(e, t) {
                return ut.isArray(t) ? e.checked = ut.inArray(ut(e).val(), t) >= 0 :void 0;
            }
        });
    });
    var Rt = /^(?:input|select|textarea)$/i, Ht = /^key/, qt = /^(?:mouse|contextmenu)|click/, Bt = /^(?:focusinfocus|focusoutblur)$/, It = /^([^.]*)(?:\.(.+)|)$/;
    ut.event = {
        global:{},
        add:function(e, n, r, i, o) {
            var a, s, u, l, c, f, p, d, h, g, m, y = ut._data(e);
            if (y) {
                for (r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = ut.guid++), 
                (s = y.events) || (s = y.events = {}), (f = y.handle) || (f = y.handle = function(e) {
                    return typeof ut === X || e && ut.event.triggered === e.type ? t :ut.event.dispatch.apply(f.elem, arguments);
                }, f.elem = e), n = (n || "").match(ct) || [ "" ], u = n.length; u--; ) a = It.exec(n[u]) || [], 
                h = m = a[1], g = (a[2] || "").split(".").sort(), c = ut.event.special[h] || {}, 
                h = (o ? c.delegateType :c.bindType) || h, c = ut.event.special[h] || {}, p = ut.extend({
                    type:h,
                    origType:m,
                    data:i,
                    handler:r,
                    guid:r.guid,
                    selector:o,
                    needsContext:o && ut.expr.match.needsContext.test(o),
                    namespace:g.join(".")
                }, l), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, c.setup && c.setup.call(e, i, g, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) :e.attachEvent && e.attachEvent("on" + h, f))), 
                c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) :d.push(p), 
                ut.event.global[h] = !0;
                e = null;
            }
        },
        remove:function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = ut.hasData(e) && ut._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(ct) || [ "" ], l = t.length; l--; ) if (s = It.exec(t[l]) || [], 
                d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = ut.event.special[d] || {}, d = (r ? f.delegateType :f.bindType) || d, p = c[d] || [], 
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--; ) a = p[o], 
                    !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), 
                    a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                    u && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ut.removeEvent(e, d, m.handle), 
                    delete c[d]);
                } else for (d in c) ut.event.remove(e, d + t[l], n, r, !0);
                ut.isEmptyObject(c) && (delete m.handle, ut._removeData(e, "events"));
            }
        },
        trigger:function(n, r, i, o) {
            var a, s, u, l, c, f, p, d = [ i || G ], h = at.call(n, "type") ? n.type :n, g = at.call(n, "namespace") ? n.namespace.split(".") :[];
            if (u = f = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !Bt.test(h + ut.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), 
            h = g.shift(), g.sort()), s = h.indexOf(":") < 0 && "on" + h, n = n[ut.expando] ? n :new ut.Event(h, "object" == typeof n && n), 
            n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") :null, 
            n.result = t, n.target || (n.target = i), r = null == r ? [ n ] :ut.makeArray(r, [ n ]), 
            c = ut.event.special[h] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !ut.isWindow(i)) {
                    for (l = c.delegateType || h, Bt.test(l + h) || (u = u.parentNode); u; u = u.parentNode) d.push(u), 
                    f = u;
                    f === (i.ownerDocument || G) && d.push(f.defaultView || f.parentWindow || e);
                }
                for (p = 0; (u = d[p++]) && !n.isPropagationStopped(); ) n.type = p > 1 ? l :c.bindType || h, 
                a = (ut._data(u, "events") || {})[n.type] && ut._data(u, "handle"), a && a.apply(u, r), 
                a = s && u[s], a && ut.acceptData(u) && a.apply && a.apply(u, r) === !1 && n.preventDefault();
                if (n.type = h, !(o || n.isDefaultPrevented() || c._default && c._default.apply(i.ownerDocument, r) !== !1 || "click" === h && ut.nodeName(i, "a") || !ut.acceptData(i) || !s || !i[h] || ut.isWindow(i))) {
                    f = i[s], f && (i[s] = null), ut.event.triggered = h;
                    try {
                        i[h]();
                    } catch (m) {}
                    ut.event.triggered = t, f && (i[s] = f);
                }
                return n.result;
            }
        },
        dispatch:function(e) {
            e = ut.event.fix(e);
            var n, r, i, o, a, s = [], u = rt.call(arguments), l = (ut._data(this, "events") || {})[e.type] || [], c = ut.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = ut.event.handlers.call(this, e, l), n = 0; (o = s[n++]) && !e.isPropagationStopped(); ) for (e.currentTarget = o.elem, 
                a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, 
                e.data = i.data, r = ((ut.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), 
                r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result;
            }
        },
        handlers:function(e, n) {
            var r, i, o, a, s = [], u = n.delegateCount, l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) for (;l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ut(r, this).index(l) >= 0 :ut.find(r, this, null, [ l ]).length), 
                o[r] && o.push(i);
                o.length && s.push({
                    elem:l,
                    handlers:o
                });
            }
            return u < n.length && s.push({
                elem:this,
                handlers:n.slice(u)
            }), s;
        },
        fix:function(e) {
            if (e[ut.expando]) return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = qt.test(i) ? this.mouseHooks :Ht.test(i) ? this.keyHooks :{}), 
            r = a.props ? this.props.concat(a.props) :this.props, e = new ut.Event(o), t = r.length; t--; ) n = r[t], 
            e[n] = o[n];
            return e.target || (e.target = o.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) :e;
        },
        props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks:{},
        keyHooks:{
            props:"char charCode key keyCode".split(" "),
            filter:function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode :t.keyCode), 
                e;
            }
        },
        mouseHooks:{
            props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter:function(e, n) {
                var r, i, o, a = n.button, s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || G, 
                o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), 
                e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), 
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement :s), e.which || a === t || (e.which = 1 & a ? 1 :2 & a ? 3 :4 & a ? 2 :0), 
                e;
            }
        },
        special:{
            load:{
                noBubble:!0
            },
            click:{
                trigger:function() {
                    return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) :void 0;
                }
            },
            focus:{
                trigger:function() {
                    if (this !== G.activeElement && this.focus) try {
                        return this.focus(), !1;
                    } catch (e) {}
                },
                delegateType:"focusin"
            },
            blur:{
                trigger:function() {
                    return this === G.activeElement && this.blur ? (this.blur(), !1) :void 0;
                },
                delegateType:"focusout"
            },
            beforeunload:{
                postDispatch:function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate:function(e, t, n, r) {
            var i = ut.extend(new ut.Event(), n, {
                type:e,
                isSimulated:!0,
                originalEvent:{}
            });
            r ? ut.event.trigger(i, null, t) :ut.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, ut.removeEvent = G.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } :function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === X && (e[r] = null), e.detachEvent(r, n));
    }, ut.Event = function(e, t) {
        return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u :l) :this.type = e, 
        t && ut.extend(this, t), this.timeStamp = e && e.timeStamp || ut.now(), this[ut.expando] = !0, 
        void 0) :new ut.Event(e, t);
    }, ut.Event.prototype = {
        isDefaultPrevented:l,
        isPropagationStopped:l,
        isImmediatePropagationStopped:l,
        preventDefault:function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() :e.returnValue = !1);
        },
        stopPropagation:function() {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
        },
        stopImmediatePropagation:function() {
            this.isImmediatePropagationStopped = u, this.stopPropagation();
        }
    }, ut.each({
        mouseenter:"mouseover",
        mouseleave:"mouseout"
    }, function(e, t) {
        ut.event.special[e] = {
            delegateType:t,
            bindType:t,
            handle:function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !ut.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), ut.support.submitBubbles || (ut.event.special.submit = {
        setup:function() {
            return ut.nodeName(this, "form") ? !1 :(ut.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, r = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form :t;
                r && !ut._data(r, "submitBubbles") && (ut.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), ut._data(r, "submitBubbles", !0));
            }), void 0);
        },
        postDispatch:function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown:function() {
            return ut.nodeName(this, "form") ? !1 :(ut.event.remove(this, "._submit"), void 0);
        }
    }), ut.support.changeBubbles || (ut.event.special.change = {
        setup:function() {
            return Rt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
            }), ut.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, e, !0);
            })), !1) :(ut.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Rt.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0);
                }), ut._data(t, "changeBubbles", !0));
            }), void 0);
        },
        handle:function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) :void 0;
        },
        teardown:function() {
            return ut.event.remove(this, "._change"), !Rt.test(this.nodeName);
        }
    }), ut.support.focusinBubbles || ut.each({
        focus:"focusin",
        blur:"focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            ut.event.simulate(t, e.target, ut.event.fix(e), !0);
        };
        ut.event.special[t] = {
            setup:function() {
                0 === n++ && G.addEventListener(e, r, !0);
            },
            teardown:function() {
                0 === --n && G.removeEventListener(e, r, !0);
            }
        };
    }), ut.fn.extend({
        on:function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this;
            }
            if (null == r && null == i ? (i = n, r = n = t) :null == i && ("string" == typeof n ? (i = r, 
            r = t) :(i = r, r = n, n = t)), i === !1) i = l; else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return ut().off(e), s.apply(this, arguments);
            }, i.guid = s.guid || (s.guid = ut.guid++)), this.each(function() {
                ut.event.add(this, e, i, r, n);
            });
        },
        one:function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off:function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ut(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace :i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this;
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = l), 
            this.each(function() {
                ut.event.remove(this, e, r, n);
            });
        },
        bind:function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind:function(e, t) {
            return this.off(e, null, t);
        },
        delegate:function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate:function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") :this.off(t, e || "**", n);
        },
        trigger:function(e, t) {
            return this.each(function() {
                ut.event.trigger(e, t, this);
            });
        },
        triggerHandler:function(e, t) {
            var n = this[0];
            return n ? ut.event.trigger(e, t, n, !0) :void 0;
        }
    }), /*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
    function(e, t) {
        function n(e) {
            return ht.test(e + "");
        }
        function r() {
            var e, t = [];
            return e = function(n, r) {
                return t.push(n += " ") > N.cacheLength && delete e[t.shift()], e[n] = r;
            };
        }
        function i(e) {
            return e[B] = !0, e;
        }
        function o(e) {
            var t = D.createElement("div");
            try {
                return e(t);
            } catch (n) {
                return !1;
            } finally {
                t = null;
            }
        }
        function a(e, t, n, r) {
            var i, o, a, s, u, l, c, d, h, g;
            if ((t ? t.ownerDocument || t :I) !== D && L(t), t = t || D, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (!O && !r) {
                if (i = gt.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o), n;
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && H(t, o) && o.id === a) return n.push(o), 
                    n;
                } else {
                    if (i[2]) return Q.apply(n, K.call(t.getElementsByTagName(e), 0)), n;
                    if ((a = i[3]) && P.getByClassName && t.getElementsByClassName) return Q.apply(n, K.call(t.getElementsByClassName(a), 0)), 
                    n;
                }
                if (P.qsa && !F.test(e)) {
                    if (c = !0, d = B, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = f(e), (c = t.getAttribute("id")) ? d = c.replace(vt, "\\$&") :t.setAttribute("id", d), 
                        d = "[id='" + d + "'] ", u = l.length; u--; ) l[u] = d + p(l[u]);
                        h = dt.test(e) && t.parentNode || t, g = l.join(",");
                    }
                    if (g) try {
                        return Q.apply(n, K.call(h.querySelectorAll(g), 0)), n;
                    } catch (m) {} finally {
                        c || t.removeAttribute("id");
                    }
                }
            }
            return x(e.replace(at, "$1"), t, n, r);
        }
        function s(e, t) {
            var n = t && e, r = n && (~t.sourceIndex || G) - (~e.sourceIndex || G);
            if (r) return r;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 :-1;
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function f(e, t) {
            var n, r, i, o, s, u, l, c = z[e + " "];
            if (c) return t ? 0 :c.slice(0);
            for (s = e, u = [], l = N.preFilter; s; ) {
                (!n || (r = st.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(i = [])), 
                n = !1, (r = lt.exec(s)) && (n = r.shift(), i.push({
                    value:n,
                    type:r[0].replace(at, " ")
                }), s = s.slice(n.length));
                for (o in N.filter) !(r = pt[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), 
                i.push({
                    value:n,
                    type:o,
                    matches:r
                }), s = s.slice(n.length));
                if (!n) break;
            }
            return t ? s.length :s ? a.error(e) :z(e, u).slice(0);
        }
        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r;
        }
        function d(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = W++;
            return t.first ? function(t, n, o) {
                for (;t = t[r]; ) if (1 === t.nodeType || i) return e(t, n, o);
            } :function(t, n, a) {
                var s, u, l, c = U + " " + o;
                if (a) {
                    for (;t = t[r]; ) if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
                } else for (;t = t[r]; ) if (1 === t.nodeType || i) if (l = t[B] || (t[B] = {}), 
                (u = l[r]) && u[0] === c) {
                    if ((s = u[1]) === !0 || s === E) return s === !0;
                } else if (u = l[r] = [ c ], u[1] = e(t, n, a) || E, u[1] === !0) return !0;
            };
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
            } :e[0];
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), 
            l && t.push(s));
            return a;
        }
        function m(e, t, n, r, o, a) {
            return r && !r[B] && (r = m(r)), o && !o[B] && (o = m(o, a)), i(function(i, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, m = i || b(t || "*", s.nodeType ? [ s ] :s, []), y = !e || !i && t ? m :g(m, p, e, s, u), v = n ? o || (i ? e :h || r) ? [] :a :y;
                if (n && n(y, v, s, u), r) for (l = g(v, d), r(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = v.length; c--; ) (f = v[c]) && l.push(y[c] = f);
                            o(null, v = [], l, u);
                        }
                        for (c = v.length; c--; ) (f = v[c]) && (l = o ? Z.call(i, f) :p[c]) > -1 && (i[l] = !(a[l] = f));
                    }
                } else v = g(v === a ? v.splice(h, v.length) :v), o ? o(null, a, v, u) :Q.apply(a, v);
            });
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = N.relative[e[0].type], a = o || N.relative[" "], s = o ? 1 :0, u = d(function(e) {
                return e === t;
            }, a, !0), l = d(function(e) {
                return Z.call(t, e) > -1;
            }, a, !0), c = [ function(e, n, r) {
                return !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) :l(e, n, r));
            } ]; i > s; s++) if (n = N.relative[e[s].type]) c = [ d(h(c), n) ]; else {
                if (n = N.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                    for (r = ++s; i > r && !N.relative[e[r].type]; r++) ;
                    return m(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1)).replace(at, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e));
                }
                c.push(n);
            }
            return h(c);
        }
        function v(e, t) {
            var n = 0, r = t.length > 0, o = e.length > 0, s = function(i, s, u, l, c) {
                var f, p, d, h = [], m = 0, y = "0", v = i && [], b = null != c, x = A, w = i || o && N.find.TAG("*", c && s.parentNode || s), T = U += null == x ? 1 :Math.random() || .1;
                for (b && (A = s !== D && s, E = n); null != (f = w[y]); y++) {
                    if (o && f) {
                        for (p = 0; d = e[p++]; ) if (d(f, s, u)) {
                            l.push(f);
                            break;
                        }
                        b && (U = T, E = ++n);
                    }
                    r && ((f = !d && f) && m--, i && v.push(f));
                }
                if (m += y, r && y !== m) {
                    for (p = 0; d = t[p++]; ) d(v, h, s, u);
                    if (i) {
                        if (m > 0) for (;y--; ) v[y] || h[y] || (h[y] = Y.call(l));
                        h = g(h);
                    }
                    Q.apply(l, h), b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(l);
                }
                return b && (U = T, A = x), v;
            };
            return r ? i(s) :s;
        }
        function b(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++) a(e, t[r], n);
            return n;
        }
        function x(e, t, n, r) {
            var i, o, a, s, u, l = f(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !O && N.relative[o[1].type]) {
                    if (t = N.find.ID(a.matches[0].replace(xt, wt), t)[0], !t) return n;
                    e = e.slice(o.shift().value.length);
                }
                for (i = pt.needsContext.test(e) ? 0 :o.length; i-- && (a = o[i], !N.relative[s = a.type]); ) if ((u = N.find[s]) && (r = u(a.matches[0].replace(xt, wt), dt.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && p(o), !e) return Q.apply(n, K.call(r, 0)), n;
                    break;
                }
            }
            return k(e, l)(r, t, O, n, dt.test(e)), n;
        }
        function w() {}
        var T, E, N, C, _, k, S, A, L, D, j, O, F, M, R, H, q, B = "sizzle" + -new Date(), I = e.document, P = {}, U = 0, W = 0, $ = r(), z = r(), V = r(), X = typeof t, G = 1 << 31, J = [], Y = J.pop, Q = J.push, K = J.slice, Z = J.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
            return -1;
        }, et = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", nt = tt.replace("w", "w#"), rt = "([*^$|!~]?=)", it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]", ot = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)", at = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"), st = new RegExp("^" + et + "*," + et + "*"), lt = new RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"), ct = new RegExp(ot), ft = new RegExp("^" + nt + "$"), pt = {
            ID:new RegExp("^#(" + tt + ")"),
            CLASS:new RegExp("^\\.(" + tt + ")"),
            NAME:new RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
            TAG:new RegExp("^(" + tt.replace("w", "w*") + ")"),
            ATTR:new RegExp("^" + it),
            PSEUDO:new RegExp("^" + ot),
            CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
            needsContext:new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
        }, dt = /[\x20\t\r\n\f]*[+~]/, ht = /^[^{]+\{\s*\[native code/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /^(?:input|select|textarea|button)$/i, yt = /^h\d$/i, vt = /'|\\/g, bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, wt = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t :0 > n ? String.fromCharCode(n + 65536) :String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
        };
        try {
            K.call(I.documentElement.childNodes, 0)[0].nodeType;
        } catch (Tt) {
            K = function(e) {
                for (var t, n = []; t = this[e++]; ) n.push(t);
                return n;
            };
        }
        _ = a.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName :!1;
        }, L = a.setDocument = function(e) {
            var r = e ? e.ownerDocument || e :I;
            return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, j = r.documentElement, 
            O = _(r), P.tagNameNoComments = o(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length;
            }), P.attributes = o(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t;
            }), P.getByClassName = o(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 
                2 === e.getElementsByClassName("e").length) :!1;
            }), P.getByName = o(function(e) {
                e.id = B + 0, e.innerHTML = "<a name='" + B + "'></a><div name='" + B + "'></div>", 
                j.insertBefore(e, j.firstChild);
                var t = r.getElementsByName && r.getElementsByName(B).length === 2 + r.getElementsByName(B + 0).length;
                return P.getIdNotName = !r.getElementById(B), j.removeChild(e), t;
            }), N.attrHandle = o(function(e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== X && "#" === e.firstChild.getAttribute("href");
            }) ? {} :{
                href:function(e) {
                    return e.getAttribute("href", 2);
                },
                type:function(e) {
                    return e.getAttribute("type");
                }
            }, P.getIdNotName ? (N.find.ID = function(e, t) {
                if (typeof t.getElementById !== X && !O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] :[];
                }
            }, N.filter.ID = function(e) {
                var t = e.replace(xt, wt);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) :(N.find.ID = function(e, n) {
                if (typeof n.getElementById !== X && !O) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== X && r.getAttributeNode("id").value === e ? [ r ] :t :[];
                }
            }, N.filter.ID = function(e) {
                var t = e.replace(xt, wt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), N.find.TAG = P.tagNameNoComments ? function(e, t) {
                return typeof t.getElementsByTagName !== X ? t.getElementsByTagName(e) :void 0;
            } :function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, N.find.NAME = P.getByName && function(e, t) {
                return typeof t.getElementsByName !== X ? t.getElementsByName(name) :void 0;
            }, N.find.CLASS = P.getByClassName && function(e, t) {
                return typeof t.getElementsByClassName === X || O ? void 0 :t.getElementsByClassName(e);
            }, M = [], F = [ ":focus" ], (P.qsa = n(r.querySelectorAll)) && (o(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || F.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), 
                e.querySelectorAll(":checked").length || F.push(":checked");
            }), o(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && F.push("[*^$]=" + et + "*(?:\"\"|'')"), 
                e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                F.push(",.*:");
            })), (P.matchesSelector = n(R = j.matchesSelector || j.mozMatchesSelector || j.webkitMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function(e) {
                P.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), M.push("!=", ot);
            }), F = new RegExp(F.join("|")), M = new RegExp(M.join("|")), H = n(j.contains) || j.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement :e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) :e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } :function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, q = j.compareDocumentPosition ? function(e, t) {
                var n;
                return e === t ? (S = !0, 0) :(n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || H(I, e) ? -1 :t === r || H(I, t) ? 1 :0 :4 & n ? -1 :1 :e.compareDocumentPosition ? -1 :1;
            } :function(e, t) {
                var n, i = 0, o = e.parentNode, a = t.parentNode, u = [ e ], l = [ t ];
                if (e === t) return S = !0, 0;
                if (!o || !a) return e === r ? -1 :t === r ? 1 :o ? -1 :a ? 1 :0;
                if (o === a) return s(e, t);
                for (n = e; n = n.parentNode; ) u.unshift(n);
                for (n = t; n = n.parentNode; ) l.unshift(n);
                for (;u[i] === l[i]; ) i++;
                return i ? s(u[i], l[i]) :u[i] === I ? -1 :l[i] === I ? 1 :0;
            }, S = !1, [ 0, 0 ].sort(q), P.detectDuplicates = S, D) :D;
        }, a.matches = function(e, t) {
            return a(e, null, null, t);
        }, a.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== D && L(e), t = t.replace(bt, "='$1']"), !(!P.matchesSelector || O || M && M.test(t) || F.test(t))) try {
                var n = R.call(e, t);
                if (n || P.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (r) {}
            return a(t, D, null, [ e ]).length > 0;
        }, a.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && L(e), H(e, t);
        }, a.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== D && L(e), O || (t = t.toLowerCase()), (n = N.attrHandle[t]) ? n(e) :O || P.attributes ? e.getAttribute(t) :((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t :n && n.specified ? n.value :null;
        }, a.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, a.uniqueSort = function(e) {
            var t, n = [], r = 1, i = 0;
            if (S = !P.detectDuplicates, e.sort(q), S) {
                for (;t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                for (;i--; ) e.splice(n[i], 1);
            }
            return e;
        }, C = a.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (;t = e[r]; r++) n += C(t);
            return n;
        }, N = a.selectors = {
            cacheLength:50,
            createPseudo:i,
            match:pt,
            find:{},
            relative:{
                ">":{
                    dir:"parentNode",
                    first:!0
                },
                " ":{
                    dir:"parentNode"
                },
                "+":{
                    dir:"previousSibling",
                    first:!0
                },
                "~":{
                    dir:"previousSibling"
                }
            },
            preFilter:{
                ATTR:function(e) {
                    return e[1] = e[1].replace(xt, wt), e[3] = (e[4] || e[5] || "").replace(xt, wt), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD:function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) :2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) :e[3] && a.error(e[0]), 
                    e;
                },
                PSEUDO:function(e) {
                    var t, n = !e[5] && e[2];
                    return pt.CHILD.test(e[0]) ? null :(e[4] ? e[2] = e[4] :n && ct.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter:{
                TAG:function(e) {
                    return "*" === e ? function() {
                        return !0;
                    } :(e = e.replace(xt, wt).toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    });
                },
                CLASS:function(e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && $(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "");
                    });
                },
                ATTR:function(e, t, n) {
                    return function(r) {
                        var i = a.attr(r, e);
                        return null == i ? "!=" === t :t ? (i += "", "=" === t ? i === n :"!=" === t ? i !== n :"^=" === t ? n && 0 === i.indexOf(n) :"*=" === t ? n && i.indexOf(n) > -1 :"$=" === t ? n && i.slice(-n.length) === n :"~=" === t ? (" " + i + " ").indexOf(n) > -1 :"|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" :!1) :!0;
                    };
                },
                CHILD:function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } :function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" :"previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s;
                        if (m) {
                            if (o) {
                                for (;g; ) {
                                    for (f = t; f = f[g]; ) if (s ? f.nodeName.toLowerCase() === y :1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ a ? m.firstChild :m.lastChild ], a && v) {
                                for (c = m[B] || (m[B] = {}), l = c[e] || [], d = l[0] === U && l[1], p = l[0] === U && l[2], 
                                f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop(); ) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [ U, d, p ];
                                    break;
                                }
                            } else if (v && (l = (t[B] || (t[B] = {}))[e]) && l[0] === U) p = l[1]; else for (;(f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y :1 !== f.nodeType) || !++p || (v && ((f[B] || (f[B] = {}))[e] = [ U, p ]), 
                            f !== t)); ) ;
                            return p -= i, p === r || p % r === 0 && p / r >= 0;
                        }
                    };
                },
                PSEUDO:function(e, t) {
                    var n, r = N.pseudos[e] || N.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                    return r[B] ? r(t) :r.length > 1 ? (n = [ e, e, "", t ], N.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                        for (var i, o = r(e, t), a = o.length; a--; ) i = Z.call(e, o[a]), e[i] = !(n[i] = o[a]);
                    }) :function(e) {
                        return r(e, 0, n);
                    }) :r;
                }
            },
            pseudos:{
                not:i(function(e) {
                    var t = [], n = [], r = k(e.replace(at, "$1"));
                    return r[B] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                    }) :function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop();
                    };
                }),
                has:i(function(e) {
                    return function(t) {
                        return a(e, t).length > 0;
                    };
                }),
                contains:i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
                    };
                }),
                lang:i(function(e) {
                    return ft.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(xt, wt).toLowerCase(), 
                    function(t) {
                        var n;
                        do if (n = O ? t.getAttribute("xml:lang") || t.getAttribute("lang") :t.lang) return n = n.toLowerCase(), 
                        n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target:function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root:function(e) {
                    return e === j;
                },
                focus:function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled:function(e) {
                    return e.disabled === !1;
                },
                disabled:function(e) {
                    return e.disabled === !0;
                },
                checked:function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected:function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty:function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0;
                },
                parent:function(e) {
                    return !N.pseudos.empty(e);
                },
                header:function(e) {
                    return yt.test(e.nodeName);
                },
                input:function(e) {
                    return mt.test(e.nodeName);
                },
                button:function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text:function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
                },
                first:c(function() {
                    return [ 0 ];
                }),
                last:c(function(e, t) {
                    return [ t - 1 ];
                }),
                eq:c(function(e, t, n) {
                    return [ 0 > n ? n + t :n ];
                }),
                even:c(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e;
                }),
                odd:c(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e;
                }),
                lt:c(function(e, t, n) {
                    for (var r = 0 > n ? n + t :n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt:c(function(e, t, n) {
                    for (var r = 0 > n ? n + t :n; ++r < t; ) e.push(r);
                    return e;
                })
            }
        };
        for (T in {
            radio:!0,
            checkbox:!0,
            file:!0,
            password:!0,
            image:!0
        }) N.pseudos[T] = u(T);
        for (T in {
            submit:!0,
            reset:!0
        }) N.pseudos[T] = l(T);
        k = a.compile = function(e, t) {
            var n, r = [], i = [], o = V[e + " "];
            if (!o) {
                for (t || (t = f(e)), n = t.length; n--; ) o = y(t[n]), o[B] ? r.push(o) :i.push(o);
                o = V(e, v(i, r));
            }
            return o;
        }, N.pseudos.nth = N.pseudos.eq, N.filters = w.prototype = N.pseudos, N.setFilters = new w(), 
        L(), a.attr = ut.attr, ut.find = a, ut.expr = a.selectors, ut.expr[":"] = ut.expr.pseudos, 
        ut.unique = a.uniqueSort, ut.text = a.getText, ut.isXMLDoc = a.isXML, ut.contains = a.contains;
    }(e);
    var Pt = /Until$/, Ut = /^(?:parents|prev(?:Until|All))/, Wt = /^.[^:#\[\.,]*$/, $t = ut.expr.match.needsContext, zt = {
        children:!0,
        contents:!0,
        next:!0,
        prev:!0
    };
    ut.fn.extend({
        find:function(e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(ut(e).filter(function() {
                for (t = 0; i > t; t++) if (ut.contains(r[t], this)) return !0;
            }));
            for (n = [], t = 0; i > t; t++) ut.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? ut.unique(n) :n), n.selector = (this.selector ? this.selector + " " :"") + e, 
            n;
        },
        has:function(e) {
            var t, n = ut(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (ut.contains(this, n[t])) return !0;
            });
        },
        not:function(e) {
            return this.pushStack(f(this, e, !1));
        },
        filter:function(e) {
            return this.pushStack(f(this, e, !0));
        },
        is:function(e) {
            return !!e && ("string" == typeof e ? $t.test(e) ? ut(e, this.context).index(this[0]) >= 0 :ut.filter(e, this).length > 0 :this.filter(e).length > 0);
        },
        closest:function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = $t.test(e) || "string" != typeof e ? ut(e, t || this.context) :0; i > r; r++) for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType; ) {
                if (a ? a.index(n) > -1 :ut.find.matchesSelector(n, e)) {
                    o.push(n);
                    break;
                }
                n = n.parentNode;
            }
            return this.pushStack(o.length > 1 ? ut.unique(o) :o);
        },
        index:function(e) {
            return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) :ut.inArray(e.jquery ? e[0] :e, this) :this[0] && this[0].parentNode ? this.first().prevAll().length :-1;
        },
        add:function(e, t) {
            var n = "string" == typeof e ? ut(e, t) :ut.makeArray(e && e.nodeType ? [ e ] :e), r = ut.merge(this.get(), n);
            return this.pushStack(ut.unique(r));
        },
        addBack:function(e) {
            return this.add(null == e ? this.prevObject :this.prevObject.filter(e));
        }
    }), ut.fn.andSelf = ut.fn.addBack, ut.each({
        parent:function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t :null;
        },
        parents:function(e) {
            return ut.dir(e, "parentNode");
        },
        parentsUntil:function(e, t, n) {
            return ut.dir(e, "parentNode", n);
        },
        next:function(e) {
            return c(e, "nextSibling");
        },
        prev:function(e) {
            return c(e, "previousSibling");
        },
        nextAll:function(e) {
            return ut.dir(e, "nextSibling");
        },
        prevAll:function(e) {
            return ut.dir(e, "previousSibling");
        },
        nextUntil:function(e, t, n) {
            return ut.dir(e, "nextSibling", n);
        },
        prevUntil:function(e, t, n) {
            return ut.dir(e, "previousSibling", n);
        },
        siblings:function(e) {
            return ut.sibling((e.parentNode || {}).firstChild, e);
        },
        children:function(e) {
            return ut.sibling(e.firstChild);
        },
        contents:function(e) {
            return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document :ut.merge([], e.childNodes);
        }
    }, function(e, t) {
        ut.fn[e] = function(n, r) {
            var i = ut.map(this, t, n);
            return Pt.test(e) || (r = n), r && "string" == typeof r && (i = ut.filter(r, i)), 
            i = this.length > 1 && !zt[e] ? ut.unique(i) :i, this.length > 1 && Ut.test(e) && (i = i.reverse()), 
            this.pushStack(i);
        };
    }), ut.extend({
        filter:function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? ut.find.matchesSelector(t[0], e) ? [ t[0] ] :[] :ut.find.matches(e, t);
        },
        dir:function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ut(o).is(r)); ) 1 === o.nodeType && i.push(o), 
            o = o[n];
            return i;
        },
        sibling:function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    });
    var Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Xt = / jQuery\d+="(?:null|\d+)"/g, Gt = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"), Jt = /^\s+/, Yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Qt = /<([\w:]+)/, Kt = /<tbody/i, Zt = /<|&#?\w+;/, en = /<(?:script|style|link)/i, tn = /^(?:checkbox|radio)$/i, nn = /checked\s*(?:[^=]|=\s*.checked.)/i, rn = /^$|\/(?:java|ecma)script/i, on = /^true\/(.*)/, an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, sn = {
        option:[ 1, "<select multiple='multiple'>", "</select>" ],
        legend:[ 1, "<fieldset>", "</fieldset>" ],
        area:[ 1, "<map>", "</map>" ],
        param:[ 1, "<object>", "</object>" ],
        thead:[ 1, "<table>", "</table>" ],
        tr:[ 2, "<table><tbody>", "</tbody></table>" ],
        col:[ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td:[ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default:ut.support.htmlSerialize ? [ 0, "", "" ] :[ 1, "X<div>", "</div>" ]
    }, un = p(G), ln = un.appendChild(G.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, 
    sn.th = sn.td, ut.fn.extend({
        text:function(e) {
            return ut.access(this, function(e) {
                return e === t ? ut.text(this) :this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e));
            }, null, e, arguments.length);
        },
        wrapAll:function(e) {
            if (ut.isFunction(e)) return this.each(function(t) {
                ut(this).wrapAll(e.call(this, t));
            });
            if (this[0]) {
                var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner:function(e) {
            return ut.isFunction(e) ? this.each(function(t) {
                ut(this).wrapInner(e.call(this, t));
            }) :this.each(function() {
                var t = ut(this), n = t.contents();
                n.length ? n.wrapAll(e) :t.append(e);
            });
        },
        wrap:function(e) {
            var t = ut.isFunction(e);
            return this.each(function(n) {
                ut(this).wrapAll(t ? e.call(this, n) :e);
            });
        },
        unwrap:function() {
            return this.parent().each(function() {
                ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes);
            }).end();
        },
        append:function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e);
            });
        },
        prepend:function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild);
            });
        },
        before:function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after:function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove:function(e, t) {
            for (var n, r = 0; null != (n = this[r]); r++) (!e || ut.filter(e, [ n ]).length > 0) && (t || 1 !== n.nodeType || ut.cleanData(b(n)), 
            n.parentNode && (t && ut.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)));
            return this;
        },
        empty:function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ut.cleanData(b(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
                e.options && ut.nodeName(e, "select") && (e.options.length = 0);
            }
            return this;
        },
        clone:function(e, t) {
            return e = null == e ? !1 :e, t = null == t ? e :t, this.map(function() {
                return ut.clone(this, e, t);
            });
        },
        html:function(e) {
            return ut.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Xt, "") :t;
                if (!("string" != typeof e || en.test(e) || !ut.support.htmlSerialize && Gt.test(e) || !ut.support.leadingWhitespace && Jt.test(e) || sn[(Qt.exec(e) || [ "", "" ])[1].toLowerCase()])) {
                    e = e.replace(Yt, "<$1></$2>");
                    try {
                        for (;i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ut.cleanData(b(n, !1)), 
                        n.innerHTML = e);
                        n = 0;
                    } catch (o) {}
                }
                n && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith:function(e) {
            var t = ut.isFunction(e);
            return t || "string" == typeof e || (e = ut(e).not(this).detach()), this.domManip([ e ], !0, function(e) {
                var t = this.nextSibling, n = this.parentNode;
                n && (ut(this).remove(), n.insertBefore(e, t));
            });
        },
        detach:function(e) {
            return this.remove(e, !0);
        },
        domManip:function(e, n, r) {
            e = tt.apply([], e);
            var i, o, a, s, u, l, c = 0, f = this.length, p = this, m = f - 1, y = e[0], v = ut.isFunction(y);
            if (v || !(1 >= f || "string" != typeof y || ut.support.checkClone) && nn.test(y)) return this.each(function(i) {
                var o = p.eq(i);
                v && (e[0] = y.call(this, i, n ? o.html() :t)), o.domManip(e, n, r);
            });
            if (f && (l = ut.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 
            1 === l.childNodes.length && (l = i), i)) {
                for (n = n && ut.nodeName(i, "tr"), s = ut.map(b(l, "script"), h), a = s.length; f > c; c++) o = l, 
                c !== m && (o = ut.clone(o, !0, !0), a && ut.merge(s, b(o, "script"))), r.call(n && ut.nodeName(this[c], "table") ? d(this[c], "tbody") :this[c], o, c);
                if (a) for (u = s[s.length - 1].ownerDocument, ut.map(s, g), c = 0; a > c; c++) o = s[c], 
                rn.test(o.type || "") && !ut._data(o, "globalEval") && ut.contains(u, o) && (o.src ? ut.ajax({
                    url:o.src,
                    type:"GET",
                    dataType:"script",
                    async:!1,
                    global:!1,
                    "throws":!0
                }) :ut.globalEval((o.text || o.textContent || o.innerHTML || "").replace(an, "")));
                l = i = null;
            }
            return this;
        }
    }), ut.each({
        appendTo:"append",
        prependTo:"prepend",
        insertBefore:"before",
        insertAfter:"after",
        replaceAll:"replaceWith"
    }, function(e, t) {
        ut.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = ut(e), a = o.length - 1; a >= r; r++) n = r === a ? this :this.clone(!0), 
            ut(o[r])[t](n), nt.apply(i, n.get());
            return this.pushStack(i);
        };
    }), ut.extend({
        clone:function(e, t, n) {
            var r, i, o, a, s, u = ut.contains(e.ownerDocument, e);
            if (ut.support.html5Clone || ut.isXMLDoc(e) || !Gt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) :(ln.innerHTML = e.outerHTML, 
            ln.removeChild(o = ln.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e))) for (r = b(o), 
            s = b(e), a = 0; null != (i = s[a]); ++a) r[a] && v(i, r[a]);
            if (t) if (n) for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++) y(i, r[a]); else y(e, o);
            return r = b(o, "script"), r.length > 0 && m(r, !u && b(e, "script")), r = s = i = null, 
            o;
        },
        buildFragment:function(e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length, d = p(t), h = [], g = 0; f > g; g++) if (o = e[g], 
            o || 0 === o) if ("object" === ut.type(o)) ut.merge(h, o.nodeType ? [ o ] :o); else if (Zt.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), u = (Qt.exec(o) || [ "", "" ])[1].toLowerCase(), 
                c = sn[u] || sn._default, s.innerHTML = c[1] + o.replace(Yt, "<$1></$2>") + c[2], 
                i = c[0]; i--; ) s = s.lastChild;
                if (!ut.support.leadingWhitespace && Jt.test(o) && h.push(t.createTextNode(Jt.exec(o)[0])), 
                !ut.support.tbody) for (o = "table" !== u || Kt.test(o) ? "<table>" !== c[1] || Kt.test(o) ? 0 :s :s.firstChild, 
                i = o && o.childNodes.length; i--; ) ut.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ut.merge(h, s.childNodes), s.textContent = ""; s.firstChild; ) s.removeChild(s.firstChild);
                s = d.lastChild;
            } else h.push(t.createTextNode(o));
            for (s && d.removeChild(s), ut.support.appendChecked || ut.grep(b(h, "input"), x), 
            g = 0; o = h[g++]; ) if ((!r || -1 === ut.inArray(o, r)) && (a = ut.contains(o.ownerDocument, o), 
            s = b(d.appendChild(o), "script"), a && m(s), n)) for (i = 0; o = s[i++]; ) rn.test(o.type || "") && n.push(o);
            return s = null, d;
        },
        cleanData:function(e, t) {
            for (var n, r, i, o, a = 0, s = ut.expando, u = ut.cache, l = ut.support.deleteExpando, c = ut.event.special; null != (n = e[a]); a++) if ((t || ut.acceptData(n)) && (i = n[s], 
            o = i && u[i])) {
                if (o.events) for (r in o.events) c[r] ? ut.event.remove(n, r) :ut.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], l ? delete n[s] :typeof n.removeAttribute !== X ? n.removeAttribute(s) :n[s] = null, 
                Z.push(i));
            }
        }
    });
    var cn, fn, pn, dn = /alpha\([^)]*\)/i, hn = /opacity\s*=\s*([^)]*)/, gn = /^(top|right|bottom|left)$/, mn = /^(none|table(?!-c[ea]).+)/, yn = /^margin/, vn = new RegExp("^(" + lt + ")(.*)$", "i"), bn = new RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"), xn = new RegExp("^([+-])=(" + lt + ")", "i"), wn = {
        BODY:"block"
    }, Tn = {
        position:"absolute",
        visibility:"hidden",
        display:"block"
    }, En = {
        letterSpacing:0,
        fontWeight:400
    }, Nn = [ "Top", "Right", "Bottom", "Left" ], Cn = [ "Webkit", "O", "Moz", "ms" ];
    ut.fn.extend({
        css:function(e, n) {
            return ut.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (ut.isArray(n)) {
                    for (o = fn(e), i = n.length; i > s; s++) a[n[s]] = ut.css(e, n[s], !1, o);
                    return a;
                }
                return r !== t ? ut.style(e, n, r) :ut.css(e, n);
            }, e, n, arguments.length > 1);
        },
        show:function() {
            return E(this, !0);
        },
        hide:function() {
            return E(this);
        },
        toggle:function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e :T(this)) ? ut(this).show() :ut(this).hide();
            });
        }
    }), ut.extend({
        cssHooks:{
            opacity:{
                get:function(e, t) {
                    if (t) {
                        var n = pn(e, "opacity");
                        return "" === n ? "1" :n;
                    }
                }
            }
        },
        cssNumber:{
            columnCount:!0,
            fillOpacity:!0,
            fontWeight:!0,
            lineHeight:!0,
            opacity:!0,
            orphans:!0,
            widows:!0,
            zIndex:!0,
            zoom:!0
        },
        cssProps:{
            "float":ut.support.cssFloat ? "cssFloat" :"styleFloat"
        },
        style:function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = ut.camelCase(n), l = e.style;
                if (n = ut.cssProps[u] || (ut.cssProps[u] = w(l, u)), s = ut.cssHooks[n] || ut.cssHooks[u], 
                r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o :l[n];
                if (a = typeof r, "string" === a && (o = xn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ut.css(e, n)), 
                a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ut.cssNumber[u] || (r += "px"), 
                ut.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), 
                s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r;
                } catch (c) {}
            }
        },
        css:function(e, n, r, i) {
            var o, a, s, u = ut.camelCase(n);
            return n = ut.cssProps[u] || (ut.cssProps[u] = w(e.style, u)), s = ut.cssHooks[n] || ut.cssHooks[u], 
            s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = pn(e, n, i)), "normal" === a && n in En && (a = En[n]), 
            "" === r || r ? (o = parseFloat(a), r === !0 || ut.isNumeric(o) ? o || 0 :a) :a;
        },
        swap:function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        }
    }), e.getComputedStyle ? (fn = function(t) {
        return e.getComputedStyle(t, null);
    }, pn = function(e, n, r) {
        var i, o, a, s = r || fn(e), u = s ? s.getPropertyValue(n) || s[n] :t, l = e.style;
        return s && ("" !== u || ut.contains(e.ownerDocument, e) || (u = ut.style(e, n)), 
        bn.test(u) && yn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, 
        u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u;
    }) :G.documentElement.currentStyle && (fn = function(e) {
        return e.currentStyle;
    }, pn = function(e, n, r) {
        var i, o, a, s = r || fn(e), u = s ? s[n] :t, l = e.style;
        return null == u && l && l[n] && (u = l[n]), bn.test(u) && !gn.test(n) && (i = l.left, 
        o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" :u, 
        u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" :u;
    }), ut.each([ "height", "width" ], function(e, t) {
        ut.cssHooks[t] = {
            get:function(e, n, r) {
                return n ? 0 === e.offsetWidth && mn.test(ut.css(e, "display")) ? ut.swap(e, Tn, function() {
                    return _(e, t, r);
                }) :_(e, t, r) :void 0;
            },
            set:function(e, n, r) {
                var i = r && fn(e);
                return N(e, n, r ? C(e, t, r, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, i), i) :0);
            }
        };
    }), ut.support.opacity || (ut.cssHooks.opacity = {
        get:function(e, t) {
            return hn.test((t && e.currentStyle ? e.currentStyle.filter :e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" :t ? "1" :"";
        },
        set:function(e, t) {
            var n = e.style, r = e.currentStyle, i = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" :"", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ut.trim(o.replace(dn, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
            "" === t || r && !r.filter) || (n.filter = dn.test(o) ? o.replace(dn, i) :o + " " + i);
        }
    }), ut(function() {
        ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
            get:function(e, t) {
                return t ? ut.swap(e, {
                    display:"inline-block"
                }, pn, [ e, "marginRight" ]) :void 0;
            }
        }), !ut.support.pixelPosition && ut.fn.position && ut.each([ "top", "left" ], function(e, t) {
            ut.cssHooks[t] = {
                get:function(e, n) {
                    return n ? (n = pn(e, t), bn.test(n) ? ut(e).position()[t] + "px" :n) :void 0;
                }
            };
        });
    }), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"));
    }, ut.expr.filters.visible = function(e) {
        return !ut.expr.filters.hidden(e);
    }), ut.each({
        margin:"",
        padding:"",
        border:"Width"
    }, function(e, t) {
        ut.cssHooks[e + t] = {
            expand:function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") :[ n ]; 4 > r; r++) i[e + Nn[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, yn.test(e) || (ut.cssHooks[e + t].set = N);
    });
    var _n = /%20/g, kn = /\[\]$/, Sn = /\r?\n/g, An = /^(?:submit|button|image|reset|file)$/i, Ln = /^(?:input|select|textarea|keygen)/i;
    ut.fn.extend({
        serialize:function() {
            return ut.param(this.serializeArray());
        },
        serializeArray:function() {
            return this.map(function() {
                var e = ut.prop(this, "elements");
                return e ? ut.makeArray(e) :this;
            }).filter(function() {
                var e = this.type;
                return this.name && !ut(this).is(":disabled") && Ln.test(this.nodeName) && !An.test(e) && (this.checked || !tn.test(e));
            }).map(function(e, t) {
                var n = ut(this).val();
                return null == n ? null :ut.isArray(n) ? ut.map(n, function(e) {
                    return {
                        name:t.name,
                        value:e.replace(Sn, "\r\n")
                    };
                }) :{
                    name:t.name,
                    value:n.replace(Sn, "\r\n")
                };
            }).get();
        }
    }), ut.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = ut.isFunction(t) ? t() :null == t ? "" :t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e)) ut.each(e, function() {
            o(this.name, this.value);
        }); else for (r in e) A(r, e[r], n, o);
        return i.join("&").replace(_n, "+");
    }, ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ut.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) :this.trigger(t);
        };
    }), ut.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
    };
    var Dn, jn, On = ut.now(), Fn = /\?/, Mn = /#.*$/, Rn = /([?&])_=[^&]*/, Hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, qn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Bn = /^(?:GET|HEAD)$/, In = /^\/\//, Pn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Un = ut.fn.load, Wn = {}, $n = {}, zn = "*/".concat("*");
    try {
        jn = J.href;
    } catch (Vn) {
        jn = G.createElement("a"), jn.href = "", jn = jn.href;
    }
    Dn = Pn.exec(jn.toLowerCase()) || [], ut.fn.load = function(e, n, r) {
        if ("string" != typeof e && Un) return Un.apply(this, arguments);
        var i, o, a, s = this, u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), ut.isFunction(n) ? (r = n, 
        n = t) :n && "object" == typeof n && (a = "POST"), s.length > 0 && ut.ajax({
            url:e,
            type:a,
            dataType:"html",
            data:n
        }).done(function(e) {
            o = arguments, s.html(i ? ut("<div>").append(ut.parseHTML(e)).find(i) :e);
        }).complete(r && function(e, t) {
            s.each(r, o || [ e.responseText, t, e ]);
        }), this;
    }, ut.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        ut.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), ut.each([ "get", "post" ], function(e, n) {
        ut[n] = function(e, r, i, o) {
            return ut.isFunction(r) && (o = o || i, i = r, r = t), ut.ajax({
                url:e,
                type:n,
                dataType:o,
                data:r,
                success:i
            });
        };
    }), ut.extend({
        active:0,
        lastModified:{},
        etag:{},
        ajaxSettings:{
            url:jn,
            type:"GET",
            isLocal:qn.test(Dn[1]),
            global:!0,
            processData:!0,
            async:!0,
            contentType:"application/x-www-form-urlencoded; charset=UTF-8",
            accepts:{
                "*":zn,
                text:"text/plain",
                html:"text/html",
                xml:"application/xml, text/xml",
                json:"application/json, text/javascript"
            },
            contents:{
                xml:/xml/,
                html:/html/,
                json:/json/
            },
            responseFields:{
                xml:"responseXML",
                text:"responseText"
            },
            converters:{
                "* text":e.String,
                "text html":!0,
                "text json":ut.parseJSON,
                "text xml":ut.parseXML
            },
            flatOptions:{
                url:!0,
                context:!0
            }
        },
        ajaxSetup:function(e, t) {
            return t ? j(j(e, ut.ajaxSettings), t) :j(ut.ajaxSettings, e);
        },
        ajaxPrefilter:L(Wn),
        ajaxTransport:L($n),
        ajax:function(e, n) {
            function r(e, n, r, i) {
                var o, f, v, b, w, E = n;
                2 !== x && (x = 2, u && clearTimeout(u), c = t, s = i || "", T.readyState = e > 0 ? 4 :0, 
                r && (b = O(p, T, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), 
                w && (ut.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (ut.etag[a] = w)), 
                204 === e ? (o = !0, E = "nocontent") :304 === e ? (o = !0, E = "notmodified") :(o = F(p, b), 
                E = o.state, f = o.data, v = o.error, o = !v)) :(v = E, (e || !E) && (E = "error", 
                0 > e && (e = 0))), T.status = e, T.statusText = (n || E) + "", o ? g.resolveWith(d, [ f, E, T ]) :g.rejectWith(d, [ T, E, v ]), 
                T.statusCode(y), y = t, l && h.trigger(o ? "ajaxSuccess" :"ajaxError", [ T, p, o ? f :v ]), 
                m.fireWith(d, [ T, E ]), l && (h.trigger("ajaxComplete", [ T, p ]), --ut.active || ut.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, u, l, c, f, p = ut.ajaxSetup({}, n), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? ut(d) :ut.event, g = ut.Deferred(), m = ut.Callbacks("once memory"), y = p.statusCode || {}, v = {}, b = {}, x = 0, w = "canceled", T = {
                readyState:0,
                getResponseHeader:function(e) {
                    var t;
                    if (2 === x) {
                        if (!f) for (f = {}; t = Hn.exec(s); ) f[t[1].toLowerCase()] = t[2];
                        t = f[e.toLowerCase()];
                    }
                    return null == t ? null :t;
                },
                getAllResponseHeaders:function() {
                    return 2 === x ? s :null;
                },
                setRequestHeader:function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, v[e] = t), this;
                },
                overrideMimeType:function(e) {
                    return x || (p.mimeType = e), this;
                },
                statusCode:function(e) {
                    var t;
                    if (e) if (2 > x) for (t in e) y[t] = [ y[t], e[t] ]; else T.always(e[T.status]);
                    return this;
                },
                abort:function(e) {
                    var t = e || w;
                    return c && c.abort(t), r(0, t), this;
                }
            };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || jn) + "").replace(Mn, "").replace(In, Dn[1] + "//"), 
            p.type = n.method || n.type || p.method || p.type, p.dataTypes = ut.trim(p.dataType || "*").toLowerCase().match(ct) || [ "" ], 
            null == p.crossDomain && (i = Pn.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === Dn[1] && i[2] === Dn[2] && (i[3] || ("http:" === i[1] ? 80 :443)) == (Dn[3] || ("http:" === Dn[1] ? 80 :443)))), 
            p.data && p.processData && "string" != typeof p.data && (p.data = ut.param(p.data, p.traditional)), 
            D(Wn, p, n, T), 2 === x) return T;
            l = p.global, l && 0 === ut.active++ && ut.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), 
            p.hasContent = !Bn.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Fn.test(a) ? "&" :"?") + p.data, 
            delete p.data), p.cache === !1 && (p.url = Rn.test(a) ? a.replace(Rn, "$1_=" + On++) :a + (Fn.test(a) ? "&" :"?") + "_=" + On++)), 
            p.ifModified && (ut.lastModified[a] && T.setRequestHeader("If-Modified-Since", ut.lastModified[a]), 
            ut.etag[a] && T.setRequestHeader("If-None-Match", ut.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), 
            T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + zn + "; q=0.01" :"") :p.accepts["*"]);
            for (o in p.headers) T.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === x)) return T.abort();
            w = "abort";
            for (o in {
                success:1,
                error:1,
                complete:1
            }) T[o](p[o]);
            if (c = D($n, p, n, T)) {
                T.readyState = 1, l && h.trigger("ajaxSend", [ T, p ]), p.async && p.timeout > 0 && (u = setTimeout(function() {
                    T.abort("timeout");
                }, p.timeout));
                try {
                    x = 1, c.send(v, r);
                } catch (E) {
                    if (!(2 > x)) throw E;
                    r(-1, E);
                }
            } else r(-1, "No Transport");
            return T;
        },
        getScript:function(e, n) {
            return ut.get(e, t, n, "script");
        },
        getJSON:function(e, t, n) {
            return ut.get(e, t, n, "json");
        }
    }), ut.ajaxSetup({
        accepts:{
            script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents:{
            script:/(?:java|ecma)script/
        },
        converters:{
            "text script":function(e) {
                return ut.globalEval(e), e;
            }
        }
    }), ut.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), ut.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = G.head || ut("head")[0] || G.documentElement;
            return {
                send:function(t, i) {
                    n = G.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), 
                    n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, 
                        n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
                    }, r.insertBefore(n, r.firstChild);
                },
                abort:function() {
                    n && n.onload(t, !0);
                }
            };
        }
    });
    var Xn = [], Gn = /(=)\?(?=&|$)|\?\?/;
    ut.ajaxSetup({
        jsonp:"callback",
        jsonpCallback:function() {
            var e = Xn.pop() || ut.expando + "_" + On++;
            return this[e] = !0, e;
        }
    }), ut.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Gn.test(n.url) ? "url" :"string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Gn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() :n.jsonpCallback, 
        u ? n[u] = n[u].replace(Gn, "$1" + o) :n.jsonp !== !1 && (n.url += (Fn.test(n.url) ? "&" :"?") + n.jsonp + "=" + o), 
        n.converters["script json"] = function() {
            return s || ut.error(o + " was not called"), s[0];
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments;
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Xn.push(o)), s && ut.isFunction(a) && a(s[0]), 
            s = a = t;
        }), "script") :void 0;
    });
    var Jn, Yn, Qn = 0, Kn = e.ActiveXObject && function() {
        var e;
        for (e in Jn) Jn[e](t, !0);
    };
    ut.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && M() || R();
    } :M, Yn = ut.ajaxSettings.xhr(), ut.support.cors = !!Yn && "withCredentials" in Yn, 
    Yn = ut.support.ajax = !!Yn, Yn && ut.ajaxTransport(function(n) {
        if (!n.crossDomain || ut.support.cors) {
            var r;
            return {
                send:function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) :u.open(n.type, n.url, n.async), 
                    n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s]);
                    } catch (l) {}
                    u.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, l, c, f;
                        try {
                            if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = ut.noop, 
                            Kn && delete Jn[a]), i) 4 !== u.readyState && u.abort(); else {
                                f = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (f.text = u.responseText);
                                try {
                                    c = u.statusText;
                                } catch (p) {
                                    c = "";
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) :s = f.text ? 200 :404;
                            }
                        } catch (d) {
                            i || o(-1, d);
                        }
                        f && o(s, c, f, l);
                    }, n.async ? 4 === u.readyState ? setTimeout(r) :(a = ++Qn, Kn && (Jn || (Jn = {}, 
                    ut(e).unload(Kn)), Jn[a] = r), u.onreadystatechange = r) :r();
                },
                abort:function() {
                    r && r(t, !0);
                }
            };
        }
    });
    var Zn, er, tr = /^(?:toggle|show|hide)$/, nr = new RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"), rr = /queueHooks$/, ir = [ P ], or = {
        "*":[ function(e, t) {
            var n, r, i = this.createTween(e, t), o = nr.exec(t), a = i.cur(), s = +a || 0, u = 1, l = 20;
            if (o) {
                if (n = +o[2], r = o[3] || (ut.cssNumber[e] ? "" :"px"), "px" !== r && s) {
                    s = ut.css(i.elem, e, !0) || n || 1;
                    do u = u || ".5", s /= u, ut.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l);
                }
                i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n :n;
            }
            return i;
        } ]
    };
    ut.Animation = ut.extend(B, {
        tweener:function(e, t) {
            ut.isFunction(e) ? (t = e, e = [ "*" ]) :e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], or[n] = or[n] || [], or[n].unshift(t);
        },
        prefilter:function(e, t) {
            t ? ir.unshift(e) :ir.push(e);
        }
    }), ut.Tween = U, U.prototype = {
        constructor:U,
        init:function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), 
            this.end = r, this.unit = o || (ut.cssNumber[n] ? "" :"px");
        },
        cur:function() {
            var e = U.propHooks[this.prop];
            return e && e.get ? e.get(this) :U.propHooks._default.get(this);
        },
        run:function(e) {
            var t, n = U.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) :e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) :U.propHooks._default.set(this), this;
        }
    }, U.prototype.init.prototype = U.prototype, U.propHooks = {
        _default:{
            get:function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t :0) :e.elem[e.prop];
            },
            set:function(e) {
                ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) :e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) :e.elem[e.prop] = e.now;
            }
        }
    }, U.propHooks.scrollTop = U.propHooks.scrollLeft = {
        set:function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, ut.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = ut.fn[t];
        ut.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) :this.animate(W(t, !0), e, r, i);
        };
    }), ut.fn.extend({
        fadeTo:function(e, t, n, r) {
            return this.filter(T).css("opacity", 0).show().end().animate({
                opacity:t
            }, e, n, r);
        },
        animate:function(e, t, n, r) {
            var i = ut.isEmptyObject(e), o = ut.speed(t, n, r), a = function() {
                var t = B(this, ut.extend({}, e), o);
                a.finish = function() {
                    t.stop(!0);
                }, (i || ut._data(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) :this.queue(o.queue, a);
        },
        stop:function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r);
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, n = null != e && e + "queueHooks", o = ut.timers, a = ut._data(this);
                if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && rr.test(n) && i(a[n]);
                for (n = o.length; n--; ) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), 
                t = !1, o.splice(n, 1));
                (t || !r) && ut.dequeue(this, e);
            });
        },
        finish:function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = ut._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ut.timers, a = r ? r.length :0;
                for (n.finish = !0, ut.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), 
                t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), ut.each({
        slideDown:W("show"),
        slideUp:W("hide"),
        slideToggle:W("toggle"),
        fadeIn:{
            opacity:"show"
        },
        fadeOut:{
            opacity:"hide"
        },
        fadeToggle:{
            opacity:"toggle"
        }
    }, function(e, t) {
        ut.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), ut.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ut.extend({}, e) :{
            complete:n || !n && t || ut.isFunction(e) && e,
            duration:e,
            easing:n && t || t && !ut.isFunction(t) && t
        };
        return r.duration = ut.fx.off ? 0 :"number" == typeof r.duration ? r.duration :r.duration in ut.fx.speeds ? ut.fx.speeds[r.duration] :ut.fx.speeds._default, 
        (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            ut.isFunction(r.old) && r.old.call(this), r.queue && ut.dequeue(this, r.queue);
        }, r;
    }, ut.easing = {
        linear:function(e) {
            return e;
        },
        swing:function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, ut.timers = [], ut.fx = U.prototype.init, ut.fx.tick = function() {
        var e, n = ut.timers, r = 0;
        for (Zn = ut.now(); r < n.length; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ut.fx.stop(), Zn = t;
    }, ut.fx.timer = function(e) {
        e() && ut.timers.push(e) && ut.fx.start();
    }, ut.fx.interval = 13, ut.fx.start = function() {
        er || (er = setInterval(ut.fx.tick, ut.fx.interval));
    }, ut.fx.stop = function() {
        clearInterval(er), er = null;
    }, ut.fx.speeds = {
        slow:600,
        fast:200,
        _default:400
    }, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function(e) {
        return ut.grep(ut.timers, function(t) {
            return e === t.elem;
        }).length;
    }), ut.fn.offset = function(e) {
        if (arguments.length) return e === t ? this :this.each(function(t) {
            ut.offset.setOffset(this, e, t);
        });
        var n, r, i = {
            top:0,
            left:0
        }, o = this[0], a = o && o.ownerDocument;
        if (a) return n = a.documentElement, ut.contains(n, o) ? (typeof o.getBoundingClientRect !== X && (i = o.getBoundingClientRect()), 
        r = $(a), {
            top:i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left:i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) :i;
    }, ut.offset = {
        setOffset:function(e, t, n) {
            var r = ut.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = ut(e), s = a.offset(), u = ut.css(e, "top"), l = ut.css(e, "left"), c = ("absolute" === r || "fixed" === r) && ut.inArray("auto", [ u, l ]) > -1, f = {}, p = {};
            c ? (p = a.position(), i = p.top, o = p.left) :(i = parseFloat(u) || 0, o = parseFloat(l) || 0), 
            ut.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), 
            null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) :a.css(f);
        }
    }, ut.fn.extend({
        position:function() {
            if (this[0]) {
                var e, t, n = {
                    top:0,
                    left:0
                }, r = this[0];
                return "fixed" === ut.css(r, "position") ? t = r.getBoundingClientRect() :(e = this.offsetParent(), 
                t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), 
                n.left += ut.css(e[0], "borderLeftWidth", !0)), {
                    top:t.top - n.top - ut.css(r, "marginTop", !0),
                    left:t.left - n.left - ut.css(r, "marginLeft", !0)
                };
            }
        },
        offsetParent:function() {
            return this.map(function() {
                for (var e = this.offsetParent || G.documentElement; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position"); ) e = e.offsetParent;
                return e || G.documentElement;
            });
        }
    }), ut.each({
        scrollLeft:"pageXOffset",
        scrollTop:"pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        ut.fn[e] = function(i) {
            return ut.access(this, function(e, i, o) {
                var a = $(e);
                return o === t ? a ? n in a ? a[n] :a.document.documentElement[i] :e[i] :(a ? a.scrollTo(r ? ut(a).scrollLeft() :o, r ? o :ut(a).scrollTop()) :e[i] = o, 
                void 0);
            }, e, i, arguments.length, null);
        };
    }), ut.each({
        Height:"height",
        Width:"width"
    }, function(e, n) {
        ut.each({
            padding:"inner" + e,
            content:n,
            "":"outer" + e
        }, function(r, i) {
            ut.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" :"border");
                return ut.access(this, function(n, r, i) {
                    var o;
                    return ut.isWindow(n) ? n.document.documentElement["client" + e] :9 === n.nodeType ? (o = n.documentElement, 
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) :i === t ? ut.css(n, r, s) :ut.style(n, r, i, s);
                }, n, a ? i :t, a, null);
            };
        });
    }), e.jQuery = e.$ = ut, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return ut;
    });
}(window), function() {
    var e = this, t = e._, n = {}, r = Array.prototype, i = Object.prototype, o = Function.prototype, a = r.slice, s = r.unshift, u = i.toString, l = i.hasOwnProperty, c = r.forEach, f = r.map, p = r.reduce, d = r.reduceRight, h = r.filter, g = r.every, m = r.some, y = r.indexOf, v = r.lastIndexOf, b = Array.isArray, x = Object.keys, w = o.bind, T = function(e) {
        return new k(e);
    };
    "undefined" != typeof module && module.exports ? (module.exports = T, T._ = T) :e._ = T, 
    T.VERSION = "1.1.7";
    var E = T.each = T.forEach = function(e, t, r) {
        if (null != e) if (c && e.forEach === c) e.forEach(t, r); else if (e.length === +e.length) {
            for (var i = 0, o = e.length; o > i; i++) if (i in e && t.call(r, e[i], i, e) === n) return;
        } else for (var a in e) if (l.call(e, a) && t.call(r, e[a], a, e) === n) return;
    };
    T.map = function(e, t, n) {
        var r = [];
        return null == e ? r :f && e.map === f ? e.map(t, n) :(E(e, function(e, i, o) {
            r[r.length] = t.call(n, e, i, o);
        }), r);
    }, T.reduce = T.foldl = T.inject = function(e, t, n, r) {
        var i = void 0 !== n;
        if (null == e && (e = []), p && e.reduce === p) return r && (t = T.bind(t, r)), 
        i ? e.reduce(t, n) :e.reduce(t);
        if (E(e, function(e, o, a) {
            i ? n = t.call(r, n, e, o, a) :(n = e, i = !0);
        }), !i) throw new TypeError("Reduce of empty array with no initial value");
        return n;
    }, T.reduceRight = T.foldr = function(e, t, n, r) {
        if (null == e && (e = []), d && e.reduceRight === d) return r && (t = T.bind(t, r)), 
        void 0 !== n ? e.reduceRight(t, n) :e.reduceRight(t);
        var i = (T.isArray(e) ? e.slice() :T.toArray(e)).reverse();
        return T.reduce(i, t, n, r);
    }, T.find = T.detect = function(e, t, n) {
        var r;
        return N(e, function(e, i, o) {
            return t.call(n, e, i, o) ? (r = e, !0) :void 0;
        }), r;
    }, T.filter = T.select = function(e, t, n) {
        var r = [];
        return null == e ? r :h && e.filter === h ? e.filter(t, n) :(E(e, function(e, i, o) {
            t.call(n, e, i, o) && (r[r.length] = e);
        }), r);
    }, T.reject = function(e, t, n) {
        var r = [];
        return null == e ? r :(E(e, function(e, i, o) {
            t.call(n, e, i, o) || (r[r.length] = e);
        }), r);
    }, T.every = T.all = function(e, t, r) {
        var i = !0;
        return null == e ? i :g && e.every === g ? e.every(t, r) :(E(e, function(e, o, a) {
            return (i = i && t.call(r, e, o, a)) ? void 0 :n;
        }), i);
    };
    var N = T.some = T.any = function(e, t, r) {
        t = t || T.identity;
        var i = !1;
        return null == e ? i :m && e.some === m ? e.some(t, r) :(E(e, function(e, o, a) {
            return (i |= t.call(r, e, o, a)) ? n :void 0;
        }), !!i);
    };
    T.include = T.contains = function(e, t) {
        var n = !1;
        return null == e ? n :y && e.indexOf === y ? -1 != e.indexOf(t) :(N(e, function(e) {
            return (n = e === t) ? !0 :void 0;
        }), n);
    }, T.invoke = function(e, t) {
        var n = a.call(arguments, 2);
        return T.map(e, function(e) {
            return (t.call ? t || e :e[t]).apply(e, n);
        });
    }, T.pluck = function(e, t) {
        return T.map(e, function(e) {
            return e[t];
        });
    }, T.max = function(e, t, n) {
        if (!t && T.isArray(e)) return Math.max.apply(Math, e);
        var r = {
            computed:-1/0
        };
        return E(e, function(e, i, o) {
            var a = t ? t.call(n, e, i, o) :e;
            a >= r.computed && (r = {
                value:e,
                computed:a
            });
        }), r.value;
    }, T.min = function(e, t, n) {
        if (!t && T.isArray(e)) return Math.min.apply(Math, e);
        var r = {
            computed:1/0
        };
        return E(e, function(e, i, o) {
            var a = t ? t.call(n, e, i, o) :e;
            a < r.computed && (r = {
                value:e,
                computed:a
            });
        }), r.value;
    }, T.sortBy = function(e, t, n) {
        return T.pluck(T.map(e, function(e, r, i) {
            return {
                value:e,
                criteria:t.call(n, e, r, i)
            };
        }).sort(function(e, t) {
            var n = e.criteria, r = t.criteria;
            return r > n ? -1 :n > r ? 1 :0;
        }), "value");
    }, T.groupBy = function(e, t) {
        var n = {};
        return E(e, function(e, r) {
            var i = t(e, r);
            (n[i] || (n[i] = [])).push(e);
        }), n;
    }, T.sortedIndex = function(e, t, n) {
        n || (n = T.identity);
        for (var r = 0, i = e.length; i > r; ) {
            var o = r + i >> 1;
            n(e[o]) < n(t) ? r = o + 1 :i = o;
        }
        return r;
    }, T.toArray = function(e) {
        return e ? e.toArray ? e.toArray() :T.isArray(e) ? a.call(e) :T.isArguments(e) ? a.call(e) :T.values(e) :[];
    }, T.size = function(e) {
        return T.toArray(e).length;
    }, T.first = T.head = function(e, t, n) {
        return null == t || n ? e[0] :a.call(e, 0, t);
    }, T.rest = T.tail = function(e, t, n) {
        return a.call(e, null == t || n ? 1 :t);
    }, T.last = function(e) {
        return e[e.length - 1];
    }, T.compact = function(e) {
        return T.filter(e, function(e) {
            return !!e;
        });
    }, T.flatten = function(e) {
        return T.reduce(e, function(e, t) {
            return T.isArray(t) ? e.concat(T.flatten(t)) :(e[e.length] = t, e);
        }, []);
    }, T.without = function(e) {
        return T.difference(e, a.call(arguments, 1));
    }, T.uniq = T.unique = function(e, t) {
        return T.reduce(e, function(e, n, r) {
            return 0 != r && (t === !0 ? T.last(e) == n :T.include(e, n)) || (e[e.length] = n), 
            e;
        }, []);
    }, T.union = function() {
        return T.uniq(T.flatten(arguments));
    }, T.intersection = T.intersect = function(e) {
        var t = a.call(arguments, 1);
        return T.filter(T.uniq(e), function(e) {
            return T.every(t, function(t) {
                return T.indexOf(t, e) >= 0;
            });
        });
    }, T.difference = function(e, t) {
        return T.filter(e, function(e) {
            return !T.include(t, e);
        });
    }, T.zip = function() {
        for (var e = a.call(arguments), t = T.max(T.pluck(e, "length")), n = new Array(t), r = 0; t > r; r++) n[r] = T.pluck(e, "" + r);
        return n;
    }, T.indexOf = function(e, t, n) {
        if (null == e) return -1;
        var r, i;
        if (n) return r = T.sortedIndex(e, t), e[r] === t ? r :-1;
        if (y && e.indexOf === y) return e.indexOf(t);
        for (r = 0, i = e.length; i > r; r++) if (e[r] === t) return r;
        return -1;
    }, T.lastIndexOf = function(e, t) {
        if (null == e) return -1;
        if (v && e.lastIndexOf === v) return e.lastIndexOf(t);
        for (var n = e.length; n--; ) if (e[n] === t) return n;
        return -1;
    }, T.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, o = new Array(r); r > i; ) o[i++] = e, 
        e += n;
        return o;
    }, T.bind = function(e, t) {
        if (e.bind === w && w) return w.apply(e, a.call(arguments, 1));
        var n = a.call(arguments, 2);
        return function() {
            return e.apply(t, n.concat(a.call(arguments)));
        };
    }, T.bindAll = function(e) {
        var t = a.call(arguments, 1);
        return 0 == t.length && (t = T.functions(e)), E(t, function(t) {
            e[t] = T.bind(e[t], e);
        }), e;
    }, T.memoize = function(e, t) {
        var n = {};
        return t || (t = T.identity), function() {
            var r = t.apply(this, arguments);
            return l.call(n, r) ? n[r] :n[r] = e.apply(this, arguments);
        };
    }, T.delay = function(e, t) {
        var n = a.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(e, n);
        }, t);
    }, T.defer = function(e) {
        return T.delay.apply(T, [ e, 1 ].concat(a.call(arguments, 1)));
    };
    var C = function(e, t, n) {
        var r;
        return function() {
            var i = this, o = arguments, a = function() {
                r = null, e.apply(i, o);
            };
            n && clearTimeout(r), (n || !r) && (r = setTimeout(a, t));
        };
    };
    T.throttle = function(e, t) {
        return C(e, t, !1);
    }, T.debounce = function(e, t) {
        return C(e, t, !0);
    }, T.once = function(e) {
        var t, n = !1;
        return function() {
            return n ? t :(n = !0, t = e.apply(this, arguments));
        };
    }, T.wrap = function(e, t) {
        return function() {
            var n = [ e ].concat(a.call(arguments));
            return t.apply(this, n);
        };
    }, T.compose = function() {
        var e = a.call(arguments);
        return function() {
            for (var t = a.call(arguments), n = e.length - 1; n >= 0; n--) t = [ e[n].apply(this, t) ];
            return t[0];
        };
    }, T.after = function(e, t) {
        return function() {
            return --e < 1 ? t.apply(this, arguments) :void 0;
        };
    }, T.keys = x || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) l.call(e, n) && (t[t.length] = n);
        return t;
    }, T.values = function(e) {
        return T.map(e, T.identity);
    }, T.functions = T.methods = function(e) {
        var t = [];
        for (var n in e) T.isFunction(e[n]) && t.push(n);
        return t.sort();
    }, T.extend = function(e) {
        return E(a.call(arguments, 1), function(t) {
            for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
        }), e;
    }, T.defaults = function(e) {
        return E(a.call(arguments, 1), function(t) {
            for (var n in t) null == e[n] && (e[n] = t[n]);
        }), e;
    }, T.clone = function(e) {
        return T.isArray(e) ? e.slice() :T.extend({}, e);
    }, T.tap = function(e, t) {
        return t(e), e;
    }, T.isEqual = function(e, t) {
        if (e === t) return !0;
        var n = typeof e, r = typeof t;
        if (n != r) return !1;
        if (e == t) return !0;
        if (!e && t || e && !t) return !1;
        if (e._chain && (e = e._wrapped), t._chain && (t = t._wrapped), e.isEqual) return e.isEqual(t);
        if (t.isEqual) return t.isEqual(e);
        if (T.isDate(e) && T.isDate(t)) return e.getTime() === t.getTime();
        if (T.isNaN(e) && T.isNaN(t)) return !1;
        if (T.isRegExp(e) && T.isRegExp(t)) return e.source === t.source && e.global === t.global && e.ignoreCase === t.ignoreCase && e.multiline === t.multiline;
        if ("object" !== n) return !1;
        if (e.length && e.length !== t.length) return !1;
        var i = T.keys(e), o = T.keys(t);
        if (i.length != o.length) return !1;
        for (var a in e) if (!(a in t && T.isEqual(e[a], t[a]))) return !1;
        return !0;
    }, T.isEmpty = function(e) {
        if (T.isArray(e) || T.isString(e)) return 0 === e.length;
        for (var t in e) if (l.call(e, t)) return !1;
        return !0;
    }, T.isElement = function(e) {
        return !(!e || 1 != e.nodeType);
    }, T.isArray = b || function(e) {
        return "[object Array]" === u.call(e);
    }, T.isObject = function(e) {
        return e === Object(e);
    }, T.isArguments = function(e) {
        return !(!e || !l.call(e, "callee"));
    }, T.isFunction = function(e) {
        return !!(e && e.constructor && e.call && e.apply);
    }, T.isString = function(e) {
        return !!("" === e || e && e.charCodeAt && e.substr);
    }, T.isNumber = function(e) {
        return !!(0 === e || e && e.toExponential && e.toFixed);
    }, T.isNaN = function(e) {
        return e !== e;
    }, T.isBoolean = function(e) {
        return e === !0 || e === !1;
    }, T.isDate = function(e) {
        return !!(e && e.getTimezoneOffset && e.setUTCFullYear);
    }, T.isRegExp = function(e) {
        return !(!(e && e.test && e.exec) || !e.ignoreCase && e.ignoreCase !== !1);
    }, T.isNull = function(e) {
        return null === e;
    }, T.isUndefined = function(e) {
        return void 0 === e;
    }, T.noConflict = function() {
        return e._ = t, this;
    }, T.identity = function(e) {
        return e;
    }, T.times = function(e, t, n) {
        for (var r = 0; e > r; r++) t.call(n, r);
    }, T.mixin = function(e) {
        E(T.functions(e), function(t) {
            A(t, T[t] = e[t]);
        });
    };
    var _ = 0;
    T.uniqueId = function(e) {
        var t = _++;
        return e ? e + t :t;
    }, T.templateSettings = {
        evaluate:/<%([\s\S]+?)%>/g,
        interpolate:/<%=([\s\S]+?)%>/g
    }, T.template = function(e, t) {
        var n = T.templateSettings, r = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(n.interpolate, function(e, t) {
            return "'," + t.replace(/\\'/g, "'") + ",'";
        }).replace(n.evaluate || null, function(e, t) {
            return "');" + t.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + "__p.push('";
        }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');", i = new Function("obj", r);
        return t ? i(t) :i;
    };
    var k = function(e) {
        this._wrapped = e;
    };
    T.prototype = k.prototype;
    var S = function(e, t) {
        return t ? T(e).chain() :e;
    }, A = function(e, t) {
        k.prototype[e] = function() {
            var e = a.call(arguments);
            return s.call(e, this._wrapped), S(t.apply(T, e), this._chain);
        };
    };
    T.mixin(T), E([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
        var t = r[e];
        k.prototype[e] = function() {
            return t.apply(this._wrapped, arguments), S(this._wrapped, this._chain);
        };
    }), E([ "concat", "join", "slice" ], function(e) {
        var t = r[e];
        k.prototype[e] = function() {
            return S(t.apply(this._wrapped, arguments), this._chain);
        };
    }), k.prototype.chain = function() {
        return this._chain = !0, this;
    }, k.prototype.value = function() {
        return this._wrapped;
    };
}(), function() {
    var e, t = this, n = t.Backbone;
    e = "undefined" != typeof exports ? exports :t.Backbone = {}, e.VERSION = "0.5.3";
    var r = t._;
    r || "undefined" == typeof require || (r = require("underscore")._);
    var i = t.jQuery || t.Zepto;
    e.noConflict = function() {
        return t.Backbone = n, this;
    }, e.emulateHTTP = !1, e.emulateJSON = !1, e.Events = {
        bind:function(e, t, n) {
            var r = this._callbacks || (this._callbacks = {}), i = r[e] || (r[e] = []);
            return i.push([ t, n ]), this;
        },
        unbind:function(e, t) {
            var n;
            if (e) {
                if (n = this._callbacks) if (t) {
                    var r = n[e];
                    if (!r) return this;
                    for (var i = 0, o = r.length; o > i; i++) if (r[i] && t === r[i][0]) {
                        r[i] = null;
                        break;
                    }
                } else n[e] = [];
            } else this._callbacks = {};
            return this;
        },
        trigger:function(e) {
            var t, n, r, i, o, a = 2;
            if (!(n = this._callbacks)) return this;
            for (;a--; ) if (r = a ? e :"all", t = n[r]) for (var s = 0, u = t.length; u > s; s++) (i = t[s]) ? (o = a ? Array.prototype.slice.call(arguments, 1) :arguments, 
            i[0].apply(i[1] || this, o)) :(t.splice(s, 1), s--, u--);
            return this;
        }
    }, e.Model = function(e, t) {
        var n;
        e || (e = {}), (n = this.defaults) && (r.isFunction(n) && (n = n.call(this)), e = r.extend({}, n, e)), 
        this.attributes = {}, this._escapedAttributes = {}, this.cid = r.uniqueId("c"), 
        this.set(e, {
            silent:!0
        }), this._changed = !1, this._previousAttributes = r.clone(this.attributes), t && t.collection && (this.collection = t.collection), 
        this.initialize(e, t);
    }, r.extend(e.Model.prototype, e.Events, {
        _previousAttributes:null,
        _changed:!1,
        idAttribute:"id",
        initialize:function() {},
        toJSON:function() {
            return r.clone(this.attributes);
        },
        get:function(e) {
            return this.attributes[e];
        },
        escape:function(e) {
            var t;
            if (t = this._escapedAttributes[e]) return t;
            var n = this.attributes[e];
            return this._escapedAttributes[e] = T(null == n ? "" :"" + n);
        },
        has:function(e) {
            return null != this.attributes[e];
        },
        set:function(e, t) {
            if (t || (t = {}), !e) return this;
            e.attributes && (e = e.attributes);
            var n = this.attributes, i = this._escapedAttributes;
            if (!t.silent && this.validate && !this._performValidation(e, t)) return !1;
            this.idAttribute in e && (this.id = e[this.idAttribute]);
            var o = this._changing;
            this._changing = !0;
            for (var a in e) {
                var s = e[a];
                r.isEqual(n[a], s) || (n[a] = s, delete i[a], this._changed = !0, t.silent || this.trigger("change:" + a, this, s, t));
            }
            return o || t.silent || !this._changed || this.change(t), this._changing = !1, this;
        },
        unset:function(e, t) {
            if (!(e in this.attributes)) return this;
            t || (t = {});
            var n = (this.attributes[e], {});
            return n[e] = void 0, t.silent || !this.validate || this._performValidation(n, t) ? (delete this.attributes[e], 
            delete this._escapedAttributes[e], e == this.idAttribute && delete this.id, this._changed = !0, 
            t.silent || (this.trigger("change:" + e, this, void 0, t), this.change(t)), this) :!1;
        },
        clear:function(e) {
            e || (e = {});
            var t, n = this.attributes, r = {};
            for (t in n) r[t] = void 0;
            if (!e.silent && this.validate && !this._performValidation(r, e)) return !1;
            if (this.attributes = {}, this._escapedAttributes = {}, this._changed = !0, !e.silent) {
                for (t in n) this.trigger("change:" + t, this, void 0, e);
                this.change(e);
            }
            return this;
        },
        fetch:function(t) {
            t || (t = {});
            var n = this, r = t.success;
            return t.success = function(e, i, o) {
                return n.set(n.parse(e, o), t) ? (r && r(n, e), void 0) :!1;
            }, t.error = w(t.error, n, t), (this.sync || e.sync).call(this, "read", this, t);
        },
        save:function(t, n) {
            if (n || (n = {}), t && !this.set(t, n)) return !1;
            var r = this, i = n.success;
            n.success = function(e, t, o) {
                return r.set(r.parse(e, o), n) ? (i && i(r, e, o), void 0) :!1;
            }, n.error = w(n.error, r, n);
            var o = this.isNew() ? "create" :"update";
            return (this.sync || e.sync).call(this, o, this, n);
        },
        destroy:function(t) {
            if (t || (t = {}), this.isNew()) return this.trigger("destroy", this, this.collection, t);
            var n = this, r = t.success;
            return t.success = function(e) {
                n.trigger("destroy", n, n.collection, t), r && r(n, e);
            }, t.error = w(t.error, n, t), (this.sync || e.sync).call(this, "delete", this, t);
        },
        url:function() {
            var e = b(this.collection) || this.urlRoot || x();
            return this.isNew() ? e :e + ("/" == e.charAt(e.length - 1) ? "" :"/") + encodeURIComponent(this.id);
        },
        parse:function(e) {
            return e;
        },
        clone:function() {
            return new this.constructor(this);
        },
        isNew:function() {
            return null == this.id;
        },
        change:function(e) {
            this.trigger("change", this, e), this._previousAttributes = r.clone(this.attributes), 
            this._changed = !1;
        },
        hasChanged:function(e) {
            return e ? this._previousAttributes[e] != this.attributes[e] :this._changed;
        },
        changedAttributes:function(e) {
            e || (e = this.attributes);
            var t = this._previousAttributes, n = !1;
            for (var i in e) r.isEqual(t[i], e[i]) || (n = n || {}, n[i] = e[i]);
            return n;
        },
        previous:function(e) {
            return e && this._previousAttributes ? this._previousAttributes[e] :null;
        },
        previousAttributes:function() {
            return r.clone(this._previousAttributes);
        },
        _performValidation:function(e, t) {
            var n = this.validate(e);
            return n ? (t.error ? t.error(this, n, t) :this.trigger("error", this, n, t), !1) :!0;
        }
    }), e.Collection = function(e, t) {
        t || (t = {}), t.comparator && (this.comparator = t.comparator), r.bindAll(this, "_onModelEvent", "_removeReference"), 
        this._reset(), e && this.reset(e, {
            silent:!0
        }), this.initialize.apply(this, arguments);
    }, r.extend(e.Collection.prototype, e.Events, {
        model:e.Model,
        initialize:function() {},
        toJSON:function() {
            return this.map(function(e) {
                return e.toJSON();
            });
        },
        add:function(e, t) {
            if (r.isArray(e)) for (var n = 0, i = e.length; i > n; n++) this._add(e[n], t); else this._add(e, t);
            return this;
        },
        remove:function(e, t) {
            if (r.isArray(e)) for (var n = 0, i = e.length; i > n; n++) this._remove(e[n], t); else this._remove(e, t);
            return this;
        },
        get:function(e) {
            return null == e ? null :this._byId[null != e.id ? e.id :e];
        },
        getByCid:function(e) {
            return e && this._byCid[e.cid || e];
        },
        at:function(e) {
            return this.models[e];
        },
        sort:function(e) {
            if (e || (e = {}), !this.comparator) throw new Error("Cannot sort a set without a comparator");
            return this.models = this.sortBy(this.comparator), e.silent || this.trigger("reset", this, e), 
            this;
        },
        pluck:function(e) {
            return r.map(this.models, function(t) {
                return t.get(e);
            });
        },
        reset:function(e, t) {
            return e || (e = []), t || (t = {}), this.each(this._removeReference), this._reset(), 
            this.add(e, {
                silent:!0
            }), t.silent || this.trigger("reset", this, t), this;
        },
        fetch:function(t) {
            t || (t = {});
            var n = this, r = t.success;
            return t.success = function(e, i, o) {
                n[t.add ? "add" :"reset"](n.parse(e, o), t), r && r(n, e);
            }, t.error = w(t.error, n, t), (this.sync || e.sync).call(this, "read", this, t);
        },
        create:function(e, t) {
            var n = this;
            if (t || (t = {}), e = this._prepareModel(e, t), !e) return !1;
            var r = t.success;
            return t.success = function(e, i, o) {
                n.add(e, t), r && r(e, i, o);
            }, e.save(null, t), e;
        },
        parse:function(e) {
            return e;
        },
        chain:function() {
            return r(this.models).chain();
        },
        _reset:function() {
            this.length = 0, this.models = [], this._byId = {}, this._byCid = {};
        },
        _prepareModel:function(t, n) {
            if (t instanceof e.Model) t.collection || (t.collection = this); else {
                var r = t;
                t = new this.model(r, {
                    collection:this
                }), t.validate && !t._performValidation(r, n) && (t = !1);
            }
            return t;
        },
        _add:function(e, t) {
            if (t || (t = {}), e = this._prepareModel(e, t), !e) return !1;
            var n = this.getByCid(e);
            if (n) throw new Error([ "Can't add the same model to a set twice", n.id ]);
            this._byId[e.id] = e, this._byCid[e.cid] = e;
            var r = null != t.at ? t.at :this.comparator ? this.sortedIndex(e, this.comparator) :this.length;
            return this.models.splice(r, 0, e), e.bind("all", this._onModelEvent), this.length++, 
            t.silent || e.trigger("add", e, this, t), e;
        },
        _remove:function(e, t) {
            return t || (t = {}), (e = this.getByCid(e) || this.get(e)) ? (delete this._byId[e.id], 
            delete this._byCid[e.cid], t.index = this.indexOf(e), this.models.splice(t.index, 1), 
            this.length--, t.silent || e.trigger("remove", e, this, t), this._removeReference(e), 
            e) :null;
        },
        _removeReference:function(e) {
            this == e.collection && delete e.collection, e.unbind("all", this._onModelEvent);
        },
        _onModelEvent:function(t, n, r, i) {
            ("add" != t && "remove" != t || r == this) && ("destroy" == t && this._remove(n, i), 
            n && t === "change:" + n.idAttribute && (delete this._byId[n.previous(n.idAttribute)], 
            this._byId[n.id] = n), e.PRINT && print(t + "::" + this.NAME + "::" + n.get("text")), 
            this.trigger.apply(this, arguments));
        }
    });
    var o = [ "forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "rest", "last", "without", "indexOf", "lastIndexOf", "isEmpty", "groupBy" ];
    r.each(o, function(t) {
        e.Collection.prototype[t] = function() {
            return r[t].apply(r, [ this.models ].concat(r.toArray(arguments)));
        };
    }), e.Router = function(e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    };
    var a = /:([\w\d]+)/g, s = /\*([\w\d]+)/g, u = /[-[\]{}()+?.,\\^$|#\s]/g;
    r.extend(e.Router.prototype, e.Events, {
        initialize:function() {},
        route:function(t, n, i) {
            e.history || (e.history = new e.History()), r.isRegExp(t) || (t = this._routeToRegExp(t)), 
            e.history.route(t, r.bind(function(e) {
                var r = this._extractParameters(t, e);
                i.apply(this, r), this.trigger.apply(this, [ "route:" + n ].concat(r));
            }, this));
        },
        navigate:function(t, n) {
            e.history.navigate(t, n);
        },
        _bindRoutes:function() {
            if (this.routes) {
                var e = [];
                for (var t in this.routes) e.unshift([ t, this.routes[t] ]);
                for (var n = 0, r = e.length; r > n; n++) this.route(e[n][0], e[n][1], this[e[n][1]]);
            }
        },
        _routeToRegExp:function(e) {
            return e = e.replace(u, "\\$&").replace(a, "([^/]*)").replace(s, "(.*?)"), new RegExp("^" + e + "$");
        },
        _extractParameters:function(e, t) {
            return e.exec(t).slice(1);
        }
    }), e.History = function() {
        this.handlers = [], r.bindAll(this, "checkUrl");
    };
    var l = /^#*/, c = /msie [\w.]+/, f = !1;
    r.extend(e.History.prototype, {
        interval:50,
        getFragment:function(e, t) {
            if (null == e) if (this._hasPushState || t) {
                e = window.location.pathname;
                var n = window.location.search;
                n && (e += n), 0 == e.indexOf(this.options.root) && (e = e.substr(this.options.root.length));
            } else e = window.location.hash;
            return decodeURIComponent(e.replace(l, ""));
        },
        start:function(e) {
            if (f) throw new Error("Backbone.history has already been started");
            this.options = r.extend({}, {
                root:"/"
            }, this.options, e), this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
            var t = this.getFragment(), n = document.documentMode, o = c.exec(navigator.userAgent.toLowerCase()) && (!n || 7 >= n);
            o && (this.iframe = i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, 
            this.navigate(t)), this._hasPushState ? i(window).bind("popstate", this.checkUrl) :"onhashchange" in window && !o ? i(window).bind("hashchange", this.checkUrl) :setInterval(this.checkUrl, this.interval), 
            this.fragment = t, f = !0;
            var a = window.location, s = a.pathname == this.options.root;
            return !this._wantsPushState || this._hasPushState || s ? (this._wantsPushState && this._hasPushState && s && a.hash && (this.fragment = a.hash.replace(l, ""), 
            window.history.replaceState({}, document.title, a.protocol + "//" + a.host + this.options.root + this.fragment)), 
            this.options.silent ? void 0 :this.loadUrl()) :(this.fragment = this.getFragment(null, !0), 
            window.location.replace(this.options.root + "#" + this.fragment), !0);
        },
        route:function(e, t) {
            this.handlers.unshift({
                route:e,
                callback:t
            });
        },
        checkUrl:function() {
            var e = this.getFragment();
            return e == this.fragment && this.iframe && (e = this.getFragment(this.iframe.location.hash)), 
            e == this.fragment || e == decodeURIComponent(this.fragment) ? !1 :(this.iframe && this.navigate(e), 
            this.loadUrl() || this.loadUrl(window.location.hash), void 0);
        },
        loadUrl:function(e) {
            var t = this.fragment = this.getFragment(e), n = r.any(this.handlers, function(e) {
                return e.route.test(t) ? (e.callback(t), !0) :void 0;
            });
            return n;
        },
        navigate:function(e, t) {
            var n = (e || "").replace(l, "");
            if (this.fragment != n && this.fragment != decodeURIComponent(n)) {
                if (this._hasPushState) {
                    var r = window.location;
                    0 != n.indexOf(this.options.root) && (n = this.options.root + n), this.fragment = n, 
                    window.history.pushState({}, document.title, r.protocol + "//" + r.host + n);
                } else window.location.hash = this.fragment = n, this.iframe && n != this.getFragment(this.iframe.location.hash) && (this.iframe.document.open().close(), 
                this.iframe.location.hash = n);
                t && this.loadUrl(e);
            }
        }
    }), e.View = function(e) {
        this.cid = r.uniqueId("view"), this._configure(e || {}), this._ensureElement(), 
        this.delegateEvents(), this.initialize.apply(this, arguments);
    };
    var p = function(e) {
        return i(e, this.el);
    }, d = /^(\S+)\s*(.*)$/, h = [ "model", "collection", "el", "id", "attributes", "className", "tagName" ];
    r.extend(e.View.prototype, e.Events, {
        tagName:"div",
        $:p,
        initialize:function() {},
        render:function() {
            return this;
        },
        remove:function() {
            return i(this.el).remove(), this;
        },
        make:function(e, t, n) {
            var r = document.createElement(e);
            return t && i(r).attr(t), n && i(r).html(n), r;
        },
        delegateEvents:function(e) {
            if (e || (e = this.events)) {
                r.isFunction(e) && (e = e.call(this)), i(this.el).unbind(".delegateEvents" + this.cid);
                for (var t in e) {
                    var n = this[e[t]];
                    if (!n) throw new Error('Event "' + e[t] + '" does not exist');
                    var o = t.match(d), a = o[1], s = o[2];
                    n = r.bind(n, this), a += ".delegateEvents" + this.cid, "" === s ? i(this.el).bind(a, n) :i(this.el).delegate(s, a, n);
                }
            }
        },
        _configure:function(e) {
            this.options && (e = r.extend({}, this.options, e));
            for (var t = 0, n = h.length; n > t; t++) {
                var i = h[t];
                e[i] && (this[i] = e[i]);
            }
            this.options = e;
        },
        _ensureElement:function() {
            if (this.el) r.isString(this.el) && (this.el = i(this.el).get(0)); else {
                var e = this.attributes || {};
                this.id && (e.id = this.id), this.className && (e["class"] = this.className), this.el = this.make(this.tagName, e);
            }
        }
    });
    var g = function(e, t) {
        var n = v(this, e, t);
        return n.extend = this.extend, n;
    };
    e.Model.extend = e.Collection.extend = e.Router.extend = e.View.extend = g;
    var m = {
        create:"POST",
        update:"PUT",
        "delete":"DELETE",
        read:"GET"
    };
    e.sync = function(t, n, o) {
        var a = m[t], s = r.extend({
            type:a,
            dataType:"json"
        }, o);
        return s.url || (s.url = b(n) || x()), s.data || !n || "create" != t && "update" != t || (s.contentType = "application/json", 
        s.data = JSON.stringify(n.toJSON())), e.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", 
        s.data = s.data ? {
            model:s.data
        } :{}), e.emulateHTTP && ("PUT" === a || "DELETE" === a) && (e.emulateJSON && (s.data._method = a), 
        s.type = "POST", s.beforeSend = function(e) {
            e.setRequestHeader("X-HTTP-Method-Override", a);
        }), "GET" === s.type || e.emulateJSON || (s.processData = !1), i.ajax(s);
    };
    var y = function() {}, v = function(e, t, n) {
        var i;
        return i = t && t.hasOwnProperty("constructor") ? t.constructor :function() {
            return e.apply(this, arguments);
        }, r.extend(i, e), y.prototype = e.prototype, i.prototype = new y(), t && r.extend(i.prototype, t), 
        n && r.extend(i, n), i.prototype.constructor = i, i.__super__ = e.prototype, i;
    }, b = function(e) {
        return e && e.url ? r.isFunction(e.url) ? e.url() :e.url :null;
    }, x = function() {
        throw new Error('A "url" property or function must be specified');
    }, w = function(e, t, n) {
        return function(r) {
            e ? e(t, r, n) :t.trigger("error", t, r, n);
        };
    }, T = function(e) {
        return e.replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
    };
}.call(this), /*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
function(e, t, n) {
    function r(e) {
        return e;
    }
    function i(e) {
        return o(decodeURIComponent(e.replace(s, " ")));
    }
    function o(e) {
        return 0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), 
        e;
    }
    function a(e) {
        return u.json ? JSON.parse(e) :e;
    }
    var s = /\+/g, u = e.cookie = function(o, s, l) {
        if (s !== n) {
            if (l = e.extend({}, u.defaults, l), null === s && (l.expires = -1), "number" == typeof l.expires) {
                var c = l.expires, f = l.expires = new Date();
                f.setDate(f.getDate() + c);
            }
            return s = u.json ? JSON.stringify(s) :String(s), t.cookie = [ encodeURIComponent(o), "=", u.raw ? s :encodeURIComponent(s), l.expires ? "; expires=" + l.expires.toUTCString() :"", l.path ? "; path=" + l.path :"", l.domain ? "; domain=" + l.domain :"", l.secure ? "; secure" :"" ].join("");
        }
        for (var p = u.raw ? r :i, d = t.cookie.split("; "), h = o ? null :{}, g = 0, m = d.length; m > g; g++) {
            var y = d[g].split("="), v = p(y.shift()), b = p(y.join("="));
            if (o && o === v) {
                h = a(b);
                break;
            }
            o || (h[v] = a(b));
        }
        return h;
    };
    u.defaults = {}, e.removeCookie = function(t, n) {
        return null !== e.cookie(t) ? (e.cookie(t, null, n), !0) :!1;
    };
}(jQuery, document), /*
MIT License

Copyright (c) 2011, Ben Ogle

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
function(e) {
    function t(e, t) {
        for (var n = 0; n < e.length; n++) if (e[n] == t) return n;
        return -1;
    }
    e.log = function() {
        e.log.enabled && (e.log.logFn.apply(null, arguments) || e.isFunction(e.log.failoverFn) && e.log.failoverFn(arguments));
    }, e.log.scopeCookie = "module_scopes", e.log.enabled = !0, e.log.failoverToFirebugLite = !0, 
    e.log.firebugLiteUrl = "https://getfirebug.com/releases/lite/1.4/firebug-lite.js", 
    e.log.level = 0, e.log.DEBUG = "DEBUG:", e.log.INFO = "INFO:", e.log.WARNING = "WARNING:", 
    e.log.ERROR = "ERROR:", e.log.LOG = "LOG:", e.log.LEVEL_ORDER = [ e.log.DEBUG, e.log.INFO, e.log.WARNING, e.log.ERROR, e.log.LOG ], 
    e.log.LEVEL_FUNCTIONS = {}, e.log.LEVEL_FUNCTIONS[e.log.DEBUG] = "debug", e.log.LEVEL_FUNCTIONS[e.log.INFO] = "info", 
    e.log.LEVEL_FUNCTIONS[e.log.WARNING] = "warn", e.log.LEVEL_FUNCTIONS[e.log.ERROR] = "error", 
    e.log.LEVEL_FUNCTIONS[e.log.LOG] = "log", e.log.logFn = function() {
        if (window.console && window.console.log && e.isFunction(window.console.log)) {
            for (var n, r = window.console.log, i = [], o = 0; o < arguments.length; o++) i.push(arguments[o]);
            if (arguments.length > 0 && (n = t(e.log.LEVEL_ORDER, arguments[0])) > -1) {
                var a = window.console[e.log.LEVEL_FUNCTIONS[e.log.LEVEL_ORDER[n]]];
                e.isFunction(a) ? (r = a, i = i.slice(1)) :i = [ i.join(" ") ];
            }
            return r.apply(window.console, i), !0;
        }
        if (window.console && window.console.log) {
            for (var i = [], o = 0; o < arguments.length; o++) i.push(arguments[o]);
            window.console.log(i);
        }
        return !1;
    }, e.log._specialLog = function(t, n) {
        for (var r = [ t ], i = 0; i < n.length; i++) r.push(n[i]);
        e.log.apply(this, r);
    };
    for (var n = 0; n < e.log.LEVEL_ORDER.length; n++) {
        var r = e.log.LEVEL_FUNCTIONS[e.log.LEVEL_ORDER[n]];
        "log" != r && function(t) {
            e[r] = function() {
                t >= e.log.level && e.log._specialLog(e.log.LEVEL_ORDER[t], arguments);
            };
        }(n);
    }
    e.log.failoverFn = function(t) {
        function n(n) {
            var r = setInterval(function() {
                e.log.logFn.apply(null, t) && (clearInterval(r), e.isFunction(n) && n());
            }, 100);
        }
        if (e.log.failoverToFirebugLite && e.log.enabled) if (e.log.loading) n(); else {
            e.log.loading = !0;
            var r = e("<script/>", {
                type:"text/javascript",
                src:e.log.firebugLiteUrl
            });
            e("body").append(r), n(function() {
                e.log.loading = !1;
            });
        } else e.SimpleConsole && e.log.enabled && (window.console = e("body").SimpleConsole(), 
        e.log.logFn.apply(null, t));
    };
    var i;
    e.log.DEBUG_MODULES = [], e.cookie && (i = e.cookie(e.log.scopeCookie)) && (e.log.DEBUG_MODULES = i.split(",")), 
    e.log.setModules = function(t) {
        e.log.DEBUG_MODULES = _.uniq(t), e.cookie && e.cookie(e.log.scopeCookie, e.log.DEBUG_MODULES.join(","));
    }, e.log.addModules = function() {
        e.log.setModules(e.log.DEBUG_MODULES.concat(_.toArray(arguments)));
    }, e.log.clearModules = function() {
        e.log.setModules([]);
    }, e.log.removeModule = function(t) {
        e.log.setModules(_.without(e.log.DEBUG_MODULES, t));
    }, e.scopedDebug = function(t) {
        if (e.log.enabled && !(e.log.level > 0)) {
            var n = arguments, r = null;
            if (t && (r = _.isString(t) ? t :t._module || t.constructor.name), r && (!e.log.DEBUG_MODULES || _.indexOf(e.log.DEBUG_MODULES, r) > -1)) {
                var i = arguments.callee.caller.toString(), o = null;
                if (!_.isString(t)) for (var a in t) if (_.isFunction(t[a]) && t[a].toString() == i) {
                    o = a;
                    break;
                }
                n = [ r + (a ? "." + a + ": " :"") ].concat(Array.prototype.slice.call(n, 1)), e.debug.apply(this, n);
            }
        }
    }, window.print = e.log, window.pd = e.debug, window.pds = e.scopedDebug, window.smod = e.log.setModules, 
    window.amod = e.log.addModules, window.cmod = e.log.clearModules, window.rmod = e.log.removeModule;
}(jQuery), function() {
    var e, t = [].indexOf || function(e) {
        for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
        return -1;
    };
    e = function(e) {
        var t, n;
        return t = {}, n = Array.prototype.slice, function() {
            var r;
            return r = n.call(arguments), r in t ? t[r] :t[r] = e.apply(this, r);
        };
    }, _.mixin({
        extract:function(e, n, r) {
            var i, o, a;
            o = {};
            for (i in e) a = e[i], (!r && t.call(n, i) >= 0 || r && !(t.call(n, i) >= 0)) && (o[i] = a);
            return o;
        },
        omit:function(e) {
            var t, n, r, i;
            t = {}, r = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            for (n in e) i = e[n], _.contains(r, n) || (t[n] = e[n]);
            return t;
        },
        withoutkeys:function(e, t) {
            return _.extract(e, t, !0);
        },
        camelize:e(function(e, t) {
            var n;
            return n = e.replace(/([_-][a-z0-9])/g, function(e) {
                return e.toUpperCase().replace("_", "").replace("-", "");
            }), t && (n = [ n[0].toUpperCase(), n.slice(1) ].join("")), n;
        }),
        variablize:function(e, t, n) {
            var r;
            return null == t && (t = "_"), r = e.replace(/([A-Z])/g, function(e) {
                return t + e.toLowerCase();
            }), n && (r = _.compact(r.split(t)).join(t)), r;
        },
        variablizeTitle:function(e, t) {
            return null == t && (t = "_"), e.replace(/\s+/g, t).toLowerCase();
        },
        titlize:e(function(e) {
            return e = e.replace("_", " "), e.replace(/(\w\S*)/g, function(e) {
                return e.charAt(0).toUpperCase() + e.substr(1);
            });
        }),
        dasherize:function(e, t) {
            var n, r;
            return null == t && (t = "-"), e ? (r = e.trim().toLowerCase().split(/[\s`!@#$%^&*()\[\]{};':"<>,\.\\\/|=_-]+/g), 
            r ? function() {
                var e, t, i;
                for (i = [], e = 0, t = r.length; t > e; e++) n = r[e], n && i.push(n);
                return i;
            }().join(t) :"") :"";
        },
        clamp:e(function(e, t, n) {
            return t > e ? t :e > n ? n :e;
        }),
        uuid:function() {
            return "xxxxxxxxxxxx".replace(/[xy]/g, function() {
                var e;
                return e = 16 * Math.random() | 0, e.toString(16);
            });
        }
    }), _.templateSettings = {
        interpolate:/\{\{(.+?)\}\}/g,
        evaluate:/<-(.+?)->/g
    };
}.call(this), function() {
    var e, t, n, r = {}.hasOwnProperty, i = function(e, t) {
        function n() {
            this.constructor = e;
        }
        for (var i in t) r.call(t, i) && (e[i] = t[i]);
        return n.prototype = t.prototype, e.prototype = new n(), e.__super__ = t.prototype, 
        e;
    }, o = function(e, t) {
        return function() {
            return e.apply(t, arguments);
        };
    };
    window.Draw = window.Draw || {}, Draw.Font = function(t) {
        function n() {
            return e = n.__super__.constructor.apply(this, arguments);
        }
        return i(n, t), n.prototype.idAttribute = "id", n;
    }(Backbone.Model), Draw.FontLoader = function(e) {
        function n() {
            return this.fontinactive = o(this.fontinactive, this), this.fontactive = o(this.fontactive, this), 
            this.fontloading = o(this.fontloading, this), this.inactive = o(this.inactive, this), 
            this.active = o(this.active, this), this.loading = o(this.loading, this), this.guessOrigin = o(this.guessOrigin, this), 
            this.load = o(this.load, this), t = n.__super__.constructor.apply(this, arguments);
        }
        return i(n, e), n.prototype.initialize = function(e, t) {
            var n = this;
            return this._module = "DrawFontLoader", this.fontModel = t.fontModel, this.bind("change", this.load), 
            this.bind("active", function() {
                return n.set({
                    fontsLoaded:!0
                });
            }), this.set({
                fontsLoaded:!1
            });
        }, n.prototype.getGoogle = function() {
            var e;
            return e = this.get("google"), e ? e.families :[];
        }, n.prototype.getTypekit = function() {
            var e;
            return e = this.get("typekit"), e ? e.id :null;
        }, n.prototype.load = function() {
            var e;
            if (_.values(this.attributes) && !this.get("fontsLoaded")) try {
                return WebFont.load(_.extend({
                    loading:this.loading,
                    active:this.active,
                    inactive:this.inactive,
                    fontloading:this.fontloading,
                    fontactive:this.fontactive,
                    fontinactive:this.fontinactive
                }, this.attributes));
            } catch (t) {
                return e = t, this.trigger("error", e.message);
            }
        }, n.prototype.PLUS_TO_SPACE = new RegExp("\\+"), n.prototype.guessOrigin = function(e) {
            var t, n, r, i, o;
            if (t = this.attributes, t.google && t.google.families) for (o = t.google.families, 
            r = 0, i = o.length; i > r; r++) if (n = o[r], n.replace(this.PLUS_TO_SPACE, " ").indexOf(e) > -1) return "google";
            return "typekit";
        }, n.prototype.loading = function() {
            return pds(this, "loading");
        }, n.prototype.active = function() {
            return pds(this, "active"), this.trigger("active");
        }, n.prototype.inactive = function() {
            return pds(this, "inactive");
        }, n.prototype.fontloading = function(e, t) {
            return pds(this, "fontloading", e, t);
        }, n.prototype.fontactive = function(e, t) {
            var n;
            return pds(this, "fontactive", e, t, arguments), n = e.replace(/-/g, " "), n = _.titlize(n), 
            this.fontModel.addFamily(e, n, this.guessOrigin(e)), this.trigger("fontactive", e, t, n);
        }, n.prototype.fontinactive = function(e, t) {
            return pds(this, "fontinactive", e, t);
        }, n;
    }(Backbone.Model), Draw.Fonts = function(e) {
        function t() {
            return this.getFamilies = o(this.getFamilies, this), this.removeFamily = o(this.removeFamily, this), 
            this.hasFamily = o(this.hasFamily, this), this.getFamily = o(this.getFamily, this), 
            this.addFamily = o(this.addFamily, this), this.setupNative = o(this.setupNative, this), 
            this.comparator = o(this.comparator, this), n = t.__super__.constructor.apply(this, arguments);
        }
        return i(t, e), t.prototype.ORIGIN_ORDER = {
            typekit:1,
            google:2,
            "native":3,
            local:4
        }, t.prototype.NATIVE = [ "Andale Mono", "Arial", "Helvetica", "Helvetica Neue", "Arial Black", "Courier New", "Georgia", "Impact", "Monospace", "Times New Roman", "Trebuchet MS", "Verdana" ], 
        t.prototype.model = Draw.Font, t.prototype.initialize = function(e, t) {
            return this.options = t || {}, this.setupNative();
        }, t.prototype.comparator = function(e) {
            return this.ORIGIN_ORDER[e.get("origin")] + e.get("family");
        }, t.prototype.setupNative = function() {
            var e, t, n, r, i;
            for (r = this.NATIVE, i = [], t = 0, n = r.length; n > t; t++) e = r[t], i.push(this.addFamily(e, e, "native"));
            return i;
        }, t.prototype.addFamily = function(e, t, n) {
            return e = e.toLowerCase(), this.hasFamily(e) ? void 0 :this.add({
                id:e,
                uid:Draw.Fonts.id++,
                family:e,
                description:t,
                origin:n
            });
        }, t.prototype.getFamily = function(e) {
            return e = e.toLowerCase(), this.get(e);
        }, t.prototype.hasFamily = function(e) {
            return !!this.getFamily(e);
        }, t.prototype.removeFamily = function(e) {
            return this.remove(e);
        }, t.prototype.getFamilies = function() {
            return this.pluck("family");
        }, t;
    }(Backbone.Collection), Draw.Fonts.id = 0;
}.call(this);