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

        yield "Planning des Activités - Vaca-Meet";
        
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
        yield "<div class=\"planning-container\">
    <h1 class=\"planning-title\">Planning des Activités</h1>

    <div class=\"planning-controls\">
        
        <!-- Affichage de la date en haut pour tous les écrans -->
        <div class=\"week-date-display mb-3 text-center\">
            <strong>";
        // line 13
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["weekDisplay"]) || array_key_exists("weekDisplay", $context) ? $context["weekDisplay"] : (function () { throw new RuntimeError('Variable "weekDisplay" does not exist.', 13, $this->source); })()), "html", null, true);
        yield "</strong>
            ";
        // line 14
        if (($this->extensions['Twig\Extension\CoreExtension']->formatDate($this->extensions['Twig\Extension\CoreExtension']->modifyDate("now", "monday this week"), "Y-m-d") != $this->extensions['Twig\Extension\CoreExtension']->formatDate((isset($context["startOfWeek"]) || array_key_exists("startOfWeek", $context) ? $context["startOfWeek"] : (function () { throw new RuntimeError('Variable "startOfWeek" does not exist.', 14, $this->source); })()), "Y-m-d"))) {
            // line 15
            yield "                <a href=\"";
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_index");
            yield "\" class=\"btn btn-sm btn-outline-primary ms-2\">
                    <i class=\"bi bi-calendar-week\"></i> Semaine actuelle
                </a>
            ";
        } else {
            // line 19
            yield "                <span class=\"badge bg-success ms-2\">Semaine actuelle</span>
            ";
        }
        // line 21
        yield "        </div>
        
        <div class=\"planning-navigation d-none d-md-flex\">
            <a href=\"";
        // line 24
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_index", ["week" => $this->extensions['Twig\Extension\CoreExtension']->formatDate((isset($context["previousWeek"]) || array_key_exists("previousWeek", $context) ? $context["previousWeek"] : (function () { throw new RuntimeError('Variable "previousWeek" does not exist.', 24, $this->source); })()), "Y-m-d")]), "html", null, true);
        yield "\" class=\"btn btn-nav\">
                <i class=\"bi bi-chevron-left\"></i> Semaine précédente
            </a>
            
            <div class=\"current-week d-none\">
                ";
        // line 29
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["weekDisplay"]) || array_key_exists("weekDisplay", $context) ? $context["weekDisplay"] : (function () { throw new RuntimeError('Variable "weekDisplay" does not exist.', 29, $this->source); })()), "html", null, true);
        yield "
                ";
        // line 30
        if (($this->extensions['Twig\Extension\CoreExtension']->formatDate($this->extensions['Twig\Extension\CoreExtension']->modifyDate("now", "monday this week"), "Y-m-d") != $this->extensions['Twig\Extension\CoreExtension']->formatDate((isset($context["startOfWeek"]) || array_key_exists("startOfWeek", $context) ? $context["startOfWeek"] : (function () { throw new RuntimeError('Variable "startOfWeek" does not exist.', 30, $this->source); })()), "Y-m-d"))) {
            // line 31
            yield "                    <a href=\"";
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_index");
            yield "\" class=\"btn btn-sm btn-outline-primary ms-2\">
                        <i class=\"bi bi-calendar-week\"></i> Revenir à la semaine actuelle
                    </a>
                ";
        } else {
            // line 35
            yield "                    <span class=\"badge bg-success ms-2\">Semaine actuelle</span>
                ";
        }
        // line 37
        yield "            </div>
                
            <a href=\"";
        // line 39
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_index", ["week" => $this->extensions['Twig\Extension\CoreExtension']->formatDate((isset($context["nextWeek"]) || array_key_exists("nextWeek", $context) ? $context["nextWeek"] : (function () { throw new RuntimeError('Variable "nextWeek" does not exist.', 39, $this->source); })()), "Y-m-d")]), "html", null, true);
        yield "\" class=\"btn btn-nav\">
                Semaine suivante <i class=\"bi bi-chevron-right\"></i>
            </a>
        </div>
        
        <!-- Version mobile : affichage de la semaine actuelle -->
        <div class=\"d-md-none current-week-mobile mb-3\">
            <div class=\"week-date text-center\">";
        // line 46
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["weekDisplay"]) || array_key_exists("weekDisplay", $context) ? $context["weekDisplay"] : (function () { throw new RuntimeError('Variable "weekDisplay" does not exist.', 46, $this->source); })()), "html", null, true);
        yield "</div>
            ";
        // line 47
        if (($this->extensions['Twig\Extension\CoreExtension']->formatDate($this->extensions['Twig\Extension\CoreExtension']->modifyDate("now", "monday this week"), "Y-m-d") != $this->extensions['Twig\Extension\CoreExtension']->formatDate((isset($context["startOfWeek"]) || array_key_exists("startOfWeek", $context) ? $context["startOfWeek"] : (function () { throw new RuntimeError('Variable "startOfWeek" does not exist.', 47, $this->source); })()), "Y-m-d"))) {
            // line 48
            yield "                <div class=\"text-center mt-1\">
                    <a href=\"";
            // line 49
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_index");
            yield "\" class=\"btn btn-sm btn-outline-primary\">
                        <i class=\"bi bi-calendar-week\"></i> Revenir à la semaine actuelle
                    </a>
                </div>
            ";
        } else {
            // line 54
            yield "                <div class=\"text-center mt-1\">
                    <span class=\"badge bg-success\">Semaine actuelle</span>
                </div>
            ";
        }
        // line 58
        yield "        </div>
        
        <!-- Boutons de navigation pour mobile uniquement -->
        <div class=\"planning-navigation-buttons d-flex d-md-none\">
            <a href=\"";
        // line 62
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_index", ["week" => $this->extensions['Twig\Extension\CoreExtension']->formatDate((isset($context["previousWeek"]) || array_key_exists("previousWeek", $context) ? $context["previousWeek"] : (function () { throw new RuntimeError('Variable "previousWeek" does not exist.', 62, $this->source); })()), "Y-m-d")]), "html", null, true);
        yield "\" class=\"btn btn-nav\">
                <i class=\"bi bi-chevron-left\"></i> Semaine précédente
            </a>
            <a href=\"";
        // line 65
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_index", ["week" => $this->extensions['Twig\Extension\CoreExtension']->formatDate((isset($context["nextWeek"]) || array_key_exists("nextWeek", $context) ? $context["nextWeek"] : (function () { throw new RuntimeError('Variable "nextWeek" does not exist.', 65, $this->source); })()), "Y-m-d")]), "html", null, true);
        yield "\" class=\"btn btn-nav\">
                Semaine suivante <i class=\"bi bi-chevron-right\"></i>
            </a>
        </div>
    </div>
    
    <div class=\"table-responsive\">
        <table class=\"planning-table\">
            <thead>
                <tr>
                    <th class=\"time-col\">Horaire</th>
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
                ";
        // line 86
        if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), ((array_key_exists("activities", $context)) ? (Twig\Extension\CoreExtension::default((isset($context["activities"]) || array_key_exists("activities", $context) ? $context["activities"] : (function () { throw new RuntimeError('Variable "activities" does not exist.', 86, $this->source); })()), [])) : ([]))) > 0)) {
            // line 87
            yield "                    ";
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable((isset($context["planningGrid"]) || array_key_exists("planningGrid", $context) ? $context["planningGrid"] : (function () { throw new RuntimeError('Variable "planningGrid" does not exist.', 87, $this->source); })()));
            foreach ($context['_seq'] as $context["timeLabel"] => $context["days"]) {
                // line 88
                yield "                        <tr>
                            <td class=\"time-slot\">";
                // line 89
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["timeLabel"], "html", null, true);
                yield "</td>
                            ";
                // line 90
                $context['_parent'] = $context;
                $context['_seq'] = CoreExtension::ensureTraversable(range(1, 7));
                foreach ($context['_seq'] as $context["_key"] => $context["day"]) {
                    // line 91
                    yield "                                <td class=\"activity-cell";
                    if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, $context["days"], $context["day"], [], "array", false, false, false, 91)) > 0)) {
                        yield " has-activity";
                    }
                    yield "\">
                                    ";
                    // line 92
                    if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, $context["days"], $context["day"], [], "array", false, false, false, 92)) > 0)) {
                        // line 93
                        yield "                                        ";
                        $context["activity"] = CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["days"], $context["day"], [], "array", false, false, false, 93), 0, [], "array", false, false, false, 93);
                        // line 94
                        yield "                                        <div class=\"activity-item\" style=\"background-color: ";
                        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["activity"]) || array_key_exists("activity", $context) ? $context["activity"] : (function () { throw new RuntimeError('Variable "activity" does not exist.', 94, $this->source); })()), "category", [], "any", false, false, false, 94), "color", [], "any", false, false, false, 94), "html", null, true);
                        yield "\">
                                            <div class=\"activity-name\">";
                        // line 95
                        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["activity"]) || array_key_exists("activity", $context) ? $context["activity"] : (function () { throw new RuntimeError('Variable "activity" does not exist.', 95, $this->source); })()), "name", [], "any", false, false, false, 95), "html", null, true);
                        yield "</div>
                                        </div>
                                    ";
                    }
                    // line 98
                    yield "                                </td>
                            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_key'], $context['day'], $context['_parent']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 100
                yield "                        </tr>
                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['timeLabel'], $context['days'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 102
            yield "                ";
        } else {
            // line 103
            yield "                    <tr>
                        <td colspan=\"8\" class=\"text-center py-5\">
                            <div class=\"alert alert-info mb-0\">
                                <i class=\"bi bi-info-circle me-2\"></i>
                                Aucune activité n'est planifiée pour cette semaine. Utilisez le bouton \"Ajouter une activité\" pour commencer à planifier.
                            </div>
                        </td>
                    </tr>
                ";
        }
        // line 112
        yield "            </tbody>
        </table>
    </div>
    
    <div class=\"filters-container mt-4 mb-3\">
        <div class=\"activity-filters\">
            ";
        // line 118
        if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), ((array_key_exists("categories", $context)) ? (Twig\Extension\CoreExtension::default((isset($context["categories"]) || array_key_exists("categories", $context) ? $context["categories"] : (function () { throw new RuntimeError('Variable "categories" does not exist.', 118, $this->source); })()), [])) : ([]))) > 0)) {
            // line 119
            yield "                ";
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable((isset($context["categories"]) || array_key_exists("categories", $context) ? $context["categories"] : (function () { throw new RuntimeError('Variable "categories" does not exist.', 119, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["category"]) {
                // line 120
                yield "                    <div class=\"filter-item\">
                        <span class=\"color-dot\" style=\"background-color: ";
                // line 121
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "color", [], "any", false, false, false, 121), "html", null, true);
                yield "\"></span>
                        <span class=\"filter-label\">";
                // line 122
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "name", [], "any", false, false, false, 122), "html", null, true);
                yield "</span>
                    </div>
                ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_key'], $context['category'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 125
            yield "            ";
        } else {
            // line 126
            yield "                <div class=\"text-center w-100\">
                    <p class=\"text-muted\">Aucune catégorie d'activité n'est disponible pour le moment.</p>
                </div>
            ";
        }
        // line 130
        yield "        </div>
    </div>
    
    <div class=\"add-activity-container\">
        <a href=\"#\" class=\"btn btn-add-activity\" data-bs-toggle=\"modal\" data-bs-target=\"#addActivityModal\">
            <i class=\"bi bi-plus-circle\"></i> Ajouter une activité
        </a>
        <a href=\"#\" class=\"btn btn-manage-activity ms-2\" data-bs-toggle=\"modal\" data-bs-target=\"#manageActivitiesModal\">
            <i class=\"bi bi-gear\"></i> Gérer les activités 
        </a>
    </div>
</div>

<!-- Modal Ajout d'Activité -->
<div class=\"modal fade\" id=\"addActivityModal\" tabindex=\"-1\" aria-labelledby=\"addActivityModalLabel\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-lg\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h5 class=\"modal-title\" id=\"addActivityModalLabel\">Ajouter une activité</h5>
                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Fermer\"></button>
            </div>
            <div class=\"modal-body\">
                <form id=\"addActivityForm\" data-url=\"";
        // line 152
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_add_activity");
        yield "\" data-token=\"";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken("activity_token"), "html", null, true);
        yield "\">
                    <div class=\"mb-3\">
                        <select class=\"form-select\" id=\"activitySelect\">
                            <option selected disabled>Sélectionner une activité existante</option>
                            <option value=\"new\">Créer une nouvelle activité</option>
                            ";
        // line 157
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(((array_key_exists("existingActivities", $context)) ? (Twig\Extension\CoreExtension::default((isset($context["existingActivities"]) || array_key_exists("existingActivities", $context) ? $context["existingActivities"] : (function () { throw new RuntimeError('Variable "existingActivities" does not exist.', 157, $this->source); })()), [])) : ([])));
        foreach ($context['_seq'] as $context["_key"] => $context["activity"]) {
            // line 158
            yield "                                <option value=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "id", [], "any", false, false, false, 158), "html", null, true);
            yield "\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "name", [], "any", false, false, false, 158), "html", null, true);
            yield "</option>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['activity'], $context['_parent']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 160
        yield "                        </select>
                    </div>
                    
                    <!-- Champs pour nouvelle activité (visible seulement si \"Créer nouvelle activité\" est sélectionné) -->
                    <div id=\"newActivityFields\" style=\"display: none;\">
                        <div class=\"mb-3\">
                            <input type=\"text\" class=\"form-control\" id=\"activityName\" placeholder=\"Nom de l'activité\">
                        </div>
                        <div class=\"mb-3\">
                            <textarea class=\"form-control\" id=\"activityDescription\" rows=\"2\" placeholder=\"Description de l'activité...\"></textarea>
                        </div>
                    </div>
                    
                    <div class=\"mb-3\">
                        <select class=\"form-select\" id=\"categorySelect\">
                            <option selected disabled>Sélectionner une catégorie</option>
                            <option value=\"new\">Créer une nouvelle catégorie</option>
                            ";
        // line 177
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(((array_key_exists("categories", $context)) ? (Twig\Extension\CoreExtension::default((isset($context["categories"]) || array_key_exists("categories", $context) ? $context["categories"] : (function () { throw new RuntimeError('Variable "categories" does not exist.', 177, $this->source); })()), [])) : ([])));
        foreach ($context['_seq'] as $context["_key"] => $context["category"]) {
            // line 178
            yield "                                <option value=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "id", [], "any", false, false, false, 178), "html", null, true);
            yield "\" data-color=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "color", [], "any", false, false, false, 178), "html", null, true);
            yield "\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "name", [], "any", false, false, false, 178), "html", null, true);
            yield "</option>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['category'], $context['_parent']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 180
        yield "                        </select>
                    </div>
                    
                    <!-- Champs pour nouvelle catégorie (visible seulement si \"Créer nouvelle catégorie\" est sélectionné) -->
                    <div id=\"newCategoryFields\" style=\"display: none;\" class=\"mb-3\">
                        <div class=\"row g-3\">
                            <div class=\"col-9\">
                                <input type=\"text\" class=\"form-control\" id=\"categoryName\" placeholder=\"Nom de la catégorie\">
                            </div>
                            <div class=\"col-3\">
                                <input type=\"color\" class=\"form-control form-control-color w-100\" id=\"categoryColor\" value=\"#8edce6\">
                            </div>
                        </div>
                    </div>
                    
                    <div class=\"row mb-3\">
                        <div class=\"col-4\">
                            <input type=\"date\" class=\"form-control form-control-lg custom-height\" id=\"activityDate\" value=\"";
        // line 197
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate((isset($context["startOfWeek"]) || array_key_exists("startOfWeek", $context) ? $context["startOfWeek"] : (function () { throw new RuntimeError('Variable "startOfWeek" does not exist.', 197, $this->source); })()), "Y-m-d"), "html", null, true);
        yield "\">
                        </div>
                        <div class=\"col-4\">
                            <select class=\"form-select form-select-lg custom-height\" id=\"startTime\">
                                <option value=\"08:00\">08:00</option>
                                <option value=\"09:00\">09:00</option>
                                <option value=\"10:00\">10:00</option>
                                <option value=\"11:00\">11:00</option>
                                <option value=\"12:00\">12:00</option>
                                <option value=\"13:00\">13:00</option>
                                <option value=\"14:00\">14:00</option>
                                <option value=\"15:00\">15:00</option>
                                <option value=\"16:00\">16:00</option>
                                <option value=\"17:00\">17:00</option>
                                <option value=\"18:00\">18:00</option>
                                <option value=\"19:00\">19:00</option>
                                <option value=\"20:00\">20:00</option>
                            </select>
                        </div>
                        <div class=\"col-4\">
                            <select class=\"form-select form-select-lg custom-height\" id=\"endTime\">
                                <option value=\"09:00\">09:00</option>
                                <option value=\"10:00\">10:00</option>
                                <option value=\"11:00\">11:00</option>
                                <option value=\"12:00\">12:00</option>
                                <option value=\"13:00\">13:00</option>
                                <option value=\"14:00\">14:00</option>
                                <option value=\"15:00\">15:00</option>
                                <option value=\"16:00\">16:00</option>
                                <option value=\"17:00\">17:00</option>
                                <option value=\"18:00\">18:00</option>
                                <option value=\"19:00\">19:00</option>
                                <option value=\"20:00\">20:00</option>
                                <option value=\"22:00\">22:00</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class=\"form-check mb-3\">
                        <input class=\"form-check-input\" type=\"checkbox\" id=\"isRecurring\">
                        <label class=\"form-check-label\" for=\"isRecurring\">
                            Activité récurrente
                        </label>
                    </div>
                    
                    <!-- Options de récurrence (visibles seulement si \"Activité récurrente\" est cochée) -->
                    <div id=\"recurringOptions\" style=\"display: none;\" class=\"mb-3\">
                        <div class=\"d-flex flex-wrap\">
                            <div class=\"form-check me-3\">
                                <input class=\"form-check-input\" type=\"checkbox\" id=\"recurDay1\" value=\"1\">
                                <label class=\"form-check-label\" for=\"recurDay1\">Lundi</label>
                            </div>
                            <div class=\"form-check me-3\">
                                <input class=\"form-check-input\" type=\"checkbox\" id=\"recurDay2\" value=\"2\">
                                <label class=\"form-check-label\" for=\"recurDay2\">Mardi</label>
                            </div>
                            <div class=\"form-check me-3\">
                                <input class=\"form-check-input\" type=\"checkbox\" id=\"recurDay3\" value=\"3\">
                                <label class=\"form-check-label\" for=\"recurDay3\">Mercredi</label>
                            </div>
                            <div class=\"form-check me-3\">
                                <input class=\"form-check-input\" type=\"checkbox\" id=\"recurDay4\" value=\"4\">
                                <label class=\"form-check-label\" for=\"recurDay4\">Jeudi</label>
                            </div>
                            <div class=\"form-check me-3\">
                                <input class=\"form-check-input\" type=\"checkbox\" id=\"recurDay5\" value=\"5\">
                                <label class=\"form-check-label\" for=\"recurDay5\">Vendredi</label>
                            </div>
                            <div class=\"form-check me-3\">
                                <input class=\"form-check-input\" type=\"checkbox\" id=\"recurDay6\" value=\"6\">
                                <label class=\"form-check-label\" for=\"recurDay6\">Samedi</label>
                            </div>
                            <div class=\"form-check\">
                                <input class=\"form-check-input\" type=\"checkbox\" id=\"recurDay7\" value=\"0\">
                                <label class=\"form-check-label\" for=\"recurDay7\">Dimanche</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class=\"alert alert-success\" id=\"successMessage\" style=\"display: none;\">
                        Activité ajoutée avec succès !
                    </div>
                    <div class=\"alert alert-danger\" id=\"errorMessage\" style=\"display: none;\">
                        Une erreur est survenue lors de l'ajout de l'activité.
                    </div>
                </form>
            </div>
            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Annuler</button>
                <button type=\"button\" class=\"btn btn-primary\" id=\"saveActivity\">Enregistrer</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal Gestion des Activités -->
<div class=\"modal fade\" id=\"manageActivitiesModal\" tabindex=\"-1\" aria-labelledby=\"manageActivitiesModalLabel\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-xl\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h5 class=\"modal-title\" id=\"manageActivitiesModalLabel\">Gérer les activités de la semaine du ";
        // line 297
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["weekDisplay"]) || array_key_exists("weekDisplay", $context) ? $context["weekDisplay"] : (function () { throw new RuntimeError('Variable "weekDisplay" does not exist.', 297, $this->source); })()), "html", null, true);
        yield "</h5>
                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Fermer\"></button>
            </div>
            <div class=\"modal-body\">
                ";
        // line 301
        if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), ((array_key_exists("activities", $context)) ? (Twig\Extension\CoreExtension::default((isset($context["activities"]) || array_key_exists("activities", $context) ? $context["activities"] : (function () { throw new RuntimeError('Variable "activities" does not exist.', 301, $this->source); })()), [])) : ([]))) > 0)) {
            // line 302
            yield "                    <div class=\"table-responsive\">
                        <table class=\"table table-striped table-bordered\">
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Catégorie</th>
                                    <th class=\"mobile-hide\">Couleur</th>
                                    <th>Jour</th>
                                    <th class=\"mobile-hide\">Début</th>
                                    <th class=\"mobile-hide\">Fin</th>
                                    <th class=\"actions-column\">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ";
            // line 316
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable((isset($context["activities"]) || array_key_exists("activities", $context) ? $context["activities"] : (function () { throw new RuntimeError('Variable "activities" does not exist.', 316, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["activity"]) {
                // line 317
                yield "                                <tr data-activity-id=\"";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "id", [], "any", false, false, false, 317), "html", null, true);
                yield "\">
                                    <td>";
                // line 318
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "name", [], "any", false, false, false, 318), "html", null, true);
                yield "</td>
                                    <td>";
                // line 319
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "category", [], "any", false, false, false, 319), "name", [], "any", false, false, false, 319), "html", null, true);
                yield "</td>
                                    <td class=\"mobile-hide\">
                                        <span class=\"color-dot\" style=\"background-color: ";
                // line 321
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "category", [], "any", false, false, false, 321), "color", [], "any", false, false, false, 321), "html", null, true);
                yield "\"></span>
                                        <span class=\"color-code\">";
                // line 322
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "category", [], "any", false, false, false, 322), "color", [], "any", false, false, false, 322), "html", null, true);
                yield "</span>
                                    </td>
                                    <td>";
                // line 324
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(Twig\Extension\CoreExtension::capitalize($this->env->getCharset(), $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "startDateTime", [], "any", false, false, false, 324), "l"), [], "messages")), "html", null, true);
                yield "</td>
                                    <td class=\"mobile-hide\">";
                // line 325
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "startDateTime", [], "any", false, false, false, 325), "H:i"), "html", null, true);
                yield "</td>
                                    <td class=\"mobile-hide\">";
                // line 326
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "endDateTime", [], "any", false, false, false, 326), "H:i"), "html", null, true);
                yield "</td>
                                    <td>
                                        <div class=\"action-buttons\">
                                            <button type=\"button\" class=\"btn btn-sm btn-primary edit-activity-btn\" 
                                                    data-activity-id=\"";
                // line 330
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "id", [], "any", false, false, false, 330), "html", null, true);
                yield "\"
                                                    data-activity-name=\"";
                // line 331
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "name", [], "any", false, false, false, 331), "html", null, true);
                yield "\"
                                                    data-activity-description=\"";
                // line 332
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "description", [], "any", false, false, false, 332), "html", null, true);
                yield "\"
                                                    data-activity-category=\"";
                // line 333
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "category", [], "any", false, false, false, 333), "id", [], "any", false, false, false, 333), "html", null, true);
                yield "\"
                                                    data-activity-date=\"";
                // line 334
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "startDateTime", [], "any", false, false, false, 334), "Y-m-d"), "html", null, true);
                yield "\"
                                                    data-activity-start=\"";
                // line 335
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "startDateTime", [], "any", false, false, false, 335), "H:i"), "html", null, true);
                yield "\"
                                                    data-activity-end=\"";
                // line 336
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "endDateTime", [], "any", false, false, false, 336), "H:i"), "html", null, true);
                yield "\">
                                                <i class=\"bi bi-pencil-square\"></i>
                                            </button>
                                            <button type=\"button\" class=\"btn btn-sm btn-danger delete-activity-btn\" 
                                                    data-activity-id=\"";
                // line 340
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "id", [], "any", false, false, false, 340), "html", null, true);
                yield "\"
                                                    data-activity-name=\"";
                // line 341
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "name", [], "any", false, false, false, 341), "html", null, true);
                yield "\">
                                                <i class=\"bi bi-trash\"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_key'], $context['activity'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 348
            yield "                            </tbody>
                        </table>
                    </div>
                ";
        } else {
            // line 352
            yield "                    <div class=\"alert alert-info\">
                        <i class=\"bi bi-info-circle me-2\"></i>
                        Aucune activité n'est planifiée pour cette semaine.
                    </div>
                ";
        }
        // line 357
        yield "            </div>
            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Fermer</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal Modification d'Activité -->
