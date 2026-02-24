const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function (e) {

        e.stopPropagation(); // prevent bubbling

        // Close other dropdowns
        dropdowns.forEach(item => {
            if (item !== dropdown) {
                item.classList.remove('active');
            }
        });

        // Toggle current one
        this.classList.toggle('active');
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', function () {
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
    });
});

//hamburger menu

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', (e) => {
    navLinks.classList.toggle('active');
    e.stopPropagation(); // prevent document click from immediately closing
});

// Close nav if clicking outside
document.addEventListener('click', (e) => {
    // if click is NOT inside navLinks or hamburger
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});


// navbar hide on scroll down
let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navLinks.classList.remove("active");
    }

    lastScroll = currentScroll;
});
