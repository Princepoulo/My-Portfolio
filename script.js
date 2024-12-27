document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
// JavaScript for toggling the mobile menu


menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// JavaScript for smooth scroll
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Get references to the menu icon and navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Add a click event listener to toggle the menu
menuIcon.addEventListener('click', () => {
  // Toggle the 'active' class on the navbar
  navbar.classList.toggle('active');
  
  // Change icon based on the state
  const isMenuOpen = navbar.classList.contains('active');
  menuIcon.setAttribute('name', isMenuOpen ? 'x' : 'menu');
});

