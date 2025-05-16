<?php

namespace App\Repository;

use App\Entity\Activity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Activity>
 *
 * @method Activity|null find($id, $lockMode = null, $lockVersion = null)
 * @method Activity|null findOneBy(array $criteria, array $orderBy = null)
 * @method Activity[]    findAll()
 * @method Activity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActivityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Activity::class);
    }

    /**
     * Trouve toutes les activités pour une semaine spécifique
     */
    public function findByWeek(\DateTime $startOfWeek): array
    {
        $endOfWeek = clone $startOfWeek;
        $endOfWeek->modify('+6 days 23:59:59');

        return $this->createQueryBuilder('a')
            ->andWhere('a.startDateTime >= :start')
            ->andWhere('a.startDateTime <= :end')
            ->setParameter('start', $startOfWeek)
            ->setParameter('end', $endOfWeek)
            ->orderBy('a.startDateTime', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Trouve toutes les activités récurrentes
     */
    public function findRecurring(): array
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.isRecurring = :recurring')
            ->setParameter('recurring', true)
            ->getQuery()
            ->getResult();
    }

    /**
     * Sauvegarde une activité
     */
    public function save(Activity $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Supprime une activité
     */
    public function remove(Activity $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
} 