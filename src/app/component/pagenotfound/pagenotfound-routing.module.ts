import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound.component';
import { DemoMaterialModule } from '../../material-module';
const routes: Routes = [
  {path: '',component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),DemoMaterialModule],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }