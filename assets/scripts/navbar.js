// Fonctionnalités JavaScript pour la barre de navigation

document.addEventListener('DOMContentLoaded', function() {
    // Référence aux éléments de la navbar
    const navbar = document.querySelector('.navbar-container');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbarMenuOverlay = document.querySelector('.navbar-menu-overlay');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Gestion du scroll pour la navbar
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Gestion du toggle pour le menu
    if (navbarToggle && navbarMenu && navbarMenuOverlay) {
        navbarToggle.addEventListener('click', function() {
            navbarToggle.classList.toggle('active');
            navbarMenu.classList.toggle('active');
            navbarMenuOverlay.classList.toggle('active');
            
            // Animer les éléments du menu
            if (navbarMenu.classList.contains('active')) {
                navItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, 100 + (index * 50));
                });
                
                // Bloquer le scroll quand le menu est ouvert
                document.body.style.overflow = 'hidden';
            } else {
                navItems.forEach(item => {
                    item.classList.remove('animate');
                });
                
                document.body.style.overflow = '';
            }
        });
        
        // Fermer le menu lors d'un clic sur l'overlay
        navbarMenuOverlay.addEventListener('click', function() {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            navbarMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
            
            navItems.forEach(item => {
                item.classList.remove('animate');
            });
        });
        
        // Fermer le menu lors d'un clic sur un lien
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarToggle.classList.remove('active');
                navbarMenu.classList.remove('active');
                navbarMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Mettre à jour le lien actif en fonction de la page
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });
});
