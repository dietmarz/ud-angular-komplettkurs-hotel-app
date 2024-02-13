import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BookingsComponent} from "./bookings/bookings.component";
import {CreateBookingComponent} from "./create-booking/create-booking.component";


const routes: Routes = [
  {
    path:'bookings', component: BookingsComponent
  },
  {
    path:'createBooking', component: CreateBookingComponent
  },
  {
    path:'', redirectTo:'bookings', pathMatch: 'full'
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    // CommonModule
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
