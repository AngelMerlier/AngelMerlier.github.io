const setup = () => {
    let tekst = 'Gisteren zat de jongen op de stoep en at de helft van de appel'
    let tekstSplit = tekst.split(" ");
f   for (let i = 0; i < tekstSplit.length; i++) {
    if(tekstSplit[i].localeCompare("de") === 0) {
        tekstSplit[i] ="het";
        }
    }
    /*let console = tekstSplit.join(" ") or console.log(tekstSplit(?)) */
    console.log(tekstSplit.join)
}
window.addEventListener("load", setup);