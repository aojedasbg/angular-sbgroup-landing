import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent implements OnInit {

  constructor(
    private seo: SEOService,
    private actRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.seo.metaTags( String(this.actRoute.snapshot.routeConfig.component.name) );
  }

}
