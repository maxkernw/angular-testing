import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyComponent } from './components/my.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ThumbComponent } from './thumb/thumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyComponent,
    ThumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
