//current url nav style
const activeNavLink = () => {
  const home = document.getElementById("home-link");
  const portfolio = document.getElementById("portfolio-link");
  const about = document.getElementById("about-link");
  const contact = document.getElementById("contact-link");

  const sections = {
    home: document.getElementById("home"),
    portfolio: document.getElementById("portfolio"),
    about: document.getElementById("about"),
    contact: document.getElementById("contact"),
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    for (const section in sections) {
      if (
        scrollPosition >= sections[section].offsetTop &&
        scrollPosition <
          sections[section].offsetTop + sections[section].offsetHeight
      ) {
        removeActiveClass();
        document.getElementById(section + "-link").classList.add("active");
        break;
      }
    }
  };

  const removeActiveClass = () => {
    home.classList.remove("active");
    portfolio.classList.remove("active");
    about.classList.remove("active");
    contact.classList.remove("active");
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
};

activeNavLink();

//current Year
const currentYear = () => {
  const year = new Date().getFullYear();
  document.getElementById("current-year").innerHTML = year;
};
currentYear();

//toggle menus
const hamburgerMenu = document.querySelector(".hamburger-menu");
const dropdownMenu = document.querySelector(".dropdown-menu");

hamburgerMenu.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});
