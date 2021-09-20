import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuNewsletterComponent } from './deu-newsletter.component';

describe('DeuNewsletterComponent', () => {
  let component: DeuNewsletterComponent;
  let fixture: ComponentFixture<DeuNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
