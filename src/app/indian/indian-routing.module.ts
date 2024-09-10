import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { AmritsariComponent } from './amritsari/amritsari.component';
import { AndhraComponent } from './andhra/andhra.component';
import { ChanaComponent } from './chana/chana.component';
import { GalautiComponent } from './galauti/galauti.component';
import { HyderabadComponent } from './hyderabad/hyderabad.component';
import { JackComponent } from './jack/jack.component';
import { KoliwadaComponent } from './koliwada/koliwada.component';
import { MalaiComponent } from './malai/malai.component';
import { MuttonComponent } from './mutton/mutton.component';
import { RajasthanComponent } from './rajasthan/rajasthan.component';
import { SeviyanComponent } from './seviyan/seviyan.component';
import { ShahiComponent } from './shahi/shahi.component';
import { SurmaiComponent } from './surmai/surmai.component';
import { ModakComponent } from './modak/modak.component';

const routes: Routes = [
  {
    path:"items",
    component :ItemsComponent
  },
  {
    path:'amritsari',
    component:AmritsariComponent
  },
  {
    path:'andhra',
    component:AndhraComponent
  },
  {
    path:'chana',
    component:ChanaComponent
  },
  {
    path:'galauti',
    component:GalautiComponent
  },
  {
    path:'hyderabad',
    component:HyderabadComponent
  },
  {
    path:'jack',
    component:JackComponent
  },
  {
    path:'koliwada',
    component:KoliwadaComponent
  },
  {
    path:'malai',
    component:MalaiComponent
  },
  {
    path:'mutton',
    component:MuttonComponent
  },
  {
    path:'rajasthan',
    component:RajasthanComponent
  },
  {
    path:'seviyan',
    component:SeviyanComponent
  },
  {
    path:'shahi',
    component:ShahiComponent
  },
  {
    path:'surmai',
    component:SurmaiComponent
  },
  {
    path:'modak',
    component:ModakComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndianRoutingModule { }
