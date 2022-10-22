import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../services/product.service';
import { UserDetailsComponent } from '../user-details/user-details.component';
interface details{
  size :string,
  quantity: string,
  paymentMethod: string
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  userDetails:details = {
    size: '',
    quantity: '',
    paymentMethod: ''
  }
  productObj: any;
  constructor(private service: ProductService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    let Id: any = localStorage.getItem('Id');
    this.service.getProductById(Id).subscribe((data) =>{
      localStorage.setItem('productData',JSON.stringify(data)),
      this.productObj = data});
  }

  doDetails(){
    this.dialogRef.open(UserDetailsComponent, {
      data : this.userDetails,
    });
  }
}