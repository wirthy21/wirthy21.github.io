(() => {
    "use strict";

    const root = document.documentElement;

    // Ausschließlich Dark Mode verwenden.
    root.classList.remove("light");
    root.classList.add("dark");
    document.body.dataset.theme = "dark";

    // Eine eventuell früher gespeicherte Light-Mode-Auswahl entfernen.
    try {
        localStorage.removeItem("theme");
    } catch {
        // Die Seite bleibt auch ohne Zugriff auf localStorage im Dark Mode.
    }

    // Übergänge nach der initialen Darstellung wieder aktivieren.
    requestAnimationFrame(() => {
        document.body.classList.remove("notransition");
    });

    // Verhalten des mobilen Navigationsmenüs beibehalten.
    window.addEventListener("DOMContentLoaded", () => {
        const menuTrigger = document.getElementById("menu-trigger");
        const wrapper = document.querySelector(".wrapper");

        if (!menuTrigger || !wrapper) {
            return;
        }

        menuTrigger.addEventListener("change", function () {
            wrapper.classList.toggle("blurry", this.checked);
        });
    });
})();