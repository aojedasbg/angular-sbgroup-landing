import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngFiscalAreaComponent } from './eng-fiscal-area.component';

describe('EngFiscalAreaComponent', () => {
  let component: EngFiscalAreaComponent;
  let fixture: ComponentFixture<EngFiscalAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngFiscalAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngFiscalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
