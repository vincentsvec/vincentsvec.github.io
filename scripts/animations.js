let content = document.getElementById("content")
content.onscroll = function () { animateScroll(); animateIcons(); animateCards() };

let programming = document.querySelector("#programming-card")
let rubiks_cube = document.querySelector("#rubiks-cube-card")
let art = document.querySelector("#art-card")
let card_text = document.querySelectorAll(".card-title")
let card_btns = document.querySelectorAll(".card-btn")

function animateCards() {
    if (value >= content.clientHeight * 2 - 10) {
        programming.style.height = "200%";
        rubiks_cube.style.height = "200%";
        art.style.height = "200%";

        card_text.forEach(element => {
            element.style.opacity = "1";
        })

        card_btns.forEach(btn => {
            btn.style.opacity = "1";
        })
    }
}