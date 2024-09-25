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

function expand(button) {
  // Get the closest div container that includes the 'more' section and the button
  var parentDiv = button.parentElement;

  // Find the 'more' section specifically within this parent div
  var moreText = parentDiv.querySelector(".more");

  // Toggle the display of the 'more' section
  if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "block";  // Show the hidden content
      button.innerHTML = "Read less";    // Change button text to 'Read less'
  } else {
      moreText.style.display = "none";   // Hide the content again
      button.innerHTML = "Read more";    // Change button text back to 'Read more'
  }
}



