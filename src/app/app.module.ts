import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http'; 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service'; 
import { AppRoutingModule }     from './app-routing.module'; 
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component'
import { JokerDetailComponent }  from './joker-detail/joker-detail.component';
import { JokerComponent }      from './joker/joker.component';
import { JokerSearchComponent }  from './joker-search/joker-search.component';
import { MessagesComponent }    from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    JokerComponent,
    JokerDetailComponent,
    MessagesComponent,
    DashboardComponent,
    JokerSearchComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
