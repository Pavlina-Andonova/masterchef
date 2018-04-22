import { Component} from '@angular/core';


import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  subscription: Subscription;
  isUserAuthenticated: boolean;

  constructor() {
  }


  onLogout() {
    console.log('Log out');
  }


}
