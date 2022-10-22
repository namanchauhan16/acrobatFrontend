import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public doLogin(username: any, password: string){
    return this.http.get("https://acrobat-api.herokuapp.com/login/"+username+"/"+password);
  }

  public searchUser(username: any){
    return this.http.get("https://acrobat-api.herokuapp.com/login/"+username);
  }

  public doRegistration(user: any){
    return this.http.post("https://acrobat-api.herokuapp.com/saveUser",user,{responseType:'text' as 'json'});
  }
}
