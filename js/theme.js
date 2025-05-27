window.onload = function () {
    const save = localStorage.getItem("data-theme");
    const theme = document.getElementById("theme");
    if (save) {
        document.documentElement.setAttribute("data-theme", save);
        if (theme) {
            theme.value = (save === "dark");
        }
    }
    if (theme) {
        theme.addEventListener("change", function () {
                const value = theme.value;
                document.documentElement.setAttribute("data-theme", value);
                localStorage.setItem("data-theme", value);
            });
        }
    }