import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

interface dataType {
  username: string,
  password: string
}
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: dataType = {
    username: "",
    password: ""
  };
  userObj: any;
  message: any;
  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }


  public doRegistration() {
    this.service.searchUser(this.user.username).subscribe((data) => {
      this.userObj = data;
      if (this.userObj.length == 1) {
        this.message = "*Username already taken.*";
      } else {
        this.service.doRegistration(this.user).subscribe((data) => this.message = data);
      }
    });
  }
}
