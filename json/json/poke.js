let pokemonData;

function poke() {
    const pokeName = document.getElementById("pokemonName").value.toLowerCase();
    let name = document.getElementById("pokemonName").value;

    // Tyhjennetään edelliset hakutulokset, jotta ne eivät sekoitu uuteen hakutulokseen
    document.getElementById("nimi").innerHTML = "";
    document.getElementById("vastaus").innerHTML = "";
    document.getElementById("kuva2").innerHTML = "";


    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        // Muunnetaan vastaus JSON-muotoon
        .then(function (response) {
            return response.json();
    })

    //Käsitellään muunnettu (eli JSON muotoinen) vastaus
    // Kutsutaan funktiota kerro()ja välitetään sille json-vastaus
        .then(function (responseJson) {
            pokekuva(responseJson);
        })

    // Jos tuli jokin virhe
        .catch(function (error) {
            console.log(error);
            document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

}

function pokekuva(obj) {
    // Muuttuja Pokemonin tiedoille, jotta niitä voidaan käyttää myöhemmin
    pokemonData = obj;

    //Tallennetaan muuttujan linkki josta löytyy Pokemonin kuva
    let pokeurl = obj.sprites.front_default;

    //Kirjoitetaan kuva ja nimi sivulla sekä tyhjennetään hakukenttä
    document.getElementById("kuva2").innerHTML = "<img src=" + pokeurl + ">";

    //Pokemonin nimi sivulle otsikoksi ja muut tiedot näkyviin
    document.getElementById("nimi").innerHTML = "<b>" + obj.name + "</b>";

    document.getElementById("vastaus").innerHTML =
    "<br><b>Id:</b> " + obj.id
    + "<br><b>Species:</b> " + obj.species.name
    + "<br><b>Type:</b> " + obj.types[0].type.name
    + "<br><b>Height:</b> " + obj.height
    + "<br><b>Weight:</b> " + obj.weight
    + "<br><b>Base experience:</b> " + obj.base_experience;

    document.getElementById("pokemonName").value = "";

    //Nappi joka kääntää Pokemonin kuvan
    document.getElementById("kaanna").innerHTML = '<button onclick="kaanna()">Käännä</button>';

}

// Funktio joka kääntää Pokemonin kuvan
function kaanna() {
    let pokeurl = pokemonData.sprites.back_default;
    document.getElementById("kuva2").innerHTML = '<img src="' + pokeurl + '">';
}

