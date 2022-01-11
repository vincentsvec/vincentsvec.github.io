//skills cards
let icons_container = document.querySelector(".icons-container");

var trigger = content.clientHeight * 1.15;
var finish = false
var stop = content.clientHeight * 1.9

if (content.clientWidth <= 768) {
    stop = content.clientHeight * 1.9
}

window.addEventListener("resize", function () {
    if (content.clientWidth <= 768 && finish) {
        icons_container.style.height = "150%"
    } else if (finish) {
        icons_container.style.height = "25%"
    }
})

// function called from animations.js
function animateIcons() {
    if (value >= trigger && value < stop && finish == false) {   // value = content.scrollTop
        if (content.clientWidth >= 768) {
            icons_container.style.paddingLeft = String(32 - value * 0.013) + "%"
            icons_container.style.paddingRight = String(32 - value * 0.013) + "%"
            icons_container.style.transform = "translate(0px, " + (value - trigger) + "px)"
        } else {
            icons_container.style.height = String(25 + value * 0.1) + "%"
            icons_container.style.transform = "translate(0px, " + (value - trigger - 70) + "px)"
        }
    } if (value > stop - 10) {
        finish = true;
    }
}

let skillslink = document.querySelector("#skills-link")

skillslink.addEventListener("click", () => {

    if (content.clientWidth <= 768) {
        icons_container.style.paddingLeft = "20%"
        icons_container.style.paddingRight = "20%"
    } else {
        icons_container.style.paddingLeft = "5%"
        icons_container.style.paddingRight = "5%"
    }

    icons_container.style.transform = "translate(0px, 650px)"
    icons_container.style.height = "150%";

    console.log(window.location.pathname)

})


// checks for redirect to skills section
var section = window.location.hash.substr(1);

if (section == "skills" && content.clientWidth <= 768) {
    icons_container.style.height = "150%";
    icons_container.style.transform = "translate(0px, 580px)";
}
