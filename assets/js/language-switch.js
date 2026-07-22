document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "site-language";
  let language = "zh";

  try {
    language = localStorage.getItem(storageKey) || language;
  } catch (error) {
    // The page still works with Chinese as the default when storage is unavailable.
  }

  const applyLanguage = (nextLanguage) => {
    language = nextLanguage === "en" ? "en" : "zh";

    document.querySelectorAll("[data-lang]").forEach((element) => {
      element.hidden = element.dataset.lang !== language;
    });

    document.querySelectorAll(".language-switch button").forEach((button) => {
      const selected = button.dataset.language === language;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", selected.toString());
    });

    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

    try {
      localStorage.setItem(storageKey, language);
    } catch (error) {
      // Ignore storage errors without interrupting the language switch.
    }
  };

  document.querySelectorAll(".language-switch button").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language));
  });

  applyLanguage(language);
});
