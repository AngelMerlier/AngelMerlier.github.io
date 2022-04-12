const setup = () => {
    console.log('Hi')
    changeTekst()
}
    const tekst = () => {
        let eersteP = document.querySelectorAll('p')[0];
        let nieuweTekst = document.createTextNode("Good Job!");

        eersteP.firstChild.remove();
        eersteP.appendChild(nieuweTekst);
    }
window.addEventListener("load", setup);