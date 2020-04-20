(function (t) {
    function e(e) {
        for (var i, a, n = e[0], h = e[1], c = e[2], u = 0, l = []; u < n.length; u++) a = n[u], Object.prototype.hasOwnProperty.call(s, a) && s[a] && l.push(s[a][0]), s[a] = 0;
        for (i in h) Object.prototype.hasOwnProperty.call(h, i) && (t[i] = h[i]);
        d && d(e);
        while (l.length) l.shift()();
        return o.push.apply(o, c || []), r()
    }

    function r() {
        for (var t, e = 0; e < o.length; e++) {
            for (var r = o[e], i = !0, n = 1; n < r.length; n++) {
                var h = r[n];
                0 !== s[h] && (i = !1)
            }
            i && (o.splice(e--, 1), t = a(a.s = r[0]))
        }
        return t
    }

    var i = {}, s = {app: 0}, o = [];

    function a(e) {
        if (i[e]) return i[e].exports;
        var r = i[e] = {i: e, l: !1, exports: {}};
        return t[e].call(r.exports, r, r.exports, a), r.l = !0, r.exports
    }

    a.m = t, a.c = i, a.d = function (t, e, r) {
        a.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
    }, a.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, a.t = function (t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (a.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var i in t) a.d(r, i, function (e) {
            return t[e]
        }.bind(null, i));
        return r
    }, a.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "/";
    var n = window["webpackJsonp"] = window["webpackJsonp"] || [], h = n.push.bind(n);
    n.push = e, n = n.slice();
    for (var c = 0; c < n.length; c++) e(n[c]);
    var d = h;
    o.push([0, "chunk-vendors"]), r()
})({
    0: function (t, e, r) {
        t.exports = r("56d7")
    }, "56d7": function (t, e, r) {
        "use strict";
        r.r(e);
        r("e260"), r("e6cf"), r("cca6"), r("a79d");
        var i = r("2b0e"), s = function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("div", {attrs: {id: "app"}}, [r("div", {attrs: {id: "tetris-wrapper"}}, [r("a", {
                    staticClass: "tetris__partners",
                    attrs: {href: "http://bit.ly/2QtB5WJ", target: "_blank"}
                }, [r("img", {
                    staticClass: "tetris__img",
                    attrs: {src: t.img.Logo, alt: ""}
                }), r("div", {staticClass: "tetris__desc"}, [t._v(" Партнерський матеріал ")])]), t.start ? t._e() : r("div", {staticClass: "firstscreen"}, [r("h2", {staticClass: "firstscreen__desc"}, [t._v(" Зіграй у тетріс і збудуй Київ! ")]), r("button", {
                    staticClass: "tetris__nextbutton",
                    on: {
                        click: function (e) {
                            t.start = !0
                        }
                    }
                }, [t._v("Почати гру!")])]), t.start ? r("Tetris") : t._e()], 1)])
            }, o = [], a = function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("div", {attrs: {id: "tetrishold"}}, [r("div", {
                    ref: "boardControl",
                    attrs: {id: "tetris", tabindex: "1"},
                    on: {keydown: t.keydown, keyup: t.keyup}
                }), r("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "settings" !== t.state,
                        expression: "state !== 'settings'"
                    }], staticClass: "game"
                }, [r("div", {
                    staticClass: "main",
                    style: {"--brickSize": t.brickSize + "vw"}
                }, [r("div", {staticClass: "left"}, [1 === t.step ? r("tetris-board", {
                    ref: "board",
                    staticClass: "board",
                    model: {
                        value: t.board, callback: function (e) {
                            t.board = e
                        }, expression: "board"
                    }
                }) : t._e(), 2 === t.step ? r("tetris-board", {
                    ref: "board",
                    staticClass: "board biblio",
                    model: {
                        value: t.board, callback: function (e) {
                            t.board = e
                        }, expression: "board"
                    }
                }) : t._e(), r("div", {staticClass: "tetris__rule"}, [r("button", {
                    on: {
                        click: function (e) {
                            return t.move(-1)
                        }
                    }
                }, [r("svg", {
                    staticStyle: {"enable-background": "new 0 0 492 492"},
                    attrs: {version: "1.1", viewBox: "0 0 492 492", "xml:space": "preserve"}
                }, [r("path", {attrs: {d: "M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12\n\t\t\tC361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084\n\t\t\tc-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864\n\t\t\tl16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"}})])]), r("button", {
                    on: {
                        click: function (e) {
                            return t.move(1)
                        }
                    }
                }, [r("svg", {
                    staticStyle: {"enable-background": "new 0 0 451.846 451.847"},
                    attrs: {x: "0px", y: "0px", viewBox: "0 0 451.846 451.847", "xml:space": "preserve"}
                }, [r("path", {attrs: {d: "M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744\n\t\tL278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284\n\t\tc6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"}})])]), r("button", {
                    on: {
                        click: function (e) {
                            return t.rotate(1)
                        }
                    }
                }, [r("svg", {
                    staticStyle: {"enable-background": "new 0 0 492 492"},
                    attrs: {
                        version: "1.1",
                        id: "Layer_1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 492 492",
                        "xml:space": "preserve"
                    }
                }, [r("g", [r("path", {attrs: {d: "M464.9,284.408c0.053,0,0.105,0.004,0.157,0.004h0.055L464.9,284.408z"}}), r("path", {attrs: {d: "M484.004,292.48c-5.063-5.086-11.821-8.025-18.947-8.068H330.468c-14.824,0-26.676,12.3-26.676,27.12v22.78\n\t\t\t\tc0,7.156,2.7,13.9,7.788,18.992c5.088,5.092,11.784,7.896,18.94,7.896l39.052,0.008c-32.06,34.332-76.68,53.864-123.672,53.864\n\t\t\t\tc-93.22,0-169.072-75.844-169.072-169.072s75.84-169.072,169.064-169.072c69.796,0,133.336,43.82,158.108,109.04\n\t\t\t\tc5.632,14.816,20.068,24.776,35.916,24.776c4.66,0,9.248-0.848,13.632-2.52c19.8-7.516,29.784-29.748,22.26-49.544\n\t\t\t\tC439.772,63.84,347.376,0.112,245.888,0.112C110.308,0.112,0,110.416,0,246s110.236,245.888,245.816,245.888\n\t\t\t\tc62.584,0,123.272-24.632,169.364-67.872v21.788c0,14.824,12.208,26.812,27.032,26.812h22.78\n\t\t\t\tc14.824,0,27.008-11.988,27.008-26.812v-134.18C492,304.444,489.116,297.564,484.004,292.48z"}})])])]), r("button", {on: {click: t.moveDown}}, [r("svg", {
                    staticStyle: {"enable-background": "new 0 0 491.996 491.996"},
                    attrs: {viewBox: "0 0 491.996 491.996", "xml:space": "preserve"}
                }, [r("path", {attrs: {d: "M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848\n\t\t\tL62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128\n\t\t\tc-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084\n\t\t\tc7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224\n\t\t\tC491.996,136.902,489.204,130.046,484.132,124.986z"}})])])])], 1), r("div", {staticClass: "info"}, [r("tetris-board", {
                    ref: "preview",
                    staticClass: "preview",
                    model: {
                        value: t.preview, callback: function (e) {
                            t.preview = e
                        }, expression: "preview"
                    }
                })], 1)])])])
            }, n = [], h = (r("4de4"), r("d81d"), r("38cf"), r("18a5"), r("2909")), c = r("3835"), d = r("b85c"),
            u = function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("div", t._l(t.value.h, (function (e) {
                    return r("div", {key: e, staticClass: "row"}, t._l(t.value.w, (function (i) {
                        return r("div", {
                            key: i,
                            staticClass: "col",
                            style: {backgroundImage: "url(" + t.value[i - 1 + (e - 1) * t.value.w] + ")"}
                        })
                    })), 0)
                })), 0)
            }, l = [], p = {
                name: "TetrisBoard", props: ["value"], mounted: function () {
                }, methods: {
                    update: function () {
                        this.$forceUpdate()
                    }
                }
            }, f = p, b = r("2877"), v = Object(b["a"])(f, u, l, !1, null, "2b4c1388", null), g = v.exports, m = r("e06d"),
            w = r.n(m), k = (r("dc44"), r("fa6d"), {
                name: "Tetris", data: function () {
                    return {
                        state: "running",
                        figuresAll: [{
                            name: "line",
                            points: [[0, 0], [1, 0], [2, 0], [3, 0]],
                            mode: "90",
                            color: "#0f0",
                            image: w.a
                        }, {
                            name: "box",
                            points: [[0, 0], [0, 1], [1, 0], [1, 1]],
                            mode: "frozen",
                            color: "#080",
                            image: w.a
                        }, {
                            name: "T",
                            points: [[0, 0], [1, 0], [2, 0], [1, 1]],
                            mode: "rot",
                            anchor: [1, 0],
                            color: "#8f0",
                            image: w.a
                        }, {
                            name: "dog",
                            points: [[0, 0], [1, 0], [1, 1], [2, 1]],
                            mode: "90",
                            color: "#e95c26",
                            image: w.a
                        }, {
                            name: "dog reverse",
                            points: [[0, 1], [1, 1], [1, 0], [2, 0]],
                            mode: "90",
                            color: "#e95c26",
                            image: w.a
                        }, {
                            name: "L",
                            points: [[0, 0], [0, 1], [0, 2], [1, 2]],
                            mode: "rot",
                            color: "#ff0",
                            image: w.a
                        }, {
                            name: "L reverse",
                            points: [[1, 0], [1, 1], [1, 2], [0, 2]],
                            mode: "rot",
                            color: "#ff0",
                            image: w.a
                        }, {
                            name: "L",
                            points: [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]],
                            mode: "rot",
                            color: "#afa",
                            disabled: !0
                        }, {
                            name: "T",
                            points: [[0, 0], [1, 0], [2, 0], [1, 1], [1, 2]],
                            mode: "rot",
                            color: "#afa",
                            disabled: !0
                        }, {
                            name: "W",
                            points: [[2, 0], [1, 1], [2, 1], [0, 2], [1, 2]],
                            mode: "rot",
                            color: "#afa",
                            disabled: !0
                        }, {
                            name: "X",
                            points: [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]],
                            mode: "rot",
                            color: "#afa",
                            disabled: !0
                        }, {
                            name: "U",
                            points: [[0, 1], [1, 1], [2, 1], [0, 0], [2, 0]],
                            mode: "rot",
                            color: "#afa",
                            disabled: !0
                        }, {
                            name: "Z",
                            points: [[0, 0], [1, 0], [1, 1], [1, 2], [2, 2]],
                            mode: "rot",
                            color: "#afa",
                            disabled: !0
                        }, {
                            name: "F",
                            points: [[1, 0], [2, 0], [0, 1], [1, 1], [1, 2]],
                            mode: "rot",
                            color: "#afa",
                            disabled: !0
                        }, {
                            name: "P",
                            points: [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]],
                            mode: "rot",
                            color: "#afa",
                            disabled: !0
                        }, {
                            name: "I",
                            points: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
                            mode: "rot",
                            color: "#afa",
                            disabled: !0
                        }, {
                            name: "N",
                            points: [[0, 0], [0, 1], [1, 0], [1, 1], [0, 2], [0, 3]],
                            mode: "rot",
                            color: "#afa",
                            disabled: !0
                        }, {
                            name: "Y",
                            points: [[0, 1], [1, 0], [1, 1], [1, 2], [1, 3]],
                            mode: "rot",
                            color: "#afa",
                            disabled: !0
                        }, {
                            name: "L",
                            points: [[0, 0], [0, 1], [0, 2], [0, 3], [1, 3]],
                            mode: "rot",
                            color: "#afa",
                            disabled: !0
                        }, {
                            name: "creeper",
                            points: [[1, 1], [1, 2], [2, 1], [2, 2], [0, 0, "#f00"], [3, 0, "#f00"]],
                            mode: "explode",
                            color: "#f80",
                            disabled: !0
                        }, {
                            name: "point",
                            points: [[0, 0]],
                            mode: "ball",
                            color: "#88f",
                            disabled: !1,
                            image: w.a
                        }, {
                            name: "heart",
                            points: [[0, 0], [0, 1], [1, 1], [1, 2], [2, 1], [2, 0]],
                            mode: "rot",
                            color: "#f00",
                            disabled: !0
                        }],
                        figures: [],
                        passThrough: !1,
                        speedup: !1,
                        speed: .05,
                        score: 0,
                        highScore: 0,
                        step: 2,
                        board: [],
                        preview: [],
                        brickSize: 2,
                        smartRandom: !0,
                        emptyColor: "transparent",
                        img: {puzzleBg: w.a}
                    }
                }, components: {TetrisBoard: g}, methods: {
                    toggleFigures: function (t) {
                        var e, r = Object(d["a"])(this.figuresAll);
                        try {
                            for (r.s(); !(e = r.n()).done;) {
                                var i = e.value;
                                i.disabled = t.target.checked
                            }
                        } catch (s) {
                            r.e(s)
                        } finally {
                            r.f()
                        }
                    }, pause: function () {
                        switch (this.state) {
                            case"pause":
                                this.state = "running", this.calcSpeed();
                                break;
                            case"running":
                                this.state = "pause", this.calcSpeed();
                                break
                        }
                    }, initBoard: function () {
                        this.board.length = this.board.w * this.board.h;
                        for (var t = 0; t < this.board.length; ++t) this.board[t] = this.emptyColor;
                        if (1 === this.step) {
                            for (var e = 3; e < 9; e++) this.board[e - 1 + (this.board.h - 1) * this.board.w] = "transpatent";
                            for (var r = 3; r < 9; r++) this.board[r - 1 + (this.board.h - 2) * this.board.w] = "transpatent";
                            for (var i = 3; i < 9; i++) this.board[i - 1 + (this.board.h - 3) * this.board.w] = "transpatent";
                            for (var s = 4; s < 9; s++) this.board[s - 1 + (this.board.h - 4) * this.board.w] = "transpatent";
                            for (var o = 4; o < 8; o++) for (var a = 5; a < 12; a++) this.board[o - 1 + (this.board.h - a) * this.board.w] = "transpatent";
                            for (var n = 5; n < 8; n++) this.board[n - 1 + (this.board.h - 12) * this.board.w] = "transpatent"
                        } else if (2 === this.step) {
                            for (var h = 1; h < 11; h++) for (var c = 1; c < 4; c++) this.board[h - 1 + (this.board.h - c) * this.board.w] = "transpatent";
                            for (var d = 2; d < 8; d++) this.board[d - 1 + (this.board.h - 4) * this.board.w] = "transpatent";
                            for (var u = 3; u < 8; u++) for (var l = 5; l < 12; l++) this.board[u - 1 + (this.board.h - l) * this.board.w] = "transpatent";
                            for (var p = 3; p < 5; p++) this.board[p - 1 + (this.board.h - 12) * this.board.w] = "transpatent"
                        }
                    }, testBallBoard: function () {
                        for (var t = this.board.h - 1; t > 5; t--) for (var e = 0; e < this.board.w; ++e) 5 !== e && (this.board[e + t * this.board.w] = "#080");
                        this.board[4 + 5 * this.board.w] = "#080", this.board[5 + 5 * this.board.w] = "#080", this.board[6 + 5 * this.board.w] = "#080", this.board[7 + 5 * this.board.w] = "#080"
                    }, initPreview: function () {
                        this.preview.length = this.preview.w * this.preview.h;
                        for (var t = 0; t < this.preview.length; ++t) this.preview[t] = this.emptyColor
                    }, initFigures: function () {
                        var t, e = Object(d["a"])(this.figuresAll);
                        try {
                            var r = function () {
                                var e = t.value, r = 0, i = 0;
                                if (!e.anchor) {
                                    var s, o = Object(d["a"])(e.points);
                                    try {
                                        for (o.s(); !(s = o.n()).done;) {
                                            var a = s.value;
                                            r = Math.max(r, a[0]), i = Math.max(i, a[1])
                                        }
                                    } catch (n) {
                                        o.e(n)
                                    } finally {
                                        o.f()
                                    }
                                    e.anchor = [r / 2, i / 2]
                                }
                                switch (e.mode) {
                                    case"ball":
                                    case"explode":
                                    case"frozen":
                                        e.pointsRotated = [e.points, e.points, e.points, e.points];
                                        break;
                                    case"rot":
                                        e.pointsRotated = [], e.pointsRotated.push(e.points.map((function (t) {
                                            return [Math.round(e.anchor[0] + (t[0] - e.anchor[0])), Math.round(e.anchor[1] + (t[1] - e.anchor[1]))]
                                        }))), e.pointsRotated.push(e.points.map((function (t) {
                                            return [Math.round(e.anchor[0] - (t[1] - e.anchor[1])), Math.round(e.anchor[1] + (t[0] - e.anchor[0]))]
                                        }))), e.pointsRotated.push(e.points.map((function (t) {
                                            return [Math.round(e.anchor[0] - (t[0] - e.anchor[0])), Math.round(e.anchor[1] - (t[1] - e.anchor[1]))]
                                        }))), e.pointsRotated.push(e.points.map((function (t) {
                                            return [Math.round(e.anchor[0] + (t[1] - e.anchor[1])), Math.round(e.anchor[1] - (t[0] - e.anchor[0]))]
                                        })));
                                        break;
                                    case"90":
                                        e.pointsRotated = [], e.pointsRotated.push(e.points.map((function (t) {
                                            return [e.anchor[0] + (t[0] - e.anchor[0]), e.anchor[1] + (t[1] - e.anchor[1])]
                                        }))), e.pointsRotated.push(e.points.map((function (t) {
                                            return [e.anchor[1] - (t[1] - e.anchor[1]), e.anchor[0] + (t[0] - e.anchor[0])]
                                        })));
                                        break;
                                    default:
                                        throw"unknown figure rotation mode: " + e.mode
                                }
                            };
                            for (e.s(); !(t = e.n()).done;) r()
                        } catch (i) {
                            e.e(i)
                        } finally {
                            e.f()
                        }
                    }, setFigureToMap: function (t, e) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        console.log(e);
                        var i,
                            s = r ? [-e.figure.anchor[0] + t.w / 2 | 0, -e.figure.anchor[1] + t.h / 2 | 0] : [e.pos[0], e.pos[1]],
                            o = Object(c["a"])(s, 2), a = o[0], n = o[1],
                            h = Object(d["a"])(e.figure.pointsRotated[e.rotate]);
                        try {
                            for (h.s(); !(i = h.n()).done;) {
                                var u = i.value, l = a + u[0], p = n + u[1];
                                l >= 0 && l < t.w && p >= 0 && p < t.h && (t[l + p * t.w] = e.image)
                            }
                        } catch (f) {
                            h.e(f)
                        } finally {
                            h.f()
                        }
                    }, unsetFigureFromMap: function (t, e) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = r ? [-e.figure.anchor[0] + t.w / 2 | 0, -e.figure.anchor[1] + t.h / 2 | 0] : [e.pos[0], e.pos[1]],
                            s = Object(c["a"])(i, 2), o = s[0], a = s[1];
                        e.pos[0], e.pos[1];
                        var n, h = Object(d["a"])(e.figure.pointsRotated[e.rotate]);
                        try {
                            for (h.s(); !(n = h.n()).done;) {
                                var u = n.value, l = o + u[0], p = a + u[1];
                                l >= 0 && l < t.w && p >= 0 && p < t.h && (t[l + p * t.w] = this.emptyColor)
                            }
                        } catch (f) {
                            h.e(f)
                        } finally {
                            h.f()
                        }
                    }, swapNew: function () {
                        if (this.passThrough = !1, this.current = this.next, this.checkCollide(this.board, this.current) || this.score > 12) return this.end();
                        this.setFigureToMap(this.board, this.current), this.$refs.board.update(), this.unsetFigureFromMap(this.preview, this.next, !0), this.next = this.genNew(), this.setFigureToMap(this.preview, this.next, !0), this.$refs.preview.update()
                    }, genNew: function () {
                        return this.smartRandom ? this.genNewSmart() : this.genNewOld()
                    }, genNewSmart: function () {
                        var t = this.bucket, e = !1;
                        while (t[0] !== this.last) {
                            t.length || (this.fillBucket(), e = !0);
                            for (var r = 0; r < t.length - 1; ++r) {
                                if (t[0] !== this.last) break;
                                t.push(t.shift())
                            }
                            if (t[0] !== this.last || e) break;
                            t.length = 0
                        }
                        var i = t.shift(), s = {figure: i, rotate: 0};
                        return console.log(s), this.last = i, s.color = i.color || "hsl(".concat(360 * Math.random() | 0, ", 100%, 50%)"), s.image = i.image, console.log(s), s.pos = [this.board.w / 2 - i.anchor[0] | 0, 0], s
                    }, fillBucket: function () {
                        var t = this.bucket, e = this.figures;
                        t.length = 0, t.push.apply(t, Object(h["a"])(e)), t.push.apply(t, Object(h["a"])(e));
                        for (var r = 0; r < t.length - 1; ++r) {
                            var i = t.length - r - 1, s = Math.random() * i | 0, o = r + s, a = [t[o], t[r]];
                            t[r] = a[0], t[o] = a[1]
                        }
                    }, genNewOld: function () {
                        var t = {};
                        return t.figure = this.figures[Math.random() * this.figures.length | 0], t.rotate = 0, t.color = t.figure.color || "hsl(".concat(360 * Math.random() | 0, ", 100%, 50%)"), t.image = t.figure.image, t.pos = [this.board.w / 2 - t.figure.anchor[0] | 0, 0], t
                    }, moveDown: function () {
                        this.speedup = !0, this.calcSpeed(), this.loop()
                    }, keydown: function (t) {
                        switch (t.which) {
                            case"N".charCodeAt(0):
                                this.newGame();
                                break;
                            case"P".charCodeAt(0):
                                this.pause();
                                break;
                            case 37:
                                this.move(-1);
                                break;
                            case 39:
                                this.move(1);
                                break;
                            case 38:
                                this.rotate(1);
                                break;
                            case 40:
                                t.repeat || "running" !== this.state || (this.speedup = !0, this.calcSpeed(), this.loop());
                                break
                        }
                    }, keyup: function (t) {
                        switch (t.which) {
                            case 40:
                                t.repeat || (this.speedup = !1, this.calcSpeed());
                                break
                        }
                    }, move: function (t) {
                        if ("running" === this.state && !this.passThrough) {
                            this.unsetFigureFromMap(this.board, this.current), this.current.pos[0] += t;
                            var e = this.checkCollide(this.board, this.current);
                            if (0 === e) this.setFigureToMap(this.board, this.current), this.$refs.board.update(); else {
                                if (2 !== e && "explode" === this.current.figure.mode) return this.explode();
                                this.current.pos[0] -= t, this.setFigureToMap(this.board, this.current)
                            }
                        }
                    }, rotate: function (t) {
                        if ("running" === this.state) {
                            if ("explode" === this.current.figure.mode) return this.explode();
                            this.unsetFigureFromMap(this.board, this.current);
                            var e = this.current.figure.pointsRotated.length;
                            this.current.rotate = (e + (this.current.rotate + t)) % e;
                            var r = this.checkCollide(this.board, this.current);
                            0 === r ? (this.setFigureToMap(this.board, this.current), this.$refs.board.update()) : (this.current.rotate = (e + (this.current.rotate - t)) % e, this.setFigureToMap(this.board, this.current))
                        }
                    }, calcSpeed: function () {
                        if (null !== this.intervalId && clearInterval(this.intervalId), "running" === this.state) {
                            var t = 50 + 950 * (1 - (this.speedup ? 12 : this.speed) / 12);
                            this.intervalId = setInterval(this.loop.bind(this), t)
                        } else this.intervalId = null
                    }, loop: function () {
                        this.passThrough || this.unsetFigureFromMap(this.board, this.current), this.current.pos[1] += 1;
                        var t = this.checkCollide(this.board, this.current);
                        if (0 === t) this.setFigureToMap(this.board, this.current), "ball" === this.current.figure.mode && (this.passThrough = !1, this.discardBuilded(this.board), this.setFigureToMap(this.board, this.current)), this.$refs.board && this.$refs.board.update(); else {
                            if ("explode" === this.current.figure.mode) return this.explode();
                            if ("ball" === this.current.figure.mode && 1 === t && this.checkDownFree()) return this.passThrough = !0, this.setFigureToMap(this.board, this.current), void this.$refs.board.update();
                            this.current.pos[1] -= 1, this.setFigureToMap(this.board, this.current), this.discardBuilded(this.board), this.$refs.board && this.$refs.board.update(), this.swapNew(), this.speedup && (this.speedup = !1, this.calcSpeed())
                        }
                    }, checkDownFree: function () {
                        for (var t = this.current.pos[1] + 1; t < this.board.h; ++t) if (this.board[this.current.pos[0] + t * this.board.w] === this.emptyColor) return !0;
                        return !1
                    }, end: function () {
                        console.log("end"), this.highScore = Math.max(this.score, this.highScore), this.state = "end", this.calcSpeed()
                    }, checkCollide: function (t, e) {
                        var r, i = Object(d["a"])(e.figure.pointsRotated[e.rotate]);
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                var s = r.value, o = e.pos[0] + s[0], a = e.pos[1] + s[1];
                                if (o < 0 || o >= t.w || a < 0 || a >= t.h) return 2;
                                if (t[o + a * t.w] !== this.emptyColor) return 1
                            }
                        } catch (n) {
                            i.e(n)
                        } finally {
                            i.f()
                        }
                        return 0
                    }, discardBuilded: function (t) {
                        for (var e = t.h - 1; e >= 0; --e) {
                            var r = e;
                            while (r >= 0) {
                                for (var i = 0, s = 0; s < t.w; ++s) t[s + r * t.w] !== this.emptyColor && ++i;
                                if (i !== t.w) break;
                                --r, ++this.score, document.querySelector(".board").style.backgroundPositionY = 2 * this.score + "vw"
                            }
                            if (r !== e) for (var o = e - r, a = e; a >= o; --a) for (var n = 0; n < t.w; ++n) t[n + a * t.w] = t[n + (a - o) * t.w]
                        }
                    }, newGame: function () {
                        if (this.figures = this.figuresAll.filter((function (t) {
                            return !t.disabled
                        })), !this.figures.length) return alert("no figures selected");
                        this.board.w = +this.board.w, this.board.h = +this.board.h, this.state = "end", this.bucket = [], this.last = null, this.calcSpeed(), this.initBoard(), this.initPreview(), this.highScore = Math.max(this.score, this.highScore), this.score = 0, this.state = "running", this.current = this.genNew(), this.setFigureToMap(this.board, this.current), this.next = this.genNew(), this.setFigureToMap(this.preview, this.next, !0), this.intervalId = null, this.calcSpeed(), this.loop(), this.$refs.preview && this.$refs.preview.update()
                    }, showSettings: function () {
                        this.state = "settings", this.calcSpeed()
                    }, explode: function () {
                        console.log("explode");
                        for (var t = 0; t < 4; ++t) for (var e = 0; e < 4; ++e) {
                            var r = t + this.current.pos[0], i = e + this.current.pos[1];
                            r >= 0 && r < this.board.w && i >= 0 && i < this.board.h && (this.board[r + i * this.board.w] = this.emptyColor)
                        }
                        this.$refs.board.update(), this.swapNew()
                    }
                }, created: function () {
                    this.board.w = 10, this.board.h = 18, this.preview.w = 4, this.preview.h = 4, this.initFigures(), this.newGame()
                }, mounted: function () {
                    var t = this.$refs.boardControl;
                    t.focus(), setTimeout((function () {
                        return t.focus()
                    }), 500)
                }
            }), y = k, x = Object(b["a"])(y, a, n, !1, null, "1483ca54", null), M = x.exports, C = r("aca7"), _ = r.n(C),
            S = {
                name: "App", data: function () {
                    return {start: !1, img: {Logo: _.a}}
                }, components: {Tetris: M}
            }, T = S, F = Object(b["a"])(T, s, o, !1, null, null, null), O = F.exports;
        i["a"].config.productionTip = !1, new i["a"]({
            render: function (t) {
                return t(O)
            }
        }).$mount("#app")
    }, aca7: function (t, e, r) {
        t.exports = "."+r.p + "img/logo.49094681.jpg"
    }, dc44: function (t, e, r) {
    }, e06d: function (t, e, r) {
        t.exports = "."+r.p + "img/puzzlebg.27f250a7.jpeg"
    }
});
//# sourceMappingURL=app.50cec25e.js.map