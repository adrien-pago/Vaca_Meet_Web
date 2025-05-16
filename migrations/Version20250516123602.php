<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250516123602 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TEMPORARY TABLE __temp__activity AS SELECT id, category_id, organizer_id, name, description, start_date_time, end_date_time, location, max_participants FROM activity
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE activity
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE activity (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, category_id INTEGER NOT NULL, organizer_id INTEGER DEFAULT NULL, name VARCHAR(255) NOT NULL, description CLOB DEFAULT NULL, start_date_time DATETIME NOT NULL, end_date_time DATETIME NOT NULL, location VARCHAR(255) DEFAULT NULL, max_participants INTEGER DEFAULT NULL, CONSTRAINT FK_AC74095A12469DE2 FOREIGN KEY (category_id) REFERENCES activity_category (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_AC74095A876C4DDA FOREIGN KEY (organizer_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE)
        SQL);
        $this->addSql(<<<'SQL'
            INSERT INTO activity (id, category_id, organizer_id, name, description, start_date_time, end_date_time, location, max_participants) SELECT id, category_id, organizer_id, name, description, start_date_time, end_date_time, location, max_participants FROM __temp__activity
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE __temp__activity
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_AC74095A876C4DDA ON activity (organizer_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_AC74095A12469DE2 ON activity (category_id)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE activity ADD COLUMN is_recurring BOOLEAN NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE activity ADD COLUMN recurring_days CLOB DEFAULT NULL
        SQL);
    }
}
