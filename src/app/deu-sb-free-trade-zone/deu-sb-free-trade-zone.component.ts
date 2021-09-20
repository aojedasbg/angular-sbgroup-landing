import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapsDataService } from '../services/maps-data.service';
import { Title, Meta } from '@angular/platform-browser';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-deu-sb-free-trade-zone',
  templateUrl: './deu-sb-free-trade-zone.component.html',
  styleUrls: ['./deu-sb-free-trade-zone.component.css']
})
export class DeuSbFreeTradeZoneComponent implements OnInit {

  openedWindow : number = 0; // alternative: array of numbers
  @ViewChild('inlandPort') inlandPort: ElementRef;
  @ViewChild('freeTradeZone') freeTradeZone: ElementRef;
  @ViewChild('immex') immex: ElementRef;
  @ViewChild('customsServices') customsServices: ElementRef;
  public mapData: any;
  constructor(
    private actRoute: ActivatedRoute,
    private mapsData: MapsDataService,
    private titleService: Title,
    private metaService: Meta,
    private seoService: SEOService,
    private seo: SEOService) { }

  ngOnInit(): void {
    this.mapData = this.mapsData.deuFreeTrade();
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
