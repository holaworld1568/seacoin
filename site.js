/* Fills [data-site] elements from window.SITE (config.js). Without JS the
   same placeholder text already written in the HTML stays visible. */
(function () {
  var S = window.SITE || {};
  var nodes = document.querySelectorAll("[data-site]");
  for (var i = 0; i < nodes.length; i++) {
    var key = nodes[i].getAttribute("data-site");
    if (S[key] != null) nodes[i].textContent = String(S[key]);
  }
  var mails = document.querySelectorAll("[data-site-mail]");
  for (var j = 0; j < mails.length; j++) {
    if (S.email && S.email.indexOf("@") > 0) {
      mails[j].setAttribute("href", "mailto:" + S.email);
    } else {
      mails[j].removeAttribute("href");
    }
  }
  var t = document.documentElement.getAttribute("data-title");
  if (t && S.appName) document.title = t + " — " + S.appName;
})();
