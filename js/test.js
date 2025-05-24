(function() {
    window.addEventListener('load', init);
    function init() {
      document.getElementById("res").addEventListener("click", res);
    }
    function res() {
      let ans = 0;
      if (document.getElementById("s1").value === "m") ans++;
      if (document.getElementById("s2").value === "m") ans++;
      if (document.getElementById("s3").value === "m") ans++;
      if (document.getElementById("s4").value === "m") ans++;
      if (document.getElementById("s5").value === "десятинная") ans++;
      if (document.getElementById("s6").value === "владимирмономах") ans++;
      if (document.getElementById("s7").value === "крестовокупольный") ans++;
      if (document.getElementById("s8").value === "владимирская") ans++;
      if (document.getElementById("s9").value === "киев") ans++;
      if (document.getElementById("s10").value === "новгород") ans++;
      document.getElementById("b1").style.display = "none";
      document.getElementById("res").style.display = "none";
      document.getElementById("balls").style.display = "block";
      document.getElementById("balls").textContent = "Ваш результат: " + ans + "/10";
  }
})();