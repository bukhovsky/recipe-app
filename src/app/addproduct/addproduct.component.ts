import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  add_product_button_function (engName: string, ukrName:string, calories:string, fat:string, carbohydrates:string, protein: string) {
    const newObj = {
      engName: engName, 
      ukrName: ukrName, 
      calories: calories,
      fat: fat, 
      carbohydrates: carbohydrates, 
      protein: protein,
    }
    fetch('https://worker-ts5.bukhovskyi.workers.dev/add', {
      method: 'POST',

      //don't work with header O_o -> try to find out why?
      // headers: {
      //    'Content-Type': 'application/json'
      //  },
      body: JSON.stringify(newObj)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    console.log(newObj)
  }

}
