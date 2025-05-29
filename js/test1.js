(function() {
    window.addEventListener('load', init);
    function init() {
      document.getElementById("res").addEventListener("click", res);
    }
    function res() {
      let ans = 0;
      if (document.getElementById("s1").value === "b") ans++;
      if (document.getElementById("s2").value === "c") ans++;
      if (document.getElementById("s3").value === "c") ans++;
      if (document.getElementById("s4").value === "a") ans++;
      if (document.getElementById("s5").value === "василийблаженный") ans++;
      if (document.getElementById("s6").value === "аристотельфиораванти") ans++;
      if (document.getElementById("s7").value === "крестовокупольный") ans++;
      if (document.getElementById("s8").value === "задонщина") ans++;
      if (document.getElementById("s9").value === "грановитаяпалата") ans++;
      if (document.getElementById("s10").value === "феофангрек") ans++;
      document.getElementById("b1").style.display = "none";
      document.getElementById("res").style.display = "none";
      document.getElementById("result").style.display = "block";
      document.getElementById("comment").style.display = "block";
      document.getElementById("balls").textContent = "Ваш результат: " + ans + "/10";
      if (ans < 5) {
          document.getElementById("result").textContent = "Оценка: 2";
          document.getElementById("comment").textContent = "Ничего страшного! У вас есть еще шанс изучить тему лучше в отличие от Наполеона, который упустил все, даже свои 100 дней во Франции. Надеемся, что у вас никогда больше не будет своего Ватерлоо.";
          document.getElementById("smail-2").style.display = "block";
      }
      if (ans >= 5 && ans <= 6) {
          document.getElementById("result").textContent = "Оценка: 3";
          document.getElementById("comment").textContent = "Наверное, для вас эта тема, как для ребят бочка с водой с картины Перова 'Тройка'. Но будем верить, что в будущем жизнь и обучение не будут в стиле критического реализма, а наступит эра авангардизма, где важна лишь суть вещей или где вовсе отказываются от смыслов.";
          document.getElementById("smail-3").style.display = "block";
      }
      if (ans >= 7 && ans <= 8) {
          document.getElementById("result").textContent = "Оценка: 4";
          document.getElementById("comment").textContent = "Вы - Ленин, у которого по окончании школы была лишь единственная четверка по логике. Думаю, что вы продолжите улучшать свой результат и когда-нибудь вы тоже совершите что-то невероятное (в хорошем смысле).";
          document.getElementById("smail-4").style.display = "block";
      }
      if (ans > 8) {
          document.getElementById("result").textContent = "Оценка: 5";
          document.getElementById("comment").textContent = "Пришёл! Увидел! Победил! Вы достойны триумфа, как Гай Юлий Цезарь! А может быть, вы настолько любите себя, что устроите себе 4 парадных въезда в Рим, как великий диктатор в 40-е гг. до н.э.";
          document.getElementById("smail-5").style.display = "block";
      }
      let last_res = "Ваш прошлый результат: " + ans + "/10";
      localStorage.setItem("last-res", last_res);
  }
})();