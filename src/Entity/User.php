<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[UniqueEntity(fields: ['username'], message: 'Ce nom de camping est déjà utilisé')]
#[UniqueEntity(fields: ['email'], message: 'Cette adresse email est déjà utilisée')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    public const THEME_DEFAULT = 'default';
    public const THEME_LIGHT_BLUE = 'light-blue';
    public const THEME_LIGHT_GREEN = 'light-green';
    public const THEME_LIGHT_PINK = 'light-pink';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $username = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\Column(type: 'boolean')]
    private $isVerified = false;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: ServiceAccount::class, orphanRemoval: true)]
    private Collection $serviceAccounts;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Planning::class)]
    private Collection $plannings;

    #[ORM\Column(length: 20, options: ["default" => "default"])]
    private ?string $theme = self::THEME_DEFAULT;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $mdp_vacancier = null;

    public function __construct()
    {
        $this->serviceAccounts = new ArrayCollection();
        $this->plannings = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function isVerified(): bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): static
    {
        $this->isVerified = $isVerified;

        return $this;
    }

    /**
     * @return Collection<int, ServiceAccount>
     */
    public function getServiceAccounts(): Collection
    {
        return $this->serviceAccounts;
    }

    public function addServiceAccount(ServiceAccount $serviceAccount): static
    {
        if (!$this->serviceAccounts->contains($serviceAccount)) {
            $this->serviceAccounts->add($serviceAccount);
            $serviceAccount->setUser($this);
        }

        return $this;
    }

    public function removeServiceAccount(ServiceAccount $serviceAccount): static
    {
        if ($this->serviceAccounts->removeElement($serviceAccount)) {
            // set the owning side to null (unless already changed)
            if ($serviceAccount->getUser() === $this) {
                $serviceAccount->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Planning>
     */
    public function getPlannings(): Collection
    {
        return $this->plannings;
    }

    public function addPlanning(Planning $planning): static
    {
        if (!$this->plannings->contains($planning)) {
            $this->plannings->add($planning);
            $planning->setUser($this);
        }

        return $this;
    }

    public function removePlanning(Planning $planning): static
    {
        if ($this->plannings->removeElement($planning)) {
            // set the owning side to null (unless already changed)
            if ($planning->getUser() === $this) {
                $planning->setUser(null);
            }
        }

        return $this;
    }

    public function getTheme(): ?string
    {
        return $this->theme;
    }

    public function setTheme(string $theme): static
    {
        $this->theme = $theme;

        return $this;
    }
    
    public function getMdpVacancier(): ?string
    {
        return $this->mdp_vacancier;
    }

    public function setMdpVacancier(?string $mdp_vacancier): static
    {
        $this->mdp_vacancier = $mdp_vacancier;

        return $this;
    }
} 