const mobile_nav_toggle = document.querySelector(".mobile-nav-toggle");
const navList = document.querySelector(".nav-list");
const faqsAccordionHeader = document.querySelectorAll(
  ".faqs-accordion__header"
);
const strongHero = document.querySelectorAll(".hero strong");
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