// functionality to open and close search box
const btn = document.getElementById("search-btn");
const form = document.getElementById("search-form");

btn.addEventListener("click", () => {
  if (form.classList.contains("header__search-form--open")) {
    form.classList.remove("header__search-form--open");
    btn.classList.remove("fa-xmark");
    btn.classList.add("fa-magnifying-glass");
  } else {
    form.classList.add("header__search-form--open");
    btn.classList.remove("fa-magnifying-glass");
    btn.classList.add("fa-xmark");
  }
});

// niny-slider setting
const slider1 = tns({
  container: ".slider-1",
  mouseDrag: true,
  autoplay: true,
  autoplayDirection: "backward",
  autoplayTimeout: 3000,
  nav: false,
  autoplayButtonOutput: false,
  controlsContainer: "#control-1",
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    760: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

const slider2 = tns({
  container: ".slider-2",
  mouseDrag: true,
  autoplay: true,
  autoplayDirection: "backward",
  autoplayTimeout: 3500,
  nav: false,
  autoplayButtonOutput: false,
  controlsContainer: "#control-2",
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    760: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
