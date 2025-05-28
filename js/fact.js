(function() {
    window.addEventListener('load', init);
    function init() {
        document.getElementById("generate").addEventListener("click", generate);
    }
    function generate() {
        let month = parseInt(1 + Math.random() * 12);
        let day = parseInt(Math.random() * 30);
        const url = "https://api.api-ninjas.com/v1/historicalevents?month=" + month + "&day=" + day;
        let JSON;
        let conclusion = document.body;
        fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'x+Gn2Rmh3SM6o6kmSvVasA==E7XlwsMp6TFty7qM',
                'Accept': 'application/text'
            }
        })
        .then(response => response.text())
        .then(text => console.log(text));
    }
})();