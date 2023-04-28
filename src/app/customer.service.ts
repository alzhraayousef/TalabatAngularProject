import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/Operators';
import {CustomerModule} from './child-modules/customer/customer.module';
import { ICustomer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // city from omnia
_cityurl:string = "";

// orders from dolagy
_orderurl: string = "";

  private apiURL = "http://localhost:59638/api/Customer"; 
  httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    }

  constructor(private httpClient: HttpClient) { }

  addAddresss(customer: CustomerModule): Observable < CustomerModule > {
    let post ={
    address:"feryal, assiut",
    id: 4,
    longitude: "10",
    latitude: "15",
    streetName: "helalo",
    apartmentNo: 70,
    floorNo: 5,
    cityID: 2,
    city: null,
    districtID: 2,
    district: null,
    customerID: 2,
    customer: null
    }
    return  this.httpClient.post(this.apiURL,post).pipe(catchError((err)=>{
         return throwError(()=>err.errorMessage || "server error");
}))
  }
}