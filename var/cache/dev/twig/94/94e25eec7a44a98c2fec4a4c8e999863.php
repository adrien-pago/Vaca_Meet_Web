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

/* security/login.html.twig */
class __TwigTemplate_63d548307176615cb02578876b0cbe0a extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/login.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/login.html.twig"));

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

        yield "Connexion - Vaca-Meet";
        
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
    <div class=\"login-logo text-center mt-n3 mb-0\">
        <a href=\"";
        // line 12
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home");
        yield "\">
            <h1 class=\"display-3 text-primary mb-0\">Vaca-Meet</h1>
        </a>
    </div>
    
    <div class=\"login-card mt-0 p-0\">
        <div class=\"login-header py-2\">
            <h1 class=\"login-title mb-0\">Connexion</h1>
            <p class=\"login-subtitle mb-0\">Accédez à votre espace de gestion</p>
        </div>
        
        <div class=\"login-body p-3\">
            <form method=\"post\" class=\"login-form\">
                ";
        // line 25
        if ((($tmp = (isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 25, $this->source); })())) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            // line 26
            yield "                    <div class=\"alert alert-danger\">
                        ";
            // line 27
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans(CoreExtension::getAttribute($this->env, $this->source, (isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 27, $this->source); })()), "messageKey", [], "any", false, false, false, 27), CoreExtension::getAttribute($this->env, $this->source, (isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 27, $this->source); })()), "messageData", [], "any", false, false, false, 27), "security"), "html", null, true);
            yield "
                    </div>
                ";
        }
        // line 30
        yield "
                <div class=\"form-group mb-2\">
                    <input type=\"email\" value=\"";
        // line 32
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape((isset($context["last_username"]) || array_key_exists("last_username", $context) ? $context["last_username"] : (function () { throw new RuntimeError('Variable "last_username" does not exist.', 32, $this->source); })()), "html", null, true);
        yield "\" name=\"email\" id=\"inputEmail\" class=\"form-control\" autocomplete=\"email\" required autofocus placeholder=\" \">
                    <label for=\"inputEmail\" class=\"form-label\">Email</label>
                </div>
                
                <div class=\"form-group mb-2\">
                    <input type=\"password\" name=\"password\" id=\"inputPassword\" class=\"form-control\" autocomplete=\"current-password\" required placeholder=\" \">
                    <label for=\"inputPassword\" class=\"form-label\">Mot de passe</label>
                    <button type=\"button\" id=\"toggle-password\" class=\"btn btn-sm text-muted position-absolute end-0 top-50 translate-middle-y me-3\" style=\"background:none; border:none;\">
                        <i class=\"bi bi-eye\"></i>
                    </button>
                </div>

                <input type=\"hidden\" name=\"_csrf_token\" value=\"";
        // line 44
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken("authenticate"), "html", null, true);
        yield "\">

                <div class=\"form-check mb-2\">
                    <input type=\"checkbox\" class=\"form-check-input\" id=\"rememberMe\" name=\"_remember_me\">
                    <label class=\"form-check-label\" for=\"rememberMe\">Se souvenir de moi</label>
                </div>

                <div class=\"forgot-password mb-2\">
                    <a href=\"#\">
                        <i class=\"bi bi-question-circle\"></i> Mot de passe oublié?
                    </a>
                </div>

                <button class=\"login-btn w-100\" type=\"submit\">
                    Connexion
                </button>
            </form>
        </div>
        
        <div class=\"login-footer\">
            <p>Pas encore inscrit ? <a href=\"";
        // line 64
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_register");
        yield "\">Créer un compte</a></p>
        </div>
    </div>
</div>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 70
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

        // line 71
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
        return "security/login.html.twig";
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
        return array (  250 => 71,  237 => 70,  221 => 64,  198 => 44,  183 => 32,  179 => 30,  173 => 27,  170 => 26,  168 => 25,  152 => 12,  148 => 10,  135 => 9,  113 => 7,  90 => 5,  67 => 3,  44 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Connexion - Vaca-Meet{% endblock %}

{% block body_class %}navbar-hidden auth-page{% endblock %}

{% block header %}{% endblock %}

{% block body %}
<div class=\"auth-page-container pt-0 mt-n3\">
    <div class=\"login-logo text-center mt-n3 mb-0\">
        <a href=\"{{ path('app_home') }}\">
            <h1 class=\"display-3 text-primary mb-0\">Vaca-Meet</h1>
        </a>
    </div>
    
    <div class=\"login-card mt-0 p-0\">
        <div class=\"login-header py-2\">
            <h1 class=\"login-title mb-0\">Connexion</h1>
            <p class=\"login-subtitle mb-0\">Accédez à votre espace de gestion</p>
        </div>
        
        <div class=\"login-body p-3\">
            <form method=\"post\" class=\"login-form\">
                {% if error %}
                    <div class=\"alert alert-danger\">
                        {{ error.messageKey|trans(error.messageData, 'security') }}
                    </div>
                {% endif %}

                <div class=\"form-group mb-2\">
                    <input type=\"email\" value=\"{{ last_username }}\" name=\"email\" id=\"inputEmail\" class=\"form-control\" autocomplete=\"email\" required autofocus placeholder=\" \">
                    <label for=\"inputEmail\" class=\"form-label\">Email</label>
                </div>
                
                <div class=\"form-group mb-2\">
                    <input type=\"password\" name=\"password\" id=\"inputPassword\" class=\"form-control\" autocomplete=\"current-password\" required placeholder=\" \">
                    <label for=\"inputPassword\" class=\"form-label\">Mot de passe</label>
                    <button type=\"button\" id=\"toggle-password\" class=\"btn btn-sm text-muted position-absolute end-0 top-50 translate-middle-y me-3\" style=\"background:none; border:none;\">
                        <i class=\"bi bi-eye\"></i>
                    </button>
                </div>

                <input type=\"hidden\" name=\"_csrf_token\" value=\"{{ csrf_token('authenticate') }}\">

                <div class=\"form-check mb-2\">
                    <input type=\"checkbox\" class=\"form-check-input\" id=\"rememberMe\" name=\"_remember_me\">
                    <label class=\"form-check-label\" for=\"rememberMe\">Se souvenir de moi</label>
                </div>

                <div class=\"forgot-password mb-2\">
                    <a href=\"#\">
                        <i class=\"bi bi-question-circle\"></i> Mot de passe oublié?
                    </a>
                </div>

                <button class=\"login-btn w-100\" type=\"submit\">
                    Connexion
                </button>
            </form>
        </div>
        
        <div class=\"login-footer\">
            <p>Pas encore inscrit ? <a href=\"{{ path('app_register') }}\">Créer un compte</a></p>
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
{% endblock %} ", "security/login.html.twig", "C:\\Users\\PAGOA\\Documents\\GitHub\\Vaca-Meet-WEB\\templates\\security\\login.html.twig");
    }
}
