import { Component } from '@angular/core';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent {

itemfromKV = {
  engName: "", 
  ukrName: "", 
  сalories: "",
  fat: "", 
  carbohydrates: "", 
  protein: "",
  }

productString = []


getproducts(){
  fetch('https://worker-ts5.bukhovskyi.workers.dev/all', {
    method: 'GET',

    //don't work with header O_o -> try to find out why?
    // headers: {
    //    'Content-Type': 'application/json'
    //  },
    
  })
    .then(response => response.json())
    .then(data => {
      this.productString = data
      console.log(this.productString)
      
      //this.productString = `${this.itemfromKV.engName} ${this.itemfromKV.ukrName} ${this.itemfromKV.сalories} ${this.itemfromKV.fat} ${this.itemfromKV.carbohydrates} ${this.itemfromKV.protein}`
      })
    .catch(error => console.error(error));
}

}
