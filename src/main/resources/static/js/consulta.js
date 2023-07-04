
$(document).ready(function () {
    obtenerParametroURL();
    cargarPaciente();
    citasPaciente();

});

const btnAbrirModalHistoria=
    document.querySelector("#btnFinalizar");
const btnCerrarModalHistoria=
    document.querySelector("#btn-cerrar-modalHistoria");
const modal=
    document.querySelector("#modalHitoria");

btnAbrirModalHistoria.addEventListener("click",()=>{
    modal.showModal();
})

btnCerrarModalHistoria.addEventListener("click",()=>{
    modal.close();
})



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
            window.location.href = 'citas.html';
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

function mostrarQr() {
    let id = obtenerParametroURL('id');
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/asignarQr/" + id,
        dataType: "json",
        success: function(data) {
            let item = data;
            let imagenHtml = "<img src='http://localhost:8080/imagenes/" + item.id + "' alt='" + item.nombreQr + "' width='300'>";
            let row4 = "<tr>" +
                "<td>" + item.id + "</td>" +
                "<td>" + item.linkQr + "</td>" +
                "<td>" + "$" + item.montoQr + "</td>" +
                "<td>" + item.tipoConsulta + "</td>" +
                "<td>" + item.nombreQr + "</td>" +
                "<td>" + imagenHtml + "</td>" +
                "</tr>";
            $(row4).appendTo("#tablaQr tbody");
        },
        error: function(xhr, status, error) {
            console.error("Error al mostrar QR:", error);
        }
    });
}


