import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewbookComponent } from './newbook/newbook.component';

const myRoute :Routes=[{
  path:"",
  component:LoginComponent
},
{
  path:"newbook",
  component:NewbookComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
