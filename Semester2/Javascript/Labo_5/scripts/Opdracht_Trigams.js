const setup = () => {
    /*let trigams = 'onoorbaar'
    let i = 0;
    do {
        trigams.slice(3);
    }
    while (i < trigams.length);
    console.log(trigams)
    }*/
    let woord = 'onoorbaar';
    let i = 0;

    while(i < woord.length)
    {
        let trigam = woord.slice(i,i+3)
        if(trigam.length === 3)
        {
            console.log(trigam)
        }
        i++;
    }
}
window.addEventListener("load", setup);