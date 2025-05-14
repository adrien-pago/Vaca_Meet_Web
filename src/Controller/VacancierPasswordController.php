<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/account/vacancier-password')]
class VacancierPasswordController extends AbstractController
{
    #[Route('/', name: 'app_vacancier_password_index')]
    public function index(EntityManagerInterface $entityManager): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        if (!$user) {
            return $this->redirectToRoute('app_login');
        }

        return $this->render('vacancier_password/index.html.twig', [
            'user' => $user,
        ]);
    }

    #[Route('/update', name: 'app_vacancier_password_update', methods: ['POST'])]
    public function update(Request $request, EntityManagerInterface $entityManager): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        if (!$user) {
            return $this->redirectToRoute('app_login');
        }

        $password = $request->request->get('password');
        if (empty($password)) {
            $this->addFlash('error', 'Le mot de passe ne peut pas être vide.');
            return $this->redirectToRoute('app_vacancier_password_index');
        }

        // Si le mot de passe est trop court
        if (strlen($password) < 6) {
            $this->addFlash('error', 'Le mot de passe doit contenir au moins 6 caractères.');
            return $this->redirectToRoute('app_vacancier_password_index');
        }

        $user->setMdpVacancier($password);
        $entityManager->flush();

        $this->addFlash('success', 'Le mot de passe vacancier a été mis à jour avec succès.');
        return $this->redirectToRoute('app_vacancier_password_index');
    }
} 