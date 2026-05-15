document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mesajınız alındı! Sizinle en kısa sürede iletişime geçeceğiz.');
    this.reset();
});

const buttons = document.querySelectorAll('.btn-primary, .btn-submit');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        this.style.opacity = '0.7';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 100);
    });
});