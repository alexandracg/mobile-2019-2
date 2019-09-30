import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasPagePage } from './obras-page.page';

describe('ObrasPagePage', () => {
  let component: ObrasPagePage;
  let fixture: ComponentFixture<ObrasPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrasPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
