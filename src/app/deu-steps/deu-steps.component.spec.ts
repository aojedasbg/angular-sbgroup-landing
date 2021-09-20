import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuStepsComponent } from './deu-steps.component';

describe('DeuStepsComponent', () => {
  let component: DeuStepsComponent;
  let fixture: ComponentFixture<DeuStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
