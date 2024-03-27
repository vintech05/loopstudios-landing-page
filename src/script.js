document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay");
  const brandLogo = document.querySelector(".brand-logo");
  const closeBtn = document.querySelector(".close-btn");
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  function toggleTranslate() {
    brandLogo.classList.toggle("-translate-y-[50em]");
    closeBtn.classList.toggle("-translate-y-[50em]");
    navLinks.classList.toggle("-translate-y-[50em]");
    overlay.classList.toggle("-translate-y-[100em]");
  }

  function addTransition() {
    brandLogo.classList.add("transition-transform", "duration-500", "ease-out");
    closeBtn.classList.add("transition-transform", "duration-500", "ease-out");
    navLinks.classList.add("transition-transform", "duration-500", "ease-out");
    overlay.classList.add("transition-opacity", "duration-500", "ease-out");
  }

  function removeTransition() {
    brandLogo.classList.remove(
      "transition-transform",
      "duration-700",
      "ease-out"
    );
    closeBtn.classList.remove(
      "transition-transform",
      "duration-700",
      "ease-out"
    );
    navLinks.classList.remove(
      "transition-transform",
      "duration-700",
      "ease-out"
    );
    overlay.classList.remove("transition-opacity", "duration-700", "ease-out");
  }

  hamburger.addEventListener("click", function () {
    toggleTranslate();
    addTransition();

    hamburger.style.display = "none";

    brandLogo.addEventListener("transitionend", removeTransition, {
      once: true,
    });
    closeBtn.addEventListener("transitionend", removeTransition, {
      once: true,
    });
    navLinks.addEventListener("transitionend", removeTransition, {
      once: true,
    });
    overlay.addEventListener("transitionend", removeTransition, { once: true });
  });

  closeBtn.addEventListener("click", function () {
    toggleTranslate();
    addTransition();

    hamburger.style.display = "block";

    brandLogo.addEventListener("transitionend", removeTransition, {
      once: true,
    });
    closeBtn.addEventListener("transitionend", removeTransition, {
      once: true,
    });
    navLinks.addEventListener("transitionend", removeTransition, {
      once: true,
    });
    overlay.addEventListener("transitionend", removeTransition, { once: true });
  });
});
