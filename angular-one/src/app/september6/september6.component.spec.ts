import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { September6Component } from './september6.component';

describe('September6Component', () => {
  let component: September6Component;
  let fixture: ComponentFixture<September6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ September6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(September6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
