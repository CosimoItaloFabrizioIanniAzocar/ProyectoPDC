$(document).ready(function () {
    cargarPacientes();
});

const btnAbrirModal=
    document.querySelector("#btn-abrir-modal");
const btnCerrarModal=
    document.querySelector("#btn-cerrar-modal");
const modal=
    document.querySelector("#modal");

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click",()=>{
    modal.close();
})
/* Conexion con Pacientes */
    function cargarPacientes() {
    $.ajax({
            type: "GET",
            url:"http://localhost:8080/api/getPacientes",
            dataType: "json",
            success: function (data) {
                $.each(data, function (i, item) {
                    let botonEliminar = "<button class='btn btn-danger' onclick='eliminarPaciente(" + item.idPaciente + ")'>Eliminar</button>";
                    var row = "<tr>" +
                        "<td>" + item.idPaciente + "</td>" +
                        "<td>" + item.nombrePaciente + "</td>" +
                        "<td>" + item.edadPaciente + "</td>" +
                        "<td>" + item.rutPaciente + "</td>" +
                        "<td>" + item.pasaportePaciente + "</td>" +
                        "<td>" + item.partidaNacimientoPaciente + "</td>" +
                        "<td>" + item.sexoPaciente + "</td>" +
                        "<td>" + item.direccionPaciente + "</td>" +
                        "<td>" + item.telefonoPaciente + "</td>" +
                        "<td>" + item.emailPaciente + "</td>" +
                        "<td>" + botonEliminar


                        + "</td>" +

                        "</tr>";
                    $(row).appendTo("#tablaPacientes tbody");
                });
            }
        }
    )

}

function eliminarPaciente(id) {
        if(!confirm("¿Está seguro que desea eliminar el paciente?")){
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