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

/* account/theme.html.twig */
class __TwigTemplate_da60d533c554004a64071aed018d8cc5 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "account/theme.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "account/theme.html.twig"));

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

        yield "Thème de l'application - Vaca-Meet";
        
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
        <h1 class=\"mb-4\">Thème de l'application</h1>
        
        <div class=\"card\">
            <div class=\"card-body\">
                <h5 class=\"card-title\">Personnalisation de l'interface</h5>
                <p class=\"card-text text-muted mb-4\">Choisissez le thème qui correspond le mieux à votre image de marque.</p>
                
                ";
        // line 15
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 15, $this->source); })()), 'form_start', ["attr" => ["class" => "theme-form"]]);
        yield "
                    ";
        // line 16
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 16, $this->source); })()), "_token", [], "any", false, false, false, 16), 'widget');
        yield "
                    <div class=\"row\">
                        <div class=\"col-md-8 offset-md-2\">
                            <div class=\"theme-options\">
                                ";
        // line 20
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 20, $this->source); })()), "theme", [], "any", false, false, false, 20), 'label');
        yield "
                                ";
        // line 21
        yield $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 21, $this->source); })()), "theme", [], "any", false, false, false, 21), 'help');
        yield "
                                
                                <div class=\"theme-choices mt-4\">
                                    <div class=\"row row-cols-1 row-cols-md-2 g-4\">
                                        ";
        // line 25
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 25, $this->source); })()), "theme", [], "any", false, false, false, 25), "vars", [], "any", false, false, false, 25), "choices", [], "any", false, false, false, 25));
        foreach ($context['_seq'] as $context["_key"] => $context["choice"]) {
            // line 26
            yield "                                            <div class=\"col\">
                                                <div class=\"theme-choice-card\" data-theme=\"";
            // line 27
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["choice"], "value", [], "any", false, false, false, 27), "html", null, true);
            yield "\">
                                                    <div class=\"form-check\">
                                                        <input type=\"radio\" id=\"";
            // line 29
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["choice"], "value", [], "any", false, false, false, 29), "html", null, true);
            yield "\" name=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 29, $this->source); })()), "theme", [], "any", false, false, false, 29), "vars", [], "any", false, false, false, 29), "full_name", [], "any", false, false, false, 29), "html", null, true);
            yield "\" value=\"";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["choice"], "value", [], "any", false, false, false, 29), "html", null, true);
            yield "\" class=\"form-check-input\" 
                                                               ";
            // line 30
            if ((CoreExtension::getAttribute($this->env, $this->source, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 30, $this->source); })()), "theme", [], "any", false, false, false, 30) == CoreExtension::getAttribute($this->env, $this->source, $context["choice"], "value", [], "any", false, false, false, 30))) {
                yield "checked";
            }
            yield ">
                                                        <label class=\"form-check-label\" for=\"";
            // line 31
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["choice"], "value", [], "any", false, false, false, 31), "html", null, true);
            yield "\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, $context["choice"], "label", [], "any", false, false, false, 31), "html", null, true);
            yield "</label>
                                                    </div>
                                                    <div class=\"theme-preview\">
                                                        <div class=\"theme-preview-navbar\"></div>
                                                        <div class=\"theme-preview-card\">
                                                            <div class=\"theme-preview-card-header\"></div>
                                                            <div class=\"theme-preview-card-body\"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['choice'], $context['_parent']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 43
        yield "                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    <div class=\"d-flex justify-content-between mt-4\">
                        <a href=\"";
        // line 51
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_account_index");
        yield "\" class=\"btn btn-secondary\">
                            <i class=\"bi bi-arrow-left me-1\"></i> Retour
                        </a>
                        <button type=\"submit\" class=\"btn btn-primary\">
                            <i class=\"bi bi-check-lg me-1\"></i> Enregistrer
                        </button>
                    </div>
                ";
        // line 58
        yield         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 58, $this->source); })()), 'form_end', ["render_rest" => false]);
        yield "
            </div>
        </div>
    </div>
</div>

