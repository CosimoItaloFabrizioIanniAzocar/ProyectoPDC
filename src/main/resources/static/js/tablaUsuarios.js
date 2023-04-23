// Call the dataTables jQuery plugin
$(document).ready(function() {

  cargarUsuarios();

  $('#tablaUsuarios').DataTable();
});

async function cargarUsuarios (){

    const request = await fetch("/usuarios", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    const usuariosjson = await request.json();

    let listaUsuarios = "";
    for (let usuario of usuariosjson) {


        let usuariohtml = '<tr> <td>' + usuario.id + '</td> <td>' + usuario.nombre + '</td> <td>'+usuario.password+'</td > </tr>';


        listaUsuarios += usuariohtml;
        console.log(usuariosjson);

        document.querySelector("#tablaUsuarios").innerHTML = listaUsuarios;

    }
}