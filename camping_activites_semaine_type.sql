-- Script SQL pour insérer une semaine type d'activités dans un camping
-- À exécuter sur la base de données Vaca_Meet

-- Date de référence pour une semaine (à ajuster selon vos besoins)
-- Cette semaine commence un lundi (2025-06-02)
SET @date_lundi = '2025-06-02';

-- Supprimer les activités existantes si nécessaire
-- DELETE FROM activity;

-- Catégories d'activités avec leurs couleurs
INSERT INTO activity_category (name, color) VALUES
('Sport', '#FF5733'),
('Bien-être', '#33FFC7'),
('Divertissement', '#337BFF'),
('Enfants', '#F633FF'),
('Nature', '#7BFF33'),
('Gastronomie', '#FFB733'),
('Soirée', '#FF3380'),
('Aquatique', '#33DAFF')
ON DUPLICATE KEY UPDATE name = VALUES(name);

-- Récupérer les IDs des catégories
SET @sport_id = (SELECT id FROM activity_category WHERE name = 'Sport');
SET @bien_etre_id = (SELECT id FROM activity_category WHERE name = 'Bien-être');
SET @divertissement_id = (SELECT id FROM activity_category WHERE name = 'Divertissement');
SET @enfants_id = (SELECT id FROM activity_category WHERE name = 'Enfants');
SET @nature_id = (SELECT id FROM activity_category WHERE name = 'Nature');
SET @gastronomie_id = (SELECT id FROM activity_category WHERE name = 'Gastronomie');
SET @soiree_id = (SELECT id FROM activity_category WHERE name = 'Soirée');
SET @aquatique_id = (SELECT id FROM activity_category WHERE name = 'Aquatique');

-- Lundi
INSERT INTO activity (name, description, category_id, start_date_time, end_date_time, location, max_participants)
VALUES 
('Réveil musculaire', 'Séance de réveil en douceur pour bien commencer la journée', @sport_id, 
  CONCAT(@date_lundi, ' 08:00:00'), CONCAT(@date_lundi, ' 09:00:00'), 'Terrasse centrale', 15),
  
('Aquagym', 'Gym aquatique pour tous niveaux', @aquatique_id, 
  CONCAT(@date_lundi, ' 10:00:00'), CONCAT(@date_lundi, ' 11:00:00'), 'Piscine principale', 20),
  
('Atelier créatif enfants', 'Création de masques et déguisements', @enfants_id, 
  CONCAT(@date_lundi, ' 14:00:00'), CONCAT(@date_lundi, ' 16:00:00'), 'Club enfants', 12),
  
('Tournoi de pétanque', 'Compétition amicale ouverte à tous', @sport_id, 
  CONCAT(@date_lundi, ' 16:00:00'), CONCAT(@date_lundi, ' 18:00:00'), 'Terrain de pétanque', 24),
  
('Soirée d\'accueil', 'Présentation de l\'équipe d\'animation et cocktail de bienvenue', @soiree_id, 
  CONCAT(@date_lundi, ' 20:00:00'), CONCAT(@date_lundi, ' 22:00:00'), 'Bar central', 100);

-- Mardi
SET @date_mardi = DATE_ADD(@date_lundi, INTERVAL 1 DAY);

INSERT INTO activity (name, description, category_id, start_date_time, end_date_time, location, max_participants)
VALUES 
('Yoga matinal', 'Session de yoga pour tous niveaux avec Céline', @bien_etre_id, 
  CONCAT(@date_mardi, ' 09:00:00'), CONCAT(@date_mardi, ' 10:00:00'), 'Plage', 15),
  
('Tournoi de volleyball', 'Tournoi par équipes de 4', @sport_id, 
  CONCAT(@date_mardi, ' 11:00:00'), CONCAT(@date_mardi, ' 12:30:00'), 'Terrain de volleyball', 24),
  
('Initiation paddle', 'Découverte du paddle avec notre moniteur diplômé', @aquatique_id, 
  CONCAT(@date_mardi, ' 14:00:00'), CONCAT(@date_mardi, ' 15:30:00'), 'Plage, côté sud', 8),
  
('Chasse au trésor', 'Activité familiale pour découvrir le camping et ses trésors cachés', @enfants_id, 
  CONCAT(@date_mardi, ' 16:00:00'), CONCAT(@date_mardi, ' 17:30:00'), 'Rendez-vous à l\'accueil', 30),
  
('Atelier cuisine locale', 'Préparation de spécialités régionales avec notre chef', @gastronomie_id, 
  CONCAT(@date_mardi, ' 18:00:00'), CONCAT(@date_mardi, ' 19:30:00'), 'Restaurant du camping', 12),
  
