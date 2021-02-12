import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from './userprofile.component';
import { UserProfileRoutingModule } from './userprofile-routing.module';
import { DemoMaterialModule } from '../../material-module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
  ],
  declarations: [UserprofileComponent]
})
export class UserProfileModule { }