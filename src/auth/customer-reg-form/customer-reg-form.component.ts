import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../validations/userName.validators';
import { ForbiddenEmailValidator } from '../validations/email.validators';
import { ConfirmPasswordValidator } from '../validations/confirmPassword.validators';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-customer-reg-form',
  templateUrl: './customer-reg-form.component.html',
  styleUrls: ['./customer-reg-form.component.scss']
})
export class CustomerRegFormComponent implements OnInit {


  registerationForm=this.fb.group({
    userName:['',[Validators.required,ForbiddenNameValidator(/^[A-Z]+[a-z]+$/)]],
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
    email:['',[Validators.required,ForbiddenEmailValidator(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)]],
    gender:['',[Validators.required]],
  },{validator:[ConfirmPasswordValidator]})

  constructor(private enrollService:EnrollService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

 

  get userName()
  {
    return this.registerationForm.get('userName');
  }

  get firstName()
  {
    return this.registerationForm.get('firstName');
  }
  get lastName()
  {
    return this.registerationForm.get('lastName');
  }

  get email()
  {
    return this.registerationForm.get('email');
  }

  get password()
  {
    return this.registerationForm.get('password');
  }

  get confirmPassword()
  {
    return this.registerationForm.get('confirmPassword');
  }

  get gender()
  {
    return this.registerationForm.get('gender');
  }


  submitData()
  {
    this.enrollService.CustomerRegister(this.registerationForm.value).subscribe({
      next:data=>console.log(data),
      error:err=>console.log(err.error.message)
    });
  }


}
