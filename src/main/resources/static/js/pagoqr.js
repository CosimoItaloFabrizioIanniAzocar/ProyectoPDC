$(document).ready(function () {
    mostrarImagenes();
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



function mostrarImagenes() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/mostrarImagenes",
        dataType: "json",
        success: function(data) {
            $.each(data, function(i, item) {
                let imagenUrl = "http://localhost:8080/imagenes/" + item.id;
                let imagenHtml = "<img src='" + imagenUrl + "' alt='" + item.nombreQr + "' width='200'>";
                let eliminarHtml = "<button type='button' class='btn btn-danger' onclick='eliminarImagen(" + item.id + ")'>Eliminar</button>";
                let row = "<tr>" +
                    "<td>" + item.id + "</td>" +
                    "<td>" + item.linkQr + "</td>" +
                    "<td>"+"$"  + item.montoQr + "</td>" +
                    "<td>" + item.tipoConsulta + "</td>" +
                    "<td>" + item.nombreQr + "</td>" +
                    "<td>" + imagenHtml + "</td>" +
                    "<td>" + eliminarHtml + "</td>" +
                    "</tr>";
                $(row).appendTo("#tablaQrs tbody");
            });
        }
    });
}
function guardarDatos() {
    var archivo = document.getElementById('selecionArchivo').files[0];
    var linkQr = document.getElementById('linkQr').value;
    var MontoQr = document.getElementById('MontoQr').value;
    var TipoDeConsulta = document.getElementById('TipoDeConsulta').value;

    var formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('linkQr', linkQr);
    formData.append('MontoQr', MontoQr);
    formData.append('TipoDeConsulta', TipoDeConsulta);

    $.ajax({
        type: "POST",
        url: "/guardarImagen",
        data: formData,
        processData: false,
        contentType: false,
        success: function() {
            modal.close();
            Swal.fire({
                icon: 'success',
                title: 'Datos guardados',
                text: 'Los datos han sido guardados exitosamente.',
            }).then(function () {
                window.location.reload();
            });
        },
        error: function() {
            modal.close();
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error al guardar los datos.'
            }).then(function () {
                window.location.reload();
            });
        }

    });

}


function eliminarImagen(id) {
    Swal.fire({
        title: 'Eliminar esta imagen',
        text: '¿Está seguro que desea eliminar esta imagen?',
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
                url: "http://localhost:8080/eliminarImagen/" + id,
                success: function () {
                    Swal.fire({
                        title: 'imagen eliminada',
                        text: 'Este archivo  ha sido eliminado correctamente',
                        icon: 'success'
                    }).then(function () {
                        window.location.reload();
                    });
                }
            });
        }
    });
}


