import { Component,OnChanges, OnInit,  Output,Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICart } from 'src/cart/Interface/cart';
import { CartService } from 'src/cart/Services/cart.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  ShowProduct:any
  messageerror!:string;
  pid:any;
  productList:[]=[]//list of product
  isVsiable:boolean=true
  isVsiableProductList:[]=[]
  totalPrice:number=0
  Price:any
  @Output() onTotalPrice:EventEmitter<number>
  @Input() receivedTotalPrice:number=0
  flagNoItem:boolean=false;
   constructor(private _activatedroute:ActivatedRoute,private cartService:CartService) 
   {
    this.onTotalPrice=new EventEmitter<number>()
   }
   
    calcQuantityPlus(qty:number,price:number)
   {
      this.Price=price
      this.totalPrice +=this.Price*qty;
      this.onTotalPrice.emit(this.totalPrice)
      console.log(this.totalPrice)
   }
   calcQuantityMinus(qty:number,price:number)
   {
    this.Price=price
    this.totalPrice -=this.Price*qty;
    this.onTotalPrice.emit(this.totalPrice)
    console.log(this.totalPrice)
   }
  //  AddToOrder(product:[])
  //  {
  //   for(var i=0;i<product.length;i++)
  //   {
  //     if(product[i].isVsiable==true)
  //     {
  //        this.productList.push(product[i]);
  //     }
  //   }
  //   return this.productList
  //  }
   removeProduct()
   {
     this.isVsiable=false
   }
    ngOnInit(): void {     
    // this.cartService.getCartByProduct().subscribe({
    //     next:data=>{
    //       this.ShowProduct=data;
    //       this.flagNoItem=true
    //     },
    //     error:error=>this.messageerror=error
    //   })

    this.cartService.AddToCart(2,"2946b9f6-35f7-4e2f-8c2a-7a0ab10885db").subscribe({
      next:data=>{
        this.ShowProduct=data;
        this.flagNoItem=true
        },
      error:error=>this.messageerror=error
    })
    }
}
