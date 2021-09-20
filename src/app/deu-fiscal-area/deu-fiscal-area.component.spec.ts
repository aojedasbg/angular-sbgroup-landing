import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuFiscalAreaComponent } from './deu-fiscal-area.component';

describe('DeuFiscalAreaComponent', () => {
  let component: DeuFiscalAreaComponent;
  let fixture: ComponentFixture<DeuFiscalAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuFiscalAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuFiscalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
