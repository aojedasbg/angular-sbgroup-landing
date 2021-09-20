import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { CardService } from '../services/card.service';
import { SEOService } from '../services/seo.service';
import { RecaptchaErrorParameters } from "ng-recaptcha";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-eng-contact',
  templateUrl: './eng-contact.component.html',
  styleUrls: ['./eng-contact.component.css']
})
export class EngContactComponent implements OnInit {

  name: string;
  email: string;
  service: string;
  message: string;
  contactInfoData = {};

  sendButton = 0;
  siteKey = environment.sysConfig.siteKey;

  constructor(private cardService: CardService,
    private seo: SEOService,
    private actRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.seo.metaTags( String(this.actRoute.snapshot.routeConfig.component.name) );
  }

  sendContactInfo(){
    // console.log('aqui comienza lo chido');
    this.name = $( 'input#name' ).val();
    this.email =  $( 'input#email' ).val();
    this.service =  $( 'select#servicio' ).val();
    this.message = $( 'textarea#message2' ).val();

    if( this.name == "" || this.name== undefined || this.name == null || this.email == "" || this.email== undefined || this.email == null ) {
      alert('Fill in the fields');
      return;
    }

    this.contactInfoData = {
      name: this.name,
      email: this.email,
      service: this.service,
      message: this.message,
      lang: 'eng'
    }

    this.cardService.emailInformation(this.contactInfoData).subscribe(response => {
      if(response.status === 1){
        alert('Information sent')
      }else{
        alert('An error has occurred')
      }
    })
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
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
