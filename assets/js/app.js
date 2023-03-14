const mobile_nav_toggle = document.querySelector(".mobile-nav-toggle");
const navList = document.querySelector(".nav-list");
const faqsAccordionHeader = document.querySelectorAll(
  ".faqs-accordion__header"
);
const strongHero = document.querySelectorAll(".hero strong");
const animationUp = document.querySelectorAll(".animation-up");
const navLink = document.querySelectorAll(".nav-link");

const handleClickMobileNavToggle = (e) => {
  mobile_nav_toggle.classList.toggle("open");
  navList.classList.toggle("active");
};
const handleClickAccordionHeader = (e) => {
  const faqsAccordionContent = e.target.nextElementSibling;

  faqsAccordionContent.style.height = `${faqsAccordionContent.scrollHeight}px`;
  faqsAccordionContent.classList.toggle("active");
  if (!faqsAccordionContent.classList.contains("active")) {
    faqsAccordionContent.style.height = "0px";
  }

  const ic = e.target.querySelector(".faqs-accordion__icon");
  ic.classList.toggle("rotate");
};
const handleClickNavLink = (e) => {
  e.target.classList.add("active");
};

[...navLink].forEach((item) => {
  item.addEventListener("click", handleClickNavLink);
});
mobile_nav_toggle.addEventListener("click", handleClickMobileNavToggle);
[...faqsAccordionHeader].forEach((item) => {
  item.addEventListener("click", handleClickAccordionHeader);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const { target } = entry;
    target.classList.toggle("active", entry.isIntersecting);
    observer.unobserve(target);
  });
}, {});

[...strongHero].forEach((item) => {
  observer.observe(item);
});

const animation = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const { target } = entry;
      target.classList.toggle("is-active", entry.isIntersecting);
      //nimation.unobserve(target);
    });
  },
  {
    rootMargin: "-10px",
  }
);
[...animationUp].forEach((item) => {
  animation.observe(item);
});

const name = document.querySelector(".enroll-sell__heading");
const price = document.querySelector(".enroll-sell__price");
const formSell = document.querySelector(".enroll-sell__quantity");
const products = JSON.parse(localStorage.getItem("products")) || [];
formSell.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = {
    name: name.innerHTML,
    price: price.innerHTML,
    quantity: e.target.elements.quantity.value,
  };

  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
});
