// App.js - Simple JavaScript for Redes en La Plata Projects

document.addEventListener('DOMContentLoaded', function() {
    console.log('Redes en La Plata - Projects loaded successfully');
    
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