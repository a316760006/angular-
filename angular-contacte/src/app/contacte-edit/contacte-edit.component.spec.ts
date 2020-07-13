import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacteEditComponent } from './contacte-edit.component';

describe('ContacteEditComponent', () => {
  let component: ContacteEditComponent;
  let fixture: ComponentFixture<ContacteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
