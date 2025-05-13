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

/* planning/index.html.twig */
class __TwigTemplate_fd20db40a0e6dff3667d5a71802a2093 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "planning/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "planning/index.html.twig"));

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

        yield "Planning - Vaca-Meet";
        
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
        <h1 class=\"mb-4\">Planning des Activités</h1>
        
        <div class=\"card\">
            <div class=\"card-body\">
                <div class=\"alert alert-info\">
                    <i class=\"bi bi-info-circle-fill me-2\"></i>
                    La fonctionnalité de planning sera bientôt disponible. Vous pourrez gérer et visualiser les activités de votre camping sur une base hebdomadaire.
                </div>
                
                <div class=\"mt-4\">
                    <div class=\"d-flex justify-content-between align-items-center mb-3\">
                        <h5>Planning hebdomadaire</h5>
                        <div>
                            <button class=\"btn btn-sm btn-outline-secondary me-2\" disabled>
                                <i class=\"bi bi-arrow-left me-1\"></i>Semaine précédente
                            </button>
                            <span class=\"fw-bold\">12 - 18 Mai 2025</span>
                            <button class=\"btn btn-sm btn-outline-secondary ms-2\" disabled>
                                Semaine suivante<i class=\"bi bi-arrow-right ms-1\"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class=\"table-responsive\">
                        <table class=\"table table-bordered\">
                            <thead class=\"table-light\">
                                <tr>
                                    <th style=\"width: 10%\">Horaire</th>
                                    <th>Lundi</th>
                                    <th>Mardi</th>
                                    <th>Mercredi</th>
                                    <th>Jeudi</th>
                                    <th>Vendredi</th>
                                    <th>Samedi</th>
                                    <th>Dimanche</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class=\"fw-bold\">9h - 11h</td>
                                    <td class=\"bg-info bg-opacity-10\">Yoga au bord de la piscine</td>
                                    <td></td>
                                    <td class=\"bg-info bg-opacity-10\">Yoga au bord de la piscine</td>
                                    <td></td>
                                    <td class=\"bg-info bg-opacity-10\">Yoga au bord de la piscine</td>
                                    <td></td>
                                    <td class=\"bg-success bg-opacity-10\">Brunch du dimanche</td>
                                </tr>
                                <tr>
                                    <td class=\"fw-bold\">11h - 13h</td>
                                    <td></td>
                                    <td class=\"bg-warning bg-opacity-10\">Atelier cuisine pour enfants</td>
                                    <td></td>
                                    <td class=\"bg-warning bg-opacity-10\">Atelier cuisine pour enfants</td>
                                    <td></td>
                                    <td class=\"bg-primary bg-opacity-10\">Concours de pétanque</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td class=\"fw-bold\">14h - 16h</td>
                                    <td class=\"bg-success bg-opacity-10\">Club enfants</td>
                                    <td class=\"bg-success bg-opacity-10\">Club enfants</td>
                                    <td class=\"bg-success bg-opacity-10\">Club enfants</td>
                                    <td class=\"bg-success bg-opacity-10\">Club enfants</td>
                                    <td class=\"bg-success bg-opacity-10\">Club enfants</td>
                                    <td class=\"bg-danger bg-opacity-10\">Tournoi de ping-pong</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td class=\"fw-bold\">16h - 18h</td>
                                    <td></td>
                                    <td class=\"bg-primary bg-opacity-10\">Aquagym</td>
                                    <td></td>
                                    <td class=\"bg-primary bg-opacity-10\">Aquagym</td>
                                    <td></td>
                                    <td class=\"bg-primary bg-opacity-10\">Aquagym</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td class=\"fw-bold\">19h - 22h</td>
                                    <td></td>
                                    <td></td>
                                    <td class=\"bg-danger bg-opacity-10\">Soirée barbecue</td>
                                    <td></td>
                                    <td></td>
                                    <td class=\"bg-danger bg-opacity-10\">Soirée dansante</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class=\"mt-3\">
                        <span class=\"badge bg-info bg-opacity-10 text-info me-2\">Bien-être</span>
                        <span class=\"badge bg-success bg-opacity-10 text-success me-2\">Enfants</span>
                        <span class=\"badge bg-warning bg-opacity-10 text-warning me-2\">Cuisine</span>
                        <span class=\"badge bg-primary bg-opacity-10 text-primary me-2\">Sport</span>
                        <span class=\"badge bg-danger bg-opacity-10 text-danger\">Animation</span>
                    </div>
                </div>
                
                <div class=\"mt-4\">
                    <button class=\"btn btn-primary\" disabled>
                        <i class=\"bi bi-plus-circle me-2\"></i>Ajouter une activité
                    </button>
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
        return "planning/index.html.twig";
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

