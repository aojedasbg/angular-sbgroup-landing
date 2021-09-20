import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-eng-fiscal-area',
  templateUrl: './eng-fiscal-area.component.html',
  styleUrls: ['./eng-fiscal-area.component.css']
})
export class EngFiscalAreaComponent implements OnInit {

  constructor(
    
    private seo: SEOService,
    private actRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.seo.metaTags( String(this.actRoute.snapshot.routeConfig.component.name) );
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
