import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngSbFreeTradeZoneComponent } from './eng-sb-free-trade-zone.component';

describe('EngSbFreeTradeZoneComponent', () => {
  let component: EngSbFreeTradeZoneComponent;
  let fixture: ComponentFixture<EngSbFreeTradeZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngSbFreeTradeZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngSbFreeTradeZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
