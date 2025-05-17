// Highlight active page
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-link").forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });

  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");
  
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
  
      revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
  
        if (elementTop < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // trigger once on load
  });
  
// Reveal on scroll
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
});

document.getElementById("mobile-toggle").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("show");
});

