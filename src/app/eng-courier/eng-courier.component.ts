import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-eng-courier',
  templateUrl: './eng-courier.component.html',
  styleUrls: ['./eng-courier.component.css']
})
export class EngCourierComponent implements OnInit {

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
