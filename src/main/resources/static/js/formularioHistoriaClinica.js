
$(document).ready(function () {
    obtenerParametroURL();
});

function obtenerParametroURL(parametro) {
    let url = window.location.search.substring(1);
    let variables = url.split('&');
    for (let i = 0; i < variables.length; i++) {
        let par = variables[i].split('=');
        if (par[0] === parametro) {
            return par[1];
        }
    }
}
function registrarHistoria(){

    let datos = {};

    datos.idPaciente = obtenerParametroURL('id');
    datos.idCita = obtenerParametroURL('idcita');
    datos.nombreYapellido = document.getElementById('txtNombreApellido').value;
    datos.edad = document.getElementById('txtEdad').value;
    datos.fechaNacimiento = document.getElementById('txtFecha').value;
    datos.direccion = document.getElementById('txtDireccion').value;
    datos.telefono = document.getElementById('txtTelefono').value;
    datos.correo = document.getElementById('txtCorreo').value;
    datos.nombreMadre = document.getElementById('txtNombreMadre').value;
    datos.nombrePadre = document.getElementById('txtNombrePadre').value;
    datos.antecedentesPerinatales = document.getElementById('txtAntPerinatales').value;
    datos.antecedentesPatologicosMadre = document.getElementById('txtAntPatoMadre').value;
    datos.partoInstrumentalizado =  document.getElementById('opcionPartoInstru').value;
    datos.forceps = document.getElementById('opcionForceps').value;
    datos.cesareaProgramada = document.getElementById('opcionCesareaProgra').value;
    datos.emergencia = document.getElementById('opcionEmergencia').value;
    datos.porqueEmergencia = document.getElementById('txtPorqueEmergencia').value;
    datos.edadGestacional = document.getElementById('txtEdadGestacional').value;
    datos.pesos = document.getElementById('txtPeso').value;
    datos.talla = document.getElementById('txtTalla').value;
    datos.cc = document.getElementById('txtCc').value;
    datos.lloroRespiroNacer = document.getElementById('opcionLloroRespiro').value;
    datos.reanimacion = document.getElementById('opcionReanimacion').value;
    datos.porqueReanimacion = document.getElementById('txtPorqueReanimacion').value;
    datos.lactanciaMaterna = document.getElementById('opcionLactanciaMaterna').value;
    datos.formula = document.getElementById('opcionFormula').value;
    datos.mixta = document.getElementById('opcionMixta').value;
    datos.alimentacionComplementaria = document.getElementById('opcionComplemetaria').value;
        datos.recordatorioAlimentacion = document.getElementById('txtRecordatorio').value;
        datos.desarrolloPsicomotor = document.getElementById('txtPsicomotor').value;
        datos.desarrolloLenguaje = document.getElementById('txtLenguaje').value;
        datos.enfermedadesCronicas = document.getElementById('txtCronicas').value;
        datos.antecedentesFamiliares = document.getElementById('txtAntFamiliares').value;
        datos.intervencionQuirurgica = document.getElementById('txtQuirurgica').value;
        datos.alergiasAlimentos = document.getElementById('txtAlegiaAlimento').value;
        datos.alergiasMedicamentos = document.getElementById('txtAlegiaMedicamento').value;
        datos.historialVacunas = document.getElementById('txtVacuna').value;
        datos.otrosAntecedentesNoMencionados = document.getElementById('txtOtrosAnt').value;
        datos.motivoConsulta = document.getElementById('txtMotivo').value;
        datos.enfermedadActual = document.getElementById('txtEnfActual').value;
        datos.examenFisico = document.getElementById('txtExamenFisico').value;
        datos.impresionDiagnostica = document.getElementById('txtImDiagnositco').value;
        datos.tratamientoMedico = document.getElementById('txtTratmiento').value;
        datos.recomendaciones = document.getElementById('txtRecomendacion').value;
        datos.medidasPreventivas = document.getElementById('txtPreventivas').value;
        datos.proximaCita = document.getElementById('txtProximaCita').value;




    $.ajax({
        type: "POST",
        url: "http://localhost:8080/api/registrarHistoriaClinica",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(datos),
        success: function (datos) {


        }
    });
    alert("Historia Clinica Registrada");
    window.location.href='consulta.html?id=' + datos.idPaciente+"&idcita="+ datos.idCita;

}

