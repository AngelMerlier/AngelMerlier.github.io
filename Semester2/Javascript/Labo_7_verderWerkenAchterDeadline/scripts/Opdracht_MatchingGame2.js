
let AANTAL_HORIZONTAAL=4;
let AANTAL_VERTICAAL=3;
let AANTAL_KAARTEN=6;
//css en html aanpassen***//
let kaarten = ["card1", "card2", "card3", "card4", "card5", "card6", "card1", "card2", "card3", "card4", "card5", "card6"]
let globaal =
{
    aantal_selected: 0,
    timeoutId: 0,
}

/* kaarten zijn verdwenen zoek fout in code(inspecteren) zie appendchild*/
const newCard = (idx) => {
    let card = document.createElement("img");
    card.classList.add("card");
    let cardIdx = Math.round(Math.random() * (kaarten.length - 1));
    card.classList.add(kaarten[cardIdx]);
    kaarten.splice(cardIdx, 1);
    card.addEventListener("click", selectCard);
    return card;
}

const newGame = () => {
    //voor uitbreiding formule aanpassen met de 4,3 van horizontaal en verticaal bij globale waarden//
    for(let i = 0; i < 12; i++) {
        let card = newCard(i);
        let rowIdx = (i%AANTAL_VERTICAAL) + 1;

        document.getElementById(`row${rowIdx}`).appendChild(card);
    }
}

const selectCard = (e) => {
    let classlist = e.target.classList;
    if(!classlist.contains("selected") && !classlist.contains("hidden") && globaal.aantal_selected < 2) { // && aantal_selected < 2 zorgt ervoor dat er geen 3de kaart kan geselecteerd worden.//
        classlist.toggle("card");
        classlist.add("selected");

        globaal.aantal_selected++;
        if(globaal.aantal_selected === 2) {
            vergelijkKaarten();
        }
    }
}

const vergelijkKaarten = () => {
    let card1 = document.querySelectorAll(".selected")[0];//queryselector werkt anders dan een classe/id selector//
    let card2 = document.querySelectorAll(".selected")[1];

    card1.classList.remove("selected");
    card2.classList.remove("selected");

//classlist heeft een html list terug, dit kunnen we niet vergelijken. Probeer de className te gebruiken.//
    if(card1.className === card2.className) {
        card1.classList.add("correct");
        card2.classList.add("correct");
    } else {
        card1.classList.add("wrong");
        card2.classList.add("wrong");
    }
    globaal.timeoutId = setTimeout(resetCards, 3000);
}
const resetCards = () => {
    if(document.querySelectorAll(".correct").length !=0) {
        let card1 = document.querySelectorAll(".correct")[0];
        let card2 = document.querySelectorAll(".correct")[1];

        card1.classList.remove("correct");
        card2.classList.remove("correct");

        card1.classList.add("hidden");
        card2.classList.add("hidden");
    } else {
        let card1 = document.querySelectorAll(".fout")[0];
        let card2 = document.querySelectorAll(".fout")[1];

        card1.classList.remove("fout");
        card2.classList.remove("fout");

        card1.classList.toggle("card");
        card2.classList.toggle("card");
    }
    globaal.aantal_selected = 0;
}

const setup = () => {
    newGame();
}

window.addEventListener("load", setup)