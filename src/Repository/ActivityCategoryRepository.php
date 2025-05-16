<?php

namespace App\Repository;

use App\Entity\ActivityCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ActivityCategory>
 *
 * @method ActivityCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method ActivityCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method ActivityCategory[]    findAll()
 * @method ActivityCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActivityCategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ActivityCategory::class);
    }

    /**
     * Sauvegarde une catégorie d'activité
     */
    public function save(ActivityCategory $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Supprime une catégorie d'activité
     */
    public function remove(ActivityCategory $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 