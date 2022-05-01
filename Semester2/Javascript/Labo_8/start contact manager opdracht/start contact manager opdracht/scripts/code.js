let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    let invalid = document.getElementsByClassName("invalid");

    if (invalid.length === 0) {
        let lstPersonen = document.getElementById("lstPersonen");

    if (lstPersonen.selectedIndex !== -1) {
        let persoon = personen[lstPersonen.selectedIndex];

        persoon.voornaam = document.getElementById("txtVoornaam").value
        persoon.familienaam = document.getElementById("txtFamilienaam").value
        persoon.geboortedatum = document.getElementById("txtGeboorteDatum").value
        persoon.mail = document.getElementById("txtEmail").value
        persoon.aantalKinderen = document.getElementById("txtAantalKinderen").value
    }

    else {
            const persoon = {
                voornaam: document.getElementById("txtVoornaam").value,
                familienaam: document.getElementById("txtFamilienaam").value,
                geboortedatum: document.getElementById("txtGeboorteDatum").value,
                mail: document.getElementById("txtEmail").value,
                aantalKinderen: document.getElementById("txtAantalKinderen").value
            }

    let naamToevoegen = document.createElement("option");

    let txtToevoegen = document.createTextNode(persoon.voornaam + " " + persoon.familienaam);

    naamToevoegen.appendChild(txtToevoegen);

    lstPersonen.appendChild(naamToevoegen);

    naamToevoegen.addEventListener("click", namenBijhouden);

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
            personen.push(persoon);
        }
    }
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren

    document.getElementById("txtVoornaam").value ="";
    document.getElementById("txtFamilienaam").value ="";
    document.getElementById("txtGeboorteDatum").value ="";
    document.getElementById("txtEmail").value ="";
    document.getElementById("txtAantalKinderen").value ="";

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selectedIndex = -1;
    }

const holdNames = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let persoon = personen[lstPersonen.selectedIndex];

    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboortedatum;
    document.getElementById("txtEmail").value = persoon.mail;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
}
// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
}

window.addEventListener("load", setup);