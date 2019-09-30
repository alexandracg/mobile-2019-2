import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainDoisPage } from './home-main-dois.page';

describe('HomeMainDoisPage', () => {
  let component: HomeMainDoisPage;
  let fixture: ComponentFixture<HomeMainDoisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMainDoisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainDoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
