// Import des scripts spécifiques
console.log('Script call.js chargé');

// Import de tous les scripts
import './navbar.js';
import './planning.js';
import './home.js';
import './login.js';
import './register.js';
import './vacancier_password.js';

// S'assurer que la navbar est initialisée même si DOMContentLoaded est déjà passé
window.addEventListener('load', function() {
    console.log('S\'assurer que la navbar est initialisée via call.js');
    if (typeof window.initNavbar === 'function') {
        window.initNavbar();
    }
});
