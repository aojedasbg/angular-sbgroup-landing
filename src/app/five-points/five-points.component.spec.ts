import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivePointsComponent } from './five-points.component';

describe('FivePointsComponent', () => {
  let component: FivePointsComponent;
  let fixture: ComponentFixture<FivePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
