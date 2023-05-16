/* Conexion con Pacientes */
$(document).ready(function () {
    cargarInventario();
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

const btnCerrarModalEditar = document.querySelector("#btn-cerrar-editar");
const modalEditar = document.querySelector("#modalEditar");

btnCerrarModalEditar.addEventListener("click",()=>{
    modalEditar.close();
})

function cargarInventario() {

    $.ajax({
            type: "GET",
            url:"http://localhost:8080/api/getInsumos",
            dataType: "json",
            success: function (data) {
                $.each(data, function (i, item) {
                    let botonEliminar = "<button class='btn btn-danger' onclick='eliminarInsumo(" + item.idInsumo + ")'>Eliminar</button>";
                    let botonEditar = "<button class='btn btn-warning' onclick='editarInsumo(" + item.idInsumo + ")'>Editar</button>";

                    let estadoClass;
                    switch (item.estado) {
                        case 'Poco Stock':
                            estadoClass = 'pocoStock';
                            break;
                        case 'Suficiente':
                            estadoClass = 'suficienteStock';
                            break;
                        case 'Agotado':
                            estadoClass = 'agotadoStock';
                            break;
                        default:
                            estadoClass = '';
                    }

                    var row = "<tr>" +
                        "<td>" + item.idInsumo + "</td>" +
                        "<td>" + item.nombre + "</td>" +
                        "<td>" + item.cantidad + "</td>" +
                        "<td class='" + estadoClass + "'>" + item.estado + "</td>" +
                        "<td>" + botonEliminar + " " + botonEditar + "</td>" +
                        "</tr>";
                    $(row).appendTo("#tablaInventario tbody");
                });
            }
        }
    )
}

function eliminarInsumo(id) {
    if (!confirm("¿Está seguro que desea eliminar este Insumo?")) {
        return;
    }
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/api/eliminarInsumo/" + id,
        success: function (response) {
            window.location.reload();
        }
    });
}

function agregarInsumo(){
    let datos = {};

    datos.nombre = document.getElementById('nombreInsumo').value;
    datos.cantidad = document.getElementById('cantidadInsumo').value;
    datos.estado = "no disponible";

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/api/registrarInsumo",
        data: JSON.stringify(datos),
        contentType: "application/json",
        success: function (datos) {
            if(datos=="success") {
                alert("Insumo agregado correctamentea");
            }
            window.location.reload();
        }

    })
}
let Idinsumo = null;
function editarInsumo(id) {
     Idinsumo = id;

    $.ajax({
        type: "GET",
        url:"http://localhost:8080/api/buscarInsumo/"+ id,
        dataType: "json",
        success: function (data) {
            $("#editarCantidad").val(data.cantidad);
            datos = data;
            document.getElementById("modalEditar").showModal();

        }
    })
}

    function guardarInsumos (){
    let datos = {};
    datos.cantidad = document.getElementById('editarCantidad').value;
        $.ajax({
            type: "PUT",
            url: "http://localhost:8080/api/actualizarCantidad/" + Idinsumo,
            data: JSON.stringify(datos),
            contentType: "application/json",
            success: function (data) {
                $("#editarCantidad").val(data.cantidad);
                if (datos == "success") {
                    alert("Insumo editado correctamente");
                }
                window.location.reload();

            }
        })
    }



