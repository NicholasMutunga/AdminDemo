import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'customer', component: CustomerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
