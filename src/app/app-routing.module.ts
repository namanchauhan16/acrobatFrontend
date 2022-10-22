import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'signup',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:CreateUserComponent},
  {path:'profile', component:ProfileComponent},
  {path:'payment',component:PaymentComponent},
  {path:'',redirectTo:'signup',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
