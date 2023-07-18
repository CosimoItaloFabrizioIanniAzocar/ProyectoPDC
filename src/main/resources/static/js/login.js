// Call the dataTables jQuery plugin
const btnAbrirModal= document.querySelector("#btn-abrir-modal-adm");
const btnCerrarModal= document.querySelector("#btn-cerrar-modal-adm");
const modal= document.querySelector("#modal-adm");

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})
btnCerrarModal.addEventListener("click",()=>{
    modal.close();
})




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
        window.location.href = "pacientes.html";
       }else{
        alert("Credenciales incorrectas, por favor intente nuevamente");
    }

}

 function abrirPanel(){

     let datos = {};
     datos.nombre = document.getElementById('nombreUsuarioo').value;
     datos.password = document.getElementById('contraseñaUsuario').value;

     $.ajax({
         type: "POST",
         url:"http://localhost:8080/api/login",
         data: JSON.stringify(datos),
         contentType: "application/json",
         success: function (response) {

             if (response === "OK"){
                 window.location.href = "Administracion.html";
             }else{
                 alert("Credenciales incorrectas, por favor intente nuevamente");
             }
         }

     })
}
