$(document).ready(function () {
    cargarCitas();

});
const btnCerrarModalEditar = document.querySelector("#btn-cerrar-edModal");
const modalEd = document.querySelector("#modalEd");

btnCerrarModalEditar.addEventListener("click",()=>{
    modalEd.close();
})
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
                    let botonEditar = "<button class='btn btn-warning' onclick='editarCitas(" + item.idCita + ")'>Editar</button>";
                    var row = "<tr>" +
                        "<td>" + item.idCita + "</td>" +
                        "<td>" + item.idPaciente + "</td>" +
                        "<td>" + item.fecha + "</td>" +
                        "<td>" + item.hora + "</td>" +
                        "<td>" + item.tipo + "</td>" +
                        "<td>" + item.estado + "</td>" +
                        "<td>" + botonEliminar+ " " + botonEditar + "</td>" +

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

let idCitas = null;
function editarCitas(id) {
    idCitas = id;

    $.ajax({
        type: "GET",
        url:"http://localhost:8080/api/buscarCita/"+ idCitas,
        dataType: "json",
        success: function (data) {

            $("#editarNombre").val(data.idPaciente);
            $("#editarNacimiento").val(data.fecha);
            $("#editarHora").val(data.hora);
            $("#editarTipo").val(data.tipo);

            datos = data;
            document.getElementById("modalEd").showModal();

        }
    })
}

function guardarCitas (){
    let datos = {};
    datos.idPaciente = document.getElementById('editarNombre').value;
    datos.fecha = document.getElementById('editarNacimiento').value;
    datos.hora = document.getElementById('editarHora').value;
    datos.tipo = document.getElementById('editarTipo').value;
    datos.estado = false;
    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/api/editarCita/" + idCitas,
        data: JSON.stringify(datos),
        contentType: "application/json",
        success: function (data) {
            $("#editarNombre").val(data.idPaciente);
            $("#editarNacimiento").val(data.fecha);
            $("#editarHora").val(data.hora);
            $("#editarTipo").val(data.tipo);
            alert("Insumo editado correctamente");

            window.location.reload();

        }
    })
}
