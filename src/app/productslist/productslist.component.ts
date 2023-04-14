import { Component } from '@angular/core';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent {

getproducts(){
  fetch('https://worker-ts5.bukhovskyi.workers.dev/all', {
    method: 'GET',

    //don't work with header O_o -> try to find out why?
    // headers: {
    //    'Content-Type': 'application/json'
    //  },
    
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

}
