import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorydetailsPage } from './historydetails.page';

const routes: Routes = [
  {
    path: '',
    component: HistorydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorydetailsPageRoutingModule {}
