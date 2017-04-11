import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, psd: string) {
    firebase.auth().createUserWithEmailAndPassword(email, psd)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, psd: string) {
    firebase.auth().signInWithEmailAndPassword(email, psd)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        error => console.log(error)
    );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
     firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
      return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
