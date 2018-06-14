function toggleMenu() {
    var m = document.getElementById("mainNav");
    if (m.className === "topnav") {
        m.className += " responsive";
    } else {
        m.className = "topnav";
    }
}