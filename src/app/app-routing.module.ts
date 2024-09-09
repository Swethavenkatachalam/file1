import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path : '',component:LandingpageComponent
  },
  {
    path : 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
 
  {
    path : 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path : 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
