import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsSinglePage } from './news-single.page';

const routes: Routes = [
  {
    path: '',
    component: NewsSinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsSinglePageRoutingModule {}
