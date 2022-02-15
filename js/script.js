// Typing Animation
var typed = new Typed('.typing', {
    strings: [
        "",
        "Front-End Dev",
        "Back-End Dev",
        "Web Developer",
        "Software Dev"
    ],
    typeSpeed: 120,
    backSpeed: 60,
    loop: true,
});

// Aside
const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('li');
const allSections = document.querySelectorAll('section');

for (let i = 0; i < navList.length; i++) {

    const a = navList[i].querySelector('a');
    a.addEventListener('click', function() {

        removeBackSection();

        for (let j = 0; j < navList.length; j++) {
            if (navList[j].querySelector('a').classList.contains('active')) {
                addBackSection(j);
            }
            navList[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active');
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionToggler();
        }
    })
}

function showSection(element) {
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.remove('active');
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');
}

function removeBackSection() {
    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.remove('back-section');
    }
}

function addBackSection(number) {
    allSections[number].classList.add('back-section');
}

function updateNav(element) {
    for (let i = 0; i < navList.length; i++) {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];

        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active');
        }
    }
}

document.querySelector('.hire-me').addEventListener('click', () => {
    const sectionIndex = this.getAttribute('data-section-index');
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

const navToggler = document.querySelector('.nav-toggler');
const aside = document.querySelector('aside');

navToggler.addEventListener('click', () => {
    asideSectionToggler();
});

function asideSectionToggler() {
    aside.classList.toggle('open');
    navToggler.classList.toggle('open');

    for (let i = 0; i < allSections.length; i++) {
        allSections[i].classList.toggle('open');
    }
}