// Script pour la gestion du mot de passe vacancier

document.addEventListener('DOMContentLoaded', function() {
    // Référence aux éléments du DOM
    const passwordInput = document.getElementById('password');
    const generateBtn = document.getElementById('generate-password');
    const copyBtn = document.getElementById('copy-password');
    const meterBar = document.querySelector('.meter-bar');
    const strengthText = document.querySelector('.strength-text');
    
    // Fonction pour générer un mot de passe aléatoire
    function generatePassword() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        const length = 10; // Longueur de mot de passe par défaut
        let password = '';
        
        // Animation de génération
        let counter = 0;
        const interval = setInterval(() => {
            let tempPassword = '';
            for (let i = 0; i < length; i++) {
                tempPassword += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            passwordInput.value = tempPassword;
            counter++;
            
            if (counter > 10) {
                clearInterval(interval);
                // Mot de passe final
                for (let i = 0; i < length; i++) {
                    password += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                passwordInput.value = password;
                checkPasswordStrength(password);
                
                // Animation de succès
                passwordInput.classList.add('is-valid');
                setTimeout(() => {
                    passwordInput.classList.remove('is-valid');
                }, 1500);
            }
        }, 50);
    }
    
    // Fonction pour vérifier la force du mot de passe
    function checkPasswordStrength(password) {
        // Pas de mot de passe
        if (!password) {
            meterBar.style.width = '0%';
            meterBar.style.background = '#f0f0f0';
            strengthText.textContent = 'Force du mot de passe';
            return;
        }
        
        // Critères de force
        const length = password.length;
        const hasLower = /[a-z]/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecial = /[!@#$%^&*]/.test(password);
        
        // Calcul du score
        let score = 0;
        if (length >= 6) score += 1;
        if (length >= 8) score += 1;
        if (length >= 10) score += 1;
        if (hasLower) score += 1;
        if (hasUpper) score += 1;
        if (hasNumber) score += 1;
        if (hasSpecial) score += 1;
        
        // Pourcentage et couleur
        const percent = (score / 7) * 100;
        let color, strength;
        
        if (percent <= 25) {
            color = '#ff4e50';
            strength = 'Très faible';
        } else if (percent <= 50) {
            color = '#ff9500';
            strength = 'Faible';
        } else if (percent <= 75) {
            color = '#f9d423';
            strength = 'Moyen';
        } else {
            color = '#4CAF50';
            strength = 'Fort';
        }
        
        // Mise à jour de l'interface
        meterBar.style.width = `${percent}%`;
        meterBar.style.background = color;
        strengthText.textContent = strength;
    }
    
    // Fonction pour copier le mot de passe
    function copyPassword() {
        const passwordValue = document.getElementById('password-value');
        if (!passwordValue) return;
        
        // Crée un élément de texte temporaire
        const tempInput = document.createElement('input');
        tempInput.value = passwordValue.textContent;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        // Retour visuel
        const originalTooltip = copyBtn.getAttribute('data-tooltip');
        copyBtn.setAttribute('data-tooltip', 'Copié !');
        copyBtn.classList.add('text-success');
        
        setTimeout(() => {
            copyBtn.setAttribute('data-tooltip', originalTooltip);
            copyBtn.classList.remove('text-success');
        }, 1500);
    }
    
    // Ajout des écouteurs d'événements
    if (generateBtn) {
        generateBtn.addEventListener('click', generatePassword);
    }
    
    if (copyBtn) {
        copyBtn.addEventListener('click', copyPassword);
    }
    
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            checkPasswordStrength(this.value);
        });
    }
    
    // Animations au chargement de la page
    const animatedElements = document.querySelectorAll('.animate-in, .animate-fade-in, .animate-slide-in');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
    });
    
    // Application des animations après un court délai
    setTimeout(() => {
        animatedElements.forEach(element => {
            element.style.visibility = 'visible';
        });
    }, 100);
}); 