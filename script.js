// Solar Energizers Website - Main JavaScript

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    initCarousel();
    initTypingEffect();
});

// Main initialization function
function initializeWebsite() {
    setupNavigationEffects();
    setupScrollAnimations();
    setupLoadingAnimation();
    setupScrollIndicator();
    setupMobileMenu();
    setupParallaxEffects();
    setupCounterAnimations();
    setupFormValidation();
}

function initTypingEffect() {
    const heroHeading = document.getElementById('hero-heading'); 
    const text = "Powering Tomorrow with Solar Energy";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            heroHeading.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Typing speed
        } else {
            // We've typed the full text — wait 5 seconds
            setTimeout(() => {
                heroHeading.innerHTML = ""; // Clear text
                index = 0;                 // Reset index
                typeWriter();              // Start again
            }, 3000); // 5000 ms = 5 second pause
        }
    }

    typeWriter();
}



// Navigation Effects
function setupNavigationEffects() {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-menu a');
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
                updateActiveNavigation(this.getAttribute('href'));
            }
        });
    });
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 100);
        updateActiveNavigationOnScroll();
    });
}

function updateActiveNavigation(href) {
    document.querySelectorAll('.nav-menu a').forEach(link => link.classList.remove('active'));
    document.querySelector(`a[href="${href}"]`)?.classList.add('active');
}

function updateActiveNavigationOnScroll() {
    const scrollPos = window.scrollY + 150;
    document.querySelectorAll('section[id]').forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            updateActiveNavigation(`#${section.id}`);
        }
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible'));
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right').forEach(el => observer.observe(el));
}

// Loading Animation
function setupLoadingAnimation() {
    window.addEventListener('load', () => {
        document.body.classList.add('loading');
        setTimeout(() => document.body.classList.remove('loading'), 100);
    });
}

// Scroll Indicator
function setupScrollIndicator() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.width = scrollPercent + '%';
    });
}

// Mobile Menu
function setupMobileMenu() {
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-menu-toggle';
    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    const navActions = document.querySelector('.nav-actions');
    navActions.insertBefore(mobileToggle, navActions.firstChild);
    const navMenu = document.querySelector('.nav-menu');
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.querySelector('i').className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });
}

// Parallax Effects
function setupParallaxEffects() {
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.hero::before').forEach(element => {
            element.style.transform = `translateY(${window.scrollY * 0.5}px)`;
        });
    });
}

// Counter Animations
function setupCounterAnimations() {}

// Form Validation
function setupFormValidation() {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(form).entries());
            if (validateForm(data)) handleFormSubmission(data);
        });
    });
}

function validateForm(data) {
    let isValid = true;
    const errors = [];
    ['name', 'email', 'message'].forEach(field => {
        if (!data[field]?.trim()) { errors.push(`${field} is required`); isValid = false; }
    });
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { errors.push('Email is invalid'); isValid = false; }
    if (!isValid) showNotification(errors.join(', '), 'error');
    return isValid;
}

function handleFormSubmission(data) {
    showNotification('Sending message...', 'info');
    setTimeout(() => showNotification('Message sent successfully!', 'success'), 2000);
}

// Notification
function showNotification(message, type='info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerText = message;
    notification.style.cssText = `position:fixed;top:20px;right:20px;padding:1rem 2rem;border-radius:5px;color:white;z-index:10000;transform:translateX(400px);transition:0.3s ease;max-width:300px;`;
    notification.style.background = type === 'error' ? '#e74c3c' : type === 'success' ? '#00b894' : type === 'warning' ? '#f39c12' : '#3498db';
    document.body.appendChild(notification);
    setTimeout(() => notification.style.transform='translateX(0)', 100);
    setTimeout(() => { notification.style.transform='translateX(400px)'; setTimeout(() => notification.remove(), 300); }, 5000);
}

// Carousel Initialization
function initCarousel() {
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel) return;
    let index = 0;
    setInterval(() => {
        index = (index + 1) % carousel.children.length;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 5000);
}

// Utility Functions
function logPerformance() {
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
    });
}
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') logPerformance();

// Export for global
window.SolarEnergizers = { showNotification, validateForm, updateActiveNavigation };
