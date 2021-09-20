import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapsDataService } from '../services/maps-data.service';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-sb-financial-services',
  templateUrl: './sb-financial-services.component.html',
  styleUrls: ['./sb-financial-services.component.css']
})
export class SbFinancialServicesComponent implements OnInit {
  public mapData: any;
  openedWindow : number = 0; // alternative: array of numbers

  @ViewChild('arrendamiento') arrendamiento: ElementRef;
  @ViewChild('inmobiliaria') inmobiliaria: ElementRef;
  @ViewChild('asesoriaRiesgos') asesoriaRiesgos: ElementRef;

  constructor(
    private mapsData: MapsDataService,
    private actRoute: ActivatedRoute,
    private seo: SEOService
  ) { }

  ngOnInit(): void {
    // console.log( this.actRoute.snapshot.fragment );
    this.seo.metaTags( String(this.actRoute.snapshot.routeConfig.component.name) );
  }

  ngAfterViewInit() {
    // this returns null
    if( this.actRoute.snapshot.fragment != undefined ) {
      let focus;
      switch( this.actRoute.snapshot.fragment ) {
        case 'arrendamiento' : focus = this.arrendamiento.nativeElement; break
        case 'inmobiliaria'  : focus = this.inmobiliaria.nativeElement; break
        case 'asesoria-en-gestion-de-riesgos' : focus = this.asesoriaRiesgos.nativeElement; break
      }
      setTimeout( () => {
        this.scroll( focus );
      }, 2000 );
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  openWindow(id) {
    this.openedWindow = id; // alternative: push to array of numbers
  }

  isInfoWindowOpen(id) {
      return this.openedWindow == id; // alternative: check if id is in array
  }

}
