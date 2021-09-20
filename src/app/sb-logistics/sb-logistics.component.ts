import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapsDataService } from '../services/maps-data.service';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-sb-logistics',
  templateUrl: './sb-logistics.component.html',
  styleUrls: ['./sb-logistics.component.css']
})
export class SbLogisticsComponent implements OnInit {
  public mapData: any;
  openedWindow : number = 0; // alternative: array of numbers
  @ViewChild('transportacionInternacional') transportacionInternacional: ElementRef;
  @ViewChild('extiendeTuInfraestructura') extiendeTuInfraestructura: ElementRef;
  @ViewChild('crossborder') crossborder: ElementRef;

  constructor(
    private mapsData: MapsDataService,
    private actRoute: ActivatedRoute,
    private seo: SEOService
  ) { }

  ngOnInit(): void {
    this.mapData = this.mapsData.sbLogistics();
    this.seo.metaTags( String(this.actRoute.snapshot.routeConfig.component.name) );
  }

  ngAfterViewInit() {
    // this returns null
    if( this.actRoute.snapshot.fragment != undefined ) {
      let focus;
      switch( this.actRoute.snapshot.fragment ) {
        case 'transportacion-internacional' : focus = this.transportacionInternacional.nativeElement; break
        case 'extiende-tu-infraestructura'  : focus = this.extiendeTuInfraestructura.nativeElement; break
        case 'crossborder' : focus = this.crossborder.nativeElement; break
        // case '' : break
        // case '' : break
        // case '' : break
        // case '' : break
        // case '' : break
        // case '' : break
      }
      setTimeout( () => {
        this.scroll( focus );
      }, 1000 );
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
