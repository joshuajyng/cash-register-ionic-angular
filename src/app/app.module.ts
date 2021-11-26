import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { ManagerPage } from './manager/manager.page';
import { HistoryPage } from './history/history.page';
import { HistorydetailsPage } from './historydetails/historydetails.page';
import { RestockPage } from './restock/restock.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule.forRoot([
    {path: '', component: HomePage},
    {path: 'manager', component: ManagerPage},
    {path: 'history', component: HistoryPage},
    {path: 'historydetails', component:HistorydetailsPage},
    {path: 'restock', component:RestockPage}
  ])],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
