let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); // Use querySelectorAll to get all sections
let navLinks = document.querySelectorAll('header nav a'); // Fixed the selector to get all nav links

window.onscroll = () => {
    let top = window.scrollY; // Changed from window.screenY to window.scrollY

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Lower offset if needed
        let height = sec.offsetHeight; // Corrected variable name
        let id = sec.getAttribute('id'); // Fixed method name from getAttributs to getAttribute

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Correctly referencing "link" instead of navLinks
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active'); // Fixed classList addition
        }
    });
};

menuIcon.onclick = () => { // Corrected oneclick to onclick
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
