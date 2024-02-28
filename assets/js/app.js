let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
let navBtn = document.querySelector(".navLinks");


menu.addEventListener("click", function () {
  mobileView.classList.toggle("show");
  body.classList.toggle("overflow-hidden");
  span1.classList.toggle("span4");
  span2.classList.toggle("span5");
  span3.classList.toggle("span6");
});

function removeOverflowHidden() {
  body.classList.remove("overflow-hidden");
  mobileView.classList.remove("show");
  span1.classList.remove("span4");
  span2.classList.remove("span5");
  span3.classList.remove("span6");
}


// preloder
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
}, 3000);



// backtotop
function backToTop() {
  window.scrollTo(0, 0);
}
document.getElementById('backToTop').addEventListener("click", backToTop)
window.addEventListener("scroll", function () {
  const mybackto = document.getElementById("backToTop");
  if (window.scrollY > 500) {
    mybackto.style.display = "block";
  } else {
    mybackto.style.display = "none";
  }
});