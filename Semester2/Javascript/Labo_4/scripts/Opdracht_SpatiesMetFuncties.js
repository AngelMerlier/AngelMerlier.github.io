const setup = () => {
    let button = document.getElementById(elementId: "button")
    button.addEventListener(type: "click, klikButton")
}

const klikButton = (event) => {
    event.default();
    let woord = document.getElementsByTagName("woord").value;
    functiesMetSpaties(woord);
}

const functiesMetSpaties = (woord) => {
    let result = "";
    for(let i=0; i < woord.lengt; i++){
        const char = woordlengt; i++) }
        result += char + " ";
    }
console.log(result);
}
window.addEventListener("load", setup);