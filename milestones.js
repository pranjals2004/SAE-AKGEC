// Reveal animation when scrolling
const containers = document.querySelectorAll(".container");

window.addEventListener("scroll", () => {
  containers.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    if (position < screenPos) {
      el.classList.add("active");
    }
  });
});
