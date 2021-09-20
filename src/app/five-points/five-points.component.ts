import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-five-points',
  templateUrl: './five-points.component.html',
  styleUrls: ['./five-points.component.css']
})
export class FivePointsComponent implements OnInit {

  constructor(
    private seo: SEOService,
    private actRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.seo.metaTags( String(this.actRoute.snapshot.routeConfig.component.name) );
  }

}