<div class=\"modal fade\" id=\"editActivityModal\" tabindex=\"-1\" aria-labelledby=\"editActivityModalLabel\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-lg\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h5 class=\"modal-title\" id=\"editActivityModalLabel\">Modifier une activité</h5>
                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Fermer\"></button>
            </div>
            <div class=\"modal-body\">
                <form id=\"editActivityForm\" data-url=\"";
        // line 374
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_edit_activity");
        yield "\">
                    <input type=\"hidden\" id=\"editActivityId\">
                    
                    <div class=\"mb-3\">
                        <select class=\"form-select\" id=\"editActivitySelect\">
                            <option selected disabled>Sélectionner une activité existante</option>
                            <option value=\"new\">Créer une nouvelle activité</option>
                            ";
        // line 381
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(((array_key_exists("existingActivities", $context)) ? (Twig\Extension\CoreExtension::default((isset($context["existingActivities"]) || array_key_exists("existingActivities", $context) ? $context["existingActivities"] : (function () { throw new RuntimeError('Variable "existingActivities" does not exist.', 381, $this->source); })()), [])) : ([])));
        foreach ($context['_seq'] as $context["_key"] => $context["activity"]) {
            // line 382
            yield "                                <option value=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "id", [], "any", false, false, false, 382), "html", null, true);
            yield "\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "name", [], "any", false, false, false, 382), "html", null, true);
            yield "</option>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['activity'], $context['_parent']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 384
        yield "                        </select>
                    </div>
                    
                    <div id=\"editActivityFields\" style=\"display: none;\">
                        <div class=\"mb-3\">
                            <input type=\"text\" class=\"form-control\" id=\"editActivityName\" placeholder=\"Nom de l'activité\" required>
                        </div>
                        <div class=\"mb-3\">
                            <textarea class=\"form-control\" id=\"editActivityDescription\" rows=\"2\" placeholder=\"Description de l'activité...\"></textarea>
                        </div>
                    </div>
                    
                    <div class=\"mb-3\">
                        <select class=\"form-select\" id=\"editCategorySelect\" required>
                            <option selected disabled>Sélectionner une catégorie</option>
                            <option value=\"new\">Créer une nouvelle catégorie</option>
                            ";
        // line 400
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(((array_key_exists("categories", $context)) ? (Twig\Extension\CoreExtension::default((isset($context["categories"]) || array_key_exists("categories", $context) ? $context["categories"] : (function () { throw new RuntimeError('Variable "categories" does not exist.', 400, $this->source); })()), [])) : ([])));
        foreach ($context['_seq'] as $context["_key"] => $context["category"]) {
            // line 401
            yield "                                <option value=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "id", [], "any", false, false, false, 401), "html", null, true);
            yield "\" data-color=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "color", [], "any", false, false, false, 401), "html", null, true);
            yield "\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "name", [], "any", false, false, false, 401), "html", null, true);
            yield "</option>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['category'], $context['_parent']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 403
        yield "                        </select>
                    </div>
                    
                    <!-- Champs pour nouvelle catégorie (visible seulement si \"Créer nouvelle catégorie\" est sélectionné) -->
                    <div id=\"editNewCategoryFields\" style=\"display: none;\" class=\"mb-3\">
                        <div class=\"row g-3\">
                            <div class=\"col-9\">
                                <input type=\"text\" class=\"form-control\" id=\"editCategoryName\" placeholder=\"Nom de la catégorie\">
                            </div>
                            <div class=\"col-3\">
                                <input type=\"color\" class=\"form-control form-control-color w-100\" id=\"editCategoryColor\" value=\"#8edce6\">
                            </div>
                        </div>
                    </div>
                    
                    <div class=\"row mb-3\">
                        <div class=\"col-4\">
                            <input type=\"date\" class=\"form-control form-control-lg custom-height\" id=\"editActivityDate\" required>
                        </div>
                        <div class=\"col-4\">
                            <select class=\"form-select form-select-lg custom-height\" id=\"editStartTime\" required>
                                <option value=\"08:00\">08:00</option>
                                <option value=\"09:00\">09:00</option>
                                <option value=\"10:00\">10:00</option>
                                <option value=\"11:00\">11:00</option>
                                <option value=\"12:00\">12:00</option>
                                <option value=\"13:00\">13:00</option>
                                <option value=\"14:00\">14:00</option>
                                <option value=\"15:00\">15:00</option>
                                <option value=\"16:00\">16:00</option>
                                <option value=\"17:00\">17:00</option>
                                <option value=\"18:00\">18:00</option>
                                <option value=\"19:00\">19:00</option>
                                <option value=\"20:00\">20:00</option>
                            </select>
                        </div>
                        <div class=\"col-4\">
                            <select class=\"form-select form-select-lg custom-height\" id=\"editEndTime\" required>
                                <option value=\"09:00\">09:00</option>
                                <option value=\"10:00\">10:00</option>
                                <option value=\"11:00\">11:00</option>
                                <option value=\"12:00\">12:00</option>
                                <option value=\"13:00\">13:00</option>
                                <option value=\"14:00\">14:00</option>
                                <option value=\"15:00\">15:00</option>
                                <option value=\"16:00\">16:00</option>
                                <option value=\"17:00\">17:00</option>
                                <option value=\"18:00\">18:00</option>
                                <option value=\"19:00\">19:00</option>
                                <option value=\"20:00\">20:00</option>
                                <option value=\"22:00\">22:00</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class=\"alert alert-success\" id=\"editSuccessMessage\" style=\"display: none;\">
                        Activité modifiée avec succès !
                    </div>
                    <div class=\"alert alert-danger\" id=\"editErrorMessage\" style=\"display: none;\">
                        Une erreur est survenue lors de la modification de l'activité.
                    </div>
                </form>
            </div>
            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Annuler</button>
                <button type=\"button\" class=\"btn btn-primary\" id=\"saveEditActivity\">Enregistrer</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal Confirmation de Suppression -->
<div class=\"modal fade\" id=\"deleteConfirmModal\" tabindex=\"-1\" aria-labelledby=\"deleteConfirmModalLabel\" aria-hidden=\"true\">
    <div class=\"modal-dialog\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h5 class=\"modal-title\" id=\"deleteConfirmModalLabel\">Confirmer la suppression</h5>
                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Fermer\"></button>
            </div>
            <div class=\"modal-body\">
                <p>Êtes-vous sûr de vouloir supprimer l'activité \"<span id=\"deleteActivityName\"></span>\" ?</p>
                <p class=\"text-danger\">Cette action est irréversible.</p>
                <input type=\"hidden\" id=\"deleteActivityId\">
            </div>
            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Annuler</button>
                <button type=\"button\" class=\"btn btn-danger\" id=\"confirmDeleteActivity\">Supprimer</button>
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
        return array (  754 => 403,  741 => 401,  737 => 400,  719 => 384,  708 => 382,  704 => 381,  694 => 374,  675 => 357,  668 => 352,  662 => 348,  649 => 341,  645 => 340,  638 => 336,  634 => 335,  630 => 334,  626 => 333,  622 => 332,  618 => 331,  614 => 330,  607 => 326,  603 => 325,  599 => 324,  594 => 322,  590 => 321,  585 => 319,  581 => 318,  576 => 317,  572 => 316,  556 => 302,  554 => 301,  547 => 297,  444 => 197,  425 => 180,  412 => 178,  408 => 177,  389 => 160,  378 => 158,  374 => 157,  364 => 152,  340 => 130,  334 => 126,  331 => 125,  322 => 122,  318 => 121,  315 => 120,  310 => 119,  308 => 118,  300 => 112,  289 => 103,  286 => 102,  279 => 100,  272 => 98,  266 => 95,  261 => 94,  258 => 93,  256 => 92,  249 => 91,  245 => 90,  241 => 89,  238 => 88,  233 => 87,  231 => 86,  207 => 65,  201 => 62,  195 => 58,  189 => 54,  181 => 49,  178 => 48,  176 => 47,  172 => 46,  162 => 39,  158 => 37,  154 => 35,  146 => 31,  144 => 30,  140 => 29,  132 => 24,  127 => 21,  123 => 19,  115 => 15,  113 => 14,  109 => 13,  100 => 6,  87 => 5,  64 => 3,  41 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Planning des Activités - Vaca-Meet{% endblock %}

{% block body %}
<div class=\"planning-container\">
    <h1 class=\"planning-title\">Planning des Activités</h1>

    <div class=\"planning-controls\">
        
        <!-- Affichage de la date en haut pour tous les écrans -->
        <div class=\"week-date-display mb-3 text-center\">
            <strong>{{ weekDisplay }}</strong>
            {% if \"now\"|date_modify(\"monday this week\")|date(\"Y-m-d\") != startOfWeek|date(\"Y-m-d\") %}
                <a href=\"{{ path('app_planning_index') }}\" class=\"btn btn-sm btn-outline-primary ms-2\">
                    <i class=\"bi bi-calendar-week\"></i> Semaine actuelle
                </a>
            {% else %}
                <span class=\"badge bg-success ms-2\">Semaine actuelle</span>
            {% endif %}
        </div>
        
        <div class=\"planning-navigation d-none d-md-flex\">
            <a href=\"{{ path('app_planning_index', {'week': previousWeek|date('Y-m-d')}) }}\" class=\"btn btn-nav\">
                <i class=\"bi bi-chevron-left\"></i> Semaine précédente
            </a>
            
            <div class=\"current-week d-none\">
                {{ weekDisplay }}
                {% if \"now\"|date_modify(\"monday this week\")|date(\"Y-m-d\") != startOfWeek|date(\"Y-m-d\") %}
                    <a href=\"{{ path('app_planning_index') }}\" class=\"btn btn-sm btn-outline-primary ms-2\">
                        <i class=\"bi bi-calendar-week\"></i> Revenir à la semaine actuelle
                    </a>
                {% else %}
                    <span class=\"badge bg-success ms-2\">Semaine actuelle</span>
                {% endif %}
            </div>
                
            <a href=\"{{ path('app_planning_index', {'week': nextWeek|date('Y-m-d')}) }}\" class=\"btn btn-nav\">
                Semaine suivante <i class=\"bi bi-chevron-right\"></i>
            </a>
        </div>
        
        <!-- Version mobile : affichage de la semaine actuelle -->
        <div class=\"d-md-none current-week-mobile mb-3\">
            <div class=\"week-date text-center\">{{ weekDisplay }}</div>
            {% if \"now\"|date_modify(\"monday this week\")|date(\"Y-m-d\") != startOfWeek|date(\"Y-m-d\") %}
                <div class=\"text-center mt-1\">
                    <a href=\"{{ path('app_planning_index') }}\" class=\"btn btn-sm btn-outline-primary\">
                        <i class=\"bi bi-calendar-week\"></i> Revenir à la semaine actuelle
                    </a>
                </div>
            {% else %}
                <div class=\"text-center mt-1\">
                    <span class=\"badge bg-success\">Semaine actuelle</span>
                </div>
            {% endif %}
        </div>
        
        <!-- Boutons de navigation pour mobile uniquement -->
        <div class=\"planning-navigation-buttons d-flex d-md-none\">
            <a href=\"{{ path('app_planning_index', {'week': previousWeek|date('Y-m-d')}) }}\" class=\"btn btn-nav\">
                <i class=\"bi bi-chevron-left\"></i> Semaine précédente
            </a>
            <a href=\"{{ path('app_planning_index', {'week': nextWeek|date('Y-m-d')}) }}\" class=\"btn btn-nav\">
                Semaine suivante <i class=\"bi bi-chevron-right\"></i>
            </a>
        </div>
    </div>
    
    <div class=\"table-responsive\">
        <table class=\"planning-table\">
            <thead>
                <tr>
                    <th class=\"time-col\">Horaire</th>
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
                {% if activities|default([])|length > 0 %}
                    {% for timeLabel, days in planningGrid %}
                        <tr>
                            <td class=\"time-slot\">{{ timeLabel }}</td>
                            {% for day in 1..7 %}
                                <td class=\"activity-cell{% if days[day]|length > 0 %} has-activity{% endif %}\">
                                    {% if days[day]|length > 0 %}
                                        {% set activity = days[day][0] %}
                                        <div class=\"activity-item\" style=\"background-color: {{ activity.category.color }}\">
                                            <div class=\"activity-name\">{{ activity.name }}</div>
                                        </div>
                                    {% endif %}
                                </td>
                            {% endfor %}
                        </tr>
                    {% endfor %}
                {% else %}
                    <tr>
                        <td colspan=\"8\" class=\"text-center py-5\">
                            <div class=\"alert alert-info mb-0\">
                                <i class=\"bi bi-info-circle me-2\"></i>
                                Aucune activité n'est planifiée pour cette semaine. Utilisez le bouton \"Ajouter une activité\" pour commencer à planifier.
                            </div>
                        </td>
                    </tr>
                {% endif %}
            </tbody>
        </table>
    </div>
    
    <div class=\"filters-container mt-4 mb-3\">
        <div class=\"activity-filters\">
            {% if categories|default([])|length > 0 %}
                {% for category in categories %}
                    <div class=\"filter-item\">
                        <span class=\"color-dot\" style=\"background-color: {{ category.color }}\"></span>
                        <span class=\"filter-label\">{{ category.name }}</span>
                    </div>
                {% endfor %}
            {% else %}
                <div class=\"text-center w-100\">
                    <p class=\"text-muted\">Aucune catégorie d'activité n'est disponible pour le moment.</p>
                </div>
            {% endif %}
        </div>
    </div>
    
    <div class=\"add-activity-container\">
        <a href=\"#\" class=\"btn btn-add-activity\" data-bs-toggle=\"modal\" data-bs-target=\"#addActivityModal\">
            <i class=\"bi bi-plus-circle\"></i> Ajouter une activité
        </a>
        <a href=\"#\" class=\"btn btn-manage-activity ms-2\" data-bs-toggle=\"modal\" data-bs-target=\"#manageActivitiesModal\">
            <i class=\"bi bi-gear\"></i> Gérer les activités 
        </a>
    </div>
</div>

<!-- Modal Ajout d'Activité -->
<div class=\"modal fade\" id=\"addActivityModal\" tabindex=\"-1\" aria-labelledby=\"addActivityModalLabel\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-lg\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h5 class=\"modal-title\" id=\"addActivityModalLabel\">Ajouter une activité</h5>
                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Fermer\"></button>
            </div>
            <div class=\"modal-body\">
                <form id=\"addActivityForm\" data-url=\"{{ path('app_planning_add_activity') }}\" data-token=\"{{ csrf_token('activity_token') }}\">
                    <div class=\"mb-3\">
                        <select class=\"form-select\" id=\"activitySelect\">
                            <option selected disabled>Sélectionner une activité existante</option>
                            <option value=\"new\">Créer une nouvelle activité</option>
                            {% for activity in existingActivities|default([]) %}
                                <option value=\"{{ activity.id }}\">{{ activity.name }}</option>
                            {% endfor %}
                        </select>
                    </div>
                    
                    <!-- Champs pour nouvelle activité (visible seulement si \"Créer nouvelle activité\" est sélectionné) -->
                    <div id=\"newActivityFields\" style=\"display: none;\">
                        <div class=\"mb-3\">
                            <input type=\"text\" class=\"form-control\" id=\"activityName\" placeholder=\"Nom de l'activité\">
                        </div>
                        <div class=\"mb-3\">
                            <textarea class=\"form-control\" id=\"activityDescription\" rows=\"2\" placeholder=\"Description de l'activité...\"></textarea>
                        </div>
                    </div>
                    
                    <div class=\"mb-3\">
                        <select class=\"form-select\" id=\"categorySelect\">
                            <option selected disabled>Sélectionner une catégorie</option>
                            <option value=\"new\">Créer une nouvelle catégorie</option>
                            {% for category in categories|default([]) %}
                                <option value=\"{{ category.id }}\" data-color=\"{{ category.color }}\">{{ category.name }}</option>
                            {% endfor %}
                        </select>
                    </div>
                    
                    <!-- Champs pour nouvelle catégorie (visible seulement si \"Créer nouvelle catégorie\" est sélectionné) -->
                    <div id=\"newCategoryFields\" style=\"display: none;\" class=\"mb-3\">
                        <div class=\"row g-3\">
                            <div class=\"col-9\">
                                <input type=\"text\" class=\"form-control\" id=\"categoryName\" placeholder=\"Nom de la catégorie\">
                            </div>
                            <div class=\"col-3\">
                                <input type=\"color\" class=\"form-control form-control-color w-100\" id=\"categoryColor\" value=\"#8edce6\">
                            </div>
                        </div>
                    </div>
                    
                    <div class=\"row mb-3\">
                        <div class=\"col-4\">
                            <input type=\"date\" class=\"form-control form-control-lg custom-height\" id=\"activityDate\" value=\"{{ startOfWeek|date('Y-m-d') }}\">
                        </div>
                        <div class=\"col-4\">
                            <select class=\"form-select form-select-lg custom-height\" id=\"startTime\">
                                <option value=\"08:00\">08:00</option>
                                <option value=\"09:00\">09:00</option>
                                <option value=\"10:00\">10:00</option>
                                <option value=\"11:00\">11:00</option>
                                <option value=\"12:00\">12:00</option>
                                <option value=\"13:00\">13:00</option>
                                <option value=\"14:00\">14:00</option>
                                <option value=\"15:00\">15:00</option>
                                <option value=\"16:00\">16:00</option>
                                <option value=\"17:00\">17:00</option>
                                <option value=\"18:00\">18:00</option>
                                <option value=\"19:00\">19:00</option>
                                <option value=\"20:00\">20:00</option>
                            </select>
                        </div>
                        <div class=\"col-4\">
                            <select class=\"form-select form-select-lg custom-height\" id=\"endTime\">
                                <option value=\"09:00\">09:00</option>
                                <option value=\"10:00\">10:00</option>
                                <option value=\"11:00\">11:00</option>
                                <option value=\"12:00\">12:00</option>
                                <option value=\"13:00\">13:00</option>
                                <option value=\"14:00\">14:00</option>
                                <option value=\"15:00\">15:00</option>
                                <option value=\"16:00\">16:00</option>
                                <option value=\"17:00\">17:00</option>
                                <option value=\"18:00\">18:00</option>
                                <option value=\"19:00\">19:00</option>
                                <option value=\"20:00\">20:00</option>
                                <option value=\"22:00\">22:00</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class=\"form-check mb-3\">
                        <input class=\"form-check-input\" type=\"checkbox\" id=\"isRecurring\">
                        <label class=\"form-check-label\" for=\"isRecurring\">
                            Activité récurrente
                        </label>
                    </div>
                    
                    <!-- Options de récurrence (visibles seulement si \"Activité récurrente\" est cochée) -->
                    <div id=\"recurringOptions\" style=\"display: none;\" class=\"mb-3\">
                        <div class=\"d-flex flex-wrap\">
                            <div class=\"form-check me-3\">
                                <input class=\"form-check-input\" type=\"checkbox\" id=\"recurDay1\" value=\"1\">
                                <label class=\"form-check-label\" for=\"recurDay1\">Lundi</label>
                            </div>
                            <div class=\"form-check me-3\">
                                <input class=\"form-check-input\" type=\"checkbox\" id=\"recurDay2\" value=\"2\">
                                <label class=\"form-check-label\" for=\"recurDay2\">Mardi</label>
                            </div>
                            <div class=\"form-check me-3\">
                                <input class=\"form-check-input\" type=\"checkbox\" id=\"recurDay3\" value=\"3\">
                                <label class=\"form-check-label\" for=\"recurDay3\">Mercredi</label>
                            </div>
                            <div class=\"form-check me-3\">
                                <input class=\"form-check-input\" type=\"checkbox\" id=\"recurDay4\" value=\"4\">
                                <label class=\"form-check-label\" for=\"recurDay4\">Jeudi</label>
                            </div>
                            <div class=\"form-check me-3\">
                                <input class=\"form-check-input\" type=\"checkbox\" id=\"recurDay5\" value=\"5\">
                                <label class=\"form-check-label\" for=\"recurDay5\">Vendredi</label>
                            </div>
                            <div class=\"form-check me-3\">
                                <input class=\"form-check-input\" type=\"checkbox\" id=\"recurDay6\" value=\"6\">
                                <label class=\"form-check-label\" for=\"recurDay6\">Samedi</label>
                            </div>
                            <div class=\"form-check\">
                                <input class=\"form-check-input\" type=\"checkbox\" id=\"recurDay7\" value=\"0\">
                                <label class=\"form-check-label\" for=\"recurDay7\">Dimanche</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class=\"alert alert-success\" id=\"successMessage\" style=\"display: none;\">
                        Activité ajoutée avec succès !
                    </div>
                    <div class=\"alert alert-danger\" id=\"errorMessage\" style=\"display: none;\">
                        Une erreur est survenue lors de l'ajout de l'activité.
                    </div>
                </form>
            </div>
            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Annuler</button>
                <button type=\"button\" class=\"btn btn-primary\" id=\"saveActivity\">Enregistrer</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal Gestion des Activités -->
<div class=\"modal fade\" id=\"manageActivitiesModal\" tabindex=\"-1\" aria-labelledby=\"manageActivitiesModalLabel\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-xl\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h5 class=\"modal-title\" id=\"manageActivitiesModalLabel\">Gérer les activités de la semaine du {{ weekDisplay }}</h5>
                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Fermer\"></button>
            </div>
            <div class=\"modal-body\">
                {% if activities|default([])|length > 0 %}
                    <div class=\"table-responsive\">
                        <table class=\"table table-striped table-bordered\">
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Catégorie</th>
                                    <th class=\"mobile-hide\">Couleur</th>
                                    <th>Jour</th>
                                    <th class=\"mobile-hide\">Début</th>
                                    <th class=\"mobile-hide\">Fin</th>
                                    <th class=\"actions-column\">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {% for activity in activities %}
                                <tr data-activity-id=\"{{ activity.id }}\">
                                    <td>{{ activity.name }}</td>
                                    <td>{{ activity.category.name }}</td>
                                    <td class=\"mobile-hide\">
                                        <span class=\"color-dot\" style=\"background-color: {{ activity.category.color }}\"></span>
                                        <span class=\"color-code\">{{ activity.category.color }}</span>
                                    </td>
                                    <td>{{ activity.startDateTime|date('l')|trans({}, 'messages')|capitalize }}</td>
                                    <td class=\"mobile-hide\">{{ activity.startDateTime|date('H:i') }}</td>
                                    <td class=\"mobile-hide\">{{ activity.endDateTime|date('H:i') }}</td>
                                    <td>
                                        <div class=\"action-buttons\">
                                            <button type=\"button\" class=\"btn btn-sm btn-primary edit-activity-btn\" 
                                                    data-activity-id=\"{{ activity.id }}\"
                                                    data-activity-name=\"{{ activity.name }}\"
                                                    data-activity-description=\"{{ activity.description }}\"
                                                    data-activity-category=\"{{ activity.category.id }}\"
                                                    data-activity-date=\"{{ activity.startDateTime|date('Y-m-d') }}\"
                                                    data-activity-start=\"{{ activity.startDateTime|date('H:i') }}\"
                                                    data-activity-end=\"{{ activity.endDateTime|date('H:i') }}\">
                                                <i class=\"bi bi-pencil-square\"></i>
                                            </button>
                                            <button type=\"button\" class=\"btn btn-sm btn-danger delete-activity-btn\" 
                                                    data-activity-id=\"{{ activity.id }}\"
                                                    data-activity-name=\"{{ activity.name }}\">
                                                <i class=\"bi bi-trash\"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {% endfor %}
                            </tbody>
                        </table>
                    </div>
                {% else %}
                    <div class=\"alert alert-info\">
                        <i class=\"bi bi-info-circle me-2\"></i>
                        Aucune activité n'est planifiée pour cette semaine.
                    </div>
                {% endif %}
            </div>
            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Fermer</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal Modification d'Activité -->
<div class=\"modal fade\" id=\"editActivityModal\" tabindex=\"-1\" aria-labelledby=\"editActivityModalLabel\" aria-hidden=\"true\">
    <div class=\"modal-dialog modal-lg\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h5 class=\"modal-title\" id=\"editActivityModalLabel\">Modifier une activité</h5>
                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Fermer\"></button>
            </div>
            <div class=\"modal-body\">
                <form id=\"editActivityForm\" data-url=\"{{ path('app_planning_edit_activity') }}\">
                    <input type=\"hidden\" id=\"editActivityId\">
                    
                    <div class=\"mb-3\">
                        <select class=\"form-select\" id=\"editActivitySelect\">
                            <option selected disabled>Sélectionner une activité existante</option>
                            <option value=\"new\">Créer une nouvelle activité</option>
                            {% for activity in existingActivities|default([]) %}
                                <option value=\"{{ activity.id }}\">{{ activity.name }}</option>
                            {% endfor %}
                        </select>
                    </div>
                    
                    <div id=\"editActivityFields\" style=\"display: none;\">
                        <div class=\"mb-3\">
                            <input type=\"text\" class=\"form-control\" id=\"editActivityName\" placeholder=\"Nom de l'activité\" required>
                        </div>
                        <div class=\"mb-3\">
                            <textarea class=\"form-control\" id=\"editActivityDescription\" rows=\"2\" placeholder=\"Description de l'activité...\"></textarea>
                        </div>
                    </div>
                    
                    <div class=\"mb-3\">
                        <select class=\"form-select\" id=\"editCategorySelect\" required>
                            <option selected disabled>Sélectionner une catégorie</option>
                            <option value=\"new\">Créer une nouvelle catégorie</option>
                            {% for category in categories|default([]) %}
                                <option value=\"{{ category.id }}\" data-color=\"{{ category.color }}\">{{ category.name }}</option>
                            {% endfor %}
                        </select>
                    </div>
                    
                    <!-- Champs pour nouvelle catégorie (visible seulement si \"Créer nouvelle catégorie\" est sélectionné) -->
                    <div id=\"editNewCategoryFields\" style=\"display: none;\" class=\"mb-3\">
                        <div class=\"row g-3\">
                            <div class=\"col-9\">
                                <input type=\"text\" class=\"form-control\" id=\"editCategoryName\" placeholder=\"Nom de la catégorie\">
                            </div>
                            <div class=\"col-3\">
                                <input type=\"color\" class=\"form-control form-control-color w-100\" id=\"editCategoryColor\" value=\"#8edce6\">
                            </div>
                        </div>
                    </div>
                    
                    <div class=\"row mb-3\">
                        <div class=\"col-4\">
                            <input type=\"date\" class=\"form-control form-control-lg custom-height\" id=\"editActivityDate\" required>
                        </div>
                        <div class=\"col-4\">
                            <select class=\"form-select form-select-lg custom-height\" id=\"editStartTime\" required>
                                <option value=\"08:00\">08:00</option>
                                <option value=\"09:00\">09:00</option>
                                <option value=\"10:00\">10:00</option>
                                <option value=\"11:00\">11:00</option>
                                <option value=\"12:00\">12:00</option>
                                <option value=\"13:00\">13:00</option>
                                <option value=\"14:00\">14:00</option>
                                <option value=\"15:00\">15:00</option>
                                <option value=\"16:00\">16:00</option>
                                <option value=\"17:00\">17:00</option>
                                <option value=\"18:00\">18:00</option>
                                <option value=\"19:00\">19:00</option>
                                <option value=\"20:00\">20:00</option>
                            </select>
                        </div>
                        <div class=\"col-4\">
                            <select class=\"form-select form-select-lg custom-height\" id=\"editEndTime\" required>
                                <option value=\"09:00\">09:00</option>
                                <option value=\"10:00\">10:00</option>
                                <option value=\"11:00\">11:00</option>
                                <option value=\"12:00\">12:00</option>
                                <option value=\"13:00\">13:00</option>
                                <option value=\"14:00\">14:00</option>
                                <option value=\"15:00\">15:00</option>
                                <option value=\"16:00\">16:00</option>
                                <option value=\"17:00\">17:00</option>
                                <option value=\"18:00\">18:00</option>
                                <option value=\"19:00\">19:00</option>
                                <option value=\"20:00\">20:00</option>
                                <option value=\"22:00\">22:00</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class=\"alert alert-success\" id=\"editSuccessMessage\" style=\"display: none;\">
                        Activité modifiée avec succès !
                    </div>
                    <div class=\"alert alert-danger\" id=\"editErrorMessage\" style=\"display: none;\">
                        Une erreur est survenue lors de la modification de l'activité.
                    </div>
                </form>
            </div>
            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Annuler</button>
                <button type=\"button\" class=\"btn btn-primary\" id=\"saveEditActivity\">Enregistrer</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal Confirmation de Suppression -->
<div class=\"modal fade\" id=\"deleteConfirmModal\" tabindex=\"-1\" aria-labelledby=\"deleteConfirmModalLabel\" aria-hidden=\"true\">
    <div class=\"modal-dialog\">
        <div class=\"modal-content\">
            <div class=\"modal-header\">
                <h5 class=\"modal-title\" id=\"deleteConfirmModalLabel\">Confirmer la suppression</h5>
                <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Fermer\"></button>
            </div>
            <div class=\"modal-body\">
                <p>Êtes-vous sûr de vouloir supprimer l'activité \"<span id=\"deleteActivityName\"></span>\" ?</p>
                <p class=\"text-danger\">Cette action est irréversible.</p>
                <input type=\"hidden\" id=\"deleteActivityId\">
            </div>
            <div class=\"modal-footer\">
                <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Annuler</button>
                <button type=\"button\" class=\"btn btn-danger\" id=\"confirmDeleteActivity\">Supprimer</button>
            </div>
        </div>
    </div>
</div>

{% endblock %}

", "planning/index.html.twig", "C:\\Users\\PAGOA\\Documents\\GitHub\\Vaca-Meet-WEB\\templates\\planning\\index.html.twig");
    }
}
