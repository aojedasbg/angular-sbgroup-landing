import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapsDataService } from '../services/maps-data.service';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-eng-sb-financial-services',
  templateUrl: './eng-sb-financial-services.component.html',
  styleUrls: ['./eng-sb-financial-services.component.css']
})
export class EngSbFinancialServicesComponent implements OnInit {

  openedWindow : number = 0; // alternative: array of numbers
  @ViewChild('leasing') leasing: ElementRef;
  @ViewChild('realEstate') realEstate: ElementRef;
  @ViewChild('riskManagement') riskManagement: ElementRef;
  public mapData: any;
  
  constructor(
    private seo: SEOService,
    private actRoute: ActivatedRoute,
    private mapsData: MapsDataService,
  ) { }

  ngOnInit(): void {
    this.seo.metaTags( String(this.actRoute.snapshot.routeConfig.component.name) );
  }

  ngAfterViewInit() {
    // this returns null
    if( this.actRoute.snapshot.fragment != undefined ) {
      let focus;
      switch( this.actRoute.snapshot.fragment ) {
        case 'leasing' : focus = this.leasing.nativeElement; break
        case 'real-estate'  : focus = this.realEstate.nativeElement; break
        case 'risk-management' : focus = this.riskManagement.nativeElement; break
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
