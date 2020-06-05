import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBrigadeComponent } from './top-brigade/top-brigade.component';
import { ListTopBrigadeComponent } from './top-brigade/list-top-brigade/list-top-brigade.component';
import { AllBrigadeListComponent } from './all-brigade-list/all-brigade-list.component';
import { BrigadeComponentComponent } from './all-brigade-list/brigade-component/brigade-component.component';
import { AddNewBrigadeFormComponent } from './add-new-brigade-form/add-new-brigade-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    TopBrigadeComponent,
    ListTopBrigadeComponent,
    AllBrigadeListComponent,
    BrigadeComponentComponent,
    AddNewBrigadeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
