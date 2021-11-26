import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-historydetails',
  templateUrl: './historydetails.page.html',
  styleUrls: ['./historydetails.page.scss'],
})
export class HistorydetailsPage implements OnInit {
  hname: string
  hquant: number
  hdate: Date
  htotalPrice: number
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(p =>{
      this.hname = p['name']
      this.hquant = p['quantity']
      this.hdate = p['date']
      this.htotalPrice = p['totalPrice']
    })
    console.log(this.hdate)
  }

}
