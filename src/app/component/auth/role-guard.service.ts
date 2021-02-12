import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token:any = localStorage.getItem('userData');
    if(token && token.length){
        const tokenPayload = JSON.parse(token);
        if (tokenPayload.role === expectedRole) {
          return true;
        }else if(tokenPayload.role){
          this.router.navigate(['userprofile']);
            return true;
        }
    }
    this.router.navigate(['login']);
    return false;
  }
}