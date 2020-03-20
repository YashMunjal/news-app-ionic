import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsSinglePageRoutingModule } from './news-single-routing.module';

import { NewsSinglePage } from './news-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsSinglePageRoutingModule
  ],
  declarations: [NewsSinglePage]
})
export class NewsSinglePageModule {}
