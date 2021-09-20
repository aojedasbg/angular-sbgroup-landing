import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngNewsletterComponent } from './eng-newsletter.component';

describe('EngNewsletterComponent', () => {
  let component: EngNewsletterComponent;
  let fixture: ComponentFixture<EngNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
