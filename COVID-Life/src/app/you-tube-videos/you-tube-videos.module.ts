import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YouTubeVideosPageRoutingModule } from './you-tube-videos-routing.module';

import { YouTubeVideosPage } from './you-tube-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YouTubeVideosPageRoutingModule
  ],
  declarations: [YouTubeVideosPage]
})
export class YouTubeVideosPageModule {}
