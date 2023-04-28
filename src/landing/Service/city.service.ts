import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {
 _url:string='http://localhost:59638/api/City/GetAllCities';
  constructor(private http: HttpClient){}

  GetAllCities(){

    return this.http.get(this._url).pipe(catchError((err:any)=>{
      return throwError(()=>err.message || "Server Error");
    }));
  }
}
