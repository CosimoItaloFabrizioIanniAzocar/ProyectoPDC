
$(document).ready(function () {
    obtenerParametroURL();
});

function obtenerParametroURL(parametro) {
    var url = window.location.search.substring(1);
    var variables = url.split('&');
    for (var i = 0; i < variables.length; i++) {
        var par = variables[i].split('=');
        if (par[0] === parametro) {
            return par[1];
        }
    }
    return null;
}


function crearHistoria(id){
    var id = obtenerParametroURL('id');
    window.location.href='formularioConsulta.html?id=' + id;
}