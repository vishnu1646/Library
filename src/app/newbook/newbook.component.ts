import { Component } from '@angular/core';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent {
name=""
author=""
Language=""
date=""
readvalues =()=>
{
  let data:any ={"Name":this.name,"Author":this.author,"Language":this.Language,"Date":this.date}
  console.log(data)
}
}
