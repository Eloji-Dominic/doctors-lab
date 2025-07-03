// Add event listeners on multiple elements
const addEventonElements = function(elements, eventType, callback){
  elements.forEach((element) => {
    element.addEventListener(eventType, callback);
  });
};

// Preloader It will keep loading until the documents are ready
const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", function(){
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// Add headbar when on scroll
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function(){
  if(window.scrollY > 100){
    header.classList.add("active");
    backTopBtn.classList.add("active");
  }else{
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);

// Adding mobile navbar
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const toggleNav = function() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};
addEventonElements(navTogglers, "click", toggleNav);

// Scroll Reveal
const revealElements = document.querySelectorAll("[data-reveal]");
const revealElementsOnScroll = function(){
  revealElements.forEach((revealElement) => {
    if(revealElement.getBoundingClientRect().top < window.innerHeight / 1.15){
      revealElement.classList.add("revealed");
    } else {
      revealElement.classList.remove("revealed");
    }
  });
};
window.addEventListener("scroll", revealElementsOnScroll);
window.addEventListener("load", revealElementsOnScroll);






