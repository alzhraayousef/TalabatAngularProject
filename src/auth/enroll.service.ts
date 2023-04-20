import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tokenGetter } from 'src/app/app.module';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  _CustomerRegisterUrl:string="http://localhost:59638/api/Customer/Register";
  _CustomerLoginUrl:string="http://localhost:59638/api/Customer/Login";

  _ResturantRegisterUrl:string="http://localhost:59638/api/Resturant/Register";
  _ResturantLoginUrl:string="http://localhost:59638/api/Resturant/Login";
  headers?: HttpHeaders;

  constructor(private http:HttpClient) { }

  CustomerRegister(user:any)
  {
   return this.http.post(this._CustomerRegisterUrl,user).pipe(catchError((err: any) => {
      return throwError(() => err.message || "server error");
  }));
  }

  CustomerLogin(user:any)
  {
   return this.http.post(this._CustomerLoginUrl,user).pipe(catchError((err: any) => {
    return throwError(() => err.message || "server error");
    }));
  }




  ResturantRegister(user:any)
  {
   return this.http.post(this._ResturantRegisterUrl,user).pipe(catchError((err: any) => {
      return throwError(() => err.message || "server error");
  }));
  }

  ResturantLogin(user:any)
  {
   return this.http.post(this._ResturantLoginUrl,user).pipe(catchError((err: any) => {
    return throwError(() => err.message || "server error");
    }));
  }


  TestToken()
  {

    console.log(tokenGetter() as string)
      //httpOptions
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenGetter() as string}`,
      });
      //,{headers:headers}
        return this.http.get("http://localhost:59638/api/Resturant/Index").pipe(catchError((err: any) => {
          return throwError(() => err.message || "server error");
          }));
  }



}
