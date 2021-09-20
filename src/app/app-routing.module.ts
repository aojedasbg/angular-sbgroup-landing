import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SbLogisticsComponent } from './sb-logistics/sb-logistics.component';
import { IndexComponent } from './index/index.component';
import { SbFreeTradeZoneComponent } from './sb-free-trade-zone/sb-free-trade-zone.component';
import { SbFinancialServicesComponent } from './sb-financial-services/sb-financial-services.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PasosComponent } from './pasos/pasos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FiveTvProgramsComponent } from './five-tv-programs/five-tv-programs.component';
import { ForbiddenObjectsComponent } from './forbidden-objects/forbidden-objects.component';
import { FivePointsComponent } from './five-points/five-points.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CourierComponent } from './courier/courier.component';
import { RecintoFiscalizadoComponent } from './recinto-fiscalizado/recinto-fiscalizado.component';
import { RecursosComponent } from './recursos/recursos.component';
import { EngIndexComponent } from './eng-index/eng-index.component';
import { EngFiveTvProgramsComponent } from './eng-five-tv-programs/eng-five-tv-programs.component';
import { EngForbiddenObjectsComponent } from './eng-forbidden-objects/eng-forbidden-objects.component';
import { EngBlogComponent } from './eng-blog/eng-blog.component';
import { EngContactComponent } from './eng-contact/eng-contact.component';
import { EngFivePointsComponent } from './eng-five-points/eng-five-points.component';
import { EngNewsletterComponent } from './eng-newsletter/eng-newsletter.component';
import { EngCourierComponent } from './eng-courier/eng-courier.component';
import { EngFiscalAreaComponent } from './eng-fiscal-area/eng-fiscal-area.component';
import { EngResourcesComponent } from './eng-resources/eng-resources.component';
import { EngSbFinancialServicesComponent } from './eng-sb-financial-services/eng-sb-financial-services.component';
import { EngSbFreeTradeZoneComponent } from './eng-sb-free-trade-zone/eng-sb-free-trade-zone.component';
import { EngSbLogisticsComponent } from './eng-sb-logistics/eng-sb-logistics.component';
import { EngStepsComponent } from './eng-steps/eng-steps.component';
import { DeuIndexComponent } from './deu-index/deu-index.component';
import { DeuFiveTvProgramsComponent } from './deu-five-tv-programs/deu-five-tv-programs.component';
import { DeuForbiddenObjectsComponent } from './deu-forbidden-objects/deu-forbidden-objects.component';
import { DeuBlogComponent } from './deu-blog/deu-blog.component';
import { DeuKontaktComponent } from './deu-kontakt/deu-kontakt.component';
import { DeuFivePointsComponent } from './deu-five-points/deu-five-points.component';
import { DeuNewsletterComponent } from './deu-newsletter/deu-newsletter.component';
import { DeuCourierComponent } from './deu-courier/deu-courier.component';
import { DeuFiscalAreaComponent } from './deu-fiscal-area/deu-fiscal-area.component';
import { DeuRessourcenComponent } from './deu-ressourcen/deu-ressourcen.component';
import { DeuSbFinancialServicesComponent } from './deu-sb-financial-services/deu-sb-financial-services.component';
import { DeuSbFreeTradeZoneComponent } from './deu-sb-free-trade-zone/deu-sb-free-trade-zone.component';
import { DeuSbLogisticsComponent } from './deu-sb-logistics/deu-sb-logistics.component';
import { DeuStepsComponent } from './deu-steps/deu-steps.component';
import { DigitalSbLogisticsComponent } from './digital-sb-logistics/digital-sb-logistics.component';
import { DigitalSbFreeTradeZoneComponent } from './digital-sb-free-trade-zone/digital-sb-free-trade-zone.component';
import { DigitalSbFinancialServicesComponent } from './digital-sb-financial-services/digital-sb-financial-services.component';
import { DigitalSbGroupComponent } from './digital-sb-group/digital-sb-group.component';
import { SolicitudComponent } from './solicitud/solicitud.component';


