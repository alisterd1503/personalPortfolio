// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Function to toggle nav on mobile
function toggleMenu() {
  var nav = document.querySelector('nav ul');
  nav.classList.toggle('show');
}