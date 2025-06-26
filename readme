# Vaca-Meet

Vaca-Meet est une application web pour les gérants de campings et clubs de vacances, permettant de gérer efficacement leur planning d'activités et leurs services. Le système est complété par une application mobile destinée aux vacanciers, leur offrant un accès facile aux activités, services proposés par le camping et pleins d'autres options .....

## Fonctionnalités principales

### Interface web pour les gérants
- **Gestion des comptes** : Création et gestion des comptes utilisateurs (campings/clubs)
- **Gestion des services** : Ajout, modification et suppression des différents services proposés
- **Planification** : Organisation et visualisation des activités par jour de la semaine
- **Personnalisation** : Différents thèmes disponibles pour personnaliser l'interface

### Application mobile pour les vacanciers
- Consultation des activités et services disponibles
- Visualisation du planning hebdomadaire
- Possibilité de proposé des activités aux autres vacanciers
- Interface intuitive et adaptée aux besoins des vacanciers
- .... Plus de détails sur le github pour l'application Mobile (Vaca Meet Mobile)

## Technologies utilisées

- **Framework** : Symfony 6
- **Base de données** : MySQL/sqLite
- **Front-end** : Twig, Webpack Encore
- **Sécurité** : Authentification multi-utilisateurs, gestion des rôles

## Structure du projet

Le projet est organisé selon l'architecture MVC de Symfony :

- **src/Controller/** : Contrôleurs pour la gestion des routes et des actions
- **src/Entity/** : Entités Doctrine (User, ServiceAccount, Planning)
- **src/Repository/** : Requêtes pour la base de données
- **src/Form/** : Formulaires pour la création et modification des données
- **src/Security/** : Gestion de l'authentification et des droits d'accès
- **templates/** : Vues Twig pour l'affichage des pages
- **config/** : Configuration de l'application

## Prérequis

- PHP 8.1 ou supérieur
- Composer
- Node.js et npm/yarn
- Serveur MySQL/MariaDB
- Git

## Installation en local

1. Cloner le dépôt :
```bash
git clone https://github.com/votre-utilisateur/Vaca-Meet-WEB.git
cd Vaca-Meet-WEB
```

2. Installer les dépendances PHP :
```bash
composer install
```

3. Installer les dépendances JavaScript :
```bash
npm install
# ou
yarn install
```

4. Compiler les assets :
```bash
npm run build
# ou
yarn build
```

5. Configurer la base de données dans le fichier `.env` :
```
DATABASE_URL="mysql://user:password@127.0.0.1:3306/vaca_meet?serverVersion=8.0"
```

6. Créer la base de données et appliquer les migrations :
```bash
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate

php bin/console make:migration

php bin/console doctrine:migrations:migrate

```

7. Lancer le serveur de développement :
```bash
symfony server:start
# ou
php -S localhost:8000 -t public/
```


© Vaca-Meet 2025

php bin/console make:migration
php bin/console doctrine:migrations:migrate
