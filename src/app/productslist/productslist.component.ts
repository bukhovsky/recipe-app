import { Component } from '@angular/core';

interface KVobject {
  engName: string; 
  ukrName: string; 
  calories: string;
  fat: string;
  carbohydrates: string;
  protein: string;
  }
@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent {



productNames: string[]= []
productObjects: KVobject[] = []


getproducts(){
  this.productObjects = []
  fetch('https://worker-ts5.bukhovskyi.workers.dev/all', {
    method: 'GET',

    //don't work with header O_o -> try to find out why?
    // headers: {
    //    'Content-Type': 'application/json'
    //  },
    
  })
    .then(response => response.json())
    .then(data => {
      this.productNames = data
      //console.log(this.productString)
      data.forEach((element: string) => {
        const myUrl = `https://worker-ts5.bukhovskyi.workers.dev/get&key=${element}`
        fetch(myUrl, {
          method: 'GET'
        }).then(response => response.json()).then(
          data => this.productObjects.push(data)
        )
        
      });
      console.log(this.productObjects)
      //this.productString = `${this.itemfromKV.engName} ${this.itemfromKV.ukrName} ${this.itemfromKV.сalories} ${this.itemfromKV.fat} ${this.itemfromKV.carbohydrates} ${this.itemfromKV.protein}`
      })
    .catch(error => console.error(error));
}



}
