import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private jwtHelper: JwtHelperService, private router: Router) { }

  ngOnInit(): void {
  }

  // Customer
  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  public logOut = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(["/auth/CustomerLogin"]);
  }



  // Resturant
  isResturantAuthenticated() {
    const token = localStorage.getItem("JWTResturant");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }

  public ResturantlogOut = () => {
    localStorage.removeItem("JWTResturant");
    this.router.navigate(["/auth/ResturantLogin"]);
  }

}
