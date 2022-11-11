import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';
import { Data } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  uname = "";
  acno = "";
  pswd = "";

  registerForm=this.fb.group({uname:['']
  ,acno:['']
  ,pswd:['']})
  constructor(private fb:FormBuilder, private ds: DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register() {
   
    var uname=this.registerForm.value.uname;
    var acno=this.registerForm.value.acno;
    var pswd=this.registerForm.value.pswd;
    
    const result =this.ds.register(acno,uname,pswd);
    if (result) {
      alert("successfully registered")
      this.router.navigateByUrl('')
    } else {
      alert("Somethimg went wrong")
      
    }
  }
}
