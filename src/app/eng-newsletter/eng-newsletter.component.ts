import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-eng-newsletter',
  templateUrl: './eng-newsletter.component.html',
  styleUrls: ['./eng-newsletter.component.css']
})
export class EngNewsletterComponent implements OnInit {

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
