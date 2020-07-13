import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacteNavComponent } from './contacte-nav.component';

describe('ContacteNavComponent', () => {
  let component: ContacteNavComponent;
  let fixture: ComponentFixture<ContacteNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacteNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacteNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
