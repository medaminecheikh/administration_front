import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService:AuthService,private route:Router) {
  }
  canActivate()
 {
   if (this.authService.currentUser)
 {
   return true;
 }
 else
 {
   this.route.navigate([''])
   return false;}
  }

}
