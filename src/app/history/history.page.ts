import { Component, OnInit } from '@angular/core';
import { History } from '../history';
import { HistoryService } from '../history.service';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(private service: HistoryService, private router:Router) {}
  historyItems: History[];

  ngOnInit() {
    this.historyItems = this.service.getHistory()
  }
  itemSelected(prod){

    this.router.navigate(['/historydetails'],{queryParams: {name: prod.name, quantity: prod.quantity, date: prod.date, totalPrice: prod.totalPrice}})
  }
}
