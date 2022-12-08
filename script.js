/* About */
let aboutLinks = document.getElementsByClassName("about-links");
let aboutLinksContent = document.getElementsByClassName("aboutlinks-content");

for (let i = 0; i < aboutLinks.length; i++) {
    aboutLinks[i].addEventListener('click', function () {
        for (j = 0; j < aboutLinks.length; j++) {
            aboutLinks[j].className = 'about-links';
            aboutLinksContent[j].className = "aboutlinks-content";
        }
        this.classList.add('active-link');
        aboutLinksContent[i].className += ' active-tab';
    })
}