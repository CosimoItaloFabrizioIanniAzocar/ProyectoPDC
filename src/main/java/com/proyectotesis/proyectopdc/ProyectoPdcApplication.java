package com.proyectotesis.proyectopdc;

import com.proyectotesis.proyectopdc.CITA.models.Cita;
import com.proyectotesis.proyectopdc.UTILS.EmailSenderService;
import jakarta.mail.MessagingException;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import java.util.List;

@SpringBootApplication
public class ProyectoPdcApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProyectoPdcApplication.class, args);
    }

    @Autowired
    private EmailSenderService senderService;
    @PersistenceContext
    private EntityManager entityManager;

    @EventListener(ApplicationReadyEvent.class)
    public void triggerMail() throws MessagingException {

        // Prueba SonarCloud
        // Prueba SonarCloud
        // Prueba SonarCloud
        // Prueba SonarCloud
        List<Cita> citas = obtenerCitasProximaSemana();

        // Crear cuerpo del mensaje
        String table = "<div><table style=\"border: 1px solid black; border-collapse: collapse;\">"; // Agregamos el estilo CSS a la tabla
        String header = "<tr>";
        String headers = "<th style=\"border: 1px solid black; padding: 5px;\">Id</th><th style=\"border: 1px solid black; padding: 5px;\">Fecha</th><th style=\"border: 1px solid black; padding: 5px;\">Paciente</th>";
        header += headers + "</tr>";

        String body = "<tbody>";
        for (Cita cita : citas) {
            String row = "<tr>";
            String data = "<td style=\"border: 1px solid black; padding: 5px;\">" + cita.getIdPaciente() + "</td><td style=\"border: 1px solid black; padding: 5px;\">" + cita.getFecha() + "</td><td style=\"border: 1px solid black; padding: 5px;\">" + cita.getTipo() + "</td><td style=\"border: 1px solid black; padding: 5px;\">" + cita.getEstado() + "</td>";
            row += data + "</tr>";
            body += row;
        }
        body += "</tbody>";

        String htmlTable = table + header + body + "</table></div>";
        String message = "Citas de la próxima semana:\n\n" + htmlTable;
        senderService.sendSimpleEmail("proyectopdctesis@gmail.com", "Correo de pruebaaaaaaa", message);
    }


    private List<Cita> obtenerCitasProximaSemana() {
        String query = "FROM Cita";
        return entityManager.createQuery(query).getResultList();
    }
}
