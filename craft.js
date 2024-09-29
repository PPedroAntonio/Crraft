function showStatement(type) {
    // Hide both statements
    document.getElementById('mission').style.display = 'none';
    document.getElementById('vision').style.display = 'none';

    // Show the selected statement
    if (type === 'mission') {
        document.getElementById('mission').style.display = 'block';
    } else if (type === 'vision') {
        document.getElementById('vision').style.display = 'block';
    }
}