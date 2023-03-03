import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService:UserService, private router: Router) { }

  login() {
    this.userService.login(this.username, this.password).subscribe(
      data => {
        if (data.nomP == 'admin') {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/user-dashboard']);
        }
      },
      error => {
        this.errorMessage = 'Invalid username or password.';
      }
    );
  }


}
