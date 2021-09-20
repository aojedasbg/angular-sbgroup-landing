import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuRessourcenComponent } from './deu-ressourcen.component';

describe('DeuRessourcenComponent', () => {
  let component: DeuRessourcenComponent;
  let fixture: ComponentFixture<DeuRessourcenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuRessourcenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuRessourcenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
