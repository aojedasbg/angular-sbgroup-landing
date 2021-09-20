import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngForbiddenObjectsComponent } from './eng-forbidden-objects.component';

describe('EngForbiddenObjectsComponent', () => {
  let component: EngForbiddenObjectsComponent;
  let fixture: ComponentFixture<EngForbiddenObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngForbiddenObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngForbiddenObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
