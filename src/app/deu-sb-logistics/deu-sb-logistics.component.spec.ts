import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuSbLogisticsComponent } from './deu-sb-logistics.component';

describe('DeuSbLogisticsComponent', () => {
  let component: DeuSbLogisticsComponent;
  let fixture: ComponentFixture<DeuSbLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuSbLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuSbLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
