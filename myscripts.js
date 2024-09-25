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

function toggleText(button) {
  var parentDiv = button.parentElement;  // Get the parent element of the button
  var moreText = parentDiv.querySelector(".more");  // Find the 'more' text and image container
  var dots = parentDiv.querySelector(".dots");  // Find the 'dots' span

  // Check if the 'more' text is hidden
  if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";  // Show the additional text and images
      dots.style.display = "none";  // Hide the dots
      button.innerHTML = "Read less";  // Change button text to 'Read less'
  } else {
      moreText.style.display = "none";  // Hide the additional text and images
      dots.style.display = "inline";  // Show the dots again
      button.innerHTML = "Read more";  // Change button text back to 'Read more'
  }
}



