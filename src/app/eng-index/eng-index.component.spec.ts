import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngIndexComponent } from './eng-index.component';

describe('EngIndexComponent', () => {
  let component: EngIndexComponent;
  let fixture: ComponentFixture<EngIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
