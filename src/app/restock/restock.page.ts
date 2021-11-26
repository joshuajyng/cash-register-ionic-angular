import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage implements OnInit {
  constructor(private service: ProductsService) { }
  productList: Product[]
  selectedItemObject: Product;
  selectedItem= false;
  restockItem = {quantity:""}
  itemSelected(prod){
    console.log(prod)
    this.selectedItem=true;
    this.selectedItemObject = prod;
  }
  onSubmit(form){
    if (this.selectedItem && parseInt(form.value.restockItem)){
      this.selectedItemObject.quantity += parseInt(form.value.restockItem)
      this.restockItem.quantity=""
      this.selectedItem=false;
    }else{
      alert("Please select a product then input an integer")
    }

  }
  ngOnInit() {
    this.productList = this.service.getProducts();
  }
  cancel(){
    this.selectedItem=false;
    this.restockItem.quantity=""
  }

}
