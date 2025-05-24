window.onload = function () {
    const save = localStorage.getItem("data-theme");
    if (save) {
        document.documentElement.setAttribute("data-theme", save);
        document.getElementById("theme").checked = (save === "dark");
    }
    document.getElementById("theme").addEventListener("change", function () {
        if (document.getElementById("theme").checked === true) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("data-theme", "dark");
        }
        else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("data-theme", "light");
        }
    })
    document.getElementById("del").addEventListener("change", function () {
        localStorage.removeItem("data-theme");
        document.documentElement.setAttribute("data-theme", "light");
        document.getElementById("flag").checked = false;
    })
}