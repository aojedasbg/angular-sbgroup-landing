import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapsDataService } from '../services/maps-data.service';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-eng-sb-logistics',
  templateUrl: './eng-sb-logistics.component.html',
  styleUrls: ['./eng-sb-logistics.component.css']
})
export class EngSbLogisticsComponent implements OnInit {

  openedWindow : number = 0; // alternative: array of numbers
  @ViewChild('freightForwarding') freightForwarding: ElementRef;
  @ViewChild('urInfraExt') urInfraExt: ElementRef;
  @ViewChild('crossborder') crossborder: ElementRef;
  public mapData: any;

  constructor(
    private actRoute: ActivatedRoute,
    private mapsData: MapsDataService,
    private seo: SEOService,
    ) { }

  ngOnInit(): void {
    this.mapData = this.mapsData.engSbLogistics();
    this.seo.metaTags( String(this.actRoute.snapshot.routeConfig.component.name) );
  }
  ngAfterViewInit() {
    // this returns null
    if( this.actRoute.snapshot.fragment != undefined ) {
      let focus;
      switch( this.actRoute.snapshot.fragment ) {
        case 'freight-forwarding' : focus = this.freightForwarding.nativeElement; break
        case 'your-infrastructure-extension'  : focus = this.urInfraExt.nativeElement; break
        case 'crossborder' : focus = this.crossborder.nativeElement; break
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
