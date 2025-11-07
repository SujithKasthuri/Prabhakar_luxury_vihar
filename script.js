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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
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
            
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            alert('Thank you for your interest! We will contact you shortly.');
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
