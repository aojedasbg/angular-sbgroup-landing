import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuSbFreeTradeZoneComponent } from './deu-sb-free-trade-zone.component';

describe('DeuSbFreeTradeZoneComponent', () => {
  let component: DeuSbFreeTradeZoneComponent;
  let fixture: ComponentFixture<DeuSbFreeTradeZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuSbFreeTradeZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuSbFreeTradeZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
