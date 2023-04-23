// Call the dataTables jQuery plugin
$(document).ready(function() {

  cargarUsuarios();

  $('#tablaUsuarios').DataTable();
});

async function cargarUsuarios (){

    const request = await fetch("/prueba/123", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    const usuariosjson = await request.json();
    console.log(usuariosjson);

}