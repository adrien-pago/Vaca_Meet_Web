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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-b1522a"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ2ZBLGFBQWEsQ0FBQy9PLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO01BQy9Db1EscUJBQXFCLENBQUMsSUFBSSxDQUFDeEYsS0FBSyxDQUFDO0lBQ3JDLENBQUMsQ0FBQztFQUNOOztFQUVBO0VBQ0EsSUFBTXdHLGdCQUFnQixHQUFHbFIsUUFBUSxDQUFDVSxnQkFBZ0IsQ0FBQyxrREFBa0QsQ0FBQztFQUN0R3dRLGdCQUFnQixDQUFDblEsT0FBTyxDQUFDLFVBQUFzQixPQUFPLEVBQUk7SUFDaENBLE9BQU8sQ0FBQzlCLEtBQUssQ0FBQytCLE9BQU8sR0FBRyxHQUFHO0VBQy9CLENBQUMsQ0FBQzs7RUFFRjtFQUNBQyxVQUFVLENBQUMsWUFBTTtJQUNiMk8sZ0JBQWdCLENBQUNuUSxPQUFPLENBQUMsVUFBQXNCLE9BQU8sRUFBSTtNQUNoQ0EsT0FBTyxDQUFDOUIsS0FBSyxDQUFDNFEsVUFBVSxHQUFHLFNBQVM7SUFDeEMsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUNYLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbEpGOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YWNhLW1lZXQtd2ViLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly92YWNhLW1lZXQtd2ViLy4vYXNzZXRzL3NjcmlwdHMvY2FsbC5qcyIsIndlYnBhY2s6Ly92YWNhLW1lZXQtd2ViLy4vYXNzZXRzL3NjcmlwdHMvaG9tZS5qcyIsIndlYnBhY2s6Ly92YWNhLW1lZXQtd2ViLy4vYXNzZXRzL3NjcmlwdHMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vdmFjYS1tZWV0LXdlYi8uL2Fzc2V0cy9zY3JpcHRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly92YWNhLW1lZXQtd2ViLy4vYXNzZXRzL3NjcmlwdHMvcGxhbm5pbmcuanMiLCJ3ZWJwYWNrOi8vdmFjYS1tZWV0LXdlYi8uL2Fzc2V0cy9zY3JpcHRzL3JlZ2lzdGVyLmpzIiwid2VicGFjazovL3ZhY2EtbWVldC13ZWIvLi9hc3NldHMvc2NyaXB0cy92YWNhbmNpZXJfcGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vdmFjYS1tZWV0LXdlYi8uL2Fzc2V0cy9zdHlsZXMvQ29tbXVuLmNzcz80OWI4Iiwid2VicGFjazovL3ZhY2EtbWVldC13ZWIvLi9hc3NldHMvc3R5bGVzL0NvbXB0ZS5jc3M/NjE2MCIsIndlYnBhY2s6Ly92YWNhLW1lZXQtd2ViLy4vYXNzZXRzL3N0eWxlcy9Ib21lLmNzcz81NDVmIiwid2VicGFjazovL3ZhY2EtbWVldC13ZWIvLi9hc3NldHMvc3R5bGVzL0xvZ2luLmNzcz8zYmQzIiwid2VicGFjazovL3ZhY2EtbWVldC13ZWIvLi9hc3NldHMvc3R5bGVzL05hdmJhci5jc3M/OTYxNCIsIndlYnBhY2s6Ly92YWNhLW1lZXQtd2ViLy4vYXNzZXRzL3N0eWxlcy9QbGFubmluZy5jc3M/NjQ1OCIsIndlYnBhY2s6Ly92YWNhLW1lZXQtd2ViLy4vYXNzZXRzL3N0eWxlcy9SZWdpc3Rlci5jc3M/ZDI0NCIsIndlYnBhY2s6Ly92YWNhLW1lZXQtd2ViLy4vYXNzZXRzL3N0eWxlcy9WYWNhbmNpZXJfcGFzc3dvcmQuc2Nzcz83NzVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBJbXBvcnRzIHN0eWxlc1xuaW1wb3J0ICcuL3N0eWxlcy9Db21tdW4uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvTmF2YmFyLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL0NvbXB0ZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9Ib21lLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL1BsYW5uaW5nLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL0xvZ2luLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL1JlZ2lzdGVyLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL1ZhY2FuY2llcl9wYXNzd29yZC5zY3NzJztcblxuLy8gSW1wb3J0cyBzY3JpcHRzIGNhbGwuanMgcXVpIGFwcGVsIHRvdXQgbGVzIGF1dHJlcyBzY3JpcHRzXG5pbXBvcnQgJy4vc2NyaXB0cy9jYWxsLmpzJztcblxuXG4iLCIvLyBJbXBvcnQgZGVzIHNjcmlwdHMgc3DDqWNpZmlxdWVzXHJcbmNvbnNvbGUubG9nKCdTY3JpcHQgY2FsbC5qcyBjaGFyZ8OpJyk7XHJcblxyXG4vLyBJbXBvcnQgZGUgdG91cyBsZXMgc2NyaXB0c1xyXG5pbXBvcnQgJy4vbmF2YmFyLmpzJztcclxuaW1wb3J0ICcuL3BsYW5uaW5nLmpzJztcclxuaW1wb3J0ICcuL2hvbWUuanMnO1xyXG5pbXBvcnQgJy4vbG9naW4uanMnO1xyXG5pbXBvcnQgJy4vcmVnaXN0ZXIuanMnO1xyXG5pbXBvcnQgJy4vdmFjYW5jaWVyX3Bhc3N3b3JkLmpzJztcclxuXHJcbi8vIFMnYXNzdXJlciBxdWUgbGEgbmF2YmFyIGVzdCBpbml0aWFsaXPDqWUgbcOqbWUgc2kgRE9NQ29udGVudExvYWRlZCBlc3QgZMOpasOgIHBhc3PDqVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1NcXCdhc3N1cmVyIHF1ZSBsYSBuYXZiYXIgZXN0IGluaXRpYWxpc8OpZSB2aWEgY2FsbC5qcycpO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuaW5pdE5hdmJhciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHdpbmRvdy5pbml0TmF2YmFyKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCIvLyBIb21lIHBhZ2UgSmF2YVNjcmlwdCBhbmQgc3R5bGVzXHJcblxyXG4vLyBBbmltYXRpb24gcG91ciBsYSBwYWdlIGQnYWNjdWVpbFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBBbmltZXIgbGVzIMOpbMOpbWVudHMgZHUgaGVyb1xyXG4gICAgY29uc3QgaGVyb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tdGl0bGUnKTtcclxuICAgIGNvbnN0IGhlcm9TdWJ0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXN1YnRpdGxlJyk7XHJcbiAgICBjb25zdCBoZXJvQ3RhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tY3RhJyk7XHJcbiAgICBcclxuICAgIGlmIChoZXJvVGl0bGUpIHtcclxuICAgICAgICBoZXJvVGl0bGUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1mYWRlLWluJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChoZXJvU3VidGl0bGUpIHtcclxuICAgICAgICBoZXJvU3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1mYWRlLWluJyk7XHJcbiAgICAgICAgaGVyb1N1YnRpdGxlLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gJzIwMG1zJztcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGhlcm9DdGEpIHtcclxuICAgICAgICBoZXJvQ3RhLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtZmFkZS1pbicpO1xyXG4gICAgICAgIGhlcm9DdGEuc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSAnNDAwbXMnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBbmltZXIgbGVzIGZlYXR1cmVzIGF1IHNjcm9sbFxyXG4gICAgY29uc3QgZmVhdHVyZUNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZlYXR1cmUtY2FyZCcpO1xyXG4gICAgXHJcbiAgICBpZiAoZmVhdHVyZUNhcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtc2xpZGUtdXAnKTtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSBgJHtpbmRleCAqIDEwMH1tc2A7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLjFcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBmZWF0dXJlQ2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShjYXJkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRWZmZXQgcGFyYWxsYXggc3VyIGxlIGhlcm9cclxuICAgIGNvbnN0IGhlcm9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tc2VjdGlvbicpO1xyXG4gICAgY29uc3QgaGVyb1BhdHRlcm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1wYXR0ZXJuJyk7XHJcbiAgICBcclxuICAgIGlmIChoZXJvU2VjdGlvbiAmJiBoZXJvUGF0dGVybikge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbGxheE9mZnNldCA9IHNjcm9sbFRvcCAqIDAuNDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhlcm9QYXR0ZXJuLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7cGFyYWxsYXhPZmZzZXR9cHgpYDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbiIsIi8qKlxyXG4gKiBTY3JpcHQgcG91ciBsZXMgYW5pbWF0aW9ucyBldCBpbnRlcmFjdGlvbnMgZHUgZm9ybXVsYWlyZSBkZSBjb25uZXhpb25cclxuICovXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgLy8gw4lsw6ltZW50cyBkdSBmb3JtdWxhaXJlXHJcbiAgY29uc3QgZm9ybUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29udHJvbCcpO1xyXG4gIGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi1mb3JtJyk7XHJcbiAgY29uc3QgbG9naW5DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWNhcmQnKTtcclxuICBjb25zdCBwYXNzd29yZEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXBhc3N3b3JkJyk7XHJcbiAgXHJcbiAgLy8gQW5pbWF0aW9uIGF1IGNoYXJnZW1lbnQgZGVzIMOpbMOpbWVudHMgZHUgZm9ybXVsYWlyZVxyXG4gIGZvcm1FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgxMHB4KSc7XHJcbiAgICBcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuNXMgZWFzZSc7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwKSc7XHJcbiAgICB9LCAxMDAgKyAoaW5kZXggKiAxMDApKTtcclxuICB9KTtcclxuICBcclxuICAvLyBBbmltYXRpb24gYXUgc3Vydm9sIGRlIGxhIGNhcnRlXHJcbiAgaWYgKGxvZ2luQ2FyZCkge1xyXG4gICAgbG9naW5DYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlY3QgPSBsb2dpbkNhcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XHJcbiAgICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLSByZWN0LnRvcDtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGNlbnRlclggPSByZWN0LndpZHRoIC8gMjtcclxuICAgICAgY29uc3QgY2VudGVyWSA9IHJlY3QuaGVpZ2h0IC8gMjtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHJvdGF0ZVggPSAoeSAtIGNlbnRlclkpIC8gNTA7XHJcbiAgICAgIGNvbnN0IHJvdGF0ZVkgPSAoY2VudGVyWCAtIHgpIC8gNTA7XHJcbiAgICAgIFxyXG4gICAgICBsb2dpbkNhcmQuc3R5bGUudHJhbnNmb3JtID0gYHBlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWCgke3JvdGF0ZVh9ZGVnKSByb3RhdGVZKCR7cm90YXRlWX1kZWcpIHNjYWxlM2QoMS4wMSwgMS4wMSwgMS4wMSlgO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGxvZ2luQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICBsb2dpbkNhcmQuc3R5bGUudHJhbnNmb3JtID0gJ3BlcnNwZWN0aXZlKDEwMDBweCkgcm90YXRlWCgwKSByb3RhdGVZKDApIHNjYWxlM2QoMSwgMSwgMSknO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEdlc3Rpb24gZGUgbGEgc291bWlzc2lvbiBkdSBmb3JtdWxhaXJlXHJcbiAgaWYgKGxvZ2luRm9ybSkge1xyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpO1xyXG4gICAgICBcclxuICAgICAgLy8gQWpvdXRlciB1bmUgY2xhc3NlIHBvdXIgbCdhbmltYXRpb25cclxuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdHRpbmcnKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFqb3V0ZXIgdW4gZWZmZXQgZCdvbmR1bGF0aW9uIGF1IGNsaWNcclxuICAgICAgY29uc3QgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCgncmlwcGxlJyk7XHJcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChyaXBwbGUpO1xyXG4gICAgICBcclxuICAgICAgLy8gU3VwcHJpbWVyIGwnw6lsw6ltZW50IGQnb25kdWxhdGlvbiBhcHLDqHMgbCdhbmltYXRpb25cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmlwcGxlLnJlbW92ZSgpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICAvLyBGb25jdGlvbiBwb3VyIGFmZmljaGVyL21hc3F1ZXIgbGUgbW90IGRlIHBhc3NlXHJcbiAgaWYgKHRvZ2dsZVBhc3N3b3JkQnRuICYmIHBhc3N3b3JkRmllbGQpIHtcclxuICAgIHRvZ2dsZVBhc3N3b3JkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0eXBlID0gcGFzc3dvcmRGaWVsZC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6ICdwYXNzd29yZCc7XHJcbiAgICAgIHBhc3N3b3JkRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDaGFuZ2VtZW50IGRlIGwnaWPDtG5lXHJcbiAgICAgIGlmICh0eXBlID09PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgdG9nZ2xlUGFzc3dvcmRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiYmkgYmktZXllXCI+PC9pPic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9nZ2xlUGFzc3dvcmRCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiYmkgYmktZXllLXNsYXNoXCI+PC9pPic7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEFuaW1hdGlvbiBkZSBsJ2ljw7RuZVxyXG4gICAgICB0b2dnbGVQYXNzd29yZEJ0bi5jbGFzc0xpc3QuYWRkKCdwdWxzZScpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0b2dnbGVQYXNzd29yZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdwdWxzZScpO1xyXG4gICAgICB9LCAzMDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEFqb3V0ZXIgdW5lIGFuaW1hdGlvbiBkJ2VycmV1ciBwZXJzb25uYWxpc8OpZSBwb3VyIGxlcyBjaGFtcHMgaW52YWxpZGVzXHJcbiAgY29uc3QgYWRkSW5wdXRFcnJvckFuaW1hdGlvbiA9IChpbnB1dCkgPT4ge1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW52YWxpZCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnc2hha2UtZXJyb3InKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UtZXJyb3InKTtcclxuICAgICAgfSwgNjAwKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgZm9ybUVsZW1lbnRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgYWRkSW5wdXRFcnJvckFuaW1hdGlvbihpbnB1dCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCIvLyBGb25jdGlvbm5hbGl0w6lzIEphdmFTY3JpcHQgcG91ciBsYSBiYXJyZSBkZSBuYXZpZ2F0aW9uXHJcbmNvbnNvbGUubG9nKCdTY3JpcHQgbmF2YmFyLmpzIGNoYXJnw6knKTtcclxuXHJcbi8vIEZvbmN0aW9uIHBvdXIgaW5pdGlhbGlzZXIgbGEgbmF2YmFyXHJcbmZ1bmN0aW9uIGluaXROYXZiYXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRm9uY3Rpb24gaW5pdE5hdmJhciBhcHBlbMOpZScpO1xyXG4gICAgXHJcbiAgICAvLyBSw6lmw6lyZW5jZSBhdXggw6lsw6ltZW50cyBkZSBsYSBuYXZiYXJcclxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBuYXZiYXJUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLXRvZ2dsZScpO1xyXG4gICAgY29uc3QgbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItbWVudScpO1xyXG4gICAgY29uc3QgbmF2YmFyTWVudU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLW1lbnUtb3ZlcmxheScpO1xyXG4gICAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWl0ZW0nKTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ8OJbMOpbWVudHMgbmF2YmFyOicsIHtcclxuICAgICAgICBuYXZiYXI6ICEhbmF2YmFyLFxyXG4gICAgICAgIG5hdmJhclRvZ2dsZTogISFuYXZiYXJUb2dnbGUsXHJcbiAgICAgICAgbmF2YmFyTWVudTogISFuYXZiYXJNZW51LFxyXG4gICAgICAgIG5hdmJhck1lbnVPdmVybGF5OiAhIW5hdmJhck1lbnVPdmVybGF5LFxyXG4gICAgICAgIG5hdkl0ZW1zQ291bnQ6IG5hdkl0ZW1zLmxlbmd0aFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIEdlc3Rpb24gZHUgc2Nyb2xsIHBvdXIgbGEgbmF2YmFyXHJcbiAgICBpZiAobmF2YmFyKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiA1MCkge1xyXG4gICAgICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBHZXN0aW9uIGR1IHRvZ2dsZSBwb3VyIGxlIG1lbnVcclxuICAgIGlmIChuYXZiYXJUb2dnbGUgJiYgbmF2YmFyTWVudSAmJiBuYXZiYXJNZW51T3ZlcmxheSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBam91dCBkZXMgw6ljb3V0ZXVycyBkXFwnw6l2w6luZW1lbnRzIHBvdXIgbGUgbWVudSBidXJnZXInKTtcclxuICAgICAgICBcclxuICAgICAgICBuYXZiYXJUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWNrIHN1ciBsZSBtZW51IGJ1cmdlcicpO1xyXG4gICAgICAgICAgICBuYXZiYXJUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG5hdmJhck1lbnVPdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQW5pbWVyIGxlcyDDqWzDqW1lbnRzIGR1IG1lbnVcclxuICAgICAgICAgICAgaWYgKG5hdmJhck1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgbmF2SXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwICsgKGluZGV4ICogNTApKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBCbG9xdWVyIGxlIHNjcm9sbCBxdWFuZCBsZSBtZW51IGVzdCBvdXZlcnRcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRmVybWVyIGxlIG1lbnUgbG9ycyBkJ3VuIGNsaWMgc3VyIGwnb3ZlcmxheVxyXG4gICAgICAgIG5hdmJhck1lbnVPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGljayBzdXIgbFxcJ292ZXJsYXknKTtcclxuICAgICAgICAgICAgbmF2YmFyVG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBuYXZiYXJNZW51T3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBGZXJtZXIgbGUgbWVudSBsb3JzIGQndW4gY2xpYyBzdXIgdW4gbGllblxyXG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saW5rJyk7XHJcbiAgICAgICAgbmF2TGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWNrIHN1ciB1biBsaWVuIGRlIG5hdmlnYXRpb24nKTtcclxuICAgICAgICAgICAgICAgIG5hdmJhclRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBuYXZiYXJNZW51T3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ8OJbMOpbWVudHMgbWFucXVhbnRzIHBvdXIgbGUgbWVudSBidXJnZXI6Jywge1xyXG4gICAgICAgICAgICBuYXZiYXJUb2dnbGU6ICEhbmF2YmFyVG9nZ2xlLFxyXG4gICAgICAgICAgICBuYXZiYXJNZW51OiAhIW5hdmJhck1lbnUsXHJcbiAgICAgICAgICAgIG5hdmJhck1lbnVPdmVybGF5OiAhIW5hdmJhck1lbnVPdmVybGF5XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIE1ldHRyZSDDoCBqb3VyIGxlIGxpZW4gYWN0aWYgZW4gZm9uY3Rpb24gZGUgbGEgcGFnZVxyXG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGluaycpO1xyXG4gICAgXHJcbiAgICBuYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgIGlmIChsaW5rLmhyZWYgPT09IGN1cnJlbnRMb2NhdGlvbikge1xyXG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBFeMOpY3V0ZXIgYXUgY2hhcmdlbWVudCBkdSBET01cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0RPTSBjaGFyZ8OpIGRhbnMgbmF2YmFyLmpzIC0gZXjDqWN1dGlvbiBhdXRvbWF0aXF1ZScpO1xyXG4gICAgaW5pdE5hdmJhcigpO1xyXG59KTtcclxuXHJcbi8vIEV4cG9zZXIgbGEgZm9uY3Rpb24gYXUgbml2ZWF1IGdsb2JhbCBwb3VyIHBvdXZvaXIgbCdhcHBlbGVyIGRlcHVpcyBkJ2F1dHJlcyBzY3JpcHRzXHJcbndpbmRvdy5pbml0TmF2YmFyID0gaW5pdE5hdmJhcjtcclxuXHJcbi8vIEV4cG9ydGVyIGxhIGZvbmN0aW9uIHBvdXIgdW5lIHV0aWxpc2F0aW9uIGF2ZWMgbGVzIG1vZHVsZXMgRVM2XHJcbmV4cG9ydCBkZWZhdWx0IGluaXROYXZiYXI7XHJcbiIsIi8vIEZvbmN0aW9ubmFsaXTDqXMgSmF2YVNjcmlwdCBwb3VyIGxhIGdlc3Rpb24gZHUgcGxhbm5pbmdcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIC8vIFLDqWbDqXJlbmNlcyBhdXggw6lsw6ltZW50cyBET01cclxuICAgIGNvbnN0IGNhbGVuZGFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyLXZpZXcnKTtcclxuICAgIGNvbnN0IGNhbGVuZGFyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXItdGl0bGUnKTtcclxuICAgIGNvbnN0IHByZXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXItbmF2LWJ0bi5wcmV2Jyk7XHJcbiAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyLW5hdi1idG4ubmV4dCcpO1xyXG4gICAgY29uc3QgdG9kYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsZW5kYXItbmF2LWJ0bi50b2RheScpO1xyXG4gICAgY29uc3QgY2FsZW5kYXJEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyLWRheXMnKTtcclxuICAgIGNvbnN0IHBsYW5uaW5nVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFubmluZy10YWInKTtcclxuICAgIGNvbnN0IHBsYW5uaW5nVmlld3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhbm5pbmctdmlldycpO1xyXG4gICAgY29uc3QgYWRkRXZlbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWV2ZW50LWJ0bicpO1xyXG4gICAgY29uc3QgZXZlbnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ldmVudC1tb2RhbCcpO1xyXG4gICAgY29uc3QgZXZlbnRNb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV2ZW50LW1vZGFsLWNsb3NlJyk7XHJcbiAgICBjb25zdCBldmVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXZlbnQtZm9ybScpO1xyXG4gICAgXHJcbiAgICAvLyBWYXJpYWJsZXMgZHUgY2FsZW5kcmllclxyXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgbGV0IGN1cnJlbnRZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIFxyXG4gICAgLy8gTm9tcyBkZXMgbW9pcyBldCBqb3VycyBlbiBmcmFuw6dhaXNcclxuICAgIGNvbnN0IG1vbnRocyA9IFtcclxuICAgICAgICAnSmFudmllcicsICdGw6l2cmllcicsICdNYXJzJywgJ0F2cmlsJywgJ01haScsICdKdWluJywgXHJcbiAgICAgICAgJ0p1aWxsZXQnLCAnQW/Du3QnLCAnU2VwdGVtYnJlJywgJ09jdG9icmUnLCAnTm92ZW1icmUnLCAnRMOpY2VtYnJlJ1xyXG4gICAgXTtcclxuICAgIFxyXG4gICAgY29uc3QgZGF5c09mV2VlayA9IFsnRGltYW5jaGUnLCAnTHVuZGknLCAnTWFyZGknLCAnTWVyY3JlZGknLCAnSmV1ZGknLCAnVmVuZHJlZGknLCAnU2FtZWRpJ107XHJcbiAgICBcclxuICAgIC8vIE1vY2sgZGF0YSBwb3VyIGxlcyDDqXbDqW5lbWVudHMgKMOgIHJlbXBsYWNlciBwYXIgdW4gYXBwZWwgQUpBWClcclxuICAgIGNvbnN0IGV2ZW50cyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0FuaW1hdGlvbiBQaXNjaW5lJyxcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIDEwLCAxNCwgMCksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgMTAsIDE2LCAwKSxcclxuICAgICAgICAgICAgc2VydmljZUlkOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1NwZWN0YWNsZSBTb2lyw6llJyxcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIDE1LCAyMCwgMCksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgMTUsIDIyLCAwKSxcclxuICAgICAgICAgICAgc2VydmljZUlkOiAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0NvdXJzIGRlIERhbnNlJyxcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIDIwLCAxMCwgMCksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgMjAsIDEyLCAwKSxcclxuICAgICAgICAgICAgc2VydmljZUlkOiAzXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIFxyXG4gICAgLy8gSW5pdGlhbGlzYXRpb25cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgcmVuZGVyQ2FsZW5kYXIoKTtcclxuICAgICAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgaW5pdFRhYnNOYXZpZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIENvbmZpZ3VyYXRpb24gZGVzIMOpY291dGV1cnMgZCfDqXbDqW5lbWVudHNcclxuICAgIGZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgaWYgKHByZXZCdXR0b24pIHtcclxuICAgICAgICAgICAgcHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvVG9QcmV2aW91c01vbnRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG5leHRCdXR0b24pIHtcclxuICAgICAgICAgICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvVG9OZXh0TW9udGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodG9kYXlCdXR0b24pIHtcclxuICAgICAgICAgICAgdG9kYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb1RvVG9kYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoYWRkRXZlbnRCdXR0b24pIHtcclxuICAgICAgICAgICAgYWRkRXZlbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTmV3RXZlbnRNb2RhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChldmVudE1vZGFsQ2xvc2UpIHtcclxuICAgICAgICAgICAgZXZlbnRNb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VFdmVudE1vZGFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gRmVybWVyIGxhIG1vZGFsIHNpIG9uIGNsaXF1ZSBlbiBkZWhvcnNcclxuICAgICAgICBpZiAoZXZlbnRNb2RhbCkge1xyXG4gICAgICAgICAgICBldmVudE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBldmVudE1vZGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VFdmVudE1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBHZXN0aW9uIGR1IGZvcm11bGFpcmUgZGUgbCfDqXbDqW5lbWVudFxyXG4gICAgICAgIGlmIChldmVudEZvcm0pIHtcclxuICAgICAgICAgICAgZXZlbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUV2ZW50Rm9ybVN1Ym1pdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBOYXZpZ2F0aW9uIGVudHJlIGxlcyBvbmdsZXRzXHJcbiAgICBmdW5jdGlvbiBpbml0VGFic05hdmlnYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKHBsYW5uaW5nVGFicyAmJiBwbGFubmluZ1RhYnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBwbGFubmluZ1RhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5sZXZlciBsYSBjbGFzc2UgYWN0aXZlIGRlIHRvdXMgbGVzIG9uZ2xldHNcclxuICAgICAgICAgICAgICAgICAgICBwbGFubmluZ1RhYnMuZm9yRWFjaCh0ID0+IHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFqb3V0ZXIgbGEgY2xhc3NlIGFjdGl2ZSDDoCBsJ29uZ2xldCBjbGlxdcOpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZmZpY2hlciBsYSB2dWUgY29ycmVzcG9uZGFudGVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3SWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFubmluZ1ZpZXdzLmZvckVhY2godmlldyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2aWV3LmlkID09PSB2aWV3SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFmZmljaGFnZSBkdSBjYWxlbmRyaWVyXHJcbiAgICBmdW5jdGlvbiByZW5kZXJDYWxlbmRhcigpIHtcclxuICAgICAgICBpZiAoIWNhbGVuZGFyRGF5cyB8fCAhY2FsZW5kYXJUaXRsZSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1pc2Ugw6Agam91ciBkdSB0aXRyZSBkdSBjYWxlbmRyaWVyIChtb2lzIGV0IGFubsOpZSlcclxuICAgICAgICBjYWxlbmRhclRpdGxlLnRleHRDb250ZW50ID0gYCR7bW9udGhzW2N1cnJlbnRNb250aF19ICR7Y3VycmVudFllYXJ9YDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBWaWRlciBsZSBjb250ZW5ldXIgZGVzIGpvdXJzXHJcbiAgICAgICAgY2FsZW5kYXJEYXlzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFByZW1pZXIgam91ciBkdSBtb2lzXHJcbiAgICAgICAgY29uc3QgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgMSk7XHJcbiAgICAgICAgLy8gRGVybmllciBqb3VyIGR1IG1vaXNcclxuICAgICAgICBjb25zdCBsYXN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGggKyAxLCAwKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBOb21icmUgZGUgam91cnMgZGFucyBsZSBtb2lzXHJcbiAgICAgICAgY29uc3QgZGF5c0luTW9udGggPSBsYXN0RGF5T2ZNb250aC5nZXREYXRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSm91ciBkZSBsYSBzZW1haW5lIGR1IHByZW1pZXIgam91ciAoMC02KVxyXG4gICAgICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gZmlyc3REYXlPZk1vbnRoLmdldERheSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENhbGN1bCBkdSBub21icmUgdG90YWwgZGUgY2VsbHVsZXMgKHkgY29tcHJpcyBsZXMgam91cnMgZHUgbW9pcyBwcsOpY8OpZGVudC9zdWl2YW50KVxyXG4gICAgICAgIGNvbnN0IHRvdGFsQ2VsbHMgPSBNYXRoLmNlaWwoKGRheXNJbk1vbnRoICsgZmlyc3REYXlPZldlZWspIC8gNykgKiA3O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIERhdGUgZHUgam91clxyXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBKb3VycyBkdSBtb2lzIHByw6ljw6lkZW50XHJcbiAgICAgICAgY29uc3QgcHJldk1vbnRoTGFzdERheSA9IG5ldyBEYXRlKGN1cnJlbnRZZWFyLCBjdXJyZW50TW9udGgsIDApLmdldERhdGUoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBHw6luw6lyYXRpb24gZGVzIGNlbGx1bGVzIGR1IGNhbGVuZHJpZXJcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsQ2VsbHM7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXlDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRheUNlbGwuY2xhc3NOYW1lID0gJ2NhbGVuZGFyLWRheSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjZWxsTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGNlbGxOdW1iZXIuY2xhc3NOYW1lID0gJ2RheS1udW1iZXInO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGV2ZW50TGlzdC5jbGFzc05hbWUgPSAnZXZlbnQtbGlzdCc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJbmRleCBkdSBqb3VyIMOgIGFmZmljaGVyXHJcbiAgICAgICAgICAgIGxldCBkYXlJbmRleCA9IGkgLSBmaXJzdERheU9mV2VlayArIDE7XHJcbiAgICAgICAgICAgIGxldCBkYXRlVG9EaXNwbGF5O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSm91cnMgZHUgbW9pcyBwcsOpY8OpZGVudFxyXG4gICAgICAgICAgICBpZiAoZGF5SW5kZXggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGF5SW5kZXggPSBwcmV2TW9udGhMYXN0RGF5ICsgZGF5SW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjZWxsTnVtYmVyLnRleHRDb250ZW50ID0gZGF5SW5kZXg7XHJcbiAgICAgICAgICAgICAgICBkYXlDZWxsLmNsYXNzTGlzdC5hZGQoJ290aGVyLW1vbnRoJyk7XHJcbiAgICAgICAgICAgICAgICBkYXRlVG9EaXNwbGF5ID0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCAtIDEsIGRheUluZGV4KTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgLy8gSm91cnMgZHUgbW9pcyBzdWl2YW50XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRheUluZGV4ID4gZGF5c0luTW9udGgpIHtcclxuICAgICAgICAgICAgICAgIGRheUluZGV4ID0gZGF5SW5kZXggLSBkYXlzSW5Nb250aDtcclxuICAgICAgICAgICAgICAgIGNlbGxOdW1iZXIudGV4dENvbnRlbnQgPSBkYXlJbmRleDtcclxuICAgICAgICAgICAgICAgIGRheUNlbGwuY2xhc3NMaXN0LmFkZCgnb3RoZXItbW9udGgnKTtcclxuICAgICAgICAgICAgICAgIGRhdGVUb0Rpc3BsYXkgPSBuZXcgRGF0ZShjdXJyZW50WWVhciwgY3VycmVudE1vbnRoICsgMSwgZGF5SW5kZXgpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAvLyBKb3VycyBkdSBtb2lzIGNvdXJhbnRcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsTnVtYmVyLnRleHRDb250ZW50ID0gZGF5SW5kZXg7XHJcbiAgICAgICAgICAgICAgICBkYXRlVG9EaXNwbGF5ID0gbmV3IERhdGUoY3VycmVudFllYXIsIGN1cnJlbnRNb250aCwgZGF5SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBNYXJxdWVyIGxlIGpvdXIgYWN0dWVsXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFllYXIgPT09IHRvZGF5LmdldEZ1bGxZZWFyKCkgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE1vbnRoID09PSB0b2RheS5nZXRNb250aCgpICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIGRheUluZGV4ID09PSB0b2RheS5nZXREYXRlKClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheUNlbGwuY2xhc3NMaXN0LmFkZCgndG9kYXknKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQWpvdXRlciBsZXMgw6l2w6luZW1lbnRzIMOgIGNldHRlIGRhdGVcclxuICAgICAgICAgICAgYWRkRXZlbnRzVG9DZWxsKGV2ZW50TGlzdCwgZGF0ZVRvRGlzcGxheSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBam91dGVyIGxhIHBvc3NpYmlsaXTDqSBkZSBjcsOpZXIgdW4gw6l2w6luZW1lbnQgZW4gY2xpcXVhbnQgc3VyIHVuZSBjZWxsdWxlXHJcbiAgICAgICAgICAgIGRheUNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIG9wZW5OZXdFdmVudE1vZGFsKGRhdGVUb0Rpc3BsYXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRheUNlbGwuYXBwZW5kQ2hpbGQoY2VsbE51bWJlcik7XHJcbiAgICAgICAgICAgIGRheUNlbGwuYXBwZW5kQ2hpbGQoZXZlbnRMaXN0KTtcclxuICAgICAgICAgICAgY2FsZW5kYXJEYXlzLmFwcGVuZENoaWxkKGRheUNlbGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQWpvdXRlciBsZXMgw6l2w6luZW1lbnRzIMOgIHVuZSBjZWxsdWxlXHJcbiAgICBmdW5jdGlvbiBhZGRFdmVudHNUb0NlbGwoY29udGFpbmVyLCBkYXRlKSB7XHJcbiAgICAgICAgaWYgKCFjb250YWluZXIgfHwgIWRhdGUpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBGaWx0cmVyIGxlcyDDqXbDqW5lbWVudHMgZHUgam91clxyXG4gICAgICAgIGNvbnN0IGRheUV2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudERhdGUgPSBuZXcgRGF0ZShldmVudC5zdGFydCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBldmVudERhdGUuZ2V0RGF0ZSgpID09PSBkYXRlLmdldERhdGUoKSAmJiBcclxuICAgICAgICAgICAgICAgIGV2ZW50RGF0ZS5nZXRNb250aCgpID09PSBkYXRlLmdldE1vbnRoKCkgJiYgXHJcbiAgICAgICAgICAgICAgICBldmVudERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWpvdXRlciBjaGFxdWUgw6l2w6luZW1lbnQgYXUgY29udGVuZXVyXHJcbiAgICAgICAgZGF5RXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZXZlbnRJdGVtLmNsYXNzTmFtZSA9IGBldmVudC1pdGVtIHNlcnZpY2UtJHtldmVudC5zZXJ2aWNlSWR9YDtcclxuICAgICAgICAgICAgZXZlbnRJdGVtLnRleHRDb250ZW50ID0gZXZlbnQudGl0bGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBGb3JtYXRlciBsJ2hldXJlIGRlIGTDqWJ1dCBldCBkZSBmaW5cclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gZm9ybWF0VGltZShldmVudC5zdGFydCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFRpbWUgPSBmb3JtYXRUaW1lKGV2ZW50LmVuZCk7XHJcbiAgICAgICAgICAgIGV2ZW50SXRlbS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYCR7ZXZlbnQudGl0bGV9ICgke3N0YXJ0VGltZX0gLSAke2VuZFRpbWV9KWApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRW1ww6pjaGVyIGxhIHByb3BhZ2F0aW9uIGR1IGNsaWMgcG91ciBuZSBwYXMgZMOpY2xlbmNoZXIgbGUgY2xpYyBkZSBsYSBjZWxsdWxlXHJcbiAgICAgICAgICAgIGV2ZW50SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBvcGVuRXZlbnRNb2RhbChldmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGV2ZW50SXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEZvcm1hdGVyIGwnaGV1cmUgYXUgZm9ybWF0IDI0aCAoSEg6TU0pXHJcbiAgICBmdW5jdGlvbiBmb3JtYXRUaW1lKGRhdGUpIHtcclxuICAgICAgICBpZiAoIWRhdGUpIHJldHVybiAnJztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBOYXZpZ2F0aW9uIHZlcnMgbGUgbW9pcyBwcsOpY8OpZGVudFxyXG4gICAgZnVuY3Rpb24gZ29Ub1ByZXZpb3VzTW9udGgoKSB7XHJcbiAgICAgICAgY3VycmVudE1vbnRoLS07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGN1cnJlbnRNb250aCA8IDApIHtcclxuICAgICAgICAgICAgY3VycmVudE1vbnRoID0gMTE7XHJcbiAgICAgICAgICAgIGN1cnJlbnRZZWFyLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlbmRlckNhbGVuZGFyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIE5hdmlnYXRpb24gdmVycyBsZSBtb2lzIHN1aXZhbnRcclxuICAgIGZ1bmN0aW9uIGdvVG9OZXh0TW9udGgoKSB7XHJcbiAgICAgICAgY3VycmVudE1vbnRoKys7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGN1cnJlbnRNb250aCA+IDExKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRNb250aCA9IDA7XHJcbiAgICAgICAgICAgIGN1cnJlbnRZZWFyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlbmRlckNhbGVuZGFyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFsbGVyIGF1IG1vaXMgYWN0dWVsXHJcbiAgICBmdW5jdGlvbiBnb1RvVG9kYXkoKSB7XHJcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGN1cnJlbnRNb250aCA9IHRvZGF5LmdldE1vbnRoKCk7XHJcbiAgICAgICAgY3VycmVudFllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJlbmRlckNhbGVuZGFyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIE91dnJpciBsYSBtb2RhbCBwb3VyIHVuIG5vdXZlbCDDqXbDqW5lbWVudFxyXG4gICAgZnVuY3Rpb24gb3Blbk5ld0V2ZW50TW9kYWwoZGF0ZSkge1xyXG4gICAgICAgIGlmICghZXZlbnRNb2RhbCkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFLDqWluaXRpYWxpc2VyIGxlIGZvcm11bGFpcmVcclxuICAgICAgICBpZiAoZXZlbnRGb3JtKSB7XHJcbiAgICAgICAgICAgIGV2ZW50Rm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gU2kgdW5lIGRhdGUgZXN0IHNww6ljaWZpw6llLCBkw6lmaW5pciBsZXMgY2hhbXBzIGRlIGRhdGUgZXQgZCdoZXVyZVxyXG4gICAgICAgICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGV2ZW50Rm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImV2ZW50LWRhdGVcIl0nKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRlSW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gZGF0ZVN0cmluZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGFuZ2VyIGxlIHRpdHJlIGRlIGxhIG1vZGFsXHJcbiAgICAgICAgY29uc3QgbW9kYWxUaXRsZSA9IGV2ZW50TW9kYWwucXVlcnlTZWxlY3RvcignLmV2ZW50LW1vZGFsLXRpdGxlJyk7XHJcbiAgICAgICAgaWYgKG1vZGFsVGl0bGUpIHtcclxuICAgICAgICAgICAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9ICdOb3V2ZWwgw6l2w6luZW1lbnQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBNYXNxdWVyIGxlIGJvdXRvbiBkZSBzdXBwcmVzc2lvbiBzJ2lsIGV4aXN0ZVxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGV2ZW50TW9kYWwucXVlcnlTZWxlY3RvcignLmV2ZW50LW1vZGFsLWJ0bi5kZWxldGUnKTtcclxuICAgICAgICBpZiAoZGVsZXRlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBZmZpY2hlciBsYSBtb2RhbFxyXG4gICAgICAgIGV2ZW50TW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBPdXZyaXIgbGEgbW9kYWwgcG91ciB1biDDqXbDqW5lbWVudCBleGlzdGFudFxyXG4gICAgZnVuY3Rpb24gb3BlbkV2ZW50TW9kYWwoZXZlbnQpIHtcclxuICAgICAgICBpZiAoIWV2ZW50TW9kYWwgfHwgIWV2ZW50KSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUmVtcGxpciBsZSBmb3JtdWxhaXJlIGF2ZWMgbGVzIGRvbm7DqWVzIGRlIGwnw6l2w6luZW1lbnRcclxuICAgICAgICBpZiAoZXZlbnRGb3JtKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBldmVudEZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJldmVudC10aXRsZVwiXScpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBldmVudEZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJldmVudC1kYXRlXCJdJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZUlucHV0ID0gZXZlbnRGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZXZlbnQtc3RhcnQtdGltZVwiXScpO1xyXG4gICAgICAgICAgICBjb25zdCBlbmRUaW1lSW5wdXQgPSBldmVudEZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJldmVudC1lbmQtdGltZVwiXScpO1xyXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlSW5wdXQgPSBldmVudEZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJldmVudC1zZXJ2aWNlXCJdJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBldmVudEZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJldmVudC1kZXNjcmlwdGlvblwiXScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRpdGxlSW5wdXQpIHRpdGxlSW5wdXQudmFsdWUgPSBldmVudC50aXRsZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChkYXRlSW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBldmVudC5zdGFydC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSBkYXRlU3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoc3RhcnRUaW1lSW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gZXZlbnQuc3RhcnQuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gZXZlbnQuc3RhcnQuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZUlucHV0LnZhbHVlID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZW5kVGltZUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IGV2ZW50LmVuZC5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBldmVudC5lbmQuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgICAgICAgICAgIGVuZFRpbWVJbnB1dC52YWx1ZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHNlcnZpY2VJbnB1dCkgc2VydmljZUlucHV0LnZhbHVlID0gZXZlbnQuc2VydmljZUlkO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uSW5wdXQgJiYgZXZlbnQuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBldmVudC5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gU3RvY2tlciBsJ0lEIGRlIGwnw6l2w6luZW1lbnQgcG91ciBsYSBtaXNlIMOgIGpvdXJcclxuICAgICAgICAgICAgZXZlbnRGb3JtLmRhdGFzZXQuZXZlbnRJZCA9IGV2ZW50LmlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGFuZ2VyIGxlIHRpdHJlIGRlIGxhIG1vZGFsXHJcbiAgICAgICAgY29uc3QgbW9kYWxUaXRsZSA9IGV2ZW50TW9kYWwucXVlcnlTZWxlY3RvcignLmV2ZW50LW1vZGFsLXRpdGxlJyk7XHJcbiAgICAgICAgaWYgKG1vZGFsVGl0bGUpIHtcclxuICAgICAgICAgICAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9ICdNb2RpZmllciBsXFwnw6l2w6luZW1lbnQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBZmZpY2hlciBsZSBib3V0b24gZGUgc3VwcHJlc3Npb25cclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBldmVudE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5ldmVudC1tb2RhbC1idG4uZGVsZXRlJyk7XHJcbiAgICAgICAgaWYgKGRlbGV0ZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQWpvdXRlciB1biDDqXbDqW5lbWVudCBwb3VyIHN1cHByaW1lclxyXG4gICAgICAgICAgICBkZWxldGVCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlRXZlbnQoZXZlbnQuaWQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBZmZpY2hlciBsYSBtb2RhbFxyXG4gICAgICAgIGV2ZW50TW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBGZXJtZXIgbGEgbW9kYWxcclxuICAgIGZ1bmN0aW9uIGNsb3NlRXZlbnRNb2RhbCgpIHtcclxuICAgICAgICBpZiAoIWV2ZW50TW9kYWwpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBldmVudE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBSw6lpbml0aWFsaXNlciBsZSBmb3JtdWxhaXJlXHJcbiAgICAgICAgaWYgKGV2ZW50Rm9ybSkge1xyXG4gICAgICAgICAgICBldmVudEZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50Rm9ybS5kYXRhc2V0LmV2ZW50SWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBHw6lyZXIgbGEgc291bWlzc2lvbiBkdSBmb3JtdWxhaXJlIGQnw6l2w6luZW1lbnRcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUV2ZW50Rm9ybVN1Ym1pdChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFLDqWN1cMOpcmVyIGxlcyBkb25uw6llcyBkdSBmb3JtdWxhaXJlXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnRGb3JtKTtcclxuICAgICAgICBjb25zdCBldmVudERhdGEgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBmb3JtRGF0YS5nZXQoJ2V2ZW50LXRpdGxlJyksXHJcbiAgICAgICAgICAgIGRhdGU6IGZvcm1EYXRhLmdldCgnZXZlbnQtZGF0ZScpLFxyXG4gICAgICAgICAgICBzdGFydFRpbWU6IGZvcm1EYXRhLmdldCgnZXZlbnQtc3RhcnQtdGltZScpLFxyXG4gICAgICAgICAgICBlbmRUaW1lOiBmb3JtRGF0YS5nZXQoJ2V2ZW50LWVuZC10aW1lJyksXHJcbiAgICAgICAgICAgIHNlcnZpY2VJZDogcGFyc2VJbnQoZm9ybURhdGEuZ2V0KCdldmVudC1zZXJ2aWNlJykpLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZm9ybURhdGEuZ2V0KCdldmVudC1kZXNjcmlwdGlvbicpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBWYWxpZGF0aW9uIGRlIGJhc2VcclxuICAgICAgICBpZiAoIWV2ZW50RGF0YS50aXRsZSB8fCAhZXZlbnREYXRhLmRhdGUgfHwgIWV2ZW50RGF0YS5zdGFydFRpbWUgfHwgIWV2ZW50RGF0YS5lbmRUaW1lKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdWZXVpbGxleiByZW1wbGlyIHRvdXMgbGVzIGNoYW1wcyBvYmxpZ2F0b2lyZXMuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ3LDqWF0aW9uIGRlcyBvYmpldHMgRGF0ZVxyXG4gICAgICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGV2ZW50RGF0YS5kYXRlLnNwbGl0KCctJykubWFwKE51bWJlcik7XHJcbiAgICAgICAgY29uc3QgW3N0YXJ0SG91cnMsIHN0YXJ0TWludXRlc10gPSBldmVudERhdGEuc3RhcnRUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XHJcbiAgICAgICAgY29uc3QgW2VuZEhvdXJzLCBlbmRNaW51dGVzXSA9IGV2ZW50RGF0YS5lbmRUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXksIHN0YXJ0SG91cnMsIHN0YXJ0TWludXRlcyk7XHJcbiAgICAgICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5LCBlbmRIb3VycywgZW5kTWludXRlcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVsOpcmlmaWVyIHF1ZSBsYSBkYXRlIGRlIGZpbiBlc3QgYXByw6hzIGxhIGRhdGUgZGUgZMOpYnV0XHJcbiAgICAgICAgaWYgKGVuZERhdGUgPD0gc3RhcnREYXRlKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdMXFwnaGV1cmUgZGUgZmluIGRvaXQgw6p0cmUgYXByw6hzIGxcXCdoZXVyZSBkZSBkw6lidXQuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2kgYydlc3QgdW5lIG1pc2Ugw6Agam91ciBkJ8OpdsOpbmVtZW50IGV4aXN0YW50XHJcbiAgICAgICAgY29uc3QgZXZlbnRJZCA9IGV2ZW50Rm9ybS5kYXRhc2V0LmV2ZW50SWQ7XHJcbiAgICAgICAgaWYgKGV2ZW50SWQpIHtcclxuICAgICAgICAgICAgdXBkYXRlRXZlbnQocGFyc2VJbnQoZXZlbnRJZCksIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBldmVudERhdGEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBzdGFydDogc3RhcnREYXRlLFxyXG4gICAgICAgICAgICAgICAgZW5kOiBlbmREYXRlLFxyXG4gICAgICAgICAgICAgICAgc2VydmljZUlkOiBldmVudERhdGEuc2VydmljZUlkLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50RGF0YS5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTaW5vbiwgY3LDqWVyIHVuIG5vdXZlbCDDqXbDqW5lbWVudFxyXG4gICAgICAgICAgICBjcmVhdGVFdmVudCh7XHJcbiAgICAgICAgICAgICAgICBpZDogZXZlbnRzLmxlbmd0aCArIDEsIC8vIFNpbXBsZSBJRCBwb3VyIGxhIGTDqW1vXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZXZlbnREYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgICAgIGVuZDogZW5kRGF0ZSxcclxuICAgICAgICAgICAgICAgIHNlcnZpY2VJZDogZXZlbnREYXRhLnNlcnZpY2VJZCxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBldmVudERhdGEuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZlcm1lciBsYSBtb2RhbCBldCBtZXR0cmUgw6Agam91ciBsZSBjYWxlbmRyaWVyXHJcbiAgICAgICAgY2xvc2VFdmVudE1vZGFsKCk7XHJcbiAgICAgICAgcmVuZGVyQ2FsZW5kYXIoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ3LDqWVyIHVuIG5vdXZlbCDDqXbDqW5lbWVudFxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRXZlbnQoZXZlbnREYXRhKSB7XHJcbiAgICAgICAgLy8gRGFucyB1biBlbnZpcm9ubmVtZW50IHLDqWVsLCBjZSBzZXJhaXQgdW4gYXBwZWwgQVBJXHJcbiAgICAgICAgZXZlbnRzLnB1c2goZXZlbnREYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnw4l2w6luZW1lbnQgY3LDqcOpOicsIGV2ZW50RGF0YSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIE1ldHRyZSDDoCBqb3VyIHVuIMOpdsOpbmVtZW50XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVFdmVudChldmVudElkLCBuZXdEYXRhKSB7XHJcbiAgICAgICAgLy8gRGFucyB1biBlbnZpcm9ubmVtZW50IHLDqWVsLCBjZSBzZXJhaXQgdW4gYXBwZWwgQVBJXHJcbiAgICAgICAgY29uc3QgZXZlbnRJbmRleCA9IGV2ZW50cy5maW5kSW5kZXgoZSA9PiBlLmlkID09PSBldmVudElkKTtcclxuICAgICAgICBpZiAoZXZlbnRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgZXZlbnRzW2V2ZW50SW5kZXhdID0geyAuLi5ldmVudHNbZXZlbnRJbmRleF0sIC4uLm5ld0RhdGEgfTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ8OJdsOpbmVtZW50IG1pcyDDoCBqb3VyOicsIGV2ZW50c1tldmVudEluZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTdXBwcmltZXIgdW4gw6l2w6luZW1lbnRcclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUV2ZW50KGV2ZW50SWQpIHtcclxuICAgICAgICAvLyBEYW5zIHVuIGVudmlyb25uZW1lbnQgcsOpZWwsIGNlIHNlcmFpdCB1biBhcHBlbCBBUElcclxuICAgICAgICBjb25zdCBjb25maXJtRGVsZXRlID0gY29uZmlybSgnw4p0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgc3VwcHJpbWVyIGNldCDDqXbDqW5lbWVudCA/Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNvbmZpcm1EZWxldGUpIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRJbmRleCA9IGV2ZW50cy5maW5kSW5kZXgoZSA9PiBlLmlkID09PSBldmVudElkKTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudHMuc3BsaWNlKGV2ZW50SW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ8OJdsOpbmVtZW50IHN1cHByaW3DqSwgSUQ6JywgZXZlbnRJZCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEZlcm1lciBsYSBtb2RhbCBldCBtZXR0cmUgw6Agam91ciBsZSBjYWxlbmRyaWVyXHJcbiAgICAgICAgICAgICAgICBjbG9zZUV2ZW50TW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIHJlbmRlckNhbGVuZGFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEluaXRpYWxpc2VyIGwnYXBwbGljYXRpb25cclxuICAgIGluaXQoKTtcclxufSk7XHJcbiIsIi8qKlxyXG4gKiBTY3JpcHQgcG91ciBsZXMgYW5pbWF0aW9ucyBldCBsYSBwcm9ncmVzc2lvbiBwYXIgw6l0YXBlcyBkdSBmb3JtdWxhaXJlIGQnaW5zY3JpcHRpb25cclxuICovXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgLy8gw4lsw6ltZW50cyBkdSBmb3JtdWxhaXJlXHJcbiAgY29uc3QgcmVnaXN0ZXJDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZ2lzdGVyLWNhcmQnKTtcclxuICBjb25zdCBmb3JtRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1jb250cm9sJyk7XHJcbiAgY29uc3QgZm9ybVN0ZXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lzdHJhdGlvbi1zdGVwJyk7XHJcbiAgY29uc3QgcHJvZ3Jlc3NTdGVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9ncmVzcy1zdGVwJyk7XHJcbiAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MtYmFyLWZpbGwnKTtcclxuICBjb25zdCBuZXh0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tbmV4dCcpO1xyXG4gIGNvbnN0IHByZXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1wcmV2Jyk7XHJcbiAgXHJcbiAgbGV0IGN1cnJlbnRTdGVwID0gMDtcclxuICBjb25zdCB0b3RhbFN0ZXBzID0gZm9ybVN0ZXBzLmxlbmd0aDtcclxuICBcclxuICAvLyBBbmltYXRpb24gYXUgY2hhcmdlbWVudCBkZXMgw6lsw6ltZW50cyBkdSBmb3JtdWxhaXJlXHJcbiAgZm9ybUVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDEwcHgpJztcclxuICAgIFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMC41cyBlYXNlJztcclxuICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDApJztcclxuICAgIH0sIDEwMCArIChpbmRleCAqIDEwMCkpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIC8vIEFuaW1hdGlvbiBhdSBzdXJ2b2wgZGUgbGEgY2FydGVcclxuICBpZiAocmVnaXN0ZXJDYXJkKSB7XHJcbiAgICByZWdpc3RlckNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgY29uc3QgcmVjdCA9IHJlZ2lzdGVyQ2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgeCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcclxuICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgY2VudGVyWCA9IHJlY3Qud2lkdGggLyAyO1xyXG4gICAgICBjb25zdCBjZW50ZXJZID0gcmVjdC5oZWlnaHQgLyAyO1xyXG4gICAgICBcclxuICAgICAgY29uc3Qgcm90YXRlWCA9ICh5IC0gY2VudGVyWSkgLyA2MDtcclxuICAgICAgY29uc3Qgcm90YXRlWSA9IChjZW50ZXJYIC0geCkgLyA2MDtcclxuICAgICAgXHJcbiAgICAgIHJlZ2lzdGVyQ2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgcGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVYKCR7cm90YXRlWH1kZWcpIHJvdGF0ZVkoJHtyb3RhdGVZfWRlZykgc2NhbGUzZCgxLjAxLCAxLjAxLCAxLjAxKWA7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcmVnaXN0ZXJDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgIHJlZ2lzdGVyQ2FyZC5zdHlsZS50cmFuc2Zvcm0gPSAncGVyc3BlY3RpdmUoMTAwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMCkgc2NhbGUzZCgxLCAxLCAxKSc7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gSW5pdGlhbGlzZXIgbCdhZmZpY2hhZ2UgZGVzIMOpdGFwZXMgZXQgZGUgbGEgcHJvZ3Jlc3Npb25cclxuICBmdW5jdGlvbiB1cGRhdGVGb3JtU3RlcHMoKSB7XHJcbiAgICAvLyBNZXR0cmUgw6Agam91ciBsZXMgw6l0YXBlcyBkdSBmb3JtdWxhaXJlXHJcbiAgICBmb3JtU3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgc3RlcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgaWYgKGluZGV4ID09PSBjdXJyZW50U3RlcCkge1xyXG4gICAgICAgIHN0ZXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyBNZXR0cmUgw6Agam91ciBsZXMgaW5kaWNhdGV1cnMgZCfDqXRhcGVcclxuICAgIHByb2dyZXNzU3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgc3RlcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnLCAnY29tcGxldGVkJyk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoaW5kZXggPCBjdXJyZW50U3RlcCkge1xyXG4gICAgICAgIHN0ZXAuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGN1cnJlbnRTdGVwKSB7XHJcbiAgICAgICAgc3RlcC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIE1ldHRyZSDDoCBqb3VyIGxhIGJhcnJlIGRlIHByb2dyZXNzaW9uXHJcbiAgICBpZiAocHJvZ3Jlc3NCYXIpIHtcclxuICAgICAgY29uc3QgcHJvZ3Jlc3NQZXJjZW50YWdlID0gKGN1cnJlbnRTdGVwIC8gKHRvdGFsU3RlcHMgLSAxKSkgKiAxMDA7XHJcbiAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3NQZXJjZW50YWdlfSVgO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBQYXNzZXIgw6AgbCfDqXRhcGUgc3VpdmFudGVcclxuICBmdW5jdGlvbiBuZXh0U3RlcCgpIHtcclxuICAgIC8vIFbDqXJpZmllciBxdWUgdG91cyBsZXMgY2hhbXBzIHJlcXVpcyBkZSBsJ8OpdGFwZSBhY3R1ZWxsZSBzb250IHJlbXBsaXNcclxuICAgIGNvbnN0IGN1cnJlbnRJbnB1dHMgPSBmb3JtU3RlcHNbY3VycmVudFN0ZXBdLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3JlcXVpcmVkXSwgc2VsZWN0W3JlcXVpcmVkXSwgdGV4dGFyZWFbcmVxdWlyZWRdJyk7XHJcbiAgICBjb25zdCBhbGxWYWxpZCA9IEFycmF5LmZyb20oY3VycmVudElucHV0cykuZXZlcnkoaW5wdXQgPT4gaW5wdXQuY2hlY2tWYWxpZGl0eSgpKTtcclxuICAgIFxyXG4gICAgaWYgKCFhbGxWYWxpZCkge1xyXG4gICAgICAvLyBBZmZpY2hlciBsZXMgZXJyZXVycyBkZSB2YWxpZGF0aW9uXHJcbiAgICAgIGN1cnJlbnRJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3NoYWtlLWVycm9yJyk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UtZXJyb3InKTtcclxuICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoY3VycmVudFN0ZXAgPCB0b3RhbFN0ZXBzIC0gMSkge1xyXG4gICAgICBjdXJyZW50U3RlcCsrO1xyXG4gICAgICB1cGRhdGVGb3JtU3RlcHMoKTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFuaW1hdGlvbiBkZSB0cmFuc2l0aW9uXHJcbiAgICAgIGZvcm1TdGVwc1tjdXJyZW50U3RlcF0uc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgZm9ybVN0ZXBzW2N1cnJlbnRTdGVwXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgyMHB4KSc7XHJcbiAgICAgIFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBmb3JtU3RlcHNbY3VycmVudFN0ZXBdLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuNHMgZWFzZSc7XHJcbiAgICAgICAgZm9ybVN0ZXBzW2N1cnJlbnRTdGVwXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIGZvcm1TdGVwc1tjdXJyZW50U3RlcF0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xyXG4gICAgICB9LCA1MCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJldmVuaXIgw6AgbCfDqXRhcGUgcHLDqWPDqWRlbnRlXHJcbiAgZnVuY3Rpb24gcHJldlN0ZXAoKSB7XHJcbiAgICBpZiAoY3VycmVudFN0ZXAgPiAwKSB7XHJcbiAgICAgIGN1cnJlbnRTdGVwLS07XHJcbiAgICAgIHVwZGF0ZUZvcm1TdGVwcygpO1xyXG4gICAgICBcclxuICAgICAgLy8gQW5pbWF0aW9uIGRlIHRyYW5zaXRpb25cclxuICAgICAgZm9ybVN0ZXBzW2N1cnJlbnRTdGVwXS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICBmb3JtU3RlcHNbY3VycmVudFN0ZXBdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0yMHB4KSc7XHJcbiAgICAgIFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBmb3JtU3RlcHNbY3VycmVudFN0ZXBdLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuNHMgZWFzZSc7XHJcbiAgICAgICAgZm9ybVN0ZXBzW2N1cnJlbnRTdGVwXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIGZvcm1TdGVwc1tjdXJyZW50U3RlcF0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMCknO1xyXG4gICAgICB9LCA1MCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEFqb3V0ZXIgbGVzIMOpY291dGV1cnMgZCfDqXbDqW5lbWVudHMgYXV4IGJvdXRvbnNcclxuICBuZXh0QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0U3RlcCk7XHJcbiAgICBcclxuICAgIC8vIEFqb3V0ZXIgdW4gZWZmZXQgZCdvbmR1bGF0aW9uIGF1IGNsaWNcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQoJ3JpcHBsZScpO1xyXG4gICAgICBidXR0b24uYXBwZW5kQ2hpbGQocmlwcGxlKTtcclxuICAgICAgXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJpcHBsZS5yZW1vdmUoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBcclxuICBwcmV2QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2U3RlcCk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgLy8gR8OpcmVyIGxhIGZvcmNlIGR1IG1vdCBkZSBwYXNzZVxyXG4gIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcclxuICBjb25zdCBzdHJlbmd0aE1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmVuZ3RoLW1ldGVyLWZpbGwnKTtcclxuICBjb25zdCBzdHJlbmd0aFRleHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0cmVuZ3RoLXRleHQgc3BhbicpO1xyXG4gIFxyXG4gIGlmIChwYXNzd29yZElucHV0ICYmIHN0cmVuZ3RoTWV0ZXIpIHtcclxuICAgIHBhc3N3b3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gcGFzc3dvcmRJbnB1dC52YWx1ZTtcclxuICAgICAgbGV0IHN0cmVuZ3RoID0gMDtcclxuICAgICAgXHJcbiAgICAgIC8vIENyaXTDqHJlcyBkZSBmb3JjZSBkdSBtb3QgZGUgcGFzc2VcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+PSA4KSBzdHJlbmd0aCArPSAxO1xyXG4gICAgICBpZiAoL1tBLVpdLy50ZXN0KHZhbHVlKSkgc3RyZW5ndGggKz0gMTtcclxuICAgICAgaWYgKC9bMC05XS8udGVzdCh2YWx1ZSkpIHN0cmVuZ3RoICs9IDE7XHJcbiAgICAgIGlmICgvW15BLVphLXowLTldLy50ZXN0KHZhbHVlKSkgc3RyZW5ndGggKz0gMTtcclxuICAgICAgXHJcbiAgICAgIC8vIE1ldHRyZSDDoCBqb3VyIGwnYWZmaWNoYWdlIGRlIGxhIGZvcmNlXHJcbiAgICAgIHN0cmVuZ3RoTWV0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnd2VhaycsICdtZWRpdW0nLCAnc3Ryb25nJyk7XHJcbiAgICAgIHN0cmVuZ3RoVGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHRleHQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJywgJ3dlYWsnLCAnbWVkaXVtJywgJ3N0cm9uZycpKTtcclxuICAgICAgXHJcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBzdHJlbmd0aE1ldGVyLnN0eWxlLndpZHRoID0gJzAnO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0cmVuZ3RoIDw9IDIpIHtcclxuICAgICAgICBzdHJlbmd0aE1ldGVyLmNsYXNzTGlzdC5hZGQoJ3dlYWsnKTtcclxuICAgICAgICBzdHJlbmd0aE1ldGVyLnN0eWxlLndpZHRoID0gJzMzJSc7XHJcbiAgICAgICAgc3RyZW5ndGhUZXh0c1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnLCAnd2VhaycpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0cmVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgc3RyZW5ndGhNZXRlci5jbGFzc0xpc3QuYWRkKCdtZWRpdW0nKTtcclxuICAgICAgICBzdHJlbmd0aE1ldGVyLnN0eWxlLndpZHRoID0gJzY2JSc7XHJcbiAgICAgICAgc3RyZW5ndGhUZXh0c1sxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnLCAnbWVkaXVtJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RyZW5ndGhNZXRlci5jbGFzc0xpc3QuYWRkKCdzdHJvbmcnKTtcclxuICAgICAgICBzdHJlbmd0aE1ldGVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgIHN0cmVuZ3RoVGV4dHNbMl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJywgJ3N0cm9uZycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gQWZmaWNoZXIvbWFzcXVlciBsZSBtb3QgZGUgcGFzc2VcclxuICBjb25zdCB0b2dnbGVQYXNzd29yZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtcGFzc3dvcmQnKTtcclxuICBcclxuICBpZiAodG9nZ2xlUGFzc3dvcmRCdG4gJiYgcGFzc3dvcmRJbnB1dCkge1xyXG4gICAgdG9nZ2xlUGFzc3dvcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSBwYXNzd29yZElucHV0LmdldEF0dHJpYnV0ZSgndHlwZScpID09PSAncGFzc3dvcmQnID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcclxuICAgICAgcGFzc3dvcmRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcclxuICAgICAgXHJcbiAgICAgIC8vIENoYW5nZW1lbnQgZGUgbCdpY8O0bmVcclxuICAgICAgaWYgKHR5cGUgPT09ICdwYXNzd29yZCcpIHtcclxuICAgICAgICB0b2dnbGVQYXNzd29yZEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJiaSBiaS1leWVcIj48L2k+JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2dnbGVQYXNzd29yZEJ0bi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJiaSBiaS1leWUtc2xhc2hcIj48L2k+JztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gQW5pbWF0aW9uIGRlIGwnaWPDtG5lXHJcbiAgICAgIHRvZ2dsZVBhc3N3b3JkQnRuLmNsYXNzTGlzdC5hZGQoJ3B1bHNlJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRvZ2dsZVBhc3N3b3JkQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3B1bHNlJyk7XHJcbiAgICAgIH0sIDMwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gSW5pdGlhbGlzZXIgbCdhZmZpY2hhZ2UgZGVzIMOpdGFwZXNcclxuICB1cGRhdGVGb3JtU3RlcHMoKTtcclxufSk7XHJcbiIsIi8vIFNjcmlwdCBwb3VyIGxhIGdlc3Rpb24gZHUgbW90IGRlIHBhc3NlIHZhY2FuY2llclxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUsOpZsOpcmVuY2UgYXV4IMOpbMOpbWVudHMgZHUgRE9NXHJcbiAgICBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk7XHJcbiAgICBjb25zdCBnZW5lcmF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0ZS1wYXNzd29yZCcpO1xyXG4gICAgY29uc3QgY29weUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5LXBhc3N3b3JkJyk7XHJcbiAgICBjb25zdCBtZXRlckJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXRlci1iYXInKTtcclxuICAgIGNvbnN0IHN0cmVuZ3RoVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdHJlbmd0aC10ZXh0Jyk7XHJcbiAgICBcclxuICAgIC8vIEZvbmN0aW9uIHBvdXIgZ8OpbsOpcmVyIHVuIG1vdCBkZSBwYXNzZSBhbMOpYXRvaXJlXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVBhc3N3b3JkKCkge1xyXG4gICAgICAgIGNvbnN0IGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5IUAjJCVeJionO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IDEwOyAvLyBMb25ndWV1ciBkZSBtb3QgZGUgcGFzc2UgcGFyIGTDqWZhdXRcclxuICAgICAgICBsZXQgcGFzc3dvcmQgPSAnJztcclxuICAgICAgICBcclxuICAgICAgICAvLyBBbmltYXRpb24gZGUgZ8OpbsOpcmF0aW9uXHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGVtcFBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRlbXBQYXNzd29yZCArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC52YWx1ZSA9IHRlbXBQYXNzd29yZDtcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAvLyBNb3QgZGUgcGFzc2UgZmluYWxcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZElucHV0LnZhbHVlID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgICAgICAgICBjaGVja1Bhc3N3b3JkU3RyZW5ndGgocGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBbmltYXRpb24gZGUgc3VjY8Ooc1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC5jbGFzc0xpc3QuYWRkKCdpcy12YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpcy12YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1MCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEZvbmN0aW9uIHBvdXIgdsOpcmlmaWVyIGxhIGZvcmNlIGR1IG1vdCBkZSBwYXNzZVxyXG4gICAgZnVuY3Rpb24gY2hlY2tQYXNzd29yZFN0cmVuZ3RoKHBhc3N3b3JkKSB7XHJcbiAgICAgICAgLy8gUGFzIGRlIG1vdCBkZSBwYXNzZVxyXG4gICAgICAgIGlmICghcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgbWV0ZXJCYXIuc3R5bGUud2lkdGggPSAnMCUnO1xyXG4gICAgICAgICAgICBtZXRlckJhci5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmMGYwZjAnO1xyXG4gICAgICAgICAgICBzdHJlbmd0aFRleHQudGV4dENvbnRlbnQgPSAnRm9yY2UgZHUgbW90IGRlIHBhc3NlJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBDcml0w6hyZXMgZGUgZm9yY2VcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBwYXNzd29yZC5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgaGFzTG93ZXIgPSAvW2Etel0vLnRlc3QocGFzc3dvcmQpO1xyXG4gICAgICAgIGNvbnN0IGhhc1VwcGVyID0gL1tBLVpdLy50ZXN0KHBhc3N3b3JkKTtcclxuICAgICAgICBjb25zdCBoYXNOdW1iZXIgPSAvWzAtOV0vLnRlc3QocGFzc3dvcmQpO1xyXG4gICAgICAgIGNvbnN0IGhhc1NwZWNpYWwgPSAvWyFAIyQlXiYqXS8udGVzdChwYXNzd29yZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2FsY3VsIGR1IHNjb3JlXHJcbiAgICAgICAgbGV0IHNjb3JlID0gMDtcclxuICAgICAgICBpZiAobGVuZ3RoID49IDYpIHNjb3JlICs9IDE7XHJcbiAgICAgICAgaWYgKGxlbmd0aCA+PSA4KSBzY29yZSArPSAxO1xyXG4gICAgICAgIGlmIChsZW5ndGggPj0gMTApIHNjb3JlICs9IDE7XHJcbiAgICAgICAgaWYgKGhhc0xvd2VyKSBzY29yZSArPSAxO1xyXG4gICAgICAgIGlmIChoYXNVcHBlcikgc2NvcmUgKz0gMTtcclxuICAgICAgICBpZiAoaGFzTnVtYmVyKSBzY29yZSArPSAxO1xyXG4gICAgICAgIGlmIChoYXNTcGVjaWFsKSBzY29yZSArPSAxO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBvdXJjZW50YWdlIGV0IGNvdWxldXJcclxuICAgICAgICBjb25zdCBwZXJjZW50ID0gKHNjb3JlIC8gNykgKiAxMDA7XHJcbiAgICAgICAgbGV0IGNvbG9yLCBzdHJlbmd0aDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAocGVyY2VudCA8PSAyNSkge1xyXG4gICAgICAgICAgICBjb2xvciA9ICcjZmY0ZTUwJztcclxuICAgICAgICAgICAgc3RyZW5ndGggPSAnVHLDqHMgZmFpYmxlJztcclxuICAgICAgICB9IGVsc2UgaWYgKHBlcmNlbnQgPD0gNTApIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnI2ZmOTUwMCc7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoID0gJ0ZhaWJsZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwZXJjZW50IDw9IDc1KSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJyNmOWQ0MjMnO1xyXG4gICAgICAgICAgICBzdHJlbmd0aCA9ICdNb3llbic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnIzRDQUY1MCc7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoID0gJ0ZvcnQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBNaXNlIMOgIGpvdXIgZGUgbCdpbnRlcmZhY2VcclxuICAgICAgICBtZXRlckJhci5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnR9JWA7XHJcbiAgICAgICAgbWV0ZXJCYXIuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xyXG4gICAgICAgIHN0cmVuZ3RoVGV4dC50ZXh0Q29udGVudCA9IHN0cmVuZ3RoO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBGb25jdGlvbiBwb3VyIGNvcGllciBsZSBtb3QgZGUgcGFzc2VcclxuICAgIGZ1bmN0aW9uIGNvcHlQYXNzd29yZCgpIHtcclxuICAgICAgICBjb25zdCBwYXNzd29yZFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLXZhbHVlJyk7XHJcbiAgICAgICAgaWYgKCFwYXNzd29yZFZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ3LDqWUgdW4gw6lsw6ltZW50IGRlIHRleHRlIHRlbXBvcmFpcmVcclxuICAgICAgICBjb25zdCB0ZW1wSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRlbXBJbnB1dC52YWx1ZSA9IHBhc3N3b3JkVmFsdWUudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZW1wSW5wdXQpO1xyXG4gICAgICAgIHRlbXBJbnB1dC5zZWxlY3QoKTtcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcElucHV0KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBSZXRvdXIgdmlzdWVsXHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUb29sdGlwID0gY29weUJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcpO1xyXG4gICAgICAgIGNvcHlCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRvb2x0aXAnLCAnQ29wacOpICEnKTtcclxuICAgICAgICBjb3B5QnRuLmNsYXNzTGlzdC5hZGQoJ3RleHQtc3VjY2VzcycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb3B5QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10b29sdGlwJywgb3JpZ2luYWxUb29sdGlwKTtcclxuICAgICAgICAgICAgY29weUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0LXN1Y2Nlc3MnKTtcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQWpvdXQgZGVzIMOpY291dGV1cnMgZCfDqXbDqW5lbWVudHNcclxuICAgIGlmIChnZW5lcmF0ZUJ0bikge1xyXG4gICAgICAgIGdlbmVyYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVQYXNzd29yZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChjb3B5QnRuKSB7XHJcbiAgICAgICAgY29weUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvcHlQYXNzd29yZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChwYXNzd29yZElucHV0KSB7XHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjaGVja1Bhc3N3b3JkU3RyZW5ndGgodGhpcy52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFuaW1hdGlvbnMgYXUgY2hhcmdlbWVudCBkZSBsYSBwYWdlXHJcbiAgICBjb25zdCBhbmltYXRlZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFuaW1hdGUtaW4sIC5hbmltYXRlLWZhZGUtaW4sIC5hbmltYXRlLXNsaWRlLWluJyk7XHJcbiAgICBhbmltYXRlZEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIEFwcGxpY2F0aW9uIGRlcyBhbmltYXRpb25zIGFwcsOocyB1biBjb3VydCBkw6lsYWlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGFuaW1hdGVkRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgMTAwKTtcclxufSk7ICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXROYXZiYXIiLCJkb2N1bWVudCIsImhlcm9UaXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJoZXJvU3VidGl0bGUiLCJoZXJvQ3RhIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJhbmltYXRpb25EZWxheSIsImZlYXR1cmVDYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImluZGV4IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjb25jYXQiLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGQiLCJjYXJkIiwib2JzZXJ2ZSIsImhlcm9TZWN0aW9uIiwiaGVyb1BhdHRlcm4iLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsInBhcmFsbGF4T2Zmc2V0IiwidHJhbnNmb3JtIiwiZm9ybUVsZW1lbnRzIiwibG9naW5Gb3JtIiwibG9naW5DYXJkIiwicGFzc3dvcmRGaWVsZCIsInRvZ2dsZVBhc3N3b3JkQnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJlbGVtZW50Iiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJ0cmFuc2l0aW9uIiwiZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwiY2xpZW50WCIsImxlZnQiLCJ5IiwiY2xpZW50WSIsInRvcCIsImNlbnRlclgiLCJ3aWR0aCIsImNlbnRlclkiLCJoZWlnaHQiLCJyb3RhdGVYIiwicm90YXRlWSIsImJ1dHRvbiIsInJpcHBsZSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZSIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhZGRJbnB1dEVycm9yQW5pbWF0aW9uIiwiaW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsIm5hdmJhciIsIm5hdmJhclRvZ2dsZSIsIm5hdmJhck1lbnUiLCJuYXZiYXJNZW51T3ZlcmxheSIsIm5hdkl0ZW1zIiwibmF2SXRlbXNDb3VudCIsInNjcm9sbFkiLCJ0b2dnbGUiLCJjb250YWlucyIsIml0ZW0iLCJib2R5Iiwib3ZlcmZsb3ciLCJuYXZMaW5rcyIsImxpbmsiLCJlcnJvciIsImN1cnJlbnRMb2NhdGlvbiIsImxvY2F0aW9uIiwiaHJlZiIsImNhbGVuZGFyQ29udGFpbmVyIiwiY2FsZW5kYXJUaXRsZSIsInByZXZCdXR0b24iLCJuZXh0QnV0dG9uIiwidG9kYXlCdXR0b24iLCJjYWxlbmRhckRheXMiLCJwbGFubmluZ1RhYnMiLCJwbGFubmluZ1ZpZXdzIiwiYWRkRXZlbnRCdXR0b24iLCJldmVudE1vZGFsIiwiZXZlbnRNb2RhbENsb3NlIiwiZXZlbnRGb3JtIiwiY3VycmVudERhdGUiLCJEYXRlIiwiY3VycmVudE1vbnRoIiwiZ2V0TW9udGgiLCJjdXJyZW50WWVhciIsImdldEZ1bGxZZWFyIiwibW9udGhzIiwiZGF5c09mV2VlayIsImV2ZW50cyIsImlkIiwidGl0bGUiLCJzdGFydCIsImVuZCIsInNlcnZpY2VJZCIsImluaXQiLCJyZW5kZXJDYWxlbmRhciIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJpbml0VGFic05hdmlnYXRpb24iLCJnb1RvUHJldmlvdXNNb250aCIsImdvVG9OZXh0TW9udGgiLCJnb1RvVG9kYXkiLCJvcGVuTmV3RXZlbnRNb2RhbCIsImNsb3NlRXZlbnRNb2RhbCIsImhhbmRsZUV2ZW50Rm9ybVN1Ym1pdCIsInRhYiIsInQiLCJ2aWV3SWQiLCJ2aWV3IiwidGV4dENvbnRlbnQiLCJmaXJzdERheU9mTW9udGgiLCJsYXN0RGF5T2ZNb250aCIsImRheXNJbk1vbnRoIiwiZ2V0RGF0ZSIsImZpcnN0RGF5T2ZXZWVrIiwiZ2V0RGF5IiwidG90YWxDZWxscyIsIk1hdGgiLCJjZWlsIiwidG9kYXkiLCJwcmV2TW9udGhMYXN0RGF5IiwiX2xvb3AiLCJkYXlDZWxsIiwiY2xhc3NOYW1lIiwiY2VsbE51bWJlciIsImV2ZW50TGlzdCIsImRheUluZGV4IiwiaSIsImRhdGVUb0Rpc3BsYXkiLCJhZGRFdmVudHNUb0NlbGwiLCJjb250YWluZXIiLCJkYXRlIiwiZGF5RXZlbnRzIiwiZmlsdGVyIiwiZXZlbnQiLCJldmVudERhdGUiLCJldmVudEl0ZW0iLCJzdGFydFRpbWUiLCJmb3JtYXRUaW1lIiwiZW5kVGltZSIsInN0b3BQcm9wYWdhdGlvbiIsIm9wZW5FdmVudE1vZGFsIiwiaG91cnMiLCJnZXRIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInJlc2V0IiwiZGF0ZUlucHV0IiwiZGF0ZVN0cmluZyIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJ2YWx1ZSIsIm1vZGFsVGl0bGUiLCJkZWxldGVCdXR0b24iLCJkaXNwbGF5IiwidGl0bGVJbnB1dCIsInN0YXJ0VGltZUlucHV0IiwiZW5kVGltZUlucHV0Iiwic2VydmljZUlucHV0IiwiZGVzY3JpcHRpb25JbnB1dCIsImRlc2NyaXB0aW9uIiwiZGF0YXNldCIsImV2ZW50SWQiLCJvbmNsaWNrIiwiZGVsZXRlRXZlbnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZXZlbnREYXRhIiwiZ2V0IiwicGFyc2VJbnQiLCJhbGVydCIsIl9ldmVudERhdGEkZGF0ZSRzcGxpdCIsIm1hcCIsIk51bWJlciIsIl9ldmVudERhdGEkZGF0ZSRzcGxpdDIiLCJfc2xpY2VkVG9BcnJheSIsInllYXIiLCJtb250aCIsImRheSIsIl9ldmVudERhdGEkc3RhcnRUaW1lJCIsIl9ldmVudERhdGEkc3RhcnRUaW1lJDIiLCJzdGFydEhvdXJzIiwic3RhcnRNaW51dGVzIiwiX2V2ZW50RGF0YSRlbmRUaW1lJHNwIiwiX2V2ZW50RGF0YSRlbmRUaW1lJHNwMiIsImVuZEhvdXJzIiwiZW5kTWludXRlcyIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJ1cGRhdGVFdmVudCIsImNyZWF0ZUV2ZW50IiwicHVzaCIsIm5ld0RhdGEiLCJldmVudEluZGV4IiwiZmluZEluZGV4IiwiX29iamVjdFNwcmVhZCIsImNvbmZpcm1EZWxldGUiLCJjb25maXJtIiwic3BsaWNlIiwicmVnaXN0ZXJDYXJkIiwiZm9ybVN0ZXBzIiwicHJvZ3Jlc3NTdGVwcyIsInByb2dyZXNzQmFyIiwibmV4dEJ1dHRvbnMiLCJwcmV2QnV0dG9ucyIsImN1cnJlbnRTdGVwIiwidG90YWxTdGVwcyIsInVwZGF0ZUZvcm1TdGVwcyIsInN0ZXAiLCJwcm9ncmVzc1BlcmNlbnRhZ2UiLCJuZXh0U3RlcCIsImN1cnJlbnRJbnB1dHMiLCJhbGxWYWxpZCIsIkFycmF5IiwiZnJvbSIsImV2ZXJ5IiwiY2hlY2tWYWxpZGl0eSIsInByZXZTdGVwIiwicGFzc3dvcmRJbnB1dCIsInN0cmVuZ3RoTWV0ZXIiLCJzdHJlbmd0aFRleHRzIiwic3RyZW5ndGgiLCJ0ZXN0IiwidGV4dCIsImdlbmVyYXRlQnRuIiwiY29weUJ0biIsIm1ldGVyQmFyIiwic3RyZW5ndGhUZXh0IiwiZ2VuZXJhdGVQYXNzd29yZCIsImNoYXJzIiwicGFzc3dvcmQiLCJjb3VudGVyIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRlbXBQYXNzd29yZCIsImNoYXJBdCIsImZsb29yIiwicmFuZG9tIiwiY2xlYXJJbnRlcnZhbCIsImNoZWNrUGFzc3dvcmRTdHJlbmd0aCIsImJhY2tncm91bmQiLCJoYXNMb3dlciIsImhhc1VwcGVyIiwiaGFzTnVtYmVyIiwiaGFzU3BlY2lhbCIsInNjb3JlIiwicGVyY2VudCIsImNvbG9yIiwiY29weVBhc3N3b3JkIiwicGFzc3dvcmRWYWx1ZSIsInRlbXBJbnB1dCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwicmVtb3ZlQ2hpbGQiLCJvcmlnaW5hbFRvb2x0aXAiLCJhbmltYXRlZEVsZW1lbnRzIiwidmlzaWJpbGl0eSJdLCJzb3VyY2VSb290IjoiIn0=