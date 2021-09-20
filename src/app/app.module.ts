import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxVcardModule } from 'ngx-vcard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { TestComponent } from './test/test.component';
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
import { DeuFiveTvProgramsComponent } from './deu-five-tv-programs/deu-five-tv-programs.component';
import { DeuForbiddenObjectsComponent } from './deu-forbidden-objects/deu-forbidden-objects.component';
import { DeuBlogComponent } from './deu-blog/deu-blog.component';
import { DeuIndexComponent } from './deu-index/deu-index.component';
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
import { AgmCoreModule } from '@agm/core';
import { RecaptchaModule } from 'ng-recaptcha';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SbLogisticsComponent,
    SbFreeTradeZoneComponent,
    SbFinancialServicesComponent,
    BlogComponent,
    ContactoComponent,
    PasosComponent,
    NotFoundComponent,
    FiveTvProgramsComponent,
    ForbiddenObjectsComponent,
    FivePointsComponent,
    NewsletterComponent,
    CourierComponent,
    RecintoFiscalizadoComponent,
    RecursosComponent,
    TestComponent,
    EngIndexComponent,
    EngFiveTvProgramsComponent,
    EngForbiddenObjectsComponent,
    EngBlogComponent,
    EngContactComponent,
    EngFivePointsComponent,
    EngNewsletterComponent,
    EngCourierComponent,
    EngFiscalAreaComponent,
    EngResourcesComponent,
    EngSbFinancialServicesComponent,
    EngSbFreeTradeZoneComponent,
    EngSbLogisticsComponent,
    EngStepsComponent,
    DeuFiveTvProgramsComponent,
    DeuForbiddenObjectsComponent,
    DeuBlogComponent,
    DeuIndexComponent,
    DeuKontaktComponent,
    DeuFivePointsComponent,
    DeuNewsletterComponent,
    DeuCourierComponent,
    DeuFiscalAreaComponent,
    DeuRessourcenComponent,
    DeuSbFinancialServicesComponent,
    DeuSbFreeTradeZoneComponent,
    DeuSbLogisticsComponent,
    DeuStepsComponent,
    DigitalSbLogisticsComponent,
    DigitalSbFreeTradeZoneComponent,
    DigitalSbFinancialServicesComponent,
    DigitalSbGroupComponent,
    SolicitudComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxVcardModule,
    RecaptchaModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAm6ePcRpA8G1MRIg8MYkZYMgH5dPiKVZY'
      // apiKey: 'AIzaSyBYRWc8A6_P210q8HDD17bEA0NfPyg03dU'
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
