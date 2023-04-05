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

}
