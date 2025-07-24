// App.js - Simple JavaScript for Redes en La Plata Projects

document.addEventListener('DOMContentLoaded', function() {
    console.log('Redes en La Plata - Projects loaded successfully');
    
    // Add click tracking for analytics (optional)
    const projectLinks = document.querySelectorAll('.project-link');
    const projectLogoLinks = document.querySelectorAll('.project-logo-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = this.querySelector('span').textContent;
            const linkUrl = this.href;
            const projectTitle = this.closest('.project-card').querySelector('.project-title').textContent;
            
            // Log click for analytics (you can replace this with your analytics service)
            console.log(`Project link clicked: ${projectTitle} - ${linkText} -> ${linkUrl}`);
            
            // Optional: Add loading state
            this.classList.add('loading');
            
            // Remove loading state after a short delay
            setTimeout(() => {
                this.classList.remove('loading');
            }, 1000);
        });
    });
    
    projectLogoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const projectTitle = this.closest('.project-card').querySelector('.project-title').textContent;
            const linkUrl = this.href;
            
            // Log click for analytics
            console.log(`Project website clicked: ${projectTitle} -> ${linkUrl}`);
            
            // Optional: Add loading state
            this.classList.add('loading');
            
            // Remove loading state after a short delay
            setTimeout(() => {
                this.classList.remove('loading');
            }, 1000);
        });
    });
    
    // Add smooth scroll behavior for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        const projectLinks = document.querySelectorAll('.project-link');
        const currentIndex = Array.from(projectLinks).findIndex(link => link === document.activeElement);
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (currentIndex < projectLinks.length - 1) {
                    projectLinks[currentIndex + 1].focus();
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (currentIndex > 0) {
                    projectLinks[currentIndex - 1].focus();
                }
                break;
            case 'Enter':
            case ' ':
                if (document.activeElement.classList.contains('project-link')) {
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

// Utility function to update project links dynamically (if needed)
function updateProjectLink(projectIndex, linkIndex, newUrl, newText, newIcon) {
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards[projectIndex]) {
        const projectCard = projectCards[projectIndex];
        const projectLinks = projectCard.querySelectorAll('.project-link');
        if (projectLinks[linkIndex]) {
            const link = projectLinks[linkIndex];
            link.href = newUrl;
            link.querySelector('span').textContent = newText;
            link.querySelector('i').className = newIcon;
        }
    }
}

// Utility function to add a new project
function addProject(title, description, links) {
    const projectsContainer = document.querySelector('.projects-container');
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    let linksHTML = '';
    links.forEach(link => {
        linksHTML += `
            <a href="${link.url}" class="project-link" target="_blank" rel="noopener noreferrer">
                <i class="${link.icon}"></i>
                <span>${link.text}</span>
            </a>
        `;
    });
    
    projectCard.innerHTML = `
        <div class="project-header">
            <h3 class="project-title">${title}</h3>
            <p class="project-description">${description}</p>
        </div>
        <div class="project-links">
            ${linksHTML}
        </div>
    `;
    
    projectsContainer.appendChild(projectCard);
}

// Export for potential external use
window.RedesApp = {
    updateProjectLink: updateProjectLink,
    addProject: addProject
}; 