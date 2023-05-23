
$(document).ready(function () {
    obtenerParametroURL();
    cargarPaciente();
    citasPaciente();

});




function obtenerParametroURL(parametro) {
    var url = window.location.search.substring(1);
    var variables = url.split('&');
    for (var i = 0; i < variables.length; i++) {
        var par = variables[i].split('=');
        if (par[0] === parametro) {
            return par[1];
        }
    }
    return null;
}
function cargarPaciente() {

    var id = obtenerParametroURL('id');
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/buscarPaciente/" + id,
        dataType: "json",
        success: function (data) {
                var item = data;
            if (item.sexoPaciente == "1") {
                item.sexoPaciente = "Masculino";
            }else if(item.sexoPaciente == "2"){
                item.sexoPaciente = "Femenino";
            }
                var row1 = "<tr>" +
                    "<td>" + item.idPaciente + "</td>" +
                    "<td>" + item.nombrePaciente + "</td>" +
                    "<td>" + item.fechaNacimiento + "</td> <br>" +
                    "</tr>";
                $(row1).appendTo("#tablaDelPaciente1 #tbody1");

            var row2 = "<tr>" +

                "<td>" + item.rutPaciente + "</td>" +
                "<td>" + item.pasaportePaciente + "</td>" +
                "<td>" + item.partidaNacimientoPaciente + "</td> <br>" +
                "</tr>";
            $(row2).appendTo("#tablaDelPaciente2 #tbody2");
            var row3 = "<tr>" +

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
    var id = obtenerParametroURL('id');
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/citasPaciente/" + id,
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, item) {

                var row4 = "<tr>" +
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

function citaAtendida (){
    var id = obtenerParametroURL('idcita');
    $.ajax({
        type: "PUT",
        url: "http://localhost:8080/api/citaAtendida/" + id,
        contentType: "application/json",
        success: function (data) {
            window.location.href='citas.html';
            alert("Cita atendida correctamente")
        }
    })
}


