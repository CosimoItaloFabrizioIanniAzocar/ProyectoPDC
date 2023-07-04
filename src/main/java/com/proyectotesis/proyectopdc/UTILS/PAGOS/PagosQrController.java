package com.proyectotesis.proyectopdc.UTILS.PAGOS;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
    public String guardarImagen(@RequestParam("archivo") MultipartFile archivo) throws IOException {
        PagosQr pagosqr = new PagosQr();
        pagosqr.setLinkQr("http://localhost:8080/imagenes/1");
        pagosqr.setTipoConsulta("GET");
        pagosqr.setNombreQr(archivo.getOriginalFilename());
        pagosqr.setImagenQr(archivo.getBytes());
        imagenRepository.save(pagosqr);
        return "redirect:/pagoqr.html";
    }

    @GetMapping("/mostrarImagenes")
    @ResponseBody
    public List<PagosQr> mostrarImagenes() {
        return imagenRepository.findAll();
    }
}