import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuKontaktComponent } from './deu-kontakt.component';

describe('DeuKontaktComponent', () => {
  let component: DeuKontaktComponent;
  let fixture: ComponentFixture<DeuKontaktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuKontaktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
