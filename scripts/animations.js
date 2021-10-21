// skills cards
let programming = document.querySelector("#programming-icon")
let rubiks_cube = document.querySelector("#rubiks-cube-icon")
let art = document.querySelector("#art-icon")

let content = document.getElementById("content")
content.onscroll = function () { animateScroll(); animateIcons() };

var trigger = content.clientHeight + content.clientHeight * 0.4

function animateIcons() {
    var offset_x = content.clientWidth / 50000

    if (value >= trigger && value < content.clientHeight * 2) {   // value = content.scrollTop
        programming.style.transform = "translate(" + (value - trigger) * -offset_x + "vh, " + (value - trigger) * 0.12 + "vh)"
        rubiks_cube.style.transform = "translate(0vh, " + (value - trigger) * 0.12 + "vh) "
        art.style.transform = "translate(" + (value - trigger) * offset_x + "vh, " + (value - trigger) * 0.12 + "vh)"
    } else if (value < content.clientWidth * 2) {

    }
}