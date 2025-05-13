(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

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
/* harmony import */ var _scripts_call_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/call.js */ "./assets/scripts/call.js");
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
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navbar_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _planning_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planning.js */ "./assets/scripts/planning.js");
/* harmony import */ var _planning_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_planning_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./assets/scripts/home.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.js */ "./assets/scripts/login.js");
/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_login_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _register_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.js */ "./assets/scripts/register.js");
/* harmony import */ var _register_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_register_js__WEBPACK_IMPORTED_MODULE_4__);
// Import des scripts spécifiques






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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
// Fonctionnalités JavaScript pour la barre de navigation

document.addEventListener('DOMContentLoaded', function () {
  // Référence aux éléments de la navbar
  var navbar = document.querySelector('.navbar-container');
  var navbarToggle = document.querySelector('.navbar-toggle');
  var navbarMenu = document.querySelector('.navbar-menu');
  var navbarMenuOverlay = document.querySelector('.navbar-menu-overlay');
  var navItems = document.querySelectorAll('.nav-item');

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
    navbarToggle.addEventListener('click', function () {
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
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
        navbarMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
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
});

/***/ }),

/***/ "./assets/scripts/planning.js":
/*!************************************!*\
  !*** ./assets/scripts/planning.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
__webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
// Fonctionnalités JavaScript pour la gestion du planning

document.addEventListener('DOMContentLoaded', function () {
  // Références aux éléments DOM
  var calendarContainer = document.querySelector('.calendar-view');
  var calendarTitle = document.querySelector('.calendar-title');
  var prevButton = document.querySelector('.calendar-nav-btn.prev');
  var nextButton = document.querySelector('.calendar-nav-btn.next');
  var todayButton = document.querySelector('.calendar-nav-btn.today');
  var calendarDays = document.querySelector('.calendar-days');
  var planningTabs = document.querySelectorAll('.planning-tab');
  var planningViews = document.querySelectorAll('.planning-view');
  var addEventButton = document.querySelector('.add-event-btn');
  var eventModal = document.querySelector('.event-modal');
  var eventModalClose = document.querySelector('.event-modal-close');
  var eventForm = document.querySelector('.event-form');

  // Variables du calendrier
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  var currentYear = currentDate.getFullYear();

  // Noms des mois et jours en français
  var months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  var daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  // Mock data pour les événements (à remplacer par un appel AJAX)
  var events = [{
    id: 1,
    title: 'Animation Piscine',
    start: new Date(currentYear, currentMonth, 10, 14, 0),
    end: new Date(currentYear, currentMonth, 10, 16, 0),
    serviceId: 1
  }, {
    id: 2,
    title: 'Spectacle Soirée',
    start: new Date(currentYear, currentMonth, 15, 20, 0),
    end: new Date(currentYear, currentMonth, 15, 22, 0),
    serviceId: 2
  }, {
    id: 3,
    title: 'Cours de Danse',
    start: new Date(currentYear, currentMonth, 20, 10, 0),
    end: new Date(currentYear, currentMonth, 20, 12, 0),
    serviceId: 3
  }];

  // Initialisation
  function init() {
    renderCalendar();
    setupEventListeners();
    initTabsNavigation();
  }

  // Configuration des écouteurs d'événements
  function setupEventListeners() {
    if (prevButton) {
      prevButton.addEventListener('click', goToPreviousMonth);
    }
    if (nextButton) {
      nextButton.addEventListener('click', goToNextMonth);
    }
    if (todayButton) {
      todayButton.addEventListener('click', goToToday);
    }
    if (addEventButton) {
      addEventButton.addEventListener('click', openNewEventModal);
    }
    if (eventModalClose) {
      eventModalClose.addEventListener('click', closeEventModal);
    }

    // Fermer la modal si on clique en dehors
    if (eventModal) {
      eventModal.addEventListener('click', function (e) {
        if (e.target === eventModal) {
          closeEventModal();
        }
      });
    }

    // Gestion du formulaire de l'événement
    if (eventForm) {
      eventForm.addEventListener('submit', handleEventFormSubmit);
    }
  }

  // Navigation entre les onglets
  function initTabsNavigation() {
    if (planningTabs && planningTabs.length > 0) {
      planningTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          // Enlever la classe active de tous les onglets
          planningTabs.forEach(function (t) {
            return t.classList.remove('active');
          });

          // Ajouter la classe active à l'onglet cliqué
          this.classList.add('active');

          // Afficher la vue correspondante
          var viewId = this.getAttribute('data-target');
          planningViews.forEach(function (view) {
            view.classList.remove('active');
            if (view.id === viewId) {
              view.classList.add('active');
            }
          });
        });
      });
    }
  }

  // Affichage du calendrier
  function renderCalendar() {
    if (!calendarDays || !calendarTitle) return;

    // Mise à jour du titre du calendrier (mois et année)
    calendarTitle.textContent = "".concat(months[currentMonth], " ").concat(currentYear);

    // Vider le conteneur des jours
    calendarDays.innerHTML = '';

    // Premier jour du mois
    var firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    // Dernier jour du mois
    var lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    // Nombre de jours dans le mois
    var daysInMonth = lastDayOfMonth.getDate();

    // Jour de la semaine du premier jour (0-6)
    var firstDayOfWeek = firstDayOfMonth.getDay();

    // Calcul du nombre total de cellules (y compris les jours du mois précédent/suivant)
    var totalCells = Math.ceil((daysInMonth + firstDayOfWeek) / 7) * 7;

    // Date du jour
    var today = new Date();

    // Jours du mois précédent
    var prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();

    // Génération des cellules du calendrier
    var _loop = function _loop() {
      var dayCell = document.createElement('div');
      dayCell.className = 'calendar-day';
      var cellNumber = document.createElement('div');
      cellNumber.className = 'day-number';
      var eventList = document.createElement('div');
      eventList.className = 'event-list';

      // Index du jour à afficher
      var dayIndex = i - firstDayOfWeek + 1;
      var dateToDisplay;

      // Jours du mois précédent
      if (dayIndex <= 0) {
        dayIndex = prevMonthLastDay + dayIndex;
        cellNumber.textContent = dayIndex;
        dayCell.classList.add('other-month');
        dateToDisplay = new Date(currentYear, currentMonth - 1, dayIndex);
      }
      // Jours du mois suivant
      else if (dayIndex > daysInMonth) {
        dayIndex = dayIndex - daysInMonth;
        cellNumber.textContent = dayIndex;
        dayCell.classList.add('other-month');
        dateToDisplay = new Date(currentYear, currentMonth + 1, dayIndex);
      }
      // Jours du mois courant
      else {
        cellNumber.textContent = dayIndex;
        dateToDisplay = new Date(currentYear, currentMonth, dayIndex);

        // Marquer le jour actuel
        if (currentYear === today.getFullYear() && currentMonth === today.getMonth() && dayIndex === today.getDate()) {
          dayCell.classList.add('today');
        }
      }

      // Ajouter les événements à cette date
      addEventsToCell(eventList, dateToDisplay);

      // Ajouter la possibilité de créer un événement en cliquant sur une cellule
      dayCell.addEventListener('click', function () {
        openNewEventModal(dateToDisplay);
      });
      dayCell.appendChild(cellNumber);
      dayCell.appendChild(eventList);
      calendarDays.appendChild(dayCell);
    };
    for (var i = 0; i < totalCells; i++) {
      _loop();
    }
  }

  // Ajouter les événements à une cellule
  function addEventsToCell(container, date) {
    if (!container || !date) return;

    // Filtrer les événements du jour
    var dayEvents = events.filter(function (event) {
      var eventDate = new Date(event.start);
      return eventDate.getDate() === date.getDate() && eventDate.getMonth() === date.getMonth() && eventDate.getFullYear() === date.getFullYear();
    });

    // Ajouter chaque événement au conteneur
    dayEvents.forEach(function (event) {
      var eventItem = document.createElement('div');
      eventItem.className = "event-item service-".concat(event.serviceId);
      eventItem.textContent = event.title;

      // Formater l'heure de début et de fin
      var startTime = formatTime(event.start);
      var endTime = formatTime(event.end);
      eventItem.setAttribute('title', "".concat(event.title, " (").concat(startTime, " - ").concat(endTime, ")"));

      // Empêcher la propagation du clic pour ne pas déclencher le clic de la cellule
      eventItem.addEventListener('click', function (e) {
        e.stopPropagation();
        openEventModal(event);
      });
      container.appendChild(eventItem);
    });
  }

  // Formater l'heure au format 24h (HH:MM)
  function formatTime(date) {
    if (!date) return '';
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    return "".concat(hours, ":").concat(minutes);
  }

  // Navigation vers le mois précédent
  function goToPreviousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
  }

  // Navigation vers le mois suivant
  function goToNextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  }

  // Aller au mois actuel
  function goToToday() {
    var today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    renderCalendar();
  }

  // Ouvrir la modal pour un nouvel événement
  function openNewEventModal(date) {
    if (!eventModal) return;

    // Réinitialiser le formulaire
    if (eventForm) {
      eventForm.reset();

      // Si une date est spécifiée, définir les champs de date et d'heure
      if (date instanceof Date) {
        var dateInput = eventForm.querySelector('[name="event-date"]');
        if (dateInput) {
          var dateString = date.toISOString().split('T')[0];
          dateInput.value = dateString;
        }
      }
    }

    // Changer le titre de la modal
    var modalTitle = eventModal.querySelector('.event-modal-title');
    if (modalTitle) {
      modalTitle.textContent = 'Nouvel événement';
    }

    // Masquer le bouton de suppression s'il existe
    var deleteButton = eventModal.querySelector('.event-modal-btn.delete');
    if (deleteButton) {
      deleteButton.style.display = 'none';
    }

    // Afficher la modal
    eventModal.classList.add('show');
  }

  // Ouvrir la modal pour un événement existant
  function openEventModal(event) {
    if (!eventModal || !event) return;

    // Remplir le formulaire avec les données de l'événement
    if (eventForm) {
      var titleInput = eventForm.querySelector('[name="event-title"]');
      var dateInput = eventForm.querySelector('[name="event-date"]');
      var startTimeInput = eventForm.querySelector('[name="event-start-time"]');
      var endTimeInput = eventForm.querySelector('[name="event-end-time"]');
      var serviceInput = eventForm.querySelector('[name="event-service"]');
      var descriptionInput = eventForm.querySelector('[name="event-description"]');
      if (titleInput) titleInput.value = event.title;
      if (dateInput) {
        var dateString = event.start.toISOString().split('T')[0];
        dateInput.value = dateString;
      }
      if (startTimeInput) {
        var hours = event.start.getHours().toString().padStart(2, '0');
        var minutes = event.start.getMinutes().toString().padStart(2, '0');
        startTimeInput.value = "".concat(hours, ":").concat(minutes);
      }
      if (endTimeInput) {
        var _hours = event.end.getHours().toString().padStart(2, '0');
        var _minutes = event.end.getMinutes().toString().padStart(2, '0');
        endTimeInput.value = "".concat(_hours, ":").concat(_minutes);
      }
      if (serviceInput) serviceInput.value = event.serviceId;
      if (descriptionInput && event.description) {
        descriptionInput.value = event.description;
      }

      // Stocker l'ID de l'événement pour la mise à jour
      eventForm.dataset.eventId = event.id;
    }

    // Changer le titre de la modal
    var modalTitle = eventModal.querySelector('.event-modal-title');
    if (modalTitle) {
      modalTitle.textContent = 'Modifier l\'événement';
    }

    // Afficher le bouton de suppression
    var deleteButton = eventModal.querySelector('.event-modal-btn.delete');
    if (deleteButton) {
      deleteButton.style.display = 'inline-block';

      // Ajouter un événement pour supprimer
      deleteButton.onclick = function () {
        deleteEvent(event.id);
      };
    }

    // Afficher la modal
    eventModal.classList.add('show');
  }

  // Fermer la modal
  function closeEventModal() {
    if (!eventModal) return;
    eventModal.classList.remove('show');

    // Réinitialiser le formulaire
    if (eventForm) {
      eventForm.reset();
      delete eventForm.dataset.eventId;
    }
  }

  // Gérer la soumission du formulaire d'événement
  function handleEventFormSubmit(e) {
    e.preventDefault();

    // Récupérer les données du formulaire
    var formData = new FormData(eventForm);
    var eventData = {
      title: formData.get('event-title'),
      date: formData.get('event-date'),
      startTime: formData.get('event-start-time'),
      endTime: formData.get('event-end-time'),
      serviceId: parseInt(formData.get('event-service')),
      description: formData.get('event-description')
    };

    // Validation de base
    if (!eventData.title || !eventData.date || !eventData.startTime || !eventData.endTime) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Création des objets Date
    var _eventData$date$split = eventData.date.split('-').map(Number),
      _eventData$date$split2 = _slicedToArray(_eventData$date$split, 3),
      year = _eventData$date$split2[0],
      month = _eventData$date$split2[1],
      day = _eventData$date$split2[2];
    var _eventData$startTime$ = eventData.startTime.split(':').map(Number),
      _eventData$startTime$2 = _slicedToArray(_eventData$startTime$, 2),
      startHours = _eventData$startTime$2[0],
      startMinutes = _eventData$startTime$2[1];
    var _eventData$endTime$sp = eventData.endTime.split(':').map(Number),
      _eventData$endTime$sp2 = _slicedToArray(_eventData$endTime$sp, 2),
      endHours = _eventData$endTime$sp2[0],
      endMinutes = _eventData$endTime$sp2[1];
    var startDate = new Date(year, month - 1, day, startHours, startMinutes);
    var endDate = new Date(year, month - 1, day, endHours, endMinutes);

    // Vérifier que la date de fin est après la date de début
    if (endDate <= startDate) {
      alert('L\'heure de fin doit être après l\'heure de début.');
      return;
    }

    // Si c'est une mise à jour d'événement existant
    var eventId = eventForm.dataset.eventId;
    if (eventId) {
      updateEvent(parseInt(eventId), {
        title: eventData.title,
        start: startDate,
        end: endDate,
        serviceId: eventData.serviceId,
        description: eventData.description
      });
    } else {
      // Sinon, créer un nouvel événement
      createEvent({
        id: events.length + 1,
        // Simple ID pour la démo
        title: eventData.title,
        start: startDate,
        end: endDate,
        serviceId: eventData.serviceId,
        description: eventData.description
      });
    }

    // Fermer la modal et mettre à jour le calendrier
    closeEventModal();
    renderCalendar();
  }

  // Créer un nouvel événement
  function createEvent(eventData) {
    // Dans un environnement réel, ce serait un appel API
    events.push(eventData);
    console.log('Événement créé:', eventData);
  }

  // Mettre à jour un événement
  function updateEvent(eventId, newData) {
    // Dans un environnement réel, ce serait un appel API
    var eventIndex = events.findIndex(function (e) {
      return e.id === eventId;
    });
    if (eventIndex !== -1) {
      events[eventIndex] = _objectSpread(_objectSpread({}, events[eventIndex]), newData);
      console.log('Événement mis à jour:', events[eventIndex]);
    }
  }

  // Supprimer un événement
  function deleteEvent(eventId) {
    // Dans un environnement réel, ce serait un appel API
    var confirmDelete = confirm('Êtes-vous sûr de vouloir supprimer cet événement ?');
    if (confirmDelete) {
      var eventIndex = events.findIndex(function (e) {
        return e.id === eventId;
      });
      if (eventIndex !== -1) {
        events.splice(eventIndex, 1);
        console.log('Événement supprimé, ID:', eventId);

        // Fermer la modal et mettre à jour le calendrier
        closeEventModal();
        renderCalendar();
      }
    }
  }

  // Initialiser l'application
  init();
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-b1522a"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxJQUFNOEIsaUJBQWlCLEdBQUdyQyxRQUFRLENBQUNzQyxjQUFjLENBQUMsaUJBQWlCLENBQUM7RUFFcEUsSUFBSUQsaUJBQWlCLElBQUkwTSxhQUFhLEVBQUU7SUFDdEMxTSxpQkFBaUIsQ0FBQ3BDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQ2hELElBQU04RCxJQUFJLEdBQUdnTCxhQUFhLENBQUMvSyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssVUFBVSxHQUFHLE1BQU0sR0FBRyxVQUFVO01BQ3BGK0ssYUFBYSxDQUFDOUssWUFBWSxDQUFDLE1BQU0sRUFBRUYsSUFBSSxDQUFDOztNQUV4QztNQUNBLElBQUlBLElBQUksS0FBSyxVQUFVLEVBQUU7UUFDdkIxQixpQkFBaUIsQ0FBQzZCLFNBQVMsR0FBRywyQkFBMkI7TUFDM0QsQ0FBQyxNQUFNO1FBQ0w3QixpQkFBaUIsQ0FBQzZCLFNBQVMsR0FBRyxpQ0FBaUM7TUFDakU7O01BRUE7TUFDQTdCLGlCQUFpQixDQUFDL0IsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO01BQ3hDa0MsVUFBVSxDQUFDLFlBQU07UUFDZkosaUJBQWlCLENBQUMvQixTQUFTLENBQUN3RCxNQUFNLENBQUMsT0FBTyxDQUFDO01BQzdDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDVCxDQUFDLENBQUM7RUFDSjs7RUFFQTtFQUNBc0ssZUFBZSxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNyTkY7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2NhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvcGxhbm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9Db21tdW4uY3NzPzQ5YWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9Db21wdGUuY3NzP2QzNGYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9Ib21lLmNzcz9lMWE3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvTG9naW4uY3NzP2ZmOTgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9OYXZiYXIuY3NzP2MxMzQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9QbGFubmluZy5jc3M/MDNmMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL1JlZ2lzdGVyLmNzcz82ZjA4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBJbXBvcnRzIHN0eWxlc1xuaW1wb3J0ICcuL3N0eWxlcy9Db21tdW4uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvTmF2YmFyLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL0NvbXB0ZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9Ib21lLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL1BsYW5uaW5nLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL0xvZ2luLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL1JlZ2lzdGVyLmNzcyc7XG5cbi8vIEltcG9ydHMgc2NyaXB0cyBjYWxsLmpzIHF1aSBhcHBlbCB0b3V0IGxlcyBhdXRyZXMgc2NyaXB0c1xuaW1wb3J0ICcuL3NjcmlwdHMvY2FsbC5qcyc7XG5cblxuIiwiLy8gSW1wb3J0IGRlcyBzY3JpcHRzIHNww6ljaWZpcXVlc1xyXG5pbXBvcnQgJy4vbmF2YmFyLmpzJztcclxuaW1wb3J0ICcuL3BsYW5uaW5nLmpzJztcclxuaW1wb3J0ICcuL2hvbWUuanMnO1xyXG5pbXBvcnQgJy4vbG9naW4uanMnO1xyXG5pbXBvcnQgJy4vcmVnaXN0ZXIuanMnO1xyXG4iLCIvLyBIb21lIHBhZ2UgSmF2YVNjcmlwdCBhbmQgc3R5bGVzXHJcblxyXG4vLyBBbmltYXRpb24gcG91ciBsYSBwYWdlIGQnYWNjdWVpbFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBBbmltZXIgbGVzIMOpbMOpbWVudHMgZHUgaGVyb1xyXG4gICAgY29uc3QgaGVyb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tdGl0bGUnKTtcclxuICAgIGNvbnN0IGhlcm9TdWJ0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXN1YnRpdGxlJyk7XHJcbiAgICBjb25zdCBoZXJvQ3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tY3RhJyk7XHJcbiAgICBcclxuICAgIGlmIChoZXJvVGl0bGUpIHtcclxuICAgICAgICBoZXJvVGl0bGUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1mYWRlLWluJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChoZXJvU3VidGl0bGUpIHtcclxuICAgICAgICBoZXJvU3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1mYWRlLWluJyk7XHJcbiAgICAgICAgaGVyb1N1YnRpdGxlLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gJzIwMG1zJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGhlcm9DdGEpIHtcclxuICAgICAgICBoZXJvQ3RhLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtZmFkZS1pbicpO1xyXG4gICAgICAgIGhlcm9DdGEuc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSAnNDAwbXMnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBbmltZXIgbGVzIGZlYXR1cmVzIGF1IHNjcm9sbFxyXG4gICAgY29uc3QgZmVhdHVyZUNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZlYXR1cmUtY2FyZCcpO1xyXG4gICAgXHJcbiAgICBpZiAoZmVhdHVyZUNhcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtc2xpZGUtdXAnKTtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSBgJHtpbmRleCAqIDEwMH1tc2A7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLjFcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBmZWF0dXJlQ2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShjYXJkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRWZmZXQgcGFyYWxsYXggc3VyIGxlIGhlcm9cclxuICAgIGNvbnN0IGhlcm9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tc2VjdGlvbicpO1xyXG4gICAgY29uc3QgaGVyb1BhdHRlcm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1wYXR0ZXJuJyk7XHJcbiAgICBcclxuICAgIGlmIChoZXJvU2VjdGlvbiAmJiBoZXJvUGF0dGVybikge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbGxheE9mZnNldCA9IHNjcm9sbFRvcCAqIDAuNDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhlcm9QYXR0ZXJuLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7cGFyYWxsYXhPZmZzZXR9cHgpYDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBTY3JpcHQgcG91ciBsZXMgYW5pbWF0aW9ucyBldCBpbnRlcmFjdGlvbnMgZHUgZm9ybXVsYWlyZSBkZSBjb25uZXhpb25cclxuICovXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgLy8gw4lsw6ltZW50cyBkdSBmb3JtdWxhaXJlXHJcbiAgY29uc3QgZm9ybUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29udHJvbCcpO1xyXG4gIGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1mb3JtJyk7XHJcbiAgY29uc3QgbG9naW5DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWNhcmQnKTtcclxuICBjb25zdCBwYXNzd29yZEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXBhc3N3b3JkJyk7XHJcbiAgXHJcbiAgLy8gQW5pbWF0aW9uIGF1IGNoYXJnZW1lbnQgZGVzIMOpbMOpbWVudHMgZHUgZm9ybXVsYWlyZVxyXG4gIGZvcm1FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgxMHB4KSc7XHJcbiAgICBcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuNXMgZWFzZSc7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwKSc7XHJcbiAgICB9LCAxMDAgKyAoaW5kZXggKiAxMDApKTtcclxuICB9KTtcclxuICBcclxuICAvLyBBbmltYXRpb24gYXUgc3Vydm9sIGRlIGxhIGNhcnRlXHJcbiAgaWYgKGxvZ2luQ2FyZCkge1xyXG4gICAgbG9naW5DYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlY3QgPSBsb2dpbkNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLSByZWN0LnRvcDtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGNlbnRlclggPSByZWN0LndpZHRoIC8gMjtcclxuICAgICAgY29uc3QgY2VudGVyWSA9IHJlY3QuaGVpZ2h0IC8gMjtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHJvdGF0ZVggPSAoeSAtIGNlbnRlclkpIC8gNTA7XHJcbiAgICAgIGNvbnN0IHJvdGF0ZVkgPSAoY2VudGVyWCAtIHgpIC8gNTA7XHJcbiAgICAgIFxyXG4gICAgICBsb2dpbkNhcmQuc3R5bGUudHJhbnNmb3JtID0gYHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWCgke3JvdGF0ZVh9ZGVnKSByb3RhdGVZKCR7cm90YXRlWX1kZWcpIHNjYWxlM2QoMS4wMSwgMS4wMSwgMS4wMSlgO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGxvZ2luQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICBsb2dpbkNhcmQuc3R5bGUudHJhbnNmb3JtID0gJ3BlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDApIHNjYWxlM2QoMSwgMSwgMSknO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEdlc3Rpb24gZGUgbGEgc291bWlzc2lvbiBkdSBmb3JtdWxhaXJlXHJcbiAgaWYgKGxvZ2luRm9ybSkge1xyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpO1xyXG4gICAgICBcclxuICAgICAgLy8gQWpvdXRlciB1bmUgY2xhc3NlIHBvdXIgbCdhbmltYXRpb25cclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdHRpbmcnKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFqb3V0ZXIgdW4gZWZmZXQgZCdvbmR1bGF0aW9uIGF1IGNsaWNcclxuICAgICAgY29uc3QgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCgncmlwcGxlJyk7XHJcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChyaXBwbGUpO1xyXG4gICAgICBcclxuICAgICAgLy8gU3VwcHJpbWVyIGwnw6lsw6ltZW50IGQnb25kdWxhdGlvbiBhcHLDqHMgbCdhbmltYXRpb25cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmlwcGxlLnJlbW92ZSgpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICAvLyBGb25jdGlvbiBwb3VyIGFmZmljaGVyL21hc3F1ZXIgbGUgbW90IGRlIHBhc3NlXHJcbiAgaWYgKHRvZ2dsZVBhc3N3b3JkQnRuICYmIHBhc3N3b3JkRmllbGQpIHtcclxuICAgIHRvZ2dsZVBhc3N3b3JkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0eXBlID0gcGFzc3dvcmRGaWVsZC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6ICdwYXNzd29yZCc7XHJcbiAgICAgIHBhc3N3b3JkRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDaGFuZ2VtZW50IGRlIGwnaWPDtG5lXHJcbiAgICAgIGlmICh0eXBlID09PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgdG9nZ2xlUGFzc3dvcmRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiYmkgYmktZXllXCI+PC9pPic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9nZ2xlUGFzc3dvcmRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiYmkgYmktZXllLXNsYXNoXCI+PC9pPic7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEFuaW1hdGlvbiBkZSBsJ2ljw7RuZVxyXG4gICAgICB0b2dnbGVQYXNzd29yZEJ0bi5jbGFzc0xpc3QuYWRkKCdwdWxzZScpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0b2dnbGVQYXNzd29yZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdwdWxzZScpO1xyXG4gICAgICB9LCAzMDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEFqb3V0ZXIgdW5lIGFuaW1hdGlvbiBkJ2VycmV1ciBwZXJzb25uYWxpc8OpZSBwb3VyIGxlcyBjaGFtcHMgaW52YWxpZGVzXHJcbiAgY29uc3QgYWRkSW5wdXRFcnJvckFuaW1hdGlvbiA9IChpbnB1dCkgPT4ge1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW52YWxpZCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnc2hha2UtZXJyb3InKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UtZXJyb3InKTtcclxuICAgICAgfSwgNjAwKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgZm9ybUVsZW1lbnRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgYWRkSW5wdXRFcnJvckFuaW1hdGlvbihpbnB1dCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCIvLyBGb25jdGlvbm5hbGl0w6lzIEphdmFTY3JpcHQgcG91ciBsYSBiYXJyZSBkZSBuYXZpZ2F0aW9uXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBSw6lmw6lyZW5jZSBhdXggw6lsw6ltZW50cyBkZSBsYSBuYXZiYXJcclxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBuYXZiYXJUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLXRvZ2dsZScpO1xyXG4gICAgY29uc3QgbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItbWVudScpO1xyXG4gICAgY29uc3QgbmF2YmFyTWVudU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLW1lbnUtb3ZlcmxheScpO1xyXG4gICAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWl0ZW0nKTtcclxuICAgIFxyXG4gICAgLy8gR2VzdGlvbiBkdSBzY3JvbGwgcG91ciBsYSBuYXZiYXJcclxuICAgIGlmIChuYXZiYXIpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDUwKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEdlc3Rpb24gZHUgdG9nZ2xlIHBvdXIgbGUgbWVudVxyXG4gICAgaWYgKG5hdmJhclRvZ2dsZSAmJiBuYXZiYXJNZW51ICYmIG5hdmJhck1lbnVPdmVybGF5KSB7XHJcbiAgICAgICAgbmF2YmFyVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG5hdmJhclRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbmF2YmFyTWVudU92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBbmltZXIgbGVzIMOpbMOpbWVudHMgZHUgbWVudVxyXG4gICAgICAgICAgICBpZiAobmF2YmFyTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAgKyAoaW5kZXggKiA1MCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEJsb3F1ZXIgbGUgc2Nyb2xsIHF1YW5kIGxlIG1lbnUgZXN0IG91dmVydFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBGZXJtZXIgbGUgbWVudSBsb3JzIGQndW4gY2xpYyBzdXIgbCdvdmVybGF5XHJcbiAgICAgICAgbmF2YmFyTWVudU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbmF2YmFyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBuYXZiYXJNZW51T3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBGZXJtZXIgbGUgbWVudSBsb3JzIGQndW4gY2xpYyBzdXIgdW4gbGllblxyXG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJyk7XHJcbiAgICAgICAgbmF2TGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIG5hdmJhck1lbnVPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gTWV0dHJlIMOgIGpvdXIgbGUgbGllbiBhY3RpZiBlbiBmb25jdGlvbiBkZSBsYSBwYWdlXHJcbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJyk7XHJcbiAgICBcclxuICAgIG5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgaWYgKGxpbmsuaHJlZiA9PT0gY3VycmVudExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCIvLyBGb25jdGlvbm5hbGl0w6lzIEphdmFTY3JpcHQgcG91ciBsYSBnZXN0aW9uIGR1IHBsYW5uaW5nXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBSw6lmw6lyZW5jZXMgYXV4IMOpbMOpbWVudHMgRE9NXHJcbiAgICBjb25zdCBjYWxlbmRhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhci12aWV3Jyk7XHJcbiAgICBjb25zdCBjYWxlbmRhclRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyLXRpdGxlJyk7XHJcbiAgICBjb25zdCBwcmV2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyLW5hdi1idG4ucHJldicpO1xyXG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhci1uYXYtYnRuLm5leHQnKTtcclxuICAgIGNvbnN0IHRvZGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyLW5hdi1idG4udG9kYXknKTtcclxuICAgIGNvbnN0IGNhbGVuZGFyRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhci1kYXlzJyk7XHJcbiAgICBjb25zdCBwbGFubmluZ1RhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhbm5pbmctdGFiJyk7XHJcbiAgICBjb25zdCBwbGFubmluZ1ZpZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYW5uaW5nLXZpZXcnKTtcclxuICAgIGNvbnN0IGFkZEV2ZW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ldmVudC1idG4nKTtcclxuICAgIGNvbnN0IGV2ZW50TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXZlbnQtbW9kYWwnKTtcclxuICAgIGNvbnN0IGV2ZW50TW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ldmVudC1tb2RhbC1jbG9zZScpO1xyXG4gICAgY29uc3QgZXZlbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV2ZW50LWZvcm0nKTtcclxuICAgIFxyXG4gICAgLy8gVmFyaWFibGVzIGR1IGNhbGVuZHJpZXJcclxuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgY3VycmVudE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcclxuICAgIGxldCBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBcclxuICAgIC8vIE5vbXMgZGVzIG1vaXMgZXQgam91cnMgZW4gZnJhbsOnYWlzXHJcbiAgICBjb25zdCBtb250aHMgPSBbXHJcbiAgICAgICAgJ0phbnZpZXInLCAnRsOpdnJpZXInLCAnTWFycycsICdBdnJpbCcsICdNYWknLCAnSnVpbicsIFxyXG4gICAgICAgICdKdWlsbGV0JywgJ0Fvw7t0JywgJ1NlcHRlbWJyZScsICdPY3RvYnJlJywgJ05vdmVtYnJlJywgJ0TDqWNlbWJyZSdcclxuICAgIF07XHJcbiAgICBcclxuICAgIGNvbnN0IGRheXNPZldlZWsgPSBbJ0RpbWFuY2hlJywgJ0x1bmRpJywgJ01hcmRpJywgJ01lcmNyZWRpJywgJ0pldWRpJywgJ1ZlbmRyZWRpJywgJ1NhbWVkaSddO1xyXG4gICAgXHJcbiAgICAvLyBNb2NrIGRhdGEgcG91ciBsZXMgw6l2w6luZW1lbnRzICjDoCByZW1wbGFjZXIgcGFyIHVuIGFwcGVsIEFKQVgpXHJcbiAgICBjb25zdCBldmVudHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgdGl0bGU6ICdBbmltYXRpb24gUGlzY2luZScsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoLCAxMCwgMTQsIDApLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIDEwLCAxNiwgMCksXHJcbiAgICAgICAgICAgIHNlcnZpY2VJZDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgdGl0bGU6ICdTcGVjdGFjbGUgU29pcsOpZScsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoLCAxNSwgMjAsIDApLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIDE1LCAyMiwgMCksXHJcbiAgICAgICAgICAgIHNlcnZpY2VJZDogMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgdGl0bGU6ICdDb3VycyBkZSBEYW5zZScsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoLCAyMCwgMTAsIDApLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIDIwLCAxMiwgMCksXHJcbiAgICAgICAgICAgIHNlcnZpY2VJZDogM1xyXG4gICAgICAgIH1cclxuICAgIF07XHJcbiAgICBcclxuICAgIC8vIEluaXRpYWxpc2F0aW9uXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIHJlbmRlckNhbGVuZGFyKCk7XHJcbiAgICAgICAgc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIGluaXRUYWJzTmF2aWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBDb25maWd1cmF0aW9uIGRlcyDDqWNvdXRldXJzIGQnw6l2w6luZW1lbnRzXHJcbiAgICBmdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGlmIChwcmV2QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb1RvUHJldmlvdXNNb250aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChuZXh0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb1RvTmV4dE1vbnRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRvZGF5QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRvZGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Ub1RvZGF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGFkZEV2ZW50QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGFkZEV2ZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk5ld0V2ZW50TW9kYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoZXZlbnRNb2RhbENsb3NlKSB7XHJcbiAgICAgICAgICAgIGV2ZW50TW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRXZlbnRNb2RhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZlcm1lciBsYSBtb2RhbCBzaSBvbiBjbGlxdWUgZW4gZGVob3JzXHJcbiAgICAgICAgaWYgKGV2ZW50TW9kYWwpIHtcclxuICAgICAgICAgICAgZXZlbnRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZXZlbnRNb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlRXZlbnRNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gR2VzdGlvbiBkdSBmb3JtdWxhaXJlIGRlIGwnw6l2w6luZW1lbnRcclxuICAgICAgICBpZiAoZXZlbnRGb3JtKSB7XHJcbiAgICAgICAgICAgIGV2ZW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVFdmVudEZvcm1TdWJtaXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gTmF2aWdhdGlvbiBlbnRyZSBsZXMgb25nbGV0c1xyXG4gICAgZnVuY3Rpb24gaW5pdFRhYnNOYXZpZ2F0aW9uKCkge1xyXG4gICAgICAgIGlmIChwbGFubmluZ1RhYnMgJiYgcGxhbm5pbmdUYWJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcGxhbm5pbmdUYWJzLmZvckVhY2godGFiID0+IHtcclxuICAgICAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVubGV2ZXIgbGEgY2xhc3NlIGFjdGl2ZSBkZSB0b3VzIGxlcyBvbmdsZXRzXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbm5pbmdUYWJzLmZvckVhY2godCA9PiB0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBBam91dGVyIGxhIGNsYXNzZSBhY3RpdmUgw6AgbCdvbmdsZXQgY2xpcXXDqVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWZmaWNoZXIgbGEgdnVlIGNvcnJlc3BvbmRhbnRlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgdmlld0lkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbm5pbmdWaWV3cy5mb3JFYWNoKHZpZXcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmlldy5pZCA9PT0gdmlld0lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBZmZpY2hhZ2UgZHUgY2FsZW5kcmllclxyXG4gICAgZnVuY3Rpb24gcmVuZGVyQ2FsZW5kYXIoKSB7XHJcbiAgICAgICAgaWYgKCFjYWxlbmRhckRheXMgfHwgIWNhbGVuZGFyVGl0bGUpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBNaXNlIMOgIGpvdXIgZHUgdGl0cmUgZHUgY2FsZW5kcmllciAobW9pcyBldCBhbm7DqWUpXHJcbiAgICAgICAgY2FsZW5kYXJUaXRsZS50ZXh0Q29udGVudCA9IGAke21vbnRoc1tjdXJyZW50TW9udGhdfSAke2N1cnJlbnRZZWFyfWA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVmlkZXIgbGUgY29udGVuZXVyIGRlcyBqb3Vyc1xyXG4gICAgICAgIGNhbGVuZGFyRGF5cy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBcclxuICAgICAgICAvLyBQcmVtaWVyIGpvdXIgZHUgbW9pc1xyXG4gICAgICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIDEpO1xyXG4gICAgICAgIC8vIERlcm5pZXIgam91ciBkdSBtb2lzXHJcbiAgICAgICAgY29uc3QgbGFzdERheU9mTW9udGggPSBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoICsgMSwgMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTm9tYnJlIGRlIGpvdXJzIGRhbnMgbGUgbW9pc1xyXG4gICAgICAgIGNvbnN0IGRheXNJbk1vbnRoID0gbGFzdERheU9mTW9udGguZ2V0RGF0ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEpvdXIgZGUgbGEgc2VtYWluZSBkdSBwcmVtaWVyIGpvdXIgKDAtNilcclxuICAgICAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IGZpcnN0RGF5T2ZNb250aC5nZXREYXkoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDYWxjdWwgZHUgbm9tYnJlIHRvdGFsIGRlIGNlbGx1bGVzICh5IGNvbXByaXMgbGVzIGpvdXJzIGR1IG1vaXMgcHLDqWPDqWRlbnQvc3VpdmFudClcclxuICAgICAgICBjb25zdCB0b3RhbENlbGxzID0gTWF0aC5jZWlsKChkYXlzSW5Nb250aCArIGZpcnN0RGF5T2ZXZWVrKSAvIDcpICogNztcclxuICAgICAgICBcclxuICAgICAgICAvLyBEYXRlIGR1IGpvdXJcclxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSm91cnMgZHUgbW9pcyBwcsOpY8OpZGVudFxyXG4gICAgICAgIGNvbnN0IHByZXZNb250aExhc3REYXkgPSBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoLCAwKS5nZXREYXRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gR8OpbsOpcmF0aW9uIGRlcyBjZWxsdWxlcyBkdSBjYWxlbmRyaWVyXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbENlbGxzOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGF5Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkYXlDZWxsLmNsYXNzTmFtZSA9ICdjYWxlbmRhci1kYXknO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY2VsbE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjZWxsTnVtYmVyLmNsYXNzTmFtZSA9ICdkYXktbnVtYmVyJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBldmVudExpc3QuY2xhc3NOYW1lID0gJ2V2ZW50LWxpc3QnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSW5kZXggZHUgam91ciDDoCBhZmZpY2hlclxyXG4gICAgICAgICAgICBsZXQgZGF5SW5kZXggPSBpIC0gZmlyc3REYXlPZldlZWsgKyAxO1xyXG4gICAgICAgICAgICBsZXQgZGF0ZVRvRGlzcGxheTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEpvdXJzIGR1IG1vaXMgcHLDqWPDqWRlbnRcclxuICAgICAgICAgICAgaWYgKGRheUluZGV4IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGRheUluZGV4ID0gcHJldk1vbnRoTGFzdERheSArIGRheUluZGV4O1xyXG4gICAgICAgICAgICAgICAgY2VsbE51bWJlci50ZXh0Q29udGVudCA9IGRheUluZGV4O1xyXG4gICAgICAgICAgICAgICAgZGF5Q2VsbC5jbGFzc0xpc3QuYWRkKCdvdGhlci1tb250aCcpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVRvRGlzcGxheSA9IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGggLSAxLCBkYXlJbmRleCk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIC8vIEpvdXJzIGR1IG1vaXMgc3VpdmFudFxyXG4gICAgICAgICAgICBlbHNlIGlmIChkYXlJbmRleCA+IGRheXNJbk1vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlJbmRleCA9IGRheUluZGV4IC0gZGF5c0luTW9udGg7XHJcbiAgICAgICAgICAgICAgICBjZWxsTnVtYmVyLnRleHRDb250ZW50ID0gZGF5SW5kZXg7XHJcbiAgICAgICAgICAgICAgICBkYXlDZWxsLmNsYXNzTGlzdC5hZGQoJ290aGVyLW1vbnRoJyk7XHJcbiAgICAgICAgICAgICAgICBkYXRlVG9EaXNwbGF5ID0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCArIDEsIGRheUluZGV4KTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgLy8gSm91cnMgZHUgbW9pcyBjb3VyYW50XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2VsbE51bWJlci50ZXh0Q29udGVudCA9IGRheUluZGV4O1xyXG4gICAgICAgICAgICAgICAgZGF0ZVRvRGlzcGxheSA9IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIGRheUluZGV4KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gTWFycXVlciBsZSBqb3VyIGFjdHVlbFxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRZZWFyID09PSB0b2RheS5nZXRGdWxsWWVhcigpICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNb250aCA9PT0gdG9kYXkuZ2V0TW9udGgoKSAmJiBcclxuICAgICAgICAgICAgICAgICAgICBkYXlJbmRleCA9PT0gdG9kYXkuZ2V0RGF0ZSgpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXlDZWxsLmNsYXNzTGlzdC5hZGQoJ3RvZGF5Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFqb3V0ZXIgbGVzIMOpdsOpbmVtZW50cyDDoCBjZXR0ZSBkYXRlXHJcbiAgICAgICAgICAgIGFkZEV2ZW50c1RvQ2VsbChldmVudExpc3QsIGRhdGVUb0Rpc3BsYXkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQWpvdXRlciBsYSBwb3NzaWJpbGl0w6kgZGUgY3LDqWVyIHVuIMOpdsOpbmVtZW50IGVuIGNsaXF1YW50IHN1ciB1bmUgY2VsbHVsZVxyXG4gICAgICAgICAgICBkYXlDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuTmV3RXZlbnRNb2RhbChkYXRlVG9EaXNwbGF5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkYXlDZWxsLmFwcGVuZENoaWxkKGNlbGxOdW1iZXIpO1xyXG4gICAgICAgICAgICBkYXlDZWxsLmFwcGVuZENoaWxkKGV2ZW50TGlzdCk7XHJcbiAgICAgICAgICAgIGNhbGVuZGFyRGF5cy5hcHBlbmRDaGlsZChkYXlDZWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFqb3V0ZXIgbGVzIMOpdsOpbmVtZW50cyDDoCB1bmUgY2VsbHVsZVxyXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRzVG9DZWxsKGNvbnRhaW5lciwgZGF0ZSkge1xyXG4gICAgICAgIGlmICghY29udGFpbmVyIHx8ICFkYXRlKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRmlsdHJlciBsZXMgw6l2w6luZW1lbnRzIGR1IGpvdXJcclxuICAgICAgICBjb25zdCBkYXlFdmVudHMgPSBldmVudHMuZmlsdGVyKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnREYXRlID0gbmV3IERhdGUoZXZlbnQuc3RhcnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgZXZlbnREYXRlLmdldERhdGUoKSA9PT0gZGF0ZS5nZXREYXRlKCkgJiYgXHJcbiAgICAgICAgICAgICAgICBldmVudERhdGUuZ2V0TW9udGgoKSA9PT0gZGF0ZS5nZXRNb250aCgpICYmIFxyXG4gICAgICAgICAgICAgICAgZXZlbnREYXRlLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFqb3V0ZXIgY2hhcXVlIMOpdsOpbmVtZW50IGF1IGNvbnRlbmV1clxyXG4gICAgICAgIGRheUV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGV2ZW50SXRlbS5jbGFzc05hbWUgPSBgZXZlbnQtaXRlbSBzZXJ2aWNlLSR7ZXZlbnQuc2VydmljZUlkfWA7XHJcbiAgICAgICAgICAgIGV2ZW50SXRlbS50ZXh0Q29udGVudCA9IGV2ZW50LnRpdGxlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRm9ybWF0ZXIgbCdoZXVyZSBkZSBkw6lidXQgZXQgZGUgZmluXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IGZvcm1hdFRpbWUoZXZlbnQuc3RhcnQpO1xyXG4gICAgICAgICAgICBjb25zdCBlbmRUaW1lID0gZm9ybWF0VGltZShldmVudC5lbmQpO1xyXG4gICAgICAgICAgICBldmVudEl0ZW0uc2V0QXR0cmlidXRlKCd0aXRsZScsIGAke2V2ZW50LnRpdGxlfSAoJHtzdGFydFRpbWV9IC0gJHtlbmRUaW1lfSlgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEVtcMOqY2hlciBsYSBwcm9wYWdhdGlvbiBkdSBjbGljIHBvdXIgbmUgcGFzIGTDqWNsZW5jaGVyIGxlIGNsaWMgZGUgbGEgY2VsbHVsZVxyXG4gICAgICAgICAgICBldmVudEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgb3BlbkV2ZW50TW9kYWwoZXZlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChldmVudEl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBGb3JtYXRlciBsJ2hldXJlIGF1IGZvcm1hdCAyNGggKEhIOk1NKVxyXG4gICAgZnVuY3Rpb24gZm9ybWF0VGltZShkYXRlKSB7XHJcbiAgICAgICAgaWYgKCFkYXRlKSByZXR1cm4gJyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9YDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gTmF2aWdhdGlvbiB2ZXJzIGxlIG1vaXMgcHLDqWPDqWRlbnRcclxuICAgIGZ1bmN0aW9uIGdvVG9QcmV2aW91c01vbnRoKCkge1xyXG4gICAgICAgIGN1cnJlbnRNb250aC0tO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjdXJyZW50TW9udGggPCAwKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRNb250aCA9IDExO1xyXG4gICAgICAgICAgICBjdXJyZW50WWVhci0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZW5kZXJDYWxlbmRhcigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBOYXZpZ2F0aW9uIHZlcnMgbGUgbW9pcyBzdWl2YW50XHJcbiAgICBmdW5jdGlvbiBnb1RvTmV4dE1vbnRoKCkge1xyXG4gICAgICAgIGN1cnJlbnRNb250aCsrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjdXJyZW50TW9udGggPiAxMSkge1xyXG4gICAgICAgICAgICBjdXJyZW50TW9udGggPSAwO1xyXG4gICAgICAgICAgICBjdXJyZW50WWVhcisrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZW5kZXJDYWxlbmRhcigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBbGxlciBhdSBtb2lzIGFjdHVlbFxyXG4gICAgZnVuY3Rpb24gZ29Ub1RvZGF5KCkge1xyXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjdXJyZW50TW9udGggPSB0b2RheS5nZXRNb250aCgpO1xyXG4gICAgICAgIGN1cnJlbnRZZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBcclxuICAgICAgICByZW5kZXJDYWxlbmRhcigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBPdXZyaXIgbGEgbW9kYWwgcG91ciB1biBub3V2ZWwgw6l2w6luZW1lbnRcclxuICAgIGZ1bmN0aW9uIG9wZW5OZXdFdmVudE1vZGFsKGRhdGUpIHtcclxuICAgICAgICBpZiAoIWV2ZW50TW9kYWwpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBSw6lpbml0aWFsaXNlciBsZSBmb3JtdWxhaXJlXHJcbiAgICAgICAgaWYgKGV2ZW50Rm9ybSkge1xyXG4gICAgICAgICAgICBldmVudEZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNpIHVuZSBkYXRlIGVzdCBzcMOpY2lmacOpZSwgZMOpZmluaXIgbGVzIGNoYW1wcyBkZSBkYXRlIGV0IGQnaGV1cmVcclxuICAgICAgICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBldmVudEZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJldmVudC1kYXRlXCJdJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IGRhdGVTdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hhbmdlciBsZSB0aXRyZSBkZSBsYSBtb2RhbFxyXG4gICAgICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBldmVudE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5ldmVudC1tb2RhbC10aXRsZScpO1xyXG4gICAgICAgIGlmIChtb2RhbFRpdGxlKSB7XHJcbiAgICAgICAgICAgIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSAnTm91dmVsIMOpdsOpbmVtZW50JztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTWFzcXVlciBsZSBib3V0b24gZGUgc3VwcHJlc3Npb24gcydpbCBleGlzdGVcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBldmVudE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5ldmVudC1tb2RhbC1idG4uZGVsZXRlJyk7XHJcbiAgICAgICAgaWYgKGRlbGV0ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWZmaWNoZXIgbGEgbW9kYWxcclxuICAgICAgICBldmVudE1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gT3V2cmlyIGxhIG1vZGFsIHBvdXIgdW4gw6l2w6luZW1lbnQgZXhpc3RhbnRcclxuICAgIGZ1bmN0aW9uIG9wZW5FdmVudE1vZGFsKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCFldmVudE1vZGFsIHx8ICFldmVudCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJlbXBsaXIgbGUgZm9ybXVsYWlyZSBhdmVjIGxlcyBkb25uw6llcyBkZSBsJ8OpdsOpbmVtZW50XHJcbiAgICAgICAgaWYgKGV2ZW50Rm9ybSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZXZlbnRGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZXZlbnQtdGl0bGVcIl0nKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZXZlbnRGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZXZlbnQtZGF0ZVwiXScpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWVJbnB1dCA9IGV2ZW50Rm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImV2ZW50LXN0YXJ0LXRpbWVcIl0nKTtcclxuICAgICAgICAgICAgY29uc3QgZW5kVGltZUlucHV0ID0gZXZlbnRGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZXZlbnQtZW5kLXRpbWVcIl0nKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VydmljZUlucHV0ID0gZXZlbnRGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZXZlbnQtc2VydmljZVwiXScpO1xyXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZXZlbnRGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZXZlbnQtZGVzY3JpcHRpb25cIl0nKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aXRsZUlucHV0KSB0aXRsZUlucHV0LnZhbHVlID0gZXZlbnQudGl0bGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZGF0ZUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gZXZlbnQuc3RhcnQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gZGF0ZVN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHN0YXJ0VGltZUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IGV2ZW50LnN0YXJ0LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IGV2ZW50LnN0YXJ0LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWVJbnB1dC52YWx1ZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGVuZFRpbWVJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBldmVudC5lbmQuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gZXZlbnQuZW5kLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgICAgICAgICBlbmRUaW1lSW5wdXQudmFsdWUgPSBgJHtob3Vyc306JHttaW51dGVzfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlSW5wdXQpIHNlcnZpY2VJbnB1dC52YWx1ZSA9IGV2ZW50LnNlcnZpY2VJZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbklucHV0ICYmIGV2ZW50LmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZXZlbnQuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFN0b2NrZXIgbCdJRCBkZSBsJ8OpdsOpbmVtZW50IHBvdXIgbGEgbWlzZSDDoCBqb3VyXHJcbiAgICAgICAgICAgIGV2ZW50Rm9ybS5kYXRhc2V0LmV2ZW50SWQgPSBldmVudC5pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hhbmdlciBsZSB0aXRyZSBkZSBsYSBtb2RhbFxyXG4gICAgICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBldmVudE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5ldmVudC1tb2RhbC10aXRsZScpO1xyXG4gICAgICAgIGlmIChtb2RhbFRpdGxlKSB7XHJcbiAgICAgICAgICAgIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSAnTW9kaWZpZXIgbFxcJ8OpdsOpbmVtZW50JztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWZmaWNoZXIgbGUgYm91dG9uIGRlIHN1cHByZXNzaW9uXHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZXZlbnRNb2RhbC5xdWVyeVNlbGVjdG9yKCcuZXZlbnQtbW9kYWwtYnRuLmRlbGV0ZScpO1xyXG4gICAgICAgIGlmIChkZWxldGVCdXR0b24pIHtcclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFqb3V0ZXIgdW4gw6l2w6luZW1lbnQgcG91ciBzdXBwcmltZXJcclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUV2ZW50KGV2ZW50LmlkKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWZmaWNoZXIgbGEgbW9kYWxcclxuICAgICAgICBldmVudE1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRmVybWVyIGxhIG1vZGFsXHJcbiAgICBmdW5jdGlvbiBjbG9zZUV2ZW50TW9kYWwoKSB7XHJcbiAgICAgICAgaWYgKCFldmVudE1vZGFsKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgZXZlbnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUsOpaW5pdGlhbGlzZXIgbGUgZm9ybXVsYWlyZVxyXG4gICAgICAgIGlmIChldmVudEZvcm0pIHtcclxuICAgICAgICAgICAgZXZlbnRGb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudEZvcm0uZGF0YXNldC5ldmVudElkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gR8OpcmVyIGxhIHNvdW1pc3Npb24gZHUgZm9ybXVsYWlyZSBkJ8OpdsOpbmVtZW50XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVFdmVudEZvcm1TdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBSw6ljdXDDqXJlciBsZXMgZG9ubsOpZXMgZHUgZm9ybXVsYWlyZVxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50Rm9ybSk7XHJcbiAgICAgICAgY29uc3QgZXZlbnREYXRhID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogZm9ybURhdGEuZ2V0KCdldmVudC10aXRsZScpLFxyXG4gICAgICAgICAgICBkYXRlOiBmb3JtRGF0YS5nZXQoJ2V2ZW50LWRhdGUnKSxcclxuICAgICAgICAgICAgc3RhcnRUaW1lOiBmb3JtRGF0YS5nZXQoJ2V2ZW50LXN0YXJ0LXRpbWUnKSxcclxuICAgICAgICAgICAgZW5kVGltZTogZm9ybURhdGEuZ2V0KCdldmVudC1lbmQtdGltZScpLFxyXG4gICAgICAgICAgICBzZXJ2aWNlSWQ6IHBhcnNlSW50KGZvcm1EYXRhLmdldCgnZXZlbnQtc2VydmljZScpKSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZvcm1EYXRhLmdldCgnZXZlbnQtZGVzY3JpcHRpb24nKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVmFsaWRhdGlvbiBkZSBiYXNlXHJcbiAgICAgICAgaWYgKCFldmVudERhdGEudGl0bGUgfHwgIWV2ZW50RGF0YS5kYXRlIHx8ICFldmVudERhdGEuc3RhcnRUaW1lIHx8ICFldmVudERhdGEuZW5kVGltZSkge1xyXG4gICAgICAgICAgICBhbGVydCgnVmV1aWxsZXogcmVtcGxpciB0b3VzIGxlcyBjaGFtcHMgb2JsaWdhdG9pcmVzLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENyw6lhdGlvbiBkZXMgb2JqZXRzIERhdGVcclxuICAgICAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBldmVudERhdGEuZGF0ZS5zcGxpdCgnLScpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IFtzdGFydEhvdXJzLCBzdGFydE1pbnV0ZXNdID0gZXZlbnREYXRhLnN0YXJ0VGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IFtlbmRIb3VycywgZW5kTWludXRlc10gPSBldmVudERhdGEuZW5kVGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5LCBzdGFydEhvdXJzLCBzdGFydE1pbnV0ZXMpO1xyXG4gICAgICAgIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSwgZW5kSG91cnMsIGVuZE1pbnV0ZXMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFbDqXJpZmllciBxdWUgbGEgZGF0ZSBkZSBmaW4gZXN0IGFwcsOocyBsYSBkYXRlIGRlIGTDqWJ1dFxyXG4gICAgICAgIGlmIChlbmREYXRlIDw9IHN0YXJ0RGF0ZSkge1xyXG4gICAgICAgICAgICBhbGVydCgnTFxcJ2hldXJlIGRlIGZpbiBkb2l0IMOqdHJlIGFwcsOocyBsXFwnaGV1cmUgZGUgZMOpYnV0LicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNpIGMnZXN0IHVuZSBtaXNlIMOgIGpvdXIgZCfDqXbDqW5lbWVudCBleGlzdGFudFxyXG4gICAgICAgIGNvbnN0IGV2ZW50SWQgPSBldmVudEZvcm0uZGF0YXNldC5ldmVudElkO1xyXG4gICAgICAgIGlmIChldmVudElkKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUV2ZW50KHBhcnNlSW50KGV2ZW50SWQpLCB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZXZlbnREYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgICAgIGVuZDogZW5kRGF0ZSxcclxuICAgICAgICAgICAgICAgIHNlcnZpY2VJZDogZXZlbnREYXRhLnNlcnZpY2VJZCxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBldmVudERhdGEuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU2lub24sIGNyw6llciB1biBub3V2ZWwgw6l2w6luZW1lbnRcclxuICAgICAgICAgICAgY3JlYXRlRXZlbnQoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGV2ZW50cy5sZW5ndGggKyAxLCAvLyBTaW1wbGUgSUQgcG91ciBsYSBkw6ltb1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGV2ZW50RGF0YS50aXRsZSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBzdGFydERhdGUsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IGVuZERhdGUsXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlSWQ6IGV2ZW50RGF0YS5zZXJ2aWNlSWQsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnREYXRhLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBGZXJtZXIgbGEgbW9kYWwgZXQgbWV0dHJlIMOgIGpvdXIgbGUgY2FsZW5kcmllclxyXG4gICAgICAgIGNsb3NlRXZlbnRNb2RhbCgpO1xyXG4gICAgICAgIHJlbmRlckNhbGVuZGFyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIENyw6llciB1biBub3V2ZWwgw6l2w6luZW1lbnRcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KGV2ZW50RGF0YSkge1xyXG4gICAgICAgIC8vIERhbnMgdW4gZW52aXJvbm5lbWVudCByw6llbCwgY2Ugc2VyYWl0IHVuIGFwcGVsIEFQSVxyXG4gICAgICAgIGV2ZW50cy5wdXNoKGV2ZW50RGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ8OJdsOpbmVtZW50IGNyw6nDqTonLCBldmVudERhdGEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBNZXR0cmUgw6Agam91ciB1biDDqXbDqW5lbWVudFxyXG4gICAgZnVuY3Rpb24gdXBkYXRlRXZlbnQoZXZlbnRJZCwgbmV3RGF0YSkge1xyXG4gICAgICAgIC8vIERhbnMgdW4gZW52aXJvbm5lbWVudCByw6llbCwgY2Ugc2VyYWl0IHVuIGFwcGVsIEFQSVxyXG4gICAgICAgIGNvbnN0IGV2ZW50SW5kZXggPSBldmVudHMuZmluZEluZGV4KGUgPT4gZS5pZCA9PT0gZXZlbnRJZCk7XHJcbiAgICAgICAgaWYgKGV2ZW50SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGV2ZW50c1tldmVudEluZGV4XSA9IHsgLi4uZXZlbnRzW2V2ZW50SW5kZXhdLCAuLi5uZXdEYXRhIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfDiXbDqW5lbWVudCBtaXMgw6Agam91cjonLCBldmVudHNbZXZlbnRJbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gU3VwcHJpbWVyIHVuIMOpdsOpbmVtZW50XHJcbiAgICBmdW5jdGlvbiBkZWxldGVFdmVudChldmVudElkKSB7XHJcbiAgICAgICAgLy8gRGFucyB1biBlbnZpcm9ubmVtZW50IHLDqWVsLCBjZSBzZXJhaXQgdW4gYXBwZWwgQVBJXHJcbiAgICAgICAgY29uc3QgY29uZmlybURlbGV0ZSA9IGNvbmZpcm0oJ8OKdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIHN1cHByaW1lciBjZXQgw6l2w6luZW1lbnQgPycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjb25maXJtRGVsZXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50SW5kZXggPSBldmVudHMuZmluZEluZGV4KGUgPT4gZS5pZCA9PT0gZXZlbnRJZCk7XHJcbiAgICAgICAgICAgIGlmIChldmVudEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLnNwbGljZShldmVudEluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfDiXbDqW5lbWVudCBzdXBwcmltw6ksIElEOicsIGV2ZW50SWQpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBGZXJtZXIgbGEgbW9kYWwgZXQgbWV0dHJlIMOgIGpvdXIgbGUgY2FsZW5kcmllclxyXG4gICAgICAgICAgICAgICAgY2xvc2VFdmVudE1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJDYWxlbmRhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBJbml0aWFsaXNlciBsJ2FwcGxpY2F0aW9uXHJcbiAgICBpbml0KCk7XHJcbn0pO1xyXG4iLCIvKipcclxuICogU2NyaXB0IHBvdXIgbGVzIGFuaW1hdGlvbnMgZXQgbGEgcHJvZ3Jlc3Npb24gcGFyIMOpdGFwZXMgZHUgZm9ybXVsYWlyZSBkJ2luc2NyaXB0aW9uXHJcbiAqL1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIC8vIMOJbMOpbWVudHMgZHUgZm9ybXVsYWlyZVxyXG4gIGNvbnN0IHJlZ2lzdGVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdpc3Rlci1jYXJkJyk7XHJcbiAgY29uc3QgZm9ybUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29udHJvbCcpO1xyXG4gIGNvbnN0IGZvcm1TdGVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWdpc3RyYXRpb24tc3RlcCcpO1xyXG4gIGNvbnN0IHByb2dyZXNzU3RlcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZ3Jlc3Mtc3RlcCcpO1xyXG4gIGNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzLWJhci1maWxsJyk7XHJcbiAgY29uc3QgbmV4dEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLW5leHQnKTtcclxuICBjb25zdCBwcmV2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcHJldicpO1xyXG4gIFxyXG4gIGxldCBjdXJyZW50U3RlcCA9IDA7XHJcbiAgY29uc3QgdG90YWxTdGVwcyA9IGZvcm1TdGVwcy5sZW5ndGg7XHJcbiAgXHJcbiAgLy8gQW5pbWF0aW9uIGF1IGNoYXJnZW1lbnQgZGVzIMOpbMOpbWVudHMgZHUgZm9ybXVsYWlyZVxyXG4gIGZvcm1FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgxMHB4KSc7XHJcbiAgICBcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuNXMgZWFzZSc7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwKSc7XHJcbiAgICB9LCAxMDAgKyAoaW5kZXggKiAxMDApKTtcclxuICB9KTtcclxuICBcclxuICAvLyBBbmltYXRpb24gYXUgc3Vydm9sIGRlIGxhIGNhcnRlXHJcbiAgaWYgKHJlZ2lzdGVyQ2FyZCkge1xyXG4gICAgcmVnaXN0ZXJDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlY3QgPSByZWdpc3RlckNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLSByZWN0LnRvcDtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGNlbnRlclggPSByZWN0LndpZHRoIC8gMjtcclxuICAgICAgY29uc3QgY2VudGVyWSA9IHJlY3QuaGVpZ2h0IC8gMjtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHJvdGF0ZVggPSAoeSAtIGNlbnRlclkpIC8gNjA7XHJcbiAgICAgIGNvbnN0IHJvdGF0ZVkgPSAoY2VudGVyWCAtIHgpIC8gNjA7XHJcbiAgICAgIFxyXG4gICAgICByZWdpc3RlckNhcmQuc3R5bGUudHJhbnNmb3JtID0gYHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWCgke3JvdGF0ZVh9ZGVnKSByb3RhdGVZKCR7cm90YXRlWX1kZWcpIHNjYWxlM2QoMS4wMSwgMS4wMSwgMS4wMSlgO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJlZ2lzdGVyQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICByZWdpc3RlckNhcmQuc3R5bGUudHJhbnNmb3JtID0gJ3BlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDApIHNjYWxlM2QoMSwgMSwgMSknO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEluaXRpYWxpc2VyIGwnYWZmaWNoYWdlIGRlcyDDqXRhcGVzIGV0IGRlIGxhIHByb2dyZXNzaW9uXHJcbiAgZnVuY3Rpb24gdXBkYXRlRm9ybVN0ZXBzKCkge1xyXG4gICAgLy8gTWV0dHJlIMOgIGpvdXIgbGVzIMOpdGFwZXMgZHUgZm9ybXVsYWlyZVxyXG4gICAgZm9ybVN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XHJcbiAgICAgIHN0ZXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGlmIChpbmRleCA9PT0gY3VycmVudFN0ZXApIHtcclxuICAgICAgICBzdGVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy8gTWV0dHJlIMOgIGpvdXIgbGVzIGluZGljYXRldXJzIGQnw6l0YXBlXHJcbiAgICBwcm9ncmVzc1N0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XHJcbiAgICAgIHN0ZXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJywgJ2NvbXBsZXRlZCcpO1xyXG4gICAgICBcclxuICAgICAgaWYgKGluZGV4IDwgY3VycmVudFN0ZXApIHtcclxuICAgICAgICBzdGVwLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xyXG4gICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBjdXJyZW50U3RlcCkge1xyXG4gICAgICAgIHN0ZXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyBNZXR0cmUgw6Agam91ciBsYSBiYXJyZSBkZSBwcm9ncmVzc2lvblxyXG4gICAgaWYgKHByb2dyZXNzQmFyKSB7XHJcbiAgICAgIGNvbnN0IHByb2dyZXNzUGVyY2VudGFnZSA9IChjdXJyZW50U3RlcCAvICh0b3RhbFN0ZXBzIC0gMSkpICogMTAwO1xyXG4gICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGAke3Byb2dyZXNzUGVyY2VudGFnZX0lYDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gUGFzc2VyIMOgIGwnw6l0YXBlIHN1aXZhbnRlXHJcbiAgZnVuY3Rpb24gbmV4dFN0ZXAoKSB7XHJcbiAgICAvLyBWw6lyaWZpZXIgcXVlIHRvdXMgbGVzIGNoYW1wcyByZXF1aXMgZGUgbCfDqXRhcGUgYWN0dWVsbGUgc29udCByZW1wbGlzXHJcbiAgICBjb25zdCBjdXJyZW50SW5wdXRzID0gZm9ybVN0ZXBzW2N1cnJlbnRTdGVwXS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtyZXF1aXJlZF0sIHNlbGVjdFtyZXF1aXJlZF0sIHRleHRhcmVhW3JlcXVpcmVkXScpO1xyXG4gICAgY29uc3QgYWxsVmFsaWQgPSBBcnJheS5mcm9tKGN1cnJlbnRJbnB1dHMpLmV2ZXJ5KGlucHV0ID0+IGlucHV0LmNoZWNrVmFsaWRpdHkoKSk7XHJcbiAgICBcclxuICAgIGlmICghYWxsVmFsaWQpIHtcclxuICAgICAgLy8gQWZmaWNoZXIgbGVzIGVycmV1cnMgZGUgdmFsaWRhdGlvblxyXG4gICAgICBjdXJyZW50SW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdzaGFrZS1lcnJvcicpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWtlLWVycm9yJyk7XHJcbiAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGN1cnJlbnRTdGVwIDwgdG90YWxTdGVwcyAtIDEpIHtcclxuICAgICAgY3VycmVudFN0ZXArKztcclxuICAgICAgdXBkYXRlRm9ybVN0ZXBzKCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBBbmltYXRpb24gZGUgdHJhbnNpdGlvblxyXG4gICAgICBmb3JtU3RlcHNbY3VycmVudFN0ZXBdLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgIGZvcm1TdGVwc1tjdXJyZW50U3RlcF0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMjBweCknO1xyXG4gICAgICBcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZm9ybVN0ZXBzW2N1cnJlbnRTdGVwXS5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCAwLjRzIGVhc2UnO1xyXG4gICAgICAgIGZvcm1TdGVwc1tjdXJyZW50U3RlcF0uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICBmb3JtU3RlcHNbY3VycmVudFN0ZXBdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcclxuICAgICAgfSwgNTApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBSZXZlbmlyIMOgIGwnw6l0YXBlIHByw6ljw6lkZW50ZVxyXG4gIGZ1bmN0aW9uIHByZXZTdGVwKCkge1xyXG4gICAgaWYgKGN1cnJlbnRTdGVwID4gMCkge1xyXG4gICAgICBjdXJyZW50U3RlcC0tO1xyXG4gICAgICB1cGRhdGVGb3JtU3RlcHMoKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFuaW1hdGlvbiBkZSB0cmFuc2l0aW9uXHJcbiAgICAgIGZvcm1TdGVwc1tjdXJyZW50U3RlcF0uc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgZm9ybVN0ZXBzW2N1cnJlbnRTdGVwXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMjBweCknO1xyXG4gICAgICBcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZm9ybVN0ZXBzW2N1cnJlbnRTdGVwXS5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCAwLjRzIGVhc2UnO1xyXG4gICAgICAgIGZvcm1TdGVwc1tjdXJyZW50U3RlcF0uc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICBmb3JtU3RlcHNbY3VycmVudFN0ZXBdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJztcclxuICAgICAgfSwgNTApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBBam91dGVyIGxlcyDDqWNvdXRldXJzIGQnw6l2w6luZW1lbnRzIGF1eCBib3V0b25zXHJcbiAgbmV4dEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFN0ZXApO1xyXG4gICAgXHJcbiAgICAvLyBBam91dGVyIHVuIGVmZmV0IGQnb25kdWxhdGlvbiBhdSBjbGljXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKCdyaXBwbGUnKTtcclxuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHJpcHBsZSk7XHJcbiAgICAgIFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByaXBwbGUucmVtb3ZlKCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgcHJldkJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldlN0ZXApO1xyXG4gIH0pO1xyXG4gIFxyXG4gIC8vIEfDqXJlciBsYSBmb3JjZSBkdSBtb3QgZGUgcGFzc2VcclxuICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XHJcbiAgY29uc3Qgc3RyZW5ndGhNZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJlbmd0aC1tZXRlci1maWxsJyk7XHJcbiAgY29uc3Qgc3RyZW5ndGhUZXh0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdHJlbmd0aC10ZXh0IHNwYW4nKTtcclxuICBcclxuICBpZiAocGFzc3dvcmRJbnB1dCAmJiBzdHJlbmd0aE1ldGVyKSB7XHJcbiAgICBwYXNzd29yZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHBhc3N3b3JkSW5wdXQudmFsdWU7XHJcbiAgICAgIGxldCBzdHJlbmd0aCA9IDA7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDcml0w6hyZXMgZGUgZm9yY2UgZHUgbW90IGRlIHBhc3NlXHJcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPj0gOCkgc3RyZW5ndGggKz0gMTtcclxuICAgICAgaWYgKC9bQS1aXS8udGVzdCh2YWx1ZSkpIHN0cmVuZ3RoICs9IDE7XHJcbiAgICAgIGlmICgvWzAtOV0vLnRlc3QodmFsdWUpKSBzdHJlbmd0aCArPSAxO1xyXG4gICAgICBpZiAoL1teQS1aYS16MC05XS8udGVzdCh2YWx1ZSkpIHN0cmVuZ3RoICs9IDE7XHJcbiAgICAgIFxyXG4gICAgICAvLyBNZXR0cmUgw6Agam91ciBsJ2FmZmljaGFnZSBkZSBsYSBmb3JjZVxyXG4gICAgICBzdHJlbmd0aE1ldGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3dlYWsnLCAnbWVkaXVtJywgJ3N0cm9uZycpO1xyXG4gICAgICBzdHJlbmd0aFRleHRzLmZvckVhY2godGV4dCA9PiB0ZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScsICd3ZWFrJywgJ21lZGl1bScsICdzdHJvbmcnKSk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgc3RyZW5ndGhNZXRlci5zdHlsZS53aWR0aCA9ICcwJztcclxuICAgICAgfSBlbHNlIGlmIChzdHJlbmd0aCA8PSAyKSB7XHJcbiAgICAgICAgc3RyZW5ndGhNZXRlci5jbGFzc0xpc3QuYWRkKCd3ZWFrJyk7XHJcbiAgICAgICAgc3RyZW5ndGhNZXRlci5zdHlsZS53aWR0aCA9ICczMyUnO1xyXG4gICAgICAgIHN0cmVuZ3RoVGV4dHNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJywgJ3dlYWsnKTtcclxuICAgICAgfSBlbHNlIGlmIChzdHJlbmd0aCA9PT0gMykge1xyXG4gICAgICAgIHN0cmVuZ3RoTWV0ZXIuY2xhc3NMaXN0LmFkZCgnbWVkaXVtJyk7XHJcbiAgICAgICAgc3RyZW5ndGhNZXRlci5zdHlsZS53aWR0aCA9ICc2NiUnO1xyXG4gICAgICAgIHN0cmVuZ3RoVGV4dHNbMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJywgJ21lZGl1bScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0cmVuZ3RoTWV0ZXIuY2xhc3NMaXN0LmFkZCgnc3Ryb25nJyk7XHJcbiAgICAgICAgc3RyZW5ndGhNZXRlci5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICBzdHJlbmd0aFRleHRzWzJdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScsICdzdHJvbmcnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEFmZmljaGVyL21hc3F1ZXIgbGUgbW90IGRlIHBhc3NlXHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXBhc3N3b3JkJyk7XHJcbiAgXHJcbiAgaWYgKHRvZ2dsZVBhc3N3b3JkQnRuICYmIHBhc3N3b3JkSW5wdXQpIHtcclxuICAgIHRvZ2dsZVBhc3N3b3JkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0eXBlID0gcGFzc3dvcmRJbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6ICdwYXNzd29yZCc7XHJcbiAgICAgIHBhc3N3b3JkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDaGFuZ2VtZW50IGRlIGwnaWPDtG5lXHJcbiAgICAgIGlmICh0eXBlID09PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgdG9nZ2xlUGFzc3dvcmRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiYmkgYmktZXllXCI+PC9pPic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9nZ2xlUGFzc3dvcmRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiYmkgYmktZXllLXNsYXNoXCI+PC9pPic7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEFuaW1hdGlvbiBkZSBsJ2ljw7RuZVxyXG4gICAgICB0b2dnbGVQYXNzd29yZEJ0bi5jbGFzc0xpc3QuYWRkKCdwdWxzZScpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0b2dnbGVQYXNzd29yZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdwdWxzZScpO1xyXG4gICAgICB9LCAzMDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEluaXRpYWxpc2VyIGwnYWZmaWNoYWdlIGRlcyDDqXRhcGVzXHJcbiAgdXBkYXRlRm9ybVN0ZXBzKCk7XHJcbn0pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGVyb1RpdGxlIiwicXVlcnlTZWxlY3RvciIsImhlcm9TdWJ0aXRsZSIsImhlcm9DdGEiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsImFuaW1hdGlvbkRlbGF5IiwiZmVhdHVyZUNhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaW5kZXgiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsImNvbmNhdCIsInVub2JzZXJ2ZSIsInRocmVzaG9sZCIsImNhcmQiLCJvYnNlcnZlIiwiaGVyb1NlY3Rpb24iLCJoZXJvUGF0dGVybiIsIndpbmRvdyIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwicGFyYWxsYXhPZmZzZXQiLCJ0cmFuc2Zvcm0iLCJmb3JtRWxlbWVudHMiLCJsb2dpbkZvcm0iLCJsb2dpbkNhcmQiLCJwYXNzd29yZEZpZWxkIiwidG9nZ2xlUGFzc3dvcmRCdG4iLCJnZXRFbGVtZW50QnlJZCIsImVsZW1lbnQiLCJvcGFjaXR5Iiwic2V0VGltZW91dCIsInRyYW5zaXRpb24iLCJlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJjbGllbnRYIiwibGVmdCIsInkiLCJjbGllbnRZIiwidG9wIiwiY2VudGVyWCIsIndpZHRoIiwiY2VudGVyWSIsImhlaWdodCIsInJvdGF0ZVgiLCJyb3RhdGVZIiwiYnV0dG9uIiwicmlwcGxlIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicmVtb3ZlIiwidHlwZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImFkZElucHV0RXJyb3JBbmltYXRpb24iLCJpbnB1dCIsInByZXZlbnREZWZhdWx0IiwibmF2YmFyIiwibmF2YmFyVG9nZ2xlIiwibmF2YmFyTWVudSIsIm5hdmJhck1lbnVPdmVybGF5IiwibmF2SXRlbXMiLCJzY3JvbGxZIiwidG9nZ2xlIiwiY29udGFpbnMiLCJpdGVtIiwiYm9keSIsIm92ZXJmbG93IiwibmF2TGlua3MiLCJsaW5rIiwiY3VycmVudExvY2F0aW9uIiwibG9jYXRpb24iLCJocmVmIiwiY2FsZW5kYXJDb250YWluZXIiLCJjYWxlbmRhclRpdGxlIiwicHJldkJ1dHRvbiIsIm5leHRCdXR0b24iLCJ0b2RheUJ1dHRvbiIsImNhbGVuZGFyRGF5cyIsInBsYW5uaW5nVGFicyIsInBsYW5uaW5nVmlld3MiLCJhZGRFdmVudEJ1dHRvbiIsImV2ZW50TW9kYWwiLCJldmVudE1vZGFsQ2xvc2UiLCJldmVudEZvcm0iLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjdXJyZW50TW9udGgiLCJnZXRNb250aCIsImN1cnJlbnRZZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aHMiLCJkYXlzT2ZXZWVrIiwiZXZlbnRzIiwiaWQiLCJ0aXRsZSIsInN0YXJ0IiwiZW5kIiwic2VydmljZUlkIiwiaW5pdCIsInJlbmRlckNhbGVuZGFyIiwic2V0dXBFdmVudExpc3RlbmVycyIsImluaXRUYWJzTmF2aWdhdGlvbiIsImdvVG9QcmV2aW91c01vbnRoIiwiZ29Ub05leHRNb250aCIsImdvVG9Ub2RheSIsIm9wZW5OZXdFdmVudE1vZGFsIiwiY2xvc2VFdmVudE1vZGFsIiwiaGFuZGxlRXZlbnRGb3JtU3VibWl0IiwidGFiIiwidCIsInZpZXdJZCIsInZpZXciLCJ0ZXh0Q29udGVudCIsImZpcnN0RGF5T2ZNb250aCIsImxhc3REYXlPZk1vbnRoIiwiZGF5c0luTW9udGgiLCJnZXREYXRlIiwiZmlyc3REYXlPZldlZWsiLCJnZXREYXkiLCJ0b3RhbENlbGxzIiwiTWF0aCIsImNlaWwiLCJ0b2RheSIsInByZXZNb250aExhc3REYXkiLCJfbG9vcCIsImRheUNlbGwiLCJjbGFzc05hbWUiLCJjZWxsTnVtYmVyIiwiZXZlbnRMaXN0IiwiZGF5SW5kZXgiLCJpIiwiZGF0ZVRvRGlzcGxheSIsImFkZEV2ZW50c1RvQ2VsbCIsImNvbnRhaW5lciIsImRhdGUiLCJkYXlFdmVudHMiLCJmaWx0ZXIiLCJldmVudCIsImV2ZW50RGF0ZSIsImV2ZW50SXRlbSIsInN0YXJ0VGltZSIsImZvcm1hdFRpbWUiLCJlbmRUaW1lIiwic3RvcFByb3BhZ2F0aW9uIiwib3BlbkV2ZW50TW9kYWwiLCJob3VycyIsImdldEhvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwicmVzZXQiLCJkYXRlSW5wdXQiLCJkYXRlU3RyaW5nIiwidG9JU09TdHJpbmciLCJzcGxpdCIsInZhbHVlIiwibW9kYWxUaXRsZSIsImRlbGV0ZUJ1dHRvbiIsImRpc3BsYXkiLCJ0aXRsZUlucHV0Iiwic3RhcnRUaW1lSW5wdXQiLCJlbmRUaW1lSW5wdXQiLCJzZXJ2aWNlSW5wdXQiLCJkZXNjcmlwdGlvbklucHV0IiwiZGVzY3JpcHRpb24iLCJkYXRhc2V0IiwiZXZlbnRJZCIsIm9uY2xpY2siLCJkZWxldGVFdmVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJldmVudERhdGEiLCJnZXQiLCJwYXJzZUludCIsImFsZXJ0IiwiX2V2ZW50RGF0YSRkYXRlJHNwbGl0IiwibWFwIiwiTnVtYmVyIiwiX2V2ZW50RGF0YSRkYXRlJHNwbGl0MiIsIl9zbGljZWRUb0FycmF5IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiX2V2ZW50RGF0YSRzdGFydFRpbWUkIiwiX2V2ZW50RGF0YSRzdGFydFRpbWUkMiIsInN0YXJ0SG91cnMiLCJzdGFydE1pbnV0ZXMiLCJfZXZlbnREYXRhJGVuZFRpbWUkc3AiLCJfZXZlbnREYXRhJGVuZFRpbWUkc3AyIiwiZW5kSG91cnMiLCJlbmRNaW51dGVzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInVwZGF0ZUV2ZW50IiwiY3JlYXRlRXZlbnQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIm5ld0RhdGEiLCJldmVudEluZGV4IiwiZmluZEluZGV4IiwiX29iamVjdFNwcmVhZCIsImNvbmZpcm1EZWxldGUiLCJjb25maXJtIiwic3BsaWNlIiwicmVnaXN0ZXJDYXJkIiwiZm9ybVN0ZXBzIiwicHJvZ3Jlc3NTdGVwcyIsInByb2dyZXNzQmFyIiwibmV4dEJ1dHRvbnMiLCJwcmV2QnV0dG9ucyIsImN1cnJlbnRTdGVwIiwidG90YWxTdGVwcyIsInVwZGF0ZUZvcm1TdGVwcyIsInN0ZXAiLCJwcm9ncmVzc1BlcmNlbnRhZ2UiLCJuZXh0U3RlcCIsImN1cnJlbnRJbnB1dHMiLCJhbGxWYWxpZCIsIkFycmF5IiwiZnJvbSIsImV2ZXJ5IiwiY2hlY2tWYWxpZGl0eSIsInByZXZTdGVwIiwicGFzc3dvcmRJbnB1dCIsInN0cmVuZ3RoTWV0ZXIiLCJzdHJlbmd0aFRleHRzIiwic3RyZW5ndGgiLCJ0ZXN0IiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=