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
}
}
