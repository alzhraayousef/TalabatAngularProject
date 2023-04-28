import { RestaurantService } from 'src/app/Service/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../Interface/IRestaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  RestaurantList:any=[];
  errorMessage:any;

  constructor(private restaurantservice:RestaurantService){}

  ngOnInit(): void {
    this.restaurantservice.GetAllRestaurants().subscribe(
      {

         next:data=>{console.log(data);this.RestaurantList=data},
         error:error=>this.errorMessage=error

      })
  }

  // renderValues(){
  //   this.restaurantservice.GetAllRestaurants().subscribe(
  //    {
  //       next:data=>this. RestaurantList=data,
  //       error:error=>this.errorMessage=error

  //    })

  }

