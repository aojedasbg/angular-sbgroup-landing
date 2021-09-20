import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SEOService } from '../services/seo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deu-ressourcen',
  templateUrl: './deu-ressourcen.component.html',
  styleUrls: ['./deu-ressourcen.component.css']
})
export class DeuRessourcenComponent implements OnInit {

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
