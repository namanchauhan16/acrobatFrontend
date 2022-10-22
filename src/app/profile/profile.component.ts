import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../services/order-details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private services:OrderDetailsService) { }

  userName:any;
  orderDetails:any;
  ngOnInit(): void {
    let usernameLS = localStorage.getItem('userNameLS');
    this.userName = usernameLS;
    this.services.getOrderDetails(usernameLS).subscribe((data)=>this.orderDetails = data);
  }
  
  CancleOrder(val:any){
    this.services.cancleOrder(val).subscribe();
    window.location.reload();
  }
}
