import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { CommonModule } from '@angular/common';

import { CartComponent} from './cart.component';
import { CartService } from './cart.service';
import { OrderService } from './order.service';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    CartComponent
  ],
   providers: [
   CartService,
   OrderService
 ]
})
export class CartModule { }
