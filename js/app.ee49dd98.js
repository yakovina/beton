(function (t) {
    function e(e) {
        for (var s, o, n = e[0], h = e[1], c = e[2], l = 0, p = []; l < n.length; l++) o = n[l], Object.prototype.hasOwnProperty.call(a, o) && a[o] && p.push(a[o][0]), a[o] = 0;
        for (s in h) Object.prototype.hasOwnProperty.call(h, s) && (t[s] = h[s]);
        d && d(e);
        while (p.length) p.shift()();
        return i.push.apply(i, c || []), r()
    }

    function r() {
        for (var t, e = 0; e < i.length; e++) {
            for (var r = i[e], s = !0, n = 1; n < r.length; n++) {
                var h = r[n];
                0 !== a[h] && (s = !1)
            }
            s && (i.splice(e--, 1), t = o(o.s = r[0]))
        }
        return t
    }

    var s = {}, a = {app: 0}, i = [];

    function o(e) {
        if (s[e]) return s[e].exports;
        var r = s[e] = {i: e, l: !1, exports: {}};
        return t[e].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }

    o.m = t, o.c = s, o.d = function (t, e, r) {
        o.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
    }, o.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var s in t) o.d(r, s, function (e) {
            return t[e]
        }.bind(null, s));
        return r
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/";
    var n = window["webpackJsonp"] = window["webpackJsonp"] || [], h = n.push.bind(n);
    n.push = e, n = n.slice();
    for (var c = 0; c < n.length; c++) e(n[c]);
    var d = h;
    i.push([0, "chunk-vendors"]), r()
})({
    0: function (t, e, r) {
        t.exports = r("56d7")
    }, "01ce": function (t, e, r) {
        t.exports = "."+ r.p + "img/tsumfin.72324507.svg"
    }, "282f": function (t, e, r) {
        t.exports ="."+  r.p + "img/facebook.d41d8cd9.svg"
    }, "3a03": function (t, e, r) {
        t.exports ="."+  r.p + "img/bibliofin.41db7e79.svg"
    }, "4ffd": function (t, e, r) {
        t.exports ="."+  r.p + "img/logo.f6dd30ef.png"
    }, "56d7": function (t, e, r) {
        "use strict";
        r.r(e);
        r("e260"), r("e6cf"), r("cca6"), r("a79d");
        var s = r("2b0e"), a = function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("div", {attrs: {id: "app"}}, [r("Tetris")], 1)
            }, i = [], o = function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("div", {
                    ref: "boardControl",
                    attrs: {id: "tetris-wrapper", tabindex: "1"},
                    on: {keydown: t.keydown, keyup: t.keyup}
                }, [r("a", {
                    staticClass: "tetris__partners", attrs: {target: "_blank"}, on: {
                        click: function (e) {
                            t.showPartners = !0
                        }
                    }
                }, [r("div", {staticClass: "tetris__desc"}, [t._v(" Партнерський матеріал ")]), r("img", {
                    staticClass: "tetris__img",
                    attrs: {src: t.img.Logo, alt: ""}
                })]), r("div", {
                    staticClass: "partnersinfo-wrapper",
                    class: {active: !0 === t.showPartners}
                }, [!0 === t.showPartners ? r("svg", {
                    staticClass: "partnersinfo__close",
                    attrs: {
                        width: "23px",
                        height: "23px",
                        viewBox: "0 0 23 23",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    },
                    on: {
                        click: function (e) {
                            t.showPartners = !1
                        }
                    }
                }, [r("g", {
                    attrs: {
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "#fff",
                        "fill-rule": "evenodd"
                    }
                }, [r("rect", {
                    attrs: {
                        transform: "translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) ",
                        x: "10.3137085",
                        y: "-3.6862915",
                        width: "2",
                        height: "30"
                    }
                }), r("rect", {
                    attrs: {
                        transform: "translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) ",
                        x: "10.3137085",
                        y: "-3.6862915",
                        width: "2",
                        height: "30"
                    }
                })])]) : t._e(), r("transition", {attrs: {name: "fade"}}, [!0 === t.showPartners ? r("div", {
                    staticClass: "partnersinfo__bg",
                    on: {
                        click: function (e) {
                            t.showPartners = !1
                        }
                    }
                }) : t._e()]), r("transition", {attrs: {name: "fademove"}}, [!0 === t.showPartners ? r("div", {staticClass: "partnersinfo"}, [r("img", {
                    staticClass: "partnersinfo__img",
                    attrs: {src: t.img.Logo, alt: ""}
                }), r("div", {staticClass: "partnersinfo__desc"}, [t._v(" Це – спонсорський матеріал, вихід якого став можливим за фінансової підтримки партнера. Тема статті і текст розробляється з урахуванням його побажань. ")]), r("social-sharing", {
                    attrs: {url: "https://vuejs.org/"}, inlineTemplate: {
                        render: function () {
                            var t = this, e = t.$createElement, r = t._self._c || e;
                            return r("div", {staticClass: "social"}, [r("network", {attrs: {network: "facebook"}}, [r("svg", {
                                attrs: {
                                    height: "512pt",
                                    viewBox: "0 0 512 512",
                                    width: "512pt",
                                    xmlns: "http://www.w3.org/2000/svg"
                                }
                            }, [r("path", {
                                attrs: {
                                    d: "m483.738281 0h-455.5c-15.597656.0078125-28.24218725 12.660156-28.238281 28.261719v455.5c.0078125 15.597656 12.660156 28.242187 28.261719 28.238281h455.476562c15.605469.003906 28.257813-12.644531 28.261719-28.25 0-.003906 0-.007812 0-.011719v-455.5c-.007812-15.597656-12.660156-28.24218725-28.261719-28.238281zm0 0",
                                    fill: "#4267b2"
                                }
                            }), r("path", {
                                attrs: {
                                    d: "m353.5 512v-198h66.75l10-77.5h-76.75v-49.359375c0-22.386719 6.214844-37.640625 38.316406-37.640625h40.683594v-69.128906c-7.078125-.941406-31.363281-3.046875-59.621094-3.046875-59 0-99.378906 36-99.378906 102.140625v57.035156h-66.5v77.5h66.5v198zm0 0",
                                    fill: "#fff"
                                }
                            })])]), r("network", {attrs: {network: "twitter"}}, [r("svg", {
                                staticStyle: {"enable-background": "new 0 0 455.731 455.731"},
                                attrs: {
                                    version: "1.1",
                                    id: "Capa_1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                    x: "0px",
                                    y: "0px",
                                    viewBox: "0 0 455.731 455.731",
                                    "xml:space": "preserve"
                                }
                            }, [r("g", [r("rect", {
                                staticStyle: {fill: "#50ABF1"},
                                attrs: {x: "0", y: "0", width: "455.731", height: "455.731"}
                            }), r("path", {
                                staticStyle: {fill: "#FFFFFF"},
                                attrs: {d: "M60.377,337.822c30.33,19.236,66.308,30.368,104.875,30.368c108.349,0,196.18-87.841,196.18-196.18\n\t\tc0-2.705-0.057-5.39-0.161-8.067c3.919-3.084,28.157-22.511,34.098-35c0,0-19.683,8.18-38.947,10.107\n\t\tc-0.038,0-0.085,0.009-0.123,0.009c0,0,0.038-0.019,0.104-0.066c1.775-1.186,26.591-18.079,29.951-38.207\n\t\tc0,0-13.922,7.431-33.415,13.932c-3.227,1.072-6.605,2.126-10.088,3.103c-12.565-13.41-30.425-21.78-50.25-21.78\n\t\tc-38.027,0-68.841,30.805-68.841,68.803c0,5.362,0.617,10.581,1.784,15.592c-5.314-0.218-86.237-4.755-141.289-71.423\n\t\tc0,0-32.902,44.917,19.607,91.105c0,0-15.962-0.636-29.733-8.864c0,0-5.058,54.416,54.407,68.329c0,0-11.701,4.432-30.368,1.272\n\t\tc0,0,10.439,43.968,63.271,48.077c0,0-41.777,37.74-101.081,28.885L60.377,337.822z"}
                            })])])])], 1)
                        }, staticRenderFns: []
                    }
                })], 1) : t._e()])], 1), r("div", {attrs: {id: "tetrishold"}}, [r("div", {attrs: {id: "tetris"}}), r("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "settings" !== t.state,
                        expression: "state !== 'settings'"
                    }], staticClass: "game"
                }, [r("div", {
                    staticClass: "main",
                    style: {"--brickSize": t.brickSize + "vh"}
                }, [r("div", {staticClass: "left"}, [t.gameon || t.win || t.start ? t._e() : r("div", {staticClass: "firstscreen"}, [!1 === t.instructions ? r("div", [r("h2", {staticClass: "firstscreen__header"}, [t._v(" Зіграйте у київський тетріс! ")]), t._m(0), r("button", {
                    staticClass: "tetris__nextbutton",
                    on: {
                        click: function (e) {
                            t.instructions = !0
                        }
                    }
                }, [t._v("Почати гру!")])]) : t._e(), !0 === t.instructions ? r("div", [t._m(1), r("button", {
                    staticClass: "tetris__nextbutton",
                    on: {
                        click: function (e) {
                            t.start = !0, t.gameon = !0
                        }
                    }
                }, [t._v("Грати!")])]) : t._e()]), t.gameon && t.start && !t.win ? r("div", {staticClass: "tetrisboard"}, [5 === t.step ? r("tetris-board", {
                    ref: "board",
                    staticClass: "board",
                    model: {
                        value: t.board, callback: function (e) {
                            t.board = e
                        }, expression: "board"
                    }
                }) : t._e(), 4 === t.step ? r("tetris-board", {
                    ref: "board",
                    staticClass: "board biblio",
                    model: {
                        value: t.board, callback: function (e) {
                            t.board = e
                        }, expression: "board"
                    }
                }) : t._e(), 1 === t.step ? r("tetris-board", {
                    ref: "board",
                    staticClass: "board vokzal",
                    model: {
                        value: t.board, callback: function (e) {
                            t.board = e
                        }, expression: "board"
                    }
                }) : t._e(), 3 === t.step ? r("tetris-board", {
                    ref: "board",
                    staticClass: "board tsum",
                    model: {
                        value: t.board, callback: function (e) {
                            t.board = e
                        }, expression: "board"
                    }
                }) : t._e(), 2 === t.step ? r("tetris-board", {
                    ref: "board",
                    staticClass: "board olimp",
                    model: {
                        value: t.board, callback: function (e) {
                            t.board = e
                        }, expression: "board"
                    }
                }) : t._e()], 1) : t._e(), t.gameon && !t.start && t.win ? r("perfect-scrollbar", {staticClass: "winner"}, [1 === t.step ? r("div", [r("h2", {staticClass: "win__header"}, [t._v(" Вокзал «Південний» в Києві ")]), r("img", {
                    attrs: {
                        src: t.img.vokzalfin,
                        alt: ""
                    }
                }), r("p", [t._v(" Південний вокзал відкрили в 2001 році, раніше на його місці розташовувався оптовий ринок. Архітектурні рішення нової будівлі були настільки незвичними для того часу, що після відкриття сюди водили шкільні екскурсії. ")]), r("p", [t._v(" Під час будівництва Південного вокзалу використовували бетон від "), r("a", {
                    attrs: {
                        href: "https://kovalska.com/beton-vid-kovalskoyi",
                        target: "_blank"
                    }
                }, [t._v("Ковальської")]), t._v(". Група компаній "), r("a", {
                    attrs: {
                        href: "https://kovalska.com/beton-vid-kovalskoyi",
                        target: "_blank"
                    }
                }, [t._v("Ковальська")]), t._v(" має надзвичайно великі потужності – до 1000 куб м на годину, й може забезпечити необхідною кількістю матеріалів для зведення наймасштабніших об’єктів. ")])]) : t._e(), 2 === t.step ? r("div", [r("h2", {staticClass: "win__header"}, [t._v(" НСК Олімпійський ")]), r("img", {
                    attrs: {
                        src: t.img.olimpfin,
                        alt: ""
                    }
                }), r("p", [t._v(" На НСК Олімпійський відбувалися футбольні матчі Олімпійських ігор в 1980 році, Євро-2012, а в 2018 – фінал Ліги чемпіонів УЄФА. Впродовж свого існування стадіон змінив декілька назв. Носив ім’я Хрущова, був Київським центральним стадіоном, а згодом – Республіканським. ")]), r("p", [t._v(" Спортивний комплекс незмінно працює з 1923 року. Під час його будівництва (чи мається на увазі реконструкція перед ЄВРО?) використовували бетон від "), r("a", {
                    attrs: {
                        href: "https://kovalska.com/beton-vid-kovalskoyi",
                        target: "_blank"
                    }
                }, [t._v("Ковальської")]), t._v(". ")]), r("p", [t._v(" Бетон компанії "), r("a", {
                    attrs: {
                        href: "https://kovalska.com/beton-vid-kovalskoyi",
                        target: "_blank"
                    }
                }, [t._v("Ковальська")]), t._v(" має понад 1500 рецептур виробів й вирізняється виключною якістю та довговічністю, на кожну партію сировини є сертифікат якості. ")])]) : t._e(), 3 === t.step ? r("div", [r("h2", {staticClass: "win__header"}, [t._v(" ЦУМ ")]), r("img", {
                    attrs: {
                        src: t.img.tsumfin,
                        alt: ""
                    }
                }), r("p", [t._v(" Київський центральний універмаг збудований у стилі ар-деко. ЦУМ відкрили для перших відвідувачів у 1939 році. Це – одна з небагатьох будівель на Хрещатику, яка не була повністю зруйнована у ході другої світової й знову почала працювати у 1947 році після реконструкції. Це – перший магазин в Україні, де встановили ескалатор, ще в 1960 році. Тривалий час ЦУМ слугував символом «радянського достатку». ")]), r("p", [t._v(" В 2016 році універмаг реконструювали. В ході будівельних робіт використовували бетон від "), r("a", {
                    attrs: {
                        href: "https://kovalska.com/beton-vid-kovalskoyi",
                        target: "_blank"
                    }
                }, [t._v("Ковальської")]), t._v(". Під куполом оновленої будівлі розташовані ресторани, кафе та бари з мальовничим видом на старий Київ. ")])]) : t._e(), 4 === t.step ? r("div", [r("h2", {staticClass: "win__header"}, [t._v(" Вернадка ")]), r("img", {
                    attrs: {
                        src: t.img.bibliofin,
                        alt: ""
                    }
                }), r("p", [t._v(" Бібліотека імені Вернадського – найбільша в Україні. Її відкрили в 1989 році, а на церемонію приїхав сам Борис Патон, президент НАН України. Один з її корпусів сягає 77 метрів заввишки і виконаний в стилі архітектури модернізму. ")]), r("p", [t._v(" Бібліотека складається з вертикальної споруди, де знаходяться книгосховища, й стилобату – з читальними залами, конференц залою та службовими приміщеннями. ")]), r("p", [t._v(" Її зводили за кресленнями «Київпроекту», а в ході будівництва використовували бетон від "), r("a", {
                    attrs: {
                        href: "https://kovalska.com/beton-vid-kovalskoyi",
                        target: "_blank"
                    }
                }, [t._v("Ковальської")]), t._v(". ")]), r("p", [t._v(" ПБГ "), r("a", {
                    attrs: {
                        href: "https://kovalska.com/beton-vid-kovalskoyi",
                        target: "_blank"
                    }
                }, [t._v("Ковальська")]), t._v(" має власну сертифіковану лабораторію, фахівці якої на кожному етапі перевіряють якість продукції і так само працюють над новими вдосконаленими рецептурами. Все це гарантує довговічність і надійність спорудам, зведених з бетону від "), r("a", {
                    attrs: {
                        href: "https://kovalska.com/beton-vid-kovalskoyi",
                        target: "_blank"
                    }
                }, [t._v("Ковальської")]), t._v(". ")])]) : t._e(), 5 === t.step ? r("div", [r("h2", {staticClass: "win__header"}, [t._v(" БЦ Парус ")]), r("img", {
                    attrs: {
                        src: t.img.parusfin,
                        alt: ""
                    }
                }), r("p", [t._v(" БЦ Парус є однією з найвищих будівель Києва і сягає 133 метрів у висоту. Бізнес центр має 32 поверхи й будувався впродовж трьох років. Будівлю зводили з використанням скла, сталі, алюмінію, бетону, залізобетону й цегли. У ході робіт використовували матеріали від ПБГ "), r("a", {
                    attrs: {
                        href: "https://kovalska.com/beton-vid-kovalskoyi",
                        target: "_blank"
                    }
                }, [t._v("Ковальська")]), t._v(". ")]), r("p", [t._v(" Понад 60% будівель Києва зведено з використанням "), r("a", {
                    attrs: {
                        href: "https://kovalska.com/beton-vid-kovalskoyi",
                        target: "_blank"
                    }
                }, [t._v("«Бетону від Ковальської»")]), t._v(". Це – знакові громадські об’єкти: НСК Олімпійський, Дарницький міст, модерністська бібліотека ім. Вернадського, торговельні центри, бізнес-центри, термінали аеропортів, вокзали й житло. ")]), r("p", [t._v(" З бетоном працювали й ним захоплювалися кращі архітектори світу – від представників школи Баухауз, інтернаціонального стилю, міжвоєнного та післявоєнного модернізму й до сучасності. В Києві є унікальна спадщина у вигляді архітектури модернізму, а в післявоєнний період з бетону зводилися й цілі житлові райони. ")]), r("p", [t._v(" Група компаній "), r("a", {
                    attrs: {
                        href: "https://kovalska.com/beton-vid-kovalskoyi",
                        target: "_blank"
                    }
                }, [t._v("Ковальська")]), t._v(" працює на українському ринку шістдесят чотири роки й за цей час стала номером один серед виробників бетонних сумішей України. Про якість бетону говорить, перш за все, довговічність будівель, які зводяться. Адже бетон – це основа будь-якого будинку. Якщо зробити неякісні перекриття, страждатиме весь дім – протікатиме стеля, псуватиметься внутрішнє оздоблення.")]), r("p", [t._v(" Не залежно від того, чи ви самостійно зводите своє житло, інвестуєте у квартиру в новобудові чи задіяні у створенні інфраструктурного об’єкта – вибір бетону має відбуватися ретельно. Важливо, хто виробник бетону, яка його якість. "), r("a", {
                    attrs: {
                        href: "https://kovalska.com/beton-vid-kovalskoyi",
                        target: "_blank"
                    }
                }, [t._v("Ковальська")]), t._v(" має сертифікати якості від всіх виробників на всі матеріали своїх заводів. Є три ключові показники бетону, які потрібно перевіряти раз в півроку й компанія чи не єдина в Україні, хто здійснює весь контроль, попри те, що це – складна й затратна процедура. ")]), r("p", [t._v(" Широкий асортимент матеріалів дозволяє реалізувати будь-які архітектурні задуми. «"), r("a", {
                    attrs: {
                        href: "https://kovalska.com/beton-vid-kovalskoyi",
                        target: "_blank"
                    }
                }, [t._v("Ковальська")]), t._v("» виготовляє власні добавки і може змінювати їхній склад, що дозволяє швидко розробляти нові рішення – розробити бетон за індивідуальним замовленням можуть протягом тижня. ")]), r("p", [t._v(" Також у «"), r("a", {
                    attrs: {
                        href: "https://kovalska.com/beton-vid-kovalskoyi",
                        target: "_blank"
                    }
                }, [t._v("Ковальської")]), t._v("» є власний парк бетономішалок (міксерів), який налічує ___ авто. Їх можна часто побачити на вулицях Києва, адже завдяки «міксерам» бетон оперативно доставляється у будь-яку точку міста. ")])]) : t._e(), 5 != t.step ? r("button", {
                    staticClass: "tetris__nextbutton",
                    on: {click: t.nextLevel}
                }, [t._v("Грати далі!")]) : t._e()]) : t._e(), !t.gameon || t.start || t.win ? t._e() : r("div", {staticClass: "loose"}, [r("h2", {staticClass: "loose__header"}, [t._v(" Вам не вдалося збудувати " + t._s(t.nameObject[t.step - 1]) + " :( ")]), r("button", {
                    staticClass: "tetris__nextbutton",
                    on: {
                        click: function (e) {
                            t.start = !0
                        }
                    }
                }, [t._v("Спробуйте ще раз!")])]), r("div", {staticClass: "tetris__rule"}, [r("button", {
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
                })], 1)])])])])
            }, n = [function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("div", {staticClass: "firstscreen__desc"}, [r("p", [t._v("Збирайте найвідоміші об’єкти і дізнавайтеся їхню історію!")])])
            }, function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("div", {staticClass: "firstscreen__desc"}, [r("p", [t._v(" В грі п’ять рівнів, від найпростішого – до складного. Потрібно зібрати простір навколо кожної будівлі. Рівень закінчується, коли об’єкт опускається вниз, а ви переходите до наступного етапу.")])])
            }], h = (r("4de4"), r("d81d"), r("ac1f"), r("466d"), r("38cf"), r("18a5"), r("2909")), c = r("3835"),
            d = r("b85c"), l = function () {
                var t = this, e = t.$createElement, r = t._self._c || e;
                return r("div", [r("table", t._l(t.value.h, (function (e) {
                    return r("tr", {key: e, staticClass: "row"}, t._l(t.value.w, (function (s) {
                        return r("td", {key: s, staticClass: "col", class: t.value[s - 1 + (e - 1) * t.value.w]})
                    })), 0)
                })), 0)])
            }, p = [], u = {
                name: "TetrisBoard", props: ["value"], mounted: function () {
                }, methods: {
                    update: function () {
                        this.$forceUpdate()
                    }
                }
            }, f = u, v = r("2877"), b = Object(v["a"])(f, l, p, !1, null, "743e4b50", null), g = b.exports, m = r("a4a1"),
            w = (r("f6b9"), r("e06d")), _ = r.n(w), k = r("5a98"), x = r.n(k), y = r("d6f9"), C = r.n(y), M = r("01ce"),
            I = r.n(M), S = r("3a03"), F = r.n(S), T = r("ab55"), O = r.n(T), j = r("282f"), $ = r.n(j), P = r("b988"),
            z = r.n(P), B = (r("dc44"), r("fa6d"), r("4ffd")), L = r.n(B), R = r("5299");
        s["default"].use(R);
        var N = {
            name: "Tetris", data: function () {
                return {
                    state: "running",
                    path: window.location,
                    figuresAll: [{
                        name: "line",
                        points: [[0, 0], [1, 0], [2, 0], [3, 0]],
                        bg: this.randomInteger(1, 4) + "" + this.randomInteger(1, 4) + this.randomInteger(1, 4) + this.randomInteger(1, 4),
                        mode: "90",
                        color: "active",
                        image: _.a
                    }, {
                        name: "box",
                        points: [[0, 0], [0, 1], [1, 0], [1, 1]],
                        mode: "frozen",
                        color: "active",
                        bg: this.randomInteger(1, 4) + "" + this.randomInteger(1, 4) + this.randomInteger(1, 4) + this.randomInteger(1, 4),
                        image: _.a
                    }, {
                        name: "T",
                        points: [[0, 0], [1, 0], [2, 0], [1, 1]],
                        mode: "rot",
                        anchor: [1, 0],
                        color: "active",
                        bg: this.randomInteger(1, 4) + "" + this.randomInteger(1, 4) + this.randomInteger(1, 4) + this.randomInteger(1, 4),
                        image: _.a
                    }, {
                        name: "dog",
                        points: [[0, 0], [1, 0], [1, 1], [2, 1]],
                        mode: "90",
                        color: "active",
                        bg: this.randomInteger(1, 4) + "" + this.randomInteger(1, 4) + this.randomInteger(1, 4) + this.randomInteger(1, 4),
                        image: _.a
                    }, {
                        name: "dog reverse",
                        points: [[0, 1], [1, 1], [1, 0], [2, 0]],
                        mode: "90",
                        color: "active",
                        bg: this.randomInteger(1, 4) + "" + this.randomInteger(1, 4) + this.randomInteger(1, 4) + this.randomInteger(1, 4),
                        image: _.a
                    }, {
                        name: "L",
                        points: [[0, 0], [0, 1], [0, 2], [1, 2]],
                        mode: "rot",
                        color: "active",
                        bg: this.randomInteger(1, 4) + "" + this.randomInteger(1, 4) + this.randomInteger(1, 4) + this.randomInteger(1, 4),
                        image: _.a
                    }, {
                        name: "L reverse",
                        points: [[1, 0], [1, 1], [1, 2], [0, 2]],
                        mode: "rot",
                        color: "active",
                        bg: this.randomInteger(1, 4) + "" + this.randomInteger(1, 4) + this.randomInteger(1, 4) + this.randomInteger(1, 4),
                        image: _.a
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
                        color: "active doted",
                        disabled: !1,
                        image: _.a,
                        bg: this.randomInteger(1, 4) + "" + this.randomInteger(1, 4) + this.randomInteger(1, 4) + this.randomInteger(1, 4)
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
                    winScore: 4,
                    showPartners: !1,
                    instructions: !1,
                    step: 1,
                    start: !1,
                    gameon: !1,
                    win: !1,
                    board: [],
                    boardClass: [],
                    preview: [],
                    brickSize: 4,
                    smartRandom: !0,
                    emptyColor: "",
                    img: {
                        puzzleBg: _.a,
                        Logo: L.a,
                        vokzalfin: x.a,
                        olimpfin: C.a,
                        tsumfin: I.a,
                        bibliofin: F.a,
                        parusfin: O.a,
                        facebookImg: $.a,
                        twitterImg: z.a
                    },
                    nameObject: ["Вокзал «Південний» в Києві", "НСК Олімпійський", "ЦУМ", "Національнy бібліотекy України ім. Вернадського", "БЦ Парус"],
                    finScore: [3, 4, 6, 11, 12]
                }
            }, components: {TetrisBoard: g, PerfectScrollbar: m["PerfectScrollbar"]}, watch: {
                start: function (t) {
                    if (t) {
                        this.newGame();
                        var e = this.$refs.boardControl;
                        e.focus(), setTimeout((function () {
                            return e.focus()
                        }), 500)
                    }
                }
            }, methods: {
                randomInteger: function (t, e) {
                    var r = t - .5 + Math.random() * (e - t + 1);
                    return Math.round(r)
                }, nextLevel: function () {
                    this.step += 1, this.win = !1, this.start = !0, this.$nextTick((function () {
                        this.initFigures(), this.newGame(), this.$refs.board.style.backgroundPositionY = 0;
                        var t = this.$refs.boardControl;
                        t.focus(), setTimeout((function () {
                            return t.focus()
                        }), 500)
                    }))
                }, toggleFigures: function (t) {
                    var e, r = Object(d["a"])(this.figuresAll);
                    try {
                        for (r.s(); !(e = r.n()).done;) {
                            var s = e.value;
                            s.disabled = t.target.checked
                        }
                    } catch (a) {
                        r.e(a)
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
                        for (var e = 1; e < 11; e++) this.board[e - 1 + (this.board.h - 1) * this.board.w] = " prev";
                        for (var r = 2; r < 11; r++) this.board[r - 1 + (this.board.h - 2) * this.board.w] = " prev";
                        for (var s = 2; s < 11; s++) this.board[s - 1 + (this.board.h - 3) * this.board.w] = " prev";
                        for (var a = 6; a < 8; a++) this.board[a - 1 + (this.board.h - 4) * this.board.w] = " prev"
                    } else if (2 === this.step) {
                        for (var i = 1; i < 11; i++) this.board[i - 1 + (this.board.h - 1) * this.board.w] = " prev";
                        for (var o = 2; o < 10; o++) for (var n = 2; n < 5; n++) this.board[o - 1 + (this.board.h - n) * this.board.w] = " prev";
                        for (var h = 4; h < 8; h++) this.board[h - 1 + (this.board.h - 5) * this.board.w] = " prev"
                    } else if (3 === this.step) {
                        for (var c = 1; c < 11; c++) this.board[c - 1 + (this.board.h - 1) * this.board.w] = " prev";
                        for (var d = 2; d < 11; d++) for (var l = 2; l < 5; l++) this.board[d - 1 + (this.board.h - l) * this.board.w] = " prev";
                        for (var p = 3; p < 9; p++) this.board[p - 1 + (this.board.h - 5) * this.board.w] = " prev";
                        for (var u = 4; u < 8; u++) this.board[u - 1 + (this.board.h - 6) * this.board.w] = " prev";
                        for (var f = 5; f < 8; f++) this.board[f - 1 + (this.board.h - 7) * this.board.w] = " prev"
                    } else if (5 === this.step) {
                        for (var v = 3; v < 9; v++) this.board[v - 1 + (this.board.h - 1) * this.board.w] = " prev";
                        for (var b = 3; b < 9; b++) this.board[b - 1 + (this.board.h - 2) * this.board.w] = " prev";
                        for (var g = 3; g < 9; g++) this.board[g - 1 + (this.board.h - 3) * this.board.w] = " prev";
                        for (var m = 4; m < 9; m++) this.board[m - 1 + (this.board.h - 4) * this.board.w] = " prev";
                        for (var w = 4; w < 8; w++) for (var _ = 5; _ < 12; _++) this.board[w - 1 + (this.board.h - _) * this.board.w] = " prev";
                        for (var k = 5; k < 8; k++) this.board[k - 1 + (this.board.h - 12) * this.board.w] = " prev"
                    } else if (4 === this.step) {
                        for (var x = 1; x < 11; x++) for (var y = 1; y < 4; y++) this.board[x - 1 + (this.board.h - y) * this.board.w] = " prev";
                        for (var C = 2; C < 8; C++) this.board[C - 1 + (this.board.h - 4) * this.board.w] = " prev";
                        for (var M = 3; M < 8; M++) for (var I = 5; I < 12; I++) this.board[M - 1 + (this.board.h - I) * this.board.w] = " prev";
                        for (var S = 3; S < 5; S++) this.board[S - 1 + (this.board.h - 12) * this.board.w] = " prev"
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
                            var e = t.value, r = 0, s = 0;
                            if (!e.anchor) {
                                var a, i = Object(d["a"])(e.points);
                                try {
                                    for (i.s(); !(a = i.n()).done;) {
                                        var o = a.value;
                                        r = Math.max(r, o[0]), s = Math.max(s, o[1])
                                    }
                                } catch (n) {
                                    i.e(n)
                                } finally {
                                    i.f()
                                }
                                e.anchor = [r / 2, s / 2]
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
                    } catch (s) {
                        e.e(s)
                    } finally {
                        e.f()
                    }
                }, setFigureToMap: function (t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    console.log(e);
                    var s = r ? [-e.figure.anchor[0] + t.w / 2 | 0, -e.figure.anchor[1] + t.h / 2 | 0] : [e.pos[0], e.pos[1]],
                        a = Object(c["a"])(s, 2), i = a[0], o = a[1];
                    console.log(e.figure.pointsRotated[e.rotate]);
                    var n, h = 0, l = Object(d["a"])(e.figure.pointsRotated[e.rotate]);
                    try {
                        for (l.s(); !(n = l.n()).done;) {
                            var p = n.value, u = i + p[0], f = o + p[1];
                            u >= 0 && u < t.w && f >= 0 && f < t.h && (t[u + f * t.w].match("background"), t[u + f * t.w] = e.color + " background" + e.figure.bg[h], h++)
                        }
                    } catch (v) {
                        l.e(v)
                    } finally {
                        l.f()
                    }
                }, unsetFigureFromMap: function (t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        s = r ? [-e.figure.anchor[0] + t.w / 2 | 0, -e.figure.anchor[1] + t.h / 2 | 0] : [e.pos[0], e.pos[1]],
                        a = Object(c["a"])(s, 2), i = a[0], o = a[1];
                    e.pos[0], e.pos[1];
                    var n, h = Object(d["a"])(e.figure.pointsRotated[e.rotate]);
                    try {
                        for (h.s(); !(n = h.n()).done;) {
                            var l = n.value, p = i + l[0], u = o + l[1];
                            p >= 0 && p < t.w && u >= 0 && u < t.h && (t[p + u * t.w] = this.emptyColor)
                        }
                    } catch (f) {
                        h.e(f)
                    } finally {
                        h.f()
                    }
                }, swapNew: function () {
                    if (this.passThrough = !1, this.current = this.next, this.checkCollide(this.board, this.current) || this.score >= this.finScore[this.step - 1]) return this.end();
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
                    var s = t.shift(), a = {figure: s, rotate: 0};
                    return this.last = s, a.color = s.color || "hsl(".concat(360 * Math.random() | 0, ", 100%, 50%)"), a.image = s.image, a.pos = [this.board.w / 2 - s.anchor[0] | 0, 0], a
                }, fillBucket: function () {
                    var t = this.bucket, e = this.figures;
                    t.length = 0, t.push.apply(t, Object(h["a"])(e)), t.push.apply(t, Object(h["a"])(e));
                    for (var r = 0; r < t.length - 1; ++r) {
                        var s = t.length - r - 1, a = Math.random() * s | 0, i = r + a, o = [t[i], t[r]];
                        t[r] = o[0], t[i] = o[1]
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
                    if (0 === t) this.setFigureToMap(this.board, this.current), "ball" === this.current.figure.mode && (this.passThrough = !1, this.setFigureToMap(this.board, this.current)), this.$refs.board && this.$refs.board.update(); else {
                        if ("explode" === this.current.figure.mode) return this.explode();
                        if ("ball" === this.current.figure.mode && 1 === t && this.checkDownFree()) return this.passThrough = !0, this.setFigureToMap(this.board, this.current), void this.$refs.board.update();
                        this.current.pos[1] -= 1, this.setFigureToMap(this.board, this.current), this.discardBuilded(this.board), this.$refs.board && this.$refs.board.update(), this.swapNew(), this.speedup && (this.speedup = !1, this.calcSpeed())
                    }
                }, checkDownFree: function () {
                    for (var t = this.current.pos[1] + 1; t < this.board.h; ++t) if (this.board[this.current.pos[0] + t * this.board.w] === this.emptyColor) return !0;
                    return !1
                }, end: function () {
                    this.highScore = Math.max(this.score, this.highScore), this.state = "end", this.calcSpeed(), this.score >= this.finScore[this.step - 1] ? this.win = !0 : this.win = !1, this.start = !1
                }, checkCollide: function (t, e) {
                    var r, s = Object(d["a"])(e.figure.pointsRotated[e.rotate]);
                    try {
                        for (s.s(); !(r = s.n()).done;) {
                            var a = r.value, i = e.pos[0] + a[0], o = e.pos[1] + a[1];
                            if (i < 0 || i >= t.w || o < 0 || o >= t.h) return o >= t.h && (e.color = "final"), 2;
                            if (t[i + o * t.w] !== this.emptyColor) return e.color = "final", 1
                        }
                    } catch (n) {
                        s.e(n)
                    } finally {
                        s.f()
                    }
                    return 0
                }, discardBuilded: function (t) {
                    for (var e = t.h - 1; e >= 0; --e) {
                        var r = e;
                        while (r >= 0) {
                            for (var s = 0, a = 0; a < t.w; ++a) t[a + r * t.w] !== this.emptyColor && ++s;
                            if (s !== t.w) break;
                            --r, ++this.score, document.querySelector(".board").style.backgroundPositionY = this.brickSize * this.score + .07 * (this.score + 1) + "vh"
                        }
                        if (r !== e) for (var i = e - r, o = e; o >= i; --o) for (var n = 0; n < t.w; ++n) "prev" !== t[n + (o - i) * t.w] && (t[n + o * t.w] = t[n + (o - i) * t.w])
                    }
                }, newGame: function () {
                    if (this.figures = this.figuresAll.filter((function (t) {
                        return !t.disabled
                    })), console.log(this.figures[0]), !this.figures.length) return alert("no figures selected");
                    this.board.w = +this.board.w, this.board.h = +this.board.h, this.state = "end", this.bucket = [], this.last = null, this.calcSpeed(), this.initBoard(), this.initPreview(), this.highScore = Math.max(this.score, this.highScore), this.score = 0, this.state = "running", this.current = this.genNew(), this.setFigureToMap(this.board, this.current), this.next = this.genNew(), this.setFigureToMap(this.preview, this.next, !0), this.intervalId = null, this.calcSpeed(), this.loop(), this.$refs.preview && this.$refs.preview.update()
                }, showSettings: function () {
                    this.state = "settings", this.calcSpeed()
                }, explode: function () {
                    for (var t = 0; t < 4; ++t) for (var e = 0; e < 4; ++e) {
                        var r = t + this.current.pos[0], s = e + this.current.pos[1];
                        r >= 0 && r < this.board.w && s >= 0 && s < this.board.h && (this.board[r + s * this.board.w] = this.emptyColor)
                    }
                    this.$refs.board.update(), this.swapNew()
                }
            }, created: function () {
                this.board.w = 10, this.board.h = 18, this.preview.w = 4, this.preview.h = 4, this.initFigures()
            }, mounted: function () {
            }
        }, A = N, E = Object(v["a"])(A, o, n, !1, null, "2dcfe054", null), D = E.exports, G = {
            name: "App", data: function () {
                return {start: !1}
            }, components: {Tetris: D}
        }, Y = G, J = Object(v["a"])(Y, a, i, !1, null, null, null), U = J.exports;
        s["default"].config.productionTip = !1, new s["default"]({
            render: function (t) {
                return t(U)
            }
        }).$mount("#app")
    }, "5a98": function (t, e, r) {
        t.exports ="."+  r.p + "img/vokzalfin.ccf2f78f.svg"
    }, ab55: function (t, e, r) {
        t.exports ="."+  r.p + "img/parusfin.ec5410f3.svg"
    }, b988: function (t, e, r) {
        t.exports ="."+  r.p + "img/twitter.9cac25de.svg"
    }, d6f9: function (t, e, r) {
        t.exports = "."+ r.p + "img/olimpfin.f38e9ce1.svg"
    }, dc44: function (t, e, r) {
    }, e06d: function (t, e, r) {
        t.exports ="."+ r.p + "img/puzzlebg.5007867d.jpeg"
    }
});
//# sourceMappingURL=app.ee49dd98.js.map