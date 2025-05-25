(function() {
    window.addEventListener('load', init);
    function init() {
      document.getElementById("res").addEventListener("click", res);
    }
    function res() {
      let ans = 0;
      if (document.getElementById("s1").value === "b") ans++;
      if (document.getElementById("s2").value === "m") ans++;
      if (document.getElementById("s3").value === "m") ans++;
      if (document.getElementById("s4").value === "m") ans++;
      if (document.getElementById("s5").value === "василийблаженный") ans++;
      if (document.getElementById("s6").value === "аристотельфиораванти") ans++;
      if (document.getElementById("s7").value === "крестовокупольный") ans++;
      if (document.getElementById("s8").value === "задонщина") ans++;
      if (document.getElementById("s9").value === "грановитаяпалата") ans++;
      if (document.getElementById("s10").value === "феофангрек") ans++;
      document.getElementById("b1").style.display = "none";
      document.getElementById("res").style.display = "none";
      document.getElementById("balls").style.display = "block";
      document.getElementById("balls").textContent = "Ваш результат: " + ans + "/10";
      document.getElementById("reset").style.display = "block";
  }
})();