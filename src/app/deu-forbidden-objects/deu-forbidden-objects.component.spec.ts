import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuForbiddenObjectsComponent } from './deu-forbidden-objects.component';

describe('DeuForbiddenObjectsComponent', () => {
  let component: DeuForbiddenObjectsComponent;
  let fixture: ComponentFixture<DeuForbiddenObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuForbiddenObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuForbiddenObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
