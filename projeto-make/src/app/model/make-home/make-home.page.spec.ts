import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeHomePage } from './make-home.page';

describe('MakeHomePage', () => {
  let component: MakeHomePage;
  let fixture: ComponentFixture<MakeHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
