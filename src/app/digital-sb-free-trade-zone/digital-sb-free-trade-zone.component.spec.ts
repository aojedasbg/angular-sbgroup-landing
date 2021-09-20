import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSbFreeTradeZoneComponent } from './digital-sb-free-trade-zone.component';

describe('DigitalSbFreeTradeZoneComponent', () => {
  let component: DigitalSbFreeTradeZoneComponent;
  let fixture: ComponentFixture<DigitalSbFreeTradeZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalSbFreeTradeZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSbFreeTradeZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
