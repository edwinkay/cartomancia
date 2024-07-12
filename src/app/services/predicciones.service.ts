import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrediccionesService {
  imagen1 = '../../assets/images/';
  imagen2 = '../../assets/images/';
  imagen3 = '../../assets/images/';
  f = '.jpeg';

  constructor() {}

  predicciones: any[] = [
    {
      imagen1: this.imagen1 + 'asDEOro' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion:
        'Suerte rápida, La combinación te está avisando que en un breve tiempo vas a recibir una grata noticia con respecto a un trabajo que has estado anhelando, no solo será un trabajo que te llama la atención, sino que las ganancias serán muy buenas. La oportunidad laboral está en camino, no lo dudes.',
    },
    {
      imagen1: this.imagen1 + 'asDEOro' + this.f,
      imagen2: this.imagen2 + 'copa7' + this.f,
      conjugacion:
        'Boda o unión provechosa, La tirada le está vaticinando al consultante que es momento de unirse a su pareja, ya que la unión será muy positiva, tanto para que se multipliquen las cosas materiales entre ambos, como el amor que sienten. Será una buena base para una familia sólida.',
    },
    {
      imagen1: this.imagen1 + 'asDEOro' + this.f,
      imagen2: this.imagen2 + 'copa9' + this.f,
      conjugacion:
        'Triunfo, El consultante tiene todo para triunfar en lo que se proponga, sin dudar, seguro de sí mismo y esto es un imán para hacer posible los sueños que por mucho tiempo soñó, es momento de hacerlo realidad. El consultante debe aprovechar la claridad mental característico que trae esta tirada, así se podrá aprovechar las oportunidades y asegurar un gran éxito. La tirada está augurando que el consultante se siente tan pleno, que ha quitado todas las dudas y los temores, ya que hoy tiene la claridad mental para trazar qué quiere y cómo lo quiere. El destino manda las oportunidades que va a aprovechar el consultante sin dudar, llevándolo a un triunfo total sobre lo que él desee.',
    },
    {
      imagen1: this.imagen1 + 'asDEOro' + this.f,
      imagen2: this.imagen2 + 'bastos8' + this.f,
      conjugacion:
        'Estancamiento, El consultante está pasando por un momento de aburrimiento, siente que su vida no va a ningún lado y tiene la sensación de estar estancado, ya sea en el trabajo o su pareja, es momento de que reflexione en verdad qué quiere de su vida, para poder tomar cartas en el asunto, para ello debe hacer un pare y re evaluar para poder seguir adelante. El consultante se siente estancado, ya sea en el hogar con la pareja o en el trabajo. Su labor se ha vuelto repetitiva y tediosa; es momento que reflexione y evalúe qué desea de su propia vida, y que actúe en consecuencia para lograr salir de esa situación',
    },
    {
      imagen1: this.imagen1 + 'asDEOro' + this.f,
      imagen2: this.imagen2 + 'espada11' + this.f,
      conjugacion:
        'Perdida de salud, Esta tirada está advirtiendo al consultante que está muy cómodo como lleva su vida, sin percatarse que está gestándose una enfermedad por los malos hábitos que tiene. En este periodo lo tomará por sorpresa y el diagnóstico será contundente a tal grado de llevarlo al hospital. Lo que te pide la tirada es que reflexiones y cambies los malos hábitos que hay en tu vida.',
    },
    {
      imagen1: this.imagen1 + 'asDEOro' + this.f,
      imagen2: this.imagen2 + 'copa10' + this.f,
      conjugacion:
        'Mal amor, El consultante está a punto de casarse con el amor de su vida, aunque la tirada le está advirtiendo que tenga cuidado, ya que él sí siente amor verdadero, pero su pareja no lo está sintiendo así; su motivación es diferente y se basa en la ambición o en el estatus que el consultante le pueda dar',
    },
    {
      imagen1: this.imagen1 + 'oro2' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion:
        'Ayuda económica familiar, Las dos cartas en una lectura auguran al consultante que recibirá ayuda económica de algún familiar o bien, un apoyo financiero.',
    },
    {
      imagen1: this.imagen1 + 'oro2' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion:
        'Información sobre dinero, Cuando aparecen estas dos cartas juntas en una lectura, indican al consultante que tendrá noticias o información que tiene que ver con dinero o sus finanzas.',
    },
    {
      imagen1: this.imagen1 + 'oro2' + this.f,
      imagen2: this.imagen2 + 'copa12' + this.f,
      conjugacion:
        'Sentencia a favor, Estas dos cartas en temas penales, anuncian que el consultante obtendrá una sentencia a favor, si se encuentra en alguna situación legal importante.',
    },
    {
      imagen1: this.imagen1 + 'oro2' + this.f,
      imagen2: this.imagen2 + 'oro7' + this.f,
      conjugacion:
        'Malas inversiones La combinación de estas dos cartas es un augurio de que el consultante hará una mala inversión próximamente, estará envuelto en un negocio con mal manejo de dinero; hay una persona que no hizo una inversión correcta.',
    },
    {
      imagen1: this.imagen1 + 'oro2' + this.f,
      imagen2: this.imagen2 + 'espada5' + this.f,
      conjugacion:
        'Robo o engaño, Estas dos cartas juntas anuncian en una lectura un situación de engaño o un posible robo que le sucederá al consultante. Es importante recomendarle estar alerta en los lugares que frecuente o con las personas a su alrededor.',
    },
    {
      imagen1: this.imagen1 + 'oro2' + this.f,
      imagen2: this.imagen2 + 'bastos2' + this.f,
      imagen3: this.imagen3 + 'bastos7' + this.f,
      conjugacion:
        'Exceso de trabajo, Cuando esta combinación de cartas aparece en una lectura, anuncia que existe una carga de trabajo muy pesada para el consultante, y además de esto, es un trabajo en el cual que no lo están pagando como se merece.',
    },
    {
      imagen1: this.imagen1 + 'oro3' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion:
        'Matrimonio exitoso, Estas dos cartas en una lectura nos anuncian un matrimonio afortunado y exitoso, su relación es muy buena y les esperan cosas muy positivas a futuro.',
    },
    {
      imagen1: this.imagen1 + 'oro3' + this.f,
      imagen2: this.imagen2 + 'bastos11' + this.f,
      conjugacion:
        'Cambio de residencia, Estos dos naipes auguran al consultante que próximamente pudiera cambiarse de casa.',
    },
    {
      imagen1: this.imagen1 + 'oro3' + this.f,
      imagen2: this.imagen2 + 'copa5' + this.f,
      conjugacion:
        'Regalo valioso, Esta combinación de cartas es muy especial, ya que anuncian al consultante que recibirá del ser amado un regalo muy valioso.',
    },
    {
      imagen1: this.imagen1 + 'oro3' + this.f,
      imagen2: this.imagen2 + 'espada3' + this.f,
      conjugacion:
        'Mentira, estafa o fraude, Cuando esta combinación de cartas aparece en una tirada, augura que el consultante pudiera involucrarse en una situación llena de mentiras, o peor aún, en una estafa o fraude.',
    },
    {
      imagen1: this.imagen1 + 'oro3' + this.f,
      imagen2: this.imagen2 + 'espada12' + this.f,
      conjugacion:
        'Hombre dominante, Esta combinación habla de un hombre dominante que quiere llevar las riendas de la relación, o la situación en la que se encuentre el consultante.',
    },
    {
      imagen1: this.imagen1 + 'oro3' + this.f,
      imagen2: this.imagen2 + 'bastos3' + this.f,
      imagen3: this.imagen3 + 'copa3' + this.f,
      conjugacion:
        'Cambios repentinos, La combinación de estas tres cartas augura cambios repentinos. Los cambios son buenos, pero si el consultante no se sabe adaptar, estos cambios pudieran afectarlo. Conocer el significado de esta carta te ayudará a comprender mucho mejor cuando salga en un tirada, especialmente cuando se traten temas sobre progreso familiar, laboral, social, amoroso y económico.',
    },
    {
      imagen1: this.imagen1 + 'oro4' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion:
        'Triunfo, En esta combinación se augura el triunfo en alguna ambición que se ha tenido durante mucho tiempo, la cual por fin se manifiesta. La misma llega a ser tan precisa que provoca un sentimiento de seguridad. Se refiere también al equilibrio, felicidad y regalos.',
    },
    {
      imagen1: this.imagen1 + 'oro4' + this.f,
      imagen2: this.imagen2 + 'oro6' + this.f,
      conjugacion:
        'Generosidad, Es indicativo de un cambio radical de actitud, donde es posible el restablecimiento de la vida en general y florecer en el sentimiento de solidaridad. Gran posibilidad de recibir regalos generosos.',
    },
    {
      imagen1: this.imagen1 + 'oro4' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion:
        'Amor, Habla del inicio de un amor después de mucho tiempo de estar solo; puede indicar también el regreso de un amor del pasado, que ya se había olvidado. Indica la felicidad asegurada y el éxito en una relación.',
    },
    {
      imagen1: this.imagen1 + 'oro4' + this.f,
      imagen2: this.imagen2 + 'espada3' + this.f,
      conjugacion:
        'Desequilibrio, Indica la ruptura del equilibrio, refleja un dolor inmenso y sentimental. Puede reflejar también un desacuerdo o bien, un egoísmo que provoca una sensación de que no se quiere perder por nada. Es posible que se hable también de una persona cercana con dobles intenciones.',
    },
    {
      imagen1: this.imagen1 + 'oro4' + this.f,
      imagen2: this.imagen2 + 'copa5' + this.f,
      conjugacion:
        'Arrepentimiento, Refleja que tenemos arrepentimiento por actitudes absurdas que se han tenido en el pasado y que causan mucha confusión y conflictos. Poco movimiento en algún avance o bien el retroceso del ya obtenido.',
    },
    {
      imagen1: this.imagen1 + 'oro4' + this.f,
      imagen2: this.imagen2 + 'espada10' + this.f,
      conjugacion:
        'Engaño, Un engaño amoroso inesperado por una actitud posesiva y controladora. Indica la inestabilidad en la relación, problemas con la pareja que no permiten un avance. Se puede estar interactuando con un hombre que solo trae conflicto; demasiado estricto y molesto ya que solo quiere que las cosas se hagan a su manera. Esto también puede ser la actitud que el consultante está tomando.',
    },
    {
      imagen1: this.imagen1 + 'oro5' + this.f,
      imagen2: this.imagen2 + 'bastos5' + this.f,
      conjugacion:
        'Problemas, Augura la llegada de tiempos complicados con problemas, tensiones y discusiones que son importantes para poder cerrar un ciclo, o para llegar a una meta o proyecto final.',
    },
    {
      imagen1: this.imagen1 + 'oro5' + this.f,
      imagen2: this.imagen2 + 'espada3' + this.f,
      conjugacion:
        'Ruptura, Indica poca comunicación con la pareja así como ausencia de la misma. Peleas por celos o puede ser una ruptura por problemas de comunicación y comportamientos intensos, mentiras e infidelidades. Ruptura por problemas económicos.',
    },
    {
      imagen1: this.imagen1 + 'oro5' + this.f,
      imagen2: this.imagen2 + 'espada10' + this.f,
      conjugacion:
        'Desconfianza, En esta combinación se habla de una relación peligrosa donde no se debe estar confiado, ya que la persona puede ser mentirosa o poco confiable. Puede ser también el sentimiento de desconfianza que llega a ser peligroso, hacia una persona muy inestable. Sentimiento de victimismo, fuertes preocupaciones económicas hacia una inversión. Momentos delicados con situaciones sentimentales.',
    },
    {
      imagen1: this.imagen1 + 'oro5' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion:
        'Confianza, En esta combinación se augura la apertura del corazón nuevamente, para volver a amar a una persona. Esto cuando el consultante muy probablemente ha tenido malas experiencias en lo sentimental.',
    },
    {
      imagen1: this.imagen1 + 'oro5' + this.f,
      imagen2: this.imagen2 + 'copa3' + this.f,
      conjugacion:
        'Felicidad, Es indicativo de una nueva conquista que entra a la vida del consultante y que termina con una etapa de soledad en la que se estaba. Es un momento ideal para salir con gente nueva ya que se augura la llegada de un nuevo amor.',
    },
    {
      imagen1: this.imagen1 + 'oro5' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion:
        'Soluciones, Habla de la salida de una situación complicada en lo económico o lo laboral, ya que llegan grandes posibilidades de encontrar trabajo si no se tiene o bien, un nuevo puesto o un cambio de trabajo que será muy beneficioso.',
    },
    {
      imagen1: this.imagen1 + 'oro6' + this.f,
      imagen2: this.imagen2 + 'bastos2' + this.f,
      conjugacion:
        'Reconciliación, Es la reconciliación con una persona que ya se daba por perdida, donde te encontrarás con las verdaderas intenciones. Augurio de  romance y planes sentimentales a futuro.',
    },
    {
      imagen1: this.imagen1 + 'oro6' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion:
        'Subsidio, Esta combinación significa que estamos apunto de tener una recompensa por un trabajo que se ha realizado por mucho tiempo, es también indicativo de que es momento de realizar alguna obra solidaria con los demás.',
    },
    {
      imagen1: this.imagen1 + 'oro6' + this.f,
      imagen2: this.imagen2 + 'oro10' + this.f,
      conjugacion:
        'Recompensa, Es el ofrecimiento de un nuevo amor que te mereces, oportunidad de la estabilidad en los sentimientos, fidelidad por parte de la pareja. Oferta de dinero o de una relación con una persona nueva.',
    },
    {
      imagen1: this.imagen1 + 'oro6' + this.f,
      imagen2: this.imagen2 + 'espada5' + this.f,
      conjugacion:
        'Interés, Esta combinación puede traer una falsa generosidad; solo se da algo si se espera recibir algo a cambio, ya sea dinero, amor o bien, ayuda. Es una generosidad totalmente condicionada.',
    },
    {
      imagen1: this.imagen1 + 'oro6' + this.f,
      imagen2: this.imagen2 + 'espada3' + this.f,
      conjugacion:
        'Engaño, Indica posible engaño donde se ha dado todo y no se ha sido correspondido a la oferta de amor que se ha hecho. Implica desconfianza.',
    },
    {
      imagen1: this.imagen1 + 'oro6' + this.f,
      imagen2: this.imagen2 + 'bastos5' + this.f,
      conjugacion:
        'En esta combinación se habla de una relación en donde por más que se dé, siempre hay descontento o incomprensión. Falta de trabajo en lo laboral y escasez de dinero, puede ser una mala racha en lo general.',
    },
    {
      imagen1: this.imagen1 + 'oro7' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion:
        'Economía Favorable, El consultante está a punto de entrar en un buen periodo de ganancias. El mismo no viene de juegos de azar o de la suerte, sino de trabajar en el pasado para conseguir un objetivo económico; desde un ahorro, pagar un crédito o comprar algo muy preciado. Hoy es tiempo de recoger los frutos de ese esfuerzo hecho con inteligencia, es tiempo de disfrutar de una felicidad duradera.',
    },
    {
      imagen1: this.imagen1 + 'oro7' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion:
        'Ayuda monetaria, De manera inesperada, el consultante se ve desbordado por los gastos y está ansioso, pues no puede cubrir un gasto que le incomoda. Pero un regalo llega, de la mano de una amistad que en el pasado recibió ayuda del consultante y hoy tiene la posibilidad de devolver el favor sin que se le pida.',
    },
    {
      imagen1: this.imagen1 + 'oro7' + this.f,
      imagen2: this.imagen2 + 'oro11' + this.f,
      conjugacion:
        'Expansión, El consultante ha estado planeando por largo tiempo la expansión de su negocio, ya sea abrir más sucursales o hacer un negocio en el extranjero, la combinación le está anunciando que ha llegado el momento que tanto ha estado esperando. La oportunidad llegará de la mano de un un hombre joven, carismático y temerario que le dará lo que necesita al consultante para impulsar su negocio.',
    },
    {
      imagen1: this.imagen1 + 'oro7' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion:
        'Peligro, La tirada le está advirtiendo al consultante que tenga cuidado con las decisiones que tome con respecto al despido de una persona o a finalizar el trato con alguien, ya que la otra persona, que puede ser una hombre joven, no lo tomará muy bien y puede actuar en contra del consultante, ya sea inventando chismes o realizando alguna acción física violenta, que atente contra la integridad física del consultante.',
    },
    {
      imagen1: this.imagen1 + 'oro7' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion:
        'Envidia por dinero, El consultante está pasando por un periodo de esplendor en todos los sentidos, tiempo de festejar. El problema radica en que la envidia tiene el sueño muy ligero y no le caen muy bien los triunfos a a alguien cercano. Lo que te advierte la tirada es que cuides a quién le cuentas tus triunfos, ya que no todos se regocijan con la felicidad ajena.',
    },
    {
      imagen1: this.imagen1 + 'oro7' + this.f,
      imagen2: this.imagen2 + 'espada3' + this.f,
      conjugacion:
        'Enemigo declarado, La envidia es una emoción que puede traer muchos problemas para el consultante, ya que un enemigo oculto o declarado le comenzará a hacer pasar momentos incómodos, que cada vez serán más frecuentes, haciendo que el consultante pierda la confianza en sí mismo, haciéndolo sentir inseguro y ansioso; trayendo como consecuencia dolor en la parte lumbar o afecciones con los riñones (representan los miedos en el cuerpo humano), debido al miedo que sienta.',
    },
    {
      imagen1: this.imagen1 + 'oro8' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion:
        'Ganancia en los negocios, Un bueno momento para el consultante, llegó el momento que el negocio que emprendió está dando sus frutos por fin y de una manera muy positiva. Es momento que no baje la guardia en los negocios, sino que afiance la prosperidad de su negocio buscando nuevas alianzas o expandiendo el negocio a un nuevo nivel.',
    },
    {
      imagen1: this.imagen1 + 'oro8' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion:
        'Trabajo bien pagado, Por fin llega a la vida del consultante la respuesta a varios esfuerzos que hizo en el pasado. Llega la oportunidad que tanto había buscado, un trabajo ideal y perfecto con el cual siempre soñó. Te está advirtiendo la baraja que negocies muy bien tu sueldo y que no escatimes en pedir; lo que tú solicites te lo van a pagar.',
    },
    {
      imagen1: this.imagen1 + 'oro8' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion:
        'Artesanías, El consultante ahora tiene un trabajo estable, pero que no le está haciendo muy feliz, se siente estancado y sin motivación. Lo que vaticina esta tirada es que el consultante debe buscar una nueva opción de hacer dinero a través de alguna actividad que tenga que ver con algo creado por sus propias manos, así lo que empiece como un hobby pronto se convertirá en su pasión, trayendo grandes ganancias.',
    },
    {
      imagen1: this.imagen1 + 'oro8' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion:
        'Murmuraciones,La posición social del consultante le importa mucho y no desea perderla. Lo que está indicando esta combinación es no dejarse llevar por chismes o murmuraciones, siempre y cuando el consultante no tenga nada que esconder o un secreto que pueda llevarlo al desprestigio social, de lo contrario le hará perder su estatus.',
    },
    {
      imagen1: this.imagen1 + 'oro8' + this.f,
      imagen2: this.imagen2 + 'espada8' + this.f,
      conjugacion:
        'Peligro de muerte, El consultante no se ha percatado que los malestares que viene padeciendo desde hace unas tres semanas, pronto le darán un motivo para preocuparse por su salud. Así que lo que está advirtiendo la tirada es hacerse un chequeo médico, ya que su salud puede estar comprometida por estar deshidratado o algo relacionado con temas de cáncer.',
    },
    {
      imagen1: this.imagen1 + 'oro8' + this.f,
      imagen2: this.imagen2 + 'copa10' + this.f,
      conjugacion:
        'Soltería forzosa, El consultante está a punto de cambiar el rumbo de su vida amorosa, al evaluar qué está pasando con su pareja, ya que se siente atrapado e incomprendido en la relación. Por ello en breve tiempo tomará la decisión de terminar con su pareja y seguir adelante, primero para reconstruir su propia vida y segundo, porque no es lo que desea de pareja la actual. Una gran desilusión se acerca a su vida.',
    },
    {
      imagen1: this.imagen1 + 'oro9' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion:
        'Resultados positivos, Si la pregunta está dirigida a algún conflicto y la respuesta se encuentra dada por esta combinación, se sugiere que el consultante saldrá victorioso de la lucha. En cuestiones de amor, habla de algo positivo; una relación fructífera.',
    },
    {
      imagen1: this.imagen1 + 'oro9' + this.f,
      imagen2: this.imagen2 + 'bastos3' + this.f,
      conjugacion:
        'Triunfo, Siendo una de las mejores combinaciones de la baraja española, anuncia la felicidad como recompensa. El consultante ha planificado su vida para adquirir un mayor nivel de disciplina, y el 9 de oros junto al 3 de bastos le responden que está yendo por el camino correcto.',
    },
    {
      imagen1: this.imagen1 + 'oro9' + this.f,
      imagen2: this.imagen2 + 'bastos11' + this.f,
      conjugacion:
        'Nuevo amor, La conjugación de estas dos cartas anuncia la llegada de un nuevo pretendiente: será un enamorado impulsivo y seguro de sí mismo.',
    },
    {
      imagen1: this.imagen1 + 'oro9' + this.f,
      imagen2: this.imagen2 + 'espada8' + this.f,
      conjugacion:
        'Miedos, A pesar de que todo está bien encaminado en la vida del consultante, internamente tiene un gran miedo a perderlo todo, y posiblemente lo haga por ello mismo si no logra salir de ese círculo de pensamientos negativos. Las relaciones sociales y de pareja se ven perjudicadas por miedos y ataduras, así como por envidias motivadas por el dinero. A pesar del mal panorama que presenta esta combinación, aconseja estar atentos a esa persona que ayudará a salir adelante de una situación triste o angustiante.',
    },
    {
      imagen1: this.imagen1 + 'oro9' + this.f,
      imagen2: this.imagen2 + 'copa5' + this.f,
      conjugacion:
        'Pérdidas, El consultante se encuentra en un momento lleno de confusiones y dudas. Si no logra romper con estos pensamientos, la resolución será bastante negativa y perderá tanto la seguridad en sí mismo como el control de la situación.',
    },
    {
      imagen1: this.imagen1 + 'oro9' + this.f,
      imagen2: this.imagen2 + 'copa7' + this.f,
      conjugacion:
        'Vicios, El consultante se encuentra solo y ya no disfruta de la soledad. Comienzan a presentarse las dudas y la indecisión, y al no poder lidiar con ninguna de estas situaciones, el consultante comienza a evadir sus incomodidades escudándose tras los vicios.',
    },
    {
      imagen1: this.imagen1 + 'oro10' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion:
        'Estabilidad, Esta combinación es muy positiva en todos los ámbitos. Anuncia un enamoramiento muy sólido, un amor sincero y verdadero que, independientemente de cómo comience, llegará a mucho. En materia de estudios anuncia la aprobación de los exámenes que se acercan, mientras en lo laboral vaticina que el consultante conseguirá un empleo que le brindará felicidad.',
    },
    {
      imagen1: this.imagen1 + 'oro10' + this.f,
      imagen2: this.imagen2 + 'espada4' + this.f,
      conjugacion:
        'Ser metódico, Cuando aparecen estas barajas juntas, indican que el consultante presenta una actitud realista y se brinda el tiempo necesario para meditar las cosas. Dará rienda suelta a sus ideas una vez que las haya pensado y analizado a fondo.',
    },
    {
      imagen1: this.imagen1 + 'oro10' + this.f,
      imagen2: this.imagen2 + 'copa3' + this.f,
      conjugacion:
        'Triunfo, Una de las mejores combinaciones quizás, anuncia una relación feliz en lo sentimental. En el ámbito académico indica que se concluyen los estudios con resultados brillantes. Los deseos y objetivos se cumplen y el consultante disfruta estos resultados.',
    },
    {
      imagen1: this.imagen1 + 'oro10' + this.f,
      imagen2: this.imagen2 + 'copa4' + this.f,
      conjugacion:
        'Persona demasiado mental, Como mencionamos al principio de este artículo, es fundamental lograr un equilibrio entre lo mental y lo emocional. Pensar demasiado, como cualquier cosa en exceso, es negativo. Y es lo que nos indica esta combinación de cartas: el pensar en demasía y el realismo excesivo se tornan algo negativo. De igual manera se pierde un amor por dudas.',
    },
    {
      imagen1: this.imagen1 + 'oro10' + this.f,
      imagen2: this.imagen2 + 'espada7' + this.f,
      conjugacion:
        'Manipulaciones, En este caso, las cartas nos están advirtiendo sobre una persona muy astuta que no nos está hablando con la verdad. También advierte sobre alguien que está aguardando el momento para vengarse. Las barajas que acompañen en la tirada nos darán más información al',
    },
    {
      imagen1: this.imagen1 + 'oro10' + this.f,
      imagen2: this.imagen2 + 'oro7' + this.f,
      conjugacion:
        'Hastío, El consultante se siente vacío y aburrido de la rutina. Los ofrecimientos que llegan son más de lo mismo y le sigue faltando algo. Esta combinación sugiere la necesidad de trazar un nuevo plan para cambiar las cosas y salir de esta situación.',
    },
    {
      imagen1: this.imagen1 + 'oro11' + this.f,
      imagen2: this.imagen2 + 'bastos11' + this.f,
      conjugacion:
        'Viaje de ida y vuelta, El consultante está a punto de realizar un viaje rápido e inesperado que cambiará su vida de manera muy positiva, ya que en el destino encontrará un hombre que le brinde un golpe de suerte económico. Es momento de confiar en la suerte.',
    },
    {
      imagen1: this.imagen1 + 'oro11' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion:
        'Triunfo en los deportes, El consultante ha estado practicando un deporte y tras muchos meses de disciplina, ha llegado el momento que siempre soñó de triunfar y recibir reconocimientos. Si el consultante no se dedica a ningún deporte está augurando que los negocios van muy bien y es un momento de triunfo. ¡Disfrútalo!',
    },
    {
      imagen1: this.imagen1 + 'oro11' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion:
        'Publicaciones exitosas, Tras mucho trabajar el consultante por fin está en su momento de éxito y reconocimiento, ya sea por una obra literaria, o algo relacionado con medios de comunicación. Se puede sentir merecedor de los halagos y no dudar en hacer negocios. No es momento de ser humilde, es tiempo de negociar con tus talentos.',
    },
    {
      imagen1: this.imagen1 + 'oro11' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion:
        'Gastos en vacaciones, El consultante fue irresponsable pensando que las cosas iban a mejorar y decidió hacer un viaje donde la mala fortuna se hizo presente. Los imprevistos pronto lo atraparán dejándolo en un momento de desesperación; el consultante se está desentendiendo de sus responsabilidades y haciéndose la víctima.',
    },
    {
      imagen1: this.imagen1 + 'oro11' + this.f,
      imagen2: this.imagen2 + 'espada3' + this.f,
      conjugacion:
        'Venda en los ojos, Esta tirada es una advertencia para el consultante, ya que la pérdida de visión es inminente y el consultante no está haciendo caso a este padecimiento, así que debe quitarse la venda de los ojos y actuar, porque no es correcto por lo que está pasando. Es importante que acuda con expertos y que ellos dictaminen la gravedad del padecimiento.',
    },
    {
      imagen1: this.imagen1 + 'oro11' + this.f,
      imagen2: this.imagen2 + 'copa8' + this.f,
      conjugacion:
        'Amor del pasado, Una sombra aparece en la vida del consultante; un amor del pasado que lo trastornó y dañó emocionalmente, se hace presente en este periodo de felicidad y éxito. El amor del pasado puede quedar deslumbrado por la nueva condición del consultante, pero en el fondo esta relación quedó muy sentida, así que lo que la tirada le recomienda al consultante es que cierre este episodio de la vida amorosa para avance hacia un nuevo amor, de lo contrario todo volverá a lo mismo, peleas y desconfianza',
    },
    {
      imagen1: this.imagen1 + 'oro12' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion:
        'Trabajo con ganancias, La combinación está avisando al consultante que sus esfuerzos por fin brindarán frutos, en breve recibirá no solo reconocimiento por su labor, sino una buena ganancia económica que atraerá nuevas personas y con ello, nuevas oportunidades para crear otros proyectos. La combinación le pide que mantenga el ánimo arriba y la mente fría para evaluar con severidad las oportunidades y elegir la mejor y más rentable.',
    },
    {
      imagen1: this.imagen1 + 'oro12' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion:
        'Puesto directivo, Tras mucho esfuerzo en su trabajo, los jefes por fin se han convencido de que el consultante es la mejor opción para un puesto directivo, ya que lo han visto desenvolverse con decisión y liderazgo, lo que lo ha llevado a estar en la mirada de los poderosos. No dudes de tu capacidad ni por un momento, el consultante se debe mostrar convencido de que tiene un dominio total de la situación.',
    },
    {
      imagen1: this.imagen1 + 'oro12' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion:
        'Acuerdo limpio, Tras muchas negociaciones en el trabajo o con la pareja, el consultante llega a un acuerdo que es mutuo y que está en igualdad de condiciones. Es momento de cerrar un capítulo en una empresa o en una relación, sin resentimientos, en paz para el consultante y la contraparte.',
    },
    {
      imagen1: this.imagen1 + 'oro12' + this.f,
      imagen2: this.imagen2 + 'espada8' + this.f,
      conjugacion:
        'Perdida de la salud, La desidia ha puesto al consultante en un problema de salud, ya que no se atendió con anterioridad un malestar y hoy está siendo motivo para que sea internado con un padecimiento mucho mayor, así que, si todavía goza de buena salud, lo que pide la tirada al consultante es que se atienda una dolencia, de lo contrario puede ser fatal.',
    },
    {
      imagen1: this.imagen1 + 'oro12' + this.f,
      imagen2: this.imagen2 + 'bastos7' + this.f,
      conjugacion:
        'Dependencia al alcohol, El alcohol o las drogas pueden estar mermando el desempeño sexual del consultante. Trayendo como consecuencia el abandono de la pareja y la sensación de soledad para el consultante.',
    },
    {
      imagen1: this.imagen1 + 'oro12' + this.f,
      imagen2: this.imagen2 + 'copa10' + this.f,
      conjugacion:
        'Lucha de poder, Habla de una mujer que a pesar de ser decidida, cuando de amor, se trata se vuelve una mujer controladora y dependiente, sobre todo porque ama la posición económica del consultante y no va a permitir que nadie le quite el lugar privilegiado que tiene, así que los celos y el chantaje son su mejor arma.',
    },
    {
      imagen1: this.imagen1 + 'asDeCopas' + this.f,
      imagen2: this.imagen2 + 'espada5' + this.f,
      conjugacion:
        'Juicio desfavorable, Si el consultante está en un juicio legal que ya lleva tiempo gestionándose, la respuesta será desfavorable. Si recién está comenzando un juicio legal, la tirada le está advirtiendo que se debe tener cuidado con la persona que contrate para llevar el proceso, ya que podría haber errores y perdería el juicio. Buscar un abogado honesto será crucial para que todo esté a favor del consultante.',
    },
    {
      imagen1: this.imagen1 + 'asDeCopas' + this.f,
      imagen2: this.imagen2 + 'espada8' + this.f,
      conjugacion:
        'Venta de casa, La venta de una casa no es un acontecimiento negativo. Lo negativo comienza cuando todos los involucrado son familiares y se olvidan de este lazo de sangre, tratando de sacar el mayor provecho para cada uno. Esto traerá graves consecuencias en la familia, hasta crear una ruptura irreconciliable.',
    },
    {
      imagen1: this.imagen1 + 'asDeCopas' + this.f,
      imagen2: this.imagen2 + 'oro5' + this.f,
      conjugacion:
        'Exceso de confianza, El consultante esta pasando por un buen momento, todo lo que se proponga lo está consiguiendo y esto es genial. El problema comienza cuando el consultante se vuelve petulante y el ego no le permite ver los errores que va cometiendo. La soberbia lo lleva a tomar malas decisiones.',
    },
    {
      imagen1: this.imagen1 + 'asDeCopas' + this.f,
      imagen2: this.imagen2 + 'oro3' + this.f,
      conjugacion:
        'Boda suntuosa, Si el consultante es una mujer y sale esta combinación, con seguridad realizará la boda de sus sueños, con todos los caprichos que siempre soñó. Pero si el consultante es hombre, entonces la carta le está pidiendo que se comprometa y que no escatime en la boda, porque es el deseo de su futura esposa.',
    },
    {
      imagen1: this.imagen1 + 'asDeCopas' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      imagen3: this.imagen3 + 'copa7' + this.f,
      conjugacion:
        'Facultad paranormal, El consultante debe tomar la noticia con mucho aplomo y aprender sobre sus propias capacidades extrasensoriales, pues la combinación indica que la que tiene desarrollados dones como la clarividencia o la sanación. Es posible que esto le provoque temor o ansiedad, porque no saben qué es real y qué no.',
    },
    {
      imagen1: this.imagen1 + 'asDeCopas' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion:
        'Quitar miedo, Cuando aparece esta combinación está advirtiendo al consultante que debe quitarse prejuicios y conocerse a sí mismo, ya que está muy cómodo quejándose sin buscar soluciones a su situación actual. El consultante no quiere salir de su zona de confort, aunque la vida le está proporcionando, la energía, las herramientas y las oportunidades para que avance.',
    },
    {
      imagen1: this.imagen1 + 'copa2' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion:
        'Boda, Cuando estas dos cartas salen juntas es un claro anuncio que habrá una boda, ya sea para el consultante o para alguien de su interés.',
    },
    {
      imagen1: this.imagen1 + 'copa2' + this.f,
      imagen2: this.imagen2 + 'copa3' + this.f,
      conjugacion:
        'Embarazo, Esta combinación de cartas siempre indican un embarazo inminente. Ya sea que el consultante quiera saber si pronto esperará un hijo o si alguien más está embarazada, estas dos cartas siempre lo anuncian.',
    },
    {
      imagen1: this.imagen1 + 'copa2' + this.f,
      imagen2: this.imagen2 + 'copa10' + this.f,
      imagen3: this.imagen3 + 'copa12' + this.f,
      conjugacion:
        'Amor correspondido, Estas tres cartas juntas anuncian al consultante que se encuentra en una relación donde el sentimiento es mutuo y su amor son totalmente correspondidos.',
    },
    {
      imagen1: this.imagen1 + 'copa2' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion:
        'Relación por interés, Cuando esta combinación de cartas sale en la lectura, indica que el consultante se está involucrando sentimentalmente con los demás únicamente por interés, o alguien más solo se acerca al consultante para obtener algún beneficio.',
    },
    {
      imagen1: this.imagen1 + 'copa2' + this.f,
      imagen2: this.imagen2 + 'copa12' + this.f,
      imagen3: this.imagen3 + 'bastos12' + this.f,
      conjugacion:
        'Amor secreto, Estas tres cartas juntas anuncian que el consultante o alguien de su interés lleva una relación secreta con otra persona. El consultante está muy interesado, pero la persona ya pudiera estar involucrada con alguien más.',
    },
    {
      imagen1: this.imagen1 + 'copa2' + this.f,
      imagen2: this.imagen2 + 'espada11' + this.f,
      imagen3: this.imagen3 + 'espada2' + this.f,
      conjugacion:
        'Accidente doméstico, Si estas cartas salen juntas en una lectura, le advierten al consultante que pudiera tener un pequeño accidente en su casa. Es bueno recomendar que tengan precaución con electrodomésticos, superficies resbalosas u objetos pulso cortantes con los que pudiera tener un accidente.',
    },
    {
      imagen1: this.imagen1 + 'copa3' + this.f,
      imagen2: this.imagen2 + 'copa9' + this.f,
      conjugacion:
        'Éxito, Cualquiera que sea la pregunta que se haya realizado, la respuesta es un sí, y lo que el consultante espera tomará sólo algunas semanas en concretarse. En cuanto a la amistad y el amor, indica una gran armonía. Estas relaciones serán divertidas y satisfactorias.',
    },
    {
      imagen1: this.imagen1 + 'copa3' + this.f,
      imagen2: this.imagen2 + 'oro11' + this.f,
      conjugacion:
        'Celebración, El proyecto que el consultante viene gestando, sin importar si es laboral, artístico, familiar, etc, saldrá tal como lo espera. También anuncia un ofrecimiento generoso.',
    },
    {
      imagen1: this.imagen1 + 'copa3' + this.f,
      imagen2: this.imagen2 + 'bastos8' + this.f,
      conjugacion:
        'Si el consultante está comenzando una nueva relación, este amor se consolidará pronto. Si se encuentra esperando noticias o recibir algún tipo de contacto de la persona de su interés, las recibirá muy pronto, en algunas semanas. Desde ya que el mensaje recibido será positivo.',
    },
    {
      imagen1: this.imagen1 + 'copa3' + this.f,
      imagen2: this.imagen2 + 'espada2' + this.f,
      conjugacion:
        'Estancamiento, Esta combinación nos habla de estancamientos por el miedo a dejarse llevar. A causa de su desconfianza y miedos, el consultante no permite tampoco que fluya la alegría en su vida.',
    },
    {
      imagen1: this.imagen1 + 'copa3' + this.f,
      imagen2: this.imagen2 + 'espada3' + this.f,
      conjugacion:
        'Dolor, Esta combinación habla del éxito ajeno que causa dolor. En el amor es un claro indicativo de una ruptura a causa de un tercero en discordia. El consultante sufrirá dolor, soledad y añoranza.',
    },
    {
      imagen1: this.imagen1 + 'copa3' + this.f,
      imagen2: this.imagen2 + 'copa4' + this.f,
      conjugacion:
        'Tedio, Indica que la vida social que se lleva no es la deseada, por lo tanto resulta agotadora y exhaustiva. El consultante no disfruta de su entorno; las reuniones sociales se vuelven tediosas. Tiene una oportunidad para ser feliz con alguien, pero está tan enfocado en su dolor que no ve a esa persona, por estar cegado en su sufrimiento o porque simplemente no tiene la voluntad para salir de esa situación.',
    },
    {
      imagen1: this.imagen1 + 'copa4' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion:
        'Salir del engaño, Estas dos cartas anuncian al consultante que una situación se va aclarar o se está aclarando, lo que lo hará ver la verdad y salir del engaño en que se vio envuelto.',
    },
    {
      imagen1: this.imagen1 + 'copa4' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion:
        'Situación sentimental aclarada, Si salen estas dos cartas juntas, anuncian al consultante que la situación sentimental de una persona que le interesa se va aclarar, o que su estatus con otra persona se define.',
    },
    {
      imagen1: this.imagen1 + 'copa4' + this.f,
      imagen2: this.imagen2 + 'copa10' + this.f,
      imagen3: this.imagen3 + 'copa11' + this.f,
      conjugacion:
        'Jóvenes muy enamorados, La combinación de estas cartas anuncia que una pareja de jóvenes está muy enamorada. El amor y los sentimientos son mutuos y el consultante es correspondido.',
    },
    {
      imagen1: this.imagen1 + 'copa4' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion:
        'Depresión, Cuando estas dos cartas aparecen juntas muestra que el consultante o la persona por la que se pregunta en la consulta está pasando por un periodo complicado de depresión.',
    },
    {
      imagen1: this.imagen1 + 'copa4' + this.f,
      imagen2: this.imagen2 + 'oro4' + this.f,
      conjugacion:
        'Solo atracción física, Estas dos cartas juntas anuncian al anunciante que se encuentra en una relación donde la pasión es muy grande, pero la persona de su interés solo quiere una relación física, nada formal, todo sin compromisos.',
    },
    {
      imagen1: this.imagen1 + 'copa4' + this.f,
      imagen2: this.imagen2 + 'espada4' + this.f,
      imagen3: this.imagen3 + 'espada9' + this.f,
      conjugacion:
        'Solo atracción física, Estas dos cartas juntas anuncian al anunciante que se encuentra en una relación donde la pasión es muy grande, pero la persona de su interés solo quiere una relación física, nada formal, todo sin compromisos.',
    },
    {
      imagen1: this.imagen1 + 'copa5' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion:
        'Reconocimiento laboral, La combinación de estas dos cartas le anuncia al consultante que está por obtener reconocimientos en su trabajo. Pero no solo esto, vendrá una racha muy positiva en cuestiones laborales.',
    },
    {
      imagen1: this.imagen1 + 'copa5' + this.f,
      imagen2: this.imagen2 + 'copa12' + this.f,
      imagen3: this.imagen3 + 'copa7' + this.f,
      conjugacion:
        'Boda por amor, Estas tres cartas juntas aseguran que la unión matrimonial se da por amor y sentimientos correspondidos. El consultante puede estar tranquilo de que esta boda se dará en las mejores condiciones.',
    },
    {
      imagen1: this.imagen1 + 'copa5' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion:
        'Herencia, Cuando estas dos cartas aparecen en la lectura le anuncian al consultante que recibirá una herencia, o que hay una herencia en disputa o, que el tema de la lectura tiene que ver con este tema.',
    },
    {
      imagen1: this.imagen1 + 'copa5' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion:
        'Separación del matrimonio, Si aparecen estas dos cartas en una lectura, auguran una posible separación matrimonial. En muchos casos el divorcio es inminente.',
    },
    {
      imagen1: this.imagen1 + 'copa5' + this.f,
      imagen2: this.imagen2 + 'espada10' + this.f,
      conjugacion:
        'Inicios Decepcionantes, Estos dos naipes juntos hablan que los nuevos inicios o algo nuevo que quieres que pase, no va a suceder como lo esperabas.',
    },
    {
      imagen1: this.imagen1 + 'copa5' + this.f,
      imagen2: this.imagen2 + 'espada5' + this.f,
      conjugacion:
        'Celebraciones forzadas, La combinación de estas cartas anuncia que el consultante estará envuelto en una celebración forzada. Puede que no quiera asistir a esta celebración, o que no siente un gusto sincero por celebrar o ser celebrado.',
    },
    {
      imagen1: this.imagen1 + 'copa6' + this.f,
      imagen2: this.imagen2 + 'copa7' + this.f,
      imagen3: this.imagen3 + 'copa11' + this.f,
      conjugacion:
        'Retomar amor del pasado, De manera repentina aparece un amor del pasado. El encuentro fortuito trae mucha felicidad, ambas personas sienten que el tiempo no pasó y pueden retomar lo que dejaron atrás. Es el momento idóneo y parece que todo se acomodó para que resurja el amor.',
    },
    {
      imagen1: this.imagen1 + 'copa6' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion:
        'Amor en el hogar, El consultante debe sentirse pleno y feliz con su relación de pareja actual. No hay nada que ponga en riesgo esta relación, aunque la tendencia a lo negativo por parte del consultante es algo que se debe revisar junto con su autoestima y el nivel de merecimiento.',
    },
    {
      imagen1: this.imagen1 + 'copa6' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion:
        'Revisión de economía, Si salió esta combinación el consultante está viéndose rebasado con dificultades económicas, pero en particular esta tirada le pide al consultante se mantenga tranquilo y reflexione cómo está gastando el dinero que entra, porque en algún tema se está yendo el dinero sin darse cuenta y es necesario modificar esta tendencia y la economía volverá a estar sana.',
    },
    {
      imagen1: this.imagen1 + 'copa6' + this.f,
      imagen2: this.imagen2 + 'bastos10' + this.f,
      conjugacion:
        'Obsesión, Regresa un amor del pasado y el consultante se aferra emocionalmente creando una especia de obsesión, ya que no desea que se vaya sin darse cuenta que la vida le da la oportunidad de cerrar un ciclo que quedo inconcluso en el paso.',
    },
    {
      imagen1: this.imagen1 + 'copa6' + this.f,
      imagen2: this.imagen2 + 'espada11' + this.f,
      conjugacion:
        'Trastorno emocional, Tras una agresión en el pasado que marcó al consultante en su psicología y lo convirtió en un incapacitado emocional, es tiempo de que tome la rienda de su vida. El problema es que su voluntad está dormida por el tratamiento médico al que fue sometido. Esta combinación le pide al consultante que avance, de lo contrario atentará con su vida pensando que la muerte es la única salida.',
    },
    {
      imagen1: this.imagen1 + 'copa6' + this.f,
      imagen2: this.imagen2 + 'espada8' + this.f,
      conjugacion:
        'Enfermedad, Los malos hábitos han llevado al consultante a una condición de salud delicada. Está advirtiendo de una dieta en la cual se abusa de harinas; tiene un intestino perezoso y esto puede traer consecuencia que terminen en un quirófano. Así que se recomienda ir a un chequeo médico.',
    },
    {
      imagen1: this.imagen1 + 'copa7' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion:
        'Golpe de suerte, Cuando aparece esta combinación está anunciado que puede llegar a tu vida una fuerte cantidad de dinero, ya sea por azar, por herencia o un trabajo que no esperabas, pero que has deseado por mucho tiempo. A veces sin darnos cuenta accionamos la energía del universo, en un momento que estamos en paz, respiramos profundo y mentalmente pensamos lo que deseamos. Y sigues sin prestar atención y es en ese momento cuando creas un deseo con la plenitud de la consciencia.',
    },
    {
      imagen1: this.imagen1 + 'copa7' + this.f,
      imagen2: this.imagen2 + 'copa6' + this.f,
      conjugacion:
        'Amor a tu puerta, Dice el dicho que “matrimonio y mortaja del cielo baja”. En tu caso, llega hasta las puertas de tu casa una persona del pasado con una propuesta que te quedaste esperando y no llegó hace unos años. Hoy llega con más fuerza para impactarte y darte una gran sorpresa que al principio te hará dudar, pero que tu corazón no ha podido olvidar. Ese amor y resurge con gran fuerza.',
    },
    {
      imagen1: this.imagen1 + 'copa7' + this.f,
      imagen2: this.imagen2 + 'bastos3' + this.f,
      conjugacion:
        'Contrato laboral, Si por mucho tiempo has batallado para encontrar trabajo, en este momento aparece una propuesta que no debes dejar pasar. Tal vez no sea lo que estás esperando, pero la tirada te está advirtiendo que tú mismo atrajiste ese trabajo que te parece insignificante. Pero debes revisar tu autoestima, pues no estás siendo realista con tu capacidad y los trabajos que atraes, hay que revisar en dónde está la incoherencia.',
    },
    {
      imagen1: this.imagen1 + 'copa7' + this.f,
      imagen2: this.imagen2 + 'espada8' + this.f,
      conjugacion:
        'Hospitalización, La salud es un tema que debes consultar con profesionales. Lo que te está advirtiendo esta tirada es que no dejes pasar más tiempo para ir al médico y hacer un chequeo. Llevas más de tres meses con un dolor o molestia al cual no estás poniendo atención, esto se puede agudizar y llevarte al hospital. Previsión es el mensaje de la combinación.',
    },
    {
      imagen1: this.imagen1 + 'copa7' + this.f,
      imagen2: this.imagen2 + 'bastos12' + this.f,
      conjugacion:
        'Fraude, La tirada te advierte que seas prudente, que pongas los pies sobre la tierra y evalúes y reflexiones qué se te ofrece y cuáles son las condiciones. Si te dejas llevar por la emoción entonces no verás los signos de alerta y puedes caer en un fraude.',
    },
    {
      imagen1: this.imagen1 + 'copa7' + this.f,
      imagen2: this.imagen2 + 'cop10' + this.f,
      conjugacion:
        'Aventura amorosa, Si el consultante es un hombre conocerá a una mujer de tez blanca y cabello rubio que lo deslumbrará, haciéndolo perder la cabeza, ya que no puede creer su suerte y está convencido que es un regalo. Aunque tenga una pareja no dudará en dejarla por sentir que esa oportunidad no se presentará dos veces.',
    },
    {
      imagen1: this.imagen1 + 'copa8' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion:
        'Renovación, Esta combinación siempre es positiva y nos brinda esperanza cuando estamos enfrentando una ruptura. Nos indica que luego de esta separación, o si estamos solteros, lograremos los cambios en nuestras vidas para poder volver a amar. De esta manera, anuncia el inicio de una nueva relación donde los sentimientos serán tímidos pero totalmente sinceros.',
    },
    {
      imagen1: this.imagen1 + 'copa8' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion:
        'Inicios, La conjugación de estas cartas indica que a pesar de nuestras dudas, debemos seguir nuestra intuición y comenzar ese proyecto que tenemos desde cero. A pesar de todas las posibles incertidumbres, lograremos un camino muy positivo.',
    },
    {
      imagen1: this.imagen1 + 'copa8' + this.f,
      imagen2: this.imagen2 + 'copa9' + this.f,
      conjugacion:
        'Felicidad asegurada, Posiblemente vengamos de realizar un sacrificio muy grande, o estemos por hacerlo. Esta combinación nos indica que es necesario cambiar nuestra perspectiva para recibir una gran recompensa.',
    },
    {
      imagen1: this.imagen1 + 'copa8' + this.f,
      imagen2: this.imagen2 + 'oro5' + this.f,
      conjugacion:
        'Desdicha, Nos enfrentamos a un momento doloroso. Las cartas que rodeen a esta combinación nos dirán si estaremos transitando un  momento doloroso  porque no estamos preparados para soltar y se producirá un cambio amargo, si se trata de una derrota o de la pérdida de una oportunidad.',
    },
    {
      imagen1: this.imagen1 + 'copa8' + this.f,
      imagen2: this.imagen2 + 'espada8' + this.f,
      conjugacion:
        'Impotencia frente a la vida, Esta combinación es una de las más negativas. Indica que el consultante siente un miedo y una tristeza muy profundos que pueden convertirse en depresión. Experimenta la necesidad y el deseo de marcharse, cambiar el rumbo, cerrar una etapa y comenzar una nueva, pero no siente tener la fuerza, ni el coraje, ni las herramientas para hacerlo.',
    },
    {
      imagen1: this.imagen1 + 'copa8' + this.f,
      imagen2: this.imagen2 + 'bastos5' + this.f,
      conjugacion:
        'Conflictos, Aquí observamos problemas para generar los cambios necesarios y negación para enfrenarlos, al punto tal que lo que intentemos terminará en una disputa.',
    },
    {
      imagen1: this.imagen1 + 'copa9' + this.f,
      imagen2: this.imagen2 + 'bastos7' + this.f,
      conjugacion:
        'Trabajo en equipo, Cuando estas dos cartas aparecen juntas en un lectura, te anuncian que formas parte de un excelente equipo de trabajo, o que existe un equipo que se desarrolla aromoniosamente en un lugar de trabajo.',
    },
    {
      imagen1: this.imagen1 + 'copa9' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion:
        'Éxito en la sociedad, Estos dos naipes en una lectura anuncian que el consultante se encuentra en una muy buena posición social, o que próximamente alcanzará el reconocimiento social que tanto esperaba.',
    },
    {
      imagen1: this.imagen1 + 'copa9' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion:
        'Reuniones sociales felices, Estas dos cartas son muy buen augurio sobre una reunión o fiesta que se va a llevar a cabo con mucho éxito y gusto. Los invitados o quienes se reúnan se sentirán felices por asistir y sobre todo, la pasarán muy bien.',
    },
    {
      imagen1: this.imagen1 + 'copa9' + this.f,
      imagen2: this.imagen2 + 'espada10' + this.f,
      conjugacion:
        'Fanatismo religioso, La combinación de estas dos cartas deja en claro que existe una actitud fanática ya sea por una religión o creencia. También habla de sectas o una inclinación obsesiva hacia lo místico.',
    },
    {
      imagen1: this.imagen1 + 'copa9' + this.f,
      imagen2: this.imagen2 + 'copa11' + this.f,
      conjugacion:
        'Conflicto interno, Estas dos cartas juntas hablan de un conflicto interno del consultante o de otra persona, quien siente una lucha interna por mantener sus convicciones y el amor a su religión, o dejarse llevar por los deseos carnales.',
    },
    {
      imagen1: this.imagen1 + 'copa9' + this.f,
      imagen2: this.imagen2 + 'espada9' + this.f,
      imagen3: this.imagen3 + 'bastos9' + this.f,
      conjugacion:
        'Cuando salen tres cartas con el número nueve, es un augurio de que el consultante o alguien más está tomando decisiones bajo presión, que no siempre darán los mejores resultados.',
    },
    {
      imagen1: this.imagen1 + 'copa10' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Amor, Esta combinación suele referirse a que una persona que se acerca a ti con posibilidades serias en el amor. Es una oportunidad que llega y que puede indicar que la relación se te concede. El triunfo en alguna relación sentimental en parejas que ya tienen bastante tiempo, así como parejas que se están consolidando recientemente.',
    },
    {
      imagen1: this.imagen1 + 'copa10' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion: 'Amor realizado, Esta conjunción es indicativo de la llegada de una persona conocida y por la que habías esperado mucho tiempo; nuevamente se acerca para ofrecer sentimientos y una relación. O bien, te dice que la persona que te interesa por fin toma una decisión de concretar la relación como se deseaba.',
    },
    {
      imagen1: this.imagen1 + 'copa10' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Sorpresa, Puede referirse al trabajo con buenas relaciones personales, así como una grata sorpresa relacionada con el área laboral donde se permitirá brillar o bien tener el reconocimiento que se había estado esperando. Habla también de la cosecha de buenos frutos en los negocios que anteriormente se habían proclamado. Es indicativo de la toma de decisiones como iniciativa propia.',
    },
    {
      imagen1: this.imagen1 + 'copa10' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion: 'Infidelidad, Esta conjunción puede representar muchos problemas dentro del área sentimental con la pareja, incluso llegando a indicar la infidelidad por parte de la misma o por parte del consultante. Habla de desacuerdos, relaciones ocultas, amor roto, así como secretos que probablemente debiliten la relación.',
    },
    {
      imagen1: this.imagen1 + 'copa10' + this.f,
      imagen2: this.imagen2 + 'espada2' + this.f,
      conjugacion: 'Dudas, Es probable que se tema la llegada de un nuevo amor en caso de ya tener pareja, ya sea por parte del consultante o por parte de la pareja. Habla también de las dudas que existen en la relación, esto puede ser de manera específica en  las intenciones que se tienen con la pareja, o bien una infidelidad por parte de la pareja. Amores que no están dispuestos a estar bien o que tienen miedo.',
    },
    {
      imagen1: this.imagen1 + 'copa10' + this.f,
      imagen2: this.imagen2 + 'espada9' + this.f,
      conjugacion: 'Celos, En esta combinación pueden destacarse las dudas dentro de una pareja o en todo caso, dudas en general, así como los celos que pueden estar desgastando una relación. Puede incluso hablar de una decepción. Señala ansiedad provocada por amor o bien por una pareja al consultante. Refleja sentimientos alterados, sentimientos de atadura por dudas y decepciones que no se pueden superar.',
    },
    {
      imagen1: this.imagen1 + 'copa11' + this.f,
      imagen2: this.imagen2 + 'bastos11' + this.f,
      conjugacion: 'Idas y venidas, Si el consultante está preguntando por una persona en específico y la lectura es sobre el amor, te está advirtiendo que el hombre en cuestión no es alguien que desee un compromiso, solo quiere pasarla bien, una buena amistad y punto.',
    },
    {
      imagen1: this.imagen1 + 'copa11' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Triunfo en el amor, Si el consultante pregunta por su pareja, la tirada está augurando que la pareja logrará consolidarse, aunque debe tomarse en cuenta que una vez que la situación económica sea mala en la pareja la ruptura será predecible, el consultante deberá evaluar esta situación y hablarlo antes de comprometerse para que haya un precedente de la situación.',
    },
    {
      imagen1: this.imagen1 + 'copa11' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion: 'Gente amable, El consultante conocerá a una persona que lo cautivará, aventurera y carismática, que le propondrá hacer un negocio, no específicamente porque se vuelvan socios, más bien le regalará una idea. Al principio el consultante no pondrá mucha atención por considerarlo como algo poco trascendental, pero con el paso de los días la idea se irá apoderando del consultante hasta hacerla realidad, trayendo grandes ganancias.',
    },
    {
      imagen1: this.imagen1 + 'copa11' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Mudanza obligada, Una pareja que debe mudarse, no hay opción de decidir, debe cambiarse de domicilio, ya sea porque se debe dinero o bien, hay una situación que obliga a esta pareja a salir de su hogar. Esta situación es una prueba que deben enfrentar como pareja, no se ve que haya una ruptura, pero sí sacará a flote algunos sentimientos que han estado guardados por mucho tiempo y es el momento de enfrentarlos como pareja.',
    },
    {
      imagen1: this.imagen1 + 'copa11' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion: 'Noticia desagradable, Malas noticias llegan para el consultante, que cambiarán el rumbo de su vida; aunque no es una sorpresa del todo ya que se venían gestando situaciones incómodas en torno a la pareja, el trabajo o la familia, y se dejó pasar para no tener problemas, así que la vida te enfrenta a tomar decisiones y es el momento de aprovechar este impulso.',
    },
    {
      imagen1: this.imagen1 + 'copa11' + this.f,
      imagen2: this.imagen2 + 'oro3' + this.f,
      conjugacion: 'Dinero inesperado, Al consultante le llega dinero inesperado, a pesar de que podría traer una gran alegría, llega el momento de tomar una decisión con respecto a progresar en el trabajo. Para ello debes viajar y salir de tu zona de confort. La desidia se apoderó de la voluntad del consultante y el pretexto número uno fue no tener dinero, ahora ya lo tienes y es tiempo de moverse y actuar.',
    },
    {
      imagen1: this.imagen1 + 'copa12' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Hombre favorable, El consultante está pasando por un momento de desequilibrio emocional, así que encontrará en su camino a un hombre que le traerá la paz mental y le enseñará a cultivar la paciencia y la templanza. Será como un guía espiritual que le ayudará a transformar su vida para siempre, de manera positiva.',
    },
    {
      imagen1: this.imagen1 + 'copa12' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Empleo por recomendación, Si el consultante está preguntando por encontrar trabajo, seguramente lo encontrará de la mano de un hombre mayor que le ayudará. El consultante agradecerá la oportunidad sin saber que este hombre a la larga le hará ver su suerte al manipularlo a su favor.',
    },
    {
      imagen1: this.imagen1 + 'copa12' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion: 'Casa nueva, Un gran regalo llagará a la vida del consultante a través de la mano de un hombre mayor, que siempre consideró su maestro o a quien le tenía admiración, puede ser familiar o no. Es un regalo inesperado que le cambiará la vida para bien.',
    },
    {
      imagen1: this.imagen1 + 'copa12' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion: 'As de espadas = Traición, Sin esperarlo, el consultante se verá envuelto en un escándalo donde será la persona que traicionó la confianza de la empresa donde trabaja, así que no se dará cuenta que fue víctima de un hombre mayor que le puso una trampa y lo inculpó.',
    },
    {
      imagen1: this.imagen1 + 'copa12' + this.f,
      imagen2: this.imagen2 + 'bastos8' + this.f,
      conjugacion: 'Inseguridad, Hay una persona que está cerca del consultante y está creando en él mucha inseguridad. Un hombre mayor que está queriendo que el consultante comience a cometer errores para quedarse con todo lo que él ha construido, ya que desde hace tiempo ha planeado quitarle su vida, apoderarse de su esposa, su casa y su empresa, por lo que no parará hasta conseguirlo.',
    },
    {
      imagen1: this.imagen1 + 'copa12' + this.f,
      imagen2: this.imagen2 + 'copa6' + this.f,
      conjugacion: 'El pasado regresa, Una deuda de juego que en su momento se cobró. Regresa del pasado la o las personas que hicieron que el consultante cayera en este vicio. Lo que esta tirada le está pidiendo al consultante es que tenga cuidado de volver a caer en vicios del pasado o de retomar amistades que solo le traerán dolor.',
    },
    {
      imagen1: this.imagen1 + 'asDeEspadas' + this.f,
      imagen2: this.imagen2 + 'copa9' + this.f,
      conjugacion: 'Triunfo, Esta combinación es una de las mejores en la baraja española. Indica que aquello que deseas se encuentra al alcance de tu mano, sólo debes actuar para lograrlo.',
    },
    {
      imagen1: this.imagen1 + 'asDeEspadas' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Celebración, Esta combinación de la baraja española es una de las más esperanzadoras si tu relación se encuentra atravesando una crisis. Indica que es ahora el momento de actuar para evitar la ruptura; genera ese cambio de dinámica que estás considerando, así la relación triunfará. En caso de que el consultante haya atravesado una ruptura recientemente, esta conjugación muestra que logrará rehacer su vida y construir un futuro mejor que el que esperaba.',
    },
    {
      imagen1: this.imagen1 + 'asDeEspadas' + this.f,
      imagen2: this.imagen2 + 'oro12' + this.f,
      conjugacion: 'Amor sano, Cuando aparece la Reina de Oros junto al As de Espadas, significa que la persona de interés del consultante es una persona sincera, con la cual comenzará una relación romántica cargada de sinceridad.',
    },
    {
      imagen1: this.imagen1 + 'asDeEspadas' + this.f,
      imagen2: this.imagen2 + 'espada9' + this.f,
      conjugacion: 'Mentiras, La combinación de estas dos barajas advierten al consultante sobre traiciones y desengaños. Le recomienda modificar su actitud frente a la vida, ya que es él mismo quien inconscientemente elige aferrarse al dolor. Recibirá palabras y mensajes muy dolorosos, pero está en él salir adelante.',
    },
    {
      imagen1: this.imagen1 + 'asDeEspadas' + this.f,
      imagen2: this.imagen2 + 'oro5' + this.f,
      conjugacion: 'Estancamiento, Aquí las cartas nos hablan de un bloqueo mental y de la necesidad de revisar el orgullo excesivo y dañino que presenta el consultante. La persona se encuentra en un profundo estado de negatividad. No sabe buscar el amor, necesita encontrar las herramientas adecuadas para ello.',
    },
    {
      imagen1: this.imagen1 + 'asDeEspadas' + this.f,
      imagen2: this.imagen2 + 'espada3' + this.f,
      conjugacion: 'Dolor, Esta combinación advierte sobre un conflicto imposible de solucionar. No habrá una segunda oportunidad. Sin embargo, una vez que se supera el dolor generado por este fracaso se podrá comenzar una nueva etapa coronada por el éxito. Si está consultando sobre una crisis o ruptura amorosa, nos está hablando de un tercero en discordia y el triunfo de esta nueva relación a costa del dolor del consultante. Por lo tanto es una combinación que habla de una injusticia y un engaño.',
    },
    {
      imagen1: this.imagen1 + 'espada2' + this.f,
      imagen2: this.imagen2 + 'bastos6' + this.f,
      conjugacion: 'Éxito, Cuando estas dos barajas aparecen juntas, aconsejan al consultante mantener el silencio respecto a sus planes y estrategias. Es clave para salir victorioso de cualquier situación que se presente. El éxito que se obtendrá disipará todas las dudas y miedos.',
    },
    {
      imagen1: this.imagen1 + 'espada2' + this.f,
      imagen2: this.imagen2 + 'copa3' + this.f,
      conjugacion: 'Celebración en el amor, Esta conjugación habla de la vida sentimental del consultante, de sus recelos y miedos respecto al amor. Posiblemente haya vivido experiencias dolorosas en el pasado; sin embargo, estas barajas juntas anuncian el triunfo sobre cualquier recelo, y la consiguiente apertura a un nuevo amor. Los amigos serán un apoyo clave en esto, aunque para un porcentaje de consultantes también puede ser este nuevo amor quien brinde la contención necesaria.',
    },
    {
      imagen1: this.imagen1 + 'espada2' + this.f,
      imagen2: this.imagen2 + 'oro12' + this.f,
      conjugacion: 'Triunfo, Estas dos barajas combinadas anuncian al consultante que, por más fuertes que sean sus miedos, logrará salir adelante y dejarlos atrás. Para esto, contará con la amistad de una mujer joven y morena. Con su apoyo el consultante logrará vencer sus temores y abrirse al amor.',
    },
    {
      imagen1: this.imagen1 + 'espada2' + this.f,
      imagen2: this.imagen2 + 'copa5' + this.f,
      conjugacion: 'Dolor autoinfligido, Aquí pueden presentarse dos situaciones; se podrá definir cuál de ellas es la correcta según el caso, de acuerdo a una carta extra o a la autocrítica del consultante. Por un lado, puede estar viviendo una situación que no es de por sí en extremo negativa, pero en su mente está creando un estado emocional desproporcionadamente doloroso respecto a la realidad. Por otro lado, el consultante simplemente puede estar en un estado de negación, ignorando el hecho de estar dolido.',
    },
    {
      imagen1: this.imagen1 + 'espada2' + this.f,
      imagen2: this.imagen2 + 'espada8' + this.f,
      conjugacion: 'Miedo y resignación, El consultante se encuentra en un momento en el que tiene mucho miedo, no sólo a enamorarse sino al amor en general. También cree que no tiene solución; no tiene la capacidad para ver la manera de superar estos miedos y cree por lo tanto, que jamás podrá salir de esta',
    },
    {
      imagen1: this.imagen1 + 'espada2' + this.f,
      imagen2: this.imagen2 + 'bastos9' + this.f,
      conjugacion: 'Bloqueos, Esta combinación de barajas indica, cuando la consulta es referida al ámbito financiero, que no deben proporcionarse préstamos a nadie, aún si se trata de personas conocidas o de confianza. En otros aspectos señala que el consultante puede encontrarse muy a la defensiva y generarse a sí mismo bloqueos mentales y emocionales, por miedos desproporcionados.',
    },
    {
      imagen1: this.imagen1 + 'espada3' + this.f,
      imagen2: this.imagen2 + 'cop2' + this.f,
      imagen3: this.imagen3 + 'oro3' + this.f,
      conjugacion: 'Asociaciones positivas, En esta combinación, la carta que podría estar hablando de algo negativo se encuentra orientada en el pasado. El consultante ha finalizado una asociación con una persona muy querida debido a algún conflicto.Con el Dos de Copas, se indica que la persona con la que se realizará la nueva sociedad es de confianza, y tiene buenos sentimientos hacia el consultante. En el futuro, puedes ver una baraja sumamente favorable, el 3 de Oros, que anuncia expansión económica',
    },
    {
      imagen1: this.imagen1 + 'espada3' + this.f,
      imagen2: this.imagen2 + 'copa12' + this.f,
      imagen3: this.imagen3 + 'copa6' + this.f,
      conjugacion: 'Pretendiente, Si la consulta está realizada por una mujer, le anuncia que hay un hombre mayor, castaño, que siente un profundo interés por ella. Podría estar enamorado incluso. En el mediano plazo es probable que le invite a salir.',
    },
    {
      imagen1: this.imagen1 + 'espada3' + this.f,
      imagen2: this.imagen2 + 'bastos8' + this.f,
      conjugacion: 'amor, La combinación con esta carta es sumamente positiva, especialmente cuando el consultante viene de relaciones conflictivas y dolorosas, ya que anuncia la llegada de un nuevo amor; uno totalmente inesperado, incluso si no lo está buscando. Será un amor tan sano, que el consultante logrará sanar sus heridas.',
    },
    {
      imagen1: this.imagen1 + 'espada3' + this.f,
      imagen2: this.imagen2 + 'espada9' + this.f,
      conjugacion: 'Sugestión, El consultante necesita ser un poco más objetivo. Cuando se encuentra con el 9 de espadas, indica que se está auto boicoteando generándose preocupaciones a sí mismo donde no hay conflictos.',
    },
    {
      imagen1: this.imagen1 + 'espada3' + this.f,
      imagen2: this.imagen2 + 'oro5' + this.f,
      conjugacion: 'Pérdidas, Será necesario ajustar un poco los gastos, ya que, la combinación junto a esta carta, habla de un exceso en los mismos sea por imprudencia o por mala planificación. Si no se observa esta conducta, puede desencadenar en problemas mayores.',
    },
    {
      imagen1: this.imagen1 + 'espada3' + this.f,
      imagen2: this.imagen2 + 'copa5' + this.f,
      conjugacion: 'Conflictos, El consultante podría estar a punto de cometer un error con la persona a quien ama. Se sugiere meditar antes de actuar, y buscar las mejores maneras de fomentar la buena comunicación con su persona de interés, a fin de evitar conflictos.',
    },
    {
      imagen1: this.imagen1 + 'espada4' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Descanso y recuperación, Tras un sufrir una enfermedad que paralizó de toda actividad al consultante, está recuperando su salud, después de un periodo muy prolongado sin descanso, especialmente por cuestiones de trabajo. Pero hoy la vida le ofrece un periodo para que viva plenamente en paz y en una constante reflexión disfrute de su soledad. Así que la vida le da una oportunidad al consultante para tener un cambio de actitud.',
    },
    {
      imagen1: this.imagen1 + 'espada4' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Salida del hospital, Tras un largo periodo en reclusión, el consultante vuelve a integrarse a la vida diaria, el reto es que se debe integrar a la sociedad y le causa un poco de miedo porque no sabe cómo afrontar esta situación, por lo que se encierra en sí mismo. El apoyo que necesita no está afuera en los demás, sino en su mente, donde el consultante debe hacer consciencia de lo que vale, aún con los cambios que trajo la',
    },
    {
      imagen1: this.imagen1 + 'espada4' + this.f,
      imagen2: this.imagen2 + 'oro10' + this.f,
      conjugacion: 'Oportunidades laborales, Tras un largo periodo de inactividad laboral, llega una mujer del pasado para tenderle la mano al consultante. El reto es aceptar los errores del pasado y no volverlos a cometer; para ello, el consultante debe hacer una reflexión de por qué lo despidieron del empleo, no para culparse, sino para entender cuáles fueron sus errores y tomar la nueva oportunidad sin volverlos a cometer.',
    },
    {
      imagen1: this.imagen1 + 'espada4' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion: 'Amor desleal, Una persona cercana a la pareja del consultante ha estado comentando detalles sobre su relación de pareja y estas indiscreciones han causado un distanciamiento con la pareja del consultante, hasta el punto de la separación. El consultante se siente traicionado por su pareja, ya que ha hecho más caso a los chismes, en lugar de hablar directamente y enfrentar la situación, sin saber que su pareja no desea desde hace tiempo seguir con el consultante, siendo el golpe fatal que recibirá.',
    },
    {
      imagen1: this.imagen1 + 'espada4' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion: 'Amor sin escrúpulo, El consultante ha pasado tiempo sin pareja, siente un vacío emocional; quiere comenzar una relación, por lo que la tirada le pide al consultante ser cauto con la persona que elige ya que se acercará por interés y con el deseo de quedarse con todo lo que tiene. Cuidado con un amor tóxico, que te deje sin nada material y emocional.',
    },
    {
      imagen1: this.imagen1 + 'espada4' + this.f,
      imagen2: this.imagen2 + 'espada8' + this.f,
      conjugacion: 'Muerto en vida, Esta combinación señala que el consultante carece de voluntad. Se ha vuelto una carga pesada para su familia, ya que su apatía por la vida lo mantiene aislado del mundo. Se niega a darse cuenta que es capaz de salir del encierro, está sano y es capaz de trabajar.',
    },
    {
      imagen1: this.imagen1 + 'espada5' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Resolución positiva, Esta combinación da esperanzas al consultante si se encuentra atravesando una situación complicada, tanto en un negocio como en cualquier otro ámbito. Indica que se saldrá triunfante, pero es necesario actuar cuanto antes para disipar los celos y las dudas de las otras personas involucradas.',
    },
    {
      imagen1: this.imagen1 + 'espada5' + this.f,
      imagen2: this.imagen2 + 'oro9' + this.f,
      conjugacion: 'Evolución personal, Cuando estas barajas salen juntas, indican que el consultante es capaz de hacer una auto crítica constructiva. Aprende a dejar de lado las actitudes y pensamientos deshonestos, se vuelve alguien independiente, aunque aún debe revisar algunas actitudes egoístas.',
    },
    {
      imagen1: this.imagen1 + 'espada5' + this.f,
      imagen2: this.imagen2 + 'oro8' + this.f,
      conjugacion: 'Amor constructivo, Si el consultante se encuentra atravesando una situación conflictiva en su pareja, esta combinación indica que el amor es tan grande que lograrán suavizar y superar las diferencias y la crisis presente. En otro orden de cosas, anuncia que logrará el empleo deseado gracias a la influencia de alguien.',
    },
    {
      imagen1: this.imagen1 + 'espada5' + this.f,
      imagen2: this.imagen2 + 'oro5' + this.f,
      conjugacion: 'Dolor, En este caso, el consultante exhibe un nivel de egoísmo tan elevado que simplemente lo llevará a la ruina. Sufrirá una ruptura dolorosa. Si planea un viaje será extremadamente difícil. Se alejarán las personas de su entorno.',
    },
    {
      imagen1: this.imagen1 + 'espada5' + this.f,
      imagen2: this.imagen2 + 'copa3' + this.f,
      conjugacion: 'Falsedad, Es un gran llamado de atención a los valores del consultante. Podría estar siendo infiel a su pareja; u ocultando fiestas y actividades que realiza la persona misma o aquellas cercanas. Sostiene una conducta nociva para consigo y los demás, pero en vez de reflexionar al respecto simplemente lo celebra.',
    },
    {
      imagen1: this.imagen1 + 'espada5' + this.f,
      imagen2: this.imagen2 + 'copa2' + this.f,
      conjugacion: 'Espejismos, Esta combinación anuncia la reconciliación entre el consultante y otra persona. Sin embargo, debe tener cuidado ya que hay muchas cosas que no se aclaran y puede tratarse de un engaño.',
    },
    {
      imagen1: this.imagen1 + 'espada6' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Nuevos caminos, Si el consultante se siente en una encrucijada y aparecen estas barajas combinadas, no debe dudarlo, retirarse será la mejor opción. De esta manera y abriéndose a los cambios, dará lugar a nuevas oportunidades que serán mucho mejores y positivas.',
    },
    {
      imagen1: this.imagen1 + 'espada6' + this.f,
      imagen2: this.imagen2 + 'oro6' + this.f,
      conjugacion: 'Renovación, Cuando se conjugan estas barajas anuncian un mejor trabajo para el consultante. Si está lidiando con fantasmas del pasado, podrá superarlos y dejarlos atrás dedicándose de lleno a su nuevo trabajo.',
    },
    {
      imagen1: this.imagen1 + 'espada6' + this.f,
      imagen2: this.imagen2 + 'bastos3' + this.f,
      conjugacion: 'Triunfo, Estas dos barajas juntas alientan al consultante a continuar la lucha, valdrán la pena el esfuerzo y los posibles sinsabores. El resultado que vaticina es un futuro muy prometedor.',
    },
    {
      imagen1: this.imagen1 + 'espada6' + this.f,
      imagen2: this.imagen2 + 'bastos5' + this.f,
      conjugacion: 'Conflictos, Esta combinación es bastante negativa. El consultante se encuentra transitando un mal momento, y será aún peor con el transcurso del tiempo. Anuncia disputas inevitables. Será necesario procurar mantener la calma y la claridad mental para salir de la mejor manera posible de estas situaciones.',
    },
    {
      imagen1: this.imagen1 + 'espada6' + this.f,
      imagen2: this.imagen2 + 'espada8' + this.f,
      conjugacion: 'Cargas negativas, La recomendación de esta conjugación es no lanzarse a los cambios, ya que serán sumamente negativos, perjudicarán bastante al consultante. Debe también revisar las cargas mentales que arrastra del pasado, ya que son las que no le impiden avanzar, y pagará un poco caras las consecuencias.',
    },
    {
      imagen1: this.imagen1 + 'espada6' + this.f,
      imagen2: this.imagen2 + 'espada3' + this.f,
      conjugacion: 'Traición, Cuando aparecen estas dos barajas juntas, anuncian una ruptura dolorosa y el descubrimiento de una traición. El consultante querrá alejarse del dolor que siente, pero deberá transitarlo para sanarlo y no sufrir las consecuencias a futuro.',
    },
    {
      imagen1: this.imagen1 + 'espada7' + this.f,
      imagen2: this.imagen2 + 'bastos4' + this.f,
      conjugacion: 'Trauma sexual, El consultante puede estar envuelto a un suceso muy traumático en su vida que tiene que ver con su vida sexual; puede estar avisando sobre una posible violación o acto sexual que le deje una gran impresión, siendo el parte aguas para que sufra un cambio drástico que provoque un trauma sexual.',
    },
    {
      imagen1: this.imagen1 + 'espada7' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion: 'Ruptura de relación, El consultante ha puesto los ojos en una pareja que está muy por encima de su estilo de vida y educación. Cuando comenzó la relación parecía un sueño del que no quería despertar la pareja, solo que el tiempo y la cotidianidad le ha mostrado la verdadera personalidad de cada uno, lo que ha traído una gran desilusión de ambas partes, por lo que la ruptura es evidente.',
    },
    {
      imagen1: this.imagen1 + 'espada7' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion: 'Enfermedad grave, El consultante ha llevado una vida de malos hábitos alimenticios o con vicios, que han puesto en riesgo su salud, a tal grado que ha caído en cama. La tirada augura que pasará un periodo largo para que se recupere al 100 por ciento.  Este tiempo se recomienda reflexionar y tratar de mejorar lo negativo en su vida.',
    },
    {
      imagen1: this.imagen1 + 'espada7' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Cambio de mentalidad, Cuando aparece esta combinación en la vida del consultante, marca el fin de una etapa que se caracterizó por la mediocridad, así que es momento de que transforme sus pensamientos para el futuro, de manera más optimista y dando paso a una etapa de brillo y abundancia. El futuro no puede ser más esperanzador con el As de oros como final de la tirada, todo lo que deseaste se cumplirá. La única condición que debe cumplir el consultante es ser positivo y tomar la rienda de su vida.',
    },
    {
      imagen1: this.imagen1 + 'espada7' + this.f,
      imagen2: this.imagen2 + 'oro3' + this.f,
      conjugacion: 'Esperanza, Todos tacharon al consultante de soñador, pero jamás dejó de lado la idea que juraba le daría grandes satisfacciones. Trabajó día tras día y por fin el negocio, producto o servicio que ideó empezará a darle frutos, hasta llegar un periodo de mejora económica. Lo que esta tirada le está advirtiendo al consultante es que tenga cuidado de la gente de la cuales rodea, ya que puede haber oportunistas que tiren todo su esfuerzo.',
    },
    {
      imagen1: this.imagen1 + 'espada7' + this.f,
      imagen2: this.imagen2 + 'oro11' + this.f,
      conjugacion: 'Viaje, A la vida del consultante llegará un hombre joven que le traerá una chispa de vida, un entusiasmo que hace tiempo no sentía. Pero ahora se siente motivado, esperanzado y con ganas de “comerse” el mundo. La tirada le advierte al consultante que tenga cuidado con el joven encantador porque puede ser maravilloso todo lo que cuenta, pero no todo es real, es mejor andar con pies de plomo y no dejarse embaucar, aunque sí puede servir de motivación.',
    },
    {
      imagen1: this.imagen1 + 'espada8' + this.f,
      imagen2: this.imagen2 + 'bastos6' + this.f,
      conjugacion: 'Encuentro placentero, Este será un periodo sexualmente activo para el consultante, si no cuenta con pareja encontrará una pareja casual o un “amigo” que se convierta en su pareja sexual, sin compromisos. Para que sea una situación armoniosa entre ambas personas, deberán hablar de que solo es un encuentro fortuito y no hay una relación, ni se piensa en tratar de crear un vínculo afectivo; de lo contrario, existirá el riesgo de que la situación se torne muy tortuosa para alguno de los dos, que pensó que podría ser amor.',
    },
    {
      imagen1: this.imagen1 + 'espada8' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Liberación, Lo que te pide esta tirada es que seas consciente de tus errores; primero que los aceptes y comiences a perdonarte por esta situación; segundo que tomes la rienda de tu vida en tus manos. No creas que no vas a volver a equivocarte, lo que sí debes de tener por seguro es la enseñanza de vida que vas a tener y a partir de ella, será un parte aguas para que enfrentes la situaciones y dejes de evadir tus responsabilidades.',
    },
    {
      imagen1: this.imagen1 + 'espada8' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion: 'Perdón, Esta tirada le pide al consultante que deje de prestar atención a las críticas del exterior, que es momento de adueñarse de las situaciones y tomar decisiones sin prestar atención a lo que dice la gente a su alrededor. Una vez que haya reflexionado hasta donde es su responsabilidad, se podrá liberar de culpas ajenas.',
    },
    {
      imagen1: this.imagen1 + 'espada8' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion: 'Escapar de la justicia, La astucia se usa para fines negativos y el consultante es inteligente, solo que se metió en problemas recientemente, de actividades relacionadas con drogas y sexo, así que para salvar su integridad física tuvo que huir. La reflexión es que el consultante entienda que huir no es la solución, y si debe asumir una consecuencia legal, es mejor hacerlo que vivir huyendo.',
    },
    {
      imagen1: this.imagen1 + 'espada8' + this.f,
      imagen2: this.imagen2 + 'espada3' + this.f,
      conjugacion: 'Inmadurez, Esta tirada está indicando al consultante que deje de actuar como un adolescente irresponsable y que es el momento de madurar; la carta está augurando que en breve el consultante se meterá en serios problemas, cayendo en la cárcel o en el hospital por su negligencia e inmadurez.',
    },
    {
      imagen1: this.imagen1 + 'espada8' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Juicio perdido, Esta tirada le advierte al consultante que en breve se verá involucrado en un juicio legal, lo que le aconseja esta combinación es que no interponga la demanda, ya que la parte contraria es una persona con poco escrúpulos que hará todo lo que esté en sus manos para hacer que el consultante pierda el juicio; y cuando esto suceda, no parará hasta ver muy mal al consultante.',
    },
    {
      imagen1: this.imagen1 + 'espada9' + this.f,
      imagen2: this.imagen2 + 'copa3' + this.f,
      conjugacion: 'Reconciliación, La persona de interés del consultante habría sido sincera y sufrió. Logran superar una serie de celos y desengaños, alcanzando la reconciliación. El consultante frecuentará personas y fiestas o eventos que le ayudarán a olvidar un poco sus preocupaciones.',
    },
    {
      imagen1: this.imagen1 + 'espada9' + this.f,
      imagen2: this.imagen2 + 'oro4' + this.f,
      conjugacion: 'Superación, La combinación de estas barajas sugiere guardarse los problemas para sí mismo. Se disiparán los miedos y dudas, de manera tal que se superará un mal momento. Mantener la calma es fundamental.',
    },
    {
      imagen1: this.imagen1 + 'espada9' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Resoluciones y comienzos, Esta conjugación sugiere y anuncia el abandono de los sentimientos de culpa. Al liberarnos de esta sensación, el consultante encontrará la oportunidad de solucionar aquello que le preocupa. Indica también la llegada de un nuevo amor.',
    },
    {
      imagen1: this.imagen1 + 'espada9' + this.f,
      imagen2: this.imagen2 + 'espada5' + this.f,
      conjugacion: 'Autoboicot, Cuando aparecen estas barajas juntas, nos hablan de un panorama bastante negativo. Por un lado, celos y envidias por doquier; por el otro, las acciones y actitudes del consultante le generan un profundo malestar, pero por alguna razón es incapaz de dejar de actuar de la manera en que lo hace. Señala también intenciones poco claras, ya sea del consultante o de alguien de su entorno, dependerá de las cartas que rodeen a estas dos.',
    },
    {
      imagen1: this.imagen1 + 'espada9' + this.f,
      imagen2: this.imagen2 + 'bastos9' + this.f,
      conjugacion: 'Inestabilidad, Esta combinación nos habla de miedos que posiblemente no tengan correlación con la realidad, con tristeza y una sensación de indefensión. El consultante se encuentra con una gran confusión e inseguridad respecto a sus sentimientos.',
    },
    {
      imagen1: this.imagen1 + 'espada9' + this.f,
      imagen2: this.imagen2 + 'espada8' + this.f,
      conjugacion: 'Bloqueos auto impuestos, Al presentarse esta conjugación, se confirma mucho de lo que hemos hablado a lo largo de este artículo: el consultante sufre bloqueos y se encuentra inmovilizado, a causa de sus propias preocupaciones y una profunda sensación de culpa.',
    },
    {
      imagen1: this.imagen1 + 'espada10' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion: 'Triunfo amoroso, Probablemente la relación del consultante se vea en crisis a causa de recelos, posiblemente infundados. El consejo que se brinda en esta combinación es tener valor para dialogar con la pareja, y de esta forma alcanzará la felicidad.',
    },
    {
      imagen1: this.imagen1 + 'espada10' + this.f,
      imagen2: this.imagen2 + 'copa10' + this.f,
      conjugacion: 'Amor audaz, Esta conjugación vaticina la llegada de una propuesta amorosa arriesgada; vendrá de la mano de una persona joven. Este amor romperá todas las fronteras y obstáculos posibles.',
    },
    {
      imagen1: this.imagen1 + 'espada10' + this.f,
      imagen2: this.imagen2 + 'asDeOro' + this.f,
      conjugacion: 'Buena oportunidad, Cuando aparece esta combinación, llegará una muy buena oportunidad de la cual desconfiará el consultante. El consejo es no mostrarse demasiado abierto y no apresurarse. De esta manera se le dará la oportunidad. Confía, el dinero llegará.',
    },
    {
      imagen1: this.imagen1 + 'espada10' + this.f,
      imagen2: this.imagen2 + 'espada5' + this.f,
      conjugacion: 'Egoísmos, Estas barajas, cuando aparecen juntas, hablan de una persona no sólo desconfiada y egoísta, sino carente de ética también. Anuncia también que se está planificando una venganza. Si esta combinación se refiere al consultante, es un llamado de atención a actuar de manera correcta.',
    },
    {
      imagen1: this.imagen1 + 'espada10' + this.f,
      imagen2: this.imagen2 + 'espada7' + this.f,
      conjugacion: 'Secretos, En esta conjugación vemos a una persona que posee un secreto muy peligroso, falsa y que se vende al mejor postor. Se recomienda al consultante ser precavido.',
    },
    {
      imagen1: this.imagen1 + 'espada10' + this.f,
      imagen2: this.imagen2 + 'bastos7' + this.f,
      conjugacion: 'Posibles engaños, Estas cartas son un llamado urgente a estar atentos y atender la intuición y los conocimientos previos que se tienen, ya que hay personas que quieren engañarnos.',
    },
    {
      imagen1: this.imagen1 + 'espada11' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      imagen3: this.imagen3 + 'oro3' + this.f,
      conjugacion: 'Triunfo, Cuando el Caballo de Espadas y el As de Oros aparecen juntos,  hablan de que se obtiene algo que se estaba buscando. El 3 de Oros delimita este triunfo, indicando que se trata específicamente de un asunto legal, un juicio ganado.',
    },
    {
      imagen1: this.imagen1 + 'espada11' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Regreso, Esta combinación anuncia el regreso de un ser querido. Puede o no ser una sorpresa para quien lo recibe de vuelta.',
    },
    {
      imagen1: this.imagen1 + 'espada11' + this.f,
      imagen2: this.imagen2 + 'oro8' + this.f,
      conjugacion: 'Dinero recuperado, Estas dos cartas señalan que una lucha por recuperar un dinero llega a su fin, y el dinero en cuestión por fin será devuelto o recuperado.',
    },
    {
      imagen1: this.imagen1 + 'espada11' + this.f,
      imagen2: this.imagen2 + 'bastos2' + this.f,
      imagen3: this.imagen3 + 'espada4' + this.f,
      conjugacion: 'Peligro laboral, Estas tres cartas advierten la necesidad de tener cuidado en el trabajo; existe la posibilidad de que haya un accidente o algún tipo de contagio de una enfermedad. También indica al peligro de tener un enfrentamiento con un compañero de trabajo, que traiga consigo consecuencias muy negativas para el consultante.',
    },
    {
      imagen1: this.imagen1 + 'espada11' + this.f,
      imagen2: this.imagen2 + 'copa2' + this.f,
      imagen3: this.imagen3 + 'espada2' + this.f,
      conjugacion: 'Accidente doméstico, Esta combinación es también una advertencia, que habla de la posibilidad de sufrir un accidente en casa. Aunque pudiera no ser grave, es necesario hacer las cosas con cuidado, en especial hablando del manejo de electrodomésticos y objetos punzo cortantes. Asimismo, no ser descuidado con los detalles, como caminar en una superficie mojada.',
    },
    {
      imagen1: this.imagen1 + 'espada11' + this.f,
      imagen2: this.imagen2 + 'bastos6' + this.f,
      imagen3: this.imagen3 + 'espada3' + this.f,
      conjugacion: 'Accidente en auto, La combinación advierte también de un accidente, solo que este se puede dar en el trayecto hacia el trabajo o en un viaje por motivos laborales. Por lo que hay que tener cuidado durante los desplazamientos que tengan que ver con temas de trabajo, incluso regresando a casa desde el mismo.',
    },
    {
      imagen1: this.imagen1 + 'espada12' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion: 'Amor leal, Esta combinación habla de un hombre distanciado de los sentimientos, que en cierta forma no cree en el amor y de pronto, se enamora, volviéndose no solo un hombre enamorado sino leal.',
    },
    {
      imagen1: this.imagen1 + 'espada12' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Nuevo comienzo, Estas dos cartas señalan que se siente una pasión enérgica por la vida, que servirá como impulso para tener un nuevo comienzo.',
    },
    {
      imagen1: this.imagen1 + 'espada12' + this.f,
      imagen2: this.imagen2 + 'oro9' + this.f,
      conjugacion: 'Logro alcanzado, Después de luchar con perseverancia y con la seguridad de que se va a lograr el objetivo, esta combinación indica que se logra lo que se buscaba. Muy probablemente exista un matrimonio con muy buena posición económica.',
    },
    {
      imagen1: this.imagen1 + 'espada12' + this.f,
      imagen2: this.imagen2 + 'bastos9' + this.f,
      imagen3: this.imagen3 + 'espada4' + this.f,
      conjugacion: 'Fuertes disgustos, En el ámbito laboral podría presentarse un periodo que trae consigo disgustos con socios o colaboradores. Es posible que la culpa sea tuya, pues has bajado el ritmo y la calidad de tu trabajo, cayendo en la mediocridad, lo que le disgusta a otras personas cuyo trabajo se relaciona con el tuyo, o a tus socios, en caso de compartir un negocio. Esta tirada te advierte la necesidad de no descuidar lo que haces, pues las consecuencias futuras podrían ser muy desagradables.',
    },
    {
      imagen1: this.imagen1 + 'espada12' + this.f,
      imagen2: this.imagen2 + 'espada3' + this.f,
      conjugacion: 'Mal augurio, La combinación de estas dos cartas habla de un proceso de tipo legal, en el cual se dará una sentencia desfavorable. No especifica si se refiere al consultante o a alguna persona cercana al mismo.',
    },
    {
      imagen1: this.imagen1 + 'espada12' + this.f,
      imagen2: this.imagen2 + 'espada11' + this.f,
      imagen3: this.imagen3 + 'espada9' + this.f,
      conjugacion: 'Accidente, La conjunción de estas cartas previene de un posible accidente. Por ello esta triada es una advertencia para estar alerta y hacer las cosas con cuidado, reduciendo los riesgos al mínimo posible.',
    },
    {
      imagen1: this.imagen1 + 'asDeBastos' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Buenas noticias, La primera carta de bastos, nos señala que de forma repentina que va a suceder algo, mientras que el As de Oros indica que se avecinan noticias favorables de forma inesperada para el consultante, por lo tanto es la llegada de buenas nuevas o que pueden traer alguna alegría, beneficio o éxito, sobretodo si se esta emprendiendo un proyecto o esperando una respuesta positiva a una situación específica.',
    },
    {
      imagen1: this.imagen1 + 'asDeBastos' + this.f,
      imagen2: this.imagen2 + 'bastos2' + this.f,
      conjugacion: 'Viaje inesperado, Esta combinación es una advertencia para el consultante, debido a que sin esperarlo tendrá que trasladarse fuera de la ciudad porque le llega alguna noticia del exterior, resolver algún problema o, simplemente por placer. Pero cualquiera que sea la razón, no estaba dentro de los planes del consultante realizar este viaje.',
    },
    {
      imagen1: this.imagen1 + 'asDeBastos' + this.f,
      imagen2: this.imagen2 + 'bastos3' + this.f,
      conjugacion: 'Muestras amorosas, Si estas cartas salen juntas, nos indican que llegará algún regalo de un ser querido. También puede que llegue a nuestra vida alguien a quien apreciaremos mucho o simplemente, señala la salida o reunión con un amigo muy apreciado o con la pareja sentimental del consultante.',
    },
    {
      imagen1: this.imagen1 + 'asDeBastos' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion: 'Robo, La combinación de estas cartas señala que se perderá algo, es decir, que habrá un hurto de algún objeto, dinero, tiempo, o que “te roban” tu estabilidad emocional. Una forma de definirlo con mayor precisión es observar las cartas que se encuentran alrededor para poder saber exactamente de qué clase de pérdida se está hablando. Cuando estas cartas salen juntas, señalan que es momento de soltar y dejar ir aquello que no puede permanecer en tu vida.',
    },
    {
      imagen1: this.imagen1 + 'asDeBastos' + this.f,
      imagen2: this.imagen2 + 'espada7' + this.f,
      conjugacion: 'Enfermedad, Esta combinación señala que de forma sorpresiva podría haber alguna enfermedad derivada del estrés o podría ser debido a un contagio infeccioso. Sí hay recuperación, pero el consultante debe cuidarse para que este padecimiento no se convierta en algo crónico o que dure mucho tiempo.',
    },
    {
      imagen1: this.imagen1 + 'asDeBastos' + this.f,
      imagen2: this.imagen2 + 'copa5' + this.f,
      conjugacion: 'Tristezas, El consultante o la persona por la que se pregunta dentro de la lectura, se entera de algo que le está generando mucha tristeza, pues las emociones se encuentran a flor de piel. Es importante saber que puede sentirse mal, pero que no se quede en ese estado para poder solucionar aquello que le aqueja.',
    },
    {
      imagen1: this.imagen1 + 'bastos2' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Entrada de dinero, Un viaje corto te hará conocer personas, conduciéndote hacia un nuevo camino que te dejará mucho dinero. Si eres emprendedor haz realidad tu sueño, tienes el empuje y el dinero, que te traerán buenas ganancias.',
    },
    {
      imagen1: this.imagen1 + 'bastos2' + this.f,
      imagen2: this.imagen2 + 'bastos7' + this.f,
      imagen3: this.imagen3 + 'asDEOro' + this.f,
      conjugacion: 'Reconocimientos, Esta combinación te está advirtiendo que aproveches un periodo para consolidar tu imagen pública. Si estás desempleado pide trabajo, seguramente causarás una muy buena impresión ya que tienes un gran magnetismo. No dudes en buscar nuevas oportunidades a través de las relaciones públicas o por medio de las redes sociales.',
    },
    {
      imagen1: this.imagen1 + 'bastos2' + this.f,
      imagen2: this.imagen2 + 'oro2' + this.f,
      conjugacion: 'Creatividad, Tal vez una nueva propuesta laboral esté llegando en breve a tu vida, no temas aceptarla, tiene buen auguro económico. Lo único que debes tener cuidado es que tus emociones no te traicionen. No será un trabajo fácil pero tú puedes desarrollarlo, solo debes concentrarte y mostrar quién eres.',
    },
    {
      imagen1: this.imagen1 + 'bastos2' + this.f,
      imagen2: this.imagen2 + 'bastos7' + this.f,
      imagen3: this.imagen3 + 'oro2' + this.f,
      conjugacion: 'Trabajo mal pagado, Te sientes harto de la situación que estás viviendo en el trabajo, el exceso te hace perder los nervios. La mala paga te provoca mal humor y la falta de reconocimiento te tiene desmotivado. Es momento de que evalúes la situación en el trabajo; el 2 de Bastos te pide ponerte en movimiento y encontrar una mejor opción.',
    },
    {
      imagen1: this.imagen1 + 'bastos2' + this.f,
      imagen2: this.imagen2 + 'copa4' + this.f,
      conjugacion: 'Amor fugaz, Te estás atreviendo a un coqueteo con alguien que recién conoces, lo cual puede terminar en un encuentro sexual que solo sea pasajero. Debes ser inteligente para cuando vuelvas a ver a la persona en el trabajo o en una reunión, pues actuará de manera indiferente ante ti y esto podría hacerte sentir mal.',
    },
    {
      imagen1: this.imagen1 + 'bastos2' + this.f,
      imagen2: this.imagen2 + 'espada11' + this.f,
      imagen3: this.imagen3 + 'espada4' + this.f,
      conjugacion: 'Peligro en el trabajo, Esta combinación te está advirtiendo que tengas cuidado en el trabajo, puedes sufrir un accidente laborar o contagiarte durante una jornada laboral. También puede hablar de un fuerte enfrentamiento con alguien, lo cual podría perjudicarte, dando un giro inesperado en tu vida.',
    },
    {
      imagen1: this.imagen1 + 'bastos3' + this.f,
      imagen2: this.imagen2 + 'copa4' + this.f,
      conjugacion: 'Cambio positivo, En esta combinación se puede augurar que aquello que se tiene en el momento no es lo que se espera, ya sea en la vida en general o bien en una relación, por lo que indica un cambio radical, que traerá cambios rápidos pero muy positivos a cualquier aspecto que se desee modificar.',
    },
    {
      imagen1: this.imagen1 + 'bastos3' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Productividad, Vienen negocios nuevos bastante productivos y abundantes, indicando una oportunidad extraordinaria en el ámbito laboral. Puede representar también la aparición de una persona que en lo sentimental se relacionará de manera totalmente inesperada.',
    },
    {
      imagen1: this.imagen1 + 'bastos3' + this.f,
      imagen2: this.imagen2 + 'oro11' + this.f,
      conjugacion: 'Amor estable, Augura la llegada de una persona con intenciones de un amor estable y duradero, aquello que se imagina para un futuro esta apunto de manifestarse.',
    },
    {
      imagen1: this.imagen1 + 'bastos3' + this.f,
      imagen2: this.imagen2 + 'espada3' + this.f,
      conjugacion: 'Ruptura, Indica aquellos planes que se tenían para el futuro que no salen bien, augurando alguna ruptura en una relación sentimental. Obstáculos y envidias a nivel laboral, proyectos que se truncan.',
    },
    {
      imagen1: this.imagen1 + 'bastos3' + this.f,
      imagen2: this.imagen2 + 'espada8' + this.f,
      conjugacion: 'Futuro incierto, Refleja un futuro inmediato donde probablemente no se encuentre el camino ideal, sintiéndote así atado de pies y manos, ya que no será posible tomar acción por sí mismo, o bien, teniendo mucha indecisión.',
    },
    {
      imagen1: this.imagen1 + 'bastos3' + this.f,
      imagen2: this.imagen2 + 'bastos9' + this.f,
      conjugacion: 'Ansiedad, Puede significar poca tranquilidad o bien inestabilidad en el futuro próximo, desconfianza en sí mismo o hacia los demás; lapsos tristes o de ansiedad de no saber qué va pasar.',
    },
    {
      imagen1: this.imagen1 + 'bastos4' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Viaje, Hace tiempo que estás soñando con un viaje y justo se ha alineado el universo, ahora tienes el tiempo y el dinero para realizarlo. En este viaje podrás experimentar nuevas oportunidades, puede surgir un cambio de casa por negocio.',
    },
    {
      imagen1: this.imagen1 + 'bastos4' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion: 'Amor pasional, Llega a tu vida un amor si previo aviso que te abraza el corazón, te llena de placeres, por lo que será un periodo de mucha felicidad. ¡Disfrútalo! Recomendación, vive el presente y no pienses cuándo terminará este amor, porque tú mismo estarás atrayendo el final. Además, las personas que están enamoradas comienzan un periodo de expansión económica, así que aprovéchalo.',
    },
    {
      imagen1: this.imagen1 + 'bastos4' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Seguridad laboral, En el trabajo estás pasando un buen momento, tu trabajo habla por ti, los jefes reconocen tu profesionalismo y todo está en paz. A pesar de que haya despidos o movimientos en tu empresa, esta combinación te indica que tu trabajo está asegurando. Pero evita confiarte, la combinación solo te da un respiro para que no te caigan de sorpresa los despidos que vienen.',
    },
    {
      imagen1: this.imagen1 + 'bastos4' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      imagen3: this.imagen3 + 'asDeEspadas' + this.f,
      conjugacion: 'Malas relaciones sexuales, Es posible que haya surgido un romance en la oficina, lo que comenzó como algo pasajero, se está volviendo una complicación para ti. Esta relación trae tristeza, desesperación y no existe compatibilidad sexual, por lo que te recomienda actuar de inmediato, sin miedo.',
    },
    {
      imagen1: this.imagen1 + 'bastos4' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion: 'Malos pensamientos, El libre albedrío es una elección, así que ten cuidado con emitir juicios, ya que tus frustraciones hablarán por ti. Investiga y reflexiona antes de que actúes ante alguna situación, sé un buen juez. Esta combinación te está advirtiendo que te vas a equivocar al tomar una decisión o que podrías enfrentar a alguien y quedar expuesto.',
    },
    {
      imagen1: this.imagen1 + 'bastos4' + this.f,
      imagen2: this.imagen2 + 'espada10' + this.f,
      conjugacion: 'Traición en el trabajo, Te cuidado con una mujer en el trabajo, debes estar atento porque hay una traición en puerta. Todo deriva de envidias, sé precavido con lo que comentas y de quién hablas, porque alguien vigila tus palabras y tus movimientos en la oficina. Reflexiona qué relación tienes con las mujeres de tu entorno profesional, porque es ahí donde podría estar la persona que te quiere perjudicar.',
    },
    {
      imagen1: this.imagen1 + 'bastos5' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Acuerdos beneficiosos, Cuando estas dos cartas se juntan, te indican que estás por negociar un acuerdo productivo, o cerca de poder cerrar un trato que te traerá muchos beneficios.',
    },
    {
      imagen1: this.imagen1 + 'bastos5' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Opulencia, Cuando esta combinación aparece en una lectura, te puede hablar de una persona con mucho dinero, o una situación en donde te encuentras rodeado de mucha opulencia. No necesariamente se refiere a que tú la obtendrás, sino que puede ser alguien cercano a ti.',
    },
    {
      imagen1: this.imagen1 + 'bastos5' + this.f,
      imagen2: this.imagen2 + 'bastos6' + this.f,
      conjugacion: 'Inicio de trabajo, Esta combinación le indica al consultante que está en un camino lento pero firme. Especialmente se refiere a una situación laboral, muy probablemente dentro de un trabajo en el cual el consultante recién se inicia y que traerá buenas recompensas con el tiempo.',
    },
    {
      imagen1: this.imagen1 + 'bastos5' + this.f,
      imagen2: this.imagen2 + 'espada6' + this.f,
      conjugacion: 'Despido, Cuando estas cartas aparecen juntas, anuncian un despido de trabajo inminente, especialmente para el consultante.',
    },
    {
      imagen1: this.imagen1 + 'bastos5' + this.f,
      imagen2: this.imagen2 + 'espada10' + this.f,
      imagen3: this.imagen3 + 'espada7' + this.f,
      conjugacion: 'Crisis laboral, Estas tres cartas juntas hablan de una fuerte crisis que está atravesando el consultante, por falta de trabajo.',
    },
    {
      imagen1: this.imagen1 + 'bastos5' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion: 'Daño a terceros, Esta combinación te indica que están intercediendo por una persona con la intención de dañar a un tercero.',
    },
    {
      imagen1: this.imagen1 + 'bastos6' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion: 'Reconocimiento de sentimientos, Estas dos cartas juntas son un indicador de que los sentimientos del consultante son reconocidos por las personas o una persona en especial.',
    },
    {
      imagen1: this.imagen1 + 'bastos6' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Fertilidad, La combinación de estas dos cartas anuncia que el consultante goza de buena salud y fertilidad, por si está buscando embarazarse. También indica la abundancia en la que vive el consultante o la buena racha que se aproxima a su vida.',
    },
    {
      imagen1: this.imagen1 + 'bastos6' + this.f,
      imagen2: this.imagen2 + 'oro7' + this.f,
      conjugacion: 'Viajes, Cuando estas dos cartas salen juntas son buenas noticias que anuncian que harás un viaje a corto plazo, que los planes de viajar se van a materializar próximamente. También puede indicar que te llegará un dinero extra, todo esto gracias a tu buen trabajo.',
    },
    {
      imagen1: this.imagen1 + 'bastos6' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion: 'Discusión, Si estas dos cartas aparecen en una lectura, es muy seguro que el consultante se haya involucrado en una discusión fuerte o que próximamente tendrá que enfrentar esta situación.',
    },
    {
      imagen1: this.imagen1 + 'bastos6' + this.f,
      imagen2: this.imagen2 + 'espada11' + this.f,
      imagen3: this.imagen3 + 'espada3' + this.f,
      conjugacion: 'Accidente en auto, Hay que tener precaución cuando esta combinación de cartas aparece en una lectura, ya que anuncia que el consultante pudiera sufrir un accidente de auto debido a un viaje de trabajo o en el trayecto rumbo a su trabajo.',
    },
    {
      imagen1: this.imagen1 + 'bastos6' + this.f,
      imagen2: this.imagen2 + 'espada6' + this.f,
      conjugacion: 'Decepciones, La combinación de estas cartas muestra que hay una situación que causa decepción al consultante, puede ser en temas de trabajo, pero también en cuanto a sus relaciones personales.',
    },
    {
      imagen1: this.imagen1 + 'bastos7' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Ascenso laboral, Esta combinación te dice que gracias al trabajo desempeñado, el consultante consigue un éxito fruto del trabajo diario. Le recomienda al consultante no dudar de su capacidad de desempeñar dicho trabajo, y no temer un cambio de puesto o aumento, aunque ésto signifique mayores responsabilidades.',
    },
    {
      imagen1: this.imagen1 + 'bastos7' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion: 'Trabajo social, Eres una persona interesada en los movimientos sociales y es un placer para ti hacer algo por los demás, así que tu trabajo te ha llevado a trabajar en una fundación o por una causa, lo cual te traerá satisfacción y dinero para ayudar a los demás. Un sueño que hoy debes hacer realidad y no dudar.',
    },
    {
      imagen1: this.imagen1 + 'bastos7' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Cambio de trabajo, Hay que tomar nuevos retos y buscar nuevas oportunidades laborales, tal vez no tienes la certeza de dónde buscar o pedir trabajo, es momento que comentes con tus colegas o familiares tus planes para encontrar un nuevo trabajo y en un futuro cercano tendrás la respuesta, confía y no dudes en irte a otro trabajo.',
    },
    {
      imagen1: this.imagen1 + 'bastos7' + this.f,
      imagen2: this.imagen2 + 'espada4' + this.f,
      conjugacion: 'Problemas, Debes cuidar qué comentas en el trabajo, ya sea sobre proyectos o cómo se realiza el trabajo, ya que hay gente mal intencionada que está escuchando atentamente para hacer chismes con los jefes y que quedes como una persona conflictiva y mentirosa, ten cuidado.',
    },
    {
      imagen1: this.imagen1 + 'bastos7' + this.f,
      imagen2: this.imagen2 + 'espada7' + this.f,
      imagen3: this.imagen3 + 'copa7' + this.f,
      conjugacion: 'Problemas con persona resentida, Has ganado fama gracias a tu trabajo, el éxito te rodea y esto ha atraído enemigos ocultos, gente cercana que no está tomando bien tu felicidad se siente enojada por que siente que le robaste el triunfo. Ten cuidado con la gente de tu entorno laboral, ya que a través de chismes pueden opacar tus esfuerzos.',
    },
    {
      imagen1: this.imagen1 + 'bastos7' + this.f,
      imagen2: this.imagen2 + 'espada3' + this.f,
      imagen3: this.imagen3 + 'copa2' + this.f,
      conjugacion: 'Triángulo amoroso, Esta combinación habla de tener cuidado con las personas con las que te relacionas. Alguien puede estar deseando a tu pareja, queriendo incluso causar conflictos que te lleven a la ruptura para poder acercarse al otro.',
    },
    {
      imagen1: this.imagen1 + 'bastos8' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Ayuda en las cargas, La lectura de esta combinación es muy buena, ya que se tiene la ayuda del exterior para salir adelante, la ayuda llega aún sin pedirla, así que tu reacción será positiva ante el conflicto.',
    },
    {
      imagen1: this.imagen1 + 'bastos8' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion: 'Creatividad, El consultante no debe dudar de su capacidad ya que es una persona creativa e innovadora que sigue su intuición y tiene el éxito asegurado, ya que lo que se hace desde lo auténtico no tiene comparación. Cuando aparece una tirada en tu vida es momento de tomar cursos para actualizar tu conocimiento y sacarle provecho a tus habilidades.',
    },
    {
      imagen1: this.imagen1 + 'bastos8' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Responsabilidades, Es momento de tomar nuevas responsabilidades en nuestra vida, tal vez de inicio nos cause ansiedad o miedo. Lo que te pide esta combinación es que te centres en esta nueva realidad y reacomodes tu vida, una vez que aceptes qué es lo que sucede y fluyas, se hará más fácil salir adelante, de lo contrario solo sufrirás.',
    },
    {
      imagen1: this.imagen1 + 'bastos8' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion: 'Asuntos que se evitan con astucia, Esta tirada está advirtiendo al consultante que puedes ser víctima de una trampa, ya que se puede generar una discusión donde pierdas los estribos y digas cosas que puedan usarse en tu contra. Por miedo a no quedar mal ante los jefes, puedes ser víctima de chantajes.',
    },
    {
      imagen1: this.imagen1 + 'bastos8' + this.f,
      imagen2: this.imagen2 + 'espada6' + this.f,
      conjugacion: 'Disgustos fuertes, En el trabajo se avecina una etapa de fuertes disgustos con compañeros de trabajo, ya sea por diferencias en el trabajo, o bien, porque tu pasividad ha provocado que tu trabajo caiga en la mediocridad y los compañeros de alrededor no están de acuerdo con tu actuar, así no descuides tu trabajo, sino tendrán motivos para despedirte.',
    },
    {
      imagen1: this.imagen1 + 'bastos8' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      imagen3: this.imagen3 + 'oro8' + this.f,
      conjugacion: 'Bajo perfil, Para el consultante es un buen periodo donde todo lo que haga será exitoso y los jefes lo apoyarán. Sin embargo, con esto se presenta una tendencia de alardear dentro del lugar de trabajo, lo cual generará envidias y esto puede generar chismes con mala intención, ideados para perjudicar al consultante y que pierda el apoyo de los superiores.',
    },
    {
      imagen1: this.imagen1 + 'bastos9' + this.f,
      imagen2: this.imagen2 + 'asDeOro' + this.f,
      conjugacion: 'Suerte, Puede referirse a la suerte que te puedas encontrar en un país extranjero, gracias a alguna buena conexión con algún trabajo o negocio que estará prosperando a favor tuyo, trayendo equilibrio y expansión para tu vida en general. Indica también estabilidad para poder habitar en el extranjero.',
    },
    {
      imagen1: this.imagen1 + 'bastos9' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion: 'Familia, Es una combinación llena de sorpresas ya que augura la adopción de un hijo. Situaciones en el ámbito sentimental y de la familia que se ven favorecedoras al darte oportunidades para hacer conexión con una persona y comenzar una familia. Incluso indica beneficios para tus padres gracias a ti.',
    },
    {
      imagen1: this.imagen1 + 'bastos9' + this.f,
      imagen2: this.imagen2 + 'bastos12' + this.f,
      conjugacion: 'Socios, Habla de un buen momento para asociarse con personas y generar un nuevo negocio. También señala un momento próspero en el dinero, que atrae grandes ofertas con un futuro muy prometedor. Indica también la creación de una sociedad con muchos miembros que serán de entera confianza y muy sólidos.',
    },
    {
      imagen1: this.imagen1 + 'bastos9' + this.f,
      imagen2: this.imagen2 + 'espada9' + this.f,
      conjugacion: 'Presiones, Refiere una advertencia para el consultante con referencia a las personas que le rodean en el trabajo o lo laboral, indicando presión psicológica por parte de los colaboradores. Representando peligro al no permitir el libre desenvolvimiento de actividades simples, afectando la forma de trabajar.',
    },
    {
      imagen1: this.imagen1 + 'bastos9' + this.f,
      imagen2: this.imagen2 + 'espada12' + this.f,
      imagen3: this.imagen3 + 'espada4' + this.f,
      conjugacion: 'Fuertes disgustos, Es posible que en el trabajo inicie una etapa de fuertes disgustos con socios o colaboradores de un negocio en común. Éstos pueden ser de tipo legal, ya sea por diferencias o bien, porque tu baja energía ha provocado que tu trabajo caiga en mediocridad, provocando que los otros no estén de acuerdo con la manera en la que se lleva el negocio. Toma en cuenta que es un aviso de un futuro cercano, por lo que el consejo a seguir será no descuidar tu trabajo.',
    },
    {
      imagen1: this.imagen1 + 'bastos9' + this.f,
      imagen2: this.imagen2 + 'bastos10' + this.f,
      imagen3: this.imagen3 + 'espada3' + this.f,
      conjugacion: 'Traidor, Esta conjunción deberá alertarte de una persona en tu entorno laboral, la cual probablemente este engañando o robando dentro de tu empresa o cerca de ti. Cuidado, ya que las malas intenciones de esta persona pudieran afectarte de manera indirecta. Será mejor tener cuidado con las acciones que realicen algunos compañeros de trabajo, así como con los documentos que firmas, evitando caer en situaciones comprometedoras.',
    },
    {
      imagen1: this.imagen1 + 'bastos10' + this.f,
      imagen2: this.imagen2 + 'bastos2' + this.f,
      conjugacion: 'éxito en tus proyectos, Cuando sale esta combinación de cartas nos indica que el consultante está muy implicado y comprometido en algún proyecto. Puede parecer ambicioso su objetivo, pero aquí se aconseja mantener una buena comunicación con las partes implicadas, para alcanzar el logro decisivo.',
    },
    {
      imagen1: this.imagen1 + 'bastos10' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Buenas noticias, Tanto la Sota como el As de Bastos nos hablan de comienzos, movimientos y novedades, por lo tanto, esta combinación de cartas es una clara señal de que  todo marchará por el curso deseado. Recibiremos buenas y esperadas noticias, posiblemente del extranjero. Si el consultante se encuentra preparándose para rendir exámenes, los aprobará. En cuanto al amor, señala la presencia de un pretendiente dispuesto a luchar por quien consulta.',
    },
    {
      imagen1: this.imagen1 + 'bastos10' + this.f,
      imagen2: this.imagen2 + 'copa9' + this.f,
      conjugacion: 'Comienzos felices, Esta combinación indica triunfo. Obtendremos el trabajo de nuestros sueños, así como las relaciones deseadas, tanto en amor como en amistades.',
    },
    {
      imagen1: this.imagen1 + 'bastos10' + this.f,
      imagen2: this.imagen2 + 'bastos4' + this.f,
      imagen3: this.imagen2 + 'bastos5' + this.f,
      conjugacion: 'Ruptura, Esta combinación nos habla de una relación de pareja que, si bien se muestra en el presente como formal y estable con el 4 de Copas, el 5 de Bastos indica que en los próximos meses sufrirá una ruptura, que puede ser o no temporal.',
    },
    {
      imagen1: this.imagen1 + 'bastos10' + this.f,
      imagen2: this.imagen2 + 'espada2' + this.f,
      conjugacion: 'Celos, Aquí podemos observar la presencia de una tercera persona en discordia que daña la relación. También nos habla de celos y de una ruptura.',
    },
    {
      imagen1: this.imagen1 + 'bastos10' + this.f,
      imagen2: this.imagen2 + 'oro5' + this.f,
      conjugacion: 'Pérdidas, Esta combinación indica oportunidades perdidas. También crisis y posibles rupturas en relaciones recientes.',
    },
    {
      imagen1: this.imagen1 + 'bastos11' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Ascenso laboral, A través de una llamada telefónica pueden llegar buenas noticias sobre un ascenso laboral que traerá felicidad para ti, solo que fíjate muy bien cuando pase la emoción sobre las condiciones del trabajo, ya que podría implicar un traslado a otra ciudad o país. Aunque al principio te parezca algo abrupto que implique muchos cambios en tu vida, debes tener la certeza que tú puedes lidiar con este reto y al final todo saldrá bien.',
    },
    {
      imagen1: this.imagen1 + 'bastos11' + this.f,
      imagen2: this.imagen2 + 'bastos6' + this.f,
      conjugacion: 'Viajes por trabajo, Una muy buena oportunidad se presenta en tu trabajo o empresa, para viajar por trabajo, ya que te traerá buenas ganancias económicas, nuevos clientes y conocimientos para la actividad a la que te dedicas. Considera que podrías estar descuidando tu relación, si la tienes, y tal vez es momento de poner en la balanza a qué pondrás mayor atención y ser claro con tu pareja.',
    },
    {
      imagen1: this.imagen1 + 'bastos11' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Ganancias económicas, Sin esperarlo llega una ganancia extra de dinero que te alegrará mucho, no es por un golpe de suerte, es más bien un bono o recompensa por tu buen trabajo, un reconocimiento a tu dedicación que no esperabas pero que te viene muy bien. O tal vez puede ser que si te dedicas al turismo o tu empresa tiene que ver con extranjeros, viene un pago extra por tu buen servicio en divisas extranjeras.',
    },
    {
      imagen1: this.imagen1 + 'bastos11' + this.f,
      imagen2: this.imagen2 + 'espada9' + this.f,
      conjugacion: 'Trabajo que no se concreta, Esta tirada está alertando que el consultante recibirá una llamada telefónica o mensaje de texto, donde le notifican que el proyecto en el que habías puesto tanta fe, no se llevará a cabo o no autorizaron tu contratación; por lo que traerá a la vida del consultante desesperación y frustración.',
    },
    {
      imagen1: this.imagen1 + 'bastos11' + this.f,
      imagen2: this.imagen2 + 'espada11' + this.f,
      imagen3: this.imagen3 + 'espada12' + this.f,
      conjugacion: 'Accidente laboral, Esta tirada le está advirtiendo al consultante de tener cuidado ya que está anunciando accidente en un vehículo de la empresa en horario de trabajo, así que como tendrá implicaciones legales, deberás tener todos tus papeles en orden, seguir las reglas y ser prudente, de lo contrario la justicia estará en tu contra y a favor de la empresa.',
    },
    {
      imagen1: this.imagen1 + 'bastos11' + this.f,
      imagen2: this.imagen2 + 'espada8' + this.f,
      conjugacion: 'Enfermedad grave, Cuando de salud se trata siempre es recomendable acudir con los especialistas, solo que esta combinación te está advirtiendo de que sufrirás una grave enfermedad o lesión, por imprudencia, por lo que es recomendable que tomes medidas de seguridad adecuada en las actividades que puedan ponerte en riesgo.',
    },
    {
      imagen1: this.imagen1 + 'bastos12' + this.f,
      imagen2: this.imagen2 + 'asDEOro' + this.f,
      conjugacion: 'Ganancias en los negocios, Cuando aparece esta combinación se tiene el éxito asegurado. Por un lado llega el dinero no por azar, sino porque el proyecto es sólido y se está acreditando muy bien en el medio. Solo te está advirtiendo que busques a un consejero, asesor o guía, para que se den nuevas oportunidades de negocio y puedas expandirte.',
    },
    {
      imagen1: this.imagen1 + 'bastos12' + this.f,
      imagen2: this.imagen2 + 'asDeCopas' + this.f,
      conjugacion: 'Ayuda desinteresada, Si el consultante es un hombre o mujer joven y se acerca una persona mayor, con poder adquisitivo y ofreciendo ayuda, tal vez surja una duda sobre qué va a pedir a cambio. Pero en esta ocasión será una ayuda desinteresada que podría traerte muchos beneficios. No tengas miedo de hacer preguntas, poner límites y condiciones  y dejar en claro todo lo que se ofrece y cómo se ofrece. En especial si hay dinero de por medio, ya que un éxito y cuando empiece a generar ganancias puede haber complicaciones.',
    },
    {
      imagen1: this.imagen1 + 'bastos12' + this.f,
      imagen2: this.imagen2 + 'asDeBastos' + this.f,
      conjugacion: 'Triunfo empresarial, Pronto llegará una noticia que hará muy feliz al consultante con respecto al éxito de su negocio, tal vez esto lo consultante porque no se esperó que en poco tiempo todo le resultará perfecto. La combinación te dice que es necesario buscar un consejo de un hombre experimentado en los negocios y que consolide el éxito, para mantenerse en el gusto del público al que se dirige el negocio.',
    },
    {
      imagen1: this.imagen1 + 'bastos12' + this.f,
      imagen2: this.imagen2 + 'asDeEspadas' + this.f,
      conjugacion: 'Lucha de poderes, Tal vez el consultante, si es un hombre joven, esté pasando por un momento de tensión con un superior, que es un hombre mayor, porque cada uno quiere tener la razón. Por lo tanto, el hombre mayor habla desde la experiencia y el joven desde la innovación. Tal vez si ambos ceden en el ego, pueden llegar a un acuerdo sacando lo mejor desde el punto de vista de cada uno.',
    },
    {
      imagen1: this.imagen1 + 'bastos12' + this.f,
      imagen2: this.imagen2 + 'copa6' + this.f,
      conjugacion: 'Romance con consecuencias, La baraja nos dice que un hombre maduro encontrará una mujer joven que se interese por él. Como ha pasado tiempo solo, al principio dudará, pero con el paso del tiempo se convencerá que le corresponde ser feliz. Lo único que te pide la carta es que seas cauteloso e investigues por tu cuenta a la mujer en cuestión, ya que sus intenciones no son sentimentales, sino económicas.',
    },
    {
      imagen1: this.imagen1 + 'bastos12' + this.f,
      imagen2: this.imagen2 + 'espada8' + this.f,
      conjugacion: 'Ruina económica, Hombre de edad adulta que decide buscar nuevas oportunidades para invertir una parte de su capital económico construido con los años. Está pecando de soberbia y piensa que nadie podrá estafarlo, así que no toma las precauciones necesarias. Por tanto, te pide cautela y revisar todos los documentos que se firmen, ya que te está advirtiendo un fraude.',
    },
  ];

  getPrediccion() {
    return this.predicciones;
  }
}

