import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbeaconPage } from './ibeacon.page';

describe('IbeaconPage', () => {
  let component: IbeaconPage;
  let fixture: ComponentFixture<IbeaconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbeaconPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbeaconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
