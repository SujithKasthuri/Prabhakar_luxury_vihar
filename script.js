// WhatsApp Integration Functions
function sendWhatsAppMessage(customMessage = '') {
    const phoneNumber = '917799554467';
    let message = customMessage || 'Hi, I\'m interested in Prabhakar Luxury Vihar properties. Please provide more information.';
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

function sendWhatsAppFromForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate required fields
    if (!name || !email || !phone) {
        alert('Please fill in all required fields: Full Name, Email Address, and Phone Number.');
        return;
    }
    
    // Create simple formatted message (universal compatibility)
    let whatsappMessage = `New Inquiry - Prabhakar Luxury Vihar\n\n`;
    whatsappMessage += `Name: ${name}\n`;
    whatsappMessage += `Email: ${email}\n`;
    whatsappMessage += `Phone: ${phone}`;
    
    if (message) {
        whatsappMessage += `\nMessage: ${message}`;
    }
    
    const phoneNumber = '917799554467';
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Universal WhatsApp URL that works on ALL platforms
    // wa.me works on: Mobile apps, WhatsApp Web, and WhatsApp Desktop
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open in new tab/window - browser/OS will route to correct WhatsApp client
    window.open(whatsappURL, '_blank');
    
    // Show success message after brief delay
    setTimeout(() => {
        showSuccessMessage();
    }, 300);
}

// Show success message after form submission
function showSuccessMessage() {
    alert('✅ Thank you! Your inquiry has been sent via WhatsApp. We will contact you shortly.');
}

// Show/hide WhatsApp float button based on scroll
function toggleWhatsAppButton() {
    const whatsappFloat = document.getElementById('whatsappFloat');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        whatsappFloat.style.display = 'block';
        whatsappFloat.style.animation = 'whatsapp-pulse 2s infinite';
    } else {
        whatsappFloat.style.display = 'none';
    }
}

// Smooth scroll to section
function scrollToSection(event, sectionId) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

// Navbar scroll effect and WhatsApp button toggle
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Toggle WhatsApp button
    toggleWhatsAppButton();
});

// Contact form submission
document.addEventListener('DOMContentLoaded', () => {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Send form data via WhatsApp
            sendWhatsAppFromForm();
            contactForm.reset();
        });
    }
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
    
    // Add scroll animation classes
    document.querySelectorAll('.stat-box, .feature-card').forEach(el => {
        el.classList.add('fade-in-up');
    });
});
