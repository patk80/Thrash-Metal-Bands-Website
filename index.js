let navLinks       = document.querySelectorAll(".dropdown-item");
let navbarCollapse = document.querySelector(".navbar-collapse");
let navbarToggler  = document.querySelector(".navbar-toggler");
// Looping through all navLinks(dropdown-items) and adding an event listener to close navbar when clicked (made for mobile) //
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbarCollapse.classList.remove("show");
        navbarToggler.classList.add("collapsed");
    });
});