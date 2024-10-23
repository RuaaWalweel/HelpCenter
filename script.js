
const faders = document.querySelectorAll('.fade-in');
const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const mobileClose = document.querySelector('.mobile-close');

const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

navToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    if (mobileNav.classList.contains('active')) {
        mobileClose.focus();
    }
});

mobileClose.addEventListener('click', () => {
    mobileNav.classList.remove('active');
});


window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileNav.classList.remove('active');
    }
});