{% block title %}Planning - Vaca-Meet{% endblock %}

{% block body %}
<div class=\"row\">
    <div class=\"col-12\">
        <h1 class=\"mb-4\">Planning des Activités</h1>
        
        <div class=\"card\">
            <div class=\"card-body\">
                <div class=\"alert alert-info\">
                    <i class=\"bi bi-info-circle-fill me-2\"></i>
                    La fonctionnalité de planning sera bientôt disponible. Vous pourrez gérer et visualiser les activités de votre camping sur une base hebdomadaire.
                </div>
                
                <div class=\"mt-4\">
                    <div class=\"d-flex justify-content-between align-items-center mb-3\">
                        <h5>Planning hebdomadaire</h5>
                        <div>
                            <button class=\"btn btn-sm btn-outline-secondary me-2\" disabled>
                                <i class=\"bi bi-arrow-left me-1\"></i>Semaine précédente
                            </button>
                            <span class=\"fw-bold\">12 - 18 Mai 2025</span>
                            <button class=\"btn btn-sm btn-outline-secondary ms-2\" disabled>
                                Semaine suivante<i class=\"bi bi-arrow-right ms-1\"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class=\"table-responsive\">
                        <table class=\"table table-bordered\">
                            <thead class=\"table-light\">
                                <tr>
                                    <th style=\"width: 10%\">Horaire</th>
                                    <th>Lundi</th>
                                    <th>Mardi</th>
                                    <th>Mercredi</th>
                                    <th>Jeudi</th>
                                    <th>Vendredi</th>
                                    <th>Samedi</th>
                                    <th>Dimanche</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class=\"fw-bold\">9h - 11h</td>
                                    <td class=\"bg-info bg-opacity-10\">Yoga au bord de la piscine</td>
                                    <td></td>
                                    <td class=\"bg-info bg-opacity-10\">Yoga au bord de la piscine</td>
                                    <td></td>
                                    <td class=\"bg-info bg-opacity-10\">Yoga au bord de la piscine</td>
                                    <td></td>
                                    <td class=\"bg-success bg-opacity-10\">Brunch du dimanche</td>
                                </tr>
                                <tr>
                                    <td class=\"fw-bold\">11h - 13h</td>
                                    <td></td>
                                    <td class=\"bg-warning bg-opacity-10\">Atelier cuisine pour enfants</td>
                                    <td></td>
                                    <td class=\"bg-warning bg-opacity-10\">Atelier cuisine pour enfants</td>
                                    <td></td>
                                    <td class=\"bg-primary bg-opacity-10\">Concours de pétanque</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td class=\"fw-bold\">14h - 16h</td>
                                    <td class=\"bg-success bg-opacity-10\">Club enfants</td>
                                    <td class=\"bg-success bg-opacity-10\">Club enfants</td>
                                    <td class=\"bg-success bg-opacity-10\">Club enfants</td>
                                    <td class=\"bg-success bg-opacity-10\">Club enfants</td>
                                    <td class=\"bg-success bg-opacity-10\">Club enfants</td>
                                    <td class=\"bg-danger bg-opacity-10\">Tournoi de ping-pong</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td class=\"fw-bold\">16h - 18h</td>
                                    <td></td>
                                    <td class=\"bg-primary bg-opacity-10\">Aquagym</td>
                                    <td></td>
                                    <td class=\"bg-primary bg-opacity-10\">Aquagym</td>
                                    <td></td>
                                    <td class=\"bg-primary bg-opacity-10\">Aquagym</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td class=\"fw-bold\">19h - 22h</td>
                                    <td></td>
                                    <td></td>
                                    <td class=\"bg-danger bg-opacity-10\">Soirée barbecue</td>
                                    <td></td>
                                    <td></td>
                                    <td class=\"bg-danger bg-opacity-10\">Soirée dansante</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class=\"mt-3\">
                        <span class=\"badge bg-info bg-opacity-10 text-info me-2\">Bien-être</span>
                        <span class=\"badge bg-success bg-opacity-10 text-success me-2\">Enfants</span>
                        <span class=\"badge bg-warning bg-opacity-10 text-warning me-2\">Cuisine</span>
                        <span class=\"badge bg-primary bg-opacity-10 text-primary me-2\">Sport</span>
                        <span class=\"badge bg-danger bg-opacity-10 text-danger\">Animation</span>
                    </div>
                </div>
                
                <div class=\"mt-4\">
                    <button class=\"btn btn-primary\" disabled>
                        <i class=\"bi bi-plus-circle me-2\"></i>Ajouter une activité
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %} ", "planning/index.html.twig", "C:\\Users\\PAGOA\\Documents\\GitHub\\Vaca-Meet-Application-Web-SYMFONY\\templates\\planning\\index.html.twig");
    }
}
