import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fast-content',
  templateUrl: './fast-content.component.html',
  styleUrls: ['./fast-content.component.scss'],
})
export class FastContentComponent implements OnInit {
  opcion1: string = '';
  opcion2: string = '';
  terminoBusqueda1: string = '';
  terminoBusqueda2: string = '';

  elegir = [
    '¿Me olvida la persona a quien amo?... sota de oros',
    '¿Conseguire mis deseos?... caballo de oros',
    '¿Tengo enemigos?...rey de oros',
    '¿durara mucho mi desgracia?... sota de copas',
    '¿Morire pronto?... caballo de copas',
    '¿Cual sera mi suerte?...rey de copas',
    '¿Que anuncia mis estrella?... sota de espadas',
    '¿sere rico?... caballo de espadas',
    '¿es fundada mi desconfianza?...rey de espadas',
    '¿podre evitar peligros?... sota de bastos',
    '¿llegare a edad avanzada?... caballo de bastos',
    '¿obtendre los triunfos que deseo?... rey de bastos',
  ];
  cartas = [
    'As de oros',
    'oro 02',
    'oro 03',
    'oro 04',
    'oro 05',
    'oro 06',
    'oro 07',
    'As de copas',
    'copa 02',
    'copa 03',
    'copa 04',
    'copa 05',
    'copa 06',
    'copa 07',
    'As de bastos',
    'bastos 02',
    'bastos 03',
    'bastos 04',
    'bastos 05',
    'bastos 06',
    'bastos 07',
    'As de espadas',
    'espada 02',
    'espada 03',
    'espada 04',
    'espada 05',
    'espada 06',
    'espada 07',
  ];
  opcionesSeleccionadas = {
    opcion1: '',
    opcion2: '',
  };

  respuesta1: string = '';

  constructor() {}

  ngOnInit(): void {}

  filtrarOpciones(opciones: string[], terminoBusqueda: string): string[] {
    return opciones.filter((opcion) =>
      opcion.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
  }
  generar() {
    // Check if both options are selected
    if (!this.opcion1 || !this.opcion2) {
      this.respuesta1 = 'Debes seleccionar ambas opciones.';
      return; // Exit early if options are not selected
    }
    this.opcionesSeleccionadas = {
      opcion1: this.opcion1,
      opcion2: this.opcion2,
    };
    console.log(this.opcionesSeleccionadas);
    switch (this.opcion2) {
      case 'As de oros':
        this.respuesta1 = 'Si';
        break;
      case 'oro 02':
        this.respuesta1 = 'Puede ser';
        break;
      case 'oro 03':
        this.respuesta1 = 'Esperalo';
        break;
      case 'oro 04':
        this.respuesta1 = 'No lo dudes';
        break;
      case 'oro 05':
        this.respuesta1 = 'De ninguna manera';
        break;
      case 'oro 06':
        this.respuesta1 = 'Busca otra vez';
        break;
      case 'oro 07':
        this.respuesta1 = 'Me niego a responder tu pregunta';
        break;
      case 'As de copas':
        this.respuesta1 = 'Y llegaste a dudarlo';
        break;
      case 'copa 02':
        this.respuesta1 = 'No';
        break;
      case 'copa 03':
        this.respuesta1 = 'La felicidad no se hizo para ti';
        break;
      case 'copa 04':
        this.respuesta1 = 'No creas en adivinos';
        break;
      case 'copa 05':
        this.respuesta1 = 'En el mundo es ilusion';
        break;
      case 'copa 06':
        this.respuesta1 = 'Cuidate';
        break;
      case 'copa 07':
        this.respuesta1 = 'Vive bien, y conseguiras tus deseos';
        break;
      case 'As de espadas':
        this.respuesta1 = 'Tu conducta te respondera';
        break;
      case 'espada 02':
        this.respuesta1 = 'Piensa mas en la muerte que en la vida';
        break;
      case 'espada 03':
        this.respuesta1 = 'No te alimentes de ilusiones';
        break;
      case 'espada 04':
        this.respuesta1 = 'Te aconsejo que no hagas esas preguntas';
        break;
      case 'espada 05':
        this.respuesta1 = 'No pienses tal cosa';
        break;
      case 'espada 06':
        this.respuesta1 = 'Como no?';
        break;
      case 'espada 07':
        this.respuesta1 = 'Si y no';
        break;
      case 'As de bastos':
        this.respuesta1 = 'Como tu quieras';
        break;
      case 'bastos 02':
        this.respuesta1 = 'Espera para saberlo';
        break;
      case 'bastos 03':
        this.respuesta1 = 'Vaya una pregunta';
        break;
      case 'bastos 04':
        this.respuesta1 = 'Es muy dudoso';
        break;
      case 'bastos 05':
        this.respuesta1 = 'Abandona ese pensamiento';
        break;
      case 'bastos 06':
        this.respuesta1 = 'Eso depende de ti';
        break;
      case 'bastos 07':
        this.respuesta1 = 'No temas';
        break;
      default:
        break;
    }
  }
}
