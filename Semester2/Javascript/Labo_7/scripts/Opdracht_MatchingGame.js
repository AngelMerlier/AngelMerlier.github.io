let AANTAL_HORIZONTAAL=4;
let AANTAL_VERTICAAL=3;
let AANTAL_KAARTEN=6;
//css en html aanpassen***//
let kaarten = ["card1", "card2", "card3", "card4", "card5", "card6", "card1", "card2", "card3", "card4", "card5", "card6"]
aantal_selected: 0;
timeoutId: 0;

/* kaarten zijn verdwenen zoek fout in code(inspecteren) zie appendchild*/
const newCard = (idx) => {
    let card = document.createElement("img");
    card.classList.add("card");
    let cardIdx = Math.round(Math.random() * (kaarten.length - 1));
    card.classList.add(kaarten[cardIdx]);
    kaarten.splice(cardIdx, 1);
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

const setup = () => {
    newGame();
}



const hideTheCards = () => {
    let kaarten = document.getElementsByClassName("card");
    for(let i= 0; cards.lengt; i++){
        cards[i].src = 'images/backCard2.png';
        cards[i].addEventListener("click", turnAround);
    }
}

const turnAround = () => {
    let clickOnCard = event.target;
    ClickOnCard.src = clickOnCard.getAttribute("data-card");
}

window.addEventListener("load", setup);