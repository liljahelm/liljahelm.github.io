// tiedon haku JSON-tietueesta ja muuttaminen JS-objektiksi

fetch ("omaTietue.JSON")
  
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

  let tiedot =
    "<h1>" + obj.toteutus.nimi + "</h1><br>"
    + obj.osallistujat.maara + "<br>"
    + obj.osallistujat.nimet.join(", ") + "<br>"
    + obj.toteutus.ajankohta + "<br>"
    + obj.toteutus.kesto + "<br>"

    + '<p><img src="' + obj.kuva + '" class="toteutus-kuva"></p>';
  
  document.getElementById("vastaus").innerHTML = tiedot;

}


