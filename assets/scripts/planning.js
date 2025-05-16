document.addEventListener('DOMContentLoaded', function() {
    // Gestion du formulaire d'activité
    const activitySelect = document.getElementById('activitySelect');
    const newActivityFields = document.getElementById('newActivityFields');
    
    activitySelect.addEventListener('change', function() {
        if (this.value === 'new') {
            newActivityFields.style.display = 'block';
        } else {
            newActivityFields.style.display = 'none';
        }
    });
    
    // Gestion du formulaire de catégorie
    const categorySelect = document.getElementById('categorySelect');
    const newCategoryFields = document.getElementById('newCategoryFields');
    
    categorySelect.addEventListener('change', function() {
        if (this.value === 'new') {
            newCategoryFields.style.display = 'block';
        } else {
            newCategoryFields.style.display = 'none';
        }
    });
    
    // Gestion des options de récurrence
    const isRecurring = document.getElementById('isRecurring');
    const recurringOptions = document.getElementById('recurringOptions');
    
    isRecurring.addEventListener('change', function() {
        if (this.checked) {
            recurringOptions.style.display = 'block';
        } else {
            recurringOptions.style.display = 'none';
        }
    });
    
    // Gestion de la soumission du formulaire via AJAX
    const saveButton = document.getElementById('saveActivity');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
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
});
