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

/* service/index.html.twig */
class __TwigTemplate_891efa7af31c62654c0b414255400145 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "service/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "service/index.html.twig"));

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

        yield "Services - Vaca-Meet";
        
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
        yield "<div class=\"row\">
    <div class=\"col-12\">
        <div class=\"d-flex justify-content-between align-items-center mb-4\">
            <h1>Gestion des Services</h1>
            <button class=\"btn btn-primary\" disabled>
                <i class=\"bi bi-plus-circle me-2\"></i>Ajouter un service
            </button>
        </div>
        
        <div class=\"card\">
            <div class=\"card-body\">
                <div class=\"alert alert-info\">
                    <i class=\"bi bi-info-circle-fill me-2\"></i>
                    La fonctionnalité de gestion des services sera bientôt disponible. Vous pourrez ajouter, modifier et supprimer des services pour votre camping.
                </div>
                
                <div class=\"mt-4\">
                    <h5>Exemples de services:</h5>
                    <table class=\"table table-striped\">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Description</th>
                                <th>Disponibilité</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Piscine</td>
                                <td>Piscine extérieure chauffée</td>
                                <td>9h - 20h</td>
                                <td>
                                    <button class=\"btn btn-sm btn-outline-primary\" disabled>Modifier</button>
                                    <button class=\"btn btn-sm btn-outline-danger\" disabled>Supprimer</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Restaurant</td>
                                <td>Restaurant avec terrasse</td>
                                <td>12h - 14h, 19h - 22h</td>
                                <td>
                                    <button class=\"btn btn-sm btn-outline-primary\" disabled>Modifier</button>
                                    <button class=\"btn btn-sm btn-outline-danger\" disabled>Supprimer</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
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
        return "service/index.html.twig";
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
        return array (  100 => 6,  87 => 5,  64 => 3,  41 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Services - Vaca-Meet{% endblock %}

{% block body %}
<div class=\"row\">
    <div class=\"col-12\">
        <div class=\"d-flex justify-content-between align-items-center mb-4\">
            <h1>Gestion des Services</h1>
            <button class=\"btn btn-primary\" disabled>
                <i class=\"bi bi-plus-circle me-2\"></i>Ajouter un service
            </button>
        </div>
        
        <div class=\"card\">
            <div class=\"card-body\">
                <div class=\"alert alert-info\">
                    <i class=\"bi bi-info-circle-fill me-2\"></i>
                    La fonctionnalité de gestion des services sera bientôt disponible. Vous pourrez ajouter, modifier et supprimer des services pour votre camping.
                </div>
                
                <div class=\"mt-4\">
                    <h5>Exemples de services:</h5>
                    <table class=\"table table-striped\">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Description</th>
                                <th>Disponibilité</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Piscine</td>
                                <td>Piscine extérieure chauffée</td>
                                <td>9h - 20h</td>
                                <td>
                                    <button class=\"btn btn-sm btn-outline-primary\" disabled>Modifier</button>
                                    <button class=\"btn btn-sm btn-outline-danger\" disabled>Supprimer</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Restaurant</td>
                                <td>Restaurant avec terrasse</td>
                                <td>12h - 14h, 19h - 22h</td>
                                <td>
                                    <button class=\"btn btn-sm btn-outline-primary\" disabled>Modifier</button>
                                    <button class=\"btn btn-sm btn-outline-danger\" disabled>Supprimer</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %} ", "service/index.html.twig", "C:\\Users\\PAGOA\\Documents\\GitHub\\Vaca-Meet-WEB\\templates\\service\\index.html.twig");
    }
}
