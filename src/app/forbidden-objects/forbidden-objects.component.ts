import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-forbidden-objects',
  templateUrl: './forbidden-objects.component.html',
  styleUrls: ['./forbidden-objects.component.css']
})
export class ForbiddenObjectsComponent implements OnInit {

  constructor(
    private seo: SEOService,
    private actRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.seo.metaTags( String(this.actRoute.snapshot.routeConfig.component.name) );
  }

}
