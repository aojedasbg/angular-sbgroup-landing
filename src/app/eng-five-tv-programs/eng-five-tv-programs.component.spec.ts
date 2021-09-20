import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngFiveTvProgramsComponent } from './eng-five-tv-programs.component';

describe('EngFiveTvProgramsComponent', () => {
  let component: EngFiveTvProgramsComponent;
  let fixture: ComponentFixture<EngFiveTvProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngFiveTvProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngFiveTvProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