('Soirée karaoké', 'Venez montrer vos talents de chanteur dans une ambiance festive', @soiree_id, 
  CONCAT(@date_mardi, ' 21:00:00'), CONCAT(@date_mardi, ' 23:00:00'), 'Bar central', 50);

-- Mercredi
SET @date_mercredi = DATE_ADD(@date_lundi, INTERVAL 2 DAY);

INSERT INTO activity (name, description, category_id, start_date_time, end_date_time, location, max_participants)
VALUES 
('Footing matinal', 'Parcours de jogging autour du lac, adapté à tous niveaux', @sport_id, 
  CONCAT(@date_mercredi, ' 08:00:00'), CONCAT(@date_mercredi, ' 09:00:00'), 'Rendez-vous à l\'accueil', 20),
  
('Atelier poterie', 'Création d\'objets en argile avec Sophie, notre artisane locale', @divertissement_id, 
  CONCAT(@date_mercredi, ' 10:00:00'), CONCAT(@date_mercredi, ' 12:00:00'), 'Espace créatif', 10),
  
('Olympiades enfants', 'Jeux et défis sportifs pour les 6-12 ans', @enfants_id, 
  CONCAT(@date_mercredi, ' 14:00:00'), CONCAT(@date_mercredi, ' 16:00:00'), 'Terrain multisports', 20),
  
('Excursion nature', 'Balade guidée à la découverte de la faune et la flore locales', @nature_id, 
  CONCAT(@date_mercredi, ' 15:00:00'), CONCAT(@date_mercredi, ' 17:00:00'), 'Départ de l\'accueil', 15),
  
('Dégustation de vins', 'Découverte des vins régionaux avec un sommelier', @gastronomie_id, 
  CONCAT(@date_mercredi, ' 18:30:00'), CONCAT(@date_mercredi, ' 20:00:00'), 'Cave du restaurant', 16),
  
('Spectacle de magie', 'Show familial avec notre magicien Albert', @soiree_id, 
  CONCAT(@date_mercredi, ' 20:30:00'), CONCAT(@date_mercredi, ' 22:00:00'), 'Scène extérieure', 80);

-- Jeudi
SET @date_jeudi = DATE_ADD(@date_lundi, INTERVAL 3 DAY);

INSERT INTO activity (name, description, category_id, start_date_time, end_date_time, location, max_participants)
VALUES 
('Pilates', 'Séance de renforcement musculaire en douceur', @bien_etre_id, 
  CONCAT(@date_jeudi, ' 09:00:00'), CONCAT(@date_jeudi, ' 10:00:00'), 'Terrasse vue mer', 12),
  
('Tournoi de tennis de table', 'Compétition amicale pour tous âges', @sport_id, 
  CONCAT(@date_jeudi, ' 11:00:00'), CONCAT(@date_jeudi, ' 12:30:00'), 'Espace ping-pong', 16),
  
('Initiation au kayak', 'Découverte du kayak en mer avec un moniteur', @aquatique_id, 
  CONCAT(@date_jeudi, ' 14:00:00'), CONCAT(@date_jeudi, ' 15:30:00'), 'Plage', 10),
  
('Atelier maquillage enfants', 'Transformation en superhéros ou princesse', @enfants_id, 
  CONCAT(@date_jeudi, ' 16:00:00'), CONCAT(@date_jeudi, ' 17:30:00'), 'Club enfants', 15),
  
('Cours de cocktails', 'Apprenez à préparer 3 cocktails signature avec notre barman', @gastronomie_id, 
  CONCAT(@date_jeudi, ' 18:00:00'), CONCAT(@date_jeudi, ' 19:30:00'), 'Bar central', 12),
  
('Soirée dansante', 'Ambiance clubbing au bord de la piscine', @soiree_id, 
  CONCAT(@date_jeudi, ' 21:00:00'), CONCAT(@date_jeudi, ' 23:30:00'), 'Piscine éclairée', 80);

-- Vendredi
SET @date_vendredi = DATE_ADD(@date_lundi, INTERVAL 4 DAY);

INSERT INTO activity (name, description, category_id, start_date_time, end_date_time, location, max_participants)
VALUES 
('Méditation guidée', 'Moment de détente et de recentrage', @bien_etre_id, 
  CONCAT(@date_vendredi, ' 08:00:00'), CONCAT(@date_vendredi, ' 09:00:00'), 'Jardin zen', 15),
  
('Water-polo', 'Match amical dans la piscine principale', @aquatique_id, 
  CONCAT(@date_vendredi, ' 10:30:00'), CONCAT(@date_vendredi, ' 11:30:00'), 'Piscine principale', 14),
  
