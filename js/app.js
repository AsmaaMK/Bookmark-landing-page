const brandLink = document.getElementById("brand-link");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementsByTagName("nav")[0];

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.add("hidden");
  brandLink.classList.add("hidden");
  nav.classList.remove("blured-background");
});

closeBtn.addEventListener("click", () => {
  setTimeout(() => {
    hamburgerIcon.classList.remove("hidden");
    brandLink.classList.remove("hidden");
    nav.classList.add("blured-background");
  }, 250);
});
