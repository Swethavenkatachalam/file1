import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SigupComponent } from './sigup/sigup.component';

const routes: Routes = [
  {
    path : 'signin',component : SigninComponent
  },
  {
    path : 'sigup',component : SigupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
