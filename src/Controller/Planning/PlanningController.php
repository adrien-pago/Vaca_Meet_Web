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
    #[Route('/{week<\d{4}-\d{2}-\d{2}>?}', name: 'app_planning_index')]
    public function index(
        ActivityRepository $activityRepository, 
        ActivityCategoryRepository $categoryRepository,
        ?string $week = null
    ): Response {
        // Déterminer la date de début de la semaine
        $startOfWeek = new \DateTime();
        if ($week) {
            $startOfWeek = new \DateTime($week);
        }
        
        // S'assurer que $startOfWeek est bien un lundi
        if ($startOfWeek->format('N') != 1) {
            $startOfWeek->modify('monday this week');
        }
        $startOfWeek->setTime(0, 0, 0);
        
        // Récupérer la fin de la semaine (dimanche)
        $endOfWeek = clone $startOfWeek;
        $endOfWeek->modify('+6 days');
        
        // Calculer les semaines précédente et suivante pour la navigation
        $previousWeek = clone $startOfWeek;
        $previousWeek->modify('-1 week');
        
        $nextWeek = clone $startOfWeek;
        $nextWeek->modify('+1 week');
        
        // Formater la période affichée (ex: "12 - 18 Mai 2025")
        $weekDisplay = $startOfWeek->format('d') . ' - ' . $endOfWeek->format('d F Y');
        
        // Récupérer les catégories pour l'affichage et la sélection
        $categories = $categoryRepository->findAll();
        
        // Récupérer les activités de la semaine
        $activities = $activityRepository->findByWeek($startOfWeek);
        
        // Organiser les activités par jour et heure pour l'affichage dans le planning
        $timeSlots = [
            '8h - 9h' => '08:00',
            '9h - 10h' => '09:00',
            '10h - 11h' => '10:00',
            '11h - 12h' => '11:00',
            '12h - 13h' => '12:00',
            '13h - 14h' => '13:00',
            '14h - 15h' => '14:00',
            '15h - 16h' => '15:00',
            '16h - 17h' => '16:00',
            '17h - 18h' => '17:00',
            '18h - 19h' => '18:00',
            '19h - 20h' => '19:00',
            'Soirée' => '20:00'
        ];
        
        // Créer une structure pour le planning
        $planningGrid = [];
        
        // Initialiser la grille avec des tableaux vides
        foreach ($timeSlots as $label => $hour) {
            $planningGrid[$label] = [
                1 => [], // Lundi
                2 => [], // Mardi
                3 => [], // Mercredi
                4 => [], // Jeudi
                5 => [], // Vendredi
                6 => [], // Samedi
                7 => [], // Dimanche
            ];
        }
        
        // Remplir la grille avec les activités
        foreach ($activities as $activity) {
            $startHour = (int)$activity->getStartDateTime()->format('H');
            $dayOfWeek = (int)$activity->getStartDateTime()->format('N'); // 1 (lundi) à 7 (dimanche)
            
            // Trouver le créneau correspondant
            foreach ($timeSlots as $label => $hour) {
                $slotHour = (int)substr($hour, 0, 2);
                
                // Pour le créneau "Soirée", on considère les activités à partir de 20h
                if ($label === 'Soirée' && $startHour >= 20) {
                    $planningGrid[$label][$dayOfWeek][] = $activity;
                    break;
                }
                // Pour les autres créneaux, on vérifie si l'heure de début correspond
                elseif ($startHour === $slotHour && $label !== 'Soirée') {
                    $planningGrid[$label][$dayOfWeek][] = $activity;
                    break;
                }
            }
        }
        
        // Récupérer toutes les activités existantes pour la modal
        $existingActivities = $activityRepository->findBy([], ['name' => 'ASC']);
        
        // Supprimer les doublons en ne gardant qu'une activité par nom unique
        $uniqueActivities = [];
        foreach ($existingActivities as $activity) {
            $uniqueActivities[$activity->getName()] = $activity;
        }
        $existingActivities = array_values($uniqueActivities);
        
        return $this->render('planning/index.html.twig', [
            'weekDisplay' => $weekDisplay,
            'startOfWeek' => $startOfWeek,
            'previousWeek' => $previousWeek,
            'nextWeek' => $nextWeek,
            'categories' => $categories,
            'activities' => $activities,
            'planningGrid' => $planningGrid,
            'timeSlots' => $timeSlots,
            'existingActivities' => $existingActivities,
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
        
        // Tableau pour stocker les activités créées
        $createdActivities = [];
        
        // Si l'activité est récurrente et que des jours sont sélectionnés
        if (isset($data['is_recurring']) && $data['is_recurring'] && !empty($data['recurring_days'])) {
            // Date de base pour calculer les jours de la semaine
            $baseDate = new \DateTime($data['date']);
            $baseWeekday = (int)$baseDate->format('N'); // 1 (lundi) à 7 (dimanche)
            
            // Pour chaque jour de récurrence sélectionné
            foreach ($data['recurring_days'] as $day) {
                // Calculer la différence de jours pour atteindre le jour sélectionné
                $day = (int)$day; // Assurez-vous que $day est un entier
                if ($day === 0) $day = 7; // 0 est dimanche, convertir en 7
                
                $dayDiff = $day - $baseWeekday;
                
                // Créer une nouvelle date pour ce jour
                $newDate = clone $baseDate;
                if ($dayDiff != 0) {
                    $newDate->modify(($dayDiff > 0 ? '+' : '') . $dayDiff . ' days');
                }
                
                // Créer une nouvelle activité pour ce jour
                $activity = new Activity();
                $activity->setName($data['activity_name']);
                $activity->setDescription($data['description'] ?? null);
                $activity->setCategory($category);
                
                // Définir la date et heure de début et de fin
                $startDateTime = new \DateTime($newDate->format('Y-m-d') . ' ' . $data['start_time']);
                $endDateTime = new \DateTime($newDate->format('Y-m-d') . ' ' . $data['end_time']);
                $activity->setStartDateTime($startDateTime);
                $activity->setEndDateTime($endDateTime);
                
                // Définir les autres propriétés
                $activity->setLocation(null);
                $activity->setMaxParticipants(null);
                
                // Persister
                $entityManager->persist($activity);
                $createdActivities[] = $activity;
            }
        } else {
            // Créer une activité unique non récurrente
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
            $activity->setLocation(null);
            $activity->setMaxParticipants(null);
            
            // Persister
            $entityManager->persist($activity);
            $createdActivities[] = $activity;
        }
        
        // Flusher les changements
        $entityManager->flush();
        
        // Préparer les données pour la réponse
        $responseData = [
            'success' => true,
            'message' => count($createdActivities) > 1 ? 
                'Activités récurrentes ajoutées avec succès' : 
                'Activité ajoutée avec succès',
            'activities' => []
        ];
        
        // Ajouter les détails de chaque activité créée
        foreach ($createdActivities as $activity) {
            $responseData['activities'][] = [
                'id' => $activity->getId(),
                'name' => $activity->getName(),
                'category' => $activity->getCategory()->getName(),
                'color' => $activity->getCategory()->getColor(),
                'start' => $activity->getStartDateTime()->format('Y-m-d H:i:s'),
                'end' => $activity->getEndDateTime()->format('Y-m-d H:i:s'),
            ];
        }
        
        return $this->json($responseData);
    }
    
    #[Route('/edit-activity', name: 'app_planning_edit_activity', methods: ['POST'])]
    public function editActivity(
        Request $request, 
        EntityManagerInterface $entityManager,
        ActivityRepository $activityRepository,
        ActivityCategoryRepository $categoryRepository
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);
        
        // Vérifier si l'activité existe
        $activity = $activityRepository->find($data['activity_id']);
        if (!$activity) {
            return $this->json(['success' => false, 'message' => 'Activité non trouvée'], Response::HTTP_NOT_FOUND);
        }
        
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
        
        // Mettre à jour les propriétés de l'activité
        $activity->setName($data['activity_name']);
        $activity->setDescription($data['description'] ?? null);
        $activity->setCategory($category);
        
        // Mettre à jour la date et l'heure de début et de fin
        $startDateTime = new \DateTime($data['date'] . ' ' . $data['start_time']);
        $endDateTime = new \DateTime($data['date'] . ' ' . $data['end_time']);
        $activity->setStartDateTime($startDateTime);
        $activity->setEndDateTime($endDateTime);
        
        // Persister les changements
        $entityManager->flush();
        
        return $this->json([
            'success' => true,
            'message' => 'Activité modifiée avec succès',
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
    
    #[Route('/delete-activity/{id}', name: 'app_planning_delete_activity', methods: ['DELETE'])]
    public function deleteActivity(
        int $id,
        EntityManagerInterface $entityManager,
        ActivityRepository $activityRepository
    ): JsonResponse {
        // Vérifier si l'activité existe
        $activity = $activityRepository->find($id);
        if (!$activity) {
            return $this->json(['success' => false, 'message' => 'Activité non trouvée'], Response::HTTP_NOT_FOUND);
        }
        
        // Supprimer l'activité
        $entityManager->remove($activity);
        $entityManager->flush();
        
        return $this->json([
            'success' => true,
            'message' => 'Activité supprimée avec succès'
        ]);
    }
} 