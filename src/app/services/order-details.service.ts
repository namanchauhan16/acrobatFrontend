import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private http:HttpClient) { }

  public saveOrderDetails(val:any){
    return this.http.post("https://acrobat-api.herokuapp.com/saveOrderDetails",val,{responseType:'text' as 'json'});
  }

  public getOrderDetails(val:any){
    return this.http.get("https://acrobat-api.herokuapp.com/orderDetails/"+val);
  }

  public cancleOrder(val:any){
    return this.http.delete("https://acrobat-api.herokuapp.com/deleteOrderDetail/"+val);
  }
}
