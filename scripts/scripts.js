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

    sun.style.transform = "translate(0vh, " + value * 0.05 + "vh)";
    foreground.style.transform = "translate(0vh, " + value * (-0.05) + "vh)";
    birds.style.transform = "translate(" + value * 0.01 + "vh, " + value * (-0.01) + "vh)";
    hills.style.transform = "translate(0vh, " + value * (-0.01) + "vh)";
    hills_2.style.transform = "translate(0vh, " + value * (-0.005) + "vh)";
    mountains.style.transform = "translate(0vh, " + value * 0.005 + "vh)";
    bg.style.transform = "translate(0vh, " + value * (-0.005) + "vh)";
}