// ==========================
// TYPING ANIMATION
// ==========================

const words = [
  "Frontend Developer",
  "Web Designer",
  "JavaScript Developer",
  "Creative Coder"
];

const typing = document.querySelector(".typing");

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, letterIndex);

        letterIndex++;

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, letterIndex);

        letterIndex--;

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ==========================
// NAVBAR SHADOW
// ==========================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.background="rgba(5,8,22,.95)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

    }else{

        header.style.background="rgba(5,8,22,.75)";
        header.style.boxShadow="none";

    }

});


// ==========================
// FADE ANIMATION
// ==========================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    observer.observe(section);

});