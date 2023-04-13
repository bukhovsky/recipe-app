import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';

  buttonFunction () {

    fetch('https://worker-ts5.bukhovskyi.workers.dev/add', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
       body: JSON.stringify({
        name: 'John Doe',
        email: 'johndoe@example.com'
       })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

  } 
  
  add_product_button_function (engName: string, ukrName:string, fat:string, carbohydrates:string, protein: string) {
    const newObj = {
      engName: engName, 
      ukrName: ukrName, 
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
