import { Component, OnInit } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { CustomerService } from 'src/app/customer.service';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
customers:any=[];
errorMessage:any;
postId:number = 1;

// addressForm = new FormGroup({
//   user:new FormControl(''), 
//   password:new FormControl(''),

// })



  constructor(public http: HttpClient, private fb:FormBuilder) { }

  ngOnInit(): void {


    this.addressForm = this.fb.group({
      user:'',
      password:'',
    })
    this.http.post<any>('http://localhost:59638/api/Customer',{address:'Feryal, Assiut'}).subscribe(data=>{
      this.postId = data.id;
    })

  }

  visible:boolean = false
  Savedvisible:boolean = false
  Ordervisible:boolean = false
  Visavisible:boolean = false
  Talabatvisible:boolean = false
  display='none';


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

  openModal(){
    this.display='block';
 }

 onCloseHandled(){
  this.display='none';
}

}
