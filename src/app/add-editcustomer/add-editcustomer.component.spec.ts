import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditcustomerComponent } from './add-editcustomer.component';

describe('AddEditcustomerComponent', () => {
  let component: AddEditcustomerComponent;
  let fixture: ComponentFixture<AddEditcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
