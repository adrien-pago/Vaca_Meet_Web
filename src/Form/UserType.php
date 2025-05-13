<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('username', TextType::class, [
                'label' => 'Nom du camping',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez entrer le nom de votre camping',
                    ]),
                ],
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez entrer votre email',
                    ]),
                ],
            ])
        ;

        if ($options['include_password']) {
            $builder->add('plainPassword', PasswordType::class, [
                'label' => 'Mot de passe',
                'mapped' => false,
                'required' => $options['require_password'],
                'constraints' => $options['require_password'] ? [
                    new NotBlank([
                        'message' => 'Veuillez entrer un mot de passe',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Votre mot de passe doit comporter au moins {{ limit }} caractères',
                        'max' => 4096,
                    ]),
                ] : [],
                'help' => 'Laissez vide pour conserver le mot de passe actuel',
            ]);
        }

        if ($options['include_theme']) {
            $builder->add('theme', ChoiceType::class, [
                'label' => 'Thème de l\'application',
                'choices' => [
                    'Bleu (par défaut)' => User::THEME_DEFAULT,
                    'Bleu clair' => User::THEME_LIGHT_BLUE,
                    'Vert clair' => User::THEME_LIGHT_GREEN,
                    'Rose clair' => User::THEME_LIGHT_PINK,
                ],
                'expanded' => true,
                'help' => 'Choisissez un thème de couleur pour personnaliser l\'interface de l\'application',
            ]);
        }

        if ($options['include_roles']) {
            $builder->add('roles', ChoiceType::class, [
                'label' => 'Rôles',
                'choices' => [
                    'Gestionnaire' => 'ROLE_MANAGER',
                    'Service' => 'ROLE_SERVICE',
                ],
                'multiple' => true,
                'expanded' => true,
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'include_password' => true,
            'require_password' => true,
            'include_roles' => false,
            'include_theme' => false,
        ]);
    }
} 