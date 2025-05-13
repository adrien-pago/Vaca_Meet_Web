// Fonctionnalités JavaScript pour la gestion du planning

document.addEventListener('DOMContentLoaded', function() {
    // Références aux éléments DOM
    const calendarContainer = document.querySelector('.calendar-view');
    const calendarTitle = document.querySelector('.calendar-title');
    const prevButton = document.querySelector('.calendar-nav-btn.prev');
    const nextButton = document.querySelector('.calendar-nav-btn.next');
    const todayButton = document.querySelector('.calendar-nav-btn.today');
    const calendarDays = document.querySelector('.calendar-days');
    const planningTabs = document.querySelectorAll('.planning-tab');
    const planningViews = document.querySelectorAll('.planning-view');
    const addEventButton = document.querySelector('.add-event-btn');
    const eventModal = document.querySelector('.event-modal');
    const eventModalClose = document.querySelector('.event-modal-close');
    const eventForm = document.querySelector('.event-form');
    
    // Variables du calendrier
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    
    // Noms des mois et jours en français
    const months = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    
    const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    
    // Mock data pour les événements (à remplacer par un appel AJAX)
    const events = [
        {
            id: 1,
            title: 'Animation Piscine',
            start: new Date(currentYear, currentMonth, 10, 14, 0),
            end: new Date(currentYear, currentMonth, 10, 16, 0),
            serviceId: 1
        },
        {
            id: 2,
            title: 'Spectacle Soirée',
            start: new Date(currentYear, currentMonth, 15, 20, 0),
            end: new Date(currentYear, currentMonth, 15, 22, 0),
            serviceId: 2
        },
        {
            id: 3,
            title: 'Cours de Danse',
            start: new Date(currentYear, currentMonth, 20, 10, 0),
            end: new Date(currentYear, currentMonth, 20, 12, 0),
            serviceId: 3
        }
    ];
    
    // Initialisation
    function init() {
        renderCalendar();
        setupEventListeners();
        initTabsNavigation();
    }
    
    // Configuration des écouteurs d'événements
    function setupEventListeners() {
        if (prevButton) {
            prevButton.addEventListener('click', goToPreviousMonth);
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', goToNextMonth);
        }
        
        if (todayButton) {
            todayButton.addEventListener('click', goToToday);
        }
        
        if (addEventButton) {
            addEventButton.addEventListener('click', openNewEventModal);
        }
        
        if (eventModalClose) {
            eventModalClose.addEventListener('click', closeEventModal);
        }
        
        // Fermer la modal si on clique en dehors
        if (eventModal) {
            eventModal.addEventListener('click', function(e) {
                if (e.target === eventModal) {
                    closeEventModal();
                }
            });
        }
        
        // Gestion du formulaire de l'événement
        if (eventForm) {
            eventForm.addEventListener('submit', handleEventFormSubmit);
        }
    }
    
    // Navigation entre les onglets
    function initTabsNavigation() {
        if (planningTabs && planningTabs.length > 0) {
            planningTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    // Enlever la classe active de tous les onglets
                    planningTabs.forEach(t => t.classList.remove('active'));
                    
                    // Ajouter la classe active à l'onglet cliqué
                    this.classList.add('active');
                    
                    // Afficher la vue correspondante
                    const viewId = this.getAttribute('data-target');
                    planningViews.forEach(view => {
                        view.classList.remove('active');
                        if (view.id === viewId) {
                            view.classList.add('active');
                        }
                    });
                });
            });
        }
    }
    
    // Affichage du calendrier
    function renderCalendar() {
        if (!calendarDays || !calendarTitle) return;
        
        // Mise à jour du titre du calendrier (mois et année)
        calendarTitle.textContent = `${months[currentMonth]} ${currentYear}`;
        
        // Vider le conteneur des jours
        calendarDays.innerHTML = '';
        
        // Premier jour du mois
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        // Dernier jour du mois
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
        
        // Nombre de jours dans le mois
        const daysInMonth = lastDayOfMonth.getDate();
        
        // Jour de la semaine du premier jour (0-6)
        const firstDayOfWeek = firstDayOfMonth.getDay();
        
        // Calcul du nombre total de cellules (y compris les jours du mois précédent/suivant)
        const totalCells = Math.ceil((daysInMonth + firstDayOfWeek) / 7) * 7;
        
        // Date du jour
        const today = new Date();
        
        // Jours du mois précédent
        const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
        
        // Génération des cellules du calendrier
        for (let i = 0; i < totalCells; i++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'calendar-day';
            
            const cellNumber = document.createElement('div');
            cellNumber.className = 'day-number';
            
            const eventList = document.createElement('div');
            eventList.className = 'event-list';
            
            // Index du jour à afficher
            let dayIndex = i - firstDayOfWeek + 1;
            let dateToDisplay;
            
            // Jours du mois précédent
            if (dayIndex <= 0) {
                dayIndex = prevMonthLastDay + dayIndex;
                cellNumber.textContent = dayIndex;
                dayCell.classList.add('other-month');
                dateToDisplay = new Date(currentYear, currentMonth - 1, dayIndex);
            } 
            // Jours du mois suivant
            else if (dayIndex > daysInMonth) {
                dayIndex = dayIndex - daysInMonth;
                cellNumber.textContent = dayIndex;
                dayCell.classList.add('other-month');
                dateToDisplay = new Date(currentYear, currentMonth + 1, dayIndex);
            } 
            // Jours du mois courant
            else {
                cellNumber.textContent = dayIndex;
                dateToDisplay = new Date(currentYear, currentMonth, dayIndex);
                
                // Marquer le jour actuel
                if (
                    currentYear === today.getFullYear() && 
                    currentMonth === today.getMonth() && 
                    dayIndex === today.getDate()
                ) {
                    dayCell.classList.add('today');
                }
            }
            
            // Ajouter les événements à cette date
            addEventsToCell(eventList, dateToDisplay);
            
            // Ajouter la possibilité de créer un événement en cliquant sur une cellule
            dayCell.addEventListener('click', function() {
                openNewEventModal(dateToDisplay);
            });
            
            dayCell.appendChild(cellNumber);
            dayCell.appendChild(eventList);
            calendarDays.appendChild(dayCell);
        }
    }
    
    // Ajouter les événements à une cellule
    function addEventsToCell(container, date) {
        if (!container || !date) return;
        
        // Filtrer les événements du jour
        const dayEvents = events.filter(event => {
            const eventDate = new Date(event.start);
            return (
                eventDate.getDate() === date.getDate() && 
                eventDate.getMonth() === date.getMonth() && 
                eventDate.getFullYear() === date.getFullYear()
            );
        });
        
        // Ajouter chaque événement au conteneur
        dayEvents.forEach(event => {
            const eventItem = document.createElement('div');
            eventItem.className = `event-item service-${event.serviceId}`;
            eventItem.textContent = event.title;
            
            // Formater l'heure de début et de fin
            const startTime = formatTime(event.start);
            const endTime = formatTime(event.end);
            eventItem.setAttribute('title', `${event.title} (${startTime} - ${endTime})`);
            
            // Empêcher la propagation du clic pour ne pas déclencher le clic de la cellule
            eventItem.addEventListener('click', function(e) {
                e.stopPropagation();
                openEventModal(event);
            });
            
            container.appendChild(eventItem);
        });
    }
    
    // Formater l'heure au format 24h (HH:MM)
    function formatTime(date) {
        if (!date) return '';
        
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        
        return `${hours}:${minutes}`;
    }
    
    // Navigation vers le mois précédent
    function goToPreviousMonth() {
        currentMonth--;
        
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        
        renderCalendar();
    }
    
    // Navigation vers le mois suivant
    function goToNextMonth() {
        currentMonth++;
        
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        
        renderCalendar();
    }
    
    // Aller au mois actuel
    function goToToday() {
        const today = new Date();
        currentMonth = today.getMonth();
        currentYear = today.getFullYear();
        
        renderCalendar();
    }
    
    // Ouvrir la modal pour un nouvel événement
    function openNewEventModal(date) {
        if (!eventModal) return;
        
        // Réinitialiser le formulaire
        if (eventForm) {
            eventForm.reset();
            
            // Si une date est spécifiée, définir les champs de date et d'heure
            if (date instanceof Date) {
                const dateInput = eventForm.querySelector('[name="event-date"]');
                if (dateInput) {
                    const dateString = date.toISOString().split('T')[0];
                    dateInput.value = dateString;
                }
            }
        }
        
        // Changer le titre de la modal
        const modalTitle = eventModal.querySelector('.event-modal-title');
        if (modalTitle) {
            modalTitle.textContent = 'Nouvel événement';
        }
        
        // Masquer le bouton de suppression s'il existe
        const deleteButton = eventModal.querySelector('.event-modal-btn.delete');
        if (deleteButton) {
            deleteButton.style.display = 'none';
        }
        
        // Afficher la modal
        eventModal.classList.add('show');
    }
    
    // Ouvrir la modal pour un événement existant
    function openEventModal(event) {
        if (!eventModal || !event) return;
        
        // Remplir le formulaire avec les données de l'événement
        if (eventForm) {
            const titleInput = eventForm.querySelector('[name="event-title"]');
            const dateInput = eventForm.querySelector('[name="event-date"]');
            const startTimeInput = eventForm.querySelector('[name="event-start-time"]');
            const endTimeInput = eventForm.querySelector('[name="event-end-time"]');
            const serviceInput = eventForm.querySelector('[name="event-service"]');
            const descriptionInput = eventForm.querySelector('[name="event-description"]');
            
            if (titleInput) titleInput.value = event.title;
            
            if (dateInput) {
                const dateString = event.start.toISOString().split('T')[0];
                dateInput.value = dateString;
            }
            
            if (startTimeInput) {
                const hours = event.start.getHours().toString().padStart(2, '0');
                const minutes = event.start.getMinutes().toString().padStart(2, '0');
                startTimeInput.value = `${hours}:${minutes}`;
            }
            
            if (endTimeInput) {
                const hours = event.end.getHours().toString().padStart(2, '0');
                const minutes = event.end.getMinutes().toString().padStart(2, '0');
                endTimeInput.value = `${hours}:${minutes}`;
            }
            
            if (serviceInput) serviceInput.value = event.serviceId;
            
            if (descriptionInput && event.description) {
                descriptionInput.value = event.description;
            }
            
            // Stocker l'ID de l'événement pour la mise à jour
            eventForm.dataset.eventId = event.id;
        }
        
        // Changer le titre de la modal
        const modalTitle = eventModal.querySelector('.event-modal-title');
        if (modalTitle) {
            modalTitle.textContent = 'Modifier l\'événement';
        }
        
        // Afficher le bouton de suppression
        const deleteButton = eventModal.querySelector('.event-modal-btn.delete');
        if (deleteButton) {
            deleteButton.style.display = 'inline-block';
            
            // Ajouter un événement pour supprimer
            deleteButton.onclick = function() {
                deleteEvent(event.id);
            };
        }
        
        // Afficher la modal
        eventModal.classList.add('show');
    }
    
    // Fermer la modal
    function closeEventModal() {
        if (!eventModal) return;
        
        eventModal.classList.remove('show');
        
        // Réinitialiser le formulaire
        if (eventForm) {
            eventForm.reset();
            delete eventForm.dataset.eventId;
        }
    }
    
    // Gérer la soumission du formulaire d'événement
    function handleEventFormSubmit(e) {
        e.preventDefault();
        
        // Récupérer les données du formulaire
        const formData = new FormData(eventForm);
        const eventData = {
            title: formData.get('event-title'),
            date: formData.get('event-date'),
            startTime: formData.get('event-start-time'),
            endTime: formData.get('event-end-time'),
            serviceId: parseInt(formData.get('event-service')),
            description: formData.get('event-description')
        };
        
        // Validation de base
        if (!eventData.title || !eventData.date || !eventData.startTime || !eventData.endTime) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        // Création des objets Date
        const [year, month, day] = eventData.date.split('-').map(Number);
        const [startHours, startMinutes] = eventData.startTime.split(':').map(Number);
        const [endHours, endMinutes] = eventData.endTime.split(':').map(Number);
        
        const startDate = new Date(year, month - 1, day, startHours, startMinutes);
        const endDate = new Date(year, month - 1, day, endHours, endMinutes);
        
        // Vérifier que la date de fin est après la date de début
        if (endDate <= startDate) {
            alert('L\'heure de fin doit être après l\'heure de début.');
            return;
        }
        
        // Si c'est une mise à jour d'événement existant
        const eventId = eventForm.dataset.eventId;
        if (eventId) {
            updateEvent(parseInt(eventId), {
                title: eventData.title,
                start: startDate,
                end: endDate,
                serviceId: eventData.serviceId,
                description: eventData.description
            });
        } else {
            // Sinon, créer un nouvel événement
            createEvent({
                id: events.length + 1, // Simple ID pour la démo
                title: eventData.title,
                start: startDate,
                end: endDate,
                serviceId: eventData.serviceId,
                description: eventData.description
            });
        }
        
        // Fermer la modal et mettre à jour le calendrier
        closeEventModal();
        renderCalendar();
    }
    
    // Créer un nouvel événement
    function createEvent(eventData) {
        // Dans un environnement réel, ce serait un appel API
        events.push(eventData);
        console.log('Événement créé:', eventData);
    }
    
    // Mettre à jour un événement
    function updateEvent(eventId, newData) {
        // Dans un environnement réel, ce serait un appel API
        const eventIndex = events.findIndex(e => e.id === eventId);
        if (eventIndex !== -1) {
            events[eventIndex] = { ...events[eventIndex], ...newData };
            console.log('Événement mis à jour:', events[eventIndex]);
        }
    }
    
    // Supprimer un événement
    function deleteEvent(eventId) {
        // Dans un environnement réel, ce serait un appel API
        const confirmDelete = confirm('Êtes-vous sûr de vouloir supprimer cet événement ?');
        
        if (confirmDelete) {
            const eventIndex = events.findIndex(e => e.id === eventId);
            if (eventIndex !== -1) {
                events.splice(eventIndex, 1);
                console.log('Événement supprimé, ID:', eventId);
                
                // Fermer la modal et mettre à jour le calendrier
                closeEventModal();
                renderCalendar();
            }
        }
    }
    
    // Initialiser l'application
    init();
});
