import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { MyOrdersComponent } from 'src/components/my-orders/my-orders.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'myOrders', component: MyOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
