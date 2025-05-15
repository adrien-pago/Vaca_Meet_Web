<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;
use Twig\TemplateWrapper;

/* registration/register.html.twig */
class __TwigTemplate_c635fa3e85382f1c3c589c1fb8bf8123 extends Template
{
    private Source $source;
    /**
     * @var array<string, Template>
     */
    private array $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'body_class' => [$this, 'block_body_class'],
            'header' => [$this, 'block_header'],
            'body' => [$this, 'block_body'],
            'footer' => [$this, 'block_footer'],
        ];
    }

    protected function doGetParent(array $context): bool|string|Template|TemplateWrapper
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "registration/register.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "registration/register.html.twig"));

        $this->parent = $this->load("base.html.twig", 1);
        yield from $this->parent->unwrap()->yield($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_title(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        yield "Inscription - Vaca-Meet";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 5
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_body_class(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body_class"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body_class"));

        yield "navbar-hidden auth-page";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 7
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_header(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "header"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "header"));

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 9
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_body(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 10
        yield "<div class=\"auth-page-container pt-0 mt-n3\">
    <div class=\"register-logo text-center mt-n3 mb-0\">
        <a href=\"";
        // line 12
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home");
        yield "\">
            <h1 class=\"display-3 text-primary mb-0\">Vaca-Meet</h1>
        </a>
    </div>
    
    <div class=\"register-card mt-0 pt-2\">
        <div class=\"register-header py-2\">
            <h1 class=\"register-title mb-0\">Créer un compte</h1>
            <p class=\"register-subtitle mb-0\">Rejoignez Vaca-Meet pour gérer votre camping</p>
        </div>
        
        <div class=\"register-body\">
            <div class=\"progress-container mb-2\">
                <div class=\"progress-steps\">
                    <div class=\"progress-step active\">
                        <span>1</span>
                        <span class=\"progress-step-text\">Informations</span>
                    </div>
                    <div class=\"progress-step\">
                        <span>2</span>
                        <span class=\"progress-step-text\">Sécurité</span>
                    </div>
                    <div class=\"progress-step\">
                        <span>3</span>
                        <span class=\"progress-step-text\">Confirmation</span>
                    </div>
                </div>
                <div class=\"progress-bar\">
                    <div class=\"progress-bar-fill\" style=\"width: 33%;\"></div>
                </div>
            </div>
            
            ";
        // line 44
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 44, $this->source); })()), 'form_start', ["attr" => ["class" => "register-form"]]);
        yield "
                <div class=\"registration-step active\" id=\"step-1\">
                    <h3 class=\"registration-step-title mb-2\">Vos informations</h3>
                    
                    <div class=\"form-group mb-2\">
                        ";
        // line 49
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 49, $this->source); })()), "username", [], "any", false, false, false, 49), 'widget', ["attr" => ["class" => "form-control", "placeholder" => " "]]);
        // line 51
        yield "
                        <label for=\"";
        // line 52
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 52, $this->source); })()), "username", [], "any", false, false, false, 52), "vars", [], "any", false, false, false, 52), "id", [], "any", false, false, false, 52), "html", null, true);
        yield "\" class=\"form-label\">";
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 52, $this->source); })()), "username", [], "any", false, false, false, 52), 'label');
        yield "</label>
                        ";
        // line 53
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 53, $this->source); })()), "username", [], "any", false, false, false, 53), 'errors');
        yield "
                    </div>
                    
                    <div class=\"form-group mb-2\">
                        ";
        // line 57
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 57, $this->source); })()), "email", [], "any", false, false, false, 57), 'widget', ["attr" => ["class" => "form-control", "placeholder" => " "]]);
        // line 59
        yield "
                        <label for=\"";
        // line 60
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 60, $this->source); })()), "email", [], "any", false, false, false, 60), "vars", [], "any", false, false, false, 60), "id", [], "any", false, false, false, 60), "html", null, true);
        yield "\" class=\"form-label\">";
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 60, $this->source); })()), "email", [], "any", false, false, false, 60), 'label');
        yield "</label>
                        ";
        // line 61
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 61, $this->source); })()), "email", [], "any", false, false, false, 61), 'errors');
        yield "
                    </div>
                    
                    <div class=\"step-buttons\">
                        <div></div>
                        <button type=\"button\" class=\"btn btn-next\">Continuer</button>
                    </div>
                </div>
                
                <div class=\"registration-step\" id=\"step-2\">
                    <h3 class=\"registration-step-title mb-2\">Sécurisation du compte</h3>
                    
                    <div class=\"form-group mb-2\">
                        ";
        // line 74
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 74, $this->source); })()), "plainPassword", [], "any", false, false, false, 74), 'widget', ["attr" => ["class" => "form-control", "placeholder" => " "]]);
        // line 76
        yield "
                        <label for=\"";
        // line 77
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 77, $this->source); })()), "plainPassword", [], "any", false, false, false, 77), "vars", [], "any", false, false, false, 77), "id", [], "any", false, false, false, 77), "html", null, true);
        yield "\" class=\"form-label\">Mot de passe</label>
                        <button type=\"button\" id=\"toggle-password\" class=\"btn btn-sm text-muted position-absolute end-0 top-50 translate-middle-y me-3\" style=\"background:none; border:none;\">
                            <i class=\"bi bi-eye\"></i>
                        </button>
                        ";
        // line 81
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 81, $this->source); })()), "plainPassword", [], "any", false, false, false, 81), 'errors');
        yield "
                    </div>
                    
                    <div class=\"password-strength mb-2\">
                        <div class=\"strength-meter\">
                            <div class=\"strength-meter-fill\"></div>
                        </div>
                        <div class=\"strength-text\">
                            <span>Faible</span>
                            <span>Moyen</span>
                            <span>Fort</span>
                        </div>
                    </div>
                    
                    <div class=\"step-buttons\">
                        <button type=\"button\" class=\"btn btn-prev border border-primary text-primary\">Retour</button>
                        <button type=\"button\" class=\"btn btn-next\">Continuer</button>
                    </div>
                </div>
                
                <div class=\"registration-step\" id=\"step-3\">
                    <h3 class=\"registration-step-title mb-2\">Finaliser l'inscription</h3>
                    
                    <div class=\"terms-check mb-2\">
                        ";
        // line 105
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 105, $this->source); })()), "agreeTerms", [], "any", false, false, false, 105), 'widget', ["attr" => ["class" => "form-check-input"]]);
        // line 107
        yield "
                        <label for=\"";
        // line 108
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 108, $this->source); })()), "agreeTerms", [], "any", false, false, false, 108), "vars", [], "any", false, false, false, 108), "id", [], "any", false, false, false, 108), "html", null, true);
        yield "\" class=\"form-check-label\">
                            J'accepte les <a href=\"#\" target=\"_blank\">conditions d'utilisation</a> et la <a href=\"#\" target=\"_blank\">politique de confidentialité</a>.
                        </label>
                        ";
        // line 111
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 111, $this->source); })()), "agreeTerms", [], "any", false, false, false, 111), 'errors');
        yield "
                    </div>
                    
                    <div class=\"step-buttons\">
                        <button type=\"button\" class=\"btn btn-prev border border-primary text-primary\">Retour</button>
                        <button type=\"submit\" class=\"register-btn\">Créer mon compte</button>
                    </div>
                </div>
            ";
        // line 119
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["registrationForm"]) || array_key_exists("registrationForm", $context) ? $context["registrationForm"] : (function () { throw new RuntimeError('Variable "registrationForm" does not exist.', 119, $this->source); })()), 'form_end');
        yield "
        </div>
        
        <div class=\"register-footer\">
            <p>Déjà inscrit ? <a href=\"";
        // line 123
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_login");
        yield "\">Se connecter</a></p>
        </div>
    </div>
