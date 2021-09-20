import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSbFinancialServicesComponent } from './digital-sb-financial-services.component';

describe('DigitalSbFinancialServicesComponent', () => {
  let component: DigitalSbFinancialServicesComponent;
  let fixture: ComponentFixture<DigitalSbFinancialServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalSbFinancialServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSbFinancialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
