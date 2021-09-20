import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuFiveTvProgramsComponent } from './deu-five-tv-programs.component';

describe('DeuFiveTvProgramsComponent', () => {
  let component: DeuFiveTvProgramsComponent;
  let fixture: ComponentFixture<DeuFiveTvProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuFiveTvProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuFiveTvProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
