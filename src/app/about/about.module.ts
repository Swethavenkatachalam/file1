import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
