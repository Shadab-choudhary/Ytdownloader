(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    44: function (n, e, t) {},
    45: function (n, e, t) {
      "use strict";
      t.r(e);
      var i,
        a,
        o,
        c,
        r,
        s,
        d,
        l,
        p,
        x,
        h,
        j,
        b,
        g,
        f,
        m,
        O,
        u,
        w,
        y,
        v,
        k,
        I,
        D,
        z,
        L,
        S,
        T,
        E,
        R,
        C,
        F = t(1),
        P = t.n(F),
        G = t(10),
        V = t.n(G),
        M = t(2),
        B = t(5),
        U = t(3),
        A = "375px",
        H = "425px",
        J = "768px",
        N = "1024px",
        Y = "1440px",
        _ = "2560px",
        K = {
          mobileS: "(min-width: ".concat("320px", ")"),
          mobileM: "(min-width: ".concat(A, ")"),
          mobileL: "(min-width: ".concat(H, ")"),
          tablet: "(min-width: ".concat(J, ")"),
          laptop: "(min-width: ".concat(N, ")"),
          laptopL: "(min-width: ".concat(Y, ")"),
          desktop: "(min-width: ".concat(_, ")"),
          desktopL: "(min-width: ".concat(_, ")"),
        },
        Q = t(11),
        W = t.n(Q),
        q = t(0);
      var X = function () {
          var n = Object(F.useState)(""),
            e = Object(B.a)(n, 2),
            t = e[0],
            i = e[1],
            a = Object(F.useState)(!1),
            o = Object(B.a)(a, 2),
            c = o[0],
            r = o[1],
            s = Object(F.useState)(!1),
            d = Object(B.a)(s, 2),
            l = d[0],
            p = d[1],
            x = function (n) {
              if ((n.preventDefault(), t)) {
                r(!0);
                var e = { url: t },
                  i = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(e),
                  };
                fetch("/api/", i)
                  .then(function (n) {
                    return n.json();
                  })
                  .then(function (n) {
                    "Video" === n.type && window.open(n.file, "_blank"),
                      "Image" === n.type && window.open(n.file, "_blank"),
                      r(!1);
                  });
              }
            };
          return Object(q.jsxs)(q.Fragment, {
            children: [
              Object(q.jsxs)(an, {
                children: [
                  Object(q.jsxs)($, {
                    children: [
                      Object(q.jsxs)(nn, {
                        href: "",
                        children: [
                          "Insta Downloader",
                          Object(q.jsx)("span", {
                            style: { fontSize: "12px" },
                            children: "\xa0\xa0\xa0-By Shadab",
                          }),
                        ],
                      }),
                      Object(q.jsxs)(tn, {
                        onClick: function () {
                          return p(!l);
                        },
                        children: [
                          Object(q.jsx)("span", {}),
                          Object(q.jsx)("span", {}),
                          Object(q.jsx)("span", {}),
                        ],
                      }),
                      Object(q.jsxs)(en, {
                        isOpen: l,
                        children: [
                          Object(q.jsx)(Z, {
                            href: "../facebook/index.html",
                            children: "Facebook Downloader",
                          }),
                          Object(q.jsx)(Z, {
                            href: "../index.html",
                            children: "Youtube Downloader",
                          }),
                          Object(q.jsx)(Z, {
                            href: "#",
                            children: "DailyMotion/Adult site Downloader",
                          }),
                          Object(q.jsx)(Z, {
                            href: "#",
                            children: "Soundcloud Downloader",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(q.jsxs)(on, {
                    children: [
                      Object(q.jsx)(dn, {
                        children: "Instagram Media Downloader",
                      }),
                      Object(q.jsx)("p", {
                        children:
                          "Note: This webapp will not work Deployed Download the Source code and Run on your Localhost it will work",
                      }),
                      c
                        ? Object(q.jsx)(W.a, {
                            type: "Hearts",
                            color: "#ff0fa7",
                            height: "100",
                            width: "100",
                          })
                        : Object(q.jsxs)(cn, {
                            children: [
                              Object(q.jsx)(rn, {
                                placeholder: "Enter the Instagram URL Here",
                                onChange: function (n) {
                                  return i(n.target.value);
                                },
                                onKeyPress: function (n) {
                                  "Enter" === n.code && x(n);
                                },
                              }),
                              Object(q.jsx)(sn, {
                                onClick: x,
                                children: "Download Now",
                              }),
                            ],
                          }),
                    ],
                  }),
                ],
              }),
              Object(q.jsx)(bn, { children: "Insta Downloader features" }),
              Object(q.jsxs)(ln, {
                children: [
                  Object(q.jsx)(pn, {
                    src: "https://igram.io/static/img/app-instagram-feed.jpg",
                  }),
                  Object(q.jsxs)(xn, {
                    children: [
                      Object(q.jsx)(hn, { children: "Photos Downloader" }),
                      Object(q.jsx)(jn, {
                        children:
                          "Instagram photo downloader provided by Insta Downloader is a great tool for saving images from Instagram posts. With Insta Downloader you can download a single posts image as well as download multiple Instagram photos.",
                      }),
                    ],
                  }),
                ],
              }),
              Object(q.jsxs)(ln, {
                children: [
                  Object(q.jsx)(pn, {
                    src: "https://igram.io/static/img/instagram-video.jpg",
                  }),
                  Object(q.jsxs)(xn, {
                    children: [
                      Object(q.jsx)(hn, { children: "Videos Downloader" }),
                      Object(q.jsx)(jn, {
                        children:
                          "Insta Downloader is created to enable you to download IG videos for any purpose you want. Insta Downloader supports video downloading for singular video and multiple video from carousels.",
                      }),
                    ],
                  }),
                ],
              }),
              Object(q.jsxs)(ln, {
                children: [
                  Object(q.jsx)(pn, {
                    src: "https://igram.io/static/img/applications-instagram-igtv.jpg",
                  }),
                  Object(q.jsxs)(xn, {
                    children: [
                      Object(q.jsx)(hn, { children: "IGTV Downloader" }),
                      Object(q.jsx)(jn, {
                        children:
                          "IGTV is a long video type, in case you can\u2019t watch it now, you can download IGTV videos to your device, to be sure that you can return to watching later, without need to be online or in case the IGTV can be deleted..",
                      }),
                    ],
                  }),
                ],
              }),
              Object(q.jsxs)(ln, {
                children: [
                  Object(q.jsx)(pn, {
                    src: "https://igram.io/static/img/instagram-reels.jpg",
                  }),
                  Object(q.jsxs)(xn, {
                    children: [
                      Object(q.jsx)(hn, { children: "Reel Downloader" }),
                      Object(q.jsx)(jn, {
                        children:
                          "REEL is a new video format that clone the principle of TikTok. Download Instagram REEL videos with help of Insta Downloader. Our REEL downloader can help you to save your favorite Reels videos.",
                      }),
                    ],
                  }),
                ],
              }),
              Object(q.jsx)(bn, { children: "How to download ?" }),
              Object(q.jsx)(gn, {
                children: Object(q.jsxs)(fn, {
                  children: [
                    Object(q.jsx)(mn, {
                      children: Object(q.jsxs)(wn, {
                        children: [
                          Object(q.jsx)(On, {
                            children: Object(q.jsx)(un, {
                              src: "https://igram.io/static/img/instagram-post-copy-link.jpg",
                            }),
                          }),
                          Object(q.jsxs)(yn, {
                            children: [
                              Object(q.jsx)(vn, { children: "Copy the URL" }),
                              Object(q.jsx)(kn, {
                                children:
                                  "copy the URL of the photo, video, carousel or IGTV.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(q.jsx)(mn, {
                      children: Object(q.jsxs)(wn, {
                        children: [
                          Object(q.jsx)(On, {
                            children: Object(q.jsx)(un, {
                              src: "https://igram.io/static/img/instagram-link-insert.jpg",
                            }),
                          }),
                          Object(q.jsxs)(yn, {
                            children: [
                              Object(q.jsx)(vn, { children: "Paste the link" }),
                              Object(q.jsx)(kn, {
                                children:
                                  "Paste link into the Insta Downloader field and click the Download button",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(q.jsx)(mn, {
                      children: Object(q.jsxs)(wn, {
                        children: [
                          Object(q.jsx)(On, {
                            children: Object(q.jsx)(un, {
                              src: "https://igram.io/static/img/results.jpg",
                            }),
                          }),
                          Object(q.jsxs)(yn, {
                            children: [
                              Object(q.jsx)(vn, {
                                children: "Download Successful",
                              }),
                              Object(q.jsx)(kn, {
                                children:
                                  "Insta Downloader will sync your URL and creates a downloadable link",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              Object(q.jsx)(In, {
                children: Object(q.jsxs)(Dn, {
                  children: [
                    Object(q.jsxs)(zn, {
                      children: [
                        "\xa92021 ",
                        Object(q.jsx)("strong", {
                          children: "Insta Downloader By Shadab",
                        }),
                        ", Made with \u2764\ufe0f",
                      ],
                    }),
                    Object(q.jsxs)(Ln, {
                      children: [
                        Object(q.jsx)(Sn, {
                          href: "#",
                          children: "Github Link",
                        }),
                        Object(q.jsx)(Sn, {
                          href: "",
                          children: "Instagram Link",
                        }),
                        Object(q.jsx)(Sn, {
                          href: "#",
                          children: "Other Awesome Projects",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Z = U.a.a(
          i ||
            (i = Object(M.a)([
              "\n  padding: 1rem 2rem;\n  cursor: pointer;\n  \n  text-align: center;\n  text-decoration: none;\n  color: #67bc98;\n  transition: all 0.3s ease-in;\n  font-size: 0.9rem;\n  &:hover {\n    color: #f26896;\n  }\n",
            ]))
        ),
        $ = U.a.div(
          a ||
            (a = Object(M.a)([
              "\n  padding: 0 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  background: white;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n",
            ]))
        ),
        nn = U.a.a(
          o ||
            (o = Object(M.a)([
              "\n  padding: 1rem 0;\n  color: #7b7fda;\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 1.7rem;\n  span {\n    font-weight: 300;\n    font-size: 1.3rem;\n  }\n",
            ]))
        ),
        en = U.a.div(
          c ||
            (c = Object(M.a)([
              "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  @media (max-width: 768px) {\n    overflow: hidden;\n    flex-direction: column;\n    max-height: ",
              ";\n    transition: max-height 0.3s ease-in;\n    width: 100%;\n  }\n",
            ])),
          function (n) {
            return n.isOpen ? "300px" : "0";
          }
        ),
        tn = U.a.div(
          r ||
            (r = Object(M.a)([
              "\n  display: none;\n  flex-direction: column;\n  cursor: pointer;\n  span {\n    height: 2px;\n    width: 25px;\n    background: #7b7fda;\n    margin-bottom: 4px;\n    border-radius: 5px;\n  }\n  @media (max-width: 768px) {\n    display: flex;\n  }\n",
            ]))
        ),
        an = U.a.div(
          s ||
            (s = Object(M.a)([
              "\nbackground-color:#0d1117;\nwidth:100%;\nheight:100vh;\ndisplay:grid;\nplace-items:center;\nbackground: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n\tbackground-size: 400% 400%;\n\tanimation: gradient 15s ease infinite;\n\theight: 100vh;\n  @keyframes gradient {\n    0% {\n      background-position: 0% 50%;\n    }\n    50% {\n      background-position: 100% 50%;\n    }\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n  \n\n",
            ]))
        ),
        on = U.a.div(
          d ||
            (d = Object(M.a)([
              "\ndisplay:flex;\nflex-direction: column;\npadding:10px;\ntext-align:center;\n",
            ]))
        ),
        cn = U.a.div(
          l ||
            (l = Object(M.a)([
              "\ndisplay:flex;\npadding:10px;\n\nborder-radius:5px;\n\ntext-align:center;\n\n",
            ]))
        ),
        rn = U.a.input(
          p ||
            (p = Object(M.a)([
              "\ndisplay:flex;\n    flex-grow: 1;\n    height:40px;\n    border-radius:1px;\n    overflow:hidden;\n    margin-left:4px;\n    outline: 0;\n    border: 0;\n    :focus-within{\n        box-shadow: 0 0 0 2px #0d1117;\n    }\n    color:#c9d1d9;\n    // outline: none;\n    // border-radius: 10px;\n    // border-color: violet;\n    border-style: solid;\n\n    /* Portrait and Landscape */\n@media only screen \n  and (min-device-width: 320px) \n  and (max-device-width: 480px)\n  and (-webkit-min-device-pixel-ratio: 2) {\n    height:33px;\n    font-size:10px;\n}\n \n",
            ]))
        ),
        sn = U.a.button(
          x ||
            (x = Object(M.a)([
              "\nbackground-color: #292929;  \ndisplay:flex;\njustify-content:center;\nalign-items:center;\n\nborder: 2px solid #0d1117;\npadding:4px 25px;\nmargin-left:10px;\ncursor:pointer;\ncolor:#ffffffa1;\nfont-weight:bold;\nfont-family: 'Roboto', cursive;\ntransition-duration: 0.4s;\n\n@media only screen \n  and (min-device-width: 320px) \n  and (max-device-width: 480px)\n  and (-webkit-min-device-pixel-ratio: 2) {\n    height:40px;\n    font-size:10px;\n}\n&:hover,\n  &:focus {\n    background-color: #4a4a4a;  \n  }\n",
            ]))
        ),
        dn = U.a.h1(
          h ||
            (h = Object(M.a)([
              "\n\nfont-family: cursive;\ncolor: #fff;\ndisplay:flex;\nfont-size:50px;\n\n\n\n@media only screen \n  and (min-device-width: 320px) \n  and (max-device-width: 480px)\n  and (-webkit-min-device-pixel-ratio: 2) {\n    font-size:25px;\n    text-align: justify;\n    text-justify: inter-word;\n    text-align:center;\n}",
            ]))
        ),
        ln = U.a.div(
          j ||
            (j = Object(M.a)([
              "\n  display: flex;\n  flex-direction: column;\n\n  border: 1px solid gray;\n  box-shadow: 5px 5px #ccc;\n  padding: 10px;\n  margin: 10px;\n\n  @media ",
              " {\n    flex-direction: row;\n  }\n",
            ])),
          K.laptop
        ),
        pn = U.a.img(
          b ||
            (b = Object(M.a)([
              "\nmax-width: 700px !important;\n\n  height: auto;\n",
            ]))
        ),
        xn = U.a.div(g || (g = Object(M.a)(["padding: 10px;\n\n"]))),
        hn = U.a.div(
          f ||
            (f = Object(M.a)([
              "\nfont-size: 40px;\nfont-weight: bolder;\ntext-align: center\n",
            ]))
        ),
        jn = U.a.div(
          m ||
            (m = Object(M.a)([
              "\nfont-size: 20px;\nletter-spacing: 2px;\nmargin-top: 30px !important;\npadding: 40px;\ncolor:#888888;    \ntext-shadow: 2px 0 #888888;\n",
            ]))
        ),
        bn = U.a.div(
          O ||
            (O = Object(M.a)([
              "\nfont-size: 50px;\ntext-align: center;\nfont-weight: bold;\ncolor: #444;\ntext-shadow: \n  1px 0px 1px #ccc, 0px 1px 1px #eee, \n  2px 1px 1px #ccc, 1px 2px 1px #eee,\n  3px 2px 1px #ccc, 2px 3px 1px #eee,\n  4px 3px 1px #ccc, 3px 4px 1px #eee,\n  5px 4px 1px #ccc, 4px 5px 1px #eee,\n  6px 5px 1px #ccc, 5px 6px 1px #eee,\n  7px 6px 1px #ccc;\n  margin-bottom: 30px;\n",
            ]))
        ),
        gn = U.a.div(
          u ||
            (u = Object(M.a)([
              "\nmax-width: 1600px;\nmargin: 0 auto;\n color: #272727;\nfont-family: 'Quicksand', serif;\nfont-style: normal;\nfont-weight: 400;\nletter-spacing: 0;\npadding: 1rem;\n  box-sizing: border-box;\n\n  \n  &:before,\n  &:after {\n  box-sizing: border-box;\n}\n",
            ]))
        ),
        fn = U.a.ul(
          w ||
            (w = Object(M.a)([
              "\ndisplay: flex;\nflex-wrap: wrap;\nlist-style: none;\nmargin: 0;\npadding: 0;\n",
            ]))
        ),
        mn = U.a.li(
          y || (y = Object(M.a)(["\ndisplay: flex;\n  padding: 1rem;\n"]))
        ),
        On = U.a.div(v || (v = Object(M.a)(["\nobject-fit: cover;\n"]))),
        un = U.a.img(
          k ||
            (k = Object(M.a)([
              "\nheight: auto;\n  max-width: 100%;\n  vertical-align: middle;\n  \n",
            ]))
        ),
        wn = U.a.div(
          I ||
            (I = Object(M.a)([
              "\nbackground-color: white;\n  border-radius: 0.25rem;\n  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;",
            ]))
        ),
        yn = U.a.div(
          D ||
            (D = Object(M.a)([
              "\n  padding: 0.5rem;\n  background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%);",
            ]))
        ),
        vn = U.a.h2(
          z ||
            (z = Object(M.a)([
              "\n  color: #ffffff;\n  font-size: 1.1rem;\n  font-weight: 700;\n  letter-spacing: 1px;\n  text-transform: capitalize;\n  margin: 0px;",
            ]))
        ),
        kn = U.a.p(
          L ||
            (L = Object(M.a)([
              "\n  color: #ffffff;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  margin-bottom: 1.25rem;    \n  font-weight: 400;",
            ]))
        ),
        In = U.a.div(
          S ||
            (S = Object(M.a)([
              "\nbackground: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n  display: table;\n  width: 100vw;\n  height: 8rem;\n  text-align: center;\n  padding: 1rem;\n  font-family: 'Arial', sans-serif;\n  font-size: .875rem;\n",
            ]))
        ),
        Dn = U.a.div(
          T ||
            (T = Object(M.a)([
              "\ndisplay: table-cell;\n  vertical-align: middle;",
            ]))
        ),
        zn = U.a.div(
          E ||
            (E = Object(M.a)([
              "\n  color: #ccc;\n  letter-spacing: .025rem;\n  margin-bottom: 1.5rem;\n  display: block;",
            ]))
        ),
        Ln = U.a.div(R || (R = Object(M.a)([""]))),
        Sn = U.a.a(
          C ||
            (C = Object(M.a)([
              "\n  color: #fff;\n  text-decoration: none;\n  margin: 0 .5rem;\n  display: inline-block;\n\n  &:hover{\n    color: #f26896;\n  transition: color .15s ease-in-out;\n  }\n",
            ]))
        ),
        Tn =
          (t(44),
          function (n) {
            n &&
              n instanceof Function &&
              t
                .e(3)
                .then(t.bind(null, 46))
                .then(function (e) {
                  var t = e.getCLS,
                    i = e.getFID,
                    a = e.getFCP,
                    o = e.getLCP,
                    c = e.getTTFB;
                  t(n), i(n), a(n), o(n), c(n);
                });
          });
      V.a.render(
        Object(q.jsx)(P.a.StrictMode, { children: Object(q.jsx)(X, {}) }),
        document.getElementById("root")
      ),
        Tn();
    },
  },
  [[45, 1, 2]],
]);
