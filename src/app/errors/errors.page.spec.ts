import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsPage } from './errors.page';

describe('ErrorsPage', () => {
  let component: ErrorsPage;
  let fixture: ComponentFixture<ErrorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