('Atelier fabrication de cerfs-volants', 'Création et décoration de cerfs-volants', @enfants_id, 
  CONCAT(@date_vendredi, ' 14:00:00'), CONCAT(@date_vendredi, ' 15:30:00'), 'Club enfants', 12),
  
('Tournoi de beach-volley', 'Compétition par équipes sur la plage', @sport_id, 
  CONCAT(@date_vendredi, ' 16:00:00'), CONCAT(@date_vendredi, ' 18:00:00'), 'Plage', 24),
  
('Atelier pâtisserie', 'Préparez des desserts locaux avec notre chef', @gastronomie_id, 
  CONCAT(@date_vendredi, ' 17:00:00'), CONCAT(@date_vendredi, ' 18:30:00'), 'Restaurant', 10),
  
('Soirée concert live', 'Musique acoustique avec le groupe local "Les Vagabonds"', @soiree_id, 
  CONCAT(@date_vendredi, ' 21:00:00'), CONCAT(@date_vendredi, ' 23:00:00'), 'Scène extérieure', 100);

-- Samedi
SET @date_samedi = DATE_ADD(@date_lundi, INTERVAL 5 DAY);

INSERT INTO activity (name, description, category_id, start_date_time, end_date_time, location, max_participants)
VALUES 
('Gym tonique', 'Séance de fitness dynamique pour tous niveaux', @sport_id, 
  CONCAT(@date_samedi, ' 09:00:00'), CONCAT(@date_samedi, ' 10:00:00'), 'Terrasse centrale', 20),
  
('Baptême de plongée', 'Initiation à la plongée sous-marine en piscine', @aquatique_id, 
  CONCAT(@date_samedi, ' 11:00:00'), CONCAT(@date_samedi, ' 12:30:00'), 'Piscine principale', 8),
  
('Grand jeu familial', 'Jeu interactif parents-enfants avec défis et énigmes', @divertissement_id, 
  CONCAT(@date_samedi, ' 14:00:00'), CONCAT(@date_samedi, ' 16:00:00'), 'Tout le camping', 40),
  
('Massage bien-être', 'Séance de massage relaxant (sur réservation)', @bien_etre_id, 
  CONCAT(@date_samedi, ' 14:00:00'), CONCAT(@date_samedi, ' 18:00:00'), 'Espace bien-être', 8),
  
('Marché artisanal', 'Découverte des produits locaux', @divertissement_id, 
  CONCAT(@date_samedi, ' 17:00:00'), CONCAT(@date_samedi, ' 19:30:00'), 'Allée centrale', null),
  
('Soirée mousse', 'La fameuse soirée mousse du camping avec DJ Luca', @soiree_id, 
  CONCAT(@date_samedi, ' 21:30:00'), CONCAT(@date_samedi, ' 01:00:00'), 'Piscine principale', 120);

-- Dimanche
SET @date_dimanche = DATE_ADD(@date_lundi, INTERVAL 6 DAY);

INSERT INTO activity (name, description, category_id, start_date_time, end_date_time, location, max_participants)
VALUES 
('Stretching doux', 'Séance d\'étirements pour bien commencer la journée', @bien_etre_id, 
  CONCAT(@date_dimanche, ' 09:30:00'), CONCAT(@date_dimanche, ' 10:30:00'), 'Jardin zen', 15),
  
('Concours de châteaux de sable', 'Qui construira le plus beau château?', @enfants_id, 
  CONCAT(@date_dimanche, ' 11:00:00'), CONCAT(@date_dimanche, ' 12:30:00'), 'Plage', 30),
  
('Tournoi de football', 'Match amical sur notre terrain', @sport_id, 
  CONCAT(@date_dimanche, ' 14:00:00'), CONCAT(@date_dimanche, ' 15:30:00'), 'Terrain de foot', 22),
  
('Balade à vélo', 'Découverte des environs en vélo (vélos non fournis)', @nature_id, 
  CONCAT(@date_dimanche, ' 15:00:00'), CONCAT(@date_dimanche, ' 17:00:00'), 'Départ de l\'accueil', 15),
  
('Barbecue géant', 'Grand barbecue communautaire - Apportez vos grillades!', @gastronomie_id, 
  CONCAT(@date_dimanche, ' 18:00:00'), CONCAT(@date_dimanche, ' 20:00:00'), 'Espace barbecue', 50),
  
('Cinéma plein air', 'Projection du film "Le Roi Lion" pour petits et grands', @soiree_id, 
  CONCAT(@date_dimanche, ' 21:00:00'), CONCAT(@date_dimanche, ' 23:00:00'), 'Pelouse centrale', 80); 