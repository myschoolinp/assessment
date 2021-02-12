import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from "@angular/forms";
import {UserService} from '../../sevices/user.service';
import { from,fromEvent } from 'rxjs';
import { map ,debounceTime, switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userLoginData:any;
  myRegisterForm:any;
  @ViewChild('myForm') public myForm:any;
  constructor(private router: Router,public snackBar: MatSnackBar, public fb: FormBuilder,private userService:UserService) { }

  ngOnInit() {

    this.getUserData();
    this.Initializeform();
  }
  Initializeform(){
    this.myRegisterForm = this.fb.group({
      name: ['', [Validators.required]],
      email:['', [Validators.required]],
      address:['', [Validators.required]],
      mobNumber: ['', [Validators.required]]
   })
  }
  getUserData(){
    const token:any = localStorage.getItem('userData');
    if(token && token.length){
      const tokenPayload = JSON.parse(token);
    this.userService.checkUserAvailability(tokenPayload.userId).pipe(map(res=>res.data())).subscribe((res:any)=>{
      this.userLoginData=res;
    })
   }
  }
  logoutUser(){
    localStorage.removeItem('userData');
    this.router.navigate(['login']);
  }
  submitForm(){
   if(this.myRegisterForm.valid){
     let value=this.myRegisterForm.value;
     value.userId= this.userLoginData.userId;
     window.location.reload();
   }
  }
   submitPasswordForm(){

  }
}
