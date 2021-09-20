import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOService {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  metaTags( view ) {
    const communtMetas = [
		 { property:'og:type', content:'website'},
		 { property:'og:url', content:'http://sbgroup.com.mx/'},

     { name: 'twitter:card', content: 'summary' },
     { name: 'twitter:site', content: '@sbgroup_mx' },
    ];
    // console.log( view );
    let data: any = {};

    if ( view == 'DigitalSbLogisticsComponent' || view == 'DigitalSbFreeTradeZoneComponent' || view == 'DigitalSbFinancialServicesComponent' || view == 'DigitalSbLogisticsComponent' ) {
      data = {
        title: 'SB Group | Soluciones logísticas y financieras',
        metas: [
          { name: 'description', content: 'Nuestra plataforma a nivel nacional permite a nuestros clientes contar con infraestructura en las zonas de mayor crecimiento económico por medio de nuestros servicios integrados"' },
          { name: 'keywords', content: 'logistica, logistics, arrendamiento, soluciones financieras, financiamiento, travel, exportación, importación, aeropuerto, marítimo, freight, sea freight, air freight, transportación, transporte terrestre, terrestre, servicios de logistica, free trade zone, trade, import, export, recinto fiscalizado, recinto fiscalizado estratégico, frigo, hazmat, almacén, almacenes, oficinas, offices, rental, leasing' },

          { property:'og:site_name', content:'SB Group | Soluciones logísticas y financieras'},
          { property:'og:title', content:'SB Group | Soluciones logísticas y financieras'},
          { property:'og:description', content:'Nuestra plataforma a nivel nacional permite a nuestros clientes contar con infraestructura en las zonas de mayor crecimiento económico por medio de nuestros servicios integrados'},
          { property:'og:image', content:'assets/img/banner-home.png'},
          { property:'og:image:type', content:'image/png' },
          { property:'og:image:alt', content:'SB Group' },
          { property:'og:image:width', content:'1440' },
          { property:'og:image:height', content:'752' },

          { name: 'twitter:creator', content: 'SB Group | Soluciones logísticas y financieras' },
          { name: 'twitter:title', content: 'SB Group | Soluciones logísticas y financieras' },
          { name: 'twitter:description', content: 'Nuestra plataforma a nivel nacional permite a nuestros clientes contar con infraestructura en las zonas de mayor crecimiento económico por medio de nuestros servicios integrados' },
          { name: 'twitter:image', content: 'assets/img/banner-home.png' },
          { name: 'twitter:image:alt', content: 'SB Group' },
        ]
      };
      data.metas = data.metas.concat( communtMetas );
      this.updateTitle( data );
    } else {
      switch ( view ) {
        case 'IndexComponent' :
          data = {
            title: 'SB Group | Soluciones logísticas y financieras',
            metas: [
              { name: 'description', content: 'Nuestra plataforma a nivel nacional permite a nuestros clientes contar con infraestructura en las zonas de mayor crecimiento económico por medio de nuestros servicios integrados"' },
              { name: 'keywords', content: 'logistica, logistics, arrendamiento, soluciones financieras, financiamiento, travel, exportación, importación, aeropuerto, marítimo, freight, sea freight, air freight, transportación, transporte terrestre, terrestre, servicios de logistica, free trade zone, trade, import, export, recinto fiscalizado, recinto fiscalizado estratégico, frigo, hazmat, almacén, almacenes, oficinas, offices, rental, leasing' },

              { property:'og:site_name', content:'SB Group | Soluciones logísticas y financieras'},
              { property:'og:title', content:'SB Group | Soluciones logísticas y financieras'},
              { property:'og:description', content:'Nuestra plataforma a nivel nacional permite a nuestros clientes contar con infraestructura en las zonas de mayor crecimiento económico por medio de nuestros servicios integrados'},
              { property:'og:image', content:'assets/img/banner-home.png'},
              { property:'og:image:type', content:'image/png' },
              { property:'og:image:alt', content:'SB Group' },
              { property:'og:image:width', content:'1440' },
              { property:'og:image:height', content:'752' },


              { name: 'twitter:creator', content: 'SB Group | Soluciones logísticas y financieras' },
              { name: 'twitter:title', content: 'SB Group | Soluciones logísticas y financieras' },
              { name: 'twitter:description', content: 'Nuestra plataforma a nivel nacional permite a nuestros clientes contar con infraestructura en las zonas de mayor crecimiento económico por medio de nuestros servicios integrados' },
              { name: 'twitter:image', content: 'assets/img/banner-home.png' },
              { name: 'twitter:image:alt', content: 'SB Group' },
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'SbLogisticsComponent' :
          data = {
            title: 'SB Logistics | SB Group | Soluciones logísticas y financieras',
            metas : [
              { name: 'description',  content:'Global growth starts with local expertise. Tu cadena de suministro es única por eso integramos las mejores soluciones en nuestros servicios.' },
              { name: 'keywords', content: 'logistica, logistics, arrendamiento, travel, exportación, importación, aeropuerto, marítimo, freight, sea freight, air freight, transportación, transporte terrestre, terrestre, servicios de logistica, import, export, recinto fiscalizado, recinto fiscalizado estratégico, frigo, hazmat, almacén, almacenes, oficinas, offices, rental, leasing' },

              { property:'og:site_name', content:'SB Logistics | SB Group | Soluciones logísticas y financieras'},
              { property:'og:title', content:'SB Logistics | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:description',  content: 'Global growth starts with local expertise. Tu cadena de suministro es única por eso integramos las mejores soluciones en nuestros servicios.' },
              { property: 'og:image', content: 'assets/img/banner-logistics.png'},
              { property: 'og:image:type', content: 'image/png' },
              { property: 'og:image:width', content: '1440' },
              { property: 'og:image:height', content: '642' },
              { property: 'og:image:alt', content: 'SB Logistics' },


              { name: 'twitter:creator', content: 'SB Logistics | SB Group | Soluciones logísticas y financieras' },
              { name: 'twitter:title', content: 'SB Logistics | SB Group | Soluciones logísticas y financieras' },
              { name: 'twitter:description', content: 'Global growth starts with local expertise. Tu cadena de suministro es única por eso integramos las mejores soluciones en nuestros servicios.'},
              { name: 'twitter:image', content: 'assets/img/banner-logistics.png'},
              { name: 'twitter:image:alt', content: 'SB Logistics'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'SbFreeTradeZoneComponent' :
          data = {
            title: 'SB Free Trade Zone | SB Group | Soluciones logísticas y financieras',
            metas: [
              { name: 'description',  content:'Facilitamos y promovemos el despacho de mercancías en México. Con infraestructura robusta y cumplimiento en comercio exterior.' },
              { name: 'keywords', content: 'arrendamiento, travel, exportación, importación, aeropuerto, marítimo, freight, sea freight, air freight, transportación, transporte terrestre, terrestre, free trade zone, trade, import, export, recinto fiscalizado, recinto fiscalizado estratégico, frigo, hazmat, almacén, almacenes, oficinas, offices, rental, leasing' },

              { property: 'og:site_name',  content: 'SB Free Trade Zone | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:title',  content: 'SB Free Trade Zone | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:description',  content: 'Facilitamos y promovemos el despacho de mercancías en México. Con infraestructura robusta y cumplimiento en comercio exterior.'},
              { property: 'og:image',  content: 'assets/img/banner-tradezone.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '736' },
              { property: 'og:image:alt',  content: 'SB Free Trade Zone' },

              { name: 'twitter:creator', content: 'SB Free Trade Zone | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:title', content: 'SB Free Trade Zone | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:description', content: 'Facilitamos y promovemos el despacho de mercancías en México. Con infraestructura robusta y cumplimiento en comercio exterior.'},
              { name: 'twitter:image', content: 'assets/img/banner-tradezone.png'},
              { name: 'twitter:image:alt', content: 'SB Free Trade Zone'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'SbFinancialServicesComponent' :
          data = {
            title: 'SB Financial Services | SB Group | Soluciones logísticas y financieras',
            metas: [
              { name: 'description',  content:'Brindamos soluciones financieras y protección para nuestros clientes haciendo uso de la tecnología para impulsar ágilmente su negocio.' },
              { name: 'keywords', content: 'soluciones financieras, financiamiento, travel, exportación, importación, aeropuerto, marítimo, freight, sea freight, air freight, transportación, transporte terrestre, terrestre, import, export, recinto fiscalizado, recinto fiscalizado estratégico, frigo, hazmat, almacén, almacenes, oficinas, offices, rental, leasing' },

              { property: 'og:site_name',  content: 'SB Financial Services | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:title',  content: 'SB Financial Services | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:description',  content: 'Brindamos soluciones financieras y protección para nuestros clientes haciendo uso de la tecnología para impulsar ágilmente su negocio.'},
              { property: 'og:image',  content: 'img/banner-financial.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '736' },
              { property: 'og:image:alt',  content: 'SB Financial Services' },

              { name: 'twitter:creator', content: 'SB Financial Services | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:title', content: 'SB Financial Services | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:description', content: 'Brindamos soluciones financieras y protección para nuestros clientes haciendo uso de la tecnología para impulsar ágilmente su negocio.'},
              { name: 'twitter:image', content: 'img/banner-financial.png'},
              { name: 'twitter:image:alt', content: 'SB Financial Services'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'BlogComponent' :
          data = {
            title: 'Blog | SB Group | Soluciones logísticas y financieras',
            metas: [
              { name: 'description',  content:'Encuentra material relevante y comunicados sobre los cambios más recientes en la industria.' },
              { name: 'keywords', content: 'blog, entradas de blog, escrito, escritura, material, industria, logística, aduana, free trade zone, importación, exportación, freight, free trade zone, arrendamiento, leasing, inversión, financiamiento, logistics, despacho aduanal, frontera, aeropuerto, transporte, artículo, carretera, servicio aéreo, servicio marítimo, trailer, contenedor, oficinas, offices' },

              { property: 'og:site_name',  content: 'Blog | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:title',  content: 'Blog | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:description',  content: 'Encuentra material relevante y comunicados sobre los cambios más recientes en la industria.'},
              { property: 'og:image',  content: 'assets/img/banner-blog.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '520' },
              { property: 'og:image:alt',  content: 'Blog' },

              { name: 'twitter:creator', content: 'Blog | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:title', content: 'Blog | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:description', content: 'Encuentra material relevante y comunicados sobre los cambios más recientes en la industria.'},
              { name: 'twitter:image', content: 'assets/img/banner-blog.png'},
              { name: 'twitter:image:alt', content: 'Blog'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'ContactoComponent' :
          data = {
            title: 'Contacto | SB Group | Soluciones logísticas y financieras',
            metas: [
              { name: 'description',  content:'Nos encantaría ayudarte a llegar a todas partes.' },
              { name: 'keywords', content: 'industria, logística, aduana, free trade zone, importación, exportación, freight, free trade zone, arrendamiento, leasing, inversión, financiamiento, logistics, despacho aduanal, frontera, aeropuerto, transporte, artículo, carretera, servicio aéreo, servicio marítimo, trailer, contenedor, oficinas, offices' },

              { property: 'og:site_name',  content: 'Contacto | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:title',  content: 'Contacto | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:description',  content: 'Nos encantaría ayudarte a llegar a todas partes.'},
              { property: 'og:image',  content: 'assets/img/banner-blog.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '520' },
              { property: 'og:image:alt',  content: 'Contacto' },

              { name: 'twitter:creator', content: 'Contacto | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:title', content: 'Contacto | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:description', content: 'Nos encantaría ayudarte a llegar a todas partes.'},
              { name: 'twitter:image', content: 'assets/img/banner-blog.png'},
              { name: 'twitter:image:alt', content: 'Contacto'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'PasosComponent' :
          data = {
            title: 'Pasos para agendar una cita | SB Group | Soluciones logísticas y financieras',
            metas: [
              { name: 'description',  content:'Pasos para agendar una cita' },
              { name: 'keywords', content: 'keywords' },

              { property: 'og:site_name',  content: 'Pasos para agendar una cita | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:title',  content: 'Pasos para agendar una cita | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:description',  content: 'Pasos para agendar una cita'},
              { property: 'og:image',  content: 'assets/img/banner-home.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '752' },
              { property: 'og:image:alt',  content: 'SB Group' },

              { name: 'twitter:creator', content: 'Pasos para agendar una cita | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:title', content: 'Pasos para agendar una cita | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:description', content: 'Pasos para agendar una cita'},
              { name: 'twitter:image', content: 'assets/img/banner-home.png'},
              { name: 'twitter:image:alt', content: 'SB Group'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'NotFoundComponent' :
          data = {
            title: '404 | SB Group | Soluciones logísticas y financieras',
            metas: [
              { name: 'description',  content:'Error 404' },
              { name: 'keywords', content: 'keywords' },

              { property: 'og:site_name',  content: '404 | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:title',  content: '404 | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:description',  content: 'Error 404'},
              { property: 'og:image',  content: 'assets/img/banner-home.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '752' },
              { property: 'og:image:alt',  content: 'SB Group' },

              { name: 'twitter:creator', content: '404 | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:title', content: '404 | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:description', content: 'Error 404'},
              { name: 'twitter:image', content: 'assets/img/banner-home.png'},
              { name: 'twitter:image:alt', content: 'SB Group'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'FiveTvProgramsComponent' :
          data = {
            title: '5 programas de TV que los logísticos amamos | SB Group',
            metas: [
              { name: 'description',  content:'' },
              { name: 'keywords', content: 'soluciones logísticas, soluciones financieras, infraestructura' },

              { property: 'og:site_name',  content: '5 programas de TV que los logísticos amamos | SB Group'},
              { property: 'og:title',  content: '5 programas de TV que los logísticos amamos | SB Group'},
              { property: 'og:description',  content: ''},
              { property: 'og:image',  content: 'assets/img/blog-post_img.jpg'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '752' },
              { property: 'og:image:alt',  content: 'Post' },

              { name: 'twitter:creator', content: '5 programas de TV que los logísticos amamos | SB Group'},
              { name: 'twitter:title', content: '5 programas de TV que los logísticos amamos | SB Group'},
              { name: 'twitter:description', content: ''},
              { name: 'twitter:image', content: 'assets/img/blog-post_img.jpg'},
              { name: 'twitter:image:alt', content: 'Post'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'ForbiddenObjectsComponent' :
          data = {
            title: '11 Objetos Prohibidos Para Importar y Exportar en Diferentes Países',
            metas: [
              { name: 'description',  content:'' },
              { name: 'keywords', content: 'soluciones logísticas, soluciones financieras, infraestructura' },

              { property: 'og:site_name',  content: '11 Objetos Prohibidos Para Importar y Exportar en Diferentes Países'},
              { property: 'og:title',  content: '11 Objetos Prohibidos Para Importar y Exportar en Diferentes Países'},
              { property: 'og:description',  content: ''},
              { property: 'og:image',  content: 'assets/img/blog-post_img-4.jpg'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '871' },
              { property: 'og:image:height',  content: '437' },
              { property: 'og:image:alt',  content: 'Post' },

              { name: 'twitter:creator', content: '11 Objetos Prohibidos Para Importar y Exportar en Diferentes Países'},
              { name: 'twitter:title', content: '11 Objetos Prohibidos Para Importar y Exportar en Diferentes Países'},
              { name: 'twitter:description', content: ''},
              { name: 'twitter:image', content: 'assets/img/blog-post_img-4.jpg'},
              { name: 'twitter:image:alt', content: 'Post'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'FivePointsComponent' :
          data = {
            title: 'Los 5 puntos básicos sobre ETIQUETADO NOM de Información Comercial para bienes intermedios',
            metas: [
              { name: 'description',  content:'' },
              { name: 'keywords', content: 'soluciones logísticas, soluciones financieras, infraestructura' },

              { property: 'og:site_name',  content: 'Los 5 puntos básicos sobre ETIQUETADO NOM de Información Comercial para bienes intermedios'},
              { property: 'og:title',  content: 'Los 5 puntos básicos sobre ETIQUETADO NOM de Información Comercial para bienes intermedios'},
              { property: 'og:description',  content: ''},
              { property: 'og:image',  content: 'assets/img/blog-post_img-4.jpg'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '871' },
              { property: 'og:image:height',  content: '437' },
              { property: 'og:image:alt',  content: 'Post' },

              { name: 'twitter:creator', content: 'Los 5 puntos básicos sobre ETIQUETADO NOM de Información Comercial para bienes intermedios'},
              { name: 'twitter:title', content: 'Los 5 puntos básicos sobre ETIQUETADO NOM de Información Comercial para bienes intermedios'},
              { name: 'twitter:description', content: ''},
              { name: 'twitter:image', content: 'assets/img/blog-post_img-4.jpg'},
              { name: 'twitter:image:alt', content: 'Post'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'NewsletterComponent' :
          data = {
            title: 'Noticias | SB Group | Soluciones logísticas y financieras',
            metas: [
              { name: 'description',  content:'' },
              { name: 'keywords', content: 'soluciones logísticas, soluciones financieras, infraestructura' },

              { property: 'og:site_name',  content: 'Noticias | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:title',  content: 'Noticias | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:description',  content: ''},
              { property: 'og:image',  content: 'assets/img/banner-newsletter.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '520' },
              { property: 'og:image:alt',  content: 'Noticias' },

              { name: 'twitter:creator', content: 'Noticias | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:title', content: 'Noticias | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:description', content: ''},
              { name: 'twitter:image', content: 'assets/img/banner-newsletter.png'},
              { name: 'twitter:image:alt', content: 'Noticias'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'CourierComponent' :
          data = {
            title: '¿Qué es un Courier? (On-Board Courier)',
            metas: [
              { name: 'description',  content:'' },
              { name: 'keywords', content: 'Courier' },

              { property: 'og:site_name',  content: '¿Qué es un Courier? (On-Board Courier)'},
              { property: 'og:title',  content: '¿Qué es un Courier? (On-Board Courier)'},
              { property: 'og:description',  content: ''},
              { property: 'og:image',  content: 'assets/img/blog-post_img-5.jpg'},
              { property: 'og:image:type',  content: 'image/jpg' },
              { property: 'og:image:width',  content: '871' },
              { property: 'og:image:height',  content: '437' },
              { property: 'og:image:alt',  content: 'Post' },

              { name: 'twitter:creator', content: '¿Qué es un Courier? (On-Board Courier)'},
              { name: 'twitter:title', content: '¿Qué es un Courier? (On-Board Courier)'},
              { name: 'twitter:description', content: ''},
              { name: 'twitter:image', content: 'assets/img/blog-post_img-5.jpg'},
              { name: 'twitter:image:alt', content: 'Post'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'RecintoFiscalizadoComponent' :
          data = {
            title: '¿Qué es un Recinto Fiscalizado Estratégico?',
            metas: [
              { name: 'description',  content:'' },
              { name: 'keywords', content: 'Recinto Estratégico' },

              { property: 'og:site_name',  content: '¿Qué es un Recinto Fiscalizado Estratégico?'},
              { property: 'og:title',  content: '¿Qué es un Recinto Fiscalizado Estratégico?'},
              { property: 'og:description',  content: ''},
              { property: 'og:image',  content: 'assets/img/blog-post_img-6.jpg'},
              { property: 'og:image:type',  content: 'image/jpg' },
              { property: 'og:image:width',  content: '871' },
              { property: 'og:image:height',  content: '437' },
              { property: 'og:image:alt',  content: 'Post' },

              { name: 'twitter:creator', content: '¿Qué es un Recinto Fiscalizado Estratégico?'},
              { name: 'twitter:title', content: '¿Qué es un Recinto Fiscalizado Estratégico?'},
              { name: 'twitter:description', content: ''},
              { name: 'twitter:image', content: 'assets/img/blog-post_img-6.jpg'},
              { name: 'twitter:image:alt', content: 'Post'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'RecursosComponent' :
          data = {
            title: 'Recursos | SB Group | Soluciones logísticas y financieras',
            metas: [
              { name: 'description',  content:'Encuentra información elemental de la industria y conoce las tendencias más recientes.' },
              { name: 'keywords', content: 'soluciones logísticas, soluciones financieras, infraestructura' },

              { property: 'og:site_name',  content: 'Recursos | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:title',  content: 'Recursos | SB Group | Soluciones logísticas y financieras'},
              { property: 'og:description',  content: ''},
              { property: 'og:image',  content: 'assets/img/banner-recursos.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '498' },
              { property: 'og:image:alt',  content: 'Recursos' },

              { name: 'twitter:creator', content: 'Recursos | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:title', content: 'Recursos | SB Group | Soluciones logísticas y financieras'},
              { name: 'twitter:description', content: ''},
              { name: 'twitter:image', content: 'assets/img/banner-recursos.png'},
              { name: 'twitter:image:alt', content: 'Recursos'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        // eng views
        case 'EngIndexComponent' :
          data = {
            title: 'SB Group is a logistic solutions integrator',
            metas: [
              { name: 'description',  content:'We are an integrator of logistics whose nationwide platform allow our clients to have infrastructure in the areas of the highest economic growth' },
              { name: 'keywords', content: 'logistica, logistics, arrendamiento, soluciones financieras, financiamiento, travel, exportación, importación, aeropuerto, marítimo, freight, sea freight, air freight, transportación, transporte terrestre, terrestre, servicios de logistica, free trade zone, trade, import, export, recinto fiscalizado, recinto fiscalizado estratégico, frigo, hazmat, almacén, almacenes, oficinas, offices, rental, leasing' },

              { property: 'og:site_name',  content: 'SB Group is a logistic solutions integrator'},
              { property: 'og:title',  content: 'SB Group is a logistic solutions integrator'},
              { property: 'og:description',  content: 'We are an integrator of logistics whose nationwide platform allow our clients to have infrastructure in the areas of the highest economic growth'},
              { property: 'og:image',  content: 'assets/img/banner-home.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '752' },
              { property: 'og:image:alt',  content: 'SB Group' },

              { name: 'twitter:creator', content: 'SB Group is a logistic solutions integrator'},
              { name: 'twitter:title', content: 'SB Group is a logistic solutions integrator'},
              { name: 'twitter:description', content: 'We are an integrator of logistics whose nationwide platform allow our clients to have infrastructure in the areas of the highest economic growth'},
              { name: 'twitter:image', content: 'assets/img/banner-home.png'},
              { name: 'twitter:image:alt', content: 'SB Group'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'EngSbLogisticsComponent' :
          data = {
            title: 'SB Logistics | SB Group is a logistic solutions integrator',
            metas: [
              { name: 'description',  content:'Global growth starts with local expertise. Your supply chain is unique, therefore we integrate the best solutions into our services.' },
              { name: 'keywords', content: 'logistica, logistics, arrendamiento, travel, exportación, importación, aeropuerto, marítimo, freight, sea freight, air freight, transportación, transporte terrestre, terrestre, servicios de logistica, import, export, recinto fiscalizado, recinto fiscalizado estratégico, frigo, hazmat, almacén, almacenes, oficinas, offices, rental, leasing' },

              { property: 'og:site_name',  content: 'SB Logistics | SB Group is a logistic solutions integrator'},
              { property: 'og:title',  content: 'SB Logistics | SB Group is a logistic solutions integrator'},
              { property: 'og:description',  content: 'Global growth starts with local expertise. Your supply chain is unique, therefore we integrate the best solutions into our services.'},
              { property: 'og:image',  content: 'assets/img/banner-logistics.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '642' },
              { property: 'og:image:alt',  content: 'SB Logistics' },

              { name: 'twitter:creator', content: 'SB Logistics | SB Group is a logistic solutions integrator'},
              { name: 'twitter:title', content: 'SB Logistics | SB Group is a logistic solutions integrator'},
              { name: 'twitter:description', content: 'Global growth starts with local expertise. Your supply chain is unique, therefore we integrate the best solutions into our services.'},
              { name: 'twitter:image', content: 'assets/img/banner-logistics.png'},
              { name: 'twitter:image:alt', content: 'SB Logistics'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'EngSbFreeTradeZoneComponent' :
          data = {
            title: 'SB Free Trade Zone | SB Group is a logistic solutions integrator',
            metas: [
              { name: 'description',  content:'We simplify and promote Customs processes un Mexico with solid infrastructure and compliance expertise.' },
              { name: 'keywords', content: '"arrendamiento, travel, exportación, importación, aeropuerto, marítimo, freight, sea freight, air freight, transportación, transporte terrestre, terrestre, free trade zone, trade, import, export, recinto fiscalizado, recinto fiscalizado estratégico, frigo, hazmat, almacén, almacenes, oficinas, offices, rental, leasing' },

              { property: 'og:site_name',  content: 'SB Free Trade Zone | SB Group is a logistic solutions integrator'},
              { property: 'og:title',  content: 'SB Free Trade Zone | SB Group is a logistic solutions integrator'},
              { property: 'og:description',  content: 'We simplify and promote Customs processes un Mexico with solid infrastructure and compliance expertise.'},
              { property: 'og:image',  content: 'assets/img/banner-tradezone.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '736' },
              { property: 'og:image:alt',  content: 'SB Free Trade Zone' },

              { name: 'twitter:creator', content: 'SB Free Trade Zone | SB Group is a logistic solutions integrator'},
              { name: 'twitter:title', content: 'SB Free Trade Zone | SB Group is a logistic solutions integrator'},
              { name: 'twitter:description', content: 'We simplify and promote Customs processes un Mexico with solid infrastructure and compliance expertise.'},
              { name: 'twitter:image', content: 'assets/img/banner-tradezone.png'},
              { name: 'twitter:image:alt', content: 'SB Free Trade Zone'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'EngSbFinancialServicesComponent' :
          data = {
            title: 'SB Financial Services | SB Group is a logistic solutions integrator',
            metas: [
              { name: 'description',  content:'We provide financial solutions and protection for our Customers  using technology to increase agility for their business.' },
              { name: 'keywords', content: 'soluciones financieras, financiamiento, travel, exportación, importación, aeropuerto, marítimo, freight, sea freight, air freight, transportación, transporte terrestre, terrestre, import, export, recinto fiscalizado, recinto fiscalizado estratégico, frigo, hazmat, almacén, almacenes, oficinas, offices, rental, leasing' },

              { property: 'og:site_name',  content: 'SB Financial Services | SB Group is a logistic solutions integrator'},
              { property: 'og:title',  content: 'SB Financial Services | SB Group is a logistic solutions integrator'},
              { property: 'og:description',  content: 'We provide financial solutions and protection for our Customers  using technology to increase agility for their business.'},
              { property: 'og:image',  content: 'assets/banner-financial.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '736' },
              { property: 'og:image:alt',  content: 'SB Financial Services' },

              { name: 'twitter:creator', content: 'SB Financial Services | SB Group is a logistic solutions integrator'},
              { name: 'twitter:title', content: 'SB Financial Services | SB Group is a logistic solutions integrator'},
              { name: 'twitter:description', content: 'We provide financial solutions and protection for our Customers  using technology to increase agility for their business.'},
              { name: 'twitter:image', content: 'assets/banner-financial.png'},
              { name: 'twitter:image:alt', content: 'SB Financial Services'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'EngBlogComponent' :
          data = {
            title: 'Blog | SB Group is a logistic solutions integrator',
            metas: [
              { name: 'description',  content:'Find relevant articles and press releases about the latest updates in the industry.' },
              { name: 'keywords', content: 'blog, entradas de blog, escrito, escritura, material, industria, logística, aduana, free trade zone, importación, exportación, freight, free trade zone, arrendamiento, leasing, inversión, financiamiento, logistics, despacho aduanal, frontera, aeropuerto, transporte, artículo, carretera, servicio aéreo, servicio marítimo, trailer, contenedor, oficinas, offices' },

              { property: 'og:site_name',  content: 'Blog | SB Group is a logistic solutions integrator'},
              { property: 'og:title',  content: 'Blog | SB Group is a logistic solutions integrator'},
              { property: 'og:description',  content: 'Find relevant articles and press releases about the latest updates in the industry.'},
              { property: 'og:image',  content: 'assets/img/banner-blog.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '520' },
              { property: 'og:image:alt',  content: 'Blog' },

              { name: 'twitter:creator', content: 'Blog | SB Group is a logistic solutions integrator'},
              { name: 'twitter:title', content: 'Blog | SB Group is a logistic solutions integrator'},
              { name: 'twitter:description', content: 'Find relevant articles and press releases about the latest updates in the industry.'},
              { name: 'twitter:image', content: 'assets/img/banner-blog.png'},
              { name: 'twitter:image:alt', content: 'Blog'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'EngContactComponent' :
          data = {
            title: 'Contact | SB Group | is a logistic solutions integrator',
            metas: [
              { name: 'description',  content:'We\'d love to help you reach your goals. Get in touch and together we will find the best plan for your needs' },
              { name: 'keywords', content: 'industria, logística, aduana, free trade zone, importación, exportación, freight, free trade zone, arrendamiento, leasing, inversión, financiamiento, logistics, despacho aduanal, frontera, aeropuerto, transporte, artículo, carretera, servicio aéreo, servicio marítimo, trailer, contenedor, oficinas, offices' },

              { property: 'og:site_name',  content: 'Contact | SB Group | is a logistic solutions integrator'},
              { property: 'og:title',  content: 'Contact | SB Group | is a logistic solutions integrator'},
              { property: 'og:description',  content: 'We\'d love to help you reach your goals. Get in touch and together we will find the best plan for your needs'},
              { property: 'og:image',  content: 'assets/img/banner-blog.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '520' },
              { property: 'og:image:alt',  content: 'Contact' },

              { name: 'twitter:creator', content: 'Contact | SB Group | is a logistic solutions integrator'},
              { name: 'twitter:title', content: 'Contact | SB Group | is a logistic solutions integrator'},
              { name: 'twitter:description', content: 'We\'d love to help you reach your goals. Get in touch and together we will find the best plan for your needs'},
              { name: 'twitter:image', content: 'assets/img/banner-blog.png'},
              { name: 'twitter:image:alt', content: 'Contact'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'EngStepsComponent' :
          data = {
            title: 'Steps to make an appointment | SB Group is a logistic solutions integrator',
            metas: [
              { name: 'description',  content:'Steps to make an appointment' },
              { name: 'keywords', content: 'keywords' },

              { property: 'og:site_name',  content: 'Steps to make an appointment | SB Group is a logistic solutions integrator'},
              { property: 'og:title',  content: 'Steps to make an appointment | SB Group is a logistic solutions integrator'},
              { property: 'og:description',  content: 'Steps to make an appointment'},
              { property: 'og:image',  content: 'assets/img/banner-home.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '752' },
              { property: 'og:image:alt',  content: 'SB Group' },

              { name: 'twitter:creator', content: 'Steps to make an appointment | SB Group is a logistic solutions integrator'},
              { name: 'twitter:title', content: 'Steps to make an appointment | SB Group is a logistic solutions integrator'},
              { name: 'twitter:description', content: 'Steps to make an appointment'},
              { name: 'twitter:image', content: 'assets/img/banner-home.png'},
              { name: 'twitter:image:alt', content: 'SB Group'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'EngFiveTvProgramsComponent' :
          data = {
            title: '5 TV Shows that logistics people Loves | SB Group',
            metas: [
              { name: 'description',  content:'Always staying on the precipice at the edge of a new road drama, mortal routes showed us the life of a team...' },
              { name: 'keywords', content: 'soluciones logísticas, soluciones financieras, infraestructura' },

              { property: 'og:site_name',  content: '5 TV Shows that logistics people Loves | SB Group'},
              { property: 'og:title',  content: '5 TV Shows that logistics people Loves | SB Group'},
              { property: 'og:description',  content: 'Always staying on the precipice at the edge of a new road drama, mortal routes showed us the life of a team...'},
              { property: 'og:image',  content: 'assets/img/blog-post_img.jpg'},
              { property: 'og:image:type',  content: 'image/jpg' },
              { property: 'og:image:width',  content: '871' },
              { property: 'og:image:height',  content: '437' },
              { property: 'og:image:alt',  content: 'Post' },

              { name: 'twitter:creator', content: '5 TV Shows that logistics people Loves | SB Group'},
              { name: 'twitter:title', content: '5 TV Shows that logistics people Loves | SB Group'},
              { name: 'twitter:description', content: 'Always staying on the precipice at the edge of a new road drama, mortal routes showed us the life of a team...'},
              { name: 'twitter:image', content: 'assets/img/blog-post_img.jpg'},
              { name: 'twitter:image:alt', content: 'Post'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'EngForbiddenObjectsComponent' :
          data = {
            title: '11 Prohibited Objects to Import and Export in Different Countries',
            metas: [
              { name: 'description',  content:'Do you miss traveling? Considering that we are unfortunately restricted or limited in making trips ...' },
              { name: 'keywords', content: 'soluciones logísticas, soluciones financieras, infraestructura' },

              { property: 'og:site_name',  content: '11 Prohibited Objects to Import and Export in Different Countries'},
              { property: 'og:title',  content: '11 Prohibited Objects to Import and Export in Different Countries'},
              { property: 'og:description',  content: 'Do you miss traveling? Considering that we are unfortunately restricted or limited in making trips ...'},
              { property: 'og:image',  content: 'assets/img/blog-post_img-3.jpg'},
              { property: 'og:image:type',  content: 'image/jpg' },
              { property: 'og:image:width',  content: '871' },
              { property: 'og:image:height',  content: '437' },
              { property: 'og:image:alt',  content: 'Post' },

              { name: 'twitter:creator', content: '11 Prohibited Objects to Import and Export in Different Countries'},
              { name: 'twitter:title', content: '11 Prohibited Objects to Import and Export in Different Countries'},
              { name: 'twitter:description', content: 'Do you miss traveling? Considering that we are unfortunately restricted or limited in making trips ...'},
              { name: 'twitter:image', content: 'assets/img/blog-post_img-3.jpg'},
              { name: 'twitter:image:alt', content: 'Post'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'EngFivePointsComponent' :
          data = {
            title: 'The 5 basic points about NOM LABELING of Commercial Information for intermediate goods',
            metas: [
              { name: 'description',  content:'In Mexico, the new regulation on NOM legal labeling extended by the Ministry of Economy now applicable to intermediate goods ...' },
              { name: 'keywords', content: 'soluciones logísticas, soluciones financieras, infraestructura' },

              { property: 'og:site_name',  content: 'The 5 basic points about NOM LABELING of Commercial Information for intermediate goods'},
              { property: 'og:title',  content: 'The 5 basic points about NOM LABELING of Commercial Information for intermediate goods'},
              { property: 'og:description',  content: 'In Mexico, the new regulation on NOM legal labeling extended by the Ministry of Economy now applicable to intermediate goods ...'},
              { property: 'og:image',  content: 'assets/img/blog-post_img-4.jpg'},
              { property: 'og:image:type',  content: 'image/jpg' },
              { property: 'og:image:width',  content: '871' },
              { property: 'og:image:height',  content: '437' },
              { property: 'og:image:alt',  content: 'Post' },

              { name: 'twitter:creator', content: 'The 5 basic points about NOM LABELING of Commercial Information for intermediate goods'},
              { name: 'twitter:title', content: 'The 5 basic points about NOM LABELING of Commercial Information for intermediate goods'},
              { name: 'twitter:description', content: 'In Mexico, the new regulation on NOM legal labeling extended by the Ministry of Economy now applicable to intermediate goods ...'},
              { name: 'twitter:image', content: 'assets/img/blog-post_img-4.jpg'},
              { name: 'twitter:image:alt', content: 'Post'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'EngNewsletterComponent' :
          data = {
            title: 'Newsletter | SB Group is a logistic solutions integrator',
            metas: [
              { name: 'description',  content:'Descripción: Find the most relevant events for the industry from conventions, webinars and conferences.' },
              { name: 'keywords', content: 'newsletter, eventos, webinar, conferencia, exposición, expo, industria, logistica, régimen, transportación, importación, exportación, recinto fiscalizado, recinto fiscalizado estratégico, free trade zone, inland port, inlad, freight, air freight, sea freight, transporte terrestre, trailer, camión, contenedor, barco, noticias, conferencia, exposiciones, web, cursos' },

              { property: 'og:site_name',  content: 'Newsletter | SB Group is a logistic solutions integrator'},
              { property: 'og:title',  content: 'Newsletter | SB Group is a logistic solutions integrator'},
              { property: 'og:description',  content: 'Descripción: Find the most relevant events for the industry from conventions, webinars and conferences.'},
              { property: 'og:image',  content: 'assets/img/banner-newsletter.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '520' },
              { property: 'og:image:alt',  content: 'Newsletter' },

              { name: 'twitter:creator', content: 'Newsletter | SB Group is a logistic solutions integrator'},
              { name: 'twitter:title', content: 'Newsletter | SB Group is a logistic solutions integrator'},
              { name: 'twitter:description', content: 'Descripción: Find the most relevant events for the industry from conventions, webinars and conferences.'},
              { name: 'twitter:image', content: 'assets/img/banner-newsletter.png'},
              { name: 'twitter:image:alt', content: 'Newsletter'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'DeuIndexComponent':
          data = {
            title: 'Die SB Group ist ein Integrator für Logistiklösungen',
            metas: [
              { name: 'description',  content:'Wir sind ein Integrator der Logistik, dessen landesweite Plattform unseren Kunden eine Infrastruktur in den Bereichen mit dem höchsten Wirtschaftswachstum ermöglicht' },
              { name: 'keywords', content: 'logistica, logistics, arrendamiento, soluciones financieras, financiamiento, travel, exportación, importación, aeropuerto, marítimo, freight, sea freight, air freight, transportación, transporte terrestre, terrestre, servicios de logistica, free trade zone, trade, import, export, recinto fiscalizado, recinto fiscalizado estratégico, frigo, hazmat, almacén, almacenes, oficinas, offices, rental, leasing' },

              { property: 'og:site_name',  content: 'Die SB Group ist ein Integrator für Logistiklösungen'},
              { property: 'og:title',  content: 'Die SB Group ist ein Integrator für Logistiklösungen'},
              { property: 'og:description',  content: 'Wir sind ein Integrator der Logistik, dessen landesweite Plattform unseren Kunden eine Infrastruktur in den Bereichen mit dem höchsten Wirtschaftswachstum ermöglicht'},
              { property: 'og:image',  content: 'assets/img/banner-home.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '752' },
              { property: 'og:image:alt',  content: 'SB Group' },

              { name: 'twitter:creator', content: 'Die SB Group ist ein Integrator für Logistiklösungen'},
              { name: 'twitter:title', content: 'Die SB Group ist ein Integrator für Logistiklösungen'},
              { name: 'twitter:description', content: 'Wir sind ein Integrator der Logistik, dessen landesweite Plattform unseren Kunden eine Infrastruktur in den Bereichen mit dem höchsten Wirtschaftswachstum ermöglicht'},
              { name: 'twitter:image', content: 'assets/img/banner-home.png'},
              { name: 'twitter:image:alt', content: 'SB Group'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'DeuBlogComponent':
          data = {
            title: 'Blog | Die SB Group ist ein Integrator für Logistiklösungen',
            metas: [
              { name: 'description',  content:'Hier finden Sie relevante Artikel und Pressemitteilungen zu den neuesten Updates in der Branche.' },
              { name: 'keywords', content: 'logistica, logistics, arrendamiento, soluciones financieras, financiamiento, travel, exportación, importación, aeropuerto, marítimo, freight, sea freight, air freight, transportación, transporte terrestre, terrestre, servicios de logistica, free trade zone, trade, import, export, recinto fiscalizado, recinto fiscalizado estratégico, frigo, hazmat, almacén, almacenes, oficinas, offices, rental, leasing' },

              { property: 'og:site_name',  content: 'Blog | Die SB Group ist ein Integrator für Logistiklösungen'},
              { property: 'og:title',  content: 'Blog | Die SB Group ist ein Integrator für Logistiklösungen'},
              { property: 'og:description',  content: 'Hier finden Sie relevante Artikel und Pressemitteilungen zu den neuesten Updates in der Branche.'},
              { property: 'og:image',  content: 'assets/img/banner-blog.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '520' },
              { property: 'og:image:alt',  content: 'Blog' },

              { name: 'twitter:creator', content: 'Blog | Die SB Group ist ein Integrator für Logistiklösungen'},
              { name: 'twitter:title', content: 'Blog | Die SB Group ist ein Integrator für Logistiklösungen'},
              { name: 'twitter:description', content: 'Hier finden Sie relevante Artikel und Pressemitteilungen zu den neuesten Updates in der Branche.'},
              { name: 'twitter:image', content: 'assets/img/banner-blog.png'},
              { name: 'twitter:image:alt', content: 'Blog'},

            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'DeuCourierComponent':
          data = {
            title: 'Was ist ein Kurier? (Kurier an Bord)',
            metas: [
              { name: 'description',  content:'On Board Courier ist OBC \'ein beschleunigter Lieferservice von Waren durch eine Person, die bei einem Unternehmen beschäftigt ist' },
              { name: 'keywords', content: 'Courier' },

              { property: 'og:site_name',  content: 'Was ist ein Kurier? (Kurier an Bord)'},
              { property: 'og:title',  content: 'Was ist ein Kurier? (Kurier an Bord)'},
              { property: 'og:description',  content: 'On Board Courier ist OBC \'ein beschleunigter Lieferservice von Waren durch eine Person, die bei einem Unternehmen beschäftigt ist'},
              { property: 'og:image',  content: 'assets/img/blog-post_img-5.jpg'},
              { property: 'og:image:type',  content: 'image/jpg' },
              { property: 'og:image:width',  content: '871' },
              { property: 'og:image:height',  content: '437' },
              { property: 'og:image:alt',  content: 'Post' },
              { name: 'twitter:creator', content: 'Was ist ein Kurier? (Kurier an Bord)'},
              { name: 'twitter:title', content: 'Was ist ein Kurier? (Kurier an Bord)'},
              { name: 'twitter:description', content: 'On Board Courier ist OBC \'ein beschleunigter Lieferservice von Waren durch eine Person, die bei einem Unternehmen beschäftigt ist'},
              { name: 'twitter:image', content: 'assets/img/blog-post_img-5.jpg'},
              { name: 'twitter:image:alt', content: 'Post'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'EngCourierComponent' :
          data = {
            title: 'What is a Courier? (On-Board Courier)',
            metas: [
              { name: 'description',  content:'\'On Board Courier, OBC\' is an expedited delivery service of merchandise through a person employed by a company' },
              { name: 'keywords', content: 'On Board Courier' },

              { property: 'og:site_name',  content: 'What is a Courier? (On-Board Courier)'},
              { property: 'og:title',  content: 'What is a Courier? (On-Board Courier)'},
              { property: 'og:description',  content: '\'On Board Courier, OBC\' is an expedited delivery service of merchandise through a person employed by a company'},
              { property: 'og:image',  content: 'assets/img/blog-post_img-5.jpg'},
              { property: 'og:image:type',  content: 'image/jpg' },
              { property: 'og:image:width',  content: '871' },
              { property: 'og:image:height',  content: '437' },
              { property: 'og:image:alt',  content: 'Post' },

              { name: 'twitter:creator', content: 'What is a Courier? (On-Board Courier)'},
              { name: 'twitter:title', content: 'What is a Courier? (On-Board Courier)'},
              { name: 'twitter:description', content: '\'On Board Courier, OBC\' is an expedited delivery service of merchandise through a person employed by a company'},
              { name: 'twitter:image', content: 'assets/img/blog-post_img-5.jpg'},
              { name: 'twitter:image:alt', content: 'Post'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'DeuFiscalAreaComponent':
          data = {
            title: 'Was ist ein strategischer Steuerbereich?',
            metas: [
              { name: 'description',  content:'Es ist das innovativste Zollmodell, um Ihre Fracht zu beschleunigen und den Versandprozess in Ihre Stadt zu bringen, wodurch der Warenfluss verbessert wird ...' },
              { name: 'keywords', content: 'Recinto Estratégico' },

              { property: 'og:site_name',  content: 'Was ist ein strategischer Steuerbereich?'},
              { property: 'og:title',  content: 'Was ist ein strategischer Steuerbereich?'},
              { property: 'og:description',  content: 'Es ist das innovativste Zollmodell, um Ihre Fracht zu beschleunigen und den Versandprozess in Ihre Stadt zu bringen, wodurch der Warenfluss verbessert wird ...'},
              { property: 'og:image',  content: 'assets/img/blog-post_img-6.jpg'},
              { property: 'og:image:type',  content: 'image/jpg' },
              { property: 'og:image:width',  content: '871' },
              { property: 'og:image:height',  content: '437' },
              { property: 'og:image:alt',  content: 'Post' },
              { name: 'twitter:creator', content: 'Was ist ein strategischer Steuerbereich?'},
              { name: 'twitter:title', content: 'Was ist ein strategischer Steuerbereich?'},
              { name: 'twitter:description', content: 'Es ist das innovativste Zollmodell, um Ihre Fracht zu beschleunigen und den Versandprozess in Ihre Stadt zu bringen, wodurch der Warenfluss verbessert wird ...'},
              { name: 'twitter:image', content: 'assets/img/blog-post_img-6.jpg'},
              { name: 'twitter:image:alt', content: 'Post'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'EngFiscalAreaComponent' :
          data = {
            title: 'What is a Free Trade Zone (Recinto Fiscalizado estratégico)',
            metas: [
              { name: 'description',  content:'It is the most innovative customs model to expedite your cargo and bring the dispatch process to your city, improving the flow of goods ...' },
              { name: 'keywords', content: 'Recinto Estratégico' },

              { property: 'og:site_name',  content: 'What is a Free Trade Zone (Recinto Fiscalizado estratégico)'},
              { property: 'og:title',  content: 'What is a Free Trade Zone (Recinto Fiscalizado estratégico)'},
              { property: 'og:description',  content: 'It is the most innovative customs model to expedite your cargo and bring the dispatch process to your city, improving the flow of goods ...'},
              { property: 'og:image',  content: 'assets/img/blog-post_img-6.jpg'},
              { property: 'og:image:type',  content: 'image/jpg' },
              { property: 'og:image:width',  content: '871' },
              { property: 'og:image:height',  content: '437' },
              { property: 'og:image:alt',  content: 'Post' },

              { name: 'twitter:creator', content: 'What is a Free Trade Zone (Recinto Fiscalizado estratégico)'},
              { name: 'twitter:title', content: 'What is a Free Trade Zone (Recinto Fiscalizado estratégico)'},
              { name: 'twitter:description', content: 'It is the most innovative customs model to expedite your cargo and bring the dispatch process to your city, improving the flow of goods ...'},
              { name: 'twitter:image', content: 'assets/img/blog-post_img-6.jpg'},
              { name: 'twitter:image:alt', content: 'Post'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'DeuFivePointsComponent':
          data = {
            title: 'Die 5 grundlegenden Punkte zur NOM-ETIKETTIERUNG von Handelsinformationen für Zwischenprodukte',
            metas: [
              { name: 'description',  content:'In Mexiko gilt die vom Wirtschaftsministerium erweiterte neue Verordnung zur NOM-Kennzeichnung, die jetzt für Zwischenprodukte gilt ...' },
              { name: 'keywords', content: 'soluciones logísticas, soluciones financieras, infraestructura' },

              { property: 'og:site_name',  content: 'Die 5 grundlegenden Punkte zur NOM-ETIKETTIERUNG von Handelsinformationen für Zwischenprodukte'},
              { property: 'og:title',  content: 'Die 5 grundlegenden Punkte zur NOM-ETIKETTIERUNG von Handelsinformationen für Zwischenprodukte'},
              { property: 'og:description',  content: 'In Mexiko gilt die vom Wirtschaftsministerium erweiterte neue Verordnung zur NOM-Kennzeichnung, die jetzt für Zwischenprodukte gilt ...'},
              { property: 'og:image',  content: 'assets/img/blog-post_img-4.jpg'},
              { property: 'og:image:type',  content: 'image/jpg' },
              { property: 'og:image:width',  content: '871' },
              { property: 'og:image:height',  content: '437' },
              { property: 'og:image:alt',  content: 'Post' },

              { name: 'twitter:creator', content: 'Die 5 grundlegenden Punkte zur NOM-ETIKETTIERUNG von Handelsinformationen für Zwischenprodukte'},
              { name: 'twitter:title', content: 'Die 5 grundlegenden Punkte zur NOM-ETIKETTIERUNG von Handelsinformationen für Zwischenprodukte'},
              { name: 'twitter:description', content: 'In Mexiko gilt die vom Wirtschaftsministerium erweiterte neue Verordnung zur NOM-Kennzeichnung, die jetzt für Zwischenprodukte gilt ...'},
              { name: 'twitter:image', content: 'assets/img/blog-post_img-4.jpg'},
              { name: 'twitter:image:alt', content: 'Post'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'DeuFiveTvProgramsComponent':
          data = {
            title: '5 TV-Sendungen We Logistics Love | SB Group',
            metas: [
              { name: 'description',  content:'Immer am Abgrund am Rande eines neuen Straßendramas zu bleiben, zeigten uns tödliche Routen das Leben eines Teams ...' },
              { name: 'keywords', content: 'soluciones logísticas, soluciones financieras, infraestructura' },

              { property: 'og:site_name',  content: '5 TV-Sendungen We Logistics Love | SB Group'},
              { property: 'og:title',  content: '5 TV-Sendungen We Logistics Love | SB Group'},
              { property: 'og:description',  content: 'Immer am Abgrund am Rande eines neuen Straßendramas zu bleiben, zeigten uns tödliche Routen das Leben eines Teams ...'},
              { property: 'og:image',  content: 'assets/img/blog-post_img.jpg'},
              { property: 'og:image:type',  content: 'image/jpg' },
              { property: 'og:image:width',  content: '871' },
              { property: 'og:image:height',  content: '437' },
              { property: 'og:image:alt',  content: 'Post' },

              { name: 'twitter:creator', content: '5 TV-Sendungen We Logistics Love | SB Group'},
              { name: 'twitter:title', content: '5 TV-Sendungen We Logistics Love | SB Group'},
              { name: 'twitter:description', content: 'Immer am Abgrund am Rande eines neuen Straßendramas zu bleiben, zeigten uns tödliche Routen das Leben eines Teams ...'},
              { name: 'twitter:image', content: 'assets/img/blog-post_img.jpg'},
              { name: 'twitter:image:alt', content: 'Post'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'DeuForbiddenObjectsComponent':
          data = {
            title: '11 Verbotene Objekte zum Importieren und Exportieren in verschiedene Länder',
            metas: [
              { name: 'description',  content:'Vermissen Sie Reisen? In Anbetracht dessen, dass wir leider nur eingeschränkt oder eingeschränkt reisen können ...' },
              { name: 'keywords', content: 'soluciones logísticas, soluciones financieras, infraestructura' },

              { property: 'og:site_name',  content: '11 Verbotene Objekte zum Importieren und Exportieren in verschiedene Länder'},
              { property: 'og:title',  content: '11 Verbotene Objekte zum Importieren und Exportieren in verschiedene Länder'},
              { property: 'og:description',  content: 'Vermissen Sie Reisen? In Anbetracht dessen, dass wir leider nur eingeschränkt oder eingeschränkt reisen können ...'},
              { property: 'og:image',  content: 'assets/img/blog-post_img-3.jpg'},
              { property: 'og:image:type',  content: 'image/jpg' },
              { property: 'og:image:width',  content: '871' },
              { property: 'og:image:height',  content: '437' },
              { property: 'og:image:alt',  content: 'Post' },

              { name: 'twitter:creator', content: '11 Verbotene Objekte zum Importieren und Exportieren in verschiedene Länder'},
              { name: 'twitter:title', content: '11 Verbotene Objekte zum Importieren und Exportieren in verschiedene Länder'},
              { name: 'twitter:description', content: 'Vermissen Sie Reisen? In Anbetracht dessen, dass wir leider nur eingeschränkt oder eingeschränkt reisen können ...'},
              { name: 'twitter:image', content: 'assets/img/blog-post_img-3.jpg'},
              { name: 'twitter:image:alt', content: 'Post'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'DeuKontaktComponent':
          data = {
            title: 'Kontakt | SB Group | Logistik- und Finanzlösungen',
            metas: [
              { name: 'description',  content:'Wir würden Ihnen gerne helfen, überall hin zu gelangen.' },
              { name: 'keywords', content: 'industria, logística, aduana, free trade zone, importación, exportación, freight, free trade zone, arrendamiento, leasing, inversión, financiamiento, logistics, despacho aduanal, frontera, aeropuerto, transporte, artículo, carretera, servicio aéreo, servicio marítimo, trailer, contenedor, oficinas, offices' },

              { property: 'og:site_name',  content: 'Kontakt | SB Group | Logistik- und Finanzlösungen'},
              { property: 'og:title',  content: 'Kontakt | SB Group | Logistik- und Finanzlösungen'},
              { property: 'og:description',  content: 'Wir würden Ihnen gerne helfen, überall hin zu gelangen.'},
              { property: 'og:image',  content: 'assets/img/banner-blog.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '520' },
              { property: 'og:image:alt',  content: 'Contacto' },

              { name: 'twitter:creator', content: 'Kontakt | SB Group | Logistik- und Finanzlösungen'},
              { name: 'twitter:title', content: 'Kontakt | SB Group | Logistik- und Finanzlösungen'},
              { name: 'twitter:description', content: 'Wir würden Ihnen gerne helfen, überall hin zu gelangen.'},
              { name: 'twitter:image', content: 'assets/banner-blog.png'},
              { name: 'twitter:image:alt', content: 'contacto'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'DeuNewsletterComponent':
          data = {
            title: 'Newsletter | Die SB Group ist ein Integrator für Logistiklösungen',
            metas: [
              { name: 'description',  content:'Descripción: Finden Sie die wichtigsten Veranstaltungen für die Branche aus Kongressen, Webinaren und Konferenzen.' },
              { name: 'keywords', content: 'industria, logística, aduana, free trade zone, importación, exportación, freight, free trade zone, arrendamiento, leasing, inversión, financiamiento, logistics, despacho aduanal, frontera, aeropuerto, transporte, artículo, carretera, servicio aéreo, servicio marítimo, trailer, contenedor, oficinas, offices' },

              { property: 'og:site_name',  content: 'Newsletter | Die SB Group ist ein Integrator für Logistiklösungen'},
              { property: 'og:title',  content: 'Newsletter | Die SB Group ist ein Integrator für Logistiklösungen'},
              { property: 'og:description',  content: 'Descripción: Finden Sie die wichtigsten Veranstaltungen für die Branche aus Kongressen, Webinaren und Konferenzen.'},
              { property: 'og:image',  content: 'assets/img/banner-newsletter.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '520' },
              { property: 'og:image:alt',  content: 'Newsletter' },

              { name: 'twitter:creator', content: 'Newsletter | Die SB Group ist ein Integrator für Logistiklösungen'},
              { name: 'twitter:title', content: 'Newsletter | Die SB Group ist ein Integrator für Logistiklösungen'},
              { name: 'twitter:description', content: 'Descripción: Finden Sie die wichtigsten Veranstaltungen für die Branche aus Kongressen, Webinaren und Konferenzen.'},
              { name: 'twitter:image', content: 'assets/img/banner-newsletter.png'},
              { name: 'twitter:image:alt', content: 'Newsletter'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'DeuRessourcenComponent':
          data = {
            title: 'Ressourcen | Die SB Group ist ein Integrator für Logistiklösungen',
            metas: [
              { name: 'description',  content:'Hier finden Sie kostenlose Informationen zur Branche.' },
              { name: 'keywords', content: 'material, industria, logística, aduana, free trade zone, importación, exportación, freight, free trade zone, arrendamiento, leasing, inversión, financiamiento, logistics, despacho aduanal, frontera, aeropuerto, transporte, artículo, carretera, servicio aéreo, servicio marítimo, trailer, contenedor, oficinas, offices' },

              { property: 'og:site_name',  content: 'Ressourcen | Die SB Group ist ein Integrator für Logistiklösungen'},
              { property: 'og:title',  content: 'Ressourcen | Die SB Group ist ein Integrator für Logistiklösungen'},
              { property: 'og:description',  content: 'Hier finden Sie kostenlose Informationen zur Branche.'},
              { property: 'og:image',  content: 'assets/img/banner-recursos.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '498' },
              { property: 'og:image:alt',  content: 'Resources' },

              { name: 'twitter:creator', content: 'Ressourcen | Die SB Group ist ein Integrator für Logistiklösungen'},
              { name: 'twitter:title', content: 'Ressourcen | Die SB Group ist ein Integrator für Logistiklösungen'},
              { name: 'twitter:description', content: 'Hier finden Sie kostenlose Informationen zur Branche.'},
              { name: 'twitter:image', content: 'assets/img/banner-recursos.png'},
              { name: 'twitter:image:alt', content: 'Resources'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;


        case 'EngResourcesComponent' :
          data = {
            title: 'Resources | SB Group is a logistic solutions integrator',
            metas: [
              { name: 'description',  content:'Find free information about the industry.' },
              { name: 'keywords', content: 'material, industria, logística, aduana, free trade zone, importación, exportación, freight, free trade zone, arrendamiento, leasing, inversión, financiamiento, logistics, despacho aduanal, frontera, aeropuerto, transporte, artículo, carretera, servicio aéreo, servicio marítimo, trailer, contenedor, oficinas, offices' },

              { property: 'og:site_name',  content: 'Resources | SB Group is a logistic solutions integrator'},
              { property: 'og:title',  content: 'Resources | SB Group is a logistic solutions integrator'},
              { property: 'og:description',  content: 'Find free information about the industry.'},
              { property: 'og:image',  content: 'assets/img/banner-recursos.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '498' },
              { property: 'og:image:alt',  content: 'Recursos' },

              { name: 'twitter:creator', content: 'Resources | SB Group is a logistic solutions integrator'},
              { name: 'twitter:title', content: 'Resources | SB Group is a logistic solutions integrator'},
              { name: 'twitter:description', content: 'Find free information about the industry.'},
              { name: 'twitter:image', content: 'assets/img/banner-recursos.png'},
              { name: 'twitter:image:alt', content: 'Recursos'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'DeuSbFinancialServicesComponent':
          data = {
            title: 'SB Financial Services | Die SB Group ist ein Integrator für Logistiklösungen',
            metas: [
              { name: 'description',  content:'Wir bieten unseren Kunden Finanzlösungen und Schutz mithilfe von Technologie, um die Agilität ihres Geschäfts zu erhöhen.' },
              { name: 'keywords', content: 'soluciones financieras, financiamiento, travel, exportación, importación, aeropuerto, marítimo, freight, sea freight, air freight, transportación, transporte terrestre, terrestre, import, export, recinto fiscalizado, recinto fiscalizado estratégico, frigo, hazmat, almacén, almacenes, oficinas, offices, rental, leasing' },

              { property: 'og:site_name',  content: 'SB Financial Services | Die SB Group ist ein Integrator für Logistiklösungen'},
              { property: 'og:title',  content: 'SB Financial Services | Die SB Group ist ein Integrator für Logistiklösungen'},
              { property: 'og:description',  content: 'Wir bieten unseren Kunden Finanzlösungen und Schutz mithilfe von Technologie, um die Agilität ihres Geschäfts zu erhöhen.'},
              { property: 'og:image',  content: 'assets/img/banner-financial.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '736' },
              { property: 'og:image:alt',  content: 'SB Financial Services' },

              { name: 'twitter:creator', content: 'SB Financial Services | Die SB Group ist ein Integrator für Logistiklösungen'},
              { name: 'twitter:title', content: 'SB Financial Services | Die SB Group ist ein Integrator für Logistiklösungen'},
              { name: 'twitter:description', content: 'Wir bieten unseren Kunden Finanzlösungen und Schutz mithilfe von Technologie, um die Agilität ihres Geschäfts zu erhöhen.'},
              { name: 'twitter:image', content: 'assets/img/banner-financial.png'},
              { name: 'twitter:image:alt', content: 'SB Financial Services'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'DeuSbFreeTradeZoneComponent':
          data = {
            title: 'SB Free Trade Zone | Die SB Group ist ein Integrator für Logistiklösungen',
            metas: [
              { name: 'description',  content:'Wir vereinfachen und fördern Zollprozesse in Mexiko mit solider Infrastruktur und Compliance-Expertise.' },
              { name: 'keywords', content: 'arrendamiento, travel, exportación, importación, aeropuerto, marítimo, freight, sea freight, air freight, transportación, transporte terrestre, terrestre, free trade zone, trade, import, export, recinto fiscalizado, recinto fiscalizado estratégico, frigo, hazmat, almacén, almacenes, oficinas, offices, rental, leasing' },

              { property: 'og:site_name',  content: 'SB Free Trade Zone | Die SB Group ist ein Integrator für Logistiklösungen'},
              { property: 'og:title',  content: 'SB Free Trade Zone | Die SB Group ist ein Integrator für Logistiklösungen'},
              { property: 'og:description',  content: 'Wir vereinfachen und fördern Zollprozesse in Mexiko mit solider Infrastruktur und Compliance-Expertise.'},
              { property: 'og:image',  content: 'assets/img/banner-tradezone.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '736' },
              { property: 'og:image:alt',  content: 'SB Free Trade Zone' },

              { name: 'twitter:creator', content: 'SB Free Trade Zone | Die SB Group ist ein Integrator für Logistiklösungen'},
              { name: 'twitter:title', content: 'SB Free Trade Zone | Die SB Group ist ein Integrator für Logistiklösungen'},
              { name: 'twitter:description', content: 'Wir vereinfachen und fördern Zollprozesse in Mexiko mit solider Infrastruktur und Compliance-Expertise.'},
              { name: 'twitter:image', content: 'assets/img/banner-tradezone.png'},
              { name: 'twitter:image:alt', content: 'SB Free Trade Zone'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'DeuSbLogisticsComponent':
          data = {
            title: 'SB Logistics | Die SB Group ist ein Integrator für Logistiklösungen',
            metas: [
              { name: 'description',  content:'Global growth starts with local expertise. Ihre Lieferkette ist einzigartig, daher integrieren wir die besten Lösungen in unsere Dienstleistungen.' },
              { name: 'keywords', content: 'logistica, logistics, arrendamiento, travel, exportación, importación, aeropuerto, marítimo, freight, sea freight, air freight, transportación, transporte terrestre, terrestre, servicios de logistica, import, export, recinto fiscalizado, recinto fiscalizado estratégico, frigo, hazmat, almacén, almacenes, oficinas, offices, rental, leasing' },

              { property: 'og:site_name',  content: 'SB Logistics | Die SB Group ist ein Integrator für Logistiklösungen'},
              { property: 'og:title',  content: 'SB Logistics | Die SB Group ist ein Integrator für Logistiklösungen'},
              { property: 'og:description',  content: 'Global growth starts with local expertise. Ihre Lieferkette ist einzigartig, daher integrieren wir die besten Lösungen in unsere Dienstleistungen.'},
              { property: 'og:image',  content: 'assets/img/banner-logistics.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '642' },
              { property: 'og:image:alt',  content: 'SB Free Trade Zone' },

              { name: 'twitter:creator', content: 'SB Logistics | Die SB Group ist ein Integrator für Logistiklösungen'},
              { name: 'twitter:title', content: 'SB Logistics | Die SB Group ist ein Integrator für Logistiklösungen'},
              { name: 'twitter:description', content: 'Global growth starts with local expertise. Ihre Lieferkette ist einzigartig, daher integrieren wir die besten Lösungen in unsere Dienstleistungen.'},
              { name: 'twitter:image', content: 'assets/img/banner-logistics.png'},
              { name: 'twitter:image:alt', content: 'SB Free Trade Zone'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;

        case 'DeuStepsComponent':
          data = {
            title: 'Steps to make an appointment | SB Group is a logistic solutions integrator',
            metas: [
              { name: 'description',  content:'' },
              { name: 'keywords', content: '' },

              { property: 'og:site_name',  content: 'Steps to make an appointment | SB Group is a logistic solutions integrator'},
              { property: 'og:title',  content: 'Steps to make an appointment | SB Group is a logistic solutions integrator'},
              { property: 'og:description',  content: ''},
              { property: 'og:image',  content: 'assets/imgbanner-home.png'},
              { property: 'og:image:type',  content: 'image/png' },
              { property: 'og:image:width',  content: '1440' },
              { property: 'og:image:height',  content: '752' },
              { property: 'og:image:alt',  content: 'SB Group' },
              { name: 'twitter:creator', content: 'Steps to make an appointment | SB Group is a logistic solutions integrator'},
              { name: 'twitter:title', content: 'Steps to make an appointment | SB Group is a logistic solutions integrator'},
              { name: 'twitter:description', content: ''},
              { name: 'twitter:image', content: 'assets/imgbanner-home.png'},
              { name: 'twitter:image:alt', content: 'SB Group'},
            ]
          };
          data.metas = data.metas.concat( communtMetas );
          this.updateTitle( data );
          break;
      }
    }

  }

  updateTitle( data ) {
    // console.log( data );
    this.titleService.setTitle( data.title );
    data.metas.forEach( el => {
      this.metaService.updateTag( el );
    });
  }
}
