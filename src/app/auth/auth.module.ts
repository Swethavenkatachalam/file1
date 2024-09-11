import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SigupComponent } from './sigup/sigup.component';
<<<<<<< HEAD

=======
import { RecipeComponent } from './recipe/recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 147e6dc7829035f0a68ffb973a7b95148a4b2564


@NgModule({
  declarations: [
    SigninComponent,
    SigupComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
