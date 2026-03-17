'use strict';

const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero');

if (navbar) {
    const toggleNavbarState = () => {
        if (!heroSection) {
            navbar.classList.add('scrolled');
            navbar.classList.remove('on-hero');
            return;
        }

        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight - navbar.offsetHeight;
        const isOnHero = window.scrollY < heroBottom;

        navbar.classList.toggle('on-hero', isOnHero);
        navbar.classList.toggle('scrolled', !isOnHero);
    };

    toggleNavbarState();
    window.addEventListener('scroll', toggleNavbarState, { passive: true });
    window.addEventListener('resize', toggleNavbarState);
}
