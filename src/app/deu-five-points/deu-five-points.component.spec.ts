import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuFivePointsComponent } from './deu-five-points.component';

describe('DeuFivePointsComponent', () => {
  let component: DeuFivePointsComponent;
  let fixture: ComponentFixture<DeuFivePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuFivePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuFivePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
