// Example JS - simple form alert
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    form.reset();
});