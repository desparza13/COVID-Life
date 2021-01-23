import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YouTubeVideosPage } from './you-tube-videos.page';

describe('YouTubeVideosPage', () => {
  let component: YouTubeVideosPage;
  let fixture: ComponentFixture<YouTubeVideosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouTubeVideosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YouTubeVideosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
