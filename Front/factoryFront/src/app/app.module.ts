import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ViewPedidosComponent } from './components/restaurant/view-pedidos/view-pedidos.component';
import { AddPedidosComponent } from './components/clients/add-pedidos/add-pedidos.component';
import { CheckoutPedidosComponent } from './components/clients/checkout-pedidos/checkout-pedidos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import {HttpClientModule} from "@angular/common/http";
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewPedidosComponent,
    AddPedidosComponent,
    CheckoutPedidosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
