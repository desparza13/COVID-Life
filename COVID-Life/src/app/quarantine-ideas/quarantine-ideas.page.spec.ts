import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuarantineIdeasPage } from './quarantine-ideas.page';

describe('QuarantineIdeasPage', () => {
  let component: QuarantineIdeasPage;
  let fixture: ComponentFixture<QuarantineIdeasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarantineIdeasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuarantineIdeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
