import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuCourierComponent } from './deu-courier.component';

describe('DeuCourierComponent', () => {
  let component: DeuCourierComponent;
  let fixture: ComponentFixture<DeuCourierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuCourierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
