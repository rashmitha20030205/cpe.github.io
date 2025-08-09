// Solar Energizers Website Configuration

const SiteConfig = {
    // Company Information
    company: {
        name: "Solar Energizers Private Limited",
        tagline: "Powering Tomorrow with Clean Solar Energy Solutions",
        address: "Adugodi, Bengaluru, Karnataka",
        phone: "+91 98765 43210",
        email: "info@solarenergizers.com",
        website: "www.solarenergizers.com",
        established: "2010",
        experience: "14+",
        gstNumber: "GST123456789",
        registrationNumber: "REG123456789"
    },

    // Navigation Menu
    navigation: [
        { name: "Home", href: "#home", active: true },
        { name: "Products & Services", href: "#products", active: false },
        { name: "About Us", href: "#about", active: false },
        { name: "Contact Us", href: "#contact", active: false },
        { name: "Gallery", href: "#gallery", active: false },
        { name: "Testimonials", href: "#testimonials", active: false }
    ],

    // Products/Services
    products: [
        {
            id: 1,
            name: "Solar PV Panel",
            description: "High-efficiency photovoltaic panels designed to maximize energy generation with superior durability and performance.",
            image: "solar-pv-panel.jpg",
            category: "Solar Panels",
            features: [
                "High efficiency monocrystalline cells",
                "25-year warranty",
                "Weather resistant",
                "Easy installation"
            ],
            specifications: {
                power: "300W - 500W",
                efficiency: "20-22%",
                warranty: "25 years",
                certification: "IEC 61215, IEC 61730"
            }
        },
        {
            id: 2,
            name: "Solar Water Heater System",
            description: "Advanced heat pump hybrid systems providing efficient water heating solutions for residential and commercial use.",
            image: "solar-water-heater.jpg",
            category: "Water Heating",
            features: [
                "Hybrid heat pump technology",
                "Energy efficient",
                "Automatic temperature control",
                "Corrosion resistant tank"
            ],
            specifications: {
                capacity: "100L - 500L",
                efficiency: "85-90%",
                warranty: "5 years",
                material: "Stainless steel tank"
            }
        },
        {
            id: 3,
            name: "Solar Street Lighting System",
            description: "Intelligent solar-powered street lights with automatic controls and long-lasting LED technology.",
            image: "solar-street-light.jpg",
            category: "Street Lighting",
            features: [
                "Automatic dusk to dawn operation",
                "Motion sensor technology",
                "Long-lasting LED lights",
                "Remote monitoring capability"
            ],
            specifications: {
                power: "30W - 120W LED",
                battery: "LiFePO4",
                autonomy: "3-5 days",
                warranty: "3 years"
            }
        },
        {
            id: 4,
            name: "Pressurized Solar Water Heating",
            description: "High-pressure solar water heating systems with advanced thermal collectors for maximum efficiency.",
            image: "pressurized-water-heater.jpg",
            category: "Water Heating",
            features: [
                "High-pressure operation",
                "Advanced thermal collectors",
                "Integrated backup heating",
                "Smart temperature control"
            ],
            specifications: {
                capacity: "200L - 1000L",
                pressure: "6-8 bar",
                efficiency: "90-95%",
                warranty: "7 years"
            }
        }
    ],

    // Statistics
    statistics: [
        {
            number: "500",
            label: "Projects Completed",
            suffix: "+",
            icon: "fas fa-project-diagram"
        },
        {
            number: "14",
            label: "Years Experience",
            suffix: "+",
            icon: "fas fa-calendar-alt"
        },
        {
            number: "100",
            label: "Customer Satisfaction",
            suffix: "%",
            icon: "fas fa-smile"
        },
        {
            number: "24",
            label: "Support Available",
            suffix: "/7",
            icon: "fas fa-headset"
        }
    ],

    // Testimonials
    testimonials: [
        {
            id: 1,
            name: "Rajesh Kumar",
            designation: "Homeowner",
            location: "Bengaluru",
            rating: 5,
            comment: "Excellent service and quality products. Our electricity bill has reduced by 80% after installing solar panels.",
            image: "testimonial-1.jpg"
        },
        {
            id: 2,
            name: "Priya Sharma",
            designation: "Business Owner",
            location: "Mysore",
            rating: 5,
            comment: "Professional installation and great after-sales service. Highly recommend Solar Energizers for commercial solar solutions.",
            image: "testimonial-2.jpg"
        },
        {
            id: 3,
            name: "Arjun Reddy",
            designation: "Factory Owner",
            location: "Hubli",
            rating: 5,
            comment: "Implemented solar solution for our entire factory. Amazing results and quick ROI. Very satisfied with the service.",
            image: "testimonial-3.jpg"
        }
    ],

    // Services
    services: [
        {
            id: 1,
            name: "Solar Panel Installation",
            description: "Complete solar panel installation service for residential and commercial properties.",
            icon: "fas fa-solar-panel"
        },
        {
            id: 2,
            name: "System Maintenance",
            description: "Regular maintenance and cleaning services to ensure optimal performance.",
            icon: "fas fa-tools"
        },
        {
            id: 3,
            name: "Energy Consultation",
            description: "Expert consultation to help you choose the right solar solution for your needs.",
            icon: "fas fa-lightbulb"
        },
        {
            id: 4,
            name: "Financing Options",
            description: "Flexible financing and EMI options to make solar energy accessible to everyone.",
            icon: "fas fa-credit-card"
        }
    ],

    // Gallery Categories
    gallery: {
        categories: [
            "All",
            "Residential",
            "Commercial",
            "Industrial",
            "Street Lighting"
        ],
        images: [
            {
                id: 1,
                src: "gallery-1.jpg",
                alt: "Residential Solar Installation",
                category: "Residential",
                title: "Rooftop Solar System - 5KW"
            },
            {
                id: 2,
                src: "gallery-2.jpg",
                alt: "Commercial Solar Installation",
                category: "Commercial",
                title: "Office Building Solar - 50KW"
            },
            {
                id: 3,
                src: "gallery-3.jpg",
                alt: "Industrial Solar Installation",
                category: "Industrial",
                title: "Factory Solar System - 200KW"
            },
            {
                id: 4,
                src: "gallery-4.jpg",
                alt: "Solar Street Lighting",
                category: "Street Lighting",
                title: "LED Street Light Installation"
            }
        ]
    },

    // Social Media Links
    socialMedia: {
        facebook: "https://facebook.com/solarenergizers",
        twitter: "https://twitter.com/solarenergizers",
        instagram: "https://instagram.com/solarenergizers",
        linkedin: "https://linkedin.com/company/solarenergizers",
        youtube: "https://youtube.com/solarenergizers"
    },

    // Contact Information
    contact: {
        addresses: [
            {
                type: "Head Office",
                address: "123 Solar Street, Adugodi, Bengaluru, Karnataka 560030",
                phone: "+91 98765 43210",
                email: "info@solarenergizers.com"
            },
            {
                type: "Branch Office",
                address: "456 Green Avenue, Mysore, Karnataka 570001",
                phone: "+91 98765 43211",
                email: "mysore@solarenergizers.com"
            }
        ],
        workingHours: {
            weekdays: "9:00 AM - 6:00 PM",
            saturday: "9:00 AM - 5:00 PM",
            sunday: "Closed"
        }
    },

    // SEO Settings
    seo: {
        title: "Solar Energizers - Leading Solar Energy Solutions in Karnataka",
        description: "Solar Energizers Private Limited provides high-quality solar panels, water heaters, and street lighting solutions in Bengaluru, Karnataka. 14+ years of experience in solar energy.",
        keywords: "solar panels, solar water heater, solar street lights, solar energy, renewable energy, Bengaluru, Karnataka",
        author: "Solar Energizers Private Limited",
        ogImage: "og-image.jpg"
    },

    // Website Settings
    website: {
        theme: "light", // light or dark
        primaryColor: "#1e3c72",
        secondaryColor: "#ff6b35",
        accentColor: "#00b894",
        animationDuration: 300,
        lazyLoading: true,
        enableAnalytics: true,
        enableChatbot: true
    },

    // API Endpoints (for future use)
    api: {
        baseUrl: "https://api.solarenergizers.com",
        endpoints: {
            contact: "/contact",
            quote: "/quote",
            products: "/products",
            gallery: "/gallery",
            testimonials: "/testimonials"
        }
    },

    // Form Settings
    forms: {
        contact: {
            fields: [
                { name: "name", type: "text", required: true, placeholder: "Your Name" },
                { name: "email", type: "email", required: true, placeholder: "Your Email" },
                { name: "phone", type: "tel", required: true, placeholder: "Your Phone" },
                { name: "subject", type: "text", required: false, placeholder: "Subject" },
                { name: "message", type: "textarea", required: true, placeholder: "Your Message" }
            ],
            submitText: "Send Message",
            successMessage: "Thank you for your message. We will get back to you soon!",
            errorMessage: "Sorry, there was an error sending your message. Please try again."
        },
        quote: {
            fields: [
                { name: "name", type: "text", required: true, placeholder: "Your Name" },
                { name: "email", type: "email", required: true, placeholder: "Your Email" },
                { name: "phone", type: "tel", required: true, placeholder: "Your Phone" },
                { name: "property_type", type: "select", required: true, options: ["Residential", "Commercial", "Industrial"] },
                { name: "roof_area", type: "number", required: true, placeholder: "Roof Area (sq ft)" },
                { name: "monthly_bill", type: "number", required: true, placeholder: "Monthly Electricity Bill" },
                { name: "requirements", type: "textarea", required: false, placeholder: "Additional Requirements" }
            ],
            submitText: "Get Quote",
            successMessage: "Thank you! We will prepare a customized quote for you.",
            errorMessage: "Sorry, there was an error processing your request. Please try again."
        }
    },

    // Animation Settings
    animations: {
        duration: {
            fast: 200,
            normal: 300,
            slow: 500
        },
        easing: {
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out"
        }
    },

    // Feature Flags
    features: {
        enableDarkMode: true,
        enableMultiLanguage: false,
        enableLiveChat: true,
        enableBookingSystem: false,
        enableBlog: true,
        enableEcommerce: false
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SiteConfig;
} else {
    window.SiteConfig = SiteConfig;
}