import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngSbLogisticsComponent } from './eng-sb-logistics.component';

describe('EngSbLogisticsComponent', () => {
  let component: EngSbLogisticsComponent;
  let fixture: ComponentFixture<EngSbLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngSbLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngSbLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
