$(document).ready(function () {



    // This is our API key
    var APIKey = "166a433c57516f51dfab1f7edaed8413";

    //create a event listener for the button
    $("#search").on("click", function (event) {

        //place this stop page from refreshing
        event.preventDefault();

        //use textfrom data
        var city = $("#city").val();
        //setting info in local storage
        localStorage.setItem(city, city);

        // Here we are building the URL we need to query the database
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
        
        // Here we are building the URL we need to query the database
        var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIKey;
        


        // Here we run our AJAX call to the OpenWeatherMap API for current weather
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // We store all of the retrieved data inside of an object called "response"
            .then(function (response) {

                // Log the queryURL
                console.log(queryURL);

                // Log the resulting object
                console.log(response);

                // Transfer content to HTML
                $(".city").html("<h1>" + response.name + " Weather Details</h1>");
                $(".wind").text("Wind Speed: " + response.wind.speed);
                $(".humidity").text("Humidity: " + response.main.humidity);

                // Convert the temp to fahrenheit
                var tempF = (response.main.temp - 273.15) * 1.80 + 32;

                // add temp content to html
                $(".temp").text("Temperature (K) " + response.main.temp);
                $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

                // Log the data in the console as well
                console.log("Wind Speed: " + response.wind.speed);
                console.log("Humidity: " + response.main.humidity);
                console.log("Temperature (F): " + tempF);
            });

        // Here we run our AJAX call to the OpenWeatherMap API for 5 day forecast weather
        
        $.ajax({
            url: queryURL2,
            method: "GET"
        })
            // We store all of the retrieved data inside of an object called "response"
            .then(function (response) {

                // Log the queryURL
                console.log(queryURL2);

                // Log the resulting object
                console.log(response);

                var i = 5
                for (var index = 1; index < 6; index++) {
                    var card = $("#card" + index);
                    console.log(card);
                    //empty the card
                    $(card).empty();
                    //dates show
                    var date = moment().add(index, 'day').format('L');
                    console.log(date);
                    //show image
                    $(".span").css("display", "inline");

                }
            });
        
    })

        renderCities();
})