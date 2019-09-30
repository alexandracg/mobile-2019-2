import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalHomePage } from './final-home.page';

describe('FinalHomePage', () => {
  let component: FinalHomePage;
  let fixture: ComponentFixture<FinalHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
