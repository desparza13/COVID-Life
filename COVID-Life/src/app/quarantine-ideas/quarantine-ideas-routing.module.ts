import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuarantineIdeasPage } from './quarantine-ideas.page';

const routes: Routes = [
  {
    path: '',
    component: QuarantineIdeasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuarantineIdeasPageRoutingModule {}
