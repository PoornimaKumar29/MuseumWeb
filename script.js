const menuButton = document.getElementById('menu_btn');
const navLinks = document.getElementById('nav-links');
const takeTourButton = document.querySelector('.take-tour-btn');
const aboutUsLink = document.getElementById('about-us-link');
// const scrollLinks = document.querySelectorAll('.scroll-link'); // New selector for scroll links

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle the show class
});

// Navigate to the collections page when the button is clicked
takeTourButton.addEventListener('click', () => {
    window.location.href = 'collections.html'; // Redirect to the collections page
});

// Navigate to the About Us page when the About Us link is clicked
aboutUsLink.addEventListener('click', () => {
    window.location.href = 'https://govtmuseumchennai.org/about-us'; // Correct link to the About Us page
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Show the popup message
    document.getElementById('popupMessage').style.display = 'flex';
});

// Close the popup when the close button is clicked
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popupMessage').style.display = 'none';
});




