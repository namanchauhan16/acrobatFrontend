import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FeedbackComponent } from '../feedback/feedback.component';
import { OrderDetailsService } from '../services/order-details.service';
import { ProductService } from '../services/product.service';

interface details {
  brandname: string,
  productname: string,
  username: string,
  fullname: string,
  phonenum: string,
  address: string,
  size: string,
  quantity: string,
  paymentMethod: string
}
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  orderDetails: details = {
    username: '',
    fullname: '',
    phonenum: '',
    address: '',
    size: '',
    quantity: '',
    paymentMethod: '',
    brandname: '',
    productname: ''
  };

  message: any;
  userDetails: any;
  userName: string = '';

  constructor(private dialogRef: MatDialogRef<UserDetailsComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service2: OrderDetailsService) {
    this.userDetails = data;
  }

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }

  placeOrder() {
    let pData:any = localStorage.getItem('productData');
    this.orderDetails.brandname = JSON.parse(pData)[0].brandname;
    this.orderDetails.productname = JSON.parse(pData)[0].productname;
    this.orderDetails.size = this.userDetails.size;
    this.orderDetails.quantity = this.userDetails.quantity;
    this.orderDetails.paymentMethod = this.userDetails.paymentMethod;
    let usernameLS: any = localStorage.getItem('userNameLS')
    this.orderDetails.username = usernameLS;
    
    this.service2.saveOrderDetails(this.orderDetails).subscribe((data) => this.message = data);

    setTimeout(() => {
      this.dialogRef.close();
    this.dialog.open(FeedbackComponent);
    }, 2700);
  }
}
