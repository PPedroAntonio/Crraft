document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.work-section').forEach(section => {
            section.classList.remove('highlight');
        });
        const section = document.querySelector(this.getAttribute('href'));
        section.classList.add('highlight');
    });
});