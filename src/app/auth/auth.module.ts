import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SigupComponent } from './sigup/sigup.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SigninComponent,
    SigupComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
