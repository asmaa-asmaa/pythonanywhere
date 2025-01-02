(function () {
  "use strict";
  var e = {
      7359: function (e, t, a) {
        var n = a(5130),
          l = a(6768);
        function o(e, t) {
          const a = (0, l.g2)("router-view");
          return (0, l.uX)(), (0, l.Wv)(a);
        }
        var r = a(1241);
        const i = {},
          s = (0, r.A)(i, [["render", o]]);
        var u = s,
          c = a(1387),
          d = a(4232),
          f = a(144);
        const m = { class: "home" },
          b = { class: "cv mx-auto" },
          p = { class: "section mt-5" },
          k = { class: "cards mt-5 w-50 mx-auto" },
          v = {
            class: "text-blue",
            href: "https://e-commerce-multilang.web.app/",
            target: "_blank",
          },
          h = {
            class: "text-blue",
            href: "https://Restaurant-website-b19f4.web.app",
            target: "_blank",
          },
          g = {
            class: "text-blue",
            href: "https://animated-landing-page-b99e7.web.app/",
            target: "_blank",
          },
          w = { class: "touch mt-5 mb-5 w-50 mx-auto" },
          y = { class: "text-start mt-5 mb-5 text-white" },
          _ = { class: "text-start text-white" },
          x = { key: 0 };
        var F = {
          __name: "HomeView",
          setup(e) {
            const t = (0, f.Kh)({ name: "", email: "", msg: "" }),
              a = (0, f.KR)(""),
              o = async () => {
                try {
                  const e = await fetch("http://127.0.0.1:8000/api/submit/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(t),
                  });
                  if (!e.ok) throw new Error("failed to submit");
                  const n = await e.json();
                  a.value = n.message;
                } catch (e) {
                  console.error(e.message),
                    (a.value = "Error submitting the form.");
                }
              };
            return (e, r) => {
              const i = (0, l.g2)("v-col"),
                s = (0, l.g2)("v-row"),
                u = (0, l.g2)("v-btn"),
                c = (0, l.g2)("v-card-title"),
                f = (0, l.g2)("v-card-subtitle"),
                F = (0, l.g2)("v-icon"),
                L = (0, l.g2)("v-card-actions"),
                W = (0, l.g2)("v-card"),
                j = (0, l.g2)("v-text-field"),
                O = (0, l.g2)("v-textarea");
              return (
                (0, l.uX)(),
                (0, l.CE)("div", m, [
                  (0, l.bF)(s, null, {
                    default: (0, l.k6)(() => [
                      (0, l.bF)(
                        i,
                        { cols: "12" },
                        {
                          default: (0, l.k6)(() => [
                            (0, l.bF)(s, null, {
                              default: (0, l.k6)(() => [
                                (0, l.bF)(
                                  i,
                                  { cols: "12" },
                                  {
                                    default: (0, l.k6)(
                                      () =>
                                        r[3] ||
                                        (r[3] = [
                                          (0, l.Lk)(
                                            "h1",
                                            {
                                              class: "w-50 mx-auto text-white",
                                            },
                                            [
                                              (0, l.eW)(" Hello, I'm Asmaa "),
                                              (0, l.Lk)("br"),
                                              (0, l.Lk)(
                                                "span",
                                                { class: "title" },
                                                "full stack developer"
                                              ),
                                            ],
                                            -1
                                          ),
                                          (0, l.Lk)(
                                            "p",
                                            { class: "des w-50 mx-auto" },
                                            " full stack developer from Egypt. i have approximately 2 years experience in website development and building, i also work with frame work Vuejs3 (option api & composition api) for frontend development and python (django) framework for backend development ",
                                            -1
                                          ),
                                        ])
                                    ),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            }),
                            (0, l.Lk)("div", b, [
                              (0, l.bF)(
                                u,
                                {
                                  variant: "outlined",
                                  class: "title mt-5 px-2 pt-1 pb-1",
                                  size: "lg",
                                  rounded: "xl",
                                  onclick:
                                    "window.open('/static/frontend-cv.docx', '_blank')",
                                },
                                {
                                  default: (0, l.k6)(
                                    () =>
                                      r[4] ||
                                      (r[4] = [
                                        (0, l.Lk)("a", null, "open cv", -1),
                                      ])
                                  ),
                                  _: 1,
                                }
                              ),
                            ]),
                            (0, l.Lk)("div", p, [
                              (0, l.bF)(
                                u,
                                { variant: "outlined", class: "" },
                                {
                                  default: (0, l.k6)(
                                    () =>
                                      r[5] ||
                                      (r[5] = [(0, l.eW)("All Projects")])
                                  ),
                                  _: 1,
                                }
                              ),
                              (0, l.Lk)("div", k, [
                                (0, l.bF)(
                                  W,
                                  { class: "mb-5 mx-auto" },
                                  {
                                    default: (0, l.k6)(() => [
                                      r[11] ||
                                        (r[11] = (0, l.Lk)(
                                          "div",
                                          { class: "ig" },
                                          null,
                                          -1
                                        )),
                                      (0, l.bF)(c, null, {
                                        default: (0, l.k6)(
                                          () =>
                                            r[6] ||
                                            (r[6] = [
                                              (0, l.eW)("E-Commerce Store"),
                                            ])
                                        ),
                                        _: 1,
                                      }),
                                      (0, l.bF)(f, null, {
                                        default: (0, l.k6)(
                                          () =>
                                            r[7] ||
                                            (r[7] = [
                                              (0, l.eW)(
                                                "E-commerce store website where you can shop and buy many products"
                                              ),
                                            ])
                                        ),
                                        _: 1,
                                      }),
                                      (0, l.bF)(
                                        L,
                                        {
                                          class: "d-flex justify-space-between",
                                        },
                                        {
                                          default: (0, l.k6)(() => [
                                            (0, l.Lk)("span", null, [
                                              (0, l.bF)(
                                                F,
                                                {
                                                  color: "grey",
                                                  class: "chain",
                                                },
                                                {
                                                  default: (0, l.k6)(
                                                    () =>
                                                      r[8] ||
                                                      (r[8] = [
                                                        (0, l.eW)("mdi-link"),
                                                      ])
                                                  ),
                                                  _: 1,
                                                }
                                              ),
                                            ]),
                                            (0, l.Lk)("a", v, [
                                              r[10] ||
                                                (r[10] = (0, l.eW)("visit ")),
                                              (0, l.bF)(
                                                F,
                                                { size: "19" },
                                                {
                                                  default: (0, l.k6)(
                                                    () =>
                                                      r[9] ||
                                                      (r[9] = [
                                                        (0, l.eW)(
                                                          "mdi-arrow-right"
                                                        ),
                                                      ])
                                                  ),
                                                  _: 1,
                                                }
                                              ),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, l.bF)(
                                  W,
                                  { class: "mb-5 mx-auto" },
                                  {
                                    default: (0, l.k6)(() => [
                                      r[17] ||
                                        (r[17] = (0, l.Lk)(
                                          "div",
                                          { class: "igtw" },
                                          null,
                                          -1
                                        )),
                                      (0, l.bF)(c, null, {
                                        default: (0, l.k6)(
                                          () =>
                                            r[12] ||
                                            (r[12] = [(0, l.eW)("Restaurant")])
                                        ),
                                        _: 1,
                                      }),
                                      (0, l.bF)(f, null, {
                                        default: (0, l.k6)(
                                          () =>
                                            r[13] ||
                                            (r[13] = [
                                              (0, l.eW)(
                                                "Restaurant website where you can see the menu and find branches location"
                                              ),
                                            ])
                                        ),
                                        _: 1,
                                      }),
                                      (0, l.bF)(
                                        L,
                                        {
                                          class: "d-flex justify-space-between",
                                        },
                                        {
                                          default: (0, l.k6)(() => [
                                            (0, l.Lk)("span", null, [
                                              (0, l.bF)(
                                                F,
                                                {
                                                  color: "grey",
                                                  class: "chain",
                                                },
                                                {
                                                  default: (0, l.k6)(
                                                    () =>
                                                      r[14] ||
                                                      (r[14] = [
                                                        (0, l.eW)("mdi-link"),
                                                      ])
                                                  ),
                                                  _: 1,
                                                }
                                              ),
                                            ]),
                                            (0, l.Lk)("a", h, [
                                              r[16] ||
                                                (r[16] = (0, l.eW)("visit ")),
                                              (0, l.bF)(
                                                F,
                                                { size: "19" },
                                                {
                                                  default: (0, l.k6)(
                                                    () =>
                                                      r[15] ||
                                                      (r[15] = [
                                                        (0, l.eW)(
                                                          "mdi-arrow-right"
                                                        ),
                                                      ])
                                                  ),
                                                  _: 1,
                                                }
                                              ),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                (0, l.bF)(
                                  W,
                                  { class: "mx-auto" },
                                  {
                                    default: (0, l.k6)(() => [
                                      r[23] ||
                                        (r[23] = (0, l.Lk)(
                                          "div",
                                          { class: "igth" },
                                          null,
                                          -1
                                        )),
                                      (0, l.bF)(c, null, {
                                        default: (0, l.k6)(
                                          () =>
                                            r[18] ||
                                            (r[18] = [
                                              (0, l.eW)(
                                                "Animated Landing Page"
                                              ),
                                            ])
                                        ),
                                        _: 1,
                                      }),
                                      (0, l.bF)(
                                        f,
                                        {
                                          style: { "white-space": "pre-wrap" },
                                        },
                                        {
                                          default: (0, l.k6)(
                                            () =>
                                              r[19] ||
                                              (r[19] = [
                                                (0, l.eW)(
                                                  "landing page for website where full of animations"
                                                ),
                                              ])
                                          ),
                                          _: 1,
                                        }
                                      ),
                                      (0, l.bF)(
                                        L,
                                        {
                                          class: "d-flex justify-space-between",
                                        },
                                        {
                                          default: (0, l.k6)(() => [
                                            (0, l.Lk)("span", null, [
                                              (0, l.bF)(
                                                F,
                                                {
                                                  color: "grey",
                                                  class: "chain",
                                                },
                                                {
                                                  default: (0, l.k6)(
                                                    () =>
                                                      r[20] ||
                                                      (r[20] = [
                                                        (0, l.eW)("mdi-link"),
                                                      ])
                                                  ),
                                                  _: 1,
                                                }
                                              ),
                                            ]),
                                            (0, l.Lk)("a", g, [
                                              r[22] ||
                                                (r[22] = (0, l.eW)("visit ")),
                                              (0, l.bF)(
                                                F,
                                                { size: "19" },
                                                {
                                                  default: (0, l.k6)(
                                                    () =>
                                                      r[21] ||
                                                      (r[21] = [
                                                        (0, l.eW)(
                                                          "mdi-arrow-right"
                                                        ),
                                                      ])
                                                  ),
                                                  _: 1,
                                                }
                                              ),
                                            ]),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                            ]),
                            (0, l.Lk)("div", w, [
                              r[29] ||
                                (r[29] = (0, l.Lk)(
                                  "h2",
                                  { class: "title mb-5" },
                                  "Get in Touch",
                                  -1
                                )),
                              r[30] ||
                                (r[30] = (0, l.Lk)(
                                  "p",
                                  null,
                                  " have a project in mind? looking for a partner ? reach out through the form and i will get back to you ",
                                  -1
                                )),
                              (0, l.Lk)("p", y, [
                                (0, l.bF)(F, null, {
                                  default: (0, l.k6)(
                                    () =>
                                      r[24] ||
                                      (r[24] = [(0, l.eW)("mdi-email")])
                                  ),
                                  _: 1,
                                }),
                                r[25] ||
                                  (r[25] = (0, l.eW)(" asmaaradi0@gmail.com ")),
                              ]),
                              (0, l.Lk)("p", _, [
                                (0, l.bF)(F, null, {
                                  default: (0, l.k6)(
                                    () =>
                                      r[26] ||
                                      (r[26] = [(0, l.eW)("mdi-phone")])
                                  ),
                                  _: 1,
                                }),
                                r[27] || (r[27] = (0, l.eW)("01123797183 ")),
                              ]),
                              (0, l.Lk)(
                                "form",
                                {
                                  onSubmit: (0, n.D$)(o, ["prevent"]),
                                  method: "POST",
                                  class: "d-flex flex-column mt-5",
                                },
                                [
                                  (0, l.bF)(
                                    j,
                                    {
                                      modelValue: t.name,
                                      "onUpdate:modelValue":
                                        r[0] || (r[0] = (e) => (t.name = e)),
                                      label: "Your Name",
                                      id: "name",
                                      required: "",
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                  (0, l.bF)(
                                    j,
                                    {
                                      modelValue: t.email,
                                      "onUpdate:modelValue":
                                        r[1] || (r[1] = (e) => (t.email = e)),
                                      id: "email",
                                      label: "Your E-mail",
                                      required: "",
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                  (0, l.bF)(
                                    O,
                                    {
                                      modelValue: t.msg,
                                      "onUpdate:modelValue":
                                        r[2] || (r[2] = (e) => (t.msg = e)),
                                      label: "Your Request",
                                    },
                                    null,
                                    8,
                                    ["modelValue"]
                                  ),
                                  (0, l.bF)(
                                    u,
                                    {
                                      rounded: "sm",
                                      size: "sm",
                                      class: "title mt-5 w-25 mx-auto",
                                      style: { border: "1px solid grey" },
                                      type: "submit",
                                    },
                                    {
                                      default: (0, l.k6)(
                                        () =>
                                          r[28] ||
                                          (r[28] = [(0, l.eW)("submit")])
                                      ),
                                      _: 1,
                                    }
                                  ),
                                ],
                                32
                              ),
                              a.value
                                ? ((0, l.uX)(),
                                  (0, l.CE)("p", x, (0, d.v_)(a.value), 1))
                                : (0, l.Q3)("", !0),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }),
                ])
              );
            };
          },
        };
        const L = (0, r.A)(F, [["__scopeId", "data-v-5ae9bf8b"]]);
        var W = L;
        const j = [{ path: "/", name: "home", component: W }],
          O = (0, c.aE)({ history: (0, c.LA)("/"), routes: j });
        var E = O,
          V = a(782),
          S = (0, V.y$)({
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {},
          }),
          P = (a(5524), a(7768)),
          T = a(1920),
          A = a(5741);
        const C = (0, P.$N)({ components: T, directives: A });
        (0, n.Ef)(u).use(C).use(S).use(E).mount("#app");
      },
    },
    t = {};
  function a(n) {
    var l = t[n];
    if (void 0 !== l) return l.exports;
    var o = (t[n] = { exports: {} });
    return e[n].call(o.exports, o, o.exports, a), o.exports;
  }
  (a.m = e),
    (function () {
      var e = [];
      a.O = function (t, n, l, o) {
        if (!n) {
          var r = 1 / 0;
          for (c = 0; c < e.length; c++) {
            (n = e[c][0]), (l = e[c][1]), (o = e[c][2]);
            for (var i = !0, s = 0; s < n.length; s++)
              (!1 & o || r >= o) &&
              Object.keys(a.O).every(function (e) {
                return a.O[e](n[s]);
              })
                ? n.splice(s--, 1)
                : ((i = !1), o < r && (r = o));
            if (i) {
              e.splice(c--, 1);
              var u = l();
              void 0 !== u && (t = u);
            }
          }
          return t;
        }
        o = o || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
        e[c] = [n, l, o];
      };
    })(),
    (function () {
      a.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return a.d(t, { a: t }), t;
      };
    })(),
    (function () {
      a.d = function (e, t) {
        for (var n in t)
          a.o(t, n) &&
            !a.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      };
    })(),
    (function () {
      a.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      a.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      var e = { 524: 0 };
      a.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, n) {
          var l,
            o,
            r = n[0],
            i = n[1],
            s = n[2],
            u = 0;
          if (
            r.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (l in i) a.o(i, l) && (a.m[l] = i[l]);
            if (s) var c = s(a);
          }
          for (t && t(n); u < r.length; u++)
            (o = r[u]), a.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return a.O(c);
        },
        n = (self["webpackChunkmeportfolio"] =
          self["webpackChunkmeportfolio"] || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var n = a.O(void 0, [504], function () {
    return a(7359);
  });
  n = a.O(n);
})();
//# sourceMappingURL=app.36457543.js.map
