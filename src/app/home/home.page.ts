import { Component } from '@angular/core';
import { HistoryService } from '../history.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private service: ProductsService, private hservice: HistoryService) {}
  productList: Product[];
  currQuantity = "0"
  selectedItem= "Product";
  totalPrice = 0
  selectedItemObject:Product;
  itemSelected(prod){
    console.log(prod)
    this.currQuantity = "0"
    this.totalPrice = 0
    this.selectedItem = prod.name
    this.selectedItemObject = prod;
  }
  numClick(num){
    if (this.selectedItem == "Product"){
      alert("Please Select an Item before inputting Quantity")
    }
    else if (this.currQuantity=="0"){
      this.currQuantity = num
      this.totalPrice = this.selectedItemObject.price * parseFloat(this.currQuantity)
    }else{
      this.currQuantity += num.toString()
      this.totalPrice = this.selectedItemObject.price * parseFloat(this.currQuantity)
    }
  }
  buyProd(){
    if (this.selectedItem=="Product" || parseInt(this.currQuantity)==0){
      alert("No product or No quantity")
    }
    else if (this.selectedItemObject.quantity >= parseInt(this.currQuantity)){
      this.hservice.createHistory(this.selectedItemObject.name,parseInt(this.currQuantity), new Date, this.totalPrice)
      this.selectedItemObject.quantity -= parseInt(this.currQuantity)
      this.currQuantity = "0"
      this.totalPrice = 0
      this.selectedItem = "Product"
      this.selectedItemObject= null
      
    }else{
      alert("Not enough stock of Item")
      this.currQuantity = "0"
      this.totalPrice = 0
      this.selectedItem = "Product"
      this.selectedItemObject= null
    }
   
  }
  clearQuantity(){
    this.currQuantity = "0"
    this.totalPrice = 0
    this.selectedItem = "Product"
    this.selectedItemObject= null
  }
  ngOnInit(){
    this.productList = this.service.getProducts()
    
  }
}