<style>
    .theme-choice-card {
        border: 2px solid #e9ecef;
        border-radius: 10px;
        padding: 1rem;
        transition: all 0.2s ease;
        cursor: pointer;
    }
    
    .theme-choice-card:hover {
        border-color: #ced4da;
    }
    
    .theme-choice-card input[type=\"radio\"]:checked + label {
        font-weight: bold;
    }
    
    .theme-choice-card input[type=\"radio\"]:checked ~ .theme-preview {
        transform: translateY(-5px);
    }
    
    input[type=\"radio\"]:checked ~ .theme-preview {
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }
    
    .theme-preview {
        margin-top: 1rem;
        transition: all 0.3s ease;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
    
    .theme-preview-navbar {
        height: 40px;
        width: 100%;
    }
    
    .theme-preview-card {
        background: white;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    
    .theme-preview-card-header {
        height: 10px;
        width: 100%;
    }
    
    .theme-preview-card-body {
        height: 70px;
        padding: 10px;
        background-color: white;
    }
    
    /* Styles pour les différents thèmes */
    [data-theme=\"default\"] .theme-preview-navbar,
    [data-theme=\"default\"] .theme-preview-card-header {
        background: linear-gradient(135deg, #8a84f7, #9c97ff);
    }
    
    [data-theme=\"light-blue\"] .theme-preview-navbar,
    [data-theme=\"light-blue\"] .theme-preview-card-header {
        background: linear-gradient(135deg, #6ecbf5, #8ed8f8);
    }
    
    [data-theme=\"light-green\"] .theme-preview-navbar,
    [data-theme=\"light-green\"] .theme-preview-card-header {
        background: linear-gradient(135deg, #7dd87e, #a0e4a1);
    }
    
    [data-theme=\"light-pink\"] .theme-preview-navbar,
    [data-theme=\"light-pink\"] .theme-preview-card-header {
        background: linear-gradient(135deg, #f792bb, #fcb6d0);
    }
</style>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const themeCards = document.querySelectorAll('.theme-choice-card');
        
        themeCards.forEach(card => {
            card.addEventListener('click', function() {
                const radio = this.querySelector('input[type=\"radio\"]');
                radio.checked = true;
            });
        });
    });
</script>
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
        return "account/theme.html.twig";
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
        return array (  199 => 58,  189 => 51,  179 => 43,  159 => 31,  153 => 30,  145 => 29,  140 => 27,  137 => 26,  133 => 25,  126 => 21,  122 => 20,  115 => 16,  111 => 15,  100 => 6,  87 => 5,  64 => 3,  41 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Thème de l'application - Vaca-Meet{% endblock %}

{% block body %}
<div class=\"row\">
    <div class=\"col-12\">
        <h1 class=\"mb-4\">Thème de l'application</h1>
        
        <div class=\"card\">
            <div class=\"card-body\">
                <h5 class=\"card-title\">Personnalisation de l'interface</h5>
                <p class=\"card-text text-muted mb-4\">Choisissez le thème qui correspond le mieux à votre image de marque.</p>
                
                {{ form_start(form, {'attr': {'class': 'theme-form'}}) }}
                    {{ form_widget(form._token) }}
                    <div class=\"row\">
                        <div class=\"col-md-8 offset-md-2\">
                            <div class=\"theme-options\">
                                {{ form_label(form.theme) }}
                                {{ form_help(form.theme) }}
                                
                                <div class=\"theme-choices mt-4\">
                                    <div class=\"row row-cols-1 row-cols-md-2 g-4\">
                                        {% for choice in form.theme.vars.choices %}
                                            <div class=\"col\">
                                                <div class=\"theme-choice-card\" data-theme=\"{{ choice.value }}\">
                                                    <div class=\"form-check\">
                                                        <input type=\"radio\" id=\"{{ choice.value }}\" name=\"{{ form.theme.vars.full_name }}\" value=\"{{ choice.value }}\" class=\"form-check-input\" 
                                                               {% if user.theme == choice.value %}checked{% endif %}>
                                                        <label class=\"form-check-label\" for=\"{{ choice.value }}\">{{ choice.label }}</label>
                                                    </div>
                                                    <div class=\"theme-preview\">
                                                        <div class=\"theme-preview-navbar\"></div>
                                                        <div class=\"theme-preview-card\">
                                                            <div class=\"theme-preview-card-header\"></div>
                                                            <div class=\"theme-preview-card-body\"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        {% endfor %}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    <div class=\"d-flex justify-content-between mt-4\">
                        <a href=\"{{ path('app_account_index') }}\" class=\"btn btn-secondary\">
                            <i class=\"bi bi-arrow-left me-1\"></i> Retour
                        </a>
                        <button type=\"submit\" class=\"btn btn-primary\">
                            <i class=\"bi bi-check-lg me-1\"></i> Enregistrer
                        </button>
                    </div>
                {{ form_end(form, {'render_rest': false}) }}
            </div>
        </div>
    </div>
</div>

<style>
    .theme-choice-card {
        border: 2px solid #e9ecef;
        border-radius: 10px;
        padding: 1rem;
        transition: all 0.2s ease;
        cursor: pointer;
    }
    
    .theme-choice-card:hover {
        border-color: #ced4da;
    }
    
    .theme-choice-card input[type=\"radio\"]:checked + label {
        font-weight: bold;
    }
    
    .theme-choice-card input[type=\"radio\"]:checked ~ .theme-preview {
        transform: translateY(-5px);
    }
    
    input[type=\"radio\"]:checked ~ .theme-preview {
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }
    
    .theme-preview {
        margin-top: 1rem;
        transition: all 0.3s ease;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
    
    .theme-preview-navbar {
        height: 40px;
        width: 100%;
    }
    
    .theme-preview-card {
        background: white;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    
    .theme-preview-card-header {
        height: 10px;
        width: 100%;
    }
    
    .theme-preview-card-body {
        height: 70px;
        padding: 10px;
        background-color: white;
    }
    
    /* Styles pour les différents thèmes */
    [data-theme=\"default\"] .theme-preview-navbar,
    [data-theme=\"default\"] .theme-preview-card-header {
        background: linear-gradient(135deg, #8a84f7, #9c97ff);
    }
    
    [data-theme=\"light-blue\"] .theme-preview-navbar,
    [data-theme=\"light-blue\"] .theme-preview-card-header {
        background: linear-gradient(135deg, #6ecbf5, #8ed8f8);
    }
    
    [data-theme=\"light-green\"] .theme-preview-navbar,
    [data-theme=\"light-green\"] .theme-preview-card-header {
        background: linear-gradient(135deg, #7dd87e, #a0e4a1);
    }
    
    [data-theme=\"light-pink\"] .theme-preview-navbar,
    [data-theme=\"light-pink\"] .theme-preview-card-header {
        background: linear-gradient(135deg, #f792bb, #fcb6d0);
    }
</style>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const themeCards = document.querySelectorAll('.theme-choice-card');
        
        themeCards.forEach(card => {
            card.addEventListener('click', function() {
                const radio = this.querySelector('input[type=\"radio\"]');
                radio.checked = true;
            });
        });
    });
</script>
{% endblock %} ", "account/theme.html.twig", "C:\\Users\\PAGOA\\Documents\\GitHub\\Vaca-Meet-Application-Web-SYMFONY\\templates\\account\\theme.html.twig");
    }
}
