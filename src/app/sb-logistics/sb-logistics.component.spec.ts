import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbLogisticsComponent } from './sb-logistics.component';

describe('SbLogisticsComponent', () => {
  let component: SbLogisticsComponent;
  let fixture: ComponentFixture<SbLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
