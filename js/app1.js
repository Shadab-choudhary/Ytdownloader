(this["webpackJsonpyt-downloader"] =
  this["webpackJsonpyt-downloader"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    function (e, t, a) {
      e.exports = a(13);
    },
    ,
    ,
    ,
    ,
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {},
    function (e, t, a) {
      "use strict";
      a.r(t);
      var l = a(0),
        n = a.n(l),
        c = a(3),
        r = a.n(c),
        s = (a(9), a(1));
      a(10), a(11);
      var o = function (e) {
        var t = e.id,
          a = e.type;
        return n.a.createElement(
          "div",
          { className: "download" },
          n.a.createElement(
            "h2",
            null,
            "Download ",
            "mp3" === a ? "music" : "video",
            " file"
          ),
          n.a.createElement("iframe", {
            className: "button-api-frame",
            src: "https://api.vevioz.com/@api/button/".concat(a, "/").concat(t),
            width: "80%",
            height: "40%",
            allowtransparency: "true",
            scrolling: "yes",
            style: { border: "1px solid black", fontSize: "30px" },
          })
        );
      };
      a(12);
      var i = function () {
        return n.a.createElement(
          "div",
          { className: "default" },
          n.a.createElement("h1", null, "Paste the video url above")
        );
      };
      var m = function () {
        return n.a.createElement(
          "div",
          { style: { margin: "20px" } },
          n.a.createElement("h1", { style: { color: "red" } }, "Invalid url"),
          n.a.createElement("br", null),
          n.a.createElement("p", null, "Please Paste Valid URL")
        );
      };
      var d = function () {
        var e = Object(l.useState)(""),
          t = Object(s.a)(e, 2),
          a = t[0],
          c = t[1],
          r = Object(l.useState)(""),
          d = Object(s.a)(r, 2),
          u = d[0],
          E = d[1];
        return (
          Object(l.useEffect)(
            function () {
              var e = a.replace("https://www.youtube.com/watch?v=", "");
              console.log(e), E(e);
            },
            [a]
          ),
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              "header",
              { class: "header-area" },
              n.a.createElement(
                "div",
                { class: "navbar-area" },
                n.a.createElement(
                  "div",
                  { class: "container" },
                  n.a.createElement(
                    "nav",
                    { class: "site-navbar" },
                    n.a.createElement(
                      "a",
                      { href: "#home", class: "site-logo" },
                      "YT Grab",
                      " "
                    ),
                    n.a.createElement(
                      "ul",
                      null,
                      n.a.createElement(
                        "li",
                        null,
                        n.a.createElement(
                          "a",
                          { href: "../facebook/index.html" },
                          "Facebook Downloader"
                        )
                      ),
                      n.a.createElement(
                        "li",
                        null,
                        n.a.createElement(
                          "a",
                          { href: "../instagram/index.html" },
                          "Instagram Downloader"
                        )
                      ),
                      n.a.createElement(
                        "li",
                        null,
                        n.a.createElement(
                          "a",
                          { href: "#" },
                          "Spotify Downloader"
                        )
                      ),
                      n.a.createElement(
                        "li",
                        null,
                        n.a.createElement(
                          "a",
                          { href: "#" },
                          "Soundcloud Downloader"
                        )
                      )
                    ),
                    n.a.createElement(
                      "button",
                      { class: "nav-toggler" },
                      n.a.createElement("span", null)
                    )
                  )
                )
              )
            ),
            n.a.createElement(
              "div",
              { className: "app" },
              n.a.createElement(
                "div",
                { className: "app__linkBox" },
                n.a.createElement(
                  "form",
                  {
                    onSubmit: function (e) {
                      return e.preventDefault();
                    },
                  },
                  n.a.createElement(
                    "h1",
                    { className: "utheading" },
                    "Youtube Video Downloader"
                  ),
                  n.a.createElement("input", {
                    value: a,
                    onChange: function (e) {
                      return c(e.target.value);
                    },
                    placeholder: "Paste youtube video url here...",
                  })
                )
              ),
              "" === a
                ? n.a.createElement(i, null)
                : n.a.createElement(
                    "div",
                    null,
                    a.startsWith("https://www.youtube.com/watch?v=") ||
                      a.startsWith("https://youtube.com/watch?v=") ||
                      a.startsWith("www.youtube.com/watch?v=") ||
                      a.startsWith("youtube.com/watch?v=") ||
                      a.startsWith("https://youtu.be/") ||
                      a.startsWith("https://youtube.com/shorts/") ||
                      a.startsWith("https://m.youtube.com/watch?v=") ||
                      a.startsWith("v=")
                      ? n.a.createElement(
                          "div",
                          null,
                          n.a.createElement(o, { id: u, type: "mp3" }),
                          n.a.createElement("br", null),
                          n.a.createElement(o, { id: u, type: "videos" })
                        )
                      : n.a.createElement(m, null)
                  )
            ),
            n.a.createElement(
              "div",
              { class: "head" },
              n.a.createElement("p", null, "Yt Grab Features")
            ),
            n.a.createElement(
              "section",
              null,
              n.a.createElement(
                "div",
                { class: "grid-flex" },
                n.a.createElement("div", { class: "col col-image img-1" }),
                n.a.createElement(
                  "div",
                  { class: "col col-text" },
                  n.a.createElement(
                    "div",
                    { class: "Aligner-item" },
                    n.a.createElement(
                      "p",
                      null,
                      "Using our Youtube downloader is the fast and easy way to download and save any YouTube video to MP3 or MP4. Simply copy YouTube URL, paste it on the search box."
                    )
                  )
                )
              ),
              n.a.createElement(
                "div",
                { class: "grid-flex" },
                n.a.createElement(
                  "div",
                  { class: "col col-image img-2" },
                  "\xa0"
                ),
                n.a.createElement(
                  "div",
                  { class: "col col-text col-left" },
                  n.a.createElement(
                    "div",
                    { class: "Aligner-item" },
                    n.a.createElement(
                      "p",
                      null,
                      "Download and convert YouTube videos as much as you want without limitation and always free.We support all device platforms. Easy to convert YouTube videos to MP3 files regardless of whether you are using Windows, Mac or Linux, Android, iPhone."
                    )
                  )
                )
              ),
              n.a.createElement(
                "div",
                { class: "grid-flex" },
                n.a.createElement(
                  "div",
                  { class: "col col-image img-3" },
                  "\xa0"
                ),
                n.a.createElement(
                  "div",
                  { class: "col col-text" },
                  n.a.createElement(
                    "div",
                    { class: "Aligner-item" },
                    n.a.createElement(
                      "p",
                      null,
                      "We support all video and audio formats conversion. You can easily convert YouTube videos to MP3, 3GP, MP4, WMA, M4A, FLV, WEBM and MO formats, etc."
                    )
                  )
                )
              ),
              n.a.createElement(
                "div",
                { class: "grid-flex" },
                n.a.createElement(
                  "div",
                  { class: "col col-image img-4" },
                  "\xa0"
                ),
                n.a.createElement(
                  "div",
                  { class: "col col-text col-left" },
                  n.a.createElement(
                    "div",
                    { class: "Aligner-item" },
                    n.a.createElement(
                      "p",
                      null,
                      "With the rising awareness of device security, people attach great importance to personal data. The service is totally clean with no virus under intense supervision based on security database."
                    )
                  )
                )
              )
            ),
            n.a.createElement(
              "div",
              { class: "main" },
              n.a.createElement(
                "div",
                { class: "head" },
                n.a.createElement("p", null, "How to Download")
              ),
              n.a.createElement(
                "ul",
                { class: "cards" },
                n.a.createElement(
                  "li",
                  { class: "cards_item" },
                  n.a.createElement(
                    "div",
                    { class: "card" },
                    n.a.createElement(
                      "div",
                      { class: "card_image" },
                      n.a.createElement("img", {
                        src: "https://en.savefrom.net/img/main/steps/step-1.png",
                      })
                    ),
                    n.a.createElement(
                      "div",
                      { class: "card_content" },
                      n.a.createElement(
                        "h2",
                        { class: "card_title" },
                        "Copy The URL"
                      ),
                      n.a.createElement(
                        "p",
                        { class: "card_text" },
                        "copy the URL of the photo, video from Youtube."
                      )
                    )
                  )
                ),
                n.a.createElement(
                  "li",
                  { class: "cards_item" },
                  n.a.createElement(
                    "div",
                    { class: "card" },
                    n.a.createElement(
                      "div",
                      { class: "card_image" },
                      n.a.createElement("img", {
                        src: "https://imag.malavida.com/mvimgbig/download-fs/savefrom-net-22076-1.jpg",
                      })
                    ),
                    n.a.createElement(
                      "div",
                      { class: "card_content" },
                      n.a.createElement(
                        "h2",
                        { class: "card_title" },
                        "Paste The Link"
                      ),
                      n.a.createElement(
                        "p",
                        { class: "card_text" },
                        "Paste link into the input field and wait sometime for the conversion"
                      )
                    )
                  )
                ),
                n.a.createElement(
                  "li",
                  { class: "cards_item" },
                  n.a.createElement(
                    "div",
                    { class: "card" },
                    n.a.createElement(
                      "div",
                      { class: "card_image" },
                      n.a.createElement("img", {
                        src: "https://en.savefrom.net/img/articles/youtube_com/new/any_page_en.jpg",
                      })
                    ),
                    n.a.createElement(
                      "div",
                      { class: "card_content" },
                      n.a.createElement(
                        "h2",
                        { class: "card_title" },
                        "Download Successful"
                      ),
                      n.a.createElement(
                        "p",
                        { class: "card_text" },
                        "Ytit will sync your URL and creates a downloadable link"
                      )
                    )
                  )
                )
              )
            ),
            n.a.createElement(
              "footer",
              null,
              n.a.createElement(
                "div",
                { class: "wrapper" },
                n.a.createElement(
                  "small",
                  null,
                  "\xa92022 ",
                  n.a.createElement("strong", null, "Yt Grab "),
                  ", Made with By Shadab \u2764\ufe0f"
                ),
                n.a.createElement(
                  "nav",
                  { class: "footer-nav" },
                  n.a.createElement("a", { href: "#" }, "Github Link"),
                  n.a.createElement("a", { href: "#" }, "Instagram Link"),
                  n.a.createElement(
                    "a",
                    { href: "#" },
                    "Other Awesome Projects"
                  )
                )
              )
            )
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      r.a.render(
        n.a.createElement(n.a.StrictMode, null, n.a.createElement(d, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  ],
  [[4, 1, 2]],
]);

