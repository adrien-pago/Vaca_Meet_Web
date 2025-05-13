<?php

namespace App\Controller\Planning;

use App\Entity\Planning;
use App\Entity\User;
use App\Form\PlanningType;
use App\Repository\PlanningRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

#[Route('/planning')]
class PlanningController extends AbstractController
{
    #[Route('/', name: 'app_planning_index', methods: ['GET'])]
    public function index(PlanningRepository $planningRepository): Response
    {
        $user = $this->getUser();

        if ($user instanceof User) {
            $plannings = $planningRepository->findBy(['user' => $user]);
            
            // Also include plannings from any service accounts
            foreach ($user->getServiceAccounts() as $serviceAccount) {
                $servicePlannings = $planningRepository->findBy(['serviceAccount' => $serviceAccount]);
                $plannings = array_merge($plannings, $servicePlannings);
            }
        } else {
            // For service accounts, only show their own plannings
            $plannings = $planningRepository->findBy(['serviceAccount' => $user]);
        }

        // Group plannings by day of week
        $planningsByDay = [];
        foreach ([1, 2, 3, 4, 5, 6, 7] as $day) {
            $planningsByDay[$day] = [];
        }

        foreach ($plannings as $planning) {
            $planningsByDay[$planning->getDayOfWeek()][] = $planning;
        }

        return $this->render('planning/index.html.twig', [
            'plannings_by_day' => $planningsByDay,
            'days' => [
                1 => 'Lundi',
                2 => 'Mardi',
                3 => 'Mercredi',
                4 => 'Jeudi',
                5 => 'Vendredi',
                6 => 'Samedi',
                7 => 'Dimanche',
            ],
        ]);
    }

    #[Route('/new', name: 'app_planning_new', methods: ['GET', 'POST'])]
    public function new(Request $request, PlanningRepository $planningRepository): Response
    {
        $planning = new Planning();
        
        $user = $this->getUser();
        
        // Set default user/service account based on current user
        if ($user instanceof User) {
            $planning->setUser($user);
        } else {
            $planning->setServiceAccount($user);
        }
        
        $form = $this->createForm(PlanningType::class, $planning);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $planningRepository->save($planning, true);

            $this->addFlash('success', 'Le planning a été créé avec succès.');
            return $this->redirectToRoute('app_planning_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('planning/new.html.twig', [
            'planning' => $planning,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_planning_show', methods: ['GET'])]
    public function show(Planning $planning): Response
    {
        $this->denyAccessUnlessGranted('VIEW', $planning);

        return $this->render('planning/show.html.twig', [
            'planning' => $planning,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_planning_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Planning $planning, PlanningRepository $planningRepository): Response
    {
        $this->denyAccessUnlessGranted('EDIT', $planning);

        $form = $this->createForm(PlanningType::class, $planning);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $planningRepository->save($planning, true);

            $this->addFlash('success', 'Le planning a été mis à jour avec succès.');
            return $this->redirectToRoute('app_planning_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('planning/edit.html.twig', [
            'planning' => $planning,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_planning_delete', methods: ['POST'])]
    public function delete(Request $request, Planning $planning, PlanningRepository $planningRepository): Response
    {
        $this->denyAccessUnlessGranted('DELETE', $planning);

        if ($this->isCsrfTokenValid('delete'.$planning->getId(), $request->request->get('_token'))) {
            $planningRepository->remove($planning, true);
            $this->addFlash('success', 'Le planning a été supprimé avec succès.');
        }

        return $this->redirectToRoute('app_planning_index', [], Response::HTTP_SEE_OTHER);
    }
} 