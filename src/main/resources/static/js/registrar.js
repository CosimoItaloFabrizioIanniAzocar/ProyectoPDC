// Call the dataTables jQuery plugin
$(document).ready(function() {

});

async function registrarUsuarios (){

    let datos = {};
    datos.nombre = document.getElementById('txtnombre').value;

    if(datos.nombre == ""){
        alert("Por favor ingrese un nombre");
        return;
    }
    datos.password = document.getElementById('txtpassword').value;

    if (datos.password == ""){
        alert("Por favor ingrese una contraseña");
        return;
    }

    let repetirPassword = document.getElementById('txtrepetirpassword').value;

    if(datos.password != repetirPassword){
        alert("Las contraseñas no coinciden");
        return;
    }else {

    const request = await fetch("api/registrar", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

     window.location.href = "login.html";
     alert("Usuario registrado con éxito, por favor inicie sesión");
    }


}

