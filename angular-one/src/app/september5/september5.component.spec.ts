import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { September5Component } from './september5.component';

describe('September5Component', () => {
  let component: September5Component;
  let fixture: ComponentFixture<September5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ September5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(September5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
