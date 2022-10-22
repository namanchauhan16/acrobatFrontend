import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameLS: string = "";
  users: any;
  message: string = "";
  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  public signup(username: string, password: string) {
    this.service.doLogin(username, password).subscribe((data) => {
      this.users = data;
      if (this.users.length == 1) {
        localStorage.setItem('userNameLS', this.usernameLS);
        this.router.navigate(['home']);
      } else {
        this.message = "Invalid user, Pleas sign up using correct credentials";
      }
    });
  }
}
