import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecintoFiscalizadoComponent } from './recinto-fiscalizado.component';

describe('RecintoFiscalizadoComponent', () => {
  let component: RecintoFiscalizadoComponent;
  let fixture: ComponentFixture<RecintoFiscalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecintoFiscalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecintoFiscalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
