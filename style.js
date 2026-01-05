let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('ri-close-line');  // FIXED for RemixIcon
    navlist.classList.toggle('open');        // Will show menu (CSS needed)
};

// ScrollReveal
const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.container h6', { delay: 150, origin: 'left' });
sr.reveal('.container h3', { delay: 250, origin: 'right' });
sr.reveal('.container h1', { delay: 400, origin: 'top' });
sr.reveal('.container p', { delay: 550, origin: 'left' });
sr.reveal('.main-btnn', { delay: 700, origin: 'bottom' });
sr.reveal('.social', { delay: 850, origin: 'right' });