import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { DemoMaterialModule } from '../../material-module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }