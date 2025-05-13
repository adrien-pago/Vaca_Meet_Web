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

/* account/index.html.twig */
class __TwigTemplate_892c14e8780adad4857b047c0f4e8e7d extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "account/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "account/index.html.twig"));

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

        yield "Mon Compte - Vaca-Meet";
        
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
    <div class=\"col-12 mb-4\">
        <h1 class=\"mb-4\">Gestion de compte</h1>
    </div>
    
    <div class=\"col-md-8\">
        <div class=\"card mb-4\">
            <div class=\"card-body\">
                <h5 class=\"card-title\">Informations du compte</h5>
                <p class=\"card-text text-muted mb-4\">Gérez vos informations personnelles et les paramètres de votre compte.</p>
                
                <div class=\"list-group list-group-flush\">
                    <a href=\"";
        // line 18
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_account_edit");
        yield "\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">
                        <div>
                            <i class=\"bi bi-person-circle me-3 text-primary\"></i>
                            <span>Modifier mes informations</span>
                        </div>
                        <i class=\"bi bi-chevron-right\"></i>
                    </a>
                    
                    <a href=\"";
        // line 26
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_theme_edit");
        yield "\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">
                        <div>
                            <i class=\"bi bi-palette me-3 text-primary\"></i>
                            <span>Thème de l'application</span>
                        </div>
                        <i class=\"bi bi-chevron-right\"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    
    <div class=\"col-md-4\">
        <div class=\"card\">
            <div class=\"card-body\">
                <h5 class=\"card-title\">À propos de votre compte</h5>
                <div class=\"list-group list-group-flush mb-3\">
                    <div class=\"list-group-item\">
                        <div class=\"text-muted small\">Nom du camping</div>
                        <div>";
        // line 45
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 45, $this->source); })()), "username", [], "any", false, false, false, 45), "html", null, true);
        yield "</div>
                    </div>
                    <div class=\"list-group-item\">
                        <div class=\"text-muted small\">Email</div>
                        <div>";
        // line 49
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 49, $this->source); })()), "email", [], "any", false, false, false, 49), "html", null, true);
        yield "</div>
                    </div>
                    <div class=\"list-group-item\">
                        <div class=\"text-muted small\">Thème actuel</div>
                        <div>
                            ";
        // line 54
        if ((CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 54, $this->source); })()), "theme", [], "any", false, false, false, 54) == "default")) {
            // line 55
            yield "                                Bleu (par défaut)
                            ";
        } elseif ((CoreExtension::getAttribute($this->env, $this->source,         // line 56
(isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 56, $this->source); })()), "theme", [], "any", false, false, false, 56) == "light-blue")) {
            // line 57
            yield "                                Bleu clair
                            ";
        } elseif ((CoreExtension::getAttribute($this->env, $this->source,         // line 58
(isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 58, $this->source); })()), "theme", [], "any", false, false, false, 58) == "light-green")) {
            // line 59
            yield "                                Vert clair
                            ";
        } elseif ((CoreExtension::getAttribute($this->env, $this->source,         // line 60
(isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 60, $this->source); })()), "theme", [], "any", false, false, false, 60) == "light-pink")) {
            // line 61
            yield "                                Rose clair
                            ";
        }
        // line 63
        yield "                        </div>
                    </div>
                </div>
                
                <form method=\"post\" action=\"";
        // line 67
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_account_delete");
        yield "\" onsubmit=\"return confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action ne peut pas être annulée.');\">
                    <input type=\"hidden\" name=\"_token\" value=\"";
        // line 68
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken(("delete" . CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 68, $this->source); })()), "id", [], "any", false, false, false, 68))), "html", null, true);
        yield "\">
                    <button class=\"btn btn-outline-danger w-100\">
                        <i class=\"bi bi-trash me-1\"></i> Supprimer mon compte
                    </button>
                </form>
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
        return "account/index.html.twig";
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
        return array (  193 => 68,  189 => 67,  183 => 63,  179 => 61,  177 => 60,  174 => 59,  172 => 58,  169 => 57,  167 => 56,  164 => 55,  162 => 54,  154 => 49,  147 => 45,  125 => 26,  114 => 18,  100 => 6,  87 => 5,  64 => 3,  41 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Mon Compte - Vaca-Meet{% endblock %}

{% block body %}
<div class=\"row\">
    <div class=\"col-12 mb-4\">
        <h1 class=\"mb-4\">Gestion de compte</h1>
    </div>
    
    <div class=\"col-md-8\">
        <div class=\"card mb-4\">
            <div class=\"card-body\">
                <h5 class=\"card-title\">Informations du compte</h5>
                <p class=\"card-text text-muted mb-4\">Gérez vos informations personnelles et les paramètres de votre compte.</p>
                
                <div class=\"list-group list-group-flush\">
                    <a href=\"{{ path('app_account_edit') }}\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">
                        <div>
                            <i class=\"bi bi-person-circle me-3 text-primary\"></i>
                            <span>Modifier mes informations</span>
                        </div>
                        <i class=\"bi bi-chevron-right\"></i>
                    </a>
                    
                    <a href=\"{{ path('app_theme_edit') }}\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\">
                        <div>
                            <i class=\"bi bi-palette me-3 text-primary\"></i>
                            <span>Thème de l'application</span>
                        </div>
                        <i class=\"bi bi-chevron-right\"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    
    <div class=\"col-md-4\">
        <div class=\"card\">
            <div class=\"card-body\">
                <h5 class=\"card-title\">À propos de votre compte</h5>
                <div class=\"list-group list-group-flush mb-3\">
                    <div class=\"list-group-item\">
                        <div class=\"text-muted small\">Nom du camping</div>
                        <div>{{ user.username }}</div>
                    </div>
                    <div class=\"list-group-item\">
                        <div class=\"text-muted small\">Email</div>
                        <div>{{ user.email }}</div>
                    </div>
                    <div class=\"list-group-item\">
                        <div class=\"text-muted small\">Thème actuel</div>
                        <div>
                            {% if user.theme == 'default' %}
                                Bleu (par défaut)
                            {% elseif user.theme == 'light-blue' %}
                                Bleu clair
                            {% elseif user.theme == 'light-green' %}
                                Vert clair
                            {% elseif user.theme == 'light-pink' %}
                                Rose clair
                            {% endif %}
                        </div>
                    </div>
                </div>
                
                <form method=\"post\" action=\"{{ path('app_account_delete') }}\" onsubmit=\"return confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action ne peut pas être annulée.');\">
                    <input type=\"hidden\" name=\"_token\" value=\"{{ csrf_token('delete' ~ user.id) }}\">
                    <button class=\"btn btn-outline-danger w-100\">
                        <i class=\"bi bi-trash me-1\"></i> Supprimer mon compte
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
{% endblock %} ", "account/index.html.twig", "C:\\Users\\PAGOA\\Documents\\GitHub\\Vaca-Meet-Application-Web-SYMFONY\\templates\\account\\index.html.twig");
    }
}
