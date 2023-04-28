import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


import  {ICart} from '../Interface/cart'
@Injectable({
  providedIn: 'root'
})
export class CartService {
constructor(private http:HttpClient) { }

AddToCart(ProductID:number,ApplicationUserId:string): Observable<ICart>
{
return this.http.get<ICart>(`http://localhost:59638/api/Cart/`+ProductID+`/`+ApplicationUserId)
}

GetCartByCustomerId(customerID:number): Observable<ICart>
{
  return this.http.get<ICart>(`http://localhost:59638/api/Cart/`+customerID)
}
EditCart(ProductID:number, quantity:number, ApplicationUserId:number)
{
  return this.http.delete<ICart>(`http://localhost:59638/api/Cart/`+ProductID+`/`+quantity+`/`+ApplicationUserId)
}
}