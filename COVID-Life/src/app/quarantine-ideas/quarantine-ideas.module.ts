import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuarantineIdeasPageRoutingModule } from './quarantine-ideas-routing.module';

import { QuarantineIdeasPage } from './quarantine-ideas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuarantineIdeasPageRoutingModule
  ],
  declarations: [QuarantineIdeasPage]
})
export class QuarantineIdeasPageModule {}
