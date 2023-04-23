// Call the dataTables jQuery plugin
$(document).ready(function() {

  cargarUsuarios();

  $('#tablaUsuarios').DataTable();
});

async function cargarUsuarios (){

    const request = await fetch("api/usuarios", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    const usuariosjson = await request.json();


    let listaUsuarios = "";
    for (let usuario of usuariosjson) {
        let botonEliminar = '<button type="button" class="btn btn-danger" onclick="eliminarUsuario('+usuario.id+')">Eliminar</button>';

        let usuariohtml = '<tr> <td>' + usuario.id + '</td> <td>' + usuario.nombre +
            '</td> <td>'+usuario.password+
            '</td> <td>'+botonEliminar+
            '</td > </tr>';


        listaUsuarios += usuariohtml;
        console.log(usuariosjson);

        document.querySelector("#tablaUsuarios").innerHTML = listaUsuarios;

    }
}

async function eliminarUsuario(id){

    if(!confirm("¿Está seguro de eliminar el usuario?")){
        return;
    }
    const request = await fetch("api/usuarios/"+id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

    document.location.reload();

}