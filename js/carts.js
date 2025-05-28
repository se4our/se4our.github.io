window.addEventListener("load", function () {
    const hint = document.createElement("div");
    hint.className = "hint";
    hint.textContent = "?";
    hint.addEventListener("click", function () {
        const clue = document.createElement("div");
        clue.className = "clue";
        if (document.getElementById("cart1").style.display !== "none") {
            clue.textContent = " Этот памятник культуры являлся первой каменной церковью и находился в столице Древней Руси.";
            document.getElementById("carts").appendChild(clue);
            clue.addEventListener("click", function () {
               this.remove();
            });
        }
    });
    document.getElementById("carts").appendChild(hint);
    document.getElementById("res1").addEventListener("click", res1);
    function res1() {
        document.getElementById("one").style.display = "none";
        if (document.getElementById("answer1").value === "Десятинная церковь, X век") {
            document.getElementById("yes1").style.display = "block";
            document.getElementById("cart1").style.display = "none";
        } else {
            document.getElementById("no1").style.display = "block";
            document.getElementById("cart1").style.display = "none";
        }
        document.getElementById("res1").style.display = "none";
    }
});