import { Component, OnInit } from '@angular/core';
import { PrediccionesService } from 'src/app/services/predicciones.service';
import { RespuestasService } from 'src/app/services/respuestas.service';

@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.component.html',
  styleUrls: ['./lectura.component.scss'],
})
export class LecturaComponent implements OnInit {
  opcionesSeleccionadas = {
    opcion1: '',
    opcion2: '',
    opcion3: '',
  };
  imagen1 = `../../../assets/images/${this.opcionesSeleccionadas.opcion1}`;

  cartaInfo1: string = '';
  cartaInfo2: string = '';
  cartaInfo3: string = '';

  informacion = {
    image1: '',
    info1: '',
    invertida1: false,
    image2: '',
    info2: '',
    invertida2: false,
    image3: '',
    info3: '',
    invertida3: false,
  };

  elegir = [
    'asDEOro',
    'oro2',
    'oro3',
    'oro4',
    'oro5',
    'oro6',
    'oro7',
    'oro8',
    'oro9',
    'oro10',
    'oro11',
    'oro12',
    'asDeCopas',
    'copa2',
    'copa3',
    'copa4',
    'copa5',
    'copa6',
    'copa7',
    'copa8',
    'copa9',
    'copa10',
    'copa11',
    'copa12',
    'asDeBastos',
    'bastos2',
    'bastos3',
    'bastos4',
    'bastos5',
    'bastos6',
    'bastos7',
    'bastos8',
    'bastos9',
    'bastos10',
    'bastos11',
    'bastos12',
    'asDeEspadas',
    'espada2',
    'espada3',
    'espada4',
    'espada5',
    'espada6',
    'espada7',
    'espada8',
    'espada9',
    'espada10',
    'espada11',
    'espada12',
  ];

  opcion1: string = '';
  opcion2: string = '';
  opcion3: string = '';
  loading: boolean = false;
  mostrar: boolean = false;
  mostrar2: boolean = false;

  conjugacion = '';

  elegido: string = '';

  predicciones: any[] = [];
  prediccionAleatoria: any;

  constructor(
    private _res: RespuestasService,
    private _pre: PrediccionesService
  ) {}

  ngOnInit(): void {
    this.getPredicciones();
  }

  getPredicciones() {
    this.predicciones = this._pre.getPrediccion();
  }

  getPrediccionAleatoria() {
    const randomIndex = Math.floor(Math.random() * this.predicciones.length);
    this.prediccionAleatoria = this.predicciones[randomIndex];
  }

  getRandomElements(arr: string[], num: number): string[] {
    const arrayCopy = [...arr];
    const randomElements = [];

    for (let i = 0; i < num; i++) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      randomElements.push(arrayCopy.splice(randomIndex, 1)[0]);
    }

    return randomElements;
  }

  getRespuestaConEstado(carta: string): {
    respuesta: string;
    invertida: boolean;
  } {
    const estados = ['', 'INVERTIDA'];
    const estado = estados[Math.floor(Math.random() * estados.length)];
    return {
      respuesta: this._res.getRespuesta(carta + (estado ? estado : '')),
      invertida: estado === 'INVERTIDA',
    };
  }

  pred() {
    this.loading = true;
    this.elegido = 'Creando una predicion para ti...';
    this.mostrar = false;
    this.mostrar2 = true;
    setTimeout(() => {
      this.getPrediccionAleatoria();
      this.conjugacion = this.prediccionAleatoria.conjugacion;
      console.log(this.prediccionAleatoria.conjugacion);
      this.loading = false
    }, 3000);

  }

  suerte() {
    this.elegido = 'Analizando tu suerte y fortuna...';
    this.mostrar = true;
    this.mostrar2 = false;
    this.loading = true;
    setTimeout(() => {
      const randomElements = this.getRandomElements(this.elegir, 3);
      this.opcion1 = randomElements[0];
      this.opcion2 = randomElements[1];
      this.opcion3 = randomElements[2];

      const respuesta1 = this.getRespuestaConEstado(this.opcion1);
      this.informacion.image1 = `https://raw.githubusercontent.com/edwinkay/cartomancia/master/src/assets/images/${this.opcion1}.jpeg`;
      this.informacion.info1 = respuesta1.respuesta;
      this.informacion.invertida1 = respuesta1.invertida;

      const respuesta2 = this.getRespuestaConEstado(this.opcion2);
      this.informacion.image2 = `https://raw.githubusercontent.com/edwinkay/cartomancia/master/src/assets/images/${this.opcion2}.jpeg`;
      this.informacion.info2 = respuesta2.respuesta;
      this.informacion.invertida2 = respuesta2.invertida;

      const respuesta3 = this.getRespuestaConEstado(this.opcion3);
      this.informacion.image3 = `https://raw.githubusercontent.com/edwinkay/cartomancia/master/src/assets/images/${this.opcion3}.jpeg`;
      this.informacion.info3 = respuesta3.respuesta;
      this.informacion.invertida3 = respuesta3.invertida;

      this.loading = false;
    }, 3000);
  }

  amor() {
    this.elegido = 'Vamos a ver como esta tu suerte en el amor...';
    this.mostrar = true;
    this.mostrar2 = false;
    this.loading = true;
    setTimeout(() => {
      const randomElements = this.getRandomElements(this.elegir, 3);
      this.opcion1 = randomElements[0];
      this.opcion2 = randomElements[1];
      this.opcion3 = randomElements[2];

      this.informacion.image1 = `https://raw.githubusercontent.com/edwinkay/cartomancia/master/src/assets/images/${this.opcion1}.jpeg`;
      this.informacion.info1 = this._res.getRespuesta(this.opcion1 + 'AMOR');
      this.informacion.invertida1 = false;

      this.informacion.image2 = `https://raw.githubusercontent.com/edwinkay/cartomancia/master/src/assets/images/${this.opcion2}.jpeg`;
      this.informacion.info2 = this._res.getRespuesta(this.opcion2 + 'AMOR');
      this.informacion.invertida2 = false;

      this.informacion.image3 = `https://raw.githubusercontent.com/edwinkay/cartomancia/master/src/assets/images/${this.opcion3}.jpeg`;
      this.informacion.info3 = this._res.getRespuesta(this.opcion3 + 'AMOR');
      this.informacion.invertida3 = false;

      this.loading = false;
    }, 3000);
  }

  dinero() {
    this.elegido = 'Analizando tus proyectos y vida financiera....';
    this.mostrar = true;
    this.mostrar2 = false;
    this.loading = true;
    setTimeout(() => {
      const randomElements = this.getRandomElements(this.elegir, 3);
      this.opcion1 = randomElements[0];
      this.opcion2 = randomElements[1];
      this.opcion3 = randomElements[2];

      this.informacion.image1 = `https://raw.githubusercontent.com/edwinkay/cartomancia/master/src/assets/images/${this.opcion1}.jpeg`;
      this.informacion.info1 = this._res.getRespuesta(this.opcion1 + 'DINERO');
      this.informacion.invertida1 = false;

      this.informacion.image2 = `https://raw.githubusercontent.com/edwinkay/cartomancia/master/src/assets/images/${this.opcion2}.jpeg`;
      this.informacion.info2 = this._res.getRespuesta(this.opcion2 + 'DINERO');
      this.informacion.invertida2 = false;

      this.informacion.image3 = `https://raw.githubusercontent.com/edwinkay/cartomancia/master/src/assets/images/${this.opcion3}.jpeg`;
      this.informacion.info3 = this._res.getRespuesta(this.opcion3 + 'DINERO');
      this.informacion.invertida3 = false;

      this.loading = false;
    }, 3000);
  }
}
