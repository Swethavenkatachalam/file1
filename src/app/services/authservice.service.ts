import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
 
    constructor() {}
  
    signUp(userData: any): Observable<any> {
      // Send sign-up data to server
      console.log('Sign-Up data:', userData);
      return of(userData); // Mocked response
    }
  
    signIn(credentials: any): Observable<any> {
      // Send sign-in credentials to server
      console.log('Sign-In data:', credentials);
      return of (credentials); // Mocked response
    }
}