const routes: Routes = [
  { path: '', redirectTo: 'index.html', pathMatch: 'full' },
  { path: 'index.html', component: IndexComponent },
  { path: 'sb-logistics.html', component: SbLogisticsComponent },
  { path: 'sb-financial-services.html',
    children: [
      {path: '', component: SbFinancialServicesComponent},
      {path: 'solicitud', component: SolicitudComponent},
      {path: 'leasing/solicitud', component: SolicitudComponent},
    ]
  },
  { path: 'sb-free-trade-zone.html', component: SbFreeTradeZoneComponent},
  { path: 'blog.html', component: BlogComponent},
  { path: 'contacto.html', component: ContactoComponent},
  { path: 'pasos.html', component: PasosComponent},
  { path: '404.html', component: NotFoundComponent},
  { path: '5-programas-de-tv-que-los-logisticos-amamos.html', component: FiveTvProgramsComponent},
  { path: '11-objetos-prohibidos-para-importar-y-exportar-en-diferentes-paises.html', component: ForbiddenObjectsComponent},
  { path: 'los-5-puntos-basicos-sobre-etiquetado-nom-de-informacion-comercial-para-bienes-intermedios.html', component: FivePointsComponent},
  { path: 'newsletter.html', component: NewsletterComponent},
  { path: 'que-es-un-courier.html', component: CourierComponent},
  { path: 'que-es-un-recinto-fiscalizado-estrategico.html', component: RecintoFiscalizadoComponent},
  { path: 'recursos.html', component: RecursosComponent},
  { path: 'eng',
    children:[
      { path: '', redirectTo: 'index.html', pathMatch: 'full' },
      {path:'index.html', component: EngIndexComponent},
      {path:'sb-logistics.html', component: EngSbLogisticsComponent},
      {path:'sb-free-trade-zone.html', component: EngSbFreeTradeZoneComponent},
      {path:'sb-financial-services.html', component: EngSbFinancialServicesComponent},
      {path:'blog.html', component: EngBlogComponent},
      {path:'contact.html', component: EngContactComponent},
      {path:'steps.html', component: EngStepsComponent},
      {path:'5-programas-de-tv-que-los-logisticos-amamos.html', component: EngFiveTvProgramsComponent},
      {path:'11-objetos-prohibidos-para-importar-y-exportar-en-diferentes-paises.html', component: EngForbiddenObjectsComponent},
      {path:'los-5-puntos-basicos-sobre-etiquetado-nom-de-informacion-comercial-para-bienes-intermedios.html', component: EngFivePointsComponent},
      {path:'newsletter.html', component: EngNewsletterComponent},
      {path:'que-es-un-courier.html', component: EngCourierComponent},
      {path:'que-es-un-recinto-fiscalizado-estrategico.html', component: EngFiscalAreaComponent},
      {path:'resources.html', component: EngResourcesComponent},
    ]
  },
  { path: 'deu',
    children:[
      { path: '', redirectTo: 'index.html', pathMatch: 'full' },
      {path:'index.html', component: DeuIndexComponent},
      {path:'5-programas-de-tv-que-los-logisticos-amamos.html', component: DeuFiveTvProgramsComponent},
      {path:'11-objetos-prohibidos-para-importar-y-exportar-en-diferentes-paises.html', component: DeuForbiddenObjectsComponent},
      {path:'blog.html', component: DeuBlogComponent},
      {path:'kontakt.html', component: DeuKontaktComponent},
      {path:'los-5-puntos-basicos-sobre-etiquetado-nom-de-informacion-comercial-para-bienes-intermedios.html', component: DeuFivePointsComponent},
      {path:'newsletter.html', component: DeuNewsletterComponent},
      {path:'que-es-un-courier.html', component: DeuCourierComponent},
      {path:'que-es-un-recinto-fiscalizado-estrategico.html', component: DeuFiscalAreaComponent},
      {path:'ressourcen.html', component: DeuRessourcenComponent},
      {path:'sb-financial-services.html', component: DeuSbFinancialServicesComponent},
      {path:'sb-free-trade-zone.html', component: DeuSbFreeTradeZoneComponent},
      {path:'sb-logistics.html', component: DeuSbLogisticsComponent},
      {path:'steps.html', component: DeuStepsComponent},
    ]
  },
  { path: 'sb-logistics',
    children:[
      { path: '', pathMatch: 'full', component: NotFoundComponent },
      {path:':url', component: DigitalSbLogisticsComponent},
    ]
  },
  { path: 'sb-free-trade-zone',
    children:[
      { path: '', pathMatch: 'full', component: NotFoundComponent },
      {path:':url', component: DigitalSbFreeTradeZoneComponent},
    ]
  },
  { path: 'sb-financial-services',
    children:[
      { path: '', pathMatch: 'full', component: NotFoundComponent },
      {path:':url', component: DigitalSbFinancialServicesComponent},
    ]
  },
  { path: 'sb-group',
    children:[
      { path: '', pathMatch: 'full', component: NotFoundComponent },
      {path:':url', component: DigitalSbGroupComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
