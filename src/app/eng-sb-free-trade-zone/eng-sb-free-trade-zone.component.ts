import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapsDataService } from '../services/maps-data.service';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-eng-sb-free-trade-zone',
  templateUrl: './eng-sb-free-trade-zone.component.html',
  styleUrls: ['./eng-sb-free-trade-zone.component.css']
})
export class EngSbFreeTradeZoneComponent implements OnInit {

  openedWindow : number = 0; // alternative: array of numbers
  @ViewChild('inlandPort') inlandPort: ElementRef;
  @ViewChild('freeTradeZone') freeTradeZone: ElementRef;
  @ViewChild('immex') immex: ElementRef;
  @ViewChild('customsServices') customsServices: ElementRef;
  public mapData: any;

  constructor(
    private seo: SEOService,
    private actRoute: ActivatedRoute,
    private mapsData: MapsDataService,
  ) { }

  ngOnInit(): void {
    this.mapData = this.mapsData.engFreeTrade();
    this.seo.metaTags( String(this.actRoute.snapshot.routeConfig.component.name) );
  }
  
  ngAfterViewInit() {
    // this returns null
    if( this.actRoute.snapshot.fragment != undefined ) {
      let focus;
      switch( this.actRoute.snapshot.fragment ) {
        case 'inland-port' : focus = this.inlandPort.nativeElement; break
        case 'free-trade-zone'  : focus = this.freeTradeZone.nativeElement; break
        case 'immex' : focus = this.immex.nativeElement; break
        case 'customs-services' : focus = this.customsServices.nativeElement; break
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
