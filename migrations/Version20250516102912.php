<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250516102912 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE activity (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, category_id INTEGER NOT NULL, organizer_id INTEGER DEFAULT NULL, name VARCHAR(255) NOT NULL, description CLOB DEFAULT NULL, start_date_time DATETIME NOT NULL, end_date_time DATETIME NOT NULL, location VARCHAR(255) DEFAULT NULL, max_participants INTEGER DEFAULT NULL, is_recurring BOOLEAN NOT NULL, recurring_days CLOB DEFAULT NULL --(DC2Type:json)
            , CONSTRAINT FK_AC74095A12469DE2 FOREIGN KEY (category_id) REFERENCES activity_category (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_AC74095A876C4DDA FOREIGN KEY (organizer_id) REFERENCES user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_AC74095A12469DE2 ON activity (category_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_AC74095A876C4DDA ON activity (organizer_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE activity_category (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, color VARCHAR(7) NOT NULL, icon VARCHAR(50) DEFAULT NULL)
        SQL);
        
        // Vérifier si la table user_mobile existe déjà
        $this->addSql(<<<'SQL'
            CREATE TABLE IF NOT EXISTS user_mobile (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username VARCHAR(180) NOT NULL, roles CLOB NOT NULL --(DC2Type:json)
            , password VARCHAR(255) NOT NULL, first_name VARCHAR(255) DEFAULT NULL, last_name VARCHAR(255) DEFAULT NULL)
        SQL);
        
        // Ajouter les colonnes manquantes si elles n'existent pas déjà
        $this->addSql(<<<'SQL'
            ALTER TABLE user_mobile ADD COLUMN theme VARCHAR(50) DEFAULT 'default'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE user_mobile ADD COLUMN profile_picture VARCHAR(255) DEFAULT NULL
        SQL);
        
        $this->addSql(<<<'SQL'
            CREATE UNIQUE INDEX IF NOT EXISTS UNIQ_592138DDF85E0677 ON user_mobile (username)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            DROP TABLE activity
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE activity_category
        SQL);
        // Ne pas supprimer la table user_mobile dans down() pour éviter de perdre des données
    }
}
