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
    
    // Create formatted WhatsApp message
    let whatsappMessage = `🏡 *New Customer Inquiry - Prabhakar Luxury Vihar*\n\n`;
    
    whatsappMessage += `👤 *Full Name:* ${name}\n`;
    whatsappMessage += `📧 *Email Address:* ${email}\n`;
    whatsappMessage += `📱 *Phone Number:* ${phone}\n`;
    
    if (message) {
        whatsappMessage += `\n💬 *Customer Message:*\n"${message}"\n`;
    } else {
        whatsappMessage += `\n💬 *Interest:* General inquiry about Prabhakar Luxury Vihar properties\n`;
    }
    
    whatsappMessage += `\n *Inquiry Submitted:* ${new Date().toLocaleDateString('en-IN', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    })}\n`;
    whatsappMessage += `⏰ *Time:* ${new Date().toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    })}\n\n`;
    
    whatsappMessage += `🌟 *Please contact this customer at the earliest for follow-up.*`;
    
    const phoneNumber = '917799554467';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    
    // Show success message
    showSuccessMessage();
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

// Properties Data
const properties = [
    {
        id: 1,
        title: 'Royal Villa Estate',
        type: 'villa',
        price: '₹6.2 Cr',
        location: 'Greater Community, Prime Location',
        bedrooms: 5,
        bathrooms: 6,
        area: '4500 sq.ft',
        image: './assets/Siteimage.jpg',
        featured: true
    },
    {
        id: 2,
        title: 'Luxury Penthouse',
        type: 'penthouse',
        price: '₹5.3 Cr',
        location: 'Greater Community, Skyline Tower',
        bedrooms: 4,
        bathrooms: 4,
        area: '3200 sq.ft',
        image: './assets/siteimage2.jpg',
        featured: true
    },
    {
        id: 3,
        title: 'Luxury Apartment',
        type: 'apartment',
        price: '₹3.8 Cr',
        location: 'Greater Community, Central District',
        bedrooms: 3,
        bathrooms: 3,
        area: '2400 sq.ft',
        image: './assets/siteimage3.jpg',
        featured: false
    },
    {
        id: 4,
        title: 'Grand Mansion',
        type: 'mansion',
        price: '₹12.5 Cr',
        location: 'Greater Community, Elite Enclave',
        bedrooms: 7,
        bathrooms: 8,
        area: '6500 sq.ft',
        image: './assets/siteimage4.jpg',
        featured: true
    },
    {
        id: 5,
        title: 'Premium Estate',
        type: 'villa',
        price: '₹8.9 Cr',
        location: 'Greater Community, Executive Zone',
        bedrooms: 6,
        bathrooms: 7,
        area: '5200 sq.ft',
        image: './assets/siteimage5.jpg',
        featured: true
    }
];

let currentFilter = 'all';

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

// Filter properties
function filterProperties(type) {
    currentFilter = type;
    
    // Update active button
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.closest('.filter-btn').classList.add('active');
    
    // Filter and render properties
    renderProperties();
}

// Render property card
function createPropertyCard(property, index) {
    return `
        <div class="property-card" style="animation-delay: ${index * 0.1}s">
            <div class="property-image-container">
                <img src="${property.image}" alt="${property.title}" class="property-image">
            </div>
        </div>
    `;
}

// Render properties
function renderProperties() {
    const grid = document.getElementById('propertiesGrid');
    const filteredProperties = currentFilter === 'all' 
        ? properties 
        : properties.filter(p => p.type === currentFilter);
    
    grid.innerHTML = filteredProperties.map((property, index) => 
        createPropertyCard(property, index)
    ).join('');
}

// Toggle wishlist
function toggleWishlist(id) {
    alert(`Property ${id} added to wishlist!`);
}

// View property
function viewProperty(id) {
    const property = properties.find(p => p.id === id);
    if (property) {
        alert(`Viewing details for: ${property.title}\n\nPrice: ${property.price}\nLocation: ${property.location}\n\nContact us to learn more!`);
    }
}

// Schedule tour
function scheduleTour(id) {
    const property = properties.find(p => p.id === id);
    if (property) {
        alert(`Scheduling a tour for: ${property.title}\n\nOur team will contact you shortly to confirm your visit!`);
    }
}

// Contact form submission
document.addEventListener('DOMContentLoaded', () => {
    // Render properties on page load
    renderProperties();
    
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
