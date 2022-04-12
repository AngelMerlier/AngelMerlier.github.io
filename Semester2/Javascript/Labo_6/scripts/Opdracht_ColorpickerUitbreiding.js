const setup = () => {
    let sliders = document.getElementsByTagName("input");
    let button = document.getElementById("save");
    knop.addEventListener("click", save)

    for(let i = 0; i < sliders.length; i++)
    {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
}
const update = () => {
    const sliders = document.getElementsByTagName("input");
    let kleurRood = sliders[0].value;
    let kleurGroen = sliders[1].value;
    let kleurBlauw = sliders[2].value;

    let display = document.getElementById("display");
    let labels = document.getElementsByTagName("label")
    labels[0].textContent = 'red: ' + kleurRood;
    labels[1].textContent = 'green: ' + kleurGroen;
    labels[2].textContent = 'blue: ' + kleurBlauw;

    display.style.backgroundColor= `rgb(${kleurRood},${kleurGroen}, ${kleurBlauw})`
}

const save = () => {
    let blokje = document.getElementsByClassName('blokje')[0];
    let nieuw = document.createElement('div');
    let button = document.createElement('button');
    let body = document.getElementsByTagName('body')[0];
    button.textContent="X";
    button.addEventListener('click', remove);

    let color;
    if(blokje.style.backgroundColor === "") {
        color = 'white';
    } else {
        color = blokje.style.backgroundColor;
    }

    nieuw.style.backgroundColor = color;
    nieuw.style.width = "70px";
    nieuw.style.height = "70px";
    nieuw.addEventListener("click", back);
    nieuw.appendChild(button);
    body.appendChild(nieuw);
}

const remove = (event) => {
    let blokje = event.target.parentElement;
    blokje.remove();
}

const change = (event) => {
    let blokje = event.target;
    let color = document.getElementsByClassName("blokje")[0];
    colorbox.style.backgroundColor = blokje.style.backgroundColor;
}

window.addEventListener("load", setup);