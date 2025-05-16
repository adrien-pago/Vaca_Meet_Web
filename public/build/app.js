(self["webpackChunkvaca_meet_web"] = self["webpackChunkvaca_meet_web"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_Commun_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/Commun.css */ "./assets/styles/Commun.css");
/* harmony import */ var _styles_Navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Navbar.css */ "./assets/styles/Navbar.css");
/* harmony import */ var _styles_Compte_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Compte.css */ "./assets/styles/Compte.css");
/* harmony import */ var _styles_Home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Home.css */ "./assets/styles/Home.css");
/* harmony import */ var _styles_Planning_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Planning.css */ "./assets/styles/Planning.css");
/* harmony import */ var _styles_Login_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Login.css */ "./assets/styles/Login.css");
/* harmony import */ var _styles_Register_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Register.css */ "./assets/styles/Register.css");
/* harmony import */ var _styles_Vacancier_password_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Vacancier_password.scss */ "./assets/styles/Vacancier_password.scss");
/* harmony import */ var _scripts_call_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/call.js */ "./assets/scripts/call.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// Imports styles









// Imports scripts call.js qui appel tout les autres scripts


/***/ }),

/***/ "./assets/scripts/call.js":
/*!********************************!*\
  !*** ./assets/scripts/call.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ "./assets/scripts/navbar.js");
/* harmony import */ var _planning_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planning.js */ "./assets/scripts/planning.js");
/* harmony import */ var _planning_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_planning_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./assets/scripts/home.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.js */ "./assets/scripts/login.js");
/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_login_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _register_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.js */ "./assets/scripts/register.js");
/* harmony import */ var _register_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_register_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vacancier_password_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vacancier_password.js */ "./assets/scripts/vacancier_password.js");
/* harmony import */ var _vacancier_password_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vacancier_password_js__WEBPACK_IMPORTED_MODULE_5__);
// Import des scripts spécifiques
console.log('Script call.js chargé');

// Import de tous les scripts







// S'assurer que la navbar est initialisée même si DOMContentLoaded est déjà passé
window.addEventListener('load', function () {
  console.log('S\'assurer que la navbar est initialisée via call.js');
  if (typeof window.initNavbar === 'function') {
    window.initNavbar();
  }
});

/***/ }),

/***/ "./assets/scripts/home.js":
/*!********************************!*\
  !*** ./assets/scripts/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
// Home page JavaScript and styles

// Animation pour la page d'accueil
document.addEventListener('DOMContentLoaded', function () {
  // Animer les éléments du hero
  var heroTitle = document.querySelector('.hero-title');
  var heroSubtitle = document.querySelector('.hero-subtitle');
  var heroCta = document.querySelector('.hero-cta');
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
  var featureCards = document.querySelectorAll('.feature-card');
  if (featureCards.length > 0) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, index) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.style.animationDelay = "".concat(index * 100, "ms");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    featureCards.forEach(function (card) {
      observer.observe(card);
    });
  }

  // Effet parallax sur le hero
  var heroSection = document.querySelector('.hero-section');
  var heroPattern = document.querySelector('.hero-pattern');
  if (heroSection && heroPattern) {
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset;
      var parallaxOffset = scrollTop * 0.4;
      heroPattern.style.transform = "translateY(".concat(parallaxOffset, "px)");
    });
  }
});

/***/ }),

/***/ "./assets/scripts/login.js":
/*!*********************************!*\
  !*** ./assets/scripts/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/**
 * Script pour les animations et interactions du formulaire de connexion
 */
document.addEventListener('DOMContentLoaded', function () {
  // Éléments du formulaire
  var formElements = document.querySelectorAll('.form-control');
  var loginForm = document.querySelector('.login-form');
  var loginCard = document.querySelector('.login-card');
  var passwordField = document.querySelector('input[type="password"]');
  var togglePasswordBtn = document.getElementById('toggle-password');

  // Animation au chargement des éléments du formulaire
  formElements.forEach(function (element, index) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(10px)';
    setTimeout(function () {
      element.style.transition = 'all 0.5s ease';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100 + index * 100);
  });

  // Animation au survol de la carte
  if (loginCard) {
    loginCard.addEventListener('mousemove', function (e) {
      var rect = loginCard.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var rotateX = (y - centerY) / 50;
      var rotateY = (centerX - x) / 50;
      loginCard.style.transform = "perspective(1000px) rotateX(".concat(rotateX, "deg) rotateY(").concat(rotateY, "deg) scale3d(1.01, 1.01, 1.01)");
    });
    loginCard.addEventListener('mouseleave', function () {
      loginCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  }

  // Gestion de la soumission du formulaire
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      var button = loginForm.querySelector('button[type="submit"]');

      // Ajouter une classe pour l'animation
      button.classList.add('submitting');

      // Ajouter un effet d'ondulation au clic
      var ripple = document.createElement('span');
      ripple.classList.add('ripple');
      button.appendChild(ripple);

      // Supprimer l'élément d'ondulation après l'animation
      setTimeout(function () {
        ripple.remove();
      }, 1000);
    });
  }

  // Fonction pour afficher/masquer le mot de passe
  if (togglePasswordBtn && passwordField) {
    togglePasswordBtn.addEventListener('click', function () {
      var type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordField.setAttribute('type', type);

      // Changement de l'icône
      if (type === 'password') {
        togglePasswordBtn.innerHTML = '<i class="bi bi-eye"></i>';
      } else {
        togglePasswordBtn.innerHTML = '<i class="bi bi-eye-slash"></i>';
      }

      // Animation de l'icône
      togglePasswordBtn.classList.add('pulse');
      setTimeout(function () {
        togglePasswordBtn.classList.remove('pulse');
      }, 300);
    });
  }

  // Ajouter une animation d'erreur personnalisée pour les champs invalides
  var addInputErrorAnimation = function addInputErrorAnimation(input) {
    input.addEventListener('invalid', function (e) {
      e.preventDefault();
      input.classList.add('shake-error');
      setTimeout(function () {
        input.classList.remove('shake-error');
      }, 600);
    });
  };
  formElements.forEach(function (input) {
    addInputErrorAnimation(input);
  });
});

/***/ }),

/***/ "./assets/scripts/navbar.js":
/*!**********************************!*\
  !*** ./assets/scripts/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);






// Fonctionnalités JavaScript pour la barre de navigation
console.log('Script navbar.js chargé');

// Fonction pour initialiser la navbar
function initNavbar() {
  console.log('Fonction initNavbar appelée');

  // Référence aux éléments de la navbar
  var navbar = document.querySelector('.navbar-container');
  var navbarToggle = document.querySelector('.navbar-toggle');
  var navbarMenu = document.querySelector('.navbar-menu');
  var navbarMenuOverlay = document.querySelector('.navbar-menu-overlay');
  var navItems = document.querySelectorAll('.nav-item');
  console.log('Éléments navbar:', {
    navbar: !!navbar,
    navbarToggle: !!navbarToggle,
    navbarMenu: !!navbarMenu,
    navbarMenuOverlay: !!navbarMenuOverlay,
    navItemsCount: navItems.length
  });

  // Gestion du scroll pour la navbar
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Gestion du toggle pour le menu
  if (navbarToggle && navbarMenu && navbarMenuOverlay) {
    console.log('Ajout des écouteurs d\'événements pour le menu burger');
    navbarToggle.addEventListener('click', function () {
      console.log('Click sur le menu burger');
      navbarToggle.classList.toggle('active');
      navbarMenu.classList.toggle('active');
      navbarMenuOverlay.classList.toggle('active');

      // Animer les éléments du menu
      if (navbarMenu.classList.contains('active')) {
        navItems.forEach(function (item, index) {
          setTimeout(function () {
            item.classList.add('animate');
          }, 100 + index * 50);
        });

        // Bloquer le scroll quand le menu est ouvert
        document.body.style.overflow = 'hidden';
      } else {
        navItems.forEach(function (item) {
          item.classList.remove('animate');
        });
        document.body.style.overflow = '';
      }
    });

    // Fermer le menu lors d'un clic sur l'overlay
    navbarMenuOverlay.addEventListener('click', function () {
      console.log('Click sur l\'overlay');
      navbarToggle.classList.remove('active');
      navbarMenu.classList.remove('active');
      navbarMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
      navItems.forEach(function (item) {
        item.classList.remove('animate');
      });
    });

    // Fermer le menu lors d'un clic sur un lien
    var _navLinks = document.querySelectorAll('.nav-link');
    _navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        console.log('Click sur un lien de navigation');
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
        navbarMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  } else {
    console.error('Éléments manquants pour le menu burger:', {
      navbarToggle: !!navbarToggle,
      navbarMenu: !!navbarMenu,
      navbarMenuOverlay: !!navbarMenuOverlay
    });
  }

  // Mettre à jour le lien actif en fonction de la page
  var currentLocation = window.location.href;
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    if (link.href === currentLocation) {
      link.classList.add('active');
    }
  });
}

// Exécuter au chargement du DOM
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM chargé dans navbar.js - exécution automatique');
  initNavbar();
});

// Exposer la fonction au niveau global pour pouvoir l'appeler depuis d'autres scripts
window.initNavbar = initNavbar;

// Exporter la fonction pour une utilisation avec les modules ES6
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initNavbar);

/***/ }),

