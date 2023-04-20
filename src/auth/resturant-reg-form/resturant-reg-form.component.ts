import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../validations/userName.validators';
import { ForbiddenEmailValidator } from '../validations/email.validators';
import { ConfirmPasswordValidator } from '../validations/confirmPassword.validators';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-resturant-reg-form',
  templateUrl: './resturant-reg-form.component.html',
  styleUrls: ['./resturant-reg-form.component.scss']
})
export class ResturantRegFormComponent implements OnInit {
    //file:File;
  imageURL!: string;

  registerationForm=this.fb.group({
    userName:['',[Validators.required,ForbiddenNameValidator(/^[A-Z]+[a-z]+$/)]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
    email:['',[Validators.required,ForbiddenEmailValidator(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)]],
    MinOrderAmmount:['',[Validators.required]],
    DelivaryFee:['',[Validators.required]],
    DelivaryTime:['',[Validators.required]],
    WorkingHours:['',[Validators.required]],
    ImageNameFile:[null,[Validators.required]],
  },{validator:[ConfirmPasswordValidator]})

  constructor(private enrollService:EnrollService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  get userName()
  {
    return this.registerationForm.get('userName');
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

  get MinOrderAmmount()
  {
    return this.registerationForm.get('MinOrderAmmount');
  }

  get DelivaryFee()
  {
    return this.registerationForm.get('DelivaryFee');
  }
  get DelivaryTime()
  {
    return this.registerationForm.get('DelivaryTime');
  }
  get WorkingHours()
  {
    return this.registerationForm.get('WorkingHours');
  }
  // get ImageNameFile()
  // {
  //   return this.registerationForm.get('ImageNameFile');
  // }

  // setFile(event:any)
  // {
  //   this.file=event.target.files[0]
  // }

  showPreview(event:any)
  {
    const file = event.target.files[0];
    this.registerationForm.patchValue({
      ImageNameFile: file
    });
    this.registerationForm.get('ImageNameFile')?.updateValueAndValidity()

    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }


  submitData()
  {
    
    const Formdata = new FormData();
    Formdata.append('ImageNameFile', this.registerationForm.get('ImageNameFile')?.value, 'pic.jpg');
    Formdata.append('userName', this.registerationForm.get('userName')?.value);
    Formdata.append('password', this.registerationForm.get('password')?.value);
    Formdata.append('email', this.registerationForm.get('email')?.value);
    Formdata.append('MinOrderAmmount', this.registerationForm.get('MinOrderAmmount')?.value);
    Formdata.append('DelivaryFee', this.registerationForm.get('DelivaryFee')?.value);
    Formdata.append('DelivaryTime', this.registerationForm.get('DelivaryTime')?.value);
    Formdata.append('WorkingHours', this.registerationForm.get('WorkingHours')?.value);
console.log('FormData',Formdata);
    //this.registerationForm.controls['ImageNameFile'].setValue(this.file);
    console.log(this.registerationForm.value)
    this.enrollService.ResturantRegister(Formdata).subscribe({
      next:data=>console.log(data),
      error:err=>console.log(err)
    });


    
  }

}
