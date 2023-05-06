$(document).ready(function () {
    cargarPacientes();

    const btnAbrirModal =
        document.querySelector("#btn-abrir-modal");
    const btnCerrarModal =
        document.querySelector("#btn-cerrar-modal");
    const modal =
        document.querySelector("#modal");
    btnAbrirModal.addEventListener("click", () => {
        modal.showModal();
    });
        btnCerrarModal.addEventListener("click", () => {
            modal.close();
        });

});

/* Conexion con Pacientes */
    function cargarPacientes() {
    $.ajax({
            type: "GET",
            url:"http://localhost:8080/api/getPacientes",
            dataType: "json",
            success: function (data) {
                $.each(data, function (i, item) {
                    let botonEliminar = "<button class='btn btn-danger' onclick='eliminarPaciente(" + item.id_paciente + ")'>Eliminar</button>";
                    var row = "<tr>" +
                        "<td>" + item.id_paciente + "</td>" +
                        "<td>" + item.nombrePaciente + "</td>" +
                        "<td>" + item.fecha_nacimiento + "</td>" +
                        "<td>" + item.rutPaciente + "</td>" +
                        "<td>" + item.pasaportePaciente + "</td>" +
                        "<td>" + item.partidaNacimientoPaciente + "</td>" +
                        "<td>" + item.sexoPaciente + "</td>" +
                        "<td>" + item.direccionPaciente + "</td>" +
                        "<td>" + item.telefonoPaciente + "</td>" +
                        "<td>" + item.emailPaciente + "</td>" +
                        "<td>" + botonEliminar+ + botonAgregar +"</td>" +

                        "</tr>";
                    $(row).appendTo("#tablaPacientes tbody");
                });
            }
        }
    )
}

    function eliminarPaciente(id) {
        if (!confirm("¿Está seguro que desea eliminar el paciente?")) {
            return;
        }
        $.ajax({
            type: "DELETE",
            url: "http://localhost:8080/api/pacientes/" + id,
            success: function (response) {
                window.location.reload();
            }
        });
    }


//*agregar paciente*//

 function agregarPaciente(){
     let datos = {};

      datos.nombre = document.getElementById('nombrePaciente').value;
      datos.fecha_nacimiento = document.getElementById('edadPaciente').value;
      datos.sexo = document.getElementById('sexoPaciente').value;
      datos.rut = document.getElementById('rutPaciente').value;
      datos.telefono = document.getElementById('telefonoPaciente').value;
      datos.pasaporte = document.getElementById('pasaportePaciente').value;
      datos.direccion = document.getElementById('direccionPaciente').value;
      datos.Email = document.getElementById('emailPaciente').value;

     $.ajax({
            type: "POST",
            url: "http://localhost:8080/api/pacientes",
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
        window.location.reload();
 }

        /* Conexion con Citas */
function cargarCitas() {
    $.ajax({
            type: "GET",
            url:"http://localhost:8080/api/getCitas",
            dataType: "json",
            success: function (data) {
                $.each(data, function (i, item) {
                    let botonEliminar = "<button class='btn btn-danger' onclick='eliminarPaciente(" + item.idCita + ")'>Eliminar</button>";
                    var row = "<tr>" +
                        "<td>" + item.idCita + "</td>" +
                        "<td>" + item.idPaciente + "</td>" +
                        "<td>" + item.fecha + "</td>" +
                        "<td>" + item.hora + "</td>" +
                        "<td>" + item.tipo + "</td>" +
                        "<td>" + item.estado + "</td>" +
                        "<td>" + botonEliminar+ + botonAgregar +"</td>" +

                        "</tr>";



                    $(row).appendTo("#tablaPacientes tbody");
                });

            }
        }
    )

}

function eliminarPaciente(id) {
    if (!confirm("¿Está seguro que desea eliminar la cita?")) {
        return;
    }
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/api/getCitas" + id,
        success: function (response) {
            window.location.reload();
        }
    });
}
