import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { September2Component } from './september2.component';

describe('September2Component', () => {
  let component: September2Component;
  let fixture: ComponentFixture<September2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ September2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(September2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
