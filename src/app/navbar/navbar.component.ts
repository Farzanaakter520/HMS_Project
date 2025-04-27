import { Component, OnInit } from '@angular/core';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';

@Component({
  selector: 'app-navbar',
  imports: [RegistrationFormComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
  isUserLoggedIn: boolean = false;
  loggedinUserName: string = "";

  constructor(
    private loggedinUserService: LoggedinUserService
  ) {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.loggedinUserService.isLoggedIn();

    if (this.isUserLoggedIn) {
      const loggedInUser = this.loggedinUserService.getLoggedInUser();
      this.loggedinUserName = loggedInUser ? loggedInUser.name : ''; 
    }    
  }

  logoutBtn() {
    this.loggedinUserService.logout();
    window.location.href="/home"
  }

}

