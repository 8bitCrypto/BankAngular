import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  currentUser :any;
  userDetails: any = {
    1000: { acno: 1000, username: 'Yuki', pass: 1000, balance: 17000,transaction:[] },
    1001: { acno: 1001, username: 'Max', pass: 1001, balance: 17000,transaction:[] },
    1017: { acno: 1017, username: 'Senna', pass: 1017, balance: 17000,transaction:[] },
  }
  currentacno: any;
  constructor() { }
  register(acno: any, username: any, pass: any) {
    let userDetails = this.userDetails;
    if (acno in userDetails) {
      return false;
    }
    else {
      userDetails[acno] = {
        acno,
        username,
        pass,
        balance :0,
        transaction:[]
      }
      console.log(userDetails);
      return true;
    }
  }
  login(acno: any, pswd: any) {
    let userDetails = this.userDetails;
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['pass']) {
        this.currentUser=this.userDetails[acno]['username']
        this.currentacno = acno;
        return true;
      }
      else {
        alert("Incorrect Password")
        return false;
      }
    }
    else {
      alert("Invalid User")
      return false;
    }
  }
  deposit(acno: any, pswd: any, amt: any) {
    var userDetails = this.userDetails;
    var amount = parseInt(amt)
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['pass']) {
        userDetails[acno]['balance'] += amount;
        userDetails[acno]['transaction'].push({
          type:'Credit',
          amount
        })
        console.log(userDetails);
        
        return userDetails[acno]['balance'];
      } else {
        alert("incorrect password")
        return false;
      }
    } else {
      alert("Invalid User")
      return false;
    }
  }
  withdraw(acno: any, pswd: any, amt: any) {
    var userDetails = this.userDetails;
    var amount = parseInt(amt)
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['pass']) {
        if (userDetails[acno]['balance'] > amount) {
          userDetails[acno]['balance'] -= amount;
          userDetails[acno]['transaction'].push({
            type:'Debit',
            amount
          })
          console.log(userDetails);
          
          return userDetails[acno]['balance'];
        } else {
          alert("incorrect password")
          return false;
        }
      }
    } else {
      alert("Invalid User")
      return false;
    }
  }
  getTransaction(acno:any){
    return this.userDetails[acno]['transaction'];
  }
}
