import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-deu-sb-financial-services',
  templateUrl: './deu-sb-financial-services.component.html',
  styleUrls: ['./deu-sb-financial-services.component.css']
})
export class DeuSbFinancialServicesComponent implements OnInit {

  @ViewChild('leasing') leasing: ElementRef;
  @ViewChild('realEstate') realEstate: ElementRef;
  @ViewChild('riskManagement') riskManagement: ElementRef;
  constructor(
    private actRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private seoService: SEOService,
    private seo: SEOService) { }

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

}
