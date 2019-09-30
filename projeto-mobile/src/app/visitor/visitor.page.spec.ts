import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorPage } from './visitor.page';

describe('VisitorPage', () => {
  let component: VisitorPage;
  let fixture: ComponentFixture<VisitorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
