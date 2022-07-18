let clientID = "NsaE17tzMJR0ydKo1eU7QvcTAL1CnxU3hA3g291_FIU";
let page = Math.floor(Math.random() * 10)
let endpoint = 'https://api.unsplash.com/search/photos?page=' + page + '&query=nature&client_id=' + clientID;
var element = document.querySelector("body");
let date = new Date();
let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();

document.getElementById("date").innerHTML = output;


fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        //console.log(jsonData.results[page].urls.raw);
        element.background = jsonData.results[page].urls.raw + "&w=965&dpr=2";
        window.setInterval(function () {
            let page2 = Math.floor(Math.random() * 10)
            element.background = jsonData.results[page2].urls.raw + "&w=965&dpr=2";
        }, 10000);
    })