window.onload = function () {
    const save = localStorage.getItem("data-theme");
    const themeToggle = document.getElementById("theme");
    if (save) {
        document.documentElement.setAttribute("data-theme", save);
        if (themeToggle) {
            themeToggle.checked = (save === "dark");
        }
    }
    if (themeToggle) {
        themeToggle.addEventListener("change", function () {
            if (themeToggle.checked === true) {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("data-theme", "dark");
            } else {
                document.documentElement.setAttribute("data-theme", "light");
                localStorage.setItem("data-theme", "light");
            }
        });
    }
}