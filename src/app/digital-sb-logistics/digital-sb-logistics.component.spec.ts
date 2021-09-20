import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSbLogisticsComponent } from './digital-sb-logistics.component';

describe('DigitalSbLogisticsComponent', () => {
  let component: DigitalSbLogisticsComponent;
  let fixture: ComponentFixture<DigitalSbLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalSbLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSbLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
