import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminpanelComponent } from './adminpanel.component';
import { AdminPanelRoutingModule } from './adminpanel-routing.module';
import { DemoMaterialModule } from '../../material-module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {DialogAddUserDialog} from '../../dialog/adduser/adduser.dialog';
import { DialogDeleteDialog } from '../../dialog/deletebox/delete.dialog';
import { from } from 'rxjs';
@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    
  ],
  declarations: [AdminpanelComponent,DialogAddUserDialog,DialogDeleteDialog]
})
export class adminPanelModule { }