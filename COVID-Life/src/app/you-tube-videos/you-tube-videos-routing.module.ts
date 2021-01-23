import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YouTubeVideosPage } from './you-tube-videos.page';

const routes: Routes = [
  {
    path: '',
    component: YouTubeVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YouTubeVideosPageRoutingModule {}
