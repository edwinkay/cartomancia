import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signos',
  templateUrl: './signos.component.html',
  styleUrls: ['./signos.component.scss'],
})
export class SignosComponent implements OnInit {
  mostrar = false
  ngOnInit(): void {}

  modal(){
    this.mostrar = !this.mostrar
  }
  cerrar(){
    this.mostrar = false
  }

  signos: string[] = [
    'Aries',
    'Tauro',
    'Géminis',
    'Cáncer',
    'Leo',
    'Virgo',
    'Libra',
    'Escorpio',
    'Sagitario',
    'Capricornio',
    'Acuario',
    'Piscis',
  ];
  signoIzquierdo: string = this.signos[0];
  signoDerecho: string = this.signos[0];
  compatibilidad: any;

  compatibilidadDatos: any = {
    'Aries-Tauro': {
      porcentaje: 50,
      planeta: 'Marte y Venus',
      elemento: 'Fuego y Tierra',
      explicacion:
        'Aries es impulsivo y Tauro es paciente. Pueden complementarse si aprenden a respetar sus diferencias.',
    },
    'Aries-Géminis': {
      porcentaje: 80,
      planeta: 'Marte y Mercurio',
      elemento: 'Fuego y Aire',
      explicacion:
        'Aries y Géminis tienen una energía y entusiasmo que les permite disfrutar de la vida juntos.',
    },
    'Aries-Cáncer': {
      porcentaje: 60,
      planeta: 'Marte y Luna',
      elemento: 'Fuego y Agua',
      explicacion:
        'Aries es dinámico y Cáncer emocional. Pueden tener conflictos, pero también pueden aprender mucho el uno del otro.',
    },
    'Aries-Leo': {
      porcentaje: 90,
      planeta: 'Marte y Sol',
      elemento: 'Fuego',
      explicacion:
        'Aries y Leo son signos de fuego, lo que los hace apasionados y energéticos. Tienen una fuerte conexión y una gran química.',
    },
    'Aries-Virgo': {
      porcentaje: 70,
      planeta: 'Marte y Mercurio',
      elemento: 'Fuego y Tierra',
      explicacion:
        'Aries es impulsivo y Virgo es analítico. Pueden complementarse si aprenden a valorar sus diferencias.',
    },
    'Aries-Libra': {
      porcentaje: 75,
      planeta: 'Marte y Venus',
      elemento: 'Fuego y Aire',
      explicacion:
        'Aries y Libra son opuestos en el zodiaco. Aunque tienen diferencias, pueden atraer y equilibrar las cualidades del otro.',
    },
    'Aries-Escorpio': {
      porcentaje: 65,
      planeta: 'Marte y Plutón',
      elemento: 'Fuego y Agua',
      explicacion:
        'Aries y Escorpio son intensos y apasionados. Aunque pueden tener conflictos, su conexión puede ser muy profunda.',
    },
    'Aries-Sagitario': {
      porcentaje: 85,
      planeta: 'Marte y Júpiter',
      elemento: 'Fuego',
      explicacion:
        'Aries y Sagitario comparten una gran energía y entusiasmo por la vida. Son una pareja aventurera y divertida.',
    },
    'Aries-Capricornio': {
      porcentaje: 55,
      planeta: 'Marte y Saturno',
      elemento: 'Fuego y Tierra',
      explicacion:
        'Aries es impulsivo y Capricornio es disciplinado. Pueden complementarse si encuentran un equilibrio entre acción y planificación.',
    },
    'Aries-Acuario': {
      porcentaje: 80,
      planeta: 'Marte y Urano',
      elemento: 'Fuego y Aire',
      explicacion:
        'Aries y Acuario tienen una fuerte conexión intelectual y emocional. Su relación es innovadora y emocionante.',
    },
    'Aries-Piscis': {
      porcentaje: 60,
      planeta: 'Marte y Neptuno',
      elemento: 'Fuego y Agua',
      explicacion:
        'Aries es directo y Piscis es soñador. Pueden aprender mucho el uno del otro si logran comprender sus diferencias.',
    },
    'Aries-Aries': {
      porcentaje: 70,
      planeta: 'Marte',
      elemento: 'Fuego',
      explicacion:
        'Dos Aries pueden ser una pareja apasionada y dinámica, pero deben tener cuidado con los conflictos de ego.',
    },
    'Tauro-Aries': {
      porcentaje: 50,
      planeta: 'Venus y Marte',
      elemento: 'Tierra y Fuego',
      explicacion:
        'Tauro es paciente y Aries es impulsivo. Pueden complementarse si aprenden a respetar sus diferencias.',
    },
    'Tauro-Tauro': {
      porcentaje: 90,
      planeta: 'Venus',
      elemento: 'Tierra',
      explicacion:
        'Dos Tauro juntos forman una pareja muy estable y confiable. Comparten valores similares y disfrutan de las mismas cosas.',
    },
    'Tauro-Géminis': {
      porcentaje: 60,
      planeta: 'Venus y Mercurio',
      elemento: 'Tierra y Aire',
      explicacion:
        'Tauro es estable y Géminis es inquieto. Necesitan encontrar un equilibrio entre la estabilidad y la diversidad.',
    },
    'Tauro-Cáncer': {
      porcentaje: 80,
      planeta: 'Venus y Luna',
      elemento: 'Tierra y Agua',
      explicacion:
        'Tauro y Cáncer tienen una conexión emocional profunda y disfrutan de la vida hogareña y la seguridad emocional.',
    },
    'Tauro-Leo': {
      porcentaje: 70,
      planeta: 'Venus y Sol',
      elemento: 'Tierra y Fuego',
      explicacion:
        'Tauro es práctico y Leo es extravagante. Pueden complementarse bien si encuentran un equilibrio entre el lujo y la sencillez.',
    },
    'Tauro-Virgo': {
      porcentaje: 85,
      planeta: 'Venus y Mercurio',
      elemento: 'Tierra',
      explicacion:
        'Tauro y Virgo comparten una conexión basada en la estabilidad y la practicidad. Juntos, forman una pareja muy compatible y armoniosa.',
    },
    'Tauro-Libra': {
      porcentaje: 75,
      planeta: 'Venus',
      elemento: 'Tierra y Aire',
      explicacion:
        'Tauro y Libra, ambos regidos por Venus, disfrutan de la belleza y la armonía. Pueden tener una relación equilibrada y amorosa.',
    },
    'Tauro-Escorpio': {
      porcentaje: 65,
      planeta: 'Venus y Plutón',
      elemento: 'Tierra y Agua',
      explicacion:
        'Tauro y Escorpio tienen una conexión intensa y emocional. Aunque pueden tener conflictos, su relación es profunda y apasionada.',
    },
    'Tauro-Sagitario': {
      porcentaje: 55,
      planeta: 'Venus y Júpiter',
      elemento: 'Tierra y Fuego',
      explicacion:
        'Tauro es estable y Sagitario es aventurero. Necesitan encontrar un equilibrio entre la seguridad y la exploración.',
    },
    'Tauro-Capricornio': {
      porcentaje: 90,
      planeta: 'Venus y Saturno',
      elemento: 'Tierra',
      explicacion:
        'Tauro y Capricornio comparten una fuerte conexión basada en la estabilidad y la practicidad. Son una pareja muy compatible y confiable.',
    },
    'Tauro-Acuario': {
      porcentaje: 60,
      planeta: 'Venus y Urano',
      elemento: 'Tierra y Aire',
      explicacion:
        'Tauro es tradicional y Acuario es innovador. Pueden complementarse si encuentran un equilibrio entre lo antiguo y lo nuevo.',
    },
    'Tauro-Piscis': {
      porcentaje: 80,
      planeta: 'Venus y Neptuno',
      elemento: 'Tierra y Agua',
      explicacion:
        'Tauro y Piscis tienen una conexión emocional profunda y disfrutan de la belleza y la creatividad. Juntos, forman una pareja muy armoniosa.',
    },
    'Géminis-Aries': {
      porcentaje: 80,
      planeta: 'Mercurio y Marte',
      elemento: 'Aire y Fuego',
      explicacion:
        'Géminis y Aries tienen una energía y entusiasmo que les permite disfrutar de la vida juntos. Su relación es dinámica y divertida.',
    },
    'Géminis-Tauro': {
      porcentaje: 60,
      planeta: 'Mercurio y Venus',
      elemento: 'Aire y Tierra',
      explicacion:
        'Géminis es inquieto y Tauro es estable. Necesitan encontrar un equilibrio entre la estabilidad y la diversidad para llevarse bien.',
    },
    'Géminis-Géminis': {
      porcentaje: 85,
      planeta: 'Mercurio',
      elemento: 'Aire',
      explicacion:
        'Dos Géminis juntos pueden tener una relación muy comunicativa y estimulante. Sin embargo, deben evitar la falta de estabilidad.',
    },
    'Géminis-Cáncer': {
      porcentaje: 55,
      planeta: 'Mercurio y Luna',
      elemento: 'Aire y Agua',
      explicacion:
        'Géminis es racional y Cáncer es emocional. Pueden tener dificultades para comprenderse, pero también pueden aprender mucho el uno del otro.',
    },
    'Géminis-Leo': {
      porcentaje: 75,
      planeta: 'Mercurio y Sol',
      elemento: 'Aire y Fuego',
      explicacion:
        'Géminis y Leo tienen una relación llena de creatividad y diversión. Ambos disfrutan de la vida social y pueden complementarse bien.',
    },
    'Géminis-Virgo': {
      porcentaje: 65,
      planeta: 'Mercurio',
      elemento: 'Aire y Tierra',
      explicacion:
        'Géminis es flexible y Virgo es detallista. Pueden tener una relación productiva si aprenden a respetar sus diferencias y trabajar juntos.',
    },
    'Géminis-Libra': {
      porcentaje: 90,
      planeta: 'Mercurio y Venus',
      elemento: 'Aire',
      explicacion:
        'Géminis y Libra comparten una gran conexión mental y social. Juntos, pueden tener una relación armoniosa y estimulante.',
    },
    'Géminis-Escorpio': {
      porcentaje: 50,
      planeta: 'Mercurio y Plutón',
      elemento: 'Aire y Agua',
      explicacion:
        'Géminis es ligero y Escorpio es intenso. Pueden tener una relación desafiante, pero también pueden aprender mucho el uno del otro.',
    },
    'Géminis-Sagitario': {
      porcentaje: 85,
      planeta: 'Mercurio y Júpiter',
      elemento: 'Aire y Fuego',
      explicacion:
        'Géminis y Sagitario son signos opuestos que se atraen. Su relación es estimulante y llena de aventuras y aprendizajes.',
    },
    'Géminis-Capricornio': {
      porcentaje: 55,
      planeta: 'Mercurio y Saturno',
      elemento: 'Aire y Tierra',
      explicacion:
        'Géminis es espontáneo y Capricornio es estructurado. Necesitan encontrar un equilibrio entre la flexibilidad y la disciplina para llevarse bien.',
    },
    'Géminis-Acuario': {
      porcentaje: 95,
      planeta: 'Mercurio y Urano',
      elemento: 'Aire',
      explicacion:
        'Géminis y Acuario tienen una gran conexión mental y disfrutan de la independencia. Su relación es innovadora y emocionante.',
    },
    'Géminis-Piscis': {
      porcentaje: 60,
      planeta: 'Mercurio y Neptuno',
      elemento: 'Aire y Agua',
      explicacion:
        'Géminis es racional y Piscis es soñador. Pueden tener dificultades para comprenderse, pero también pueden inspirarse mutuamente.',
    },
    'Cáncer-Aries': {
      porcentaje: 60,
      planeta: 'Luna y Marte',
      elemento: 'Agua y Fuego',
      explicacion:
        'Cáncer es emocional y Aries es impulsivo. Pueden complementarse si Cáncer proporciona estabilidad emocional y Aries trae dinamismo a la relación.',
    },
    'Cáncer-Tauro': {
      porcentaje: 85,
      planeta: 'Luna y Venus',
      elemento: 'Agua y Tierra',
      explicacion:
        'Cáncer y Tauro comparten una fuerte necesidad de seguridad y estabilidad. Su relación es cálida y confiable, con una profunda conexión emocional.',
    },
    'Cáncer-Géminis': {
      porcentaje: 55,
      planeta: 'Luna y Mercurio',
      elemento: 'Agua y Aire',
      explicacion:
        'Cáncer es emocional y Géminis es racional. Pueden tener dificultades para comprenderse, pero también pueden aprender mucho el uno del otro.',
    },
    'Cáncer-Cáncer': {
      porcentaje: 90,
      planeta: 'Luna',
      elemento: 'Agua',
      explicacion:
        'Dos Cáncer juntos forman una pareja muy emocional y sensible. Su relación es protectora y comprensiva, pero deben evitar caer en el exceso de emotividad.',
    },
    'Cáncer-Leo': {
      porcentaje: 70,
      planeta: 'Luna y Sol',
      elemento: 'Agua y Fuego',
      explicacion:
        'Cáncer es introspectivo y Leo es extrovertido. Pueden complementarse si Cáncer proporciona apoyo emocional y Leo aporta energía y vitalidad a la relación.',
    },
    'Cáncer-Virgo': {
      porcentaje: 80,
      planeta: 'Luna y Mercurio',
      elemento: 'Agua y Tierra',
      explicacion:
        'Cáncer y Virgo comparten una relación basada en el cuidado y la atención al detalle. Su relación es armoniosa y mutuamente beneficiosa.',
    },
    'Cáncer-Libra': {
      porcentaje: 65,
      planeta: 'Luna y Venus',
      elemento: 'Agua y Aire',
      explicacion:
        'Cáncer es emocional y Libra es social. Pueden tener una relación equilibrada si aprenden a respetar y valorar sus diferencias.',
    },
    'Cáncer-Escorpio': {
      porcentaje: 90,
      planeta: 'Luna y Plutón',
      elemento: 'Agua',
      explicacion:
        'Cáncer y Escorpio tienen una profunda conexión emocional e intuitiva. Su relación es intensa y apasionada, con una fuerte lealtad mutua.',
    },
    'Cáncer-Sagitario': {
      porcentaje: 50,
      planeta: 'Luna y Júpiter',
      elemento: 'Agua y Fuego',
      explicacion:
        'Cáncer es hogareño y Sagitario es aventurero. Pueden tener dificultades para encontrar un equilibrio, pero también pueden enriquecerse mutuamente con sus diferentes perspectivas.',
    },
    'Cáncer-Capricornio': {
      porcentaje: 75,
      planeta: 'Luna y Saturno',
      elemento: 'Agua y Tierra',
      explicacion:
        'Cáncer y Capricornio son signos opuestos que se complementan. Cáncer aporta emoción y cuidado, mientras que Capricornio proporciona estabilidad y estructura.',
    },
    'Cáncer-Acuario': {
      porcentaje: 55,
      planeta: 'Luna y Urano',
      elemento: 'Agua y Aire',
      explicacion:
        'Cáncer es emocional y Acuario es intelectual. Pueden tener dificultades para comprenderse, pero también pueden aprender mucho el uno del otro.',
    },
    'Cáncer-Piscis': {
      porcentaje: 95,
      planeta: 'Luna y Neptuno',
      elemento: 'Agua',
      explicacion:
        'Cáncer y Piscis tienen una conexión emocional y espiritual profunda. Su relación es compasiva y comprensiva, con una gran empatía mutua.',
    },
    'Leo-Aries': {
      porcentaje: 85,
      planeta: 'Sol y Marte',
      elemento: 'Fuego',
      explicacion:
        'Leo y Aries son signos de fuego, lo que les da una gran energía y pasión. Su relación es dinámica y vibrante, aunque deben tener cuidado con los conflictos de ego.',
    },
    'Leo-Tauro': {
      porcentaje: 60,
      planeta: 'Sol y Venus',
      elemento: 'Fuego y Tierra',
      explicacion:
        'Leo es extrovertido y Tauro es práctico. Pueden complementarse bien si Leo aporta entusiasmo y Tauro estabilidad, pero pueden tener conflictos si ninguno cede en sus puntos de vista.',
    },
    'Leo-Géminis': {
      porcentaje: 75,
      planeta: 'Sol y Mercurio',
      elemento: 'Fuego y Aire',
      explicacion:
        'Leo y Géminis tienen una relación divertida y estimulante. Ambos disfrutan de la vida social y tienen una gran química, aunque Leo puede necesitar más atención de la que Géminis está dispuesto a dar.',
    },
    'Leo-Cáncer': {
      porcentaje: 70,
      planeta: 'Sol y Luna',
      elemento: 'Fuego y Agua',
      explicacion:
        'Leo es extrovertido y Cáncer es introspectivo. Pueden complementarse si Leo aporta energía y Cáncer proporciona apoyo emocional, aunque pueden tener dificultades para comprenderse completamente.',
    },
    'Leo-Leo': {
      porcentaje: 90,
      planeta: 'Sol',
      elemento: 'Fuego',
      explicacion:
        'Dos Leo juntos forman una pareja muy apasionada y energética. Su relación es intensa y llena de vida, pero deben tener cuidado con los conflictos de ego y la necesidad de atención.',
    },
    'Leo-Virgo': {
      porcentaje: 65,
      planeta: 'Sol y Mercurio',
      elemento: 'Fuego y Tierra',
      explicacion:
        'Leo es extrovertido y Virgo es analítico. Pueden complementarse si Leo aporta entusiasmo y Virgo atención al detalle, aunque pueden tener dificultades para comprenderse completamente.',
    },
    'Leo-Libra': {
      porcentaje: 85,
      planeta: 'Sol y Venus',
      elemento: 'Fuego y Aire',
      explicacion:
        'Leo y Libra tienen una relación armoniosa y equilibrada. Ambos disfrutan de la vida social y se complementan bien, con Leo aportando energía y Libra equilibrio.',
    },
    'Leo-Escorpio': {
      porcentaje: 70,
      planeta: 'Sol y Plutón',
      elemento: 'Fuego y Agua',
      explicacion:
        'Leo y Escorpio tienen una relación intensa y apasionada. Ambos son signos fuertes y determinados, lo que puede llevar a conflictos, pero también a una gran conexión emocional.',
    },
    'Leo-Sagitario': {
      porcentaje: 90,
      planeta: 'Sol y Júpiter',
      elemento: 'Fuego',
      explicacion:
        'Leo y Sagitario son signos de fuego, lo que les da una gran energía y entusiasmo. Su relación es divertida y estimulante, con una gran química y compatibilidad.',
    },
    'Leo-Capricornio': {
      porcentaje: 65,
      planeta: 'Sol y Saturno',
      elemento: 'Fuego y Tierra',
      explicacion:
        'Leo es extrovertido y Capricornio es serio. Pueden complementarse si Leo aporta entusiasmo y Capricornio estabilidad, aunque pueden tener dificultades para comprenderse completamente.',
    },
    'Leo-Acuario': {
      porcentaje: 75,
      planeta: 'Sol y Urano',
      elemento: 'Fuego y Aire',
      explicacion:
        'Leo y Acuario son signos opuestos, lo que puede llevar a una gran atracción y complementariedad. Ambos son fuertes e independientes, pero pueden tener dificultades para ceder en sus puntos de vista.',
    },
    'Leo-Piscis': {
      porcentaje: 60,
      planeta: 'Sol y Neptuno',
      elemento: 'Fuego y Agua',
      explicacion:
        'Leo es extrovertido y Piscis es introspectivo. Pueden complementarse si Leo aporta energía y Piscis apoyo emocional, aunque pueden tener dificultades para comprenderse completamente.',
    },
    'Virgo-Aries': {
      porcentaje: 50,
      planeta: 'Mercurio y Marte',
      elemento: 'Tierra y Fuego',
      explicacion:
        'Virgo es analítico y Aries es impulsivo. Pueden tener dificultades para encontrar un equilibrio, ya que Virgo necesita planificación y Aries busca acción inmediata.',
    },
    'Virgo-Tauro': {
      porcentaje: 85,
      planeta: 'Mercurio y Venus',
      elemento: 'Tierra',
      explicacion:
        'Virgo y Tauro son signos de tierra, lo que les da una base sólida y práctica. Ambos valoran la estabilidad y la seguridad, lo que puede llevar a una relación duradera.',
    },
    'Virgo-Géminis': {
      porcentaje: 60,
      planeta: 'Mercurio',
      elemento: 'Tierra y Aire',
      explicacion:
        'Virgo es práctico y Géminis es curioso. Pueden complementarse si Virgo aporta estabilidad y Géminis aporta flexibilidad, aunque pueden tener dificultades para comprenderse completamente.',
    },
    'Virgo-Cáncer': {
      porcentaje: 75,
      planeta: 'Mercurio y Luna',
      elemento: 'Tierra y Agua',
      explicacion:
        'Virgo es analítico y Cáncer es emocional. Pueden complementarse bien, con Virgo proporcionando estructura y Cáncer apoyo emocional, lo que puede llevar a una relación equilibrada.',
    },
    'Virgo-Leo': {
      porcentaje: 65,
      planeta: 'Mercurio y Sol',
      elemento: 'Tierra y Fuego',
      explicacion:
        'Virgo es analítico y Leo es extrovertido. Pueden complementarse si Virgo aporta atención al detalle y Leo entusiasmo, aunque pueden tener dificultades para comprenderse completamente.',
    },
    'Virgo-Virgo': {
      porcentaje: 90,
      planeta: 'Mercurio',
      elemento: 'Tierra',
      explicacion:
        'Dos Virgo juntos forman una pareja muy organizada y detallista. Comparten valores similares y disfrutan de la misma atención al detalle, lo que puede llevar a una relación muy armoniosa.',
    },
    'Virgo-Libra': {
      porcentaje: 70,
      planeta: 'Mercurio y Venus',
      elemento: 'Tierra y Aire',
      explicacion:
        'Virgo es práctico y Libra es equilibrado. Pueden complementarse bien, con Virgo proporcionando estructura y Libra armonía, aunque pueden tener dificultades para comprenderse completamente.',
    },
    'Virgo-Escorpio': {
      porcentaje: 80,
      planeta: 'Mercurio y Plutón',
      elemento: 'Tierra y Agua',
      explicacion:
        'Virgo es analítico y Escorpio es intenso. Pueden complementarse bien, con Virgo proporcionando lógica y Escorpio profundidad emocional, lo que puede llevar a una relación muy intensa y equilibrada.',
    },
    'Virgo-Sagitario': {
      porcentaje: 60,
      planeta: 'Mercurio y Júpiter',
      elemento: 'Tierra y Fuego',
      explicacion:
        'Virgo es práctico y Sagitario es aventurero. Pueden complementarse si Virgo aporta estabilidad y Sagitario entusiasmo, aunque pueden tener dificultades para comprenderse completamente.',
    },
    'Virgo-Capricornio': {
      porcentaje: 85,
      planeta: 'Mercurio y Saturno',
      elemento: 'Tierra',
      explicacion:
        'Virgo y Capricornio son signos de tierra, lo que les da una base sólida y práctica. Ambos valoran la estabilidad y la seguridad, lo que puede llevar a una relación duradera y exitosa.',
    },
    'Virgo-Acuario': {
      porcentaje: 65,
      planeta: 'Mercurio y Urano',
      elemento: 'Tierra y Aire',
      explicacion:
        'Virgo es analítico y Acuario es innovador. Pueden complementarse si Virgo aporta estructura y Acuario creatividad, aunque pueden tener dificultades para comprenderse completamente.',
    },
    'Virgo-Piscis': {
      porcentaje: 75,
      planeta: 'Mercurio y Neptuno',
      elemento: 'Tierra y Agua',
      explicacion:
        'Virgo es práctico y Piscis es soñador. Pueden complementarse bien, con Virgo proporcionando estructura y Piscis imaginación, lo que puede llevar a una relación equilibrada y enriquecedora.',
    },
    'Libra-Aries': {
      porcentaje: 70,
      planeta: 'Venus y Marte',
      elemento: 'Aire y Fuego',
      explicacion:
        'Libra busca armonía y Aries es impulsivo. Pueden complementarse si encuentran un equilibrio entre la acción y la diplomacia.',
    },
    'Libra-Tauro': {
      porcentaje: 80,
      planeta: 'Venus',
      elemento: 'Aire y Tierra',
      explicacion:
        'Libra y Tauro pueden formar una pareja equilibrada y estética. Comparten la búsqueda de la belleza y pueden aprender mucho el uno del otro.',
    },
    'Libra-Géminis': {
      porcentaje: 90,
      planeta: 'Venus y Mercurio',
      elemento: 'Aire',
      explicacion:
        'Libra y Géminis son signos de aire, lo que les da una base intelectual y comunicativa sólida. Disfrutan de conversaciones estimulantes y de intercambiar ideas.',
    },
    'Libra-Cáncer': {
      porcentaje: 60,
      planeta: 'Venus y Luna',
      elemento: 'Aire y Agua',
      explicacion:
        'Libra valora la armonía y Cáncer es emocional. Pueden tener desafíos para equilibrar la lógica y la sensibilidad emocional.',
    },
    'Libra-Leo': {
      porcentaje: 75,
      planeta: 'Venus y Sol',
      elemento: 'Aire y Fuego',
      explicacion:
        'Libra busca la belleza y Leo el reconocimiento. Pueden complementarse si Libra aporta equilibrio y Leo brinda pasión y creatividad.',
    },
    'Libra-Virgo': {
      porcentaje: 70,
      planeta: 'Venus y Mercurio',
      elemento: 'Aire y Tierra',
      explicacion:
        'Libra es sociable y Virgo es práctico. Pueden complementarse si encuentran un equilibrio entre la diplomacia y la atención al detalle.',
    },
    'Libra-Libra': {
      porcentaje: 85,
      planeta: 'Venus',
      elemento: 'Aire',
      explicacion:
        'Dos Libra juntos forman una pareja estética y equilibrada. Comparten valores similares y disfrutan de la armonía y la justicia.',
    },
    'Libra-Escorpio': {
      porcentaje: 65,
      planeta: 'Venus y Plutón',
      elemento: 'Aire y Agua',
      explicacion:
        'Libra busca la paz y Escorpio la intensidad. Pueden tener desafíos para equilibrar sus diferencias y construir confianza mutua.',
    },
    'Libra-Sagitario': {
      porcentaje: 75,
      planeta: 'Venus y Júpiter',
      elemento: 'Aire y Fuego',
      explicacion:
        'Libra disfruta de la armonía y Sagitario de la aventura. Pueden complementarse si Libra aporta equilibrio y Sagitario brinda entusiasmo y optimismo.',
    },
    'Libra-Capricornio': {
      porcentaje: 60,
      planeta: 'Venus y Saturno',
      elemento: 'Aire y Tierra',
      explicacion:
        'Libra valora la justicia y Capricornio la disciplina. Pueden complementarse si encuentran un equilibrio entre la diplomacia y la responsabilidad.',
    },
    'Libra-Acuario': {
      porcentaje: 80,
      planeta: 'Venus y Urano',
      elemento: 'Aire',
      explicacion:
        'Libra y Acuario son signos de aire, lo que les da una base intelectual y humanitaria sólida. Disfrutan de actividades sociales y tienen ideales similares.',
    },
    'Libra-Piscis': {
      porcentaje: 70,
      planeta: 'Venus y Neptuno',
      elemento: 'Aire y Agua',
      explicacion:
        'Libra valora la armonía y Piscis la compasión. Pueden complementarse si Libra aporta equilibrio y Piscis brinda sensibilidad emocional.',
    },
    'Escorpio-Aries': {
      porcentaje: 65,
      planeta: 'Plutón y Marte',
      elemento: 'Agua y Fuego',
      explicacion:
        'Escorpio es intenso y Aries es impulsivo. Pueden tener una relación apasionada si aprenden a manejar sus diferencias y a respetar sus fortalezas.',
    },
    'Escorpio-Tauro': {
      porcentaje: 70,
      planeta: 'Plutón y Venus',
      elemento: 'Agua y Tierra',
      explicacion:
        'Escorpio y Tauro pueden formar una relación profunda y sensual. Comparten una intensidad emocional que puede unirlos fuertemente.',
    },
    'Escorpio-Géminis': {
      porcentaje: 50,
      planeta: 'Plutón y Mercurio',
      elemento: 'Agua y Aire',
      explicacion:
        'Escorpio busca profundidad emocional y Géminis la variedad intelectual. Pueden tener desafíos para entender las necesidades emocionales del otro.',
    },
    'Escorpio-Cáncer': {
      porcentaje: 85,
      planeta: 'Plutón y Luna',
      elemento: 'Agua',
      explicacion:
        'Escorpio y Cáncer son signos de agua, lo que les da una base emocional fuerte. Comparten una profunda conexión emocional y pueden sentirse intuitivamente comprendidos.',
    },
    'Escorpio-Leo': {
      porcentaje: 60,
      planeta: 'Plutón y Sol',
      elemento: 'Agua y Fuego',
      explicacion:
        'Escorpio es intenso y Leo es seguro. Pueden tener una atracción magnética, pero necesitan trabajar en la comprensión mutua y el respeto.',
    },
    'Escorpio-Virgo': {
      porcentaje: 75,
      planeta: 'Plutón y Mercurio',
      elemento: 'Agua y Tierra',
      explicacion:
        'Escorpio y Virgo pueden complementarse si logran combinar la intensidad emocional de Escorpio con la pragmática de Virgo. Tienen potencial para una relación profunda y práctica.',
    },
    'Escorpio-Libra': {
      porcentaje: 65,
      planeta: 'Plutón y Venus',
      elemento: 'Agua y Aire',
      explicacion:
        'Escorpio busca la profundidad emocional y Libra la armonía. Pueden tener desafíos para equilibrar sus diferencias y construir una conexión duradera.',
    },
    'Escorpio-Escorpio': {
      porcentaje: 90,
      planeta: 'Plutón',
      elemento: 'Agua',
      explicacion:
        'Dos Escorpio juntos pueden tener una conexión profunda y transformadora. Comparten intensidad emocional y un entendimiento profundo de los deseos y temores del otro.',
    },
    'Escorpio-Sagitario': {
      porcentaje: 55,
      planeta: 'Plutón y Júpiter',
      elemento: 'Agua y Fuego',
      explicacion:
        'Escorpio busca la profundidad y Sagitario la aventura. Pueden tener desafíos para encontrar un equilibrio entre la intensidad emocional y la libertad de Sagitario.',
    },
    'Escorpio-Capricornio': {
      porcentaje: 80,
      planeta: 'Plutón y Saturno',
      elemento: 'Agua y Tierra',
      explicacion:
        'Escorpio valora la profundidad emocional y Capricornio la estabilidad. Pueden complementarse si logran unir la intensidad emocional de Escorpio con la responsabilidad y disciplina de Capricornio.',
    },
    'Escorpio-Acuario': {
      porcentaje: 60,
      planeta: 'Plutón y Urano',
      elemento: 'Agua y Aire',
      explicacion:
        'Escorpio busca la profundidad emocional y Acuario la libertad intelectual. Pueden tener desafíos para conectar emocionalmente debido a sus enfoques diferentes hacia la vida.',
    },
    'Escorpio-Piscis': {
      porcentaje: 85,
      planeta: 'Plutón y Neptuno',
      elemento: 'Agua',
      explicacion:
        'Escorpio y Piscis son signos de agua, lo que les da una conexión intuitiva y espiritual profunda. Comparten una sensibilidad emocional y pueden tener una relación muy empática y comprensiva.',
    },
    'Sagitario-Aries': {
      porcentaje: 80,
      planeta: 'Júpiter y Marte',
      elemento: 'Fuego',
      explicacion:
        'Sagitario y Aries comparten una gran energía y entusiasmo. Tienen una conexión natural y disfrutan de la aventura y la acción juntos.',
    },
    'Sagitario-Tauro': {
      porcentaje: 50,
      planeta: 'Júpiter y Venus',
      elemento: 'Fuego y Tierra',
      explicacion:
        'Sagitario es aventurero y Tauro es más cauteloso y terrenal. Pueden tener diferencias en sus enfoques hacia la vida que necesitan superar para construir una relación sólida.',
    },
    'Sagitario-Géminis': {
      porcentaje: 70,
      planeta: 'Júpiter y Mercurio',
      elemento: 'Fuego y Aire',
      explicacion:
        'Sagitario y Géminis tienen una comunicación fluida y disfrutan de la diversidad intelectual. Comparten un enfoque curioso y abierto hacia la vida.',
    },
    'Sagitario-Cáncer': {
      porcentaje: 45,
      planeta: 'Júpiter y Luna',
      elemento: 'Fuego y Agua',
      explicacion:
        'Sagitario busca aventura y Cáncer seguridad emocional. Pueden tener dificultades para entender y satisfacer las necesidades emocionales del otro.',
    },
    'Sagitario-Leo': {
      porcentaje: 85,
      planeta: 'Júpiter y Sol',
      elemento: 'Fuego',
      explicacion:
        'Sagitario y Leo comparten una energía y entusiasmo similar. Tienen una conexión natural y disfrutan de la vida social y creativa juntos.',
    },
    'Sagitario-Virgo': {
      porcentaje: 60,
      planeta: 'Júpiter y Mercurio',
      elemento: 'Fuego y Tierra',
      explicacion:
        'Sagitario es optimista y aventurero, mientras que Virgo es más práctico y analítico. Pueden aprender mucho el uno del otro si logran equilibrar sus diferencias.',
    },
    'Sagitario-Libra': {
      porcentaje: 75,
      planeta: 'Júpiter y Venus',
      elemento: 'Fuego y Aire',
      explicacion:
        'Sagitario y Libra tienen una conexión intelectual y social. Comparten un amor por la belleza y la armonía, aunque pueden tener diferencias en sus enfoques hacia la vida.',
    },
    'Sagitario-Escorpio': {
      porcentaje: 55,
      planeta: 'Júpiter y Plutón',
      elemento: 'Fuego y Agua',
      explicacion:
        'Sagitario busca aventura y Escorpio profundidad emocional. Pueden tener desafíos para entender y satisfacer las necesidades del otro, pero pueden aprender y crecer juntos si están dispuestos.',
    },
    'Sagitario-Sagitario': {
      porcentaje: 90,
      planeta: 'Júpiter',
      elemento: 'Fuego',
      explicacion:
        'Dos Sagitario juntos forman una pareja llena de aventura, exploración y crecimiento mutuo. Comparten una pasión por la vida y la libertad.',
    },
    'Sagitario-Capricornio': {
      porcentaje: 70,
      planeta: 'Júpiter y Saturno',
      elemento: 'Fuego y Tierra',
      explicacion:
        'Sagitario es optimista y aventurero, mientras que Capricornio es más serio y disciplinado. Pueden complementarse si logran unir sus fortalezas y respetar sus diferencias.',
    },
    'Sagitario-Acuario': {
      porcentaje: 80,
      planeta: 'Júpiter y Urano',
      elemento: 'Fuego y Aire',
      explicacion:
        'Sagitario y Acuario comparten una visión progresista y una mente abierta. Disfrutan de la libertad y la exploración intelectual juntos.',
    },
    'Sagitario-Piscis': {
      porcentaje: 65,
      planeta: 'Júpiter y Neptuno',
      elemento: 'Fuego y Agua',
      explicacion:
        'Sagitario busca la aventura y Piscis la conexión emocional profunda. Pueden tener desafíos para encontrar un equilibrio entre la libertad y la sensibilidad emocional.',
    },
    'Capricornio-Aries': {
      porcentaje: 60,
      planeta: 'Saturno y Marte',
      elemento: 'Tierra y Fuego',
      explicacion:
        'Capricornio es práctico y disciplinado, mientras que Aries es impulsivo y enérgico. Pueden aprender a equilibrar sus diferencias para construir una relación sólida.',
    },
    'Capricornio-Tauro': {
      porcentaje: 80,
      planeta: 'Saturno y Venus',
      elemento: 'Tierra',
      explicacion:
        'Capricornio y Tauro tienen valores similares y buscan seguridad y estabilidad. Forman una pareja confiable y duradera.',
    },
    'Capricornio-Géminis': {
      porcentaje: 50,
      planeta: 'Saturno y Mercurio',
      elemento: 'Tierra y Aire',
      explicacion:
        'Capricornio es práctico y Géminis es curioso y adaptable. Necesitan esforzarse para comprender y apreciar las diferencias del otro.',
    },
    'Capricornio-Cáncer': {
      porcentaje: 70,
      planeta: 'Saturno y Luna',
      elemento: 'Tierra y Agua',
      explicacion:
        'Capricornio y Cáncer tienen diferentes enfoques hacia la vida: Capricornio es pragmático y Cáncer es emocional. Pueden complementarse si se comunican y comprenden bien.',
    },
    'Capricornio-Leo': {
      porcentaje: 55,
      planeta: 'Saturno y Sol',
      elemento: 'Tierra y Fuego',
      explicacion:
        'Capricornio busca la estabilidad y el éxito material, mientras que Leo busca el reconocimiento y la creatividad. Pueden tener diferencias en sus prioridades y estilos de vida.',
    },
    'Capricornio-Virgo': {
      porcentaje: 85,
      planeta: 'Saturno y Mercurio',
      elemento: 'Tierra',
      explicacion:
        'Capricornio y Virgo son ambos signos de tierra, lo que significa que comparten una visión práctica y una fuerte ética de trabajo. Forman una pareja estable y eficiente.',
    },
    'Capricornio-Libra': {
      porcentaje: 60,
      planeta: 'Saturno y Venus',
      elemento: 'Tierra y Aire',
      explicacion:
        'Capricornio es realista y Libra es idealista. Necesitan encontrar un equilibrio entre lo pragmático y lo estético para construir una relación armoniosa.',
    },
    'Capricornio-Escorpio': {
      porcentaje: 75,
      planeta: 'Saturno y Plutón',
      elemento: 'Tierra y Agua',
      explicacion:
        'Capricornio y Escorpio tienen una conexión profunda y emocional. Comparten una intensidad emocional que puede llevar a una relación comprometida y duradera.',
    },
    'Capricornio-Sagitario': {
      porcentaje: 70,
      planeta: 'Saturno y Júpiter',
      elemento: 'Tierra y Fuego',
      explicacion:
        'Capricornio es pragmático y Sagitario es aventurero. Pueden aprender y crecer juntos si logran equilibrar sus diferentes enfoques hacia la vida.',
    },
    'Capricornio-Capricornio': {
      porcentaje: 90,
      planeta: 'Saturno',
      elemento: 'Tierra',
      explicacion:
        'Dos Capricornio juntos forman una pareja muy estable y ambiciosa. Comparten metas similares y tienen un fuerte sentido de responsabilidad y compromiso.',
    },
    'Capricornio-Acuario': {
      porcentaje: 65,
      planeta: 'Saturno y Urano',
      elemento: 'Tierra y Aire',
      explicacion:
        'Capricornio es conservador y Acuario es progresista. Necesitan encontrar un equilibrio entre la tradición y la innovación para construir una relación satisfactoria.',
    },
    'Capricornio-Piscis': {
      porcentaje: 55,
      planeta: 'Saturno y Neptuno',
      elemento: 'Tierra y Agua',
      explicacion:
        'Capricornio busca estabilidad y Piscis sensibilidad emocional. Pueden tener desafíos para comprender y satisfacer las necesidades del otro.',
    },
    'Acuario-Aries': {
      porcentaje: 70,
      planeta: 'Urano y Marte',
      elemento: 'Aire y Fuego',
      explicacion:
        'Acuario es innovador y Aries es enérgico. Juntos pueden disfrutar de una relación llena de aventuras y nuevas ideas.',
    },
    'Acuario-Tauro': {
      porcentaje: 60,
      planeta: 'Urano y Venus',
      elemento: 'Aire y Tierra',
      explicacion:
        'Acuario es creativo y Tauro es práctico. Necesitan esforzarse para encontrar un equilibrio entre la innovación y la estabilidad.',
    },
    'Acuario-Géminis': {
      porcentaje: 80,
      planeta: 'Urano y Mercurio',
      elemento: 'Aire',
      explicacion:
        'Acuario y Géminis son ambos signos de aire, lo que significa que comparten una mentalidad similar y disfrutan de conversaciones estimulantes.',
    },
    'Acuario-Cáncer': {
      porcentaje: 50,
      planeta: 'Urano y Luna',
      elemento: 'Aire y Agua',
      explicacion:
        'Acuario es racional y Cáncer es emocional. Necesitan comprender y aceptar las diferencias emocionales del otro para construir una relación armoniosa.',
    },
    'Acuario-Leo': {
      porcentaje: 65,
      planeta: 'Urano y Sol',
      elemento: 'Aire y Fuego',
      explicacion:
        'Acuario busca la libertad y Leo busca el reconocimiento. Pueden aprender a apreciar y respetar sus diferentes necesidades para fortalecer su relación.',
    },
    'Acuario-Virgo': {
      porcentaje: 55,
      planeta: 'Urano y Mercurio',
      elemento: 'Aire y Tierra',
      explicacion:
        'Acuario es visionario y Virgo es práctico. Necesitan trabajar juntos para encontrar un equilibrio entre sus diferentes enfoques hacia la vida.',
    },
    'Acuario-Libra': {
      porcentaje: 75,
      planeta: 'Urano y Venus',
      elemento: 'Aire',
      explicacion:
        'Acuario y Libra son signos afines que valoran la armonía y la amistad en una relación. Pueden tener una conexión profunda y duradera.',
    },
    'Acuario-Escorpio': {
      porcentaje: 60,
      planeta: 'Urano y Plutón',
      elemento: 'Aire y Agua',
      explicacion:
        'Acuario es racional y Escorpio es emocional. Necesitan comunicarse abiertamente y aprender a manejar sus diferencias para construir confianza y entendimiento.',
    },
    'Acuario-Sagitario': {
      porcentaje: 80,
      planeta: 'Urano y Júpiter',
      elemento: 'Aire y Fuego',
      explicacion:
        'Acuario y Sagitario comparten una mentalidad abierta y disfrutan de la aventura y el cambio. Pueden formar una pareja dinámica y estimulante.',
    },
    'Acuario-Capricornio': {
      porcentaje: 65,
      planeta: 'Urano y Saturno',
      elemento: 'Aire y Tierra',
      explicacion:
        'Acuario es innovador y Capricornio es pragmático. Necesitan encontrar un equilibrio entre lo innovador y lo tradicional para construir una relación estable.',
    },
    'Acuario-Acuario': {
      porcentaje: 90,
      planeta: 'Urano',
      elemento: 'Aire',
      explicacion:
        'Dos Acuario juntos forman una pareja muy creativa e independiente. Comparten una visión única y disfrutan de la libertad y la originalidad en su relación.',
    },
    'Acuario-Piscis': {
      porcentaje: 70,
      planeta: 'Urano y Neptuno',
      elemento: 'Aire y Agua',
      explicacion:
        'Acuario es racional y Piscis es emocional. Pueden complementarse si aprenden a respetar y apreciar sus diferencias emocionales.',
    },
    'Piscis-Aries': {
      porcentaje: 60,
      planeta: 'Neptuno y Marte',
      elemento: 'Agua y Fuego',
      explicacion:
        'Piscis es sensible y Aries es enérgico. Necesitan comprender y aceptar sus diferencias para construir una relación armoniosa.',
    },
    'Piscis-Tauro': {
      porcentaje: 70,
      planeta: 'Neptuno y Venus',
      elemento: 'Agua y Tierra',
      explicacion:
        'Piscis es intuitivo y Tauro es práctico. Pueden formar una pareja que se complementa mutuamente, combinando sensibilidad con estabilidad.',
    },
    'Piscis-Géminis': {
      porcentaje: 50,
      planeta: 'Neptuno y Mercurio',
      elemento: 'Agua y Aire',
      explicacion:
        'Piscis es emocional y Géminis es racional. Necesitan comunicarse claramente para superar las diferencias y construir una relación sólida.',
    },
    'Piscis-Cáncer': {
      porcentaje: 80,
      planeta: 'Neptuno y Luna',
      elemento: 'Agua',
      explicacion:
        'Piscis y Cáncer son signos de agua, lo que significa que tienen una profunda comprensión emocional mutua. Pueden formar una conexión intuitiva y empática.',
    },
    'Piscis-Leo': {
      porcentaje: 55,
      planeta: 'Neptuno y Sol',
      elemento: 'Agua y Fuego',
      explicacion:
        'Piscis es intuitivo y Leo es seguro de sí mismo. Necesitan trabajar en la comprensión mutua y el respeto para construir una relación armoniosa.',
    },
    'Piscis-Virgo': {
      porcentaje: 65,
      planeta: 'Neptuno y Mercurio',
      elemento: 'Agua y Tierra',
      explicacion:
        'Piscis es sensible y Virgo es práctico. Pueden complementarse si aprenden a apreciar y respetar sus diferentes enfoques hacia la vida.',
    },
    'Piscis-Libra': {
      porcentaje: 75,
      planeta: 'Neptuno y Venus',
      elemento: 'Agua y Aire',
      explicacion:
        'Piscis y Libra son signos afines que valoran la armonía y el equilibrio en una relación. Pueden formar una pareja artística y comprensiva.',
    },
    'Piscis-Escorpio': {
      porcentaje: 85,
      planeta: 'Neptuno y Plutón',
      elemento: 'Agua',
      explicacion:
        'Piscis y Escorpio son signos de agua, lo que significa que tienen una profunda conexión emocional y comprensión intuitiva. Pueden formar una relación emocionalmente intensa y transformadora.',
    },
    'Piscis-Sagitario': {
      porcentaje: 60,
      planeta: 'Neptuno y Júpiter',
      elemento: 'Agua y Fuego',
      explicacion:
        'Piscis busca profundidad emocional y Sagitario busca aventura. Necesitan encontrar un equilibrio entre lo espiritual y lo físico para construir una relación armoniosa.',
    },
    'Piscis-Capricornio': {
      porcentaje: 55,
      planeta: 'Neptuno y Saturno',
      elemento: 'Agua y Tierra',
      explicacion:
        'Piscis es intuitivo y Capricornio es pragmático. Necesitan trabajar juntos para encontrar un equilibrio entre la imaginación y la realidad.',
    },
    'Piscis-Acuario': {
      porcentaje: 70,
      planeta: 'Neptuno y Urano',
      elemento: 'Agua y Aire',
      explicacion:
        'Piscis es sensible y Acuario es innovador. Pueden aprender mucho el uno del otro y formar una relación que combine creatividad con originalidad.',
    },
    'Piscis-Piscis': {
      porcentaje: 90,
      planeta: 'Neptuno',
      elemento: 'Agua',
      explicacion:
        'Dos Piscis juntos forman una pareja muy intuitiva y emocional. Comparten una conexión profunda y una comprensión mutua sin palabras.',
    },
  };

