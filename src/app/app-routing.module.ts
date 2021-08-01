import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { CreateEmpleadosComponent } from './components/create-empleados/create-empleados.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista-empleados', pathMatch: 'full'},
  { path: 'lista-empleados', component: ListaEmpleadosComponent },
  { path: 'createEmpleado',  component: CreateEmpleadosComponent },
  { path: '**', redirectTo: 'lista-empleados', pathMatch: 'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
