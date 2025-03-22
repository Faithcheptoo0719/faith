/* script.js */

document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav a');

    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                contentDiv.innerHTML = html;
            });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('href');
            if(page !== "index.html"){
                loadPage(page);
            }
        });
    });
});