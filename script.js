/* About -- displays the content in the active link */
let aboutLinks = document.getElementsByClassName("about-links");
let aboutLinksContent = document.getElementsByClassName("aboutlinks-content");

for (let i = 0; i < aboutLinks.length; i++) {
    aboutLinks[i].addEventListener('click', function () {
        for (l = 0; l < aboutLinks.length; l++) {
            aboutLinks[l].className = 'about-links';
            aboutLinksContent[l].className = "aboutlinks-content";
        }
        this.classList.add('active-link');
        aboutLinksContent[i].className += ' active-tab';
    })
}



/*let menu = document.getElementById("menu");
let openMenu = document.getElementsByClassName("fa-bars");
let closeMenu = document.getElementsByClassName("fa-xmark");
let menuIcons = document.getElementsByClassName("fa-solid");

function toggleMenu() {
    if (menu.className.contains("showMenu")) {
        menu.className.remove("showMenu");
        closeMenu.style.display = "none";
        openMenu.style.display = "block";
    } else {
        menu.className.add("showMenu");
        closeMenu.style.display = "block";
        openMenu.style.display = "none";
    }
}

menuIcons.addEventListener("click", toggleMenu);*/
