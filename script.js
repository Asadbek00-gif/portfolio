// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
});

// =========================
// ACTIVE NAVBAR
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================
// TYPING EFFECT
// =========================

const text = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Developer",
    "Creative Coder"
];

const title = document.querySelector(".hero-left h2");

let word = 0;
let letter = 0;
let deleting = false;

function typing() {

    const current = text[word];

    if (!deleting) {

        title.textContent = current.substring(0, letter);

        letter++;

        if (letter > current.length) {

            deleting = true;

            setTimeout(typing, 1500);

            return;

        }

    } else {

        title.textContent = current.substring(0, letter);

        letter--;

        if (letter < 0) {

            deleting = false;

            word++;

            if (word >= text.length)
                word = 0;

        }

    }

    setTimeout(typing, deleting ? 60 : 120);

}

typing();