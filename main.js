const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header-home');
const overplay = document.querySelector('.overplay');
const headerMenu = document.querySelector('.header-menu');
const body = document.querySelector('body');

btnHamburger.addEventListener('click',()=>{
    //event close btnHamburger
    if(header.classList.contains("open")){
        header.classList.remove("open");//remove class open
        overplay.style.display ="none";
        headerMenu.style.display="none";
        body.classList.remove("no-scroll");
    }
    //event open btnHamburger
    else{
        header.classList.add("open");
        overplay.style.display = "block";
        headerMenu.style.display="block";
        body.classList.add("no-scroll");
    }
})
