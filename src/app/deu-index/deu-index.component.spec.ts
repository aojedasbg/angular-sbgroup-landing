import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuIndexComponent } from './deu-index.component';

describe('DeuIndexComponent', () => {
  let component: DeuIndexComponent;
  let fixture: ComponentFixture<DeuIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
