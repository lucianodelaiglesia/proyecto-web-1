document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        height: 600,
        plugins: ['dayGrid'],
        locale: 'es',
        events: [
            {
                title: "Vacuna 1",
                start: "2020-11-25"
            },
            {
                title: "Vacuna 2",
                start: "2020-12-02"
            },
            {
                title: "Vacuna 3",
                start: "2020-12-21"
            },
            {
                title: "Vacuna 4",
                start: "2020-12-28"
            },
            {
                title: "Vacuna 5",
                start: "2020-12-28"
            },
            {
                title: "Vacuna 6",
                start: "2021-01-08"
            }
        ]
    });

    calendar.render();

    $(".fc-today-button").text("Hoy");
});