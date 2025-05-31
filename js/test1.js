(function() {
    window.addEventListener('load', init);
    function init() {
        let local_res1 = localStorage.getItem("last-res1");
        if (local_res1) {
            document.getElementById("last-res1").textContent = local_res1;
        }
        document.getElementById("res1").addEventListener("click", res1);
    }
    function res1() {
        let ans = 0;
        let question1 = document.getElementById("s1");
        let question2 = document.getElementById("s2");
        let question3 = document.getElementById("s3");
        let question4 = document.getElementById("s4");
        let question5 = document.getElementById("s5");
        let question6 = document.getElementById("s6");
        let question7 = document.getElementById("s7");
        let question8 = document.getElementById("s8");
        let question9 = document.getElementById("s9");
        let question10 = document.getElementById("s10");
        let test = document.getElementById("b1");
        let res1 = document.getElementById("res1");
        let balls = document.getElementById("balls");
        let result = document.getElementById("result");
        let comment = document.getElementById("comment");
        let smail_2 = document.getElementById("smail-2");
        let smail_3 = document.getElementById("smail-3");
        let smail_4 = document.getElementById("smail-4");
        let smail_5 = document.getElementById("smail-5");
        if (question1.value === "b") ans++;
        if (question2.value === "c") ans++;
        if (question3.value === "c") ans++;
        if (question4.value === "a") ans++;
        if (question5.value === "василийблаженный") ans++;
        if (question6.value === "аристотельфиораванти") ans++;
        if (question7.value === "крестовокупольный") ans++;
        if (question8.value === "задонщина") ans++;
        if (question9.value === "грановитаяпалата") ans++;
        if (question10.value === "феофангрек") ans++;
        test.style.display = "none";
        res1.style.display = "none";
        result.style.display = "block";
        comment.style.display = "block";
        balls.style.display = "block";
        balls.textContent = "Ваш результат: " + ans + "/10";
        if (ans < 5) {
            result.textContent = "Оценка: 2";
            comment.textContent = "Ничего страшного! У вас есть еще шанс изучить тему лучше в отличие от Наполеона, который упустил все, даже свои 100 дней во Франции. Надеемся, что у вас никогда больше не будет своего Ватерлоо.";
            smail_2.style.display = "block";
        }
        if (ans >= 5 && ans <= 6) {
            result.textContent = "Оценка: 3";
            comment.textContent = "Наверное, для вас эта тема, как для ребят бочка с водой с картины Перова 'Тройка'. Но будем верить, что в будущем жизнь и обучение не будут в стиле критического реализма, а наступит эра авангардизма, где важна лишь суть вещей или где вовсе отказываются от смыслов.";
            smail_3.style.display = "block";
        }
        if (ans >= 7 && ans <= 8) {
            result.textContent = "Оценка: 4";
            comment.textContent = "Вы - Ленин, у которого по окончании школы была лишь единственная четверка по логике. Думаю, что вы продолжите улучшать свой результат и когда-нибудь вы тоже совершите что-то невероятное (в хорошем смысле).";
            smail_4.style.display = "block";
        }
        if (ans > 8) {
            result.textContent = "Оценка: 5";
            comment.textContent = "Пришёл! Увидел! Победил! Вы достойны триумфа, как Гай Юлий Цезарь! А может быть, вы настолько любите себя, что устроите себе 4 парадных въезда в Рим, как великий диктатор в 40-е гг. до н.э.";
            smail_5.style.display = "block";
        }
        let last_res1 = "Ваш прошлый результат: " + ans + "/10";
        localStorage.setItem("last-res1", last_res1);
    }
})();