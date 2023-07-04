
$(document).ready(function () {
    obtenerParametroURL();
    cargarPaciente();
    citasPaciente();

});




function obtenerParametroURL(parametro) {
    let url = window.location.search.substring(1);
    let variables = url.split('&');
    for (let i = 0; i < variables.length; i++) {
        let par = variables[i].split('=');
        if (par[0] === parametro) {
            return par[1];
        }
    }
    return null;
}
function cargarPaciente() {

    let id = obtenerParametroURL('id');
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/buscarPaciente/" + id,
        dataType: "json",
        success: function (data) {
                let item = data;
            if (item.sexoPaciente === "1") {
                item.sexoPaciente = "Masculino";
            }else if(item.sexoPaciente === "2"){
                item.sexoPaciente = "Femenino";
            }
                let row1 = "<tr>" +
                    "<td>" + item.idPaciente + "</td>" +
                    "<td>" + item.nombrePaciente + "</td>" +
                    "<td>" + item.fechaNacimiento + "</td> <br>" +
                    "</tr>";
                $(row1).appendTo("#tablaDelPaciente1 #tbody1");

            let row2 = "<tr>" +

                "<td>" + item.rutPaciente + "</td>" +
                "<td>" + item.pasaportePaciente + "</td>" +
                "<td>" + item.partidaNacimientoPaciente + "</td> <br>" +
                "</tr>";
            $(row2).appendTo("#tablaDelPaciente2 #tbody2");
            let row3 = "<tr>" +

                "<td>" + item.sexoPaciente + "</td>" +
                "<td>" + item.direccionPaciente + "</td>" +
                "<td>" + item.telefonoPaciente + "</td>" +
                "<td>" + item.emailPaciente + "</td>" +
                "</tr>";
            $(row3).appendTo("#tablaDelPaciente3 #tbody3");


        }
    });
}

function citasPaciente() {
    let id = obtenerParametroURL('id');
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/citasPaciente/" + id,
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, item) {

                if (item.estado === false) {
                    item.estado = "Pendiente";
                }else if(item.estado === true){
                    item.estado = "Atendida";
                }

                let row4 = "<tr>" +
                    "<td>" + item.idCita + "</td>" +
                    "<td>" + item.idPaciente + "</td>" +
                    "<td>" + item.fecha + "</td>" +
                    "<td>" + item.hora + "</td>" +
                    "<td>" + item.tipo + "</td>" +
                    "<td>" + item.estado + "</td>" +
                    "</tr>";
                $(row4).appendTo("#tablaDelPaciente4 #tbody4");

            });
        }
    })
}

function citaAtendida() {
    let id = obtenerParametroURL('idcita');
    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/api/citaAtendida/" + id,
        contentType: "application/json",
        success: function () {
            Swal.fire({
                title: "¡Éxito!",
                text: "Cita atendida correctamente",
                icon: "success",
                showConfirmButton: true,
                confirmButtonText: "Aceptar"
            }).then(function () {
                window.location.href = 'citas.html';
            });
        },
        error: function () {
            Swal.fire({
                title: "¡Error!",
                text: "Error al atender la cita",
                icon: "error",
                showConfirmButton: true,
                confirmButtonText: "Aceptar"
            });
        }
    });

    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/api/descuentoCantidad",
        contentType: "application/json",
        success: function (data) {
        }
    });
}

function crearHistoria(){
    let id = obtenerParametroURL('id');
    let idcita = obtenerParametroURL('idcita');
    window.location.href='formularioConsulta.html?id=' + id+"&idcita="+ idcita;
}


