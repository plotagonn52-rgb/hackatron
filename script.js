document.addEventListener('DOMContentLoaded', () => {
    // Navigasyon için yumuşak kaydırma
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Sabit başlık için boşluk
                    behavior: 'smooth'
                });
            }
        });
    }

    // İletişim Formu doğrulama
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Lütfen tüm alanları doldurun.');
            } else if (!isValidEmail(email)) {
                alert('Lütfen geçerli bir e-posta adresi girin.');
            } else {
                alert('Mesajınız başarıyla gönderildi! En kısa sürede size geri döneceğiz.');
                contactForm.reset();
            }
        });
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});