import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndianRoutingModule } from './indian-routing.module';
import { ItemsComponent } from './items/items.component';
import { AmritsariComponent } from './amritsari/amritsari.component';
import { AndhraComponent } from './andhra/andhra.component';
import { ChanaComponent } from './chana/chana.component';
import { GalautiComponent } from './galauti/galauti.component';
import { HyderabadComponent } from './hyderabad/hyderabad.component';
import { JackComponent } from './jack/jack.component';
import { KoliwadaComponent } from './koliwada/koliwada.component';
import { MalaiComponent } from './malai/malai.component';
import { ModakComponent } from './modak/modak.component';
import { RajasthanComponent } from './rajasthan/rajasthan.component';
import { SeviyanComponent } from './seviyan/seviyan.component';
import { ShahiComponent } from './shahi/shahi.component';
import { SurmaiComponent } from './surmai/surmai.component';
import { MuttonComponent } from './mutton/mutton.component';
import { KolhapuriComponent } from './kolhapuri/kolhapuri.component';


@NgModule({
  declarations: [
    ItemsComponent,
    AmritsariComponent,
    AndhraComponent,
    ChanaComponent,
    GalautiComponent,
    HyderabadComponent,
    JackComponent,
    KoliwadaComponent,
    MalaiComponent,
    ModakComponent,
    RajasthanComponent,
    SeviyanComponent,
    ShahiComponent,
    SurmaiComponent,
    MuttonComponent,
    KolhapuriComponent
  ],
  imports: [
    CommonModule,
    IndianRoutingModule
  ]
})
export class IndianModule { }
