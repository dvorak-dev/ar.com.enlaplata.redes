// App.js - Simple JavaScript for Redes en La Plata Projects

// Theme management
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        console.log('Theme toggle element:', this.themeToggle); // Debug
        this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
    }

    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    getStoredTheme() {
        return localStorage.getItem('theme');
    }

    setStoredTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    applyTheme(theme) {
        console.log('Applying theme:', theme); // Debug
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        this.setStoredTheme(theme);
        
        // Update button accessibility
        if (this.themeToggle) {
            this.themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
            this.themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        console.log('Toggling theme from', this.currentTheme, 'to', newTheme); // Debug
        this.applyTheme(newTheme);
    }

    setupEventListeners() {
        // Theme toggle button
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                console.log('Theme toggle clicked!'); // Debug
                this.toggleTheme();
            });

            // Keyboard navigation for theme toggle
            this.themeToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    console.log('Theme toggle keyboard activated!'); // Debug
                    this.toggleTheme();
                }
            });
        } else {
            console.error('Theme toggle button not found!');
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!this.getStoredTheme()) {
                // Only auto-switch if user hasn't manually set a preference
                this.applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Redes en La Plata - Projects loaded successfully');
    
    // Simple test for theme toggle
    const testButton = document.getElementById('themeToggle');
    console.log('Test button found:', testButton);
    
    if (testButton) {
        testButton.addEventListener('click', function() {
            console.log('Button clicked!');
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            console.log('Switching from', currentTheme, 'to', newTheme);
            html.setAttribute('data-theme', newTheme);
        });
    }
    
    // Initialize theme manager
    const themeManager = new ThemeManager();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add click tracking for analytics
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const projectCard = this.closest('.project-card');
            const projectTitle = projectCard.querySelector('.project-title').textContent;
            const linkTitle = this.getAttribute('title');
            const linkUrl = this.href;
            
            // Log click for analytics
            console.log(`Project link clicked: ${projectTitle} - ${linkTitle} -> ${linkUrl}`);
            
            // Add loading state
            this.classList.add('loading');
            
            // Remove loading state after a short delay
            setTimeout(() => {
                this.classList.remove('loading');
            }, 1000);
        });
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        const socialLinks = document.querySelectorAll('.social-link');
        const currentIndex = Array.from(socialLinks).findIndex(link => link === document.activeElement);
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (currentIndex < socialLinks.length - 1) {
                    socialLinks[currentIndex + 1].focus();
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (currentIndex > 0) {
                    socialLinks[currentIndex - 1].focus();
                }
                break;
            case 'Enter':
            case ' ':
                if (document.activeElement.classList.contains('social-link')) {
                    e.preventDefault();
                    document.activeElement.click();
                }
                break;
        }
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
    });
    
    // Add service worker registration for PWA capabilities (optional)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('./sw.js')
                .then(function(registration) {
                    console.log('ServiceWorker registration successful');
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed');
                });
        });
    }
}); 