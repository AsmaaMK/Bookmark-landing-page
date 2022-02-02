/* global variables */
const brandLink = document.getElementById("brand-link");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementsByTagName("nav")[0];


/* hide the navbar when clicking the hamburger btn */
hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.add("hidden");
  brandLink.classList.add("hidden");
  nav.classList.remove("blured-background");
});

/* show the navbar when clicking the close btn */
closeBtn.addEventListener("click", () => {
  setTimeout(() => {
    hamburgerIcon.classList.remove("hidden");
    brandLink.classList.remove("hidden");
    nav.classList.add("blured-background");
  }, 250);
});


/* close the navbar when clicking a link */
nav.addEventListener("click", (e) => {
  if (e.target.nodeName === "A") {
    closeBtn.click();
  }
});
