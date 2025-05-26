window.onload = function () {
    const save = localStorage.getItem("data-theme");
    const theme = document.getElementById("theme");
    if (save) {
        document.documentElement.setAttribute("data-theme", save);
        if (theme) {
            theme.checked = (save === "dark");
        }
    }
    if (theme) {
        theme.addEventListener("change", function () {
            if (theme.checked === true) {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("data-theme", "dark");
            } else {
                document.documentElement.setAttribute("data-theme", "light");
                localStorage.setItem("data-theme", "light");
            }
        });
    }
}