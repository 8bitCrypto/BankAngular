import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
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
  login(){
    // alert("clicked")
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails;
    if (acno in userDetails) {
      if (pswd==userDetails[acno]['pass']) {
        alert("Login successful")
      } else {
        alert("incorrect pass")
      }
    }else{
      alert("No account")
    }
    }
}

