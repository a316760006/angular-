import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { September3Component } from './september3.component';

describe('September3Component', () => {
  let component: September3Component;
  let fixture: ComponentFixture<September3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ September3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(September3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
