$(document).ready(function () {
    cargarPacientes();

});
let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const idPaciente = document.getElementById('idPaciente');
const nombrePaciente = document.getElementById('nombrePaciente');
const fecha = document.getElementById('fecha');
const hora = document.getElementById('hora');
const tipo = document.getElementById('tipo');

const weekdays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

function openModal(date) {
    clicked = date;

    const eventForDay = events.find(e => e.date === clicked);

    if (eventForDay) {
        document.getElementById('eventText').innerText = eventForDay.title;
        deleteEventModal.style.display = 'block';
    } else {
        newEventModal.style.display = 'block';
    }

    backDrop.style.display = 'block';
}

function load() {
    const dt = new Date();

    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    document.getElementById('monthDisplay').innerText =
        `${dt.toLocaleDateString('es-ES', { month: 'long' })} ${year}`;

    calendar.innerHTML = '';

    for(let i = 1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        const dayString = `${month + 1}/${i - paddingDays}/${year}`;

        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;
            const eventForDay = events.find(e => e.date === dayString);

            if (i - paddingDays === day && nav === 0) {
                daySquare.id = 'currentDay';
            }

            if (eventForDay) {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('event');
                eventDiv.innerText = eventForDay.title;
                daySquare.appendChild(eventDiv);
            }

            daySquare.addEventListener('click', () => openModal(dayString));
        } else {
            daySquare.classList.add('padding');
        }

        calendar.appendChild(daySquare);
    }
}

function closeModal() {
    idPaciente.classList.remove('error');
    fecha.classList.remove('error');
    hora.classList.remove('error');
    tipo.classList.remove('error');
    newEventModal.style.display = 'none';
    deleteEventModal.style.display = 'none';
    backDrop.style.display = 'none';
    idPaciente.value = '';
    fecha.value = '';
    hora.value = '';
    tipo.value = '';
    clicked = null;
    load();
}

function saveEvent() {
        let datos = {};
        datos.idPaciente = document.getElementById('idPaciente').value;
        datos.fecha = document.getElementById('fecha').value;
        datos.hora = document.getElementById('hora').value;
        datos.tipo = document.getElementById('tipo').value;
        datos.estado = false;

        console.log(datos);

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/api/registrarCita",
            data: JSON.stringify(datos),
            contentType: "application/json",
            success: function (datos) {
                if (datos.value) {
                    datos.classList.remove('error');

                }
                         events.push({
                            date: clicked,
                            title: nombrePaciente+ ' / ' + fecha.value,
                        });
                    localStorage.setItem('events', JSON.stringify(events));
                    closeModal();
                }
               // window.location.reload();

        })
}
function cargarPacientes() {
    $.ajax({
            type: "GET",
            url:"http://localhost:8080/api/getPacientes",
            dataType: "json",
            success: function (data) {
                $.each(data, function (i, item) {
                    var row = "<tr>" +
                        "<td>" + item.nombrePaciente + "</td>" +
                        "</tr>";
                    $(row).appendTo("#tablaPacientes tbody");
                });
            }
        }
    )
}

function deleteEvent() {
    events = events.filter(e => e.date !== clicked);
    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
}

function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
        nav++;
        load();
    });

    document.getElementById('backButton').addEventListener('click', () => {
        nav--;
        load();
    });

    document.getElementById('saveButton').addEventListener('click', saveEvent);
    document.getElementById('cancelButton').addEventListener('click', closeModal);
    document.getElementById('deleteButton').addEventListener('click', deleteEvent);
    document.getElementById('closeButton').addEventListener('click', closeModal);
}


initButtons();
load();

var fechaActual = new Date().toISOString().split("T")[0];
document.getElementById("fecha").min = fechaActual;

