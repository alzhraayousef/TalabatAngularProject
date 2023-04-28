import { Component, OnInit } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

@Component({
  selector: 'app-customer-comp',
  templateUrl: './customer-comp.component.html',
  styleUrls: ['./customer-comp.component.scss']
})
export class CustomerCompComponent implements OnInit {

  customers:any=[];
  errorMessage:any;
  postId:number = 1;
  
    constructor(public http: HttpClient) { }
  
    ngOnInit(): void {
      this.http.post<any>('http://localhost:59638/swagger/v1/swagger.json',{address:'Feryal, Assiut'}).subscribe(data=>{
        this.postId = data.id;
      })
  
    }
  

  visible:boolean = false
  Savedvisible:boolean = false
  Ordervisible:boolean = false
  Visavisible:boolean = false
  Talabatvisible:boolean = false

  //onclick toggling both
  onAccclick()
  {
    this.Savedvisible = false;
    this.Ordervisible = false;
    this.Visavisible = false;
    this.Talabatvisible = false;
    this.visible = !this.visible
  }

  onSavedclick()
  {
    this.visible = false;
    this.Ordervisible = false;
    this.Visavisible = false;
    this.Talabatvisible = false;
    this.Savedvisible = !this.Savedvisible

  }
  

  onOrderclick()
  {
    this.visible = false;
    this.Savedvisible = false;
    this.Visavisible = false;
    this.Talabatvisible = false;
    this.Ordervisible = !this.Ordervisible;

  }
  OnVisavisibleclick(){
    this.visible = false;
    this.Savedvisible = false;
    this.Ordervisible = false;
    this.Talabatvisible = false;
    this.Visavisible = !this.Visavisible;
  }

  OnTalabatvisibleclick(){
    this.visible = false;
    this.Savedvisible = false;
    this.Ordervisible = false;
    this.Visavisible = false;
    this.Talabatvisible = !this.Talabatvisible;
  }

}
