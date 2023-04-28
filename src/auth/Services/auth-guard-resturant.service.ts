import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardResturantService {

  constructor(private jwtHelper: JwtHelperService, private router: Router) { }
  
  canActivate() {
    const token = localStorage.getItem("JWTResturant");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      const decodeToken = this.jwtHelper.decodeToken(token);
      console.log( decodeToken);
      console.log(decodeToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'])
      return true;
    }
    this.router.navigate(["/auth/ResturantLogin"]); 
    return false;
  }

}
