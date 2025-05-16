document.addEventListener('DOMContentLoaded', function() {
    // Gestion du formulaire d'activité
    const activitySelect = document.getElementById('activitySelect');
    const newActivityFields = document.getElementById('newActivityFields');
    
    if (activitySelect) {
        activitySelect.addEventListener('change', function() {
            if (this.value === 'new') {
                newActivityFields.style.display = 'block';
            } else {
                newActivityFields.style.display = 'none';
            }
        });
    }
    
    // Gestion du formulaire de catégorie
    const categorySelect = document.getElementById('categorySelect');
    const newCategoryFields = document.getElementById('newCategoryFields');
    
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            if (this.value === 'new') {
                newCategoryFields.style.display = 'block';
            } else {
                newCategoryFields.style.display = 'none';
            }
        });
    }
    
    // Gestion des options de récurrence
    const isRecurring = document.getElementById('isRecurring');
    const recurringOptions = document.getElementById('recurringOptions');
    
    if (isRecurring) {
        isRecurring.addEventListener('change', function() {
            if (this.checked) {
                recurringOptions.style.display = 'block';
            } else {
                recurringOptions.style.display = 'none';
            }
        });
    }
    
    // Gestion de la soumission du formulaire via AJAX
    const saveButton = document.getElementById('saveActivity');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            // Collecter toutes les données du formulaire
            const formData = {
                activity_id: activitySelect.value !== 'new' ? activitySelect.value : null,
                activity_name: activitySelect.value === 'new' ? document.getElementById('activityName').value : activitySelect.options[activitySelect.selectedIndex].text,
                description: document.getElementById('activityDescription') ? document.getElementById('activityDescription').value : null,
                category_id: categorySelect.value !== 'new' ? categorySelect.value : null,
                category_name: categorySelect.value === 'new' ? document.getElementById('categoryName').value : null,
                category_color: categorySelect.value === 'new' ? document.getElementById('categoryColor').value : categorySelect.options[categorySelect.selectedIndex].dataset.color,
                date: document.getElementById('activityDate').value,
                start_time: document.getElementById('startTime').value,
                end_time: document.getElementById('endTime').value,
                is_recurring: isRecurring.checked,
                recurring_days: isRecurring.checked ? Array.from(document.querySelectorAll('input[id^="recurDay"]:checked')).map(el => el.value) : []
            };
            
            // Valider les données
            if ((formData.activity_id === null && !formData.activity_name) || 
                (formData.category_id === null && !formData.category_name)) {
                errorMessage.textContent = "Veuillez remplir tous les champs obligatoires.";
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
                return;
            }
            
            // Récupérer l'URL depuis un attribut data sur le formulaire
            const url = document.getElementById('addActivityForm').dataset.url;
            
            // Envoyer les données via AJAX
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.getElementById('addActivityForm').dataset.token
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Afficher un message de succès
                    successMessage.textContent = data.message;
                    successMessage.style.display = 'block';
                    errorMessage.style.display = 'none';
                    
                    // Fermer la modal après 1,5 secondes
                    setTimeout(() => {
                        const modal = bootstrap.Modal.getInstance(document.getElementById('addActivityModal'));
                        modal.hide();
                        
                        // Recharger la page pour afficher les nouvelles activités
                        window.location.reload();
                    }, 1500);
                } else {
                    // Afficher un message d'erreur
                    errorMessage.textContent = data.message || "Une erreur est survenue.";
                    errorMessage.style.display = 'block';
                    successMessage.style.display = 'none';
                }
            })
            .catch(error => {
                // Afficher un message d'erreur en cas d'échec de la requête
                console.error('Erreur:', error);
                errorMessage.textContent = "Une erreur de connexion est survenue.";
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
            });
        });
    }
    
    // Gestion de la modification d'une activité
    // Récupérer tous les boutons de modification
    const editButtons = document.querySelectorAll('.edit-activity-btn');
    const editActivityModal = document.getElementById('editActivityModal');
    const editSuccessMessage = document.getElementById('editSuccessMessage');
    const editErrorMessage = document.getElementById('editErrorMessage');
    const saveEditButton = document.getElementById('saveEditActivity');
    const editCategorySelect = document.getElementById('editCategorySelect');
    const editNewCategoryFields = document.getElementById('editNewCategoryFields');
    const editActivitySelect = document.getElementById('editActivitySelect');
    
    // Gestion du formulaire de catégorie dans la modal d'édition
    if (editCategorySelect) {
        editCategorySelect.addEventListener('change', function() {
            if (this.value === 'new') {
                editNewCategoryFields.style.display = 'block';
            } else {
                editNewCategoryFields.style.display = 'none';
            }
        });
    }
    
    // Gestion du formulaire d'activité dans la modal d'édition
    if (editActivitySelect) {
        editActivitySelect.addEventListener('change', function() {
            if (this.value === 'new') {
                document.getElementById('editActivityFields').style.display = 'block';
            } else {
                document.getElementById('editActivityFields').style.display = 'none';
                
                // Si une activité existante est sélectionnée
                if (this.value !== 'new' && this.selectedIndex > 0) {
                    const selectedOption = this.options[this.selectedIndex];
                    const activityId = selectedOption.value;
                    
                    // Trouver le bouton d'édition correspondant pour récupérer toutes les données
                    const editButton = document.querySelector(`.edit-activity-btn[data-activity-id="${activityId}"]`);
                    
                    if (editButton) {
                        // Remplir le formulaire avec les données de l'activité sélectionnée
                        document.getElementById('editActivityId').value = activityId;
                        document.getElementById('editActivityName').value = editButton.dataset.activityName;
                        document.getElementById('editActivityDescription').value = editButton.dataset.activityDescription || '';
                        document.getElementById('editCategorySelect').value = editButton.dataset.activityCategory;
                        document.getElementById('editActivityDate').value = editButton.dataset.activityDate;
                        document.getElementById('editStartTime').value = editButton.dataset.activityStart;
                        document.getElementById('editEndTime').value = editButton.dataset.activityEnd;
                    }
                }
            }
        });
    }
    
    // Ajouter un gestionnaire d'événements pour ouvrir la modal d'édition
    if (editButtons.length > 0) {
        editButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Récupérer les données de l'activité depuis les attributs data
                const activityId = this.dataset.activityId;
                const activityName = this.dataset.activityName;
                const activityDescription = this.dataset.activityDescription || '';
                const categoryId = this.dataset.activityCategory;
                const activityDate = this.dataset.activityDate;
                const startTime = this.dataset.activityStart;
                const endTime = this.dataset.activityEnd;
                
                // Remplir le formulaire d'édition
                document.getElementById('editActivityId').value = activityId;
                document.getElementById('editActivityName').value = activityName;
                document.getElementById('editActivityDescription').value = activityDescription;
                document.getElementById('editCategorySelect').value = categoryId;
                document.getElementById('editActivityDate').value = activityDate;
                document.getElementById('editStartTime').value = startTime;
                document.getElementById('editEndTime').value = endTime;
                
                // Réinitialiser l'affichage des champs supplémentaires
                if (editNewCategoryFields) editNewCategoryFields.style.display = 'none';
                document.getElementById('editActivityFields').style.display = 'none';
                
                // Réinitialiser les messages
                editSuccessMessage.style.display = 'none';
                editErrorMessage.style.display = 'none';
                
                // Préselectionner l'activité dans la liste déroulante
                if (editActivitySelect) {
                    for (let i = 0; i < editActivitySelect.options.length; i++) {
                        if (editActivitySelect.options[i].value === activityId) {
                            editActivitySelect.selectedIndex = i;
                            break;
                        }
                    }
                }
                
                // Ouvrir la modal
                const editModal = new bootstrap.Modal(editActivityModal);
                editModal.show();
                
                // Fermer la modal de gestion pour éviter la superposition
                const manageModal = bootstrap.Modal.getInstance(document.getElementById('manageActivitiesModal'));
                if (manageModal) manageModal.hide();
            });
        });
    }
    
    // Ajouter un gestionnaire d'événements pour le bouton de sauvegarde
    if (saveEditButton) {
        saveEditButton.addEventListener('click', function() {
            // Collecter les données du formulaire
            const formData = {
                activity_id: document.getElementById('editActivityId').value
            };
            
            // Vérifier si on utilise une activité existante ou si on en crée une nouvelle
            if (editActivitySelect.value === 'new') {
                formData.activity_name = document.getElementById('editActivityName').value;
                formData.description = document.getElementById('editActivityDescription').value;
            } else {
                // Utiliser le nom de l'activité existante
                formData.activity_name = editActivitySelect.options[editActivitySelect.selectedIndex].text;
                // Conserver la description existante
                formData.description = document.getElementById('editActivityDescription').value;
            }
            
            // Gérer la catégorie (existante ou nouvelle)
            const categorySelect = document.getElementById('editCategorySelect');
            if (categorySelect.value === 'new') {
                formData.category_id = 'new';
                formData.category_name = document.getElementById('editCategoryName').value;
                formData.category_color = document.getElementById('editCategoryColor').value;
            } else {
                formData.category_id = categorySelect.value;
            }
            
            // Ajouter la date et les heures
            formData.date = document.getElementById('editActivityDate').value;
            formData.start_time = document.getElementById('editStartTime').value;
            formData.end_time = document.getElementById('editEndTime').value;
            
            // Validation basique
            if ((editActivitySelect.value === 'new' && !formData.activity_name) || 
                (formData.category_id === 'new' && !formData.category_name) ||
                !formData.category_id || 
                !formData.date || 
                !formData.start_time || 
                !formData.end_time) {
                editErrorMessage.textContent = "Veuillez remplir tous les champs obligatoires.";
                editErrorMessage.style.display = 'block';
                editSuccessMessage.style.display = 'none';
                return;
            }
            
            // Récupérer l'URL
            const url = document.getElementById('editActivityForm').dataset.url;
            
            // Envoyer la requête
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Afficher un message de succès
                    editSuccessMessage.textContent = data.message;
                    editSuccessMessage.style.display = 'block';
                    editErrorMessage.style.display = 'none';
                    
                    // Fermer la modal après 1,5 secondes
                    setTimeout(() => {
                        const modal = bootstrap.Modal.getInstance(editActivityModal);
                        modal.hide();
                        
                        // Recharger la page pour afficher les modifications
                        window.location.reload();
                    }, 1500);
                } else {
                    // Afficher un message d'erreur
                    editErrorMessage.textContent = data.message || "Une erreur est survenue.";
                    editErrorMessage.style.display = 'block';
                    editSuccessMessage.style.display = 'none';
                }
            })
            .catch(error => {
                console.error('Erreur:', error);
                editErrorMessage.textContent = "Une erreur de connexion est survenue.";
                editErrorMessage.style.display = 'block';
                editSuccessMessage.style.display = 'none';
            });
        });
    }
    
    // Gestion de la suppression d'une activité
    const deleteButtons = document.querySelectorAll('.delete-activity-btn');
    const deleteConfirmModal = document.getElementById('deleteConfirmModal');
    const confirmDeleteButton = document.getElementById('confirmDeleteActivity');
    
    // Ajouter un gestionnaire d'événements pour ouvrir la modal de confirmation
    if (deleteButtons.length > 0) {
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Récupérer l'ID et le nom de l'activité
                const activityId = this.dataset.activityId;
                const activityName = this.dataset.activityName;
                
                // Remplir la modal de confirmation
                document.getElementById('deleteActivityId').value = activityId;
                document.getElementById('deleteActivityName').textContent = activityName;
                
                // Ouvrir la modal
                const deleteModal = new bootstrap.Modal(deleteConfirmModal);
                deleteModal.show();
                
                // Fermer la modal de gestion pour éviter la superposition
                const manageModal = bootstrap.Modal.getInstance(document.getElementById('manageActivitiesModal'));
                if (manageModal) manageModal.hide();
            });
        });
    }
    
    // Ajouter un gestionnaire d'événements pour le bouton de confirmation
    if (confirmDeleteButton) {
        confirmDeleteButton.addEventListener('click', function() {
            const activityId = document.getElementById('deleteActivityId').value;
            
            // Construire l'URL de suppression
            const url = `/planning/delete-activity/${activityId}`;
            
            // Envoyer la requête
            fetch(url, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Fermer la modal
                    const modal = bootstrap.Modal.getInstance(deleteConfirmModal);
                    modal.hide();
                    
                    // Recharger la page pour mettre à jour l'affichage
                    window.location.reload();
                } else {
                    // Afficher une alerte en cas d'erreur
                    alert(data.message || "Une erreur est survenue lors de la suppression.");
                }
            })
            .catch(error => {
                console.error('Erreur:', error);
                alert("Une erreur de connexion est survenue.");
            });
        });
    }
});
