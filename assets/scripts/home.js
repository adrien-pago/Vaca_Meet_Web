// Home page JavaScript and styles

// Animation pour la page d'accueil
document.addEventListener('DOMContentLoaded', function() {
    // Animer les éléments du hero
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCta = document.querySelector('.hero-cta');
    
    if (heroTitle) {
        heroTitle.classList.add('animate-fade-in');
    }
    
    if (heroSubtitle) {
        heroSubtitle.classList.add('animate-fade-in');
        heroSubtitle.style.animationDelay = '200ms';
    }
    
    if (heroCta) {
        heroCta.classList.add('animate-fade-in');
        heroCta.style.animationDelay = '400ms';
    }
    
    // Animer les features au scroll
    const featureCards = document.querySelectorAll('.feature-card');
    
    if (featureCards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slide-up');
                    entry.target.style.animationDelay = `${index * 100}ms`;
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        featureCards.forEach(card => {
            observer.observe(card);
        });
    }
    
    // Effet parallax sur le hero
    const heroSection = document.querySelector('.hero-section');
    const heroPattern = document.querySelector('.hero-pattern');
    
    if (heroSection && heroPattern) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset;
            const parallaxOffset = scrollTop * 0.4;
            
            heroPattern.style.transform = `translateY(${parallaxOffset}px)`;
        });
    }
});
