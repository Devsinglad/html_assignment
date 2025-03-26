// main.js
fetch("./components/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading header:", error));

fetch("./components/search.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("search-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading header:", error));
  
  
  
  fetch("./components/hero.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("hero-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading header:", error));
  
  
  
  
  fetch("./components/service.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("service-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading header:", error));

fetch("./components/explore.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("explore-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading header:", error));

fetch("./components/agents.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("agents-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading header:", error));

fetch("./components/news_letter.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("news-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading header:", error));

fetch("./components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error loading header:", error));




  ///

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  // Show/hide button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      // Show button after scrolling 300px
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  // Scroll to top when button is clicked
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  });
});

document.querySelectorAll(".option").forEach((option) => {
  option.addEventListener("click", function () {
    // Remove selected class from all options
    document
      .querySelectorAll(".option")
      .forEach((opt) => opt.classList.remove("selected"));

    // Add selected class to clicked option
    this.classList.add("selected");

    // Update trigger text
    const triggerText =
      this.closest(".custom-select").querySelector(".select-trigger");
    triggerText.textContent = this.textContent + " ";

    // Add arrow back
    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.innerHTML = "&#9662;";
    triggerText.appendChild(arrow);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    // Optional: Animate hamburger to X
    this.classList.toggle("active");
  });
});
