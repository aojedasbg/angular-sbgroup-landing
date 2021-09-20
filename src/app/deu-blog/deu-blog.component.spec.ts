import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuBlogComponent } from './deu-blog.component';

describe('DeuBlogComponent', () => {
  let component: DeuBlogComponent;
  let fixture: ComponentFixture<DeuBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
