function copyCitation() {
    const citation = document.getElementById("citation").innerText;
    navigator.clipboard.writeText(citation).then(() => {
        alert("Citation copied to clipboard!");
    });
}