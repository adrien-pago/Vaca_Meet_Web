<?php

namespace App\Controller\Account;

use App\Entity\User;
use App\Form\ThemeType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

#[Route('/account')]
class ThemeController extends AbstractController
{
    #[Route('/theme', name: 'app_theme_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, EntityManagerInterface $entityManager): Response
    {
        $this->denyAccessUnlessGranted('ROLE_MANAGER');
        
        $user = $this->getUser();
        
        if (!$user instanceof User) {
            throw new AccessDeniedException('Accès réservé aux utilisateurs connectés.');
        }

        $form = $this->createForm(ThemeType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                // Récupère le thème sélectionné
                $selectedTheme = $form->get('theme')->getData();
                
                // Définit explicitement le thème
                $user->setTheme($selectedTheme);
                
                try {
                    // Persiste les changements
                    $entityManager->persist($user);
                    $entityManager->flush();

                    $this->addFlash('success', 'Le thème a été modifié avec succès. (' . $selectedTheme . ')');
                    return $this->redirectToRoute('app_account_index');
                } catch (\Exception $e) {
                    $this->addFlash('danger', 'Erreur lors de l\'enregistrement : ' . $e->getMessage());
                }
            } else {
                // Récupérer les erreurs du formulaire pour le débogage
                $errors = $form->getErrors(true);
                foreach ($errors as $error) {
                    $this->addFlash('danger', $error->getMessage());
                }
            }
        }

        return $this->render('account/theme.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }
} 