import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TweetsPagePageRoutingModule } from './tweets-page-routing.module';

import { TweetsPagePage } from './tweets-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TweetsPagePageRoutingModule
  ],
  declarations: [TweetsPagePage]
})
export class TweetsPagePageModule {}
