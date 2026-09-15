const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
      menuToggle.setAttribute("aria-label", "Stäng meny");
    } else {
      menuToggle.setAttribute("aria-label", "Öppna meny");
    }
  });
}
