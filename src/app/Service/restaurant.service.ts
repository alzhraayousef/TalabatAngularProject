import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/Operators';
import { IRestaurant } from 'src/app/Interface/IRestaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  _url:string='http://localhost:59638/api/Resturant/GetAllRestaurant';
  constructor(private http: HttpClient){}

  GetAllRestaurants(){

    return this.http.get(this._url).pipe(catchError((err:any)=>{
      return throwError(()=>err.message || "Server Error");
    }));
  // console.log(this.http.get<IRestaurant[]>(this._url));
  }
}



