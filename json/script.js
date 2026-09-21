// tiedon haku JSON-tietueesta ja muuttaminen JS-objektiksi

fetch ("tietue.JSON")
  
  .then(function (response) {
    return response.json();
  })
  
  .then(function (responseJson) {
    kerro(responseJson);
  })
  
  .catch(function (error) {
    document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
  });

// kerro()-funktio

function kerro(obj) {

  let tiedot =
    "<h1>" + obj.otsikko + "</h1><br>" + obj.kuvaus + "<br><hr>"
    + '<p><img src="' + obj.kuva + '"></p>'
    + "<h3>" + "Opintojakso" + "</h3>" + "Nimi: " + obj.opintojakso.nimi + "<br>" 
    + "Tunnus: " + obj.opintojakso.tunnus + "<br>"
    + "Opintopisteet: " + obj.opintojakso.opintopisteet + "<br>"

  tiedot += "<p><h3> Aiheet </h3>";



  // for-silmukka
  
  for (var i = 0; i < obj.tekniikat.length; i++) {
    tiedot += "<b>Aihe: " + obj.tekniikat[i].aihe + "</b>";
    tiedot += " <a href=" + obj.tekniikat[i].linkki + ">" + obj.tekniikat[i].linkki + "</a>" + "<br>";
  }
  
  tiedot += "</p>";
  document.getElementById("vastaus").innerHTML = tiedot;

}
