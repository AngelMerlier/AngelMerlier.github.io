const setup = () => {
    let family = ['Jana', 'Arne', 'Iluna', 'Tibeau', 'Jennifer'];
    console.log(family.length);
    console.log(family[0]);
    console.log(family[2]);
    console.log(family[4]);
    let familieLid = prompt("Geef uw naam", "Chris");
    family.unshift(familieLid);

}
window.addEventListener("load", setup);

