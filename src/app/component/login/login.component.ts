import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from '../../sevices/user.service';
import { from, fromEvent } from 'rxjs';
import { map, debounceTime, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, public snackBar: MatSnackBar, public fb: FormBuilder, private userService: UserService) { }
  LoginForm: any;
  TabIndex = 0;
  myRegisterForm: any;
  isUserExist: boolean = false;
  ngOnInit() {
    this.reactiveForm();

  }
 
  reactiveForm() {
    this.LoginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.myRegisterForm = this.fb.group({
      userId: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      mobNumber: ['', [Validators.required]],
    })

  }
   // checking the user while login
  loginUser() {
    if (this.LoginForm.valid) {
      this.userService.getLoginData(this.LoginForm.value).pipe(map(res => res.data())).subscribe((res: any) => {
        if (res) {
          if (this.LoginForm.value.username == res.userId && this.LoginForm.value.password == res.password) {
            delete res.password
            localStorage.setItem('userData', JSON.stringify(res));
            if (res.role == 'Admin') {
              this.router.navigate(['adminpanel']);
            } else {
              this.router.navigate(['userprofile']);
            }
          } else {
            this.openSnackBar('username or password incorrect');
          }
        } else {
          this.openSnackBar('user not registered yet');
        }
      })
    }

  }
  openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 1000,
    });
  }
  // for register new user
  registerUser() {
    if (!this.isUserExist && this.myRegisterForm.valid) {
      this.userService.registerUser(this.myRegisterForm.value).then((res: any) => {
        this.TabIndex = 0;
        this.openSnackBar('Resiter successfully please login')
      })
    }
  }
  // for checking the Existing user while typing
  searchAvailableUser(evt: any) {
    if (evt.index == 1) {
      this.LoginForm.reset()
      const searchBox: any = document.getElementById('regUserId');
      const keyup$ = fromEvent(searchBox, 'keyup');
      keyup$.pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(500),
        switchMap((i) => this.userService.checkUserAvailability(i))
      ).subscribe((res) => {
          if (res.exists) {
            this.isUserExist = true;
            this.openSnackBar('username not available')
          } else {
            this.isUserExist = false;
          }
        });
    } else {
      this.myRegisterForm.reset()
    }
  }


}
