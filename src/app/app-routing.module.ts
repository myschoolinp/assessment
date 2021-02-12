import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DemoMaterialModule} from './material-module';
import { BrowserModule } from '@angular/platform-browser';
import { RoleGuardService as RoleGuard 
} from '../app/component/auth/role-guard.service';
const routes: Routes = [
  {path: 'login',loadChildren: () => import('./component/login/login.module').then(m => m.LoginModule)},
  {path: 'adminpanel',loadChildren: () => import('./component/adminpanel/adminpanel.module').then(m => m.adminPanelModule),canActivate: [RoleGuard], 
  data: { expectedRole: 'Admin'} },
  {path:'userprofile',loadChildren:()=>import('./component/userprofile/userprofile.module').then(m=>m.UserProfileModule),canActivate: [RoleGuard], 
  data: { expectedRole: 'User'} },
  {path: '',redirectTo: '/login',pathMatch: 'full'},
  { path: '**', loadChildren:()=>import('./component/pagenotfound/pagenotfound.module').then(m=>m.PageNotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),DemoMaterialModule,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
