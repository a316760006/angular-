import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { September4Component } from './september4.component';

describe('September4Component', () => {
  let component: September4Component;
  let fixture: ComponentFixture<September4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ September4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(September4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
