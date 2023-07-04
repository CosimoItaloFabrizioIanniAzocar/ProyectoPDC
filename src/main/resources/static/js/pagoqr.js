$(document).ready(function () {
    mostrarImagenes();
});

function mostrarImagenes() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/mostrarImagenes",
        dataType: "json",
        success: function(data) {
            $.each(data, function(i, item) {
                let imagenUrl = "http://localhost:8080/imagenes/" + item.id;
                let imagenHtml = "<img src='" + imagenUrl + "' alt='' width='300'>";
                let row = "<tr>" +
                    "<td>" + item.id + "</td>" +
                    "<td>" + item.linkQr + "</td>" +
                    "<td>" + item.tipoConsulta + "</td>" +
                    "<td>" + item.nombreQr + "</td>" +
                    "<td>" + imagenHtml + "</td>" +
                    "</tr>";
                $(row).appendTo("#tablaQrs tbody");
            });
        }
    });
}