  verCompatibilidad(): void {
    const key = `${this.signoIzquierdo}-${this.signoDerecho}`;
    const reverseKey = `${this.signoDerecho}-${this.signoIzquierdo}`;

    if (this.compatibilidadDatos[key]) {
      this.compatibilidad = this.compatibilidadDatos[key];
    } else if (this.compatibilidadDatos[reverseKey]) {
      this.compatibilidad = this.compatibilidadDatos[reverseKey];
    } else {
      this.compatibilidad = {
        porcentaje: 0,
        planeta: 'Desconocido',
        elemento: 'Desconocido',
        explicacion:
          'No hay información disponible para esta combinación de signos.',
      };
    }
  }

  signox = [
    {
      nombre: 'Aries',
      fechas: '21 de marzo - 20 de abril',
      planeta: 'Marte',
      elemento: 'Fuego',
      significado:
        'Aries irradia energía y liderazgo. Son pioneros y valientes, siempre listos para nuevos comienzos y desafíos. Su entusiasmo y determinación los hacen destacar en cualquier situación.',
    },
    {
      nombre: 'Tauro',
      fechas: '21 de abril - 20 de mayo',
      planeta: 'Venus',
      elemento: 'Tierra',
      significado:
        'Tauro es conocido por su fortaleza y estabilidad. Son personas pacientes y persistentes, que valoran la seguridad y el confort. Su enfoque práctico y su habilidad para disfrutar de los placeres de la vida los hace confiables y sensatos.',
    },
    {
      nombre: 'Géminis',
      fechas: '21 de mayo - 20 de junio',
      planeta: 'Mercurio',
      elemento: 'Aire',
      significado:
        'Géminis es curioso y adaptable, con una mente rápida y versátil. Son comunicativos y sociales, disfrutando de interacciones diversas y aprendiendo constantemente. Su agudeza mental y su capacidad para ver diferentes puntos de vista los hacen fascinantes.',
    },
    {
      nombre: 'Cáncer',
      fechas: '21 de junio - 22 de julio',
      planeta: 'Luna',
      elemento: 'Agua',
      significado:
        'Cáncer es intuitivo y emocionalmente profundo. Son protectores y cariñosos, valorando la familia y el hogar. Su sensibilidad y empatía los hacen excelentes cuidadores y amigos leales.',
    },
    {
      nombre: 'Leo',
      fechas: '23 de julio - 22 de agosto',
      planeta: 'Sol',
      elemento: 'Fuego',
      significado:
        'Leo brilla con carisma y confianza. Son líderes naturales y creativos, buscando destacar y dejar una huella positiva en el mundo. Su generosidad y nobleza inspiran a los demás.',
    },
    {
      nombre: 'Virgo',
      fechas: '23 de agosto - 22 de septiembre',
      planeta: 'Mercurio',
      elemento: 'Tierra',
      significado:
        'Virgo es analítico y detallista, con una fuerte ética de trabajo y perfeccionismo. Son prácticos y realistas, buscando la perfección en todo lo que hacen. Su habilidad para organizarse y su meticulosidad los hace excelentes en roles que requieren precisión y atención al detalle.',
    },
    {
      nombre: 'Libra',
      fechas: '23 de septiembre - 22 de octubre',
      planeta: 'Venus',
      elemento: 'Aire',
      significado:
        'Libra busca el equilibrio y la armonía en todas las áreas de la vida. Son sociables y diplomáticos, disfrutando de relaciones armoniosas y estéticamente agradables. Su habilidad para ver ambos lados de una situación los hace excelentes mediadores y conciliadores.',
    },
    {
      nombre: 'Escorpio',
      fechas: '23 de octubre - 21 de noviembre',
      planeta: 'Plutón y Marte',
      elemento: 'Agua',
      significado:
        'Escorpio es intenso y apasionado. Son personas profundamente emocionales y enigmáticas, con una fuerza interior formidable. Su capacidad para transformarse a sí mismos y a los demás los hace poderosos y fascinantes.',
    },
    {
      nombre: 'Sagitario',
      fechas: '22 de noviembre - 21 de diciembre',
      planeta: 'Júpiter',
      elemento: 'Fuego',
      significado:
        'Sagitario es aventurero y optimista. Son entusiastas y amantes de la libertad, buscando expandir sus horizontes constantemente. Su sentido de la justicia y su espíritu generoso los hacen amigos leales y compañeros de viaje inspiradores.',
    },
    {
      nombre: 'Capricornio',
      fechas: '22 de diciembre - 19 de enero',
      planeta: 'Saturno',
      elemento: 'Tierra',
      significado:
        'Capricornio es ambicioso y disciplinado. Son personas trabajadoras y responsables, que valoran la estructura y el logro personal. Su perseverancia y su enfoque en metas a largo plazo los hacen exitosos en su carrera y en la vida.',
    },
    {
      nombre: 'Acuario',
      fechas: '20 de enero - 18 de febrero',
      planeta: 'Urano y Saturno',
      elemento: 'Aire',
      significado:
        'Acuario es innovador y humanitario. Son visionarios y originales, comprometidos con causas sociales y progresistas. Su mente abierta y su capacidad para pensar fuera de lo común los convierte en agentes de cambio en el mundo.',
    },
    {
      nombre: 'Piscis',
      fechas: '19 de febrero - 20 de marzo',
      planeta: 'Neptuno',
      elemento: 'Agua',
      significado:
        'Piscis es compasivo y empático. Son soñadores y místicos, conectados con el mundo emocional y espiritual. Su sensibilidad y creatividad los hacen artistas naturales y sanadores intuitivos.',
    },
  ];
}
