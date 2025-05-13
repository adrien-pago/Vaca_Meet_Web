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

/* home/index.html.twig */
class __TwigTemplate_468d811973b58670bc6f6c29cddeb577 extends Template
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
            'body' => [$this, 'block_body'],
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "home/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "home/index.html.twig"));

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

        yield "Accueil - Vaca-Meet";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 5
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

        // line 6
        yield "<div class=\"home-container\">
    <div class=\"home-header mb-4\">
        <h1 class=\"text-center themed-title\">Bienvenue sur Vaca-Meet</h1>
        <p class=\"text-center lead\">La plateforme de gestion pour les campings et clubs de vacances</p>
    </div>

    ";
        // line 12
        if ((($tmp = CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 12, $this->source); })()), "user", [], "any", false, false, false, 12)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            // line 13
            yield "        <div class=\"dashboard-container\">
            <div class=\"dashboard-header\">
                <h2 class=\"dashboard-title themed-title\">Tableau de bord</h2>
                <p class=\"dashboard-subtitle\">Accédez rapidement à toutes vos fonctionnalités</p>
            </div>
            
            <div class=\"cards-wrapper\">
                <div class=\"cards row row-cols-1 row-cols-md-3 g-4\">
                    ";
            // line 21
            if ((($tmp = $this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_MANAGER")) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                // line 22
                yield "                    <div class=\"col\">
                        <div class=\"feature-card h-100\">
                            <div class=\"card-icon\">
                                <i class=\"bi bi-person-circle\"></i>
                            </div>
                            <div class=\"card-body text-center\">
                                <h5 class=\"card-title\">Mon Compte</h5>
                                <p class=\"card-text\">Gérez les informations de votre camping</p>
                                <a href=\"";
                // line 30
                yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_account_index");
                yield "\" class=\"btn btn-primary card-btn\">Accéder</a>
                            </div>
                        </div>
                    </div>
                    ";
            }
            // line 35
            yield "                    
                    <div class=\"col\">
                        <div class=\"feature-card h-100\">
                            <div class=\"card-icon\">
                                <i class=\"bi bi-people\"></i>
                            </div>
                            <div class=\"card-body text-center\">
                                <h5 class=\"card-title\">Services</h5>
                                <p class=\"card-text\">Gérez les comptes des services de votre camping</p>
                                <a href=\"";
            // line 44
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_service_index");
            yield "\" class=\"btn btn-primary card-btn\">Accéder</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class=\"col\">
                        <div class=\"feature-card h-100\">
                            <div class=\"card-icon\">
                                <i class=\"bi bi-calendar-week\"></i>
                            </div>
                            <div class=\"card-body text-center\">
                                <h5 class=\"card-title\">Planning</h5>
                                <p class=\"card-text\">Organisez les plannings hebdomadaires</p>
                                <a href=\"";
            // line 57
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_index");
            yield "\" class=\"btn btn-primary card-btn\">Accéder</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ";
        } else {
            // line 65
            yield "        <div class=\"welcome-container\">
            <div class=\"card welcome-card shadow\">
                <div class=\"card-body text-center\">
                    <h2>Commencez dès maintenant</h2>
                    <p>Connectez-vous ou créez un compte pour gérer votre camping</p>
                    <div class=\"welcome-buttons\">
                        <a href=\"";
            // line 71
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_login");
            yield "\" class=\"btn btn-primary me-2\">Connexion</a>
                        <a href=\"";
            // line 72
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_register");
            yield "\" class=\"btn btn-outline-primary\">Inscription</a>
                    </div>
                </div>
            </div>
        </div>
    ";
        }
        // line 78
        yield "</div>

<style>
    .themed-title {
        color: var(--theme-color) !important;
        font-weight: bold;
    }
</style>
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
        return "home/index.html.twig";
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
        return array (  199 => 78,  190 => 72,  186 => 71,  178 => 65,  167 => 57,  151 => 44,  140 => 35,  132 => 30,  122 => 22,  120 => 21,  110 => 13,  108 => 12,  100 => 6,  87 => 5,  64 => 3,  41 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Accueil - Vaca-Meet{% endblock %}

{% block body %}
<div class=\"home-container\">
    <div class=\"home-header mb-4\">
        <h1 class=\"text-center themed-title\">Bienvenue sur Vaca-Meet</h1>
        <p class=\"text-center lead\">La plateforme de gestion pour les campings et clubs de vacances</p>
    </div>

    {% if app.user %}
        <div class=\"dashboard-container\">
            <div class=\"dashboard-header\">
                <h2 class=\"dashboard-title themed-title\">Tableau de bord</h2>
                <p class=\"dashboard-subtitle\">Accédez rapidement à toutes vos fonctionnalités</p>
            </div>
            
            <div class=\"cards-wrapper\">
                <div class=\"cards row row-cols-1 row-cols-md-3 g-4\">
                    {% if is_granted('ROLE_MANAGER') %}
                    <div class=\"col\">
                        <div class=\"feature-card h-100\">
                            <div class=\"card-icon\">
                                <i class=\"bi bi-person-circle\"></i>
                            </div>
                            <div class=\"card-body text-center\">
                                <h5 class=\"card-title\">Mon Compte</h5>
                                <p class=\"card-text\">Gérez les informations de votre camping</p>
                                <a href=\"{{ path('app_account_index') }}\" class=\"btn btn-primary card-btn\">Accéder</a>
                            </div>
                        </div>
                    </div>
                    {% endif %}
                    
                    <div class=\"col\">
                        <div class=\"feature-card h-100\">
                            <div class=\"card-icon\">
                                <i class=\"bi bi-people\"></i>
                            </div>
                            <div class=\"card-body text-center\">
                                <h5 class=\"card-title\">Services</h5>
                                <p class=\"card-text\">Gérez les comptes des services de votre camping</p>
                                <a href=\"{{ path('app_service_index') }}\" class=\"btn btn-primary card-btn\">Accéder</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class=\"col\">
                        <div class=\"feature-card h-100\">
                            <div class=\"card-icon\">
                                <i class=\"bi bi-calendar-week\"></i>
                            </div>
                            <div class=\"card-body text-center\">
                                <h5 class=\"card-title\">Planning</h5>
                                <p class=\"card-text\">Organisez les plannings hebdomadaires</p>
                                <a href=\"{{ path('app_planning_index') }}\" class=\"btn btn-primary card-btn\">Accéder</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {% else %}
        <div class=\"welcome-container\">
            <div class=\"card welcome-card shadow\">
                <div class=\"card-body text-center\">
                    <h2>Commencez dès maintenant</h2>
                    <p>Connectez-vous ou créez un compte pour gérer votre camping</p>
                    <div class=\"welcome-buttons\">
                        <a href=\"{{ path('app_login') }}\" class=\"btn btn-primary me-2\">Connexion</a>
                        <a href=\"{{ path('app_register') }}\" class=\"btn btn-outline-primary\">Inscription</a>
                    </div>
                </div>
            </div>
        </div>
    {% endif %}
</div>

<style>
    .themed-title {
        color: var(--theme-color) !important;
        font-weight: bold;
    }
</style>
{% endblock %} ", "home/index.html.twig", "C:\\Users\\PAGOA\\Documents\\GitHub\\Vaca-Meet-Application-Web-SYMFONY\\templates\\home\\index.html.twig");
    }
}
