/**
 * Script pour les animations et la progression par étapes du formulaire d'inscription
 */
document.addEventListener('DOMContentLoaded', () => {
  // Éléments du formulaire
  const registerCard = document.querySelector('.register-card');
  const formElements = document.querySelectorAll('.form-control');
  const formSteps = document.querySelectorAll('.registration-step');
  const progressSteps = document.querySelectorAll('.progress-step');
  const progressBar = document.querySelector('.progress-bar-fill');
  const nextButtons = document.querySelectorAll('.btn-next');
  const prevButtons = document.querySelectorAll('.btn-prev');
  
  let currentStep = 0;
  const totalSteps = formSteps.length;
  
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
  if (registerCard) {
    registerCard.addEventListener('mousemove', (e) => {
      const rect = registerCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 60;
      const rotateY = (centerX - x) / 60;
      
      registerCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    });
    
    registerCard.addEventListener('mouseleave', () => {
      registerCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  }
  
  // Initialiser l'affichage des étapes et de la progression
  function updateFormSteps() {
    // Mettre à jour les étapes du formulaire
    formSteps.forEach((step, index) => {
      step.classList.remove('active');
      if (index === currentStep) {
        step.classList.add('active');
      }
    });
    
    // Mettre à jour les indicateurs d'étape
    progressSteps.forEach((step, index) => {
      step.classList.remove('active', 'completed');
      
      if (index < currentStep) {
        step.classList.add('completed');
      } else if (index === currentStep) {
        step.classList.add('active');
      }
    });
    
    // Mettre à jour la barre de progression
    if (progressBar) {
      const progressPercentage = (currentStep / (totalSteps - 1)) * 100;
      progressBar.style.width = `${progressPercentage}%`;
    }
  }
  
  // Passer à l'étape suivante
  function nextStep() {
    // Vérifier que tous les champs requis de l'étape actuelle sont remplis
    const currentInputs = formSteps[currentStep].querySelectorAll('input[required], select[required], textarea[required]');
    const allValid = Array.from(currentInputs).every(input => input.checkValidity());
    
    if (!allValid) {
      // Afficher les erreurs de validation
      currentInputs.forEach(input => {
        if (!input.checkValidity()) {
          input.classList.add('shake-error');
          setTimeout(() => {
            input.classList.remove('shake-error');
          }, 600);
        }
      });
      return;
    }
    
    if (currentStep < totalSteps - 1) {
      currentStep++;
      updateFormSteps();
      
      // Animation de transition
      formSteps[currentStep].style.opacity = '0';
      formSteps[currentStep].style.transform = 'translateX(20px)';
      
      setTimeout(() => {
        formSteps[currentStep].style.transition = 'all 0.4s ease';
        formSteps[currentStep].style.opacity = '1';
        formSteps[currentStep].style.transform = 'translateX(0)';
      }, 50);
    }
  }
  
  // Revenir à l'étape précédente
  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
      updateFormSteps();
      
      // Animation de transition
      formSteps[currentStep].style.opacity = '0';
      formSteps[currentStep].style.transform = 'translateX(-20px)';
      
      setTimeout(() => {
        formSteps[currentStep].style.transition = 'all 0.4s ease';
        formSteps[currentStep].style.opacity = '1';
        formSteps[currentStep].style.transform = 'translateX(0)';
      }, 50);
    }
  }
  
  // Ajouter les écouteurs d'événements aux boutons
  nextButtons.forEach(button => {
    button.addEventListener('click', nextStep);
    
    // Ajouter un effet d'ondulation au clic
    button.addEventListener('click', (e) => {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  });
  
  prevButtons.forEach(button => {
    button.addEventListener('click', prevStep);
  });
  
  // Gérer la force du mot de passe
  const passwordInput = document.querySelector('input[type="password"]');
  const strengthMeter = document.querySelector('.strength-meter-fill');
  const strengthTexts = document.querySelectorAll('.strength-text span');
  
  if (passwordInput && strengthMeter) {
    passwordInput.addEventListener('input', () => {
      const value = passwordInput.value;
      let strength = 0;
      
      // Critères de force du mot de passe
      if (value.length >= 8) strength += 1;
      if (/[A-Z]/.test(value)) strength += 1;
      if (/[0-9]/.test(value)) strength += 1;
      if (/[^A-Za-z0-9]/.test(value)) strength += 1;
      
      // Mettre à jour l'affichage de la force
      strengthMeter.classList.remove('weak', 'medium', 'strong');
      strengthTexts.forEach(text => text.classList.remove('active', 'weak', 'medium', 'strong'));
      
      if (value.length === 0) {
        strengthMeter.style.width = '0';
      } else if (strength <= 2) {
        strengthMeter.classList.add('weak');
        strengthMeter.style.width = '33%';
        strengthTexts[0].classList.add('active', 'weak');
      } else if (strength === 3) {
        strengthMeter.classList.add('medium');
        strengthMeter.style.width = '66%';
        strengthTexts[1].classList.add('active', 'medium');
      } else {
        strengthMeter.classList.add('strong');
        strengthMeter.style.width = '100%';
        strengthTexts[2].classList.add('active', 'strong');
      }
    });
  }
  
  // Afficher/masquer le mot de passe
  const togglePasswordBtn = document.getElementById('toggle-password');
  
  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      
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
  
  // Initialiser l'affichage des étapes
  updateFormSteps();
});
