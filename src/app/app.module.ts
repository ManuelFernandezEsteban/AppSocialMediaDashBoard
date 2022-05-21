import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BoxFacebookComponent } from './components/box-facebook/box-facebook.component';
import { BoxDataComponent } from './components/box-data/box-data.component';
import { BoxPrincipalComponent } from './components/box-principal/box-principal.component';
import { BoxSuperiorComponent } from './components/box-superior/box-superior.component';


@NgModule({
  declarations: [
    AppComponent,
    BoxFacebookComponent,
    BoxDataComponent,
    BoxPrincipalComponent,
    BoxSuperiorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
