// Fonction Add Task
document.getElementById('add-task').addEventListener('click', function() {
    const taskTitle = document.getElementById('task-title').value.trim();
    const taskDesc = document.getElementById('task-desc').value.trim();
    const taskList = document.getElementById('task-list');

    if (taskTitle && taskDesc) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${taskTitle}</td>
            <td>${taskDesc}</td>
            <td><button class="btn btn-danger btn-sm remove-task">Remove</button></td>`;
        taskList.appendChild(tr);

        // Clear input fields
        document.getElementById('task-title').value = '';
        document.getElementById('task-desc').value = '';

        // Ajouter un écouteur d'événement pour le bouton de suppression
        tr.querySelector('.remove-task').addEventListener('click', function() {
            // Afficher la boîte de confirmation
            const confirmation = confirm('Are you sure you want to remove this task?');
            if (confirmation) {
                tr.remove();
                alert('This task has been removed.');  // Alerte après suppression
            }
        });
    } else {
        alert('Please add task');
    }
});

// Fonction Add Note
document.getElementById('add-note').addEventListener('click', function() {
    const noteContent = document.getElementById('note-content').value.trim();
    const noteDesc = document.getElementById('note-desc').value.trim();
    const noteList = document.getElementById('note-list');

    if (noteContent && noteDesc) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${noteContent}</td>
            <td>${noteDesc}</td>
            <td><button class="btn btn-danger btn-sm remove-note">Remove</button></td>`;
        noteList.appendChild(tr);

        // Clear input fields
        document.getElementById('note-content').value = '';
        document.getElementById('note-desc').value = '';

        // Ajouter un écouteur d'événement pour le bouton de suppression
        tr.querySelector('.remove-note').addEventListener('click', function() {
            // Afficher la boîte de confirmation
            const confirmation = confirm('Are you sure you want to remove this note?');
            if (confirmation) {
                tr.remove();
                alert('This note has been removed.');  // Alerte après suppression
            }
        });
    } else {
        alert('Please add note');
    }
});

// Fonction Add Event
document.getElementById('add-event').addEventListener('click', function() {
    const eventTitle = document.getElementById('event-title').value.trim();
    const eventDate = document.getElementById('event-date').value.trim();
    const eventList = document.getElementById('event-list');

    if (eventTitle && eventDate) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${eventTitle}</td>
            <td>${eventDate}</td>
            <td><button class="btn btn-danger btn-sm remove-event">Remove</button></td>`;
        eventList.appendChild(tr);

        // Clear input fields
        document.getElementById('event-title').value = '';
        document.getElementById('event-date').value = '';

        // Ajouter un écouteur d'événement pour le bouton de suppression
        tr.querySelector('.remove-event').addEventListener('click', function() {
            // Afficher la boîte de confirmation
            const confirmation = confirm('Are you sure you want to remove this Event?');
            if (confirmation) {
                tr.remove();
                alert('This Event has been removed.');  // Alerte après suppression
            }
        });
       
    } else {
        alert('Please add event and date');
    }
});