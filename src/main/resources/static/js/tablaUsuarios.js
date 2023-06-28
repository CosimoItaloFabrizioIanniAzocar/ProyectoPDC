// Call the dataTables jQuery plugin
$(document).ready(function() {

    cargarUsuarios();

    function cargarUsuarios() {
        $.ajax({
                type: "GET",
                url: "http://localhost:8080/api/usuarios",
                dataType: "json",
                success: function (data) {
                    $.each(data, function (i, item) {
                        let row = "<tr>" +
                            "<td>" + item.id + "</td>" +
                            "<td>" + item.nombre + "</td>" +
                            "<td>" + item.password + "</td>" +

                            "</tr>";
                        $(row).appendTo("#tablaUsuarios tbody");
                    });
                }
            }
        )
    }
})