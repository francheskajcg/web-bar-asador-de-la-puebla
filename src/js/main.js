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

const navLinks = Array.from(document.querySelectorAll('.nav-menu a'));

if (navLinks.length) {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const hash = window.location.hash;

    const clearActive = () => {
        navLinks.forEach((link) => link.classList.remove('is-active'));
    };

    const setActiveLink = () => {
        const currentHash = window.location.hash;
        let activeLink = null;

        if (path === 'more-info.html') {
            activeLink = navLinks.find((link) => link.getAttribute('href') === './more-info.html');
        } else if (path === 'index.html' || path === '') {
            if (currentHash) {
                activeLink = navLinks.find((link) => link.getAttribute('href') === `./index.html${currentHash}`);
            }

            if (!activeLink) {
                activeLink = navLinks.find((link) => link.getAttribute('href') === './index.html#inicio');
            }
        }

        clearActive();
        if (activeLink) {
            activeLink.classList.add('is-active');
        }
    };

    setActiveLink();

    if (path === 'index.html' || path === '') {
        window.addEventListener('hashchange', setActiveLink);
    }
}
