import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-forms';

  userModel = new User('Akhil', 'xxx', 123456789, 14/7/2020,'1234@asd')

  onSubmit() {
    console.log(this.userModel)

  }
  
}






