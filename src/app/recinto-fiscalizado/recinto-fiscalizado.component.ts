import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-recinto-fiscalizado',
  templateUrl: './recinto-fiscalizado.component.html',
  styleUrls: ['./recinto-fiscalizado.component.css']
})
export class RecintoFiscalizadoComponent implements OnInit {

  constructor(
    private seo: SEOService,
    private actRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.seo.metaTags( String(this.actRoute.snapshot.routeConfig.component.name) );
  }

}
