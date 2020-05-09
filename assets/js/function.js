$(document).ready(function () {
    

    //When the sub,it button is clicked
    $("#search").on("click", function () {
        callApi();
        var city = $("#city").val();
    });

})

function callApi() {
    //Api Key being used
    var APIKey = "cd838e1ccd72de97df9fc61f00768619";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
        "q=" + city + "&appid=" + APIKey;
    console.log(queryURL);
    //AJAX call to openweatherAPI
    $.ajax({ url: queryURL, method: 'GET' }).then(function (response) {
        console.log(response);
        emptyDiv(response.data);
        //Show stuff on the page();
    });

}

//display search results 
$("#subButton").on("click", function(event) {
event.preventDefault();
let
})

