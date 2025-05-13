<?php

namespace App\Controller\Service;

use App\Entity\ServiceAccount;
use App\Entity\User;
use App\Form\ServiceAccountType;
use App\Repository\ServiceAccountRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

#[Route('/service')]
class ServiceController extends AbstractController
{
    #[Route('/', name: 'app_service_index', methods: ['GET'])]
    public function index(ServiceAccountRepository $serviceAccountRepository): Response
    {
        $user = $this->getUser();
        
        if (!$user instanceof User) {
            throw new AccessDeniedException('Accès non autorisé.');
        }

        $services = $serviceAccountRepository->findBy(['user' => $user]);

        return $this->render('service/index.html.twig', [
            'services' => $services,
        ]);
    }

    #[Route('/new', name: 'app_service_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ServiceAccountRepository $serviceAccountRepository, UserPasswordHasherInterface $passwordHasher): Response
    {
        $this->denyAccessUnlessGranted('ROLE_MANAGER');
        
        $user = $this->getUser();
        
        if (!$user instanceof User) {
            throw new AccessDeniedException('Accès réservé aux campings.');
        }

        $serviceAccount = new ServiceAccount();
        $serviceAccount->setUser($user);
        
        $form = $this->createForm(ServiceAccountType::class, $serviceAccount);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Handle password
            $plainPassword = $form->get('plainPassword')->getData();
            $serviceAccount->setPassword(
                $passwordHasher->hashPassword($serviceAccount, $plainPassword)
            );
            
            $serviceAccountRepository->save($serviceAccount, true);

            $this->addFlash('success', 'Le compte service a été créé avec succès.');
            return $this->redirectToRoute('app_service_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('service/new.html.twig', [
            'service_account' => $serviceAccount,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_service_show', methods: ['GET'])]
    public function show(ServiceAccount $serviceAccount): Response
    {
        $this->denyAccessUnlessGranted('VIEW', $serviceAccount);

        return $this->render('service/show.html.twig', [
            'service_account' => $serviceAccount,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_service_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ServiceAccount $serviceAccount, ServiceAccountRepository $serviceAccountRepository, UserPasswordHasherInterface $passwordHasher): Response
    {
        $this->denyAccessUnlessGranted('EDIT', $serviceAccount);

        $form = $this->createForm(ServiceAccountType::class, $serviceAccount, [
            'include_password' => true,
            'require_password' => false,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Handle password update if provided
            if ($plainPassword = $form->get('plainPassword')->getData()) {
                $serviceAccount->setPassword($passwordHasher->hashPassword($serviceAccount, $plainPassword));
            }
            
            $serviceAccountRepository->save($serviceAccount, true);

            $this->addFlash('success', 'Le compte service a été mis à jour avec succès.');
            return $this->redirectToRoute('app_service_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('service/edit.html.twig', [
            'service_account' => $serviceAccount,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_service_delete', methods: ['POST'])]
    public function delete(Request $request, ServiceAccount $serviceAccount, ServiceAccountRepository $serviceAccountRepository): Response
    {
        $this->denyAccessUnlessGranted('DELETE', $serviceAccount);

        if ($this->isCsrfTokenValid('delete'.$serviceAccount->getId(), $request->request->get('_token'))) {
            $serviceAccountRepository->remove($serviceAccount, true);
            $this->addFlash('success', 'Le compte service a été supprimé avec succès.');
        }

        return $this->redirectToRoute('app_service_index', [], Response::HTTP_SEE_OTHER);
    }
} 