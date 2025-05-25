window.addEventListener("load", function () {
    const hint = document.createElement("div");
    hint.className = "hint";
    hint.textContent = "?";
    hint.addEventListener("mouseenter", function () {
        const clue = document.createElement("div");
        clue.className = "clue";
        if (document.getElementById("cart1").style.display !== "none") {
            clue.textContent = " Этот памятник культуры являлся первой каменной церковью и находился в столице Древней Руси.";
            document.getElementById("carts").appendChild(clue);
        }
        /*else if (document.getElementById("cart2").style.display !== "none") {
            clue.textContent = " Этот памятник культуры был основан в честь одной из главнейших побед русского оружия эпохи Древней Руси.";
            document.getElementById("carts").appendChild(clue);
        }*/
    });
    hint.addEventListener("mouseleave", function () {
        const clue = document.getElementsByClassName("clue");
        while (clue.length > 0) {
            clue[0].parentNode.removeChild(clue[0]);
        }
    });
    document.getElementById("carts").appendChild(hint);
    document.getElementById("res1").addEventListener("click", res1);
    /*document.getElementById("next").addEventListener("click", next);
    document.getElementById("res2").addEventListener("click", res2);*/
    function res1() {
        /*document.getElementById("one").style.display = "none";*/
        if (document.getElementById("answer1").value === "Десятинная церковь, X век") {
            document.getElementById("yes1").style.display = "block";
            document.getElementById("cart1").style.display = "none";
        } else {
            document.getElementById("no1").style.display = "block";
            document.getElementById("cart1").style.display = "none";
        }
        document.getElementById("res1").style.display = "none";
        /*document.getElementById("next").style.display = "block";*/
    }
});