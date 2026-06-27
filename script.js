// ==========================
// PORTFOLIO SCRIPT
// ==========================

// 🔹 TYPING TEXT
const text =
"Frontend Developer | Web Developer | UI/UX Enthusiast";

// 🔹 GO TO PROJECTS
function goToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

// 🔹 MOBILE MENU
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// 🔹 DARK / LIGHT MODE
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

// 🔹 TYPING EFFECT
document.addEventListener("DOMContentLoaded", () => {

    let i = 0;
    const typingElement = document.getElementById("typing");

    function typing() {

        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 80);
        } else {

            setTimeout(() => {
                typingElement.innerHTML = "";
                i = 0;
                typing();
            }, 2000);

        }
    }

    typing();

});

// 🔹 SKILL BAR ANIMATION
const skillSection =
document.querySelector("#skills");

const skillBars =
document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {

    if (skillSection) {

        const sectionTop =
        skillSection.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {

            if(skillBars[0]) skillBars[0].style.width = "90%"; // HTML
            if(skillBars[1]) skillBars[1].style.width = "85%"; // CSS
            if(skillBars[2]) skillBars[2].style.width = "75%"; // JavaScript
            if(skillBars[3]) skillBars[3].style.width = "70%"; // Java
            if(skillBars[4]) skillBars[4].style.width = "65%"; // Python
            if(skillBars[5]) skillBars[5].style.width = "70%"; // SQL
            if(skillBars[6]) skillBars[6].style.width = "75%"; // Git
            if(skillBars[7]) skillBars[7].style.width = "40%"; // React

        }
    }

});

// 🔹 MAIN SCROLL EFFECTS
window.addEventListener("scroll", () => {

    // SECTION FADE IN
    document.querySelectorAll("section")
    .forEach(section => {

        const sectionTop =
        section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }

    });

    // PROJECT CARD ANIMATION
    document.querySelectorAll(".project-card")
    .forEach(card => {

        const cardTop =
        card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 100) {
            card.classList.add("show");
        }

    });

    // NAVBAR EFFECT
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

    // ACTIVE MENU
    let current = "";

    document.querySelectorAll("section")
    .forEach(section => {

        const sectionTop =
        section.offsetTop;

        if (window.scrollY >= sectionTop - 100) {
            current =
            section.getAttribute("id");
        }

    });

    document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }

    });

    // PROGRESS BAR
    const scroll =
    document.documentElement.scrollTop;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scroll / height) * 100;

    document.getElementById("progressBar")
    .style.width = progress + "%";

    // TOP BUTTON
    const topBtn =
    document.getElementById("topBtn");

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

// 🔹 SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

        const navLinks =
        document.getElementById("navLinks");

        if(navLinks){
            navLinks.classList.remove("active");
        }

    });

});

// 🔹 SCROLL TO TOP
function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// 🔹 LOADER
window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if(loader){
        loader.style.display = "none";
    }

});

