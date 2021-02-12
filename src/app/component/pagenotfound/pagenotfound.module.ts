import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pagenotfound.component';
import { PageNotFoundRoutingModule } from './pagenotfound-routing.module';
import { DemoMaterialModule } from '../../material-module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
  ],
  declarations: [PagenotfoundComponent]
})
export class PageNotFoundModule { }