import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewbookComponent } from './newbook/newbook.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute :Routes=[{
  path:"",
  component:LoginComponent
},
{
  path:"newbook",
  component:NewbookComponent
},
{
  path:"navbar",
  component:NavbarComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewbookComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
