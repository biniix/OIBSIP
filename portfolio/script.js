
window.addEventListener("DOMContentLoaded", function () {
  const greetingElement = document.getElementById("greeting");

  if (!greetingElement) return;

  const greeting = "Hello";

  greetingElement.textContent = "";

  setTimeout(() => {
    typeNextChar();
  }, 1000);

  let charIndex = 0;

  function typeNextChar() {
    if (charIndex < greeting.length) {
      greetingElement.textContent += greeting.charAt(charIndex);
      charIndex++;
      setTimeout(typeNextChar, 200);
    }
  }
});


// Smooth scroll with offset for navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".section-title, .about-text, .skill-card, .skills-wrapper, .project-card, .contact-subtitle, .contact-links",
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

const currentTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", currentTheme);

themeToggle.addEventListener("click", () => {
  const theme = html.getAttribute("data-theme");
  const newTheme = theme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});
