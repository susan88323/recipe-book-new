import * as firebase from 'firebase';

export class AuthService {
  token: string;

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

  getToken() {
     firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
      return this.token;
  }
}
