// Properties Data
const properties = [
    {
        id: 1,
        title: 'Royal Villa Estate',
        type: 'villa',
        price: '₹8.5 Cr',
        location: 'Greater Community, Prime Location',
        bedrooms: 5,
        bathrooms: 6,
        area: '4500 sq.ft',
        image: 'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MjE1MDAzOXww&ixlib=rb-4.1.0&q=80&w=1080',
        featured: true
    },
    {
        id: 2,
        title: 'Luxury Penthouse',
        type: 'penthouse',
        price: '₹6.2 Cr',
        location: 'Greater Community, Skyline Tower',
        bedrooms: 4,
        bathrooms: 4,
        area: '3200 sq.ft',
        image: 'https://images.unsplash.com/photo-1677553512940-f79af72efd1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIxNjAzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        featured: true
    },
    {
        id: 3,
        title: 'Modern Luxury Apartment',
        type: 'apartment',
        price: '₹3.8 Cr',
        location: 'Greater Community, Central District',
        bedrooms: 3,
        bathrooms: 3,
        area: '2400 sq.ft',
        image: 'https://images.unsplash.com/photo-1664892798972-079f15663b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBhcGFydG1lbnR8ZW58MXx8fHwxNzYyMTczNzkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
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
        image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5zaW9ufGVufDF8fHx8MTc2MjE3Mzc5NHww&ixlib=rb-4.1.0&q=80&w=1080',
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
    const featuredBadge = property.featured ? `
        <div class="featured-badge">
            <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            Featured
        </div>
    ` : '';
    
    return `
        <div class="property-card" style="animation-delay: ${index * 0.1}s">
            <div class="property-image-container">
                <img src="${property.image}" alt="${property.title}" class="property-image">
                <div class="property-overlay"></div>
                
                <div class="property-badges">
                    ${featuredBadge}
                    <button class="wishlist-btn" onclick="toggleWishlist(${property.id})">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                        </svg>
                    </button>
                </div>
                
                <div class="property-type-badge">${property.type}</div>
                
                <div class="property-price-section">
                    <div>
                        <p class="property-price-label">Starting from</p>
                        <p class="property-price">${property.price}</p>
                    </div>
                    <button class="view-btn" onclick="viewProperty(${property.id})">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                        View
                    </button>
                </div>
            </div>
            
            <div class="property-content">
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>${property.location}</span>
                </div>
                
                <div class="property-features">
                    <div class="feature-item">
                        <div class="feature-icon">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                            </svg>
                        </div>
                        <p class="feature-value">${property.bedrooms}</p>
                        <p class="feature-label">Bedrooms</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                            </svg>
                        </div>
                        <p class="feature-value">${property.bathrooms}</p>
                        <p class="feature-label">Bathrooms</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                            </svg>
                        </div>
                        <p class="feature-value">${property.area}</p>
                        <p class="feature-label">Area</p>
                    </div>
                </div>
                
                <div class="property-actions">
                    <button class="btn-schedule" onclick="scheduleTour(${property.id})">Schedule Tour</button>
                    <button class="btn-details" onclick="viewProperty(${property.id})">Details</button>
                </div>
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
