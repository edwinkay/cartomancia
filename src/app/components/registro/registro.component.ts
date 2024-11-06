import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';
import firebase from 'firebase/compat/app';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  usuario: string = '';
  email: string = '';
  password: string = '';
  repetirPassword: string = '';
  showError: boolean = false;
  mensaje = '';
  fechaNacimiento: Date | null = null;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseErrorService,
    private _usuarios: UsersService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  registrarse() {
  if (this.password === this.repetirPassword) {
    this.afAuth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((cd) => {
        return cd.user?.updateProfile({
          displayName: this.usuario,
        }).then(() => {
          const info = {
            nombre: this.usuario,
            correo: this.email,
            pass: this.password,
            fecha: this.fechaNacimiento
              ? firebase.firestore.Timestamp.fromDate(this.fechaNacimiento)
              : null,
          };
          return this._usuarios.addUserInfo(info);
        });
      })
      .then(() => {
        // Mostrar notificación de éxito
        this.snackBar.open('¡Registro exitoso! Redirigiendo al login...', 'Cerrar', {
          duration: 3000, // Duración de 3 segundos
          panelClass: ['snackbar-success'] // Clase para estilos personalizados (opcional)
        });
        // Redirigir al login después de un breve retraso
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      })
      .catch((error) => {
        this.showError = true;
        this.mensaje = this.firebaseError.errorFirebase(error.code);
        setTimeout(() => {
          this.showError = false;
        }, 3000);
      });
  } else {
    this.showError = true;
    this.mensaje = 'Las contraseñas no coinciden';
    setTimeout(() => {
      this.showError = false;
    }, 3000);
  }
}

}
