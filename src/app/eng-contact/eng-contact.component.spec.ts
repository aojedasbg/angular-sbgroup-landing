import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngContactComponent } from './eng-contact.component';

describe('EngContactComponent', () => {
  let component: EngContactComponent;
  let fixture: ComponentFixture<EngContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
