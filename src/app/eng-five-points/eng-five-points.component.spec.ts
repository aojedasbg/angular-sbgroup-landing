import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngFivePointsComponent } from './eng-five-points.component';

describe('EngFivePointsComponent', () => {
  let component: EngFivePointsComponent;
  let fixture: ComponentFixture<EngFivePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngFivePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngFivePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
