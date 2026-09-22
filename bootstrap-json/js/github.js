// JS hakee käyttäjän GitHub-projektit ja lisää ne sivulle
// Tämän koodin muodostamiseen on käytetty tekoälyä. Pyysin ChatGPT:tä auttamaan tekemään koodin, joka hakee GitHub-repot ja lisää ne HTML-sivulle. Koodi on tarkistettu ja testattu toimivaksi.

const username = "liljahelm"; 

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repositories => {

        // Muuttuja johon projektien tiedot lisätään, viitataan HTML-sivulla olevaan elementtiin
        const container = document.getElementById("github-projects");

        repositories.forEach(repo => {

            // Kortti repositorioille, jossa on nimi, kuvaus ja linkki GitHubiin
            const card = `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 shadow-sm">

                        <div class="card-body">
                            <h5 class="card-title">
                                ${repo.name}
                            </h5>

                            <p class="card-text">
                                ${repo.description || "Ei kuvausta"}
                            </p>

                            <a href="${repo.html_url}"
                               target="_blank"
                               class="btn btn-primary">
                                GitHub
                            </a>
                        </div>

                    </div>
                </div>
            `;

            container.innerHTML += card;
        });
    })
    .catch(error => {
        console.error("GitHub-datan haku epäonnistui:", error);
    });