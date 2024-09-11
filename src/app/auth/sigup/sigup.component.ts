import { Component } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrl: './sigup.component.css'
})
export class SigupComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthserviceService, private router: Router) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.authService.signUp(this.signUpForm.value).subscribe((response) => {
        console.log('Sign-Up successful', response);
        this.router.navigate(['home//homepage']);
      });
    }
  }

}
