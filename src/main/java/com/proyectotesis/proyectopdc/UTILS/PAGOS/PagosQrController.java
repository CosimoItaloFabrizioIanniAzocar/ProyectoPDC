package com.proyectotesis.proyectopdc.UTILS.PAGOS;


import com.proyectotesis.proyectopdc.CITA.dao.CitaDao;
import com.proyectotesis.proyectopdc.CITA.models.Cita;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import java.util.List;
import java.util.Optional;

@Controller
@RestController
public class PagosQrController {

    @Autowired
    private ImagenRepository imagenRepository;
    @Autowired
    private CitaDao citaDao;

    @GetMapping("/imagenes/{id}")
    public ResponseEntity<byte[]> mostrarImagen(@PathVariable Long id) {
        Optional<PagosQr> imagenOptional = imagenRepository.findById(id);
        if (imagenOptional.isPresent()) {
            PagosQr pagosqr = imagenOptional.get();
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_PNG)
                    .body(pagosqr.getImagenQr());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/guardarImagen")
    public void guardarImagen(@RequestParam("archivo") MultipartFile archivo,@RequestParam("linkQr")String linkqr, @RequestParam("MontoQr")float montoqr,@RequestParam("TipoDeConsulta")String tipoConsulta) throws IOException {
        PagosQr pagosqr = new PagosQr();
        pagosqr.setLinkQr(linkqr);
        pagosqr.setMontoQr(montoqr);
        pagosqr.setTipoConsulta(tipoConsulta);
        pagosqr.setNombreQr(archivo.getOriginalFilename());
        pagosqr.setImagenQr(archivo.getBytes());
        imagenRepository.save(pagosqr);
    }
    @DeleteMapping("/eliminarImagen/{id}")
    public void eliminarImagen(@PathVariable Long id) {
        imagenRepository.deleteById(id);
    }



    @GetMapping("/mostrarImagenes")
    @ResponseBody
    public List<PagosQr> mostrarImagenes() {
        return imagenRepository.findAll();
    }

    @RequestMapping(value = "api/asignarQr/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> asignarQr(@PathVariable int id) {
        try {
            // Obtener la cita de la base de datos utilizando el citaId
            Optional<Cita> citaOptional = Optional.ofNullable(citaDao.buscarCita(id));
            if (!citaOptional.isPresent()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cita no encontrada");
            }

            Cita cita = citaOptional.get();

            // Buscar el QR correspondiente al tipo de consulta de la cita
            PagosQr qr = imagenRepository.findByTipoConsulta(cita.getTipo());
            if (qr == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("QR no encontrado para el tipo de consulta");
            }

            return ResponseEntity.ok(qr);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al asignar el QR a la cita");
        }
    }
}
