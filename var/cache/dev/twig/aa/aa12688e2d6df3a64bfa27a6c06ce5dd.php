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

/* vacancier_password/index.html.twig */
class __TwigTemplate_b4d3406ecc5f81fb409dc2d6b2916b1c extends Template
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
            'stylesheets' => [$this, 'block_stylesheets'],
            'javascripts' => [$this, 'block_javascripts'],
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "vacancier_password/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "vacancier_password/index.html.twig"));

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

        yield "Gestion du mot de passe vacancier - ";
        yield from $this->yieldParentBlock("title", $context, $blocks);
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 5
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_stylesheets(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 6
        yield "    ";
        yield from $this->yieldParentBlock("stylesheets", $context, $blocks);
        yield "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 9
    /**
     * @return iterable<null|scalar|\Stringable>
     */
    public function block_javascripts(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 10
        yield "    ";
        yield from $this->yieldParentBlock("javascripts", $context, $blocks);
        yield "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 13
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

        // line 14
        yield "<div class=\"vacancier-password-container\">
    <div class=\"row\">
        <div class=\"col-lg-8 mx-auto\">
            <div class=\"card vacancier-password-card animate-in\">
                <div class=\"card-header\">
                    <h3 class=\"mb-0\">
                        <i class=\"bi bi-shield-lock me-2\"></i>
                        Gestion du mot de passe vacancier
                    </h3>
                </div>
                <div class=\"card-body\">
                    <div class=\"row\">
                        <div class=\"col-md-6\">
                            <div class=\"info-section animate-fade-in\">
                                <h4 class=\"mb-3\">Informations</h4>
                                <p class=\"mb-4\">Ce mot de passe sera utilisé par les vacanciers pour se connecter à l'application mobile et accéder aux services de votre camping.</p>
                                
                                <div class=\"password-status mb-4\">
                                    <h5>Statut actuel</h5>
                                    ";
        // line 33
        if ((($tmp = CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 33, $this->source); })()), "mdpVacancier", [], "any", false, false, false, 33)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            // line 34
            yield "                                        <div class=\"password-set\">
                                            <div class=\"status-badge active\">
                                                <i class=\"bi bi-check-circle-fill\"></i>
                                                <span>Mot de passe défini</span>
                                            </div>
                                            <div class=\"current-password\">
                                                <label>Mot de passe actuel :</label>
                                                <div class=\"password-display\">
                                                    <span id=\"password-value\">";
            // line 42
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 42, $this->source); })()), "mdpVacancier", [], "any", false, false, false, 42), "html", null, true);
            yield "</span>
                                                    <button id=\"copy-password\" class=\"btn btn-sm btn-outline-primary\" data-tooltip=\"Copier\">
                                                        <i class=\"bi bi-clipboard\"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ";
        } else {
            // line 50
            yield "                                        <div class=\"status-badge inactive\">
                                            <i class=\"bi bi-exclamation-circle-fill\"></i>
                                            <span>Aucun mot de passe défini</span>
                                        </div>
                                        <p class=\"text-muted\">Définissez un mot de passe pour permettre l'accès à l'application mobile.</p>
                                    ";
        }
        // line 56
        yield "                                </div>
                            </div>
                        </div>
                        
                        <div class=\"col-md-6\">
                            <div class=\"form-section animate-slide-in\">
                                <h4 class=\"mb-3\">";
        // line 62
        yield (((($tmp = CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 62, $this->source); })()), "mdpVacancier", [], "any", false, false, false, 62)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) ? ("Modifier") : ("Définir"));
        yield " le mot de passe</h4>
                                
                                <form action=\"";
        // line 64
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_vacancier_password_update");
        yield "\" method=\"post\" id=\"password-form\">
                                    <div class=\"mb-3\">
                                        <div class=\"input-group password-input-group\">
                                            <input type=\"text\" id=\"password\" name=\"password\" class=\"form-control\" 
                                                   placeholder=\"Entrez un mot de passe\" required minlength=\"6\">
                                            <button type=\"button\" class=\"btn btn-outline-secondary\" id=\"generate-password\">
                                                <i class=\"bi bi-magic\"></i> Générer
                                            </button>
                                        </div>
                                        <div class=\"form-text\">Le mot de passe doit comporter au moins 6 caractères.</div>
                                    </div>
                                    
                                    <div class=\"password-meter mb-4\">
                                        <div class=\"strength-meter\">
                                            <div class=\"meter-bar\"></div>
                                        </div>
                                        <div class=\"strength-text\">Force du mot de passe</div>
                                    </div>
                                    
                                    <div class=\"d-grid\">
                                        <button type=\"submit\" class=\"btn btn-primary submit-btn\">
                                            <span class=\"btn-text\">";
        // line 85
        yield (((($tmp = CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 85, $this->source); })()), "mdpVacancier", [], "any", false, false, false, 85)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) ? ("Mettre à jour") : ("Définir"));
        yield " le mot de passe</span>
                                            <div class=\"btn-icon\">
                                                <i class=\"bi bi-arrow-right\"></i>
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class=\"card mt-4 qr-code-card animate-in\">
                <div class=\"card-body\">
                    <div class=\"row align-items-center\">
                        <div class=\"col-md-8\">
                            <h4>Application mobile pour vos vacanciers</h4>
                            <p>Les vacanciers peuvent scanner ce QR code pour télécharger l'application mobile et accéder à votre planning d'activités.</p>
                            <div class=\"mt-3\">
                                <a href=\"#\" class=\"btn btn-outline-primary me-2\">
                                    <i class=\"bi bi-apple me-2\"></i> App Store
                                </a>
                                <a href=\"#\" class=\"btn btn-outline-primary\">
                                    <i class=\"bi bi-google-play me-2\"></i> Google Play
                                </a>
                            </div>
                        </div>
                        <div class=\"col-md-4 text-center\">
                            <div class=\"qr-code\">
                                <div class=\"qr-placeholder\">
                                    <i class=\"bi bi-qr-code\"></i>
                                </div>
                            </div>
                        </div>
                    </div>
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
        return "vacancier_password/index.html.twig";
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
        return array (  246 => 85,  222 => 64,  217 => 62,  209 => 56,  201 => 50,  190 => 42,  180 => 34,  178 => 33,  157 => 14,  144 => 13,  130 => 10,  117 => 9,  103 => 6,  90 => 5,  66 => 3,  43 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Gestion du mot de passe vacancier - {{ parent() }}{% endblock %}

{% block stylesheets %}
    {{ parent() }}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
{% endblock %}

{% block body %}
<div class=\"vacancier-password-container\">
    <div class=\"row\">
        <div class=\"col-lg-8 mx-auto\">
            <div class=\"card vacancier-password-card animate-in\">
                <div class=\"card-header\">
                    <h3 class=\"mb-0\">
                        <i class=\"bi bi-shield-lock me-2\"></i>
                        Gestion du mot de passe vacancier
                    </h3>
                </div>
                <div class=\"card-body\">
                    <div class=\"row\">
                        <div class=\"col-md-6\">
                            <div class=\"info-section animate-fade-in\">
                                <h4 class=\"mb-3\">Informations</h4>
                                <p class=\"mb-4\">Ce mot de passe sera utilisé par les vacanciers pour se connecter à l'application mobile et accéder aux services de votre camping.</p>
                                
                                <div class=\"password-status mb-4\">
                                    <h5>Statut actuel</h5>
                                    {% if user.mdpVacancier %}
                                        <div class=\"password-set\">
                                            <div class=\"status-badge active\">
                                                <i class=\"bi bi-check-circle-fill\"></i>
                                                <span>Mot de passe défini</span>
                                            </div>
                                            <div class=\"current-password\">
                                                <label>Mot de passe actuel :</label>
                                                <div class=\"password-display\">
                                                    <span id=\"password-value\">{{ user.mdpVacancier }}</span>
                                                    <button id=\"copy-password\" class=\"btn btn-sm btn-outline-primary\" data-tooltip=\"Copier\">
                                                        <i class=\"bi bi-clipboard\"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    {% else %}
                                        <div class=\"status-badge inactive\">
                                            <i class=\"bi bi-exclamation-circle-fill\"></i>
                                            <span>Aucun mot de passe défini</span>
                                        </div>
                                        <p class=\"text-muted\">Définissez un mot de passe pour permettre l'accès à l'application mobile.</p>
                                    {% endif %}
                                </div>
                            </div>
                        </div>
                        
                        <div class=\"col-md-6\">
                            <div class=\"form-section animate-slide-in\">
                                <h4 class=\"mb-3\">{{ user.mdpVacancier ? 'Modifier' : 'Définir' }} le mot de passe</h4>
                                
                                <form action=\"{{ path('app_vacancier_password_update') }}\" method=\"post\" id=\"password-form\">
                                    <div class=\"mb-3\">
                                        <div class=\"input-group password-input-group\">
                                            <input type=\"text\" id=\"password\" name=\"password\" class=\"form-control\" 
                                                   placeholder=\"Entrez un mot de passe\" required minlength=\"6\">
                                            <button type=\"button\" class=\"btn btn-outline-secondary\" id=\"generate-password\">
                                                <i class=\"bi bi-magic\"></i> Générer
                                            </button>
                                        </div>
                                        <div class=\"form-text\">Le mot de passe doit comporter au moins 6 caractères.</div>
                                    </div>
                                    
                                    <div class=\"password-meter mb-4\">
                                        <div class=\"strength-meter\">
                                            <div class=\"meter-bar\"></div>
                                        </div>
                                        <div class=\"strength-text\">Force du mot de passe</div>
                                    </div>
                                    
                                    <div class=\"d-grid\">
                                        <button type=\"submit\" class=\"btn btn-primary submit-btn\">
                                            <span class=\"btn-text\">{{ user.mdpVacancier ? 'Mettre à jour' : 'Définir' }} le mot de passe</span>
                                            <div class=\"btn-icon\">
                                                <i class=\"bi bi-arrow-right\"></i>
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class=\"card mt-4 qr-code-card animate-in\">
                <div class=\"card-body\">
                    <div class=\"row align-items-center\">
                        <div class=\"col-md-8\">
                            <h4>Application mobile pour vos vacanciers</h4>
                            <p>Les vacanciers peuvent scanner ce QR code pour télécharger l'application mobile et accéder à votre planning d'activités.</p>
                            <div class=\"mt-3\">
                                <a href=\"#\" class=\"btn btn-outline-primary me-2\">
                                    <i class=\"bi bi-apple me-2\"></i> App Store
                                </a>
                                <a href=\"#\" class=\"btn btn-outline-primary\">
                                    <i class=\"bi bi-google-play me-2\"></i> Google Play
                                </a>
                            </div>
                        </div>
                        <div class=\"col-md-4 text-center\">
                            <div class=\"qr-code\">
                                <div class=\"qr-placeholder\">
                                    <i class=\"bi bi-qr-code\"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %} ", "vacancier_password/index.html.twig", "C:\\Users\\PAGOA\\Documents\\GitHub\\Vaca-Meet-WEB\\templates\\vacancier_password\\index.html.twig");
    }
}
