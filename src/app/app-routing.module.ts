import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';


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
  },
  {
    path : 'indian', loadChildren: () => import('./indian/indian.module').then(m => m.IndianModule)
  },
  {
    path : 'italian', loadChildren: () => import('./italian/italian.module').then(m => m.ItalianModule)
  },
  {
    path : 'mexican', loadChildren: () => import('./mexican/mexican.module').then(m => m.MexicanModule)
  },
  {
    path : 'chinese', loadChildren: () => import('./chinese/chinese.module').then(m => m.ChineseModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
