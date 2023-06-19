// Call the dataTables jQuery plugin
$(document).ready(function() {

});

async function iniciarSesion (){

    let datos = {};
    datos.nombre = document.getElementById('txtnombre').value;
    datos.password = document.getElementById('txtpassword').value;


    const request = await fetch("api/login", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    const respuesta = await request.text();

    if (respuesta === "OK"){
        window.location.href = "usuarios.html";
       }else{
        alert("Credenciales incorrectas, por favor intente nuevamente");
    }

}
