// crr.js

function showModal(phaseId) {
    // Construct the URL based on the phaseId
    const url = `${phaseId}.html`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('modal-body').innerHTML = data;
            document.getElementById('content-modal').style.display = 'block';
        })
        .catch(error => {
            console.error('Error loading content:', error);
            alert('Failed to load content. Please try again later.');
        });
}

function closeModal() {
    document.getElementById('content-modal').style.display = 'none';
}