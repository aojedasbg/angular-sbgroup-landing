import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsDataService {        
    public  iconGreen = 'assets/img/location-pointer.png';
    public  iconBlue = 'assets/img/location-blue.png';
    public  iconOrange = 'assets/img/location-orange.png';
    constructor() { }

    sbLogistics() {
        const contentString =
            '<div id="content-location" class="col-12">' +
                '<div class="row">' +
                    '<div class="col-md-4 img-pin elp-img">' +
                    "</div>" +
                    '<div class="col-md-8 a-color">' +
                        '<h5>Almacén El Paso <span class="pin-s">| Régimen: Nacional, Bonded</span></h5>' +
                        '<p>11350 James Watt Dr. El Paso, TX. 79936. | <a href="tel:19156331966">+1 (915) 633 1966</a> / <a href="tel:19156331977">+1 (915) 633 1977</a></p>'+
                        '<div class="col-12">' +
                            '<div class="row">' +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Área de almacén:</strong> 20,245.5 m²</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Altura libre:</strong> Punto más alto 22 m </p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Posiciones de Rack:</strong> 360 (1ton por palet)</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cortinas:</strong> 30</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampas:</strong> 2</p>'+
                                "</div>" +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Seguridad:</strong> CCTV 24 hrs, 365 días</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cámaras perimetrales:</strong> 6 </p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cámaras internas:</strong> 50 </p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Almacén “HAZ-MAT”:</strong> N/A</p>'+
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    '<div class="col-xl-12">' +
                        '<div class="table table--dgray">' +
                            '<div class="table__header green-table">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell"><strong>Beneficios</strong></div>' +
                                    '<div class="table__cell"><strong>Detalles</strong></div>' +
                                "</div>" +
                            "</div>" +	
                            '<div class="table__body">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Estacionamiento</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>25 Lugares de estacionamiento para empleados. 64 en área de visitantes y resguardo.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Sala de juntas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>2 Salas de juntas con capacidad de 6 y 8 personas, equipadas con audio y video.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Oficina</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>8 oficinas privadas, 1 área de oficina para 20 personas, 1 área de oficina para 10 personas</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Montacargas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>5 montacargas</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Patín hidráulico</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>5</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Salidas de emergencia</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>6</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Servicios</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>Electricidad, fumigación y limpieza</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Hardware</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>N/A</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Enlaces</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>N/A</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Repetidoras de señal</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>N/A</span></div>' +	
                                "</div>" +
                            "</div>" +	
                        "</div>" +
                    "</div>" +
                    '<div class="col-md-12 text-right top-20">' +
                        '<a class="button button--gray bottom-30" href="assets/img/fichas/elp.pdf" target="_blank" download="Almacén El Paso">Descargar ficha</a>' +
                    "</div>" +	
                "</div>" +		
            "</div>";
        const contentString2 =
            '<div id="content-location" class="col-12">' +
                '<div class="row">' +
                    '<div class="col-md-4 img-pin al-gdl-img">' +
                    "</div>" +
                    '<div class="col-md-8 a-color">' +
                        '<h5>Almacén Guadalajara <span class="pin-s">| Régimen: Nacional: IMMEX, Depósito fiscal</span></h5>' +
                        '<p>Av. Del Bosque 1190, C. López Cotilla, C.P. 45615. San Pedro Tlaquepaque, Jalisco, México. <a href="tel:523336124440">+52 (33) 3612 4440</a></p>'+
                        '<div class="col-12">' +
                            '<div class="row">' +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Área de almacén:</strong> 3,420 m²</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Altura libre:</strong> Punto más alto 15.25 m</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Posiciones de Rack:</strong> 4,154 (1ton x palet)</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cortinas:</strong> 6</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampas:</strong> 1</p>'+
                                "</div>" +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Seguridad:</strong> CCTV 24 hrs, 365 días</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cámaras perimetrales:</strong> 3</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cámaras internas:</strong> 15</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Almacén “HAZ-MAT”:</strong> Se adecua por proyecto</p>'+
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    '<div class="col-xl-12">' +
                        '<div class="table table--dgray">' +
                            '<div class="table__header green-table">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell"><strong>Beneficios</strong></div>' +
                                    '<div class="table__cell"><strong>Detalles</strong></div>' +
                                "</div>" +
                            "</div>" +	
                            '<div class="table__body">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Perímetro</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>3,638 m²</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Estacionamiento</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>4 lugares de estacionamiento para visitantes y resguardo. 12 lugares para empleados.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Sala de juntas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>218 m² de oficinas, 1 sala de juntas equipada con audio, vide y conexiones eléctricas para 8 personas</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Oficina</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>4 oficina privadas</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Montacargas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>1 double reach extension de horquillas a 2m y 10.13m de altura, 1 contrabalanceado hombre sentado eléctrico</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Patín hidráulico</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>3 con capacidad de 2.5 ton</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Salidas de emergencia</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>3</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Servicios</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>Electricidad, fumigación y limpieza</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Hardware</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>1 equipo Hand Held con conexión a WMS</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Enlaces</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>2 de respaldo Alestra, Coeficiente</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Repetidoras de señal</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>1 access point en almacén y 1 en oficina</span></div>' +	
                                "</div>" +
                            "</div>" +	
                        "</div>" +
                    "</div>" +
                    '<div class="col-md-12 text-right top-20">' +
                        '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-gdl.pdf" target="_blank" download="Almacén Guadalajara">Descargar ficha</a>' +
                    "</div>" +	
                "</div>" +		
            "</div>";	

            const contentString3 =
            '<div id="content-location" class="col-12">' +
                '<div class="row">' +
                    '<div class="col-md-4 img-pin gto-img">' +
                    "</div>" +
                    '<div class="col-md-8 a-color">' +
                        '<h5>Almacén Guanajuato <span class="pin-s">| Régimen: Nacional: IMMEX</span></h5>' +
                        '<p>Río Danubio #826, Irapuato, GTO, México C.P. 36810. | <a href="tel:524626937073">+52 (462) 693 7073</a></p>'+
                        '<div class="col-12">' +
                            '<div class="row">' +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Área de almacén:</strong> 3,819.14 m²</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Altura libre:</strong> Punto más alto 11 m, punto más bajo 8,7m</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Posiciones de Rack:</strong> 1,698 (1ton x palet)</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cortinas:</strong> 5</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampas:</strong> 1</p>'+
                                "</div>" +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Seguridad:</strong> CCTV 24 hrs, 365 días</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cámaras perimetrales:</strong> 14</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cámaras internas:</strong> 15</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Almacén “HAZ-MAT”:</strong> Se adecua por proyecto</p>'+
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    '<div class="col-xl-12">' +
                        '<div class="table table--dgray">' +
                            '<div class="table__header green-table">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell"><strong>Beneficios</strong></div>' +
                                    '<div class="table__cell"><strong>Detalles</strong></div>' +
                                "</div>" +
                            "</div>" +	
                            '<div class="table__body">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Perímetro</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>9,614.28 m²</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Estacionamiento</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>40 cajones para empleados, 3 para visitas, 1 para personas con capacidades diferentes con rampa.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Sala de juntas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>200 m² de oficinas, 1 sala de juntas con capacidad para 8 personas con conexiones eléctricas.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Oficina</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>3 oficinas privadas, 1 oficina coworking para 8 personas.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Montacargas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>1 double reach extension de horquillas a 2 m capacidad 5,000 lbs. 2 hombre sentado eléctrico con capacidad de 3,000 lbs.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Patín hidráulico</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>N/A</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Salidas de emergencia</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>3</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Servicios</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>Electricidad, fumigación y limpieza</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Hardware</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>2 equipos Hand Held con conexión a WMS</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Enlaces</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>2 enlaces Alestra Telmex</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Repetidoras de señal</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>3 access point en almacén</span></div>' +	
                                "</div>" +
                            "</div>" +	
                        "</div>" +
                    "</div>" +
                    '<div class="col-md-12 text-right top-20">' +
                        '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-bjx.pdf" target="_blank" download="Almacén Guanajuato">Descargar ficha</a>' +
                    "</div>" +	
                "</div>" +		
            "</div>";	

            const contentString4 =
            '<div id="content-location" class="col-12">' +
                '<div class="row">' +
                    '<div class="col-md-4 img-pin cjs-img">' +
                    "</div>" +
                    '<div class="col-md-8 a-color">' +
                        '<h5>Almacén Ciudad Juárez <span class="pin-s">| Régimen: Nacional: IMMEX</span></h5>' +
                        '<p>Calle Búfalo 551 Col. Municipio Libre, Cd. Juárez, Chihuahua, México C.P. 32575 <a href="tel:526561719098">+52 (656) 171 9098</a>  / <a href="tel:6561718091">(656) 171 8091</a> </p>'+
                        '<div class="col-12">' +
                            '<div class="row">' +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Área de almacén:</strong> 2,000 m²</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Altura libre:</strong> Punto más alto 8 m</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Posiciones de Rack:</strong> 990 (1ton x palet)</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cortinas:</strong> 3</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampas:</strong> 1</p>'+
                                "</div>" +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Seguridad:</strong> CCTV 24 hrs, 365 días</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cámaras perimetrales:</strong> 4</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cámaras internas:</strong> 12</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Almacén “HAZ-MAT”:</strong> Se adecua por proyecto</p>'+
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    '<div class="col-xl-12">' +
                        '<div class="table table--dgray">' +
                            '<div class="table__header green-table">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell"><strong>Beneficios</strong></div>' +
                                    '<div class="table__cell"><strong>Detalles</strong></div>' +
                                "</div>" +
                            "</div>" +	
                            '<div class="table__body">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Perímetro</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>2,390 m²</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Estacionamiento</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>32 lugares de estacionamiento para empleados, 1 rampa para discapacitados</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Sala de juntas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>20 m² de oficinas, 1 sala de juntas equipadas con audio, video y conexiones eléctricas para 6 personas</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Oficina</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>1 oficina privada</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Montacargas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>1 double reach extension de horquillas a 2m y 13m de altura, 1 contrabalanceado hombre sentado eléctrico</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Patín hidráulico</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>1 con capacidad de 2.5 ton eléctrico</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Salidas de emergencia</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>5</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Servicios</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>Electricidad, fumigación y limpieza</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Hardware</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>1 equipo Hand Held con conexión a WMS</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Enlaces</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>2 Telmex y Metrocarrier</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Repetidoras de señal</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>2 en almacén</span></div>' +	
                                "</div>" +
                            "</div>" +	
                        "</div>" +
                    "</div>" +
                    '<div class="col-md-12 text-right top-20">' +
                        '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-cjs.pdf" target="_blank" download="Almacén Ciudad Juárez">Descargar ficha</a>' +
                    "</div>" +	
                "</div>" +		
            "</div>";	

            const contentString5 =
            '<div id="content-location" class="col-12">' +
                '<div class="row">' +
                    '<div class="col-md-4 img-pin lrd-img">' +
                    "</div>" +
                    '<div class="col-md-8 a-color">' +
                        '<h5>Almacén Laredo <span class="pin-s">| Régimen: Nacional: Bonded, Hazmat</span></h5>' +
                        '<p>Killam Industrial Park, 12121 Doc Adams, ZC 78045. | <a href="tel:19565167680">+1 (956) 516 7680</a> </p>'+
                        '<div class="col-12">' +
                            '<div class="row">' +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Área de almacén:</strong> 6,000 m²</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Altura libre:</strong> Punto más alto 8 m</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Posiciones de Rack:</strong> N/A</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cortinas:</strong> 26</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampas:</strong> 2</p>'+
                                "</div>" +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Seguridad:</strong> CCTV 24 hrs, 365 días</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cámaras perimetrales:</strong> N/A</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cámaras internas:</strong> 15</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Almacén “HAZ-MAT”:</strong> Se adecua por proyecto</p>'+
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    '<div class="col-xl-12">' +
                        '<div class="table table--dgray">' +
                            '<div class="table__header green-table">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell"><strong>Beneficios</strong></div>' +
                                    '<div class="table__cell"><strong>Detalles</strong></div>' +
                                "</div>" +
                            "</div>" +	
                            '<div class="table__body">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Perímetro</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>8,000 m²</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Estacionamiento</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>30 cajones para empleados, 4 para visitas</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Sala de juntas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>20m²</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Oficina</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>1 oficina privada</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Montacargas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>4 de hombre sentado con capacidad de 4,500 lbs </span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Patín hidráulico</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>4</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Salidas de emergencia</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>3</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Servicios</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>Electricidad, fumigación y limpieza</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Hardware</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>1 equipo Hand Held con conexión a WMS</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Enlaces</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>Spectrum</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Repetidoras de señal</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>N/A</span></div>' +	
                                "</div>" +
                            "</div>" +	
                        "</div>" +
                    "</div>" +
                    '<div class="col-md-12 text-right top-20">' +
                        '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-lrd.pdf" target="_blank" download="Almacén Laredo">Descargar ficha</a>' +
                    "</div>" +	
                "</div>" +		
            "</div>";	

            const contentString6 =
            '<div id="content-location" class="col-12">' +
                '<div class="row">' +
                    '<div class="col-md-4 img-pin mex-img">' +
                    "</div>" +
                    '<div class="col-md-8 a-color">' +
                        '<h5>Almacén México <span class="pin-s">| Régimen: Nacional: Depósito fiscal</span></h5>' +
                        '<p>Av. Tejocotes, Agave 5 Col. San Martín Obispo, Cuautitlán Izcalli, Estado de México, C.P. 54763. <a href="tel:525553053319">+52 (55) 5305 3319</a> / <a href="tel:5553051080">(55) 5305 1080</a></p>'+
                        '<div class="col-12">' +
                            '<div class="row">' +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Área de almacén:</strong> 10,340 m²</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Altura libre:</strong> Punto más alto 13.40 mts</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Posiciones de Rack:</strong> 3,900 (1ton x palet)</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cortinas:</strong> 10</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampas:</strong> 1</p>'+
                                "</div>" +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Seguridad:</strong> CCTV 24 hrs, 365 días</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cámaras perimetrales:</strong> 31</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cámaras internas:</strong> 31</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Almacén “HAZ-MAT”:</strong> Se adecua por proyecto</p>'+
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    '<div class="col-xl-12">' +
                        '<div class="table table--dgray">' +
                            '<div class="table__header green-table">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell"><strong>Beneficios</strong></div>' +
                                    '<div class="table__cell"><strong>Detalles</strong></div>' +
                                "</div>" +
                            "</div>" +	
                            '<div class="table__body">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Perímetro</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>21,946 m²</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Estacionamiento</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>23 lugares de estacionamiento para visitantes y resguardo y 29 lugares para empleados.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Sala de juntas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>580m² de oficinas (1,160). 3 salas de juntas equipadas con audio, video y conexiones eléctricas. 2 con capacidad de 15 personas y 1 con capacidad para 30 personas.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Oficina</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>6 oficinas privadas. 1 oficina coworking con crucetas para 28 personas. 1 oficina coworking con crucetas para 24 personas.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Montacargas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>2 double reach extension de horquitas a 2 y 13 mes de altura. 1 contra balanceado hombre a pie.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Patín hidráulico</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>12 con capacidad de 1 ton</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Salidas de emergencia</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>7</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Servicios</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>Electricidad, fumigación y limpieza</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Hardware</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>10 equipos Hand Held con conexión a WMS.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Enlaces</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>3 enlaces de respaldo Alestra, Telmex y Total Play</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Repetidoras de señal</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>13 access point en almacén</span></div>' +	
                                "</div>" +
                            "</div>" +	
                        "</div>" +
                    "</div>" +
                    '<div class="col-md-12 text-right top-20">' +
                        '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-mex.pdf" target="_blank" download="Almacén México">Descargar ficha</a>' +
                    "</div>" +	
                "</div>" +		
            "</div>";	

            const contentString7 =
            '<div id="content-location" class="col-12">' +
                '<div class="row">' +
                    '<div class="col-md-4 img-pin mty-img">' +
                    "</div>" +
                    '<div class="col-md-8 a-color">' +
                        '<h5>Almacén Monterrey <span class="pin-s">| Régimen: Nacional: IMMEX</span></h5>' +
                        '<p>Industrial Park OMA VYNMSA Aero Industrial Park, Blvd Aeropuerto, KM 1 C.P 66660, Apodaca, Nuevo León. | <a href="tel:528180580312">+52 (81) 8058 0312</a></p>'+
                        '<div class="col-12">' +
                            '<div class="row">' +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Área de almacén:</strong> 12,300 m²</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Altura libre:</strong> Punto más alto 13.5 m</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Posiciones de Rack:</strong> 6,750 (1ton x palet)</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cortinas:</strong> 1</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampas:</strong> 10</p>'+
                                "</div>" +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Seguridad:</strong> CCTV 24 hrs, 365 días</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cámaras perimetrales:</strong> 19</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cámaras internas:</strong> 37</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Almacén “HAZ-MAT”:</strong> Se adecua por proyecto</p>'+
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    '<div class="col-xl-12">' +
                        '<div class="table table--dgray">' +
                            '<div class="table__header green-table">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell"><strong>Beneficios</strong></div>' +
                                    '<div class="table__cell"><strong>Detalles</strong></div>' +
                                "</div>" +
                            "</div>" +	
                            '<div class="table__body">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Perímetro</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>14,200 m²</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Estacionamiento</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>47 lugares de estacionamiento para empleados. 2 rampas para discapacitados.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Sala de juntas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>400 m² de oficinas. 2 salas de juntas equipadas con audio, video y conexiones eléctricas con capacidad de 8 personas.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Oficina</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>5 oficinas privadas.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Montacargas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>3 double reach extension de horquitas a 2m y 13m de altura. 2 contra balanceado hombre hombre sentado. 1 order picker.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Patín hidráulico</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>4 con capacidad de 2.5 ton</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Salidas de emergencia</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>8</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Servicios</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>Electricidad, fumigación y limpieza</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Hardware</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>4 equipos Hand Held con conexión a WMS</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Enlaces</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>2 enlaces Alestra Telmex</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Repetidoras de señal</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>6 access point en almacén</span></div>' +	
                                "</div>" +
                            "</div>" +	
                        "</div>" +
                    "</div>" +
                    '<div class="col-md-12 text-right top-20">' +
                        '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-mty.pdf" target="_blank" download="Almacén Monterrey">Descargar ficha</a>' +
                    "</div>" +	
                "</div>" +		
            "</div>";

            const contentString8 =
            '<div id="content-location" class="col-12">' +
                '<div class="row">' +
                    '<div class="col-md-4 img-pin tjn-img">' +
                    "</div>" +
                    '<div class="col-md-8 a-color">' +
                        '<h5>Almacén Tijuana <span class="pin-s">| Régimen: Nacional: IMMEX</span></h5>' +
                        '<p>Andador del Rey 20051, Parque Ind El Girasol, Tijuana, BC 22215 | <a href="tel:523336124440">+52 (33) 3612 4440</a></p>'+
                        '<div class="col-12">' +
                            '<div class="row">' +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Área de almacén:</strong> 1,000 m²</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Altura libre:</strong> Punto más alto 10 m</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Posiciones de Rack:</strong> 500 (1ton por palet)</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cortinas:</strong> 1</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampas:</strong> 2</p>'+
                                "</div>" +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Seguridad:</strong> CCTV 24 hrs, 365 días</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Cámaras de seguridad:</strong> 10</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> N/A</p>'+
                                    '<p><img src="assets/img/btn1.png" alt="image"> <strong>Almacén “HAZ-MAT”:</strong> Se adecua por proyecto</p>'+
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    '<div class="col-xl-12">' +
                        '<div class="table table--dgray">' +
                            '<div class="table__header green-table">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell"><strong>Beneficios</strong></div>' +
                                    '<div class="table__cell"><strong>Detalles</strong></div>' +
                                "</div>" +
                            "</div>" +	
                            '<div class="table__body">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Perímetro</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>1,200 m²</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Estacionamiento</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>5 lugares de estacionamiento para empleados. Área de visitantes.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Sala de juntas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>N/A</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Oficina</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>3 oficinas privadas</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Montacargas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>2 hombre sentado, 2 ton</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Patín hidráulico</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>3</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Salidas de emergencia</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>Sí</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Servicios</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>Electricidad, fumigación y limpieza</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Hardware</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>N/A</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Enlaces</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>N/A</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Repetidoras de señal</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>N/A</span></div>' +	
                                "</div>" +
                            "</div>" +	
                        "</div>" +
                    "</div>" +
                    '<div class="col-md-12 text-center top-20">' +
                        '<a class="button button--gray bottom-30" href="assets/img/fichas/tijuana.pdf" target="_blank" download="Almacén Tijuana">Descargar ficha</a>' +
                    "</div>" +	
                "</div>" +		
            "</div>";

            const contentString9 =
            '<div class="col-12">' +
                '<div class="row">' +
                    '<div class="col-md-12 list-pin">' +
                        '<h5>Oficina Mérida</h5>' +
                        '<p><img src="assets/img/btn3.png" alt="image"> Correo: sales@sbgroup.com.mx</p>' +
                        '<p><img src="assets/img/btn3.png" alt="image"> Tel: 33 3612 4440</p>' +
                    "</div>" +	
                "</div>" +		
            "</div>";		

            const contentString10 =
            '<div class="col-12">' +
                '<div class="row">' +
                    '<div class="col-md-12 list-pin">' +
                        '<h5>Oficina Puebla</h5>' +
                        '<p><img src="assets/img/btn3.png" alt="image"> Correo: sales@sbgroup.com.mx</p>' +
                        '<p><img src="assets/img/btn3.png" alt="image"> Tel: 33 3612 4440</p>' +
                    "</div>" +	
                "</div>" +		
            "</div>";	

            const contentString11 =
            '<div class="col-12">' +
                '<div class="row">' +
                    '<div class="col-md-12 list-pin">' +
                        '<h5>Oficina Querétaro</h5>' +
                        '<p><img src="assets/img/btn3.png" alt="image"> Correo: sales@sbgroup.com.mx</p>' +
                        '<p><img src="assets/img/btn3.png" alt="image"> Tel: 33 3612 4440</p>' +
                    "</div>" +	
                "</div>" +		
            "</div>";

            const contentString12 =
            '<div class="col-12">' +
                '<div class="row">' +
                    '<div class="col-md-12 list-pin">' +
                        '<h5>Oficina Chihuahua</h5>' +
                        '<p><img src="assets/img/btn3.png" alt="image"> Correo: sales@sbgroup.com.mx</p>' +
                        '<p><img src="assets/img/btn3.png" alt="image"> Tel: 33 3612 4440</p>' +
                    "</div>" +	
                "</div>" +		
            "</div>";

        return {
        lat: 23.634501, 
        lng: -102.552788,
        zoom: 5,
        markersFeatureds: [{
            content: contentString,
            location: {
            lat: 31.742970,
            lng: -106.319050,
            },
            type: this.iconGreen,
            id: 1,
        }, {	
            content: contentString2,
            location: {
            lat:20.5767,
            lng: -103.3678,
            },
            type: this.iconGreen,
            id: 2
        }, {
            content: contentString3,
            location: {
            lat: 20.67675,
            lng: -101.35628,
            },
            type: this.iconGreen,
            id: 3
        }, {
            content: contentString4,
            location: {
            lat: 31.08333,
            lng: -108.08333,
            },
            type: this.iconGreen,
            id: 4
        }, {
            content: contentString5,
            location: {
            lat: 27.624154,
            lng: -99.504726,
            },
            type: this.iconGreen,
            id: 5
        }, {
            content: contentString6,
            location: {
            lat: 19.64388,
            lng: -99.21598,
            },
            type: this.iconGreen,
            id: 6
        }, {
            content: contentString7,
            location: {
            lat: 25.75976,
            lng: -100.16287,
            },
            type: this.iconGreen,
            id: 7
        }, {
            content: contentString8,
            location: {
            lat: 32.5027,
            lng: -117.00371,
            },
            type: this.iconGreen,
            id: 8
        }, {
            content: contentString9,
            location: {
            lat: 20.9670759,
            lng: -89.6237402,
            },
            type: this.iconBlue,
            id: 9
        }, {
            content: contentString10,
            location: {
            lat: 18.833333,
            lng: -98,
            },
            type: this.iconBlue,
            id: 10
        }, {
            content: contentString11,
            location: {
            lat: 20.8542575,
            lng: -99.84756,
            },
            type: this.iconBlue,
            id: 11
        }, {
            content: contentString12,
            location: {
            lat: 28.5000001,
            lng: -106.0000001,
            },
            type: this.iconBlue,
            id: 12
        }],

        }
    }

    engSbLogistics() {
        
        const contentString =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin elp-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>El Paso, Tx <span class="pin-s">| Storage regime: National, Bonded Warehouse</span></h5>' +
                    '<p>11350 James Watt Dr. El Paso, TX. 79936. | <a href="tel:19156331966">+1 (915) 633 1966</a> / <a href="tel:19156331977">+1 (915) 633 1977</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 20,245.5 m²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 22 m</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> 60 (1ton por palet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 30</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 2</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter cameras:</strong> 6</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Internal cameras:</strong> 50</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> N/A</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>25 parking spaces for employes, 64 parking spaces for visitors</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2 Conference room with audio, video and electrical connections with capacity for 6 and 8 persons</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>8 private offices, 1 coworking for 20 people, 1 coworking for 10 people</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>5</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>5</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>6</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>N/A</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/elp-eng.pdf" target="_blank" download="El Paso, Tx">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";
    const contentString2 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin al-gdl-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Guadalajara <span class="pin-s">| Storage regime: National, IMMEX, Bonded Warehouse</span></h5>' +
                    '<p>Av. Del Bosque 1190, C. López Cotilla, C.P. 45615. San Pedro Tlaquepaque, Jalisco, México. <a href="tel:523336124440">+52 (33) 3612 4440</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 36,812 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 50 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> 4,154 (2,200 lb per pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 6</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 1</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter cameras:</strong> 3</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Internal cameras:</strong> 15</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>39,159 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>4 Parking spaces for visits, 12 Parking spaces for employes</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2,346 ft² Offices area, 1 Conference room with audio, video and electrical connections with capacity for 8 persons</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>4 Private offices</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 Double Reach fork extension (6 ft & 32ft), 1 Counter balanced seated man 1 order picker</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>1 (5,500 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>3</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>3 Hand Held with WMS conection</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>2 Alestra links</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 access point in warehouse</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-gdl-eng.pdf" target="_blank" download="Guadalajara">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString3 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin gto-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Guanajuato <span class="pin-s">| Storage regime: Nacional, IMMEX</span></h5>' +
                    '<p>Río Danubio #826, Irapuato, GTO, México C.P. 36810. | <a href="tel:524626937073">+52 (462) 693 7073</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 41,107 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 36 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> 1,698 (2,200 lb per pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 5</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 1</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter cameras:</strong> 14</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Internal cameras:</strong> 15</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>9,614.28 m²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>30 parking spaces for employes, 3 parking spaces for visitors, 1 disabled ramps</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2,152 m² offices area, 1 conference room with audio, video and electrical connections with capacity for 8 persons</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>3 private offices, 1 coworking office for 8 people</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 Double Reach fork extension (6 ft) 2 Counter balanced seated man 1 order picker</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>3</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2 Hand Held with WMS conection</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>2 Alestra and Telmex links</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>3 Access point in warehouse</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-gto-eng.pdf" target="_blank" download="Guanajuato">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString4 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin cjs-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Ciudad Juárez <span class="pin-s">| Storage regime: Nacional: IMMEX</span></h5>' +
                    '<p>Calle Búfalo 551 Col. Municipio Libre, Cd. Juárez, Chihuahua, México C.P. 32575 <a href="tel:526561719098">+52 (656) 171 9098</a>  / <a href="tel:6561718091">(656) 171 8091</a> </p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 21, 527 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 26 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> 990 (2,200 lb per pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 3</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 1</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter cameras:</strong> 4</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Internal cameras:</strong> 12</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>25, 725 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>32 Parking spaces for employes, 1 Disabled ramps</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>215 ft² Offices area, 1 Conference room with audio, video and electrical connections with capacity for 6 persons</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>1 private office</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 Double Reach fork extension (6 ft & 42 ft, 1 Counter balanced seated man 1 order picker</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>1 (5,500 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>5</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 Hand Held with WMS conection</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>2 Telmex and Metrocarrier</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2 Access point in warehouse</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-cjs-eng.pdf" target="_blank" download="Ciudad Juárez">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString5 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin lrd-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Laredo, TX <span class="pin-s">| Storage regime: National, Bonded Warehouse, Hazmat</span></h5>' +
                    '<p>Killam Industrial Park, 12121 Doc Adams, ZC 78045. | <a href="tel:19565167680">+1 (956) 516 7680</a> </p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 64,583.5 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 26 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> N/A</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 26</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 2</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter cameras:</strong> N/A</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Internal cameras:</strong> 15</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>86,111.3 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>30 parking spaces for employes, 4 parking spaces for visitors</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>215 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>1 private office</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>4 Counter balanced seated man (4500 lbs)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>4</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>3</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 equipo Hand Held con conexión a WMS</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Spectrum</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>N/A</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-lrd-eng.pdf" target="_blank" download="Laredo, TX">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString6 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin mex-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>México <span class="pin-s">| Storage regime: National, Bonded Warehouse</span></h5>' +
                    '<p>Av. Tejocotes, Agave 5 Col. San Martín Obispo, Cuautitlán Izcalli, Estado de México, C.P. 54763. <a href="tel:525553053319">+52 (55) 5305 3319</a> / <a href="tel:5553051080">(55) 5305 1080</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 111,299 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 42 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> 3,900 (2,200 lb per pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 10</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 1</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter cameras:</strong> 31</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Internal cameras:</strong> 31</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>121,621.42 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>23 Parking spaces for visits, 29 Parking spaces for employes</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>23 Parking spaces for visits, 29 Parking spaces for employes</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>6 private offices, 1 coworking office with spacers for 28 people, 1 coworking office with spacers for 24 people</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 Double Reach fork extension (6 ft & 39ft), 1 Counter balanced seated man 1 order picker</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>12 (2,200 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>7</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>3 Hand Held with WMS conection</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>3 backup links Alestra, Telmex, Total play</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>13 access point in warehouse</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-mex-eng.pdf" target="_blank" download="México">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString7 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin mty-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Monterrey <span class="pin-s">| Storage Regime: National, IMMEX</span></h5>' +
                    '<p>Industrial Park OMA VYNMSA Aero Industrial Park, Blvd Aeropuerto, KM 1 C.P 66660, Apodaca, Nuevo León. | <a href="tel:528180580312">+52 (81) 8058 0312</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 132,396 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 44 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> 6,750 (2,200 lb per pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 10</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 1</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter cameras:</strong> 19</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Internal cameras:</strong> 37</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>152, 847 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>47 parking spaces for employes, 2 disabled ramps</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>43,055 ft² offices area, 2 conference room with audio, video and electrical connections with a capacity for 8 persons</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>6 private offices</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>3 Double Reach fork extension (6 and 42 ft), 2 Counter balanced seated man, 1 order picker</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>4 ( 5,500 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>8</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>4 Hand Held with WMS conection</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>2 Alestra Telmex links</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>6 Access point in warehouse</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-mty-eng.pdf" target="_blank" download="Monterrey">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        const contentString8 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin tjn-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Tijuana <span class="pin-s">| Storage regime: Nacional, IMMEX</span></h5>' +
                    '<p>Andador del Rey 20051, Parque Ind El Girasol, Tijuana, BC 22215 | <a href="tel:523336124440">+52 (33) 3612 4440</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 10,000 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 32 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> (2,200 lb por pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 1</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 2</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Surveillance cameras:</strong> 10</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> N/A</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>12,916 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>5 parking spaces for employes, Visitors area</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>3 private offices</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2 (4,400 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>3</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>Yes</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>N/A</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-center top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/tijuana-eng.pdf" target="_blank" download="Tijuana">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        const contentString9 =
        '<div class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-12 list-pin">' +
                    '<h5>Mérida Office</h5>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Email: sales@sbgroup.com.mx</p>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Phone: 33 3612 4440</p>' +
                "</div>" +	
            "</div>" +		
        "</div>";		

        const contentString10 =
        '<div class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-12 list-pin">' +
                    '<h5>Puebla Office</h5>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Email: sales@sbgroup.com.mx</p>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Phone: 33 3612 4440</p>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString11 =
        '<div class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-12 list-pin">' +
                    '<h5>Querétaro Office</h5>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Email: sales@sbgroup.com.mx</p>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Phone: 33 3612 4440</p>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        const contentString12 =
        '<div class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-12 list-pin">' +
                    '<h5>Chihuahua Office</h5>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Email: sales@sbgroup.com.mx</p>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Phone: 33 3612 4440</p>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        return {
            lat: 23.634501, 
            lng: -102.552788,
            zoom: 5,
            markersFeatureds : [
                {
                    content: contentString,
                    location: {
                    lat: 31.742970,
                    lng: -106.319050,
                    },
                    type: this.iconGreen,
                    id: 1,
                }, {	
                    content: contentString2,
                    location: {
                    lat:20.5767,
                    lng: -103.3678,
                    },
                    type: this.iconGreen,
                    id: 2
                }, {
                    content: contentString3,
                    location: {
                    lat: 20.67675,
                    lng: -101.35628,
                    },
                    type: this.iconGreen,
                    id: 3
                }, {
                    content: contentString4,
                    location: {
                    lat: 31.08333,
                    lng: -108.08333,
                    },
                    type: this.iconGreen,
                    id: 4
                }, {
                    content: contentString5,
                    location: {
                    lat: 27.624154,
                    lng: -99.504726,
                    },
                    type: this.iconGreen,
                    id: 5
                }, {
                    content: contentString6,
                    location: {
                    lat: 19.64388,
                    lng: -99.21598,
                    },
                    type: this.iconGreen,
                    id: 6
                }, {
                    content: contentString7,
                    location: {
                    lat: 25.75976,
                    lng: -100.16287,
                    },
                    type: this.iconGreen,
                    id: 7
                }, {
                    content: contentString8,
                    location: {
                    lat: 32.5027,
                    lng: -117.00371,
                    },
                    type: this.iconGreen,
                    id: 8
                }, {
                    content: contentString9,
                    location: {
                    lat: 20.9670759,
                    lng: -89.6237402,
                    },
                    type: this.iconBlue,
                    id: 9
                }, {
                    content: contentString10,
                    location: {
                    lat: 18.833333,
                    lng: -98,
                    },
                    type: this.iconBlue,
                    id: 10
                }, {
                    content: contentString11,
                    location: {
                    lat: 20.8542575,
                    lng: -99.84756,
                    },
                    type: this.iconBlue,
                    id: 11
                }, {
                    content: contentString12,
                    location: {
                    lat: 28.5000001,
                    lng: -106.0000001,
                    },
                    type: this.iconBlue,
                    id: 12
                }
            ]
        }
    }

    sbFreeTrade() {

        const contentString = '<div id="content-location" class="col-12">' +
                '<div class="row">' +
                    '<div class="col-md-4 img-pin fri-img">' +
                    "</div>" +
                    '<div class="col-md-8 a-color">' +
                        '<h5>Recinto Fiscalizado Estrategico “Frigo” Jalisco</h5>' +
                        '<p>Av Acueducto Km 5.5. #7584 Col Santa Cruz del Valle, Tlajomulco de Zúñiga, Jalisco. CP: 45655. <a href="tel:523322827066">+52 (33) 2282 7066</a></p>'+
                        '<div class="col-12">' +
                            '<div class="row">' +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Área de almacén:</strong> 5,000 m², 3,200 m² área refrigerada, 1,800 m² área seca</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Altura libre:</strong> Punto más alto 9.05 m</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Posiciones de Rack:</strong> 2,166 c/ altura de 2.45m (7 cámaras)</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Cortinas:</strong> 10 refrígeradas y 1 seca</p>'+
                                "</div>" +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Rampas:</strong> 9</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Seguridad:</strong> CCTV 24 hrs, 365 días</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Cámaras perimetrales:</strong> 24</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Cámaras internas:</strong> 16</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Almacén “HAZ-MAT”:</strong> Se adecua por proyecto</p>'+
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    '<div class="col-xl-12">' +
                        '<div class="table table--dgray">' +
                            '<div class="table__header orange-table">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell"><strong>Beneficios</strong></div>' +
                                    '<div class="table__cell"><strong>Detalles</strong></div>' +
                                "</div>" +
                            "</div>" +	
                            '<div class="table__body">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Perímetro</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>21,946 m²</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Estacionamiento</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>23 lugares de estacionamiento para visitantes y resguardo y 29 lugares para empleados.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Sala de juntas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>580m2 de oficinas (1,160). 3 salas de juntas equipadas con audio, video y conexiones eléctricas. 2 con capacidad de 15 personas y 1 con capacidad para 30 personas.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Oficina</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>6 oficinas privadas. 1 oficina coworking con crucetas para 28 personas. 1 oficina coworking con crucetas para 24 personas.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Montacargas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>2 double reach extension de horquitas a 2 y 13 mes de altura. 1 contra balanceado hombre a pie.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Patín hidráulico</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>12 con capacidad de 1 ton</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Salidas de emergencia</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>7</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Servicios</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>Electricidad, fumigación y limpieza</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Hardware</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>10 equipos Hand Held con conexión a WMS.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Enlaces</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>3 enlaces de respaldo Alestra, Telmex y Total Play</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Repetidoras de señal</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>13 access point en almacén</span></div>' +	
                                "</div>" +
                            "</div>" +	
                        "</div>" +
                    "</div>" +
                    '<div class="col-md-12 text-right top-20">' +
                        '<a class="button button--gray bottom-20" href="assets/img/fichas/sbz-fri.pdf" target="_blank" download="Recinto Fiscalizado Estrategico “Frigo” Jalisco">Descargar ficha</a>' +
                    "</div>" +	
                "</div>" +		
            "</div>";

            const contentString2 =
            '<div id="content-location" class="col-12">' +
                '<div class="row">' +
                    '<div class="col-md-4 img-pin sbz-gto-img">' +
                    "</div>" +
                    '<div class="col-md-8 a-color">' +
                        '<h5>Recinto Fiscalizado / Recinto Fiscalizado Estratégico “GTO Logistics Center” Guanajuato</h5>' +
                        '<div class="col-12">' +
                            '<div class="row">' +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Área de almacén:</strong> 5,137.93 m²</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Altura libre:</strong> Punto más alto 17 m, punto más bajo 12m</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Posiciones de Rack:</strong> 880 (1ton por palet)</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Cámaras perimetrales:</strong> 45</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Andén:</strong> 1 con 7 docks, 4 cortinas, 8 rampas mecánicas, 1 rampa sobredimensionada</p>'+
                                "</div>" +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Seguridad:</strong> CCTV 24 hrs, 365 días</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Cámara de refrigeración: </strong> 468m² a -5º y 80 posiciones</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Rayos X:</strong> Sí</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Cámaras internas:</strong> 60</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Software:</strong> ERP-SIRF para RFE WMS-CargoWise</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Almacén “HAZ-MAT”:</strong> Rack con 50 posiciones</p>'+
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    '<div class="col-xl-12">' +
                        '<div class="table table--dgray">' +
                            '<div class="table__header orange-table">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell"><strong>Beneficios</strong></div>' +
                                    '<div class="table__cell"><strong>Detalles</strong></div>' +
                                "</div>" +
                            "</div>" +	
                            '<div class="table__body">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Perímetro</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>13,295.52 m²</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Estacionamiento</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>32 cajones para empleados, 8 para visitas, 1 para personas con capacidades diferentes, rampa.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Sala de juntas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>1 sala de juntas de 55m2 para 20 personas, equipada con audio, video y conexiones eléctricas.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Oficina</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>6 oficinas privadas, 15 oficinas privadas para arrendatarios, 1 oficina coworking para 30 personas.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Patín hidráulico</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>3 con capacidad de 3 ton</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Salidas de emergencia</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>4</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Servicios</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>Electricidad, fumigación y limpieza</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Hardware</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>Equipos de cómputo, impresora de etiquetas, Hand Held con conexión a ERP</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Enlaces</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>2 enlaces a Telmex y Alestra</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Repetidoras de señal</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>8 access point</span></div>' +	
                                "</div>" +
                            "</div>" +	
                        "</div>" +
                    "</div>" +
                    '<div class="col-md-12 text-right top-20">' +
                        '<a class="button button--gray bottom-20" href="assets/img/fichas/sbz-gto.pdf" target="_blank" download="Recinto Fiscalizado Estratégico “GTO Logistics Center” Guanajuato">Descargar ficha</a>' +
                    "</div>" +	
                "</div>" +		
            "</div>";

            const contentString3 =
            '<div id="content-location" class="col-12">' +
                '<div class="row">' +
                    '<div class="col-md-4 img-pin sbz-gdl-img">' +
                    "</div>" +
                    '<div class="col-md-8 a-color">' +
                        '<h5>Recinto Fiscalizado Estrategico “Arbrus” Jalisco</h5>' +
                        '<p>Vialidad Privada Guadalajara No. 307 KM. 11+034.11 Carretera Libre (Acatlán-Ciudad Guzman) C.P. 45713 Acatlán de Juarez, Jal. Mex</a></p>'+
                        '<div class="col-12">' +
                            '<div class="row">' +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Área de almacén:</strong> 2,600 m²</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Altura libre:</strong> Punto más alto 10.5 m</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Posiciones de Rack:</strong> N/A</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Andén:</strong> 1 con: 7 docks, 4 cortinas, 1 rampa</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Seguridad:</strong> CCTV 24 hrs, 365 días</p>'+
                                "</div>" +
                                '<div class="col-md-6 list-pin">' +
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Cámaras perímetrales:</strong> 28</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Cámaras internas:</strong> 13</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                    '<p><img src="assets/img/btn2.png" alt="icon"> <strong>Almacén “HAZ-MAT”:</strong> Se adecua por proyecto</p>'+
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    '<div class="col-xl-12">' +
                        '<div class="table table--dgray">' +
                            '<div class="table__header orange-table">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell"><strong>Beneficios</strong></div>' +
                                    '<div class="table__cell"><strong>Detalles</strong></div>' +
                                "</div>" +
                            "</div>" +	
                            '<div class="table__body">' +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Perímetro</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>13,000 m²</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Estacionamiento</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>15 cajones para empleados, 15 cajones para visitas.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Sala de juntas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>200 m2 de oficinas, 1 sala de juntas con capacidad para 10 personas con conexiones eléctricas.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Oficina</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>200 m2 de oficinas, 1 sala de juntas con capacidad para 10 personas con conexiones eléctricas.</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Montacargas</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>1 SC contra balanceado hombre sentado 1,100 kg y 1RR/RD retráctil sencillo 1,100 kg</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Suministro eléctrico</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>110v/220v para todos los casos</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Patín hidráulico</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>1 con capacidad de 3 ton</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Salidas de emergencia</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>4</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Servicios</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"<span>Electricidad, fumigación y limpieza</span></div>' +	
                                "</div>" +
                                '<div class="table__row">' +
                                    '<div class="table__cell  data-label="Beneficios"><span>Hardware</span></div>' +
                                    '<div class="table__cell  data-label="Detalles"><span>Equipos de cómputo, impresora de etiquetas, Hand Held con conexión a ERP</span></div>' +	
                                "</div>" +
                            "</div>" +	
                        "</div>" +
                    "</div>" +
                    '<div class="col-md-12 text-right top-20">' +
                        '<a class="button button--gray bottom-20" href="assets/img/fichas/sbz-gdl.pdf" target="_blank" download="Recinto Fiscalizado Estrategico “Arbrus” Jalisco">Descargar ficha</a>' +
                    "</div>" +	
                "</div>" +		
            "</div>";
        
        return {
            lat: 23.634501, 
            lng: -102.552788,
            zoom: 5,
            markersFeatureds: [
                {
                    content: contentString,
                    location: {
                    lat: 20.6272315,
                    lng: -103.4006509,
                    },
                    type: this.iconOrange,
                    id: 1
                }, {
                    content: contentString2,
                    location: {
                    lat: 20.7,
                    lng: -101.3,
                    },
                    type: this.iconOrange,
                    id: 2
                }, {
                    content: contentString3,
                    location: {
                    lat: 20.4239705,
                    lng: -103.6013032,
                    },
                    type: this.iconOrange,
                    id: 3
                }
            ],
    
        }
    }

    engFreeTrade() {
        const contentString =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin fri-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Frigo - Jalisco <span class="pin-s">| Storage Regime: National, refrigerated and dry</span></h5>' +
                    '<p>Av Acueducto Km 5.5. #7584 Col Santa Cruz del Valle, Tlajomulco de Zúñiga, Jalisco. CP: 45655. <a href="tel:523322827066">+52 (33) 2282 7066</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Warehouse area:</strong> 53,819 ft², - 34,444.5 ft² refrigerated surface, - 19,375 ft² of dry surface</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Height:</strong> Highest point 29.5 ft</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Rack positions:</strong> 2,166 height of 8 ft (7 chambers)</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Docks:</strong> 10 refrigerated and 1 dry</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Ramps:</strong> 9</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Perimeter cameras:</strong> 24</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Internal cameras:</strong> 16</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header orange-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>374,056 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>10 parking spaces for employes, 8 parking spaces for visitors</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>279 ft² Offices area, 1 Conference room with audio, video and electrical connections with capacity for 10 persons</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>1 private offices office area for 9 people</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2 Electric 5,000 lb with 21ft of height man seated</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>5 (5,511 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>Computer equipment, label printer, Hand Held ERP with connection</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>2 Telmex and Alestra links</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>3 Access point</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-20" href="assets/img/fichas/sbz-fri-eng.pdf" target="_blank" download="Frigo-Jalisco">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        const contentString2 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin sbz-gto-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Inland Port - Guanajuato <span class="pin-s">| Storage regime: Inland Port / Free Trade Zone</span></h5>' +
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Warehouse area:</strong> 55,304 ft²</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Height:</strong> Highest point 56 ft, Lowest point 39 ft</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Rack positions:</strong> 880 (1ton por palet)</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Perimeter cameras:</strong> 45</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Platform:</strong> 1 with: 7 Docks, 4 Curtains, 8 Mechanical Ramps, 1 Oversized Ramp</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Cooling chamber:</strong> 5,037.5 ft² (41 °F) with 80 places</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>X-rays:</strong> Allowed</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Internal cameras:</strong> 60</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Software:</strong> ERP - SIRF For FTZ WMS – CargoWise</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Rack with 50 positions · Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header orange-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>143,112 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>32 parking spaces for employes, 8 parking spaces for visitors, 1 disabled ramps</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 Conference room with audio, video and electrical connections with capacity for 20 persons</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>6 private offices, 15 private offices for tenants, 1 coworking office for 30 people</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2 (3,500 lbs & 15ft)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>3 (6,613 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>4</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>Computer equipment, label printer, Hand Held ERP with connection</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>2 links Telmex and Alestra</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>8 access point</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-20" href="assets/img/fichas/sbz-gto-eng.pdf" target="_blank" download="Inland Port - Guanajuato">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        const contentString3 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin sbz-gdl-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Jalisco <span class="pin-s">| Storage Regime: National, refrigerated and dry</span></h5>' +
                    '<p>Vialidad Privada Guadalajara No. 307 KM. 11+034.11 Carretera Libre (Acatlán-Ciudad Guzman) C.P. 45713 Acatlán de Juarez, Jal. Mex</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Warehouse area:</strong> 27,986 ft²</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Height:</strong> Highest point 34.5 ft</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Rack positions:</strong> N/A</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Docks:</strong> 1 with 7 Docks, 4 Curtains, 1 Ramp</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Perimeter cameras:</strong> 28</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Internal cameras:</strong> 13</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header orange-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>139,930 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>15 parking spaces for employes, 15 parking spaces for visitors</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2,152 ft² Offices area, 1 Conference room with audio, video and electrical connections with capacity for 10 persons</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>2 floors, 4 private offices, Operations area</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 Counterbalanced seated man 2,425 lb, 1 RR/RD simple retractable 2425 lb</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Electrical supply</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>110v/220v</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>1 (6,613 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>4</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>Computer equipment, label printer, Hand Held ERP with connection</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-20" href="assets/img/fichas/sbz-gdl-eng.pdf" target="_blank" download="Jalisco">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";
        return {
            lat: 23.634501, 
            lng: -102.552788,
            zoom: 5,
            markersFeatureds: [
                {
                    content: contentString,
                    location: {
                    lat: 20.6272315,
                    lng: -103.4006509,
                    },
                    type: this.iconGreen,
                }, {
                    content: contentString2,
                    location: {
                    lat: 20.7,
                    lng: -101.3,
                    },
                    type: this.iconGreen,
                }, {
                    content: contentString3,
                    location: {
                    lat: 20.4239705,
                    lng: -103.6013032,
                    },
                    type: this.iconGreen,
                }
            ],
    
        }

    }

    deuFreeTrade() {
        const contentString =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin fri-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Frigo - Jalisco <span class="pin-s">| Lagerregime: National, gekühlt und trocken</span></h5>' +
                    '<p>Av Acueducto Km 5.5. #7584 Col Santa Cruz del Valle, Tlajomulco de Zúñiga, Jalisco. CP: 45655. <a href="tel:523322827066">+52 (33) 2282 7066</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Lagerbereich:</strong> 53,819 ft², - 34,444.5 ft² refrigerated surface, - 19,375 ft² of dry surface</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Höhe:</strong> Highest point 29.5 ft</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Rackpositionen:</strong> 2,166 height of 8 ft (7 chambers)</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Docks:</strong> 10 gekühlt und 1 trocken</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Rampen:</strong> 9</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Sicherheit:</strong> CCTV 24 Stunden 365 Tage</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Perimeter-Kameras:</strong> 24</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Interne Kameras:</strong> 16</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>“HazMat” Warenhaus:</strong> Nach Projekt anpassbar</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header orange-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Leistungen</strong></div>' +
                                '<div class="table__cell"><strong>Einzelheiten</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>374,056 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Parkplatz</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>10 Parkplätze für Mitarbeiter, 8 Parkplätze für Besucher</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Konferenzraum</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>279 ft² Bürobereich, 1 Konferenzraum mit Audio-, Video- und elektrischen Anschlüssen für 10 Personen</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Büro</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>1 Bürobereich für Privatbüros für 9 Personen</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Gabelstapler</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>2 Electric 5.000 lb mit 21 ft Körpergröße Mann sitzt</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hydraulikschlittschuh</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>5 (5,511 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Notausgang</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>2</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Dienstleistungen</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>Strom, Begasung und Reinigung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>Computerausrüstung, Etikettendrucker, Handheld-ERP mit Anschluss</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>2 Telmex and Alestra links</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Signalverstärker</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>3 Zugangspunkt</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-20" href="assets/img/fichas/sbz-fri-eng.pdf" target="_blank" download="Frigo-Jalisco">Datenblatt herunterladen</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        const contentString2 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin sbz-gto-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Inland Port - Guanajuato <span class="pin-s">| Lagerregime: Binnenhafen / Free Trade Zone</span></h5>' +
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Lagerbereich:</strong> 55,304 ft²</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Höhe:</strong> Highest point 56 ft, Lowest point 39 ft</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Rackpositionen:</strong> 880 (1ton por palet)</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Perimeter-Kameras:</strong> 45</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Plattform:</strong> 1 mit: 7 Docks, 4 Vorhängen, 8 mechanischen Rampen, 1 übergroßen Rampe</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Sicherheit:</strong> CCTV 24 Stunden 365 Tage</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Kühlkammer:</strong> 5,037.5 ft² (41 °F) with 80 places</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>X-rays:</strong> Allowed</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Interne Kameras:</strong> 60</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Software:</strong> ERP - SIRF For FTZ WMS – CargoWise</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>“HazMat” Warenhaus:</strong> Rack with 50 positions · Nach Projekt anpassbar</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header orange-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Leistungen</strong></div>' +
                                '<div class="table__cell"><strong>Einzelheiten</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>143,112 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Parkplatz</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>32 Parkplätze für Angestellte, 8 Parkplätze für Besucher, 1 behindertengerechte Rampe</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Konferenzraum</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>1 Konferenzraum mit Audio-, Video- und elektrischen Anschlüssen für 20 Personen</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Büro</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>6 Privatbüros, 15 Privatbüros für Mieter, 1 Coworking Office für 30 Personen</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Gabelstapler</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>2 (3,500 lbs & 15ft)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hydraulikschlittschuh</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>3 (6,613 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Notausgang</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>4</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Dienstleistungen</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>Strom, Begasung und Reinigung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>Computerausrüstung, Etikettendrucker, Handheld-ERP mit Anschluss</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>2 links Telmex and Alestra</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Signalverstärker</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>8 Zugangspunkt</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-20" href="assets/img/fichas/sbz-gto-eng.pdf" target="_blank" download="Inland Port - Guanajuato">Datenblatt herunterladen</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        const contentString3 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin sbz-gdl-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Jalisco <span class="pin-s">| Lagerregime: National, gekühlt und trocken</span></h5>' +
                    '<p>Vialidad Privada Guadalajara No. 307 KM. 11+034.11 Carretera Libre (Acatlán-Ciudad Guzman) C.P. 45713 Acatlán de Juarez, Jal. Mex</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Lagerbereich:</strong> 27,986 ft²</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Höhe:</strong> Highest point 34.5 ft</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Rackpositionen:</strong> N/A</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Docks:</strong> 1 mit 7 Docks, 4 Vorhängen, 1 Rampe</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Sicherheit:</strong> CCTV 24 Stunden 365 Tage</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Perimeter-Kameras:</strong> 28</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Interne Kameras:</strong> 13</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn2.png" alt="image"> <strong>“HazMat” Warenhaus:</strong> Nach Projekt anpassbar</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header orange-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Leistungen</strong></div>' +
                                '<div class="table__cell"><strong>Einzelheiten</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>139,930 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Parkplatz</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>15 Parkplätze für Angestellte, 15 Parkplätze für Besucher</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Konferenzraum</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>2.152 ft² Bürofläche, 1 Konferenzraum mit Audio-, Video- und Elektroanschlüssen für 10 Personen</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Büro</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>2 Etagen, 4 Privatbüros, Betriebsbereich</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Gabelstapler</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>1 Gegengewicht sitzender Mann 2,425 lb, 1 RR / RD einfach einziehbar 2425 lb</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Electrical supply</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>110v/220v</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hydraulikschlittschuh</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>1 (6,613 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Notausgang</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>4</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Dienstleistungen</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>Strom, Begasung und Reinigung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>Computerausrüstung, Etikettendrucker, Handheld-ERP mit Anschluss</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-20" href="assets/img/fichas/sbz-gdl-eng.pdf" target="_blank" download="Jalisco">Datenblatt herunterladen</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        return {
            lat: 23.634501, 
            lng: -102.552788,
            zoom: 5,
            markersFeatureds: [
                {
                    content: contentString,
                    location: {
                        lat: 20.6272315,
                        lng: -103.4006509,
                    },
                    type: this.iconGreen,
                    id: 1
                }, {
                    content: contentString2,
                    location: {
                        lat: 20.7,
                        lng: -101.3,
                    },
                    type: this.iconGreen,
                    id: 2
                }, {
                    content: contentString3,
                    location: {
                        lat: 20.4239705,
                        lng: -103.6013032,
                    },
                    type: this.iconGreen,
                    id: 3
                }
            ],
    
        }
    }

    deuSbLogistics() {
        const contentString =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin elp-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>El Paso, Tx <span class="pin-s">| Lagerregime: Nationales Zolllager</span></h5>' +
                    '<p>11350 James Watt Dr. El Paso, TX. 79936. | <a href="tel:19156331966">+1 (915) 633 1966</a> / <a href="tel:19156331977">+1 (915) 633 1977</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Lagerbereich:</strong> 20,245.5 m²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Höhe:</strong> Höchster Punkt 22 m</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rackpositionen:</strong> 60 (1ton por palet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 30</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampen:</strong> 2</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Sicherheit:</strong> CCTV 24 Stunden 365 Tage</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter-Kameras:</strong> 6</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Interne Kameras:</strong> 50</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warenhaus:</strong> N/A</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Leistungen</strong></div>' +
                                '<div class="table__cell"><strong>Einzelheiten</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Parkplatz</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>25 Parkplätze für Mitarbeiter, 64 Parkplätze für Besucher</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Konferenzraum</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>2 Konferenzraum mit Audio-, Video- und elektrischen Anschlüssen für 6 und 8 Personen</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Büro</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>8 private Büros, 1 Coworking für 20 Personen, 1 Coworking für 10 Personen</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Gabelstapler</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>5</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hydraulikschlittschuh</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>5</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Notausgang</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>6</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Dienstleistungen</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>Strom, Begasung und Reinigung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Signalverstärker</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>N/A</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/elp-eng.pdf" target="_blank" download="El Paso, Tx">Datenblatt herunterladen</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";
    const contentString2 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin al-gdl-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Guadalajara <span class="pin-s">| Lagerregime: National, IMMEX, Bonded Warehouse</span></h5>' +
                    '<p>Av. Del Bosque 1190, C. López Cotilla, C.P. 45615. San Pedro Tlaquepaque, Jalisco, México. <a href="tel:523336124440">+52 (33) 3612 4440</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Lagerbereich:</strong> 36,812 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Höhe:</strong> Höchster Punkt 50 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rackpositionen:</strong> 4.154 (2.200 Pfund pro Palette)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 6</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampen:</strong> 1</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Sicherheit:</strong> CCTV 24 Stunden 365 Tage</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter-Kameras:</strong> 3</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Interne Kameras:</strong> 15</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warenhaus:</strong> Nach Projekt anpassbar</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Leistungen</strong></div>' +
                                '<div class="table__cell"><strong>Einzelheiten</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>39,159 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Parkplatz</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>4 Parkplätze für Besuche, 12 Parkplätze für Angestellte</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Konferenzraum</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>2.346 ft² Bürobereich, 1 Konferenzraum mit Audio-, Video- und elektrischen Anschlüssen für 8 Personen</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Büro</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>4 Privatbüros</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Gabelstapler</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>1 Gabelverlängerung mit doppelter Reichweite (6 Fuß und 32 Fuß), 1 sitzender Mann mit Gegengewicht 1 Kommissionierer</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hydraulikschlittschuh</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>1 (5,500 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Notausgang</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>3</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Dienstleistungen</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>Strom, Begasung und Reinigung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>3 Handheld mit WMS-Verbindung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>2 Alestra links</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Signalverstärker</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>1 Zugangspunkt im Lager</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-gdl-eng.pdf" target="_blank" download="Guadalajara">Datenblatt herunterladen</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString3 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin gto-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Guanajuato <span class="pin-s">| Speicherregime: Nacional, IMMEX</span></h5>' +
                    '<p>Río Danubio #826, Irapuato, GTO, México C.P. 36810. | <a href="tel:524626937073">+52 (462) 693 7073</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Lagerbereich:</strong> 41,107 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Höhe:</strong> Highest point 36 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rackpositionen:</strong> 1,698 (2,200 lb per pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 5</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampen:</strong> 1</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Sicherheit:</strong> CCTV 24 Stunden 365 Tage</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter-Kameras:</strong> 14</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Interne Kameras:</strong> 15</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warenhaus:</strong> Nach Projekt anpassbar</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Leistungen</strong></div>' +
                                '<div class="table__cell"><strong>Einzelheiten</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>9,614.28 m²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Parkplatz</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>30 Parkplätze für Angestellte, 3 Parkplätze für Besucher, 1 behindertengerechte Rampe</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Konferenzraum</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>2.152 m² Bürofläche, 1 Konferenzraum mit Audio-, Video- und Stromanschluss für 8 Personen</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Büro</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>3 Privatbüros, 1 Coworking Office für 8 Personen</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Gabelstapler</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>1 Gabelverlängerung mit doppelter Reichweite (6 Fuß) 2 Sitzender Mann mit Gegengewicht 1 Kommissionierer</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hydraulikschlittschuh</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Notausgang</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>3</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Dienstleistungen</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>Strom, Begasung und Reinigung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>2 Handheld mit WMS-Verbindung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>2 Alestra and Telmex links</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Signalverstärker</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>3 Zugangspunkt im Warenhaus</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-gto-eng.pdf" target="_blank" download="Guanajuato">Datenblatt herunterladen</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString4 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin cjs-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Ciudad Juárez <span class="pin-s">| Speicherregime: Nacional: IMMEX</span></h5>' +
                    '<p>Calle Búfalo 551 Col. Municipio Libre, Cd. Juárez, Chihuahua, México C.P. 32575 <a href="tel:526561719098">+52 (656) 171 9098</a>  / <a href="tel:6561718091">(656) 171 8091</a> </p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Lagerbereich:</strong> 21, 527 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Höhe:</strong> Highest point 26 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rackpositionen:</strong> 990 (2,200 lb per pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 3</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampen:</strong> 1</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Sicherheit:</strong> CCTV 24 Stunden 365 Tage</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter-Kameras:</strong> 4</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Interne Kameras:</strong> 12</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warenhaus:</strong> Nach Projekt anpassbar</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Leistungen</strong></div>' +
                                '<div class="table__cell"><strong>Einzelheiten</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>25, 725 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Parkplatz</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>32 Parkplätze für Arbeitnehmer, 1 behindertengerechte Rampen</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Konferenzraum</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>215 ft² Bürobereich, 1 Konferenzraum mit Audio-, Video- und elektrischen Anschlüssen für 6 Personen</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Büro</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>1 private office</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Gabelstapler</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>1 Gabelverlängerung mit doppelter Reichweite (6 Fuß und 42 Fuß, 1 Mann mit Gegengewicht und 1 Kommissionierer</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hydraulikschlittschuh</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>1 (5,500 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Notausgang</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>5</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Dienstleistungen</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>Strom, Begasung und Reinigung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>1 Handheld mit WMS-Verbindung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>2 Telmex and Metrocarrier</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Signalverstärker</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>2 Zugangspunkt im Warenhaus</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-cjs-eng.pdf" target="_blank" download="Ciudad Juárez">Datenblatt herunterladen</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString5 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin lrd-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Laredo, TX <span class="pin-s">| Storage regime: National, Bonded Warehouse, Hazmat</span></h5>' +
                    '<p>Killam Industrial Park, 12121 Doc Adams, ZC 78045. | <a href="tel:19565167680">+1 (956) 516 7680</a> </p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Lagerbereich:</strong> 64,583.5 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Höhe:</strong> Highest point 26 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rackpositionen:</strong> N/A</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 26</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampen:</strong> 2</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Sicherheit:</strong> CCTV 24 Stunden 365 Tage</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter-Kameras:</strong> N/A</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Interne Kameras:</strong> 15</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warenhaus:</strong> Nach Projekt anpassbar</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Leistungen</strong></div>' +
                                '<div class="table__cell"><strong>Einzelheiten</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>86,111.3 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Parkplatz</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>30 Parkplätze für Mitarbeiter, 4 Parkplätze für Besucher</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Konferenzraum</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>215 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Büro</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>1 privates Büro</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Gabelstapler</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>4 Ausgeglichener sitzender Mann (4500 lbs)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hydraulikschlittschuh</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>4</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Notausgang</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>3</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Dienstleistungen</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>Strom, Begasung und Reinigung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>1 Handgerät mit WMS-Verbindung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>Spectrum</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Signalverstärker</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>N/A</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-lrd-eng.pdf" target="_blank" download="Laredo, TX">Datenblatt herunterladen</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString6 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin mex-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>México <span class="pin-s">| Storage regime: National, Bonded Warehouse</span></h5>' +
                    '<p>Av. Tejocotes, Agave 5 Col. San Martín Obispo, Cuautitlán Izcalli, Estado de México, C.P. 54763. <a href="tel:525553053319">+52 (55) 5305 3319</a> / <a href="tel:5553051080">(55) 5305 1080</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Lagerbereich:</strong> 111,299 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Höhe:</strong> Highest point 42 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rackpositionen:</strong> 3,900 (2,200 lb per pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 10</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampen:</strong> 1</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Sicherheit:</strong> CCTV 24 Stunden 365 Tage</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter-Kameras:</strong> 31</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Interne Kameras:</strong> 31</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warenhaus:</strong> Nach Projekt anpassbar</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Leistungen</strong></div>' +
                                '<div class="table__cell"><strong>Einzelheiten</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>121,621.42 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Parkplatz</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>23 Parkplätze für Besuche, 29 Parkplätze für Arbeitnehmer</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Konferenzraum</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>23 Parkplätze für Besuche, 29 Parkplätze für Arbeitnehmer</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Büro</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>6 Privatbüros, 1 Coworking Office mit Abstandhaltern für 28 Personen, 1 Coworking Office mit Abstandshaltern für 24 Personen</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Gabelstapler</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>1 Gabelverlängerung mit doppelter Reichweite (6 Fuß und 39 Fuß), 1 Mann mit ausgeglichenem Gegengewicht und 1 Kommissionierer</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hydraulikschlittschuh</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>12 (2,200 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Notausgang</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>7</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Dienstleistungen</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>Strom, Begasung und Reinigung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>3 Handheld mit WMS-Verbindung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>3 backup links Alestra, Telmex, Total play</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Signalverstärker</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>13 Zugangspunkt im Warenhaus</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-mex-eng.pdf" target="_blank" download="México">Datenblatt herunterladen</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString7 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin mty-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Monterrey <span class="pin-s">| Storage Regime: National, IMMEX</span></h5>' +
                    '<p>Industrial Park OMA VYNMSA Aero Industrial Park, Blvd Aeropuerto, KM 1 C.P 66660, Apodaca, Nuevo León. | <a href="tel:528180580312">+52 (81) 8058 0312</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Lagerbereich:</strong> 132,396 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Höhe:</strong> Highest point 44 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rackpositionen:</strong> 6,750 (2,200 lb per pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 10</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampen:</strong> 1</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Sicherheit:</strong> CCTV 24 Stunden 365 Tage</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter-Kameras:</strong> 19</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Interne Kameras:</strong> 37</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warenhaus:</strong> Nach Projekt anpassbar</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Leistungen</strong></div>' +
                                '<div class="table__cell"><strong>Einzelheiten</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>152, 847 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Parkplatz</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>47 Parkplätze für Arbeitnehmer, 2 behindertengerechte Rampen</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Konferenzraum</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>43.055 ft² Bürofläche, 2 Konferenzräume mit Audio-, Video- und elektrischen Anschlüssen für 8 Personen</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Büro</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>6 private Büros</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Gabelstapler</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>3 Gabelverlängerung mit doppelter Reichweite (6 und 42 Fuß), 2 Mann mit Gegengewicht, 1 Kommissionierer</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hydraulikschlittschuh</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>4 ( 5,500 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Notausgang</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>8</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Dienstleistungen</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>Strom, Begasung und Reinigung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>4 Handheld mit WMS-Verbindung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>2 Alestra Telmex links</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Signalverstärker</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>6 Zugangspunkt im Warenhaus</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-mty-eng.pdf" target="_blank" download="Monterrey">Datenblatt herunterladen</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        const contentString8 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin tjn-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Tijuana <span class="pin-s">| Storage regime: Nacional, IMMEX</span></h5>' +
                    '<p>Andador del Rey 20051, Parque Ind El Girasol, Tijuana, BC 22215 | <a href="tel:523336124440">+52 (33) 3612 4440</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Lagerbereich:</strong> 10,000 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Höhe:</strong> Highest point 32 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rackpositionen:</strong> (2,200 lb por pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 1</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rampen:</strong> 2</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Sicherheit:</strong> CCTV 24 Stunden 365 Tage</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Surveillance cameras:</strong> 10</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> N/A</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warenhaus:</strong> Nach Projekt anpassbar</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Leistungen</strong></div>' +
                                '<div class="table__cell"><strong>Einzelheiten</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>12,916 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Parkplatz</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>5 Parkplätze für Mitarbeiter, Besucherbereich</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Konferenzraum</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Büro</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>3 private Büros</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Gabelstapler</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>2 (4,400 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hydraulikschlittschuh</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>3</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Notausgang</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>Yes</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Dienstleistungen</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>Strom, Begasung und Reinigung</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"<span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Leistungen"><span>Signalverstärker</span></div>' +
                                '<div class="table__cell  data-label="Einzelheiten"><span>N/A</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-center top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/tijuana-eng.pdf" target="_blank" download="Tijuana">Datenblatt herunterladen</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        const contentString9 =
        '<div class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-12 list-pin">' +
                    '<h5>Büro von Mérida</h5>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Email: sales@sbgroup.com.mx</p>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Phone: 33 3612 4440</p>' +
                "</div>" +	
            "</div>" +		
        "</div>";		

        const contentString10 =
        '<div class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-12 list-pin">' +
                    '<h5>Büro von Puebla</h5>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Email: sales@sbgroup.com.mx</p>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Phone: 33 3612 4440</p>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString11 =
        '<div class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-12 list-pin">' +
                    '<h5>Büro von Querétaro</h5>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Email: sales@sbgroup.com.mx</p>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Phone: 33 3612 4440</p>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        const contentString12 =
        '<div class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-12 list-pin">' +
                    '<h5>Büro von Chihuahua</h5>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Email: sales@sbgroup.com.mx</p>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Phone: 33 3612 4440</p>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        return {
            lat: 23.634501, 
            lng: -102.552788,
            zoom: 5,
            markersFeatureds: [
                {
                    content: contentString,
                    location: {
                        lat: 31.742970,
                        lng: -106.319050,
                    },
                    type: this.iconGreen,
                    id: 1,
                }, {	
                    content: contentString2,
                    location: {
                    lat:20.5767,
                    lng: -103.3678,
                    },
                    type: this.iconGreen,
                    id: 2
                }, {
                    content: contentString3,
                    location: {
                    lat: 20.67675,
                    lng: -101.35628,
                    },
                    type: this.iconGreen,
                    id: 3
                }, {
                    content: contentString4,
                    location: {
                    lat: 31.08333,
                    lng: -108.08333,
                    },
                    type: this.iconGreen,
                    id: 4
                }, {
                    content: contentString5,
                    location: {
                    lat: 27.624154,
                    lng: -99.504726,
                    },
                    type: this.iconGreen,
                    id: 5
                }, {
                    content: contentString6,
                    location: {
                    lat: 19.64388,
                    lng: -99.21598,
                    },
                    type: this.iconGreen,
                    id: 6
                }, {
                    content: contentString7,
                    location: {
                    lat: 25.75976,
                    lng: -100.16287,
                    },
                    type: this.iconGreen,
                    id: 7
                }, {
                    content: contentString8,
                    location: {
                    lat: 32.5027,
                    lng: -117.00371,
                    },
                    type: this.iconGreen,
                    id: 8
                }, {
                    content: contentString9,
                    location: {
                    lat: 20.9670759,
                    lng: -89.6237402,
                    },
                    type: this.iconBlue,
                    id: 9
                }, {
                    content: contentString10,
                    location: {
                    lat: 18.833333,
                    lng: -98,
                    },
                    type: this.iconBlue,
                    id: 10
                }, {
                    content: contentString11,
                    location: {
                    lat: 20.8542575,
                    lng: -99.84756,
                    },
                    type: this.iconBlue,
                    id: 11
                }, {
                    content: contentString12,
                    location: {
                    lat: 28.5000001,
                    lng: -106.0000001,
                    },
                    type: this.iconBlue,
                    id: 12
                }
            ],
    
        }
    }

    digitalSbLogistics() {
        const contentString =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin elp-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>El Paso, Tx <span class="pin-s">| Storage regime: National, Bonded Warehouse</span></h5>' +
                    '<p>11350 James Watt Dr. El Paso, TX. 79936. | <a href="tel:19156331966">+1 (915) 633 1966</a> / <a href="tel:19156331977">+1 (915) 633 1977</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 20,245.5 m²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 22 m</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> 60 (1ton por palet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 30</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 2</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter cameras:</strong> 6</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Internal cameras:</strong> 50</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> N/A</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>25 parking spaces for employes, 64 parking spaces for visitors</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2 Conference room with audio, video and electrical connections with capacity for 6 and 8 persons</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>8 private offices, 1 coworking for 20 people, 1 coworking for 10 people</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>5</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>5</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>6</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>N/A</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/elp-eng.pdf" target="_blank" download="El Paso, Tx">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";
    const contentString2 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin al-gdl-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Guadalajara <span class="pin-s">| Storage regime: National, IMMEX, Bonded Warehouse</span></h5>' +
                    '<p>Av. Del Bosque 1190, C. López Cotilla, C.P. 45615. San Pedro Tlaquepaque, Jalisco, México. <a href="tel:523336124440">+52 (33) 3612 4440</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 36,812 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 50 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> 4,154 (2,200 lb per pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 6</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 1</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter cameras:</strong> 3</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Internal cameras:</strong> 15</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>39,159 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>4 Parking spaces for visits, 12 Parking spaces for employes</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2,346 ft² Offices area, 1 Conference room with audio, video and electrical connections with capacity for 8 persons</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>4 Private offices</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 Double Reach fork extension (6 ft & 32ft), 1 Counter balanced seated man 1 order picker</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>1 (5,500 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>3</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>3 Hand Held with WMS conection</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>2 Alestra links</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 access point in warehouse</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-gdl-eng.pdf" target="_blank" download="Guadalajara">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString3 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin gto-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Guanajuato <span class="pin-s">| Storage regime: Nacional, IMMEX</span></h5>' +
                    '<p>Río Danubio #826, Irapuato, GTO, México C.P. 36810. | <a href="tel:524626937073">+52 (462) 693 7073</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 41,107 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 36 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> 1,698 (2,200 lb per pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 5</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 1</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter cameras:</strong> 14</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Internal cameras:</strong> 15</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>9,614.28 m²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>30 parking spaces for employes, 3 parking spaces for visitors, 1 disabled ramps</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2,152 m² offices area, 1 conference room with audio, video and electrical connections with capacity for 8 persons</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>3 private offices, 1 coworking office for 8 people</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 Double Reach fork extension (6 ft) 2 Counter balanced seated man 1 order picker</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>3</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2 Hand Held with WMS conection</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>2 Alestra and Telmex links</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>3 Access point in warehouse</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-gto-eng.pdf" target="_blank" download="Guanajuato">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString4 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin cjs-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Ciudad Juárez <span class="pin-s">| Storage regime: Nacional: IMMEX</span></h5>' +
                    '<p>Calle Búfalo 551 Col. Municipio Libre, Cd. Juárez, Chihuahua, México C.P. 32575 <a href="tel:526561719098">+52 (656) 171 9098</a>  / <a href="tel:6561718091">(656) 171 8091</a> </p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 21, 527 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 26 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> 990 (2,200 lb per pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 3</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 1</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter cameras:</strong> 4</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Internal cameras:</strong> 12</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>25, 725 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>32 Parking spaces for employes, 1 Disabled ramps</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>215 ft² Offices area, 1 Conference room with audio, video and electrical connections with capacity for 6 persons</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>1 private office</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 Double Reach fork extension (6 ft & 42 ft, 1 Counter balanced seated man 1 order picker</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>1 (5,500 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>5</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 Hand Held with WMS conection</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>2 Telmex and Metrocarrier</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2 Access point in warehouse</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-cjs-eng.pdf" target="_blank" download="Ciudad Juárez">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString5 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin lrd-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Laredo, TX <span class="pin-s">| Storage regime: National, Bonded Warehouse, Hazmat</span></h5>' +
                    '<p>Killam Industrial Park, 12121 Doc Adams, ZC 78045. | <a href="tel:19565167680">+1 (956) 516 7680</a> </p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 64,583.5 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 26 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> N/A</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 26</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 2</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter cameras:</strong> N/A</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Internal cameras:</strong> 15</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>86,111.3 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>30 parking spaces for employes, 4 parking spaces for visitors</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>215 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>1 private office</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>4 Counter balanced seated man (4500 lbs)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>4</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>3</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 equipo Hand Held con conexión a WMS</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Spectrum</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>N/A</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-lrd-eng.pdf" target="_blank" download="Laredo, TX">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString6 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin mex-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>México <span class="pin-s">| Storage regime: National, Bonded Warehouse</span></h5>' +
                    '<p>Av. Tejocotes, Agave 5 Col. San Martín Obispo, Cuautitlán Izcalli, Estado de México, C.P. 54763. <a href="tel:525553053319">+52 (55) 5305 3319</a> / <a href="tel:5553051080">(55) 5305 1080</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 111,299 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 42 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> 3,900 (2,200 lb per pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 10</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 1</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter cameras:</strong> 31</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Internal cameras:</strong> 31</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>121,621.42 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>23 Parking spaces for visits, 29 Parking spaces for employes</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>23 Parking spaces for visits, 29 Parking spaces for employes</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>6 private offices, 1 coworking office with spacers for 28 people, 1 coworking office with spacers for 24 people</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>1 Double Reach fork extension (6 ft & 39ft), 1 Counter balanced seated man 1 order picker</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>12 (2,200 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>7</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>3 Hand Held with WMS conection</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>3 backup links Alestra, Telmex, Total play</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>13 access point in warehouse</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-mex-eng.pdf" target="_blank" download="México">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString7 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin mty-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Monterrey <span class="pin-s">| Storage Regime: National, IMMEX</span></h5>' +
                    '<p>Industrial Park OMA VYNMSA Aero Industrial Park, Blvd Aeropuerto, KM 1 C.P 66660, Apodaca, Nuevo León. | <a href="tel:528180580312">+52 (81) 8058 0312</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 132,396 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 44 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> 6,750 (2,200 lb per pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 10</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 1</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Perimeter cameras:</strong> 19</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Internal cameras:</strong> 37</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> WMS Cargo Wise</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>152, 847 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>47 parking spaces for employes, 2 disabled ramps</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>43,055 ft² offices area, 2 conference room with audio, video and electrical connections with a capacity for 8 persons</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>6 private offices</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>3 Double Reach fork extension (6 and 42 ft), 2 Counter balanced seated man, 1 order picker</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>4 ( 5,500 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>8</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>4 Hand Held with WMS conection</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>2 Alestra Telmex links</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>6 Access point in warehouse</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-right top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/sbl-mty-eng.pdf" target="_blank" download="Monterrey">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        const contentString8 =
        '<div id="content-location" class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-4 img-pin tjn-img">' +
                "</div>" +
                '<div class="col-md-8 a-color">' +
                    '<h5>Tijuana <span class="pin-s">| Storage regime: Nacional, IMMEX</span></h5>' +
                    '<p>Andador del Rey 20051, Parque Ind El Girasol, Tijuana, BC 22215 | <a href="tel:523336124440">+52 (33) 3612 4440</a></p>'+
                    '<div class="col-12">' +
                        '<div class="row">' +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Warehouse area:</strong> 10,000 ft²</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Height:</strong> Highest point 32 ft</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Rack positions:</strong> (2,200 lb por pallet)</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Docks:</strong> 1</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Ramps:</strong> 2</p>'+
                            "</div>" +
                            '<div class="col-md-6 list-pin">' +
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Security:</strong> CCTV 24 hrs 365 days</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Surveillance cameras:</strong> 10</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>Software:</strong> N/A</p>'+
                                '<p><img src="assets/img/btn1.png" alt="image"> <strong>“HazMat” Warehouse:</strong> Customizable by project</p>'+
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                '<div class="col-xl-12">' +
                    '<div class="table table--dgray">' +
                        '<div class="table__header green-table">' +
                            '<div class="table__row">' +
                                '<div class="table__cell"><strong>Benefits</strong></div>' +
                                '<div class="table__cell"><strong>Details</strong></div>' +
                            "</div>" +
                        "</div>" +	
                        '<div class="table__body">' +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Perimeter</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>12,916 ft²</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Parking space</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>5 parking spaces for employes, Visitors area</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Conference room</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Office</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>3 private offices</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Forklift</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>2 (4,400 lb)</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hydraulic skate</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>3</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Emergency exit</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>Yes</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Services</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>Electricity, fumigation and cleaning</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Hardware</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Links</span></div>' +
                                '<div class="table__cell  data-label="Details"<span>N/A</span></div>' +	
                            "</div>" +
                            '<div class="table__row">' +
                                '<div class="table__cell  data-label="Benefits"><span>Signal repeater</span></div>' +
                                '<div class="table__cell  data-label="Details"><span>N/A</span></div>' +	
                            "</div>" +
                        "</div>" +	
                    "</div>" +
                "</div>" +
                '<div class="col-md-12 text-center top-20">' +
                    '<a class="button button--gray bottom-30" href="assets/img/fichas/tijuana-eng.pdf" target="_blank" download="Tijuana">Download data sheet</a>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        const contentString9 =
        '<div class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-12 list-pin">' +
                    '<h5>Mérida Office</h5>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Email: sales@sbgroup.com.mx</p>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Phone: 33 3612 4440</p>' +
                "</div>" +	
            "</div>" +		
        "</div>";		

        const contentString10 =
        '<div class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-12 list-pin">' +
                    '<h5>Puebla Office</h5>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Email: sales@sbgroup.com.mx</p>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Phone: 33 3612 4440</p>' +
                "</div>" +	
            "</div>" +		
        "</div>";	

        const contentString11 =
        '<div class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-12 list-pin">' +
                    '<h5>Querétaro Office</h5>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Email: sales@sbgroup.com.mx</p>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Phone: 33 3612 4440</p>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        const contentString12 =
        '<div class="col-12">' +
            '<div class="row">' +
                '<div class="col-md-12 list-pin">' +
                    '<h5>Chihuahua Office</h5>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Email: sales@sbgroup.com.mx</p>' +
                    '<p><img src="assets/img/btn3.png" alt="image"> Phone: 33 3612 4440</p>' +
                "</div>" +	
            "</div>" +		
        "</div>";

        return {
            lat: 23.634501, 
            lng: -102.552788,
            zoom: 5,
            markersFeatureds : [ 
                {
                    content: contentString,
                    location: {
                    lat: 31.742970,
                    lng: -106.319050,
                    },
                    type: this.iconGreen,
                    id: 1,
                }, {	
                    content: contentString2,
                    location: {
                    lat:20.5767,
                    lng: -103.3678,
                    },
                    type: this.iconGreen,
                    id: 2
                }, {
                    content: contentString3,
                    location: {
                    lat: 20.67675,
                    lng: -101.35628,
                    },
                    type: this.iconGreen,
                    id: 3
                }, {
                    content: contentString4,
                    location: {
                    lat: 31.08333,
                    lng: -108.08333,
                    },
                    type: this.iconGreen,
                    id: 4
                }, {
                    content: contentString5,
                    location: {
                    lat: 27.624154,
                    lng: -99.504726,
                    },
                    type: this.iconGreen,
                    id: 5
                }, {
                    content: contentString6,
                    location: {
                    lat: 19.64388,
                    lng: -99.21598,
                    },
                    type: this.iconGreen,
                    id: 6
                }, {
                    content: contentString7,
                    location: {
                    lat: 25.75976,
                    lng: -100.16287,
                    },
                    type: this.iconGreen,
                    id: 7
                }, {
                    content: contentString8,
                    location: {
                    lat: 32.5027,
                    lng: -117.00371,
                    },
                    type: this.iconGreen,
                    id: 8
                }, {
                    content: contentString9,
                    location: {
                    lat: 20.9670759,
                    lng: -89.6237402,
                    },
                    type: this.iconBlue,
                    id: 9
                }, {
                    content: contentString10,
                    location: {
                    lat: 18.833333,
                    lng: -98,
                    },
                    type: this.iconBlue,
                    id: 10
                }, {
                    content: contentString11,
                    location: {
                    lat: 20.8542575,
                    lng: -99.84756,
                    },
                    type: this.iconBlue,
                    id: 11
                }, {
                    content: contentString12,
                    location: {
                    lat: 28.5000001,
                    lng: -106.0000001,
                    },
                    type: this.iconBlue,
                    id: 12
                }
            ]
        }
    }

}