</div>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 129
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_footer(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "footer"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "footer"));

        // line 130
        yield "<footer class=\"footer mt-auto py-1 fixed-bottom bg-light shadow-sm\">
    <div class=\"container text-center\">
        <p class=\"mb-0 fw-bold\">© Vaca Meet</p>
    </div>
</footer>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "registration/register.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable(): bool
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  337 => 130,  324 => 129,  308 => 123,  301 => 119,  290 => 111,  284 => 108,  281 => 107,  279 => 105,  252 => 81,  245 => 77,  242 => 76,  240 => 74,  224 => 61,  218 => 60,  215 => 59,  213 => 57,  206 => 53,  200 => 52,  197 => 51,  195 => 49,  187 => 44,  152 => 12,  148 => 10,  135 => 9,  113 => 7,  90 => 5,  67 => 3,  44 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Inscription - Vaca-Meet{% endblock %}

{% block body_class %}navbar-hidden auth-page{% endblock %}

{% block header %}{% endblock %}

{% block body %}
<div class=\"auth-page-container pt-0 mt-n3\">
    <div class=\"register-logo text-center mt-n3 mb-0\">
        <a href=\"{{ path('app_home') }}\">
            <h1 class=\"display-3 text-primary mb-0\">Vaca-Meet</h1>
        </a>
    </div>
    
    <div class=\"register-card mt-0 pt-2\">
        <div class=\"register-header py-2\">
            <h1 class=\"register-title mb-0\">Créer un compte</h1>
            <p class=\"register-subtitle mb-0\">Rejoignez Vaca-Meet pour gérer votre camping</p>
        </div>
        
        <div class=\"register-body\">
            <div class=\"progress-container mb-2\">
                <div class=\"progress-steps\">
                    <div class=\"progress-step active\">
                        <span>1</span>
                        <span class=\"progress-step-text\">Informations</span>
                    </div>
                    <div class=\"progress-step\">
                        <span>2</span>
                        <span class=\"progress-step-text\">Sécurité</span>
                    </div>
                    <div class=\"progress-step\">
                        <span>3</span>
                        <span class=\"progress-step-text\">Confirmation</span>
                    </div>
                </div>
                <div class=\"progress-bar\">
                    <div class=\"progress-bar-fill\" style=\"width: 33%;\"></div>
                </div>
            </div>
            
            {{ form_start(registrationForm, {'attr': {'class': 'register-form'}}) }}
                <div class=\"registration-step active\" id=\"step-1\">
                    <h3 class=\"registration-step-title mb-2\">Vos informations</h3>
                    
                    <div class=\"form-group mb-2\">
                        {{ form_widget(registrationForm.username, {
                            'attr': {'class': 'form-control', 'placeholder': ' '}
                        }) }}
                        <label for=\"{{ registrationForm.username.vars.id }}\" class=\"form-label\">{{ form_label(registrationForm.username) }}</label>
                        {{ form_errors(registrationForm.username) }}
                    </div>
                    
                    <div class=\"form-group mb-2\">
                        {{ form_widget(registrationForm.email, {
                            'attr': {'class': 'form-control', 'placeholder': ' '}
                        }) }}
                        <label for=\"{{ registrationForm.email.vars.id }}\" class=\"form-label\">{{ form_label(registrationForm.email) }}</label>
                        {{ form_errors(registrationForm.email) }}
                    </div>
                    
                    <div class=\"step-buttons\">
                        <div></div>
                        <button type=\"button\" class=\"btn btn-next\">Continuer</button>
                    </div>
                </div>
                
                <div class=\"registration-step\" id=\"step-2\">
                    <h3 class=\"registration-step-title mb-2\">Sécurisation du compte</h3>
                    
                    <div class=\"form-group mb-2\">
                        {{ form_widget(registrationForm.plainPassword, {
                            'attr': {'class': 'form-control', 'placeholder': ' '}
                        }) }}
                        <label for=\"{{ registrationForm.plainPassword.vars.id }}\" class=\"form-label\">Mot de passe</label>
                        <button type=\"button\" id=\"toggle-password\" class=\"btn btn-sm text-muted position-absolute end-0 top-50 translate-middle-y me-3\" style=\"background:none; border:none;\">
                            <i class=\"bi bi-eye\"></i>
                        </button>
                        {{ form_errors(registrationForm.plainPassword) }}
                    </div>
                    
                    <div class=\"password-strength mb-2\">
                        <div class=\"strength-meter\">
                            <div class=\"strength-meter-fill\"></div>
                        </div>
                        <div class=\"strength-text\">
                            <span>Faible</span>
                            <span>Moyen</span>
                            <span>Fort</span>
                        </div>
                    </div>
                    
                    <div class=\"step-buttons\">
                        <button type=\"button\" class=\"btn btn-prev border border-primary text-primary\">Retour</button>
                        <button type=\"button\" class=\"btn btn-next\">Continuer</button>
                    </div>
                </div>
                
                <div class=\"registration-step\" id=\"step-3\">
                    <h3 class=\"registration-step-title mb-2\">Finaliser l'inscription</h3>
                    
                    <div class=\"terms-check mb-2\">
                        {{ form_widget(registrationForm.agreeTerms, {
                            'attr': {'class': 'form-check-input'}
                        }) }}
                        <label for=\"{{ registrationForm.agreeTerms.vars.id }}\" class=\"form-check-label\">
                            J'accepte les <a href=\"#\" target=\"_blank\">conditions d'utilisation</a> et la <a href=\"#\" target=\"_blank\">politique de confidentialité</a>.
                        </label>
                        {{ form_errors(registrationForm.agreeTerms) }}
                    </div>
                    
                    <div class=\"step-buttons\">
                        <button type=\"button\" class=\"btn btn-prev border border-primary text-primary\">Retour</button>
                        <button type=\"submit\" class=\"register-btn\">Créer mon compte</button>
                    </div>
                </div>
            {{ form_end(registrationForm) }}
        </div>
        
        <div class=\"register-footer\">
            <p>Déjà inscrit ? <a href=\"{{ path('app_login') }}\">Se connecter</a></p>
        </div>
    </div>
</div>
{% endblock %}

{% block footer %}
<footer class=\"footer mt-auto py-1 fixed-bottom bg-light shadow-sm\">
    <div class=\"container text-center\">
        <p class=\"mb-0 fw-bold\">© Vaca Meet</p>
    </div>
</footer>
{% endblock %} ", "registration/register.html.twig", "C:\\Users\\PAGOA\\Documents\\GitHub\\Vaca-Meet-WEB\\templates\\registration\\register.html.twig");
    }
}
