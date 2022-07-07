const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});

const stats = document.querySelector(".stats");
const counters = document.querySelector(".counter");

let bol = false;

const sectionOffSet = stats.offsetTop + stats.offsetHeight;

window.addEventListener("scroll", () => {
  const pageOffset = window.innerHeight + scrollY;

  if (pageOffset > sectionOffSet && bol === false) {
    counters.forEach((counter) => {
      function updateCount() {
        const target = +counter.getAttribute("data-target");
        const speed = +counter.getAttribute("data-speed");
        const count = +counter.innerText;

        if (count < target) {
          counter.innerText = count + 1;
          setTimeout(updateCount, speed);
        } else {
          counter.innerText = target;
        }
      }

      updateCount();

      bol = true;
    });
  }
});
