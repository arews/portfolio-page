// aresandvik.com — language toggle
(function () {
  var STORAGE_KEY = "lang";
  var DEFAULT_LANG = "no";

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore (e.g. private mode) */
    }
  }

  function applyLang(lang) {
    document.documentElement.classList.remove("lang-no", "lang-en");
    document.documentElement.classList.add("lang-" + lang);
    document.documentElement.setAttribute("lang", lang);

    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.textContent = lang === "no" ? "EN" : "NO";
      toggle.setAttribute(
        "aria-label",
        lang === "no" ? "Switch to English" : "Bytt til norsk"
      );
    }
  }

  var initialLang = getStoredLang() || DEFAULT_LANG;
  applyLang(initialLang);

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.getElementById("lang-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var current = document.documentElement.classList.contains("lang-no")
        ? "no"
        : "en";
      var next = current === "no" ? "en" : "no";
      applyLang(next);
      setStoredLang(next);
    });
  });
})();
