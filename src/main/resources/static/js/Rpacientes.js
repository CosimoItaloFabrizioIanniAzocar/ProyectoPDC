

$(document).ready(function () {
    cargarPacientes();


});
const btnCerrarModalEditarP = document.querySelector("#btn-cerrar-edModalP");
const modalEdP = document.querySelector("#modalEdP");

btnCerrarModalEditarP.addEventListener("click",()=>{
    modalEdP.close();
})
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
                    let botonEditar = "<button class='btn btn-warning' onclick='editarPaciente(" + item.idPaciente + ")'>Editar</button>";
                    let botonVer = "<button class='btn btn-info btn-verPaciente' onclick='abrirVer(" + item.idPaciente + ")'>Ver</button>";

                    if (item.sexoPaciente === "1") {
                        item.sexoPaciente = "Masculino";
                    }else if(item.sexoPaciente === "2"){
                        item.sexoPaciente = "Femenino";
                    }
                    let row = "<tr>" +
                        "<td>" + item.idPaciente + "</td>" +
                        "<td>" + item.nombrePaciente + "</td>" +
                        "<td>" + item.fechaNacimiento + "</td>" +
                        "<td>" + item.rutPaciente + "</td>" +
                        "<td>" + item.pasaportePaciente + "</td>" +
                        "<td>" + item.partidaNacimientoPaciente + "</td>" +
                        "<td>" + item.sexoPaciente + "</td>" +
                        "<td>" + item.direccionPaciente + "</td>" +
                        "<td>" + item.telefonoPaciente + "</td>" +
                        "<td>" + item.emailPaciente + "</td>" +
                        "<td>" + botonEliminar+ " "+botonEditar+ " "+botonVer+"</td>" +

                        "</tr>";
                    $(row).appendTo("#tablaPacientes tbody");
                });
            }
        }
    )
}

function eliminarPaciente(id) {
    Swal.fire({
        title: 'Eliminar paciente',
        text: '¿Está seguro que desea eliminar el paciente?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: "DELETE",
                url: "http://localhost:8080/api/pacientes/" + id,
                success: function () {
                    Swal.fire({
                        title: 'Paciente eliminado',
                        text: 'El paciente ha sido eliminado correctamente',
                        icon: 'success'
                    }).then(function () {
                        window.location.reload();
                    });
                }
            });
        }
    });
}

let idPacientes = null;
function  editarPaciente (id){
        idPacientes = id;
    $.ajax({
        type: "GET",
        url:"http://localhost:8080/api/buscarPaciente/"+ idPacientes,
        dataType: "json",
        success: function (data) {

            $("#editarNombreP").val(data.nombrePaciente);
            $("#editarNacimientoP").val(data.fechaNacimiento);
            $("#editarRutP").val(data.rutPaciente);
            $("#editarPasaporteP").val(data.pasaportePaciente);
            $("#editarPartidaP").val(data.partidaNacimientoPaciente);
            $("#editarSexoPaciente").val(data.sexoPaciente);
            $("#editarDireccionPaciente").val(data.direccionPaciente);
            $("#editarTelefonoPaciente").val(data.telefonoPaciente);
            $("#editarEmailPaciente").val(data.emailPaciente);


            document.getElementById("modalEdP").showModal();

        }
    })
}

function guardarPacienteEdit() {
    let datos = {};
    datos.nombrePaciente = $("#editarNombreP").val();
    datos.fechaNacimiento = $("#editarNacimientoP").val();
    datos.rutPaciente = $("#editarRutP").val();
    datos.pasaportePaciente = $("#editarPasaporteP").val();
    datos.partidaNacimientoPaciente = $("#editarPartidaP").val();
    datos.sexoPaciente = $("#editarSexoPaciente").val();
    datos.direccionPaciente = $("#editarDireccionPaciente").val();
    datos.telefonoPaciente = $("#editarTelefonoPaciente").val();
    datos.emailPaciente = $("#editarEmailPaciente").val();

    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/api/editarPaciente/" + idPacientes,
        data: JSON.stringify(datos),
        contentType: "application/json",
        success: function () {
            modalEdP.close();
            Swal.fire({
                title: "Éxito",
                text: "Paciente editado correctamente",
                icon: "success",
                confirmButtonText: "Aceptar"
            }).then(function() {
                window.location.reload();
            });
        },
        error: function () {
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al editar el paciente",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        }
    });
}

//*agregar paciente*//

 function agregarPaciente(){
     let datos = {};

      datos.nombrePaciente = document.getElementById('nombrePaciente').value;
      datos.fechaNacimiento = document.getElementById('edadPaciente').value;
      datos.rutPaciente = document.getElementById('rutPaciente').value;
      datos.pasaportePaciente = document.getElementById('pasaportePaciente').value;
      datos.partidaNacimientoPaciente = document.getElementById('partNacimiento').value;
      datos.sexoPaciente = document.getElementById('sexoPaciente').value;
      datos.direccionPaciente = document.getElementById('direccionPaciente').value;
      datos.telefonoPaciente = document.getElementById('telefonoPaciente').value;
      datos.emailPaciente = document.getElementById('emailPaciente').value;

     $.ajax({
         type: "POST",
         url: "http://localhost:8080/api/registrarPaciente",
         data: JSON.stringify(datos),
         contentType: "application/json",
         success: function () {
             modal.close();
             Swal.fire({
                 title: "¡Éxito!",
                 text: "Paciente registrado correctamente",
                 icon: "success",
                 showConfirmButton: true,
                 confirmButtonText: "Aceptar"
             }).then(function () {
                 window.location.reload();
             });
         }
     });
    }

let fechaActual = new Date().toISOString().split("T")[0];
document.getElementById("edadPaciente").max = fechaActual;

function abrirVer(id) {
    document.getElementById("modalVer").showModal();
    cargarHistorias(id);
    cargarCitasDelPaciente(id);

}
function  cerrarVer() {
    document.getElementById("modalVer").close();
}

function cargarHistorias(id){
    $.ajax({
        type: "GET",
        url:"http://localhost:8080/api/getHistorias/"+id,
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, item) {
                let row = "<tr>" +
                    "<td>" + item.idHistoriaClinica + "</td>" +
                    "<td>" + item.idCita + "</td>" +
                    "</tr>";
                $(row).appendTo("#historiaClinica tbody");
            });
        }
    })
}

function cargarCitasDelPaciente(id){

    $.ajax({
        type: "GET",
        url:"http://localhost:8080/api/citasPaciente/"+id,
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, item) {
                let row = "<tr>" +
                    "<td>" + item.idCita + "</td>" +
                    "<td>" + item.fecha + "</td>" +
                    "<td>" + item.tipo + "</td>" +
                    "</tr>";
                $(row).appendTo("#tablaCitas tbody");
            });
        }
    })
}