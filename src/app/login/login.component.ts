import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router,private ds: DataService) { }
  aim='qwerty';
  acc="Enter Acc.No";
 acno= '';
 pswd= '';

  ngOnInit(): void {
  }
  userDetails:any={
    1000:{acno:1000,username:'Yuki',pass:1000,balance:17000},
    1001:{acno:1001,username:'Max',pass:1001,balance:17000},
    1017:{acno:1017,username:'Senna',pass:1017,balance:17000},
  }

  acnoChange(event:any){
    console.log(event.target.value);
    this.acno=event.target.value;
  }
  passChange(event:any){
    console.log(event.target.value);
    this.pswd=event.target.value;
    
  }
  // login(a:any,p:any){
  //   // alert("clicked")
  //   var acno=a.value;
  //   var pswd=p.value;
  //   var userDetails=this.userDetails;
  //   if (acno in userDetails) {
  //     if (pswd==userDetails[acno]['pass']) {
  //       alert("Login successful")
  //     } else {
  //       alert("incorrect pass")
  //     }
  //   }else{
  //     alert("No account")
  //   }
  //   }
  // login(){
  //   // alert("clicked")ww
  //   var acno=this.acno;
  //   var pswd=this.pswd;
  //   var userDetails=this.userDetails;
  //   if (acno in userDetails) {
  //     if (pswd==userDetails[acno]['pass']) {
  //       alert("Login successful")
  //       this.router.navigateByUrl('dashboard');
  //     } else {
  //       alert("incorrect pass")
  //     }
  //   }else{
  //     alert("No account")
  //   }
  //   }

  login(){
    // alert("clicked")ww
    var acno=this.acno;
    var pswd=this.pswd;
    const result=this.ds.login(acno,pswd)
    if(result){
      alert("login succesfull")
      this.router.navigateByUrl("dashboard")
    }
}
}
