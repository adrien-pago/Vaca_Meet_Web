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

/* base.html.twig */
class __TwigTemplate_d83c1e2ed248d21855f557c2486dce29 extends Template
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

        $this->parent = false;

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'javascripts' => [$this, 'block_javascripts'],
            'body_class' => [$this, 'block_body_class'],
            'header' => [$this, 'block_header'],
            'body' => [$this, 'block_body'],
            'footer' => [$this, 'block_footer'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "base.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "base.html.twig"));

        // line 1
        yield "<!DOCTYPE html>
<html class=\"h-100\">
    <head>
        <meta charset=\"UTF-8\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
        <title>";
        // line 6
        yield from $this->unwrap()->yieldBlock('title', $context, $blocks);
        yield "</title>
        <link rel=\"icon\" href=\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 128 128%22><text y=%221.2em%22 font-size=%2296%22>⛱️</text></svg>\">
        ";
        // line 8
        yield from $this->unwrap()->yieldBlock('stylesheets', $context, $blocks);
        // line 13
        yield "
        ";
        // line 14
        yield from $this->unwrap()->yieldBlock('javascripts', $context, $blocks);
        // line 18
        yield "
        <style>
            ";
        // line 20
        if ((($tmp = CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 20, $this->source); })()), "user", [], "any", false, false, false, 20)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            // line 21
            yield "                ";
            $context["userTheme"] = CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 21, $this->source); })()), "user", [], "any", false, false, false, 21), "theme", [], "any", false, false, false, 21);
            // line 22
            yield "                ";
            if (((isset($context["userTheme"]) || array_key_exists("userTheme", $context) ? $context["userTheme"] : (function () { throw new RuntimeError('Variable "userTheme" does not exist.', 22, $this->source); })()) == "light-blue")) {
                // line 23
                yield "                    :root {
                        --navbar-bg: linear-gradient(135deg, #6ecbf5, #8ed8f8);
                        --navbar-bg-scrolled: rgba(142, 216, 248, 0.95);
                        --primary-gradient: linear-gradient(135deg, #3fa9e7, #6ecbf5);
                        --theme-color: #6ecbf5;
                        --theme-color-rgb: 110, 203, 245;
                    }
                ";
            } elseif ((            // line 30
(isset($context["userTheme"]) || array_key_exists("userTheme", $context) ? $context["userTheme"] : (function () { throw new RuntimeError('Variable "userTheme" does not exist.', 30, $this->source); })()) == "light-green")) {
                // line 31
                yield "                    :root {
                        --navbar-bg: linear-gradient(135deg, #7dd87e, #a0e4a1);
                        --navbar-bg-scrolled: rgba(160, 228, 161, 0.95);
                        --primary-gradient: linear-gradient(135deg, #58c559, #7dd87e);
                        --theme-color: #7dd87e;
                        --theme-color-rgb: 125, 216, 126;
                    }
                ";
            } elseif ((            // line 38
(isset($context["userTheme"]) || array_key_exists("userTheme", $context) ? $context["userTheme"] : (function () { throw new RuntimeError('Variable "userTheme" does not exist.', 38, $this->source); })()) == "light-pink")) {
                // line 39
                yield "                    :root {
                        --navbar-bg: linear-gradient(135deg, #f792bb, #fcb6d0);
                        --navbar-bg-scrolled: rgba(252, 182, 208, 0.95);
                        --primary-gradient: linear-gradient(135deg, #f26ca6, #f792bb);
                        --theme-color: #f792bb;
                        --theme-color-rgb: 247, 146, 187;
                    }
                ";
            } else {
                // line 47
                yield "                    :root {
                        --navbar-bg: linear-gradient(135deg, #a5a0ff, #b6b3ff);
                        --navbar-bg-scrolled: rgba(181, 178, 255, 0.95);
                        --primary-gradient: linear-gradient(135deg, #6259ca, #7571f9);
                        --theme-color: #7571f9;
                        --theme-color-rgb: 117, 113, 249;
                    }
                ";
            }
            // line 55
            yield "            ";
        } else {
            // line 56
            yield "                :root {
                    --navbar-bg: linear-gradient(135deg, #a5a0ff, #b6b3ff);
                    --navbar-bg-scrolled: rgba(181, 178, 255, 0.95);
                    --primary-gradient: linear-gradient(135deg, #6259ca, #7571f9);
                    --theme-color: #7571f9;
                    --theme-color-rgb: 117, 113, 249;
                }
            ";
        }
        // line 64
        yield "
            /* Application des variables de thème aux éléments de l'interface */
            .btn-primary {
                background: var(--primary-gradient);
                border-color: var(--theme-color);
            }
            
            .text-primary {
                color: var(--theme-color) !important;
            }
            
            .themed-title {
                color: var(--theme-color) !important;
                font-weight: bold;
            }
            
            .feature-card::after {
                background: var(--primary-gradient);
            }
            
            .card-icon {
                background-color: rgba(var(--theme-color-rgb), 0.1);
            }
            
            .card-icon i {
                color: var(--theme-color);
            }
            
            .welcome-card::before {
                background: var(--primary-gradient);
            }
            
            .dashboard-container::before {
                background: var(--primary-gradient);
            }
            
            .login-header, .register-header {
                background: var(--primary-gradient);
            }
            
            .login-btn, .register-btn {
                background: var(--primary-gradient);
            }
        </style>
    </head>
    <body class=\"d-flex flex-column h-100 ";
        // line 109
        yield from $this->unwrap()->yieldBlock('body_class', $context, $blocks);
        yield "\">
        ";
        // line 110
        yield from $this->unwrap()->yieldBlock('header', $context, $blocks);
        // line 186
        yield "
        <main class=\"flex-shrink-0\">
            <div class=\"container mb-4\">
                ";
        // line 189
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 189, $this->source); })()), "flashes", [], "any", false, false, false, 189));
        foreach ($context['_seq'] as $context["label"] => $context["messages"]) {
            // line 190
            yield "                    ";
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable($context["messages"]);
            foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
                // line 191
                yield "                        <div class=\"alert alert-";
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["label"], "html", null, true);
                yield " alert-dismissible fade show\">
                            ";
                // line 192
                yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($context["message"], "html", null, true);
                yield "
                            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>
                        </div>
                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_key'], $context['message'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 196
            yield "                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['label'], $context['messages'], $context['_parent']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 197
        yield "                
                ";
        // line 198
        yield from $this->unwrap()->yieldBlock('body', $context, $blocks);
        // line 199
        yield "            </div>
        </main>

        ";
        // line 202
        yield from $this->unwrap()->yieldBlock('footer', $context, $blocks);
        // line 209
        yield "    </body>
