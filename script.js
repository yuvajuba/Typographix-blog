// function to check if page is scrolled
function checkScroll() {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    let scrollPosition = window.scrollY;

    // Add/remove 'scroll class' for nav
    if (scrollPosition > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // calculate new font-size based on scroll position
    let newSize = 3 - (scrollPosition * 0.02); // decrease by 0.02rem for every 1px scrolled

    // clamping the font-size between 1.5rem and 3rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min(3, newSize);

    logo.style.fontSize = newSize + 'rem';
}

// add an event listener on scrolling
    window.addEventListener('scroll', checkScroll);