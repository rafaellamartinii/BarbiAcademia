const WHATSAPP_NUMBER = "5547991034791";

const contactForm = document.querySelector("form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const message = document.getElementById("contact-message").value;

    const whatsappMessage = encodeURIComponent(
      `Olá! Gostaria de informações sobre a Academia Barbi.\n\n` +
        `*Nome:* ${name}\n` +
        `*Email:* ${email}\n` +
        `*Mensagem:* ${message}`,
    );

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");

    contactForm.reset();
  });
}

const navbar = document.getElementById("navbar");
const navbarCollapse = document.querySelector(".navbar-collapse");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        hide: true,
      });
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});
