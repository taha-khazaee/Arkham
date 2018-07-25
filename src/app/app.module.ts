import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokerComponent } from './joker/joker.component';

import { FormsModule } from '@angular/forms';
import { JokerDetailComponent } from './joker-detail/joker-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    JokerComponent,
    JokerDetailComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
