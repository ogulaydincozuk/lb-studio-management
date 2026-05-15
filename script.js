document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mesajınız alındı! Sizinle en kısa sürede iletişime geçeceğiz.');
    this.reset();
});