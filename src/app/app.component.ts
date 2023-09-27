import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cartomancia';

  contenidoAMostrar: string | null = null;

  mostrarContenido(tipo: string) {
    this.contenidoAMostrar = tipo;
  }
}
