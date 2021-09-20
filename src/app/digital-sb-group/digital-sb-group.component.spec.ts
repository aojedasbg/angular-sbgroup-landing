import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSbGroupComponent } from './digital-sb-group.component';

describe('DigitalSbGroupComponent', () => {
  let component: DigitalSbGroupComponent;
  let fixture: ComponentFixture<DigitalSbGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalSbGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSbGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
