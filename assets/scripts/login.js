/**
 * Script pour les animations et interactions du formulaire de connexion
 */
document.addEventListener('DOMContentLoaded', () => {
  // Éléments du formulaire
  const formElements = document.querySelectorAll('.form-control');
  const loginForm = document.querySelector('.login-form');
  const loginCard = document.querySelector('.login-card');
  const passwordField = document.querySelector('input[type="password"]');
  const togglePasswordBtn = document.getElementById('toggle-password');
  
  // Animation au chargement des éléments du formulaire
  formElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      element.style.transition = 'all 0.5s ease';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100 + (index * 100));
  });
  
  // Animation au survol de la carte
  if (loginCard) {
    loginCard.addEventListener('mousemove', (e) => {
      const rect = loginCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 50;
      const rotateY = (centerX - x) / 50;
      
      loginCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    });
    
    loginCard.addEventListener('mouseleave', () => {
      loginCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  }
  
  // Gestion de la soumission du formulaire
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      const button = loginForm.querySelector('button[type="submit"]');
      
      // Ajouter une classe pour l'animation
      button.classList.add('submitting');
      
      // Ajouter un effet d'ondulation au clic
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      button.appendChild(ripple);
      
      // Supprimer l'élément d'ondulation après l'animation
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  }
  
  // Fonction pour afficher/masquer le mot de passe
  if (togglePasswordBtn && passwordField) {
    togglePasswordBtn.addEventListener('click', () => {
      const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordField.setAttribute('type', type);
      
      // Changement de l'icône
      if (type === 'password') {
        togglePasswordBtn.innerHTML = '<i class="bi bi-eye"></i>';
      } else {
        togglePasswordBtn.innerHTML = '<i class="bi bi-eye-slash"></i>';
      }
      
      // Animation de l'icône
      togglePasswordBtn.classList.add('pulse');
      setTimeout(() => {
        togglePasswordBtn.classList.remove('pulse');
      }, 300);
    });
  }
  
  // Ajouter une animation d'erreur personnalisée pour les champs invalides
  const addInputErrorAnimation = (input) => {
    input.addEventListener('invalid', (e) => {
      e.preventDefault();
      input.classList.add('shake-error');
      setTimeout(() => {
        input.classList.remove('shake-error');
      }, 600);
    });
  };
  
  formElements.forEach(input => {
    addInputErrorAnimation(input);
  });
});
