<?php

namespace App\Controller\Planning;

use App\Entity\Activity;
use App\Entity\ActivityCategory;
use App\Repository\ActivityCategoryRepository;
use App\Repository\ActivityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/planning')]
class PlanningController extends AbstractController
{
    #[Route('/', name: 'app_planning_index')]
    public function index(ActivityRepository $activityRepository, ActivityCategoryRepository $categoryRepository): Response
    {
        // Récupérer les catégories pour l'affichage et la sélection
        $categories = $categoryRepository->findAll();
        
        // Récupérer le début de la semaine actuelle (lundi)
        $startOfWeek = new \DateTime();
        $startOfWeek->modify('monday this week');
        $startOfWeek->setTime(0, 0, 0);
        
        // Récupérer la fin de la semaine (dimanche)
        $endOfWeek = clone $startOfWeek;
        $endOfWeek->modify('+6 days');
        
        // Formater la période affichée (ex: "12 - 18 Mai 2025")
        $weekDisplay = $startOfWeek->format('d') . ' - ' . $endOfWeek->format('d F Y');
        
        // Récupérer les activités de la semaine
        $activities = $activityRepository->findByWeek($startOfWeek);
        
        return $this->render('planning/index.html.twig', [
            'weekDisplay' => $weekDisplay,
            'startOfWeek' => $startOfWeek,
            'categories' => $categories,
            'activities' => $activities,
        ]);
    }

    #[Route('/add-activity', name: 'app_planning_add_activity', methods: ['POST'])]
    public function addActivity(
        Request $request, 
        EntityManagerInterface $entityManager,
        ActivityRepository $activityRepository,
        ActivityCategoryRepository $categoryRepository
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);
        
        // Vérifier si on utilise une catégorie existante ou si on en crée une nouvelle
        if (isset($data['category_id']) && $data['category_id'] !== 'new') {
            $category = $categoryRepository->find($data['category_id']);
            if (!$category) {
                return $this->json(['success' => false, 'message' => 'Catégorie non trouvée'], Response::HTTP_BAD_REQUEST);
            }
        } else {
            // Créer une nouvelle catégorie
            $category = new ActivityCategory();
            $category->setName($data['category_name']);
            $category->setColor($data['category_color']);
            $entityManager->persist($category);
        }
        
        // Créer une nouvelle activité
        $activity = new Activity();
        $activity->setName($data['activity_name']);
        $activity->setDescription($data['description'] ?? null);
        $activity->setCategory($category);
        
        // Définir la date et heure de début et de fin
        $startDateTime = new \DateTime($data['date'] . ' ' . $data['start_time']);
        $endDateTime = new \DateTime($data['date'] . ' ' . $data['end_time']);
        $activity->setStartDateTime($startDateTime);
        $activity->setEndDateTime($endDateTime);
        
        // Définir les autres propriétés
        // Les champs location et maxParticipants sont désormais toujours null
        $activity->setLocation(null);
        $activity->setMaxParticipants(null);
        $activity->setIsRecurring($data['is_recurring'] ?? false);
        
        // Si l'activité est récurrente, gérer les jours de récurrence
        if (isset($data['is_recurring']) && $data['is_recurring']) {
            $activity->setRecurringDays($data['recurring_days'] ?? []);
        }
        
        // Persister et flusher
        $entityManager->persist($activity);
        $entityManager->flush();
        
        return $this->json([
            'success' => true,
            'message' => 'Activité ajoutée avec succès',
            'activity' => [
                'id' => $activity->getId(),
                'name' => $activity->getName(),
                'category' => $activity->getCategory()->getName(),
                'color' => $activity->getCategory()->getColor(),
                'start' => $activity->getStartDateTime()->format('Y-m-d H:i:s'),
                'end' => $activity->getEndDateTime()->format('Y-m-d H:i:s'),
            ]
        ]);
    }
} 