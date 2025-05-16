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
        <h2 class=\"planning-subtitle\">Planning hebdomadaire</h2>
        
        <div class=\"planning-navigation\">
            <a href=\"";
        // line 13
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_index", ["week" => $this->extensions['Twig\Extension\CoreExtension']->formatDate((isset($context["previousWeek"]) || array_key_exists("previousWeek", $context) ? $context["previousWeek"] : (function () { throw new RuntimeError('Variable "previousWeek" does not exist.', 13, $this->source); })()), "Y-m-d")]), "html", null, true);
        yield "\" class=\"btn btn-nav\">
                <i class=\"bi bi-chevron-left\"></i> Semaine précédente
            </a>
            
            <div class=\"current-week\">
                ";
        // line 18
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["weekDisplay"]) || array_key_exists("weekDisplay", $context) ? $context["weekDisplay"] : (function () { throw new RuntimeError('Variable "weekDisplay" does not exist.', 18, $this->source); })()), "html", null, true);
        yield "
                ";
        // line 19
        if (($this->extensions['Twig\Extension\CoreExtension']->formatDate($this->extensions['Twig\Extension\CoreExtension']->modifyDate("now", "monday this week"), "Y-m-d") != $this->extensions['Twig\Extension\CoreExtension']->formatDate((isset($context["startOfWeek"]) || array_key_exists("startOfWeek", $context) ? $context["startOfWeek"] : (function () { throw new RuntimeError('Variable "startOfWeek" does not exist.', 19, $this->source); })()), "Y-m-d"))) {
            // line 20
            yield "                    <a href=\"";
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_index");
            yield "\" class=\"btn btn-sm btn-outline-primary ms-2\">
                        <i class=\"bi bi-calendar-week\"></i> Revenir à la semaine actuelle
                    </a>
                ";
        } else {
            // line 24
            yield "                    <span class=\"badge bg-success ms-2\">Semaine actuelle</span>
                ";
        }
        // line 26
        yield "            </div>
            
            <a href=\"";
        // line 28
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_index", ["week" => $this->extensions['Twig\Extension\CoreExtension']->formatDate((isset($context["nextWeek"]) || array_key_exists("nextWeek", $context) ? $context["nextWeek"] : (function () { throw new RuntimeError('Variable "nextWeek" does not exist.', 28, $this->source); })()), "Y-m-d")]), "html", null, true);
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
        // line 49
        if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), ((array_key_exists("activities", $context)) ? (Twig\Extension\CoreExtension::default((isset($context["activities"]) || array_key_exists("activities", $context) ? $context["activities"] : (function () { throw new RuntimeError('Variable "activities" does not exist.', 49, $this->source); })()), [])) : ([]))) > 0)) {
            // line 50
            yield "                    ";
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable((isset($context["planningGrid"]) || array_key_exists("planningGrid", $context) ? $context["planningGrid"] : (function () { throw new RuntimeError('Variable "planningGrid" does not exist.', 50, $this->source); })()));
            foreach ($context['_seq'] as $context["timeLabel"] => $context["days"]) {
                // line 51
                yield "                        <tr>
                            <td class=\"time-slot\">";
                // line 52
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["timeLabel"], "html", null, true);
                yield "</td>
                            ";
                // line 53
                $context['_parent'] = $context;
                $context['_seq'] = CoreExtension::ensureTraversable(range(1, 7));
                foreach ($context['_seq'] as $context["_key"] => $context["day"]) {
                    // line 54
                    yield "                                <td class=\"activity-cell";
                    if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, $context["days"], $context["day"], [], "array", false, false, false, 54)) > 0)) {
                        yield " has-activity";
                    }
                    yield "\">
                                    ";
                    // line 55
                    if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), CoreExtension::getAttribute($this->env, $this->source, $context["days"], $context["day"], [], "array", false, false, false, 55)) > 0)) {
                        // line 56
                        yield "                                        ";
                        $context["activity"] = CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["days"], $context["day"], [], "array", false, false, false, 56), 0, [], "array", false, false, false, 56);
                        // line 57
                        yield "                                        <div class=\"activity-item\" style=\"background-color: ";
                        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["activity"]) || array_key_exists("activity", $context) ? $context["activity"] : (function () { throw new RuntimeError('Variable "activity" does not exist.', 57, $this->source); })()), "category", [], "any", false, false, false, 57), "color", [], "any", false, false, false, 57), "html", null, true);
                        yield "\">
                                            <div class=\"activity-name\">";
                        // line 58
                        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["activity"]) || array_key_exists("activity", $context) ? $context["activity"] : (function () { throw new RuntimeError('Variable "activity" does not exist.', 58, $this->source); })()), "name", [], "any", false, false, false, 58), "html", null, true);
                        yield "</div>
                                        </div>
                                    ";
                    }
                    // line 61
                    yield "                                </td>
                            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_key'], $context['day'], $context['_parent']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 63
                yield "                        </tr>
                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['timeLabel'], $context['days'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 65
            yield "                ";
        } else {
            // line 66
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
        // line 75
        yield "            </tbody>
        </table>
    </div>
    
    <div class=\"filters-container mt-4 mb-3\">
        <div class=\"activity-filters\">
            ";
        // line 81
        if ((Twig\Extension\CoreExtension::length($this->env->getCharset(), ((array_key_exists("categories", $context)) ? (Twig\Extension\CoreExtension::default((isset($context["categories"]) || array_key_exists("categories", $context) ? $context["categories"] : (function () { throw new RuntimeError('Variable "categories" does not exist.', 81, $this->source); })()), [])) : ([]))) > 0)) {
            // line 82
            yield "                ";
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable((isset($context["categories"]) || array_key_exists("categories", $context) ? $context["categories"] : (function () { throw new RuntimeError('Variable "categories" does not exist.', 82, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["category"]) {
                // line 83
                yield "                    <div class=\"filter-item\">
                        <span class=\"color-dot\" style=\"background-color: ";
                // line 84
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "color", [], "any", false, false, false, 84), "html", null, true);
                yield "\"></span>
                        <span class=\"filter-label\">";
                // line 85
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "name", [], "any", false, false, false, 85), "html", null, true);
                yield "</span>
                    </div>
                ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_key'], $context['category'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 88
            yield "            ";
        } else {
            // line 89
            yield "                <div class=\"text-center w-100\">
                    <p class=\"text-muted\">Aucune catégorie d'activité n'est disponible pour le moment.</p>
                </div>
            ";
        }
        // line 93
        yield "        </div>
    </div>
    
    <div class=\"add-activity-container\">
        <a href=\"#\" class=\"btn btn-add-activity\" data-bs-toggle=\"modal\" data-bs-target=\"#addActivityModal\">
            <i class=\"bi bi-plus-circle\"></i> Ajouter une activité
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
        // line 112
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_add_activity");
        yield "\" data-token=\"";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken("activity_token"), "html", null, true);
        yield "\">
                    <div class=\"mb-3\">
                        <select class=\"form-select\" id=\"activitySelect\">
                            <option selected disabled>Sélectionner une activité existante</option>
                            <option value=\"new\">Créer une nouvelle activité</option>
                            ";
        // line 117
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(((array_key_exists("existingActivities", $context)) ? (Twig\Extension\CoreExtension::default((isset($context["existingActivities"]) || array_key_exists("existingActivities", $context) ? $context["existingActivities"] : (function () { throw new RuntimeError('Variable "existingActivities" does not exist.', 117, $this->source); })()), [])) : ([])));
        foreach ($context['_seq'] as $context["_key"] => $context["activity"]) {
            // line 118
            yield "                                <option value=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "id", [], "any", false, false, false, 118), "html", null, true);
            yield "\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["activity"], "name", [], "any", false, false, false, 118), "html", null, true);
            yield "</option>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['activity'], $context['_parent']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 120
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
        // line 137
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(((array_key_exists("categories", $context)) ? (Twig\Extension\CoreExtension::default((isset($context["categories"]) || array_key_exists("categories", $context) ? $context["categories"] : (function () { throw new RuntimeError('Variable "categories" does not exist.', 137, $this->source); })()), [])) : ([])));
        foreach ($context['_seq'] as $context["_key"] => $context["category"]) {
            // line 138
            yield "                                <option value=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "id", [], "any", false, false, false, 138), "html", null, true);
            yield "\" data-color=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "color", [], "any", false, false, false, 138), "html", null, true);
            yield "\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "name", [], "any", false, false, false, 138), "html", null, true);
            yield "</option>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['category'], $context['_parent']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 140
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
        // line 157
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate((isset($context["startOfWeek"]) || array_key_exists("startOfWeek", $context) ? $context["startOfWeek"] : (function () { throw new RuntimeError('Variable "startOfWeek" does not exist.', 157, $this->source); })()), "Y-m-d"), "html", null, true);
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
        return array (  373 => 157,  354 => 140,  341 => 138,  337 => 137,  318 => 120,  307 => 118,  303 => 117,  293 => 112,  272 => 93,  266 => 89,  263 => 88,  254 => 85,  250 => 84,  247 => 83,  242 => 82,  240 => 81,  232 => 75,  221 => 66,  218 => 65,  211 => 63,  204 => 61,  198 => 58,  193 => 57,  190 => 56,  188 => 55,  181 => 54,  177 => 53,  173 => 52,  170 => 51,  165 => 50,  163 => 49,  139 => 28,  135 => 26,  131 => 24,  123 => 20,  121 => 19,  117 => 18,  109 => 13,  100 => 6,  87 => 5,  64 => 3,  41 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Planning des Activités - Vaca-Meet{% endblock %}

{% block body %}
<div class=\"planning-container\">
    <h1 class=\"planning-title\">Planning des Activités</h1>

    <div class=\"planning-controls\">
        <h2 class=\"planning-subtitle\">Planning hebdomadaire</h2>
        
        <div class=\"planning-navigation\">
            <a href=\"{{ path('app_planning_index', {'week': previousWeek|date('Y-m-d')}) }}\" class=\"btn btn-nav\">
                <i class=\"bi bi-chevron-left\"></i> Semaine précédente
            </a>
            
            <div class=\"current-week\">
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
{% endblock %}

", "planning/index.html.twig", "C:\\Users\\PAGOA\\Documents\\GitHub\\Vaca-Meet-WEB\\templates\\planning\\index.html.twig");
    }
}
