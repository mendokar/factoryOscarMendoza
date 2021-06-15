import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPedidosComponent } from './components/clients/add-pedidos/add-pedidos.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{path:'', component:LoginComponent},{path:'add-pedidos', component:AddPedidosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