/***/ "./assets/scripts/planning.js":
/*!************************************!*\
  !*** ./assets/scripts/planning.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
document.addEventListener('DOMContentLoaded', function () {
  // Gestion du formulaire d'activité
  var activitySelect = document.getElementById('activitySelect');
  var newActivityFields = document.getElementById('newActivityFields');
  if (activitySelect) {
    activitySelect.addEventListener('change', function () {
      if (this.value === 'new') {
        newActivityFields.style.display = 'block';
      } else {
        newActivityFields.style.display = 'none';
      }
    });
  }

  // Gestion du formulaire de catégorie
  var categorySelect = document.getElementById('categorySelect');
  var newCategoryFields = document.getElementById('newCategoryFields');
  if (categorySelect) {
    categorySelect.addEventListener('change', function () {
      if (this.value === 'new') {
        newCategoryFields.style.display = 'block';
      } else {
        newCategoryFields.style.display = 'none';
      }
    });
  }

  // Gestion des options de récurrence
  var isRecurring = document.getElementById('isRecurring');
  var recurringOptions = document.getElementById('recurringOptions');
  if (isRecurring) {
    isRecurring.addEventListener('change', function () {
      if (this.checked) {
        recurringOptions.style.display = 'block';
      } else {
        recurringOptions.style.display = 'none';
      }
    });
  }

  // Gestion de la soumission du formulaire via AJAX
  var saveButton = document.getElementById('saveActivity');
  var successMessage = document.getElementById('successMessage');
  var errorMessage = document.getElementById('errorMessage');
  if (saveButton) {
    saveButton.addEventListener('click', function () {
      // Collecter toutes les données du formulaire
      var formData = {
        activity_id: activitySelect.value !== 'new' ? activitySelect.value : null,
        activity_name: activitySelect.value === 'new' ? document.getElementById('activityName').value : activitySelect.options[activitySelect.selectedIndex].text,
        description: document.getElementById('activityDescription') ? document.getElementById('activityDescription').value : null,
        category_id: categorySelect.value !== 'new' ? categorySelect.value : null,
        category_name: categorySelect.value === 'new' ? document.getElementById('categoryName').value : null,
        category_color: categorySelect.value === 'new' ? document.getElementById('categoryColor').value : categorySelect.options[categorySelect.selectedIndex].dataset.color,
        date: document.getElementById('activityDate').value,
        start_time: document.getElementById('startTime').value,
        end_time: document.getElementById('endTime').value,
        is_recurring: isRecurring.checked,
        recurring_days: isRecurring.checked ? Array.from(document.querySelectorAll('input[id^="recurDay"]:checked')).map(function (el) {
          return el.value;
        }) : []
      };

      // Valider les données
      if (formData.activity_id === null && !formData.activity_name || formData.category_id === null && !formData.category_name) {
        errorMessage.textContent = "Veuillez remplir tous les champs obligatoires.";
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return;
      }

      // Récupérer l'URL depuis un attribut data sur le formulaire
      var url = document.getElementById('addActivityForm').dataset.url;

      // Envoyer les données via AJAX
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.getElementById('addActivityForm').dataset.token
        },
        body: JSON.stringify(formData)
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.success) {
          // Afficher un message de succès
          successMessage.textContent = data.message;
          successMessage.style.display = 'block';
          errorMessage.style.display = 'none';

          // Fermer la modal après 1,5 secondes
          setTimeout(function () {
            var modal = bootstrap.Modal.getInstance(document.getElementById('addActivityModal'));
            modal.hide();

            // Recharger la page pour afficher les nouvelles activités
            window.location.reload();
          }, 1500);
        } else {
          // Afficher un message d'erreur
          errorMessage.textContent = data.message || "Une erreur est survenue.";
          errorMessage.style.display = 'block';
          successMessage.style.display = 'none';
        }
      })["catch"](function (error) {
        // Afficher un message d'erreur en cas d'échec de la requête
        console.error('Erreur:', error);
        errorMessage.textContent = "Une erreur de connexion est survenue.";
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
      });
    });
  }

  // Gestion de la modification d'une activité
  // Récupérer tous les boutons de modification
  var editButtons = document.querySelectorAll('.edit-activity-btn');
  var editActivityModal = document.getElementById('editActivityModal');
  var editSuccessMessage = document.getElementById('editSuccessMessage');
  var editErrorMessage = document.getElementById('editErrorMessage');
  var saveEditButton = document.getElementById('saveEditActivity');
  var editCategorySelect = document.getElementById('editCategorySelect');
  var editNewCategoryFields = document.getElementById('editNewCategoryFields');
  var editActivitySelect = document.getElementById('editActivitySelect');

  // Gestion du formulaire de catégorie dans la modal d'édition
  if (editCategorySelect) {
    editCategorySelect.addEventListener('change', function () {
      if (this.value === 'new') {
        editNewCategoryFields.style.display = 'block';
      } else {
        editNewCategoryFields.style.display = 'none';
      }
    });
  }

  // Gestion du formulaire d'activité dans la modal d'édition
  if (editActivitySelect) {
    editActivitySelect.addEventListener('change', function () {
      if (this.value === 'new') {
        document.getElementById('editActivityFields').style.display = 'block';
      } else {
        document.getElementById('editActivityFields').style.display = 'none';

        // Si une activité existante est sélectionnée
        if (this.value !== 'new' && this.selectedIndex > 0) {
          var selectedOption = this.options[this.selectedIndex];
          var activityId = selectedOption.value;

          // Trouver le bouton d'édition correspondant pour récupérer toutes les données
          var editButton = document.querySelector(".edit-activity-btn[data-activity-id=\"".concat(activityId, "\"]"));
          if (editButton) {
            // Remplir le formulaire avec les données de l'activité sélectionnée
            document.getElementById('editActivityId').value = activityId;
            document.getElementById('editActivityName').value = editButton.dataset.activityName;
            document.getElementById('editActivityDescription').value = editButton.dataset.activityDescription || '';
            document.getElementById('editCategorySelect').value = editButton.dataset.activityCategory;
            document.getElementById('editActivityDate').value = editButton.dataset.activityDate;
            document.getElementById('editStartTime').value = editButton.dataset.activityStart;
            document.getElementById('editEndTime').value = editButton.dataset.activityEnd;
          }
        }
      }
    });
  }

  // Ajouter un gestionnaire d'événements pour ouvrir la modal d'édition
  if (editButtons.length > 0) {
    editButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Récupérer les données de l'activité depuis les attributs data
        var activityId = this.dataset.activityId;
        var activityName = this.dataset.activityName;
        var activityDescription = this.dataset.activityDescription || '';
        var categoryId = this.dataset.activityCategory;
        var activityDate = this.dataset.activityDate;
        var startTime = this.dataset.activityStart;
        var endTime = this.dataset.activityEnd;

        // Remplir le formulaire d'édition
        document.getElementById('editActivityId').value = activityId;
        document.getElementById('editActivityName').value = activityName;
        document.getElementById('editActivityDescription').value = activityDescription;
        document.getElementById('editCategorySelect').value = categoryId;
        document.getElementById('editActivityDate').value = activityDate;
        document.getElementById('editStartTime').value = startTime;
        document.getElementById('editEndTime').value = endTime;

        // Réinitialiser l'affichage des champs supplémentaires
        if (editNewCategoryFields) editNewCategoryFields.style.display = 'none';
        document.getElementById('editActivityFields').style.display = 'none';

        // Réinitialiser les messages
        editSuccessMessage.style.display = 'none';
        editErrorMessage.style.display = 'none';

        // Préselectionner l'activité dans la liste déroulante
        if (editActivitySelect) {
          for (var i = 0; i < editActivitySelect.options.length; i++) {
            if (editActivitySelect.options[i].value === activityId) {
              editActivitySelect.selectedIndex = i;
              break;
            }
          }
        }

        // Ouvrir la modal
        var editModal = new bootstrap.Modal(editActivityModal);
        editModal.show();

        // Fermer la modal de gestion pour éviter la superposition
        var manageModal = bootstrap.Modal.getInstance(document.getElementById('manageActivitiesModal'));
        if (manageModal) manageModal.hide();
      });
    });
  }

  // Ajouter un gestionnaire d'événements pour le bouton de sauvegarde
  if (saveEditButton) {
    saveEditButton.addEventListener('click', function () {
      // Collecter les données du formulaire
      var formData = {
        activity_id: document.getElementById('editActivityId').value
      };

      // Vérifier si on utilise une activité existante ou si on en crée une nouvelle
      if (editActivitySelect.value === 'new') {
        formData.activity_name = document.getElementById('editActivityName').value;
        formData.description = document.getElementById('editActivityDescription').value;
      } else {
        // Utiliser le nom de l'activité existante
        formData.activity_name = editActivitySelect.options[editActivitySelect.selectedIndex].text;
        // Conserver la description existante
        formData.description = document.getElementById('editActivityDescription').value;
      }

      // Gérer la catégorie (existante ou nouvelle)
      var categorySelect = document.getElementById('editCategorySelect');
      if (categorySelect.value === 'new') {
        formData.category_id = 'new';
        formData.category_name = document.getElementById('editCategoryName').value;
        formData.category_color = document.getElementById('editCategoryColor').value;
      } else {
        formData.category_id = categorySelect.value;
      }

      // Ajouter la date et les heures
      formData.date = document.getElementById('editActivityDate').value;
      formData.start_time = document.getElementById('editStartTime').value;
      formData.end_time = document.getElementById('editEndTime').value;

      // Validation basique
      if (editActivitySelect.value === 'new' && !formData.activity_name || formData.category_id === 'new' && !formData.category_name || !formData.category_id || !formData.date || !formData.start_time || !formData.end_time) {
        editErrorMessage.textContent = "Veuillez remplir tous les champs obligatoires.";
        editErrorMessage.style.display = 'block';
        editSuccessMessage.style.display = 'none';
        return;
      }

      // Récupérer l'URL
      var url = document.getElementById('editActivityForm').dataset.url;

      // Envoyer la requête
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.success) {
          // Afficher un message de succès
          editSuccessMessage.textContent = data.message;
          editSuccessMessage.style.display = 'block';
          editErrorMessage.style.display = 'none';

          // Fermer la modal après 1,5 secondes
          setTimeout(function () {
            var modal = bootstrap.Modal.getInstance(editActivityModal);
            modal.hide();

            // Recharger la page pour afficher les modifications
            window.location.reload();
          }, 1500);
        } else {
          // Afficher un message d'erreur
          editErrorMessage.textContent = data.message || "Une erreur est survenue.";
          editErrorMessage.style.display = 'block';
          editSuccessMessage.style.display = 'none';
        }
      })["catch"](function (error) {
        console.error('Erreur:', error);
        editErrorMessage.textContent = "Une erreur de connexion est survenue.";
        editErrorMessage.style.display = 'block';
        editSuccessMessage.style.display = 'none';
      });
    });
  }

  // Gestion de la suppression d'une activité
  var deleteButtons = document.querySelectorAll('.delete-activity-btn');
  var deleteConfirmModal = document.getElementById('deleteConfirmModal');
  var confirmDeleteButton = document.getElementById('confirmDeleteActivity');

  // Ajouter un gestionnaire d'événements pour ouvrir la modal de confirmation
  if (deleteButtons.length > 0) {
    deleteButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Récupérer l'ID et le nom de l'activité
        var activityId = this.dataset.activityId;
        var activityName = this.dataset.activityName;

        // Remplir la modal de confirmation
        document.getElementById('deleteActivityId').value = activityId;
        document.getElementById('deleteActivityName').textContent = activityName;

        // Ouvrir la modal
        var deleteModal = new bootstrap.Modal(deleteConfirmModal);
        deleteModal.show();

        // Fermer la modal de gestion pour éviter la superposition
        var manageModal = bootstrap.Modal.getInstance(document.getElementById('manageActivitiesModal'));
        if (manageModal) manageModal.hide();
      });
    });
  }

  // Ajouter un gestionnaire d'événements pour le bouton de confirmation
  if (confirmDeleteButton) {
    confirmDeleteButton.addEventListener('click', function () {
      var activityId = document.getElementById('deleteActivityId').value;

      // Construire l'URL de suppression
      var url = "/planning/delete-activity/".concat(activityId);

      // Envoyer la requête
      fetch(url, {
        method: 'DELETE'
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.success) {
          // Fermer la modal
          var modal = bootstrap.Modal.getInstance(deleteConfirmModal);
          modal.hide();

          // Recharger la page pour mettre à jour l'affichage
          window.location.reload();
        } else {
          // Afficher une alerte en cas d'erreur
          alert(data.message || "Une erreur est survenue lors de la suppression.");
        }
      })["catch"](function (error) {
        console.error('Erreur:', error);
        alert("Une erreur de connexion est survenue.");
      });
    });
  }
});

/***/ }),

/***/ "./assets/scripts/register.js":
/*!************************************!*\
  !*** ./assets/scripts/register.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.every.js */ "./node_modules/core-js/modules/es.array.every.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.every.js */ "./node_modules/core-js/modules/esnext.iterator.every.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/**
 * Script pour les animations et la progression par étapes du formulaire d'inscription
 */
