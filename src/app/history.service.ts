import { Injectable } from '@angular/core';
import { History } from './history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }
  private historyItems: History[] = [
    
  ]
  createHistory(hname: string, hquanty:number, hDate: Date, htotalPrice:number){
    this.historyItems.push({ name: hname, quantity: hquanty, totalPrice: htotalPrice, date: hDate})

  }

  getHistory() {
    return [...this.historyItems]
  }
}
