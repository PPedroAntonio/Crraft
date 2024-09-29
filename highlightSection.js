document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all sections
        document.querySelectorAll('.category-section').forEach(section => {
            section.classList.remove('active');
        });

        // Add active class to the selected section
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.classList.add('active');
    });
}); //dropdow menu

document.querySelector('.menu-icon').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdownMenu-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});