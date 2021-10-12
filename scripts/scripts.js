let content = document.getElementById("content")
content.onscroll = function () { animateScroll() };

let sun = document.getElementById("sun");
let mountains = document.getElementById("mountains");
let bg = document.getElementById("bg");
let hills_2 = document.getElementById("hills-2");
let hills = document.getElementById("hills");
let birds = document.getElementById("birds");
let foreground = document.getElementById("foreground");

function animateScroll() {
    let value = content.scrollTop

    if (value <= window.innerHeight) {
        sun.style.transform = "translate(0vh, " + value * 0.05 + "vh)";
        foreground.style.transform = "translate(0vh, " + value * (-0.05) + "vh)";
        birds.style.transform = "translate(" + value * 0.01 + "vh, " + value * (-0.01) + "vh)";
    }
}

// removes illustration on smaller screens
let illustration = document.getElementById("main-illustration");
let background = document.getElementById("background")
let body = document.querySelector("body");
var removed = false;

if (window.innerWidth <= 1415) {
    illustration.remove()
    removed = true;
} else {
    background.remove()
}

window.addEventListener("resize", function () {
    if (window.innerWidth <= 1415) {
        body.append(background)
        illustration.remove()
        removed = true
    } else if (window.innerWidth > 1415 && removed) {
        body.append(illustration)
        background.remove()
        removed = false
    }
})
