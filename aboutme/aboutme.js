function navButtonClicked() {
    var navbut1 = document.getElementById("navbutton1");
    var navbut2 = document.getElementById("navbutton2");
    var navbut3 = document.getElementById("navbutton3");
    navbut1.style.top = "80px";
    navbut2.style.top = "160px";
    navbut3.style.top = "240px";
    setTimeout(function() {navbut1.style.top="0px"; navbut2.style.top="0px"; navbut3.style.top="0px";},4000);
}
function navTo(nav_location) {
    window.location.assign("https://preview.c9users.io/henrikevers/csportfolio/" + nav_location);
}