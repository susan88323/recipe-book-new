import * as firebase from 'firebase';

export class AuthService {
  signupUser(email: string, psd: string) {
    firebase.auth().createUserWithEmailAndPassword(email, psd)
      .catch(
        error => console.log(error)
      );
  }
}
