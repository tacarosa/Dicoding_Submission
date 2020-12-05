window.onload=function () { responsive() };
//saat scroll ke bagian konten
window.onscroll = function () { eventOnScroll() };

window.addEventListener("resize", responsive);

function responsive() {
    let x = window.matchMedia("(max-width: 768px)");
    let menu = document.getElementById("dropdown");
    
    if (x.matches) { // If media query matches
        menu.classList.add("dropdown-menu");
        menu.classList.remove("show");
        menu.classList.remove("navbar-items");
    } else {
        menu.classList.add("navbar-items");
        menu.classList.remove("show");
        menu.classList.remove("dropdown-menu");
    }
}

function eventOnScroll() {
    if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
        let classes = document.getElementById("articlesatu")
        classes.classList.add("fadeIn")
    }
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        let classes2 = document.getElementById("dua")
        classes2.classList.add("fadeIn")
    }
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop >  2000) {
        let classes2 = document.getElementById("articletiga")
        classes2.classList.add("fadeIn")
    }
}

function scrollToElement(name) {
    const id = name;
    const yOffset = -80;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    
    let menu = document.getElementById("dropdown");
    menu.classList.remove("show");
}

function dropdownClick() {
    let menu = document.getElementById("dropdown");
    menu.classList.toggle("show");
    console.log("click");
}