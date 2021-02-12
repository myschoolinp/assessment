import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { DemoMaterialModule } from '../../material-module';
const routes: Routes = [
  {path: '',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),DemoMaterialModule],
  exports: [RouterModule]
})
export class LoginRoutingModule { }