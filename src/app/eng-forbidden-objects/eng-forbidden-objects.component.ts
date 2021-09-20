import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-eng-forbidden-objects',
  templateUrl: './eng-forbidden-objects.component.html',
  styleUrls: ['./eng-forbidden-objects.component.css']
})
export class EngForbiddenObjectsComponent implements OnInit {

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
