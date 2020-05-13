import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { DownComponent } from './down/down.component';
import { TitleComponent } from './header/title/title.component';
import { DateComponent } from './header/date/date.component';
import { LoginComponent } from './header/login/login.component';
import { FormComponent } from './body/form/form.component';
import { PostComponent } from './body/post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    DownComponent,
    TitleComponent,
    DateComponent,
    LoginComponent,
    FormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
