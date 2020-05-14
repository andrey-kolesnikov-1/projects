import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBrigadeComponent } from './top-brigade/top-brigade.component';
import { ListTopBrigadeComponent } from './top-brigade/list-top-brigade/list-top-brigade.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBrigadeComponent,
    ListTopBrigadeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
