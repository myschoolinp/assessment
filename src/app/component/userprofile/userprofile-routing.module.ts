import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserprofileComponent } from './userprofile.component';
import { DemoMaterialModule } from '../../material-module';
const routes: Routes = [
  {path: '',component: UserprofileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),DemoMaterialModule],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }