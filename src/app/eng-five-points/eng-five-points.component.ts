import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-eng-five-points',
  templateUrl: './eng-five-points.component.html',
  styleUrls: ['./eng-five-points.component.css']
})
export class EngFivePointsComponent implements OnInit {

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
