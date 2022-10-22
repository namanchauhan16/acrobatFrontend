import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ProductService, private router: Router) { }

  productData: any;
  ngOnInit(): void {
    this.service.getProducts().subscribe((data) => this.productData = data);
  }

  public doPayment(val:number){
    localStorage.setItem('Id',JSON.stringify(val));
    this.router.navigate(['payment']);
  }
}
