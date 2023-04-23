// Call the dataTables jQuery plugin
$(document).ready(function() {

});

async function registrarUsuarios (){

    let datos = {};
    datos.nombre = document.getElementById('txtnombre').value;
    datos.password = document.getElementById('txtpassword').value;

    let repetirPassword = document.getElementById('txtrepetirpassword').value;

    if(datos.password != repetirPassword){
        alert("Las contraseñas no coinciden");
        return;
    }

    const request = await fetch("api/usuarios", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    const usuariosjson = await request.json();

}

