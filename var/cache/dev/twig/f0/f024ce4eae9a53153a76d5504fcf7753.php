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
    
    <div class=\"info-message mb-4\">
        <div class=\"alert alert-info\">
            <i class=\"bi bi-info-circle\"></i> La fonctionnalité de planning sera bientôt disponible. Vous pourrez gérer et visualiser les activités de votre camping sur une base hebdomadaire.
        </div>
    </div>
    
    <div class=\"planning-controls\">
        <h2 class=\"planning-subtitle\">Planning hebdomadaire</h2>
        
        <div class=\"planning-navigation\">
            <a href=\"#\" class=\"btn btn-nav\">
                <i class=\"bi bi-chevron-left\"></i> Semaine précédente
            </a>
            
            <div class=\"current-week\">
                ";
        // line 24
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["weekDisplay"]) || array_key_exists("weekDisplay", $context) ? $context["weekDisplay"] : (function () { throw new RuntimeError('Variable "weekDisplay" does not exist.', 24, $this->source); })()), "html", null, true);
        yield "
            </div>
            
            <a href=\"#\" class=\"btn btn-nav\">
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
                <tr>
                    <td class=\"time-slot\">8h - 9h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">9h - 10h</td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #8edce6\">
                            <div class=\"activity-name\">Yoga au bord de la piscine</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #8edce6\">
                            <div class=\"activity-name\">Yoga au bord de la piscine</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #8edce6\">
                            <div class=\"activity-name\">Yoga au bord de la piscine</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">10h - 11h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #c7f2a4\">
                            <div class=\"activity-name\">Brunch du dimanche</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class=\"time-slot\">11h - 12h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #ffcc80\">
                            <div class=\"activity-name\">Atelier cuisine pour enfants</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #ffcc80\">
                            <div class=\"activity-name\">Atelier cuisine pour enfants</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #b39ddb\">
                            <div class=\"activity-name\">Concours de pétanque</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">12h - 13h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">13h - 14h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">14h - 15h</td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #c7f2a4\">
                            <div class=\"activity-name\">Club enfants</div>
                        </div>
                    </td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #c7f2a4\">
                            <div class=\"activity-name\">Club enfants</div>
                        </div>
                    </td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #c7f2a4\">
                            <div class=\"activity-name\">Club enfants</div>
                        </div>
                    </td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #c7f2a4\">
                            <div class=\"activity-name\">Club enfants</div>
                        </div>
                    </td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #c7f2a4\">
                            <div class=\"activity-name\">Club enfants</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">15h - 16h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #b39ddb\">
                            <div class=\"activity-name\">Tournoi de ping-pong</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">16h - 17h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #90caf9\">
                            <div class=\"activity-name\">Aquagym</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #90caf9\">
                            <div class=\"activity-name\">Aquagym</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #90caf9\">
                            <div class=\"activity-name\">Aquagym</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">17h - 18h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">18h - 19h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">19h - 20h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #ef9a9a\">
                            <div class=\"activity-name\">Soirée barbecue</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">Soirée</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #ef9a9a\">
                            <div class=\"activity-name\">Soirée dansante</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class=\"filters-container mt-4 mb-3\">
        <div class=\"activity-filters\">
            <div class=\"filter-item\">
                <span class=\"color-dot\" style=\"background-color: #8edce6\"></span>
                <span class=\"filter-label\">Bien-être</span>
            </div>
            <div class=\"filter-item\">
                <span class=\"color-dot\" style=\"background-color: #c7f2a4\"></span>
                <span class=\"filter-label\">Enfants</span>
            </div>
            <div class=\"filter-item\">
                <span class=\"color-dot\" style=\"background-color: #ffcc80\"></span>
                <span class=\"filter-label\">Cuisine</span>
            </div>
            <div class=\"filter-item\">
                <span class=\"color-dot\" style=\"background-color: #b39ddb\"></span>
                <span class=\"filter-label\">Sport</span>
            </div>
            <div class=\"filter-item\">
                <span class=\"color-dot\" style=\"background-color: #ef9a9a\"></span>
                <span class=\"filter-label\">Animation</span>
            </div>
            <div class=\"filter-item\">
                <span class=\"color-dot\" style=\"background-color: #90caf9\"></span>
                <span class=\"filter-label\">Aquagym</span>
            </div>
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
                <form id=\"addActivityForm\" data-url=\"";
        // line 299
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_add_activity");
        yield "\" data-token=\"";
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken("activity_token"), "html", null, true);
        yield "\">
                    <div class=\"mb-3\">
                        <select class=\"form-select\" id=\"activitySelect\">
                            <option selected disabled>Sélectionner une activité existante</option>
                            <option value=\"new\">Créer une nouvelle activité</option>
                            <option value=\"1\">Aquagym</option>
                            <option value=\"2\">Yoga au bord de la piscine</option>
                            <option value=\"3\">Club enfants</option>
                            <option value=\"4\">Tournoi de ping-pong</option>
                            <option value=\"5\">Soirée dansante</option>
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
                            ";
        // line 326
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(((array_key_exists("categories", $context)) ? (Twig\Extension\CoreExtension::default((isset($context["categories"]) || array_key_exists("categories", $context) ? $context["categories"] : (function () { throw new RuntimeError('Variable "categories" does not exist.', 326, $this->source); })()), [])) : ([])));
        $context['_iterated'] = false;
        foreach ($context['_seq'] as $context["_key"] => $context["category"]) {
            // line 327
            yield "                                <option value=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "id", [], "any", false, false, false, 327), "html", null, true);
            yield "\" data-color=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "color", [], "any", false, false, false, 327), "html", null, true);
            yield "\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["category"], "name", [], "any", false, false, false, 327), "html", null, true);
            yield "</option>
                            ";
            $context['_iterated'] = true;
        }
        // line 328
        if (!$context['_iterated']) {
            // line 329
            yield "                                <option value=\"1\" data-color=\"#8edce6\">Bien-être</option>
                                <option value=\"2\" data-color=\"#c7f2a4\">Enfants</option>
                                <option value=\"3\" data-color=\"#ffcc80\">Cuisine</option>
                                <option value=\"4\" data-color=\"#b39ddb\">Sport</option>
                                <option value=\"5\" data-color=\"#ef9a9a\">Animation</option>
                                <option value=\"6\" data-color=\"#90caf9\">Aquagym</option>
                            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['category'], $context['_parent'], $context['_iterated']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 336
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
        // line 353
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate((isset($context["startOfWeek"]) || array_key_exists("startOfWeek", $context) ? $context["startOfWeek"] : (function () { throw new RuntimeError('Variable "startOfWeek" does not exist.', 353, $this->source); })()), "Y-m-d"), "html", null, true);
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
        return array (  479 => 353,  460 => 336,  448 => 329,  446 => 328,  435 => 327,  430 => 326,  398 => 299,  120 => 24,  100 => 6,  87 => 5,  64 => 3,  41 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Planning des Activités - Vaca-Meet{% endblock %}

{% block body %}
<div class=\"planning-container\">
    <h1 class=\"planning-title\">Planning des Activités</h1>
    
    <div class=\"info-message mb-4\">
        <div class=\"alert alert-info\">
            <i class=\"bi bi-info-circle\"></i> La fonctionnalité de planning sera bientôt disponible. Vous pourrez gérer et visualiser les activités de votre camping sur une base hebdomadaire.
        </div>
    </div>
    
    <div class=\"planning-controls\">
        <h2 class=\"planning-subtitle\">Planning hebdomadaire</h2>
        
        <div class=\"planning-navigation\">
            <a href=\"#\" class=\"btn btn-nav\">
                <i class=\"bi bi-chevron-left\"></i> Semaine précédente
            </a>
            
            <div class=\"current-week\">
                {{ weekDisplay }}
            </div>
            
            <a href=\"#\" class=\"btn btn-nav\">
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
                <tr>
                    <td class=\"time-slot\">8h - 9h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">9h - 10h</td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #8edce6\">
                            <div class=\"activity-name\">Yoga au bord de la piscine</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #8edce6\">
                            <div class=\"activity-name\">Yoga au bord de la piscine</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #8edce6\">
                            <div class=\"activity-name\">Yoga au bord de la piscine</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">10h - 11h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #c7f2a4\">
                            <div class=\"activity-name\">Brunch du dimanche</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class=\"time-slot\">11h - 12h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #ffcc80\">
                            <div class=\"activity-name\">Atelier cuisine pour enfants</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #ffcc80\">
                            <div class=\"activity-name\">Atelier cuisine pour enfants</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #b39ddb\">
                            <div class=\"activity-name\">Concours de pétanque</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">12h - 13h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">13h - 14h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">14h - 15h</td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #c7f2a4\">
                            <div class=\"activity-name\">Club enfants</div>
                        </div>
                    </td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #c7f2a4\">
                            <div class=\"activity-name\">Club enfants</div>
                        </div>
                    </td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #c7f2a4\">
                            <div class=\"activity-name\">Club enfants</div>
                        </div>
                    </td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #c7f2a4\">
                            <div class=\"activity-name\">Club enfants</div>
                        </div>
                    </td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #c7f2a4\">
                            <div class=\"activity-name\">Club enfants</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">15h - 16h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #b39ddb\">
                            <div class=\"activity-name\">Tournoi de ping-pong</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">16h - 17h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #90caf9\">
                            <div class=\"activity-name\">Aquagym</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #90caf9\">
                            <div class=\"activity-name\">Aquagym</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #90caf9\">
                            <div class=\"activity-name\">Aquagym</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">17h - 18h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">18h - 19h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">19h - 20h</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #ef9a9a\">
                            <div class=\"activity-name\">Soirée barbecue</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                </tr>
                <tr>
                    <td class=\"time-slot\">Soirée</td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell\"></td>
                    <td class=\"activity-cell has-activity\">
                        <div class=\"activity-item\" style=\"background-color: #ef9a9a\">
                            <div class=\"activity-name\">Soirée dansante</div>
                        </div>
                    </td>
                    <td class=\"activity-cell\"></td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class=\"filters-container mt-4 mb-3\">
        <div class=\"activity-filters\">
            <div class=\"filter-item\">
                <span class=\"color-dot\" style=\"background-color: #8edce6\"></span>
                <span class=\"filter-label\">Bien-être</span>
            </div>
            <div class=\"filter-item\">
                <span class=\"color-dot\" style=\"background-color: #c7f2a4\"></span>
                <span class=\"filter-label\">Enfants</span>
            </div>
            <div class=\"filter-item\">
                <span class=\"color-dot\" style=\"background-color: #ffcc80\"></span>
                <span class=\"filter-label\">Cuisine</span>
            </div>
            <div class=\"filter-item\">
                <span class=\"color-dot\" style=\"background-color: #b39ddb\"></span>
                <span class=\"filter-label\">Sport</span>
            </div>
            <div class=\"filter-item\">
                <span class=\"color-dot\" style=\"background-color: #ef9a9a\"></span>
                <span class=\"filter-label\">Animation</span>
            </div>
            <div class=\"filter-item\">
                <span class=\"color-dot\" style=\"background-color: #90caf9\"></span>
                <span class=\"filter-label\">Aquagym</span>
            </div>
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
                            <option value=\"1\">Aquagym</option>
                            <option value=\"2\">Yoga au bord de la piscine</option>
                            <option value=\"3\">Club enfants</option>
                            <option value=\"4\">Tournoi de ping-pong</option>
                            <option value=\"5\">Soirée dansante</option>
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
                            {% else %}
                                <option value=\"1\" data-color=\"#8edce6\">Bien-être</option>
                                <option value=\"2\" data-color=\"#c7f2a4\">Enfants</option>
                                <option value=\"3\" data-color=\"#ffcc80\">Cuisine</option>
                                <option value=\"4\" data-color=\"#b39ddb\">Sport</option>
                                <option value=\"5\" data-color=\"#ef9a9a\">Animation</option>
                                <option value=\"6\" data-color=\"#90caf9\">Aquagym</option>
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
