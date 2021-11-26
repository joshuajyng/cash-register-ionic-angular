import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorydetailsPageRoutingModule } from './historydetails-routing.module';

import { HistorydetailsPage } from './historydetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorydetailsPageRoutingModule
  ],
  declarations: [HistorydetailsPage]
})
export class HistorydetailsPageModule {}
