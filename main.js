window.addEventListener("scroll", function () {
    if (window.scrollY > 182) {
        document.getElementById("menu").classList.add("menu--fixed");
    } else {
        document.getElementById("menu").classList.remove("menu--fixed");
    }
});

function toggleNav() {
    document.getElementById("menu").classList.toggle("menu--open");
}
function closeNav() {
    document.getElementById("menu").classList.remove("menu--open");
}
