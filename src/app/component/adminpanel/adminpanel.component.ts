import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogAddUserDialog } from '../../dialog/adduser/adduser.dialog';
import { UserService } from '../../sevices/user.service';
import { DialogDeleteDialog } from '../../dialog/deletebox/delete.dialog';
@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'name', 'role', 'email', 'mobNumber', 'updatedDate', 'address', 'Edit', 'Delete'];
  dataSource: any = [];
  dataSource1: any = [];
  teamList: any = [];
  cutomerData: any;
  @ViewChild(MatPaginator, { static: true }) paginator: any;
  constructor(public dialog: MatDialog, public router: Router, private userService: UserService, public snackBar: MatSnackBar,) { }

  ngOnInit() {
    this.getAllUser();
  }
  // for get all user list 
  getAllUser() {
    this.userService.getAllUsers().subscribe((res) => {
      let allData: any = [];
      if (res && res.length) {
        for (let i of res) {
          allData.push(i.payload.doc.data())
        }
      } else {
        allData = [];
      }
      this.dataSource = new MatTableDataSource(allData);
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // Add New User
  addNewUser(ele: any, data: any) {
    const dialogRef = this.dialog.open(DialogAddUserDialog, {
      width: '300px',
      minWidth: '250px',
      data: { totalData: data, status: ele }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ok') {
      }
    });
  }
  // Delete User
  deleteUser(ele: any) {
    const dialogRef = this.dialog.open(DialogDeleteDialog, {
      width: '300px',
      minWidth: '250px',
      data: { totalData: '', status: ele }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'delete') {
        this.userService.deleteUser(ele.userId).then((res) => {
          this.openSnackBar('User Deleted');
        })
      }
    });

  }
  openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 1000,
    });
  }
  // LogOut User
  logoutUser() {
    localStorage.removeItem('userData');
    this.router.navigate(['login']);
  }

}
