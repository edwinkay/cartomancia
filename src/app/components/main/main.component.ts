import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  user: any;
  correo: any;
  usuario: any;
  signoZodiacal: string = ''; // Almacena el signo zodiacal

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private _users: UsersService
  ) {}

  ngOnInit(): void {
    this.afAuth.user.subscribe((user) => {
      this.user = user?.displayName;
      this.correo = user?.email;
    });
    this.loadUser();
  }

  salir() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  loadUser() {
    this._users.getUsers().subscribe((data: any[]) => {
      this.usuario = data.find((user) => user?.correo === this.correo);

      // Si se encuentra el usuario, calcular el signo zodiacal
      if (this.usuario && this.usuario.fecha) {
        this.signoZodiacal = this.getZodiacSign(this.usuario.fecha);
        console.log('Signo zodiacal:', this.signoZodiacal);
      } else {
        console.log('Usuario o fecha no encontrado');
      }
    });
  }

  getZodiacSign(fecha: { seconds: number; nanoseconds: number }): string {
    // Convertir la fecha a un objeto Date
    const date = new Date(fecha.seconds * 1000);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1; // Los meses en JavaScript van de 0 a 11, así que sumamos 1
    const day = date.getUTCDate();

    // Detectar si el año es bisiesto
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    // Definir los rangos de cada signo zodiacal
    if (
      (month === 3 &&
        ((isLeapYear && day >= 20) || (!isLeapYear && day >= 21))) ||
      (month === 4 && day <= 19)
    ) {
      return 'Aries';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return 'Tauro';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return 'Géminis';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      return 'Cáncer';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return 'Leo';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return 'Virgo';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return 'Libra';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return 'Escorpio';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return 'Sagitario';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return 'Capricornio';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return 'Acuario';
    } else if (
      (month === 2 && day >= 19) ||
      (month === 3 && ((isLeapYear && day <= 19) || (!isLeapYear && day <= 20)))
    ) {
      return 'Piscis';
    }

    return 'Desconocido'; // Por si no coincide con ninguno
  }

  contenidoAMostrar: string = 'lectura';

  mostrarContenido(tipo: string) {
    this.contenidoAMostrar = tipo;
  }
}
