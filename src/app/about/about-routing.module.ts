import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'profile', component : ProfileComponent
  },{
    path: "contact",
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
