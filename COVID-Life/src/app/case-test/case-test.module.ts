import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaseTestPageRoutingModule } from './case-test-routing.module';

import { CaseTestPage } from './case-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaseTestPageRoutingModule
  ],
  declarations: [CaseTestPage]
})
export class CaseTestPageModule {


}
