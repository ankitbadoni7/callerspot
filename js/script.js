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