document.addEventListener('DOMContentLoaded', function () {
  // Éléments du formulaire
  var registerCard = document.querySelector('.register-card');
  var formElements = document.querySelectorAll('.form-control');
  var formSteps = document.querySelectorAll('.registration-step');
  var progressSteps = document.querySelectorAll('.progress-step');
  var progressBar = document.querySelector('.progress-bar-fill');
  var nextButtons = document.querySelectorAll('.btn-next');
  var prevButtons = document.querySelectorAll('.btn-prev');
  var currentStep = 0;
  var totalSteps = formSteps.length;

  // Animation au chargement des éléments du formulaire
  formElements.forEach(function (element, index) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(10px)';
    setTimeout(function () {
      element.style.transition = 'all 0.5s ease';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100 + index * 100);
  });

  // Animation au survol de la carte
  if (registerCard) {
    registerCard.addEventListener('mousemove', function (e) {
      var rect = registerCard.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var rotateX = (y - centerY) / 60;
      var rotateY = (centerX - x) / 60;
      registerCard.style.transform = "perspective(1000px) rotateX(".concat(rotateX, "deg) rotateY(").concat(rotateY, "deg) scale3d(1.01, 1.01, 1.01)");
    });
    registerCard.addEventListener('mouseleave', function () {
      registerCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  }

  // Initialiser l'affichage des étapes et de la progression
  function updateFormSteps() {
    // Mettre à jour les étapes du formulaire
    formSteps.forEach(function (step, index) {
      step.classList.remove('active');
      if (index === currentStep) {
        step.classList.add('active');
      }
    });

    // Mettre à jour les indicateurs d'étape
    progressSteps.forEach(function (step, index) {
      step.classList.remove('active', 'completed');
      if (index < currentStep) {
        step.classList.add('completed');
      } else if (index === currentStep) {
        step.classList.add('active');
      }
    });

    // Mettre à jour la barre de progression
    if (progressBar) {
      var progressPercentage = currentStep / (totalSteps - 1) * 100;
      progressBar.style.width = "".concat(progressPercentage, "%");
    }
  }

  // Passer à l'étape suivante
  function nextStep() {
    // Vérifier que tous les champs requis de l'étape actuelle sont remplis
    var currentInputs = formSteps[currentStep].querySelectorAll('input[required], select[required], textarea[required]');
    var allValid = Array.from(currentInputs).every(function (input) {
      return input.checkValidity();
    });
    if (!allValid) {
      // Afficher les erreurs de validation
      currentInputs.forEach(function (input) {
        if (!input.checkValidity()) {
          input.classList.add('shake-error');
          setTimeout(function () {
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
      setTimeout(function () {
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
      setTimeout(function () {
        formSteps[currentStep].style.transition = 'all 0.4s ease';
        formSteps[currentStep].style.opacity = '1';
        formSteps[currentStep].style.transform = 'translateX(0)';
      }, 50);
    }
  }

  // Ajouter les écouteurs d'événements aux boutons
  nextButtons.forEach(function (button) {
    button.addEventListener('click', nextStep);

    // Ajouter un effet d'ondulation au clic
    button.addEventListener('click', function (e) {
      var ripple = document.createElement('span');
      ripple.classList.add('ripple');
      button.appendChild(ripple);
      setTimeout(function () {
        ripple.remove();
      }, 1000);
    });
  });
  prevButtons.forEach(function (button) {
    button.addEventListener('click', prevStep);
  });

  // Gérer la force du mot de passe
  var passwordInput = document.querySelector('input[type="password"]');
  var strengthMeter = document.querySelector('.strength-meter-fill');
  var strengthTexts = document.querySelectorAll('.strength-text span');
  if (passwordInput && strengthMeter) {
    passwordInput.addEventListener('input', function () {
      var value = passwordInput.value;
      var strength = 0;

      // Critères de force du mot de passe
      if (value.length >= 8) strength += 1;
      if (/[A-Z]/.test(value)) strength += 1;
      if (/[0-9]/.test(value)) strength += 1;
      if (/[^A-Za-z0-9]/.test(value)) strength += 1;

      // Mettre à jour l'affichage de la force
      strengthMeter.classList.remove('weak', 'medium', 'strong');
      strengthTexts.forEach(function (text) {
        return text.classList.remove('active', 'weak', 'medium', 'strong');
      });
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
  var togglePasswordBtn = document.getElementById('toggle-password');
  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', function () {
      var type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);

      // Changement de l'icône
      if (type === 'password') {
        togglePasswordBtn.innerHTML = '<i class="bi bi-eye"></i>';
      } else {
        togglePasswordBtn.innerHTML = '<i class="bi bi-eye-slash"></i>';
      }

      // Animation de l'icône
      togglePasswordBtn.classList.add('pulse');
      setTimeout(function () {
        togglePasswordBtn.classList.remove('pulse');
      }, 300);
    });
  }

  // Initialiser l'affichage des étapes
  updateFormSteps();
});

/***/ }),

/***/ "./assets/scripts/vacancier_password.js":
/*!**********************************************!*\
  !*** ./assets/scripts/vacancier_password.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
// Script pour la gestion du mot de passe vacancier

document.addEventListener('DOMContentLoaded', function () {
  // Référence aux éléments du DOM
  var passwordInput = document.getElementById('password');
  var generateBtn = document.getElementById('generate-password');
  var copyBtn = document.getElementById('copy-password');
  var meterBar = document.querySelector('.meter-bar');
  var strengthText = document.querySelector('.strength-text');

  // Fonction pour générer un mot de passe aléatoire
  function generatePassword() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    var length = 10; // Longueur de mot de passe par défaut
    var password = '';

    // Animation de génération
    var counter = 0;
    var interval = setInterval(function () {
      var tempPassword = '';
      for (var i = 0; i < length; i++) {
        tempPassword += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      passwordInput.value = tempPassword;
      counter++;
      if (counter > 10) {
        clearInterval(interval);
        // Mot de passe final
        for (var _i = 0; _i < length; _i++) {
          password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        passwordInput.value = password;
        checkPasswordStrength(password);

        // Animation de succès
        passwordInput.classList.add('is-valid');
        setTimeout(function () {
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
    var length = password.length;
    var hasLower = /[a-z]/.test(password);
    var hasUpper = /[A-Z]/.test(password);
    var hasNumber = /[0-9]/.test(password);
    var hasSpecial = /[!@#$%^&*]/.test(password);

    // Calcul du score
    var score = 0;
    if (length >= 6) score += 1;
    if (length >= 8) score += 1;
    if (length >= 10) score += 1;
    if (hasLower) score += 1;
    if (hasUpper) score += 1;
    if (hasNumber) score += 1;
    if (hasSpecial) score += 1;

    // Pourcentage et couleur
    var percent = score / 7 * 100;
    var color, strength;
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
    meterBar.style.width = "".concat(percent, "%");
    meterBar.style.background = color;
    strengthText.textContent = strength;
  }

  // Fonction pour copier le mot de passe
  function copyPassword() {
    var passwordValue = document.getElementById('password-value');
    if (!passwordValue) return;

    // Crée un élément de texte temporaire
    var tempInput = document.createElement('input');
    tempInput.value = passwordValue.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Retour visuel
    var originalTooltip = copyBtn.getAttribute('data-tooltip');
    copyBtn.setAttribute('data-tooltip', 'Copié !');
    copyBtn.classList.add('text-success');
    setTimeout(function () {
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
    passwordInput.addEventListener('input', function () {
      checkPasswordStrength(this.value);
    });
  }

  // Animations au chargement de la page
  var animatedElements = document.querySelectorAll('.animate-in, .animate-fade-in, .animate-slide-in');
  animatedElements.forEach(function (element) {
    element.style.opacity = '0';
  });

  // Application des animations après un court délai
  setTimeout(function () {
    animatedElements.forEach(function (element) {
      element.style.visibility = 'visible';
    });
  }, 100);
});

/***/ }),

/***/ "./assets/styles/Commun.css":
/*!**********************************!*\
  !*** ./assets/styles/Commun.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Compte.css":
/*!**********************************!*\
  !*** ./assets/styles/Compte.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Home.css":
/*!********************************!*\
  !*** ./assets/styles/Home.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Login.css":
/*!*********************************!*\
  !*** ./assets/styles/Login.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Navbar.css":
/*!**********************************!*\
  !*** ./assets/styles/Navbar.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Planning.css":
/*!************************************!*\
  !*** ./assets/styles/Planning.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Register.css":
/*!************************************!*\
  !*** ./assets/styles/Register.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/Vacancier_password.scss":
/*!***********************************************!*\
  !*** ./assets/styles/Vacancier_password.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-023829"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dC13ZWIvLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovL3ZhY2EtbWVldC13ZWIvLi9hc3NldHMvc2NyaXB0cy9jYWxsLmpzIiwid2VicGFjazovL3ZhY2EtbWVldC13ZWIvLi9hc3NldHMvc2NyaXB0cy9ob21lLmpzIiwid2VicGFjazovL3ZhY2EtbWVldC13ZWIvLi9hc3NldHMvc2NyaXB0cy9sb2dpbi5qcyIsIndlYnBhY2s6Ly92YWNhLW1lZXQtd2ViLy4vYXNzZXRzL3NjcmlwdHMvbmF2YmFyLmpzIiwid2VicGFjazovL3ZhY2EtbWVldC13ZWIvLi9hc3NldHMvc2NyaXB0cy9wbGFubmluZy5qcyIsIndlYnBhY2s6Ly92YWNhLW1lZXQtd2ViLy4vYXNzZXRzL3NjcmlwdHMvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vdmFjYS1tZWV0LXdlYi8uL2Fzc2V0cy9zY3JpcHRzL3ZhY2FuY2llcl9wYXNzd29yZC5qcyIsIndlYnBhY2s6Ly92YWNhLW1lZXQtd2ViLy4vYXNzZXRzL3N0eWxlcy9Db21tdW4uY3NzPzQ5YjgiLCJ3ZWJwYWNrOi8vdmFjYS1tZWV0LXdlYi8uL2Fzc2V0cy9zdHlsZXMvQ29tcHRlLmNzcz82MTYwIiwid2VicGFjazovL3ZhY2EtbWVldC13ZWIvLi9hc3NldHMvc3R5bGVzL0hvbWUuY3NzPzU0NWYiLCJ3ZWJwYWNrOi8vdmFjYS1tZWV0LXdlYi8uL2Fzc2V0cy9zdHlsZXMvTG9naW4uY3NzPzNiZDMiLCJ3ZWJwYWNrOi8vdmFjYS1tZWV0LXdlYi8uL2Fzc2V0cy9zdHlsZXMvTmF2YmFyLmNzcz85NjE0Iiwid2VicGFjazovL3ZhY2EtbWVldC13ZWIvLi9hc3NldHMvc3R5bGVzL1BsYW5uaW5nLmNzcz82NDU4Iiwid2VicGFjazovL3ZhY2EtbWVldC13ZWIvLi9hc3NldHMvc3R5bGVzL1JlZ2lzdGVyLmNzcz9kMjQ0Iiwid2VicGFjazovL3ZhY2EtbWVldC13ZWIvLi9hc3NldHMvc3R5bGVzL1ZhY2FuY2llcl9wYXNzd29yZC5zY3NzPzc3NWUiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIEltcG9ydHMgc3R5bGVzXG5pbXBvcnQgJy4vc3R5bGVzL0NvbW11bi5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9OYXZiYXIuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvQ29tcHRlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL0hvbWUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvUGxhbm5pbmcuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvTG9naW4uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvUmVnaXN0ZXIuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvVmFjYW5jaWVyX3Bhc3N3b3JkLnNjc3MnO1xuXG4vLyBJbXBvcnRzIHNjcmlwdHMgY2FsbC5qcyBxdWkgYXBwZWwgdG91dCBsZXMgYXV0cmVzIHNjcmlwdHNcbmltcG9ydCAnLi9zY3JpcHRzL2NhbGwuanMnO1xuXG5cbiIsIi8vIEltcG9ydCBkZXMgc2NyaXB0cyBzcMOpY2lmaXF1ZXNcclxuY29uc29sZS5sb2coJ1NjcmlwdCBjYWxsLmpzIGNoYXJnw6knKTtcclxuXHJcbi8vIEltcG9ydCBkZSB0b3VzIGxlcyBzY3JpcHRzXHJcbmltcG9ydCAnLi9uYXZiYXIuanMnO1xyXG5pbXBvcnQgJy4vcGxhbm5pbmcuanMnO1xyXG5pbXBvcnQgJy4vaG9tZS5qcyc7XHJcbmltcG9ydCAnLi9sb2dpbi5qcyc7XHJcbmltcG9ydCAnLi9yZWdpc3Rlci5qcyc7XHJcbmltcG9ydCAnLi92YWNhbmNpZXJfcGFzc3dvcmQuanMnO1xyXG5cclxuLy8gUydhc3N1cmVyIHF1ZSBsYSBuYXZiYXIgZXN0IGluaXRpYWxpc8OpZSBtw6ptZSBzaSBET01Db250ZW50TG9hZGVkIGVzdCBkw6lqw6AgcGFzc8OpXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZygnU1xcJ2Fzc3VyZXIgcXVlIGxhIG5hdmJhciBlc3QgaW5pdGlhbGlzw6llIHZpYSBjYWxsLmpzJyk7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5pbml0TmF2YmFyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgd2luZG93LmluaXROYXZiYXIoKTtcclxuICAgIH1cclxufSk7XHJcbiIsIi8vIEhvbWUgcGFnZSBKYXZhU2NyaXB0IGFuZCBzdHlsZXNcclxuXHJcbi8vIEFuaW1hdGlvbiBwb3VyIGxhIHBhZ2UgZCdhY2N1ZWlsXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIC8vIEFuaW1lciBsZXMgw6lsw6ltZW50cyBkdSBoZXJvXHJcbiAgICBjb25zdCBoZXJvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby10aXRsZScpO1xyXG4gICAgY29uc3QgaGVyb1N1YnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tc3VidGl0bGUnKTtcclxuICAgIGNvbnN0IGhlcm9DdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1jdGEnKTtcclxuICAgIFxyXG4gICAgaWYgKGhlcm9UaXRsZSkge1xyXG4gICAgICAgIGhlcm9UaXRsZS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWZhZGUtaW4nKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGhlcm9TdWJ0aXRsZSkge1xyXG4gICAgICAgIGhlcm9TdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLWZhZGUtaW4nKTtcclxuICAgICAgICBoZXJvU3VidGl0bGUuc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSAnMjAwbXMnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoaGVyb0N0YSkge1xyXG4gICAgICAgIGhlcm9DdGEuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1mYWRlLWluJyk7XHJcbiAgICAgICAgaGVyb0N0YS5zdHlsZS5hbmltYXRpb25EZWxheSA9ICc0MDBtcyc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFuaW1lciBsZXMgZmVhdHVyZXMgYXUgc2Nyb2xsXHJcbiAgICBjb25zdCBmZWF0dXJlQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmVhdHVyZS1jYXJkJyk7XHJcbiAgICBcclxuICAgIGlmIChmZWF0dXJlQ2FyZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1zbGlkZS11cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5zdHlsZS5hbmltYXRpb25EZWxheSA9IGAke2luZGV4ICogMTAwfW1zYDtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZlYXR1cmVDYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhcmQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBFZmZldCBwYXJhbGxheCBzdXIgbGUgaGVyb1xyXG4gICAgY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1zZWN0aW9uJyk7XHJcbiAgICBjb25zdCBoZXJvUGF0dGVybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXBhdHRlcm4nKTtcclxuICAgIFxyXG4gICAgaWYgKGhlcm9TZWN0aW9uICYmIGhlcm9QYXR0ZXJuKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFsbGF4T2Zmc2V0ID0gc2Nyb2xsVG9wICogMC40O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaGVyb1BhdHRlcm4uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtwYXJhbGxheE9mZnNldH1weClgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIiwiLyoqXHJcbiAqIFNjcmlwdCBwb3VyIGxlcyBhbmltYXRpb25zIGV0IGludGVyYWN0aW9ucyBkdSBmb3JtdWxhaXJlIGRlIGNvbm5leGlvblxyXG4gKi9cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAvLyDDiWzDqW1lbnRzIGR1IGZvcm11bGFpcmVcclxuICBjb25zdCBmb3JtRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1jb250cm9sJyk7XHJcbiAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWZvcm0nKTtcclxuICBjb25zdCBsb2dpbkNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tY2FyZCcpO1xyXG4gIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcclxuICBjb25zdCB0b2dnbGVQYXNzd29yZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtcGFzc3dvcmQnKTtcclxuICBcclxuICAvLyBBbmltYXRpb24gYXUgY2hhcmdlbWVudCBkZXMgw6lsw6ltZW50cyBkdSBmb3JtdWxhaXJlXHJcbiAgZm9ybUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDEwcHgpJztcclxuICAgIFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMC41cyBlYXNlJztcclxuICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDApJztcclxuICAgIH0sIDEwMCArIChpbmRleCAqIDEwMCkpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIC8vIEFuaW1hdGlvbiBhdSBzdXJ2b2wgZGUgbGEgY2FydGVcclxuICBpZiAobG9naW5DYXJkKSB7XHJcbiAgICBsb2dpbkNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgY29uc3QgcmVjdCA9IGxvZ2luQ2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgY2VudGVyWCA9IHJlY3Qud2lkdGggLyAyO1xyXG4gICAgICBjb25zdCBjZW50ZXJZID0gcmVjdC5oZWlnaHQgLyAyO1xyXG4gICAgICBcclxuICAgICAgY29uc3Qgcm90YXRlWCA9ICh5IC0gY2VudGVyWSkgLyA1MDtcclxuICAgICAgY29uc3Qgcm90YXRlWSA9IChjZW50ZXJYIC0geCkgLyA1MDtcclxuICAgICAgXHJcbiAgICAgIGxvZ2luQ2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVYKCR7cm90YXRlWH1kZWcpIHJvdGF0ZVkoJHtyb3RhdGVZfWRlZykgc2NhbGUzZCgxLjAxLCAxLjAxLCAxLjAxKWA7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgbG9naW5DYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgIGxvZ2luQ2FyZC5zdHlsZS50cmFuc2Zvcm0gPSAncGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMCkgc2NhbGUzZCgxLCAxLCAxKSc7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gR2VzdGlvbiBkZSBsYSBzb3VtaXNzaW9uIGR1IGZvcm11bGFpcmVcclxuICBpZiAobG9naW5Gb3JtKSB7XHJcbiAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgY29uc3QgYnV0dG9uID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJyk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBBam91dGVyIHVuZSBjbGFzc2UgcG91ciBsJ2FuaW1hdGlvblxyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0dGluZycpO1xyXG4gICAgICBcclxuICAgICAgLy8gQWpvdXRlciB1biBlZmZldCBkJ29uZHVsYXRpb24gYXUgY2xpY1xyXG4gICAgICBjb25zdCByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKCdyaXBwbGUnKTtcclxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHJpcHBsZSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBTdXBwcmltZXIgbCfDqWzDqW1lbnQgZCdvbmR1bGF0aW9uIGFwcsOocyBsJ2FuaW1hdGlvblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByaXBwbGUucmVtb3ZlKCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEZvbmN0aW9uIHBvdXIgYWZmaWNoZXIvbWFzcXVlciBsZSBtb3QgZGUgcGFzc2VcclxuICBpZiAodG9nZ2xlUGFzc3dvcmRCdG4gJiYgcGFzc3dvcmRGaWVsZCkge1xyXG4gICAgdG9nZ2xlUGFzc3dvcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBwYXNzd29yZEZpZWxkLmdldEF0dHJpYnV0ZSgndHlwZScpID09PSAncGFzc3dvcmQnID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcclxuICAgICAgcGFzc3dvcmRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcclxuICAgICAgXHJcbiAgICAgIC8vIENoYW5nZW1lbnQgZGUgbCdpY8O0bmVcclxuICAgICAgaWYgKHR5cGUgPT09ICdwYXNzd29yZCcpIHtcclxuICAgICAgICB0b2dnbGVQYXNzd29yZEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJiaSBiaS1leWVcIj48L2k+JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2dnbGVQYXNzd29yZEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJiaSBiaS1leWUtc2xhc2hcIj48L2k+JztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gQW5pbWF0aW9uIGRlIGwnaWPDtG5lXHJcbiAgICAgIHRvZ2dsZVBhc3N3b3JkQnRuLmNsYXNzTGlzdC5hZGQoJ3B1bHNlJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRvZ2dsZVBhc3N3b3JkQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3B1bHNlJyk7XHJcbiAgICAgIH0sIDMwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gQWpvdXRlciB1bmUgYW5pbWF0aW9uIGQnZXJyZXVyIHBlcnNvbm5hbGlzw6llIHBvdXIgbGVzIGNoYW1wcyBpbnZhbGlkZXNcclxuICBjb25zdCBhZGRJbnB1dEVycm9yQW5pbWF0aW9uID0gKGlucHV0KSA9PiB7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnZhbGlkJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdzaGFrZS1lcnJvcicpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdzaGFrZS1lcnJvcicpO1xyXG4gICAgICB9LCA2MDApO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBcclxuICBmb3JtRWxlbWVudHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICBhZGRJbnB1dEVycm9yQW5pbWF0aW9uKGlucHV0KTtcclxuICB9KTtcclxufSk7XHJcbiIsIi8vIEZvbmN0aW9ubmFsaXTDqXMgSmF2YVNjcmlwdCBwb3VyIGxhIGJhcnJlIGRlIG5hdmlnYXRpb25cclxuY29uc29sZS5sb2coJ1NjcmlwdCBuYXZiYXIuanMgY2hhcmfDqScpO1xyXG5cclxuLy8gRm9uY3Rpb24gcG91ciBpbml0aWFsaXNlciBsYSBuYXZiYXJcclxuZnVuY3Rpb24gaW5pdE5hdmJhcigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdGb25jdGlvbiBpbml0TmF2YmFyIGFwcGVsw6llJyk7XHJcbiAgICBcclxuICAgIC8vIFLDqWbDqXJlbmNlIGF1eCDDqWzDqW1lbnRzIGRlIGxhIG5hdmJhclxyXG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1jb250YWluZXInKTtcclxuICAgIGNvbnN0IG5hdmJhclRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItdG9nZ2xlJyk7XHJcbiAgICBjb25zdCBuYXZiYXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1tZW51Jyk7XHJcbiAgICBjb25zdCBuYXZiYXJNZW51T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItbWVudS1vdmVybGF5Jyk7XHJcbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbScpO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygnw4lsw6ltZW50cyBuYXZiYXI6Jywge1xyXG4gICAgICAgIG5hdmJhcjogISFuYXZiYXIsXHJcbiAgICAgICAgbmF2YmFyVG9nZ2xlOiAhIW5hdmJhclRvZ2dsZSxcclxuICAgICAgICBuYXZiYXJNZW51OiAhIW5hdmJhck1lbnUsXHJcbiAgICAgICAgbmF2YmFyTWVudU92ZXJsYXk6ICEhbmF2YmFyTWVudU92ZXJsYXksXHJcbiAgICAgICAgbmF2SXRlbXNDb3VudDogbmF2SXRlbXMubGVuZ3RoXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy8gR2VzdGlvbiBkdSBzY3JvbGwgcG91ciBsYSBuYXZiYXJcclxuICAgIGlmIChuYXZiYXIpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDUwKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEdlc3Rpb24gZHUgdG9nZ2xlIHBvdXIgbGUgbWVudVxyXG4gICAgaWYgKG5hdmJhclRvZ2dsZSAmJiBuYXZiYXJNZW51ICYmIG5hdmJhck1lbnVPdmVybGF5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Fqb3V0IGRlcyDDqWNvdXRldXJzIGRcXCfDqXbDqW5lbWVudHMgcG91ciBsZSBtZW51IGJ1cmdlcicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG5hdmJhclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2xpY2sgc3VyIGxlIG1lbnUgYnVyZ2VyJyk7XHJcbiAgICAgICAgICAgIG5hdmJhclRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbmF2YmFyTWVudU92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBbmltZXIgbGVzIMOpbMOpbWVudHMgZHUgbWVudVxyXG4gICAgICAgICAgICBpZiAobmF2YmFyTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAgKyAoaW5kZXggKiA1MCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEJsb3F1ZXIgbGUgc2Nyb2xsIHF1YW5kIGxlIG1lbnUgZXN0IG91dmVydFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBGZXJtZXIgbGUgbWVudSBsb3JzIGQndW4gY2xpYyBzdXIgbCdvdmVybGF5XHJcbiAgICAgICAgbmF2YmFyTWVudU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWNrIHN1ciBsXFwnb3ZlcmxheScpO1xyXG4gICAgICAgICAgICBuYXZiYXJUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG5hdmJhck1lbnVPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuYXZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZlcm1lciBsZSBtZW51IGxvcnMgZCd1biBjbGljIHN1ciB1biBsaWVuXHJcbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpbmsnKTtcclxuICAgICAgICBuYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2xpY2sgc3VyIHVuIGxpZW4gZGUgbmF2aWdhdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIG5hdmJhck1lbnVPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignw4lsw6ltZW50cyBtYW5xdWFudHMgcG91ciBsZSBtZW51IGJ1cmdlcjonLCB7XHJcbiAgICAgICAgICAgIG5hdmJhclRvZ2dsZTogISFuYXZiYXJUb2dnbGUsXHJcbiAgICAgICAgICAgIG5hdmJhck1lbnU6ICEhbmF2YmFyTWVudSxcclxuICAgICAgICAgICAgbmF2YmFyTWVudU92ZXJsYXk6ICEhbmF2YmFyTWVudU92ZXJsYXlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gTWV0dHJlIMOgIGpvdXIgbGUgbGllbiBhY3RpZiBlbiBmb25jdGlvbiBkZSBsYSBwYWdlXHJcbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJyk7XHJcbiAgICBcclxuICAgIG5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgaWYgKGxpbmsuaHJlZiA9PT0gY3VycmVudExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIEV4w6ljdXRlciBhdSBjaGFyZ2VtZW50IGR1IERPTVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRE9NIGNoYXJnw6kgZGFucyBuYXZiYXIuanMgLSBleMOpY3V0aW9uIGF1dG9tYXRpcXVlJyk7XHJcbiAgICBpbml0TmF2YmFyKCk7XHJcbn0pO1xyXG5cclxuLy8gRXhwb3NlciBsYSBmb25jdGlvbiBhdSBuaXZlYXUgZ2xvYmFsIHBvdXIgcG91dm9pciBsJ2FwcGVsZXIgZGVwdWlzIGQnYXV0cmVzIHNjcmlwdHNcclxud2luZG93LmluaXROYXZiYXIgPSBpbml0TmF2YmFyO1xyXG5cclxuLy8gRXhwb3J0ZXIgbGEgZm9uY3Rpb24gcG91ciB1bmUgdXRpbGlzYXRpb24gYXZlYyBsZXMgbW9kdWxlcyBFUzZcclxuZXhwb3J0IGRlZmF1bHQgaW5pdE5hdmJhcjtcclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gR2VzdGlvbiBkdSBmb3JtdWxhaXJlIGQnYWN0aXZpdMOpXHJcbiAgICBjb25zdCBhY3Rpdml0eVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpdml0eVNlbGVjdCcpO1xyXG4gICAgY29uc3QgbmV3QWN0aXZpdHlGaWVsZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3QWN0aXZpdHlGaWVsZHMnKTtcclxuICAgIFxyXG4gICAgaWYgKGFjdGl2aXR5U2VsZWN0KSB7XHJcbiAgICAgICAgYWN0aXZpdHlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlID09PSAnbmV3Jykge1xyXG4gICAgICAgICAgICAgICAgbmV3QWN0aXZpdHlGaWVsZHMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdBY3Rpdml0eUZpZWxkcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEdlc3Rpb24gZHUgZm9ybXVsYWlyZSBkZSBjYXTDqWdvcmllXHJcbiAgICBjb25zdCBjYXRlZ29yeVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeVNlbGVjdCcpO1xyXG4gICAgY29uc3QgbmV3Q2F0ZWdvcnlGaWVsZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3Q2F0ZWdvcnlGaWVsZHMnKTtcclxuICAgIFxyXG4gICAgaWYgKGNhdGVnb3J5U2VsZWN0KSB7XHJcbiAgICAgICAgY2F0ZWdvcnlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlID09PSAnbmV3Jykge1xyXG4gICAgICAgICAgICAgICAgbmV3Q2F0ZWdvcnlGaWVsZHMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdDYXRlZ29yeUZpZWxkcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEdlc3Rpb24gZGVzIG9wdGlvbnMgZGUgcsOpY3VycmVuY2VcclxuICAgIGNvbnN0IGlzUmVjdXJyaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzUmVjdXJyaW5nJyk7XHJcbiAgICBjb25zdCByZWN1cnJpbmdPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY3VycmluZ09wdGlvbnMnKTtcclxuICAgIFxyXG4gICAgaWYgKGlzUmVjdXJyaW5nKSB7XHJcbiAgICAgICAgaXNSZWN1cnJpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHJlY3VycmluZ09wdGlvbnMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWN1cnJpbmdPcHRpb25zLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gR2VzdGlvbiBkZSBsYSBzb3VtaXNzaW9uIGR1IGZvcm11bGFpcmUgdmlhIEFKQVhcclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZUFjdGl2aXR5Jyk7XHJcbiAgICBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWNjZXNzTWVzc2FnZScpO1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yTWVzc2FnZScpO1xyXG4gICAgXHJcbiAgICBpZiAoc2F2ZUJ1dHRvbikge1xyXG4gICAgICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gQ29sbGVjdGVyIHRvdXRlcyBsZXMgZG9ubsOpZXMgZHUgZm9ybXVsYWlyZVxyXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGFjdGl2aXR5X2lkOiBhY3Rpdml0eVNlbGVjdC52YWx1ZSAhPT0gJ25ldycgPyBhY3Rpdml0eVNlbGVjdC52YWx1ZSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBhY3Rpdml0eV9uYW1lOiBhY3Rpdml0eVNlbGVjdC52YWx1ZSA9PT0gJ25ldycgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZpdHlOYW1lJykudmFsdWUgOiBhY3Rpdml0eVNlbGVjdC5vcHRpb25zW2FjdGl2aXR5U2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHQsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2aXR5RGVzY3JpcHRpb24nKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpdml0eURlc2NyaXB0aW9uJykudmFsdWUgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IGNhdGVnb3J5U2VsZWN0LnZhbHVlICE9PSAnbmV3JyA/IGNhdGVnb3J5U2VsZWN0LnZhbHVlIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5X25hbWU6IGNhdGVnb3J5U2VsZWN0LnZhbHVlID09PSAnbmV3JyA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeU5hbWUnKS52YWx1ZSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeV9jb2xvcjogY2F0ZWdvcnlTZWxlY3QudmFsdWUgPT09ICduZXcnID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5Q29sb3InKS52YWx1ZSA6IGNhdGVnb3J5U2VsZWN0Lm9wdGlvbnNbY2F0ZWdvcnlTZWxlY3Quc2VsZWN0ZWRJbmRleF0uZGF0YXNldC5jb2xvcixcclxuICAgICAgICAgICAgICAgIGRhdGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpdml0eURhdGUnKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0X3RpbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydFRpbWUnKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGVuZF90aW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5kVGltZScpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgaXNfcmVjdXJyaW5nOiBpc1JlY3VycmluZy5jaGVja2VkLFxyXG4gICAgICAgICAgICAgICAgcmVjdXJyaW5nX2RheXM6IGlzUmVjdXJyaW5nLmNoZWNrZWQgPyBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W2lkXj1cInJlY3VyRGF5XCJdOmNoZWNrZWQnKSkubWFwKGVsID0+IGVsLnZhbHVlKSA6IFtdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBWYWxpZGVyIGxlcyBkb25uw6llc1xyXG4gICAgICAgICAgICBpZiAoKGZvcm1EYXRhLmFjdGl2aXR5X2lkID09PSBudWxsICYmICFmb3JtRGF0YS5hY3Rpdml0eV9uYW1lKSB8fCBcclxuICAgICAgICAgICAgICAgIChmb3JtRGF0YS5jYXRlZ29yeV9pZCA9PT0gbnVsbCAmJiAhZm9ybURhdGEuY2F0ZWdvcnlfbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiVmV1aWxsZXogcmVtcGxpciB0b3VzIGxlcyBjaGFtcHMgb2JsaWdhdG9pcmVzLlwiO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUsOpY3Vww6lyZXIgbCdVUkwgZGVwdWlzIHVuIGF0dHJpYnV0IGRhdGEgc3VyIGxlIGZvcm11bGFpcmVcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEFjdGl2aXR5Rm9ybScpLmRhdGFzZXQudXJsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRW52b3llciBsZXMgZG9ubsOpZXMgdmlhIEFKQVhcclxuICAgICAgICAgICAgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdYLUNTUkYtVE9LRU4nOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkQWN0aXZpdHlGb3JtJykuZGF0YXNldC50b2tlblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFmZmljaGVyIHVuIG1lc3NhZ2UgZGUgc3VjY8Ooc1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlLnRleHRDb250ZW50ID0gZGF0YS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZlcm1lciBsYSBtb2RhbCBhcHLDqHMgMSw1IHNlY29uZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gYm9vdHN0cmFwLk1vZGFsLmdldEluc3RhbmNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRBY3Rpdml0eU1vZGFsJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWNoYXJnZXIgbGEgcGFnZSBwb3VyIGFmZmljaGVyIGxlcyBub3V2ZWxsZXMgYWN0aXZpdMOpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFmZmljaGVyIHVuIG1lc3NhZ2UgZCdlcnJldXJcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBkYXRhLm1lc3NhZ2UgfHwgXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZS5cIjtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIEFmZmljaGVyIHVuIG1lc3NhZ2UgZCdlcnJldXIgZW4gY2FzIGQnw6ljaGVjIGRlIGxhIHJlcXXDqnRlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXI6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJVbmUgZXJyZXVyIGRlIGNvbm5leGlvbiBlc3Qgc3VydmVudWUuXCI7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gR2VzdGlvbiBkZSBsYSBtb2RpZmljYXRpb24gZCd1bmUgYWN0aXZpdMOpXHJcbiAgICAvLyBSw6ljdXDDqXJlciB0b3VzIGxlcyBib3V0b25zIGRlIG1vZGlmaWNhdGlvblxyXG4gICAgY29uc3QgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1hY3Rpdml0eS1idG4nKTtcclxuICAgIGNvbnN0IGVkaXRBY3Rpdml0eU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRBY3Rpdml0eU1vZGFsJyk7XHJcbiAgICBjb25zdCBlZGl0U3VjY2Vzc01lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFN1Y2Nlc3NNZXNzYWdlJyk7XHJcbiAgICBjb25zdCBlZGl0RXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRFcnJvck1lc3NhZ2UnKTtcclxuICAgIGNvbnN0IHNhdmVFZGl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmVFZGl0QWN0aXZpdHknKTtcclxuICAgIGNvbnN0IGVkaXRDYXRlZ29yeVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0Q2F0ZWdvcnlTZWxlY3QnKTtcclxuICAgIGNvbnN0IGVkaXROZXdDYXRlZ29yeUZpZWxkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0TmV3Q2F0ZWdvcnlGaWVsZHMnKTtcclxuICAgIGNvbnN0IGVkaXRBY3Rpdml0eVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0QWN0aXZpdHlTZWxlY3QnKTtcclxuICAgIFxyXG4gICAgLy8gR2VzdGlvbiBkdSBmb3JtdWxhaXJlIGRlIGNhdMOpZ29yaWUgZGFucyBsYSBtb2RhbCBkJ8OpZGl0aW9uXHJcbiAgICBpZiAoZWRpdENhdGVnb3J5U2VsZWN0KSB7XHJcbiAgICAgICAgZWRpdENhdGVnb3J5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gJ25ldycpIHtcclxuICAgICAgICAgICAgICAgIGVkaXROZXdDYXRlZ29yeUZpZWxkcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVkaXROZXdDYXRlZ29yeUZpZWxkcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEdlc3Rpb24gZHUgZm9ybXVsYWlyZSBkJ2FjdGl2aXTDqSBkYW5zIGxhIG1vZGFsIGQnw6lkaXRpb25cclxuICAgIGlmIChlZGl0QWN0aXZpdHlTZWxlY3QpIHtcclxuICAgICAgICBlZGl0QWN0aXZpdHlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlID09PSAnbmV3Jykge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRBY3Rpdml0eUZpZWxkcycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRBY3Rpdml0eUZpZWxkcycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFNpIHVuZSBhY3Rpdml0w6kgZXhpc3RhbnRlIGVzdCBzw6lsZWN0aW9ubsOpZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09ICduZXcnICYmIHRoaXMuc2VsZWN0ZWRJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHRoaXMub3B0aW9uc1t0aGlzLnNlbGVjdGVkSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2aXR5SWQgPSBzZWxlY3RlZE9wdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBUcm91dmVyIGxlIGJvdXRvbiBkJ8OpZGl0aW9uIGNvcnJlc3BvbmRhbnQgcG91ciByw6ljdXDDqXJlciB0b3V0ZXMgbGVzIGRvbm7DqWVzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lZGl0LWFjdGl2aXR5LWJ0bltkYXRhLWFjdGl2aXR5LWlkPVwiJHthY3Rpdml0eUlkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlZGl0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbXBsaXIgbGUgZm9ybXVsYWlyZSBhdmVjIGxlcyBkb25uw6llcyBkZSBsJ2FjdGl2aXTDqSBzw6lsZWN0aW9ubsOpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdEFjdGl2aXR5SWQnKS52YWx1ZSA9IGFjdGl2aXR5SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0QWN0aXZpdHlOYW1lJykudmFsdWUgPSBlZGl0QnV0dG9uLmRhdGFzZXQuYWN0aXZpdHlOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdEFjdGl2aXR5RGVzY3JpcHRpb24nKS52YWx1ZSA9IGVkaXRCdXR0b24uZGF0YXNldC5hY3Rpdml0eURlc2NyaXB0aW9uIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdENhdGVnb3J5U2VsZWN0JykudmFsdWUgPSBlZGl0QnV0dG9uLmRhdGFzZXQuYWN0aXZpdHlDYXRlZ29yeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRBY3Rpdml0eURhdGUnKS52YWx1ZSA9IGVkaXRCdXR0b24uZGF0YXNldC5hY3Rpdml0eURhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0U3RhcnRUaW1lJykudmFsdWUgPSBlZGl0QnV0dG9uLmRhdGFzZXQuYWN0aXZpdHlTdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRFbmRUaW1lJykudmFsdWUgPSBlZGl0QnV0dG9uLmRhdGFzZXQuYWN0aXZpdHlFbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFqb3V0ZXIgdW4gZ2VzdGlvbm5haXJlIGQnw6l2w6luZW1lbnRzIHBvdXIgb3V2cmlyIGxhIG1vZGFsIGQnw6lkaXRpb25cclxuICAgIGlmIChlZGl0QnV0dG9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZWRpdEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8vIFLDqWN1cMOpcmVyIGxlcyBkb25uw6llcyBkZSBsJ2FjdGl2aXTDqSBkZXB1aXMgbGVzIGF0dHJpYnV0cyBkYXRhXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpdml0eUlkID0gdGhpcy5kYXRhc2V0LmFjdGl2aXR5SWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpdml0eU5hbWUgPSB0aGlzLmRhdGFzZXQuYWN0aXZpdHlOYW1lO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZpdHlEZXNjcmlwdGlvbiA9IHRoaXMuZGF0YXNldC5hY3Rpdml0eURlc2NyaXB0aW9uIHx8ICcnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IHRoaXMuZGF0YXNldC5hY3Rpdml0eUNhdGVnb3J5O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZpdHlEYXRlID0gdGhpcy5kYXRhc2V0LmFjdGl2aXR5RGF0ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHRoaXMuZGF0YXNldC5hY3Rpdml0eVN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kVGltZSA9IHRoaXMuZGF0YXNldC5hY3Rpdml0eUVuZDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gUmVtcGxpciBsZSBmb3JtdWxhaXJlIGQnw6lkaXRpb25cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0QWN0aXZpdHlJZCcpLnZhbHVlID0gYWN0aXZpdHlJZDtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0QWN0aXZpdHlOYW1lJykudmFsdWUgPSBhY3Rpdml0eU5hbWU7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdEFjdGl2aXR5RGVzY3JpcHRpb24nKS52YWx1ZSA9IGFjdGl2aXR5RGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdENhdGVnb3J5U2VsZWN0JykudmFsdWUgPSBjYXRlZ29yeUlkO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRBY3Rpdml0eURhdGUnKS52YWx1ZSA9IGFjdGl2aXR5RGF0ZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0U3RhcnRUaW1lJykudmFsdWUgPSBzdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdEVuZFRpbWUnKS52YWx1ZSA9IGVuZFRpbWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFLDqWluaXRpYWxpc2VyIGwnYWZmaWNoYWdlIGRlcyBjaGFtcHMgc3VwcGzDqW1lbnRhaXJlc1xyXG4gICAgICAgICAgICAgICAgaWYgKGVkaXROZXdDYXRlZ29yeUZpZWxkcykgZWRpdE5ld0NhdGVnb3J5RmllbGRzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdEFjdGl2aXR5RmllbGRzJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gUsOpaW5pdGlhbGlzZXIgbGVzIG1lc3NhZ2VzXHJcbiAgICAgICAgICAgICAgICBlZGl0U3VjY2Vzc01lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGVkaXRFcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gUHLDqXNlbGVjdGlvbm5lciBsJ2FjdGl2aXTDqSBkYW5zIGxhIGxpc3RlIGTDqXJvdWxhbnRlXHJcbiAgICAgICAgICAgICAgICBpZiAoZWRpdEFjdGl2aXR5U2VsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0QWN0aXZpdHlTZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWRpdEFjdGl2aXR5U2VsZWN0Lm9wdGlvbnNbaV0udmFsdWUgPT09IGFjdGl2aXR5SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRBY3Rpdml0eVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBPdXZyaXIgbGEgbW9kYWxcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRNb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoZWRpdEFjdGl2aXR5TW9kYWwpO1xyXG4gICAgICAgICAgICAgICAgZWRpdE1vZGFsLnNob3coKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRmVybWVyIGxhIG1vZGFsIGRlIGdlc3Rpb24gcG91ciDDqXZpdGVyIGxhIHN1cGVycG9zaXRpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hbmFnZU1vZGFsID0gYm9vdHN0cmFwLk1vZGFsLmdldEluc3RhbmNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5hZ2VBY3Rpdml0aWVzTW9kYWwnKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFuYWdlTW9kYWwpIG1hbmFnZU1vZGFsLmhpZGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFqb3V0ZXIgdW4gZ2VzdGlvbm5haXJlIGQnw6l2w6luZW1lbnRzIHBvdXIgbGUgYm91dG9uIGRlIHNhdXZlZ2FyZGVcclxuICAgIGlmIChzYXZlRWRpdEJ1dHRvbikge1xyXG4gICAgICAgIHNhdmVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIENvbGxlY3RlciBsZXMgZG9ubsOpZXMgZHUgZm9ybXVsYWlyZVxyXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGFjdGl2aXR5X2lkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdEFjdGl2aXR5SWQnKS52YWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVsOpcmlmaWVyIHNpIG9uIHV0aWxpc2UgdW5lIGFjdGl2aXTDqSBleGlzdGFudGUgb3Ugc2kgb24gZW4gY3LDqWUgdW5lIG5vdXZlbGxlXHJcbiAgICAgICAgICAgIGlmIChlZGl0QWN0aXZpdHlTZWxlY3QudmFsdWUgPT09ICduZXcnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hY3Rpdml0eV9uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRBY3Rpdml0eU5hbWUnKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRBY3Rpdml0eURlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVdGlsaXNlciBsZSBub20gZGUgbCdhY3Rpdml0w6kgZXhpc3RhbnRlXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hY3Rpdml0eV9uYW1lID0gZWRpdEFjdGl2aXR5U2VsZWN0Lm9wdGlvbnNbZWRpdEFjdGl2aXR5U2VsZWN0LnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICAgICAgICAgICAgICAvLyBDb25zZXJ2ZXIgbGEgZGVzY3JpcHRpb24gZXhpc3RhbnRlXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0QWN0aXZpdHlEZXNjcmlwdGlvbicpLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBHw6lyZXIgbGEgY2F0w6lnb3JpZSAoZXhpc3RhbnRlIG91IG5vdXZlbGxlKVxyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0Q2F0ZWdvcnlTZWxlY3QnKTtcclxuICAgICAgICAgICAgaWYgKGNhdGVnb3J5U2VsZWN0LnZhbHVlID09PSAnbmV3Jykge1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuY2F0ZWdvcnlfaWQgPSAnbmV3JztcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmNhdGVnb3J5X25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdENhdGVnb3J5TmFtZScpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuY2F0ZWdvcnlfY29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdENhdGVnb3J5Q29sb3InKS52YWx1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmNhdGVnb3J5X2lkID0gY2F0ZWdvcnlTZWxlY3QudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFqb3V0ZXIgbGEgZGF0ZSBldCBsZXMgaGV1cmVzXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdEFjdGl2aXR5RGF0ZScpLnZhbHVlO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5zdGFydF90aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRTdGFydFRpbWUnKS52YWx1ZTtcclxuICAgICAgICAgICAgZm9ybURhdGEuZW5kX3RpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdEVuZFRpbWUnKS52YWx1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFZhbGlkYXRpb24gYmFzaXF1ZVxyXG4gICAgICAgICAgICBpZiAoKGVkaXRBY3Rpdml0eVNlbGVjdC52YWx1ZSA9PT0gJ25ldycgJiYgIWZvcm1EYXRhLmFjdGl2aXR5X25hbWUpIHx8IFxyXG4gICAgICAgICAgICAgICAgKGZvcm1EYXRhLmNhdGVnb3J5X2lkID09PSAnbmV3JyAmJiAhZm9ybURhdGEuY2F0ZWdvcnlfbmFtZSkgfHxcclxuICAgICAgICAgICAgICAgICFmb3JtRGF0YS5jYXRlZ29yeV9pZCB8fCBcclxuICAgICAgICAgICAgICAgICFmb3JtRGF0YS5kYXRlIHx8IFxyXG4gICAgICAgICAgICAgICAgIWZvcm1EYXRhLnN0YXJ0X3RpbWUgfHwgXHJcbiAgICAgICAgICAgICAgICAhZm9ybURhdGEuZW5kX3RpbWUpIHtcclxuICAgICAgICAgICAgICAgIGVkaXRFcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlZldWlsbGV6IHJlbXBsaXIgdG91cyBsZXMgY2hhbXBzIG9ibGlnYXRvaXJlcy5cIjtcclxuICAgICAgICAgICAgICAgIGVkaXRFcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBlZGl0U3VjY2Vzc01lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUsOpY3Vww6lyZXIgbCdVUkxcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRBY3Rpdml0eUZvcm0nKS5kYXRhc2V0LnVybDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEVudm95ZXIgbGEgcmVxdcOqdGVcclxuICAgICAgICAgICAgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWZmaWNoZXIgdW4gbWVzc2FnZSBkZSBzdWNjw6hzXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFN1Y2Nlc3NNZXNzYWdlLnRleHRDb250ZW50ID0gZGF0YS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRTdWNjZXNzTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICBlZGl0RXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRmVybWVyIGxhIG1vZGFsIGFwcsOocyAxLDUgc2Vjb25kZXNcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBib290c3RyYXAuTW9kYWwuZ2V0SW5zdGFuY2UoZWRpdEFjdGl2aXR5TW9kYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWNoYXJnZXIgbGEgcGFnZSBwb3VyIGFmZmljaGVyIGxlcyBtb2RpZmljYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWZmaWNoZXIgdW4gbWVzc2FnZSBkJ2VycmV1clxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRFcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBkYXRhLm1lc3NhZ2UgfHwgXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZS5cIjtcclxuICAgICAgICAgICAgICAgICAgICBlZGl0RXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRTdWNjZXNzTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGVkaXRFcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlVuZSBlcnJldXIgZGUgY29ubmV4aW9uIGVzdCBzdXJ2ZW51ZS5cIjtcclxuICAgICAgICAgICAgICAgIGVkaXRFcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBlZGl0U3VjY2Vzc01lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEdlc3Rpb24gZGUgbGEgc3VwcHJlc3Npb24gZCd1bmUgYWN0aXZpdMOpXHJcbiAgICBjb25zdCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1hY3Rpdml0eS1idG4nKTtcclxuICAgIGNvbnN0IGRlbGV0ZUNvbmZpcm1Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVDb25maXJtTW9kYWwnKTtcclxuICAgIGNvbnN0IGNvbmZpcm1EZWxldGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybURlbGV0ZUFjdGl2aXR5Jyk7XHJcbiAgICBcclxuICAgIC8vIEFqb3V0ZXIgdW4gZ2VzdGlvbm5haXJlIGQnw6l2w6luZW1lbnRzIHBvdXIgb3V2cmlyIGxhIG1vZGFsIGRlIGNvbmZpcm1hdGlvblxyXG4gICAgaWYgKGRlbGV0ZUJ1dHRvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8vIFLDqWN1cMOpcmVyIGwnSUQgZXQgbGUgbm9tIGRlIGwnYWN0aXZpdMOpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpdml0eUlkID0gdGhpcy5kYXRhc2V0LmFjdGl2aXR5SWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpdml0eU5hbWUgPSB0aGlzLmRhdGFzZXQuYWN0aXZpdHlOYW1lO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBSZW1wbGlyIGxhIG1vZGFsIGRlIGNvbmZpcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZUFjdGl2aXR5SWQnKS52YWx1ZSA9IGFjdGl2aXR5SWQ7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlQWN0aXZpdHlOYW1lJykudGV4dENvbnRlbnQgPSBhY3Rpdml0eU5hbWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIE91dnJpciBsYSBtb2RhbFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlTW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGRlbGV0ZUNvbmZpcm1Nb2RhbCk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVNb2RhbC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEZlcm1lciBsYSBtb2RhbCBkZSBnZXN0aW9uIHBvdXIgw6l2aXRlciBsYSBzdXBlcnBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYW5hZ2VNb2RhbCA9IGJvb3RzdHJhcC5Nb2RhbC5nZXRJbnN0YW5jZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFuYWdlQWN0aXZpdGllc01vZGFsJykpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hbmFnZU1vZGFsKSBtYW5hZ2VNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBam91dGVyIHVuIGdlc3Rpb25uYWlyZSBkJ8OpdsOpbmVtZW50cyBwb3VyIGxlIGJvdXRvbiBkZSBjb25maXJtYXRpb25cclxuICAgIGlmIChjb25maXJtRGVsZXRlQnV0dG9uKSB7XHJcbiAgICAgICAgY29uZmlybURlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCBhY3Rpdml0eUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZUFjdGl2aXR5SWQnKS52YWx1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENvbnN0cnVpcmUgbCdVUkwgZGUgc3VwcHJlc3Npb25cclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYC9wbGFubmluZy9kZWxldGUtYWN0aXZpdHkvJHthY3Rpdml0eUlkfWA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBFbnZveWVyIGxhIHJlcXXDqnRlXHJcbiAgICAgICAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZlcm1lciBsYSBtb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gYm9vdHN0cmFwLk1vZGFsLmdldEluc3RhbmNlKGRlbGV0ZUNvbmZpcm1Nb2RhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlY2hhcmdlciBsYSBwYWdlIHBvdXIgbWV0dHJlIMOgIGpvdXIgbCdhZmZpY2hhZ2VcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFmZmljaGVyIHVuZSBhbGVydGUgZW4gY2FzIGQnZXJyZXVyXHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlIHx8IFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbi5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXI6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJVbmUgZXJyZXVyIGRlIGNvbm5leGlvbiBlc3Qgc3VydmVudWUuXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBTY3JpcHQgcG91ciBsZXMgYW5pbWF0aW9ucyBldCBsYSBwcm9ncmVzc2lvbiBwYXIgw6l0YXBlcyBkdSBmb3JtdWxhaXJlIGQnaW5zY3JpcHRpb25cclxuICovXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgLy8gw4lsw6ltZW50cyBkdSBmb3JtdWxhaXJlXHJcbiAgY29uc3QgcmVnaXN0ZXJDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLWNhcmQnKTtcclxuICBjb25zdCBmb3JtRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1jb250cm9sJyk7XHJcbiAgY29uc3QgZm9ybVN0ZXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lzdHJhdGlvbi1zdGVwJyk7XHJcbiAgY29uc3QgcHJvZ3Jlc3NTdGVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9ncmVzcy1zdGVwJyk7XHJcbiAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtYmFyLWZpbGwnKTtcclxuICBjb25zdCBuZXh0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tbmV4dCcpO1xyXG4gIGNvbnN0IHByZXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1wcmV2Jyk7XHJcbiAgXHJcbiAgbGV0IGN1cnJlbnRTdGVwID0gMDtcclxuICBjb25zdCB0b3RhbFN0ZXBzID0gZm9ybVN0ZXBzLmxlbmd0aDtcclxuICBcclxuICAvLyBBbmltYXRpb24gYXUgY2hhcmdlbWVudCBkZXMgw6lsw6ltZW50cyBkdSBmb3JtdWxhaXJlXHJcbiAgZm9ybUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDEwcHgpJztcclxuICAgIFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMC41cyBlYXNlJztcclxuICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDApJztcclxuICAgIH0sIDEwMCArIChpbmRleCAqIDEwMCkpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIC8vIEFuaW1hdGlvbiBhdSBzdXJ2b2wgZGUgbGEgY2FydGVcclxuICBpZiAocmVnaXN0ZXJDYXJkKSB7XHJcbiAgICByZWdpc3RlckNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgY29uc3QgcmVjdCA9IHJlZ2lzdGVyQ2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgY2VudGVyWCA9IHJlY3Qud2lkdGggLyAyO1xyXG4gICAgICBjb25zdCBjZW50ZXJZID0gcmVjdC5oZWlnaHQgLyAyO1xyXG4gICAgICBcclxuICAgICAgY29uc3Qgcm90YXRlWCA9ICh5IC0gY2VudGVyWSkgLyA2MDtcclxuICAgICAgY29uc3Qgcm90YXRlWSA9IChjZW50ZXJYIC0geCkgLyA2MDtcclxuICAgICAgXHJcbiAgICAgIHJlZ2lzdGVyQ2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVYKCR7cm90YXRlWH1kZWcpIHJvdGF0ZVkoJHtyb3RhdGVZfWRlZykgc2NhbGUzZCgxLjAxLCAxLjAxLCAxLjAxKWA7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmVnaXN0ZXJDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgIHJlZ2lzdGVyQ2FyZC5zdHlsZS50cmFuc2Zvcm0gPSAncGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMCkgc2NhbGUzZCgxLCAxLCAxKSc7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gSW5pdGlhbGlzZXIgbCdhZmZpY2hhZ2UgZGVzIMOpdGFwZXMgZXQgZGUgbGEgcHJvZ3Jlc3Npb25cclxuICBmdW5jdGlvbiB1cGRhdGVGb3JtU3RlcHMoKSB7XHJcbiAgICAvLyBNZXR0cmUgw6Agam91ciBsZXMgw6l0YXBlcyBkdSBmb3JtdWxhaXJlXHJcbiAgICBmb3JtU3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgc3RlcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgaWYgKGluZGV4ID09PSBjdXJyZW50U3RlcCkge1xyXG4gICAgICAgIHN0ZXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyBNZXR0cmUgw6Agam91ciBsZXMgaW5kaWNhdGV1cnMgZCfDqXRhcGVcclxuICAgIHByb2dyZXNzU3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgc3RlcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnLCAnY29tcGxldGVkJyk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoaW5kZXggPCBjdXJyZW50U3RlcCkge1xyXG4gICAgICAgIHN0ZXAuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGN1cnJlbnRTdGVwKSB7XHJcbiAgICAgICAgc3RlcC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIE1ldHRyZSDDoCBqb3VyIGxhIGJhcnJlIGRlIHByb2dyZXNzaW9uXHJcbiAgICBpZiAocHJvZ3Jlc3NCYXIpIHtcclxuICAgICAgY29uc3QgcHJvZ3Jlc3NQZXJjZW50YWdlID0gKGN1cnJlbnRTdGVwIC8gKHRvdGFsU3RlcHMgLSAxKSkgKiAxMDA7XHJcbiAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3NQZXJjZW50YWdlfSVgO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBQYXNzZXIgw6AgbCfDqXRhcGUgc3VpdmFudGVcclxuICBmdW5jdGlvbiBuZXh0U3RlcCgpIHtcclxuICAgIC8vIFbDqXJpZmllciBxdWUgdG91cyBsZXMgY2hhbXBzIHJlcXVpcyBkZSBsJ8OpdGFwZSBhY3R1ZWxsZSBzb250IHJlbXBsaXNcclxuICAgIGNvbnN0IGN1cnJlbnRJbnB1dHMgPSBmb3JtU3RlcHNbY3VycmVudFN0ZXBdLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3JlcXVpcmVkXSwgc2VsZWN0W3JlcXVpcmVkXSwgdGV4dGFyZWFbcmVxdWlyZWRdJyk7XHJcbiAgICBjb25zdCBhbGxWYWxpZCA9IEFycmF5LmZyb20oY3VycmVudElucHV0cykuZXZlcnkoaW5wdXQgPT4gaW5wdXQuY2hlY2tWYWxpZGl0eSgpKTtcclxuICAgIFxyXG4gICAgaWYgKCFhbGxWYWxpZCkge1xyXG4gICAgICAvLyBBZmZpY2hlciBsZXMgZXJyZXVycyBkZSB2YWxpZGF0aW9uXHJcbiAgICAgIGN1cnJlbnRJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3NoYWtlLWVycm9yJyk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UtZXJyb3InKTtcclxuICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoY3VycmVudFN0ZXAgPCB0b3RhbFN0ZXBzIC0gMSkge1xyXG4gICAgICBjdXJyZW50U3RlcCsrO1xyXG4gICAgICB1cGRhdGVGb3JtU3RlcHMoKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFuaW1hdGlvbiBkZSB0cmFuc2l0aW9uXHJcbiAgICAgIGZvcm1TdGVwc1tjdXJyZW50U3RlcF0uc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgZm9ybVN0ZXBzW2N1cnJlbnRTdGVwXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgyMHB4KSc7XHJcbiAgICAgIFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBmb3JtU3RlcHNbY3VycmVudFN0ZXBdLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuNHMgZWFzZSc7XHJcbiAgICAgICAgZm9ybVN0ZXBzW2N1cnJlbnRTdGVwXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIGZvcm1TdGVwc1tjdXJyZW50U3RlcF0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xyXG4gICAgICB9LCA1MCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJldmVuaXIgw6AgbCfDqXRhcGUgcHLDqWPDqWRlbnRlXHJcbiAgZnVuY3Rpb24gcHJldlN0ZXAoKSB7XHJcbiAgICBpZiAoY3VycmVudFN0ZXAgPiAwKSB7XHJcbiAgICAgIGN1cnJlbnRTdGVwLS07XHJcbiAgICAgIHVwZGF0ZUZvcm1TdGVwcygpO1xyXG4gICAgICBcclxuICAgICAgLy8gQW5pbWF0aW9uIGRlIHRyYW5zaXRpb25cclxuICAgICAgZm9ybVN0ZXBzW2N1cnJlbnRTdGVwXS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICBmb3JtU3RlcHNbY3VycmVudFN0ZXBdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0yMHB4KSc7XHJcbiAgICAgIFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBmb3JtU3RlcHNbY3VycmVudFN0ZXBdLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuNHMgZWFzZSc7XHJcbiAgICAgICAgZm9ybVN0ZXBzW2N1cnJlbnRTdGVwXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIGZvcm1TdGVwc1tjdXJyZW50U3RlcF0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xyXG4gICAgICB9LCA1MCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEFqb3V0ZXIgbGVzIMOpY291dGV1cnMgZCfDqXbDqW5lbWVudHMgYXV4IGJvdXRvbnNcclxuICBuZXh0QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0U3RlcCk7XHJcbiAgICBcclxuICAgIC8vIEFqb3V0ZXIgdW4gZWZmZXQgZCdvbmR1bGF0aW9uIGF1IGNsaWNcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQoJ3JpcHBsZScpO1xyXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQocmlwcGxlKTtcclxuICAgICAgXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJpcHBsZS5yZW1vdmUoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBcclxuICBwcmV2QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2U3RlcCk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgLy8gR8OpcmVyIGxhIGZvcmNlIGR1IG1vdCBkZSBwYXNzZVxyXG4gIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcclxuICBjb25zdCBzdHJlbmd0aE1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmVuZ3RoLW1ldGVyLWZpbGwnKTtcclxuICBjb25zdCBzdHJlbmd0aFRleHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0cmVuZ3RoLXRleHQgc3BhbicpO1xyXG4gIFxyXG4gIGlmIChwYXNzd29yZElucHV0ICYmIHN0cmVuZ3RoTWV0ZXIpIHtcclxuICAgIHBhc3N3b3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gcGFzc3dvcmRJbnB1dC52YWx1ZTtcclxuICAgICAgbGV0IHN0cmVuZ3RoID0gMDtcclxuICAgICAgXHJcbiAgICAgIC8vIENyaXTDqHJlcyBkZSBmb3JjZSBkdSBtb3QgZGUgcGFzc2VcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+PSA4KSBzdHJlbmd0aCArPSAxO1xyXG4gICAgICBpZiAoL1tBLVpdLy50ZXN0KHZhbHVlKSkgc3RyZW5ndGggKz0gMTtcclxuICAgICAgaWYgKC9bMC05XS8udGVzdCh2YWx1ZSkpIHN0cmVuZ3RoICs9IDE7XHJcbiAgICAgIGlmICgvW15BLVphLXowLTldLy50ZXN0KHZhbHVlKSkgc3RyZW5ndGggKz0gMTtcclxuICAgICAgXHJcbiAgICAgIC8vIE1ldHRyZSDDoCBqb3VyIGwnYWZmaWNoYWdlIGRlIGxhIGZvcmNlXHJcbiAgICAgIHN0cmVuZ3RoTWV0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnd2VhaycsICdtZWRpdW0nLCAnc3Ryb25nJyk7XHJcbiAgICAgIHN0cmVuZ3RoVGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHRleHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJywgJ3dlYWsnLCAnbWVkaXVtJywgJ3N0cm9uZycpKTtcclxuICAgICAgXHJcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBzdHJlbmd0aE1ldGVyLnN0eWxlLndpZHRoID0gJzAnO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0cmVuZ3RoIDw9IDIpIHtcclxuICAgICAgICBzdHJlbmd0aE1ldGVyLmNsYXNzTGlzdC5hZGQoJ3dlYWsnKTtcclxuICAgICAgICBzdHJlbmd0aE1ldGVyLnN0eWxlLndpZHRoID0gJzMzJSc7XHJcbiAgICAgICAgc3RyZW5ndGhUZXh0c1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnLCAnd2VhaycpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0cmVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgc3RyZW5ndGhNZXRlci5jbGFzc0xpc3QuYWRkKCdtZWRpdW0nKTtcclxuICAgICAgICBzdHJlbmd0aE1ldGVyLnN0eWxlLndpZHRoID0gJzY2JSc7XHJcbiAgICAgICAgc3RyZW5ndGhUZXh0c1sxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnLCAnbWVkaXVtJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RyZW5ndGhNZXRlci5jbGFzc0xpc3QuYWRkKCdzdHJvbmcnKTtcclxuICAgICAgICBzdHJlbmd0aE1ldGVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgIHN0cmVuZ3RoVGV4dHNbMl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJywgJ3N0cm9uZycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gQWZmaWNoZXIvbWFzcXVlciBsZSBtb3QgZGUgcGFzc2VcclxuICBjb25zdCB0b2dnbGVQYXNzd29yZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtcGFzc3dvcmQnKTtcclxuICBcclxuICBpZiAodG9nZ2xlUGFzc3dvcmRCdG4gJiYgcGFzc3dvcmRJbnB1dCkge1xyXG4gICAgdG9nZ2xlUGFzc3dvcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBwYXNzd29yZElucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpID09PSAncGFzc3dvcmQnID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcclxuICAgICAgcGFzc3dvcmRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcclxuICAgICAgXHJcbiAgICAgIC8vIENoYW5nZW1lbnQgZGUgbCdpY8O0bmVcclxuICAgICAgaWYgKHR5cGUgPT09ICdwYXNzd29yZCcpIHtcclxuICAgICAgICB0b2dnbGVQYXNzd29yZEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJiaSBiaS1leWVcIj48L2k+JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2dnbGVQYXNzd29yZEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJiaSBiaS1leWUtc2xhc2hcIj48L2k+JztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gQW5pbWF0aW9uIGRlIGwnaWPDtG5lXHJcbiAgICAgIHRvZ2dsZVBhc3N3b3JkQnRuLmNsYXNzTGlzdC5hZGQoJ3B1bHNlJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRvZ2dsZVBhc3N3b3JkQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3B1bHNlJyk7XHJcbiAgICAgIH0sIDMwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gSW5pdGlhbGlzZXIgbCdhZmZpY2hhZ2UgZGVzIMOpdGFwZXNcclxuICB1cGRhdGVGb3JtU3RlcHMoKTtcclxufSk7XHJcbiIsIi8vIFNjcmlwdCBwb3VyIGxhIGdlc3Rpb24gZHUgbW90IGRlIHBhc3NlIHZhY2FuY2llclxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUsOpZsOpcmVuY2UgYXV4IMOpbMOpbWVudHMgZHUgRE9NXHJcbiAgICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk7XHJcbiAgICBjb25zdCBnZW5lcmF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0ZS1wYXNzd29yZCcpO1xyXG4gICAgY29uc3QgY29weUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5LXBhc3N3b3JkJyk7XHJcbiAgICBjb25zdCBtZXRlckJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXRlci1iYXInKTtcclxuICAgIGNvbnN0IHN0cmVuZ3RoVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJlbmd0aC10ZXh0Jyk7XHJcbiAgICBcclxuICAgIC8vIEZvbmN0aW9uIHBvdXIgZ8OpbsOpcmVyIHVuIG1vdCBkZSBwYXNzZSBhbMOpYXRvaXJlXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVBhc3N3b3JkKCkge1xyXG4gICAgICAgIGNvbnN0IGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5IUAjJCVeJionO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IDEwOyAvLyBMb25ndWV1ciBkZSBtb3QgZGUgcGFzc2UgcGFyIGTDqWZhdXRcclxuICAgICAgICBsZXQgcGFzc3dvcmQgPSAnJztcclxuICAgICAgICBcclxuICAgICAgICAvLyBBbmltYXRpb24gZGUgZ8OpbsOpcmF0aW9uXHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGVtcFBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRlbXBQYXNzd29yZCArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC52YWx1ZSA9IHRlbXBQYXNzd29yZDtcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAvLyBNb3QgZGUgcGFzc2UgZmluYWxcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZElucHV0LnZhbHVlID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgICAgICAgICBjaGVja1Bhc3N3b3JkU3RyZW5ndGgocGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBbmltYXRpb24gZGUgc3VjY8Ooc1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC5jbGFzc0xpc3QuYWRkKCdpcy12YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpcy12YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1MCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEZvbmN0aW9uIHBvdXIgdsOpcmlmaWVyIGxhIGZvcmNlIGR1IG1vdCBkZSBwYXNzZVxyXG4gICAgZnVuY3Rpb24gY2hlY2tQYXNzd29yZFN0cmVuZ3RoKHBhc3N3b3JkKSB7XHJcbiAgICAgICAgLy8gUGFzIGRlIG1vdCBkZSBwYXNzZVxyXG4gICAgICAgIGlmICghcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgbWV0ZXJCYXIuc3R5bGUud2lkdGggPSAnMCUnO1xyXG4gICAgICAgICAgICBtZXRlckJhci5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmMGYwZjAnO1xyXG4gICAgICAgICAgICBzdHJlbmd0aFRleHQudGV4dENvbnRlbnQgPSAnRm9yY2UgZHUgbW90IGRlIHBhc3NlJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBDcml0w6hyZXMgZGUgZm9yY2VcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBwYXNzd29yZC5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgaGFzTG93ZXIgPSAvW2Etel0vLnRlc3QocGFzc3dvcmQpO1xyXG4gICAgICAgIGNvbnN0IGhhc1VwcGVyID0gL1tBLVpdLy50ZXN0KHBhc3N3b3JkKTtcclxuICAgICAgICBjb25zdCBoYXNOdW1iZXIgPSAvWzAtOV0vLnRlc3QocGFzc3dvcmQpO1xyXG4gICAgICAgIGNvbnN0IGhhc1NwZWNpYWwgPSAvWyFAIyQlXiYqXS8udGVzdChwYXNzd29yZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2FsY3VsIGR1IHNjb3JlXHJcbiAgICAgICAgbGV0IHNjb3JlID0gMDtcclxuICAgICAgICBpZiAobGVuZ3RoID49IDYpIHNjb3JlICs9IDE7XHJcbiAgICAgICAgaWYgKGxlbmd0aCA+PSA4KSBzY29yZSArPSAxO1xyXG4gICAgICAgIGlmIChsZW5ndGggPj0gMTApIHNjb3JlICs9IDE7XHJcbiAgICAgICAgaWYgKGhhc0xvd2VyKSBzY29yZSArPSAxO1xyXG4gICAgICAgIGlmIChoYXNVcHBlcikgc2NvcmUgKz0gMTtcclxuICAgICAgICBpZiAoaGFzTnVtYmVyKSBzY29yZSArPSAxO1xyXG4gICAgICAgIGlmIChoYXNTcGVjaWFsKSBzY29yZSArPSAxO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBvdXJjZW50YWdlIGV0IGNvdWxldXJcclxuICAgICAgICBjb25zdCBwZXJjZW50ID0gKHNjb3JlIC8gNykgKiAxMDA7XHJcbiAgICAgICAgbGV0IGNvbG9yLCBzdHJlbmd0aDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAocGVyY2VudCA8PSAyNSkge1xyXG4gICAgICAgICAgICBjb2xvciA9ICcjZmY0ZTUwJztcclxuICAgICAgICAgICAgc3RyZW5ndGggPSAnVHLDqHMgZmFpYmxlJztcclxuICAgICAgICB9IGVsc2UgaWYgKHBlcmNlbnQgPD0gNTApIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnI2ZmOTUwMCc7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoID0gJ0ZhaWJsZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwZXJjZW50IDw9IDc1KSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJyNmOWQ0MjMnO1xyXG4gICAgICAgICAgICBzdHJlbmd0aCA9ICdNb3llbic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnIzRDQUY1MCc7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoID0gJ0ZvcnQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBNaXNlIMOgIGpvdXIgZGUgbCdpbnRlcmZhY2VcclxuICAgICAgICBtZXRlckJhci5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnR9JWA7XHJcbiAgICAgICAgbWV0ZXJCYXIuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xyXG4gICAgICAgIHN0cmVuZ3RoVGV4dC50ZXh0Q29udGVudCA9IHN0cmVuZ3RoO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBGb25jdGlvbiBwb3VyIGNvcGllciBsZSBtb3QgZGUgcGFzc2VcclxuICAgIGZ1bmN0aW9uIGNvcHlQYXNzd29yZCgpIHtcclxuICAgICAgICBjb25zdCBwYXNzd29yZFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLXZhbHVlJyk7XHJcbiAgICAgICAgaWYgKCFwYXNzd29yZFZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ3LDqWUgdW4gw6lsw6ltZW50IGRlIHRleHRlIHRlbXBvcmFpcmVcclxuICAgICAgICBjb25zdCB0ZW1wSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRlbXBJbnB1dC52YWx1ZSA9IHBhc3N3b3JkVmFsdWUudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wSW5wdXQpO1xyXG4gICAgICAgIHRlbXBJbnB1dC5zZWxlY3QoKTtcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcElucHV0KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBSZXRvdXIgdmlzdWVsXHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUb29sdGlwID0gY29weUJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcpO1xyXG4gICAgICAgIGNvcHlCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvb2x0aXAnLCAnQ29wacOpICEnKTtcclxuICAgICAgICBjb3B5QnRuLmNsYXNzTGlzdC5hZGQoJ3RleHQtc3VjY2VzcycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb3B5QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b29sdGlwJywgb3JpZ2luYWxUb29sdGlwKTtcclxuICAgICAgICAgICAgY29weUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0LXN1Y2Nlc3MnKTtcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQWpvdXQgZGVzIMOpY291dGV1cnMgZCfDqXbDqW5lbWVudHNcclxuICAgIGlmIChnZW5lcmF0ZUJ0bikge1xyXG4gICAgICAgIGdlbmVyYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVQYXNzd29yZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChjb3B5QnRuKSB7XHJcbiAgICAgICAgY29weUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvcHlQYXNzd29yZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChwYXNzd29yZElucHV0KSB7XHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjaGVja1Bhc3N3b3JkU3RyZW5ndGgodGhpcy52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFuaW1hdGlvbnMgYXUgY2hhcmdlbWVudCBkZSBsYSBwYWdlXHJcbiAgICBjb25zdCBhbmltYXRlZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hdGUtaW4sIC5hbmltYXRlLWZhZGUtaW4sIC5hbmltYXRlLXNsaWRlLWluJyk7XHJcbiAgICBhbmltYXRlZEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIEFwcGxpY2F0aW9uIGRlcyBhbmltYXRpb25zIGFwcsOocyB1biBjb3VydCBkw6lsYWlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGFuaW1hdGVkRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgMTAwKTtcclxufSk7ICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXROYXZiYXIiLCJkb2N1bWVudCIsImhlcm9UaXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJoZXJvU3VidGl0bGUiLCJoZXJvQ3RhIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJhbmltYXRpb25EZWxheSIsImZlYXR1cmVDYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImluZGV4IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjb25jYXQiLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGQiLCJjYXJkIiwib2JzZXJ2ZSIsImhlcm9TZWN0aW9uIiwiaGVyb1BhdHRlcm4iLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsInBhcmFsbGF4T2Zmc2V0IiwidHJhbnNmb3JtIiwiZm9ybUVsZW1lbnRzIiwibG9naW5Gb3JtIiwibG9naW5DYXJkIiwicGFzc3dvcmRGaWVsZCIsInRvZ2dsZVBhc3N3b3JkQnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJlbGVtZW50Iiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJ0cmFuc2l0aW9uIiwiZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwiY2xpZW50WCIsImxlZnQiLCJ5IiwiY2xpZW50WSIsInRvcCIsImNlbnRlclgiLCJ3aWR0aCIsImNlbnRlclkiLCJoZWlnaHQiLCJyb3RhdGVYIiwicm90YXRlWSIsImJ1dHRvbiIsInJpcHBsZSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZSIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhZGRJbnB1dEVycm9yQW5pbWF0aW9uIiwiaW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsIm5hdmJhciIsIm5hdmJhclRvZ2dsZSIsIm5hdmJhck1lbnUiLCJuYXZiYXJNZW51T3ZlcmxheSIsIm5hdkl0ZW1zIiwibmF2SXRlbXNDb3VudCIsInNjcm9sbFkiLCJ0b2dnbGUiLCJjb250YWlucyIsIml0ZW0iLCJib2R5Iiwib3ZlcmZsb3ciLCJuYXZMaW5rcyIsImxpbmsiLCJlcnJvciIsImN1cnJlbnRMb2NhdGlvbiIsImxvY2F0aW9uIiwiaHJlZiIsImFjdGl2aXR5U2VsZWN0IiwibmV3QWN0aXZpdHlGaWVsZHMiLCJ2YWx1ZSIsImRpc3BsYXkiLCJjYXRlZ29yeVNlbGVjdCIsIm5ld0NhdGVnb3J5RmllbGRzIiwiaXNSZWN1cnJpbmciLCJyZWN1cnJpbmdPcHRpb25zIiwiY2hlY2tlZCIsInNhdmVCdXR0b24iLCJzdWNjZXNzTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsImZvcm1EYXRhIiwiYWN0aXZpdHlfaWQiLCJhY3Rpdml0eV9uYW1lIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeV9pZCIsImNhdGVnb3J5X25hbWUiLCJjYXRlZ29yeV9jb2xvciIsImRhdGFzZXQiLCJjb2xvciIsImRhdGUiLCJzdGFydF90aW1lIiwiZW5kX3RpbWUiLCJpc19yZWN1cnJpbmciLCJyZWN1cnJpbmdfZGF5cyIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImVsIiwidGV4dENvbnRlbnQiLCJ1cmwiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwibW9kYWwiLCJib290c3RyYXAiLCJNb2RhbCIsImdldEluc3RhbmNlIiwiaGlkZSIsInJlbG9hZCIsImVkaXRCdXR0b25zIiwiZWRpdEFjdGl2aXR5TW9kYWwiLCJlZGl0U3VjY2Vzc01lc3NhZ2UiLCJlZGl0RXJyb3JNZXNzYWdlIiwic2F2ZUVkaXRCdXR0b24iLCJlZGl0Q2F0ZWdvcnlTZWxlY3QiLCJlZGl0TmV3Q2F0ZWdvcnlGaWVsZHMiLCJlZGl0QWN0aXZpdHlTZWxlY3QiLCJzZWxlY3RlZE9wdGlvbiIsImFjdGl2aXR5SWQiLCJlZGl0QnV0dG9uIiwiYWN0aXZpdHlOYW1lIiwiYWN0aXZpdHlEZXNjcmlwdGlvbiIsImFjdGl2aXR5Q2F0ZWdvcnkiLCJhY3Rpdml0eURhdGUiLCJhY3Rpdml0eVN0YXJ0IiwiYWN0aXZpdHlFbmQiLCJjYXRlZ29yeUlkIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsImkiLCJlZGl0TW9kYWwiLCJzaG93IiwibWFuYWdlTW9kYWwiLCJkZWxldGVCdXR0b25zIiwiZGVsZXRlQ29uZmlybU1vZGFsIiwiY29uZmlybURlbGV0ZUJ1dHRvbiIsImRlbGV0ZU1vZGFsIiwiYWxlcnQiLCJyZWdpc3RlckNhcmQiLCJmb3JtU3RlcHMiLCJwcm9ncmVzc1N0ZXBzIiwicHJvZ3Jlc3NCYXIiLCJuZXh0QnV0dG9ucyIsInByZXZCdXR0b25zIiwiY3VycmVudFN0ZXAiLCJ0b3RhbFN0ZXBzIiwidXBkYXRlRm9ybVN0ZXBzIiwic3RlcCIsInByb2dyZXNzUGVyY2VudGFnZSIsIm5leHRTdGVwIiwiY3VycmVudElucHV0cyIsImFsbFZhbGlkIiwiZXZlcnkiLCJjaGVja1ZhbGlkaXR5IiwicHJldlN0ZXAiLCJwYXNzd29yZElucHV0Iiwic3RyZW5ndGhNZXRlciIsInN0cmVuZ3RoVGV4dHMiLCJzdHJlbmd0aCIsInRlc3QiLCJnZW5lcmF0ZUJ0biIsImNvcHlCdG4iLCJtZXRlckJhciIsInN0cmVuZ3RoVGV4dCIsImdlbmVyYXRlUGFzc3dvcmQiLCJjaGFycyIsInBhc3N3b3JkIiwiY291bnRlciIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ0ZW1wUGFzc3dvcmQiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjbGVhckludGVydmFsIiwiY2hlY2tQYXNzd29yZFN0cmVuZ3RoIiwiYmFja2dyb3VuZCIsImhhc0xvd2VyIiwiaGFzVXBwZXIiLCJoYXNOdW1iZXIiLCJoYXNTcGVjaWFsIiwic2NvcmUiLCJwZXJjZW50IiwiY29weVBhc3N3b3JkIiwicGFzc3dvcmRWYWx1ZSIsInRlbXBJbnB1dCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlQ2hpbGQiLCJvcmlnaW5hbFRvb2x0aXAiLCJhbmltYXRlZEVsZW1lbnRzIiwidmlzaWJpbGl0eSJdLCJzb3VyY2VSb290IjoiIn0=