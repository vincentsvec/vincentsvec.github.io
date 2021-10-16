// active underlines
var links = document.getElementsByClassName("link-nav");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        var active = document.getElementsByClassName("active");
        active[0].className = active[0].className.replace(" active", "");
        this.className += " active";
    });
}

content.addEventListener("scroll", function () {
    value = content.scrollTop;
    if (value < content.clientHeight) {
        addActive(document.querySelector(".home"));
    }
    else if (value >= content.clientHeight && content.clientHeight * 2 > value) {
        addActive(document.querySelector(".about-me"));
    }
    else if (value >= content.clientHeight * 2 && content.clientHeight * 3 > value) {
        addActive(document.querySelector(".skills"));
    }
    else if (value >= content.clientHeight * 3) {
        addActive(document.querySelector(".contact"));
    }

})

function addActive(current) {
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