import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  respuesta1: string = '';
  respuesta2: string = '';
  respuesta3: string = '';
  respuesta4: string = '';
  respuesta5: string = '';
  respuesta6: string = '';

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

  asDEOro: string =
    'AS DE OROS, CARTA POSITIVA: En poco tiempo gozarás de un periodo de mucha felicidad, durante el cual llegará la abundancia, ya sea derivada del trabajo o por una ayuda inesperada. SIGNIFICADO AMOR: Es un periodo de gran felicidad para la pareja a tal grado que haya boda o unión, si la pareja lleva varios años juntos, habrá un renacer del amor. SIGNIFICADO DINERO: La riqueza material puede llegar en forma de regalo, por aumento de sueldo o bien, por un premio en el azar. CARTA AL REVEZ te está previniendo de estafas o abuso de confianza por parte de un hombre joven que es tu amigo, o que está en el círculo de amigos, ya que es un momento donde tienes la guardia baja. Esto porque te sientes contento, feliz y pleno, y no estás alerta, así que ten cuidado. No es momento de comenzar nada nuevo, ni emprender un negocio por muy bueno que se escuche. CARTA INVERTIDA: principalmente cuando sale invertido, augura un tiempo de exceso de trabajo, el cual traerá una temporada de estrés, ansiedad y otros malestares asociados a esta situación. También, el consultante pudiera pasar por un momento complicado para poder administrar sus finanzas y pagar sus deudas';
  oro2: string =
    'ORO 02 CARTA NEGATIVA: Esta carta es un augurio de contratiempos, dificultades, problemas y situaciones que se aplazan. Es importante mantenerse alerta, pues es en los momentos de inestabilidad donde conviene tener paciencia y esperar a que pase la racha, No realices proyectos próximamente, ya que te encuentras en una situación inestable. Además, es recomendable que te mantengas alerta, pues podrían existir celos de una tercera persona en discordia, o competencias y rivalidades, de las cuales es necesario que te cuides. SIGNIFICADO AMOR: Advierte al consultante que pudiera estar experimentando una relación, un sentimiento o una atracción física que es fingida y no es real. El consultante pudiera ser incapaz de reconocer el amor verdadero. También es un indicador que pudiera existir una tercer persona que quiere entrometerse en tu relación de pareja. No quiere decir que el consultante o su pareja sean infieles, sino que otra persona interferirá entre los dos. SIGNIFICADO DINERO: Advierte acerca de hacer inversiones de dinero o negocios en los lugares equivocados. También que el consultante pudiera encontrarse con ciertos inconvenientes o interferencias de otras personas, para lograr sus objetivos financieros.';
  oro3: string =
    'ORO 03 CARTA POSITIVA: Habla de las recompensas que se obtiene, gracias al gran trabajo realizado. Estas recompensas pueden venir de muchas formas y direcciones: pueden ser hijos, un aumento de sueldo, un mejor puesto de trabajo, adquirir un terreno, un premio, Esta carta es un augurio de buena fortuna. Todo lo que realices y trabajes con mucho ímpetu, dará muy buenos frutos. Todos tus proyectos o emprendimientos serán exitosos en cualquier aspecto de tu vida. SIGNIFICADO AMOR: Te tiene un mensaje muy positivo. Cuando aparece en una lectura, habla de la unión y confianza mutua que existe en la pareja, tanto en lo sentimental como en lo sexual. Gracias al trabajo en equipo y el apoyo constante, esta pareja obtendrá una gran recompensa, ya sea que busquen embarazarse, mejorar su situación económica, cambiarse de casa, etc. SIGNIFICADO DINERO: Te indica que próximamente obtendrás grandes reconocimientos, que no serán remunerados económicamente en sí. A pesar de que no augura que llegará más dinero a tu vida, este naipe indica que habrá ayuda que te mantendrá a flote. CARTA UNVERTIDA desafortunadamente no trae muy buenos augurios. En esta posición la carta nos anuncia que podemos perder dinero, pero especialmente surgirán problemas en el lugar del trabajo del consultante, debido a la falta de cooperación de los jefes o los propios compañeros. También pudiera presentarse una persona que busca intimidar al consultante en el trabajo.';
  oro4: string =
    'ORO 04 CARTA POSITIVA: Es una carta muy positiva que augura el éxito y la prosperidad, sobre todo en lo estrictamente material. Favorable para los negocios y lo laboral. Esta carta es el indicio de una situación estable y de economía próspera, lo cual trae bienestar. También sirve de advertencia para saber que todo el materialismo en extremo, es avaricia. SIGNIFICADO AMOR: Indicativo de una relación de amistad, de posible matrimonio por interés económico en ambas partes. Habla de una familia bastante numerosa, incluso si no hay amor en la pareja. Así como también búsqueda desesperada de la verdadera pareja. SIGNIFICADO DINERO: Habla de una buena rentabilidad económica; ahorros exagerados pero constructivos. Advierte un posible apego con el dinero y todo lo material. CARTA AL REVEZ El 4 de oros puede ser una invitación a invertir energía y tiempo en las relaciones personales. Ya que su parte oscura puede indicar que únicamente se desean bienes materiales, olvidando el amor o el alma, convirtiéndose en una persona codiciosa o posesiva. Por lo que antes de que todo se pierda, será bueno desprenderse del apego emocional e insano hacia el dinero.';
  oro5: string =
    'ORO 05 CARTA NEGATIVA: Es una carta que indica que las recompensas se encuentran en un momento de producción, donde aún no se es visible el resultado final. Es momento de que se evalúen cuidadosamente asuntos financieros y de trabajo, para que se determinen verdaderas prioridades. SIGNIFICADO AMOR: Habla de un buen inicio en las relaciones sentimentales donde la pareja o el consultante tendrá la disposición de sobre llevar los obstáculos que se presenten. SIGNIFICADO DINERO: Puede ser una carta no tan positiva para el dinero, ya que se prevén perdidas en caso de no saber manejar las prioridades financieras. CARTA INVERTIDA Posiblemente la carta cuente con una dimensión negativa más amplia que su antecesor, el 4 de Oros, ya que comienza como un número impar, lo que refleja un revés de la fortuna; un mal en la salud; un estafador; una pérdida material o bien, una depresión.';
  oro6: string =
    'ORO 06 CARTA POSITIVA: Habla de las dificultades o de los obstáculos que hay que pasar para poder alcanzar el éxito que llega con ser generoso con los demás, es una carta que significa prosperidad. SIGNIFICADO AMOR: Es muestra de equilibrio y armonía, en el amor se cuenta con bases sólidas que vienen desde la generosidad. Puede hablar de compromiso o matrimonio. SIGNIFICADO DINERO: Habla de recibir ganancias que ya se daban por perdidas, momento excelente para solicitar un préstamo y buen nivel económico. CARTA INVERTIDA Esta carta puede revelar que la persona tiene poco interés por los hijos. En términos de salud, indica alerta, ya que por alguna negligencia médica puede llegar a perder la vida.';
  oro7: string =
    'ORO 07 CARTA POSITIVA: La suerte aparecerá en tu vida, sin esperarlo y con gran satisfacción para tu vida. El 7 de Oro trae recompensas inesperadas para ti, lo cual se traduce en bienes materiales que traen felicidad SIGNIFICADO AMOR: No sientas inseguridad en hablar con la persona que te gusta, ya que solo estás pensando cosas negativas que te impiden comenzar una relación que traerá mucha felicidad a tu vida. SIGNIFICADO DINERO: Viene una ayuda inesperada para ti en el ámbito económico, que traerá tranquilidad a tu vida. CARTA INVERTIDA Esta carta puede traer frustración ante una situación inesperada, así que invita a tomar las cosas lo mejor que se pueda de una situación negativa, que la evalúe y saque una enseñanza positiva. Eso se llama madurez y es lo que le está pidiendo esta carta al consultante, que madure. La carta al revés se vuelve negativa si el consultante no actúa con pericia, porque no es capaz de adaptarse a los cambios que la vida trae y le teme a lo desconocido.';
  oro10: string =
    'ORO 10 CARTA POSITIVA: Las sotas además de símbolos de comienzos, son cartas intelectuales; los oros se asocian a la introspección y la consciencia como base de tu personalidad. Al funcionar como presagio anuncia buenas noticias, posiblemente en los estudios y en el trabajo Planifica atentamente tus proyectos y sostén el entusiasmo que tienes por tus sueños. Amplía tus horizontes en cuanto al estudio, invierte tu tiempo en capacitarte más, aún si no se trata de algo material o estudios formales. SIGNIFICADO AMOR: Indica el comienzo de una relación estable y exitosa. En el caso de que el consultante ya esté en pareja, puede que se haya apagado un poco la chispa. Te invita a no preocuparte, es sólo cuestión de darle un nuevo impulso. Para los solteros, señala la aparición de una persona emprendedora y racional, relacionada al ámbito laboral o de los estudios. SIGNIFICADO DINERO:Nos habla de recompensas, especialmente cuando pones mucho esfuerzo y dedicación en tu trabajo. El dinero llegará producto de la constancia, no por medio del azar o cualquier otra forma inesperada. Las inversiones deben ser cuidadosamente planificadas. Si estás buscando empleo, lo obtendrás muy pronto. Si aparece mal aspectada, por el contrario, advierte sobre los riesgos de posibles malas inversiones o estar despilfarrando el dinero. CARTA INVERTIIDA Cuando aparece mal aspectada, esta carta indica que posiblemente tengas obstáculos que dificultan la consecución de tus logros. Los bloqueos que detienen tu avance son importantes. En líneas generales puede tratarse de una falta de planificación, o una planificación defectuosa. Quizás te hayas vuelto una persona conformista o simplemente te hayas cansado de perseguir tu sueño. No es que lo hayas olvidado o ya no lo desees, sino que simplemente tu atención salta de una cosa a otra.';
  oro11: string =
    'ORO 11 CARTA POSITIVA: Es momento de disfrutar el éxito económico con plenitud y reconocimiento, sintiendo una inmensa felicidad. El orden es importante para este periodo de felicidad y éxito económico, para que sepas priorizar tus necesidades y lo que son solo tus gustos, así como el valor que conviene en este momento satisfacer. Debes buscar el equilibrio. SIGNIFICADO AMOR: Debes considerar abandonar la relación actual, ya que estás cayendo en un periodo de aburrimiento sexual, que puede traducirse en impotencia sexual y solo es aburrimiento, tú estás sano. SIGNIFICADO DINERO: Triunfos que por muchos años se soñaron hasta lograrse. Es momento de que te sientas feliz y satisfecho de tus logros y saques provecho del éxito. CARTA INVERTIDA Cuando esta carta aparece al revés quiere decirle al consultante que el aburrimiento en su vida lo está llevando al límite de su frustración, de tal manera que lo incita a dar un cambio de 180 grados a tal grados; lo lleva a que se olvide de los hijos, si los tiene; a que se desentienda del trabajo, abandonándolo. De tal manera que puede provocar que caiga en un periodo de dependencia económica de terceras personas, como familiares o amigos, y un tiempo de ociosidad que puede llevar al consultante a una adicción.';
  oro12: string =
    'ORO 12 CARTA POSITIVA: Un periodo de brillo social, donde se goza de reconocimientos por los logros en el trabajo, así como buenas ganancias económicas derivadas del mismo. El liderazgo es la clave en este periodo para triunfar y atraer buenos contactos, que a la larga traerán buenas ganancias económicas. SIGNIFICADO AMOR: Mucha atracción sexual en este periodo, así que la pareja sufrirá de ciertos celos o dependencia emocional. SIGNIFICADO DINERO: Buena posición económica que abrirá nuevas oportunidades y traerá apoyo económico para invertir en nuevos negocios. CARTA INVERTIDA El lado más negativo de esta carta es el egoísmo por parte del consultante, quien se vuelve lejano y solo ve para su beneficio sin importar los sentimientos de los demás, o quien pueda dañar emocionalmente para conseguir lo que se propone. Por otra parte, el consultante debe cuidar de no volverse codicioso o materialista, ya que este sentimiento lo puede llevar a una apostura muy incómoda hasta con su propia familia.';
  asDeCopas: string =
    'AS DE COPAS CARTA POSITIVA: Esta carta tiene que ver con el hogar, hablando físicamente, y con lo que implica una venta de casa, mudanza o reparación. En breve recibirás noticias muy favorables para tu familia, ya sea un mudanza de casa o tu pareja está cambiando de trabajo, con lo que tendrá mejores condiciones de vida. SIGNIFICADO AMOR: Tu relación está pasando por un momento muy feliz, un embarazo hace crecer la familia. SIGNIFICADO DINERO: Si deseas vender tu casa es un buen momento, tendrás compradores serios y el dinero se te multiplicará para un nuevo hogar. CARTA INVERTIDA Lo negativo que indica la baraja que está presente en la vida del consultante, puede resultar muy positivo si se hacen los cambios necesarios. Habla de un momento de hacer introspección para revisar la relación de pareja, la relación con los jefes o la relación con los amigos. Hay que desechar a las personas tóxicas o que sientes que no te hacen sentir feliz. La baraja te pide practicar el desapego.';
  copa2: string =
    'COPA 2 CARTA POSITIVA: El 2 de Copas tiene que ver con la fertilidad, los sentimientos, el amor, aceptación de uno mismo y la pasión. Cuando sale en una lectura también anuncia muy buenas noticias, de algo que se puede dar en cualquier área de tu vida. El 2 de Copas es una carta que representa el amor en todas sus formas. Cuando sale en una lectura nos anuncia el compromiso de una pareja, nos habla de relaciones estables, amistades duraderas, el inicio de un proyecto o negocio con alguien más. También nos habla sobre el amor y sentimientos del consultante o una persona en particular. Es una carta positiva que siempre se va a enfocar en las emociones. SIGNIFICADO AMOR: El 2 de Copas habla sobre un amor muy profundo hacia otra persona. Representa el encuentro con la pareja ideal, donde el amor es correspondido, resultando en una relación fuerte y duradera. Esta es una relación plena tanto en lo emocional como sexual; los dos serán muy fieles el uno con el otro. SIGNIFICADO DINERO: Cuando el 2 de Copas sale en una lectura en temas de dinero, habla sobre una posición conformista por parte del consultante o la persona de interés. Existe un estancamiento económico que no deja avanzar a la persona en sus finanzas. También llama a reflexionar sobre hacer gastos innecesarios y excesivos. CARTA INVERTIDA El lado negativo del 2 de Copas, principalmente cuando sale invertido, se refiere principalmente a la incapacidad de mostrar nuestros sentimientos. Esta carta advierte al consultante que le es difícil confrontar sus propios sentimientos y expresar su sentir a los demás, como consecuencia traerá malentendidos, desacuerdos y posibles discusiones.';
  copa3: string =
    'COPA 3 CARTA POSITIVA: Resolución, victoria, obstáculo superado, noticias, proyectos sentimentales para el futuro próximo. No debes tener miedo, todo funciona de la mejor manera posible, incluso los aparentes obstáculos se resolverán. SIGNIFICADO AMOR Si en la pareja se está transitando una crisis, se restablecerá el vínculo a corto plazo y se enriquecerá la relación a futuro. Se recibirán noticias de la persona de interés.SIGNIFICADO DINERO Si el consultante está atravesando pérdidas, éstas llegarán a su fin. Incluso se recuperará dinero que se creía perdido. Los nuevos proyectos comienzan a rendir frutos. CARTA INVERTIDA Mal aspectada, pero rodeada de cartas positivas, podría sugerir que el éxito esperado podría tomar más tiempo del que se espera.En una relación nos está indicando que la misma, es potencialmente positiva pero está siendo estropeada por la intolerancia y el egoísmo de una de las partes; y ya que en general representa a terceras personas en todos los ámbitos, puede implicar un triángulo amoroso. Si se está consultando sobre lo laboral, indica que el socio del consultante se ha involucrado en cosas que desconoce. Es necesario buscar nuevas opciones, ya que las cosas han cambiado por completo. Se debe hacer un balance para encontrar las opciones adecuadas. ¿El grupo del que se rodea el consultante es el adecuado? ¿Los beneficios justifican sacrificar su identidad personal? Advierte sobre la posibilidad de dejarse influenciar por malos consejos; también sobre ser excesivamente indulgente.';
  copa4: string =
    'COPA 4 CARTA POSITIVA El 4 de Copas es una carta que está ligada al deseo carnal y a nuestros más bajos instintos. Por lo general nos habla de relaciones que se dan principalmente porque existe un interés físico, sin ninguna intención por el compromiso o por involucrarse emocionalmente. Siempre va a referirse a una relación sexual, a relaciones por placer. Es importante dejarle saber al consultante que estas relaciones solo tienen un interés físico y nada emocional. También pudiera hablar sobre la falta de motivación que padece el consultante y sus pocas ganas de querer salir de esa situación. SIGNIFICADO AMOR Te indica que la relación en la que te encuentras es exclusivamente de índole sexual. O tú o tu pareja, por el momento no buscan tener nada formal ni involucrar sus sentimientos. Ten precaución cuando aparece esta carta, ya que las intenciones de la persona que te está pretendiendo son únicamente físicas. CARTA INVERTIDA El lado negativo del 4 de Copas principalmente cuando sale invertido, le hace ver al consultante que se encuentra en un estado emocional negativo. Está poniendo resistencia a abrirse sentimentalmente hacia los demás, o es incapaz de expresar sus verdaderos sentimientos. Esto pone en relieve que si el consultante no hace algo por expresarse, pudiera tener un gran impacto en sus relaciones personales, pero especialmente con las personas más cercanas a ella o a él.';
  copa5: string =
    'COPA 5 CARTA POSITIVA: El 5 de Copas nos habla de crisis personal, profunda tristeza y victimización. Cuando aparece en una lectura, explica que el consultante se encuentra decepcionado y sin ganas de salir adelante del problema que lo aqueja. Aunque el 5 de Copas es un naipe negativo que envuelve al consultante en un sentimiento de desilusión y tristeza, es positivo que salga en la lectura, para hacerle ver al consultante el estado en que se encuentra y que solo con su determinación y constancia podrás salir de ello, aprendiendo una gran lección de esta experiencia. SIGNIFICADO AMOR Habla de una relación en la que no se quiere estar y que incluso se quisiera dejar. En otros casos pudiera hablar de una relación firme y bien correspondida. SIGNIFICADO DINERO El consultante se encuentra en una buena posición económica y puede darse el lujo de hacer gastos extras. También anuncia herencias que pudieran llevar al consultante a tener discusiones y discordias con su familia. CARTA INVERTIDA Curiosamente, el lado negativo del 5 de Copas cuando aparece revertido, trae un mensaje positivo. Esta carta nos augura que vamos por el camino correcto para superar nuestros problemas o decepciones. Te dice que eres fuerte para superar estos obstáculos y tu actitud ante esto debe ser de humildad y determinación.';
  copa6: string =
    'COPA 6 CARTA NEGATIVA: Cuando aparece esta carta en tu tirada debes revisar que tu pasado no te esté limitando. Te invita a reflexionar y cerrar ciclos. Esta carta te pide que no te apegues al pasado, que te perdones por lo que pudiste dejar de hacer o hiciste mal en el pasado y avances a un futuro más dichoso. SIGNIFICADO AMOR Es momento que sueltes el pasado, el amor que se fue debe ser superado. Es momento de sanar las heridas del pasado. SIGNIFICADO DINERO En el pasado tu familia gozaba de buena posición económica, hoy ya se está agotando y es momento de buscar nuevas oportunidades para hacer incrementar tus entradas. CARTA INVERTIDA Estar estancado es una condición que el consultante tomo como opción, para no hacer nada y solo sobrevivir sin afán de nada. El aspecto negativo se presenta con la carta al derecho, que está hablando del pasado que tiene energía muy densa como la melancolía, la nostalgia o las penas, pero además el consultante se aferra a estas energías para no hacer nada y seguir en la comodidad del victimismo.';
  copa7: string =
    'COPA 7 CARTA POSITIVA: Es un momento de plenitud y satisfacción para el consultante, un periodo para amarse a sí mismo. Un periodo que te da la estabilidad para mejorar tu vida, empezando por reconocer que tú eres la persona más importante en ella. Así que ámate incondicionalmente. SIGNIFICADO AMOR Es un momento donde el consultante tiene energía renovada, se siente sensual y atractivo. SIGNIFICADO DINERO El dinero llegará por una promoción en tu trabajo, que tal vez no es una sorpresa porque has venido desarrollando bien tu trabajo. CARTA INVERTIDA Cuando aparece esta baraja al revés debes tener cuidado con tus pensamientos y deseos, porque el consultante no está siendo coherente entre lo que siente y lo que pide, ya que a veces tendemos a que los pensamientos negativos se hagan realidad y lo positivo nunca llegue. Por ello te pide esta carta que debes revisar tu escala de valores en cuanto al merecimiento.';
  copa10: string =
    'COPA 10 CARTA POSITIVA: Indica la llegada de buenas noticias, la llegada de una persona imaginativa y estudiosa con mucho encanto Es momento de grandes oportunidades con el nacimiento de nuevas metas y proyectos, así como la reflexión de las decisiones que se han tomado hasta el momento. SIGNIFICA AMOR Indica la presencia de una mujer que necesita del amor para vivir, puede referirse al consultante. Es indicativo de lo sentimental y la sensibilidad. SIGNIFICADO DINERO Augurio de prosperidad y de posibilidad de aumento salarial. Puede ser indicativo del fin de deudas. CARTA NEGATIVA La Sota de Copas es una carta positiva por naturaleza, sin embargo en su lado negativo puede estar sugiriendo contradicciones debido a un exceso de imaginación, que puede llegar a tomar el control de su vida. Alude también a la juventud e inmadurez al momento de enfrentarse a las adversidades de la vida, como un escape de la realidad por medio de la ingesta de alcohol o de sustancias ilícitas.';
  copa11: string =
    'COPA 11: Un hombre joven te dará una lección de vida que vas a recordar toda la vida, es momento de equilibrar tus emociones. Debes moverte y no temer a equivocarte, ya que eres muy capaz de saber qué necesitas en tu vida. SIGNIFICADO AMOR Una persona que ama la conquista, pero jamás se compromete y todo quiere que se quede en amistad. SIGNIFICADO DINERO Hay un crecimiento económico que ahora se ve insignificante a lo que siempre soñaste, pero que a la larga es una buena inversión de tiempo y te traerá solidez económica. CARTA INVERTIDA Cuando aparece en la tirada esta baraja al revés te está avisando que viene en camino una persona falsa. Te previene que te cuides de no caer en su trampa, ya que si es tu pareja mostrará celos descomunales para hacerte sentir mal y manipularte, sin saber que es la pareja quien está fallando y no sabe cómo terminar contigo.';
  copa12: string =
    'COPA 12: Esta carta está haciendo referencia al hombre que lleva el rol de mando en un hogar u empresa. Un líder que sabe tomar decisiones y es justo. Equilibra tu vida para que puedas avanzar sin caer en el drama o la victimización, que esto podría traerte grandes problemas. SIGNIFICADO AMOR Te está anunciando una incompatibilidad con tu pareja a través de tus intereses profesionales o carácter, creando una ruptura inminente.SIGNIFICADO DINERO Habla de una persona madura que goza de buena situación económica, que se da gustos como viajes y esto atrae envidias. CARTA INVERTIDA Al estar invertida esta carta nos alerta de encontrarnos con un hombre mayor que puede tendernos una trampa. Pudiera hacer caer al consultante en un fraude, que después será motivo de chantajes y puede llevarlo a cometer acciones que lo hagan sentirse muy mal consigo mismo. Por otra parte, puede indicar que el consultante o quien represente la baraja el Rey de Copas, está indicando que el sentimentalismo se usará para manipular la situación.';
  asDeEspadas: string =
    'AS DE ESPADAS: Representa la visión y astucia que orienta a la hora de cerrar etapas y comenzar nuevos ciclos. Indica evolución, progreso y victoria. Mal aspectada indica un sacrificio muy grande y la negación a ver lo necesario. SIGNIFICADO AMOR Si el consultante es soltero, indica que se acerca una nueva oportunidad con alguien. Para quienes están en pareja puede significar tanto el fin de la relación a partir de la comunicación con la verdad, o que se afiance el vínculo a causa de esto mismo. Las cartas que acompañen al As de espadas nos indicarán de qué se trata. En ambos casos señala que la nueva etapa será mucho mejor. SIGNIFICADO DINERO El consultante debe ser precavido y reservado a la hora de considerar nuevas oportunidades, gastos e inversiones. Es necesario un análisis muy profundo. No es recomendable prestar dinero, incluso a personas de confianza. Mal aspectada incluso indica riesgo de sufrir una estafa o desilusión. CARTA INVERTIDA Mal aspectado, el As de espadas nos habla de confusiones y falta de claridad. El consultante se pierde en laberintos mentales que no lo conducen a ningún lado, más que a una visión básica de corto alcance, sesgada por las emociones. Por este motivo sugiere intentar un análisis frío y práctico. ¿Se está dando lugar a un falso optimismo?';
  espada2: string =
    'ESPADA 2: Representa la necesidad de tomar una decisión cuanto antes, lo que puede poner en jaque el equilibrio entre mente y corazón, sino se logra el correcto ajuste. Es necesario contemplar ambas dimensiones para comprender la situación presente y resolverla de manera efectiva. También indica que debe atenderse a las asociaciones con una persona, que podrían ser muy productivas, a menos que esté mal aspectada, en cuyo caso será recomendable evadirlas. Busca nuevas amistades y relaciones sin abandonar las viejas. Si no estás seguro de qué camino tomar, pregúntate: ¿Cómo reaccionan tu mente y corazón al momento de pensar en cada posible decisión? Observa las distintas posibilidades y se perseverante en tus acciones y decisiones. SIGNIFICADO AMOR Buen augurio en este plano. Si se está atravesando una crisis, alguien del entorno intercederá para equilibrar la relación. Si el consultante desea encontrar el amor, es necesario que realice un trabajo introspectivo para sanar heridas del pasado antes de avanzar. Si sale mal aspectado, advierte sobre una relación en la que estarían utilizando al consultante por conveniencia. SIGNIFICADO DINERORecomienda prudencia y el equilibrio. Es necesario llevar un control del dinero, tanto de los gastos como de los ingresos. En este ámbito, antes de tomar una decisión, se deben analizar fríamente las opciones, dejando de lado los sentimientos. CARTA INVERTIDA, el 2 de espadas indica que el consultante está en soledad para afrontar una difícil decisión con poca información, lo que resulta en un gran estrés y agotamiento. Por esto mismo es que debe tomarse con calma y tener cuidado con la salud en general, para no causar mayores inconvenientes que pueden ser evitables.';
  espada3: string =
    'ESPADA 3: Es fundamental apoyarse en la lógica antes que en las emociones, incluso en el plano amoroso. Esta carta habla de falta de tacto, charlatanería y falta de franqueza; así como manipulación que puede sufrir el consultante. SIGNIFICADO AMOR Dependiendo de la consulta, puede estar expresando que el consultante debe dejar las emociones de lado y actuar sobre lo concreto. Si la pareja está atravesando conflictos, entonces está señalando que ambas partes hablan con la verdad para superarlos. Mal aspectada, puede simbolizar separación y alejamiento, pero no indica divorcio. SIGNIFICADO DINERO Es una carta muy positiva para tus finanzas. Pueden haber recompensas, confirmaciones y avances de suma importancia. Mal aspectada, puede señalar una traición. El consejo que te da el 3 de Espadas es enfocarte en el problema y no en la persona, cuidar el dinero y no realizar préstamos.CARTA INVERTIDA Puede estar indicando que el consultante tiene miedo a las personas con las cuales tiene un conflicto o a repetir un patrón negativo. Ya que es una carta que, en cuanto a tiempos, indica meses, también puede estar señalando retrasos.';
  espada4: string =
    'ESPADA 4: Es una advertencia de que es momento de tomarte un respiro, una pausa para descansar. Escucha a tu cuerpo y evita una sobrecarga. Debes cuidar tu salud y dejar los malos hábitos. Esta baraja te está advirtiendo que puedes caer enfermo en un futuro próximo. SIGNIFICADO AMOR El consultante vive en una fantasía con amores inalcanzables, por lo que está viviendo de sueños. SIGNIFICADO DINERO En este momento no comiences ninguna negocio o proyecto que signifique una inversión, ya que puedes perder tu dinero. CARTA INVERTIDA La reflexión es una pieza clave para este periodo de reclusión, la vida está ofreciendo las condiciones para que el consultante pase un periodo de retiro forzoso, ya sea por enfermedad o por un paro laboral, lo que traerá para la persona un periodo en soledad. Esto representará alegría o amargura, dependiendo de la capacidad que tenga el consultante para poder convivir consigo mismo. Es una invitación de poner un alto en el camino y sanar heridas del pasado para estar fortalecido y feliz.';
  espada5: string =
    'ESPADA 5: Conflicto asociado con la derrota, humillación, crisis, confusión mental, decepción, traición. Prepárate para afrontar la adversidad. Se realista con tus expectativas, no sobreestimes tus capacidades. Si hay posibilidades de lograr el éxito, pero se requiere honestidad y disposición para actuar de manera ética SIGNIFICADO AMOR Anuncia conflictos inevitables en lo más básico de una convivencia. Es necesario reconocer los propios defectos que generan estos malestares. En casos extremos puede indicar infidelidades y rupturas. Si el consultante se encuentra soltero, no es el mejor momento para comenzar una relación, pero esto dependerá de qué cartas acompañen al cinco de espadas. En el mejor de los casos, indica que tel entorno no aceptará a esta nueva persona. SIGNIFICADO DINERO Extrema las precauciones para evitar posibles estafas. Si se está refiriendo al consultante, indica que está actuando de manera poco ética. Competencias y conflictos con empleados y socios, con el riesgo de sufrir un engaño. Puedes salir victorioso de esta situación, aunque debes reflexionar si vale la pena. CARTA INVERTIDA Anuncia la llegada de un conflicto, incluso puede ser que ya esté teniendo lugar. Es necesario estar atento, aunque parezca que todo está calmo y asegurado, ocurrirá algo inesperado que arruine todo. Las barajas que acompañen al 5 de espadas indicarán si es producto de la falta de criterio o de alguien que impide el avance. En este caso es necesario no forzar la situación para no empeorar las cosas.';
  espada6: string =
    'Movimientos y luchas para renovarse. El estancamiento se volverá insoportable, por lo que es necesario evolucionar. Concéntrate para lograr dejar los problemas atrás, da lugar a cambios que favorezcan tu presente. Haz frente a tus problemas, no los evadas, piensa a través de ellos y resuélvelos. SIGNIFICADO AMOR Si estás en pareja será favorable un cambio de rutina, sea un viaje o paseo dentro de la ciudad, que no sean habituales. Esta carta por sí misma no indica ruptura. Si estás en búsqueda de una pareja, debes abandonar tus espacios rutinarios, conocer otros lugares y nuevos grupos de gente.SIGNIFICADO DINERO Que sea positivo o negativo dependerá de las barajas que le acompañen. Si te encuentras en medio de una lucha y actualmente puedes ver algunos resultados, sigue así, alcanzarás el éxito. Si por el contrario no sientes que vayas por el buen camino, es momento de dejar ir y comenzar algo nuevo, tanto un lugar como un rubro totalmente diferente. CARTA INVERTIDA Cuando aparece mal aspectado, el 6 de espadas nos habla de la sensación de sentirse atrapado, incapaz de avanzar en la vida. Refiere a la dificultad (real o percibida) en el movimiento, es decir, obstáculos que lo dificultan y atrasan. Esta baraja sugiere revisar si estos problemas surgen de un pasado con cosas no resueltas. ¿Has intentado huir de tu pasado dejando situaciones irresolutas? Si es así, debes saber que no importa a dónde vayas, estas situaciones siempre irán contigo y serán barreras para tu desarrollo.';
  espada7: string =
    'ESPADA 6: En corto plazo tendrás que tomar fuerza para salir de una situación que te obligará a salir de un letargo y cambiar tu vida. Te pide que dejes de evadirte de tu propia realidad, que tomes las riendas de tu vida y la transformes en algo positivo; de lo contrario solo vivirás huyendo de tus responsabilidades. SIGNIFICADO AMOR Debes de ser muy realista al momento de enamorarte de alguien, porque puedes estar enamorado de quien no está a tu alcance y solo estás sintiéndote frustrado por no poder conquistar a la persona. SIGNIFICADO DINERO Puede llegar una mejora económica, solo que no fantasees con un porvenir por el que no has trabajado. Si solo has soñado, así no se consigue la abundancia. No hay prosperidad si no hay acción. Es una carta negativa, porque habla que el consultante tiende a escaparse y rehuir de sus responsabilidades, no le gusta enfrentarse a la realidad así que a veces vive en un mundo de fantasía, especialmente cuando de dinero se trata. Solo espera que algo maravilloso pase para poder mejorar su economía, sin buscar soluciones reales.';
  espada10: string =
    'ESPADA 10: Terquedad y obstinación, gran capacidad de análisis. Naturaleza energética. Será necesario tomar decisiones con gran velocidad. Confía en ti. Prepárate para recibir noticias tanto positivas como negativas. Siempre debes confiar en tu inteligencia y habilidad para adaptarte, así podrás beneficiarte de estos cambios o, cuando menos, no quedar muy mal parado. SIGNIFICADO AMOR Si estás atravesando una situación conflictiva, será necesario que identifiques los momentos para presionar y cuándo retroceder. Aprender a respetar los espacios es fundamental. Si se encuentra buscando una pareja, debe ser paciente y no presionar más allá de lo debido. SIGNIFICADO DINERO No subestimes las situaciones, ni te sobreestimes. Pide ayuda cuando sea necesario. No asumas gastos extra si aún no tienen los medios para afrontarlos, confiar en que lo resolverás más adelante podría traerte problemas. CARTA INVERTIDA Mal aspectada, la sota de espadas hace un llamado urgente a la autocrítica, en caso de estar representando al consultante. Describe a una persona que confronta de manera agresiva y de manera constante, incluso sin importar si tiene la razón, o siquiera sabe de qué está hablando; con una tendencia incluso a acomodar las cosas, sacándolas de contexto o exagerando para que apoyen su punto de vista.Cuando se trata de una persona del entorno cercano, es necesario tener cuidado particularmente con los chismes y calumnias hacia quien consulta. Si bien la primer reacción podría ser buscar venganza, no es recomendable.';
  espada11: string =
    'ESPADA 11: Esta carta habla de una motivación extrema para lograr algo y que el consultante se siente determinado a conseguir. La ambición bien canalizada llevará a la persona a lograr su cometido. Tienes la determinación necesaria para conseguir lo que quieres, debes proseguir con tu proyecto o idea. Sé inteligente, utiliza la lógica para pensar y planear de qué manera te conviene actuar. Utiliza tu ambición como un impulso, así estarás más cerca de lo que deseas y podrás conseguirlo de manera positiva. SIGNIFICADO AMOR Para las parejas esta carta anuncia buenas noticias y reconciliación, si es que se encontraban distanciados. Viene una etapa de paz y acuerdos. Para los solteros, anuncia la llegada de un amor nuevo, atraído más por la riqueza de su forma de pensar, más que por un aspecto físico. SIGNIFICADO DINERO Anuncia la llegada de un dinero inesperado, o bien, el logro respecto a un negocio o proyecto personal que representará una ganancia económica. CARTA INVERTIDA El deseo ferviente de alcanzar la meta podría cegar a la persona. La ambición del logro que se persigue se puede convertir en obstinación, haciendo que el consultante se “aviente de cabeza” sin importarle las consecuencias, y éstas no siempre sean positivas. Quizá la idea está exacerbada por la misma persona, quien se siente determinada pero desde un ángulo negativo de las circunstancias.';
  espada12: string =
    'ESPADA 12: debes actuar con seriedad, apoyándote en la razón y evitando que sean tus emociones las que te controlen; solo de esta manera podrás ver la verdad claramente y sobretodo, actuar con justicia. Deberás recurrir a tu experiencia y conocimiento para encontrar la verdad. No dejes que te guíen las emociones, sigue tu lógica y utiliza la razón para actuar de una manera justa y en apego a la verdad. SIGNIFICADO AMOR Si tienes una pareja, es posible que alguno de los dos esté tomando una posición autoritaria que no permite que haya equidad en la relación, o por el contrario, la relación necesita una guía para ser más equilibrada. Para quien está soltero, puede significar la llegada de un hombre varonil, o una mujer con características un poco masculinas. SIGNIFICADO DINERO Te advierte que es necesario que te apegues a datos duros y reales. Tus finanzas no deben basarse en cosas que anhelas y no existen. No adquieras deudas que no estás en capacidad de cubrir. CARTA INVERTIDA Debido a que la carta de inclina al raciocinio, puede ser que el alejamiento emocional sea demasiado y termines por volverte distante y ajeno a lo que sientes, o a lo que los demás sienten. Este desapego llevado al extremo es un aspecto negativo, ya que debes encontrar un equilibrio entre la razón y las emociones, aunque sea la primera la que te guía. Buscar la verdad y el ser justo, no implica el desatender por completo los sentimientos de otros.';
  asDeBastos: string =
    'AS DE BASTOS: Representa la llegada de un regalo, una situación o una persona de forma inesperada. Se pronostica una sorpresa. Algo que no tienes planeado pero que surge de manera espontánea en algún momento próximo de tu vida. SIGNIFICADO AMOR Podría significar que una persona llega sin ser esperada, alguna situación amorosa que se aproxima. SIGNIFICADO DINERO Nos habla sobre un ingreso extra inesperado o que se salda una deuda olvidada.CARTA INVERTIDA El As de Bastos puede representar una situación imprevista que puede desestabilizar al consultante, alguna situación poco agradable que llega de forma inmediata, pero tiene la ventaja de que se puede resolver al momento en el que presenta. Lo negativo de esta carta es que las situaciones poco previstas, ya sea en el dinero, el amor o la salud, podrían traer consigo sentimientos de angustia y si estos permanecen por mucho tiempo, pueden tener como consecuencia que el consultante se sienta ansioso o enfermo.';

  bastos2: string =
    'BASTOS 2: Cuando aparece esta carta en tu tirada te está avisando que pronto llegará un viaje corto que te traerá ganancias. También puede referirse a una noticia pero no te da la certeza de si será positiva o negativa. Es una carta que trae buenas noticias para iniciar nuevos proyectos. Sobre todo te dice que debes moverte para conseguirlo, buscar aliados para lograr tus metas. SIGNIFICADO AMOR Debes revisar la relación que tienes con tu pareja, te pide que reactives el amor. SIGNIFICADO DINERO Te indica que busques nuevas oportunidades para ganar dinero, ya que solo te quejas sin buscar nuevas opciones para estar mejor CARTA NO INVERTIDA La carta 2 de Bastos no tiene revés, por lo tanto, no tiene una lectura como tal negativa. Pero sí existen rasgos que debes tomar en cuenta para que el resultado no se vuelva negativo: No tengas dudas al momento de tomar decisiones, pues una vez que muestres inseguridad, las cosas se pueden salir de control. Maneja tus emociones ya que puedes tomar una decisión precipitada y dejar todo de repente: casa, pareja o trabajo. Hazle frente a la frustración sin culparte cuando tu proyecto no está saliendo como te lo imaginaste. Las emociones negativas que no sepas controlar, pueden representar el gran obstáculo para lograr tus objetivos';
  bastos3: string =
    'BASTOS 3: Indica posible comienzo próspero de una empresa, con una base firme y de trabajo continúo. Es una carta de progreso, habla de cuestiones laborales y económicas. Se tienen muy buenas posibilidades de poder emerger finalmente con éxito. SIGNIFICADO AMOR Puede significar cambio de pareja, nuevo matrimonio, amores arriesgados. Si estás con alguien, te dice que la persona que está a tu lado es la correcta. SIGNIFICADO DINERO Estabilidad económica y negocios excelentemente rentables. Señala que verás los resultados de tu empeño y confianza en los negocios. CARTA INVERTIDA También puede indicar problemas de comunicación en pareja, falta de confianza; la presencia de un tercero que altera la relación. Posiblemente debas involucrarte más con el entorno después de un tiempo de distanciamiento y reflexión, que se ha ido perturbando debido a los recuerdos negativos. También señala la necesidad de consolar y ser consolado y estar atento a nuevas situaciones que se presentan, para saber aprovecharlas sabiamente,  ya que la carta en esta posición puede indicar el desaprovechamiento de oportunidades. En una lectura esta carta también presagia alguna derrota, marca la conclusión de un camino emprendido para el desarrollo personal que puede terminar en fracaso. Refleja una pérdida o fracaso en objetivos, en el amor, incapacidad para poder conquistar a la persona deseada.';
  bastos4: string =
    'BASTOS 4: Cuando aparece esta carta en tu tirada te está advirtiendo que revises los temas de tu familia y amigos, tal vez pienses que todo va bien, pero es necesario hacer pequeños ajustes para estar mejor. En una primera lectura es una carta que nos habla de que todo está bien y somos felices, es un periodo positivo. También puede advertir que en breve tiempo podemos recibir la noticia de un embarazo. SIGNIFICADO AMOR Un posible embarazo puede hacerte muy feliz. Es momento de cambiar la relación de pareja y asumir nuevos compromisos. SIGNIFICADO DINERO Es un buen tiempo para pedir préstamos o cobrar el dinero que te deben, con muy buena respuesta. CARTA INVERTIDA El 4 de Bastos es una carta muy positiva, pero recuerda que lo negativo lo atraes tú, por ello debes tener cuidado con tus frustraciones. Por ejemplo: Tienes celos incontrolables que te llevan a perder la cabeza, esto es por tu falta de autoestima, que te hace pasar un mal momento, hasta el grado de que puede haber una ruptura de pareja. En el ámbito laboral podrías tener un ascenso laboral, aunque lo puedes arruinar si no te sientes capaz, por miedo a la responsabilidad. El 4 de Bastos anuncia expansión económica, por lo que puedes excederte en los gastos y empezar una época de problemas financieros.';
  bastos5: string =
    'BASTOS 5: Significa movimiento y cambio. Te indica que vas por buen camino, aunque el trayecto tomará algún tiempo. Te encontrarás con dificultades y demoras en cuanto al tema de tu interés. Tendrás también algunas adversidades para conseguir lo que deseas, aunque al final de esta lucha alzarás la victoria, logrando todos tus objetivos. Un punto importante es que, también habla sobre finales, ya sea una relación, proyecto o trabajo.SIGNIFICADO AMOR Es una carta complicada en temas del amor. Este naipe te habla de un amor imposible, muchas ilusiones y deseos que tú o tu persona de interés no pueden confesar. También te dice que se están guardando sentimientos para no dañar una amistad; puede esconder la verdad sobre la sexualidad, así como placeres que no se pueden mostrar. Simboliza la incapacidad que tenemos para expresar sentimientos.SIGNIFICADO DINERO El 5 de Bastos es muy positivo en temas de dinero. Cuando este naipe sale en una lectura te anuncia suerte, fortuna y riquezas. El éxito financiero está asegurado para ti, pero es necesario que no pierdas el enfoque y la constancia para lograrlo. Muestra gran habilidad empresarial y es señal de opulencia, lujos y prestigio, gracias a la posición económica. También pudiera indicar un cambio de estilo de vida a una posición mucho mejor. CARTA INVERTIDA Anuncia que te enfrentarás a dificultades y lentitud, así como adversidades que se solucionarán con ciertas complicaciones. Es una carta que te habla de contratiempos y cambios que no se están dando y que resultan en dificultades para ti. Uno de los significados de esta carta es la advertencia de que pudieras enfrentarte a un enemigo. Otro aspecto puede ser que el consultante o la persona por la que preguntan, no tenga valor o se sienta cobarde y temeroso ante la idea de las confrontaciones o de sufrir una agresión. En su lado negativo, es una carta cargada de mucha agresividad y situaciones desfavorables. El lado oscuro del 5 de Bastos en general te habla de polémicas, conflictos y rupturas en todo sentido, desde temas de trabajo hasta cuestiones del amor. Puedes enfrentar dificultades legales de algún tipo, o si estás en pareja, puede referirse a separaciones en una relación. Existen sentimientos ocultos o que no se han dicho.';
  bastos6: string =
    'BASTOS 6: El 6 de bastos nos habla de situaciones que tienen que ver con depresión, tristeza y falta de motivación del consultante. Está relacionada con subordinados. En general es una carta negativa, pues habla de la falta de ánimo y la tristeza que está pasando el consultante. Señala falta de confianza en uno mismo, problemas laborales y negatividad. Se recomienda tomarlo como una llamada de atención para cambiar nuestra actitud ante las situaciones y salir adelante. SIGNIFICADO AMOR El 6 de bastos en el amor nos habla sobre dependencia afectiva, indica que el consultante se deja controlar por su pareja y siente una profunda insatisfacción emocional y física en la relación. SIGNIFICADO DINERO El 6 de bastos en temas de dinero indica al consultante que se encuentra limitado en sus finanzas. En su camino se encontrará con varios problemas y obstáculos para lograr una mejor situación económica. CARTA INVERTIDA Para saber cuál es el lado invertido del 6 de Bastos, el basto superior izquierdo debe ser de color naranja. Si la carta al derecho nos habla de situaciones complicadas para el consultante, cuando está invertida, el problema será todavía más complicado. El mensaje que nos trae esta posición es de desilusión después de una larga espera, inseguridades, fragilidad, frustración personal, debido a que la decisión que el consultante ha tomado pudo, o puede ser incorrecta, trayendo grandes repercusiones. El gran aprendizaje que nos trae esta carta es que estemos preparados para lo que se aproxime. Podemos estar en la cima del éxito en un momento, pero por una cuestión u otra todo pudiera derrumbarse. Así es la vida, quizás nos encontremos en un momento difícil, pero el mejor consejo que les podemos dar es que “esto también pasará”, y que de todos estos problemas podemos aprender grandes lecciones, las cuales nos harán crecer como personas.';
  bastos7: string =
    'BASTOS 7: Cuando aparece en tu tirada te traerá buenas noticias con referencia al trabajo, solo que no te confíes porque hay enemigos ocultos que envidian tu posición laboral. Te has esforzado mucho así que es momento de celebrar, aunque pronto verás que tus triunfos no son bien recibidos por todo el mundo e incluso te traerán enemigos. SIGNIFICADO AMOR Buen periodo para la pareja, aunque se requiere de mucha comunicación para mejorar la relación. SIGNIFICADO DINERO Un aumento salarial está en puerta y traerá un buen beneficio económico. Para ubicar el lado negativo del 7 de Bastos, es importante que tomes en cuenta la siguiente información: “Cuando aparezca en tu tirada y deseas saber si está al revés, deberás ubicar que el primer palo de arriba a la izquierda sea de color naranja o rojo, según sea el diseño de la carta”. CARTA INVERTIDA El lado negativo de la lectura te advierte que mientras tú brillas en el trabajo, existe una persona envidiosa que desea tu puesto, pero no se da cuenta de que tu éxito lo has logrado gracias a tu esfuerzo, así que se dedicará a hablar a tus espaldas para hacerte quedar mal. Otro rasgo negativo cuando aparece esta carta en una tirada es la inseguridad y autoestima del consultante, ya que en el trabajo se puede sentir poca cosa o incapaz, lo cual atrae dudas y lo puede hacer caer en errores. Cuando se pregunta por la pareja está advirtiendo que hay celos absurdos, que pueden acabar con la paciencia de la pareja hasta llegar a la ruptura.';
  bastos10: string =
    'BASTOS 10: Bien aspectada anuncia comienzos y novedades, quizás un mensajero extranjero. Si la consulta es sobre la relación con alguien, señala que ese alguien es sincero con nosotros. Mal aspectada indica inestabilidad y disgustos. Recibirás el mensaje de un amigo o pariente, serán noticias alentadoras y felices. Si estás proyectando un viaje o un cambio, no lo dudes, anuncia un éxito rotundo. SIGNIFICADO AMOR Presenta relaciones apasionadas o problemas de celos. Hay que reflexionar si vale la pena luchar por esta relación. Si la respuesta es sí, aconseja trabajar en la comunicación. Cuando el consultante está soltero anuncia la llegada de una pareja joven y dinámica. SIGNIFICADO DINERO Augura la llegada de un dinero inesperado, así como un crecimiento en lo laboral. Deben observarse los gastos y planificarlos. Mal aspectada indica un mal momento económico. Quizás el consultante haya tomado malas decisiones en el pasado y esté pagando hoy las consecuencias. Cuidado con los consejos recibidos.CARTA INVERTIDA En posición invertida o acompañada de cartas negativas, la Sota de Bastos presenta confusiones e indecisiones. Indica obstáculos que asustarán al consultante. Éste deberá alcanzar la madurez necesaria para lograr la estabilidad. Es muy probable también que el consultante no haya tomado las mejores decisiones a la hora de comenzar sus proyectos, y por eso no esté obteniendo los resultados deseados. Cualquiera que sea la pregunta realizada, la respuesta será un resultado negativo, sin llegar a ser nefasto. Al tratarse de un mensajero, esta figura nos habla de noticias negativas y desagradables. También puede significar que la persona joven que describe la sota de bastos sea una persona inestable, desagradable, en quien no se debe confiar. Sin embargo esto será algo de carácter temporal. En el amor indica que debes ponerte en movimiento si quieres resolver los problemas de pareja. Si no la tienes, deja que las cosas avancen solas. Alguien podría estar interesado en ti, pero escucharás muchos rumores. No te dejes llevar, pero tampoco hagas oídos sordos. En el trabajo señala que debes mostrar más decisión. La falta de ésta podría traerte complicaciones.';
  bastos11: string =
    'BASTOS 11: Cuando aparece esta carta en tu tirada está alertándote sobre tu liderazgo y el carisma que tienes, o bien de un hombre que viene del extranjero a tu vida. El Caballero de Bastos es una carta que habla de movimiento, de hacer las cosas con pasión. Señala que se tiene la fuerza, decisión y el carisma necesarios para realizar cualquier cosa que te propongas y enfrentar retos. También te está avisando que puede llegar un hombre extranjero a tu vida. SIGNIFICADO AMOR Habla de una relación sólida que debes apreciar y que es el momento de disfrutar de una relación plena. SIGNIFICADO DINERO Puede ser que en breve tiempo llegue un aumento de dinero por nuevas oportunidades de empleo o negocio que viene desde el extranjero. O bien, te está alertando que puede haber un traslado de ciudad o incluso de país por necesidades laborales CARTA INVERTIDA Cuando esta carta se presenta al revés deberás de tomar en cuenta que te está pidiendo reflexionar acerca de las oportunidades que se están presentando, porque tal vez no sea la mejor opción y representen un retroceso en tu vida, que pondrá de cabeza tu mundo. Así que es tiempo de que sigas a tu intuición y dejes pasar tiempo para que se aclaren tus dudas y puedas actuar. No actúes por impulso o puedes arrepentirte.';
  bastos12: string =
    'BASTOS 12: Cuando aparece esta carta es momento de buscar consejo de alguien con más experiencia para que puedas hacer un cambio en tu vida, ya que las dudas te están provocando ansiedad y te pueden llevar a cometer errores. El Rey de Bastos te pide madurez para actuar. Es momento de hacer una introspección y ver qué áreas de tu vida no están equilibradas. Debes de tomar acciones para mejorar. SIGNIFICADO AMOR Tienes una relación estable, un camino andado que te genera seguridad y estabilidad emocional. No te dejes cautivar por una aventura, porque lo puedes perder todo. SIGNIFICADO DINERO Estabilidad económica, has trabajado mucho para tener hoy una vida tranquila. No caigas en tentaciones porque puedes perderlo todo. Cuando aparece el Rey de Bastos al revés, seguramente está el consultante pasando por un periodo de confusión o la autoestima la tiene muy baja, por tanto busca el consejo de una persona más experimentada, solo la baraja advierte que tenga cuidado a quién pide ayuda, ya que la persona en quien confianza no siempre quiere tu beneficio y solo puede estar manipulando al consultante para su beneficio. Por otra parte, si el consultante es una persona mayor, debe tener cuidado con dejarse seducir por un amor más joven que solo está buscando la estabilidad económica del consultante, sin importar los sentimientos, pero que a la larga puede perder toda su fortuna por esta relación interesada.';

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
    console.log(this.opcionesSeleccionadas)
    switch (this.opcion1) {
      case 'As de oros':
        this.respuesta1 = this.asDEOro;
        break;
      case 'oro 02':
        this.respuesta1 = this.oro2;
        break;
      case 'oro 03':
        this.respuesta1 = this.oro3;
        break;
      case 'oro 04':
        this.respuesta1 = this.oro4;
        break;
      case 'oro 05':
        this.respuesta1 = this.oro5;
        break;
      case 'oro 06':
        this.respuesta1 = this.oro6;
        break;
      case 'oro 07':
        this.respuesta1 = this.oro7;
        break;
      case 'oro 10':
        this.respuesta1 = this.oro10;
        break;
      case 'oro 11':
        this.respuesta1 = this.oro11;
        break;
      case 'oro 12':
        this.respuesta1 = this.oro12;
        break;
      case 'As de copas':
        this.respuesta1 = this.asDeCopas;
        break;
      case 'copa 02':
        this.respuesta1 = this.copa2;
        break;
      case 'copa 03':
        this.respuesta1 = this.copa3;
        break;
      case 'copa 04':
        this.respuesta1 = this.copa4;
        break;
      case 'copa 05':
        this.respuesta1 = this.copa5;
        break;
      case 'copa 06':
        this.respuesta1 = this.copa6;
        break;
      case 'copa 07':
        this.respuesta1 = this.copa7;
        break;
      case 'copa 10':
        this.respuesta1 = this.copa10;
        break;
      case 'copa 11':
        this.respuesta1 = this.copa11;
        break;
      case 'copa 12':
        this.respuesta1 = this.copa12;
        break;
      case 'As de espadas':
        this.respuesta1 = this.asDeEspadas;
        break;
      case 'espada 02':
        this.respuesta1 = this.espada2;
        break;
      case 'espada 03':
        this.respuesta1 = this.espada3;
        break;
      case 'espada 04':
        this.respuesta1 = this.espada4;
        break;
      case 'espada 05':
        this.respuesta1 = this.espada5;
        break;
      case 'espada 06':
        this.respuesta1 = this.espada6;
        break;
      case 'espada 07':
        this.respuesta1 = this.espada7;
        break;
      case 'espada 10':
        this.respuesta1 = this.espada10;
        break;
      case 'espada 11':
        this.respuesta1 = this.espada11;
        break;
      case 'espada 12':
        this.respuesta1 = this.espada12;
        break;
      case 'espada 12':
        this.respuesta1 = this.espada12;
        break;
      case 'As de bastos':
        this.respuesta1 = this.asDeBastos;
        break;
      case 'bastos 02':
        this.respuesta1 = this.bastos2;
        break;
      case 'bastos 03':
        this.respuesta1 = this.bastos3;
        break;
      case 'bastos 04':
        this.respuesta1 = this.bastos4;
        break;
      case 'bastos 05':
        this.respuesta1 = this.bastos5;
        break;
      case 'bastos 06':
        this.respuesta1 = this.bastos6;
        break;
      case 'bastos 07':
        this.respuesta1 = this.bastos7;
        break;
      case 'bastos 10':
        this.respuesta1 = this.bastos10;
        break;
      case 'bastos 11':
        this.respuesta1 = this.bastos11;
        break;
      case 'bastos 12':
        this.respuesta1 = this.bastos12;
        break;
      default:
        break;
    }
    switch (this.opcion2) {
      case 'As de oros':
        this.respuesta2 = this.asDEOro;
        break;
      case 'oro 02':
        this.respuesta2 = this.oro2;
        break;
      case 'oro 03':
        this.respuesta2 = this.oro3;
        break;
      case 'oro 04':
        this.respuesta2 = this.oro4;
        break;
      case 'oro 05':
        this.respuesta2 = this.oro5;
        break;
      case 'oro 06':
        this.respuesta2 = this.oro6;
        break;
      case 'oro 07':
        this.respuesta2 = this.oro7;
        break;
      case 'oro 10':
        this.respuesta2 = this.oro10;
        break;
      case 'oro 11':
        this.respuesta2 = this.oro11;
        break;
      case 'oro 12':
        this.respuesta2 = this.oro12;
        break;
      case 'As de copas':
        this.respuesta2 = this.asDeCopas;
        break;
      case 'copa 02':
        this.respuesta2 = this.copa2;
        break;
      case 'copa 03':
        this.respuesta2 = this.copa3;
        break;
      case 'copa 04':
        this.respuesta2 = this.copa4;
        break;
      case 'copa 05':
        this.respuesta2 = this.copa5;
        break;
      case 'copa 06':
        this.respuesta2 = this.copa6;
        break;
      case 'copa 07':
        this.respuesta2 = this.copa7;
        break;
      case 'copa 10':
        this.respuesta2 = this.copa10;
        break;
      case 'copa 11':
        this.respuesta2 = this.copa11;
        break;
      case 'copa 12':
        this.respuesta2 = this.copa12;
        break;
      case 'As de espadas':
        this.respuesta2 = this.asDeEspadas;
        break;
      case 'espada 02':
        this.respuesta2 = this.espada2;
        break;
      case 'espada 03':
        this.respuesta2 = this.espada3;
        break;
      case 'espada 04':
        this.respuesta2 = this.espada4;
        break;
      case 'espada 05':
        this.respuesta2 = this.espada5;
        break;
      case 'espada 06':
        this.respuesta2 = this.espada6;
        break;
      case 'espada 07':
        this.respuesta2 = this.espada7;
        break;
      case 'espada 10':
        this.respuesta2 = this.espada10;
        break;
      case 'espada 11':
        this.respuesta2 = this.espada11;
        break;
      case 'espada 12':
        this.respuesta2 = this.espada12;
        break;
      case 'espada 12':
        this.respuesta2 = this.espada12;
        break;
      case 'As de bastos':
        this.respuesta2 = this.asDeBastos;
        break;
      case 'bastos 02':
        this.respuesta2 = this.bastos2;
        break;
      case 'bastos 03':
        this.respuesta2 = this.bastos3;
        break;
      case 'bastos 04':
        this.respuesta2 = this.bastos4;
        break;
      case 'bastos 05':
        this.respuesta2 = this.bastos5;
        break;
      case 'bastos 06':
        this.respuesta2 = this.bastos6;
        break;
      case 'bastos 07':
        this.respuesta2 = this.bastos7;
        break;
      case 'bastos 10':
        this.respuesta2 = this.bastos10;
        break;
      case 'bastos 11':
        this.respuesta2 = this.bastos11;
        break;
      case 'bastos 12':
        this.respuesta2 = this.bastos12;
        break;

      default:
        break;
    }
    switch (this.opcion3) {
      case 'As de oros':
        this.respuesta3 = this.asDEOro;
        break;
      case 'oro 02':
        this.respuesta3 = this.oro2;
        break;
      case 'oro 03':
        this.respuesta3 = this.oro3;
        break;
      case 'oro 04':
        this.respuesta3 = this.oro4;
        break;
      case 'oro 05':
        this.respuesta3 = this.oro5;
        break;
      case 'oro 06':
        this.respuesta3 = this.oro6;
        break;
      case 'oro 07':
        this.respuesta3 = this.oro7;
        break;
      case 'oro 10':
        this.respuesta3 = this.oro10;
        break;
      case 'oro 11':
        this.respuesta3 = this.oro11;
        break;
      case 'oro 12':
        this.respuesta3 = this.oro12;
        break;
      case 'As de copas':
        this.respuesta3 = this.asDeCopas;
        break;
      case 'copa 02':
        this.respuesta3 = this.copa2;
        break;
      case 'copa 03':
        this.respuesta3 = this.copa3;
        break;
      case 'copa 04':
        this.respuesta3 = this.copa4;
        break;
      case 'copa 05':
        this.respuesta3 = this.copa5;
        break;
      case 'copa 06':
        this.respuesta3 = this.copa6;
        break;
      case 'copa 07':
        this.respuesta3 = this.copa7;
        break;
      case 'copa 10':
        this.respuesta3 = this.copa10;
        break;
      case 'copa 11':
        this.respuesta3 = this.copa11;
        break;
      case 'copa 12':
        this.respuesta3 = this.copa12;
        break;
      case 'As de espadas':
        this.respuesta3 = this.asDeEspadas;
        break;
      case 'espada 02':
        this.respuesta3 = this.espada2;
        break;
      case 'espada 03':
        this.respuesta3 = this.espada3;
        break;
      case 'espada 04':
        this.respuesta3 = this.espada4;
        break;
      case 'espada 05':
        this.respuesta3 = this.espada5;
        break;
      case 'espada 06':
        this.respuesta3 = this.espada6;
        break;
      case 'espada 07':
        this.respuesta3 = this.espada7;
        break;
      case 'espada 10':
        this.respuesta3 = this.espada10;
        break;
      case 'espada 11':
        this.respuesta3 = this.espada11;
        break;
      case 'espada 12':
        this.respuesta3 = this.espada12;
        break;
      case 'espada 12':
        this.respuesta3 = this.espada12;
        break;
      case 'As de bastos':
        this.respuesta3 = this.asDeBastos;
        break;
      case 'bastos 02':
        this.respuesta3 = this.bastos2;
        break;
      case 'bastos 03':
        this.respuesta3 = this.bastos3;
        break;
      case 'bastos 04':
        this.respuesta3 = this.bastos4;
        break;
      case 'bastos 05':
        this.respuesta3 = this.bastos5;
        break;
      case 'bastos 06':
        this.respuesta3 = this.bastos6;
        break;
      case 'bastos 07':
        this.respuesta3 = this.bastos7;
        break;
      case 'bastos 10':
        this.respuesta3 = this.bastos10;
        break;
      case 'bastos 11':
        this.respuesta3 = this.bastos11;
        break;
      case 'bastos 12':
        this.respuesta3 = this.bastos12;
        break;

      default:
        break;
    }
    switch (this.opcion4) {
      case 'As de oros':
        this.respuesta4 = this.asDEOro;
        break;
      case 'oro 02':
        this.respuesta4 = this.oro2;
        break;
      case 'oro 03':
        this.respuesta4 = this.oro3;
        break;
      case 'oro 04':
        this.respuesta4 = this.oro4;
        break;
      case 'oro 05':
        this.respuesta4 = this.oro5;
        break;
      case 'oro 06':
        this.respuesta4 = this.oro6;
        break;
      case 'oro 07':
        this.respuesta4 = this.oro7;
        break;
      case 'oro 10':
        this.respuesta4 = this.oro10;
        break;
      case 'oro 11':
        this.respuesta4 = this.oro11;
        break;
      case 'oro 12':
        this.respuesta4 = this.oro12;
        break;
      case 'As de copas':
        this.respuesta4 = this.asDeCopas;
        break;
      case 'copa 02':
        this.respuesta4 = this.copa2;
        break;
      case 'copa 03':
        this.respuesta4 = this.copa3;
        break;
      case 'copa 04':
        this.respuesta4 = this.copa4;
        break;
      case 'copa 05':
        this.respuesta4 = this.copa5;
        break;
      case 'copa 06':
        this.respuesta4 = this.copa6;
        break;
      case 'copa 07':
        this.respuesta4 = this.copa7;
        break;
      case 'copa 10':
        this.respuesta4 = this.copa10;
        break;
      case 'copa 11':
        this.respuesta4 = this.copa11;
        break;
      case 'copa 12':
        this.respuesta4 = this.copa12;
        break;
      case 'As de espadas':
        this.respuesta4 = this.asDeEspadas;
        break;
      case 'espada 02':
        this.respuesta4 = this.espada2;
        break;
      case 'espada 03':
        this.respuesta4 = this.espada3;
        break;
      case 'espada 04':
        this.respuesta4 = this.espada4;
        break;
      case 'espada 05':
        this.respuesta4 = this.espada5;
        break;
      case 'espada 06':
        this.respuesta4 = this.espada6;
        break;
      case 'espada 07':
        this.respuesta4 = this.espada7;
        break;
      case 'espada 10':
        this.respuesta4 = this.espada10;
        break;
      case 'espada 11':
        this.respuesta4 = this.espada11;
        break;
      case 'espada 12':
        this.respuesta4 = this.espada12;
        break;
      case 'espada 12':
        this.respuesta4 = this.espada12;
        break;
      case 'As de bastos':
        this.respuesta4 = this.asDeBastos;
        break;
      case 'bastos 02':
        this.respuesta4 = this.bastos2;
        break;
      case 'bastos 03':
        this.respuesta4 = this.bastos3;
        break;
      case 'bastos 04':
        this.respuesta4 = this.bastos4;
        break;
      case 'bastos 05':
        this.respuesta4 = this.bastos5;
        break;
      case 'bastos 06':
        this.respuesta4 = this.bastos6;
        break;
      case 'bastos 07':
        this.respuesta4 = this.bastos7;
        break;
      case 'bastos 10':
        this.respuesta4 = this.bastos10;
        break;
      case 'bastos 11':
        this.respuesta4 = this.bastos11;
        break;
      case 'bastos 12':
        this.respuesta4 = this.bastos12;
        break;

      default:
        break;
    }
    switch (this.opcion5) {
      case 'As de oros':
        this.respuesta5 = this.asDEOro;
        break;
      case 'oro 02':
        this.respuesta5 = this.oro2;
        break;
      case 'oro 03':
        this.respuesta5 = this.oro3;
        break;
      case 'oro 04':
        this.respuesta5 = this.oro4;
        break;
      case 'oro 05':
        this.respuesta5 = this.oro5;
        break;
      case 'oro 06':
        this.respuesta5 = this.oro6;
        break;
      case 'oro 07':
        this.respuesta5 = this.oro7;
        break;
      case 'oro 10':
        this.respuesta5 = this.oro10;
        break;
      case 'oro 11':
        this.respuesta5 = this.oro11;
        break;
      case 'oro 12':
        this.respuesta5 = this.oro12;
        break;
      case 'As de copas':
        this.respuesta5 = this.asDeCopas;
        break;
      case 'copa 02':
        this.respuesta5 = this.copa2;
        break;
      case 'copa 03':
        this.respuesta5 = this.copa3;
        break;
      case 'copa 04':
        this.respuesta5 = this.copa4;
        break;
      case 'copa 05':
        this.respuesta5 = this.copa5;
        break;
      case 'copa 06':
        this.respuesta5 = this.copa6;
        break;
      case 'copa 07':
        this.respuesta5 = this.copa7;
        break;
      case 'copa 10':
        this.respuesta5 = this.copa10;
        break;
      case 'copa 11':
        this.respuesta5 = this.copa11;
        break;
      case 'copa 12':
        this.respuesta5 = this.copa12;
        break;
      case 'As de espadas':
        this.respuesta5 = this.asDeEspadas;
        break;
      case 'espada 02':
        this.respuesta5 = this.espada2;
        break;
      case 'espada 03':
        this.respuesta5 = this.espada3;
        break;
      case 'espada 04':
        this.respuesta5 = this.espada4;
        break;
      case 'espada 05':
        this.respuesta5 = this.espada5;
        break;
      case 'espada 06':
        this.respuesta5 = this.espada6;
        break;
      case 'espada 07':
        this.respuesta5 = this.espada7;
        break;
      case 'espada 10':
        this.respuesta5 = this.espada10;
        break;
      case 'espada 11':
        this.respuesta5 = this.espada11;
        break;
      case 'espada 12':
        this.respuesta5 = this.espada12;
        break;
      case 'espada 12':
        this.respuesta5 = this.espada12;
        break;
      case 'As de bastos':
        this.respuesta5 = this.asDeBastos;
        break;
      case 'bastos 02':
        this.respuesta5 = this.bastos2;
        break;
      case 'bastos 03':
        this.respuesta5 = this.bastos3;
        break;
      case 'bastos 04':
        this.respuesta5 = this.bastos4;
        break;
      case 'bastos 05':
        this.respuesta5 = this.bastos5;
        break;
      case 'bastos 06':
        this.respuesta5 = this.bastos6;
        break;
      case 'bastos 07':
        this.respuesta5 = this.bastos7;
        break;
      case 'bastos 10':
        this.respuesta5 = this.bastos10;
        break;
      case 'bastos 11':
        this.respuesta5 = this.bastos11;
        break;
      case 'bastos 12':
        this.respuesta5 = this.bastos12;
        break;

      default:
        break;
    }
    switch (this.opcion6) {
      case 'As de oros':
        this.respuesta6 = this.asDEOro;
        break;
      case 'oro 02':
        this.respuesta6 = this.oro2;
        break;
      case 'oro 03':
        this.respuesta6 = this.oro3;
        break;
      case 'oro 04':
        this.respuesta6 = this.oro4;
        break;
      case 'oro 05':
        this.respuesta6 = this.oro5;
        break;
      case 'oro 06':
        this.respuesta6 = this.oro6;
        break;
      case 'oro 07':
        this.respuesta6 = this.oro7;
        break;
      case 'oro 10':
        this.respuesta6 = this.oro10;
        break;
      case 'oro 11':
        this.respuesta6 = this.oro11;
        break;
      case 'oro 12':
        this.respuesta6 = this.oro12;
        break;
      case 'As de copas':
        this.respuesta6 = this.asDeCopas;
        break;
      case 'copa 02':
        this.respuesta6 = this.copa2;
        break;
      case 'copa 03':
        this.respuesta6 = this.copa3;
        break;
      case 'copa 04':
        this.respuesta6 = this.copa4;
        break;
      case 'copa 05':
        this.respuesta6 = this.copa5;
        break;
      case 'copa 06':
        this.respuesta6 = this.copa6;
        break;
      case 'copa 07':
        this.respuesta6 = this.copa7;
        break;
      case 'copa 10':
        this.respuesta6 = this.copa10;
        break;
      case 'copa 11':
        this.respuesta6 = this.copa11;
        break;
      case 'copa 12':
        this.respuesta6 = this.copa12;
        break;
      case 'As de espadas':
        this.respuesta6 = this.asDeEspadas;
        break;
      case 'espada 02':
        this.respuesta6 = this.espada2;
        break;
      case 'espada 03':
        this.respuesta6 = this.espada3;
        break;
      case 'espada 04':
        this.respuesta6 = this.espada4;
        break;
      case 'espada 05':
        this.respuesta6 = this.espada5;
        break;
      case 'espada 06':
        this.respuesta6 = this.espada6;
        break;
      case 'espada 07':
        this.respuesta6 = this.espada7;
        break;
      case 'espada 10':
        this.respuesta6 = this.espada10;
        break;
      case 'espada 11':
        this.respuesta6 = this.espada11;
        break;
      case 'espada 12':
        this.respuesta6 = this.espada12;
        break;
      case 'espada 12':
        this.respuesta6 = this.espada12;
        break;
      case 'As de bastos':
        this.respuesta6 = this.asDeBastos;
        break;
      case 'bastos 02':
        this.respuesta6 = this.bastos2;
        break;
      case 'bastos 03':
        this.respuesta6 = this.bastos3;
        break;
      case 'bastos 04':
        this.respuesta6 = this.bastos4;
        break;
      case 'bastos 05':
        this.respuesta6 = this.bastos5;
        break;
      case 'bastos 06':
        this.respuesta6 = this.bastos6;
        break;
      case 'bastos 07':
        this.respuesta6 = this.bastos7;
        break;
      case 'bastos 10':
        this.respuesta6 = this.bastos10;
        break;
      case 'bastos 11':
        this.respuesta6 = this.bastos11;
        break;
      case 'bastos 12':
        this.respuesta6 = this.bastos12;
        break;

      default:
        break;
    }
  }
}
