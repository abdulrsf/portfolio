let mouseCursor = document.querySelector(".custom-cursor");
let navLinks = document.querySelectorAll(".nav-items li");

window.addEventListener("mousemove", cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}
