let AANTAL_HORIZONTAAL=4;
let AANTAL_VERTICAAL=3;
let AANTAL_KAARTEN=6;
//css en html aanpassen***//
let kaarten = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.png", "6.png", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.png", "6.png"]
aantal_selected: 0;
timeoutId: 0;

const newCard = (index) => {
    let card = document.createElement("img");
    card.classList.add("card");
    return card;
}

const newGame = () => {
    //voor uitbreiding formule aanpassen met de 4,3 van horizontaal en verticaal bij globale waarden//
    for(let i = 0; i < 12; i++) {
        let card = newCard(i);
        let rijX = (i%AANTAL_VERTICAAL) +1;

        document.getElementById(`rij${rijX}`).appendChild(card);
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