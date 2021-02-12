import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private db:AngularFirestore) { }

 getLoginData(userData:any){
  let ref = this.db.collection('admin').doc(userData.username);
  return ref.get();
 }
 
 getAllUsers(){
  let ref = this.db.collection('admin');
  return ref.snapshotChanges();
 }
 checkUserAvailability(key:string){
  if(key && key.length){ 
  let ref = this.db.collection('admin').doc(key);
  return ref.get();
  }else{
    return from([])
  }

 }
 registerUser(userData:any){
  userData.role="User";
  let ref = this.db.collection('admin').doc(userData.userId);
  return ref.set(userData);
 }
 deleteUser(userId:any){
  let ref = this.db.collection('admin').doc(userId);
  return ref.delete();
 }
}
