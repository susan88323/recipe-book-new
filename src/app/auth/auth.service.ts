import * as firebase from 'firebase';

export class AuthService {
  signupUser(email: string, psd: string) {
    firebase.auth().createUserWithEmailAndPassword(email, psd)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, psd: string) {
    firebase.auth().signInWithEmailAndPassword(email, psd)
      .then(
        response => console.log(response)
      ).catch(
        error => console.log(error)
    );
  }
}
