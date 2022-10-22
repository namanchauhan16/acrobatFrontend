import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get("https://acrobat-api.herokuapp.com/products");
  }

  public getProductById(val: number) {
    return this.http.get("https://acrobat-api.herokuapp.com/products/"+val);
  }
}