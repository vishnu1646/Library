import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
name =""
password=""


readValues=()=>
{
  let library:any ={"Name ":this.name,"Password": this.password}
  console.log(library)
  if (this.name=="admin" &&this.password=="12345") {
    alert("Valid Login")
  } else {
    alert("Invalid credentials ")
  }
}
}
