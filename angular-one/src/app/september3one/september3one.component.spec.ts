import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { September3oneComponent } from './september3one.component';

describe('September3oneComponent', () => {
  let component: September3oneComponent;
  let fixture: ComponentFixture<September3oneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ September3oneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(September3oneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
