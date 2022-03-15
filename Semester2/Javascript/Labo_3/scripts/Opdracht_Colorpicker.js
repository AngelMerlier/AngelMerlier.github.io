const setup = () => {
    let slider = document.getElementById("slider");
    for(let i = 0; i < sliders.length; i++)
    {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
}

const update = () => {
    const sliders = document.getElementsByClassName("slider");
    let kleurRood = sliders[0].value;
    let kleurGroen = sliders[1].value;
    let kleurBlauw = sliders[2].value;

    let display = document.getElementById("display");

    labels[0].textContent = 'red: ' + kleurRood;
    labels[1].textContent = 'green: ' + kleurGroen;
    labels[2].textContent = 'blue: ' + kleurBlauw;

    display.style.backgroundColor= `rgb(${kleurRood},${kleurGroen}, ${kleurBlauw})`
}

/*const() => colorSliders(){
    btnInputEvents(red)
    btnInputEvents(green)
    btnInputEvents(blue)
}

const() => btnInputEvents(btn){
    btn.addEventListener('input', () => {
        displayColors()
        initColorNumbrVals()
        initSliderColors()
        changeRangeNumVal()
    })
}*/

window.addEventListener("load", setup);