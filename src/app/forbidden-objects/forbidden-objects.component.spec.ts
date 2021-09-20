import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenObjectsComponent } from './forbidden-objects.component';

describe('ForbiddenObjectsComponent', () => {
  let component: ForbiddenObjectsComponent;
  let fixture: ComponentFixture<ForbiddenObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForbiddenObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbiddenObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
