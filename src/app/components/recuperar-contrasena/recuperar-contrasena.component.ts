import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.scss'],
})
export class RecuperarContrasenaComponent implements OnInit {
  email: string = '';
  showError: boolean = false;
  mensaje = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseErrorService
  ) {}

  ngOnInit(): void {}

  recuperar() {
    this.afAuth
      .sendPasswordResetEmail(this.email)
      .then(() => {
        this.router.navigate(['/login'])
      })
      .catch((error) => {
        console.log(error);
        this.mensaje = this.firebaseError.errorFirebase(error.code);
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
          this.mensaje = '';
        }, 3000);
      });
  }
}