</html> ";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        yield from [];
    }

    // line 6
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

        yield "Vaca-Meet";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 8
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

        // line 9
        yield "            ";
        yield $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("app");
        yield "
        <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css\" rel=\"stylesheet\">
        <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css\">
        ";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 14
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

        // line 15
        yield "            ";
        yield $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("app");
        yield "
        <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js\" defer></script>
        ";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 109
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

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 110
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

        // line 111
        yield "        <header>
            <div class=\"navbar-container\">
                <div class=\"navbar\">
                    <div class=\"navbar-brand\">
                        ";
        // line 115
        if ((CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 115, $this->source); })()), "user", [], "any", false, false, false, 115) && CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, ($context["app"] ?? null), "user", [], "any", false, true, false, 115), "username", [], "any", true, true, false, 115))) {
            // line 116
            yield "                            <span class=\"camping-name\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 116, $this->source); })()), "user", [], "any", false, false, false, 116), "username", [], "any", false, false, false, 116), "html", null, true);
            yield "</span>
                        ";
        }
        // line 118
        yield "                    </div>
                    
                    <a href=\"";
        // line 120
        yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home");
        yield "\" class=\"navbar-title-link\">
                        <span class=\"navbar-title\">Vaca-Meet</span>
                    </a>
                    
                    <button class=\"navbar-toggle\">
                        <span class=\"bar\"></span>
                        <span class=\"bar\"></span>
                        <span class=\"bar\"></span>
                    </button>
                    
                    <div class=\"navbar-menu-overlay\"></div>
                    <div class=\"navbar-menu\">
                        <ul class=\"navbar-nav\">
                            ";
        // line 133
        if ((($tmp = CoreExtension::getAttribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 133, $this->source); })()), "user", [], "any", false, false, false, 133)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
            // line 134
            yield "                                <li class=\"nav-item\">
                                    <a class=\"nav-link\" href=\"";
            // line 135
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_home");
            yield "\">
                                        <span class=\"icon\"><i class=\"bi bi-house-door\"></i></span>
                                        Accueil
                                    </a>
                                </li>
                                ";
            // line 140
            if ((($tmp = $this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_MANAGER")) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                // line 141
                yield "                                <li class=\"nav-item\">
                                    <a class=\"nav-link\" href=\"";
                // line 142
                yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_account_index");
                yield "\">
                                        <span class=\"icon\"><i class=\"bi bi-person-circle\"></i></span>
                                        Mon Compte
                                    </a>
                                </li>
                                ";
            }
            // line 148
            yield "                                <li class=\"nav-item\">
                                    <a class=\"nav-link\" href=\"";
            // line 149
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_service_index");
            yield "\">
                                        <span class=\"icon\"><i class=\"bi bi-people\"></i></span>
                                        Services
                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link\" href=\"";
            // line 155
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_planning_index");
            yield "\">
                                        <span class=\"icon\"><i class=\"bi bi-calendar-week\"></i></span>
                                        Planning
                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link\" href=\"";
            // line 161
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_logout");
            yield "\">
                                        <span class=\"icon\"><i class=\"bi bi-box-arrow-right\"></i></span>
                                        Déconnexion
                                    </a>
                                </li>
                            ";
        } else {
            // line 167
            yield "                                <li class=\"nav-item\">
                                    <a class=\"nav-link\" href=\"";
            // line 168
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_login");
            yield "\">
                                        <span class=\"icon\"><i class=\"bi bi-box-arrow-in-right\"></i></span>
                                        Connexion
                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link\" href=\"";
            // line 174
            yield $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_register");
            yield "\">
                                        <span class=\"icon\"><i class=\"bi bi-person-plus\"></i></span>
                                        Inscription
                                    </a>
                                </li>
                            ";
        }
        // line 180
        yield "                        </ul>
                    </div>
                </div>
            </div>
        </header>
        ";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 198
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

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        yield from [];
    }

    // line 202
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

        // line 203
        yield "        <footer class=\"footer mt-auto py-2 bg-light\">
            <div class=\"container text-center\">
                <p class=\"mb-0\">&copy; ";
        // line 205
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Twig\Extension\CoreExtension']->formatDate("now", "Y"), "html", null, true);
        yield " Vaca-Meet - Application pour gérants de campings</p>
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
        return "base.html.twig";
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
        return array (  535 => 205,  531 => 203,  518 => 202,  496 => 198,  480 => 180,  471 => 174,  462 => 168,  459 => 167,  450 => 161,  441 => 155,  432 => 149,  429 => 148,  420 => 142,  417 => 141,  415 => 140,  407 => 135,  404 => 134,  402 => 133,  386 => 120,  382 => 118,  376 => 116,  374 => 115,  368 => 111,  355 => 110,  333 => 109,  318 => 15,  305 => 14,  289 => 9,  276 => 8,  253 => 6,  241 => 209,  239 => 202,  234 => 199,  232 => 198,  229 => 197,  223 => 196,  213 => 192,  208 => 191,  203 => 190,  199 => 189,  194 => 186,  192 => 110,  188 => 109,  141 => 64,  131 => 56,  128 => 55,  118 => 47,  108 => 39,  106 => 38,  97 => 31,  95 => 30,  86 => 23,  83 => 22,  80 => 21,  78 => 20,  74 => 18,  72 => 14,  69 => 13,  67 => 8,  62 => 6,  55 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<!DOCTYPE html>
<html class=\"h-100\">
    <head>
        <meta charset=\"UTF-8\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
        <title>{% block title %}Vaca-Meet{% endblock %}</title>
        <link rel=\"icon\" href=\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 128 128%22><text y=%221.2em%22 font-size=%2296%22>⛱️</text></svg>\">
        {% block stylesheets %}
            {{ encore_entry_link_tags('app') }}
        <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css\" rel=\"stylesheet\">
        <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css\">
        {% endblock %}

        {% block javascripts %}
            {{ encore_entry_script_tags('app') }}
        <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js\" defer></script>
        {% endblock %}

        <style>
            {% if app.user %}
                {% set userTheme = app.user.theme %}
                {% if userTheme == 'light-blue' %}
                    :root {
                        --navbar-bg: linear-gradient(135deg, #6ecbf5, #8ed8f8);
                        --navbar-bg-scrolled: rgba(142, 216, 248, 0.95);
                        --primary-gradient: linear-gradient(135deg, #3fa9e7, #6ecbf5);
                        --theme-color: #6ecbf5;
                        --theme-color-rgb: 110, 203, 245;
                    }
                {% elseif userTheme == 'light-green' %}
                    :root {
                        --navbar-bg: linear-gradient(135deg, #7dd87e, #a0e4a1);
                        --navbar-bg-scrolled: rgba(160, 228, 161, 0.95);
                        --primary-gradient: linear-gradient(135deg, #58c559, #7dd87e);
                        --theme-color: #7dd87e;
                        --theme-color-rgb: 125, 216, 126;
                    }
                {% elseif userTheme == 'light-pink' %}
                    :root {
                        --navbar-bg: linear-gradient(135deg, #f792bb, #fcb6d0);
                        --navbar-bg-scrolled: rgba(252, 182, 208, 0.95);
                        --primary-gradient: linear-gradient(135deg, #f26ca6, #f792bb);
                        --theme-color: #f792bb;
                        --theme-color-rgb: 247, 146, 187;
                    }
                {% else %}
                    :root {
                        --navbar-bg: linear-gradient(135deg, #a5a0ff, #b6b3ff);
                        --navbar-bg-scrolled: rgba(181, 178, 255, 0.95);
                        --primary-gradient: linear-gradient(135deg, #6259ca, #7571f9);
                        --theme-color: #7571f9;
                        --theme-color-rgb: 117, 113, 249;
                    }
                {% endif %}
            {% else %}
                :root {
                    --navbar-bg: linear-gradient(135deg, #a5a0ff, #b6b3ff);
                    --navbar-bg-scrolled: rgba(181, 178, 255, 0.95);
                    --primary-gradient: linear-gradient(135deg, #6259ca, #7571f9);
                    --theme-color: #7571f9;
                    --theme-color-rgb: 117, 113, 249;
                }
            {% endif %}

            /* Application des variables de thème aux éléments de l'interface */
            .btn-primary {
                background: var(--primary-gradient);
                border-color: var(--theme-color);
            }
            
            .text-primary {
                color: var(--theme-color) !important;
            }
            
            .themed-title {
                color: var(--theme-color) !important;
                font-weight: bold;
            }
            
            .feature-card::after {
                background: var(--primary-gradient);
            }
            
            .card-icon {
                background-color: rgba(var(--theme-color-rgb), 0.1);
            }
            
            .card-icon i {
                color: var(--theme-color);
            }
            
            .welcome-card::before {
                background: var(--primary-gradient);
            }
            
            .dashboard-container::before {
                background: var(--primary-gradient);
            }
            
            .login-header, .register-header {
                background: var(--primary-gradient);
            }
            
            .login-btn, .register-btn {
                background: var(--primary-gradient);
            }
        </style>
    </head>
    <body class=\"d-flex flex-column h-100 {% block body_class %}{% endblock %}\">
        {% block header %}
        <header>
            <div class=\"navbar-container\">
                <div class=\"navbar\">
                    <div class=\"navbar-brand\">
                        {% if app.user and app.user.username is defined %}
                            <span class=\"camping-name\">{{ app.user.username }}</span>
                        {% endif %}
                    </div>
                    
                    <a href=\"{{ path('app_home') }}\" class=\"navbar-title-link\">
                        <span class=\"navbar-title\">Vaca-Meet</span>
                    </a>
                    
                    <button class=\"navbar-toggle\">
                        <span class=\"bar\"></span>
                        <span class=\"bar\"></span>
                        <span class=\"bar\"></span>
                    </button>
                    
                    <div class=\"navbar-menu-overlay\"></div>
                    <div class=\"navbar-menu\">
                        <ul class=\"navbar-nav\">
                            {% if app.user %}
                                <li class=\"nav-item\">
                                    <a class=\"nav-link\" href=\"{{ path('app_home') }}\">
                                        <span class=\"icon\"><i class=\"bi bi-house-door\"></i></span>
                                        Accueil
                                    </a>
                                </li>
                                {% if is_granted('ROLE_MANAGER') %}
                                <li class=\"nav-item\">
                                    <a class=\"nav-link\" href=\"{{ path('app_account_index') }}\">
                                        <span class=\"icon\"><i class=\"bi bi-person-circle\"></i></span>
                                        Mon Compte
                                    </a>
                                </li>
                                {% endif %}
                                <li class=\"nav-item\">
                                    <a class=\"nav-link\" href=\"{{ path('app_service_index') }}\">
                                        <span class=\"icon\"><i class=\"bi bi-people\"></i></span>
                                        Services
                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link\" href=\"{{ path('app_planning_index') }}\">
                                        <span class=\"icon\"><i class=\"bi bi-calendar-week\"></i></span>
                                        Planning
                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link\" href=\"{{ path('app_logout') }}\">
                                        <span class=\"icon\"><i class=\"bi bi-box-arrow-right\"></i></span>
                                        Déconnexion
                                    </a>
                                </li>
                            {% else %}
                                <li class=\"nav-item\">
                                    <a class=\"nav-link\" href=\"{{ path('app_login') }}\">
                                        <span class=\"icon\"><i class=\"bi bi-box-arrow-in-right\"></i></span>
                                        Connexion
                                    </a>
                                </li>
                                <li class=\"nav-item\">
                                    <a class=\"nav-link\" href=\"{{ path('app_register') }}\">
                                        <span class=\"icon\"><i class=\"bi bi-person-plus\"></i></span>
                                        Inscription
                                    </a>
                                </li>
                            {% endif %}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        {% endblock %}

        <main class=\"flex-shrink-0\">
            <div class=\"container mb-4\">
                {% for label, messages in app.flashes %}
                    {% for message in messages %}
                        <div class=\"alert alert-{{ label }} alert-dismissible fade show\">
                            {{ message }}
                            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>
                        </div>
                    {% endfor %}
                {% endfor %}
                
                {% block body %}{% endblock %}
            </div>
        </main>

        {% block footer %}
        <footer class=\"footer mt-auto py-2 bg-light\">
            <div class=\"container text-center\">
                <p class=\"mb-0\">&copy; {{ \"now\"|date(\"Y\") }} Vaca-Meet - Application pour gérants de campings</p>
            </div>
        </footer>
        {% endblock %}
    </body>
</html> ", "base.html.twig", "C:\\Users\\PAGOA\\Documents\\GitHub\\Vaca-Meet-Application-Web-SYMFONY\\templates\\base.html.twig");
    }
}
