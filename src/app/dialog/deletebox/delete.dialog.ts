import { Component, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'add-delete',
  templateUrl: 'delete.dialog.html',
})
export class DialogDeleteDialog{
  constructor(public dialogRef: MatDialogRef<DialogDeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data:any, ) {

  }
  ngOnInit(): void {
  }
  onNoClick(state?:any): void {
    this.dialogRef.close(state);
  }

}