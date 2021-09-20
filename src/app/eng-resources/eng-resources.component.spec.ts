import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngResourcesComponent } from './eng-resources.component';

describe('EngResourcesComponent', () => {
  let component: EngResourcesComponent;
  let fixture: ComponentFixture<EngResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
