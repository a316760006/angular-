import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { September4oneComponent } from './september4one.component';

describe('September4oneComponent', () => {
  let component: September4oneComponent;
  let fixture: ComponentFixture<September4oneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ September4oneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(September4oneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
