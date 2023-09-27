import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  respuesta1: string = '';
  respuesta12: string = '';
  respuesta13: string = '';
  respuesta14: string = '';
  respuesta2: string = '';
  respuesta22: string = '';
  respuesta23: string = '';
  respuesta24: string = '';
  respuesta3: string = '';
  respuesta32: string = '';
  respuesta33: string = '';
  respuesta34: string = '';
  respuesta4: string = '';
  respuesta42: string = '';
  respuesta43: string = '';
  respuesta44: string = '';
  respuesta5: string = '';
  respuesta52: string = '';
  respuesta53: string = '';
  respuesta54: string = '';
  respuesta6: string = '';
  respuesta62: string = '';
  respuesta63: string = '';
  respuesta64: string = '';

  opcionesSeleccionadas = {
    opcion1: '',
    opcion2: '',
    opcion3: '',
    opcion4: '',
    opcion5: '',
    opcion6: '',
  };

  opcion1: string = '';
  opcion2: string = '';
  opcion3: string = '';
  opcion4: string = '';
  opcion5: string = '';
  opcion6: string = '';
  elegir = [
    'As de oros',
    'oro 02',
    'oro 03',
    'oro 04',
    'oro 05',
    'oro 06',
    'oro 07',
    'oro 10',
    'oro 11',
    'oro 12',
    'As de copas',
    'copa 02',
    'copa 03',
    'copa 04',
    'copa 05',
    'copa 06',
    'copa 07',
    'copa 10',
    'copa 11',
    'copa 12',
    'As de bastos',
    'bastos 02',
    'bastos 03',
    'bastos 04',
    'bastos 05',
    'bastos 06',
    'bastos 07',
    'bastos 10',
    'bastos 11',
    'bastos 12',
    'As de espadas',
    'espada 02',
    'espada 03',
    'espada 04',
    'espada 05',
    'espada 06',
    'espada 07',
    'espada 10',
    'espada 11',
    'espada 12',
  ];
  terminoBusqueda1: string = '';
  terminoBusqueda2: string = '';
  terminoBusqueda3: string = '';
  terminoBusqueda4: string = '';
  terminoBusqueda5: string = '';
  terminoBusqueda6: string = '';

  cambiarNegativo: boolean = true;
  cambiarPositivo: boolean = false
  cambiarNegativo2: boolean = true;
  cambiarPositivo2: boolean = false
  cambiarNegativo3: boolean = true;
  cambiarPositivo3: boolean = false
  cambiarNegativo4: boolean = true;
  cambiarPositivo4: boolean = false
  cambiarNegativo5: boolean = true;
  cambiarPositivo5: boolean = false
  cambiarNegativo6: boolean = true;
  cambiarPositivo6: boolean = false

  toggleResponses() {
    this.cambiarNegativo = !this.cambiarNegativo
    this.cambiarPositivo = !this.cambiarPositivo
  }
  toggleResponses2() {
    this.cambiarNegativo2 = !this.cambiarNegativo2;
    this.cambiarPositivo2 = !this.cambiarPositivo2;
  }
  toggleResponses3() {
    this.cambiarNegativo3 = !this.cambiarNegativo3;
    this.cambiarPositivo3 = !this.cambiarPositivo3;
  }
  toggleResponses4() {
    this.cambiarNegativo4 = !this.cambiarNegativo4;
    this.cambiarPositivo4 = !this.cambiarPositivo4;
  }
  toggleResponses5() {
    this.cambiarNegativo5 = !this.cambiarNegativo5;
    this.cambiarPositivo5 = !this.cambiarPositivo5;
  }
  toggleResponses6() {
    this.cambiarNegativo6 = !this.cambiarNegativo6;
    this.cambiarPositivo6 = !this.cambiarPositivo6;
  }


  asDEOro: string =
    'AS DE OROS, CARTA POSITIVA: En poco tiempo gozarás de un periodo de mucha felicidad, durante el cual llegará la abundancia, ya sea derivada del trabajo o por una ayuda inesperada.';
  asDeorosAMOR: string =
    'SIGNIFICADO AMOR: Es un periodo de gran felicidad para la pareja a tal grado que haya boda o unión, si la pareja lleva varios años juntos, habrá un renacer del amor.';
  asDeorosDINERO: string =
    'SIGNIFICADO DINERO: La riqueza material puede llegar en forma de regalo, por aumento de sueldo o bien, por un premio en el azar.';
  asDeorosINVERTIDA: string =
    'CARTA INVERTIDA te está previniendo de estafas o abuso de confianza por parte de un hombre joven que es tu amigo, o que está en el círculo de amigos, ya que es un momento donde tienes la guardia baja. Esto porque te sientes contento, feliz y pleno, y no estás alerta, así que ten cuidado. No es momento de comenzar nada nuevo, ni emprender un negocio por muy bueno que se escuche.';
  oro2: string =
    'ORO 02 CARTA NEGATIVA: Esta carta es un augurio de contratiempos, dificultades, problemas y situaciones que se aplazan. Es importante mantenerse alerta, pues es en los momentos de inestabilidad donde conviene tener paciencia y esperar a que pase la racha, No realices proyectos próximamente, ya que te encuentras en una situación inestable. Además, es recomendable que te mantengas alerta, pues podrían existir celos de una tercera persona en discordia, o competencias y rivalidades, de las cuales es necesario que te cuides.';
  oro2AMOR: string =
    'SIGNIFICADO AMOR: Advierte al consultante que pudiera estar experimentando una relación, un sentimiento o una atracción física que es fingida y no es real. El consultante pudiera ser incapaz de reconocer el amor verdadero. También es un indicador que pudiera existir una tercer persona que quiere entrometerse en tu relación de pareja. No quiere decir que el consultante o su pareja sean infieles, sino que otra persona interferirá entre los dos.';
  oro2DINERO: string =
    'SIGNIFICADO DINERO: Advierte acerca de hacer inversiones de dinero o negocios en los lugares equivocados. También que el consultante pudiera encontrarse con ciertos inconvenientes o interferencias de otras personas, para lograr sus objetivos financieros';
  oro2INVERTIDA: string =
    'El lado negativo del 2 de Oros, principalmente cuando sale invertido, augura un tiempo de exceso de trabajo, el cual traerá una temporada de estrés, ansiedad y otros malestares asociados a esta situación. También, el consultante pudiera pasar por un momento complicado para poder administrar sus finanzas y pagar sus deudas. Esto pudiera haber sucedido por haber hecho gastos innecesarios que dejaron a la persona con serios problemas económicos. La codicia por ganar más dinero o hacer más dinero, también puede ser un detonante para que la salud del consultante se deteriore, pues está únicamente enfocado a trabajar y no cuida su salud física. Estar tanto tiempo en el trabajo hará que descuide también a su familia, amigos o pareja. Es importante revisar si el consultante no tiene una relación de apego con el dinero y los bienes materiales. Esta actitud puede traer varios problemas como discusiones con la pareja, hasta un derroche extremo de dinero, si es que el consultante se siente “estable económicamente”. En cuestiones del amor, el consultante pudiera estar en una relación donde está invirtiendo tiempo y dinero de más, sin pensar en otras áreas de su vida que también son importantes. Un ejemplo es tratar de comprar el afecto de una persona especial. Es muy probable que esta sea una relación motivada únicamente por interés, y que los sentimientos de la pareja no sean reales.';
  oro3: string =
    'ORO 03 CARTA POSITIVA: Habla de las recompensas que se obtiene, gracias al gran trabajo realizado. Estas recompensas pueden venir de muchas formas y direcciones: pueden ser hijos, un aumento de sueldo, un mejor puesto de trabajo, adquirir un terreno, un premio etc, es augurio de buena fortuna. Todo lo que realices y trabajes con mucho ímpetu, dará muy buenos frutos. Todos tus proyectos o emprendimientos serán exitosos en cualquier aspecto de tu vida.';
  oro3AMOR: string =
    'SIGNIFICADO AMOR: Te tiene un mensaje muy positivo. Cuando aparece en una lectura, habla de la unión y confianza mutua que existe en la pareja, tanto en lo sentimental como en lo sexual. Gracias al trabajo en equipo y el apoyo constante, esta pareja obtendrá una gran recompensa, ya sea que busquen embarazarse, mejorar su situación económica, cambiarse de casa, etc.';
  oro3DINERO: string =
    'SIGNIFICADO DINERO: Te indica que próximamente obtendrás grandes reconocimientos, que no serán remunerados económicamente en sí. A pesar de que no augura que llegará más dinero a tu vida, habrá ayuda que te mantendrá a flote.';
  oro3INVERTIDA: string =
    'CARTA INVERTIDA desafortunadamente no trae muy buenos augurios. En esta posición la carta nos anuncia que podemos perder dinero, pero especialmente surgirán problemas en el lugar del trabajo del consultante, debido a la falta de cooperación de los jefes o los propios compañeros. También pudiera presentarse una persona que busca intimidar al consultante en el trabajo En general, el 3 de oros nos anuncia competencia y deslealtad, que si no se toma en cuenta y se ataca en ese justo momento, puede traer graves consecuencias, especialmente pérdida de dinero. Otras situación que nos muestra este naipe, es que pudiéramos involucrarnos con las personas incorrectas y todo el esfuerzo y empeño que pusimos para sacar adelante nuestros proyectos, se puede ir por la borda. Hay que tener precaución con esta carta inversa, ya que nos anuncia también depresión, pereza, malas elecciones, problemas por querer hacer las cosas con prisa, caer en la mediocridad y falta de madurez para tomar decisiones. Este es un buen momento para recomendar al consultante que es tiempo de entrar en acción y no dormirse en sus laureles, ya que si no toma medidas para contrarrestar la situación en la que se encuentra, las consecuencias serán muy grandes.';
  oro4: string =
    'ORO 04 CARTA POSITIVA: Es una carta muy positiva que augura el éxito y la prosperidad, sobre todo en lo estrictamente material. Favorable para los negocios y lo laboral. es el indicio de una situación estable y de economía próspera, lo cual trae bienestar. También sirve de advertencia para saber que todo el materialismo en extremo, es avaricia.';
  oro4AMOR: string =
    'SIGNIFICADO AMOR: Indicativo de una relación de amistad, de posible matrimonio por interés económico en ambas partes. Habla de una familia bastante numerosa, incluso si no hay amor en la pareja. Así como también búsqueda desesperada de la verdadera pareja.';
  oro4DINERO: string =
    'SIGNIFICADO DINERO: Habla de una buena rentabilidad económica; ahorros exagerados pero constructivos. Advierte un posible apego con el dinero y todo lo material.';
  oro4INVERTIDA: string =
    'CARTA INVERTIDA puede ser una invitación a invertir energía y tiempo en las relaciones personales. Ya que su parte oscura puede indicar que únicamente se desean bienes materiales, olvidando el amor o el alma, convirtiéndose en una persona codiciosa o posesiva. Por lo que antes de que todo se pierda, será bueno desprenderse del apego emocional e insano hacia el dinero. Esta carta advierte de los apegos que probablemente se han tenido a lo largo de la vida, por lo que la obsesión por alguno de ellos puede haber provocado una transformación que no es tan buena. El Cuatro de Oros de la Baraja Española, destaca claramente el riesgo asociado a la codicia, puede ser la búsqueda de una situación de estabilidad económica. Aunque el dinero es algo que la mayoría anhela, en una tirada mal aspectada, la aparición de esta carta puede indicar la pérdida de todo lo verdaderamente importante. El naipe hace una invitación al cambio hacia la benevolencia, afecto, amistad y amor. La carta estando invertida y teniendo en cuenta las cartas que acompañan la tirada, puede anunciar también algunos desórdenes importantes, soluciones que no llegan, o bien, problemas con la ley que pueden terminar incluso en un arresto.';
  oro5: string =
    'ORO 05 CARTA NEGATIVA: Es una carta que indica que las recompensas se encuentran en un momento de producción, donde aún no se es visible el resultado final. Es momento de que se evalúen cuidadosamente asuntos financieros y de trabajo, para que se determinen verdaderas prioridades.';
  oro5AMOR: string =
    'SIGNIFICADO AMOR: Habla de un buen inicio en las relaciones sentimentales donde la pareja o el consultante tendrá la disposición de sobre llevar los obstáculos que se presenten.';
  oro5DINERO: string =
    'SIGNIFICADO DINERO: Puede ser una carta no tan positiva para el dinero, ya que se prevén perdidas en caso de no saber manejar las prioridades financieras.';
  oro5INVERTIDA: string =
    'CARTA INVERTIDA Posiblemente la carta cuente con una dimensión negativa más amplia que su antecesor, el 4 de Oros, ya que comienza como un número impar, lo que refleja un revés de la fortuna; un mal en la salud; un estafador; una pérdida material o bien, una depresión. Es posible que rompa con la armonía y señale riesgos de tipo espiritual, pérdidas emocionales, de empleo y financieras. Es así como el 5 de oros señala dificultades que van de la mano más que nada con la dimensión económica y, que de acuerdo a las cartas que estén a su alrededor, abarca también la dimensión interpersonal, para advertir sobre desamores, insatisfacciones o que simplemente, que es hora de buscar nuevos caminos. Puede ser la señal de la riqueza económica, pero indica también pérdida de la autoestima y los afectos por falta de dinero, siendo una consecuencia evidente. Esto puede revelar el sentimiento de soledad, abandono, desolación e incomprensión, o incluso exclusión de la sociedad. Anuncia temporadas delicadas que por suerte suelen ser pasajeras. Habla de la llegada de carencias, que motivan la búsqueda de alternativas para hacer frente a las dificultades; cambios inevitables y repentinos que modifican las perspectivas y las prioridades dentro de la toma de decisiones. En cuanto a la relaciones de pareja, denota insatisfacción, tristeza y abandono.Aunque normalmente el palo de oros habla de ganancia, este es uno de los pocos casos en los cuales los oros serán un gasto.';
  oro6: string =
    'ORO 06 CARTA POSITIVA: Habla de las dificultades o de los obstáculos que hay que pasar para poder alcanzar el éxito que llega con ser generoso con los demás,  significa prosperidad. Debes ser bondadoso con todos para lograr tu propio equilibrio. Anuncia la recompensa que se tiene por ser comprensivo con los demás.';
  oro6AMOR: string =
    'SIGNIFICADO AMOR: Es muestra de equilibrio y armonía, en el amor se cuenta con bases sólidas que vienen desde la generosidad. Puede hablar de compromiso o matrimonio.';
  oro6DINERO: string =
    'SIGNIFICADO DINERO: Habla de recibir ganancias que ya se daban por perdidas, momento excelente para solicitar un préstamo y buen nivel económico. ';
  oro6INVERTIDA: string =
    'CARTA INVERTIDA Esta carta puede revelar que la persona tiene poco interés por los hijos. En términos de salud, indica alerta, ya que por alguna negligencia médica puede llegar a perder la vida. En el amor representa los celos enfermizos. Puede presentar un estado de ánimo bipolar e inestabilidad en la mente. Si se esta en pareja se podría estar presentando un poco de desarmonía a causa de que uno de los dos probablemente esté dando más que el otro; adicionalmente se tendría que revisar si hay alguna manifestación de dependencia o de envidia que pudieran estar alterando la relación. Esta carta aconseja no arriesgar demasiado con el dinero. También podríamos encontrarnos viviendo dificultades económicas. En el dinero, puede revelar evasión de impuestos o estafa a los empleados. Es definitivamente un llamado para que el consultante revise sus finanzas y deje de gastar más de lo que en realidad puede permitirse. Es un momento para cambiar prioridades ya que en caso de no planificar o administrar, puede que a largo plazo se tengan profundas crisis de dinero. Es posible que también sea una advertencia de que se debe medir un poco la generosidad, ya que otros podrían estar aprovechándose de ello y, por ejemplo, no regresar el dinero que con tanto cariño se ha prestado. Esta carta es el aviso, como un mensajero, que invita a no permitir que el orgullo se interponga a la hora de aceptar alguna ayuda de los demás.';
  oro7: string =
    'ORO 07 CARTA POSITIVA: La suerte aparecerá en tu vida, sin esperarlo y con gran satisfacción para tu vida. trae recompensas inesperadas para ti, lo cual se traduce en bienes materiales que traen felicidad';
  oro7AMOR: string =
    'SIGNIFICADO AMOR: No sientas inseguridad en hablar con la persona que te gusta, ya que solo estás pensando cosas negativas que te impiden comenzar una relación que traerá mucha felicidad a tu vida.';
  oro7DINERO: string =
    'SIGNIFICADO DINERO: Viene una ayuda inesperada para ti en el ámbito económico, que traerá tranquilidad a tu vida.';
  oro7INVERTIDA: string =
    'CARTA INVERTIDA Esta carta puede traer frustración ante una situación inesperada, así que invita a tomar las cosas lo mejor que se pueda de una situación negativa, que la evalúe y saque una enseñanza positiva. Eso se llama madurez y es lo que le está pidiendo esta carta al consultante, que madure. La carta al revés se vuelve negativa si el consultante no actúa con pericia, porque no es capaz de adaptarse a los cambios que la vida trae y le teme a lo desconocido.';
  oro10: string =
    'ORO 10 CARTA POSITIVA: @símbolo de comienzos, intelectuales; se asocian a la introspección y la consciencia como base de tu personalidad@.  anuncia buenas noticias, posiblemente en los estudios y en el trabajo Planifica atentamente tus proyectos y sostén el entusiasmo que tienes por tus sueños. Amplía tus horizontes en cuanto al estudio, invierte tu tiempo en capacitarte más, aún si no se trata de algo material o estudios formales.';
  oro10AMOR: string =
    'SIGNIFICADO AMOR: Indica el comienzo de una relación estable y exitosa. si tienes pareja, puede que se haya apagado un poco la chispa. Te invita a no preocuparte, es sólo cuestión de darle un nuevo impulso. Para los solteros, señala la aparición de una persona emprendedora y racional, relacionada al ámbito laboral o de los estudios.';
  oro10DINERO: string =
    'SIGNIFICADO DINERO:Nos habla de recompensas, especialmente cuando pones mucho esfuerzo y dedicación en tu trabajo. El dinero llegará producto de la constancia, no por medio del azar o cualquier otra forma inesperada. Las inversiones deben ser cuidadosamente planificadas. Si estás buscando empleo, lo obtendrás muy pronto. Si aparece mal aspectada, por el contrario, advierte sobre los riesgos de posibles malas inversiones o estar despilfarrando el dinero.';
  oro10INVERTIDA: string =
    'CARTA INVERTIIDA Cuando aparece mal aspectada, esta carta indica que posiblemente tengas obstáculos que dificultan la consecución de tus logros. Los bloqueos que detienen tu avance son importantes. En líneas generales puede tratarse de una falta de planificación, o una planificación defectuosa. Quizás te hayas vuelto una persona conformista o simplemente te hayas cansado de perseguir tu sueño. No es que lo hayas olvidado o ya no lo desees, sino que simplemente tu atención salta de una cosa a otra. Un aspecto negativo de este palo es el tedio producto de la rutina, que provoca que se contengan las emociones y se actúe de manera netamente lógica. Recordemos que más arriba mencionamos la necesidad de equilibrar los planos, por eso es aconsejable romper con la rutina y replantearte tus sueños y objetivos. Quizás sólo te estés poniendo algunos a corto plazo, sin visión a futuro. La sota de oros te pide urgentemente un cambio de actitud. Cuando nos está describiendo a una persona, se tratará de alguien materialista, aburrido, frívolo y hasta manipulador.';
  oro11: string =
    'ORO 11 CARTA POSITIVA: Es momento de disfrutar el éxito económico con plenitud y reconocimiento, sintiendo una inmensa felicidad. El orden es importante para este periodo de felicidad y éxito económico, para que sepas priorizar tus necesidades y lo que son solo tus gustos, así como el valor que conviene en este momento satisfacer. Debes buscar el equilibrio.';
  oro11AMOR: string =
    'SIGNIFICADO AMOR: Debes considerar abandonar la relación actual, ya que estás cayendo en un periodo de aburrimiento sexual, que puede traducirse en impotencia sexual y solo es aburrimiento, tú estás sano.';
  oro11DINERO: string =
    'SIGNIFICADO DINERO: Triunfos que por muchos años se soñaron hasta lograrse. Es momento de que te sientas feliz y satisfecho de tus logros y saques provecho del éxito.';
  oro11INVERTIDA: string =
    'CARTA INVERTIDA Cuando esta carta aparece al revés quiere decirle al consultante que el aburrimiento en su vida lo está llevando al límite de su frustración, de tal manera que lo incita a dar un cambio de 180 grados a tal grados; lo lleva a que se olvide de los hijos, si los tiene; a que se desentienda del trabajo, abandonándolo. De tal manera que puede provocar que caiga en un periodo de dependencia económica de terceras personas, como familiares o amigos, y un tiempo de ociosidad que puede llevar al consultante a una adicción.';
  oro12: string =
    'ORO 12 CARTA POSITIVA: Un periodo de brillo social, donde se goza de reconocimientos por los logros en el trabajo, así como buenas ganancias económicas derivadas del mismo. El liderazgo es la clave en este periodo para triunfar y atraer buenos contactos, que a la larga traerán buenas ganancias económicas. ';
  oro12AMOR: string =
    'SIGNIFICADO AMOR: Mucha atracción sexual en este periodo, así que la pareja sufrirá de ciertos celos o dependencia emocional. ';
  oro12DINERO: string =
    'SIGNIFICADO DINERO: Buena posición económica que abrirá nuevas oportunidades y traerá apoyo económico para invertir en nuevos negocios.';
  oro12INVERTIDA: string =
    'CARTA INVERTIDA El lado más negativo de esta carta es el egoísmo por parte del consultante, quien se vuelve lejano y solo ve para su beneficio sin importar los sentimientos de los demás, o quien pueda dañar emocionalmente para conseguir lo que se propone. Por otra parte, el consultante debe cuidar de no volverse codicioso o materialista, ya que este sentimiento lo puede llevar a una apostura muy incómoda hasta con su propia familia.';
  asDeCopas: string =
    'AS DE COPAS CARTA POSITIVA: Esta carta tiene que ver con el hogar, hablando físicamente, y con lo que implica una venta de casa, mudanza o reparación. En breve recibirás noticias muy favorables para tu familia, ya sea un mudanza de casa o tu pareja está cambiando de trabajo, con lo que tendrá mejores condiciones de vida.   ';
  asDeCopasAMOR: string =
    'SIGNIFICADO AMOR: Tu relación está pasando por un momento muy feliz, un embarazo hace crecer la familia.';
  asDeCopasDINERO: string =
    'SIGNIFICADO DINERO: Si deseas vender tu casa es un buen momento, tendrás compradores serios y el dinero se te multiplicará para un nuevo hogar.';
  asDeCopasINVERTIDA: string =
    'CARTA INVERTIDA Lo negativo que indica la baraja que está presente en la vida del consultante, puede resultar muy positivo si se hacen los cambios necesarios. Habla de un momento de hacer introspección para revisar la relación de pareja, la relación con los jefes o la relación con los amigos. Hay que desechar a las personas tóxicas o que sientes que no te hacen sentir feliz. La baraja te pide practicar el desapego.';
  copa2: string =
    'COPA 2 CARTA POSITIVA: El 2 de Copas tiene que ver con la fertilidad, los sentimientos, el amor, aceptación de uno mismo y la pasión.  anuncia muy buenas noticias, de algo que se puede dar en cualquier área de tu vida. El 2 de Copas es una carta que representa el amor en todas sus formas. Cuando sale en una lectura nos anuncia el compromiso de una pareja, nos habla de relaciones estables, amistades duraderas, el inicio de un proyecto o negocio con alguien más. También nos habla sobre el amor y sentimientos del consultante o una persona en particular. Es una carta positiva que siempre se va a enfocar en las emociones.   ';
  copa2AMOR: string =
    'SIGNIFICADO AMOR: El 2 de Copas habla sobre un amor muy profundo hacia otra persona. Representa el encuentro con la pareja ideal, donde el amor es correspondido, resultando en una relación fuerte y duradera. Esta es una relación plena tanto en lo emocional como sexual; los dos serán muy fieles el uno con el otro.';
  copa2DINERO: string =
    'SIGNIFICADO DINERO: Cuando el 2 de Copas sale en una lectura en temas de dinero, habla sobre una posición conformista por parte del consultante o la persona de interés. Existe un estancamiento económico que no deja avanzar a la persona en sus finanzas. También llama a reflexionar sobre hacer gastos innecesarios y excesivos.';
  copa2INVERTIDA: string =
    'CARTA INVERTIDA se refiere principalmente a la incapacidad de mostrar nuestros sentimientos. Esta carta advierte al consultante que le es difícil confrontar sus propios sentimientos y expresar su sentir a los demás, como consecuencia traerá malentendidos, desacuerdos y posibles discusiones. Lamentablemente el 2 de Copas invertido anuncia el inicio de una relación sentimental, pero que va a terminar de mala forma. Si este naipe indica relaciones emocionalmente estables, inversa indica lo contrario. Estas relaciones pueden convertirse en relaciones tóxicas, aferrándose a la persona equivocada. Pueden existir obsesiones, infidelidades, fingir sentimientos para obtener algo, mentiras o traiciones. En cuestiones de trabajo y dinero es un poco negativa  inversa, ya que el consultante pudiera estar pasando por un estancamiento laboral o financiero que no lo deja salir adelante. Es importante cuidar la economía, pues el consultante pudiera estar malgastando su dinero. En temas de salud esta carta indica cambios de humor, situaciones hormonales o metabólicas, cansancio y un gusto excesivo por tener relaciones sexuales.';
  copa3: string =
    'COPA 3 CARTA POSITIVA: Resolución, victoria, obstáculo superado, noticias, proyectos sentimentales para el futuro próximo. No debes tener miedo, todo funciona de la mejor manera posible, incluso los aparentes obstáculos se resolverán.';
  copa3AMOR: string =
    'SIGNIFICADO AMOR Si en la pareja se está transitando una crisis, se restablecerá el vínculo a corto plazo y se enriquecerá la relación a futuro. Se recibirán noticias de la persona de interés';
  copa3DINERO: string =
    'SIGNIFICADO DINERO Si el consultante está atravesando pérdidas, éstas llegarán a su fin. Incluso se recuperará dinero que se creía perdido. Los nuevos proyectos comienzan a rendir frutos';
  copa3INVERTIDA: string =
    'CARTA INVERTIDA Mal aspectada, pero rodeada de cartas positivas, podría sugerir que el éxito esperado podría tomar más tiempo del que se espera.En una relación nos está indicando que la misma, es potencialmente positiva pero está siendo estropeada por la intolerancia y el egoísmo de una de las partes; y ya que en general representa a terceras personas en todos los ámbitos, puede implicar un triángulo amoroso. Si se está consultando sobre lo laboral, indica que el socio del consultante se ha involucrado en cosas que desconoce. Es necesario buscar nuevas opciones, ya que las cosas han cambiado por completo. Se debe hacer un balance para encontrar las opciones adecuadas. ¿El grupo del que se rodea el consultante es el adecuado? ¿Los beneficios justifican sacrificar su identidad personal? Advierte sobre la posibilidad de dejarse influenciar por malos consejos; también sobre ser excesivamente indulgente';
  copa4: string =
    'COPA 4 CARTA POSITIVA El 4 de Copas es una carta que está ligada al deseo carnal y a nuestros más bajos instintos. Por lo general nos habla de relaciones que se dan principalmente porque existe un interés físico, sin ninguna intención por el compromiso o por involucrarse emocionalmente. Siempre va a referirse a una relación sexual, a relaciones por placer. Es importante dejarle saber al consultante que estas relaciones solo tienen un interés físico y nada emocional. También pudiera hablar sobre la falta de motivación que padece el consultante y sus pocas ganas de querer salir de esa situación';
  copa4AMOR: string =
    'SIGNIFICADO AMOR Te indica que la relación en la que te encuentras es exclusivamente de índole sexual. O tú o tu pareja, por el momento no buscan tener nada formal ni involucrar sus sentimientos. Ten precaución cuando aparece esta carta, ya que las intenciones de la persona que te está pretendiendo son únicamente físicas.';
  copa4DINERO: string =
    'SIGNIFICADO DINERO Te dice que te encuentras estancado a nivel económico, te falta motivación para salir de esa zona porque te has conformado con lo que tienes. Unicamente tu podrás salir de esta situación, mientras sigas con esa actitud, podrás lograr poco para mejorar tu economía.';
  copa4INVERTIDA: string =
    'CARTA INVERTIDA El lado negativo del 4 de Copas principalmente cuando sale invertido, le hace ver al consultante que se encuentra en un estado emocional negativo. Está poniendo resistencia a abrirse sentimentalmente hacia los demás, o es incapaz de expresar sus verdaderos sentimientos. Esto pone en relieve que si el consultante no hace algo por expresarse, pudiera tener un gran impacto en sus relaciones personales, pero especialmente con las personas más cercanas a ella o a él. Otra posibilidad es que el consultante pudiera desarrollar problemas de salud que tienen que ver con su aparato reproductor, genitales, o de índole sexual. También habla de problemas sexuales con la pareja, ya sea por discusiones, falta de comunicación o precisamente por alguna enfermedad sexual. Lamentablemente este naipe también augura experiencias amorosas poco satisfactorias, que únicamente pudieran darse en el plano físico, sin involucrarse emocionalmente. En temas de trabajo y dinero, no te deja totalmente en claro si la situación es positiva o negativa, sino que este resultado lo definirá el mismo consultante, al momento de enfocarse en sus metas y trabajar por lo que quiere. En muchos aspectos esta carta no nos da claridad, sino más bien nos muestra que estamos en la incertidumbre y sin muchas ganas por hacer algo al respecto.';
  copa5: string =
    'COPA 5 CARTA POSITIVA: El 5 de Copas nos habla de crisis personal, profunda tristeza y victimización. Cuando aparece en una lectura, explica que el consultante se encuentra decepcionado y sin ganas de salir adelante del problema que lo aqueja. Aunque el 5 de Copas es un naipe negativo que envuelve al consultante en un sentimiento de desilusión y tristeza, es positivo que salga en la lectura, para hacerle ver al consultante el estado en que se encuentra y que solo con su determinación y constancia podrás salir de ello, aprendiendo una gran lección de esta experiencia.';
  copa5AMOR: string =
    'SIGNIFICADO AMOR Habla de una relación en la que no se quiere estar y que incluso se quisiera dejar. En otros casos pudiera hablar de una relación firme y bien correspondida.';
  copa5DINERO: string =
    'SIGNIFICADO DINERO El consultante se encuentra en una buena posición económica y puede darse el lujo de hacer gastos extras. También anuncia herencias que pudieran llevar al consultante a tener discusiones y discordias con su familia.';
  copa5INVERTIDA: string =
    'CARTA INVERTIDA Curiosamente, el lado negativo del 5 de Copas cuando aparece revertido, trae un mensaje positivo. Esta carta nos augura que vamos por el camino correcto para superar nuestros problemas o decepciones. Te dice que eres fuerte para superar estos obstáculos y tu actitud ante esto debe ser de humildad y determinación. Esto es un muy buen presagio, ya que te explica que estás llegando al final de una situación difícil; pero principalmente, que has aprendido una importante lección. También te anuncia que ya estás dejando atrás la pose de víctima en la que te encontrabas. En cambio, estás tomando conciencia de que esto que te pasó era necesario para tu crecimiento. Hay un camino lleno de esperanza, fe, desarrollo emocional y amor, listo para ser recorrido por ti. Todo está puesto para que salgas adelante, solo es necesario seguir trabajando por tus metas, con confianza en tí mismo y fe en que todo saldrá bien.';
  copa6: string =
    'COPA 6 CARTA NEGATIVA: Cuando aparece esta carta en tu tirada debes revisar que tu pasado no te esté limitando. Te invita a reflexionar y cerrar ciclos. Esta carta te pide que no te apegues al pasado, que te perdones por lo que pudiste dejar de hacer o hiciste mal en el pasado y avances a un futuro más dichoso.';
  copa6AMOR: string =
    'SIGNIFICADO AMOR Es momento que sueltes el pasado, el amor que se fue debe ser superado. Es momento de sanar las heridas del pasado.';
  copa6DINERO: string =
    'SIGNIFICADO DINERO En el pasado tu familia gozaba de buena posición económica, hoy ya se está agotando y es momento de buscar nuevas oportunidades para hacer incrementar tus entradas.';
  copa6INVERTIDA: string =
    'CARTA INVERTIDA Estar estancado es una condición que el consultante tomo como opción, para no hacer nada y solo sobrevivir sin afán de nada. El aspecto negativo se presenta con la carta al derecho, que está hablando del pasado que tiene energía muy densa como la melancolía, la nostalgia o las penas, pero además el consultante se aferra a estas energías para no hacer nada y seguir en la comodidad del victimismo.';
  copa7: string =
    'COPA 7 CARTA POSITIVA: Es un momento de plenitud y satisfacción para el consultante, un periodo para amarse a sí mismo. Un periodo que te da la estabilidad para mejorar tu vida, empezando por reconocer que tú eres la persona más importante en ella. Así que ámate incondicionalmente.  ';
  copa7AMOR: string =
    'SIGNIFICADO AMOR Es un momento donde el consultante tiene energía renovada, se siente sensual y atractivo. ';
  copa7DINERO: string =
    'SIGNIFICADO DINERO El dinero llegará por una promoción en tu trabajo, que tal vez no es una sorpresa porque has venido desarrollando bien tu trabajo.';
  copa7INVERTIDA: string =
    'CARTA INVERTIDA Cuando aparece esta baraja al revés debes tener cuidado con tus pensamientos y deseos, porque el consultante no está siendo coherente entre lo que siente y lo que pide, ya que a veces tendemos a que los pensamientos negativos se hagan realidad y lo positivo nunca llegue. Por ello te pide esta carta que debes revisar tu escala de valores en cuanto al merecimiento.';
  copa10: string =
    'COPA 10 CARTA POSITIVA: Indica la llegada de buenas noticias, la llegada de una persona imaginativa y estudiosa con mucho encanto Es momento de grandes oportunidades con el nacimiento de nuevas metas y proyectos, así como la reflexión de las decisiones que se han tomado hasta el momento. ';
  copa10AMOR: string =
    'SIGNIFICA AMOR Indica la presencia de una mujer que necesita del amor para vivir, puede referirse al consultante. Es indicativo de lo sentimental y la sensibilidad.';
  copa10DINERO: string =
    ' SIGNIFICADO DINERO Augurio de prosperidad y de posibilidad de aumento salarial. Puede ser indicativo del fin de deudas.';
  copa10INVERTIDA: string =
    'CARTA NEGATIVA La Sota de Copas es una carta positiva por naturaleza, sin embargo en su lado negativo puede estar sugiriendo contradicciones debido a un exceso de imaginación, que puede llegar a tomar el control de su vida. Alude también a la juventud e inmadurez al momento de enfrentarse a las adversidades de la vida, como un escape de la realidad por medio de la ingesta de alcohol o de sustancias ilícitas. Puede señalar el comienzo de un período de inseguridad emocional o incapacidad de llevar relaciones saludables. Falta de amor propio y falta de confianza en los demás; desconfiado, inseguro, egoísta.';
  copa11: string =
    'COPA 11 CARTA POSITIVA: Un hombre joven te dará una lección de vida que vas a recordar toda la vida, es momento de equilibrar tus emociones. Debes moverte y no temer a equivocarte, ya que eres muy capaz de saber qué necesitas en tu vida.';
  copa11AMOR: string =
    'SIGNIFICADO AMOR Una persona que ama la conquista, pero jamás se compromete y todo quiere que se quede en amistad.';
  copa11DINERO: string =
    'SIGNIFICADO DINERO Hay un crecimiento económico que ahora se ve insignificante a lo que siempre soñaste, pero que a la larga es una buena inversión de tiempo y te traerá solidez económica.';
  copa11INVERTIDA: string =
    'CARTA INVERTIDA Cuando aparece en la tirada esta baraja al revés te está avisando que viene en camino una persona falsa. Te previene que te cuides de no caer en su trampa, ya que si es tu pareja mostrará celos descomunales para hacerte sentir mal y manipularte, sin saber que es la pareja quien está fallando y no sabe cómo terminar contigo.';
  copa12: string =
    'COPA 12 CARTA POSITIVA: Esta carta está haciendo referencia al hombre que lleva el rol de mando en un hogar u empresa. Un líder que sabe tomar decisiones y es justo. Equilibra tu vida para que puedas avanzar sin caer en el drama o la victimización, que esto podría traerte grandes problemas. ';
  copa12AMOR: string =
    'SIGNIFICADO AMOR Te está anunciando una incompatibilidad con tu pareja a través de tus intereses profesionales o carácter, creando una ruptura inminente.';
  copa12DINERO: string =
    'SIGNIFICADO DINERO Habla de una persona madura que goza de buena situación económica, que se da gustos como viajes y esto atrae envidias.';
  copa12INVERTIDA: string =
    'CARTA INVERTIDA Al estar invertida esta carta nos alerta de encontrarnos con un hombre mayor que puede tendernos una trampa. Pudiera hacer caer al consultante en un fraude, que después será motivo de chantajes y puede llevarlo a cometer acciones que lo hagan sentirse muy mal consigo mismo. Por otra parte, puede indicar que el consultante o quien represente la baraja el Rey de Copas, está indicando que el sentimentalismo se usará para manipular la situación.';
  asDeEspadas: string =
    'AS DE ESPADAS CARTA POSITIVA: Representa la visión y astucia que orienta a la hora de cerrar etapas y comenzar nuevos ciclos. Indica evolución, progreso y victoria. Mal aspectada indica un sacrificio muy grande y la negación a ver lo necesario. Debes mantenerte enfocado y con absoluta convicción. No dudes, acciona y concéntrate en el resultado. Agudiza tu mente, no te preocupes por lo que vendrá, haz uso de tu inteligencia y avanza. Confía en las nuevas perspectivas.  ';
  asDeEspadasAMOR: string =
    'SIGNIFICADO AMOR Si el consultante es soltero, indica que se acerca una nueva oportunidad con alguien. Para quienes están en pareja puede significar tanto el fin de la relación a partir de la comunicación con la verdad, o que se afiance el vínculo a causa de esto mismo. Las cartas que acompañen al As de espadas nos indicarán de qué se trata. En ambos casos señala que la nueva etapa será mucho mejor.';
  asDeEspadasDINERO: string =
    'SIGNIFICADO DINERO El consultante debe ser precavido y reservado a la hora de considerar nuevas oportunidades, gastos e inversiones. Es necesario un análisis muy profundo. No es recomendable prestar dinero, incluso a personas de confianza. Mal aspectada incluso indica riesgo de sufrir una estafa o desilusión.';
  asDeEspadasINVERTIDA: string =
    'CARTA INVERTIDA Mal aspectado, el As de espadas nos habla de confusiones y falta de claridad. El consultante se pierde en laberintos mentales que no lo conducen a ningún lado, más que a una visión básica de corto alcance, sesgada por las emociones. Por este motivo sugiere intentar un análisis frío y práctico. ¿Se está dando lugar a un falso optimismo? Si el consultante está afrontando problemas de salud, la recuperación será complicada. En caso contrario es recomendable el realizar un control médico. Entre los aspectos negativos del As de espadas, hay una advertencia para no apresurar las decisiones, así como un llamado a la auto observación… ¿Está el consultante sacando provecho de sus colegas y de cualquier circunstancia posible? De ser así, esto generará muchos conflictos por el ambiente desagradable que se propicia de dicha actitud. También puede estar señalando una conducta autoritaria por parte del consultante.';
  espada2: string =
    'ESPADA 2 CARTA POSITIVA: Representa la necesidad de tomar una decisión cuanto antes, lo que puede poner en jaque el equilibrio entre mente y corazón, sino se logra el correcto ajuste. Es necesario contemplar ambas dimensiones para comprender la situación presente y resolverla de manera efectiva. También indica que debe atenderse a las asociaciones con una persona, que podrían ser muy productivas, a menos que esté mal aspectada, en cuyo caso será recomendable evadirlas. Busca nuevas amistades y relaciones sin abandonar las viejas. Si no estás seguro de qué camino tomar, pregúntate: ¿Cómo reaccionan tu mente y corazón al momento de pensar en cada posible decisión? Observa las distintas posibilidades y se perseverante en tus acciones y decisiones.   ';
  espada2AMOR: string =
    'SIGNIFICADO AMOR Buen augurio en este plano. Si se está atravesando una crisis, alguien del entorno intercederá para equilibrar la relación. Si el consultante desea encontrar el amor, es necesario que realice un trabajo introspectivo para sanar heridas del pasado antes de avanzar. Si sale mal aspectado, advierte sobre una relación en la que estarían utilizando al consultante por conveniencia.';
  espada2DINERO: string =
    'SIGNIFICADO DINERO Recomienda prudencia y el equilibrio. Es necesario llevar un control del dinero, tanto de los gastos como de los ingresos. En este ámbito, antes de tomar una decisión, se deben analizar fríamente las opciones, dejando de lado los sentimientos.';
  espada2INVERTIDA: string =
    'CARTA INVERTIDA, el 2 de espadas indica que el consultante está en soledad para afrontar una difícil decisión con poca información, lo que resulta en un gran estrés y agotamiento. Por esto mismo es que debe tomarse con calma y tener cuidado con la salud en general, para no causar mayores inconvenientes que pueden ser evitables. El consultante debe procurar manejarse con cautela y un poco de escepticismo, ya que algunas personas podrían intentar aprovecharse del estado de confusión que podría presentar, o de la falta de información que tuviera, para engañarlo. Puede encontrarse rodeado de personas de dudosa moral, que hasta querrían quedarse con su trabajo. En cuanto a las relaciones personales, ya no estarían siendo satisfactorias y mucho menos transparentes.  El 2 de espadas advierte sobre un posible engaño por parte de la pareja, con alguien del entorno del consultante, posiblemente un familiar o alguien a quien considere su amigo.';
  espada3: string =
    'ESPADA 3 CARTA NEGATIVA: Es fundamental apoyarse en la lógica antes que en las emociones, incluso en el plano amoroso. Esta carta habla de falta de tacto, charlatanería y falta de franqueza; así como manipulación que puede sufrir el consultante.  ';
  espada3AMOR: string =
    'SIGNIFICADO AMOR Dependiendo de la consulta, puede estar expresando que el consultante debe dejar las emociones de lado y actuar sobre lo concreto. Si la pareja está atravesando conflictos, entonces está señalando que ambas partes hablan con la verdad para superarlos. Mal aspectada, puede simbolizar separación y alejamiento, pero no indica divorcio.';
  espada3DINERO: string =
    'SIGNIFICADO DINERO Es una carta muy positiva para tus finanzas. Pueden haber recompensas, confirmaciones y avances de suma importancia. Mal aspectada, puede señalar una traición. El consejo que te da el 3 de Espadas es enfocarte en el problema y no en la persona, cuidar el dinero y no realizar préstamos.';
  espada3INVERTIDA: string =
    'CARTA INVERTIDA Puede estar indicando que el consultante tiene miedo a las personas con las cuales tiene un conflicto o a repetir un patrón negativo. Ya que es una carta que, en cuanto a tiempos, indica meses, también puede estar señalando retrasos. Cuando la consulta es referida a asuntos legales y aparece invertida, señala una injusticia. Si la lectura no está orientada a este ámbito, de acuerdo a qué cartas le rodeen entonces puede estar indicando que se cometa una injusticia o problemas entre hermanos, dependerá de la pregunta y del contexto.';
  espada4: string =
    'ESPADA 4 CARTA NEGATIVA: Es una advertencia de que es momento de tomarte un respiro, una pausa para descansar. Escucha a tu cuerpo y evita una sobrecarga. Debes cuidar tu salud y dejar los malos hábitos. Esta baraja te está advirtiendo que puedes caer enfermo en un futuro próximo.   ';
  espada4AMOR: string =
    'SIGNIFICADO AMOR El consultante vive en una fantasía con amores inalcanzables, por lo que está viviendo de sueños.';
  espada4DINERO: string =
    'SIGNIFICADO DINERO En este momento no comiences ninguna negocio o proyecto que signifique una inversión, ya que puedes perder tu dinero.';
  espada4INVERTIDA: string =
    'CARTA INVERTIDA La reflexión es una pieza clave para este periodo de reclusión, la vida está ofreciendo las condiciones para que el consultante pase un periodo de retiro forzoso, ya sea por enfermedad o por un paro laboral, lo que traerá para la persona un periodo en soledad. Esto representará alegría o amargura, dependiendo de la capacidad que tenga el consultante para poder convivir consigo mismo. Es una invitación de poner un alto en el camino y sanar heridas del pasado para estar fortalecido y feliz.';
  espada5: string =
    'ESPADA 5 CARTA NEGATIVA: Conflicto asociado con la derrota, humillación, crisis, confusión mental, decepción, traición. Prepárate para afrontar la adversidad. Se realista con tus expectativas, no sobreestimes tus capacidades. Si hay posibilidades de lograr el éxito, pero se requiere honestidad y disposición para actuar de manera ética   ';
  espada5AMOR: string =
    'SIGNIFICADO AMOR Anuncia conflictos inevitables en lo más básico de una convivencia. Es necesario reconocer los propios defectos que generan estos malestares. En casos extremos puede indicar infidelidades y rupturas. Si el consultante se encuentra soltero, no es el mejor momento para comenzar una relación, pero esto dependerá de qué cartas acompañen al cinco de espadas. En el mejor de los casos, indica que tel entorno no aceptará a esta nueva persona.';
  espada5DINERO: string =
    'SIGNIFICADO DINERO Extrema las precauciones para evitar posibles estafas. Si se está refiriendo al consultante, indica que está actuando de manera poco ética. Competencias y conflictos con empleados y socios, con el riesgo de sufrir un engaño. Puedes salir victorioso de esta situación, aunque debes reflexionar si vale la pena.';
  espada5INVERTIDA: string =
    'CARTA INVERTIDA Anuncia la llegada de un conflicto, incluso puede ser que ya esté teniendo lugar. Es necesario estar atento, aunque parezca que todo está calmo y asegurado, ocurrirá algo inesperado que arruine todo. Las barajas que acompañen al 5 de espadas indicarán si es producto de la falta de criterio o de alguien que impide el avance. En este caso es necesario no forzar la situación para no empeorar las cosas. Advierte al consultante que debe equilibrar sus ambiciones con sus valores, y que no actúe bajo la premisa de que “el fin justifica los medios”. Más adelante podría descubrir que la supuesta victoria no ha valido el precio pagado. Además, si ha utilizado engaños y estafas, sufrirá las consecuencias tarde o temprano. El 5 de espadas es una de las peores cartas de la baraja española. Con ella las situaciones positivas se convertirán en desfavorables y conflictivas. Anuncia derrota, desgracia, fracaso, preocupaciones y remordimientos por los errores del pasado. Enemigos que intentan hundir al consultante con base en calumnias.';
  espada6: string =
    'ESPADA 6 CARTA POSITVA: Movimientos y luchas para renovarse. El estancamiento se volverá insoportable, por lo que es necesario evolucionar. Concéntrate para lograr dejar los problemas atrás, da lugar a cambios que favorezcan tu presente. Haz frente a tus problemas, no los evadas, piensa a través de ellos y resuélvelos. ';
  espada6AMOR: string =
    'SIGNIFICADO AMOR Si estás en pareja será favorable un cambio de rutina, sea un viaje o paseo dentro de la ciudad, que no sean habituales. Esta carta por sí misma no indica ruptura. Si estás en búsqueda de una pareja, debes abandonar tus espacios rutinarios, conocer otros lugares y nuevos grupos de gente.';
  espada6DINERO: string =
    'SIGNIFICADO DINERO Que sea positivo o negativo dependerá de las barajas que le acompañen. Si te encuentras en medio de una lucha y actualmente puedes ver algunos resultados, sigue así, alcanzarás el éxito. Si por el contrario no sientes que vayas por el buen camino, es momento de dejar ir y comenzar algo nuevo, tanto un lugar como un rubro totalmente diferente. ';
  espada6INVERTIDA: string =
    'CARTA INVERTIDA Cuando aparece mal aspectado, el 6 de espadas nos habla de la sensación de sentirse atrapado, incapaz de avanzar en la vida. Refiere a la dificultad (real o percibida) en el movimiento, es decir, obstáculos que lo dificultan y atrasan. Esta baraja sugiere revisar si estos problemas surgen de un pasado con cosas no resueltas. ¿Has intentado huir de tu pasado dejando situaciones irresolutas? Si es así, debes saber que no importa a dónde vayas, estas situaciones siempre irán contigo y serán barreras para tu desarrollo. También puede estar indicando que tienes resistencias al cambio, más cuando es obligado. Posiblemente sepas que es la única salida y aún así no quieras asumirlo. Procura encontrar un equilibrio en tu vida, organízate. Tu cuerpo se cobrará más adelante todo el estrés que puedes estar viviendo ahora. Posiblemente también sientas un gran vacío interior, no te desesperes; intenta relajarte, practica meditación o yoga para vaciar tu mente de conceptos nocivos y dar lugar a lo nuevo.';
  espada7: string =
    'ESPADA 7 CARTA NEGATIVA: En corto plazo tendrás que tomar fuerza para salir de una situación que te obligará a salir de un letargo y cambiar tu vida. Te pide que dejes de evadirte de tu propia realidad, que tomes las riendas de tu vida y la transformes en algo positivo; de lo contrario solo vivirás huyendo de tus responsabilidades. ';
  espada7AMOR: string =
    'SIGNIFICADO AMOR Debes de ser muy realista al momento de enamorarte de alguien, porque puedes estar enamorado de quien no está a tu alcance y solo estás sintiéndote frustrado por no poder conquistar a la persona. ';
  espada7DINERO: string =
    'SIGNIFICADO DINERO Puede llegar una mejora económica, solo que no fantasees con un porvenir por el que no has trabajado. Si solo has soñado, así no se consigue la abundancia. No hay prosperidad si no hay acción.';
  espada7INVERTIDA: string =
    'Es una carta negativa, porque habla que el consultante tiende a escaparse y rehuir de sus responsabilidades, no le gusta enfrentarse a la realidad así que a veces vive en un mundo de fantasía, especialmente cuando de dinero se trata. Solo espera que algo maravilloso pase para poder mejorar su economía, sin buscar soluciones reales.';
  espada10: string =
    'ESPADA 10 CARTA POSITIVA: Terquedad y obstinación, gran capacidad de análisis. Naturaleza energética. Será necesario tomar decisiones con gran velocidad. Confía en ti. Prepárate para recibir noticias tanto positivas como negativas. Siempre debes confiar en tu inteligencia y habilidad para adaptarte, así podrás beneficiarte de estos cambios o, cuando menos, no quedar muy mal parado.   ';
  espada10AMOR: string =
    'SIGNIFICADO AMOR Si estás atravesando una situación conflictiva, será necesario que identifiques los momentos para presionar y cuándo retroceder. Aprender a respetar los espacios es fundamental. Si se encuentra buscando una pareja, debe ser paciente y no presionar más allá de lo debido.';
  espada10DINERO: string =
    'SIGNIFICADO DINERO No subestimes las situaciones, ni te sobreestimes. Pide ayuda cuando sea necesario. No asumas gastos extra si aún no tienen los medios para afrontarlos, confiar en que lo resolverás más adelante podría traerte problemas.';
  espada10INVERTIDA: string =
    'CARTA INVERTIDA Mal aspectada, la sota de espadas hace un llamado urgente a la autocrítica, en caso de estar representando al consultante. Describe a una persona que confronta de manera agresiva y de manera constante, incluso sin importar si tiene la razón, o siquiera sabe de qué está hablando; con una tendencia incluso a acomodar las cosas, sacándolas de contexto o exagerando para que apoyen su punto de vista.Cuando se trata de una persona del entorno cercano, es necesario tener cuidado particularmente con los chismes y calumnias hacia quien consulta. Si bien la primer reacción podría ser buscar venganza, no es recomendable. En el caso de estar anunciando noticias o mensajes, puede ser una situación para la cual el consultante no está preparado, y sentirá mucha impotencia al respecto. Sin embargo, siempre es posible revertir esto, dependerá de las barajas que rodeen a la sota de espadas y de que el consultante sea capaz de mantener la calma. Será necesario que busque algún tipo de apoyo, como una terapia.';
  espada11: string =
    'ESPADA 11 CARTA POSITIVA: Esta carta habla de una motivación extrema para lograr algo y que el consultante se siente determinado a conseguir. La ambición bien canalizada llevará a la persona a lograr su cometido. Tienes la determinación necesaria para conseguir lo que quieres, debes proseguir con tu proyecto o idea. Sé inteligente, utiliza la lógica para pensar y planear de qué manera te conviene actuar. Utiliza tu ambición como un impulso, así estarás más cerca de lo que deseas y podrás conseguirlo de manera positiva.';
  espada11AMOR: string =
    'SIGNIFICADO AMOR Para las parejas esta carta anuncia buenas noticias y reconciliación, si es que se encontraban distanciados. Viene una etapa de paz y acuerdos. Para los solteros, anuncia la llegada de un amor nuevo, atraído más por la riqueza de su forma de pensar, más que por un aspecto físico.';
  espada11DINERO: string =
    'SIGNIFICADO DINERO Anuncia la llegada de un dinero inesperado, o bien, el logro respecto a un negocio o proyecto personal que representará una ganancia económica.';
  espada11INVERTIDA: string =
    'CARTA INVERTIDA El deseo ferviente de alcanzar la meta podría cegar a la persona. La ambición del logro que se persigue se puede convertir en obstinación, haciendo que el consultante se “aviente de cabeza” sin importarle las consecuencias, y éstas no siempre sean positivas. Quizá la idea está exacerbada por la misma persona, quien se siente determinada pero desde un ángulo negativo de las circunstancias. Advierte entonces la necesidad de planear cómo va a actuar y entrar en consciencia que toda acción tendrá una consecuencia. Si la persona no mide lo que pueda llegar a pasar por actuar impulsivamente, podría terminar recibiendo un duro golpe de la vida. En cierto modo, la ambición se vuelve negativa y la persona actúa más por el ego de lograr algo, pudiendo lastimarse a sí mismo e incluso a las personas que “atropelle” en su misión. La fuerte energía que caracteriza esta carta te habla de que debe haber un equilibrio entre el deseo y la responsabilidad de las acciones; de lo contrario, el impulso positivo terminará transformándose en una energía negativa. También señala que mientras menos atención se ponga en el contexto, mayor posibilidad hay de que se presenten más obstáculos. Te advierte de estar utilizando mal tu energía y determinación, enfocándote en el objetivo incorrecto. O quizá, no hay un plan bien estructurado y por ello las cosas no están saliendo bien. Además, esto puede influir en tu relación con otras personas, pues el constante fracaso te vuelve irritable o difícil para convivir.';
  espada12: string =
    'ESPADA 12 CARTA POSITIVA: debes actuar con seriedad, apoyándote en la razón y evitando que sean tus emociones las que te controlen; solo de esta manera podrás ver la verdad claramente y sobretodo, actuar con justicia. Deberás recurrir a tu experiencia y conocimiento para encontrar la verdad. No dejes que te guíen las emociones, sigue tu lógica y utiliza la razón para actuar de una manera justa y en apego a la verdad.   ';
  espada12AMOR: string =
    'SIGNIFICADO AMOR Si tienes una pareja, es posible que alguno de los dos esté tomando una posición autoritaria que no permite que haya equidad en la relación, o por el contrario, la relación necesita una guía para ser más equilibrada. Para quien está soltero, puede significar la llegada de un hombre varonil, o una mujer con características un poco masculinas.';
  espada12DINERO: string =
    'SIGNIFICADO DINERO Te advierte que es necesario que te apegues a datos duros y reales. Tus finanzas no deben basarse en cosas que anhelas y no existen. No adquieras deudas que no estás en capacidad de cubrir.';
  espada12INVERTIDA: string =
    'CARTA INVERTIDA Debido a que la carta de inclina al raciocinio, puede ser que el alejamiento emocional sea demasiado y termines por volverte distante y ajeno a lo que sientes, o a lo que los demás sienten. Este desapego llevado al extremo es un aspecto negativo, ya que debes encontrar un equilibrio entre la razón y las emociones, aunque sea la primera la que te guía. Buscar la verdad y el ser justo, no implica el desatender por completo los sentimientos de otros.';
  asDeBastos: string =
    'AS DE BASTOS CARTA POSITIVA: Representa la llegada de un regalo, una situación o una persona de forma inesperada. Se pronostica una sorpresa. Algo que no tienes planeado pero que surge de manera espontánea en algún momento próximo de tu vida.';
  asDeBastosAMOR: string =
    'SIGNIFICADO AMOR Podría significar que una persona llega sin ser esperada, alguna situación amorosa que se aproxima.';
  asDeBastosDINERO: string =
    'SIGNIFICADO DINERO Nos habla sobre un ingreso extra inesperado o que se salda una deuda olvidada';
  asDeBastosINVERTIDA: string =
    'CARTA INVERTIDA El As de Bastos puede representar una situación imprevista que puede desestabilizar al consultante, alguna situación poco agradable que llega de forma inmediata, pero tiene la ventaja de que se puede resolver al momento en el que presenta. Lo negativo de esta carta es que las situaciones poco previstas, ya sea en el dinero, el amor o la salud, podrían traer consigo sentimientos de angustia y si estos permanecen por mucho tiempo, pueden tener como consecuencia que el consultante se sienta ansioso o enfermo.';
  bastos2: string =
    'BASTOS 2 CARTA POSITIVA: Cuando aparece esta carta en tu tirada te está avisando que pronto llegará un viaje corto que te traerá ganancias. También puede referirse a una noticia pero no te da la certeza de si será positiva o negativa. Es una carta que trae buenas noticias para iniciar nuevos proyectos. Sobre todo te dice que debes moverte para conseguirlo, buscar aliados para lograr tus metas.';
  bastos2AMOR: string =
    'SIGNIFICADO AMOR Debes revisar la relación que tienes con tu pareja, te pide que reactives el amor.';
  bastos2DINERO: string =
    'SIGNIFICADO DINERO Te indica que busques nuevas oportunidades para ganar dinero, ya que solo te quejas sin buscar nuevas opciones para estar mejor';
  bastos2INVERTIDA: string =
    'CARTA NO INVERTIDA La carta 2 de Bastos no tiene revés, por lo tanto, no tiene una lectura como tal negativa. Pero sí existen rasgos que debes tomar en cuenta para que el resultado no se vuelva negativo: No tengas dudas al momento de tomar decisiones, pues una vez que muestres inseguridad, las cosas se pueden salir de control. Maneja tus emociones ya que puedes tomar una decisión precipitada y dejar todo de repente: casa, pareja o trabajo. Hazle frente a la frustración sin culparte cuando tu proyecto no está saliendo como te lo imaginaste. Las emociones negativas que no sepas controlar, pueden representar el gran obstáculo para lograr tus objetivos';
  bastos3: string =
    'BASTOS 3 CARTA POSITIVA: Indica posible comienzo próspero de una empresa, con una base firme y de trabajo continúo. Es una carta de progreso, habla de cuestiones laborales y económicas. Se tienen muy buenas posibilidades de poder emerger finalmente con éxito.';
  bastos3AMOR: string =
    'SIGNIFICADO AMOR Puede significar cambio de pareja, nuevo matrimonio, amores arriesgados. Si estás con alguien, te dice que la persona que está a tu lado es la correcta.';
  bastos3DINERO: string =
    'SIGNIFICADO DINERO Estabilidad económica y negocios excelentemente rentables. Señala que verás los resultados de tu empeño y confianza en los negocios.';
  bastos3INVERTIDA: string =
    'CARTA INVERTIDA También puede indicar problemas de comunicación en pareja, falta de confianza; la presencia de un tercero que altera la relación. Posiblemente debas involucrarte más con el entorno después de un tiempo de distanciamiento y reflexión, que se ha ido perturbando debido a los recuerdos negativos. También señala la necesidad de consolar y ser consolado y estar atento a nuevas situaciones que se presentan, para saber aprovecharlas sabiamente,  ya que la carta en esta posición puede indicar el desaprovechamiento de oportunidades. En una lectura esta carta también presagia alguna derrota, marca la conclusión de un camino emprendido para el desarrollo personal que puede terminar en fracaso. Refleja una pérdida o fracaso en objetivos, en el amor, incapacidad para poder conquistar a la persona deseada.';
  bastos4: string =
    'BASTOS 4 CARTA POSITIVA: Cuando aparece esta carta en tu tirada te está advirtiendo que revises los temas de tu familia y amigos, tal vez pienses que todo va bien, pero es necesario hacer pequeños ajustes para estar mejor. En una primera lectura es una carta que nos habla de que todo está bien y somos felices, es un periodo positivo. También puede advertir que en breve tiempo podemos recibir la noticia de un embarazo.';
  bastos4AMOR: string =
    'SIGNIFICADO AMOR Un posible embarazo puede hacerte muy feliz. Es momento de cambiar la relación de pareja y asumir nuevos compromisos.';
  bastos4DINERO: string =
    'SIGNIFICADO DINERO Es un buen tiempo para pedir préstamos o cobrar el dinero que te deben, con muy buena respuesta.';
  bastos4INVERTIDA: string =
    'CARTA INVERTIDA El 4 de Bastos es una carta muy positiva, pero recuerda que lo negativo lo atraes tú, por ello debes tener cuidado con tus frustraciones. Por ejemplo: Tienes celos incontrolables que te llevan a perder la cabeza, esto es por tu falta de autoestima, que te hace pasar un mal momento, hasta el grado de que puede haber una ruptura de pareja. En el ámbito laboral podrías tener un ascenso laboral, aunque lo puedes arruinar si no te sientes capaz, por miedo a la responsabilidad. El 4 de Bastos anuncia expansión económica, por lo que puedes excederte en los gastos y empezar una época de problemas financieros.';
  bastos5: string =
    'BASTOS 5 CARTA POSITIVA: Significa movimiento y cambio. Te indica que vas por buen camino, aunque el trayecto tomará algún tiempo. Te encontrarás con dificultades y demoras en cuanto al tema de tu interés. Tendrás también algunas adversidades para conseguir lo que deseas, aunque al final de esta lucha alzarás la victoria, logrando todos tus objetivos. Un punto importante es que, también habla sobre finales, ya sea una relación, proyecto o trabajo.';
  bastos5AMOR: string =
    'SIGNIFICADO AMOR Es una carta complicada en temas del amor. Este naipe te habla de un amor imposible, muchas ilusiones y deseos que tú o tu persona de interés no pueden confesar. También te dice que se están guardando sentimientos para no dañar una amistad; puede esconder la verdad sobre la sexualidad, así como placeres que no se pueden mostrar. Simboliza la incapacidad que tenemos para expresar sentimientos.';
  bastos5DINERO: string =
    'SIGNIFICADO DINERO El 5 de Bastos es muy positivo en temas de dinero. Cuando este naipe sale en una lectura te anuncia suerte, fortuna y riquezas. El éxito financiero está asegurado para ti, pero es necesario que no pierdas el enfoque y la constancia para lograrlo. Muestra gran habilidad empresarial y es señal de opulencia, lujos y prestigio, gracias a la posición económica. También pudiera indicar un cambio de estilo de vida a una posición mucho mejor.';
  bastos5INVERTIDA: string =
    'CARTA INVERTIDA Anuncia que te enfrentarás a dificultades y lentitud, así como adversidades que se solucionarán con ciertas complicaciones. Es una carta que te habla de contratiempos y cambios que no se están dando y que resultan en dificultades para ti. Uno de los significados de esta carta es la advertencia de que pudieras enfrentarte a un enemigo. Otro aspecto puede ser que el consultante o la persona por la que preguntan, no tenga valor o se sienta cobarde y temeroso ante la idea de las confrontaciones o de sufrir una agresión. En su lado negativo, es una carta cargada de mucha agresividad y situaciones desfavorables. El lado oscuro del 5 de Bastos en general te habla de polémicas, conflictos y rupturas en todo sentido, desde temas de trabajo hasta cuestiones del amor. Puedes enfrentar dificultades legales de algún tipo, o si estás en pareja, puede referirse a separaciones en una relación. Existen sentimientos ocultos o que no se han dicho.';
  bastos6: string =
    'BASTOS 6 CARTA NEGATIVA: El 6 de bastos nos habla de situaciones que tienen que ver con depresión, tristeza y falta de motivación del consultante. Está relacionada con subordinados. En general es una carta negativa, pues habla de la falta de ánimo y la tristeza que está pasando el consultante. Señala falta de confianza en uno mismo, problemas laborales y negatividad. Se recomienda tomarlo como una llamada de atención para cambiar nuestra actitud ante las situaciones y salir adelante.';
  bastos6AMOR: string =
    'SIGNIFICADO AMOR  en el amor nos habla sobre dependencia afectiva, indica que el consultante se deja controlar por su pareja y siente una profunda insatisfacción emocional y física en la relación.';
  bastos6DINERO: string =
    'SIGNIFICADO DINERO  en temas de dinero indica al consultante que se encuentra limitado en sus finanzas. En su camino se encontrará con varios problemas y obstáculos para lograr una mejor situación económica';
  bastos6INVERTIDA: string =
    'CARTA INVERTIDA Para saber cuál es el lado invertido del 6 de Bastos, el basto superior izquierdo debe ser de color naranja. Si la carta al derecho nos habla de situaciones complicadas para el consultante, cuando está invertida, el problema será todavía más complicado. El mensaje que nos trae esta posición es de desilusión después de una larga espera, inseguridades, fragilidad, frustración personal, debido a que la decisión que el consultante ha tomado pudo, o puede ser incorrecta, trayendo grandes repercusiones. El gran aprendizaje que nos trae esta carta es que estemos preparados para lo que se aproxime. Podemos estar en la cima del éxito en un momento, pero por una cuestión u otra todo pudiera derrumbarse. Así es la vida, quizás nos encontremos en un momento difícil, pero el mejor consejo que les podemos dar es que “esto también pasará”, y que de todos estos problemas podemos aprender grandes lecciones, las cuales nos harán crecer como personas.';
  bastos7: string =
    'BASTOS 7 CARTA POSITIVA: Cuando aparece en tu tirada te traerá buenas noticias con referencia al trabajo, solo que no te confíes porque hay enemigos ocultos que envidian tu posición laboral. Te has esforzado mucho así que es momento de celebrar, aunque pronto verás que tus triunfos no son bien recibidos por todo el mundo e incluso te traerán enemigos.';
  bastos7AMOR: string =
    'SIGNIFICADO AMOR Buen periodo para la pareja, aunque se requiere de mucha comunicación para mejorar la relación.';
  bastos7DINERO: string =
    'SIGNIFICADO DINERO Un aumento salarial está en puerta y traerá un buen beneficio económico. Para ubicar el lado negativo del 7 de Bastos, es importante que tomes en cuenta la siguiente información: “Cuando aparezca en tu tirada y deseas saber si está al revés, deberás ubicar que el primer palo de arriba a la izquierda sea de color naranja o rojo, según sea el diseño de la carta';
  bastos7INVERTIDA: string =
    'CARTA INVERTIDA El lado negativo de la lectura te advierte que mientras tú brillas en el trabajo, existe una persona envidiosa que desea tu puesto, pero no se da cuenta de que tu éxito lo has logrado gracias a tu esfuerzo, así que se dedicará a hablar a tus espaldas para hacerte quedar mal. Otro rasgo negativo cuando aparece esta carta en una tirada es la inseguridad y autoestima del consultante, ya que en el trabajo se puede sentir poca cosa o incapaz, lo cual atrae dudas y lo puede hacer caer en errores. Cuando se pregunta por la pareja está advirtiendo que hay celos absurdos, que pueden acabar con la paciencia de la pareja hasta llegar a la ruptura.';
  bastos10: string =
    'BASTOS 10 CARTA POSITIVA: Bien aspectada anuncia comienzos y novedades, quizás un mensajero extranjero. Si la consulta es sobre la relación con alguien, señala que ese alguien es sincero con nosotros. Mal aspectada indica inestabilidad y disgustos. Recibirás el mensaje de un amigo o pariente, serán noticias alentadoras y felices. Si estás proyectando un viaje o un cambio, no lo dudes, anuncia un éxito rotundo. ';
  bastos10AMOR: string =
    'SIGNIFICADO AMOR Presenta relaciones apasionadas o problemas de celos. Hay que reflexionar si vale la pena luchar por esta relación. Si la respuesta es sí, aconseja trabajar en la comunicación. Cuando el consultante está soltero anuncia la llegada de una pareja joven y dinámica.';
  bastos10DINERO: string =
    'SIGNIFICADO DINERO Augura la llegada de un dinero inesperado, así como un crecimiento en lo laboral. Deben observarse los gastos y planificarlos. Mal aspectada indica un mal momento económico. Quizás el consultante haya tomado malas decisiones en el pasado y esté pagando hoy las consecuencias. Cuidado con los consejos recibidos.';
  bastos10INVERTIDA: string =
    'En posición invertida o acompañada de cartas negativas, la Sota de Bastos presenta confusiones e indecisiones. Indica obstáculos que asustarán al consultante. Éste deberá alcanzar la madurez necesaria para lograr la estabilidad. Es muy probable también que el consultante no haya tomado las mejores decisiones a la hora de comenzar sus proyectos, y por eso no esté obteniendo los resultados deseados.Cualquiera que sea la pregunta realizada, la respuesta será un resultado negativo, sin llegar a ser nefasto. Al tratarse de un mensajero, esta figura nos habla de noticias negativas y desagradables. También puede significar que la persona joven que describe la sota de bastos sea una persona inestable, desagradable, en quien no se debe confiar. Sin embargo esto será algo de carácter temporal. En el amor indica que debes ponerte en movimiento si quieres resolver los problemas de pareja. Si no la tienes, deja que las cosas avancen solas. Alguien podría estar interesado en ti, pero escucharás muchos rumores. No te dejes llevar, pero tampoco hagas oídos sordos. En el trabajo señala que debes mostrar más decisión. La falta de ésta podría traerte complicaciones.';
  bastos11: string =
    'BASTOS 11 CARTA POSITIVA: Cuando aparece esta carta en tu tirada está alertándote sobre tu liderazgo y el carisma que tienes, o bien de un hombre que viene del extranjero a tu vida. El Caballero de Bastos es una carta que habla de movimiento, de hacer las cosas con pasión. Señala que se tiene la fuerza, decisión y el carisma necesarios para realizar cualquier cosa que te propongas y enfrentar retos. También te está avisando que puede llegar un hombre extranjero a tu vida. ';
  bastos11AMOR: string =
    'SIGNIFICADO AMOR Habla de una relación sólida que debes apreciar y que es el momento de disfrutar de una relación plena.';
  bastos11DINERO: string =
    'SIGNIFICADO DINERO Puede ser que en breve tiempo llegue un aumento de dinero por nuevas oportunidades de empleo o negocio que viene desde el extranjero. O bien, te está alertando que puede haber un traslado de ciudad o incluso de país por necesidades laborales ';
  bastos11INVERTIDA: string =
    'CARTA INVERTIDA Cuando esta carta se presenta al revés deberás de tomar en cuenta que te está pidiendo reflexionar acerca de las oportunidades que se están presentando, porque tal vez no sea la mejor opción y representen un retroceso en tu vida, que pondrá de cabeza tu mundo. Así que es tiempo de que sigas a tu intuición y dejes pasar tiempo para que se aclaren tus dudas y puedas actuar. No actúes por impulso o puedes arrepentirte.';
  bastos12: string =
    'BASTOS 12 CARTA POSITIVA: Cuando aparece esta carta es momento de buscar consejo de alguien con más experiencia para que puedas hacer un cambio en tu vida, ya que las dudas te están provocando ansiedad y te pueden llevar a cometer errores. El Rey de Bastos te pide madurez para actuar. Es momento de hacer una introspección y ver qué áreas de tu vida no están equilibradas. Debes de tomar acciones para mejorar.';
  bastos12AMOR: string =
    'SIGNIFICADO AMOR Tienes una relación estable, un camino andado que te genera seguridad y estabilidad emocional. No te dejes cautivar por una aventura, porque lo puedes perder todo.';
  bastos12DINERO: string =
    'SIGNIFICADO DINERO Estabilidad económica, has trabajado mucho para tener hoy una vida tranquila. No caigas en tentaciones porque puedes perderlo todo.';
  bastos12INVERTIDA: string =
    'Cuando aparece el Rey de Bastos al revés, seguramente está el consultante pasando por un periodo de confusión o la autoestima la tiene muy baja, por tanto busca el consejo de una persona más experimentada, solo la baraja advierte que tenga cuidado a quién pide ayuda, ya que la persona en quien confianza no siempre quiere tu beneficio y solo puede estar manipulando al consultante para su beneficio. Por otra parte, si el consultante es una persona mayor, debe tener cuidado con dejarse seducir por un amor más joven que solo está buscando la estabilidad económica del consultante, sin importar los sentimientos, pero que a la larga puede perder toda su fortuna por esta relación interesada.';

  constructor() {}

  ngOnInit(): void {}

  filtrarOpciones(opciones: string[], terminoBusqueda: string): string[] {
    return opciones.filter((opcion) =>
      opcion.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
  }

  guardarOpciones() {
    this.opcionesSeleccionadas = {
      opcion1: this.opcion1,
      opcion2: this.opcion2,
      opcion3: this.opcion3,
      opcion4: this.opcion4,
      opcion5: this.opcion5,
      opcion6: this.opcion6,
    };
    console.log(this.opcionesSeleccionadas);
    switch (this.opcion1) {
      case 'As de oros':
        this.respuesta1 = this.asDEOro;
        this.respuesta12 = this.asDeorosAMOR;
        this.respuesta13 = this.asDeorosDINERO;
        this.respuesta14 = this.asDeorosINVERTIDA;
        break;
      case 'oro 02':
        this.respuesta1 = this.oro2;
        this.respuesta12 = this.oro2AMOR;
        this.respuesta13 = this.oro2DINERO;
        this.respuesta14 = this.oro3INVERTIDA;
        break;
      case 'oro 03':
        this.respuesta1 = this.oro3;
        this.respuesta12 = this.oro3AMOR;
        this.respuesta13 = this.oro3DINERO;
        this.respuesta14 = this.oro3INVERTIDA;
        break;
      case 'oro 04':
        this.respuesta1 = this.oro4;
        this.respuesta12 = this.oro4AMOR;
        this.respuesta13 = this.oro4DINERO;
        this.respuesta14 = this.oro4INVERTIDA;
        break;
      case 'oro 05':
        this.respuesta1 = this.oro5;
        this.respuesta12 = this.oro5AMOR;
        this.respuesta13 = this.oro5DINERO;
        this.respuesta14 = this.oro5INVERTIDA;
        break;
      case 'oro 06':
        this.respuesta1 = this.oro6;
        this.respuesta12 = this.oro6AMOR;
        this.respuesta13 = this.oro6DINERO;
        this.respuesta14 = this.oro6INVERTIDA;
        break;
      case 'oro 07':
        this.respuesta1 = this.oro7;
        this.respuesta12 = this.oro7AMOR;
        this.respuesta13 = this.oro7DINERO;
        this.respuesta14 = this.oro7INVERTIDA;
        break;
      case 'oro 10':
        this.respuesta1 = this.oro10;
        this.respuesta12 = this.oro10AMOR;
        this.respuesta13 = this.oro10DINERO;
        this.respuesta14 = this.oro10INVERTIDA;
        break;
      case 'oro 11':
        this.respuesta1 = this.oro11;
        this.respuesta12 = this.oro11AMOR;
        this.respuesta13 = this.oro11DINERO;
        this.respuesta14 = this.oro11INVERTIDA;
        break;
      case 'oro 12':
        this.respuesta1 = this.oro12;
        this.respuesta12 = this.oro12AMOR;
        this.respuesta13 = this.oro12DINERO;
        this.respuesta14 = this.oro12INVERTIDA;
        break;
      case 'As de copas':
        this.respuesta1 = this.asDeCopas;
        this.respuesta12 = this.asDeCopasAMOR;
        this.respuesta13 = this.asDeCopasDINERO;
        this.respuesta14 = this.asDeCopasINVERTIDA;
        break;
      case 'copa 02':
        this.respuesta1 = this.copa2;
        this.respuesta12 = this.copa2AMOR;
        this.respuesta13 = this.copa2DINERO;
        this.respuesta14 = this.copa2INVERTIDA;
        break;
      case 'copa 03':
        this.respuesta1 = this.copa3;
        this.respuesta12 = this.copa3AMOR;
        this.respuesta13 = this.copa3DINERO;
        this.respuesta14 = this.copa3INVERTIDA;
        break;
      case 'copa 04':
        this.respuesta1 = this.copa4;
        this.respuesta12 = this.copa4AMOR;
        this.respuesta13 = this.copa4DINERO;
        this.respuesta14 = this.copa4INVERTIDA;
        break;
      case 'copa 05':
        this.respuesta1 = this.copa5;
        this.respuesta12 = this.copa5AMOR;
        this.respuesta13 = this.copa5DINERO;
        this.respuesta14 = this.copa5INVERTIDA;
        break;
      case 'copa 06':
        this.respuesta1 = this.copa6;
        this.respuesta12 = this.copa6AMOR;
        this.respuesta13 = this.copa6DINERO;
        this.respuesta14 = this.copa6INVERTIDA;
        break;
      case 'copa 07':
        this.respuesta1 = this.copa7;
        this.respuesta12 = this.copa7AMOR;
        this.respuesta13 = this.copa7DINERO;
        this.respuesta14 = this.copa7INVERTIDA;
        break;
      case 'copa 10':
        this.respuesta1 = this.copa10;
        this.respuesta12 = this.copa10AMOR;
        this.respuesta13 = this.copa10DINERO;
        this.respuesta14 = this.copa10INVERTIDA;
        break;
      case 'copa 11':
        this.respuesta1 = this.copa11;
        this.respuesta12 = this.copa11AMOR;
        this.respuesta13 = this.copa11DINERO;
        this.respuesta14 = this.copa11INVERTIDA;
        break;
      case 'copa 12':
        this.respuesta1 = this.copa12;
        this.respuesta12 = this.copa12AMOR;
        this.respuesta13 = this.copa12DINERO;
        this.respuesta14 = this.copa12INVERTIDA;
        break;
      case 'As de espadas':
        this.respuesta1 = this.asDeEspadas;
        this.respuesta12 = this.asDeEspadasAMOR;
        this.respuesta13 = this.asDeEspadasDINERO;
        this.respuesta14 = this.asDeBastosINVERTIDA;
        break;
      case 'espada 02':
        this.respuesta1 = this.espada2;
        this.respuesta12 = this.espada2AMOR;
        this.respuesta13 = this.espada2DINERO;
        this.respuesta14 = this.espada2INVERTIDA;
        break;
      case 'espada 03':
        this.respuesta1 = this.espada3;
        this.respuesta12 = this.espada3AMOR;
        this.respuesta13 = this.espada3DINERO;
        this.respuesta14 = this.espada3INVERTIDA;
        break;
      case 'espada 04':
        this.respuesta1 = this.espada4;
        this.respuesta12 = this.espada4AMOR;
        this.respuesta13 = this.espada4DINERO;
        this.respuesta14 = this.espada4INVERTIDA;
        break;
      case 'espada 05':
        this.respuesta1 = this.espada5;
        this.respuesta12 = this.espada5AMOR;
        this.respuesta13 = this.espada5DINERO;
        this.respuesta14 = this.espada5INVERTIDA;
        break;
      case 'espada 06':
        this.respuesta1 = this.espada6;
        this.respuesta12 = this.espada6AMOR;
        this.respuesta13 = this.espada6DINERO;
        this.respuesta14 = this.espada6INVERTIDA;
        break;
      case 'espada 07':
        this.respuesta1 = this.espada7;
        this.respuesta12 = this.espada7AMOR;
        this.respuesta13 = this.espada7DINERO;
        this.respuesta14 = this.espada7INVERTIDA;
        break;
      case 'espada 10':
        this.respuesta1 = this.espada10;
        this.respuesta12 = this.espada10AMOR;
        this.respuesta13 = this.espada10DINERO;
        this.respuesta14 = this.espada10INVERTIDA;
        break;
      case 'espada 11':
        this.respuesta1 = this.espada11;
        this.respuesta12 = this.espada11AMOR;
        this.respuesta13 = this.espada11DINERO;
        this.respuesta14 = this.espada11INVERTIDA;
        break;
      case 'espada 12':
        this.respuesta1 = this.espada12;
        this.respuesta12 = this.espada12AMOR;
        this.respuesta13 = this.espada12DINERO;
        this.respuesta14 = this.espada12INVERTIDA;
        break;
      case 'As de bastos':
        this.respuesta1 = this.asDeBastos;
        this.respuesta12 = this.asDeBastosAMOR;
        this.respuesta13 = this.asDeBastosDINERO;
        this.respuesta14 = this.asDeBastosINVERTIDA;
        break;
      case 'bastos 02':
        this.respuesta1 = this.bastos2;
        this.respuesta12 = this.bastos2AMOR;
        this.respuesta13 = this.bastos2DINERO;
        this.respuesta14 = this.bastos2INVERTIDA;
        break;
      case 'bastos 03':
        this.respuesta1 = this.bastos3;
        this.respuesta12 = this.bastos3AMOR;
        this.respuesta13 = this.bastos3DINERO;
        this.respuesta14 = this.bastos3INVERTIDA;
        break;
      case 'bastos 04':
        this.respuesta1 = this.bastos4;
        this.respuesta12 = this.bastos4AMOR;
        this.respuesta13 = this.bastos4DINERO;
        this.respuesta14 = this.bastos4INVERTIDA;
        break;
      case 'bastos 05':
        this.respuesta1 = this.bastos5;
        this.respuesta12 = this.bastos5AMOR;
        this.respuesta13 = this.bastos5DINERO;
        this.respuesta14 = this.bastos5INVERTIDA;
        break;
      case 'bastos 06':
        this.respuesta1 = this.bastos6;
        this.respuesta12 = this.bastos6AMOR;
        this.respuesta13 = this.bastos6DINERO;
        this.respuesta14 = this.bastos6INVERTIDA;
        break;
      case 'bastos 07':
        this.respuesta1 = this.bastos7;
        this.respuesta12 = this.bastos7AMOR;
        this.respuesta13 = this.bastos7DINERO;
        this.respuesta14 = this.bastos7INVERTIDA;
        break;
      case 'bastos 10':
        this.respuesta1 = this.bastos10;
        this.respuesta12 = this.bastos10AMOR;
        this.respuesta13 = this.bastos10DINERO;
        this.respuesta14 = this.bastos10INVERTIDA;
        break;
      case 'bastos 11':
        this.respuesta1 = this.bastos11;
        this.respuesta12 = this.bastos11AMOR;
        this.respuesta13 = this.bastos11DINERO;
        this.respuesta14 = this.bastos11INVERTIDA;
        break;
      case 'bastos 12':
        this.respuesta1 = this.bastos12;
        this.respuesta12 = this.bastos12AMOR;
        this.respuesta13 = this.bastos12DINERO;
        this.respuesta14 = this.bastos12INVERTIDA;
        break;
      default:
        break;
    }
    switch (this.opcion2) {
      case 'As de oros':
        this.respuesta2 = this.asDEOro;
        this.respuesta22 = this.asDeorosAMOR;
        this.respuesta23 = this.asDeorosDINERO;
        this.respuesta24 = this.asDeorosINVERTIDA;
        break;
      case 'oro 02':
        this.respuesta2 = this.oro2;
        this.respuesta22 = this.oro2AMOR;
        this.respuesta23 = this.oro2DINERO;
        this.respuesta24 = this.oro3INVERTIDA;
        break;
      case 'oro 03':
        this.respuesta2 = this.oro3;
        this.respuesta22 = this.oro3AMOR;
        this.respuesta23 = this.oro3DINERO;
        this.respuesta24 = this.oro3INVERTIDA;
        break;
      case 'oro 04':
        this.respuesta2 = this.oro4;
        this.respuesta22 = this.oro4AMOR;
        this.respuesta23 = this.oro4DINERO;
        this.respuesta24 = this.oro4INVERTIDA;
        break;
      case 'oro 05':
        this.respuesta2 = this.oro5;
        this.respuesta22 = this.oro5AMOR;
        this.respuesta23 = this.oro5DINERO;
        this.respuesta24 = this.oro5INVERTIDA;
        break;
      case 'oro 06':
        this.respuesta2 = this.oro6;
        this.respuesta22 = this.oro6AMOR;
        this.respuesta23 = this.oro6DINERO;
        this.respuesta24 = this.oro6INVERTIDA;
        break;
      case 'oro 07':
        this.respuesta2 = this.oro7;
        this.respuesta22 = this.oro7AMOR;
        this.respuesta23 = this.oro7DINERO;
        this.respuesta24 = this.oro7INVERTIDA;
        break;
      case 'oro 10':
        this.respuesta2 = this.oro10;
        this.respuesta22 = this.oro10AMOR;
        this.respuesta23 = this.oro10DINERO;
        this.respuesta24 = this.oro10INVERTIDA;
        break;
      case 'oro 11':
        this.respuesta2 = this.oro11;
        this.respuesta22 = this.oro11AMOR;
        this.respuesta23 = this.oro11DINERO;
        this.respuesta24 = this.oro11INVERTIDA;
        break;
      case 'oro 12':
        this.respuesta2 = this.oro12;
        this.respuesta22 = this.oro12AMOR;
        this.respuesta23 = this.oro12DINERO;
        this.respuesta24 = this.oro12INVERTIDA;
        break;
      case 'As de copas':
        this.respuesta2 = this.asDeCopas;
        this.respuesta22 = this.asDeCopasAMOR;
        this.respuesta23 = this.asDeCopasDINERO;
        this.respuesta24 = this.asDeCopasINVERTIDA;
        break;
      case 'copa 02':
        this.respuesta2 = this.copa2;
        this.respuesta22 = this.copa2AMOR;
        this.respuesta23 = this.copa2DINERO;
        this.respuesta24 = this.copa2INVERTIDA;
        break;
      case 'copa 03':
        this.respuesta2 = this.copa3;
        this.respuesta22 = this.copa3AMOR;
        this.respuesta23 = this.copa3DINERO;
        this.respuesta24 = this.copa3INVERTIDA;
        break;
      case 'copa 04':
        this.respuesta2 = this.copa4;
        this.respuesta22 = this.copa4AMOR;
        this.respuesta23 = this.copa4DINERO;
        this.respuesta24 = this.copa4INVERTIDA;
        break;
      case 'copa 05':
        this.respuesta2 = this.copa5;
        this.respuesta22 = this.copa5AMOR;
        this.respuesta23 = this.copa5DINERO;
        this.respuesta24 = this.copa5INVERTIDA;
        break;
      case 'copa 06':
        this.respuesta2 = this.copa6;
        this.respuesta22 = this.copa6AMOR;
        this.respuesta23 = this.copa6DINERO;
        this.respuesta24 = this.copa6INVERTIDA;
        break;
      case 'copa 07':
        this.respuesta2 = this.copa7;
        this.respuesta22 = this.copa7AMOR;
        this.respuesta23 = this.copa7DINERO;
        this.respuesta24 = this.copa7INVERTIDA;
        break;
      case 'copa 10':
        this.respuesta2 = this.copa10;
        this.respuesta22 = this.copa10AMOR;
        this.respuesta23 = this.copa10DINERO;
        this.respuesta24 = this.copa10INVERTIDA;
        break;
      case 'copa 11':
        this.respuesta2 = this.copa11;
        this.respuesta22 = this.copa11AMOR;
        this.respuesta23 = this.copa11DINERO;
        this.respuesta24 = this.copa11INVERTIDA;
        break;
      case 'copa 12':
        this.respuesta2 = this.copa12;
        this.respuesta22 = this.copa12AMOR;
        this.respuesta23 = this.copa12DINERO;
        this.respuesta24 = this.copa12INVERTIDA;
        break;
      case 'As de espadas':
        this.respuesta2 = this.asDeEspadas;
        this.respuesta22 = this.asDeEspadasAMOR;
        this.respuesta23 = this.asDeEspadasDINERO;
        this.respuesta24 = this.asDeBastosINVERTIDA;
        break;
      case 'espada 02':
        this.respuesta2 = this.espada2;
        this.respuesta22 = this.espada2AMOR;
        this.respuesta23 = this.espada2DINERO;
        this.respuesta24 = this.espada2INVERTIDA;
        break;
      case 'espada 03':
        this.respuesta2 = this.espada3;
        this.respuesta22 = this.espada3AMOR;
        this.respuesta23 = this.espada3DINERO;
        this.respuesta24 = this.espada3INVERTIDA;
        break;
      case 'espada 04':
        this.respuesta2 = this.espada4;
        this.respuesta22 = this.espada4AMOR;
        this.respuesta23 = this.espada4DINERO;
        this.respuesta24 = this.espada4INVERTIDA;
        break;
      case 'espada 05':
        this.respuesta2 = this.espada5;
        this.respuesta22 = this.espada5AMOR;
        this.respuesta23 = this.espada5DINERO;
        this.respuesta24 = this.espada5INVERTIDA;
        break;
      case 'espada 06':
        this.respuesta2 = this.espada6;
        this.respuesta22 = this.espada6AMOR;
        this.respuesta23 = this.espada6DINERO;
        this.respuesta24 = this.espada6INVERTIDA;
        break;
      case 'espada 07':
        this.respuesta2 = this.espada7;
        this.respuesta22 = this.espada7AMOR;
        this.respuesta23 = this.espada7DINERO;
        this.respuesta24 = this.espada7INVERTIDA;
        break;
      case 'espada 10':
        this.respuesta2 = this.espada10;
        this.respuesta22 = this.espada10AMOR;
        this.respuesta23 = this.espada10DINERO;
        this.respuesta24 = this.espada10INVERTIDA;
        break;
      case 'espada 11':
        this.respuesta2 = this.espada11;
        this.respuesta22 = this.espada11AMOR;
        this.respuesta23 = this.espada11DINERO;
        this.respuesta24 = this.espada11INVERTIDA;
        break;
      case 'espada 12':
        this.respuesta2 = this.espada12;
        this.respuesta22 = this.espada12AMOR;
        this.respuesta23 = this.espada12DINERO;
        this.respuesta24 = this.espada12INVERTIDA;
        break;
      case 'As de bastos':
        this.respuesta2 = this.asDeBastos;
        this.respuesta22 = this.asDeBastosAMOR;
        this.respuesta23 = this.asDeBastosDINERO;
        this.respuesta24 = this.asDeBastosINVERTIDA;
        break;
      case 'bastos 02':
        this.respuesta2 = this.bastos2;
        this.respuesta22 = this.bastos2AMOR;
        this.respuesta23 = this.bastos2DINERO;
        this.respuesta24 = this.bastos2INVERTIDA;
        break;
      case 'bastos 03':
        this.respuesta2 = this.bastos3;
        this.respuesta22 = this.bastos3AMOR;
        this.respuesta23 = this.bastos3DINERO;
        this.respuesta24 = this.bastos3INVERTIDA;
        break;
      case 'bastos 04':
        this.respuesta2 = this.bastos4;
        this.respuesta22 = this.bastos4AMOR;
        this.respuesta23 = this.bastos4DINERO;
        this.respuesta24 = this.bastos4INVERTIDA;
        break;
      case 'bastos 05':
        this.respuesta2 = this.bastos5;
        this.respuesta22 = this.bastos5AMOR;
        this.respuesta23 = this.bastos5DINERO;
        this.respuesta24 = this.bastos5INVERTIDA;
        break;
      case 'bastos 06':
        this.respuesta2 = this.bastos6;
        this.respuesta22 = this.bastos6AMOR;
        this.respuesta23 = this.bastos6DINERO;
        this.respuesta24 = this.bastos6INVERTIDA;
        break;
      case 'bastos 07':
        this.respuesta2 = this.bastos7;
        this.respuesta22 = this.bastos7AMOR;
        this.respuesta23 = this.bastos7DINERO;
        this.respuesta24 = this.bastos7INVERTIDA;
        break;
      case 'bastos 10':
        this.respuesta2 = this.bastos10;
        this.respuesta22 = this.bastos10AMOR;
        this.respuesta23 = this.bastos10DINERO;
        this.respuesta24 = this.bastos10INVERTIDA;
        break;
      case 'bastos 11':
        this.respuesta2 = this.bastos11;
        this.respuesta22 = this.bastos11AMOR;
        this.respuesta23 = this.bastos11DINERO;
        this.respuesta24 = this.bastos11INVERTIDA;
        break;
      case 'bastos 12':
        this.respuesta2 = this.bastos12;
        this.respuesta22 = this.bastos12AMOR;
        this.respuesta23 = this.bastos12DINERO;
        this.respuesta24 = this.bastos12INVERTIDA;
        break;
      default:
        break;
    }

    switch (this.opcion3) {
      case 'As de oros':
        this.respuesta3 = this.asDEOro;
        this.respuesta32 = this.asDeorosAMOR;
        this.respuesta33 = this.asDeorosDINERO;
        this.respuesta34 = this.asDeorosINVERTIDA;
        break;
      case 'oro 02':
        this.respuesta3 = this.oro2;
        this.respuesta32 = this.oro2AMOR;
        this.respuesta33 = this.oro2DINERO;
        this.respuesta34 = this.oro3INVERTIDA;
        break;
      case 'oro 03':
        this.respuesta3 = this.oro3;
        this.respuesta32 = this.oro3AMOR;
        this.respuesta33 = this.oro3DINERO;
        this.respuesta34 = this.oro3INVERTIDA;
        break;
      case 'oro 04':
        this.respuesta3 = this.oro4;
        this.respuesta32 = this.oro4AMOR;
        this.respuesta33 = this.oro4DINERO;
        this.respuesta34 = this.oro4INVERTIDA;
        break;
      case 'oro 05':
        this.respuesta3 = this.oro5;
        this.respuesta32 = this.oro5AMOR;
        this.respuesta33 = this.oro5DINERO;
        this.respuesta34 = this.oro5INVERTIDA;
        break;
      case 'oro 06':
        this.respuesta3 = this.oro6;
        this.respuesta32 = this.oro6AMOR;
        this.respuesta33 = this.oro6DINERO;
        this.respuesta34 = this.oro6INVERTIDA;
        break;
      case 'oro 07':
        this.respuesta3 = this.oro7;
        this.respuesta32 = this.oro7AMOR;
        this.respuesta33 = this.oro7DINERO;
        this.respuesta34 = this.oro7INVERTIDA;
        break;
      case 'oro 10':
        this.respuesta3 = this.oro10;
        this.respuesta32 = this.oro10AMOR;
        this.respuesta33 = this.oro10DINERO;
        this.respuesta34 = this.oro10INVERTIDA;
        break;
      case 'oro 11':
        this.respuesta3 = this.oro11;
        this.respuesta32 = this.oro11AMOR;
        this.respuesta33 = this.oro11DINERO;
        this.respuesta34 = this.oro11INVERTIDA;
        break;
      case 'oro 12':
        this.respuesta3 = this.oro12;
        this.respuesta32 = this.oro12AMOR;
        this.respuesta33 = this.oro12DINERO;
        this.respuesta34 = this.oro12INVERTIDA;
        break;
      case 'As de copas':
        this.respuesta3 = this.asDeCopas;
        this.respuesta32 = this.asDeCopasAMOR;
        this.respuesta33 = this.asDeCopasDINERO;
        this.respuesta34 = this.asDeCopasINVERTIDA;
        break;
      case 'copa 02':
        this.respuesta3 = this.copa2;
        this.respuesta32 = this.copa2AMOR;
        this.respuesta33 = this.copa2DINERO;
        this.respuesta34 = this.copa2INVERTIDA;
        break;
      case 'copa 03':
        this.respuesta3 = this.copa3;
        this.respuesta32 = this.copa3AMOR;
        this.respuesta33 = this.copa3DINERO;
        this.respuesta34 = this.copa3INVERTIDA;
        break;
      case 'copa 04':
        this.respuesta3 = this.copa4;
        this.respuesta32 = this.copa4AMOR;
        this.respuesta33 = this.copa4DINERO;
        this.respuesta34 = this.copa4INVERTIDA;
        break;
      case 'copa 05':
        this.respuesta3 = this.copa5;
        this.respuesta32 = this.copa5AMOR;
        this.respuesta33 = this.copa5DINERO;
        this.respuesta34 = this.copa5INVERTIDA;
        break;
      case 'copa 06':
        this.respuesta3 = this.copa6;
        this.respuesta32 = this.copa6AMOR;
        this.respuesta33 = this.copa6DINERO;
        this.respuesta34 = this.copa6INVERTIDA;
        break;
      case 'copa 07':
        this.respuesta3 = this.copa7;
        this.respuesta32 = this.copa7AMOR;
        this.respuesta33 = this.copa7DINERO;
        this.respuesta34 = this.copa7INVERTIDA;
        break;
      case 'copa 10':
        this.respuesta3 = this.copa10;
        this.respuesta32 = this.copa10AMOR;
        this.respuesta33 = this.copa10DINERO;
        this.respuesta34 = this.copa10INVERTIDA;
        break;
      case 'copa 11':
        this.respuesta3 = this.copa11;
        this.respuesta32 = this.copa11AMOR;
        this.respuesta33 = this.copa11DINERO;
        this.respuesta34 = this.copa11INVERTIDA;
        break;
      case 'copa 12':
        this.respuesta3 = this.copa12;
        this.respuesta32 = this.copa12AMOR;
        this.respuesta33 = this.copa12DINERO;
        this.respuesta34 = this.copa12INVERTIDA;
        break;
      case 'As de espadas':
        this.respuesta3 = this.asDeEspadas;
        this.respuesta32 = this.asDeEspadasAMOR;
        this.respuesta33 = this.asDeEspadasDINERO;
        this.respuesta34 = this.asDeBastosINVERTIDA;
        break;
      case 'espada 02':
        this.respuesta3 = this.espada2;
        this.respuesta32 = this.espada2AMOR;
        this.respuesta33 = this.espada2DINERO;
        this.respuesta34 = this.espada2INVERTIDA;
        break;
      case 'espada 03':
        this.respuesta3 = this.espada3;
        this.respuesta32 = this.espada3AMOR;
        this.respuesta33 = this.espada3DINERO;
        this.respuesta34 = this.espada3INVERTIDA;
        break;
      case 'espada 04':
        this.respuesta3 = this.espada4;
        this.respuesta32 = this.espada4AMOR;
        this.respuesta33 = this.espada4DINERO;
        this.respuesta34 = this.espada4INVERTIDA;
        break;
      case 'espada 05':
        this.respuesta3 = this.espada5;
        this.respuesta32 = this.espada5AMOR;
        this.respuesta33 = this.espada5DINERO;
        this.respuesta34 = this.espada5INVERTIDA;
        break;
      case 'espada 06':
        this.respuesta3 = this.espada6;
        this.respuesta32 = this.espada6AMOR;
        this.respuesta33 = this.espada6DINERO;
        this.respuesta34 = this.espada6INVERTIDA;
        break;
      case 'espada 07':
        this.respuesta3 = this.espada7;
        this.respuesta32 = this.espada7AMOR;
        this.respuesta33 = this.espada7DINERO;
        this.respuesta34 = this.espada7INVERTIDA;
        break;
      case 'espada 10':
        this.respuesta3 = this.espada10;
        this.respuesta32 = this.espada10AMOR;
        this.respuesta33 = this.espada10DINERO;
        this.respuesta34 = this.espada10INVERTIDA;
        break;
      case 'espada 11':
        this.respuesta3 = this.espada11;
        this.respuesta32 = this.espada11AMOR;
        this.respuesta33 = this.espada11DINERO;
        this.respuesta34 = this.espada11INVERTIDA;
        break;
      case 'espada 12':
        this.respuesta3 = this.espada12;
        this.respuesta32 = this.espada12AMOR;
        this.respuesta33 = this.espada12DINERO;
        this.respuesta34 = this.espada12INVERTIDA;
        break;
      case 'As de bastos':
        this.respuesta3 = this.asDeBastos;
        this.respuesta32 = this.asDeBastosAMOR;
        this.respuesta33 = this.asDeBastosDINERO;
        this.respuesta34 = this.asDeBastosINVERTIDA;
        break;
      case 'bastos 02':
        this.respuesta3 = this.bastos2;
        this.respuesta32 = this.bastos2AMOR;
        this.respuesta33 = this.bastos2DINERO;
        this.respuesta34 = this.bastos2INVERTIDA;
        break;
      case 'bastos 03':
        this.respuesta3 = this.bastos3;
        this.respuesta32 = this.bastos3AMOR;
        this.respuesta33 = this.bastos3DINERO;
        this.respuesta34 = this.bastos3INVERTIDA;
        break;
      case 'bastos 04':
        this.respuesta3 = this.bastos4;
        this.respuesta32 = this.bastos4AMOR;
        this.respuesta33 = this.bastos4DINERO;
        this.respuesta34 = this.bastos4INVERTIDA;
        break;
      case 'bastos 05':
        this.respuesta3 = this.bastos5;
        this.respuesta32 = this.bastos5AMOR;
        this.respuesta33 = this.bastos5DINERO;
        this.respuesta34 = this.bastos5INVERTIDA;
        break;
      case 'bastos 06':
        this.respuesta3 = this.bastos6;
        this.respuesta32 = this.bastos6AMOR;
        this.respuesta33 = this.bastos6DINERO;
        this.respuesta34 = this.bastos6INVERTIDA;
        break;
      case 'bastos 07':
        this.respuesta3 = this.bastos7;
        this.respuesta32 = this.bastos7AMOR;
        this.respuesta33 = this.bastos7DINERO;
        this.respuesta34 = this.bastos7INVERTIDA;
        break;
      case 'bastos 10':
        this.respuesta3 = this.bastos10;
        this.respuesta32 = this.bastos10AMOR;
        this.respuesta33 = this.bastos10DINERO;
        this.respuesta34 = this.bastos10INVERTIDA;
        break;
      case 'bastos 11':
        this.respuesta3 = this.bastos11;
        this.respuesta32 = this.bastos11AMOR;
        this.respuesta33 = this.bastos11DINERO;
        this.respuesta34 = this.bastos11INVERTIDA;
        break;
      case 'bastos 12':
        this.respuesta3 = this.bastos12;
        this.respuesta32 = this.bastos12AMOR;
        this.respuesta33 = this.bastos12DINERO;
        this.respuesta34 = this.bastos12INVERTIDA;
        break;
      default:
        break;
    }
    switch (this.opcion4) {
      case 'As de oros':
        this.respuesta4 = this.asDEOro;
        this.respuesta42 = this.asDeorosAMOR;
        this.respuesta43 = this.asDeorosDINERO;
        this.respuesta44 = this.asDeorosINVERTIDA;
        break;
      case 'oro 02':
        this.respuesta4 = this.oro2;
        this.respuesta42 = this.oro2AMOR;
        this.respuesta43 = this.oro2DINERO;
        this.respuesta44 = this.oro3INVERTIDA;
        break;
      case 'oro 03':
        this.respuesta4 = this.oro3;
        this.respuesta42 = this.oro3AMOR;
        this.respuesta43 = this.oro3DINERO;
        this.respuesta44 = this.oro3INVERTIDA;
        break;
      case 'oro 04':
        this.respuesta4 = this.oro4;
        this.respuesta42 = this.oro4AMOR;
        this.respuesta43 = this.oro4DINERO;
        this.respuesta44 = this.oro4INVERTIDA;
        break;
      case 'oro 05':
        this.respuesta4 = this.oro5;
        this.respuesta42 = this.oro5AMOR;
        this.respuesta43 = this.oro5DINERO;
        this.respuesta44 = this.oro5INVERTIDA;
        break;
      case 'oro 06':
        this.respuesta4 = this.oro6;
        this.respuesta42 = this.oro6AMOR;
        this.respuesta43 = this.oro6DINERO;
        this.respuesta44 = this.oro6INVERTIDA;
        break;
      case 'oro 07':
        this.respuesta4 = this.oro7;
        this.respuesta42 = this.oro7AMOR;
        this.respuesta43 = this.oro7DINERO;
        this.respuesta44 = this.oro7INVERTIDA;
        break;
      case 'oro 10':
        this.respuesta4 = this.oro10;
        this.respuesta42 = this.oro10AMOR;
        this.respuesta43 = this.oro10DINERO;
        this.respuesta44 = this.oro10INVERTIDA;
        break;
      case 'oro 11':
        this.respuesta4 = this.oro11;
        this.respuesta42 = this.oro11AMOR;
        this.respuesta43 = this.oro11DINERO;
        this.respuesta44 = this.oro11INVERTIDA;
        break;
      case 'oro 12':
        this.respuesta4 = this.oro12;
        this.respuesta42 = this.oro12AMOR;
        this.respuesta43 = this.oro12DINERO;
        this.respuesta44 = this.oro12INVERTIDA;
        break;
      case 'As de copas':
        this.respuesta4 = this.asDeCopas;
        this.respuesta42 = this.asDeCopasAMOR;
        this.respuesta43 = this.asDeCopasDINERO;
        this.respuesta44 = this.asDeCopasINVERTIDA;
        break;
      case 'copa 02':
        this.respuesta4 = this.copa2;
        this.respuesta42 = this.copa2AMOR;
        this.respuesta43 = this.copa2DINERO;
        this.respuesta44 = this.copa2INVERTIDA;
        break;
      case 'copa 03':
        this.respuesta4 = this.copa3;
        this.respuesta42 = this.copa3AMOR;
        this.respuesta43 = this.copa3DINERO;
        this.respuesta44 = this.copa3INVERTIDA;
        break;
      case 'copa 04':
        this.respuesta4 = this.copa4;
        this.respuesta42 = this.copa4AMOR;
        this.respuesta43 = this.copa4DINERO;
        this.respuesta44 = this.copa4INVERTIDA;
        break;
      case 'copa 05':
        this.respuesta4 = this.copa5;
        this.respuesta42 = this.copa5AMOR;
        this.respuesta43 = this.copa5DINERO;
        this.respuesta44 = this.copa5INVERTIDA;
        break;
      case 'copa 06':
        this.respuesta4 = this.copa6;
        this.respuesta42 = this.copa6AMOR;
        this.respuesta43 = this.copa6DINERO;
        this.respuesta44 = this.copa6INVERTIDA;
        break;
      case 'copa 07':
        this.respuesta4 = this.copa7;
        this.respuesta42 = this.copa7AMOR;
        this.respuesta43 = this.copa7DINERO;
        this.respuesta44 = this.copa7INVERTIDA;
        break;
      case 'copa 10':
        this.respuesta4 = this.copa10;
        this.respuesta42 = this.copa10AMOR;
        this.respuesta43 = this.copa10DINERO;
        this.respuesta44 = this.copa10INVERTIDA;
        break;
      case 'copa 11':
        this.respuesta4 = this.copa11;
        this.respuesta42 = this.copa11AMOR;
        this.respuesta43 = this.copa11DINERO;
        this.respuesta44 = this.copa11INVERTIDA;
        break;
      case 'copa 12':
        this.respuesta4 = this.copa12;
        this.respuesta42 = this.copa12AMOR;
        this.respuesta43 = this.copa12DINERO;
        this.respuesta44 = this.copa12INVERTIDA;
        break;
      case 'As de espadas':
        this.respuesta4 = this.asDeEspadas;
        this.respuesta42 = this.asDeEspadasAMOR;
        this.respuesta43 = this.asDeEspadasDINERO;
        this.respuesta44 = this.asDeBastosINVERTIDA;
        break;
      case 'espada 02':
        this.respuesta4 = this.espada2;
        this.respuesta42 = this.espada2AMOR;
        this.respuesta43 = this.espada2DINERO;
        this.respuesta44 = this.espada2INVERTIDA;
        break;
      case 'espada 03':
        this.respuesta4 = this.espada3;
        this.respuesta42 = this.espada3AMOR;
        this.respuesta43 = this.espada3DINERO;
        this.respuesta44 = this.espada3INVERTIDA;
        break;
      case 'espada 04':
        this.respuesta4 = this.espada4;
        this.respuesta42 = this.espada4AMOR;
        this.respuesta43 = this.espada4DINERO;
        this.respuesta44 = this.espada4INVERTIDA;
        break;
      case 'espada 05':
        this.respuesta4 = this.espada5;
        this.respuesta42 = this.espada5AMOR;
        this.respuesta43 = this.espada5DINERO;
        this.respuesta44 = this.espada5INVERTIDA;
        break;
      case 'espada 06':
        this.respuesta4 = this.espada6;
        this.respuesta42 = this.espada6AMOR;
        this.respuesta43 = this.espada6DINERO;
        this.respuesta44 = this.espada6INVERTIDA;
        break;
      case 'espada 07':
        this.respuesta4 = this.espada7;
        this.respuesta42 = this.espada7AMOR;
        this.respuesta43 = this.espada7DINERO;
        this.respuesta44 = this.espada7INVERTIDA;
        break;
      case 'espada 10':
        this.respuesta4 = this.espada10;
        this.respuesta42 = this.espada10AMOR;
        this.respuesta43 = this.espada10DINERO;
        this.respuesta44 = this.espada10INVERTIDA;
        break;
      case 'espada 11':
        this.respuesta4 = this.espada11;
        this.respuesta42 = this.espada11AMOR;
        this.respuesta43 = this.espada11DINERO;
        this.respuesta44 = this.espada11INVERTIDA;
        break;
      case 'espada 12':
        this.respuesta4 = this.espada12;
        this.respuesta42 = this.espada12AMOR;
        this.respuesta43 = this.espada12DINERO;
        this.respuesta44 = this.espada12INVERTIDA;
        break;
      case 'As de bastos':
        this.respuesta4 = this.asDeBastos;
        this.respuesta42 = this.asDeBastosAMOR;
        this.respuesta43 = this.asDeBastosDINERO;
        this.respuesta44 = this.asDeBastosINVERTIDA;
        break;
      case 'bastos 02':
        this.respuesta4 = this.bastos2;
        this.respuesta42 = this.bastos2AMOR;
        this.respuesta43 = this.bastos2DINERO;
        this.respuesta44 = this.bastos2INVERTIDA;
        break;
      case 'bastos 03':
        this.respuesta4 = this.bastos3;
        this.respuesta42 = this.bastos3AMOR;
        this.respuesta43 = this.bastos3DINERO;
        this.respuesta44 = this.bastos3INVERTIDA;
        break;
      case 'bastos 04':
        this.respuesta4 = this.bastos4;
        this.respuesta42 = this.bastos4AMOR;
        this.respuesta43 = this.bastos4DINERO;
        this.respuesta44 = this.bastos4INVERTIDA;
        break;
      case 'bastos 05':
        this.respuesta4 = this.bastos5;
        this.respuesta42 = this.bastos5AMOR;
        this.respuesta43 = this.bastos5DINERO;
        this.respuesta44 = this.bastos5INVERTIDA;
        break;
      case 'bastos 06':
        this.respuesta4 = this.bastos6;
        this.respuesta42 = this.bastos6AMOR;
        this.respuesta43 = this.bastos6DINERO;
        this.respuesta44 = this.bastos6INVERTIDA;
        break;
      case 'bastos 07':
        this.respuesta4 = this.bastos7;
        this.respuesta42 = this.bastos7AMOR;
        this.respuesta43 = this.bastos7DINERO;
        this.respuesta44 = this.bastos7INVERTIDA;
        break;
      case 'bastos 10':
        this.respuesta4 = this.bastos10;
        this.respuesta42 = this.bastos10AMOR;
        this.respuesta43 = this.bastos10DINERO;
        this.respuesta44 = this.bastos10INVERTIDA;
        break;
      case 'bastos 11':
        this.respuesta4 = this.bastos11;
        this.respuesta42 = this.bastos11AMOR;
        this.respuesta43 = this.bastos11DINERO;
        this.respuesta44 = this.bastos11INVERTIDA;
        break;
      case 'bastos 12':
        this.respuesta4 = this.bastos12;
        this.respuesta42 = this.bastos12AMOR;
        this.respuesta43 = this.bastos12DINERO;
        this.respuesta44 = this.bastos12INVERTIDA;
        break;
      default:
        break;
    }
    switch (this.opcion5) {
      case 'As de oros':
        this.respuesta5 = this.asDEOro;
        this.respuesta52 = this.asDeorosAMOR;
        this.respuesta53 = this.asDeorosDINERO;
        this.respuesta54 = this.asDeorosINVERTIDA;
        break;
      case 'oro 02':
        this.respuesta5 = this.oro2;
        this.respuesta52 = this.oro2AMOR;
        this.respuesta53 = this.oro2DINERO;
        this.respuesta54 = this.oro3INVERTIDA;
        break;
      case 'oro 03':
        this.respuesta5 = this.oro3;
        this.respuesta52 = this.oro3AMOR;
        this.respuesta53 = this.oro3DINERO;
        this.respuesta54 = this.oro3INVERTIDA;
        break;
      case 'oro 04':
        this.respuesta5 = this.oro4;
        this.respuesta52 = this.oro4AMOR;
        this.respuesta53 = this.oro4DINERO;
        this.respuesta54 = this.oro4INVERTIDA;
        break;
      case 'oro 05':
        this.respuesta5 = this.oro5;
        this.respuesta52 = this.oro5AMOR;
        this.respuesta53 = this.oro5DINERO;
        this.respuesta54 = this.oro5INVERTIDA;
        break;
      case 'oro 06':
        this.respuesta5 = this.oro6;
        this.respuesta52 = this.oro6AMOR;
        this.respuesta53 = this.oro6DINERO;
        this.respuesta54 = this.oro6INVERTIDA;
        break;
      case 'oro 07':
        this.respuesta5 = this.oro7;
        this.respuesta52 = this.oro7AMOR;
        this.respuesta53 = this.oro7DINERO;
        this.respuesta54 = this.oro7INVERTIDA;
        break;
      case 'oro 10':
        this.respuesta5 = this.oro10;
        this.respuesta52 = this.oro10AMOR;
        this.respuesta53 = this.oro10DINERO;
        this.respuesta54 = this.oro10INVERTIDA;
        break;
      case 'oro 11':
        this.respuesta5 = this.oro11;
        this.respuesta52 = this.oro11AMOR;
        this.respuesta53 = this.oro11DINERO;
        this.respuesta54 = this.oro11INVERTIDA;
        break;
      case 'oro 12':
        this.respuesta5 = this.oro12;
        this.respuesta52 = this.oro12AMOR;
        this.respuesta53 = this.oro12DINERO;
        this.respuesta54 = this.oro12INVERTIDA;
        break;
      case 'As de copas':
        this.respuesta5 = this.asDeCopas;
        this.respuesta52 = this.asDeCopasAMOR;
        this.respuesta53 = this.asDeCopasDINERO;
        this.respuesta54 = this.asDeCopasINVERTIDA;
        break;
      case 'copa 02':
        this.respuesta5 = this.copa2;
        this.respuesta52 = this.copa2AMOR;
        this.respuesta53 = this.copa2DINERO;
        this.respuesta54 = this.copa2INVERTIDA;
        break;
      case 'copa 03':
        this.respuesta5 = this.copa3;
        this.respuesta52 = this.copa3AMOR;
        this.respuesta53 = this.copa3DINERO;
        this.respuesta54 = this.copa3INVERTIDA;
        break;
      case 'copa 04':
        this.respuesta5 = this.copa4;
        this.respuesta52 = this.copa4AMOR;
        this.respuesta53 = this.copa4DINERO;
        this.respuesta54 = this.copa4INVERTIDA;
        break;
      case 'copa 05':
        this.respuesta5 = this.copa5;
        this.respuesta52 = this.copa5AMOR;
        this.respuesta53 = this.copa5DINERO;
        this.respuesta54 = this.copa5INVERTIDA;
        break;
      case 'copa 06':
        this.respuesta5 = this.copa6;
        this.respuesta52 = this.copa6AMOR;
        this.respuesta53 = this.copa6DINERO;
        this.respuesta54 = this.copa6INVERTIDA;
        break;
      case 'copa 07':
        this.respuesta5 = this.copa7;
        this.respuesta52 = this.copa7AMOR;
        this.respuesta53 = this.copa7DINERO;
        this.respuesta54 = this.copa7INVERTIDA;
        break;
      case 'copa 10':
        this.respuesta5 = this.copa10;
        this.respuesta52 = this.copa10AMOR;
        this.respuesta53 = this.copa10DINERO;
        this.respuesta54 = this.copa10INVERTIDA;
        break;
      case 'copa 11':
        this.respuesta5 = this.copa11;
        this.respuesta52 = this.copa11AMOR;
        this.respuesta53 = this.copa11DINERO;
        this.respuesta54 = this.copa11INVERTIDA;
        break;
      case 'copa 12':
        this.respuesta5 = this.copa12;
        this.respuesta52 = this.copa12AMOR;
        this.respuesta53 = this.copa12DINERO;
        this.respuesta54 = this.copa12INVERTIDA;
        break;
      case 'As de espadas':
        this.respuesta5 = this.asDeEspadas;
        this.respuesta52 = this.asDeEspadasAMOR;
        this.respuesta53 = this.asDeEspadasDINERO;
        this.respuesta54 = this.asDeBastosINVERTIDA;
        break;
      case 'espada 02':
        this.respuesta5 = this.espada2;
        this.respuesta52 = this.espada2AMOR;
        this.respuesta53 = this.espada2DINERO;
        this.respuesta54 = this.espada2INVERTIDA;
        break;
      case 'espada 03':
        this.respuesta5 = this.espada3;
        this.respuesta52 = this.espada3AMOR;
        this.respuesta53 = this.espada3DINERO;
        this.respuesta54 = this.espada3INVERTIDA;
        break;
      case 'espada 04':
        this.respuesta5 = this.espada4;
        this.respuesta52 = this.espada4AMOR;
        this.respuesta53 = this.espada4DINERO;
        this.respuesta54 = this.espada4INVERTIDA;
        break;
      case 'espada 05':
        this.respuesta5 = this.espada5;
        this.respuesta52 = this.espada5AMOR;
        this.respuesta53 = this.espada5DINERO;
        this.respuesta54 = this.espada5INVERTIDA;
        break;
      case 'espada 06':
        this.respuesta5 = this.espada6;
        this.respuesta52 = this.espada6AMOR;
        this.respuesta53 = this.espada6DINERO;
        this.respuesta54 = this.espada6INVERTIDA;
        break;
      case 'espada 07':
        this.respuesta5 = this.espada7;
        this.respuesta52 = this.espada7AMOR;
        this.respuesta53 = this.espada7DINERO;
        this.respuesta54 = this.espada7INVERTIDA;
        break;
      case 'espada 10':
        this.respuesta5 = this.espada10;
        this.respuesta52 = this.espada10AMOR;
        this.respuesta53 = this.espada10DINERO;
        this.respuesta54 = this.espada10INVERTIDA;
        break;
      case 'espada 11':
        this.respuesta5 = this.espada11;
        this.respuesta52 = this.espada11AMOR;
        this.respuesta53 = this.espada11DINERO;
        this.respuesta54 = this.espada11INVERTIDA;
        break;
      case 'espada 12':
        this.respuesta5 = this.espada12;
        this.respuesta52 = this.espada12AMOR;
        this.respuesta53 = this.espada12DINERO;
        this.respuesta54 = this.espada12INVERTIDA;
        break;
      case 'As de bastos':
        this.respuesta5 = this.asDeBastos;
        this.respuesta52 = this.asDeBastosAMOR;
        this.respuesta53 = this.asDeBastosDINERO;
        this.respuesta54 = this.asDeBastosINVERTIDA;
        break;
      case 'bastos 02':
        this.respuesta5 = this.bastos2;
        this.respuesta52 = this.bastos2AMOR;
        this.respuesta53 = this.bastos2DINERO;
        this.respuesta54 = this.bastos2INVERTIDA;
        break;
      case 'bastos 03':
        this.respuesta5 = this.bastos3;
        this.respuesta52 = this.bastos3AMOR;
        this.respuesta53 = this.bastos3DINERO;
        this.respuesta54 = this.bastos3INVERTIDA;
        break;
      case 'bastos 04':
        this.respuesta5 = this.bastos4;
        this.respuesta52 = this.bastos4AMOR;
        this.respuesta53 = this.bastos4DINERO;
        this.respuesta54 = this.bastos4INVERTIDA;
        break;
      case 'bastos 05':
        this.respuesta5 = this.bastos5;
        this.respuesta52 = this.bastos5AMOR;
        this.respuesta53 = this.bastos5DINERO;
        this.respuesta54 = this.bastos5INVERTIDA;
        break;
      case 'bastos 06':
        this.respuesta5 = this.bastos6;
        this.respuesta52 = this.bastos6AMOR;
        this.respuesta53 = this.bastos6DINERO;
        this.respuesta54 = this.bastos6INVERTIDA;
        break;
      case 'bastos 07':
        this.respuesta5 = this.bastos7;
        this.respuesta52 = this.bastos7AMOR;
        this.respuesta53 = this.bastos7DINERO;
        this.respuesta54 = this.bastos7INVERTIDA;
        break;
      case 'bastos 10':
        this.respuesta5 = this.bastos10;
        this.respuesta52 = this.bastos10AMOR;
        this.respuesta53 = this.bastos10DINERO;
        this.respuesta54 = this.bastos10INVERTIDA;
        break;
      case 'bastos 11':
        this.respuesta5 = this.bastos11;
        this.respuesta52 = this.bastos11AMOR;
        this.respuesta53 = this.bastos11DINERO;
        this.respuesta54 = this.bastos11INVERTIDA;
        break;
      case 'bastos 12':
        this.respuesta5 = this.bastos12;
        this.respuesta52 = this.bastos12AMOR;
        this.respuesta53 = this.bastos12DINERO;
        this.respuesta54 = this.bastos12INVERTIDA;
        break;
      default:
        break;
    }
    switch (this.opcion6) {
      case 'As de oros':
        this.respuesta6 = this.asDEOro;
        this.respuesta62 = this.asDeorosAMOR;
        this.respuesta63 = this.asDeorosDINERO;
        this.respuesta64 = this.asDeorosINVERTIDA;
        break;
      case 'oro 02':
        this.respuesta6 = this.oro2;
        this.respuesta62 = this.oro2AMOR;
        this.respuesta63 = this.oro2DINERO;
        this.respuesta64 = this.oro3INVERTIDA;
        break;
      case 'oro 03':
        this.respuesta6 = this.oro3;
        this.respuesta62 = this.oro3AMOR;
        this.respuesta63 = this.oro3DINERO;
        this.respuesta64 = this.oro3INVERTIDA;
        break;
      case 'oro 04':
        this.respuesta6 = this.oro4;
        this.respuesta62 = this.oro4AMOR;
        this.respuesta63 = this.oro4DINERO;
        this.respuesta64 = this.oro4INVERTIDA;
        break;
      case 'oro 05':
        this.respuesta6 = this.oro5;
        this.respuesta62 = this.oro5AMOR;
        this.respuesta63 = this.oro5DINERO;
        this.respuesta64 = this.oro5INVERTIDA;
        break;
      case 'oro 06':
        this.respuesta6 = this.oro6;
        this.respuesta62 = this.oro6AMOR;
        this.respuesta63 = this.oro6DINERO;
        this.respuesta64 = this.oro6INVERTIDA;
        break;
      case 'oro 07':
        this.respuesta6 = this.oro7;
        this.respuesta62 = this.oro7AMOR;
        this.respuesta63 = this.oro7DINERO;
        this.respuesta64 = this.oro7INVERTIDA;
        break;
      case 'oro 10':
        this.respuesta6 = this.oro10;
        this.respuesta62 = this.oro10AMOR;
        this.respuesta63 = this.oro10DINERO;
        this.respuesta64 = this.oro10INVERTIDA;
        break;
      case 'oro 11':
        this.respuesta6 = this.oro11;
        this.respuesta62 = this.oro11AMOR;
        this.respuesta63 = this.oro11DINERO;
        this.respuesta64 = this.oro11INVERTIDA;
        break;
      case 'oro 12':
        this.respuesta6 = this.oro12;
        this.respuesta62 = this.oro12AMOR;
        this.respuesta63 = this.oro12DINERO;
        this.respuesta64 = this.oro12INVERTIDA;
        break;
      case 'As de copas':
        this.respuesta6 = this.asDeCopas;
        this.respuesta62 = this.asDeCopasAMOR;
        this.respuesta63 = this.asDeCopasDINERO;
        this.respuesta64 = this.asDeCopasINVERTIDA;
        break;
      case 'copa 02':
        this.respuesta6 = this.copa2;
        this.respuesta62 = this.copa2AMOR;
        this.respuesta63 = this.copa2DINERO;
        this.respuesta64 = this.copa2INVERTIDA;
        break;
      case 'copa 03':
        this.respuesta6 = this.copa3;
        this.respuesta62 = this.copa3AMOR;
        this.respuesta63 = this.copa3DINERO;
        this.respuesta64 = this.copa3INVERTIDA;
        break;
      case 'copa 04':
        this.respuesta6 = this.copa4;
        this.respuesta62 = this.copa4AMOR;
        this.respuesta63 = this.copa4DINERO;
        this.respuesta64 = this.copa4INVERTIDA;
        break;
      case 'copa 05':
        this.respuesta6 = this.copa5;
        this.respuesta62 = this.copa5AMOR;
        this.respuesta63 = this.copa5DINERO;
        this.respuesta64 = this.copa5INVERTIDA;
        break;
      case 'copa 06':
        this.respuesta6 = this.copa6;
        this.respuesta62 = this.copa6AMOR;
        this.respuesta63 = this.copa6DINERO;
        this.respuesta64 = this.copa6INVERTIDA;
        break;
      case 'copa 07':
        this.respuesta6 = this.copa7;
        this.respuesta62 = this.copa7AMOR;
        this.respuesta63 = this.copa7DINERO;
        this.respuesta64 = this.copa7INVERTIDA;
        break;
      case 'copa 10':
        this.respuesta6 = this.copa10;
        this.respuesta62 = this.copa10AMOR;
        this.respuesta63 = this.copa10DINERO;
        this.respuesta64 = this.copa10INVERTIDA;
        break;
      case 'copa 11':
        this.respuesta6 = this.copa11;
        this.respuesta62 = this.copa11AMOR;
        this.respuesta63 = this.copa11DINERO;
        this.respuesta64 = this.copa11INVERTIDA;
        break;
      case 'copa 12':
        this.respuesta6 = this.copa12;
        this.respuesta62 = this.copa12AMOR;
        this.respuesta63 = this.copa12DINERO;
        this.respuesta64 = this.copa12INVERTIDA;
        break;
      case 'As de espadas':
        this.respuesta6 = this.asDeEspadas;
        this.respuesta62 = this.asDeEspadasAMOR;
        this.respuesta63 = this.asDeEspadasDINERO;
        this.respuesta64 = this.asDeBastosINVERTIDA;
        break;
      case 'espada 02':
        this.respuesta6 = this.espada2;
        this.respuesta62 = this.espada2AMOR;
        this.respuesta63 = this.espada2DINERO;
        this.respuesta64 = this.espada2INVERTIDA;
        break;
      case 'espada 03':
        this.respuesta6 = this.espada3;
        this.respuesta62 = this.espada3AMOR;
        this.respuesta63 = this.espada3DINERO;
        this.respuesta64 = this.espada3INVERTIDA;
        break;
      case 'espada 04':
        this.respuesta6 = this.espada4;
        this.respuesta62 = this.espada4AMOR;
        this.respuesta63 = this.espada4DINERO;
        this.respuesta64 = this.espada4INVERTIDA;
        break;
      case 'espada 05':
        this.respuesta6 = this.espada5;
        this.respuesta62 = this.espada5AMOR;
        this.respuesta63 = this.espada5DINERO;
        this.respuesta64 = this.espada5INVERTIDA;
        break;
      case 'espada 06':
        this.respuesta6 = this.espada6;
        this.respuesta62 = this.espada6AMOR;
        this.respuesta63 = this.espada6DINERO;
        this.respuesta64 = this.espada6INVERTIDA;
        break;
      case 'espada 07':
        this.respuesta6 = this.espada7;
        this.respuesta62 = this.espada7AMOR;
        this.respuesta63 = this.espada7DINERO;
        this.respuesta64 = this.espada7INVERTIDA;
        break;
      case 'espada 10':
        this.respuesta6 = this.espada10;
        this.respuesta62 = this.espada10AMOR;
        this.respuesta63 = this.espada10DINERO;
        this.respuesta64 = this.espada10INVERTIDA;
        break;
      case 'espada 11':
        this.respuesta6 = this.espada11;
        this.respuesta62 = this.espada11AMOR;
        this.respuesta63 = this.espada11DINERO;
        this.respuesta64 = this.espada11INVERTIDA;
        break;
      case 'espada 12':
        this.respuesta6 = this.espada12;
        this.respuesta62 = this.espada12AMOR;
        this.respuesta63 = this.espada12DINERO;
        this.respuesta64 = this.espada12INVERTIDA;
        break;
      case 'As de bastos':
        this.respuesta6 = this.asDeBastos;
        this.respuesta62 = this.asDeBastosAMOR;
        this.respuesta63 = this.asDeBastosDINERO;
        this.respuesta64 = this.asDeBastosINVERTIDA;
        break;
      case 'bastos 02':
        this.respuesta6 = this.bastos2;
        this.respuesta62 = this.bastos2AMOR;
        this.respuesta63 = this.bastos2DINERO;
        this.respuesta64 = this.bastos2INVERTIDA;
        break;
      case 'bastos 03':
        this.respuesta6 = this.bastos3;
        this.respuesta62 = this.bastos3AMOR;
        this.respuesta63 = this.bastos3DINERO;
        this.respuesta64 = this.bastos3INVERTIDA;
        break;
      case 'bastos 04':
        this.respuesta6 = this.bastos4;
        this.respuesta62 = this.bastos4AMOR;
        this.respuesta63 = this.bastos4DINERO;
        this.respuesta64 = this.bastos4INVERTIDA;
        break;
      case 'bastos 05':
        this.respuesta6 = this.bastos5;
        this.respuesta62 = this.bastos5AMOR;
        this.respuesta63 = this.bastos5DINERO;
        this.respuesta64 = this.bastos5INVERTIDA;
        break;
      case 'bastos 06':
        this.respuesta6 = this.bastos6;
        this.respuesta62 = this.bastos6AMOR;
        this.respuesta63 = this.bastos6DINERO;
        this.respuesta64 = this.bastos6INVERTIDA;
        break;
      case 'bastos 07':
        this.respuesta6 = this.bastos7;
        this.respuesta62 = this.bastos7AMOR;
        this.respuesta63 = this.bastos7DINERO;
        this.respuesta64 = this.bastos7INVERTIDA;
        break;
      case 'bastos 10':
        this.respuesta6 = this.bastos10;
        this.respuesta62 = this.bastos10AMOR;
        this.respuesta63 = this.bastos10DINERO;
        this.respuesta64 = this.bastos10INVERTIDA;
        break;
      case 'bastos 11':
        this.respuesta6 = this.bastos11;
        this.respuesta62 = this.bastos11AMOR;
        this.respuesta63 = this.bastos11DINERO;
        this.respuesta64 = this.bastos11INVERTIDA;
        break;
      case 'bastos 12':
        this.respuesta6 = this.bastos12;
        this.respuesta62 = this.bastos12AMOR;
        this.respuesta63 = this.bastos12DINERO;
        this.respuesta64 = this.bastos12INVERTIDA;
        break;
      default:
        break;
    }
  }
}
