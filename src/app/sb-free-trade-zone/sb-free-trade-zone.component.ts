import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapsDataService } from '../services/maps-data.service';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-sb-free-trade-zone',
  templateUrl: './sb-free-trade-zone.component.html',
  styleUrls: ['./sb-free-trade-zone.component.css']
})
export class SbFreeTradeZoneComponent implements OnInit {

  openedWindow : number = 0; // alternative: array of numbers
  public mapData: any;
  @ViewChild('recintoFizcalizado') recintoFizcalizado: ElementRef;
  @ViewChild('recintoFizcalizadoEstrategico') recintoFizcalizadoEstrategico: ElementRef;
  @ViewChild('immex') immex: ElementRef;
  @ViewChild('despachoAduanal') despachoAduanal: ElementRef;
  constructor(
    private actRoute: ActivatedRoute,
    private mapsData: MapsDataService,
    private seo: SEOService
    ) { }

  ngOnInit(): void {
    this.mapData = this.mapsData.sbFreeTrade();
    this.seo.metaTags( String(this.actRoute.snapshot.routeConfig.component.name) );
  }

  ngAfterViewInit() {
    // this returns null
    if( this.actRoute.snapshot.fragment != undefined ) {
      let focus;
      switch( this.actRoute.snapshot.fragment ) {
        case 'recinto-fizcalizado' : focus = this.recintoFizcalizado.nativeElement; break
        case 'recinto-fizcalizado-estrategico'  : focus = this.recintoFizcalizadoEstrategico.nativeElement; break
        case 'immex' : focus = this.immex.nativeElement; break
        case 'despacho-aduanal' : focus = this.despachoAduanal.nativeElement; break
        
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
