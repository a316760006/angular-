import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacteListComponent } from './contacte-list.component';

describe('ContacteListComponent', () => {
  let component: ContacteListComponent;
  let fixture: ComponentFixture<ContacteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
