import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TweetsPagePage } from './tweets-page.page';

describe('TweetsPagePage', () => {
  let component: TweetsPagePage;
  let fixture: ComponentFixture<TweetsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TweetsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
