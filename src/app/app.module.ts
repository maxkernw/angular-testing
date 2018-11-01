import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyComponent } from './components/my.component';
import { HttpClientModule } from '@angular/common/http';
import { ThumbComponent } from './thumb/thumb.component';
import { MymoduleModule } from './mymodule/mymodule.module';
import { MyModuleConfig } from './mymodule/mymodule.config';
import { DashboardModule } from './dashboard/dashboard.module';

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
    HttpClientModule,
    MymoduleModule,
    DashboardModule
  ],
  providers: [{
    provide: MyModuleConfig, useValue: {
      prefix: 'Custom Prefix'
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
