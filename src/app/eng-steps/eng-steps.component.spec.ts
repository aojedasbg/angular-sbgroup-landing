import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngStepsComponent } from './eng-steps.component';

describe('EngStepsComponent', () => {
  let component: EngStepsComponent;
  let fixture: ComponentFixture<EngStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
