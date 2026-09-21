// tiedon haku JSON-tietueesta ja muuttaminen JS-objektiksi

fetch ("https://api.openweathermap.org/data/2.5/weather?id=658225&appid=665ecd56dfc08dbb50feb8b8f5034e28&lang=fi&units=metric")
  
  .then(function (response) {
    return response.json();
  })
  
  .then(function (responseJson) {
    kerro(responseJson);
  })
  
  .catch(function (error) {
    document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
  });


  // kerro()-funktio joka näyttää tiedot HTML-sivulla

function kerro(obj) {
    //nyt-muuttuja, jolla saadaan kellonaika näkyviin
    const nyt = new Date();  
    let tiedot =
    "<h1>" + "Sää Helsingissä" + "</h1><br>"

    //kellonaika funktioon, jotta se lukee otsikon alla
    + "<p>Sää klo " + nyt.toLocaleTimeString("fi-FI", {
        hour: "2-digit",
        minute: "2-digit"
      }) + "</p>"

    + "<b>Sää: </b>" + obj.weather[0].description + "<br>"
    + "<b>Lämpötila: </b>"+ obj.main.temp + "°C<br>"
    + "<b>Tuuli: </b>" + obj.wind.speed + " m/s<br>"
    + '<p><img src="https://openweathermap.org/img/wn/' + obj.weather[0].icon + '@2x.png" class="toteutus-kuva"></p>';

  document.getElementById("vastaus").innerHTML = tiedot;

}
