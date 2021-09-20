import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuSbFinancialServicesComponent } from './deu-sb-financial-services.component';

describe('DeuSbFinancialServicesComponent', () => {
  let component: DeuSbFinancialServicesComponent;
  let fixture: ComponentFixture<DeuSbFinancialServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuSbFinancialServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuSbFinancialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
