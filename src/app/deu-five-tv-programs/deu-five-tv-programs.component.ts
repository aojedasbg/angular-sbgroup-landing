import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SEOService } from '../services/seo.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-deu-five-tv-programs',
  templateUrl: './deu-five-tv-programs.component.html',
  styleUrls: ['./deu-five-tv-programs.component.css']
})
export class DeuFiveTvProgramsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private seoService: SEOService,
    private actRoute: ActivatedRoute,
    private seo: SEOService) { }

  ngOnInit(): void {
    this.seo.metaTags( String(this.actRoute.snapshot.routeConfig.component.name) );
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
