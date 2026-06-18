// Terminal typing animation
const command = "whoami --verbose";
const cmdEl = document.getElementById("typed-cmd");
const outputEl = document.getElementById("terminal-output");

let i = 0;
function typeCmd() {
  if (i < command.length) {
    cmdEl.textContent += command[i++];
    setTimeout(typeCmd, 80);
  } else {
    setTimeout(() => {
      outputEl.style.display = "block";
      document.querySelector(".cursor").style.display = "none";
    }, 400);
  }
}

setTimeout(typeCmd, 800);

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu on link click (mobile)
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Smooth scroll offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
    }
  });
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".project-card, .cert-card, .skill-category, .stat").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});
