//Active Nav Links
// document.addEventListener("DOMContentLoaded", function () {
//   const currentPage = window.location.href.split(/[?#]/)[0];
//   const navLinks = document.querySelectorAll(".nav-link");
//   navLinks.forEach((item) => {
//     if (item.href === currentPage) {
//       item.classList.add("active");
//     }
//   });
// });

//Typewriter Timing Effect
const homeSubtitleText = document.querySelector(".home-subtitle-text");
homeSubtitleText.style.fontFamily = "Inconsolata, monospace";
homeSubtitleText.style.margin = "0 0 0 10px";

const textSwitch = (counter) => {
  const texts = ["Web Development", "Web Design", "Mobile App Development"];
  const currentIndex = counter % texts.length;
  homeSubtitleText.textContent = texts[currentIndex];
  setTimeout(() => {
    textSwitch(counter + 1);
  }, 2000);
};
textSwitch(0);

// Portfolio Card Flip
const portfolioCards = document.querySelectorAll(".portfolio-card");
portfolioCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
