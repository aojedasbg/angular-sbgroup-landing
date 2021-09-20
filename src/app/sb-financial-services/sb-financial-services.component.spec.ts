import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbFinancialServicesComponent } from './sb-financial-services.component';

describe('SbFinancialServicesComponent', () => {
  let component: SbFinancialServicesComponent;
  let fixture: ComponentFixture<SbFinancialServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbFinancialServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbFinancialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
