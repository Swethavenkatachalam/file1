import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { AuthserviceService } from './services/authservice.service';




@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    
          
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
