

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
    modal.showModal(false);
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
                    let botonVer = "<button class='btn btn-warning btn-verPaciente' onclick='abrirVer(" + item.idPaciente + ")'>Ver</button>";
                    if (item.sexoPaciente == "1") {
                        item.sexoPaciente = "Masculino";
                    }else if(item.sexoPaciente == "2"){
                        item.sexoPaciente = "Femenino";
                    }
                    var row = "<tr>" +
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
                        "<td>" + botonEliminar+ " "+botonVer + "</td>" +

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
            success: function () {
                window.location.reload();
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
                    alert("Paciente resgistrado correctamente");
                window.location.reload();
            }

        })
 }

var fechaActual = new Date().toISOString().split("T")[0];
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
                var row = "<tr>" +
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
                var row = "<tr>" +
                    "<td>" + item.idCita + "</td>" +
                    "<td>" + item.fecha + "</td>" +
                    "<td>" + item.tipo + "</td>" +
                    "</tr>";
                $(row).appendTo("#tablaCitas tbody");
            });
        }
    })
}