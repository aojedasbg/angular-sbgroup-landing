import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private seo: SEOService,
    private actRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.seo.metaTags( String(this.actRoute.snapshot.routeConfig.component.name) );
  }

}
