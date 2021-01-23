import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseTestPage } from './case-test.page';

const routes: Routes = [
  {
    path: '',
    component: CaseTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseTestPageRoutingModule {}
