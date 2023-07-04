package com.proyectotesis.proyectopdc.UTILS.PAGOS;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "qr_images")
public class PagosQr {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "id_qr")
    private Long id;
    @Getter @Setter @Column(name = "link_qr")
    private String linkQr;
    @Getter @Setter @Column(name = "monto_qr")
    private float montoQr;
    @Getter @Setter @Column(name = "tipo_consulta")
    private String tipoConsulta;
    @Getter @Setter @Column(name = "nombre_qr")
    private String nombreQr;
    @Getter @Setter @Column(name = "imagen_qr")@Lob
    private byte[] imagenQr;
}
