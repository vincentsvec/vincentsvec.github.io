comps = document.querySelectorAll(".competition");

function positionCompetitions() {
    value = 0
    order = 0
    comps.forEach(comp => {
        if (order == 0) {
            comp.style.marginLeft = "50%"
            comp.style.transform = "translate(-25px, " + value + "px)"
            order = 1
        } else {
            comp.style.marginRight = "50%"
            comp.style.transform = "translate(25px, " + value + "px)"
            comp.style.justifyContent = "flex-end"
            order = 0
        }
        value += 150
    })
}

positionCompetitions()


/**
 * Animates competitons when they come into view
 */
wca_image = document.querySelector(".roadmap-cover").querySelector("img")
wca_link = document.querySelector(".roadmap-cover").querySelector("p")

window.onscroll = function () {
    comps.forEach(comp => {
        rect = comp.getBoundingClientRect()

        if (rect.top <= window.innerHeight / 1.8) {
            comp.querySelector("p").style.opacity = "1"
        }
    })

    if (window.scrollY >= document.documentElement.scrollHeight - document.documentElement.clientHeight - 30) {
        wca_image.style.opacity = "1"
        wca_link.style.opacity = "1"
    } else {
        wca_image.style.opacity = "0"
        wca_link.style.opacity = "0"
    }

}