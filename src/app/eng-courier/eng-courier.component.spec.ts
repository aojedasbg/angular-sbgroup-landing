import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngCourierComponent } from './eng-courier.component';

describe('EngCourierComponent', () => {
  let component: EngCourierComponent;
  let fixture: ComponentFixture<EngCourierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngCourierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
