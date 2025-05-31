window.addEventListener("load", function () {
    const hint = document.createElement("div");
    hint.className = "hint";
    hint.textContent = "?";
    const cart1 = document.getElementById("cart1");
    const carts = document.getElementById("carts");
    const res1 =  document.getElementById("res1");
    const one = document.getElementById("one");
    const answer1 = document.getElementById("answer1");
    const yes1 = document.getElementById("yes1");
    const no1 = document.getElementById("no1");
    hint.addEventListener("click", function () {
        const clue = document.createElement("div");
        clue.className = "clue";
        if (cart1.style.display !== "none") {
            clue.textContent = " Этот памятник культуры являлся первой каменной церковью и находился в столице Древней Руси.";
            carts.appendChild(clue);
            clue.addEventListener("click", function () {
               this.remove();
            });
        }
    });
    carts.appendChild(hint);
    res1.addEventListener("click", res);
    function res() {
        one.style.display = "none";
        if (answer1.value === "Десятинная церковь, X век") {
            yes1.style.display = "block";
            cart1.style.display = "none";
        } else {
            no1.style.display = "block";
            cart1.style.display = "none";
        }
        res1.style.display = "none";
    }
});