import { Component, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'add-user',
  templateUrl: 'adduser.dialog.html',
})
export class DialogAddUserDialog implements AfterViewInit {
  constructor(public dialogRef: MatDialogRef<DialogAddUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data:any, public fb: FormBuilder, private db: AngularFirestore, private _snackBar: MatSnackBar) {

  }
  myForm: any;
  userId:string='';
  ngOnInit(): void {
    this.reactiveForm();
    if (this.data.status == 'update') {
      let cData = this.data.totalData;
      this.userId=cData.userId
   
      this.myForm = this.fb.group({
         userId: new FormControl({ value:this.userId , disabled: true }),
         password: [cData.password, [Validators.required]],
         name: [cData.name, [Validators.required]],
         email:[cData.email, [Validators.required]],
         address:[cData.address, [Validators.required]],
         mobNumber: [cData.mobNumber, [Validators.required]],
         role:[cData.role, [Validators.required]]
    
      })
  
    }

  }
  ngAfterViewInit() {
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      userId: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email:['', [Validators.required]],
      address:['', [Validators.required]],
      mobNumber: ['', [Validators.required]],
      role:['', [Validators.required]]
    })
  }

  submitForm() {
      if(this.myForm.valid){
      let userData: any = this.myForm.value;
      userData.updatedDate = new Date().getTime();
      if(this.data.status == 'update'){
        userData.userId=this.userId;
      }
      let ref = this.db.collection('admin').doc(userData.userId);
          ref.set(userData).then((res: any) => {
          this.openSnackBar("User Added");
          this.onNoClick();
        });
  }
}

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 1000,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}