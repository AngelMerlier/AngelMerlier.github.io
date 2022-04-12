const setup = () => {
    let lis = document.querySelectorAll('li');
    for (let i = 0; i < lis.length; i++){
        lis[i].classList.add("listItem");
    }
window.addEventListener("load", setup);