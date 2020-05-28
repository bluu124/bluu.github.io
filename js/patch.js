var CABLES = function (t) {
    var e = {};

    function i(s) {
        if (e[s]) return e[s].exports;
        var n = e[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return t[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    return i.m = t, i.c = e, i.d = function (t, e, s) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: s
        })
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (i.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) i.d(s, n, function (e) {
                return t[e]
            }.bind(null, n));
        return s
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 0)
}([function (t, e, i) {
    t.exports = i(1)
}, function (t, e, i) {
    "use strict";
    i.r(e);
    var s = {};
    i.r(s), i.d(s, "base64Chars", (function () {
        return h
    })), i.d(s, "base64lookup", (function () {
        return l
    })), i.d(s, "b64encTypesArray", (function () {
        return u
    })), i.d(s, "b64decTypedArray", (function () {
        return c
    }));
    var n = {};
    i.r(n), i.d(n, "shuffleArray", (function () {
        return f
    })), i.d(n, "shortId", (function () {
        return T
    })), i.d(n, "uuid", (function () {
        return b
    })), i.d(n, "generateUUID", (function () {
        return y
    })), i.d(n, "simpleId", (function () {
        return I
    })), i.d(n, "smoothStep", (function () {
        return v
    })), i.d(n, "smootherStep", (function () {
        return x
    })), i.d(n, "map", (function () {
        return R
    })), i.d(n, "cacheBust", (function () {
        return P
    })), i.d(n, "basename", (function () {
        return N
    })), i.d(n, "jsonp", (function () {
        return M
    })), i.d(n, "ajaxSync", (function () {
        return S
    })), i.d(n, "ajax", (function () {
        return C
    })), i.d(n, "request", (function () {
        return w
    })), i.d(n, "UTILS", (function () {
        return g
    }));
    var r = {};
    i.r(r), i.d(r, "easeExpoIn", (function () {
        return V
    })), i.d(r, "easeExpoOut", (function () {
        return G
    })), i.d(r, "easeExpoInOut", (function () {
        return H
    })), i.d(r, "easeCubicIn", (function () {
        return z
    })), i.d(r, "easeCubicOut", (function () {
        return Y
    })), i.d(r, "easeCubicInOut", (function () {
        return W
    })), i.d(r, "ANIM", (function () {
        return D
    })), i.d(r, "Anim", (function () {
        return K
    })), i.d(r, "TL", (function () {
        return X
    }));
    var o = {};
    i.r(o), i.d(o, "PatchConnectionReceiver", (function () {
        return Ct
    })), i.d(o, "PatchConnectionSender", (function () {
        return wt
    })), i.d(o, "PatchConnectorBroadcastChannel", (function () {
        return kt
    }));
    const h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a = new Uint8Array(256);
    for (let t = 0; t < h.length; t++) a[h.charCodeAt(t)] = t;
    const l = a,
        u = function (t) {
            t.buffer && (t = t.buffer);
            let e, i = new Uint8Array(t),
                s = i.length,
                n = "";
            for (e = 0; e < s; e += 3) n += h[i[e] >> 2], n += h[(3 & i[e]) << 4 | i[e + 1] >> 4], n += h[(15 & i[e + 1]) << 2 | i[e + 2] >> 6], n += h[63 & i[e + 2]];
            return s % 3 == 2 ? n = n.substring(0, n.length - 1) + "=" : s % 3 == 1 && (n = n.substring(0, n.length - 2) + "=="), n
        },
        c = function (t) {
            let e, i, s, n, r, o = .75 * t.length,
                h = t.length,
                a = 0;
            "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--);
            let u = new ArrayBuffer(o),
                c = new Uint8Array(u);
            for (e = 0; e < h; e += 4) i = l[t.charCodeAt(e)], s = l[t.charCodeAt(e + 1)], n = l[t.charCodeAt(e + 2)], r = l[t.charCodeAt(e + 3)], c[a++] = i << 2 | s >> 4, c[a++] = (15 & s) << 4 | n >> 2, c[a++] = (3 & n) << 6 | 63 & r;
            return u
        };
    let p = !1;
    const d = {
            log() {
                if (p) return;
                const t = ["[core]"];
                t.push.apply(t, arguments), Function.prototype.apply.apply(console.log, [console, t])
            },
            warn(t) {
                if (p) return;
                const e = ["[core]"];
                e.push.apply(e, arguments), Function.prototype.apply.apply(console.warn, [console, e])
            },
            error(t) {
                const e = ["[core]"];
                e.push.apply(e, arguments), Function.prototype.apply.apply(console.error, [console, e])
            },
            setSilent(t) {
                p = t
            }
        },
        _ = function () {
            this._eventCallbacks = {}, this._logName = "", this._log = !1, this.addEventListener = this.on = function (t, e) {
                this._eventCallbacks[t] ? this._eventCallbacks[t].push(e) : this._eventCallbacks[t] = [e]
            }, this.hasEventListener = function (t, e) {
                if (t && e) {
                    if (this._eventCallbacks[t]) {
                        return -1 != this._eventCallbacks[t].indexOf(e)
                    }
                } else d.warn("hasListener: missing parameters")
            }, this.removeEventListener = function (t, e) {
                if (this._eventCallbacks[t]) {
                    const i = this._eventCallbacks[t].indexOf(e); - 1 == i ? d.warn("eventlistener " + t + " not found...") : this._eventCallbacks[t].splice(i)
                }
            }, this.logEvents = function (t, e) {
                this._log = t, this._logName = e
            }, this.emitEvent = function (t, e, i, s, n, r, o) {
                if (this._log && console.log("[event] ", this._logName, t, this._eventCallbacks), this._eventCallbacks[t])
                    for (let h = 0; h < this._eventCallbacks[t].length; h++) this._eventCallbacks[t][h] && this._eventCallbacks[t][h](e, i, s, n, r, o);
                else this._log && console.log("[event] has no event callback", t, this._eventCallbacks)
            }
        },
        g = {
            float32Concat: function (t, e) {
                t instanceof Float32Array || (t = new Float32Array(t)), e instanceof Float32Array || (e = new Float32Array(e));
                const i = new Float32Array(t.length + e.length);
                return i.set(t), i.set(e, t.length), i
            }
        },
        f = function (t) {
            for (let e = t.length - 1; e > 0; e--) {
                const i = Math.floor(Math.seededRandom() * (e + 1)),
                    s = t[e];
                t[e] = t[i], t[i] = s
            }
            return t
        },
        m = {},
        E = function () {
            let t = Math.random().toString(36).substr(2, 9);
            return m.hasOwnProperty(t) && (t = E()), m[t] = !0, t
        },
        T = E,
        A = function () {
            let t = (new Date).getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
                const i = (t + 16 * Math.random()) % 16 | 0;
                return t = Math.floor(t / 16), ("x" == e ? i : 3 & i | 8).toString(16)
            })
        },
        b = A,
        y = A;
    let O = 0;
    const I = function () {
            return O++, O
        },
        v = function (t) {
            const e = Math.max(0, Math.min(1, (t - 0) / 1));
            return t = e * e * (3 - 2 * e)
        },
        x = function (t) {
            const e = Math.max(0, Math.min(1, (t - 0) / 1));
            return t = e * e * e * (e * (6 * e - 15) + 10)
        },
        R = function (t, e, i, s, n, r) {
            if (t >= i) return n;
            if (t <= e) return s;
            let o = !1;
            const h = Math.min(e, i),
                a = Math.max(e, i);
            h != e && (o = !0);
            let l = !1;
            const u = Math.min(s, n),
                c = Math.max(s, n);
            u != s && (l = !0);
            let p = 0,
                d = 0;
            return p = o ? (a - t) * (c - u) / (a - h) : (t - h) * (c - u) / (a - h), d = l ? c - p : p + u, r ? 1 == r ? s + (t = Math.max(0, Math.min(1, (d - s) / (n - s)))) * t * (3 - 2 * t) * (n - s) : 2 == r ? s + (t = Math.max(0, Math.min(1, (d - s) / (n - s)))) * t * t * (t * (6 * t - 15) + 10) * (n - s) : d : d
        };
    Math.randomSeed = 1, Math.seededRandom = function (t, e) {
        return 0 === Math.randomSeed && (Math.randomSeed = 999 * Math.random()), t = t || 1, e = e || 0, Math.randomSeed = (9301 * Math.randomSeed + 49297) % 233280, e + Math.randomSeed / 233280 * (t - e)
    }, g.arrayWriteToEnd = function (t, e) {
        for (let e = 1; e < t.length; e++) t[e - 1] = t[e];
        t[t.length - 1] = e
    }, g.isNumeric = function (t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }, g.isArray = function (t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }, String.prototype.endl = function () {
        return this + "\n"
    }, String.prototype.startsWith = function (t) {
        return 0 === this.indexOf(t)
    }, String.prototype.endsWith = function (t) {
        return this.match(t + "$") == t
    };
    const P = function (t) {
            return t.indexOf("?") > -1 ? t += "&" : t += "?", t + "cb=" + CABLES.uuid()
        },
        N = function (t) {
            let e = "";
            if (!t) return "";
            const i = (t + "").split("/");
            if (i.length > 0) {
                let t = i[i.length - 1].split("?");
                e = t[0], t = e.split("."), e = t[0]
            }
            return e
        };
    let F = null;
    const M = function (t, e) {
            F = F || 0, F++;
            const i = F;
            CABLES["jsonpFunc" + i] = function (t) {
                e(!1, t)
            };
            let s = "?";
            t.indexOf(s) > -1 && (s = "&");
            const n = document.createElement("script");
            n.setAttribute("src", t + s + "callback=CABLES.jsonpFunc" + i), document.body.appendChild(n)
        },
        S = function (t, e, i, s, n) {
            w({
                url: t,
                cb: e,
                method: i,
                data: s,
                contenttype: n,
                sync: !0
            })
        },
        C = function (t, e, i, s, n, r, o = {}) {
            w({
                url: t,
                cb: e,
                method: i,
                "data:": s,
                contenttype: n,
                sync: !1,
                jsonP: r,
                headers: o
            })
        },
        w = function (t) {
            let e;
            t.hasOwnProperty("asynch") || (t.asynch = !0);
            try {
                e = new XMLHttpRequest
            } catch (t) {}
            if (e.onreadystatechange = function () {
                    4 == e.readyState && t.cb && (200 == e.status || 0 == e.status ? t.cb(!1, e.responseText, e) : t.cb(!0, e.responseText, e))
                }, e.addEventListener("progress", t => {}), e.open(t.method ? t.method.toUpperCase() : "GET", t.url, !t.sync), "object" == typeof t.headers) {
                const i = Object.keys(t.headers);
                for (let s = 0; s < i.length; s++) {
                    const n = i[s],
                        r = t.headers[n];
                    e.setRequestHeader(n, r)
                }
            }
            t.post || t.data ? (e.setRequestHeader("Content-type", t.contenttype ? t.contenttype : "application/x-www-form-urlencoded"), e.send(t.data || t.post)) : e.send()
        };
    window.performance = window.performance || {
        offset: Date.now(),
        now: function () {
            return Date.now() - this.offset
        }
    };
    const k = {
            ANIM: {
                EASINGS: ["linear", "absolute", "smoothstep", "smootherstep", "Cubic In", "Cubic Out", "Cubic In Out", "Expo In", "Expo Out", "Expo In Out", "Sin In", "Sin Out", "Sin In Out", "Quart In", "Quart Out", "Quart In Out", "Quint In", "Quint Out", "Quint In Out", "Back In", "Back Out", "Back In Out", "Elastic In", "Elastic Out", "Bounce In", "Bounce Out"],
                EASING_LINEAR: 0,
                EASING_ABSOLUTE: 1,
                EASING_SMOOTHSTEP: 2,
                EASING_SMOOTHERSTEP: 3,
                EASING_BEZIER: 4,
                EASING_CUBIC_IN: 5,
                EASING_CUBIC_OUT: 6,
                EASING_CUBIC_INOUT: 7,
                EASING_EXPO_IN: 8,
                EASING_EXPO_OUT: 9,
                EASING_EXPO_INOUT: 10,
                EASING_SIN_IN: 11,
                EASING_SIN_OUT: 12,
                EASING_SIN_INOUT: 13,
                EASING_BACK_IN: 14,
                EASING_BACK_OUT: 15,
                EASING_BACK_INOUT: 16,
                EASING_ELASTIC_IN: 17,
                EASING_ELASTIC_OUT: 18,
                EASING_BOUNCE_IN: 19,
                EASING_BOUNCE_OUT: 21,
                EASING_QUART_IN: 22,
                EASING_QUART_OUT: 23,
                EASING_QUART_INOUT: 24,
                EASING_QUINT_IN: 25,
                EASING_QUINT_OUT: 26,
                EASING_QUINT_INOUT: 27
            },
            OP: {
                OP_PORT_TYPE_VALUE: 0,
                OP_PORT_TYPE_FUNCTION: 1,
                OP_PORT_TYPE_OBJECT: 2,
                OP_PORT_TYPE_TEXTURE: 2,
                OP_PORT_TYPE_ARRAY: 3,
                OP_PORT_TYPE_DYNAMIC: 4,
                OP_PORT_TYPE_STRING: 5,
                OP_VERSION_PREFIX: "_v"
            },
            PORT: {
                PORT_DIR_IN: 0,
                PORT_DIR_OUT: 1
            },
            PACO: {
                PACO_CLEAR: 0,
                PACO_VALUECHANGE: 1,
                PACO_OP_DELETE: 2,
                PACO_UNLINK: 3,
                PACO_LINK: 4,
                PACO_LOAD: 5,
                PACO_OP_CREATE: 6,
                PACO_OP_ENABLE: 7,
                PACO_OP_DISABLE: 8
            }
        },
        B = function (t, e, i, s) {
            _.apply(this), this.data = {}, this.direction = k.PORT.PORT_DIR_IN, this.id = y(), this.parent = t, this.links = [], this.value = 0, this.name = e, this.type = i || k.OP.OP_PORT_TYPE_VALUE, this.uiAttribs = s || {}, this.anim = null, this._oldAnimVal = -5711, this.defaultValue = null, this._uiActiveState = !0, this.ignoreValueSerialize = !1, this.onLinkChanged = null, this.crashed = !1, this._valueBeforeLink = null, this._lastAnimFrame = -1, this._animated = !1, this.onValueChanged = null, this.onTriggered = null, this.onUiActiveStateChange = null, this.changeAlways = !1, this._warnedDeprecated = !1, this._useVariableName = null, this._tempLastUiValue = null, Object.defineProperty(this, "val", {
                get() {
                    return this._warnedDeprecated = !0, this.get()
                },
                set(t) {
                    this.setValue(t), this._warnedDeprecated = !0
                }
            })
        };
    B.prototype.onAnimToggle = function () {}, B.prototype._onAnimToggle = function () {
        this.onAnimToggle()
    }, B.prototype.hidePort = function () {
        this.setUiAttribs({
            hidePort: !0
        })
    }, B.prototype.remove = function () {
        this.removeLinks(), this.parent.removePort(this)
    }, B.prototype.setUiAttribs = function (t) {
        this.uiAttribs || (this.uiAttribs = {});
        for (const e in t) this.uiAttribs[e] = t[e];
        this.emitEvent("onUiAttrChange", t)
    }, B.prototype.getUiAttribs = function () {
        return this.uiAttribs
    }, B.prototype.getUiAttrib = function (t) {
        return this.uiAttribs && this.uiAttribs.hasOwnProperty(t) ? this.uiAttribs[t] : null
    }, B.prototype.get = function () {
        return this._animated && this._lastAnimFrame != this.parent.patch.getFrameNum() && (this._lastAnimFrame = this.parent.patch.getFrameNum(), this.value = this.anim.getValue(this.parent.patch.timer.getTime()), this._oldAnimVal = this.value, this.forceChange()), this.value
    }, B.prototype.set = B.prototype.setValue = function (t) {
        if (void 0 !== t && this.parent.enabled && !this.crashed && (t !== this.value || this.changeAlways || this.type == k.OP.OP_PORT_TYPE_TEXTURE || this.type == k.OP.OP_PORT_TYPE_ARRAY)) {
            if (this._animated) this.anim.setValue(this.parent.patch.timer.getTime(), t);
            else {
                try {
                    this.value = t, this.forceChange()
                } catch (t) {
                    this.crashed = !0, this.setValue = function (t) {}, this.onTriggered = function () {}, console.error("onvaluechanged exception cought", t), d.log(t.stack), d.log("exception in: " + this.parent.name), this.parent.patch.isEditorMode() && gui.showOpCrash(this.parent), this.parent.patch.emitEvent("exception".ex, this.parent)
                }
                this.parent.patch.isEditorMode() && this.type == k.OP.OP_PORT_TYPE_TEXTURE && gui.texturePreview().updateTexturePort(this)
            }
            if (this.direction == k.PORT.PORT_DIR_OUT)
                for (let t = 0; t < this.links.length; ++t) this.links[t].setValue()
        }
    }, B.prototype.updateAnim = function () {
        this._animated && (this.value = this.get(), (this._oldAnimVal != this.value || this.changeAlways) && (this._oldAnimVal = this.value, this.forceChange()), this._oldAnimVal = this.value)
    }, B.args = function (t) {
        return (t + "").replace(/[/][/].*$/gm, "").replace(/\s+/g, "").replace(/[/][*][^/*]*[*][/]/g, "").split("){", 1)[0].replace(/^[^(]*[(]/, "").replace(/=[^,]+/g, "").split(",").filter(Boolean)
    }, B.prototype.forceChange = function () {
        this.onValueChanged || this.onChange, this.onChange ? this.onChange(this, this.value) : this.onValueChanged && this.onValueChanged(this, this.value)
    }, B.prototype.getTypeString = function () {
        return this.type == k.OP.OP_PORT_TYPE_VALUE ? "Number" : this.type == k.OP.OP_PORT_TYPE_FUNCTION ? "Trigger" : this.type == k.OP.OP_PORT_TYPE_OBJECT ? "Object" : this.type == k.OP.OP_PORT_TYPE_DYNAMIC ? "Dynamic" : this.type == k.OP.OP_PORT_TYPE_ARRAY ? "Array" : this.type == k.OP.OP_PORT_TYPE_STRING ? "String" : "Unknown"
    }, B.prototype.getSerialized = function () {
        const t = {};
        if (t.name = this.getName(), this.ignoreValueSerialize || 0 !== this.links.length || this.type == k.OP.OP_PORT_TYPE_OBJECT && this.value && this.value.tex || (t.value = this.value), this._useVariableName && (t.useVariable = this._useVariableName), this._animated && (t.animated = !0), this.anim && (t.anim = this.anim.getSerialized()), "file" == this.uiAttribs.display && (t.display = this.uiAttribs.display), this.direction == k.PORT.PORT_DIR_IN && this.links.length > 0) {
            t.links = [];
            for (const e in this.links) this.links[e].portIn && this.links[e].portOut && t.links.push(this.links[e].getSerialized())
        }
        return t
    }, B.prototype.shouldLink = function () {
        return !0
    }, B.prototype.removeLinks = function () {
        let t = 0;
        for (; this.links.length > 0;) {
            if (t++, t > 5e3) {
                console.warn("could not delete links... / infinite loop"), this.links.length = 0;
                break
            }
            this.links[0].remove()
        }
    }, B.prototype.removeLink = function (t) {
        for (const e in this.links) this.links[e] == t && this.links.splice(e, 1);
        this.direction == k.PORT.PORT_DIR_IN && (this.type == k.OP.OP_PORT_TYPE_VALUE ? this.setValue(this._valueBeforeLink || 0) : this.setValue(this._valueBeforeLink || null)), this.onLinkChanged && this.onLinkChanged(), this.emitEvent("onLinkChanged")
    }, B.prototype.getName = function () {
        return this.name
    }, B.prototype.addLink = function (t) {
        this._valueBeforeLink = this.value, this.links.push(t), this.onLinkChanged && this.onLinkChanged(), this.emitEvent("onLinkChanged")
    }, B.prototype.getLinkTo = function (t) {
        for (const e in this.links)
            if (this.links[e].portIn == t || this.links[e].portOut == t) return this.links[e]
    }, B.prototype.removeLinkTo = function (t) {
        for (const e in this.links)
            if (this.links[e].portIn == t || this.links[e].portOut == t) return this.links[e].remove(), this.onLinkChanged && this.onLinkChanged(), void this.emitEvent("onLinkChanged")
    }, B.prototype.isLinkedTo = function (t) {
        for (const e in this.links)
            if (this.links[e].portIn == t || this.links[e].portOut == t) return !0;
        return !1
    }, B.prototype.trigger = function () {
        if (0 === this.links.length) return;
        if (!this.parent.enabled) return;
        let t = null;
        try {
            for (let e = 0; e < this.links.length; ++e) this.links[e].portIn && (t = this.links[e].portIn, t._onTriggered()), this.links[e] && this.links[e].activity()
        } catch (e) {
            this.parent.enabled = !1, this.parent.patch.isEditorMode() && (this.parent.patch.emitEvent("exception", e, t.parent), this.parent.patch.emitEvent("opcrash", t)), d.log("exception!"), console.error("ontriggered exception cought", e), d.log(e.stack), d.log("exception in: " + t.parent.name)
        }
    }, B.prototype.call = function () {
        d.log("call deprecated - use trigger() "), this.trigger()
    }, B.prototype.execute = function () {
        d.log("### execute port: " + this.getName(), this.goals.length)
    }, B.prototype.setVariableName = function (t) {
        this._useVariableName = t
    }, B.prototype.getVariableName = function () {
        return this._useVariableName
    }, B.prototype.setVariable = function (t) {
        this.setAnimated(!1);
        const e = {
            useVariable: !1
        };
        this._variableIn && (this._variableIn.removeListener(this.set.bind(this)), this._variableIn = null), t ? (this._variableIn = this.parent.patch.getVar(t), this._variableIn ? (this._variableIn.addListener(this.set.bind(this)), this.set(this._variableIn.getValue())) : console.log("PORT VAR NOT FOUND!!!"), this._useVariableName = t, e.useVariable = !0, e.variableName = this._useVariableName) : (e.variableName = this._useVariableName = null, e.useVariable = !1), this.setUiAttribs(e)
    }, B.prototype.setAnimated = function (t) {
        this._animated != t && (this._animated = t, this._animated && !this.anim && (this.anim = new K), this._onAnimToggle()), this.setUiAttribs({
            isAnimated: this._animated
        })
    }, B.prototype.toggleAnim = function (t) {
        this._animated = !this._animated, this._animated && !this.anim && (this.anim = new K), this.setAnimated(this._animated), this._onAnimToggle(), this.setUiAttribs({
            isAnimated: this._animated
        })
    }, B.prototype.getType = function () {
        return this.type
    }, B.prototype.isLinked = function () {
        return this.links.length > 0
    }, B.prototype.isBoundToVar = function () {
        return null != this._useVariableName
    }, B.prototype.isAnimated = function () {
        return this._animated
    }, B.prototype.isHidden = function () {
        return this.uiAttribs.hidePort
    }, B.prototype._onTriggered = function (t) {
        this.parent.updateAnims(), this.parent.enabled && this.onTriggered && this.onTriggered(t)
    }, B.prototype._onSetProfiling = function (t) {
        this.parent.patch.profiler.add("port", this), this.setValue(t), this.parent.patch.profiler.add("port", null)
    }, B.prototype._onTriggeredProfiling = function () {
        this.parent.patch.profiler.add("port", this), this.parent.enabled && this.onTriggered && this.onTriggered(), this.parent.patch.profiler.add("port", null)
    }, B.prototype.onValueChange = function (t) {
        this.onChange = t
    }, B.prototype.getUiActiveState = function () {
        return this._uiActiveState
    }, B.prototype.setUiActiveState = function (t) {
        this._uiActiveState = t, this.onUiActiveStateChange && this.onUiActiveStateChange()
    }, B.portTypeNumberToString = function (t) {
        return t == k.OP.OP_PORT_TYPE_VALUE ? "value" : t == k.OP.OP_PORT_TYPE_FUNCTION ? "function" : t == k.OP.OP_PORT_TYPE_OBJECT ? "object" : t == k.OP.OP_PORT_TYPE_ARRAY ? "array" : t == k.OP.OP_PORT_TYPE_STRING ? "string" : t == k.OP.OP_PORT_TYPE_DYNAMIC ? "dynamic" : "unknown"
    };
    class L extends B {
        constructor(t, e, i, s, n) {
            super(t, e, i, s), this.indexPort = n, this.indexPort.set = t => {
                const e = s.values;
                if (!e) return;
                let i = Math.floor(t);
                i = Math.min(i, e.length - 1), i = Math.max(i, 0), this.indexPort.setValue(i), this.set(e[i]), this.parent.patch.isEditorMode() && window.gui && gui.patchView.isCurrentOp(this.parent) && gui.patch().showOpParams(this.parent)
            }
        }
        setUiAttribs(t) {
            const e = t.hidePort;
            t.hidePort = !0, super.setUiAttribs(t), void 0 !== e && this.indexPort.setUiAttribs({
                hidePort: e
            })
        }
    }
    class U extends L {}
    const D = {
        Key: function (t) {
            this.time = 0, this.value = 0, this.ui = {}, this.onChange = null, this._easing = 0, this.bezTime = .5, this.bezValue = 0, this.bezTimeIn = -.5, this.bezValueIn = 0, this.cb = null, this.cbTriggered = !1;
            this._updateBezier = !1, this.setEasing(k.ANIM.EASING_LINEAR), this.set(t)
        }
    };
    D.Key.linear = function (t, e, i) {
        return parseFloat(e.value) + parseFloat(i.value - e.value) * t
    }, D.Key.easeLinear = function (t, e) {
        return D.Key.linear(t, this, e)
    }, D.Key.easeAbsolute = function (t, e) {
        return this.value
    };
    const V = function (t) {
        return Math.pow(2, 10 * (t - 1))
    };
    D.Key.easeExpoIn = function (t, e) {
        return t = V(t), D.Key.linear(t, this, e)
    };
    const G = function (t) {
        return t = 1 - Math.pow(2, -10 * t)
    };
    D.Key.easeExpoOut = function (t, e) {
        return t = G(t), D.Key.linear(t, this, e)
    };
    const H = function (t) {
        return (t *= 2) < 1 ? t = .5 * Math.pow(2, 10 * (t - 1)) : (t--, t = .5 * (2 - Math.pow(2, -10 * t))), t
    };
    D.Key.easeExpoInOut = function (t, e) {
        return t = H(t), D.Key.linear(t, this, e)
    }, D.Key.easeSinIn = function (t, e) {
        return t = -1 * Math.cos(t * Math.PI / 2) + 1, D.Key.linear(t, this, e)
    }, D.Key.easeSinOut = function (t, e) {
        return t = Math.sin(t * Math.PI / 2), D.Key.linear(t, this, e)
    }, D.Key.easeSinInOut = function (t, e) {
        return t = -.5 * (Math.cos(Math.PI * t) - 1), D.Key.linear(t, this, e)
    };
    const z = function (t) {
        return t *= t * t
    };
    D.Key.easeCubicIn = function (t, e) {
        return t = z(t), D.Key.linear(t, this, e)
    }, D.Key.easeInQuint = function (t, e) {
        return t *= t * t * t * t, D.Key.linear(t, this, e)
    }, D.Key.easeOutQuint = function (t, e) {
        return t = (t -= 1) * t * t * t * t + 1, D.Key.linear(t, this, e)
    }, D.Key.easeInOutQuint = function (t, e) {
        return (t /= .5) < 1 ? t *= .5 * t * t * t * t : t = .5 * ((t -= 2) * t * t * t * t + 2), D.Key.linear(t, this, e)
    }, D.Key.easeInQuart = function (t, e) {
        return t *= t * t * t, D.Key.linear(t, this, e)
    }, D.Key.easeOutQuart = function (t, e) {
        return t = -1 * ((t -= 1) * t * t * t - 1), D.Key.linear(t, this, e)
    }, D.Key.easeInOutQuart = function (t, e) {
        return (t /= .5) < 1 ? t *= .5 * t * t * t : t = -.5 * ((t -= 2) * t * t * t - 2), D.Key.linear(t, this, e)
    }, D.Key.bounce = function (t) {
        return (t /= 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, t
    }, D.Key.easeInBounce = function (t, e) {
        return D.Key.linear(D.Key.bounce(t), this, e)
    }, D.Key.easeOutBounce = function (t, e) {
        return D.Key.linear(D.Key.bounce(t), this, e)
    }, D.Key.easeInElastic = function (t, e) {
        let i = 1.70158,
            s = 0,
            n = 1;
        return 0 === t ? t = 0 : 1 == (t /= 1) ? t = 1 : (s || (s = .3), n < Math.abs(1) ? (n = 1, i = s / 4) : i = s / (2 * Math.PI) * Math.asin(1 / n), t = -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - i) * (2 * Math.PI) / s) + 0), D.Key.linear(t, this, e)
    }, D.Key.easeOutElastic = function (t, e) {
        let i = 1.70158,
            s = 0,
            n = 1;
        return 0 === t ? t = 0 : 1 == (t /= 1) ? t = 1 : (s || (s = .3), n < Math.abs(1) ? (n = 1, i = s / 4) : i = s / (2 * Math.PI) * Math.asin(1 / n), t = n * Math.pow(2, -10 * t) * Math.sin((1 * t - i) * (2 * Math.PI) / s) + 1 + 0), D.Key.linear(t, this, e)
    }, D.Key.easeInBack = function (t, e) {
        const i = 1.70158;
        return t = t * t * ((i + 1) * t - i), D.Key.linear(t, this, e)
    }, D.Key.easeOutBack = function (t, e) {
        const i = 1.70158;
        return t = (t = t / 1 - 1) * t * ((i + 1) * t + i) + 1, D.Key.linear(t, this, e)
    }, D.Key.easeInOutBack = function (t, e) {
        let i = 1.70158;
        return t = (t /= .5) < 1 ? t * t * ((1 + (i *= 1.525)) * t - i) * .5 : .5 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2), D.Key.linear(t, this, e)
    };
    const Y = function (t) {
        return t = --t * t * t + 1
    };
    D.Key.easeCubicOut = function (t, e) {
        return t = Y(t), D.Key.linear(t, this, e)
    };
    const W = function (t) {
        return (t *= 2) < 1 ? t *= .5 * t * t : t = .5 * ((t -= 2) * t * t + 2), t
    };
    D.Key.easeCubicInOut = function (t, e) {
        return t = W(t), D.Key.linear(t, this, e)
    }, D.Key.easeSmoothStep = function (t, e) {
        const i = Math.max(0, Math.min(1, t));
        return t = i * i * (3 - 2 * i), D.Key.linear(t, this, e)
    }, D.Key.easeSmootherStep = function (t, e) {
        const i = Math.max(0, Math.min(1, (t - 0) / 1));
        return t = i * i * i * (i * (6 * i - 15) + 10), D.Key.linear(t, this, e)
    }, D.Key.prototype.setEasing = function (t) {
        this._easing = t, this._easing == k.ANIM.EASING_ABSOLUTE ? this.ease = D.Key.easeAbsolute : this._easing == k.ANIM.EASING_SMOOTHSTEP ? this.ease = D.Key.easeSmoothStep : this._easing == k.ANIM.EASING_SMOOTHERSTEP ? this.ease = D.Key.easeSmootherStep : this._easing == k.ANIM.EASING_CUBIC_IN ? this.ease = D.Key.easeCubicIn : this._easing == k.ANIM.EASING_CUBIC_OUT ? this.ease = D.Key.easeCubicOut : this._easing == k.ANIM.EASING_CUBIC_INOUT ? this.ease = D.Key.easeCubicInOut : this._easing == k.ANIM.EASING_EXPO_IN ? this.ease = D.Key.easeExpoIn : this._easing == k.ANIM.EASING_EXPO_OUT ? this.ease = D.Key.easeExpoOut : this._easing == k.ANIM.EASING_EXPO_INOUT ? this.ease = D.Key.easeExpoInOut : this._easing == k.ANIM.EASING_SIN_IN ? this.ease = D.Key.easeSinIn : this._easing == k.ANIM.EASING_SIN_OUT ? this.ease = D.Key.easeSinOut : this._easing == k.ANIM.EASING_SIN_INOUT ? this.ease = D.Key.easeSinInOut : this._easing == k.ANIM.EASING_BACK_OUT ? this.ease = D.Key.easeOutBack : this._easing == k.ANIM.EASING_BACK_IN ? this.ease = D.Key.easeInBack : this._easing == k.ANIM.EASING_BACK_INOUT ? this.ease = D.Key.easeInOutBack : this._easing == k.ANIM.EASING_ELASTIC_IN ? this.ease = D.Key.easeInElastic : this._easing == k.ANIM.EASING_ELASTIC_OUT ? this.ease = D.Key.easeOutElastic : this._easing == k.ANIM.EASING_ELASTIC_INOUT ? this.ease = D.Key.easeElasticInOut : this._easing == k.ANIM.EASING_BOUNCE_IN ? this.ease = D.Key.easeInBounce : this._easing == k.ANIM.EASING_BOUNCE_OUT ? this.ease = D.Key.easeOutBounce : this._easing == k.ANIM.EASING_QUART_OUT ? this.ease = D.Key.easeOutQuart : this._easing == k.ANIM.EASING_QUART_IN ? this.ease = D.Key.easeInQuart : this._easing == k.ANIM.EASING_QUART_INOUT ? this.ease = D.Key.easeInOutQuart : this._easing == k.ANIM.EASING_QUINT_OUT ? this.ease = D.Key.easeOutQuint : this._easing == k.ANIM.EASING_QUINT_IN ? this.ease = D.Key.easeInQuint : this._easing == k.ANIM.EASING_QUINT_INOUT ? this.ease = D.Key.easeInOutQuint : this._easing == k.ANIM.EASING_BEZIER ? (this._updateBezier = !0, this.ease = D.Key.easeBezier) : (this._easing = k.ANIM.EASING_LINEAR, this.ease = D.Key.easeLinear)
    }, D.Key.prototype.trigger = function () {
        this.cb(), this.cbTriggered = !0
    }, D.Key.prototype.setValue = function (t) {
        this.value = t, this._updateBezier = !0, null !== this.onChange && this.onChange()
    }, D.Key.prototype.set = function (t) {
        t && (t.e && this.setEasing(t.e), t.cb && (this.cb = t.cb, this.cbTriggered = !1), t.b && (this.bezTime = t.b[0], this.bezValue = t.b[1], this.bezTimeIn = t.b[2], this.bezValueIn = t.b[3], this._updateBezier = !0), t.hasOwnProperty("t") && (this.time = t.t), t.hasOwnProperty("time") && (this.time = t.time), t.hasOwnProperty("v") ? this.value = t.v : t.hasOwnProperty("value") && (this.value = t.value)), null !== this.onChange && this.onChange()
    }, D.Key.prototype.getSerialized = function () {
        const t = {};
        return t.t = this.time, t.v = this.value, t.e = this._easing, this._easing == k.ANIM.EASING_BEZIER && (t.b = [this.bezTime, this.bezValue, this.bezTimeIn, this.bezValueIn]), t
    }, D.Key.prototype.getEasing = function () {
        return this._easing
    };
    const K = function (t) {
        this.keys = [], this.onChange = null, this.stayInTimeline = !1, this.loop = !1, this.defaultEasing = k.ANIM.EASING_LINEAR, this.onLooped = null, this._timesLooped = 0, this._needsSort = !1
    };
    K.prototype.forceChangeCallback = function () {
        null !== this.onChange && this.onChange()
    }, K.prototype.hasEnded = function (t) {
        return 0 === this.keys.length || this.keys[this.keys.length - 1].time <= t
    }, K.prototype.isRising = function (t) {
        if (this.hasEnded(t)) return !1;
        const e = this.getKeyIndex(t);
        return this.keys[e].value < this.keys[e + 1].value
    }, K.prototype.clear = function (t) {
        let e = 0;
        t && (e = this.getValue(t)), this.keys.length = 0, t && this.setValue(t, e), null !== this.onChange && this.onChange()
    }, K.prototype.sortKeys = function () {
        this.keys.sort((t, e) => parseFloat(t.time) - parseFloat(e.time)), this._needsSort = !1
    }, K.prototype.getLength = function () {
        return 0 === this.keys.length ? 0 : this.keys[this.keys.length - 1].time
    }, K.prototype.getKeyIndex = function (t) {
        let e = 0;
        for (let i = 0; i < this.keys.length; i++)
            if (t >= this.keys[i].time && (e = i), this.keys[i].time > t) return e;
        return e
    }, K.prototype.setValue = function (t, e, i) {
        let s = !1;
        for (const n in this.keys)
            if (this.keys[n].time == t) {
                s = this.keys[n], this.keys[n].setValue(e), this.keys[n].cb = i;
                break
            } s || this.keys.push(new D.Key({
            time: t,
            value: e,
            e: this.defaultEasing,
            cb: i
        })), this.onChange && this.onChange(), this._needsSort = !0
    }, K.prototype.getSerialized = function () {
        const t = {
            keys: []
        };
        t.loop = this.loop;
        for (const e in this.keys) t.keys.push(this.keys[e].getSerialized());
        return t
    }, K.prototype.getKey = function (t) {
        const e = this.getKeyIndex(t);
        return this.keys[e]
    }, K.prototype.getNextKey = function (t) {
        let e = this.getKeyIndex(t) + 1;
        return e >= this.keys.length && (e = this.keys.length - 1), this.keys[e]
    }, K.prototype.isFinished = function (t) {
        return this.keys.length <= 0 || t > this.keys[this.keys.length - 1].time
    }, K.prototype.isStarted = function (t) {
        return !(this.keys.length <= 0) && t >= this.keys[0].time
    }, K.prototype.getValue = function (t) {
        if (0 === this.keys.length) return 0;
        if (this._needsSort && this.sortKeys(), t < this.keys[0].time) return this.keys[0].value;
        const e = this.keys.length - 1;
        if (this.loop && t > this.keys[e].time) {
            t / this.keys[e].time > this._timesLooped && (this._timesLooped++, this.onLooped && this.onLooped()), t = (t - this.keys[0].time) % (this.keys[e].time - this.keys[0].time), t += this.keys[0].time
        }
        const i = this.getKeyIndex(t);
        if (i >= e) return this.keys[e].cb && !this.keys[e].cbTriggered && this.keys[e].trigger(), this.keys[e].value;
        const s = parseInt(i, 10) + 1,
            n = this.keys[i],
            r = this.keys[s];
        if (n.cb && !n.cbTriggered && n.trigger(), !r) return -1;
        const o = (t - n.time) / (r.time - n.time);
        return n.ease || console.log("has no ease", n, r), n.ease(o, r)
    }, K.prototype.addKey = function (t) {
        void 0 === t.time ? d.log("key time undefined, ignoring!") : (this.keys.push(t), null !== this.onChange && this.onChange())
    }, K.prototype.easingFromString = function (t) {
        return "linear" == t ? k.ANIM.EASING_LINEAR : "absolute" == t ? k.ANIM.EASING_ABSOLUTE : "smoothstep" == t ? k.ANIM.EASING_SMOOTHSTEP : "smootherstep" == t ? k.ANIM.EASING_SMOOTHERSTEP : "Cubic In" == t ? k.ANIM.EASING_CUBIC_IN : "Cubic Out" == t ? k.ANIM.EASING_CUBIC_OUT : "Cubic In Out" == t ? k.ANIM.EASING_CUBIC_INOUT : "Expo In" == t ? k.ANIM.EASING_EXPO_IN : "Expo Out" == t ? k.ANIM.EASING_EXPO_OUT : "Expo In Out" == t ? k.ANIM.EASING_EXPO_INOUT : "Sin In" == t ? k.ANIM.EASING_SIN_IN : "Sin Out" == t ? k.ANIM.EASING_SIN_OUT : "Sin In Out" == t ? k.ANIM.EASING_SIN_INOUT : "Back In" == t ? k.ANIM.EASING_BACK_IN : "Back Out" == t ? k.ANIM.EASING_BACK_OUT : "Back In Out" == t ? k.ANIM.EASING_BACK_INOUT : "Elastic In" == t ? k.ANIM.EASING_ELASTIC_IN : "Elastic Out" == t ? k.ANIM.EASING_ELASTIC_OUT : "Bounce In" == t ? k.ANIM.EASING_BOUNCE_IN : "Bounce Out" == t ? k.ANIM.EASING_BOUNCE_OUT : "Quart Out" == t ? k.ANIM.EASING_QUART_OUT : "Quart In" == t ? k.ANIM.EASING_QUART_IN : "Quart In Out" == t ? k.ANIM.EASING_QUART_INOUT : "Quint Out" == t ? k.ANIM.EASING_QUINT_OUT : "Quint In" == t ? k.ANIM.EASING_QUINT_IN : "Quint In Out" == t ? k.ANIM.EASING_QUINT_INOUT : void 0
    }, K.prototype.createPort = function (t, e, i) {
        const s = t.addInPort(new B(t, e, k.OP.OP_PORT_TYPE_VALUE, {
            display: "dropdown",
            values: k.ANIM.EASINGS
        }));
        return s.set("linear"), s.defaultValue = "linear", s.onChange = function () {
            this.defaultEasing = this.easingFromString(s.get()), i && i()
        }.bind(this), s
    }, K.slerpQuaternion = function (t, e, i, s, n, r) {
        K.slerpQuaternion.q1 || (K.slerpQuaternion.q1 = quat.create(), K.slerpQuaternion.q2 = quat.create());
        const o = i.getKeyIndex(t);
        let h = o + 1;
        if (h >= i.keys.length && (h = i.keys.length - 1), o == h) quat.set(e, i.keys[o].value, s.keys[o].value, n.keys[o].value, r.keys[o].value);
        else {
            const a = i.keys[o].time,
                l = (t - a) / (i.keys[h].time - a);
            quat.set(K.slerpQuaternion.q1, i.keys[o].value, s.keys[o].value, n.keys[o].value, r.keys[o].value), quat.set(K.slerpQuaternion.q2, i.keys[h].value, s.keys[h].value, n.keys[h].value, r.keys[h].value), quat.slerp(e, K.slerpQuaternion.q1, K.slerpQuaternion.q2, l)
        }
        return e
    };
    const X = D;
    X.Anim = K;
    const j = function (t) {
        _.apply(this), this.id = CABLES.uuid(), this.portIn = null, this.portOut = null, this.scene = t, this.activityCounter = 0
    };
    j.prototype.setValue = function (t) {
        void 0 === t ? this._setValue() : this.portIn.set(t)
    }, j.prototype.activity = function () {
        this.activityCounter++
    }, j.prototype._setValue = function () {
        if (!this.portOut) return void this.remove();
        const t = this.portOut.get();
        t == t && (this.portIn.type != k.OP.OP_PORT_TYPE_FUNCTION && this.activity(), (this.portIn.get() !== t || this.portIn.changeAlways) && this.portIn.set(t))
    }, j.prototype.getOtherPort = function (t) {
        return t == this.portIn ? this.portOut : this.portIn
    }, j.prototype.remove = function () {
        this.portIn && this.portIn.removeLink(this), this.portOut && this.portOut.removeLink(this), this.scene && this.scene.emitEvent("onUnLink", this.portIn, this.portOut, this), !this.portIn || this.portIn.type != k.OP.OP_PORT_TYPE_OBJECT && this.portIn.type != k.OP.OP_PORT_TYPE_ARRAY || (this.portIn.set(null), this.portIn.links.length > 0 && this.portIn.set(this.portIn.links[0].getOtherPort(this.portIn).get())), this.portIn && this.portIn.parent._checkLinksNeededToWork(), this.portOut && this.portOut.parent._checkLinksNeededToWork(), this.portIn = null, this.portOut = null, this.scene = null
    }, j.prototype.link = function (t, e) {
        if (!j.canLink(t, e)) return d.log("cannot link ports!"), !1;
        t.direction == k.PORT.PORT_DIR_IN ? (this.portIn = t, this.portOut = e) : (this.portIn = e, this.portOut = t), t.addLink(this), e.addLink(this), this.setValue(), t.onLink && t.onLink(this), e.onLink && e.onLink(this), t.parent._checkLinksNeededToWork(), e.parent._checkLinksNeededToWork()
    }, j.prototype.getSerialized = function () {
        const t = {};
        return t.portIn = this.portIn.getName(), t.portOut = this.portOut.getName(), t.objIn = this.portIn.parent.id, t.objOut = this.portOut.parent.id, t
    }, j.canLinkText = function (t, e) {
        if (t.direction == e.direction) {
            let t = "(out)";
            return e.direction == k.PORT.PORT_DIR_IN && (t = "(in)"), "can not link: same direction " + t
        }
        return t.parent == e.parent ? "can not link: same op" : t.type != k.OP.OP_PORT_TYPE_DYNAMIC && e.type != k.OP.OP_PORT_TYPE_DYNAMIC && t.type != e.type ? "can not link: different type" : t ? e ? t.direction == k.PORT.PORT_DIR_IN && t.isAnimated() || e.direction == k.PORT.PORT_DIR_IN && e.isAnimated() ? "can not link: is animated" : t.isLinkedTo(e) ? "ports already linked" : t.canLink && !t.canLink(e) || e.canLink && !e.canLink(t) ? "Incompatible" : "can link" : "can not link: port 2 invalid" : "can not link: port 1 invalid"
    }, j.canLink = function (t, e) {
        return !!t && (!!e && ((t.direction != k.PORT.PORT_DIR_IN || !t.isAnimated()) && ((e.direction != k.PORT.PORT_DIR_IN || !e.isAnimated()) && (!t.isHidden() && !e.isHidden() && (!t.isLinkedTo(e) && (t.direction != e.direction && ((t.type == e.type || t.type == k.OP.OP_PORT_TYPE_DYNAMIC || e.type == k.OP.OP_PORT_TYPE_DYNAMIC) && (t.type == k.OP.OP_PORT_TYPE_DYNAMIC || e.type == k.OP.OP_PORT_TYPE_DYNAMIC || t.parent != e.parent && (!(t.canLink && !t.canLink(e)) && !(e.canLink && !e.canLink(t)))))))))))
    };
    const q = function () {
        if (this.data = {}, this.objName = "", this.portsOut = [], this.portsIn = [], this.portsInData = [], this.opId = "", this.uiAttribs = {}, this.enabled = !0, this.patch = arguments[0], this.name = arguments[1], this._needsLinkedToWork = [], this._needsParentOp = null, this._shortOpName = "", this._hasUiErrors = !1, this._uiErrors = {}, arguments[1]) {
            if (this._shortOpName = arguments[1].split(".")[arguments[1].split(".").length - 1], this._shortOpName.indexOf(k.OP.OP_VERSION_PREFIX) > 0) {
                const t = this._shortOpName.split(k.OP.OP_VERSION_PREFIX)[1];
                this._shortOpName = this._shortOpName.substring(0, this._shortOpName.length - (k.OP.OP_VERSION_PREFIX + t).length)
            }
            this.uiAttribs.title = this._shortOpName
        }
        this.id = arguments[2] || b(), this.onAddPort = null, this.onCreate = null, this.onResize = null, this.onLoaded = null, this.onDelete = null, this.onUiAttrChange = null, this._eventCallbacks = {}, this._instances = null, this.preRender = null, this.init = null
    }; {
        q.prototype.clearUiAttrib = function (t) {
            const e = {
                name: null
            };
            this.uiAttrib(e)
        }, q.prototype.setTitle = function (t) {
            const e = this.name != t;
            this.name = t, this.uiAttr({
                title: t
            }), e && this.fireEvent("onTitleChange", t)
        };
        const t = function (t) {
            this.uiAttribs || (this.uiAttribs = {});
            for (const e in t) this.uiAttribs[e] = t[e];
            this.fireEvent("onUiAttribsChange", t)
        };
        q.prototype.setUiAttrib = t, q.prototype.uiAttr = t, q.prototype.getName = function () {
            return this.uiAttribs.name ? this.uiAttribs.name : this.objName.split(".")
        }, q.prototype.addOutPort = function (t) {
            return t.direction = k.PORT.PORT_DIR_OUT, t.parent = this, this.portsOut.push(t), this.onAddPort && this.onAddPort(t), t
        }, q.prototype.hasDynamicPort = function () {
            let t = 0;
            for (t = 0; t < this.portsIn.length; t++) {
                if (this.portsIn[t].type == k.OP.OP_PORT_TYPE_DYNAMIC) return !0;
                if ("dyn" == this.portsIn[t].getName()) return !0
            }
            for (t = 0; t < this.portsOut.length; t++) {
                if (this.portsOut[t].type == k.OP.OP_PORT_TYPE_DYNAMIC) return !0;
                if ("dyn" == this.portsOut[t].getName()) return !0
            }
            return !1
        }, q.prototype.addInPort = function (t) {
            if (!(t instanceof B)) throw new Error("parameter is not a port!");
            return t.direction = k.PORT.PORT_DIR_IN, t.parent = this, this.portsIn.push(t), this.onAddPort && this.onAddPort(t), t
        }, q.prototype.inFunction = q.prototype.inTrigger = function (t, e) {
            const i = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_FUNCTION));
            return void 0 !== e && i.set(e), i
        }, q.prototype.inFunctionButton = q.prototype.inTriggerButton = function (t, e) {
            const i = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_FUNCTION, {
                display: "button"
            }));
            return void 0 !== e && i.set(e), i
        }, q.prototype.inFunctionButton = q.prototype.inUiTriggerButtons = function (t, e) {
            const i = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_FUNCTION, {
                display: "buttons"
            }));
            return void 0 !== e && i.set(e), i
        }, q.prototype.inValueFloat = q.prototype.inValue = q.prototype.inFloat = function (t, e) {
            const i = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_VALUE));
            return void 0 !== e && (i.set(e), i.defaultValue = e), i
        }, q.prototype.inValueBool = q.prototype.inBool = function (t, e) {
            const i = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                display: "bool"
            }));
            return void 0 !== e && (i.set(e), i.defaultValue = e), i
        }, q.prototype.inValueString = function (t, e) {
            const i = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                type: "string"
            }));
            return i.value = "", void 0 !== e && (i.set(e), i.defaultValue = e), i
        }, q.prototype.inString = function (t, e) {
            const i = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_STRING, {
                type: "string"
            }));
            return e = e || "", i.value = e, i.set(e), i.defaultValue = e, i
        }, q.prototype.inValueText = function (t, e) {
            const i = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                type: "string",
                display: "text"
            }));
            return i.value = "", void 0 !== e && (i.set(e), i.defaultValue = e), i
        }, q.prototype.inTextarea = function (t, e) {
            const i = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_STRING, {
                type: "string",
                display: "text"
            }));
            return i.value = "", void 0 !== e && (i.set(e), i.defaultValue = e), i
        }, q.prototype.inStringEditor = function (t, e, i) {
            const s = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_STRING, {
                type: "string",
                display: "editor",
                editorSyntax: i
            }));
            return s.value = "", void 0 !== e && (s.set(e), s.defaultValue = e), s
        }, q.prototype.inValueEditor = function (t, e, i) {
            const s = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                type: "string",
                display: "editor",
                editorSyntax: i
            }));
            return s.value = "", void 0 !== e && (s.set(e), s.defaultValue = e), s
        }, q.prototype.inValueSelect = q.prototype.inDropDown = function (t, e, i, s) {
            let n = null;
            if (s) {
                const i = new B(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                    display: "dropdown",
                    hidePort: !0,
                    type: "string",
                    values: e
                });
                n = this.addInPort(i)
            } else {
                const s = new B(this, t + " index", k.OP.OP_PORT_TYPE_VALUE, {
                        increment: "integer",
                        hideParam: !0
                    }),
                    r = this.addInPort(s),
                    o = new U(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                        display: "dropdown",
                        hidePort: !0,
                        type: "string",
                        values: e
                    }, r);
                if (s.onLinkChanged = function () {
                        o.setUiAttribs({
                            greyout: s.isLinked()
                        })
                    }, n = this.addInPort(o), void 0 !== i) {
                    n.set(i);
                    const t = e.findIndex(t => t == i);
                    r.setValue(t), n.defaultValue = i, r.defaultValue = t
                }
            }
            return n
        }, q.prototype.inSwitch = function (t, e, i, s) {
            let n = null;
            if (s) {
                const i = new B(this, t, k.OP.OP_PORT_TYPE_STRING, {
                    display: "switch",
                    hidePort: !0,
                    type: "string",
                    values: e
                });
                n = this.addInPort(i)
            } else {
                const s = new B(this, t + " index", k.OP.OP_PORT_TYPE_VALUE, {
                        increment: "integer",
                        hideParam: !0
                    }),
                    r = this.addInPort(s),
                    o = new L(this, t, k.OP.OP_PORT_TYPE_STRING, {
                        display: "switch",
                        hidePort: !0,
                        type: "string",
                        values: e
                    }, r);
                if (s.onLinkChanged = function () {
                        o.setUiAttribs({
                            greyout: s.isLinked()
                        })
                    }, n = this.addInPort(o), void 0 !== i) {
                    n.set(i);
                    const t = e.findIndex(t => t == i);
                    r.setValue(t), n.defaultValue = i, r.defaultValue = t
                }
            }
            return n
        }, q.prototype.inValueInt = q.prototype.inInt = function (t, e) {
            const i = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                increment: "integer"
            }));
            return void 0 !== e && (i.set(e), i.defaultValue = e), i
        }, q.prototype.inFile = function (t, e, i) {
            const s = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                display: "file",
                filter: e
            }));
            return void 0 !== i && (s.set(i), s.defaultValue = i), s
        }, q.prototype.inUrl = function (t, e, i) {
            const s = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_STRING, {
                display: "file",
                filter: e
            }));
            return void 0 !== i && (s.set(i), s.defaultValue = i), s
        }, q.prototype.inTexture = function (t, e) {
            const i = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_OBJECT, {
                display: "texture",
                preview: !0
            }));
            return void 0 !== e && i.set(e), i
        }, q.prototype.inObject = function (t, e, i) {
            const s = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_OBJECT, i));
            return void 0 !== e && s.set(e), s
        }, q.prototype.inGradient = function (t, e) {
            const i = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                display: "gradient",
                hidePort: !0
            }));
            return void 0 !== e && i.set(e), i
        }, q.prototype.inArray = function (t, e) {
            const i = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_ARRAY));
            return void 0 !== e && i.set(e), i
        }, q.prototype.inValueSlider = q.prototype.inFloatSlider = function (t, e) {
            const i = this.addInPort(new B(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                display: "range"
            }));
            return void 0 !== e && (i.set(e), i.defaultValue = e), i
        }, q.prototype.outFunction = q.prototype.outTrigger = function (t, e) {
            const i = this.addOutPort(new B(this, t, k.OP.OP_PORT_TYPE_FUNCTION));
            return void 0 !== e && i.set(e), i
        }, q.prototype.outValue = q.prototype.outNumber = function (t, e) {
            const i = this.addOutPort(new B(this, t, k.OP.OP_PORT_TYPE_VALUE));
            return void 0 !== e && i.set(e), i
        }, q.prototype.outValueBool = q.prototype.outBool = function (t, e) {
            const i = this.addOutPort(new B(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                display: "bool"
            }));
            return void 0 !== e ? i.set(e) : i.set(!1), i
        }, q.prototype.outValueString = function (t, e) {
            const i = this.addOutPort(new B(this, t, k.OP.OP_PORT_TYPE_VALUE, {
                type: "string"
            }));
            return void 0 !== e && i.set(e), i
        }, q.prototype.outString = function (t, e) {
            const i = this.addOutPort(new B(this, t, k.OP.OP_PORT_TYPE_STRING, {
                type: "string"
            }));
            return void 0 !== e ? i.set(e) : i.set(""), i
        }, q.prototype.outObject = function (t, e) {
            const i = this.addOutPort(new B(this, t, k.OP.OP_PORT_TYPE_OBJECT));
            return void 0 !== e && i.set(e), i.ignoreValueSerialize = !0, i
        }, q.prototype.outArray = function (t, e) {
            const i = this.addOutPort(new B(this, t, k.OP.OP_PORT_TYPE_ARRAY));
            return void 0 !== e && i.set(e), i.ignoreValueSerialize = !0, i
        }, q.prototype.outTexture = function (t, e) {
            const i = this.addOutPort(new B(this, t, k.OP.OP_PORT_TYPE_OBJECT, {
                preview: !0
            }));
            return void 0 !== e && i.set(e), i.ignoreValueSerialize = !0, i
        }, q.prototype.inDynamic = function (t, e, i, s) {
            const n = new B(this, t, k.OP.OP_PORT_TYPE_DYNAMIC, i);
            return n.shouldLink = function (t, i) {
                if (e && g.isArray(e)) {
                    for (let s = 0; s < e.length; s++) {
                        if (t == this && i.type === e[s]) return !0;
                        if (i == this && t.type === e[s]) return !0
                    }
                    return !1
                }
                return !0
            }, this.addInPort(n), void 0 !== s && (n.set(s), n.defaultValue = s), n
        }, q.prototype.printInfo = function () {
            for (let t = 0; t < this.portsIn.length; t++) d.log("in: " + this.portsIn[t].getName());
            for (const t in this.portsOut) d.log("out: " + this.portsOut[t].getName())
        }, q.prototype.getOutChilds = function () {
            const t = [];
            for (const e in this.portsOut)
                for (const i in this.portsOut[e].links) this.portsOut[e].type == k.OP.OP_PORT_TYPE_FUNCTION && t.push(this.portsOut[e].links[i].portIn.parent);
            return t
        }, q.prototype.markChilds = function () {
            this.marked = !0;
            for (const t in this.portsOut)
                for (const e in this.portsOut[t].links) this.portsOut[t].parent.marked = !0, this.portsOut[t].links[e].portIn.parent != this && this.portsOut[t].links[e].portIn.parent.markChilds()
        }, q.prototype.deleteChilds = function () {
            const t = [];
            for (const e in this.portsOut)
                for (const i in this.portsOut[e].links) this.portsOut[e].links[i].portIn.parent != this && (this.portsOut[e].parent != this && t.push(this.portsOut[e].parent), t.push(this.portsOut[e].links[i].portIn.parent), this.portsOut[e].links[i].portIn.parent.deleteChilds());
            for (const e in t) this.patch.deleteOp(t[e].id)
        }, q.prototype.removeLinks = function () {
            for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].removeLinks();
            for (let t = 0; t < this.portsOut.length; t++) this.portsOut[t].removeLinks()
        }, q.prototype.countFittingPorts = function (t) {
            let e = 0;
            for (const i in this.portsOut) j.canLink(t, this.portsOut[i]) && e++;
            for (const i in this.portsIn) j.canLink(t, this.portsIn[i]) && e++;
            return e
        }, q.prototype.findFittingPort = function (t) {
            for (const e in this.portsOut)
                if (j.canLink(t, this.portsOut[e])) return this.portsOut[e];
            for (const e in this.portsIn)
                if (j.canLink(t, this.portsIn[e])) return this.portsIn[e]
        }, q.prototype.getSerialized = function () {
            const t = {};
            this.opId && (t.opId = this.opId), t.objName = this.objName, t.id = this.id, t.uiAttribs = this.uiAttribs, this.uiAttribs.title == this._shortOpName && delete this.uiAttribs.title, this.uiAttribs.hasOwnProperty("working") && 1 == this.uiAttribs.working && delete this.uiAttribs.working, this.uiAttribs.hasOwnProperty("uierrors") && delete this.uiAttribs.uierrors, t.portsIn = [], t.portsOut = [];
            for (let e = 0; e < this.portsIn.length; e++) t.portsIn.push(this.portsIn[e].getSerialized());
            for (const e in this.portsOut) t.portsOut.push(this.portsOut[e].getSerialized());
            return t
        }, q.prototype.getFirstOutPortByType = function (t) {
            for (const e in this.portsOut)
                if (this.portsOut[e].type == t) return this.portsOut[e]
        }, q.prototype.getPort = q.prototype.getPortByName = function (t) {
            for (let e = 0; e < this.portsIn.length; e++)
                if (this.portsIn[e].getName() == t) return this.portsIn[e];
            for (let e = 0; e < this.portsOut.length; e++)
                if (this.portsOut[e].getName() == t) return this.portsOut[e]
        }, q.prototype.getPortById = function (t) {
            for (let e = 0; e < this.portsIn.length; e++)
                if (this.portsIn[e].id == t) return this.portsIn[e];
            for (let e = 0; e < this.portsOut.length; e++)
                if (this.portsOut[e].id == t) return this.portsOut[e]
        }, q.prototype.updateAnims = function () {
            for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].updateAnim()
        }, q.prototype.log = function () {
            if (this.patch.silent) return;
            const t = ["[op " + this._shortOpName + "]"];
            t.push.apply(t, arguments), Function.prototype.apply.apply(console.log, [console, t])
        }, q.prototype.error = function () {
            if (this.patch.silent) return;
            const t = ["[op " + this._shortOpName + "]"];
            t.push.apply(t, arguments), Function.prototype.apply.apply(console.error, [console, t])
        }, q.prototype.warn = function () {
            if (this.patch.silent) return;
            const t = ["[op " + this._shortOpName + "]"];
            t.push.apply(t, arguments), Function.prototype.apply.apply(console.warn, [console, t])
        }, q.prototype.unLink = function () {
            for (let t = 0; t < this.portsOut.length; t++) this.portsOut[t].removeLinks();
            for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].removeLinks()
        }, q.unLinkTempReLinkP1 = null, q.unLinkTempReLinkP2 = null, q.prototype.undoUnLinkTemporary = function () {
            if (this.shakeLink && this.shakeLink.remove(), this.shakeLink = null, this.oldLinks) {
                for (let t = 0; t < this.oldLinks.length; t++) this.patch.link(this.oldLinks[t].in.parent, this.oldLinks[t].in.getName(), this.oldLinks[t].out.parent, this.oldLinks[t].out.getName());
                this.oldLinks.length = 0
            }
            q.unLinkTempReLinkP1 = null, q.unLinkTempReLinkP2 = null
        }, q.prototype.unLinkTemporary = function () {
            let t = 0;
            this.shakeLink = null, this.oldLinks = [], this.portsIn.length > 0 && this.portsIn[0].isLinked() && this.portsOut.length > 0 && this.portsOut[0].isLinked() && this.portsIn[0].getType() == this.portsOut[0].getType() && (q.unLinkTempReLinkP1 = this.portsIn[0].links[0].getOtherPort(this.portsIn[0]), q.unLinkTempReLinkP2 = this.portsOut[0].links[0].getOtherPort(this.portsOut[0]));
            for (let e = 0; e < this.portsIn.length; e++)
                for (t = 0; t < this.portsIn[e].links.length; t++) this.oldLinks.push({
                    in: this.portsIn[e].links[t].portIn,
                    out: this.portsIn[e].links[t].portOut
                });
            for (let e = 0; e < this.portsOut.length; e++)
                for (t = 0; t < this.portsOut[e].links.length; t++) this.oldLinks.push({
                    in: this.portsOut[e].links[t].portIn,
                    out: this.portsOut[e].links[t].portOut
                });
            this.unLink(), q.unLinkTempReLinkP1 && q.unLinkTempReLinkP2 && (this.shakeLink = this.patch.link(q.unLinkTempReLinkP1.parent, q.unLinkTempReLinkP1.getName(), q.unLinkTempReLinkP2.parent, q.unLinkTempReLinkP2.getName()))
        }, q.prototype.profile = function (t) {
            for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t]._onTriggered = this.portsIn[t]._onTriggeredProfiling, this.portsIn[t].set = this.portsIn[t]._onSetProfiling
        }, q.prototype.findParent = function (t) {
            for (let e = 0; e < this.portsIn.length; e++)
                if (this.portsIn[e].isLinked()) {
                    if (this.portsIn[e].links[0].portOut.parent.objName == t) return this.portsIn[e].links[0].portOut.parent;
                    let i = null;
                    if (i = this.portsIn[e].links[0].portOut.parent.findParent(t), i) return i
                } return null
        }, q.prototype.cleanUp = function () {
            if (this._instances) {
                for (let t = 0; t < this._instances.length; t++) this._instances[t].onDelete && this._instances[t].onDelete();
                this._instances.length = 0
            }
        }, q.prototype.instanced = function (t) {
            if (0 === this.patch.instancing.numCycles()) return !1;
            let e = 0,
                i = 0;
            if (!this._instances || this._instances.length != this.patch.instancing.numCycles()) {
                for (this._instances || (this._instances = []), d.log("creating instances of ", this.objName, this.patch.instancing.numCycles(), this._instances.length), this._instances.length = this.patch.instancing.numCycles(), e = 0; e < this._instances.length; e++) {
                    this._instances[e] = this.patch.createOp(this.objName, !0), this._instances[e].instanced = function () {
                        return !1
                    }, this._instances[e].uiAttr(this.uiAttribs);
                    for (let t = 0; t < this.portsOut.length; t++) this.portsOut[t].type == k.OP.OP_PORT_TYPE_FUNCTION && (this._instances[e].getPortByName(this.portsOut[t].name).trigger = this.portsOut[t].trigger.bind(this.portsOut[t]))
                }
                for (i = 0; i < this.portsIn.length; i++) this.portsIn[i].onChange = null, this.portsIn[i].onValueChanged = null
            }
            for (i = 0; i < this.portsIn.length; i++) this.portsIn[i].type != k.OP.OP_PORT_TYPE_VALUE && this.portsIn[i].type != k.OP.OP_PORT_TYPE_ARRAY || this._instances[this.patch.instancing.index()].portsIn[i].set(this.portsIn[i].get()), this.portsIn[i].type, k.OP.OP_PORT_TYPE_FUNCTION;
            for (i = 0; i < this.portsOut.length; i++) this.portsOut[i].type == k.OP.OP_PORT_TYPE_VALUE && this.portsOut[i].set(this._instances[this.patch.instancing.index()].portsOut[i].get());
            return !0
        }, q.prototype.initInstancable = function () {}, q.prototype.setValues = function (t) {
            for (const e in t) {
                const i = this.getPortByName(e);
                i ? i.set(t[e]) : d.log("op.setValues: port not found:", e)
            }
        }, q.prototype.setUiError = function (t, e, i) {
            if (!e && !this._hasUiErrors) return;
            if (!e && !this._uiErrors.hasOwnProperty(t)) return;
            if (this._uiErrors.hasOwnProperty(t) && this._uiErrors[t].txt == e) return;
            !e && this._uiErrors.hasOwnProperty(t) ? delete this._uiErrors[t] : !e || this._uiErrors.hasOwnProperty(t) && this._uiErrors[t].txt == e || (null == i && (i = 2), this._uiErrors[t] = {
                txt: e,
                level: i
            });
            const s = [];
            for (const t in this._uiErrors) s.push(this._uiErrors[t]);
            this.uiAttr({
                error: null
            }), this.uiAttr({
                uierrors: s
            }), this._hasUiErrors = Object.keys(this._uiErrors).length
        }, q.prototype.setError = q.prototype.error = function (t, e) {
            if (console.warn("old error message op.error() - use op.setUiError()"), void 0 === e) this.uiAttr({
                error: t
            });
            else if (this._uiErrors[t] != e) {
                this._uiErrors[t] = e, e || delete this._uiErrors[t];
                const i = [];
                for (const t in this._uiErrors) i.push(this._uiErrors[t]);
                this.uiAttr({
                    errors: i
                }), console.log(i)
            }
        }, q.prototype.addListener = q.prototype.addEventListener = function (t, e) {
            this._eventCallbacks[t] ? this._eventCallbacks[t].push(e) : this._eventCallbacks[t] = [e]
        }, q.prototype.hasEventListener = function (t, e) {
            if (t && e) {
                if (this._eventCallbacks[t]) {
                    return -1 != this._eventCallbacks[t].indexOf(e)
                }
            } else d.log("hasListener: missing parameters")
        }, q.prototype.removeEventListener = function (t, e) {
            if (this._eventCallbacks[t]) {
                const i = this._eventCallbacks[t].indexOf(e); - 1 == i ? d.log("eventlistener " + t + " not found...") : this._eventCallbacks[t].slice(i)
            }
        }, q.prototype.fireEvent = function (t, e) {
            if (this._eventCallbacks[t])
                for (let i = 0; i < this._eventCallbacks[t].length; i++) this._eventCallbacks[t][i] && this._eventCallbacks[t][i](e);
            this.onUiAttrChange && "onUiAttribsChange" == t && this.onUiAttrChange(e)
        }, q.prototype.setEnabled = function (t) {
            this.enabled = t, this.fireEvent("onEnabledChange", t)
        }, q.prototype.setPortGroup = function (t, e) {
            for (let i = 0; i < e.length; i++) e[i] && e[i].setUiAttribs ? e[i].setUiAttribs({
                group: t
            }) : console.error("setPortGroup: invalid port!")
        }, q.prototype.setUiAxisPorts = function (t, e, i) {
            t && t.setUiAttribs({
                axis: "X"
            }), e && e.setUiAttribs({
                axis: "Y"
            }), i && i.setUiAttribs({
                axis: "Z"
            })
        }, q.prototype.removePort = function (t) {
            for (let e = 0; e < this.portsIn.length; e++)
                if (this.portsIn[e] == t) return this.portsIn.splice(e, 1), this.fireEvent("onUiAttribsChange", {}), void this.fireEvent("onPortRemoved", {})
        }, q.prototype._checkLinksNeededToWork = function () {}, q.prototype.toWorkNeedsParent = function (t) {
            this.patch.isEditorMode() && (this._needsParentOp = t)
        }, q.prototype.toWorkPortsNeedToBeLinked = function () {
            if (this.patch.isEditorMode())
                for (let t = 0; t < arguments.length; t++) - 1 == this._needsLinkedToWork.indexOf(arguments[t]) && this._needsLinkedToWork.push(arguments[t])
        }, q.prototype.toWorkPortsNeedToBeLinkedReset = function () {
            this.patch.isEditorMode() && (this._needsLinkedToWork.length = 0, this.checkLinkTimeWarnings && this.checkLinkTimeWarnings())
        }, q.prototype.initVarPorts = function () {
            for (let t = 0; t < this.portsIn.length; t++) this.portsIn[t].getVariableName() && this.portsIn[t].setVariable(this.portsIn[t].getVariableName())
        }, q.prototype.refreshParams = function () {
            this.patch && this.patch.isEditorMode() && gui.opParams.show(this)
        }, q.prototype.isCurrentUiOp = function () {
            if (this.patch.isEditorMode()) return gui.patchView.isCurrentOp(this)
        }
    }
    q.getNamespaceClassName = function (t) {
        return t ? t.startsWith("Ops.Gl") ? "gl" : t.startsWith("Ops.WebAudio") ? "audio" : t.startsWith("Ops.Devices") ? "devices" : t.startsWith("Ops.Html") || t.startsWith("Ops.Sidebar") ? "html" : t.startsWith("Ops.Math") ? "math" : t.startsWith("Ops.User") ? "user" : "default" : "default"
    }, q.isSubpatchOp = function (t) {
        return "Ops.Ui.Patch" == t || "Ops.Ui.SubPatch" == t
    };
    const Q = new function () {
            this.pause = !1, this.profileUniformCount = 0, this.profileShaderBinds = 0, this.profileUniformCount = 0, this.profileShaderCompiles = 0, this.profileVideosPlaying = 0, this.profileMVPMatrixCount = 0, this.profileEffectBuffercreate = 0, this.profileShaderGetUniform = 0, this.profileFrameBuffercreate = 0, this.profileMeshSetGeom = 0, this.profileTextureNew = 0, this.profileGenMipMap = 0, this.profileOnAnimFrameOps = 0, this.profileMainloopMs = 0, this.profileMeshDraw = 0, this.profileTextureEffect = 0
        },
        J = function (t, e) {
            if (!t) throw new Error("no cgl");
            this._cgl = t, this.tex = this._cgl.gl.createTexture(), this.id = b(), this.width = 0, this.height = 0, this.flip = !0, this.flipped = !1, this.shadowMap = !1, this.anisotropic = 0, this.filter = J.FILTER_NEAREST, this.wrap = J.WRAP_CLAMP_TO_EDGE, this.texTarget = this._cgl.gl.TEXTURE_2D, e && e.type && (this.texTarget = e.type), this.textureType = J.TYPE_DEFAULT, this.unpackAlpha = !0, this._fromData = !0, this.name = "unknown", e ? (this.name = e.name || this.name, e.isDepthTexture && (this.textureType = J.TYPE_DEPTH), e.isFloatingPointTexture && (this.textureType = J.TYPE_FLOAT), "textureType" in e && (this.textureType = e.textureType), "filter" in e && (this.filter = e.filter), "wrap" in e && (this.wrap = e.wrap), "unpackAlpha" in e && (this.unpackAlpha = e.unpackAlpha), "flip" in e && (this.flip = e.flip), "shadowMap" in e && (this.shadowMap = e.shadowMap), "anisotropic" in e && (this.anisotropic = e.anisotropic)) : e = {
                width: 8,
                height: 8
            }, Q.profileTextureNew++, this.setSize(e.width, e.height)
        };
    J.prototype.compareSettings = function (t) {
        return !!t && (t.width == this.width && t.height == this.height && t.filter == this.filter && t.wrap == this.wrap && t.textureType == this.textureType && t.unpackAlpha == this.unpackAlpha && t.flip == this.flip)
    }, J.prototype.clone = function () {
        const t = new J(this._cgl, {
            name: this.name,
            filter: this.filter,
            wrap: this.wrap,
            textureType: this.textureType,
            unpackAlpha: this.unpackAlpha,
            flip: this.flip,
            width: this.width,
            height: this.height
        });
        return this.compareSettings(t) || (console.error("Cloned texture settings do not compare!"), d.log(this), d.log(t)), t
    }, J.prototype.setSize = function (t, e) {
        if ((t != t || t <= 0 || !t) && (t = 8), (e != e || e <= 0 || !e) && (e = 8), (t > this._cgl.maxTexSize || e > this._cgl.maxTexSize) && console.error("texture size too big! " + t + "x" + e + " / max: " + this._cgl.maxTexSize), t = Math.min(t, this._cgl.maxTexSize), e = Math.min(e, this._cgl.maxTexSize), t = Math.floor(t), e = Math.floor(e), this.width == t && this.height == e) return;
        this.width = t, this.height = e, this._cgl.gl.bindTexture(this.texTarget, this.tex), Q.profileTextureResize++;
        if (this.textureType != J.TYPE_FLOAT || this.filter != J.FILTER_LINEAR || this._cgl.gl.getExtension("OES_texture_float_linear") || (console.warn("this graphics card does not support floating point texture linear interpolation!"), this.filter = J.FILTER_NEAREST), this._setFilter(), this.textureType == J.TYPE_FLOAT)
            if (1 == this._cgl.glVersion)
                if (this._cgl.glUseHalfFloatTex) {
                    const i = this._cgl.gl.getExtension("OES_texture_half_float");
                    if (1 == this._cgl.glVersion && !i) throw new Error("no half float texture extension");
                    this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, i.HALF_FLOAT_OES, null)
                } else {
                    this._cgl.gl.getExtension("OES_texture_float");
                    this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, null)
                }
        else this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA32F, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, null);
        else if (this.textureType == J.TYPE_DEPTH)
            if (1 == this._cgl.glVersion) {
                const i = this._cgl.gl.DEPTH_COMPONENT;
                this._cgl.gl.texImage2D(this.texTarget, 0, i, t, e, 0, this._cgl.gl.DEPTH_COMPONENT, this._cgl.gl.UNSIGNED_SHORT, null)
            } else {
                const i = this._cgl.gl.DEPTH_COMPONENT32F;
                this._cgl.gl.texImage2D(this.texTarget, 0, i, t, e, 0, this._cgl.gl.DEPTH_COMPONENT, this._cgl.gl.FLOAT, null)
            }
        else this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, null);
        this.updateMipMap(), this._cgl.gl.bindTexture(this.texTarget, null)
    }, J.prototype.initFromData = function (t, e, i, s, n) {
        this.filter = s, this.wrap = n, null == s && (this.filter = J.FILTER_LINEAR), null == n && (this.wrap = J.CLAMP_TO_EDGE), this.width = e, this.height = i, this._fromData = !0, this._cgl.gl.bindTexture(this.texTarget, this.tex), this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, e, i, 0, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, t), this._setFilter(), this.updateMipMap(), this._cgl.gl.bindTexture(this.texTarget, null)
    }, J.prototype.updateMipMap = function () {
        2 != this._cgl.glVersion && !this.isPowerOfTwo() || this.filter != J.FILTER_MIPMAP || (this._cgl.gl.generateMipmap(this.texTarget), Q.profileGenMipMap++)
    }, J.prototype.initTexture = function (t, e) {
        this._fromData = !1, this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha), t.width && (this.width = t.width), t.height && (this.height = t.height), e && (this.filter = e), this._cgl.gl.bindTexture(this.texTarget, this.tex), this.flipped = !this.flip, this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flipped), this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, t), this._setFilter(), this.updateMipMap(), this._cgl.gl.bindTexture(this.texTarget, null), this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1)
    }, J.prototype.delete = function () {
        this.width = 0, this.height = 0, Q.profileTextureDelete++, this._cgl.gl.deleteTexture(this.tex)
    }, J.prototype.isPowerOfTwo = function () {
        return J.isPowerOfTwo(this.width) && J.isPowerOfTwo(this.height)
    }, J.prototype.printInfo = function () {
        d.log(this.getInfo())
    }, J.prototype.getInfoReadable = function () {
        const t = this.getInfo();
        let e = "";
        t.name = t.name.substr(0, t.name.indexOf("?rnd="));
        for (const i in t) e += "* " + i + ":  **" + t[i] + "**\n";
        return e
    }, J.prototype.getInfo = function () {
        const t = {};
        t.name = this.name, t["power of two"] = this.isPowerOfTwo(), t.size = this.width + " x " + this.height;
        let e = this.texTarget;
        return this.texTarget == this._cgl.gl.TEXTURE_2D && (e = "TEXTURE_2D"), t.target = e, t.unpackAlpha = this.unpackAlpha, this.textureType == J.TYPE_FLOAT ? t.textureType = "TYPE_FLOAT" : this.textureType == J.TYPE_DEPTH ? t.textureType = "TYPE_DEPTH" : this.textureType == J.TYPE_DEFAULT ? t.textureType = "TYPE_DEFAULT" : t.textureType = "UNKNOWN", this.wrap == J.WRAP_CLAMP_TO_EDGE ? t.wrap = "CLAMP_TO_EDGE" : this.wrap == J.WRAP_REPEAT ? t.wrap = "WRAP_REPEAT" : this.wrap == J.WRAP_MIRRORED_REPEAT ? t.wrap = "WRAP_MIRRORED_REPEAT" : t.wrap = "UNKNOWN", this.filter == J.FILTER_NEAREST ? t.filter = "FILTER_NEAREST" : this.filter == J.FILTER_LINEAR ? t.filter = "FILTER_LINEAR" : this.filter == J.FILTER_MIPMAP ? t.filter = "FILTER_MIPMAP" : t.filter = "UNKNOWN", t
    }, J.prototype._setFilter = function () {
        if (this._fromData || this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha), this.shadowMap && (d.log("shadowmap tex"), this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_MODE, this._cgl.gl.COMPARE_REF_TO_TEXTURE), this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_FUNC, this._cgl.gl.LEQUAL)), this.textureType == J.TYPE_FLOAT && this.filter == J.FILTER_MIPMAP && (d.log("texture: HDR and mipmap filtering at the same time is not possible"), this.filter = J.FILTER_LINEAR), 1 != this._cgl.glVersion || this.isPowerOfTwo()) {
            if (this.wrap == J.WRAP_CLAMP_TO_EDGE ? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE)) : this.wrap == J.WRAP_REPEAT ? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.REPEAT), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.REPEAT)) : this.wrap == J.WRAP_MIRRORED_REPEAT && (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.MIRRORED_REPEAT), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.MIRRORED_REPEAT)), this.filter == J.FILTER_NEAREST) this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);
            else if (this.filter == J.FILTER_LINEAR) this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
            else {
                if (this.filter != J.FILTER_MIPMAP) throw d.log("unknown texture filter!", this.filter), new Error("unknown texture filter!" + this.filter);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR_MIPMAP_LINEAR)
            }
            if (this.anisotropic) {
                const t = this._cgl.gl.getExtension("EXT_texture_filter_anisotropic");
                if (t) {
                    const e = this._cgl.gl.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    this._cgl.gl.texParameterf(this._cgl.gl.TEXTURE_2D, t.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(e, this.anisotropic))
                }
            }
        } else this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE), this.filter = J.FILTER_NEAREST, this.wrap = J.WRAP_CLAMP_TO_EDGE
    }, J.load = function (t, e, i, s) {
        const n = t.patch.loading.start("texture", e),
            r = new J(t);
        return r.name = e, t.patch.isEditorMode() && gui.jobs().start({
            id: "loadtexture" + n,
            title: "loading texture (" + e + ")"
        }), r.image = new Image, r.image.crossOrigin = "anonymous", s && s.hasOwnProperty("filter") && (r.filter = s.filter), s && s.hasOwnProperty("flip") && (r.flip = s.flip), s && s.hasOwnProperty("wrap") && (r.wrap = s.wrap), s && s.hasOwnProperty("anisotropic") && (r.anisotropic = s.anisotropic), s && s.hasOwnProperty("unpackAlpha") && (r.unpackAlpha = s.unpackAlpha), r.image.onabort = r.image.onerror = function (e) {
            d.warn("[cgl.texture.load] error loading texture", e), t.patch.loading.finished(n);
            i && i({
                error: !0
            }), t.patch.isEditorMode() && gui.jobs().finish("loadtexture" + n)
        }, r.image.onload = function (e) {
            r.initTexture(r.image), t.patch.loading.finished(n), t.patch.isEditorMode() && gui.jobs().finish("loadtexture" + n), i && i(null, r)
        }, r.image.src = e, r
    }, J.getTempTexture = function (t) {
        return t || console.error("[getTempTexture] no cgl!"), t.tempTexture || (t.tempTexture = J.getTemporaryTexture(t, 256, J.FILTER_LINEAR, J.REPEAT)), t.tempTexture
    }, J.getEmptyTexture = function (t) {
        if (t || console.error("[getEmptyTexture] no cgl!"), t.tempTextureEmpty) return t.tempTextureEmpty;
        t.tempTextureEmpty = new J(t);
        const e = new Uint8Array(256);
        return t.tempTextureEmpty.initFromData(e, 8, 8, J.FILTER_NEAREST, J.WRAP_REPEAT), t.tempTextureEmpty
    }, J.getRandomTexture = function (t) {
        if (t || console.error("[getRandomTexture] no cgl!"), t.randomTexture) return t.randomTexture;
        const e = new Uint8Array(262144);
        for (let t = 0; t < 65536; t++) e[4 * t + 0] = 255 * Math.random(), e[4 * t + 1] = 255 * Math.random(), e[4 * t + 2] = 255 * Math.random(), e[4 * t + 3] = 255;
        return t.randomTexture = new J(t), t.randomTexture.initFromData(e, 256, 256, J.FILTER_NEAREST, J.WRAP_REPEAT), t.randomTexture
    }, J.getTempGradientTexture = function (t) {
        if (t || console.error("[getTempGradientTexture] no cgl!"), t.tempTextureGradient) return t.tempTextureGradient;
        const e = new J(t),
            i = new Uint8Array(262144);
        for (let t = 0; t < 256; t++)
            for (let e = 0; e < 256; e++) i[4 * (e + 256 * t) + 0] = i[4 * (e + 256 * t) + 1] = i[4 * (e + 256 * t) + 2] = 255 - t, i[4 * (e + 256 * t) + 3] = 255;
        return e.initFromData(i, 256, 256, J.FILTER_NEAREST, J.WRAP_REPEAT), t.tempTextureGradient = e, e
    }, J.getTemporaryTexture = function (t, e, i, s) {
        const n = new J(t),
            r = [];
        for (let t = 0; t < e; t++)
            for (let i = 0; i < e; i++)(i + t) % 64 < 32 ? (r.push(200 + t / e * 25 + i / e * 25), r.push(200 + t / e * 25 + i / e * 25), r.push(200 + t / e * 25 + i / e * 25)) : (r.push(40 + t / e * 25 + i / e * 25), r.push(40 + t / e * 25 + i / e * 25), r.push(40 + t / e * 25 + i / e * 25)), r.push(255);
        const o = new Uint8Array(r);
        return n.initFromData(o, e, e, i, s), n
    }, J.createFromImage = function (t, e, i) {
        const s = new J(t, i = i || {});
        return s.flip = !1, s.image = e, s.width = e.width, s.height = e.height, s.initTexture(e, i.filter), s
    }, J.fromImage = function (t, e, i, s) {
        d.error("deprecated texture from image...");
        const n = new J(t);
        return n.flip = !1, i && (n.filter = i), s && (n.wrap = s), n.image = e, n.initTexture(e), n
    }, J.isPowerOfTwo = function (t) {
        return 1 == t || 2 == t || 4 == t || 8 == t || 16 == t || 32 == t || 64 == t || 128 == t || 256 == t || 512 == t || 1024 == t || 2048 == t || 4096 == t || 8192 == t || 16384 == t
    }, J.FILTER_NEAREST = 0, J.FILTER_LINEAR = 1, J.FILTER_MIPMAP = 2, J.WRAP_REPEAT = 0, J.WRAP_MIRRORED_REPEAT = 1, J.WRAP_CLAMP_TO_EDGE = 2, J.TYPE_DEFAULT = 0, J.TYPE_DEPTH = 1, J.TYPE_FLOAT = 2;
    const Z = function (t, e, i, s) {
        this.Framebuffer2DrawTargetsDefault = null, this.Framebuffer2BlittingFramebuffer = null, this.Framebuffer2FinalFramebuffer = null, this._cgl = t, this._width = 0, this._height = 0, this._depthRenderbuffer = null, this._frameBuffer = null, this._textureFrameBuffer = null, this._colorRenderbuffers = [], this._drawTargetArray = [], this.Framebuffer2BlittingFramebuffer || (this.Framebuffer2BlittingFramebuffer = t.gl.createFramebuffer()), this.Framebuffer2FinalFramebuffer || (this.Framebuffer2FinalFramebuffer = t.gl.createFramebuffer()), this.Framebuffer2DrawTargetsDefault || (this.Framebuffer2DrawTargetsDefault = [t.gl.COLOR_ATTACHMENT0]), this._options = s || {
            isFloatingPointTexture: !1
        }, this._options.hasOwnProperty("numRenderBuffers") || (this._options.numRenderBuffers = 1), this._options.hasOwnProperty("depth") || (this._options.depth = !0), this._options.hasOwnProperty("clear") || (this._options.clear = !0), this._options.hasOwnProperty("multisampling") || (this._options.multisampling = !1, this._options.multisamplingSamples = 0), this._options.multisamplingSamples && (this._cgl.gl.MAX_SAMPLES ? this._options.multisamplingSamples = Math.min(this._cgl.gl.getParameter(this._cgl.gl.MAX_SAMPLES), this._options.multisamplingSamples) : this._options.multisamplingSamples = 0), this._options.hasOwnProperty("filter") || (this._options.filter = J.FILTER_LINEAR), this._numRenderBuffers = this._options.numRenderBuffers, this._colorTextures = [];
        for (let e = 0; e < this._numRenderBuffers; e++) this._colorTextures[e] = new J(t, {
            name: "framebuffer2 texture " + e,
            isFloatingPointTexture: this._options.isFloatingPointTexture,
            filter: this._options.filter,
            wrap: this._options.wrap
        });
        let n = J.FILTER_NEAREST;
        this._options.shadowMap && (n = J.FILTER_LINEAR), this._textureDepth = new J(t, {
            name: "framebuffer2 depth texture",
            isDepthTexture: !0,
            filter: n,
            shadowMap: this._options.shadowMap || !1
        }), this.setSize(e || 512, i || 512)
    };
    Z.prototype.getWidth = function () {
        return this._width
    }, Z.prototype.getHeight = function () {
        return this._height
    }, Z.prototype.getGlFrameBuffer = function () {
        return this._frameBuffer
    }, Z.prototype.getDepthRenderBuffer = function () {
        return this._depthRenderbuffer
    }, Z.prototype.getTextureColor = function () {
        return this._colorTextures[0]
    }, Z.prototype.getTextureColorNum = function (t) {
        return this._colorTextures[t]
    }, Z.prototype.getTextureDepth = function () {
        return this._textureDepth
    }, Z.prototype.setFilter = function (t) {
        for (let e = 0; e < this._numRenderBuffers; e++) this._colorTextures[e].filter = t, this._colorTextures[e].setSize(this._width, this._height)
    }, Z.prototype.delete = Z.prototype.dispose = function () {
        let t = 0;
        for (t = 0; t < this._numRenderBuffers; t++) this._colorTextures[t].delete();
        for (this._textureDepth.delete(), t = 0; t < this._numRenderBuffers; t++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[t]);
        this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer), this._cgl.gl.deleteFramebuffer(this._frameBuffer), this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer)
    }, Z.prototype.setSize = function (t, e) {
        let i = 0;
        if (this._width = Math.floor(t), this._height = Math.floor(e), this._width = Math.min(this._width, this._cgl.maxTexSize), this._height = Math.min(this._height, this._cgl.maxTexSize), Q.profileFrameBuffercreate++, this._frameBuffer) {
            for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
            this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer), this._cgl.gl.deleteFramebuffer(this._frameBuffer), this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer)
        }
        this._frameBuffer = this._cgl.gl.createFramebuffer(), this._textureFrameBuffer = this._cgl.gl.createFramebuffer();
        const s = this._options.depth;
        for (i = 0; i < this._numRenderBuffers; i++) this._colorTextures[i].setSize(this._width, this._height);
        for (i = 0; i < this._numRenderBuffers; i++) {
            const t = this._cgl.gl.createRenderbuffer();
            this._cgl.gl.getExtension("EXT_color_buffer_float");
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, t), this._options.isFloatingPointTexture ? this._options.multisampling ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, this._cgl.gl.RGBA32F, this._width, this._height) : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.RGBA32F, this._width, this._height) : this._options.multisampling ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, this._cgl.gl.RGBA8, this._width, this._height) : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.RGBA8, this._width, this._height), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.RENDERBUFFER, t), this._colorRenderbuffers[i] = t
        }
        for (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer), i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
        for (this._options.depth && this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer), s && (this._textureDepth.setSize(this._width, this._height), this._depthRenderbuffer = this._cgl.gl.createRenderbuffer(), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer), this._options.isFloatingPointTexture, this._options.multisampling ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, this._cgl.gl.DEPTH_COMPONENT32F, this._width, this._height) : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT32F, this._width, this._height), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer)), this._drawTargetArray.length = 0, i = 0; i < this._numRenderBuffers; i++) this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0 + i);
        if (!this._cgl.gl.isFramebuffer(this._textureFrameBuffer)) throw new Error("Invalid framebuffer");
        const n = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);
        switch (n) {
            case this._cgl.gl.FRAMEBUFFER_COMPLETE:
                break;
            case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                throw d.log("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", this), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
            case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                throw d.log("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
            case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                throw d.log("FRAMEBUFFER_INCOMPLETE_DIMENSIONS"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
            case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
                throw d.log("FRAMEBUFFER_UNSUPPORTED"), new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
            default:
                throw d.log("incomplete framebuffer", n), new Error("Incomplete framebuffer: " + n)
        }
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null)
    }, Z.prototype.renderStart = function () {
        this._cgl.pushModelMatrix(), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer), this._cgl.pushGlFrameBuffer(this._frameBuffer), this._cgl.pushFrameBuffer(this), this._cgl.pushPMatrix(), this._cgl.gl.viewport(0, 0, this._width, this._height), this._cgl.gl.drawBuffers(this._drawTargetArray), this._options.clear && (this._cgl.gl.clearColor(0, 0, 0, 0), this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT))
    }, Z.prototype.renderEnd = function () {
        if (this._cgl.popPMatrix(), Q.profileFramebuffer++, this._numRenderBuffers <= 1) this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer), this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer), this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0, 0, 0, 1]), this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT, this._cgl.gl.NEAREST);
        else {
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);
            for (let t = 0; t < this._numRenderBuffers; t++) {
                this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.RENDERBUFFER, this._colorRenderbuffers[t]), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._colorTextures[t].tex, 0), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer), this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this.Framebuffer2FinalFramebuffer), this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0, 0, 0, 1]);
                let e = this._cgl.gl.COLOR_BUFFER_BIT;
                0 == t && (e |= this._cgl.gl.DEPTH_BUFFER_BIT), this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, e, this._cgl.gl.NEAREST)
            }
        }
        if (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer()), this._cgl.popFrameBuffer(), this._cgl.popModelMatrix(), this._cgl.resetViewPort(), this._colorTextures[0].filter == J.FILTER_MIPMAP)
            for (let t = 0; t < this._numRenderBuffers; t++) this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._colorTextures[t].tex), this._colorTextures[t].updateMipMap(), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)
    };
    class $ {
        constructor(t) {
            this._max = [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE], this._min = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE], this._center = [], this._size = [], this._first = !0, this._wireMesh = null, t && this.apply(t)
        }
        get maxAxis() {
            return this._maxAxis
        }
        get size() {
            return this._size
        }
        get center() {
            return this._center
        }
        get x() {
            return this._center[0]
        }
        get y() {
            return this._center[1]
        }
        get z() {
            return this._center[2]
        }
        get minX() {
            return this._min[0]
        }
        get minY() {
            return this._min[1]
        }
        get minZ() {
            return this._min[2]
        }
        get maxX() {
            return this._max[0]
        }
        get maxY() {
            return this._max[1]
        }
        get maxZ() {
            return this._max[2]
        }
        apply(t, e) {
            if (t) {
                if (t instanceof $) {
                    const e = t;
                    this.applyPos(e.maxX, e.maxY, e.maxZ), this.applyPos(e.minX, e.minY, e.minZ)
                } else {
                    let e = 0;
                    for (e = 0; e < t.vertices.length; e += 3) t.vertices[e + 0] == t.vertices[e + 0] && this.applyPos(t.vertices[e + 0], t.vertices[e + 1], t.vertices[e + 2])
                }
                this.calcCenterSize()
            } else console.warn("[boundingbox] no geom/vertices", t)
        }
        copy() {
            return new $(this)
        }
        get changed() {
            return !(this._max[0] == -Number.MAX_VALUE && this._max[1] == -Number.MAX_VALUE && this._max[2] == -Number.MAX_VALUE)
        }
        applyPos(t, e, i) {
            if (this._first) return this._max[0] = t, this._max[1] = e, this._max[2] = i, this._min[0] = t, this._min[1] = e, this._min[2] = i, void(this._first = !1);
            this._max[0] = Math.max(this._max[0], t), this._max[1] = Math.max(this._max[1], e), this._max[2] = Math.max(this._max[2], i), this._min[0] = Math.min(this._min[0], t), this._min[1] = Math.min(this._min[1], e), this._min[2] = Math.min(this._min[2], i)
        }
        calcCenterSize() {
            this._size[0] = this._max[0] - this._min[0], this._size[1] = this._max[1] - this._min[1], this._size[2] = this._max[2] - this._min[2], this._center[0] = (this._min[0] + this._max[0]) / 2, this._center[1] = (this._min[1] + this._max[1]) / 2, this._center[2] = (this._min[2] + this._max[2]) / 2, this._maxAxis = Math.max(this._size[2], Math.max(this._size[0], this._size[1]))
        }
        mulMat4(t) {
            vec3.transformMat4(this._max, this._max, t), vec3.transformMat4(this._min, this._min, t), this.calcCenterSize()
        }
        render(t, e) {
            this._wireMesh || (this._wireMesh = new CGL.WireCube(t)), t.pushModelMatrix(), mat4.translate(t.mMatrix, t.mMatrix, this._center), this._wireMesh.render(t, this._size[0] / 2, this._size[1] / 2, this._size[2] / 2), t.popModelMatrix()
        }
    }
    const tt = function (t) {
        this.name = t, this.faceVertCount = 3, this._vertices = [], this.verticesIndices = [], this.texCoords = new Float32Array, this.texCoordsIndices = [], this.vertexNormals = [], this.tangents = [], this.biTangents = [], this.barycentrics = [], this.morphTargets = [], this.vertexColors = [], this._attributes = {}, this.glPrimitive = null, Object.defineProperty(this, "vertices", {
            get() {
                return this._vertices
            },
            set(t) {
                this.setVertices(t)
            }
        })
    };
    tt.prototype.clear = function () {
        this.vertices = new Float32Array([]), this.verticesIndices.length = 0, this.texCoords = new Float32Array([]), this.texCoordsIndices.length = 0, this.vertexNormals = new Float32Array([])
    }, tt.prototype.getAttributes = function () {
        return this._attributes
    }, tt.prototype.getAttribute = function (t) {
        for (const e in this._attributes)
            if (this._attributes[e].name == t) return this._attributes[e];
        return null
    }, tt.prototype.setAttribute = function (t, e, i) {
        let s = "";
        1 == i ? s = "float" : 2 == i ? s = "vec2" : 3 == i ? s = "vec3" : 4 == i && (s = "vec4");
        const n = {
            name: t,
            data: e,
            itemSize: i,
            type: s
        };
        this._attributes[t] = n
    }, tt.prototype.setVertices = function (t) {
        t instanceof Float32Array ? this._vertices = t : this._vertices = new Float32Array(t)
    }, tt.prototype.setTexCoords = function (t) {
        t instanceof Float32Array ? this.texCoords = t : this.texCoords = new Float32Array(t)
    }, tt.prototype.calcNormals = function (t) {
        t || this.unIndex(), this.calculateNormals({})
    }, tt.prototype.setPointVertices = function (t) {
        if (t.length % 3 == 0) {
            t instanceof Float32Array ? this.vertices = t : this.vertices = new Float32Array(t), this.texCoords instanceof Float32Array || (this.texCoords = new Float32Array(t.length / 3 * 2)), this.verticesIndices.length = t.length / 3;
            for (let e = 0; e < t.length / 3; e++) this.verticesIndices[e] = e, this.texCoords[2 * e] = 0, this.texCoords[2 * e + 1] = 0
        } else console.error("CGL MESH : SetPointVertices: Array must be multiple of three.")
    }, tt.prototype.merge = function (t) {
        if (!t) return;
        const e = this.verticesIndices.length,
            i = this.vertices.length / 3;
        this.verticesIndices.length = this.verticesIndices.length + t.verticesIndices.length;
        for (let s = 0; s < t.verticesIndices.length; s++) this.verticesIndices[e + s] = t.verticesIndices[s] + i;
        this.vertices = g.float32Concat(this.vertices, t.vertices), this.texCoords = g.float32Concat(this.texCoords, t.texCoords), this.vertexNormals = g.float32Concat(this.vertexNormals, t.vertexNormals), this.tangents = g.float32Concat(this.vertexNormals, t.tangents), this.bitangents = g.float32Concat(this.vertexNormals, t.bitangents)
    }, tt.prototype.copy = function () {
        let t = 0;
        const e = new tt;
        if (e.faceVertCount = this.faceVertCount, e.setVertices(this._vertices.slice(0)), this.verticesIndices)
            for (e.verticesIndices.length = this.verticesIndices.length, t = 0; t < this.verticesIndices.length; t++) e.verticesIndices[t] = this.verticesIndices[t];
        for (e.texCoords = new Float32Array(this.texCoords.length), t = 0; t < this.texCoords.length; t++) e.texCoords[t] = this.texCoords[t];
        for (e.texCoordsIndices.length = this.texCoordsIndices.length, t = 0; t < this.texCoordsIndices.length; t++) e.texCoordsIndices[t] = this.texCoordsIndices[t];
        for (e.vertexNormals = new Float32Array(this.vertexNormals.length), t = 0; t < this.vertexNormals.length; t++) e.vertexNormals[t] = this.vertexNormals[t];
        if (this.tangents)
            for (e.tangents = [], e.tangents.length = this.tangents.length, t = 0; t < this.tangents.length; t++) e.tangents[t] = this.tangents[t];
        if (this.biTangents)
            for (e.biTangents = [], e.biTangents.length = this.biTangents.length, t = 0; t < this.biTangents.length; t++) e.biTangents[t] = this.biTangents[t];
        for (e.barycentrics.length = this.barycentrics.length, t = 0; t < this.barycentrics.length; t++) e.barycentrics[t] = this.barycentrics[t];
        for (e.morphTargets.length = this.morphTargets.length, t = 0; t < this.morphTargets.length; t++) e.morphTargets[t] = this.morphTargets[t];
        for (e.vertexColors.length = this.vertexColors.length, t = 0; t < this.vertexColors.length; t++) e.vertexColors[t] = this.vertexColors[t];
        return e
    }, tt.prototype.calculateNormals = function (t) {
        const e = vec3.create(),
            i = vec3.create(),
            s = vec3.create();
        let n = 0;

        function r(n) {
            return vec3.subtract(e, n[0], n[1]), vec3.subtract(i, n[0], n[2]), vec3.cross(s, e, i), vec3.normalize(s, s), t && t.forceZUp && s[2] < 0 && (s[0] *= -1, s[1] *= -1, s[2] *= -1), s
        }
        for (this.getVertexVec = function (t) {
                const e = [0, 0, 0];
                return e[0] = this.vertices[3 * t + 0], e[1] = this.vertices[3 * t + 1], e[2] = this.vertices[3 * t + 2], e
            }, this.vertexNormals instanceof Float32Array && this.vertexNormals.length == this.vertices.length || (this.vertexNormals = new Float32Array(this.vertices.length)), n = 0; n < this.vertices.length; n++) this.vertexNormals[n] = 0;
        if (this.isIndexed()) {
            const t = [];
            for (t.length = this.verticesIndices.length / 3, n = 0; n < this.verticesIndices.length; n += 3) {
                const e = [this.getVertexVec(this.verticesIndices[n + 0]), this.getVertexVec(this.verticesIndices[n + 1]), this.getVertexVec(this.verticesIndices[n + 2])];
                t[n / 3] = r(e), this.vertexNormals[3 * this.verticesIndices[n + 0] + 0] += t[n / 3][0], this.vertexNormals[3 * this.verticesIndices[n + 0] + 1] += t[n / 3][1], this.vertexNormals[3 * this.verticesIndices[n + 0] + 2] += t[n / 3][2], this.vertexNormals[3 * this.verticesIndices[n + 1] + 0] += t[n / 3][0], this.vertexNormals[3 * this.verticesIndices[n + 1] + 1] += t[n / 3][1], this.vertexNormals[3 * this.verticesIndices[n + 1] + 2] += t[n / 3][2], this.vertexNormals[3 * this.verticesIndices[n + 2] + 0] += t[n / 3][0], this.vertexNormals[3 * this.verticesIndices[n + 2] + 1] += t[n / 3][1], this.vertexNormals[3 * this.verticesIndices[n + 2] + 2] += t[n / 3][2]
            }
            for (n = 0; n < this.verticesIndices.length; n += 3)
                for (let t = 0; t < 3; t++) {
                    const e = [this.vertexNormals[3 * this.verticesIndices[n + t] + 0], this.vertexNormals[3 * this.verticesIndices[n + t] + 1], this.vertexNormals[3 * this.verticesIndices[n + t] + 2]];
                    vec3.normalize(e, e), this.vertexNormals[3 * this.verticesIndices[n + t] + 0] = e[0], this.vertexNormals[3 * this.verticesIndices[n + t] + 1] = e[1], this.vertexNormals[3 * this.verticesIndices[n + t] + 2] = e[2]
                }
        } else {
            const t = [];
            for (n = 0; n < this.vertices.length; n += 9) {
                const e = r([
                    [this.vertices[n + 0], this.vertices[n + 1], this.vertices[n + 2]],
                    [this.vertices[n + 3], this.vertices[n + 4], this.vertices[n + 5]],
                    [this.vertices[n + 6], this.vertices[n + 7], this.vertices[n + 8]]
                ]);
                t.push(e[0], e[1], e[2], e[0], e[1], e[2], e[0], e[1], e[2])
            }
            this.vertexNormals = t
        }
    }, tt.prototype.calcTangentsBitangents = function () {
        if (!this.vertices.length) return void console.error("Cannot calculate tangents/bitangents without vertices.");
        if (!this.vertexNormals.length) return void console.error("Cannot calculate tangents/bitangents without normals.");
        if (!this.texCoords.length) {
            console.warn("No texcoords. Replacing with default values [0, 0].");
            const t = this.vertices.length / 3 * 2;
            this.texCoords = new Float32Array(t);
            for (let e = 0; e < t; e += 1) this.texCoords[e] = 0
        }
        if (!this.verticesIndices.length) return void console.error("Cannot calculate tangents/bitangents without vertex indices.");
        if (this.verticesIndices.length % 3 != 0) return void console.error("Vertex indices mismatch!");
        const t = this.verticesIndices.length / 3,
            e = this.vertices.length / 3;
        this.tangents = new Float32Array(this.vertexNormals.length), this.biTangents = new Float32Array(this.vertexNormals.length);
        const i = [];
        i.length = 2 * e;
        const s = vec3.create(),
            n = vec3.create(),
            r = vec3.create(),
            o = vec2.create(),
            h = vec2.create(),
            a = vec2.create(),
            l = vec3.create(),
            u = vec3.create();
        for (let c = 0; c < t; c += 1) {
            const t = this.verticesIndices[3 * c],
                p = this.verticesIndices[3 * c + 1],
                d = this.verticesIndices[3 * c + 2];
            vec3.set(s, this.vertices[3 * t], this.vertices[3 * t + 1], this.vertices[3 * t + 2]), vec3.set(n, this.vertices[3 * p], this.vertices[3 * p + 1], this.vertices[3 * p + 2]), vec3.set(r, this.vertices[3 * d], this.vertices[3 * d + 1], this.vertices[3 * d + 2]), vec2.set(o, this.texCoords[2 * t], this.texCoords[2 * t + 1]), vec2.set(h, this.texCoords[2 * p], this.texCoords[2 * p + 1]), vec2.set(a, this.texCoords[2 * d], this.texCoords[2 * d + 1]);
            const _ = n[0] - s[0],
                g = r[0] - s[0],
                f = n[1] - s[1],
                m = r[1] - s[1],
                E = n[2] - s[2],
                T = r[2] - s[2],
                A = h[0] - o[0],
                b = a[0] - o[0],
                y = h[1] - o[1],
                O = a[1] - o[1],
                I = 1 / (A * O - b * y);
            vec3.set(l, (O * _ - y * g) * I, (O * f - y * m) * I, (O * E - y * T) * I), vec3.set(u, (A * g - b * _) * I, (A * m - b * f) * I, (A * T - b * E) * I), i[t] = l, i[p] = l, i[d] = l, i[t + e] = u, i[p + e] = u, i[d + e] = u
        }
        const c = vec3.create(),
            p = vec3.create(),
            d = vec3.create(),
            _ = vec3.create(),
            g = vec3.create(),
            f = vec3.create(),
            m = vec3.create(),
            E = vec3.create();
        for (let t = 0; t < e; t += 1) {
            if (!i[t]) continue;
            vec3.set(c, this.vertexNormals[3 * t], this.vertexNormals[3 * t + 1], this.vertexNormals[3 * t + 2]), vec3.set(p, i[t][0], i[t][1], i[t][2]);
            const s = vec3.dot(c, p);
            vec3.scale(g, c, s), vec3.subtract(f, p, g), vec3.normalize(E, f), vec3.cross(m, c, p);
            const n = vec3.dot(m, i[t + e]) < 0 ? -1 : 1;
            vec3.scale(d, E, 1 / n), vec3.cross(_, c, d), this.tangents[3 * t + 0] = d[0], this.tangents[3 * t + 1] = d[1], this.tangents[3 * t + 2] = d[2], this.biTangents[3 * t + 0] = _[0], this.biTangents[3 * t + 1] = _[1], this.biTangents[3 * t + 2] = _[2]
        }
    }, tt.prototype.isIndexed = function () {
        return 0 != this.verticesIndices.length
    }, tt.prototype.unIndex = function (t) {
        const e = [],
            i = [],
            s = [],
            n = [];
        let r = 0,
            o = 0;
        for (this.vertexNormals = [], o = 0; o < this.verticesIndices.length; o += 3) e.push(this.vertices[3 * this.verticesIndices[o + 0] + 0]), e.push(this.vertices[3 * this.verticesIndices[o + 0] + 1]), e.push(this.vertices[3 * this.verticesIndices[o + 0] + 2]), n.push(this.vertexNormals[3 * this.verticesIndices[o + 0] + 0]), n.push(this.vertexNormals[3 * this.verticesIndices[o + 0] + 1]), n.push(this.vertexNormals[3 * this.verticesIndices[o + 0] + 2]), this.texCoords ? (s.push(this.texCoords[2 * this.verticesIndices[o + 0] + 0]), s.push(this.texCoords[2 * this.verticesIndices[o + 0] + 1])) : (s.push(0), s.push(0)), i.push(r), r++, e.push(this.vertices[3 * this.verticesIndices[o + 1] + 0]), e.push(this.vertices[3 * this.verticesIndices[o + 1] + 1]), e.push(this.vertices[3 * this.verticesIndices[o + 1] + 2]), n.push(this.vertexNormals[3 * this.verticesIndices[o + 1] + 0]), n.push(this.vertexNormals[3 * this.verticesIndices[o + 1] + 1]), n.push(this.vertexNormals[3 * this.verticesIndices[o + 1] + 2]), this.texCoords ? (s.push(this.texCoords[2 * this.verticesIndices[o + 1] + 0]), s.push(this.texCoords[2 * this.verticesIndices[o + 1] + 1])) : (s.push(0), s.push(0)), i.push(r), r++, e.push(this.vertices[3 * this.verticesIndices[o + 2] + 0]), e.push(this.vertices[3 * this.verticesIndices[o + 2] + 1]), e.push(this.vertices[3 * this.verticesIndices[o + 2] + 2]), n.push(this.vertexNormals[3 * this.verticesIndices[o + 2] + 0]), n.push(this.vertexNormals[3 * this.verticesIndices[o + 2] + 1]), n.push(this.vertexNormals[3 * this.verticesIndices[o + 2] + 2]), this.texCoords ? (s.push(this.texCoords[2 * this.verticesIndices[o + 2] + 0]), s.push(this.texCoords[2 * this.verticesIndices[o + 2] + 1])) : (s.push(0), s.push(0)), i.push(r), r++;
        this.vertices = e, this.texCoords = s, this.vertexNormals = n, this.verticesIndices.length = 0, t && (this.verticesIndices = i), this.calculateNormals()
    }, tt.prototype.calcBarycentric = function () {
        this.barycentrics.length = this.vertices.length;
        let t = 0;
        for (t = 0; t < this.vertices.length; t++) this.barycentrics[t] = 0;
        let e = 0;
        for (t = 0; t < this.vertices.length; t += 3) this.barycentrics[t + e] = 1, e++, 3 == e && (e = 0)
    }, tt.prototype.getBounds = function () {
        return new $(this)
    }, tt.prototype.center = function (t, e, i) {
        void 0 === t && (t = !0, e = !0, i = !0);
        let s = 0;
        const n = this.getBounds(),
            r = [n.minX + (n.maxX - n.minX) / 2, n.minY + (n.maxY - n.minY) / 2, n.minZ + (n.maxZ - n.minZ) / 2];
        for (s = 0; s < this.vertices.length; s += 3) this.vertices[s + 0] == this.vertices[s + 0] && (t && (this.vertices[s + 0] -= r[0]), e && (this.vertices[s + 1] -= r[1]), i && (this.vertices[s + 2] -= r[2]));
        return r
    }, tt.prototype.mapTexCoords2d = function () {
        const t = this.getBounds(),
            e = this.vertices.length / 3;
        this.texCoords = new Float32Array(2 * e);
        for (let i = 0; i < e; i++) {
            const e = this.vertices[3 * i + 0],
                s = this.vertices[3 * i + 1];
            this.texCoords[2 * i + 0] = e / (t.maxX - t.minX) + .5, this.texCoords[2 * i + 1] = 1 - s / (t.maxY - t.minY) + .5
        }
    }, tt.buildFromFaces = function (t) {
        const e = [],
            i = [];
        for (let s = 0; s < t.length; s += 3) {
            const n = t[s + 0],
                r = t[s + 1],
                o = t[s + 2],
                h = [-1, -1, -1];
            for (let t = 0; t < e; t += 3) e[t + 0] == n[0] && e[t + 1] == n[1] && e[t + 2] == n[2] && (h[0] = t / 3), e[t + 0] == r[0] && e[t + 1] == r[1] && e[t + 2] == r[2] && (h[1] = t / 3), e[t + 0] == o[0] && e[t + 1] == o[1] && e[t + 2] == o[2] && (h[2] = t / 3); - 1 == h[0] && (e.push(n[0], n[1], n[2]), h[0] = (e.length - 1) / 3), -1 == h[1] && (e.push(r[0], r[1], r[2]), h[1] = (e.length - 1) / 3), -1 == h[2] && (e.push(o[0], o[1], o[2]), h[2] = (e.length - 1) / 3), i.push(parseInt(h[0], 10)), i.push(parseInt(h[1], 10)), i.push(parseInt(h[2], 10))
        }
        const s = new tt;
        return s.vertices = e, s.verticesIndices = i, s
    }, tt.json2geom = function (t) {
        const e = new tt;
        if (e.verticesIndices = [], e.vertices = t.vertices || [], e.vertexNormals = t.normals || [], e.vertexColors = t.colors || [], e.tangents = t.tangents || [], e.biTangents = t.bitangents || [], t.texturecoords && e.setTexCoords(t.texturecoords[0]), t.vertices_b64 && (e.vertices = new Float32Array(c(t.vertices_b64))), t.normals_b64 && (e.vertexNormals = new Float32Array(c(t.normals_b64))), t.tangents_b64 && (e.tangents = new Float32Array(c(t.tangents_b64))), t.bitangents_b64 && (e.biTangents = new Float32Array(c(t.bitangents_b64))), t.texturecoords_b64 && e.setTexCoords(new Float32Array(c(t.texturecoords_b64[0]))), t.faces_b64) e.verticesIndices = new Uint32Array(c(t.faces_b64));
        else {
            e.verticesIndices.length = 3 * t.faces.length;
            for (let i = 0; i < t.faces.length; i++) e.verticesIndices[3 * i] = t.faces[i][0], e.verticesIndices[3 * i + 1] = t.faces[i][1], e.verticesIndices[3 * i + 2] = t.faces[i][2]
        }
        return e
    };
    const et = function (t, e, i, s, n, r, o) {
        if (this._loc = -1, this._type = e, this._name = i, this._shader = t, this._value = 1e-5, this._oldValue = null, this._port = null, this._shader.addUniform(this), this.needsUpdate = !0, "f" == e) this.set = this.setValue = this.setValueF.bind(this), this.updateValue = this.updateValueF.bind(this);
        else if ("f[]" == e) this.set = this.setValue = this.setValueArrayF.bind(this), this.updateValue = this.updateValueArrayF.bind(this);
        else if ("2f[]" == e) this.set = this.setValue = this.setValueArray2F.bind(this), this.updateValue = this.updateValueArray2F.bind(this);
        else if ("3f[]" == e) this.set = this.setValue = this.setValueArray3F.bind(this), this.updateValue = this.updateValueArray3F.bind(this);
        else if ("4f[]" == e) this.set = this.setValue = this.setValueArray4F.bind(this), this.updateValue = this.updateValueArray4F.bind(this);
        else if ("i" == e) this.set = this.setValue = this.setValueI.bind(this), this.updateValue = this.updateValueI.bind(this);
        else if ("2i" == e) this.set = this.setValue = this.setValue2I.bind(this), this.updateValue = this.updateValue2I.bind(this);
        else if ("3i" == e) this.set = this.setValue = this.setValue3I.bind(this), this.updateValue = this.updateValue3I.bind(this);
        else if ("4i" == e) this.set = this.setValue = this.setValue4I.bind(this), this.updateValue = this.updateValue4I.bind(this);
        else if ("b" == e) this.set = this.setValue = this.setValueBool.bind(this), this.updateValue = this.updateValueBool.bind(this);
        else if ("4f" == e) this.set = this.setValue = this.setValue4F.bind(this), this.updateValue = this.updateValue4F.bind(this);
        else if ("3f" == e) this.set = this.setValue = this.setValue3F.bind(this), this.updateValue = this.updateValue3F.bind(this);
        else if ("2f" == e) this.set = this.setValue = this.setValue2F.bind(this), this.updateValue = this.updateValue2F.bind(this);
        else if ("t" == e) this.set = this.setValue = this.setValueT.bind(this), this.updateValue = this.updateValueT.bind(this);
        else if ("t[]" == e) this.set = this.setValue = this.setValueArrayT.bind(this), this.updateValue = this.updateValueArrayT.bind(this);
        else {
            if ("m4" != e) throw new Error("Unknown uniform type");
            this.set = this.setValue = this.setValueM4.bind(this), this.updateValue = this.updateValueM4.bind(this)
        }
        "object" == typeof s && s instanceof B ? (this._port = s, this._value = this._port.get(), this._port.onValueChanged = this.updateFromPort.bind(this), n && r && o ? (this._value = [0, 0, 0, 0], this._port2 = n, this._port3 = r, this._port4 = o, this._port.onChange = this._port2.onChange = this._port3.onChange = this._port4.onChange = this.updateFromPort4f.bind(this), this.updateFromPort4f()) : n && r ? (this._value = [0, 0, 0], this._port2 = n, this._port3 = r, this._port.onChange = this._port2.onChange = this._port3.onChange = this.updateFromPort3f.bind(this), this.updateFromPort3f()) : n && (this._value = [0, 0], this._port2 = n, this._port.onChange = this._port2.onChange = this.updateFromPort2f.bind(this), this.updateFromPort2f())) : this._value = s, this.setValue(this._value), this.needsUpdate = !0
    };
    et.prototype.copy = function (t) {
        return new et(t, this._type, this._name)
    }, et.prototype.getType = function () {
        return this._type
    }, et.prototype.getName = function () {
        return this._name
    }, et.prototype.getValue = function () {
        return this._value
    }, et.prototype.resetLoc = function () {
        this._loc = -1, this.needsUpdate = !0
    }, et.prototype.bindTextures = function () {
        return this._value
    }, et.prototype.resetLoc = function () {
        this._loc = -1, this.needsUpdate = !0
    }, et.prototype.bindTextures = function () {}, et.prototype.getLoc = function () {
        return this._loc
    }, et.prototype.updateFromPort4f = function () {
        this._value[0] = this._port.get(), this._value[1] = this._port2.get(), this._value[2] = this._port3.get(), this._value[3] = this._port4.get(), this.setValue(this._value)
    }, et.prototype.updateFromPort3f = function () {
        this._value[0] = this._port.get(), this._value[1] = this._port2.get(), this._value[2] = this._port3.get(), this.setValue(this._value)
    }, et.prototype.updateFromPort2f = function () {
        this._value[0] = this._port.get(), this._value[1] = this._port2.get(), this.setValue(this._value)
    }, et.prototype.updateFromPort = function () {
        this.setValue(this._port.get())
    }, et.prototype.updateValueF = function () {
        -1 == this._loc ? this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name) : this.needsUpdate = !1, this._shader.getCgl().gl.uniform1f(this._loc, this._value), Q.profileUniformCount++
    }, et.prototype.setValueF = function (t) {
        t != this._value && (this.needsUpdate = !0, this._value = t)
    }, et.prototype.updateValueI = function () {
        -1 == this._loc ? this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name) : this.needsUpdate = !1, this._shader.getCgl().gl.uniform1i(this._loc, this._value), Q.profileUniformCount++
    }, et.prototype.updateValue2I = function () {
        this._value && (-1 == this._loc && (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform2i(this._loc, this._value[0], this._value[1]), this.needsUpdate = !1, Q.profileUniformCount++)
    }, et.prototype.updateValue3I = function () {
        this._value && (-1 == this._loc && (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform3i(this._loc, this._value[0], this._value[1], this._value[2]), this.needsUpdate = !1, Q.profileUniformCount++)
    }, et.prototype.updateValue4I = function () {
        -1 == this._loc && (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform4i(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]), Q.profileUniformCount++
    }, et.prototype.setValueI = function (t) {
        t != this._value && (this.needsUpdate = !0, this._value = t)
    }, et.prototype.setValue2I = function (t) {
        t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this.needsUpdate = !0) : (this._oldValue = [t[0] - 1, 1], this.needsUpdate = !0), this._value = t)
    }, et.prototype.setValue3I = function (t) {
        t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this._oldValue[2] = t[2], this.needsUpdate = !0) : (this._oldValue = [t[0] - 1, 1, 2], this.needsUpdate = !0), this._value = t)
    }, et.prototype.setValue4I = function (t) {
        this.needsUpdate = !0, this._value = t || vec4.create()
    }, et.prototype.updateValueBool = function () {
        -1 == this._loc ? this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name) : this.needsUpdate = !1, this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0), Q.profileUniformCount++
    }, et.prototype.setValueBool = function (t) {
        t != this._value && (this.needsUpdate = !0, this._value = t)
    }, et.prototype.setValueArray4F = function (t) {
        this.needsUpdate = !0, this._value = t
    }, et.prototype.updateValueArray4F = function () {
        -1 == this._loc ? this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name) : this.needsUpdate = !1, this._value && (this._shader.getCgl().gl.uniform4fv(this._loc, this._value), Q.profileUniformCount++)
    }, et.prototype.setValueArray3F = function (t) {
        this.needsUpdate = !0, this._value = t
    }, et.prototype.updateValueArray3F = function () {
        -1 == this._loc ? this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name) : this.needsUpdate = !1, this._value && (this._shader.getCgl().gl.uniform3fv(this._loc, this._value), Q.profileUniformCount++)
    }, et.prototype.setValueArray2F = function (t) {
        this.needsUpdate = !0, this._value = t
    }, et.prototype.updateValueArray2F = function () {
        -1 == this._loc ? this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name) : this.needsUpdate = !1, this._value && (this._shader.getCgl().gl.uniform2fv(this._loc, this._value), Q.profileUniformCount++)
    }, et.prototype.setValueArrayF = function (t) {
        this.needsUpdate = !0, this._value = t
    }, et.prototype.updateValueArrayF = function () {
        -1 == this._loc ? this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name) : this.needsUpdate = !1, this._value && (this._shader.getCgl().gl.uniform1fv(this._loc, this._value), Q.profileUniformCount++)
    }, et.prototype.setValueArrayT = function (t) {
        this.needsUpdate = !0, this._value = t
    }, et.prototype.updateValueArrayT = function () {
        -1 == this._loc ? this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name) : this.needsUpdate = !1, this._value && (this._shader.getCgl().gl.uniform1iv(this._loc, this._value), Q.profileUniformCount++)
    }, et.prototype.updateValue3F = function () {
        this._value && (-1 == this._loc && (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform3f(this._loc, this._value[0], this._value[1], this._value[2]), this.needsUpdate = !1, Q.profileUniformCount++)
    }, et.prototype.setValue3F = function (t) {
        t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this._oldValue[2] = t[2], this.needsUpdate = !0) : (this._oldValue = [t[0] - 1, 1, 2], this.needsUpdate = !0), this._value = t)
    }, et.prototype.updateValue2F = function () {
        this._value && (-1 == this._loc && (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform2f(this._loc, this._value[0], this._value[1]), this.needsUpdate = !1, Q.profileUniformCount++)
    }, et.prototype.setValue2F = function (t) {
        t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this.needsUpdate = !0) : (this._oldValue = [t[0] - 1, 1], this.needsUpdate = !0), this._value = t)
    }, et.prototype.updateValueT = function () {
        -1 == this._loc && (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name, -1 == this._loc && d.log("texture this._loc unknown!!")), Q.profileUniformCount++, this._shader.getCgl().gl.uniform1i(this._loc, this._value), this.needsUpdate = !1
    }, et.prototype.setValueT = function (t) {
        this.needsUpdate = !0, this._value = t
    }, et.prototype.updateValue4F = function () {
        -1 == this._loc && (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform4f(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]), Q.profileUniformCount++
    }, et.prototype.setValue4F = function (t) {
        this.needsUpdate = !0, this._value = t || vec4.create()
    }, et.prototype.updateValueM4 = function () {
        -1 == this._loc && (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Q.profileShaderGetUniform++, Q.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniformMatrix4fv(this._loc, !1, this._value), Q.profileUniformCount++
    }, et.prototype.setValueM4 = function (t) {
        this.needsUpdate = !0, this._value = t || mat4.create()
    };
    const it = 180 / Math.PI,
        st = {
            MATH: {
                DEG2RAD: Math.PI / 180,
                RAD2DEG: it
            },
            SHADER: {
                SHADERVAR_VERTEX_POSITION: "vPosition",
                SHADERVAR_VERTEX_NUMBER: "attrVertIndex",
                SHADERVAR_VERTEX_NORMAL: "attrVertNormal",
                SHADERVAR_VERTEX_TEXCOORD: "attrTexCoord",
                SHADERVAR_INSTANCE_MMATRIX: "instMat",
                SHADERVAR_UNI_PROJMAT: "projMatrix",
                SHADERVAR_UNI_VIEWMAT: "viewMatrix",
                SHADERVAR_UNI_MODELMAT: "modelMatrix",
                SHADERVAR_UNI_NORMALMAT: "normalMatrix",
                SHADERVAR_UNI_INVVIEWMAT: "inverseViewMatrix",
                SHADERVAR_UNI_VIEWPOS: "camPos"
            },
            BLEND_MODES: {
                BLEND_NONE: 0,
                BLEND_NORMAL: 1,
                BLEND_ADD: 2,
                BLEND_SUB: 3,
                BLEND_MUL: 4
            }
        };
    const nt = {
            lastMesh: null
        },
        rt = function (t, e, i) {
            this._cgl = t, this._bufVertexAttrib = null, this._bufVerticesIndizes = this._cgl.gl.createBuffer(), this._attributes = [], this._attribLocs = {}, this._geom = null, this._lastShader = null, this._numInstances = 0, this._glPrimitive = i, this._preWireframeGeom = null, this.addVertexNumbers = !1, this.feedBackAttributes = [], this.setGeom(e), this._feedBacks = [], this._feedBacksChanged = !1, this._transformFeedBackLoc = -1, this._lastAttrUpdate = 0, Object.defineProperty(this, "numInstances", {
                get() {
                    return this._numInstances
                },
                set(t) {
                    this.setNumInstances(t)
                }
            })
        };
    var ot;
    rt.prototype.updateVertices = function (t) {
        this.setAttribute(st.SHADER.SHADERVAR_VERTEX_POSITION, t.vertices, 3)
    }, rt.prototype.setAttributePointer = function (t, e, i, s) {
        for (let n = 0; n < this._attributes.length; n++) this._attributes[n].name == t && (this._attributes[n].pointer || (this._attributes[n].pointer = []), this._attributes[n].pointer.push({
            loc: -1,
            name: e,
            stride: i,
            offset: s,
            instanced: t == st.SHADER.SHADERVAR_INSTANCE_MMATRIX
        }))
    }, rt.prototype.getAttribute = function (t) {
        for (let e = 0; e < this._attributes.length; e++)
            if (this._attributes[e].name == t) return this._attributes[e]
    }, rt.prototype.setAttributeRange = function (t, e, i, s) {
        t && (i || s) && (this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, t.buffer), this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, 4 * i, e, i, s - i))
    }, rt.prototype._bufferArray = function (t, e) {
        let i = null;
        t && (this._cgl.debugOneFrame && console.log("_bufferArray", t.length, e.name), t instanceof Float32Array ? i = t : e && e.floatArray && e.floatArray.length == t.length ? (e.floatArray.set(t), i = e.floatArray) : (i = new Float32Array(t), this._cgl.debugOneFrame && console.log("_bufferArray create new float32array", t.length, e.name), Q.profileNonTypedAttrib++, Q.profileNonTypedAttribNames = this._geom.name + " " + e.name), e && i && (e.floatArray = i), this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, i, this._cgl.gl.DYNAMIC_DRAW))
    }, rt.prototype.addAttribute = rt.prototype.updateAttribute = rt.prototype.setAttribute = function (t, e, i, s) {
        let n = null,
            r = !1,
            o = 0;
        const h = e.length / i;
        for (0 === h && console.warn("CGL_MESH: num items in attribute " + t + " is ZERO"), "function" == typeof s && (n = s), "object" == typeof s && (s.cb && (n = s.cb), s.instanced && (r = s.instanced)), t == st.SHADER.SHADERVAR_INSTANCE_MMATRIX && (r = !0), o = 0; o < this._attributes.length; o++)
            if (this._attributes[o].name == t) return this._attributes[o].numItems = h, this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, this._attributes[o].buffer), this._bufferArray(e, this._attributes[o]), this._attributes[o];
        const a = this._cgl.gl.createBuffer();
        this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, a);
        let l = this._cgl.gl.FLOAT;
        s && s.type && (l = s.type);
        const u = {
            buffer: a,
            name: t,
            cb: n,
            itemSize: i,
            numItems: h,
            startItem: 0,
            instanced: r,
            type: l
        };
        return this._bufferArray(e, u), t == st.SHADER.SHADERVAR_VERTEX_POSITION && (this._bufVertexAttrib = u), this._attributes.push(u), this._attribLocs = {}, u
    }, rt.prototype.getAttributes = function () {
        return this._attributes
    }, rt.prototype.updateTexCoords = function (t) {
        if (t.texCoords && t.texCoords.length > 0) this.setAttribute(st.SHADER.SHADERVAR_VERTEX_TEXCOORD, t.texCoords, 2);
        else {
            const e = new Float32Array(Math.round(t.vertices.length / 3 * 2));
            this.setAttribute(st.SHADER.SHADERVAR_VERTEX_TEXCOORD, e, 2)
        }
    }, rt.prototype.updateNormals = function (t) {
        if (t.vertexNormals && t.vertexNormals.length > 0) this.setAttribute("attrVertNormal", t.vertexNormals, 3);
        else {
            const e = new Float32Array(Math.round(t.vertices.length));
            this.setAttribute("attrVertNormal", e, 3)
        }
    }, rt.prototype._setVertexNumbers = function () {
        const t = this._geom.vertices.length / 3;
        if (!this._verticesNumbers || this._verticesNumbers.length != t) {
            this._verticesNumbers = new Float32Array(t);
            for (let e = 0; e < t; e++) this._verticesNumbers[e] = e;
            this.setAttribute(st.SHADER.SHADERVAR_VERTEX_NUMBER, this._verticesNumbers, 1, (e, i, s) => {
                s.uniformNumVertices || (s.uniformNumVertices = new et(s, "f", "numVertices", t)), s.uniformNumVertices.setValue(t)
            })
        }
    }, rt.prototype.setVertexIndices = function (t) {
        if (t.length > 0) {
            for (let e = 0; e < t.length; e++)
                if (t[e] >= this._geom.vertices.length / 3) return void console.warn("invalid index in " + this._geom.name);
            this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes), t instanceof Uint16Array ? this.vertIndicesTyped = t : this.vertIndicesTyped = new Uint16Array(t), this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this.vertIndicesTyped, this._cgl.gl.DYNAMIC_DRAW), this._bufVerticesIndizes.itemSize = 1, this._bufVerticesIndizes.numItems = t.length
        } else this._bufVerticesIndizes.numItems = 0
    }, rt.prototype.setGeom = function (t) {
        this._geom = t, null != t.glPrimitive && (this._glPrimitive = t.glPrimitive), nt.lastMesh = null, Q.profileMeshSetGeom++, this._disposeAttributes(), this.updateVertices(this._geom), this.setVertexIndices(this._geom.verticesIndices), this.updateTexCoords(this._geom), this.updateNormals(this._geom), this._geom.hasOwnProperty("tangents") && this._geom.tangents && this._geom.tangents.length > 0 && this.setAttribute("attrTangent", this._geom.tangents, 3), this._geom.hasOwnProperty("biTangents") && this._geom.biTangents && this._geom.biTangents.length > 0 && this.setAttribute("attrBiTangent", this._geom.biTangents, 3), this._geom.vertexColors.length > 0 && (this._geom.vertexColors.flat && this._geom.vertexColors.flat(100), this.setAttribute("attrVertColor", this._geom.vertexColors, 4)), this.addVertexNumbers && this._setVertexNumbers();
        const e = this._geom.getAttributes();
        for (const t in e) this.setAttribute(t, e[t].data, e[t].itemSize)
    }, rt.prototype._preBind = function (t) {
        for (let e = 0; e < this._attributes.length; e++) this._attributes[e].cb && this._attributes[e].cb(this._attributes[e], this._geom, t)
    }, rt.prototype._checkAttrLengths = function () {
        for (let t = 0; t < this._attributes.length; t++) this._attributes[0].floatArray.length, this._attributes[0].itemSize, this._attributes[t].floatArray.length, this._attributes[t].itemSize
    }, rt.prototype._bind = function (t) {
        t != this._lastShader && this.unBind();
        let e = [];
        this._attribLocs[t.id] ? e = this._attribLocs[t.id] : this._attribLocs[t.id] = e, this._lastShader = t;
        let i = 0;
        if (t.lastCompile > this._lastAttrUpdate || e.length != this._attributes.length) {
            for (this._lastAttrUpdate = t.lastCompile, i = 0; i < this._attributes.length; i++) e[i] = -1;
            this._checkAttrLengths()
        }
        for (i = 0; i < this._attributes.length; i++) {
            const s = this._attributes[i];
            if (-1 == e[i] && s._attrLocationLastShaderTime != t.lastCompile && (s._attrLocationLastShaderTime = t.lastCompile, e[i] = this._cgl.glGetAttribLocation(t.getProgram(), s.name), Q.profileAttrLoc++), -1 != e[i])
                if (this._cgl.gl.enableVertexAttribArray(e[i]), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.buffer), s.instanced)
                    if (s.itemSize <= 4) s.itemSize && 0 != s.itemSize || d.log("instanced attrib itemsize error", this._geom.name, s), this._cgl.gl.vertexAttribPointer(e[i], s.itemSize, s.type, !1, 4 * s.itemSize, 0), this._cgl.gl.vertexAttribDivisor(e[i], 1);
                    else if (16 == s.itemSize) {
                const t = 64;
                this._cgl.gl.vertexAttribPointer(e[i], 4, s.type, !1, t, 0), this._cgl.gl.enableVertexAttribArray(e[i] + 1), this._cgl.gl.vertexAttribPointer(e[i] + 1, 4, s.type, !1, t, 16), this._cgl.gl.enableVertexAttribArray(e[i] + 2), this._cgl.gl.vertexAttribPointer(e[i] + 2, 4, s.type, !1, t, 32), this._cgl.gl.enableVertexAttribArray(e[i] + 3), this._cgl.gl.vertexAttribPointer(e[i] + 3, 4, s.type, !1, t, 48), this._cgl.gl.vertexAttribDivisor(e[i], 1), this._cgl.gl.vertexAttribDivisor(e[i] + 1, 1), this._cgl.gl.vertexAttribDivisor(e[i] + 2, 1), this._cgl.gl.vertexAttribDivisor(e[i] + 3, 1)
            } else d.log("unknown instance attrib size", s.name);
            else {
                if (s.itemSize && 0 != s.itemSize || d.log("attrib itemsize error", this._geom.name, s), this._cgl.gl.vertexAttribPointer(e[i], s.itemSize, s.type, !1, 4 * s.itemSize, 0), s.pointer)
                    for (let e = 0; e < s.pointer.length; e++) {
                        const i = s.pointer[e]; - 1 == i.loc && (i.loc = this._cgl.glGetAttribLocation(t.getProgram(), i.name)), Q.profileAttrLoc++, this._cgl.gl.enableVertexAttribArray(i.loc), this._cgl.gl.vertexAttribPointer(i.loc, s.itemSize, s.type, !1, i.stride, i.offset)
                    }
                this.bindFeedback(s)
            }
        }
        0 !== this._bufVerticesIndizes.numItems && this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes)
    }, rt.prototype.unBind = function () {
        const t = this._lastShader;
        if (this._lastShader = null, !t) return;
        let e = [];
        this._attribLocs[t.id] ? e = this._attribLocs[t.id] : this._attribLocs[t.id] = e, nt.lastMesh = null;
        for (let t = 0; t < this._attributes.length; t++) this._attributes[t].instanced && (this._attributes[t].itemSize <= 4 ? (-1 != e[t] && this._cgl.gl.vertexAttribDivisor(e[t], 0), e[t] >= 0 && this._cgl.gl.disableVertexAttribArray(e[t])) : (this._cgl.gl.vertexAttribDivisor(e[t], 0), this._cgl.gl.vertexAttribDivisor(e[t] + 1, 0), this._cgl.gl.vertexAttribDivisor(e[t] + 2, 0), this._cgl.gl.vertexAttribDivisor(e[t] + 3, 0), this._cgl.gl.disableVertexAttribArray(e[t] + 1), this._cgl.gl.disableVertexAttribArray(e[t] + 2), this._cgl.gl.disableVertexAttribArray(e[t] + 3))), -1 != e[t] && this._cgl.gl.disableVertexAttribArray(e[t])
    }, rt.prototype.meshChanged = function () {
        return this._cgl.lastMesh && this._cgl.lastMesh != this
    }, rt.prototype.printDebug = function (t) {
        d.log("--attributes");
        for (let t = 0; t < this._attributes.length; t++) d.log("attribute " + t + " " + this._attributes[t].name)
    }, rt.prototype.setNumVertices = function (t) {
        this._bufVertexAttrib.numItems = t
    }, rt.prototype.render = function (t) {
        if (!t) return;
        t.wireframe || this._geom.isIndexed() || !this._preWireframeGeom || this.setGeom(this._preWireframeGeom), t.wireframe && this._geom.isIndexed() && (this._preWireframeGeom = this._geom, this._geom = this._geom.copy(), this._geom.unIndex(), this._geom.calcBarycentric(), this.setGeom(this._geom), this.setAttribute("attrBarycentric", this._geom.barycentrics, 3));
        let e = !1;
        nt.lastMesh != this && (nt.lastMesh && nt.lastMesh.unBind(), e = !0), e && this._preBind(t), t.bind(), t.bindTextures && t.bindTextures(), this._bind(t), this.addVertexNumbers && this._setVertexNumbers(), nt.lastMesh = this;
        let i = this._cgl.gl.TRIANGLES;
        void 0 !== this._glPrimitive && (i = this._glPrimitive), null !== t.glPrimitive && (i = t.glPrimitive), this.hasFeedbacks() ? this.drawFeedbacks(t, i) : 0 === this._bufVerticesIndizes.numItems ? 0 === this._numInstances ? this._cgl.gl.drawArrays(i, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems - this._bufVertexAttrib.startItem) : this._cgl.gl.drawArraysInstanced(i, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems, this._numInstances) : 0 === this._numInstances ? this._cgl.gl.drawElements(i, this._bufVerticesIndizes.numItems, this._cgl.gl.UNSIGNED_SHORT, 0) : this._cgl.gl.drawElementsInstanced(i, this._bufVerticesIndizes.numItems, this._cgl.gl.UNSIGNED_SHORT, 0, this._numInstances), Q.profileMeshDraw++
    }, rt.prototype.setNumInstances = function (t) {
        if (this._numInstances != t) {
            this._numInstances = t;
            const e = new Float32Array(t);
            for (let i = 0; i < t; i++) e[i] = i;
            this.setAttribute("instanceIndex", e, 1, {
                instanced: !0
            })
        }
    }, rt.prototype._disposeAttributes = function () {
        if (this._attributes) {
            for (let t = 0; t < this._attributes.length; t++) this._attributes[t].buffer && (this._cgl.gl.deleteBuffer(this._attributes[t].buffer), this._attributes[t].buffer = null);
            this._attributes.length = 0
        }
    }, rt.prototype.dispose = function () {
        this._bufVertexAttrib && this._bufVertexAttrib.buffer && this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer), this._bufVerticesIndizes && this._cgl.gl.deleteBuffer(this._bufVerticesIndizes), this._disposeAttributes()
    }, (ot = rt).prototype.hasFeedbacks = function () {
        return this._feedBacks.length > 0
    }, ot.prototype.removeFeedbacks = function (t) {
        this._feedbacks && (this._feedbacks.length = 0, this._feedBacksChanged = !0)
    }, ot.prototype.setAttributeFeedback = function () {}, ot.prototype.setFeedback = function (t, e, i) {
        let s = {
                nameOut: e
            },
            n = !1;
        this.unBindFeedbacks();
        for (let t = 0; t < this._feedBacks.length; t++) this._feedBacks[t].nameOut == e && (s = this._feedBacks[t], n = !0);
        return n || (this._feedBacksChanged = !0), s.initialArr = i, s.attrib = t, s.outBuffer && this._cgl.gl.deleteBuffer(s.outBuffer), s.outBuffer = this._cgl.gl.createBuffer(), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.outBuffer), this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, s.initialArr, this._cgl.gl.STATIC_DRAW), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.attrib.buffer), this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, s.initialArr, this._cgl.gl.STATIC_DRAW), n || this._feedBacks.push(s), s
    }, ot.prototype.bindFeedback = function (t) {
        if (!this._feedBacks || 0 === this._feedBacks.length) return; - 1 == this._transformFeedBackLoc && (this._transformFeedBackLoc = this._cgl.gl.createTransformFeedback()), this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc);
        let e = !1;
        for (let i = 0; i < this._feedBacks.length; i++) {
            const s = this._feedBacks[i];
            s.attrib == t && (e = !0, this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, s.outBuffer))
        }
    }, ot.prototype.drawFeedbacks = function (t, e) {
        let i = 0;
        if (this._feedBacksChanged) {
            const e = [];
            for (this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc), i = 0; i < this._feedBacks.length; i++) e.push(this._feedBacks[i].nameOut);
            return t.setFeedbackNames(e), d.log("feedbacknames", e), t.compile(), this._feedBacksChanged = !1, this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null), void d.log("changed finished")
        }
        this._cgl.gl.beginTransformFeedback(this.glPrimitive), this._cgl.gl.drawArrays(e, 0, this._feedBacks[0].attrib.numItems), this._cgl.gl.endTransformFeedback(), this.unBindFeedbacks(), this.feedBacksSwapBuffers()
    }, ot.prototype.unBindFeedbacks = function () {
        for (let t = 0; t < this._feedBacks.length; t++) this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, t, null);
        this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null)
    }, ot.prototype.feedBacksSwapBuffers = function () {
        for (let t = 0; t < this._feedBacks.length; t++) {
            const e = this._feedBacks[t].attrib.buffer;
            this._feedBacks[t].attrib.buffer = this._feedBacks[t].outBuffer, this._feedBacks[t].outBuffer = e
        }
    };
    const ht = {
            getSimpleRect: function (t, e) {
                const i = new tt(e);
                return i.vertices = [1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0], i.texCoords = [1, 1, 0, 1, 1, 0, 0, 0], i.verticesIndices = [0, 1, 2, 2, 1, 3], i.vertexNormals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], new rt(t, i)
            }
        },
        at = function (t, e) {
            this._cgl = t, t.TextureEffectMesh || this.createMesh(), this._textureSource = null, this._textureTarget = null, this._frameBuf = this._cgl.gl.createFramebuffer(), this._frameBuf2 = this._cgl.gl.createFramebuffer(), this._renderbuffer = this._cgl.gl.createRenderbuffer(), this._renderbuffer2 = this._cgl.gl.createRenderbuffer(), this.switched = !1, this.depth = !1
        };
    at.prototype.setSourceTexture = function (t) {
        t.textureType == J.TYPE_FLOAT && this._cgl.gl.getExtension("EXT_color_buffer_float"), null === t ? (this._textureSource = new J(this._cgl), this._textureSource.setSize(16, 16)) : this._textureSource = t, this._textureSource.compareSettings(this._textureTarget) || (this._textureTarget && this._textureTarget.delete(), this._textureTarget = this._textureSource.clone(), Q.profileEffectBuffercreate++, this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer), this.depth && this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0), this.depth && this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer2), this.depth && this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0), this.depth && this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer2), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null))
    }, at.prototype.startEffect = function () {
        this._textureTarget ? (this.switched = !1, this._cgl.pushDepthTest(!1), this._cgl.pushModelMatrix(), this._cgl.pushPMatrix(), this._cgl.gl.viewport(0, 0, this.getCurrentTargetTexture().width, this.getCurrentTargetTexture().height), mat4.perspective(this._cgl.pMatrix, 45, this.getCurrentTargetTexture().width / this.getCurrentTargetTexture().height, .1, 1100), this._cgl.pushPMatrix(), mat4.identity(this._cgl.pMatrix), this._cgl.pushViewMatrix(), mat4.identity(this._cgl.vMatrix), this._cgl.pushModelMatrix(), mat4.identity(this._cgl.mvMatrix)) : d.log("effect has no target")
    }, at.prototype.endEffect = function () {
        this._cgl.popDepthTest(!1), this._cgl.popModelMatrix(), this._cgl.popPMatrix(), this._cgl.popModelMatrix(), this._cgl.popViewMatrix(), this._cgl.popPMatrix(), this._cgl.resetViewPort()
    }, at.prototype.bind = function () {
        null !== this._textureSource ? this.switched ? (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2), this._cgl.pushGlFrameBuffer(this._frameBuf2)) : (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf), this._cgl.pushGlFrameBuffer(this._frameBuf)) : d.log("no base texture set!")
    }, at.prototype.finish = function () {
        null !== this._textureSource ? (this._cgl.TextureEffectMesh.render(this._cgl.getShader()), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer()), Q.profileTextureEffect++, this._textureTarget.filter == J.FILTER_MIPMAP && (this.switched ? (this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureSource.tex), this._textureSource.updateMipMap()) : (this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureTarget.tex), this._textureTarget.updateMipMap()), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)), this.switched = !this.switched) : d.log("no base texture set!")
    }, at.prototype.getCurrentTargetTexture = function () {
        return this.switched ? this._textureSource : this._textureTarget
    }, at.prototype.getCurrentSourceTexture = function () {
        return this.switched ? this._textureTarget : this._textureSource
    }, at.prototype.delete = function () {
        this._textureTarget && this._textureTarget.delete(), this._textureSource && this._textureSource.delete(), this._cgl.gl.deleteRenderbuffer(this._renderbuffer), this._cgl.gl.deleteFramebuffer(this._frameBuf)
    }, at.prototype.createMesh = function () {
        this._cgl.TextureEffectMesh = ht.getSimpleRect(this._cgl, "textureEffect rect")
    }, at.checkOpNotInTextureEffect = function (t) {
        return t.uiAttribs.error && !t.patch.cgl.currentTextureEffect ? (t.uiAttr({
            error: null
        }), !0) : !t.patch.cgl.currentTextureEffect || (t.patch.cgl.currentTextureEffect && !t.uiAttribs.error ? (t.setUiError("textureeffect", "This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.", 0), !1) : !t.patch.cgl.currentTextureEffect)
    }, at.checkOpInEffect = function (t) {
        return t.patch.cgl.currentTextureEffect && t.uiAttribs.error ? (t.uiAttr({
            error: null
        }), !0) : !!t.patch.cgl.currentTextureEffect || (t.patch.cgl.currentTextureEffect || t.uiAttribs.error ? !!t.patch.cgl.currentTextureEffect : (t.setUiError("texeffect", 'This op must be a child of a texture effect! More infos <a href="https://docs.cables.gl/image_composition/image_composition.html" target="_blank">here</a>.', 1), !1))
    }, at.getBlendCode = function () {
        return "".endl() + "vec3 _blend(vec3 base,vec3 blend)".endl() + "{".endl() + "   vec3 colNew=blend;".endl() + "   #ifdef BM_MULTIPLY".endl() + "       colNew=base*blend;".endl() + "   #endif".endl() + "   #ifdef BM_MULTIPLY_INV".endl() + "       colNew=base* vec3(1.0)-blend;".endl() + "   #endif".endl() + "   #ifdef BM_AVERAGE".endl() + "       colNew=((base + blend) / 2.0);".endl() + "   #endif".endl() + "   #ifdef BM_ADD".endl() + "       colNew=min(base + blend, vec3(1.0));".endl() + "   #endif".endl() + "   #ifdef BM_SUBSTRACT".endl() + "       colNew=max(base + blend - vec3(1.0), vec3(0.0));".endl() + "   #endif".endl() + "   #ifdef BM_DIFFERENCE".endl() + "       colNew=abs(base - blend);".endl() + "   #endif".endl() + "   #ifdef BM_NEGATION".endl() + "       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));".endl() + "   #endif".endl() + "   #ifdef BM_EXCLUSION".endl() + "       colNew=(base + blend - 2.0 * base * blend);".endl() + "   #endif".endl() + "   #ifdef BM_LIGHTEN".endl() + "       colNew=max(blend, base);".endl() + "   #endif".endl() + "   #ifdef BM_DARKEN".endl() + "       colNew=min(blend, base);".endl() + "   #endif".endl() + "   #ifdef BM_OVERLAY".endl() + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))".endl() + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl() + "   #endif".endl() + "   #ifdef BM_SCREEN".endl() + "      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))".endl() + "      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));".endl() + "   #endif".endl() + "   #ifdef BM_SOFTLIGHT".endl() + "      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))".endl() + "      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));".endl() + "   #endif".endl() + "   #ifdef BM_HARDLIGHT".endl() + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))".endl() + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl() + "   #endif".endl() + "   #ifdef BM_COLORDODGE".endl() + "      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))".endl() + "      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));".endl() + "   #endif".endl() + "   #ifdef BM_COLORBURN".endl() + "      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))".endl() + "      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));".endl() + "   #endif".endl() + "   return colNew;".endl() + "}".endl() + "vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)".endl() + "{".endl() + "   vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);".endl() + "   col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);".endl() + "   return col;".endl() + "}"
    }, at.onChangeBlendSelect = function (t, e) {
        "normal" == e ? t.define("BM_NORMAL") : t.removeDefine("BM_NORMAL"), "multiply" == e ? t.define("BM_MULTIPLY") : t.removeDefine("BM_MULTIPLY"), "multiply invert" == e ? t.define("BM_MULTIPLY_INV") : t.removeDefine("BM_MULTIPLY_INV"), "average" == e ? t.define("BM_AVERAGE") : t.removeDefine("BM_AVERAGE"), "add" == e ? t.define("BM_ADD") : t.removeDefine("BM_ADD"), "substract" == e ? t.define("BM_SUBSTRACT") : t.removeDefine("BM_SUBSTRACT"), "difference" == e ? t.define("BM_DIFFERENCE") : t.removeDefine("BM_DIFFERENCE"), "negation" == e ? t.define("BM_NEGATION") : t.removeDefine("BM_NEGATION"), "exclusion" == e ? t.define("BM_EXCLUSION") : t.removeDefine("BM_EXCLUSION"), "lighten" == e ? t.define("BM_LIGHTEN") : t.removeDefine("BM_LIGHTEN"), "darken" == e ? t.define("BM_DARKEN") : t.removeDefine("BM_DARKEN"), "overlay" == e ? t.define("BM_OVERLAY") : t.removeDefine("BM_OVERLAY"), "screen" == e ? t.define("BM_SCREEN") : t.removeDefine("BM_SCREEN"), "softlight" == e ? t.define("BM_SOFTLIGHT") : t.removeDefine("BM_SOFTLIGHT"), "hardlight" == e ? t.define("BM_HARDLIGHT") : t.removeDefine("BM_HARDLIGHT"), "color dodge" == e ? t.define("BM_COLORDODGE") : t.removeDefine("BM_COLORDODGE"), "color burn" == e ? t.define("BM_COLORBURN") : t.removeDefine("BM_COLORBURN")
    }, at.AddBlendSelect = function (t, e) {
        return t.inValueSelect(e, ["normal", "lighten", "darken", "multiply", "multiply invert", "average", "add", "substract", "difference", "negation", "exclusion", "overlay", "screen", "color dodge", "color burn", "softlight", "hardlight"], "normal")
    }, at.setupBlending = function (t, e, i, s) {
        t.setPortGroup("Blending", [i, s]), i.onChange = function () {
            at.onChangeBlendSelect(e, i.get());
            let s = i.get();
            "normal" == s ? s = null : "multiply" == s ? s = "mul" : "multiply invert" == s ? s = "mulinv" : "lighten" == s ? s = "light" : "darken" == s ? s = "darken" : "average" == s ? s = "avg" : "substract" == s ? s = "sub" : "difference" == s ? s = "diff" : "negation" == s || "negation" == s || "negation" == s ? s = "neg" : "exclusion" == s ? s = "exc" : "overlay" == s ? s = "ovl" : "color dodge" == s ? s = "dodge" : "color burn" == s ? s = "burn" : "softlight" == s ? s = "soft" : "hardlight" == s && (s = "hard"), t.setUiAttrib({
                extendTitle: s
            })
        }
    };
    const lt = {
            "CGL.BLENDMODES": function () {
                this.name = "blendmodes", this.srcHeadFrag = at.getBlendCode()
            },
            "CGL.RANDOM_OLD": function () {
                this.name = "randomNumber", this.srcHeadFrag = "".endl() + "float cgl_random(vec2 co)".endl() + "{".endl() + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);".endl() + "}".endl() + "vec3 cgl_random3(vec2 co)".endl() + "{".endl() + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl() + "}"
            },
            "CGL.RANDOM_LOW": function () {
                this.name = "randomNumber", this.srcHeadFrag = "".endl() + "float cgl_random(vec2 co)".endl() + "{".endl() + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);".endl() + "}".endl() + "vec3 cgl_random3(vec2 co)".endl() + "{".endl() + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl() + "}"
            },
            "CGL.RANDOM_TEX": function () {
                this.name = "randomNumbertex", this.srcHeadFrag = "".endl() + "UNI sampler2D CGLRNDTEX;".endl() + "float cgl_random(vec2 co)".endl() + "{".endl() + "    return texture(CGLRNDTEX,co*5711.0).r;".endl() + "}".endl() + "vec3 cgl_random3(vec2 co)".endl() + "{".endl() + "    return texture(CGLRNDTEX,co*5711.0).rgb;".endl() + "}", this.initUniforms = function (t) {
                    return [new et(t, "t", "CGLRNDTEX", 7)]
                }, this.onBind = function (t, e) {
                    J.getRandomTexture(t), t.setTexture(7, J.getRandomTexture(t).tex)
                }
            }
        },
        ut = function () {
            return window.performance.now()
        },
        ct = function () {
            return ut()
        },
        pt = function () {
            this._timeStart = ut(), this._timeOffset = 0, this._currentTime = 0, this._lastTime = 0, this._paused = !0, this._delay = 0, this._eventsPaused = !1, this.overwriteTime = -1, this.cbPlayPause = [], this.cbTimeChange = []
        };
    pt.prototype._getTime = function () {
        return this._lastTime = (ut() - this._timeStart) / 1e3, this._lastTime + this._timeOffset
    }, pt.prototype._eventPlayPause = function () {
        if (!this._eventsPaused)
            for (const t in this.cbPlayPause) this.cbPlayPause[t]()
    }, pt.prototype._eventTimeChange = function () {
        if (!this._eventsPaused)
            for (const t in this.cbTimeChange) this.cbTimeChange[t]()
    }, pt.prototype.setDelay = function (t) {
        this._delay = t, this._eventTimeChange()
    }, pt.prototype.isPlaying = function () {
        return !this._paused
    }, pt.prototype.update = function () {
        if (!this._paused) return this._currentTime = this._getTime(), this._currentTime
    }, pt.prototype.getMillis = function () {
        return 1e3 * this.get()
    }, pt.prototype.get = pt.prototype.getTime = function () {
        return this.overwriteTime >= 0 ? this.overwriteTime - this._delay : this._currentTime - this._delay
    }, pt.prototype.togglePlay = function () {
        this._paused ? this.play() : this.pause()
    }, pt.prototype.setTime = function (t) {
        t < 0 && (t = 0), this._timeStart = ut(), this._timeOffset = t, this._currentTime = t, this._eventTimeChange()
    }, pt.prototype.setOffset = function (t) {
        this._currentTime + t < 0 ? (this._timeStart = ut(), this._timeOffset = 0, this._currentTime = 0) : (this._timeOffset += t, this._currentTime = this._lastTime + this._timeOffset), this._eventTimeChange()
    }, pt.prototype.play = function () {
        this._timeStart = ut(), this._paused = !1, this._eventPlayPause()
    }, pt.prototype.pause = function () {
        this._timeOffset = this._currentTime, this._paused = !0, this._eventPlayPause()
    }, pt.prototype.pauseEvents = function (t) {
        this._eventsPaused = t
    }, pt.prototype.onPlayPause = function (t) {
        t && "function" == typeof t && this.cbPlayPause.push(t)
    }, pt.prototype.onTimeChange = function (t) {
        t && "function" == typeof t && this.cbTimeChange.push(t)
    };
    const dt = Math.PI / 180,
        _t = (Math.PI, -1 != window.navigator.userAgent.indexOf("Windows")),
        gt = function (t) {
            let e;
            if (t.wheelDelta) e = t.wheelDelta % 120 - 0 == -0 ? t.wheelDelta / 120 : t.wheelDelta / 30, e *= -1.5, _t && (e *= 2);
            else {
                let i = t.deltaY;
                t.shiftKey && (i = t.deltaX);
                const s = i || t.detail;
                e = -(s % 3 ? 10 * s : s / 3), e *= -3
            }
            return e > 20 && (e = 20), e < -20 && (e = -20), e
        },
        ft = gt,
        mt = gt,
        Et = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        },
        Tt = /[&<>"']/g,
        At = RegExp(Tt.source),
        bt = function (t, e) {
            if (!t) throw new Error("shader constructed without cgl " + e);
            this._cgl = t, this._name = e || "unknown", this.glslVersion = 0, t.glVersion > 1 && (this.glslVersion = 300), this.id = I(), this._program = null, this._uniforms = [], this._drawBuffers = [!0], this._defines = [], this._needsRecompile = !0, this._projMatrixUniform = null, this._mvMatrixUniform = null, this._mMatrixUniform = null, this._vMatrixUniform = null, this._camPosUniform = null, this._normalMatrixUniform = null, this._inverseViewMatrixUniform = null, this._attrVertexPos = -1, this.precision = t.patch.config.glslPrecision || "highp", this._pMatrixState = -1, this._vMatrixState = -1, this._modGroupCount = 0, this._feedBackNames = [], this._attributes = [], this.glPrimitive = null, this.offScreenPass = !1, this._extensions = [], this.srcVert = this.getDefaultVertexShader(), this.srcFrag = this.getDefaultFragmentShader(), this.lastCompile = 0, this._moduleNames = [], this._modules = [], this._moduleNumId = 0, this._libs = [], this._textureStackUni = [], this._textureStackTex = [], this._textureStackType = [], this._tempNormalMatrix = mat4.create(), this._tempCamPosMatrix = mat4.create(), this._tempInverseViewMatrix = mat4.create(), this.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"])
        };
    bt.prototype.getCgl = function () {
        return this._cgl
    }, bt.prototype.getName = function () {
        return this._name
    }, bt.prototype.enableExtension = function (t) {
        this.setWhyCompile("enable extension " + t), this._needsRecompile = !0, this._extensions.push(t)
    }, bt.prototype.getAttrVertexPos = function () {
        return this._attrVertexPos
    }, bt.prototype.hasTextureUniforms = function () {
        for (let t = 0; t < this._uniforms.length; t++)
            if ("t" == this._uniforms[t].getType()) return !0;
        return !1
    }, bt.prototype.setWhyCompile = function (t) {}, bt.prototype.copyUniforms = function (t) {
        for (let e = 0; e < t._uniforms.length; e++) this._uniforms[e].set(t._uniforms[e].getValue())
    }, bt.prototype.copy = function () {
        const t = new bt(this._cgl, this._name + " copy");
        t.setSource(this.srcVert, this.srcFrag), t._modules = JSON.parse(JSON.stringify(this._modules)), t._defines = JSON.parse(JSON.stringify(this._defines)), t._modGroupCount = this._modGroupCount, t._moduleNames = this._moduleNames;
        for (let e = 0; e < this._uniforms.length; e++) {
            this._uniforms[e].copy(t).resetLoc()
        }
        return t
    }, bt.prototype.setSource = function (t, e) {
        this.srcVert = t, this.srcFrag = e, this.setWhyCompile("Source changed"), this._needsRecompile = !0
    }, bt.prototype._addLibs = function (t) {
        for (const e in lt)
            if (t.indexOf(e) > -1) {
                const i = new lt[e];
                t = t.replace("{{" + e + "}}", i.srcHeadFrag), this._libs.push(i), i.initUniforms && i.initUniforms(this)
            } return t
    }, bt.prototype.compile = function () {
        let t = 0;
        Q.profileShaderCompiles++, Q.profileShaderCompileName = this._name;
        let e = "";
        if (this._extensions)
            for (t = 0; t < this._extensions.length; t++) e += "#extension " + this._extensions[t] + " : enable".endl();
        let i = "";
        for (t = 0; t < this._defines.length; t++) i += "#define " + this._defines[t][0] + " " + this._defines[t][1] + "".endl();
        if (this._uniforms)
            for (t = 0; t < this._uniforms.length; t++) this._uniforms[t].resetLoc();
        this.hasTextureUniforms() && (i += "#define HAS_TEXTURES".endl());
        let s = "",
            n = "";
        if (300 == this.glslVersion) {
            let e = "";
            if (this.srcFrag.indexOf("outColor0") > -1 && (this._drawBuffers[0] = !0), this.srcFrag.indexOf("outColor1") > -1 && (this._drawBuffers[1] = !0), this.srcFrag.indexOf("outColor2") > -1 && (this._drawBuffers[2] = !0), this.srcFrag.indexOf("outColor3") > -1 && (this._drawBuffers[3] = !0), 1 == this._drawBuffers.length) e = "out vec4 outColor;".endl(), e += "#define gl_FragColor outColor".endl();
            else {
                let i = 0;
                for (e += "vec4 outColor;".endl(), t = 0; t < this._drawBuffers.length; t++) 0 == i && (e += "#define gl_FragColor outColor" + t + "".endl()), e += "layout(location = " + t + ") out vec4 outColor" + t + ";".endl(), i++
            }
            s = "#version 300 es".endl() + "// ".endl() + "// vertex shader " + this._name.endl() + "// ".endl() + "precision " + this.precision + " float;".endl() + "".endl() + "#define WEBGL2".endl() + "#define texture2D texture".endl() + "#define UNI uniform".endl() + "#define IN in".endl() + "#define OUT out".endl(), n = "#version 300 es".endl() + "// ".endl() + "// fragment shader " + this._name.endl() + "// ".endl() + "precision " + this.precision + " float;".endl() + "".endl() + "#define WEBGL2".endl() + "#define texture2D texture".endl() + "#define IN in".endl() + "#define UNI uniform".endl() + e.endl()
        } else n = "".endl() + "// ".endl() + "// fragment shader " + this._name.endl() + "// ".endl() + "#define WEBGL1".endl() + "#define texture texture2D".endl() + "#define outColor gl_FragColor".endl() + "#define IN varying".endl() + "#define UNI uniform".endl(), s = "".endl() + "// ".endl() + "// vertex shader " + this._name.endl() + "// ".endl() + "#define WEBGL1".endl() + "#define texture texture2D".endl() + "#define OUT varying".endl() + "#define IN attribute".endl() + "#define UNI uniform".endl(); - 1 == n.indexOf("precision") && (n = "precision " + this.precision + " float;".endl() + n), -1 == s.indexOf("precision") && (s = "precision " + this.precision + " float;".endl() + s), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (n += "#define MOBILE".endl(), s += "#define MOBILE".endl()), s = e + s + i + this.srcVert, n = e + n + i + this.srcFrag;
        let r = "",
            o = "";
        this._modules.sort((function (t, e) {
            return t.group - e.group
        })), this._modules.sort((function (t, e) {
            return t.priority || 0 - e.priority || 0
        }));
        let h = !1;
        for (t = 0; t < this._moduleNames.length; t++) {
            let e = "",
                i = "";
            for (let s = 0; s < this._modules.length; s++)
                if (this._modules[s].name == this._moduleNames[t]) {
                    if (r += "\n//---- MOD: group:" + this._modules[s].group + ": idx:" + s + " - prfx:" + this._modules[s].prefix + " - " + this._modules[s].title + " ------\n", o += "\n//---- MOD: group:" + this._modules[s].group + ": idx:" + s + " - prfx:" + this._modules[s].prefix + " - " + this._modules[s].title + " ------\n", e += "\n\n//---- MOD: " + this._modules[s].title + " ------\n", i += "\n\n//---- MOD: " + this._modules[s].title + " ------\n", !h) {
                        h = !0;
                        for (let t = 0; t < this._attributes.length; t++) this._attributes[t].name && this._attributes[t].type && (r += "".endl() + "#ifndef ATTRIB_" + this._attributes[t].name.endl() + "  #define ATTRIB_" + this._attributes[t].name.endl() + "  IN " + this._attributes[t].type + " " + this._attributes[t].name + ";".endl() + "#endif", this._attributes[t].nameFrag && (r += "".endl() + "#ifndef ATTRIB_" + this._attributes[t].nameFrag.endl() + "  #define ATTRIB_" + this._attributes[t].nameFrag.endl() + "  OUT " + this._attributes[t].type + " " + this._attributes[t].nameFrag + ";".endl() + "#endif", e += "".endl() + this._attributes[t].nameFrag + "=" + this._attributes[t].name + ";"), o += "".endl() + "#ifndef ATTRIB_" + this._attributes[t].nameFrag.endl() + "  #define ATTRIB_" + this._attributes[t].nameFrag.endl() + "  IN " + this._attributes[t].type + " " + this._attributes[t].nameFrag + ";".endl() + "#endif")
                    }
                    r += this._modules[s].srcHeadVert || "", o += this._modules[s].srcHeadFrag || "", e += this._modules[s].srcBodyVert || "", i += this._modules[s].srcBodyFrag || "", r += "\n//---- end mod ------\n", o += "\n//---- end mod ------\n", e += "\n//---- end mod ------\n", i += "\n//---- end mod ------\n", e = e.replace(/{{mod}}/g, this._modules[s].prefix), i = i.replace(/{{mod}}/g, this._modules[s].prefix), r = r.replace(/{{mod}}/g, this._modules[s].prefix), o = o.replace(/{{mod}}/g, this._modules[s].prefix), e = e.replace(/MOD_/g, this._modules[s].prefix), i = i.replace(/MOD_/g, this._modules[s].prefix), r = r.replace(/MOD_/g, this._modules[s].prefix), o = o.replace(/MOD_/g, this._modules[s].prefix)
                } s = s.replace("{{" + this._moduleNames[t] + "}}", e), n = n.replace("{{" + this._moduleNames[t] + "}}", i)
        }
        if (s = s.replace("{{MODULES_HEAD}}", r), n = n.replace("{{MODULES_HEAD}}", o), s = this._addLibs(s), n = this._addLibs(n), this._program)
            for (this._program = this._createProgram(s, n), this._projMatrixUniform = null, t = 0; t < this._uniforms.length; t++) this._uniforms[t].resetLoc();
        else this._program = this._createProgram(s, n);
        this.finalShaderFrag = n, this.finalShaderVert = s, nt.lastMesh = null, nt.lastShader = null, this._needsRecompile = !1, this.lastCompile = ct()
    }, bt.prototype.bind = function () {
        if (nt.lastShader = this, this._program && !this._needsRecompile || this.compile(), !this._projMatrixUniform) {
            this._attrVertexPos = this._cgl.glGetAttribLocation(this._program, st.SHADER.SHADERVAR_VERTEX_POSITION), this._projMatrixUniform = this._cgl.gl.getUniformLocation(this._program, st.SHADER.SHADERVAR_UNI_PROJMAT), this._mvMatrixUniform = this._cgl.gl.getUniformLocation(this._program, "mvMatrix"), this._vMatrixUniform = this._cgl.gl.getUniformLocation(this._program, st.SHADER.SHADERVAR_UNI_VIEWMAT), this._mMatrixUniform = this._cgl.gl.getUniformLocation(this._program, st.SHADER.SHADERVAR_UNI_MODELMAT), this._camPosUniform = this._cgl.gl.getUniformLocation(this._program, st.SHADER.SHADERVAR_UNI_VIEWPOS), this._normalMatrixUniform = this._cgl.gl.getUniformLocation(this._program, st.SHADER.SHADERVAR_UNI_NORMALMAT), this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(this._program, st.SHADER.SHADERVAR_UNI_INVVIEWMAT);
            for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].needsUpdate = !0
        }
        this._cgl.currentProgram != this._program && (Q.profileShaderBinds++, this._cgl.gl.useProgram(this._program), this._cgl.currentProgram = this._program);
        for (let t = 0; t < this._uniforms.length; t++) this._uniforms[t].needsUpdate && this._uniforms[t].updateValue();
        if (this._pMatrixState != this._cgl.getProjectionMatrixStateCount() && (this._pMatrixState = this._cgl.getProjectionMatrixStateCount(), this._cgl.gl.uniformMatrix4fv(this._projMatrixUniform, !1, this._cgl.pMatrix), Q.profileMVPMatrixCount++), this._vMatrixUniform) this._vMatrixState != this._cgl.getViewMatrixStateCount() && (this._cgl.gl.uniformMatrix4fv(this._vMatrixUniform, !1, this._cgl.vMatrix), Q.profileMVPMatrixCount++, this._vMatrixState = this._cgl.getViewMatrixStateCount(), this._inverseViewMatrixUniform && (mat4.invert(this._tempInverseViewMatrix, this._cgl.vMatrix), this._cgl.gl.uniformMatrix4fv(this._inverseViewMatrixUniform, !1, this._tempInverseViewMatrix), Q.profileMVPMatrixCount++)), this._cgl.gl.uniformMatrix4fv(this._mMatrixUniform, !1, this._cgl.mMatrix), Q.profileMVPMatrixCount++, this._camPosUniform && (mat4.invert(this._tempCamPosMatrix, this._cgl.vMatrix), this._cgl.gl.uniform3f(this._camPosUniform, this._tempCamPosMatrix[12], this._tempCamPosMatrix[13], this._tempCamPosMatrix[14]), Q.profileMVPMatrixCount++);
        else {
            const t = mat4.create();
            mat4.mul(t, this._cgl.vMatrix, this._cgl.mMatrix), this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform, !1, t), Q.profileMVPMatrixCount++
        }
        this._normalMatrixUniform && (mat4.invert(this._tempNormalMatrix, this._cgl.mMatrix), mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix), this._cgl.gl.uniformMatrix4fv(this._normalMatrixUniform, !1, this._tempNormalMatrix), Q.profileMVPMatrixCount++);
        for (let t = 0; t < this._libs.length; t++) this._libs[t].onBind && this._libs[t].onBind.bind(this._libs[t])(this._cgl, this);
        this._bindTextures()
    }, bt.prototype.toggleDefine = function (t, e) {
        e ? this.define(t) : this.removeDefine(t)
    }, bt.prototype.define = function (t, e) {
        e || (e = "");
        for (let i = 0; i < this._defines.length; i++) {
            if (this._defines[i][0] == t && this._defines[i][1] == e) return;
            if (this._defines[i][0] == t) return this._defines[i][1] = e, void(this._needsRecompile = !0)
        }
        this._defines.push([t, e]), this._needsRecompile = !0, this.setWhyCompile("define " + t + " " + e)
    }, bt.prototype.getDefines = function () {
        return this._defines
    }, bt.prototype.getDefine = function (t) {
        for (let e = 0; e < this._defines.length; e++)
            if (this._defines[e][0] == t) return this._defines[e][1];
        return null
    }, bt.prototype.hasDefine = function (t) {
        for (let e = 0; e < this._defines.length; e++)
            if (this._defines[e][0] == t) return !0
    }, bt.prototype.removeDefine = function (t) {
        for (let e = 0; e < this._defines.length; e++)
            if (this._defines[e][0] == t) return this._defines.splice(e, 1), void(this._needsRecompile = !0)
    }, bt.prototype.removeModule = function (t) {
        for (let e = 0; e < this._modules.length; e++)
            if (t && t.id && (this._modules[e].id == t.id || !this._modules[e])) {
                let i = !0;
                for (; i;) {
                    i = !1;
                    for (let e = 0; e < this._uniforms.length; e++) 0 != this._uniforms[e].getName().indexOf(t.prefix) || (this._uniforms.splice(e, 1), i = !0)
                }
                this._needsRecompile = !0, this.setWhyCompile("remove module " + t.title), this._modules.splice(e, 1);
                break
            }
    }, bt.prototype.getNumModules = function () {
        return this._modules.length
    }, bt.prototype.getCurrentModules = function () {
        return this._modules
    }, bt.prototype.addModule = function (t, e) {
        return t.id || (t.id = y()), t.numId || (t.numId = this._moduleNumId), t.num || (t.num = this._modules.length), t.group = e ? e.group : this._modGroupCount++, t.prefix = "mod" + t.group, this._modules.push(t), this._needsRecompile = !0, this.setWhyCompile("add module " + t.title), this._moduleNumId++, t
    }, bt.prototype.setModules = function (t) {
        this._moduleNames = t
    }, bt.prototype.dispose = function () {
        this._cgl.gl.deleteProgram(this._program)
    }, bt.prototype.setDrawBuffers = function (t) {
        this._drawBuffers = t, this._needsRecompile = !0
    }, bt.prototype.getUniforms = function () {
        return this._uniforms
    }, bt.prototype.getUniform = function (t) {
        for (let e = 0; e < this._uniforms.length; e++)
            if (this._uniforms[e].getName() == t) return this._uniforms[e];
        return null
    }, bt.prototype.removeUniform = function (t) {
        for (let e = 0; e < this._uniforms.length; e++) this._uniforms[e].getName() == t && this._uniforms.splice(e, 1);
        this._needsRecompile = !0, this.setWhyCompile("remove uniform " + t)
    }, bt.prototype.addUniform = function (t) {
        this._uniforms.push(t), this.setWhyCompile("add uniform " + name), this._needsRecompile = !0
    }, bt.prototype._createProgram = function (t, e) {
        const i = this._cgl.gl.createProgram();
        return this.vshader = bt.createShader(this._cgl, t, this._cgl.gl.VERTEX_SHADER, this), this.fshader = bt.createShader(this._cgl, e, this._cgl.gl.FRAGMENT_SHADER, this), this._cgl.gl.attachShader(i, this.vshader), this._cgl.gl.attachShader(i, this.fshader), this._linkProgram(i), i
    }, bt.prototype.hasErrors = function () {
        return this._hasErrors
    }, bt.prototype._linkProgram = function (t) {
        this._feedBackNames.length > 0 && this._cgl.gl.transformFeedbackVaryings(t, this._feedBackNames, this._cgl.gl.SEPARATE_ATTRIBS), this._cgl.gl.linkProgram(t), !1 !== this._cgl.patch.config.glValidateShader && (this._cgl.gl.validateProgram(t), this._cgl.gl.getProgramParameter(t, this._cgl.gl.LINK_STATUS) || (console.warn(this._cgl.gl.getShaderInfoLog(this.fshader)), console.warn(this._cgl.gl.getShaderInfoLog(this.vshader)), console.error(name + " shader linking fail..."), d.log("srcFrag", this.srcFrag), d.log("srcVert", this.srcVert), d.log(name + " programinfo: ", this._cgl.gl.getProgramInfoLog(t)), d.log("--------------------------------------"), d.log(this), d.log("--------------------------------------"), this._name = "errorshader", this.setSource(bt.getDefaultVertexShader(), bt.getErrorFragmentShader())))
    }, bt.prototype.getProgram = function () {
        return this._program
    }, bt.prototype.setFeedbackNames = function (t) {
        this._needsRecompile = !0, this._feedBackNames = t
    }, bt.prototype.getDefaultVertexShader = bt.getDefaultVertexShader = function () {
        return "".endl() + "{{MODULES_HEAD}}".endl() + "IN vec3 vPosition;".endl() + "IN vec2 attrTexCoord;".endl() + "IN vec3 attrVertNormal;".endl() + "IN float attrVertIndex;".endl() + "OUT vec2 texCoord;".endl() + "OUT vec3 norm;".endl() + "UNI mat4 projMatrix;".endl() + "UNI mat4 viewMatrix;".endl() + "UNI mat4 modelMatrix;".endl() + "void main()".endl() + "{".endl() + "   texCoord=attrTexCoord;".endl() + "   norm=attrVertNormal;".endl() + "   vec4 pos=vec4(vPosition,  1.0);".endl() + "   mat4 mMatrix=modelMatrix;".endl() + "   {{MODULE_VERTEX_POSITION}}".endl() + "   gl_Position = projMatrix * (viewMatrix*mMatrix) * pos;".endl() + "}"
    }, bt.prototype.getDefaultFragmentShader = bt.getDefaultFragmentShader = function (t, e, i) {
        return null == t && (t = .5, e = .5, i = .5), "".endl() + "IN vec2 texCoord;".endl() + "{{MODULES_HEAD}}".endl() + "void main()".endl() + "{".endl() + "    vec4 col=vec4(" + t + "," + e + "," + i + ",1.0);".endl() + "    {{MODULE_COLOR}}".endl() + "    outColor = col;".endl() + "}"
    }, bt.prototype.addAttribute = function (t) {
        for (let e = 0; e < this._attributes.length; e++)
            if (this._attributes[e].name == t.name && this._attributes[e].nameFrag == t.nameFrag) return;
        this._attributes.push(t), this._needsRecompile = !0
    }, bt.prototype.bindTextures = bt.prototype._bindTextures = function () {
        this._textureStackTex.length > this._cgl.maxTextureUnits && console.log("[shader._bindTextures] too many textures bound", this._textureStackTex.length + "/" + this._cgl.maxTextureUnits);
        for (let t = 0; t < this._textureStackTex.length; t++) this._textureStackTex[t] ? this._textureStackUni[t] ? (this._textureStackUni[t].setValue(t), this._cgl.setTexture(t, this._textureStackTex[t], this._textureStackType[t])) : (console.log("no uniform for pushtexture", this._name), this._cgl.setTexture(t, this._textureStackTex[t], this._textureStackType[t])) : console.log("no texture for pushtexture", this._name)
    }, bt.prototype.pushTexture = function (t, e, i) {
        if (!t) throw new Error("no uniform given to texturestack");
        if (!e) throw new Error("no texture given to texturestack");
        this._textureStackUni.push(t), this._textureStackTex.push(e), this._textureStackType.push(i)
    }, bt.prototype.popTexture = function () {
        this._textureStackUni.pop(), this._textureStackTex.pop(), this._textureStackType.pop()
    }, bt.prototype.popTextures = function () {
        this._textureStackTex.length = this._textureStackType.length = this._textureStackUni.length = 0
    }, bt.getErrorFragmentShader = function () {
        return "".endl() + "void main()".endl() + "{".endl() + "   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;".endl() + "   g= step(0.1,g);".endl() + "   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);".endl() + "}"
    }, bt.createShader = function (t, e, i, s) {
        const n = t.gl.createShader(i);
        if (t.gl.shaderSource(n, e), t.gl.compileShader(n), !t.gl.getShaderParameter(n, t.gl.COMPILE_STATUS)) {
            d.log("compile status: "), i == t.gl.VERTEX_SHADER && d.log("VERTEX_SHADER"), i == t.gl.FRAGMENT_SHADER && d.log("FRAGMENT_SHADER"), console.warn(t.gl.getShaderInfoLog(n));
            let o = t.gl.getShaderInfoLog(n);
            const h = function (t) {
                const e = [],
                    i = t.split("\n");
                for (const t in i) {
                    const s = i[t].split(":");
                    parseInt(s[2], 10) && e.push(parseInt(s[2], 10))
                }
                return e
            }(o);
            let a = '<div class="shaderErrorCode">';
            const l = e.match(/^.*((\r\n|\n|\r)|$)/gm);
            for (const t in l) {
                const e = parseInt(t, 10) + 1,
                    i = e + ": " + l[t];
                d.log(i);
                let s = !1;
                for (const t in h) h[t] == e && (s = !0);
                s && (a += '<span class="error">'), a += (r = i) && At.test(r) ? r.replace(Tt, (function (t) {
                    return Et[t]
                })) : r || "", s && (a += "</span>")
            }
            console.warn(o), o = o.replace(/\n/g, "<br/>"), a = o + "<br/>" + a + "<br/><br/>", t.patch.emitEvent("criticalError", "Shader error " + name, a), t.patch.isEditorMode() && d.log("Shader error " + name, a), a += "</div>", this._name = "errorshader", s.setSource(bt.getDefaultVertexShader(), bt.getErrorFragmentShader())
        }
        var r;
        return n
    };
    const yt = function () {
        this._arr = [mat4.create()], this._index = 0, this.stateCounter = 0
    };
    yt.prototype.push = function (t) {
        if (this._index++, this.stateCounter++, this._index == this._arr.length) {
            const t = mat4.create();
            this._arr.push(t)
        }
        return mat4.copy(this._arr[this._index], t || this._arr[this._index - 1]), this._arr[this._index]
    }, yt.prototype.pop = function () {
        return this.stateCounter++, this._index--, this._index < 0 && (this._index = 0), this._arr[this._index]
    }, yt.prototype.length = function () {
        return this._index
    };
    const Ot = function (t) {
        _.apply(this);
        const e = [0, 0, 0, 0];
        this.glVersion = 0, this.glUseHalfFloatTex = !1, this.clearCanvasTransparent = !0, this.clearCanvasDepth = !0, this.patch = t, this.debugOneFrame = !1, this.maxTextureUnits = 0, this.currentProgram = null, this._hadStackError = !1, this.temporaryTexture = null, this.frameStore = {}, this.gl = null, this.pMatrix = mat4.create(), this.mMatrix = mat4.create(), this.vMatrix = mat4.create(), this._textureslots = [], this._pMatrixStack = new yt, this._mMatrixStack = new yt, this._vMatrixStack = new yt, this._glFrameBufferStack = [], this._frameBufferStack = [], this._shaderStack = [], Object.defineProperty(this, "mvMatrix", {
            get() {
                return this.mMatrix
            },
            set(t) {
                this.mMatrix = t
            }
        }), this.canvas = null, this.pixelDensity = 1, mat4.identity(this.mMatrix), mat4.identity(this.vMatrix);
        const i = new bt(this, "simpleshader");
        i.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]), i.setSource(bt.getDefaultVertexShader(), bt.getDefaultFragmentShader());
        let s = i;
        const n = [];
        this.addEventListener = function (t, e) {
            "resize" == t && n.push(e)
        }, this.removeEventListener = function (t, e) {
            if ("resize" == t)
                for (const t in n)
                    if (n[t] == e) return void n.splice(t, 1)
        }, this.exitError = function (t, e) {
            this.patch.exitError(t, e), this.aborted = !0
        }, this.setCanvas = function (t) {
            if (this.canvas = "string" == typeof t ? document.getElementById(t) : t, this.patch.config.canvas || (this.patch.config.canvas = {}), this.patch.config.canvas.hasOwnProperty("preserveDrawingBuffer") || (this.patch.config.canvas.preserveDrawingBuffer = !1), this.patch.config.canvas.hasOwnProperty("premultipliedAlpha") || (this.patch.config.canvas.premultipliedAlpha = !1), this.patch.config.canvas.hasOwnProperty("alpha") || (this.patch.config.canvas.alpha = !1), this.patch.config.hasOwnProperty("clearCanvasColor") && (this.clearCanvasTransparent = this.patch.config.clearCanvasColor), this.patch.config.hasOwnProperty("clearCanvasDepth") && (this.clearCanvasDepth = this.patch.config.clearCanvasDepth), this.patch.config.canvas.forceWebGl1 || (this.gl = this.canvas.getContext("webgl2", this.patch.config.canvas)), this.gl && "WebGL 1.0" != this.gl.getParameter(this.gl.VERSION) ? this.glVersion = 2 : (this.gl = this.canvas.getContext("webgl", this.patch.config.canvas) || this.canvas.getContext("experimental-webgl", this.patch.config.canvas), this.glVersion = 1, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (this.glUseHalfFloatTex = !0), /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && (this.patch.config.canvas.hasOwnProperty("powerPreference") || (this.patch.config.canvas.powerPreference = "high-performance"))), !this.gl) return void this.exitError("NO_WEBGL", "sorry, could not initialize WebGL. Please check if your Browser supports WebGL.");
            this.gl.getExtension("OES_standard_derivatives");
            const e = this.gl.getExtension("ANGLE_instanced_arrays") || this.gl;
            this.maxTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS), this.maxTexSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE), e.vertexAttribDivisorANGLE && (this.gl.vertexAttribDivisor = e.vertexAttribDivisorANGLE.bind(e), this.gl.drawElementsInstanced = e.drawElementsInstancedANGLE.bind(e)), this.updateSize()
        }, this.updateSize = function () {
            this.canvas.width = this.canvasWidth = this.canvas.clientWidth * this.pixelDensity, this.canvas.height = this.canvasHeight = this.canvas.clientHeight * this.pixelDensity
        }, this.canvasWidth = -1, this.canvasHeight = -1, this.canvasScale = 1;
        let r = -1,
            o = -1;
        this.getViewPort = function () {
            return e
        }, this.resetViewPort = function () {
            this.gl.viewport(e[0], e[1], e[2], e[3])
        }, this.setViewPort = function (t, i, s, n) {
            e[0] = Math.round(t), e[1] = Math.round(i), e[2] = Math.round(s), e[3] = Math.round(n), this.gl.viewport(e[0], e[1], e[2], e[3])
        }, this.screenShot = function (t, e, i, s) {
            e && (this.gl.clearColor(1, 1, 1, 1), this.gl.colorMask(!1, !1, !1, !0), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.colorMask(!0, !0, !0, !0)), this.canvas && this.canvas.toBlob && this.canvas.toBlob(e => {
                t ? t(e) : d.log("no screenshot callback...")
            }, i, s)
        }, this.endFrame = function () {
            if (this.patch.isEditorMode() && CABLES.GL_MARKER.drawMarkerLayer(this), this.setPreviousShader(), this._vMatrixStack.length() > 0 && this.logStackError("view matrix stack length !=0 at end of rendering..."), this._mMatrixStack.length() > 0 && this.logStackError("mvmatrix stack length !=0 at end of rendering..."), this._pMatrixStack.length() > 0 && this.logStackError("pmatrix stack length !=0 at end of rendering..."), this._glFrameBufferStack.length > 0 && this.logStackError("glFrameBuffer stack length !=0 at end of rendering..."), this._stackDepthTest.length > 0 && this.logStackError("depthtest stack length !=0 at end of rendering..."), this._stackDepthWrite.length > 0 && this.logStackError("depthwrite stack length !=0 at end of rendering..."), this._stackDepthFunc.length > 0 && this.logStackError("depthfunc stack length !=0 at end of rendering..."), this._stackBlend.length > 0 && this.logStackError("blend stack length !=0 at end of rendering..."), this._stackBlendMode.length > 0 && this.logStackError("blendMode stack length !=0 at end of rendering..."), this._shaderStack.length > 0 && this.logStackError("this._shaderStack length !=0 at end of rendering..."), this._stackCullFace.length > 0 && this.logStackError("this._stackCullFace length !=0 at end of rendering..."), this._stackCullFaceFacing.length > 0 && this.logStackError("this._stackCullFaceFacing length !=0 at end of rendering..."), r != this.canvasWidth || o != this.canvasHeight) {
                r = this.canvasWidth, o = this.canvasHeight, this.setSize(this.canvasWidth / this.pixelDensity, this.canvasHeight / this.pixelDensity), this.updateSize();
                for (let t = 0; t < n.length; t++) n[t]()
            }
        }, this.logStackError = function (t) {
            this._hadStackError || (this._hadStackError = !0, console.warn(t))
        }, this.getShader = function () {
            if (s && (!this.frameStore || !0 === this.frameStore.renderOffscreen == s.offScreenPass == !0)) return s;
            for (let t = this._shaderStack.length - 1; t >= 0; t--)
                if (this._shaderStack[t] && this.frameStore.renderOffscreen == this._shaderStack[t].offScreenPass) return this._shaderStack[t]
        }, this.getDefaultShader = function () {
            return i
        }, this.pushShader = this.setShader = function (t) {
            this._shaderStack.push(t), s = t
        }, this.popShader = this.setPreviousShader = function () {
            if (0 === this._shaderStack.length) throw new Error("Invalid shader stack pop!");
            this._shaderStack.pop(), s = this._shaderStack[this._shaderStack.length - 1]
        }, this.pushGlFrameBuffer = function (t) {
            this._glFrameBufferStack.push(t)
        }, this.popGlFrameBuffer = function () {
            return 0 == this._glFrameBufferStack.length ? null : (this._glFrameBufferStack.pop(), this._glFrameBufferStack[this._glFrameBufferStack.length - 1])
        }, this.getCurrentGlFrameBuffer = function () {
            return 0 === this._glFrameBufferStack.length ? null : this._glFrameBufferStack[this._glFrameBufferStack.length - 1]
        }, this.pushFrameBuffer = function (t) {
            this._frameBufferStack.push(t)
        }, this.popFrameBuffer = function () {
            return 0 == this._frameBufferStack.length ? null : (this._frameBufferStack.pop(), this._frameBufferStack[this._frameBufferStack.length - 1])
        }, this.getCurrentFrameBuffer = function () {
            return 0 === this._frameBufferStack.length ? null : this._frameBufferStack[this._frameBufferStack.length - 1]
        };
        const h = vec3.create();
        vec3.set(h, 0, 0, 2);
        const a = vec3.create();
        vec3.set(a, 0, 0, 0), this.renderStart = function (t, e, s) {
            e || (e = a), s || (s = h), this.pushDepthTest(!0), this.pushDepthWrite(!0), this.pushDepthFunc(t.gl.LEQUAL), this.pushCullFaceFacing(t.gl.BACK), this.pushCullFace(!1), this.clearCanvasTransparent && (t.gl.clearColor(0, 0, 0, 0), t.gl.clear(t.gl.COLOR_BUFFER_BIT)), this.clearCanvasDepth && t.gl.clear(t.gl.DEPTH_BUFFER_BIT), t.setViewPort(0, 0, t.canvasWidth, t.canvasHeight), mat4.perspective(t.pMatrix, 45, t.canvasWidth / t.canvasHeight, .1, 1e3), mat4.identity(t.mMatrix), mat4.identity(t.vMatrix), mat4.translate(t.mMatrix, t.mMatrix, e), mat4.translate(t.vMatrix, t.vMatrix, s), t.pushPMatrix(), t.pushModelMatrix(), t.pushViewMatrix(), t.pushBlendMode(st.BLEND_MODES.BLEND_NORMAL, !1);
            for (let t = 0; t < this._textureslots.length; t++) this._textureslots[t] = null;
            this.pushShader(i), this.emitEvent("beginFrame")
        }, this.renderEnd = function (t, e) {
            t.popViewMatrix(), t.popModelMatrix(), t.popPMatrix(), this.popDepthTest(), this.popDepthWrite(), this.popDepthFunc(), this.popCullFaceFacing(), this.popCullFace(), this.popBlend(), this.popBlendMode(), t.endFrame()
        }, this.getTexture = function (t) {
            return this._textureslots[t]
        }, this.setTexture = function (t, e, i) {
            this._textureslots[t] != e && (this.gl.activeTexture(this.gl.TEXTURE0 + t), this.gl.bindTexture(i || this.gl.TEXTURE_2D, e), this._textureslots[t] = e)
        }, this.fullScreen = function () {
            this.canvas.requestFullscreen ? this.canvas.requestFullscreen() : this.canvas.mozRequestFullScreen ? this.canvas.mozRequestFullScreen() : this.canvas.webkitRequestFullscreen ? this.canvas.webkitRequestFullscreen() : this.canvas.msRequestFullscreen && this.canvas.msRequestFullscreen()
        }, this.setSize = function (t, e) {
            this.canvas.style.width = t + "px", this.canvas.style.height = e + "px", this.canvas.width = t * this.pixelDensity, this.canvas.height = e * this.pixelDensity, this.updateSize()
        }, this._resizeToWindowSize = function () {
            this.setSize(window.innerWidth, window.innerHeight), this.updateSize()
        }, this._resizeToParentSize = function () {
            const t = this.canvas.parentElement;
            t ? (this.setSize(t.clientWidth, t.clientHeight), this.updateSize()) : console.error("cables: can not resize to container element")
        }, this.setAutoResize = function (t) {
            window.removeEventListener("resize", this._resizeToWindowSize.bind(this)), window.removeEventListener("resize", this._resizeToParentSize.bind(this)), "window" == t && (window.addEventListener("resize", this._resizeToWindowSize.bind(this)), window.addEventListener("orientationchange", this._resizeToWindowSize.bind(this)), this._resizeToWindowSize()), "parent" == t && (window.addEventListener("resize", this._resizeToParentSize.bind(this)), this._resizeToParentSize())
        }, this.printError = function (t) {
            const e = this.gl.getError();
            if (e != this.gl.NO_ERROR) {
                let i = "";
                e == this.gl.OUT_OF_MEMORY && (i = "OUT_OF_MEMORY"), e == this.gl.INVALID_ENUM && (i = "INVALID_ENUM"), e == this.gl.INVALID_OPERATION && (i = "INVALID_OPERATION"), e == this.gl.INVALID_FRAMEBUFFER_OPERATION && (i = "INVALID_FRAMEBUFFER_OPERATION"), e == this.gl.INVALID_VALUE && (i = "INVALID_VALUE"), e == this.gl.CONTEXT_LOST_WEBGL && (i = "CONTEXT_LOST_WEBGL"), e == this.gl.NO_ERROR && (i = "NO_ERROR"), d.log("gl error: ", t, e, i)
            }
        }, this.saveScreenshot = function (t, e, i, s, n) {
            this.patch.renderOneFrame();
            let r = this.canvas.clientWidth,
                o = this.canvas.clientHeight;

            function h(t, e, i) {
                return Array(e - String(t).length + 1).join(i || "0") + t
            }
            i && (this.canvas.width = i, r = i), s && (this.canvas.height = s, o = s);
            const a = new Date,
                l = "".concat(String(a.getFullYear()) + String(a.getMonth() + 1) + String(a.getDate()), "_").concat(h(a.getHours(), 2)).concat(h(a.getMinutes(), 2)).concat(h(a.getSeconds(), 2));
            t ? t += ".png" : t = "cables_" + l + ".png", this.patch.cgl.screenShot(function (i) {
                if (this.canvas.width = r, this.canvas.height = o, i) {
                    const s = document.createElement("a");
                    s.download = t, s.href = URL.createObjectURL(i), setTimeout((function () {
                        s.click(), e && e(i)
                    }), 100)
                } else d.log("screenshot: no blob")
            }.bind(this), n)
        }
    };
    Ot.prototype.pushViewMatrix = function () {
        this.vMatrix = this._vMatrixStack.push(this.vMatrix)
    }, Ot.prototype.popViewMatrix = function () {
        this.vMatrix = this._vMatrixStack.pop()
    }, Ot.prototype.getViewMatrixStateCount = function () {
        return this._vMatrixStack.stateCounter
    }, Ot.prototype.pushPMatrix = function () {
        this.pMatrix = this._pMatrixStack.push(this.pMatrix)
    }, Ot.prototype.popPMatrix = function () {
        return this.pMatrix = this._pMatrixStack.pop(), this.pMatrix
    }, Ot.prototype.getProjectionMatrixStateCount = function () {
        return this._pMatrixStack.stateCounter
    }, Ot.prototype.pushMvMatrix = Ot.prototype.pushModelMatrix = function () {
        this.mMatrix = this._mMatrixStack.push(this.mMatrix)
    }, Ot.prototype.popMvMatrix = Ot.prototype.popmMatrix = Ot.prototype.popModelMatrix = function () {
        return this.mMatrix = this._mMatrixStack.pop(), this.mMatrix
    }, Ot.prototype.modelMatrix = function () {
        return this.mMatrix
    }, Ot.prototype._stackDepthTest = [], Ot.prototype.pushDepthTest = function (t) {
        this._stackDepthTest.push(t), t ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST)
    }, Ot.prototype.stateDepthTest = function () {
        return this._stackDepthTest[this._stackDepthTest.length - 1]
    }, Ot.prototype.popDepthTest = function () {
        this._stackDepthTest.pop(), this._stackDepthTest[this._stackDepthTest.length - 1] ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST)
    }, Ot.prototype._stackDepthWrite = [], Ot.prototype.pushDepthWrite = function (t) {
        this._stackDepthWrite.push(t), this.gl.depthMask(t)
    }, Ot.prototype.stateDepthWrite = function () {
        return this._stackDepthWrite[this._stackDepthWrite.length - 1]
    }, Ot.prototype.popDepthWrite = function () {
        this._stackDepthWrite.pop(), this.gl.depthMask(this._stackDepthWrite[this._stackDepthWrite.length - 1])
    }, Ot.prototype._stackCullFace = [], Ot.prototype.pushCullFace = function (t) {
        this._stackCullFace.push(t), t ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE)
    }, Ot.prototype.stateCullFace = function () {
        return this._stackCullFace[this._stackCullFace.length - 1]
    }, Ot.prototype.popCullFace = function () {
        this._stackCullFace.pop(), this._stackCullFace[this._stackCullFace.length - 1] ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE)
    }, Ot.prototype._stackCullFaceFacing = [], Ot.prototype.pushCullFaceFacing = function (t) {
        this._stackCullFaceFacing.push(t), this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1])
    }, Ot.prototype.stateCullFaceFacing = function () {
        return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]
    }, Ot.prototype.popCullFaceFacing = function () {
        this._stackCullFaceFacing.pop(), this._stackCullFaceFacing.length > 0 && this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1])
    }, Ot.prototype._stackDepthFunc = [], Ot.prototype.pushDepthFunc = function (t) {
        this._stackDepthFunc.push(t), this.gl.depthFunc(t)
    }, Ot.prototype.stateDepthFunc = function () {
        return this._stackDepthFunc.length > 0 && this._stackDepthFunc[this._stackDepthFunc.length - 1]
    }, Ot.prototype.popDepthFunc = function () {
        this._stackDepthFunc.pop(), this._stackDepthFunc.length > 0 && this.gl.depthFunc(this._stackDepthFunc[this._stackDepthFunc.length - 1])
    }, Ot.prototype._stackBlend = [], Ot.prototype.pushBlend = function (t) {
        this._stackBlend.push(t), t ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND)
    }, Ot.prototype.popBlend = function () {
        this._stackBlend.pop(), this._stackBlend[this._stackBlend.length - 1] ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND)
    }, Ot.prototype.stateBlend = function () {
        return this._stackBlend[this._stackBlend.length - 1]
    };
    Ot.prototype._stackBlendMode = [], Ot.prototype._stackBlendModePremul = [], Ot.prototype.pushBlendMode = function (t, e) {
        this._stackBlendMode.push(t), this._stackBlendModePremul.push(e);
        const i = this._stackBlendMode.length - 1;
        this.pushBlend(this._stackBlendMode[i] !== st.BLEND_MODES.BLEND_NONE), this._setBlendMode(this._stackBlendMode[i], this._stackBlendModePremul[i])
    }, Ot.prototype.popBlendMode = function () {
        this._stackBlendMode.pop(), this._stackBlendModePremul.pop();
        const t = this._stackBlendMode.length - 1;
        this.popBlend(this._stackBlendMode[t] !== st.BLEND_MODES.BLEND_NONE), t > 0 && this._setBlendMode(this._stackBlendMode[t], this._stackBlendModePremul[t])
    }, Ot.prototype.glGetAttribLocation = function (t, e) {
        const i = this.gl.getAttribLocation(t, e);
        return i
    }, Ot.prototype._setBlendMode = function (t, e) {
        const i = this.gl;
        t == st.BLEND_MODES.BLEND_NONE || (t == st.BLEND_MODES.BLEND_ADD ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ONE, i.ONE, i.ONE, i.ONE)) : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.SRC_ALPHA, i.ONE)) : t == st.BLEND_MODES.BLEND_SUB ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ZERO, i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ONE_MINUS_SRC_ALPHA)) : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.ONE_MINUS_SRC_COLOR)) : t == st.BLEND_MODES.BLEND_MUL ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA)) : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.SRC_COLOR)) : t == st.BLEND_MODES.BLEND_NORMAL ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA)) : (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA)) : d.log("setblendmode: unknown blendmode"))
    };
    const It = Object.assign({
        Framebuffer: function (t, e, i, s) {
            const n = t,
                r = n.gl.getExtension("WEBGL_depth_texture") || n.gl.getExtension("WEBKIT_WEBGL_depth_texture") || n.gl.getExtension("MOZ_WEBGL_depth_texture") || n.gl.DEPTH_TEXTURE;
            r || n.exitError("NO_DEPTH_TEXTURE", "no depth texture support");
            let o = e || 512,
                h = i || 512;
            (s = s || {
                isFloatingPointTexture: !1
            }).hasOwnProperty("filter") || (s.filter = J.FILTER_LINEAR);
            const a = new J(n, {
                isFloatingPointTexture: s.isFloatingPointTexture,
                filter: s.filter,
                wrap: J.CLAMP_TO_EDGE
            });
            let l = null;
            r && (l = new J(n, {
                isDepthTexture: !0
            }));
            const u = n.gl.createFramebuffer(),
                c = n.gl.createRenderbuffer();
            this.getWidth = function () {
                return o
            }, this.getHeight = function () {
                return h
            }, this.getGlFrameBuffer = function () {
                return u
            }, this.getDepthRenderBuffer = function () {
                return c
            }, this.getTextureColor = function () {
                return a
            }, this.getTextureDepth = function () {
                return l
            }, this.setFilter = function (t) {
                a.filter = t, a.setSize(o, h)
            }, this.setSize = function (t, e) {
                if (t < 2 && (t = 2), e < 2 && (e = 2), o = Math.ceil(t), h = Math.ceil(e), Q.profileFrameBuffercreate++, n.gl.bindFramebuffer(n.gl.FRAMEBUFFER, u), n.gl.bindRenderbuffer(n.gl.RENDERBUFFER, c), a.setSize(o, h), l && l.setSize(o, h), r && n.gl.renderbufferStorage(n.gl.RENDERBUFFER, n.gl.DEPTH_COMPONENT16, o, h), n.gl.framebufferTexture2D(n.gl.FRAMEBUFFER, n.gl.COLOR_ATTACHMENT0, n.gl.TEXTURE_2D, a.tex, 0), r && (n.gl.framebufferRenderbuffer(n.gl.FRAMEBUFFER, n.gl.DEPTH_ATTACHMENT, n.gl.RENDERBUFFER, c), n.gl.framebufferTexture2D(n.gl.FRAMEBUFFER, n.gl.DEPTH_ATTACHMENT, n.gl.TEXTURE_2D, l.tex, 0)), !n.gl.isFramebuffer(u)) throw new Error("Invalid framebuffer");
                const i = n.gl.checkFramebufferStatus(n.gl.FRAMEBUFFER);
                switch (i) {
                    case n.gl.FRAMEBUFFER_COMPLETE:
                        break;
                    case n.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                        throw d.log("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", o, h, a.tex, c), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
                    case n.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                        throw d.log("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
                    case n.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                        throw d.log("FRAMEBUFFER_INCOMPLETE_DIMENSIONS"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
                    case n.gl.FRAMEBUFFER_UNSUPPORTED:
                        throw d.log("FRAMEBUFFER_UNSUPPORTED"), new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
                    default:
                        throw d.log("incomplete framebuffer", i), new Error("Incomplete framebuffer: " + i)
                }
                n.gl.bindTexture(n.gl.TEXTURE_2D, null), n.gl.bindRenderbuffer(n.gl.RENDERBUFFER, null), n.gl.bindFramebuffer(n.gl.FRAMEBUFFER, null)
            }, this.renderStart = function () {
                n.pushModelMatrix(), n.gl.bindFramebuffer(n.gl.FRAMEBUFFER, u), n.pushGlFrameBuffer(u), n.pushFrameBuffer(this), n.pushPMatrix(), n.gl.viewport(0, 0, o, h), n.gl.clearColor(0, 0, 0, 0), n.gl.clear(n.gl.COLOR_BUFFER_BIT | n.gl.DEPTH_BUFFER_BIT)
            }, this.renderEnd = function () {
                n.popPMatrix(), n.gl.bindFramebuffer(n.gl.FRAMEBUFFER, n.popGlFrameBuffer()), n.popFrameBuffer(), n.popModelMatrix(), n.resetViewPort()
            }, this.delete = function () {
                a.delete(), l && l.delete(), n.gl.deleteRenderbuffer(c), n.gl.deleteFramebuffer(u)
            }, this.setSize(o, h)
        },
        Framebuffer2: Z,
        Geometry: tt,
        BoundingBox: $,
        Marker: function (t) {
            const e = new tt("marker");
            e.setPointVertices([1e-5, 0, 0, 1, 0, 0, 0, 1e-5, 0, 0, 1, 0, 0, 0, 1e-5, 0, 0, 1]);
            const i = new rt(t, e, t.gl.LINES);
            i.setGeom(e);
            const s = new bt(t, "markermaterial"),
                n = "".endl() + "precision highp float;".endl() + "IN vec3 axisColor;".endl() + "void main()".endl() + "{".endl() + "    vec4 col=vec4(axisColor,1.0);".endl() + "    outColor = col;".endl() + "}",
                r = "".endl() + "IN vec3 vPosition;".endl() + "UNI mat4 projMatrix;".endl() + "UNI mat4 mvMatrix;".endl() + "OUT vec3 axisColor;".endl() + "void main()".endl() + "{".endl() + "   vec4 pos=vec4(vPosition, 1.0);".endl() + "   if(pos.x!=0.0)axisColor=vec3(1.0,0.3,0.0);".endl() + "   if(pos.y!=0.0)axisColor=vec3(0.0,1.0,0.2);".endl() + "   if(pos.z!=0.0)axisColor=vec3(0.0,0.5,1.0);".endl() + "   gl_Position = projMatrix * mvMatrix * pos;".endl() + "}";
            s.setSource(r, n), this._vScale = vec3.create(), this.draw = function (t) {
                t.pushModelMatrix(), t.pushShader(s), vec3.set(this._vScale, 2, 2, 2), mat4.scale(t.mvMatrix, t.mvMatrix, this._vScale), t.pushDepthTest(!1), i.render(t.getShader()), t.popDepthTest(), t.popShader(), t.popModelMatrix()
            }
        },
        WirePoint: function (t, e) {
            const i = t.gl.createBuffer(),
                s = vec3.create();
            this.render = function (t, e) {
                    t.pushModelMatrix(), vec3.set(s, e, e, e), mat4.scale(t.mvMatrix, t.mvMatrix, s);
                    const n = t.getShader();
                    n.bind(), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, i), t.gl.vertexAttribPointer(n.getAttrVertexPos(), i.itemSize, t.gl.FLOAT, !1, 0, 0), t.gl.enableVertexAttribArray(n.getAttrVertexPos()), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, i), t.gl.drawArrays(t.gl.LINE_STRIP, 0, i.numItems), t.popModelMatrix()
                },
                function () {
                    const e = [];
                    let s = 0,
                        n = 0;
                    for (s = 0; s <= Math.round(24); s++) n = 360 / Math.round(24) * s * dt, e.push(.5 * Math.cos(n)), e.push(0), e.push(.5 * Math.sin(n));
                    for (s = 0; s <= Math.round(24); s++) n = 360 / Math.round(24) * s * dt, e.push(.5 * Math.cos(n)), e.push(.5 * Math.sin(n)), e.push(0);
                    for (s = 0; s <= Math.round(24); s++) n = 360 / Math.round(24) * s * dt, e.push(0), e.push(.5 * Math.cos(n)), e.push(.5 * Math.sin(n));
                    t.gl.bindBuffer(t.gl.ARRAY_BUFFER, i), t.gl.bufferData(t.gl.ARRAY_BUFFER, new Float32Array(e), t.gl.STATIC_DRAW), i.itemSize = 3, i.numItems = e.length / i.itemSize
                }()
        },
        WireCube: function (t) {
            const e = t.gl.createBuffer(),
                i = vec3.create();
            this.render = function (t, s, n, r) {
                    t.pushModelMatrix(), vec3.set(i, s || 1, n || 1, r || 1), mat4.scale(t.mvMatrix, t.mvMatrix, i);
                    const o = t.getShader();
                    o.bind(), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e), t.gl.vertexAttribPointer(o.getAttrVertexPos(), e.itemSize, t.gl.FLOAT, !1, 0, 0), t.gl.enableVertexAttribArray(o.getAttrVertexPos()), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e), t.gl.drawArrays(t.gl.LINE_STRIP, 0, e.numItems), t.popModelMatrix()
                },
                function () {
                    const i = [];
                    i.push(-1, -1, 1), i.push(1, -1, 1), i.push(1, 1, 1), i.push(-1, 1, 1), i.push(-1, -1, 1), i.push(-1, -1, -1), i.push(1, -1, -1), i.push(1, 1, -1), i.push(-1, 1, -1), i.push(-1, -1, -1), i.push(-1, -1, -1), i.push(-1, 1, -1), i.push(-1, 1, 1), i.push(-1, -1, 1), i.push(-1, -1, -1), i.push(1, -1, -1), i.push(1, 1, -1), i.push(1, 1, 1), i.push(1, -1, 1), i.push(1, -1, -1), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e), t.gl.bufferData(t.gl.ARRAY_BUFFER, new Float32Array(i), t.gl.STATIC_DRAW), e.itemSize = 3, e.numItems = i.length / e.itemSize
                }()
        },
        MatrixStack: yt,
        Mesh: rt,
        MESH: nt,
        ShaderLibMods: lt,
        Shader: bt,
        Uniform: et,
        MESHES: ht,
        Context: Ot,
        Texture: J,
        TextureEffect: at,
        isWindows: _t,
        getWheelSpeed: ft,
        getWheelDelta: mt,
        onLoadingAssetsFinished: null,
        profileData: Q
    }, st.BLEND_MODES, st.SHADER, st.MATH, st.BLEND_MODES);
    window.CGL = It;
    const vt = function (t) {
        this._loadingAssets = {}, this._cbFinished = [], this._percent = 0, this._count = 0, this._countFinished = 0, this._order = 0, this._startTime = 0, this._patch = t
    };
    vt.prototype.setOnFinishedLoading = function (t) {
        this._cbFinished.push(t)
    }, vt.prototype.getNumAssets = function () {
        return this._countFinished
    }, vt.prototype.getProgress = function () {
        return this._percent
    }, vt.prototype.checkStatus = function () {
        this._countFinished = 0, this._count = 0;
        for (const t in this._loadingAssets) this._count++, this._loadingAssets[t].finished || this._countFinished++;
        if (this._percent = (this._count - this._countFinished) / this._count, 0 === this._countFinished) {
            for (let t = 0; t < this._cbFinished.length; t++) setTimeout(this._cbFinished[t], 200);
            this.print()
        }
    }, vt.prototype.print = function () {
        if (this._patch.config.silent) return;
        const t = [];
        for (const e in this._loadingAssets) t.push([this._loadingAssets[e].order, this._loadingAssets[e].type, this._loadingAssets[e].name, (this._loadingAssets[e].timeEnd - this._loadingAssets[e].timeStart) / 1e3 + "s"]);
        console.groupCollapsed("finished loading " + this._order + " assets in " + (Date.now() - this._startTime) / 1e3 + "s"), console.table(t), console.groupEnd()
    }, vt.prototype.finished = function (t) {
        this._loadingAssets[t] && (this._loadingAssets[t].finished = !0, this._loadingAssets[t].timeEnd = Date.now()), this.checkStatus()
    }, vt.prototype.start = function (t, e) {
        0 == this._startTime && (this._startTime = Date.now());
        const i = y();
        return this._loadingAssets[i] = {
            id: i,
            type: t,
            name: e,
            finished: !1,
            timeStart: Date.now(),
            order: this._order
        }, this._order++, i
    };
    const xt = function () {
        this._loops = [], this._indizes = [], this._index = 0
    };
    xt.prototype.pushLoop = function (t) {
        this._loops.push(Math.abs(Math.floor(t))), this._indizes.push(this._index)
    }, xt.prototype.popLoop = function () {
        this._loops.pop(), this._index = this._indizes.pop(), 0 === this._loops.length && (this._index = 0)
    }, xt.prototype.numLoops = function () {
        return this._loops.length
    }, xt.prototype.numCycles = function () {
        if (0 === this._loops.length) return 0;
        let t = this._loops[0];
        for (let e = 1; e < this._loops.length; e++) t *= this._loops[e];
        return t
    }, xt.prototype.inLoop = function () {
        return this._loops.length > 0
    }, xt.prototype.increment = function () {
        this._index++
    }, xt.prototype.index = function () {
        return this._index
    };
    const Rt = function () {
            let t = {},
                e = null,
                i = 0;
            this.getItems = function () {
                return t
            }, this.clear = function () {
                t = {}
            }, this.add = function (s, n) {
                null !== e && (n && n.id == e || t[e] && (t[e].timeUsed += performance.now() - i, (!t[e].peakTime || ct() - t[e].peakTime > 5e3) && (t[e].peak = 0, t[e].peakTime = ct()), t[e].peak = Math.max(t[e].peak, performance.now() - i))), null !== n ? (t[n.id] || (t[n.id] = {
                    numTriggers: 0,
                    timeUsed: 0
                }), t[n.id].numTriggers++, t[n.id].title = n.parent.name + "." + n.name, e = n.id, i = performance.now()) : e = null
            }, this.print = function () {
                d.log("--------");
                for (const e in t) d.log(t[e].title + ": " + t[e].numTriggers + " / " + t[e].timeUsed)
            }
        },
        Pt = function (t) {
            this._patch = t, this.result = []
        };
    Pt.MIDI = 0, Pt.POINTERLOCK = 1, Pt.WEBAUDIO = 2, Pt.WEBGL2 = 3, (Pt.infos = [])[Pt.POINTERLOCK] = {
        title: "pointerLock",
        caniuse: "https://caniuse.com/#search=pointerlock"
    }, Pt.infos[Pt.MIDI] = {
        title: "midi API",
        caniuse: "https://caniuse.com/#search=midi"
    }, Pt.infos[Pt.WEBAUDIO] = {
        title: "web audio",
        caniuse: "https://caniuse.com/#search=webaudio"
    }, Pt.infos[Pt.WEBGL2] = {
        title: "WebGL 2"
    }, Pt.prototype.checkRequirement = function (t, e) {
        switch (this.result = [], t) {
            case Pt.WEBGL2:
                return e.patch.cgl.glVersion >= 2;
            case Pt.POINTERLOCK:
                return "exitPointerLock" in document;
            case Pt.MIDI:
                return "MIDIAccess" in window;
            case Pt.WEBAUDIO:
                let t = !1;
                return window.audioContext && (t = !0), t || !("webkitAudioContext" in window) && !("AudioContext" in window) || (t = !0), t
        }
    }, Pt.prototype.checkOp = function (t) {
        if (t && t.requirements)
            for (let e = 0; e < t.requirements.length; e++) {
                const i = t.requirements[e];
                if (!this.result[i]) {
                    const e = this.checkRequirement(i, t);
                    if (!e) {
                        t.patch.cgl && t.patch.cgl.canvas && t.patch.cgl.canvas.remove();
                        let e = Pt.infos[i].title;
                        throw Pt.infos[i].caniuse && (e = '<a href="' + Pt.infos[i].caniuse + '" target="_blank">' + Pt.infos[i].title + " (" + t.objName + ")</a>"), new Error("this browser does not meet requirement: " + Pt.infos[i].title + " (" + t.objName + ")")
                    }
                    this.result[i] = {
                        success: e,
                        info: Pt.infos[i]
                    }
                }
            }
    };
    const Nt = function (t) {
        _.apply(this), this.ops = [], this.settings = {}, this.timer = new pt, this.freeTimer = new pt, this.animFrameOps = [], this.animFrameCallbacks = [], this.gui = !1, this.silent = !1, this.profiler = null, this.onLoadStart = null, this.onLoadEnd = null, this.aborted = !1, this.loading = new vt(this), this._crashedOps = [], this._renderOneFrame = !1, this._animReq = null, this._perf = {
                fps: 0,
                ms: 0,
                _fpsFrameCount: 0,
                _fpsMsCount: 0,
                _fpsStart: 0
            }, this._volumeListeners = [], this._paused = !1, this._frameNum = 0, this.instancing = new xt, this.onOneFrameRendered = null, this.namedTriggers = {}, this._origData = null, this._frameNext = 0, this._frameInterval = 0, this._lastFrameTime = 0, this._frameWasdelayed = !0, this.config = t || {
                glCanvasResizeToWindow: !1,
                prefixAssetPath: "",
                silent: !1,
                onError: null,
                onFinishedLoading: null,
                onFirstFrameRendered: null,
                onPatchLoaded: null,
                fpsLimit: 0
            },
            function () {
                return !this
            }() || console.log("not in strict mode: core patch"), d.setSilent(this.config.silent), this.config.hasOwnProperty("doRequestAnimation") || (this.config.doRequestAnimation = !0), this.config.prefixAssetPath || (this.config.prefixAssetPath = ""), this.config.masterVolume || (this.config.masterVolume = 1), this._variables = {}, this._variableListeners = [], this.vars = {}, t && t.vars && (this.vars = t.vars), this.cgl = new Ot(this), this.cgl.setCanvas(this.config.glCanvasId || this.config.glCanvas || "glcanvas"), !0 === this.config.glCanvasResizeToWindow && this.cgl.setAutoResize("window"), !0 === this.config.glCanvasResizeToParent && this.cgl.setAutoResize("parent"), this.loading.setOnFinishedLoading(this.config.onFinishedLoading), this.cgl.aborted && (this.aborted = !0), this.cgl.silent && (this.silent = !0), this.freeTimer.play(), this.exec(), this.aborted || (this.config.patch ? this.deSerialize(this.config.patch) : this.config.patchFile && C(this.config.patchFile, (t, e) => {
                const i = JSON.parse(e);
                if (t) {
                    return d.error("err", t), d.error("data", i), void d.error("data", i.msg)
                }
                this.deSerialize(i)
            }), this.timer.play()), console.log("made with https://cables.gl")
    };
    Nt.prototype.isPlaying = function () {
        return !this._paused
    }, Nt.prototype.isRenderingOneFrame = function () {
        return this._renderOneFrame
    }, Nt.prototype.renderOneFrame = function () {
        this._paused = !0, this._renderOneFrame = !0, this.exec(), this._renderOneFrame = !1
    }, Nt.prototype.getFPS = function () {
        return this._perf.fps
    }, Nt.prototype.isEditorMode = function () {
        return !0 === this.config.editorMode
    }, Nt.prototype.pause = function () {
        cancelAnimationFrame(this._animReq), this._animReq = null, this._paused = !0, this.freeTimer.pause()
    }, Nt.prototype.resume = function () {
        this._paused && (cancelAnimationFrame(this._animReq), this._paused = !1, this.freeTimer.play(), this.exec())
    }, Nt.prototype.setVolume = function (t) {
        this.config.masterVolume = t;
        for (let e = 0; e < this._volumeListeners.length; e++) this._volumeListeners[e].onMasterVolumeChanged(t)
    }, Nt.prototype.getAssetPath = function () {
        if (this.isEditorMode()) return "/assets/" + gui.project()._id + "/";
        if (document.location.href.indexOf("cables.gl") > 0) {
            const t = document.location.href.split("/");
            return "/assets/" + t[t.length - 1] + "/"
        }
        return "assets/"
    }, Nt.prototype.getFilePath = function (t) {
        return t ? 0 === t.indexOf("https:") || 0 === t.indexOf("http:") ? t : (t = t.replace("//", "/"), this.config.prefixAssetPath + t + (this.config.suffixAssetPath || "")) : t
    }, Nt.prototype.clear = function () {
        for (this.cgl.TextureEffectMesh = null, this.animFrameOps.length = 0, this.timer = new pt; this.ops.length > 0;) this.deleteOp(this.ops[0].id)
    }, Nt.getOpClass = function (t) {
        const e = t.split(".");
        let i = null;
        try {
            return 2 == e.length ? i = window[e[0]][e[1]] : 3 == e.length ? i = window[e[0]][e[1]][e[2]] : 4 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]] : 5 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]] : 6 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]] : 7 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]] : 8 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]] : 9 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]] : 10 == e.length && (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]][e[9]]), i
        } catch (t) {
            return null
        }
    }, Nt.prototype.createOp = function (t, e) {
        const i = t.split(".");
        let s = null,
            n = "";
        try {
            if (-1 == t.indexOf("Ops.")) {
                const i = t;
                if (!CABLES.OPS[i]) throw new Error("could not find op by id: " + i);
                n = CABLES.OPS[i].objName, s = new CABLES.OPS[i].f(this, n, e, i), s.opId = i
            }
            if (!s) {
                if (n = t, !Nt.getOpClass(n)) throw this.emitEvent("criticalError", "unknown op", "unknown op: " + n), d.error("unknown op: " + n), new Error("unknown op: " + n);
                if (2 == i.length ? s = new window[i[0]][i[1]](this, n, e) : 3 == i.length ? s = new window[i[0]][i[1]][i[2]](this, n, e) : 4 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]](this, n, e) : 5 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]](this, n, e) : 6 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]](this, n, e) : 7 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]](this, n, e) : 8 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]](this, n, e) : 9 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]](this, n, e) : 10 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]](this, n, e) : d.log("parts.length", i.length), s) {
                    s.opId = null;
                    for (const t in CABLES.OPS) CABLES.OPS[t].objName == n && (s.opId = t)
                }
            }
        } catch (t) {
            if (this._crashedOps.push(n), this.emitEvent("exceptionOp", t, n), !this.isEditorMode()) throw d.log(t), d.error("[instancing error] " + n, t), CABLES.api && CABLES.api.sendErrorReport(t), this.exitError("INSTANCE_ERR", "Instancing Error " + n), new Error("instancing error " + n)
        }
        return s && (s.objName = n, s.patch = this), s
    }, Nt.prototype.addOp = function (t, e, i) {
        const s = this.createOp(t, i);
        return s && (e && e.hasOwnProperty("errors") && delete e.errors, e && e.hasOwnProperty("error") && delete e.error, s.uiAttr(e), s.onCreate && s.onCreate(), s.hasOwnProperty("onAnimFrame") && this.addOnAnimFrame(s), s.hasOwnProperty("onMasterVolumeChanged") && this._volumeListeners.push(s), this.ops.push(s), this.emitEvent("onOpAdd", s), s.init && s.init()), s
    }, Nt.prototype.addOnAnimFrame = function (t) {
        for (let e = 0; e < this.animFrameOps.length; e++)
            if (this.animFrameOps[e] == t) return;
        this.animFrameOps.push(t)
    }, Nt.prototype.removeOnAnimFrame = function (t) {
        for (let e = 0; e < this.animFrameOps.length; e++)
            if (this.animFrameOps[e] == t) return void this.animFrameOps.splice(e, 1)
    }, Nt.prototype.addOnAnimFrameCallback = function (t) {
        this.animFrameCallbacks.push(t)
    }, Nt.prototype.removeOnAnimCallback = function (t) {
        for (let e = 0; e < this.animFrameCallbacks.length; e++)
            if (this.animFrameCallbacks[e] == t) return void this.animFrameCallbacks.splice(e, 1)
    }, Nt.prototype.deleteOp = function (t, e, i) {
        for (const s in this.ops)
            if (this.ops[s].id == t) {
                let t = null,
                    n = null;
                if (this.ops[s]) {
                    e && this.ops[s].portsIn.length > 0 && this.ops[s].portsIn[0].isLinked() && this.ops[s].portsOut.length > 0 && this.ops[s].portsOut[0].isLinked() && this.ops[s].portsIn[0].getType() == this.ops[s].portsOut[0].getType() && (t = this.ops[s].portsIn[0].links[0].getOtherPort(this.ops[s].portsIn[0]), n = this.ops[s].portsOut[0].links[0].getOtherPort(this.ops[s].portsOut[0]));
                    const r = this.ops[s];
                    r.removeLinks(), this.onDelete && (d.log("deprecated this.onDelete", this.onDelete), this.onDelete(r)), this.emitEvent("onOpDelete", r, i), this.ops.splice(s, 1), r.onDelete && r.onDelete(i), r.cleanUp(), null !== t && null !== n && this.link(t.parent, t.getName(), n.parent, n.getName())
                }
            }
    }, Nt.prototype.getFrameNum = function () {
        return this._frameNum
    }, Nt.prototype.renderFrame = function (t) {
        this.timer.update(), this.freeTimer.update();
        const e = this.timer.getTime(),
            i = performance.now();
        for (let t = 0; t < this.animFrameCallbacks.length; ++t) this.animFrameCallbacks[t] && this.animFrameCallbacks[t](e, this._frameNum);
        for (let t = 0; t < this.animFrameOps.length; ++t) this.animFrameOps[t].onAnimFrame && this.animFrameOps[t].onAnimFrame(e);
        CGL.profileData.profileOnAnimFrameOps = performance.now() - i, this.emitEvent("onRenderFrame", e), this._frameNum++, 1 == this._frameNum && this.config.onFirstFrameRendered && this.config.onFirstFrameRendered()
    }, Nt.prototype.exec = function (t) {
        if (!this._renderOneFrame && (this._paused || this.aborted)) return;
        this.config.fpsLimit = this.config.fpsLimit || 0, this.config.fpsLimit && (this._frameInterval = 1e3 / this.config.fpsLimit);
        const e = CABLES.now(),
            i = e - this._frameNext;
        if (this.isEditorMode() && !this._renderOneFrame && e - this._lastFrameTime >= 500 && 0 !== this._lastFrameTime && !this._frameWasdelayed) return this._lastFrameTime = 0, setTimeout(this.exec.bind(this), 500), this.emitEvent("renderDelayStart"), void(this._frameWasdelayed = !0);
        if (this._renderOneFrame || 0 === this.config.fpsLimit || i > this._frameInterval || this._frameWasdelayed) {
            const t = CABLES.now();
            this.renderFrame(), this._perf._fpsMsCount += CABLES.now() - t, this._frameInterval && (this._frameNext = e - i % this._frameInterval)
        }
        this._frameWasdelayed && (this.emitEvent("renderDelayEnd"), this._frameWasdelayed = !1), this._renderOneFrame && (this.onOneFrameRendered && this.onOneFrameRendered(), this.emitEvent("renderedOneFrame"), this._renderOneFrame = !1), CABLES.now() - this._perf._fpsStart >= 1e3 && this._perf.fps != this._perf._fpsFrameCount && (this._perf.fps = this._perf._fpsFrameCount, this._perf.ms = Math.round(this._perf._fpsMsCount / this._perf._fpsFrameCount), this.emitEvent("performance", this._perf), this._perf._fpsFrameCount = 0, this._perf._fpsMsCount = 0, this._perf._fpsStart = CABLES.now()), this._perf._lastFrameTime = CABLES.now(), this._perf._fpsFrameCount++, this.config.doRequestAnimation && (this._animReq = requestAnimationFrame(this.exec.bind(this)))
    }, Nt.prototype.link = function (t, e, i, s) {
        if (!t) return void d.log("link: op1 is null ");
        if (!i) return void d.log("link: op2 is null");
        const n = t.getPort(e),
            r = i.getPort(s);
        if (n)
            if (r) {
                if (!n.shouldLink(n, r) || !r.shouldLink(n, r)) return !1;
                if (j.canLink(n, r)) {
                    const t = new j(this);
                    return t.link(n, r), this.emitEvent("onLink", n, r, t), t
                }
            } else console.warn("port not found! " + s + " of " + i.name + "(" + i.objName + ")");
        else console.warn("port not found! " + e + "(" + t.objName + ")")
    }, Nt.prototype.serialize = function (t) {
        const e = {
            ops: []
        };
        e.settings = this.settings;
        for (const t in this.ops) e.ops.push(this.ops[t].getSerialized());
        return t ? e : JSON.stringify(e)
    }, Nt.prototype.getOpById = function (t) {
        for (const e in this.ops)
            if (this.ops[e].id == t) return this.ops[e]
    }, Nt.prototype.getOpsById = function (t) {
        const e = [];
        for (const i in this.ops)
            for (let s = 0; s < t.length; s++)
                if (this.ops[i].id === t[s]) {
                    e.push(this.ops[i]);
                    break
                } return e
    }, Nt.prototype.getOpsByName = function (t) {
        const e = [];
        for (const i in this.ops) this.ops[i].name == t && e.push(this.ops[i]);
        return e
    }, Nt.prototype.getOpsByObjName = function (t) {
        const e = [];
        for (const i in this.ops) this.ops[i].objName == t && e.push(this.ops[i]);
        return e
    }, Nt.prototype.loadLib = function (t) {
        S("/ui/libs/" + t + ".js", (t, e) => {
            const i = document.createElement("script");
            i.type = "text/javascript", i.text = e, document.getElementsByTagName("head")[0].appendChild(i)
        }, "GET")
    }, Nt.prototype.reloadOp = function (t, e) {
        let i = 0;
        const s = [],
            n = [];
        for (const e in this.ops) this.ops[e].objName == t && n.push(this.ops[e]);
        for (let e = 0; e < n.length; e++) {
            i++;
            const r = n[e];
            r.deleted = !0;
            const o = this,
                h = this.addOp(t, r.uiAttribs);
            let a, l;
            for (a in s.push(h), r.portsIn)
                if (0 === r.portsIn[a].links.length) {
                    const t = h.getPort(r.portsIn[a].name);
                    t ? t.set(r.portsIn[a].get()) : d.error("[reloadOp] could not set port " + r.portsIn[a].name + ", propably renamed port ?")
                } else
                    for (; r.portsIn[a].links.length;) {
                        const t = r.portsIn[a].links[0].portIn.name,
                            e = r.portsIn[a].links[0].portOut.name,
                            i = r.portsIn[a].links[0].portOut.parent;
                        r.portsIn[a].links[0].remove(), l = o.link(h, t, i, e), l ? l.setValue() : d.log("[reloadOp] relink after op reload not successfull for port " + e)
                    }
            for (a in r.portsOut)
                for (; r.portsOut[a].links.length;) {
                    const t = r.portsOut[a].links[0].portOut.name,
                        e = r.portsOut[a].links[0].portIn.name,
                        i = r.portsOut[a].links[0].portIn.parent;
                    r.portsOut[a].links[0].remove(), l = o.link(h, t, i, e), l ? l.setValue() : d.log("relink after op reload not successfull for port " + e)
                }
            this.deleteOp(r.id, !1, !0)
        }
        e(i, s)
    }, Nt.prototype.getSubPatchOps = function (t) {
        const e = [];
        for (const i in this.ops) this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == t && e.push(this.ops[i]);
        return e
    }, Nt.prototype.getSubPatchOp = function (t, e) {
        for (const i in this.ops)
            if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == t && this.ops[i].objName == e) return this.ops[i];
        return !1
    }, Nt.prototype.deSerialize = function (t, e) {
        if (this.aborted) return;
        const i = this.loading.start("core", "deserialize");
        this.onLoadStart && this.onLoadStart(), this.namespace = t.namespace || "", this.name = t.name || "", "string" == typeof t && (t = JSON.parse(t));
        const s = this;
        this.settings = t.settings;
        const n = new Pt(this);
        for (const i in t.ops) {
            const s = CABLES.now(),
                r = t.ops[i];
            let o = null;
            try {
                o = r.opId ? this.addOp(r.opId, r.uiAttribs, r.id) : this.addOp(r.objName, r.uiAttribs, r.id)
            } catch (t) {
                throw console.warn("[instancing error] op data:", r, t), new Error("instancing error: " + r.objName)
            }
            if (n.checkOp(o), o) {
                e && (o.id = b()), o.portsInData = r.portsIn, o._origData = r;
                for (const t in r.portsIn) {
                    const e = r.portsIn[t],
                        i = o.getPort(e.name);
                    if (!i || "bool" != i.uiAttribs.display && "bool" != i.uiAttribs.type || isNaN(e.value) || (e.value = !0 === e.value), i && void 0 !== e.value && i.type != k.OP.OP_PORT_TYPE_TEXTURE && i.set(e.value), i && e && e.animated && i.setAnimated(e.animated), i && e && e.useVariable && i.setVariableName(e.useVariable), i && e && e.anim) {
                        i.anim || (i.anim = new K), e.anim.loop && (i.anim.loop = e.anim.loop);
                        for (const t in e.anim.keys) i.anim.keys.push(new D.Key(e.anim.keys[t]))
                    }
                }
                for (const e in r.portsOut) {
                    const s = o.getPort(r.portsOut[e].name);
                    s && s.type != k.OP.OP_PORT_TYPE_TEXTURE && r.portsOut[e].hasOwnProperty("value") && s.set(t.ops[i].portsOut[e].value)
                }
            }
            Math.round(100 * (CABLES.now() - s))
        }
        for (const t in this.ops) this.ops[t].onLoadedValueSet && (this.ops[t].onLoadedValueSet(this.ops[t]._origData), this.ops[t].onLoadedValueSet = null, this.ops[t]._origData = null);
        if (t.ops)
            for (let e = 0; e < t.ops.length; e++)
                if (t.ops[e].portsIn)
                    for (let i = 0; i < t.ops[e].portsIn.length; i++)
                        if (t.ops[e].portsIn[i].links)
                            for (let n = 0; n < t.ops[e].portsIn[i].links.length; n++) t.ops[e].portsIn[i].links[n] && (r = t.ops[e].portsIn[i].links[n].objIn, o = t.ops[e].portsIn[i].links[n].objOut, h = t.ops[e].portsIn[i].links[n].portIn, a = t.ops[e].portsIn[i].links[n].portOut, s.link(s.getOpById(r), h, s.getOpById(o), a));
        var r, o, h, a;
        for (const t in this.ops) this.ops[t].onLoaded && (this.ops[t].onLoaded(), this.ops[t].onLoaded = null);
        for (const t in this.ops) this.ops[t].init && (this.ops[t].init(), this.ops[t].init = null);
        if (this.config.variables)
            for (const t in this.config.variables) this.setVarValue(t, this.config.variables[t]);
        for (const t in this.ops) this.ops[t].initVarPorts();
        setTimeout(() => {
            this.loading.finished(i)
        }, 100), this.config.onPatchLoaded && this.config.onPatchLoaded(), this.onLoadEnd && this.onLoadEnd()
    }, Nt.prototype.profile = function (t) {
        this.profiler = new Rt;
        for (const e in this.ops) this.ops[e].profile(t)
    }, (Nt.Variable = function (t, e, i) {
        this._name = t, this._changeListeners = [], this.type = i, this.setValue(e)
    }).prototype.getValue = function () {
        return this._v
    }, Nt.Variable.prototype.getName = function () {
        return this._name
    }, Nt.Variable.prototype.setValue = function (t) {
        this._v = t;
        for (let e = 0; e < this._changeListeners.length; e++) this._changeListeners[e](t)
    }, Nt.Variable.prototype.addListener = function (t) {
        this._changeListeners.push(t)
    }, Nt.Variable.prototype.removeListener = function (t) {
        const e = this._changeListeners.indexOf(t);
        this._changeListeners.splice(e, 1)
    }, Nt.prototype.setVariable = function (t, e) {
        this._variables.hasOwnProperty(t) ? this._variables[t].setValue(e) : console.warn("variable " + t + " not found!")
    }, Nt.prototype._sortVars = function () {
        if (!this.isEditorMode()) return;
        const t = {};
        Object.keys(this._variables).sort().forEach(e => {
            t[e] = this._variables[e]
        }), this._variables = t
    }, Nt.prototype.setVarValue = function (t, e) {
        return this._variables.hasOwnProperty(t) ? this._variables[t].setValue(e) : (this._variables[t] = new Nt.Variable(t, e), this._sortVars(), this.emitEvent("variablesChanged")), this._variables[t]
    }, Nt.prototype.getVarValue = function (t, e) {
        if (this._variables.hasOwnProperty(t)) return this._variables[t].getValue()
    }, Nt.prototype.getVar = function (t) {
        if (this._variables.hasOwnProperty(t)) return this._variables[t]
    }, Nt.prototype.getVars = function () {
        return this._variables
    }, Nt.prototype.deleteVar = function (t) {
        for (let e = 0; e < this.ops.length; e++)
            for (let i = 0; i < this.ops[e].portsIn.length; i++) this.ops[e].portsIn[i].getVariableName() == t && this.ops[e].portsIn[i].setVariable(null);
        delete this._variables[t], this.emitEvent("variableDeleted", t), this.emitEvent("variablesChanged")
    }, Nt.prototype.getVars = function () {
        return this._variables
    }, Nt.prototype.exitError = function (t, e) {
        this && this.config && this.config.onError && (this.config.onError(t, e), this.aborted = !0)
    }, Nt.prototype.preRenderOps = function () {
        d.log("prerendering...");
        let t = null;
        CABLES.StopWatch && (t = new CABLES.StopWatch("prerendering"));
        for (let t = 0; t < this.ops.length; t++) this.ops[t].preRender && (this.ops[t].preRender(), d.log("prerender " + this.ops[t].objName));
        t && t.stop("prerendering")
    }, Nt.prototype.dispose = function () {
        this.pause(), this.clear()
    };
    var Ft = Nt;
    const Mt = {
            addPatch: function (t, e) {
                let i = t,
                    s = y();
                if ("string" == typeof t && (s = t, i = document.getElementById(s), !i)) return void console.error(s + " Polyshape Container Element not found!");
                const n = document.createElement("canvas");
                return n.id = "glcanvas_" + s, n.width = i.clientWidth, n.height = i.clientHeight, window.addEventListener("resize", function () {
                    this.setAttribute("width", i.clientWidth), this.height = i.clientHeight
                }.bind(n)), i.appendChild(n), (e = e || {}).glCanvasId = n.id, e.onError || (e.onError = function (t) {
                    d.log(t)
                }), CABLES.patch = new Ft(e), n
            }
        },
        St = {
            toneJsInitialized: !1,
            createAudioContext: function (t) {
                if (window.AudioContext = window.AudioContext || window.webkitAudioContext, window.AudioContext) return window.audioContext || (window.audioContext = new AudioContext), window.Tone && !St.toneJsInitialized && (Tone.setContext(window.audioContext), St.toneJsInitialized = !0), window.audioContext;
                t.patch.config.onError("NO_WEBAUDIO", "Web Audio is not supported in this browser.")
            },
            getAudioContext: function () {
                return window.audioContext
            },
            createAudioInPort: function (t, e, i, s) {
                if (!t || !e || !i) {
                    const e = "ERROR: createAudioInPort needs three parameters, op, portName and audioNode";
                    throw t.log(e), new Error(e)
                }
                s || (s = 0), t.webAudio = t.webAudio || {}, t.webAudio.audioInPorts = t.webAudio.audioInPorts || [];
                const n = t.inObject(e);
                return n.webAudio = {}, n.webAudio.previousAudioInNode = null, n.webAudio.audioNode = i, t.webAudio.audioInPorts[e] = n, n.onChange = function () {
                    const e = n.get();
                    if (e) try {
                        e.connect(n.webAudio.audioNode, 0, s)
                    } catch (i) {
                        throw t.log("Error: Failed to connect web audio node!", i), t.log("port.webAudio.audioNode", n.webAudio.audioNode), t.log("audioInNode: ", e), t.log("inputChannelIndex:", s), t.log("audioInNode.connect: ", e.connect), i
                    } else if (n.webAudio.previousAudioInNode) try {
                        n.webAudio.previousAudioInNode.disconnect(n.webAudio.audioNode, 0, s)
                    } catch (e) {
                        try {
                            n.webAudio.previousAudioInNode.disconnect(n.webAudio.audioNode)
                        } catch (i) {
                            throw t.log("Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ", e), e.printStackTrace && e.printStackTrace(), e
                        }
                    }
                    n.webAudio.previousAudioInNode = e
                }, n
            },
            replaceNodeInPort: function (t, e, i) {
                const s = t.webAudio.previousAudioInNode;
                if (s && s.disconnect) {
                    try {
                        s.disconnect(e)
                    } catch (t) {
                        throw t.printStackTrace && t.printStackTrace(), new Error("replaceNodeInPort: Could not disconnect old audio node. " + t.name + " " + t.message)
                    }
                    t.webAudio.audioNode = i;
                    try {
                        s.connect(i)
                    } catch (t) {
                        throw t.printStackTrace && t.printStackTrace(), new Error("replaceNodeInPort: Could not connect to new node. " + t.name + " " + t.message)
                    }
                }
            },
            createAudioOutPort: function (t, e, i) {
                if (!t || !e || !i) {
                    const e = "ERROR: createAudioOutPort needs three parameters, op, portName and audioNode";
                    throw t.log(e), new Error(e)
                }
                const s = t.outObject(e);
                return s.set(i), s
            },
            createAudioParamInPort: function (t, e, i, s, n) {
                if (!t || !e || !i) return t.log("ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode"), t && t.name && t.log("opname: ", t.name), t.log("portName", e), void t.log("audioNode: ", i);
                t.webAudio = t.webAudio || {}, t.webAudio.audioInPorts = t.webAudio.audioInPorts || [];
                const r = t.inDynamic(e, [k.OP.OP_PORT_TYPE_VALUE, k.OP.OP_PORT_TYPE_OBJECT], s, n);
                return r.webAudio = {}, r.webAudio.previousAudioInNode = null, r.webAudio.audioNode = i, t.webAudio.audioInPorts[e] = r, r.onChange = function () {
                    const e = r.get(),
                        i = r.webAudio.audioNode,
                        s = St.getAudioContext();
                    if (null != e)
                        if ("object" == typeof e && e.connect) {
                            try {
                                e.connect(i)
                            } catch (e) {
                                throw t.log("Could not connect audio node: ", e), e.printStackTrace && e.printStackTrace(), e
                            }
                            r.webAudio.previousAudioInNode = e
                        } else {
                            if (i._param && i._param.minValue && i._param.maxValue)
                                if (e >= i._param.minValue && e <= i._param.maxValue) try {
                                    i.setValueAtTime ? i.setValueAtTime(e, s.currentTime) : i.value = e
                                } catch (e) {
                                    throw t.log("Possible AudioParam problem with tone.js op: ", e), e.printStackTrace && e.printStackTrace(), e
                                } else t.log("Warning: The value for an audio parameter is out of range!");
                                else if (i.minValue && i.maxValue)
                                if (e >= i.minValue && e <= i.maxValue) try {
                                    i.setValueAtTime ? i.setValueAtTime(e, s.currentTime) : i.value = e
                                } catch (e) {
                                    throw t.log("AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ", e), e.printStackTrace && e.printStackTrace(), e
                                } else t.log("Warning: The value for an audio parameter is out of range!");
                                else try {
                                    i.setValueAtTime ? i.setValueAtTime(e, s.currentTime) : i.value = e
                                } catch (e) {
                                    throw t.log("Possible AudioParam problem (without minValue / maxValue): ", e), e.printStackTrace && e.printStackTrace(), e
                                }
                            if (r.webAudio.previousAudioInNode && r.webAudio.previousAudioInNode.disconnect) {
                                try {
                                    r.webAudio.previousAudioInNode.disconnect(i)
                                } catch (e) {
                                    throw t.log("Could not disconnect previous audio node: ", e), e
                                }
                                r.webAudio.previousAudioInNode = void 0
                            }
                        }
                    else r.webAudio.previousAudioInNode
                }, r
            },
            loadAudioFile: function (t, e, i, s) {
                const n = St.createAudioContext(),
                    r = t.loading.start("audio", e);
                t.isEditorMode() && gui.jobs().start({
                    id: "loadaudio" + r,
                    title: " loading audio (" + e + ")"
                });
                const o = new XMLHttpRequest;
                e && (o.open("GET", e, !0), o.responseType = "arraybuffer", o.onload = function () {
                    t.loading.finished(r), t.isEditorMode() && gui.jobs().finish("loadaudio" + r), n.decodeAudioData(o.response, i, s)
                }, o.send())
            },
            isValidToneTime: function (t) {
                try {
                    new Tone.Time(t)
                } catch (t) {
                    return !1
                }
                return !0
            },
            isValidToneNote: function (t) {
                try {
                    Tone.Frequency(t)
                } catch (t) {
                    return !1
                }
                return !0
            }
        },
        Ct = function (t, e, i) {
            this._patch = t, this.connector = i || new kt, this.connector.receive(this)
        };
    Ct.prototype._receive = function (t) {
        console.log("ev", t);
        let e = {};
        if (e = t.hasOwnProperty("event") ? t : JSON.parse(t.data), e.event == k.PACO.PACO_OP_CREATE) {
            if (d.log("op create: data.vars.objName"), this._patch.getOpById(e.vars.opId)) return;
            this._patch.addOp(e.vars.objName, null, e.vars.opId).id = e.vars.opId
        } else if (e.event == k.PACO.PACO_LOAD) d.log("PACO load patch....."), this._patch.clear(), this._patch.deSerialize(e.vars.patch);
        else if (e.event == k.PACO.PACO_CLEAR) this._patch.clear(), d.log("clear");
        else if (e.event == k.PACO.PACO_OP_DELETE) d.log("op delete"), this._patch.deleteOp(e.vars.op, !0);
        else if (e.event == k.PACO.PACO_OP_ENABLE) {
            const t = this._patch.getOpById(e.vars.op);
            t && (t.enabled = !0)
        } else if (e.event == k.PACO.PACO_OP_DISABLE) {
            const t = this._patch.getOpById(e.vars.op);
            t && (t.enabled = !1)
        } else if (e.event == k.PACO.PACO_UNLINK) {
            const t = this._patch.getOpById(e.vars.op1),
                i = this._patch.getOpById(e.vars.op2);
            if (!t || !i) return void console.log("[paco] unlink op not found ");
            const s = t.getPort(e.vars.port1),
                n = i.getPort(e.vars.port2);
            s.removeLinkTo(n)
        } else if (e.event == k.PACO.PACO_LINK) {
            const t = this._patch.getOpById(e.vars.op1),
                i = this._patch.getOpById(e.vars.op2);
            this._patch.link(t, e.vars.port1, i, e.vars.port2)
        } else if (e.event == k.PACO.PACO_VALUECHANGE) {
            this._patch.getOpById(e.vars.op).getPort(e.vars.port).set(e.vars.v)
        } else d.log("unknown patchConnectionEvent!", t)
    };
    const wt = function (t) {
        this.connectors = [], this.connectors.push(new kt), t.addEventListener("onOpDelete", t => {
            this.send(CABLES.PACO_OP_DELETE, {
                op: t.id
            })
        }), t.addEventListener("onOpAdd", t => {
            this.send(CABLES.PACO_OP_CREATE, {
                opId: t.id,
                objName: t.objName
            })
        }), t.addEventListener("onUnLink", (t, e) => {
            this.send(CABLES.PACO_UNLINK, {
                op1: t.parent.id,
                op2: e.parent.id,
                port1: t.getName(),
                port2: e.getName()
            })
        }), t.addEventListener("onLink", (t, e) => {
            this.send(CABLES.PACO_LINK, {
                op1: t.parent.id,
                op2: e.parent.id,
                port1: t.name,
                port2: e.name
            })
        })
    };
    wt.prototype.send = function (t, e) {
        for (let i = 0; i < this.connectors.length; i++) this.connectors[i].send(t, e)
    };
    const kt = function () {
        window.BroadcastChannel && (this.bc = new BroadcastChannel("test_channel"))
    };
    kt.prototype.receive = function (t) {
        this.bc && (d.log("init"), this.bc.onmessage = t._receive.bind(t))
    }, kt.prototype.send = function (t, e) {
        if (!this.bc) return;
        const i = {};
        i.event = t, i.vars = e, this.bc.postMessage(JSON.stringify(i))
    };
    const Bt = Object.assign({
        EventTarget: _,
        EMBED: Mt,
        Link: j,
        Port: B,
        Op: q,
        Profiler: Rt,
        Requirements: Pt,
        Patch: Ft,
        Instancing: xt,
        Timer: pt,
        WEBAUDIO: St,
        Variable: function () {
            let t = null;
            const e = [];
            this.onChanged = function (t) {
                e.push(t)
            }, this.getValue = function () {
                return t
            }, this.setValue = function (e) {
                t = e, this.emitChanged()
            }, this.emitChanged = function () {
                for (let t = 0; t < e.length; t++) e[t]()
            }
        },
        LoadingStatus: vt,
        now: ct,
        internalNow: ut
    }, s, n, r, k.ANIM, o, k.PORT, k.PACO, k.ANIM, k.OP);
    e.default = Bt;
    (function () {
        return !this
    })() || console.log("not in strict mode: index core")
}]).default;
//# sourceMappingURL=cables.min.js.map
/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version 3.1.0

Copyright (c) 2015-2019, Brandon Jones, Colin MacKenzie IV.

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
! function (t, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((t = t || self).glMatrix = {})
}(this, function (t) {
    "use strict";
    var n = 1e-6,
        a = "undefined" != typeof Float32Array ? Float32Array : Array,
        r = Math.random;
    var u = Math.PI / 180;
    Math.hypot || (Math.hypot = function () {
        for (var t = 0, n = arguments.length; n--;) t += arguments[n] * arguments[n];
        return Math.sqrt(t)
    });
    var e = Object.freeze({
        EPSILON: n,
        get ARRAY_TYPE() {
            return a
        },
        RANDOM: r,
        setMatrixArrayType: function (t) {
            a = t
        },
        toRadian: function (t) {
            return t * u
        },
        equals: function (t, a) {
            return Math.abs(t - a) <= n * Math.max(1, Math.abs(t), Math.abs(a))
        }
    });

    function o(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = a[0],
            c = a[1],
            h = a[2],
            s = a[3];
        return t[0] = r * i + e * c, t[1] = u * i + o * c, t[2] = r * h + e * s, t[3] = u * h + o * s, t
    }

    function i(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t
    }
    var c = o,
        h = i,
        s = Object.freeze({
            create: function () {
                var t = new a(4);
                return a != Float32Array && (t[1] = 0, t[2] = 0), t[0] = 1, t[3] = 1, t
            },
            clone: function (t) {
                var n = new a(4);
                return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n
            },
            copy: function (t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t
            },
            identity: function (t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
            },
            fromValues: function (t, n, r, u) {
                var e = new a(4);
                return e[0] = t, e[1] = n, e[2] = r, e[3] = u, e
            },
            set: function (t, n, a, r, u) {
                return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t
            },
            transpose: function (t, n) {
                if (t === n) {
                    var a = n[1];
                    t[1] = n[2], t[2] = a
                } else t[0] = n[0], t[1] = n[2], t[2] = n[1], t[3] = n[3];
                return t
            },
            invert: function (t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = a * e - u * r;
                return o ? (o = 1 / o, t[0] = e * o, t[1] = -r * o, t[2] = -u * o, t[3] = a * o, t) : null
            },
            adjoint: function (t, n) {
                var a = n[0];
                return t[0] = n[3], t[1] = -n[1], t[2] = -n[2], t[3] = a, t
            },
            determinant: function (t) {
                return t[0] * t[3] - t[2] * t[1]
            },
            multiply: o,
            rotate: function (t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = Math.sin(a),
                    c = Math.cos(a);
                return t[0] = r * c + e * i, t[1] = u * c + o * i, t[2] = r * -i + e * c, t[3] = u * -i + o * c, t
            },
            scale: function (t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = a[0],
                    c = a[1];
                return t[0] = r * i, t[1] = u * i, t[2] = e * c, t[3] = o * c, t
            },
            fromRotation: function (t, n) {
                var a = Math.sin(n),
                    r = Math.cos(n);
                return t[0] = r, t[1] = a, t[2] = -a, t[3] = r, t
            },
            fromScaling: function (t, n) {
                return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t
            },
            str: function (t) {
                return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            },
            frob: function (t) {
                return Math.hypot(t[0], t[1], t[2], t[3])
            },
            LDU: function (t, n, a, r) {
                return t[2] = r[2] / r[0], a[0] = r[0], a[1] = r[1], a[3] = r[3] - t[2] * a[1], [t, n, a]
            },
            add: function (t, n, a) {
                return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t
            },
            subtract: i,
            exactEquals: function (t, n) {
                return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
            },
            equals: function (t, a) {
                var r = t[0],
                    u = t[1],
                    e = t[2],
                    o = t[3],
                    i = a[0],
                    c = a[1],
                    h = a[2],
                    s = a[3];
                return Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(u - c) <= n * Math.max(1, Math.abs(u), Math.abs(c)) && Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h)) && Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
            },
            multiplyScalar: function (t, n, a) {
                return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t
            },
            multiplyScalarAndAdd: function (t, n, a, r) {
                return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t
            },
            mul: c,
            sub: h
        });

    function M(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = n[4],
            c = n[5],
            h = a[0],
            s = a[1],
            M = a[2],
            f = a[3],
            l = a[4],
            v = a[5];
        return t[0] = r * h + e * s, t[1] = u * h + o * s, t[2] = r * M + e * f, t[3] = u * M + o * f, t[4] = r * l + e * v + i, t[5] = u * l + o * v + c, t
    }

    function f(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t[4] = n[4] - a[4], t[5] = n[5] - a[5], t
    }
    var l = M,
        v = f,
        b = Object.freeze({
            create: function () {
                var t = new a(6);
                return a != Float32Array && (t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0), t[0] = 1, t[3] = 1, t
            },
            clone: function (t) {
                var n = new a(6);
                return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n
            },
            copy: function (t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t
            },
            identity: function (t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
            },
            fromValues: function (t, n, r, u, e, o) {
                var i = new a(6);
                return i[0] = t, i[1] = n, i[2] = r, i[3] = u, i[4] = e, i[5] = o, i
            },
            set: function (t, n, a, r, u, e, o) {
                return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t
            },
            invert: function (t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = n[4],
                    i = n[5],
                    c = a * e - r * u;
                return c ? (c = 1 / c, t[0] = e * c, t[1] = -r * c, t[2] = -u * c, t[3] = a * c, t[4] = (u * i - e * o) * c, t[5] = (r * o - a * i) * c, t) : null
            },
            determinant: function (t) {
                return t[0] * t[3] - t[1] * t[2]
            },
            multiply: M,
            rotate: function (t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    h = Math.sin(a),
                    s = Math.cos(a);
                return t[0] = r * s + e * h, t[1] = u * s + o * h, t[2] = r * -h + e * s, t[3] = u * -h + o * s, t[4] = i, t[5] = c, t
            },
            scale: function (t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    h = a[0],
                    s = a[1];
                return t[0] = r * h, t[1] = u * h, t[2] = e * s, t[3] = o * s, t[4] = i, t[5] = c, t
            },
            translate: function (t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    h = a[0],
                    s = a[1];
                return t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = r * h + e * s + i, t[5] = u * h + o * s + c, t
            },
            fromRotation: function (t, n) {
                var a = Math.sin(n),
                    r = Math.cos(n);
                return t[0] = r, t[1] = a, t[2] = -a, t[3] = r, t[4] = 0, t[5] = 0, t
            },
            fromScaling: function (t, n) {
                return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t[4] = 0, t[5] = 0, t
            },
            fromTranslation: function (t, n) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = n[0], t[5] = n[1], t
            },
            str: function (t) {
                return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
            },
            frob: function (t) {
                return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1)
            },
            add: function (t, n, a) {
                return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t
            },
            subtract: f,
            multiplyScalar: function (t, n, a) {
                return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t
            },
            multiplyScalarAndAdd: function (t, n, a, r) {
                return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t[4] = n[4] + a[4] * r, t[5] = n[5] + a[5] * r, t
            },
            exactEquals: function (t, n) {
                return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5]
            },
            equals: function (t, a) {
                var r = t[0],
                    u = t[1],
                    e = t[2],
                    o = t[3],
                    i = t[4],
                    c = t[5],
                    h = a[0],
                    s = a[1],
                    M = a[2],
                    f = a[3],
                    l = a[4],
                    v = a[5];
                return Math.abs(r - h) <= n * Math.max(1, Math.abs(r), Math.abs(h)) && Math.abs(u - s) <= n * Math.max(1, Math.abs(u), Math.abs(s)) && Math.abs(e - M) <= n * Math.max(1, Math.abs(e), Math.abs(M)) && Math.abs(o - f) <= n * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(i - l) <= n * Math.max(1, Math.abs(i), Math.abs(l)) && Math.abs(c - v) <= n * Math.max(1, Math.abs(c), Math.abs(v))
            },
            mul: l,
            sub: v
        });

    function m() {
        var t = new a(9);
        return a != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[0] = 1, t[4] = 1, t[8] = 1, t
    }

    function d(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = n[4],
            c = n[5],
            h = n[6],
            s = n[7],
            M = n[8],
            f = a[0],
            l = a[1],
            v = a[2],
            b = a[3],
            m = a[4],
            d = a[5],
            x = a[6],
            p = a[7],
            y = a[8];
        return t[0] = f * r + l * o + v * h, t[1] = f * u + l * i + v * s, t[2] = f * e + l * c + v * M, t[3] = b * r + m * o + d * h, t[4] = b * u + m * i + d * s, t[5] = b * e + m * c + d * M, t[6] = x * r + p * o + y * h, t[7] = x * u + p * i + y * s, t[8] = x * e + p * c + y * M, t
    }

    function x(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t[4] = n[4] - a[4], t[5] = n[5] - a[5], t[6] = n[6] - a[6], t[7] = n[7] - a[7], t[8] = n[8] - a[8], t
    }
    var p = d,
        y = x,
        q = Object.freeze({
            create: m,
            fromMat4: function (t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[4], t[4] = n[5], t[5] = n[6], t[6] = n[8], t[7] = n[9], t[8] = n[10], t
            },
            clone: function (t) {
                var n = new a(9);
                return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n
            },
            copy: function (t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t
            },
            fromValues: function (t, n, r, u, e, o, i, c, h) {
                var s = new a(9);
                return s[0] = t, s[1] = n, s[2] = r, s[3] = u, s[4] = e, s[5] = o, s[6] = i, s[7] = c, s[8] = h, s
            },
            set: function (t, n, a, r, u, e, o, i, c, h) {
                return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t[6] = i, t[7] = c, t[8] = h, t
            },
            identity: function (t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            },
            transpose: function (t, n) {
                if (t === n) {
                    var a = n[1],
                        r = n[2],
                        u = n[5];
                    t[1] = n[3], t[2] = n[6], t[3] = a, t[5] = n[7], t[6] = r, t[7] = u
                } else t[0] = n[0], t[1] = n[3], t[2] = n[6], t[3] = n[1], t[4] = n[4], t[5] = n[7], t[6] = n[2], t[7] = n[5], t[8] = n[8];
                return t
            },
            invert: function (t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = n[4],
                    i = n[5],
                    c = n[6],
                    h = n[7],
                    s = n[8],
                    M = s * o - i * h,
                    f = -s * e + i * c,
                    l = h * e - o * c,
                    v = a * M + r * f + u * l;
                return v ? (v = 1 / v, t[0] = M * v, t[1] = (-s * r + u * h) * v, t[2] = (i * r - u * o) * v, t[3] = f * v, t[4] = (s * a - u * c) * v, t[5] = (-i * a + u * e) * v, t[6] = l * v, t[7] = (-h * a + r * c) * v, t[8] = (o * a - r * e) * v, t) : null
            },
            adjoint: function (t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = n[4],
                    i = n[5],
                    c = n[6],
                    h = n[7],
                    s = n[8];
                return t[0] = o * s - i * h, t[1] = u * h - r * s, t[2] = r * i - u * o, t[3] = i * c - e * s, t[4] = a * s - u * c, t[5] = u * e - a * i, t[6] = e * h - o * c, t[7] = r * c - a * h, t[8] = a * o - r * e, t
            },
            determinant: function (t) {
                var n = t[0],
                    a = t[1],
                    r = t[2],
                    u = t[3],
                    e = t[4],
                    o = t[5],
                    i = t[6],
                    c = t[7],
                    h = t[8];
                return n * (h * e - o * c) + a * (-h * u + o * i) + r * (c * u - e * i)
            },
            multiply: d,
            translate: function (t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    h = n[6],
                    s = n[7],
                    M = n[8],
                    f = a[0],
                    l = a[1];
                return t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = i, t[5] = c, t[6] = f * r + l * o + h, t[7] = f * u + l * i + s, t[8] = f * e + l * c + M, t
            },
            rotate: function (t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3],
                    i = n[4],
                    c = n[5],
                    h = n[6],
                    s = n[7],
                    M = n[8],
                    f = Math.sin(a),
                    l = Math.cos(a);
                return t[0] = l * r + f * o, t[1] = l * u + f * i, t[2] = l * e + f * c, t[3] = l * o - f * r, t[4] = l * i - f * u, t[5] = l * c - f * e, t[6] = h, t[7] = s, t[8] = M, t
            },
            scale: function (t, n, a) {
                var r = a[0],
                    u = a[1];
                return t[0] = r * n[0], t[1] = r * n[1], t[2] = r * n[2], t[3] = u * n[3], t[4] = u * n[4], t[5] = u * n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t
            },
            fromTranslation: function (t, n) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = n[0], t[7] = n[1], t[8] = 1, t
            },
            fromRotation: function (t, n) {
                var a = Math.sin(n),
                    r = Math.cos(n);
                return t[0] = r, t[1] = a, t[2] = 0, t[3] = -a, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            },
            fromScaling: function (t, n) {
                return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = n[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            },
            fromMat2d: function (t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = 0, t[3] = n[2], t[4] = n[3], t[5] = 0, t[6] = n[4], t[7] = n[5], t[8] = 1, t
            },
            fromQuat: function (t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = a + a,
                    i = r + r,
                    c = u + u,
                    h = a * o,
                    s = r * o,
                    M = r * i,
                    f = u * o,
                    l = u * i,
                    v = u * c,
                    b = e * o,
                    m = e * i,
                    d = e * c;
                return t[0] = 1 - M - v, t[3] = s - d, t[6] = f + m, t[1] = s + d, t[4] = 1 - h - v, t[7] = l - b, t[2] = f - m, t[5] = l + b, t[8] = 1 - h - M, t
            },
            normalFromMat4: function (t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = n[4],
                    i = n[5],
                    c = n[6],
                    h = n[7],
                    s = n[8],
                    M = n[9],
                    f = n[10],
                    l = n[11],
                    v = n[12],
                    b = n[13],
                    m = n[14],
                    d = n[15],
                    x = a * i - r * o,
                    p = a * c - u * o,
                    y = a * h - e * o,
                    q = r * c - u * i,
                    g = r * h - e * i,
                    A = u * h - e * c,
                    w = s * b - M * v,
                    R = s * m - f * v,
                    z = s * d - l * v,
                    P = M * m - f * b,
                    j = M * d - l * b,
                    I = f * d - l * m,
                    S = x * I - p * j + y * P + q * z - g * R + A * w;
                return S ? (S = 1 / S, t[0] = (i * I - c * j + h * P) * S, t[1] = (c * z - o * I - h * R) * S, t[2] = (o * j - i * z + h * w) * S, t[3] = (u * j - r * I - e * P) * S, t[4] = (a * I - u * z + e * R) * S, t[5] = (r * z - a * j - e * w) * S, t[6] = (b * A - m * g + d * q) * S, t[7] = (m * y - v * A - d * p) * S, t[8] = (v * g - b * y + d * x) * S, t) : null
            },
            projection: function (t, n, a) {
                return t[0] = 2 / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / a, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t
            },
            str: function (t) {
                return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
            },
            frob: function (t) {
                return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8])
            },
            add: function (t, n, a) {
                return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t[6] = n[6] + a[6], t[7] = n[7] + a[7], t[8] = n[8] + a[8], t
            },
            subtract: x,
            multiplyScalar: function (t, n, a) {
                return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t[8] = n[8] * a, t
            },
            multiplyScalarAndAdd: function (t, n, a, r) {
                return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t[4] = n[4] + a[4] * r, t[5] = n[5] + a[5] * r, t[6] = n[6] + a[6] * r, t[7] = n[7] + a[7] * r, t[8] = n[8] + a[8] * r, t
            },
            exactEquals: function (t, n) {
                return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8]
            },
            equals: function (t, a) {
                var r = t[0],
                    u = t[1],
                    e = t[2],
                    o = t[3],
                    i = t[4],
                    c = t[5],
                    h = t[6],
                    s = t[7],
                    M = t[8],
                    f = a[0],
                    l = a[1],
                    v = a[2],
                    b = a[3],
                    m = a[4],
                    d = a[5],
                    x = a[6],
                    p = a[7],
                    y = a[8];
                return Math.abs(r - f) <= n * Math.max(1, Math.abs(r), Math.abs(f)) && Math.abs(u - l) <= n * Math.max(1, Math.abs(u), Math.abs(l)) && Math.abs(e - v) <= n * Math.max(1, Math.abs(e), Math.abs(v)) && Math.abs(o - b) <= n * Math.max(1, Math.abs(o), Math.abs(b)) && Math.abs(i - m) <= n * Math.max(1, Math.abs(i), Math.abs(m)) && Math.abs(c - d) <= n * Math.max(1, Math.abs(c), Math.abs(d)) && Math.abs(h - x) <= n * Math.max(1, Math.abs(h), Math.abs(x)) && Math.abs(s - p) <= n * Math.max(1, Math.abs(s), Math.abs(p)) && Math.abs(M - y) <= n * Math.max(1, Math.abs(M), Math.abs(y))
            },
            mul: p,
            sub: y
        });

    function g(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }

    function A(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = n[4],
            c = n[5],
            h = n[6],
            s = n[7],
            M = n[8],
            f = n[9],
            l = n[10],
            v = n[11],
            b = n[12],
            m = n[13],
            d = n[14],
            x = n[15],
            p = a[0],
            y = a[1],
            q = a[2],
            g = a[3];
        return t[0] = p * r + y * i + q * M + g * b, t[1] = p * u + y * c + q * f + g * m, t[2] = p * e + y * h + q * l + g * d, t[3] = p * o + y * s + q * v + g * x, p = a[4], y = a[5], q = a[6], g = a[7], t[4] = p * r + y * i + q * M + g * b, t[5] = p * u + y * c + q * f + g * m, t[6] = p * e + y * h + q * l + g * d, t[7] = p * o + y * s + q * v + g * x, p = a[8], y = a[9], q = a[10], g = a[11], t[8] = p * r + y * i + q * M + g * b, t[9] = p * u + y * c + q * f + g * m, t[10] = p * e + y * h + q * l + g * d, t[11] = p * o + y * s + q * v + g * x, p = a[12], y = a[13], q = a[14], g = a[15], t[12] = p * r + y * i + q * M + g * b, t[13] = p * u + y * c + q * f + g * m, t[14] = p * e + y * h + q * l + g * d, t[15] = p * o + y * s + q * v + g * x, t
    }

    function w(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = r + r,
            c = u + u,
            h = e + e,
            s = r * i,
            M = r * c,
            f = r * h,
            l = u * c,
            v = u * h,
            b = e * h,
            m = o * i,
            d = o * c,
            x = o * h;
        return t[0] = 1 - (l + b), t[1] = M + x, t[2] = f - d, t[3] = 0, t[4] = M - x, t[5] = 1 - (s + b), t[6] = v + m, t[7] = 0, t[8] = f + d, t[9] = v - m, t[10] = 1 - (s + l), t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], t[15] = 1, t
    }

    function R(t, n) {
        return t[0] = n[12], t[1] = n[13], t[2] = n[14], t
    }

    function z(t, n) {
        var a = n[0],
            r = n[1],
            u = n[2],
            e = n[4],
            o = n[5],
            i = n[6],
            c = n[8],
            h = n[9],
            s = n[10];
        return t[0] = Math.hypot(a, r, u), t[1] = Math.hypot(e, o, i), t[2] = Math.hypot(c, h, s), t
    }

    function P(t, n) {
        var r = new a(3);
        z(r, n);
        var u = 1 / r[0],
            e = 1 / r[1],
            o = 1 / r[2],
            i = n[0] * u,
            c = n[1] * e,
            h = n[2] * o,
            s = n[4] * u,
            M = n[5] * e,
            f = n[6] * o,
            l = n[8] * u,
            v = n[9] * e,
            b = n[10] * o,
            m = i + M + b,
            d = 0;
        return m > 0 ? (d = 2 * Math.sqrt(m + 1), t[3] = .25 * d, t[0] = (f - v) / d, t[1] = (l - h) / d, t[2] = (c - s) / d) : i > M && i > b ? (d = 2 * Math.sqrt(1 + i - M - b), t[3] = (f - v) / d, t[0] = .25 * d, t[1] = (c + s) / d, t[2] = (l + h) / d) : M > b ? (d = 2 * Math.sqrt(1 + M - i - b), t[3] = (l - h) / d, t[0] = (c + s) / d, t[1] = .25 * d, t[2] = (f + v) / d) : (d = 2 * Math.sqrt(1 + b - i - M), t[3] = (c - s) / d, t[0] = (l + h) / d, t[1] = (f + v) / d, t[2] = .25 * d), t
    }

    function j(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t[4] = n[4] - a[4], t[5] = n[5] - a[5], t[6] = n[6] - a[6], t[7] = n[7] - a[7], t[8] = n[8] - a[8], t[9] = n[9] - a[9], t[10] = n[10] - a[10], t[11] = n[11] - a[11], t[12] = n[12] - a[12], t[13] = n[13] - a[13], t[14] = n[14] - a[14], t[15] = n[15] - a[15], t
    }
    var I = A,
        S = j,
        E = Object.freeze({
            create: function () {
                var t = new a(16);
                return a != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0), t[0] = 1, t[5] = 1, t[10] = 1, t[15] = 1, t
            },
            clone: function (t) {
                var n = new a(16);
                return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15], n
            },
            copy: function (t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t
            },
            fromValues: function (t, n, r, u, e, o, i, c, h, s, M, f, l, v, b, m) {
                var d = new a(16);
                return d[0] = t, d[1] = n, d[2] = r, d[3] = u, d[4] = e, d[5] = o, d[6] = i, d[7] = c, d[8] = h, d[9] = s, d[10] = M, d[11] = f, d[12] = l, d[13] = v, d[14] = b, d[15] = m, d
            },
            set: function (t, n, a, r, u, e, o, i, c, h, s, M, f, l, v, b, m) {
                return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t[6] = i, t[7] = c, t[8] = h, t[9] = s, t[10] = M, t[11] = f, t[12] = l, t[13] = v, t[14] = b, t[15] = m, t
            },
            identity: g,
            transpose: function (t, n) {
                if (t === n) {
                    var a = n[1],
                        r = n[2],
                        u = n[3],
                        e = n[6],
                        o = n[7],
                        i = n[11];
                    t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = a, t[6] = n[9], t[7] = n[13], t[8] = r, t[9] = e, t[11] = n[14], t[12] = u, t[13] = o, t[14] = i
                } else t[0] = n[0], t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = n[1], t[5] = n[5], t[6] = n[9], t[7] = n[13], t[8] = n[2], t[9] = n[6], t[10] = n[10], t[11] = n[14], t[12] = n[3], t[13] = n[7], t[14] = n[11], t[15] = n[15];
                return t
            },
            invert: function (t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = n[4],
                    i = n[5],
                    c = n[6],
                    h = n[7],
                    s = n[8],
                    M = n[9],
                    f = n[10],
                    l = n[11],
                    v = n[12],
                    b = n[13],
                    m = n[14],
                    d = n[15],
                    x = a * i - r * o,
                    p = a * c - u * o,
                    y = a * h - e * o,
                    q = r * c - u * i,
                    g = r * h - e * i,
                    A = u * h - e * c,
                    w = s * b - M * v,
                    R = s * m - f * v,
                    z = s * d - l * v,
                    P = M * m - f * b,
                    j = M * d - l * b,
                    I = f * d - l * m,
                    S = x * I - p * j + y * P + q * z - g * R + A * w;
                return S ? (S = 1 / S, t[0] = (i * I - c * j + h * P) * S, t[1] = (u * j - r * I - e * P) * S, t[2] = (b * A - m * g + d * q) * S, t[3] = (f * g - M * A - l * q) * S, t[4] = (c * z - o * I - h * R) * S, t[5] = (a * I - u * z + e * R) * S, t[6] = (m * y - v * A - d * p) * S, t[7] = (s * A - f * y + l * p) * S, t[8] = (o * j - i * z + h * w) * S, t[9] = (r * z - a * j - e * w) * S, t[10] = (v * g - b * y + d * x) * S, t[11] = (M * y - s * g - l * x) * S, t[12] = (i * R - o * P - c * w) * S, t[13] = (a * P - r * R + u * w) * S, t[14] = (b * p - v * q - m * x) * S, t[15] = (s * q - M * p + f * x) * S, t) : null
            },
            adjoint: function (t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = n[4],
                    i = n[5],
                    c = n[6],
                    h = n[7],
                    s = n[8],
                    M = n[9],
                    f = n[10],
                    l = n[11],
                    v = n[12],
                    b = n[13],
                    m = n[14],
                    d = n[15];
                return t[0] = i * (f * d - l * m) - M * (c * d - h * m) + b * (c * l - h * f), t[1] = -(r * (f * d - l * m) - M * (u * d - e * m) + b * (u * l - e * f)), t[2] = r * (c * d - h * m) - i * (u * d - e * m) + b * (u * h - e * c), t[3] = -(r * (c * l - h * f) - i * (u * l - e * f) + M * (u * h - e * c)), t[4] = -(o * (f * d - l * m) - s * (c * d - h * m) + v * (c * l - h * f)), t[5] = a * (f * d - l * m) - s * (u * d - e * m) + v * (u * l - e * f), t[6] = -(a * (c * d - h * m) - o * (u * d - e * m) + v * (u * h - e * c)), t[7] = a * (c * l - h * f) - o * (u * l - e * f) + s * (u * h - e * c), t[8] = o * (M * d - l * b) - s * (i * d - h * b) + v * (i * l - h * M), t[9] = -(a * (M * d - l * b) - s * (r * d - e * b) + v * (r * l - e * M)), t[10] = a * (i * d - h * b) - o * (r * d - e * b) + v * (r * h - e * i), t[11] = -(a * (i * l - h * M) - o * (r * l - e * M) + s * (r * h - e * i)), t[12] = -(o * (M * m - f * b) - s * (i * m - c * b) + v * (i * f - c * M)), t[13] = a * (M * m - f * b) - s * (r * m - u * b) + v * (r * f - u * M), t[14] = -(a * (i * m - c * b) - o * (r * m - u * b) + v * (r * c - u * i)), t[15] = a * (i * f - c * M) - o * (r * f - u * M) + s * (r * c - u * i), t
            },
            determinant: function (t) {
                var n = t[0],
                    a = t[1],
                    r = t[2],
                    u = t[3],
                    e = t[4],
                    o = t[5],
                    i = t[6],
                    c = t[7],
                    h = t[8],
                    s = t[9],
                    M = t[10],
                    f = t[11],
                    l = t[12],
                    v = t[13],
                    b = t[14],
                    m = t[15];
                return (n * o - a * e) * (M * m - f * b) - (n * i - r * e) * (s * m - f * v) + (n * c - u * e) * (s * b - M * v) + (a * i - r * o) * (h * m - f * l) - (a * c - u * o) * (h * b - M * l) + (r * c - u * i) * (h * v - s * l)
            },
            multiply: A,
            translate: function (t, n, a) {
                var r, u, e, o, i, c, h, s, M, f, l, v, b = a[0],
                    m = a[1],
                    d = a[2];
                return n === t ? (t[12] = n[0] * b + n[4] * m + n[8] * d + n[12], t[13] = n[1] * b + n[5] * m + n[9] * d + n[13], t[14] = n[2] * b + n[6] * m + n[10] * d + n[14], t[15] = n[3] * b + n[7] * m + n[11] * d + n[15]) : (r = n[0], u = n[1], e = n[2], o = n[3], i = n[4], c = n[5], h = n[6], s = n[7], M = n[8], f = n[9], l = n[10], v = n[11], t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = i, t[5] = c, t[6] = h, t[7] = s, t[8] = M, t[9] = f, t[10] = l, t[11] = v, t[12] = r * b + i * m + M * d + n[12], t[13] = u * b + c * m + f * d + n[13], t[14] = e * b + h * m + l * d + n[14], t[15] = o * b + s * m + v * d + n[15]), t
            },
            scale: function (t, n, a) {
                var r = a[0],
                    u = a[1],
                    e = a[2];
                return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * u, t[5] = n[5] * u, t[6] = n[6] * u, t[7] = n[7] * u, t[8] = n[8] * e, t[9] = n[9] * e, t[10] = n[10] * e, t[11] = n[11] * e, t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t
            },
            rotate: function (t, a, r, u) {
                var e, o, i, c, h, s, M, f, l, v, b, m, d, x, p, y, q, g, A, w, R, z, P, j, I = u[0],
                    S = u[1],
                    E = u[2],
                    O = Math.hypot(I, S, E);
                return O < n ? null : (I *= O = 1 / O, S *= O, E *= O, e = Math.sin(r), i = 1 - (o = Math.cos(r)), c = a[0], h = a[1], s = a[2], M = a[3], f = a[4], l = a[5], v = a[6], b = a[7], m = a[8], d = a[9], x = a[10], p = a[11], y = I * I * i + o, q = S * I * i + E * e, g = E * I * i - S * e, A = I * S * i - E * e, w = S * S * i + o, R = E * S * i + I * e, z = I * E * i + S * e, P = S * E * i - I * e, j = E * E * i + o, t[0] = c * y + f * q + m * g, t[1] = h * y + l * q + d * g, t[2] = s * y + v * q + x * g, t[3] = M * y + b * q + p * g, t[4] = c * A + f * w + m * R, t[5] = h * A + l * w + d * R, t[6] = s * A + v * w + x * R, t[7] = M * A + b * w + p * R, t[8] = c * z + f * P + m * j, t[9] = h * z + l * P + d * j, t[10] = s * z + v * P + x * j, t[11] = M * z + b * P + p * j, a !== t && (t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t)
            },
            rotateX: function (t, n, a) {
                var r = Math.sin(a),
                    u = Math.cos(a),
                    e = n[4],
                    o = n[5],
                    i = n[6],
                    c = n[7],
                    h = n[8],
                    s = n[9],
                    M = n[10],
                    f = n[11];
                return n !== t && (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[4] = e * u + h * r, t[5] = o * u + s * r, t[6] = i * u + M * r, t[7] = c * u + f * r, t[8] = h * u - e * r, t[9] = s * u - o * r, t[10] = M * u - i * r, t[11] = f * u - c * r, t
            },
            rotateY: function (t, n, a) {
                var r = Math.sin(a),
                    u = Math.cos(a),
                    e = n[0],
                    o = n[1],
                    i = n[2],
                    c = n[3],
                    h = n[8],
                    s = n[9],
                    M = n[10],
                    f = n[11];
                return n !== t && (t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = e * u - h * r, t[1] = o * u - s * r, t[2] = i * u - M * r, t[3] = c * u - f * r, t[8] = e * r + h * u, t[9] = o * r + s * u, t[10] = i * r + M * u, t[11] = c * r + f * u, t
            },
            rotateZ: function (t, n, a) {
                var r = Math.sin(a),
                    u = Math.cos(a),
                    e = n[0],
                    o = n[1],
                    i = n[2],
                    c = n[3],
                    h = n[4],
                    s = n[5],
                    M = n[6],
                    f = n[7];
                return n !== t && (t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = e * u + h * r, t[1] = o * u + s * r, t[2] = i * u + M * r, t[3] = c * u + f * r, t[4] = h * u - e * r, t[5] = s * u - o * r, t[6] = M * u - i * r, t[7] = f * u - c * r, t
            },
            fromTranslation: function (t, n) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
            },
            fromScaling: function (t, n) {
                return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = n[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            },
            fromRotation: function (t, a, r) {
                var u, e, o, i = r[0],
                    c = r[1],
                    h = r[2],
                    s = Math.hypot(i, c, h);
                return s < n ? null : (i *= s = 1 / s, c *= s, h *= s, u = Math.sin(a), o = 1 - (e = Math.cos(a)), t[0] = i * i * o + e, t[1] = c * i * o + h * u, t[2] = h * i * o - c * u, t[3] = 0, t[4] = i * c * o - h * u, t[5] = c * c * o + e, t[6] = h * c * o + i * u, t[7] = 0, t[8] = i * h * o + c * u, t[9] = c * h * o - i * u, t[10] = h * h * o + e, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
            },
            fromXRotation: function (t, n) {
                var a = Math.sin(n),
                    r = Math.cos(n);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r, t[6] = a, t[7] = 0, t[8] = 0, t[9] = -a, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            },
            fromYRotation: function (t, n) {
                var a = Math.sin(n),
                    r = Math.cos(n);
                return t[0] = r, t[1] = 0, t[2] = -a, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = a, t[9] = 0, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            },
            fromZRotation: function (t, n) {
                var a = Math.sin(n),
                    r = Math.cos(n);
                return t[0] = r, t[1] = a, t[2] = 0, t[3] = 0, t[4] = -a, t[5] = r, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            },
            fromRotationTranslation: w,
            fromQuat2: function (t, n) {
                var r = new a(3),
                    u = -n[0],
                    e = -n[1],
                    o = -n[2],
                    i = n[3],
                    c = n[4],
                    h = n[5],
                    s = n[6],
                    M = n[7],
                    f = u * u + e * e + o * o + i * i;
                return f > 0 ? (r[0] = 2 * (c * i + M * u + h * o - s * e) / f, r[1] = 2 * (h * i + M * e + s * u - c * o) / f, r[2] = 2 * (s * i + M * o + c * e - h * u) / f) : (r[0] = 2 * (c * i + M * u + h * o - s * e), r[1] = 2 * (h * i + M * e + s * u - c * o), r[2] = 2 * (s * i + M * o + c * e - h * u)), w(t, n, r), t
            },
            getTranslation: R,
            getScaling: z,
            getRotation: P,
            fromRotationTranslationScale: function (t, n, a, r) {
                var u = n[0],
                    e = n[1],
                    o = n[2],
                    i = n[3],
                    c = u + u,
                    h = e + e,
                    s = o + o,
                    M = u * c,
                    f = u * h,
                    l = u * s,
                    v = e * h,
                    b = e * s,
                    m = o * s,
                    d = i * c,
                    x = i * h,
                    p = i * s,
                    y = r[0],
                    q = r[1],
                    g = r[2];
                return t[0] = (1 - (v + m)) * y, t[1] = (f + p) * y, t[2] = (l - x) * y, t[3] = 0, t[4] = (f - p) * q, t[5] = (1 - (M + m)) * q, t[6] = (b + d) * q, t[7] = 0, t[8] = (l + x) * g, t[9] = (b - d) * g, t[10] = (1 - (M + v)) * g, t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], t[15] = 1, t
            },
            fromRotationTranslationScaleOrigin: function (t, n, a, r, u) {
                var e = n[0],
                    o = n[1],
                    i = n[2],
                    c = n[3],
                    h = e + e,
                    s = o + o,
                    M = i + i,
                    f = e * h,
                    l = e * s,
                    v = e * M,
                    b = o * s,
                    m = o * M,
                    d = i * M,
                    x = c * h,
                    p = c * s,
                    y = c * M,
                    q = r[0],
                    g = r[1],
                    A = r[2],
                    w = u[0],
                    R = u[1],
                    z = u[2],
                    P = (1 - (b + d)) * q,
                    j = (l + y) * q,
                    I = (v - p) * q,
                    S = (l - y) * g,
                    E = (1 - (f + d)) * g,
                    O = (m + x) * g,
                    T = (v + p) * A,
                    D = (m - x) * A,
                    F = (1 - (f + b)) * A;
                return t[0] = P, t[1] = j, t[2] = I, t[3] = 0, t[4] = S, t[5] = E, t[6] = O, t[7] = 0, t[8] = T, t[9] = D, t[10] = F, t[11] = 0, t[12] = a[0] + w - (P * w + S * R + T * z), t[13] = a[1] + R - (j * w + E * R + D * z), t[14] = a[2] + z - (I * w + O * R + F * z), t[15] = 1, t
            },
            fromQuat: function (t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = a + a,
                    i = r + r,
                    c = u + u,
                    h = a * o,
                    s = r * o,
                    M = r * i,
                    f = u * o,
                    l = u * i,
                    v = u * c,
                    b = e * o,
                    m = e * i,
                    d = e * c;
                return t[0] = 1 - M - v, t[1] = s + d, t[2] = f - m, t[3] = 0, t[4] = s - d, t[5] = 1 - h - v, t[6] = l + b, t[7] = 0, t[8] = f + m, t[9] = l - b, t[10] = 1 - h - M, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            },
            frustum: function (t, n, a, r, u, e, o) {
                var i = 1 / (a - n),
                    c = 1 / (u - r),
                    h = 1 / (e - o);
                return t[0] = 2 * e * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * e * c, t[6] = 0, t[7] = 0, t[8] = (a + n) * i, t[9] = (u + r) * c, t[10] = (o + e) * h, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = o * e * 2 * h, t[15] = 0, t
            },
            perspective: function (t, n, a, r, u) {
                var e, o = 1 / Math.tan(n / 2);
                return t[0] = o / a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, null != u && u !== 1 / 0 ? (e = 1 / (r - u), t[10] = (u + r) * e, t[14] = 2 * u * r * e) : (t[10] = -1, t[14] = -2 * r), t
            },
            perspectiveFromFieldOfView: function (t, n, a, r) {
                var u = Math.tan(n.upDegrees * Math.PI / 180),
                    e = Math.tan(n.downDegrees * Math.PI / 180),
                    o = Math.tan(n.leftDegrees * Math.PI / 180),
                    i = Math.tan(n.rightDegrees * Math.PI / 180),
                    c = 2 / (o + i),
                    h = 2 / (u + e);
                return t[0] = c, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = h, t[6] = 0, t[7] = 0, t[8] = -(o - i) * c * .5, t[9] = (u - e) * h * .5, t[10] = r / (a - r), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = r * a / (a - r), t[15] = 0, t
            },
            ortho: function (t, n, a, r, u, e, o) {
                var i = 1 / (n - a),
                    c = 1 / (r - u),
                    h = 1 / (e - o);
                return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * c, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * h, t[11] = 0, t[12] = (n + a) * i, t[13] = (u + r) * c, t[14] = (o + e) * h, t[15] = 1, t
            },
            lookAt: function (t, a, r, u) {
                var e, o, i, c, h, s, M, f, l, v, b = a[0],
                    m = a[1],
                    d = a[2],
                    x = u[0],
                    p = u[1],
                    y = u[2],
                    q = r[0],
                    A = r[1],
                    w = r[2];
                return Math.abs(b - q) < n && Math.abs(m - A) < n && Math.abs(d - w) < n ? g(t) : (M = b - q, f = m - A, l = d - w, e = p * (l *= v = 1 / Math.hypot(M, f, l)) - y * (f *= v), o = y * (M *= v) - x * l, i = x * f - p * M, (v = Math.hypot(e, o, i)) ? (e *= v = 1 / v, o *= v, i *= v) : (e = 0, o = 0, i = 0), c = f * i - l * o, h = l * e - M * i, s = M * o - f * e, (v = Math.hypot(c, h, s)) ? (c *= v = 1 / v, h *= v, s *= v) : (c = 0, h = 0, s = 0), t[0] = e, t[1] = c, t[2] = M, t[3] = 0, t[4] = o, t[5] = h, t[6] = f, t[7] = 0, t[8] = i, t[9] = s, t[10] = l, t[11] = 0, t[12] = -(e * b + o * m + i * d), t[13] = -(c * b + h * m + s * d), t[14] = -(M * b + f * m + l * d), t[15] = 1, t)
            },
            targetTo: function (t, n, a, r) {
                var u = n[0],
                    e = n[1],
                    o = n[2],
                    i = r[0],
                    c = r[1],
                    h = r[2],
                    s = u - a[0],
                    M = e - a[1],
                    f = o - a[2],
                    l = s * s + M * M + f * f;
                l > 0 && (s *= l = 1 / Math.sqrt(l), M *= l, f *= l);
                var v = c * f - h * M,
                    b = h * s - i * f,
                    m = i * M - c * s;
                return (l = v * v + b * b + m * m) > 0 && (v *= l = 1 / Math.sqrt(l), b *= l, m *= l), t[0] = v, t[1] = b, t[2] = m, t[3] = 0, t[4] = M * m - f * b, t[5] = f * v - s * m, t[6] = s * b - M * v, t[7] = 0, t[8] = s, t[9] = M, t[10] = f, t[11] = 0, t[12] = u, t[13] = e, t[14] = o, t[15] = 1, t
            },
            str: function (t) {
                return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
            },
            frob: function (t) {
                return Math.hypot(t[0], t[1], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
            },
            add: function (t, n, a) {
                return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t[6] = n[6] + a[6], t[7] = n[7] + a[7], t[8] = n[8] + a[8], t[9] = n[9] + a[9], t[10] = n[10] + a[10], t[11] = n[11] + a[11], t[12] = n[12] + a[12], t[13] = n[13] + a[13], t[14] = n[14] + a[14], t[15] = n[15] + a[15], t
            },
            subtract: j,
            multiplyScalar: function (t, n, a) {
                return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = n[11] * a, t[12] = n[12] * a, t[13] = n[13] * a, t[14] = n[14] * a, t[15] = n[15] * a, t
            },
            multiplyScalarAndAdd: function (t, n, a, r) {
                return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t[4] = n[4] + a[4] * r, t[5] = n[5] + a[5] * r, t[6] = n[6] + a[6] * r, t[7] = n[7] + a[7] * r, t[8] = n[8] + a[8] * r, t[9] = n[9] + a[9] * r, t[10] = n[10] + a[10] * r, t[11] = n[11] + a[11] * r, t[12] = n[12] + a[12] * r, t[13] = n[13] + a[13] * r, t[14] = n[14] + a[14] * r, t[15] = n[15] + a[15] * r, t
            },
            exactEquals: function (t, n) {
                return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8] && t[9] === n[9] && t[10] === n[10] && t[11] === n[11] && t[12] === n[12] && t[13] === n[13] && t[14] === n[14] && t[15] === n[15]
            },
            equals: function (t, a) {
                var r = t[0],
                    u = t[1],
                    e = t[2],
                    o = t[3],
                    i = t[4],
                    c = t[5],
                    h = t[6],
                    s = t[7],
                    M = t[8],
                    f = t[9],
                    l = t[10],
                    v = t[11],
                    b = t[12],
                    m = t[13],
                    d = t[14],
                    x = t[15],
                    p = a[0],
                    y = a[1],
                    q = a[2],
                    g = a[3],
                    A = a[4],
                    w = a[5],
                    R = a[6],
                    z = a[7],
                    P = a[8],
                    j = a[9],
                    I = a[10],
                    S = a[11],
                    E = a[12],
                    O = a[13],
                    T = a[14],
                    D = a[15];
                return Math.abs(r - p) <= n * Math.max(1, Math.abs(r), Math.abs(p)) && Math.abs(u - y) <= n * Math.max(1, Math.abs(u), Math.abs(y)) && Math.abs(e - q) <= n * Math.max(1, Math.abs(e), Math.abs(q)) && Math.abs(o - g) <= n * Math.max(1, Math.abs(o), Math.abs(g)) && Math.abs(i - A) <= n * Math.max(1, Math.abs(i), Math.abs(A)) && Math.abs(c - w) <= n * Math.max(1, Math.abs(c), Math.abs(w)) && Math.abs(h - R) <= n * Math.max(1, Math.abs(h), Math.abs(R)) && Math.abs(s - z) <= n * Math.max(1, Math.abs(s), Math.abs(z)) && Math.abs(M - P) <= n * Math.max(1, Math.abs(M), Math.abs(P)) && Math.abs(f - j) <= n * Math.max(1, Math.abs(f), Math.abs(j)) && Math.abs(l - I) <= n * Math.max(1, Math.abs(l), Math.abs(I)) && Math.abs(v - S) <= n * Math.max(1, Math.abs(v), Math.abs(S)) && Math.abs(b - E) <= n * Math.max(1, Math.abs(b), Math.abs(E)) && Math.abs(m - O) <= n * Math.max(1, Math.abs(m), Math.abs(O)) && Math.abs(d - T) <= n * Math.max(1, Math.abs(d), Math.abs(T)) && Math.abs(x - D) <= n * Math.max(1, Math.abs(x), Math.abs(D))
            },
            mul: I,
            sub: S
        });

    function O() {
        var t = new a(3);
        return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t
    }

    function T(t) {
        var n = t[0],
            a = t[1],
            r = t[2];
        return Math.hypot(n, a, r)
    }

    function D(t, n, r) {
        var u = new a(3);
        return u[0] = t, u[1] = n, u[2] = r, u
    }

    function F(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t
    }

    function L(t, n, a) {
        return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t[2] = n[2] * a[2], t
    }

    function V(t, n, a) {
        return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t[2] = n[2] / a[2], t
    }

    function Q(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            u = n[2] - t[2];
        return Math.hypot(a, r, u)
    }

    function Y(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            u = n[2] - t[2];
        return a * a + r * r + u * u
    }

    function X(t) {
        var n = t[0],
            a = t[1],
            r = t[2];
        return n * n + a * a + r * r
    }

    function Z(t, n) {
        var a = n[0],
            r = n[1],
            u = n[2],
            e = a * a + r * r + u * u;
        return e > 0 && (e = 1 / Math.sqrt(e)), t[0] = n[0] * e, t[1] = n[1] * e, t[2] = n[2] * e, t
    }

    function _(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
    }

    function B(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = a[0],
            i = a[1],
            c = a[2];
        return t[0] = u * c - e * i, t[1] = e * o - r * c, t[2] = r * i - u * o, t
    }
    var N, k = F,
        U = L,
        W = V,
        C = Q,
        G = Y,
        H = T,
        J = X,
        K = (N = O(), function (t, n, a, r, u, e) {
            var o, i;
            for (n || (n = 3), a || (a = 0), i = r ? Math.min(r * n + a, t.length) : t.length, o = a; o < i; o += n) N[0] = t[o], N[1] = t[o + 1], N[2] = t[o + 2], u(N, N, e), t[o] = N[0], t[o + 1] = N[1], t[o + 2] = N[2];
            return t
        }),
        $ = Object.freeze({
            create: O,
            clone: function (t) {
                var n = new a(3);
                return n[0] = t[0], n[1] = t[1], n[2] = t[2], n
            },
            length: T,
            fromValues: D,
            copy: function (t, n) {
                return t[0] = n[0], t[1] = n[1], t[2] = n[2], t
            },
            set: function (t, n, a, r) {
                return t[0] = n, t[1] = a, t[2] = r, t
            },
            add: function (t, n, a) {
                return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t
            },
            subtract: F,
            multiply: L,
            divide: V,
            ceil: function (t, n) {
                return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t
            },
            floor: function (t, n) {
                return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t
            },
            min: function (t, n, a) {
                return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t[2] = Math.min(n[2], a[2]), t
            },
            max: function (t, n, a) {
                return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t[2] = Math.max(n[2], a[2]), t
            },
            round: function (t, n) {
                return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t
            },
            scale: function (t, n, a) {
                return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t
            },
            scaleAndAdd: function (t, n, a, r) {
                return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t
            },
            distance: Q,
            squaredDistance: Y,
            squaredLength: X,
            negate: function (t, n) {
                return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t
            },
            inverse: function (t, n) {
                return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t
            },
            normalize: Z,
            dot: _,
            cross: B,
            lerp: function (t, n, a, r) {
                var u = n[0],
                    e = n[1],
                    o = n[2];
                return t[0] = u + r * (a[0] - u), t[1] = e + r * (a[1] - e), t[2] = o + r * (a[2] - o), t
            },
            hermite: function (t, n, a, r, u, e) {
                var o = e * e,
                    i = o * (2 * e - 3) + 1,
                    c = o * (e - 2) + e,
                    h = o * (e - 1),
                    s = o * (3 - 2 * e);
                return t[0] = n[0] * i + a[0] * c + r[0] * h + u[0] * s, t[1] = n[1] * i + a[1] * c + r[1] * h + u[1] * s, t[2] = n[2] * i + a[2] * c + r[2] * h + u[2] * s, t
            },
            bezier: function (t, n, a, r, u, e) {
                var o = 1 - e,
                    i = o * o,
                    c = e * e,
                    h = i * o,
                    s = 3 * e * i,
                    M = 3 * c * o,
                    f = c * e;
                return t[0] = n[0] * h + a[0] * s + r[0] * M + u[0] * f, t[1] = n[1] * h + a[1] * s + r[1] * M + u[1] * f, t[2] = n[2] * h + a[2] * s + r[2] * M + u[2] * f, t
            },
            random: function (t, n) {
                n = n || 1;
                var a = 2 * r() * Math.PI,
                    u = 2 * r() - 1,
                    e = Math.sqrt(1 - u * u) * n;
                return t[0] = Math.cos(a) * e, t[1] = Math.sin(a) * e, t[2] = u * n, t
            },
            transformMat4: function (t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = a[3] * r + a[7] * u + a[11] * e + a[15];
                return o = o || 1, t[0] = (a[0] * r + a[4] * u + a[8] * e + a[12]) / o, t[1] = (a[1] * r + a[5] * u + a[9] * e + a[13]) / o, t[2] = (a[2] * r + a[6] * u + a[10] * e + a[14]) / o, t
            },
            transformMat3: function (t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2];
                return t[0] = r * a[0] + u * a[3] + e * a[6], t[1] = r * a[1] + u * a[4] + e * a[7], t[2] = r * a[2] + u * a[5] + e * a[8], t
            },
            transformQuat: function (t, n, a) {
                var r = a[0],
                    u = a[1],
                    e = a[2],
                    o = a[3],
                    i = n[0],
                    c = n[1],
                    h = n[2],
                    s = u * h - e * c,
                    M = e * i - r * h,
                    f = r * c - u * i,
                    l = u * f - e * M,
                    v = e * s - r * f,
                    b = r * M - u * s,
                    m = 2 * o;
                return s *= m, M *= m, f *= m, l *= 2, v *= 2, b *= 2, t[0] = i + s + l, t[1] = c + M + v, t[2] = h + f + b, t
            },
            rotateX: function (t, n, a, r) {
                var u = [],
                    e = [];
                return u[0] = n[0] - a[0], u[1] = n[1] - a[1], u[2] = n[2] - a[2], e[0] = u[0], e[1] = u[1] * Math.cos(r) - u[2] * Math.sin(r), e[2] = u[1] * Math.sin(r) + u[2] * Math.cos(r), t[0] = e[0] + a[0], t[1] = e[1] + a[1], t[2] = e[2] + a[2], t
            },
            rotateY: function (t, n, a, r) {
                var u = [],
                    e = [];
                return u[0] = n[0] - a[0], u[1] = n[1] - a[1], u[2] = n[2] - a[2], e[0] = u[2] * Math.sin(r) + u[0] * Math.cos(r), e[1] = u[1], e[2] = u[2] * Math.cos(r) - u[0] * Math.sin(r), t[0] = e[0] + a[0], t[1] = e[1] + a[1], t[2] = e[2] + a[2], t
            },
            rotateZ: function (t, n, a, r) {
                var u = [],
                    e = [];
                return u[0] = n[0] - a[0], u[1] = n[1] - a[1], u[2] = n[2] - a[2], e[0] = u[0] * Math.cos(r) - u[1] * Math.sin(r), e[1] = u[0] * Math.sin(r) + u[1] * Math.cos(r), e[2] = u[2], t[0] = e[0] + a[0], t[1] = e[1] + a[1], t[2] = e[2] + a[2], t
            },
            angle: function (t, n) {
                var a = D(t[0], t[1], t[2]),
                    r = D(n[0], n[1], n[2]);
                Z(a, a), Z(r, r);
                var u = _(a, r);
                return u > 1 ? 0 : u < -1 ? Math.PI : Math.acos(u)
            },
            zero: function (t) {
                return t[0] = 0, t[1] = 0, t[2] = 0, t
            },
            str: function (t) {
                return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            },
            exactEquals: function (t, n) {
                return t[0] === n[0] && t[1] === n[1] && t[2] === n[2]
            },
            equals: function (t, a) {
                var r = t[0],
                    u = t[1],
                    e = t[2],
                    o = a[0],
                    i = a[1],
                    c = a[2];
                return Math.abs(r - o) <= n * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(u - i) <= n * Math.max(1, Math.abs(u), Math.abs(i)) && Math.abs(e - c) <= n * Math.max(1, Math.abs(e), Math.abs(c))
            },
            sub: k,
            mul: U,
            div: W,
            dist: C,
            sqrDist: G,
            len: H,
            sqrLen: J,
            forEach: K
        });

    function tt() {
        var t = new a(4);
        return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0), t
    }

    function nt(t) {
        var n = new a(4);
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n
    }

    function at(t, n, r, u) {
        var e = new a(4);
        return e[0] = t, e[1] = n, e[2] = r, e[3] = u, e
    }

    function rt(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t
    }

    function ut(t, n, a, r, u) {
        return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t
    }

    function et(t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t
    }

    function ot(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t
    }

    function it(t, n, a) {
        return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t[2] = n[2] * a[2], t[3] = n[3] * a[3], t
    }

    function ct(t, n, a) {
        return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t[2] = n[2] / a[2], t[3] = n[3] / a[3], t
    }

    function ht(t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t
    }

    function st(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            u = n[2] - t[2],
            e = n[3] - t[3];
        return Math.hypot(a, r, u, e)
    }

    function Mt(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            u = n[2] - t[2],
            e = n[3] - t[3];
        return a * a + r * r + u * u + e * e
    }

    function ft(t) {
        var n = t[0],
            a = t[1],
            r = t[2],
            u = t[3];
        return Math.hypot(n, a, r, u)
    }

    function lt(t) {
        var n = t[0],
            a = t[1],
            r = t[2],
            u = t[3];
        return n * n + a * a + r * r + u * u
    }

    function vt(t, n) {
        var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = a * a + r * r + u * u + e * e;
        return o > 0 && (o = 1 / Math.sqrt(o)), t[0] = a * o, t[1] = r * o, t[2] = u * o, t[3] = e * o, t
    }

    function bt(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
    }

    function mt(t, n, a, r) {
        var u = n[0],
            e = n[1],
            o = n[2],
            i = n[3];
        return t[0] = u + r * (a[0] - u), t[1] = e + r * (a[1] - e), t[2] = o + r * (a[2] - o), t[3] = i + r * (a[3] - i), t
    }

    function dt(t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
    }

    function xt(t, a) {
        var r = t[0],
            u = t[1],
            e = t[2],
            o = t[3],
            i = a[0],
            c = a[1],
            h = a[2],
            s = a[3];
        return Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(u - c) <= n * Math.max(1, Math.abs(u), Math.abs(c)) && Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h)) && Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
    }
    var pt = ot,
        yt = it,
        qt = ct,
        gt = st,
        At = Mt,
        wt = ft,
        Rt = lt,
        zt = function () {
            var t = tt();
            return function (n, a, r, u, e, o) {
                var i, c;
                for (a || (a = 4), r || (r = 0), c = u ? Math.min(u * a + r, n.length) : n.length, i = r; i < c; i += a) t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], t[3] = n[i + 3], e(t, t, o), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2], n[i + 3] = t[3];
                return n
            }
        }(),
        Pt = Object.freeze({
            create: tt,
            clone: nt,
            fromValues: at,
            copy: rt,
            set: ut,
            add: et,
            subtract: ot,
            multiply: it,
            divide: ct,
            ceil: function (t, n) {
                return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t[3] = Math.ceil(n[3]), t
            },
            floor: function (t, n) {
                return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t[3] = Math.floor(n[3]), t
            },
            min: function (t, n, a) {
                return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t[2] = Math.min(n[2], a[2]), t[3] = Math.min(n[3], a[3]), t
            },
            max: function (t, n, a) {
                return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t[2] = Math.max(n[2], a[2]), t[3] = Math.max(n[3], a[3]), t
            },
            round: function (t, n) {
                return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t[3] = Math.round(n[3]), t
            },
            scale: ht,
            scaleAndAdd: function (t, n, a, r) {
                return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t
            },
            distance: st,
            squaredDistance: Mt,
            length: ft,
            squaredLength: lt,
            negate: function (t, n) {
                return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t
            },
            inverse: function (t, n) {
                return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t[3] = 1 / n[3], t
            },
            normalize: vt,
            dot: bt,
            cross: function (t, n, a, r) {
                var u = a[0] * r[1] - a[1] * r[0],
                    e = a[0] * r[2] - a[2] * r[0],
                    o = a[0] * r[3] - a[3] * r[0],
                    i = a[1] * r[2] - a[2] * r[1],
                    c = a[1] * r[3] - a[3] * r[1],
                    h = a[2] * r[3] - a[3] * r[2],
                    s = n[0],
                    M = n[1],
                    f = n[2],
                    l = n[3];
                return t[0] = M * h - f * c + l * i, t[1] = -s * h + f * o - l * e, t[2] = s * c - M * o + l * u, t[3] = -s * i + M * e - f * u, t
            },
            lerp: mt,
            random: function (t, n) {
                var a, u, e, o, i, c;
                n = n || 1;
                do {
                    i = (a = 2 * r() - 1) * a + (u = 2 * r() - 1) * u
                } while (i >= 1);
                do {
                    c = (e = 2 * r() - 1) * e + (o = 2 * r() - 1) * o
                } while (c >= 1);
                var h = Math.sqrt((1 - i) / c);
                return t[0] = n * a, t[1] = n * u, t[2] = n * e * h, t[3] = n * o * h, t
            },
            transformMat4: function (t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = n[3];
                return t[0] = a[0] * r + a[4] * u + a[8] * e + a[12] * o, t[1] = a[1] * r + a[5] * u + a[9] * e + a[13] * o, t[2] = a[2] * r + a[6] * u + a[10] * e + a[14] * o, t[3] = a[3] * r + a[7] * u + a[11] * e + a[15] * o, t
            },
            transformQuat: function (t, n, a) {
                var r = n[0],
                    u = n[1],
                    e = n[2],
                    o = a[0],
                    i = a[1],
                    c = a[2],
                    h = a[3],
                    s = h * r + i * e - c * u,
                    M = h * u + c * r - o * e,
                    f = h * e + o * u - i * r,
                    l = -o * r - i * u - c * e;
                return t[0] = s * h + l * -o + M * -c - f * -i, t[1] = M * h + l * -i + f * -o - s * -c, t[2] = f * h + l * -c + s * -i - M * -o, t[3] = n[3], t
            },
            zero: function (t) {
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
            },
            str: function (t) {
                return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            },
            exactEquals: dt,
            equals: xt,
            sub: pt,
            mul: yt,
            div: qt,
            dist: gt,
            sqrDist: At,
            len: wt,
            sqrLen: Rt,
            forEach: zt
        });

    function jt() {
        var t = new a(4);
        return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t[3] = 1, t
    }

    function It(t, n, a) {
        a *= .5;
        var r = Math.sin(a);
        return t[0] = r * n[0], t[1] = r * n[1], t[2] = r * n[2], t[3] = Math.cos(a), t
    }

    function St(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = a[0],
            c = a[1],
            h = a[2],
            s = a[3];
        return t[0] = r * s + o * i + u * h - e * c, t[1] = u * s + o * c + e * i - r * h, t[2] = e * s + o * h + r * c - u * i, t[3] = o * s - r * i - u * c - e * h, t
    }

    function Et(t, n, a) {
        a *= .5;
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = Math.sin(a),
            c = Math.cos(a);
        return t[0] = r * c + o * i, t[1] = u * c + e * i, t[2] = e * c - u * i, t[3] = o * c - r * i, t
    }

    function Ot(t, n, a) {
        a *= .5;
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = Math.sin(a),
            c = Math.cos(a);
        return t[0] = r * c - e * i, t[1] = u * c + o * i, t[2] = e * c + r * i, t[3] = o * c - u * i, t
    }

    function Tt(t, n, a) {
        a *= .5;
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = Math.sin(a),
            c = Math.cos(a);
        return t[0] = r * c + u * i, t[1] = u * c - r * i, t[2] = e * c + o * i, t[3] = o * c - e * i, t
    }

    function Dt(t, n) {
        var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = Math.sqrt(a * a + r * r + u * u),
            i = Math.exp(e),
            c = o > 0 ? i * Math.sin(o) / o : 0;
        return t[0] = a * c, t[1] = r * c, t[2] = u * c, t[3] = i * Math.cos(o), t
    }

    function Ft(t, n) {
        var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = Math.sqrt(a * a + r * r + u * u),
            i = o > 0 ? Math.atan2(o, e) / o : 0;
        return t[0] = a * i, t[1] = r * i, t[2] = u * i, t[3] = .5 * Math.log(a * a + r * r + u * u + e * e), t
    }

    function Lt(t, a, r, u) {
        var e, o, i, c, h, s = a[0],
            M = a[1],
            f = a[2],
            l = a[3],
            v = r[0],
            b = r[1],
            m = r[2],
            d = r[3];
        return (o = s * v + M * b + f * m + l * d) < 0 && (o = -o, v = -v, b = -b, m = -m, d = -d), 1 - o > n ? (e = Math.acos(o), i = Math.sin(e), c = Math.sin((1 - u) * e) / i, h = Math.sin(u * e) / i) : (c = 1 - u, h = u), t[0] = c * s + h * v, t[1] = c * M + h * b, t[2] = c * f + h * m, t[3] = c * l + h * d, t
    }

    function Vt(t, n) {
        var a, r = n[0] + n[4] + n[8];
        if (r > 0) a = Math.sqrt(r + 1), t[3] = .5 * a, a = .5 / a, t[0] = (n[5] - n[7]) * a, t[1] = (n[6] - n[2]) * a, t[2] = (n[1] - n[3]) * a;
        else {
            var u = 0;
            n[4] > n[0] && (u = 1), n[8] > n[3 * u + u] && (u = 2);
            var e = (u + 1) % 3,
                o = (u + 2) % 3;
            a = Math.sqrt(n[3 * u + u] - n[3 * e + e] - n[3 * o + o] + 1), t[u] = .5 * a, a = .5 / a, t[3] = (n[3 * e + o] - n[3 * o + e]) * a, t[e] = (n[3 * e + u] + n[3 * u + e]) * a, t[o] = (n[3 * o + u] + n[3 * u + o]) * a
        }
        return t
    }
    var Qt, Yt, Xt, Zt, _t, Bt, Nt = nt,
        kt = at,
        Ut = rt,
        Wt = ut,
        Ct = et,
        Gt = St,
        Ht = ht,
        Jt = bt,
        Kt = mt,
        $t = ft,
        tn = $t,
        nn = lt,
        an = nn,
        rn = vt,
        un = dt,
        en = xt,
        on = (Qt = O(), Yt = D(1, 0, 0), Xt = D(0, 1, 0), function (t, n, a) {
            var r = _(n, a);
            return r < -.999999 ? (B(Qt, Yt, n), H(Qt) < 1e-6 && B(Qt, Xt, n), Z(Qt, Qt), It(t, Qt, Math.PI), t) : r > .999999 ? (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t) : (B(Qt, n, a), t[0] = Qt[0], t[1] = Qt[1], t[2] = Qt[2], t[3] = 1 + r, rn(t, t))
        }),
        cn = (Zt = jt(), _t = jt(), function (t, n, a, r, u, e) {
            return Lt(Zt, n, u, e), Lt(_t, a, r, e), Lt(t, Zt, _t, 2 * e * (1 - e)), t
        }),
        hn = (Bt = m(), function (t, n, a, r) {
            return Bt[0] = a[0], Bt[3] = a[1], Bt[6] = a[2], Bt[1] = r[0], Bt[4] = r[1], Bt[7] = r[2], Bt[2] = -n[0], Bt[5] = -n[1], Bt[8] = -n[2], rn(t, Vt(t, Bt))
        }),
        sn = Object.freeze({
            create: jt,
            identity: function (t) {
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
            },
            setAxisAngle: It,
            getAxisAngle: function (t, a) {
                var r = 2 * Math.acos(a[3]),
                    u = Math.sin(r / 2);
                return u > n ? (t[0] = a[0] / u, t[1] = a[1] / u, t[2] = a[2] / u) : (t[0] = 1, t[1] = 0, t[2] = 0), r
            },
            getAngle: function (t, n) {
                var a = Jt(t, n);
                return Math.acos(2 * a * a - 1)
            },
            multiply: St,
            rotateX: Et,
            rotateY: Ot,
            rotateZ: Tt,
            calculateW: function (t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2];
                return t[0] = a, t[1] = r, t[2] = u, t[3] = Math.sqrt(Math.abs(1 - a * a - r * r - u * u)), t
            },
            exp: Dt,
            ln: Ft,
            pow: function (t, n, a) {
                return Ft(t, n), Ht(t, t, a), Dt(t, t), t
            },
            slerp: Lt,
            random: function (t) {
                var n = r(),
                    a = r(),
                    u = r(),
                    e = Math.sqrt(1 - n),
                    o = Math.sqrt(n);
                return t[0] = e * Math.sin(2 * Math.PI * a), t[1] = e * Math.cos(2 * Math.PI * a), t[2] = o * Math.sin(2 * Math.PI * u), t[3] = o * Math.cos(2 * Math.PI * u), t
            },
            invert: function (t, n) {
                var a = n[0],
                    r = n[1],
                    u = n[2],
                    e = n[3],
                    o = a * a + r * r + u * u + e * e,
                    i = o ? 1 / o : 0;
                return t[0] = -a * i, t[1] = -r * i, t[2] = -u * i, t[3] = e * i, t
            },
            conjugate: function (t, n) {
                return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t
            },
            fromMat3: Vt,
            fromEuler: function (t, n, a, r) {
                var u = .5 * Math.PI / 180;
                n *= u, a *= u, r *= u;
                var e = Math.sin(n),
                    o = Math.cos(n),
                    i = Math.sin(a),
                    c = Math.cos(a),
                    h = Math.sin(r),
                    s = Math.cos(r);
                return t[0] = e * c * s - o * i * h, t[1] = o * i * s + e * c * h, t[2] = o * c * h - e * i * s, t[3] = o * c * s + e * i * h, t
            },
            str: function (t) {
                return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            },
            clone: Nt,
            fromValues: kt,
            copy: Ut,
            set: Wt,
            add: Ct,
            mul: Gt,
            scale: Ht,
            dot: Jt,
            lerp: Kt,
            length: $t,
            len: tn,
            squaredLength: nn,
            sqrLen: an,
            normalize: rn,
            exactEquals: un,
            equals: en,
            rotationTo: on,
            sqlerp: cn,
            setAxes: hn
        });

    function Mn(t, n, a) {
        var r = .5 * a[0],
            u = .5 * a[1],
            e = .5 * a[2],
            o = n[0],
            i = n[1],
            c = n[2],
            h = n[3];
        return t[0] = o, t[1] = i, t[2] = c, t[3] = h, t[4] = r * h + u * c - e * i, t[5] = u * h + e * o - r * c, t[6] = e * h + r * i - u * o, t[7] = -r * o - u * i - e * c, t
    }

    function fn(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t
    }
    var ln = Ut;
    var vn = Ut;

    function bn(t, n, a) {
        var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = a[4],
            c = a[5],
            h = a[6],
            s = a[7],
            M = n[4],
            f = n[5],
            l = n[6],
            v = n[7],
            b = a[0],
            m = a[1],
            d = a[2],
            x = a[3];
        return t[0] = r * x + o * b + u * d - e * m, t[1] = u * x + o * m + e * b - r * d, t[2] = e * x + o * d + r * m - u * b, t[3] = o * x - r * b - u * m - e * d, t[4] = r * s + o * i + u * h - e * c + M * x + v * b + f * d - l * m, t[5] = u * s + o * c + e * i - r * h + f * x + v * m + l * b - M * d, t[6] = e * s + o * h + r * c - u * i + l * x + v * d + M * m - f * b, t[7] = o * s - r * i - u * c - e * h + v * x - M * b - f * m - l * d, t
    }
    var mn = bn;
    var dn = Jt;
    var xn = $t,
        pn = xn,
        yn = nn,
        qn = yn;
    var gn = Object.freeze({
        create: function () {
            var t = new a(8);
            return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[3] = 1, t
        },
        clone: function (t) {
            var n = new a(8);
            return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n
        },
        fromValues: function (t, n, r, u, e, o, i, c) {
            var h = new a(8);
            return h[0] = t, h[1] = n, h[2] = r, h[3] = u, h[4] = e, h[5] = o, h[6] = i, h[7] = c, h
        },
        fromRotationTranslationValues: function (t, n, r, u, e, o, i) {
            var c = new a(8);
            c[0] = t, c[1] = n, c[2] = r, c[3] = u;
            var h = .5 * e,
                s = .5 * o,
                M = .5 * i;
            return c[4] = h * u + s * r - M * n, c[5] = s * u + M * t - h * r, c[6] = M * u + h * n - s * t, c[7] = -h * t - s * n - M * r, c
        },
        fromRotationTranslation: Mn,
        fromTranslation: function (t, n) {
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = .5 * n[0], t[5] = .5 * n[1], t[6] = .5 * n[2], t[7] = 0, t
        },
        fromRotation: function (t, n) {
            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t
        },
        fromMat4: function (t, n) {
            var r = jt();
            P(r, n);
            var u = new a(3);
            return R(u, n), Mn(t, r, u), t
        },
        copy: fn,
        identity: function (t) {
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t
        },
        set: function (t, n, a, r, u, e, o, i, c) {
            return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t[6] = i, t[7] = c, t
        },
        getReal: ln,
        getDual: function (t, n) {
            return t[0] = n[4], t[1] = n[5], t[2] = n[6], t[3] = n[7], t
        },
        setReal: vn,
        setDual: function (t, n) {
            return t[4] = n[0], t[5] = n[1], t[6] = n[2], t[7] = n[3], t
        },
        getTranslation: function (t, n) {
            var a = n[4],
                r = n[5],
                u = n[6],
                e = n[7],
                o = -n[0],
                i = -n[1],
                c = -n[2],
                h = n[3];
            return t[0] = 2 * (a * h + e * o + r * c - u * i), t[1] = 2 * (r * h + e * i + u * o - a * c), t[2] = 2 * (u * h + e * c + a * i - r * o), t
        },
        translate: function (t, n, a) {
            var r = n[0],
                u = n[1],
                e = n[2],
                o = n[3],
                i = .5 * a[0],
                c = .5 * a[1],
                h = .5 * a[2],
                s = n[4],
                M = n[5],
                f = n[6],
                l = n[7];
            return t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = o * i + u * h - e * c + s, t[5] = o * c + e * i - r * h + M, t[6] = o * h + r * c - u * i + f, t[7] = -r * i - u * c - e * h + l, t
        },
        rotateX: function (t, n, a) {
            var r = -n[0],
                u = -n[1],
                e = -n[2],
                o = n[3],
                i = n[4],
                c = n[5],
                h = n[6],
                s = n[7],
                M = i * o + s * r + c * e - h * u,
                f = c * o + s * u + h * r - i * e,
                l = h * o + s * e + i * u - c * r,
                v = s * o - i * r - c * u - h * e;
            return Et(t, n, a), r = t[0], u = t[1], e = t[2], o = t[3], t[4] = M * o + v * r + f * e - l * u, t[5] = f * o + v * u + l * r - M * e, t[6] = l * o + v * e + M * u - f * r, t[7] = v * o - M * r - f * u - l * e, t
        },
        rotateY: function (t, n, a) {
            var r = -n[0],
                u = -n[1],
                e = -n[2],
                o = n[3],
                i = n[4],
                c = n[5],
                h = n[6],
                s = n[7],
                M = i * o + s * r + c * e - h * u,
                f = c * o + s * u + h * r - i * e,
                l = h * o + s * e + i * u - c * r,
                v = s * o - i * r - c * u - h * e;
            return Ot(t, n, a), r = t[0], u = t[1], e = t[2], o = t[3], t[4] = M * o + v * r + f * e - l * u, t[5] = f * o + v * u + l * r - M * e, t[6] = l * o + v * e + M * u - f * r, t[7] = v * o - M * r - f * u - l * e, t
        },
        rotateZ: function (t, n, a) {
            var r = -n[0],
                u = -n[1],
                e = -n[2],
                o = n[3],
                i = n[4],
                c = n[5],
                h = n[6],
                s = n[7],
                M = i * o + s * r + c * e - h * u,
                f = c * o + s * u + h * r - i * e,
                l = h * o + s * e + i * u - c * r,
                v = s * o - i * r - c * u - h * e;
            return Tt(t, n, a), r = t[0], u = t[1], e = t[2], o = t[3], t[4] = M * o + v * r + f * e - l * u, t[5] = f * o + v * u + l * r - M * e, t[6] = l * o + v * e + M * u - f * r, t[7] = v * o - M * r - f * u - l * e, t
        },
        rotateByQuatAppend: function (t, n, a) {
            var r = a[0],
                u = a[1],
                e = a[2],
                o = a[3],
                i = n[0],
                c = n[1],
                h = n[2],
                s = n[3];
            return t[0] = i * o + s * r + c * e - h * u, t[1] = c * o + s * u + h * r - i * e, t[2] = h * o + s * e + i * u - c * r, t[3] = s * o - i * r - c * u - h * e, i = n[4], c = n[5], h = n[6], s = n[7], t[4] = i * o + s * r + c * e - h * u, t[5] = c * o + s * u + h * r - i * e, t[6] = h * o + s * e + i * u - c * r, t[7] = s * o - i * r - c * u - h * e, t
        },
        rotateByQuatPrepend: function (t, n, a) {
            var r = n[0],
                u = n[1],
                e = n[2],
                o = n[3],
                i = a[0],
                c = a[1],
                h = a[2],
                s = a[3];
            return t[0] = r * s + o * i + u * h - e * c, t[1] = u * s + o * c + e * i - r * h, t[2] = e * s + o * h + r * c - u * i, t[3] = o * s - r * i - u * c - e * h, i = a[4], c = a[5], h = a[6], s = a[7], t[4] = r * s + o * i + u * h - e * c, t[5] = u * s + o * c + e * i - r * h, t[6] = e * s + o * h + r * c - u * i, t[7] = o * s - r * i - u * c - e * h, t
        },
        rotateAroundAxis: function (t, a, r, u) {
            if (Math.abs(u) < n) return fn(t, a);
            var e = Math.hypot(r[0], r[1], r[2]);
            u *= .5;
            var o = Math.sin(u),
                i = o * r[0] / e,
                c = o * r[1] / e,
                h = o * r[2] / e,
                s = Math.cos(u),
                M = a[0],
                f = a[1],
                l = a[2],
                v = a[3];
            t[0] = M * s + v * i + f * h - l * c, t[1] = f * s + v * c + l * i - M * h, t[2] = l * s + v * h + M * c - f * i, t[3] = v * s - M * i - f * c - l * h;
            var b = a[4],
                m = a[5],
                d = a[6],
                x = a[7];
            return t[4] = b * s + x * i + m * h - d * c, t[5] = m * s + x * c + d * i - b * h, t[6] = d * s + x * h + b * c - m * i, t[7] = x * s - b * i - m * c - d * h, t
        },
        add: function (t, n, a) {
            return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t[6] = n[6] + a[6], t[7] = n[7] + a[7], t
        },
        multiply: bn,
        mul: mn,
        scale: function (t, n, a) {
            return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t
        },
        dot: dn,
        lerp: function (t, n, a, r) {
            var u = 1 - r;
            return dn(n, a) < 0 && (r = -r), t[0] = n[0] * u + a[0] * r, t[1] = n[1] * u + a[1] * r, t[2] = n[2] * u + a[2] * r, t[3] = n[3] * u + a[3] * r, t[4] = n[4] * u + a[4] * r, t[5] = n[5] * u + a[5] * r, t[6] = n[6] * u + a[6] * r, t[7] = n[7] * u + a[7] * r, t
        },
        invert: function (t, n) {
            var a = yn(n);
            return t[0] = -n[0] / a, t[1] = -n[1] / a, t[2] = -n[2] / a, t[3] = n[3] / a, t[4] = -n[4] / a, t[5] = -n[5] / a, t[6] = -n[6] / a, t[7] = n[7] / a, t
        },
        conjugate: function (t, n) {
            return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t[4] = -n[4], t[5] = -n[5], t[6] = -n[6], t[7] = n[7], t
        },
        length: xn,
        len: pn,
        squaredLength: yn,
        sqrLen: qn,
        normalize: function (t, n) {
            var a = yn(n);
            if (a > 0) {
                a = Math.sqrt(a);
                var r = n[0] / a,
                    u = n[1] / a,
                    e = n[2] / a,
                    o = n[3] / a,
                    i = n[4],
                    c = n[5],
                    h = n[6],
                    s = n[7],
                    M = r * i + u * c + e * h + o * s;
                t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = (i - r * M) / a, t[5] = (c - u * M) / a, t[6] = (h - e * M) / a, t[7] = (s - o * M) / a
            }
            return t
        },
        str: function (t) {
            return "quat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ")"
        },
        exactEquals: function (t, n) {
            return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7]
        },
        equals: function (t, a) {
            var r = t[0],
                u = t[1],
                e = t[2],
                o = t[3],
                i = t[4],
                c = t[5],
                h = t[6],
                s = t[7],
                M = a[0],
                f = a[1],
                l = a[2],
                v = a[3],
                b = a[4],
                m = a[5],
                d = a[6],
                x = a[7];
            return Math.abs(r - M) <= n * Math.max(1, Math.abs(r), Math.abs(M)) && Math.abs(u - f) <= n * Math.max(1, Math.abs(u), Math.abs(f)) && Math.abs(e - l) <= n * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(o - v) <= n * Math.max(1, Math.abs(o), Math.abs(v)) && Math.abs(i - b) <= n * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(c - m) <= n * Math.max(1, Math.abs(c), Math.abs(m)) && Math.abs(h - d) <= n * Math.max(1, Math.abs(h), Math.abs(d)) && Math.abs(s - x) <= n * Math.max(1, Math.abs(s), Math.abs(x))
        }
    });

    function An() {
        var t = new a(2);
        return a != Float32Array && (t[0] = 0, t[1] = 0), t
    }

    function wn(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t
    }

    function Rn(t, n, a) {
        return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t
    }

    function zn(t, n, a) {
        return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t
    }

    function Pn(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1];
        return Math.hypot(a, r)
    }

    function jn(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1];
        return a * a + r * r
    }

    function In(t) {
        var n = t[0],
            a = t[1];
        return Math.hypot(n, a)
    }

    function Sn(t) {
        var n = t[0],
            a = t[1];
        return n * n + a * a
    }
    var En = In,
        On = wn,
        Tn = Rn,
        Dn = zn,
        Fn = Pn,
        Ln = jn,
        Vn = Sn,
        Qn = function () {
            var t = An();
            return function (n, a, r, u, e, o) {
                var i, c;
                for (a || (a = 2), r || (r = 0), c = u ? Math.min(u * a + r, n.length) : n.length, i = r; i < c; i += a) t[0] = n[i], t[1] = n[i + 1], e(t, t, o), n[i] = t[0], n[i + 1] = t[1];
                return n
            }
        }(),
        Yn = Object.freeze({
            create: An,
            clone: function (t) {
                var n = new a(2);
                return n[0] = t[0], n[1] = t[1], n
            },
            fromValues: function (t, n) {
                var r = new a(2);
                return r[0] = t, r[1] = n, r
            },
            copy: function (t, n) {
                return t[0] = n[0], t[1] = n[1], t
            },
            set: function (t, n, a) {
                return t[0] = n, t[1] = a, t
            },
            add: function (t, n, a) {
                return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t
            },
            subtract: wn,
            multiply: Rn,
            divide: zn,
            ceil: function (t, n) {
                return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t
            },
            floor: function (t, n) {
                return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t
            },
            min: function (t, n, a) {
                return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t
            },
            max: function (t, n, a) {
                return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t
            },
            round: function (t, n) {
                return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t
            },
            scale: function (t, n, a) {
                return t[0] = n[0] * a, t[1] = n[1] * a, t
            },
            scaleAndAdd: function (t, n, a, r) {
                return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t
            },
            distance: Pn,
            squaredDistance: jn,
            length: In,
            squaredLength: Sn,
            negate: function (t, n) {
                return t[0] = -n[0], t[1] = -n[1], t
            },
            inverse: function (t, n) {
                return t[0] = 1 / n[0], t[1] = 1 / n[1], t
            },
            normalize: function (t, n) {
                var a = n[0],
                    r = n[1],
                    u = a * a + r * r;
                return u > 0 && (u = 1 / Math.sqrt(u)), t[0] = n[0] * u, t[1] = n[1] * u, t
            },
            dot: function (t, n) {
                return t[0] * n[0] + t[1] * n[1]
            },
            cross: function (t, n, a) {
                var r = n[0] * a[1] - n[1] * a[0];
                return t[0] = t[1] = 0, t[2] = r, t
            },
            lerp: function (t, n, a, r) {
                var u = n[0],
                    e = n[1];
                return t[0] = u + r * (a[0] - u), t[1] = e + r * (a[1] - e), t
            },
            random: function (t, n) {
                n = n || 1;
                var a = 2 * r() * Math.PI;
                return t[0] = Math.cos(a) * n, t[1] = Math.sin(a) * n, t
            },
            transformMat2: function (t, n, a) {
                var r = n[0],
                    u = n[1];
                return t[0] = a[0] * r + a[2] * u, t[1] = a[1] * r + a[3] * u, t
            },
            transformMat2d: function (t, n, a) {
                var r = n[0],
                    u = n[1];
                return t[0] = a[0] * r + a[2] * u + a[4], t[1] = a[1] * r + a[3] * u + a[5], t
            },
            transformMat3: function (t, n, a) {
                var r = n[0],
                    u = n[1];
                return t[0] = a[0] * r + a[3] * u + a[6], t[1] = a[1] * r + a[4] * u + a[7], t
            },
            transformMat4: function (t, n, a) {
                var r = n[0],
                    u = n[1];
                return t[0] = a[0] * r + a[4] * u + a[12], t[1] = a[1] * r + a[5] * u + a[13], t
            },
            rotate: function (t, n, a, r) {
                var u = n[0] - a[0],
                    e = n[1] - a[1],
                    o = Math.sin(r),
                    i = Math.cos(r);
                return t[0] = u * i - e * o + a[0], t[1] = u * o + e * i + a[1], t
            },
            angle: function (t, n) {
                var a = t[0],
                    r = t[1],
                    u = n[0],
                    e = n[1],
                    o = a * a + r * r;
                o > 0 && (o = 1 / Math.sqrt(o));
                var i = u * u + e * e;
                i > 0 && (i = 1 / Math.sqrt(i));
                var c = (a * u + r * e) * o * i;
                return c > 1 ? 0 : c < -1 ? Math.PI : Math.acos(c)
            },
            zero: function (t) {
                return t[0] = 0, t[1] = 0, t
            },
            str: function (t) {
                return "vec2(" + t[0] + ", " + t[1] + ")"
            },
            exactEquals: function (t, n) {
                return t[0] === n[0] && t[1] === n[1]
            },
            equals: function (t, a) {
                var r = t[0],
                    u = t[1],
                    e = a[0],
                    o = a[1];
                return Math.abs(r - e) <= n * Math.max(1, Math.abs(r), Math.abs(e)) && Math.abs(u - o) <= n * Math.max(1, Math.abs(u), Math.abs(o))
            },
            len: En,
            sub: On,
            mul: Tn,
            div: Dn,
            dist: Fn,
            sqrDist: Ln,
            sqrLen: Vn,
            forEach: Qn
        });
    t.glMatrix = e, t.mat2 = s, t.mat2d = b, t.mat3 = q, t.mat4 = E, t.quat = sn, t.quat2 = gn, t.vec2 = Yn, t.vec3 = $, t.vec4 = Pt, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});

// ["glMatrix", "mat2", "mat2d", "mat3", "mat4", "quat", "quat2", "vec2", "vec3", "vec4"]
window.glMatrix = glMatrix;
window.mat2 = glMatrix.mat2;
window.mat2d = glMatrix.mat2d;
window.mat3 = glMatrix.mat3;
window.mat4 = glMatrix.mat4;
window.quat = glMatrix.quat;
window.quat2 = glMatrix.quat2;
window.vec2 = glMatrix.vec2;
window.vec3 = glMatrix.vec3;
window.vec4 = glMatrix.vec4;


CABLES.exportedPatch = {
    settings: {
        opExample: [],
        licence: "cc-by",
        isPublic: !1
    },
    ops: [{
        opId: "b0472a1d-db16-4ba6-8787-f300fbdc77bb",
        objName: "Ops.Gl.MainLoop",
        id: "caa8e99d-6e0f-4c2b-9f6d-d2d9e2106b04",
        uiAttribs: {
            translate: {
                x: -132,
                y: -260
            },
            subPatch: 0,
            notWorkingMsg: null,
            selected: !1
        },
        portsIn: [{
            name: "FPS Limit",
            value: 60
        }, {
            name: "Reduce FPS loading",
            value: !1
        }, {
            name: "Clear",
            value: !0
        }, {
            name: "ClearAlpha",
            value: !0
        }, {
            name: "Fullscreen Button",
            value: !1
        }, {
            name: "Active",
            value: !0
        }, {
            name: "Hires Displays",
            value: !1
        }],
        portsOut: [{
            name: "trigger"
        }, {
            name: "width",
            value: 640
        }, {
            name: "height",
            value: 360
        }]
    }, {
        opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
        objName: "Ops.Gl.Matrix.Transform",
        id: "0135459b-3979-45a8-9577-4ca9dc0a73a8",
        uiAttribs: {
            translate: {
                x: -324,
                y: -40
            },
            subPatch: 0,
            notWorkingMsg: null,
            selected: !1
        },
        portsIn: [{
            name: "render",
            links: [{
                portIn: "render",
                portOut: "Next",
                objIn: "0135459b-3979-45a8-9577-4ca9dc0a73a8",
                objOut: "4de6df2f-a303-4a90-85b1-2dca9268fcc5"
            }]
        }, {
            name: "posX",
            links: [{
                portIn: "posX",
                portOut: "index",
                objIn: "0135459b-3979-45a8-9577-4ca9dc0a73a8",
                objOut: "a869dfef-1971-4149-82b1-a7b24d5abbd5"
            }]
        }, {
            name: "posY",
            links: [{
                portIn: "posY",
                portOut: "index",
                objIn: "0135459b-3979-45a8-9577-4ca9dc0a73a8",
                objOut: "4de6df2f-a303-4a90-85b1-2dca9268fcc5"
            }]
        }, {
            name: "posZ",
            value: -.81
        }, {
            name: "scale",
            value: 1.26
        }, {
            name: "rotX",
            links: [{
                portIn: "rotX",
                portOut: "result",
                objIn: "0135459b-3979-45a8-9577-4ca9dc0a73a8",
                objOut: "013e5a0a-084a-425f-9dea-ea26d07d865e"
            }]
        }, {
            name: "rotY",
            links: [{
                portIn: "rotY",
                portOut: "Time",
                objIn: "0135459b-3979-45a8-9577-4ca9dc0a73a8",
                objOut: "017b8caa-a108-4b4e-b6ba-17c9440e1e55"
            }]
        }, {
            name: "rotZ",
            value: 0
        }],
        portsOut: [{
            name: "trigger"
        }]
    }, {
        opId: "4db917cc-2cef-43f4-83d5-38c4572fe943",
        objName: "Ops.Gl.Meshes.Circle",
        id: "baf4e0e1-a16a-44be-9e3d-329514b6c94e",
        uiAttribs: {
            translate: {
                x: -324,
                y: 100
            },
            subPatch: 0,
            notWorkingMsg: null,
            selected: !1
        },
        portsIn: [{
            name: "render",
            links: [{
                portIn: "render",
                portOut: "trigger",
                objIn: "baf4e0e1-a16a-44be-9e3d-329514b6c94e",
                objOut: "1d24ff77-91cc-4831-8ddd-7329bcff5cde"
            }]
        }, {
            name: "radius",
            value: 1.28
        }, {
            name: "innerRadius",
            value: 1
        }, {
            name: "segments",
            value: 4
        }, {
            name: "percent",
            value: 1
        }, {
            name: "steps",
            value: .47
        }, {
            name: "invertSteps",
            value: !0
        }, {
            name: "mapping index",
            value: 0
        }, {
            name: "mapping",
            value: "flat"
        }, {
            name: "Spline",
            value: !0
        }, {
            name: "Draw",
            value: !0
        }],
        portsOut: [{
            name: "trigger"
        }, {
            name: "geometry"
        }]
    }, {
        opId: "30979dbb-f4e7-4b1e-8e10-80c2ca4a3f88",
        objName: "Ops.Math.RandomNumbers_v2",
        id: "820f8116-ba86-4bf4-9845-879cadb97344",
        uiAttribs: {
            translate: {
                x: 12,
                y: -80
            },
            subPatch: 0,
            selected: !1,
            notWorkingMsg: null
        },
        portsIn: [{
            name: "index",
            links: [{
                portIn: "index",
                portOut: "Time",
                objIn: "820f8116-ba86-4bf4-9845-879cadb97344",
                objOut: "017b8caa-a108-4b4e-b6ba-17c9440e1e55"
            }]
        }, {
            name: "random seed",
            value: 86936.88
        }, {
            name: "Min",
            value: 0
        }, {
            name: "Max",
            value: .7
        }, {
            name: "Integer",
            value: !0
        }],
        portsOut: [{
            name: "X",
            value: 0
        }, {
            name: "Y"
        }, {
            name: "Z"
        }]
    }, {
        opId: "aac7f721-208f-411a-adb3-79adae2e471a",
        objName: "Ops.Anim.Timer_v2",
        id: "017b8caa-a108-4b4e-b6ba-17c9440e1e55",
        uiAttribs: {
            translate: {
                x: 120,
                y: -180
            },
            subPatch: 0,
            selected: !1,
            notWorkingMsg: null
        },
        portsIn: [{
            name: "Speed",
            value: 2
        }, {
            name: "Play",
            value: !0
        }, {
            name: "Reset",
            value: 0
        }, {
            name: "Sync to timeline",
            value: !1
        }],
        portsOut: [{
            name: "Time"
        }]
    }, {
        opId: "a4deea80-db97-478f-ad1a-5ee30f2f47cc",
        objName: "Ops.Trigger.Repeat_v2",
        id: "4de6df2f-a303-4a90-85b1-2dca9268fcc5",
        uiAttribs: {
            translate: {
                x: -324,
                y: -120
            },
            subPatch: 0,
            selected: !1,
            notWorkingMsg: null
        },
        portsIn: [{
            name: "Execute",
            links: [{
                portIn: "Execute",
                portOut: "Next",
                objIn: "4de6df2f-a303-4a90-85b1-2dca9268fcc5",
                objOut: "a869dfef-1971-4149-82b1-a7b24d5abbd5"
            }]
        }, {
            name: "Repeats",
            value: 19
        }, {
            name: "Direction index",
            value: 0
        }, {
            name: "Direction",
            value: "Forward"
        }],
        portsOut: [{
            name: "Next"
        }, {
            name: "index"
        }]
    }, {
        opId: "ec55d252-3843-41b1-b731-0482dbd9e72b",
        objName: "Ops.Gl.Shader.BasicMaterial_v3",
        id: "1d24ff77-91cc-4831-8ddd-7329bcff5cde",
        uiAttribs: {
            translate: {
                x: -336,
                y: 40
            },
            subPatch: 0,
            selected: !1,
            notWorkingMsg: null
        },
        portsIn: [{
            name: "render",
            links: [{
                portIn: "render",
                portOut: "trigger",
                objIn: "1d24ff77-91cc-4831-8ddd-7329bcff5cde",
                objOut: "0135459b-3979-45a8-9577-4ca9dc0a73a8"
            }]
        }, {
            name: "r",
            links: [{
                portIn: "r",
                portOut: "Z",
                objIn: "1d24ff77-91cc-4831-8ddd-7329bcff5cde",
                objOut: "820f8116-ba86-4bf4-9845-879cadb97344"
            }]
        }, {
            name: "g",
            links: [{
                portIn: "g",
                portOut: "Y",
                objIn: "1d24ff77-91cc-4831-8ddd-7329bcff5cde",
                objOut: "820f8116-ba86-4bf4-9845-879cadb97344"
            }]
        }, {
            name: "b",
            value: .7033233187487177
        }, {
            name: "a",
            value: 1
        }, {
            name: "texture",
            value: 0
        }, {
            name: "colorizeTexture",
            value: !1
        }, {
            name: "textureOpacity",
            value: 0
        }, {
            name: "Alpha Mask Source index",
            value: 0
        }, {
            name: "Alpha Mask Source",
            value: "Luminance"
        }, {
            name: "Opacity TexCoords Transform",
            value: !1
        }, {
            name: "Discard Transparent Pixels",
            value: !1
        }, {
            name: "diffuseRepeatX",
            value: 1
        }, {
            name: "diffuseRepeatY",
            value: 1
        }, {
            name: "Tex Offset X",
            value: 0
        }, {
            name: "Tex Offset Y",
            value: 0
        }, {
            name: "billboard",
            value: !1
        }],
        portsOut: [{
            name: "trigger"
        }, {
            name: "shader"
        }]
    }, {
        opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
        objName: "Ops.Gl.Matrix.Transform",
        id: "87514858-d025-4c67-a120-4aba8ef5ba09",
        uiAttribs: {
            translate: {
                x: -240,
                y: 160
            },
            subPatch: 0,
            notWorkingMsg: null,
            selected: !1
        },
        portsIn: [{
            name: "render",
            links: [{
                portIn: "render",
                portOut: "trigger",
                objIn: "87514858-d025-4c67-a120-4aba8ef5ba09",
                objOut: "baf4e0e1-a16a-44be-9e3d-329514b6c94e"
            }]
        }, {
            name: "posX",
            value: -1.662
        }, {
            name: "posY",
            value: .52
        }, {
            name: "posZ",
            value: -1.796
        }, {
            name: "scale",
            value: 2.26
        }, {
            name: "rotX",
            value: 0
        }, {
            name: "rotY",
            value: .2
        }, {
            name: "rotZ",
            value: 0
        }],
        portsOut: [{
            name: "trigger"
        }]
    }, {
        opId: "4db917cc-2cef-43f4-83d5-38c4572fe943",
        objName: "Ops.Gl.Meshes.Circle",
        id: "5c6e81e0-c927-46d3-92bc-2a6c90cb3438",
        uiAttribs: {
            translate: {
                x: -192,
                y: 260
            },
            subPatch: 0,
            notWorkingMsg: null,
            selected: !1
        },
        portsIn: [{
            name: "render",
            links: [{
                portIn: "render",
                portOut: "trigger",
                objIn: "5c6e81e0-c927-46d3-92bc-2a6c90cb3438",
                objOut: "aa7bcb33-e01f-4d35-9709-8920d0f262bf"
            }]
        }, {
            name: "radius",
            value: 2.04
        }, {
            name: "innerRadius",
            value: .837
        }, {
            name: "segments",
            value: 4
        }, {
            name: "percent",
            value: 1
        }, {
            name: "steps",
            value: .17
        }, {
            name: "invertSteps",
            value: !0
        }, {
            name: "mapping index",
            value: 0
        }, {
            name: "mapping",
            value: "round"
        }, {
            name: "Spline",
            value: !0
        }, {
            name: "Draw",
            value: !0
        }],
        portsOut: [{
            name: "trigger"
        }, {
            name: "geometry"
        }]
    }, {
        opId: "ec55d252-3843-41b1-b731-0482dbd9e72b",
        objName: "Ops.Gl.Shader.BasicMaterial_v3",
        id: "aa7bcb33-e01f-4d35-9709-8920d0f262bf",
        uiAttribs: {
            translate: {
                x: -204,
                y: 220
            },
            subPatch: 0,
            selected: !1,
            notWorkingMsg: null
        },
        portsIn: [{
            name: "render",
            links: [{
                portIn: "render",
                portOut: "trigger",
                objIn: "aa7bcb33-e01f-4d35-9709-8920d0f262bf",
                objOut: "87514858-d025-4c67-a120-4aba8ef5ba09"
            }]
        }, {
            name: "r",
            links: [{
                portIn: "r",
                portOut: "Z",
                objIn: "aa7bcb33-e01f-4d35-9709-8920d0f262bf",
                objOut: "820f8116-ba86-4bf4-9845-879cadb97344"
            }]
        }, {
            name: "g",
            links: [{
                portIn: "g",
                portOut: "Z",
                objIn: "aa7bcb33-e01f-4d35-9709-8920d0f262bf",
                objOut: "820f8116-ba86-4bf4-9845-879cadb97344"
            }]
        }, {
            name: "b",
            links: [{
                portIn: "b",
                portOut: "Y",
                objIn: "aa7bcb33-e01f-4d35-9709-8920d0f262bf",
                objOut: "820f8116-ba86-4bf4-9845-879cadb97344"
            }]
        }, {
            name: "a",
            value: 1
        }, {
            name: "texture",
            value: 0
        }, {
            name: "colorizeTexture",
            value: !1
        }, {
            name: "textureOpacity",
            value: 0
        }, {
            name: "Alpha Mask Source index",
            value: 0
        }, {
            name: "Alpha Mask Source",
            value: "Luminance"
        }, {
            name: "Opacity TexCoords Transform",
            value: !1
        }, {
            name: "Discard Transparent Pixels",
            value: !1
        }, {
            name: "diffuseRepeatX",
            value: 1
        }, {
            name: "diffuseRepeatY",
            value: 1
        }, {
            name: "Tex Offset X",
            value: 0
        }, {
            name: "Tex Offset Y",
            value: 0
        }, {
            name: "billboard",
            value: !1
        }],
        portsOut: [{
            name: "trigger"
        }, {
            name: "shader"
        }]
    }, {
        opId: "650baeb1-db2d-4781-9af6-ab4e9d4277be",
        objName: "Ops.Gl.Matrix.Transform",
        id: "bd511293-b373-452a-847f-a0a406f74b99",
        uiAttribs: {
            translate: {
                x: -12,
                y: 140
            },
            subPatch: 0,
            notWorkingMsg: null,
            selected: !1
        },
        portsIn: [{
            name: "render",
            links: [{
                portIn: "render",
                portOut: "trigger",
                objIn: "bd511293-b373-452a-847f-a0a406f74b99",
                objOut: "5c6e81e0-c927-46d3-92bc-2a6c90cb3438"
            }]
        }, {
            name: "posX",
            value: -1.073
        }, {
            name: "posY",
            value: .306
        }, {
            name: "posZ",
            value: .236
        }, {
            name: "scale",
            value: 1.38
        }, {
            name: "rotX",
            links: [{
                portIn: "rotX",
                portOut: "Time",
                objIn: "bd511293-b373-452a-847f-a0a406f74b99",
                objOut: "017b8caa-a108-4b4e-b6ba-17c9440e1e55"
            }]
        }, {
            name: "rotY",
            value: 0
        }, {
            name: "rotZ",
            value: 0
        }],
        portsOut: [{
            name: "trigger"
        }]
    }, {
        opId: "4db917cc-2cef-43f4-83d5-38c4572fe943",
        objName: "Ops.Gl.Meshes.Circle",
        id: "adb66d38-0ad3-4105-b762-d0f30936112a",
        uiAttribs: {
            translate: {
                x: -36,
                y: 300
            },
            subPatch: 0,
            notWorkingMsg: null,
            selected: !1
        },
        portsIn: [{
            name: "render",
            links: [{
                portIn: "render",
                portOut: "trigger",
                objIn: "adb66d38-0ad3-4105-b762-d0f30936112a",
                objOut: "392d6e60-67ef-479a-a87f-39df532e15b4"
            }]
        }, {
            name: "radius",
            value: 3.96
        }, {
            name: "innerRadius",
            value: .8
        }, {
            name: "segments",
            value: 4
        }, {
            name: "percent",
            value: 1
        }, {
            name: "steps",
            value: .17
        }, {
            name: "invertSteps",
            value: !0
        }, {
            name: "mapping index",
            value: 0
        }, {
            name: "mapping",
            value: "round"
        }, {
            name: "Spline",
            value: !0
        }, {
            name: "Draw",
            value: !0
        }],
        portsOut: [{
            name: "trigger",
            value: 0
        }, {
            name: "geometry"
        }]
    }, {
        opId: "ec55d252-3843-41b1-b731-0482dbd9e72b",
        objName: "Ops.Gl.Shader.BasicMaterial_v3",
        id: "392d6e60-67ef-479a-a87f-39df532e15b4",
        uiAttribs: {
            translate: {
                x: 48,
                y: 220
            },
            subPatch: 0,
            selected: !1,
            notWorkingMsg: null
        },
        portsIn: [{
            name: "render",
            links: [{
                portIn: "render",
                portOut: "trigger",
                objIn: "392d6e60-67ef-479a-a87f-39df532e15b4",
                objOut: "bd511293-b373-452a-847f-a0a406f74b99"
            }]
        }, {
            name: "r",
            links: [{
                portIn: "r",
                portOut: "X",
                objIn: "392d6e60-67ef-479a-a87f-39df532e15b4",
                objOut: "beb8e504-7829-4e59-87b4-9ecd461a9b3a"
            }]
        }, {
            name: "g",
            value: .7010291787882059
        }, {
            name: "b",
            links: [{
                portIn: "b",
                portOut: "Z",
                objIn: "392d6e60-67ef-479a-a87f-39df532e15b4",
                objOut: "beb8e504-7829-4e59-87b4-9ecd461a9b3a"
            }]
        }, {
            name: "a",
            value: 1
        }, {
            name: "texture",
            value: 0
        }, {
            name: "colorizeTexture",
            value: !1
        }, {
            name: "textureOpacity",
            value: 0
        }, {
            name: "Alpha Mask Source index",
            value: 0
        }, {
            name: "Alpha Mask Source",
            value: "Luminance"
        }, {
            name: "Opacity TexCoords Transform",
            value: !1
        }, {
            name: "Discard Transparent Pixels",
            value: !1
        }, {
            name: "diffuseRepeatX",
            value: 1
        }, {
            name: "diffuseRepeatY",
            value: 1
        }, {
            name: "Tex Offset X",
            value: 0
        }, {
            name: "Tex Offset Y",
            value: 0
        }, {
            name: "billboard",
            value: !1
        }],
        portsOut: [{
            name: "trigger"
        }, {
            name: "shader"
        }]
    }, {
        opId: "1bbdae06-fbb2-489b-9bcc-36c9d65bd441",
        objName: "Ops.Math.Multiply",
        id: "013e5a0a-084a-425f-9dea-ea26d07d865e",
        uiAttribs: {
            translate: {
                x: 168,
                y: -80
            },
            subPatch: 0,
            selected: !1,
            notWorkingMsg: null
        },
        portsIn: [{
            name: "number1",
            links: [{
                portIn: "number1",
                portOut: "Time",
                objIn: "013e5a0a-084a-425f-9dea-ea26d07d865e",
                objOut: "017b8caa-a108-4b4e-b6ba-17c9440e1e55"
            }]
        }, {
            name: "number2",
            value: 2.16
        }],
        portsOut: [{
            name: "result"
        }]
    }, {
        opId: "30979dbb-f4e7-4b1e-8e10-80c2ca4a3f88",
        objName: "Ops.Math.RandomNumbers_v2",
        id: "beb8e504-7829-4e59-87b4-9ecd461a9b3a",
        uiAttribs: {
            translate: {
                x: 156,
                y: 20
            },
            subPatch: 0,
            selected: !0,
            notWorkingMsg: null
        },
        portsIn: [{
            name: "index",
            links: [{
                portIn: "index",
                portOut: "result",
                objIn: "beb8e504-7829-4e59-87b4-9ecd461a9b3a",
                objOut: "013e5a0a-084a-425f-9dea-ea26d07d865e"
            }]
        }, {
            name: "random seed",
            value: 86947.39
        }, {
            name: "Min",
            value: 0
        }, {
            name: "Max",
            value: 5.42
        }, {
            name: "Integer",
            value: !0
        }],
        portsOut: [{
            name: "X"
        }, {
            name: "Y",
            value: 1
        }, {
            name: "Z"
        }]
    }, {
        opId: "a4deea80-db97-478f-ad1a-5ee30f2f47cc",
        objName: "Ops.Trigger.Repeat_v2",
        id: "a869dfef-1971-4149-82b1-a7b24d5abbd5",
        uiAttribs: {
            translate: {
                x: -216,
                y: -180
            },
            subPatch: 0,
            selected: !1,
            notWorkingMsg: null
        },
        portsIn: [{
            name: "Execute",
            links: [{
                portIn: "Execute",
                portOut: "trigger",
                objIn: "a869dfef-1971-4149-82b1-a7b24d5abbd5",
                objOut: "caa8e99d-6e0f-4c2b-9f6d-d2d9e2106b04"
            }]
        }, {
            name: "Repeats",
            value: 7
        }, {
            name: "Direction index",
            value: 0
        }, {
            name: "Direction",
            value: "Forward"
        }],
        portsOut: [{
            name: "Next"
        }, {
            name: "index"
        }]
    }],
    users: [],
    userOps: [],
    tags: [],
    _id: "5e33451a6163a31d0ffe18d0",
    name: "no cubo",
    userId: "5e334214a5b6a41d2b53acee",
    created: "2020-01-30T21:05:30.726Z",
    updated: "2020-05-28T04:52:19.390Z",
    __v: 6,
    shortId: "0_uhU-",
    cachedUsername: "BLUU",
    views: 0,
    cachedNumComments: 0,
    cachedNumFavs: 0,
    statsAdmin: {
        filenameScreenshots: [],
        filenameExports: [],
        filenameAssets: [],
        hasOldScreenshots: !1,
        hasOldExports: !1,
        sizeScreenshots: 0,
        sizeExports: 0,
        sizeAssets: 0
    },
    opsHash: "962fca3b9e2d2f90b08b64b06a0a3dfaa061b303",
    ui: {
        viewBox: {
            x: -496.04597806192277,
            y: -294.6126970410124,
            w: 838.6304316057876,
            h: 760.2537557547795
        },
        timeLineLength: 20,
        bookmarks: [],
        subPatchViewBoxes: [{
            x: -390.38251283830704,
            y: -209.57987144626122,
            w: 642.2963102981754,
            h: 582.2686177469441
        }],
        renderer: {
            w: 640,
            h: 360,
            s: 1
        }
    },
    updatedByUser: "BLUU",
    exports: 1
};
var CABLES = CABLES || {};
CABLES.OPS = CABLES.OPS || {};
var Ops = Ops || {};
Ops.Gl = Ops.Gl || {}, Ops.Anim = Ops.Anim || {}, Ops.Math = Ops.Math || {}, Ops.Trigger = Ops.Trigger || {}, Ops.Gl.Matrix = Ops.Gl.Matrix || {}, Ops.Gl.Meshes = Ops.Gl.Meshes || {}, Ops.Gl.Shader = Ops.Gl.Shader || {}, Ops.Gl.MainLoop = function () {
    CABLES.Op.apply(this, arguments);
    const e = this,
        a = e.inValue("FPS Limit", 0),
        t = e.outTrigger("trigger"),
        n = e.outValue("width"),
        r = e.outValue("height"),
        o = e.inValueBool("Reduce FPS loading"),
        i = e.inValueBool("Clear", !0),
        s = e.inValueBool("ClearAlpha", !0),
        l = e.inValueBool("Fullscreen Button", !1),
        u = e.inValueBool("Active", !0),
        d = e.inValueBool("Hires Displays", !1);
    e.onAnimFrame = h, d.onChange = function () {
        d.get() ? e.patch.cgl.pixelDensity = window.devicePixelRatio : e.patch.cgl.pixelDensity = 1, e.patch.cgl.updateSize(), CABLES.UI && gui.setLayout()
    }, u.onChange = function () {
        e.patch.removeOnAnimFrame(e), u.get() ? (e.setUiAttrib({
            extendTitle: ""
        }), e.onAnimFrame = h, e.patch.addOnAnimFrame(e), e.log("adding again!")) : e.setUiAttrib({
            extendTitle: "Inactive"
        })
    };
    var c = e.patch.cgl,
        p = 0,
        f = 0;
    e.patch.cgl || e.uiAttr({
        error: "No webgl cgl context"
    });
    var g = vec3.create();
    vec3.set(g, 0, 0, 0);
    var b = vec3.create();
    vec3.set(b, 0, 0, -2), l.onChange = v, setTimeout(v, 100);
    var m = null;

    function v() {
        function a() {
            m && (m.style.display = "block")
        }
        if (e.patch.cgl.canvas.addEventListener("mouseleave", function () {
                m && (m.style.display = "none")
            }), e.patch.cgl.canvas.addEventListener("mouseenter", a), l.get()) {
            if (!m) {
                m = document.createElement("div");
                var t = e.patch.cgl.canvas.parentElement;
                t && t.appendChild(m), m.addEventListener("mouseenter", a), m.addEventListener("click", function (e) {
                    CABLES.UI && !e.shiftKey ? gui.cycleRendererSize() : c.fullScreen()
                })
            }
            m.style.padding = "10px", m.style.position = "absolute", m.style.right = "5px", m.style.top = "5px", m.style.width = "20px", m.style.height = "20px", m.style.cursor = "pointer", m.style["border-radius"] = "40px", m.style.background = "#444", m.style["z-index"] = "9999", m.style.display = "none", m.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="width:20px;height:20px;" xml:space="preserve" width="512px" height="512px"><g><path d="M173.792,301.792L21.333,454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667C4.776,362.667,0,367.442,0,373.333V480     c0,5.891,4.776,10.667,10.667,10.667h106.667c5.891,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667H36.416     l152.459-152.459c4.093-4.237,3.975-10.99-0.262-15.083C184.479,297.799,177.926,297.799,173.792,301.792z" fill="#FFFFFF"/><path d="M480,0H373.333c-5.891,0-10.667,4.776-10.667,10.667c0,5.891,4.776,10.667,10.667,10.667h80.917L301.792,173.792     c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262     L469.333,36.416v80.917c0,5.891,4.776,10.667,10.667,10.667s10.667-4.776,10.667-10.667V10.667C490.667,4.776,485.891,0,480,0z" fill="#FFFFFF"/><path d="M36.416,21.333h80.917c5.891,0,10.667-4.776,10.667-10.667C128,4.776,123.224,0,117.333,0H10.667     C4.776,0,0,4.776,0,10.667v106.667C0,123.224,4.776,128,10.667,128c5.891,0,10.667-4.776,10.667-10.667V36.416l152.459,152.459     c4.237,4.093,10.99,3.975,15.083-0.262c3.992-4.134,3.992-10.687,0-14.82L36.416,21.333z" fill="#FFFFFF"/><path d="M480,362.667c-5.891,0-10.667,4.776-10.667,10.667v80.917L316.875,301.792c-4.237-4.093-10.99-3.976-15.083,0.261     c-3.993,4.134-3.993,10.688,0,14.821l152.459,152.459h-80.917c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667     H480c5.891,0,10.667-4.776,10.667-10.667V373.333C490.667,367.442,485.891,362.667,480,362.667z" fill="#FFFFFF"/></g></svg>'
        } else m && (m.style.display = "none", m.remove(), m = null)
    }

    function h(a) {
        if (!u.get()) return;
        if (c.aborted || 0 === c.canvas.clientWidth || 0 === c.canvas.clientHeight) return;
        const l = performance.now();
        e.patch.loading.getProgress() < 1 && o.get() && (e.patch.config.fpsLimit = 5), -1 != c.canvasWidth ? (c.canvasWidth == n.get() && c.canvasHeight == r.get() || (n.set(c.canvasWidth), r.set(c.canvasHeight)), CABLES.now() - f > 1e3 && (CGL.fpsReport = CGL.fpsReport || [], e.patch.loading.getProgress() >= 1 && 0 !== f && CGL.fpsReport.push(p), p = 0, f = CABLES.now()), CGL.MESH.lastShader = null, CGL.MESH.lastMesh = null, c.renderStart(c, g, b), i.get() && (c.gl.clearColor(0, 0, 0, 1), c.gl.clear(c.gl.COLOR_BUFFER_BIT | c.gl.DEPTH_BUFFER_BIT)), t.trigger(), CGL.MESH.lastMesh && CGL.MESH.lastMesh.unBind(), CGL.Texture.previewTexture && (CGL.Texture.texturePreviewer || (CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(c)), CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture)), c.renderEnd(c), s.get() && (c.gl.clearColor(1, 1, 1, 1), c.gl.colorMask(!1, !1, !1, !0), c.gl.clear(c.gl.COLOR_BUFFER_BIT), c.gl.colorMask(!0, !0, !0, !0)), c.frameStore.phong || (c.frameStore.phong = {}), p++, CGL.profileData.profileMainloopMs = performance.now() - l) : c.setCanvas(e.patch.config.glCanvasId)
    }
    a.onChange = function () {
        e.patch.config.fpsLimit = a.get() || 0
    }, e.onDelete = function () {
        c.gl.clearColor(0, 0, 0, 0), c.gl.clear(c.gl.COLOR_BUFFER_BIT | c.gl.DEPTH_BUFFER_BIT)
    }, e.patch.loading.setOnFinishedLoading(function (t) {
        e.patch.config.fpsLimit = a.get()
    })
}, Ops.Gl.MainLoop.prototype = new CABLES.Op, CABLES.OPS["b0472a1d-db16-4ba6-8787-f300fbdc77bb"] = {
    f: Ops.Gl.MainLoop,
    objName: "Ops.Gl.MainLoop"
}, Ops.Gl.Matrix.Transform = function () {
    CABLES.Op.apply(this, arguments);
    const e = this,
        a = e.inTrigger("render"),
        t = e.inValue("posX", 0),
        n = e.inValue("posY", 0),
        r = e.inValue("posZ", 0),
        o = e.inValue("scale", 1),
        i = e.inValue("rotX", 0),
        s = e.inValue("rotY", 0),
        l = e.inValue("rotZ", 0),
        u = e.outTrigger("trigger");
    e.setPortGroup("Rotation", [i, s, l]), e.setPortGroup("Position", [t, n, r]), e.setPortGroup("Scale", [o]), e.setUiAxisPorts(t, n, r);
    const d = e.patch.cgl;
    var c = vec3.create(),
        p = vec3.create(),
        f = mat4.create();
    mat4.identity(f);
    var g = !1,
        b = !1,
        m = !0,
        v = !0,
        h = !0;

    function O() {
        mat4.identity(f), b && mat4.translate(f, f, c), 0 !== i.get() && mat4.rotateX(f, f, i.get() * CGL.DEG2RAD), 0 !== s.get() && mat4.rotateY(f, f, s.get() * CGL.DEG2RAD), 0 !== l.get() && mat4.rotateZ(f, f, l.get() * CGL.DEG2RAD), g && mat4.scale(f, f, p), h = !1
    }
    i.onChange = s.onChange = l.onChange = function () {
        h = !0
    }, t.onChange = n.onChange = r.onChange = function () {
        m = !0
    }, o.onChange = function () {
        v = !0
    }, a.onTriggered = function () {
        var a = !1;
        m && (! function () {
            b = !1, (0 !== t.get() || 0 !== n.get() || 0 !== r.get()) && (b = !0);
            vec3.set(c, t.get(), n.get(), r.get()), m = !1
        }(), a = !0), v && (g = !0, vec3.set(p, o.get(), o.get(), o.get()), v = !1, a = !0), h && (a = !0), a && O(), d.pushModelMatrix(), mat4.multiply(d.mMatrix, d.mMatrix, f), u.trigger(), d.popModelMatrix(), CABLES.UI && CABLES.UI.showCanvasTransforms && gui.setTransform(e.id, t.get(), n.get(), r.get()), e.isCurrentUiOp() && gui.setTransformGizmo({
            posX: t,
            posY: n,
            posZ: r
        })
    }, e.transform3d = function () {
        return {
            pos: [t, n, r]
        }
    }, O()
}, Ops.Gl.Matrix.Transform.prototype = new CABLES.Op, CABLES.OPS["650baeb1-db2d-4781-9af6-ab4e9d4277be"] = {
    f: Ops.Gl.Matrix.Transform,
    objName: "Ops.Gl.Matrix.Transform"
}, Ops.Gl.Meshes.Circle = function () {
    CABLES.Op.apply(this, arguments);
    const e = this,
        a = e.inTrigger("render"),
        t = e.inValue("radius", .5),
        n = e.inValueSlider("innerRadius", 0),
        r = e.inValueInt("segments", 40),
        o = e.inValueSlider("percent", 1),
        i = e.inValue("steps", 0),
        s = e.inValueBool("invertSteps", !1),
        l = e.inSwitch("mapping", ["flat", "round"]),
        u = e.inValueBool("Spline", !1),
        d = e.inValueBool("Draw", !0),
        c = e.outTrigger("trigger"),
        p = e.outObject("geometry");
    e.setPortGroup("Size", [t, n]), e.setPortGroup("Display", [o, i, s]), l.set("flat"), l.onChange = r.onChange = t.onChange = n.onChange = o.onChange = i.onChange = s.onChange = u.onChange = function () {
        h = !0
    }, p.ignoreValueSerialize = !0;
    const f = e.patch.cgl;
    var g = new CGL.Geometry("circle"),
        b = null,
        m = 0,
        v = null,
        h = !0;
    e.preRender = a.onTriggered = function () {
        CGL.TextureEffect.checkOpNotInTextureEffect(e) && (h && function () {
            var e = Math.max(3, Math.floor(r.get()));
            g.clear();
            var a = [],
                d = [],
                c = [],
                m = [],
                v = [],
                O = 0,
                x = 0,
                A = 0,
                C = 0,
                M = 0,
                S = 0,
                T = 0,
                I = 0,
                L = 0,
                E = 0,
                y = 0,
                R = 0,
                B = 0,
                _ = 0,
                P = 0,
                G = [];
            if (u.get()) {
                var U = 0,
                    j = 0,
                    w = [];
                for (O = 0; O <= e * o.get(); O++) x = 360 / e * O * CGL.DEG2RAD, _ = Math.cos(x) * t.get(), P = Math.sin(x) * t.get(), B = .5, O > 0 && (G.push(U), G.push(j), G.push(0), R = 1 - (O - 1) / e, w.push(R, B)), G.push(_), G.push(P), G.push(0), U = _, j = P;
                g.setPointVertices(G)
            } else if (n.get() <= 0) {
                for (O = 0; O <= e * o.get(); O++) x = 360 / e * O * CGL.DEG2RAD, _ = Math.cos(x) * t.get(), P = Math.sin(x) * t.get(), "flat" == l.get() ? (R = (Math.cos(x) + 1) / 2, B = 1 - (Math.sin(x) + 1) / 2, E = .5, y = .5) : "round" == l.get() && (B = 0, E = R = 1 - O / e, y = 1), a.push([_, P, 0], [A, C, 0], [0, 0, 0]), d.push(R, B, M, S, E, y), c.push(0, 0, 1, 0, 0, 1, 0, 0, 1), m.push(1, 0, 0, 1, 0, 0, 1, 0, 0), v.push(0, 1, 0, 0, 1, 0, 0, 1, 0), M = R, S = B, A = _, C = P;
                (g = CGL.Geometry.buildFromFaces(a)).vertexNormals = c, g.tangents = m, g.biTangents = v, g.texCoords = d
            } else {
                var F = 0,
                    D = e * o.get();
                for (O = 0; O <= D; O++) {
                    F++, x = 360 / e * O * CGL.DEG2RAD, _ = Math.cos(x) * t.get(), P = Math.sin(x) * t.get();
                    var N = Math.cos(x) * n.get() * t.get(),
                        V = Math.sin(x) * n.get() * t.get();
                    "round" == l.get() && (B = 0, E = R = 1 - O / e, y = 1), (0 === i.get() || F % parseInt(i.get(), 10) == 0 && !s.get() || F % parseInt(i.get(), 10) != 0 && s.get()) && (a.push([_, P, 0], [A, C, 0], [N, V, 0]), a.push([N, V, 0], [A, C, 0], [T, I, 0]), d.push(R, 0, M, 0, E, 1, R, 1, M, 0, L, 1), c.push(0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1), m.push(1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0), v.push(0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0)), L = E, y, M = R, S = B, A = _, C = P, T = N, I = V
                }(g = CGL.Geometry.buildFromFaces(a)).vertexNormals = c, g.tangents = m, g.biTangents = v, "flat" == l.get() ? g.mapTexCoords2d() : g.texCoords = d
            }
            if (p.set(null), p.set(g), 0 == g.vertices.length) return;
            b && b.dispose();
            b = null, b = new CGL.Mesh(f, g), h = !1
        }(), (v = f.getShader()) && (m = v.glPrimitive, u.get() && (v.glPrimitive = f.gl.LINE_STRIP), d.get() && b.render(v), c.trigger(), v.glPrimitive = m))
    }, e.onDelete = function () {
        b && b.dispose()
    }
}, Ops.Gl.Meshes.Circle.prototype = new CABLES.Op, CABLES.OPS["4db917cc-2cef-43f4-83d5-38c4572fe943"] = {
    f: Ops.Gl.Meshes.Circle,
    objName: "Ops.Gl.Meshes.Circle"
}, Ops.Math.RandomNumbers_v2 = function () {
    CABLES.Op.apply(this, arguments);
    const e = this,
        a = e.inValueInt("index", 0),
        t = e.inValueFloat("random seed"),
        n = e.inValueFloat("Min", 0),
        r = e.inValueFloat("Max", 1),
        o = e.outValue("X"),
        i = e.outValue("Y"),
        s = e.outValue("Z"),
        l = e.inValueBool("Integer", !1);
    var u = [],
        d = 100;

    function c() {
        var e = Math.floor(a.get()) || 0;
        3 * e >= u.length && (d = e + 100, p()), e *= 3, o.set(u[e + 0]), i.set(u[e + 1]), s.set(u[e + 2])
    }

    function p() {
        Math.randomSeed = t.get();
        var e = l.get(),
            a = n.get(),
            o = r.get();
        if (u.length = Math.floor(3 * d) || 300, e)
            for (i = 0; i < u.length; i += 3) u[i + 0] = Math.floor(Math.seededRandom() * (o - a + 1) + a), u[i + 1] = Math.floor(Math.seededRandom() * (o - a + 1) + a), u[i + 2] = Math.floor(Math.seededRandom() * (o - a + 1) + a);
        else
            for (var i = 0; i < u.length; i += 3) u[i + 0] = Math.seededRandom() * (o - a) + a, u[i + 1] = Math.seededRandom() * (o - a) + a, u[i + 2] = Math.seededRandom() * (o - a) + a
    }
    t.set(Math.round(99999 * Math.random())), e.setPortGroup("Value Range", [n, r]), a.onChange = c, p(), e.init = l.onChange = r.onChange = n.onChange = t.onChange = l.onChange = function () {
        p(), c()
    }
}, Ops.Math.RandomNumbers_v2.prototype = new CABLES.Op, CABLES.OPS["30979dbb-f4e7-4b1e-8e10-80c2ca4a3f88"] = {
    f: Ops.Math.RandomNumbers_v2,
    objName: "Ops.Math.RandomNumbers_v2"
}, Ops.Anim.Timer_v2 = function () {
    CABLES.Op.apply(this, arguments);
    const e = this,
        a = e.inValue("Speed", 1),
        t = e.inValueBool("Play", !0),
        n = e.inTriggerButton("Reset"),
        r = e.inValueBool("Sync to timeline", !1),
        o = e.outValue("Time");
    e.setPortGroup("Controls", [t, n, a]);
    const i = new CABLES.Timer;
    var s = null,
        l = 0,
        u = !1;

    function d() {
        t.get() ? (i.play(), e.patch.addOnAnimFrame(e)) : (i.pause(), e.patch.removeOnAnimFrame(e))
    }
    t.onChange = d, d(), n.onTriggered = function () {
        l = 0, s = null, i.setTime(0), o.set(0)
    }, r.onChange = function () {
        u = r.get(), t.setUiAttribs({
            greyout: u
        }), n.setUiAttribs({
            greyout: u
        })
    }, e.onAnimFrame = function (e) {
        if (i.isPlaying())
            if (void 0 !== CABLES.overwriteTime) o.set(CABLES.overwriteTime * a.get());
            else if (u) o.set(e * a.get());
        else {
            i.update();
            var t = i.get();
            if (null === s) return void(s = t);
            var n = Math.abs(t - s);
            s = t, (l += n * a.get()) != l && (l = 0), o.set(l)
        }
    }
}, Ops.Anim.Timer_v2.prototype = new CABLES.Op, CABLES.OPS["aac7f721-208f-411a-adb3-79adae2e471a"] = {
    f: Ops.Anim.Timer_v2,
    objName: "Ops.Anim.Timer_v2"
}, Ops.Trigger.Repeat_v2 = function () {
    CABLES.Op.apply(this, arguments);
    const e = this,
        a = e.inTrigger("Execute"),
        t = e.inValueInt("Repeats", 5),
        n = e.inSwitch("Direction", ["Forward", "Backward"], "Forward"),
        r = e.outTrigger("Next"),
        o = e.addOutPort(new CABLES.Port(e, "index"));

    function i() {
        "Forward" == n.get() ? a.onTriggered = s : a.onTriggered = l
    }

    function s() {
        const e = Math.floor(t.get());
        for (var a = 0; a < e; a++) o.set(a), r.trigger()
    }

    function l() {
        for (var e = Math.floor(t.get()) - 1; e > -1; e--) o.set(e), r.trigger()
    }
    n.onChange = i, i()
}, Ops.Trigger.Repeat_v2.prototype = new CABLES.Op, CABLES.OPS["a4deea80-db97-478f-ad1a-5ee30f2f47cc"] = {
    f: Ops.Trigger.Repeat_v2,
    objName: "Ops.Trigger.Repeat_v2"
}, Ops.Gl.Shader.BasicMaterial_v3 = function () {
    CABLES.Op.apply(this, arguments);
    const e = this,
        a = "{{MODULES_HEAD}}\n\nIN vec2 texCoord;\nUNI vec4 color;\n// UNI float r;\n// UNI float g;\n// UNI float b;\n// UNI float a;\n\n#ifdef HAS_TEXTURES\n    IN vec2 texCoordOrig;\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D tex;\n    #endif\n    #ifdef HAS_TEXTURE_OPACITY\n        UNI sampler2D texOpacity;\n   #endif\n#endif\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n    vec4 col=color;\n\n    #ifdef HAS_TEXTURES\n        vec2 uv=texCoord;\n\n        #ifdef HAS_TEXTURE_DIFFUSE\n            col=texture(tex,uv);\n\n            #ifdef COLORIZE_TEXTURE\n                col.r*=color.r;\n                col.g*=color.g;\n                col.b*=color.b;\n            #endif\n        #endif\n        col.a*=color.a;\n        #ifdef HAS_TEXTURE_OPACITY\n            #ifdef TRANSFORMALPHATEXCOORDS\n                uv=texCoordOrig;\n            #endif\n            #ifdef ALPHA_MASK_ALPHA\n                col.a*=texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_LUMI\n                col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,uv).rgb);\n            #endif\n            #ifdef ALPHA_MASK_R\n                col.a*=texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_G\n                col.a*=texture(texOpacity,uv).g;\n            #endif\n            #ifdef ALPHA_MASK_B\n                col.a*=texture(texOpacity,uv).b;\n            #endif\n            // #endif\n        #endif\n    #endif\n\n    {{MODULE_COLOR}}\n\n    #ifdef DISCARDTRANS\n        if(col.a<0.2) discard;\n    #endif\n\n    outColor = col;\n}\n",
        t = "IN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN float attrVertIndex;\n\n{{MODULES_HEAD}}\n\nOUT vec3 norm;\nOUT vec2 texCoord;\nOUT vec2 texCoordOrig;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\n#ifdef HAS_TEXTURES\n    UNI float diffuseRepeatX;\n    UNI float diffuseRepeatY;\n    UNI float texOffsetX;\n    UNI float texOffsetY;\n#endif\n\nvoid main()\n{\n    mat4 mMatrix=modelMatrix;\n    mat4 mvMatrix;\n\n    norm=attrVertNormal;\n    texCoordOrig=attrTexCoord;\n    texCoord=attrTexCoord;\n    #ifdef HAS_TEXTURES\n        texCoord.x=texCoord.x*diffuseRepeatX+texOffsetX;\n        texCoord.y=(1.0-texCoord.y)*diffuseRepeatY+texOffsetY;\n    #endif\n\n    vec4 pos = vec4(vPosition, 1.0);\n\n    #ifdef BILLBOARD\n       vec3 position=vPosition;\n       mvMatrix=viewMatrix*modelMatrix;\n\n       gl_Position = projMatrix * mvMatrix * vec4((\n           position.x * vec3(\n               mvMatrix[0][0],\n               mvMatrix[1][0],\n               mvMatrix[2][0] ) +\n           position.y * vec3(\n               mvMatrix[0][1],\n               mvMatrix[1][1],\n               mvMatrix[2][1]) ), 1.0);\n    #endif\n\n    {{MODULE_VERTEX_POSITION}}\n\n    #ifndef BILLBOARD\n        mvMatrix=viewMatrix * mMatrix;\n    #endif\n\n\n    #ifndef BILLBOARD\n        // gl_Position = projMatrix * viewMatrix * modelMatrix * pos;\n        gl_Position = projMatrix * mvMatrix * pos;\n    #endif\n}\n",
        n = e.inTrigger("render"),
        r = e.outTrigger("trigger"),
        o = e.outObject("shader");
    o.ignoreValueSerialize = !0;
    const i = e.patch.cgl;
    e.toWorkPortsNeedToBeLinked(n);
    const s = new CGL.Shader(i, "basicmaterialnew");
    s.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]), s.setSource(t, a), o.set(s), n.onTriggered = T;
    const l = e.inValueSlider("r", Math.random()),
        u = e.inValueSlider("g", Math.random()),
        d = e.inValueSlider("b", Math.random()),
        c = e.inValueSlider("a", 1);
    l.setUiAttribs({
        colorPick: !0
    });
    new CGL.Uniform(s, "4f", "color", l, u, d, c);
    const p = e.inTexture("texture");
    var f = null;
    p.onChange = L;
    const g = e.inValueBool("colorizeTexture", !1),
        b = e.inTexture("textureOpacity");
    var m = null;
    const v = e.inSwitch("Alpha Mask Source", ["Luminance", "R", "G", "B", "A"], "Luminance");
    v.setUiAttribs({
        greyout: !0
    }), b.onChange = I;
    const h = e.inValueBool("Opacity TexCoords Transform", !1),
        O = e.inValueBool("Discard Transparent Pixels"),
        x = e.inValue("diffuseRepeatX", 1),
        A = e.inValue("diffuseRepeatY", 1),
        C = e.inValue("Tex Offset X", 0),
        M = e.inValue("Tex Offset Y", 0),
        S = (new CGL.Uniform(s, "f", "diffuseRepeatX", x), new CGL.Uniform(s, "f", "diffuseRepeatY", A), new CGL.Uniform(s, "f", "texOffsetX", C), new CGL.Uniform(s, "f", "texOffsetY", M), e.inValueBool("billboard", !1));

    function T() {
        s && (i.pushShader(s), s.popTextures(), f && p.get() && s.pushTexture(f, p.get().tex), m && b.get() && s.pushTexture(m, b.get().tex), r.trigger(), i.popShader())
    }

    function I() {
        if (b.get()) {
            if (null !== m) return;
            s.removeUniform("texOpacity"), s.define("HAS_TEXTURE_OPACITY"), m || (m = new CGL.Uniform(s, "t", "texOpacity", 1)), v.setUiAttribs({
                greyout: !1
            }), h.setUiAttribs({
                greyout: !1
            })
        } else s.removeUniform("texOpacity"), s.removeDefine("HAS_TEXTURE_OPACITY"), m = null, v.setUiAttribs({
            greyout: !0
        }), h.setUiAttribs({
            greyout: !0
        });
        E()
    }

    function L() {
        p.get() ? (s.hasDefine("HAS_TEXTURE_DIFFUSE") || s.define("HAS_TEXTURE_DIFFUSE"), f || (f = new CGL.Uniform(s, "t", "texDiffuse", 0)), x.setUiAttribs({
            greyout: !1
        }), A.setUiAttribs({
            greyout: !1
        }), C.setUiAttribs({
            greyout: !1
        }), M.setUiAttribs({
            greyout: !1
        }), g.setUiAttribs({
            greyout: !1
        })) : (s.removeUniform("texDiffuse"), s.removeDefine("HAS_TEXTURE_DIFFUSE"), f = null, x.setUiAttribs({
            greyout: !0
        }), A.setUiAttribs({
            greyout: !0
        }), C.setUiAttribs({
            greyout: !0
        }), M.setUiAttribs({
            greyout: !0
        }), g.setUiAttribs({
            greyout: !0
        }))
    }

    function E() {
        s.toggleDefine("COLORIZE_TEXTURE", g.get()), s.toggleDefine("TRANSFORMALPHATEXCOORDS", h.get()), s.toggleDefine("DISCARDTRANS", O.get()), s.toggleDefine("BILLBOARD", S.get()), s.toggleDefine("ALPHA_MASK_ALPHA", "Alpha Channel" == v.get()), s.toggleDefine("ALPHA_MASK_LUMI", "Luminance" == v.get()), s.toggleDefine("ALPHA_MASK_R", "R" == v.get()), s.toggleDefine("ALPHA_MASK_G", "G" == v.get()), s.toggleDefine("ALPHA_MASK_B", "B" == v.get())
    }
    v.onChange = S.onChange = O.onChange = h.onChange = g.onChange = E, e.setPortGroup("Color", [l, u, d, c]), e.setPortGroup("Color Texture", [p, g]), e.setPortGroup("Opacity", [b, v, O, h]), e.setPortGroup("Texture Transform", [x, A, C, M]), I(), L(), e.preRender = function () {
        s.bind(), T()
    }
}, Ops.Gl.Shader.BasicMaterial_v3.prototype = new CABLES.Op, CABLES.OPS["ec55d252-3843-41b1-b731-0482dbd9e72b"] = {
    f: Ops.Gl.Shader.BasicMaterial_v3,
    objName: "Ops.Gl.Shader.BasicMaterial_v3"
}, Ops.Math.Multiply = function () {
    CABLES.Op.apply(this, arguments);
    const e = this.inValueFloat("number1"),
        a = this.inValueFloat("number2"),
        t = this.outValue("result");

    function n() {
        const n = e.get(),
            r = a.get();
        t.set(n * r)
    }
    e.set(1), a.set(2), e.onChange = n, a.onChange = n, n()
}, Ops.Math.Multiply.prototype = new CABLES.Op, CABLES.OPS["1bbdae06-fbb2-489b-9bcc-36c9d65bd441"] = {
    f: Ops.Math.Multiply,
    objName: "Ops.Math.Multiply"
}, window.addEventListener("load", function (e) {
    CABLES.jsLoaded = new Event("CABLES.jsLoaded"), document.dispatchEvent(CABLES.jsLoaded)
});