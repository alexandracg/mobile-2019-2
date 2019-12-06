import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterMakePage } from './register-make.page';

describe('RegisterMakePage', () => {
  let component: RegisterMakePage;
  let fixture: ComponentFixture<RegisterMakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterMakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
