// Call the dataTables jQuery plugin

$(document).ready(function() {

    cargarUsuarios();


});

const btnAbrirModal= document.querySelector("#btn-abrir-modal");
const btnCerrarModal= document.querySelector("#btn-cerrar-modal");
const modal= document.querySelector("#modal");

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})
btnCerrarModal.addEventListener("click",()=>{
    modal.close();
})

const btnAbrirEditarAdm= document.querySelector("#editarUsuario");
const btnCerrarEditarAdm= document.querySelector("#btn-cerrar-edModalAdm");
const modalEditarAdm= document.querySelector("#modalEdAdm");


btnAbrirEditarAdm.addEventListener("click",()=>{
    modalEditarAdm.showModal();
})
btnCerrarEditarAdm.addEventListener("click",()=>{
    modalEditarAdm.close();
})



function cargarUsuarios() {
    $.ajax({
            type: "GET",
            url:"http://localhost:8080/api/usuarios",
            dataType: "json",
            success: function (data) {
                $.each(data, function (i, item) {
                    let botonEliminar = "<button class='btn btn-danger' onclick='eliminarUsuario(" + item.id + ")'>Eliminar</button>";
                    let botonEditar = "<button class='btn btn-warning' id='editarUsuario' onclick='editarUsuario(" + item.id + ")'>Editar</button>";

                    let row = "<tr>" +
                        "<td>" + item.id + "</td>" +
                        "<td>" + item.nombre + "</td>" +
                        "<td>" + item.password + "</td>" +
                        "<td>" + botonEliminar+ " "+botonEditar+ " </td>" +

                        "</tr>";
                    $(row).appendTo("#tablaUsuarios tbody");
                });
            }
        }
    )
}
function eliminarUsuario(id) {
    Swal.fire({
        title: 'Eliminar Usuario',
        text: '¿Está seguro que desea eliminar el Usuario?',
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
                url: "http://localhost:8080/api/usuarios/" + id,
                success: function () {
                    Swal.fire({
                        title: 'Usuario eliminado',
                        text: 'El Usuario ha sido eliminado correctamente',
                        icon: 'success'
                    }).then(function () {
                        window.location.reload();
                    });
                }
            });
        }
    });
}



function crearUsuario() {
    let datos = {};

    datos.nombre = document.getElementById('nombreUsuario').value;
    datos.password = document.getElementById('contraseñaUsuario').value;

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/api/registrar",
        data: JSON.stringify(datos),
        contentType: "application/json",
        success: function () {
            modal.close();
            Swal.fire({
                icon: 'success',
                title: 'Usuario registrado correctamente',
                showConfirmButton: false,
                timer: 1500
            }).then(function () {
                window.location.reload();
            });
        }
    });
}

function volverLogin(){
    window.location.href = "login.html";
}


function  editarUsuario (id){

    $.ajax({
        type: "GET",
        url:"http://localhost:8080/api/buscarUsuario/"+ id,
        dataType: "json",
        success: function (data) {
            $("#idDeUsuario").val(data.id);
            $("#editarNombreAdm").val(data.nombre);
            $("#editarNacimientoAdm").val(data.password);


            document.getElementById("modalEdAdm").showModal();

        }
    })
}


function guardarPacienteEAdm() {
    let datos = {};
    UserId = document.getElementById('idDeUsuario').value;
    datos.nombre = $("#editarNombreAdm").val();
    datos.password = $("#editarNacimientoAdm").val();


    $.ajax({
        type: "PUT",
        url:"http://localhost:8080/api/editarUsuario/" + UserId,
        data: JSON.stringify(datos),
        contentType: "application/json",
        success: function () {

            modalEditarAdm.close();
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
            modalEditarAdm.close();
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al editar el paciente",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        }
    });
}
