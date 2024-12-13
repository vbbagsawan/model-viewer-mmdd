// Smooth scrolling for sections
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    document
      .querySelectorAll("nav a")
      .forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll-to-top button functionality
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Object fade-in animation
const objects = document.querySelectorAll(".object");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
});

objects.forEach((object) => observer.observe(object));

// Hotspot
const sections = ["leaves1", "flower1"];

sections.forEach((section) => {
  document.getElementById(section).addEventListener("click", () => {
    sections.forEach((sec) => {
      document.getElementById(`${sec}-info`).style.display =
        sec === section ? "block" : "none";
    });
  });
});

const sections1 = ["leaves2", "flower2"];

sections1.forEach((section) => {
  document.getElementById(section).addEventListener("click", () => {
    sections1.forEach((sec) => {
      document.getElementById(`${sec}-info`).style.display =
        sec === section ? "block" : "none";
    });
  });
});

const sections2 = ["leaves3", "flower3"];

sections2.forEach((section) => {
  document.getElementById(section).addEventListener("click", () => {
    sections2.forEach((sec) => {
      document.getElementById(`${sec}-info`).style.display =
        sec === section ? "block" : "none";
    });
  });
});
