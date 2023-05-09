$(document).ready(function () {
    cargarCitas();

});
function agregarCita(){
    let datos = {};

    datos.idPaciente = document.getElementById('idPaciente').value;
    datos.fecha = document.getElementById('fecha').value;
    datos.hora = document.getElementById('hora').value;
    datos.tipo = document.getElementById('tipo').value;
    datos.estado = false;


    $.ajax({
        type: "POST",
        url: "http://localhost:8080/api/registrarCita",
        dataType: "json",
        success: function (datos) {
            if(datos=="success") {
                alert("Paciente resgistrado correctamente");
            }
            else {
                alert("Error al registrar paciente");
            }
        }

    })

}

/* Conexion con Citas */
function cargarCitas() {
    $.ajax({
            type: "GET",
            url:"http://localhost:8080/api/getCitas",
            dataType: "json",
            success: function (data) {
                $.each(data, function (i, item) {
                    let botonEliminar = "<button class='btn btn-danger' onclick='eliminarCitas(" + item.idCita + ")'>Eliminar</button>";
                    var row = "<tr>" +
                        "<td>" + item.idCita + "</td>" +
                        "<td>" + item.idPaciente + "</td>" +
                        "<td>" + item.fecha + "</td>" +
                        "<td>" + item.hora + "</td>" +
                        "<td>" + item.tipo + "</td>" +
                        "<td>" + item.estado + "</td>" +
                        "<td>" + botonEliminar+  "</td>" +

                        "</tr>";
                    $(row).appendTo("#tablaCitas tbody");
                });

            }
        }
    )

}
function eliminarCitas(id) {
    if (!confirm("¿Está seguro que desea eliminar la cita?")) {
        return;
    }
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/api/citas/" + id,
        success: function (response) {
            window.location.reload();
        }
    });
}
