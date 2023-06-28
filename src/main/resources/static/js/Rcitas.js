$(document).ready(function () {
    cargarCitas();

});
const btnCerrarModalEditar = document.querySelector("#btn-cerrar-edModal");
const modalEd = document.querySelector("#modalEd");

btnCerrarModalEditar.addEventListener("click",()=>{
    modalEd.close();
})


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

                    if (item.estado === false) {
                        item.estado = "Pendiente";
                    }else if(item.estado === true){
                        item.estado = "Atendida";
                    }

                    let botonAtender = "<button class='btn btn-success' onclick='atenderCita(" + item.idPaciente +","+ item.idCita +")'>Atender</button>";
                    if (item.estado === "Pendiente") {
                         botonAtender = "<button class='btn btn-success' onclick='atenderCita(" + item.idPaciente +","+ item.idCita +")'>Atender</button>";
                    }else if(item.estado === "Atendida"){
                         botonAtender = "<button class='btn btn-info' onclick='atenderCita(" + item.idPaciente +","+item.idCita+")' disabled>Atendida</button>";
                         botonEditar = "<button class='btn btn-warning' onclick='editarCitas(" + item.idCita + ")' disabled>Editar</button>";
                         botonEliminar = "<button class='btn btn-danger' onclick='eliminarCitas(" + item.idCita + ")' disabled>Eliminar</button>";
                    }
                    let row = "<tr>" +
                        "<td>" + item.idCita + "</td>" +
                        "<td>" + item.idPaciente + "</td>" +
                        "<td>" + item.fecha + "</td>" +
                        "<td>" + item.hora + "</td>" +
                        "<td>" + item.tipo + "</td>" +
                        "<td>" + item.estado + "</td>" +
                        "<td>" + botonEliminar+ " " + botonEditar + " "+botonAtender+"</td>" +

                        "</tr>";
                    $(row).appendTo("#tablaCitas tbody");
                });

            }
        }
    )

}
function eliminarCitas(id) {
    Swal.fire({
        title: "Confirmación",
        text: "¿Está seguro que desea eliminar la cita?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
        cancelButtonColor: "#3085d6"
    }).then(function (result) {
        if (result.isConfirmed) {
            $.ajax({
                type: "DELETE",
                url: "http://localhost:8080/api/citas/" + id,
                success: function () {
                    Swal.fire({
                        title: "Éxito",
                        text: "La cita ha sido eliminada",
                        icon: "success",
                        confirmButtonText: "Aceptar"
                    }).then(function () {
                        window.location.reload();
                    });
                },
                error: function () {
                    Swal.fire({
                        title: "Error",
                        text: "Hubo un problema al eliminar la cita",
                        icon: "error",
                        confirmButtonText: "Aceptar"
                    });
                }
            });
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
function atenderCita(id,idcita){
    window.location.href='consulta.html?id=' + id +"&idcita="+ idcita;
}

