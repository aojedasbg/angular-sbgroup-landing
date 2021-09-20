import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CardService } from '../services/card.service';
import { Title, Meta } from '@angular/platform-browser';
import { SEOService } from '../services/seo.service';
import { ActivatedRoute } from '@angular/router';
import { RecaptchaErrorParameters } from "ng-recaptcha";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',]
})
export class IndexComponent implements OnInit {

  name: string;
  email: string;
  service: string;
  message: string;
  contactInfoData = {};

  sendButton = 0;
  siteKey = environment.sysConfig.siteKey;
  
  title = 'Angular 10 Universal Example';
  constructor(
    private titleService: Title, 
    private metaService: Meta,
    private seoService: SEOService,
    private cardService: CardService,
    private actRoute: ActivatedRoute,
    private seo: SEOService
    ) { }

  ngOnInit(): void {
    // console.log( this.actRoute.snapshot.routeConfig.component.name )
    this.seo.metaTags( String(this.actRoute.snapshot.routeConfig.component.name) );
  }

  sendContactInfo(){
    // console.log('aqui comienza lo chido');
    this.name = $( 'input#name' ).val();
    this.email =  $( 'input#email' ).val();
    this.service =  $( 'select#servicio' ).val();
    this.message = $( 'textarea#message2' ).val();

    if( this.name == "" || this.name== undefined || this.name == null || this.email == "" || this.email== undefined || this.email == null ) {
      alert('Completa los campos, por favor');
      return;
    }

    this.contactInfoData = {
      name: this.name,
      email: this.email,
      service: this.service,
      message: this.message,
      lang: 'esp'
    }

    this.cardService.emailInformation(this.contactInfoData).subscribe(response => {
      if(response.status === 1){
        alert('Información enviada')
      }else{
        alert('Ocurrio un error')
      }
    })

  }

  public resolved(captchaResponse: string): void {
    if(captchaResponse === null){
      this.sendButton = 0;
    }else{
      this.sendButton = 1;
    }
  }

  public onError(errorDetails: RecaptchaErrorParameters): void {
    this.sendButton = 0;
  }

}
