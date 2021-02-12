import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminpanelComponent } from './adminpanel.component';
import { DemoMaterialModule } from '../../material-module';
const routes: Routes = [
  {path: '',component: AdminpanelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),DemoMaterialModule],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }