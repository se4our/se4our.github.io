(function() {
    window.addEventListener('load', init);
    function init() {
        document.getElementById("res").addEventListener("click", res);
    }
    let local_res = localStorage.getItem("last_res");
    if (local_res) document.getElementById("last-res").textContent = local_res;
    function res() {
        let ans = 0;
        if (document.getElementById("s1").value === "c") ans++;
        if (document.getElementById("s2").value === "a") ans++;
        if (document.getElementById("s3").value === "c") ans++;
        if (document.getElementById("s4").value === "b") ans++;
        if (document.getElementById("s5").value === "десятинная") ans++;
        if (document.getElementById("s6").value === "владимирмономах") ans++;
        if (document.getElementById("s7").value === "крестовокупольный") ans++;
        if (document.getElementById("s8").value === "владимирская") ans++;
        if (document.getElementById("s9").value === "киев") ans++;
        if (document.getElementById("s10").value === "новгород") ans++;
        document.getElementById("b1").style.display = "none";
        document.getElementById("res").style.display = "none";
        document.getElementById("balls").style.display = "block";
        document.getElementById("result").style.display = "block";
        document.getElementById("balls").textContent = "Ваш результат: " + ans + "/10";
        if (ans < 5) {
            document.getElementById("result").textContent = "Оценка: 2";
            document.getElementById("smail-2").style.display = "block";
        }
        if (ans >= 5 && ans <= 6) {
            document.getElementById("result").textContent = "Оценка: 3";
            document.getElementById("smail-3").style.display = "block";
        }
        if (ans >= 7 && ans <= 8) {
            document.getElementById("result").textContent = "Оценка: 4";
            document.getElementById("smail-4").style.display = "block";
        }
        if (ans > 8) {
            document.getElementById("result").textContent = "Оценка: 5";
            document.getElementById("smail-5").style.display = "block";
        }
        let last_res = "Ваш прошлый результат: " + ans + "/10";
        localStorage.setItem("last-res", last_res);
  }
})();