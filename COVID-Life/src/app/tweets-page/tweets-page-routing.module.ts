import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TweetsPagePage } from './tweets-page.page';

const routes: Routes = [
  {
    path: '',
    component: TweetsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TweetsPagePageRoutingModule {}
