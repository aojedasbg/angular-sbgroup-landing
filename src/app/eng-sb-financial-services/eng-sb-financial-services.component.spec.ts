import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngSbFinancialServicesComponent } from './eng-sb-financial-services.component';

describe('EngSbFinancialServicesComponent', () => {
  let component: EngSbFinancialServicesComponent;
  let fixture: ComponentFixture<EngSbFinancialServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngSbFinancialServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngSbFinancialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
