import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbFreeTradeZoneComponent } from './sb-free-trade-zone.component';

describe('SbFreeTradeZoneComponent', () => {
  let component: SbFreeTradeZoneComponent;
  let fixture: ComponentFixture<SbFreeTradeZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbFreeTradeZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbFreeTradeZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
