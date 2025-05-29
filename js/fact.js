(function() {
    window.addEventListener('load', init);
    function init() {
        document.getElementById("generate").addEventListener("click", generate);
    }
    function generate() {
        let month = parseInt(1 + Math.random() * 12);
        let day = parseInt(Math.random() * 30);
        const url = "https://api.api-ninjas.com/v1/historicalevents?month=" + month + "&day=" + day;
        let conclusion = document.getElementById("text");
        fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'x+Gn2Rmh3SM6o6kmSvVasA==E7XlwsMp6TFty7qM',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => {
            try {
                fact(json);
            }
            catch(error) {
                console.log("Ошибка: " + error);
            }
        });
        function fact(object) {
            let list_events = new Array(object.length);
            let list_years = new Array(object.length);
            for (let i = 0; i < object.length; i++) {
                list_events[i] = object[i].event;
                list_years[i] = object[i].year;
            }
            let random = parseInt(Math.random() * object.length);
            if (list_years[random] < 0) {
                conclusion.textContent += Math.abs(list_years[random]) + " before christ. " + list_events[random] + " \n";
            }
            else {
                conclusion.textContent += list_years[random] + ". " + list_events[random] + " \n";
            }
        }
    }
})();