import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaseTestPage } from './case-test.page';

describe('CaseTestPage', () => {
  let component: CaseTestPage;
  let fixture: ComponentFixture<CaseTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaseTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
