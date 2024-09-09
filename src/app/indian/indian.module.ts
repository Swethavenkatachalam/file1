import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndianRoutingModule } from './indian-routing.module';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    IndianRoutingModule
  ]
})
export class IndianModule { }
