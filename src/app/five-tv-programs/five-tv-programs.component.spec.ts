import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveTvProgramsComponent } from './five-tv-programs.component';

describe('FiveTvProgramsComponent', () => {
  let component: FiveTvProgramsComponent;
  let fixture: ComponentFixture<FiveTvProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveTvProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveTvProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
