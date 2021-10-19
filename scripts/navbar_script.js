// active underlines
content.addEventListener("scroll", function () {
    value = content.scrollTop;
    if (value < content.clientHeight) {
        addActive(".home");
    }
    else if (value >= content.clientHeight && content.clientHeight * 2 > value) {
        addActive(".about-me");
    }
    else if (value >= content.clientHeight * 2 && content.clientHeight * 3 > value) {
        addActive(".skills");
    }
    else if (value >= content.clientHeight * 3) {
        addActive(".contact");
    }

})

function addActive(link) {
    var current = document.querySelector(link)
    var active = document.getElementsByClassName("active");
    active[0].className = active[0].className.replace(" active", "");
    current.className += " active";
}

function home() {
    content.scrollTo({ top: 0 })
}

// fixes reload bug
window.onload = function () {
    content.scrollTo({ top: 0 })
}