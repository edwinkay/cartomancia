import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.scss'],
})
export class OpcionesComponent implements OnInit {
  ocultar = true;
  mosCha = false;
  chakraSeleccionado: any = null;
  principal = true;
  seleccion = false;
  objeto: any;
  modalChakra = false;

  constructor() {}

  CHAKRAS = [
    {
      nombre: 'Raíz',
      color: 'red',
      conectado: 'al INSTINTO',
      emocion: 'el MIEDO',
      fondo: '../../../assets/chakras/rojo.png',
      opciones: [
        {
          titulo: 'Geobiología',
          causa:
            'El campo electromagnético natural de la Tierra se organiza en redes (como las líneas Hartmann y Curry) que, al cruzar ciertas zonas de descanso (como la cama o el sillón), alteran la vibración de quien permanece mucho tiempo en ellas. Las venas de agua subterránea también pueden amplificar la radiación telúrica, drenando energía vital del chakra raíz. Esto genera desarraigo, insomnio, sensación de amenaza invisible, debilidad inmunitaria y desprotección física y energética. Además, es común desarrollar trastornos del sistema nervioso autónomo (como taquicardia o ansiedad nocturna).',
          cura: 'Usar un péndulo para localizar zonas de geopatía, reubicar la cama o las zonas de reposo en puntos neutros. Colocar turmalina negra, shungit o hematites en las esquinas principales de la vivienda para absorber y transmutar la radiación nociva. Se pueden trazar figuras de geometría sagrada (como la Flor de la Vida) en los puntos alterados o enterrar cuarzos programados para estabilizar el campo vibratorio de la casa.',
        },
        {
          titulo: 'Chakra (Memoria Transgeneracional y Supervivencia)',
          causa:
            'El miedo inconsciente a la carencia y a la destrucción física puede proceder no solo de vivencias personales, sino de memorias celulares heredadas del linaje familiar: hambre en guerras, migraciones traumáticas, pérdidas territoriales o abusos. Esto condiciona la percepción de peligro en el presente, incluso si no existe una amenaza real. Además, las experiencias actuales de precariedad económica, desempleo o enfermedad grave reactivan este programa de supervivencia, bloqueando la confianza en la abundancia del Universo.',
          cura: 'Meditaciones de visualización donde se imagina raíces profundas anclando el cuerpo a la Tierra. Utilización de hematites, granate o jaspe rojo para fortalecer la vibración de seguridad. Repetir afirmaciones como: “Estoy a salvo aquí y ahora”, mientras se camina descalzo o se abraza un árbol. Practicar constelaciones familiares o terapia transgeneracional para liberar cargas heredadas de escasez o sufrimiento ancestral.',
        },
        {
          titulo: 'Meridiano (Riñón, Suprarrenales y Miedo)',
          causa:
            'En Medicina Tradicional China, el riñón almacena la energía vital original (Jing), cuya debilidad genera agotamiento, miedo al futuro, dudas sobre la propia capacidad de subsistencia y envejecimiento prematuro. El estrés crónico agota las glándulas suprarrenales, afectando la producción de cortisol y provocando estados de alarma constante o fatiga extrema. Los pensamientos obsesivos sobre la inseguridad también desarmonizan el meridiano, cerrando la puerta a la confianza básica en la vida.',
          cura: 'Masajear o aplicar acupresión en KD3 (punto ‘Fuente Suprema’), tomar tés remineralizantes (cola de caballo, ortiga) y suplementos de magnesio. Practicar qigong o tai chi para tonificar el flujo del meridiano renal. Realizar baños de pies con sal marina y aceites esenciales de pino o cedro, para devolver la fuerza energética al chakra raíz.',
        },
        {
          titulo: 'Aura (Fugas Áuricas y Vampirismo Energético)',
          causa:
            'Fugas en el aura pueden originarse por conflictos emocionales no resueltos, envidias dirigidas, trabajos energéticos negativos o simplemente por convivencia con personas “vampiro energético”. También se producen por shock emocional, cirugías o traumas que desgarran el campo áurico, permitiendo que la energía vital escape y deje al cuerpo físico expuesto a enfermedades y depresión. La persona siente vacío, cansancio inexplicable o desánimo sin razón aparente.',
          cura: 'Baños con sal marina, bicarbonato y hierbas (romero, ruda, laurel) para cerrar grietas energéticas. Visualización de un escudo dorado, huevo de luz o esfera violeta que protege el cuerpo sutil. Terapias de sellado áurico con reiki, biomagnetismo o cristaloterapia (obsidiana, cuarzo ahumado). Utilización de inciensos purificantes (palo santo, copal) y sahumerios rituales.',
        },
        {
          titulo: 'Conexión-Anclaje (Desarraigo por Vida Moderna)',
          causa:
            'El exceso de conexión a tecnologías, pantallas y entornos urbanos aleja al cuerpo de su frecuencia natural terrestre (Schumann Resonance), produciendo “síndrome de desconexión planetaria”: sensación de vacío existencial, incertidumbre vital, hiperactividad mental, insomnio o ansiedad. Falta la experiencia de pertenencia al ecosistema Tierra, lo que debilita el chakra raíz.',
          cura: 'Practicar earthing (caminar descalzo) en tierra o arena mínimo 20 minutos diarios. Llevar minerales de origen volcánico (lava, basalto) para recordar la conexión con el núcleo terrestre. Dormir con una manta de earthing o utilizar dispositivos de conexión a tierra en el hogar. Cantar mantras graves (LAM) para vibrar en frecuencia de raíz. Cultivar plantas, cuidar un huerto o abrazar árboles para recuperar el contacto bioeléctrico con la Tierra.',
        },
      ],
    },
    {
      nombre: 'Sacro',
      color: '#ff7f00',
      conectado: 'al PLACER',
      emocion: 'la CULPA',
      fondo: '../../../assets/chakras/orange.png',
      opciones: [
        {
          titulo:
            'Factores Genéricos (Cultura, Educación, Sexualidad reprimida)',
          causa:
            'Este chakra sufre bloqueos cuando la persona ha crecido en ambientes donde la expresión corporal, el placer, la sensualidad o la sexualidad eran vistos como pecaminosos, sucios o vergonzosos. Religiones dogmáticas o padres controladores pueden implantar culpa inconsciente relacionada con el goce o el deseo. También se acumulan memorias de abusos sexuales (propios o heredados del linaje femenino o masculino), experiencias de vergüenza corporal, o haber sido criticado o ridiculizado en la infancia por mostrar espontaneidad o placer. Estas programaciones inhiben la energía creativa, reducen el deseo sexual, provocan frigidez o impotencia, bloquean la capacidad de disfrute y dificultan la expresión emocional libre.',
          cura: 'Escritura terapéutica: redactar una carta de perdón a uno mismo o a la persona generadora del daño, expresando sin censura todo el dolor, culpa o rabia acumulada. Quemar la carta con intención de transmutación. Practicar danza libre o biodanza para desbloquear la pelvis y recuperar el goce corporal. Masajes con aceite de naranja o sándalo en la zona baja del vientre. Terapia gestalt o somática para resignificar la relación con el cuerpo.',
        },
        {
          titulo: 'Vacunas / Metales Pesados (Intoxicación Físico-Energética)',
          causa:
            'Los metales pesados (mercurio, aluminio, cadmio) almacenados en tejidos nerviosos alteran la comunicación bioeléctrica del cuerpo y afectan el flujo pránico del chakra sacro. Estos metales pueden provenir de vacunas, amalgamas dentales antiguas, contaminación atmosférica o agua contaminada. La toxicidad reduce la vitalidad sexual, bloquea la energía creativa, provoca irritabilidad o desconexión emocional y afecta el sistema reproductor.',
          cura: 'Desintoxicación con jugos verdes diarios que contengan cilantro, chlorella y espirulina para movilizar metales de tejidos profundos. Consumo de agua con silicio para eliminar aluminio. Baños de sudor en sauna infrarrojo o de vapor con eucalipto para facilitar la excreción de toxinas. Uso de magnetoterapia o terapia quelante si la intoxicación es severa. Practicar ejercicios respiratorios conscientes para purificar la energía vital estancada.',
        },
        {
          titulo: 'Bacterias / Virus / Hongos (Desequilibrio Genitourinario)',
          causa:
            'El chakra sacro es extremadamente sensible a las infecciones genitourinarias recurrentes (candidiasis, cistitis, herpes), ya que estas condiciones afectan no solo al cuerpo físico sino también a la percepción de la energía sexual como “peligrosa” o dañina. Un desequilibrio prolongado en la flora bacteriana intestinal o vaginal debilita la inmunidad local, generando inseguridad, irritabilidad o falta de deseo. También pueden actuar memorias de abuso sexual no sanadas que mantienen inconscientemente esta zona vulnerable.',
          cura: 'Tomar infusiones de uva ursi, gayuba o arándano rojo para desinfectar el tracto urinario. Incorporar probióticos vivos (kefir, chucrut, miso) para regenerar la flora protectora. Evitar jabones íntimos agresivos. Masajes pélvicos con aceite esencial de geranio o ylang-ylang. Practicar ejercicios de respiración en el abdomen bajo (dan tien) para reconectar con la energía creativa bloqueada.',
        },
        {
          titulo: 'Exposición a Radiaciones Electromagnéticas (TECNOESTRÉS)',
          causa:
            'La sobreexposición a radiaciones no ionizantes (WiFi, celulares, microondas, torres eléctricas) genera hiperactividad en la mente y desconexión de la sensibilidad corporal, afectando principalmente los chakras inferiores. En el chakra sacro, esto se traduce en reducción del deseo, infertilidad energética, rigidez emocional o bloqueo de la fluidez creativa. Además, la vibración artificial puede alterar la polaridad celular de los órganos reproductores, debilitando su campo sutil.',
          cura: 'Colocar shungit o orgonitas cerca de los dispositivos electrónicos para absorber la radiación. Tener cactus o aloe vera en zonas de trabajo. Apagar router WiFi por las noches. Realizar baños con arcilla para descargar electricidad estática del cuerpo. Practicar yoga kundalini para restablecer el flujo vital en la pelvis.',
        },
        {
          titulo: 'Medicamentos / Tratamientos (Inhibición Neuroquímica)',
          causa:
            'El uso prolongado de anticonceptivos hormonales, antidepresivos, ansiolíticos o corticoides puede alterar la química cerebral relacionada con la motivación, el deseo sexual y la creatividad. El chakra sacro resiente la supresión del impulso erótico-vital, manifestando pérdida de pasión, placer, iniciativa o inspiración. Además, estos medicamentos pueden debilitar el hígado, órgano relacionado con la regulación de hormonas sexuales.',
          cura: 'Aplicar aceite esencial de ylang-ylang o jazmín en el bajo vientre para estimular la sensualidad natural. Suplementar con maca o damiana para reactivar el deseo sexual. Practicar tantra o masaje sensitivo para despertar las sensaciones bloqueadas. Consultar con un médico naturalista para planificar una posible reducción gradual de fármacos, si es viable. Meditar con carneliana para activar la creatividad dormida.',
        },
      ],
    },
    {
      nombre: 'Plexo Solar',
      color: '#ffad16',
      conectado: 'al PODER',
      emocion: 'la VERGUENZA',
      fondo: '../../../assets/chakras/yellow.png',
      opciones: [
        {
          titulo:
            'Desconectado de Sensaciones (Insensibilidad, Rigidez Emocional)',
          causa:
            "La desconexión con las sensaciones físicas nace de traumas emocionales o físicos (como abuso, abandono, humillación o violencia) donde el cuerpo 'aprendió' a bloquear las emociones para sobrevivir. Este mecanismo de defensa genera insensibilidad, rigidez, dificultad para sentir placer, vacío en el estómago, ansiedad o desconexión con las propias necesidades. A nivel metafísico, implica una pérdida del centro de poder personal.",
          cura: [
            'Yoga restaurativo focalizado en el abdomen',
            'Masajes abdominales con aceite de jengibre o mostaza',
            'Práctica de bioenergética para desbloquear el diafragma',
            'Respiraciones profundas hacia la zona del ombligo',
            'Terapias cuerpo-mente como focusing o somatic experiencing',
          ],
        },
        {
          titulo: 'Inseguridad (Autoestima Herida, Miedo al Juicio)',
          causa:
            'Proviene de un historial de críticas, desprecio o desvalorización en la infancia o adolescencia, especialmente de figuras de autoridad. El resultado es un yo interior débil y dependiente de la aprobación ajena, temeroso del error y plagado de dudas. Energéticamente debilita el fuego interno, el centro de voluntad.',
          cura: [
            "Afirmaciones frente al espejo: 'Yo soy valioso y merezco respeto'",
            'Uso de citrino o ojo de tigre en el plexo solar',
            'Visualización de un sol dorado en el abdomen',
            'Participar en actividades que fomenten logros personales',
            'Terapia cognitiva para reprogramar creencias limitantes',
          ],
        },
        {
          titulo: 'Mente Reflexiva en Exceso (Perfeccionismo, Control)',
          causa:
            'La hiperactividad mental y el deseo de control absoluto bloquean la espontaneidad y la capacidad de disfrutar el presente. Se origina en experiencias inseguras o de fracaso que instauraron la creencia de que todo debe estar bajo control. Esto consume el fuego vital del plexo solar.',
          cura: [
            'Meditaciones con cristal de citrino en el plexo solar',
            'Respiración diafragmática para calmar el sistema simpático',
            'Actividades improvisadas como pintura libre o danza espontánea',
            'Terapia gestalt para reconciliarse con el error y la fluidez',
          ],
        },
        {
          titulo: 'Amor Propio (Comparación, Autoexigencia)',
          causa:
            'La constante comparación con modelos sociales de éxito o belleza puede generar sentimientos de insuficiencia, frustración o celos. Esta comparación apaga la chispa vital del plexo solar y debilita la autoestima.',
          cura: [
            'Diario de gratitud personal',
            'Autoabrazo consciente con respiración profunda',
            'Terapia de arte o collage sobre dones personales',
            'Uso de piedra sol para activar alegría interna',
            'Lectura de textos de autoaceptación',
          ],
        },
        {
          titulo: 'Gestión Emocional (Expresión Reprimida, Desborde)',
          causa:
            "La falta de recursos emocionales adecuados lleva a reprimir o desbordar emociones intensas, afectando la digestión emocional y física. Esto puede generar gastritis, úlceras o sensación de 'nudo' en el plexo solar.",
          cura: [
            'Escritura emocional libre diaria',
            'Infusión de manzanilla con miel',
            'Práctica de EFT (Emotional Freedom Technique)',
            'Psicoterapia centrada en la validación emocional',
            "Vocalización de sonido 'RAM' para desbloquear el plexo solar",
          ],
        },
      ],
    },
    {
      nombre: 'Corazón',
      color: 'green',
      conectado: 'al AMOR',
      emocion: 'el DOLOR',
      fondo: '../../../assets/chakras/green.png',
      opciones: [
        {
          titulo: 'Modo de Vida (Rutina Estresante, Falta de Alegría)',
          causa: `Vivir de manera automática, en rutinas monótonas, bajo presión constante o en ambientes laborales tóxicos que no nutren el alma, genera una desconexión con la alegría y la compasión natural del corazón. La sobrecarga de tareas, la falta de sentido en lo que se hace y la ausencia de espacios de gozo provocan un cierre progresivo del chakra corazón, volviéndolo rígido o insensible. Esto se manifiesta en tristeza inexplicable, cansancio emocional o frialdad afectiva. En lo sutil, el campo energético se vuelve opaco, impidiendo la circulación de energía amorosa.`,
          cura: `Realizar "baños de bosque" (shinrin-yoku) mínimo una vez a la semana: caminar conscientemente entre árboles, sintiendo la respiración y el contacto con la naturaleza. Cultivar pasatiempos que generen placer (música, arte, danza). Abrir espacios para el juego, la risa y el compartir con seres queridos. Terapias de biodanza o meditación compasiva (Metta) para despertar el amor interno.`,
        },
        {
          titulo: 'Veneno/Toxina/Alérgeno (Pesticidas, Aditivos, Químicos)',
          causa: `La exposición constante a toxinas ambientales como pesticidas, plásticos, aditivos alimentarios y productos cosméticos sintéticos altera la biología celular y produce inflamación crónica. Este estado inflamatorio debilita el sistema inmunológico, afecta el timo (glándula relacionada con el chakra corazón) y bloquea la vibración armónica de este centro energético. En el plano sutil, estas sustancias bajan la frecuencia vibratoria del cuerpo, dificultando la conexión con el amor universal y la compasión.`,
          cura: `Adoptar una dieta alcalina rica en alimentos frescos, orgánicos y naturales. Eliminar productos procesados, refinados y químicos del hogar. Tomar carbón activado una vez por semana para limpiar residuos tóxicos. Infusiones depurativas (como diente de león) para apoyar el hígado. Utilizar productos de higiene ecológicos sin químicos agresivos.`,
        },
        {
          titulo: 'Lugar de Vida (Ambiente Tóxico, Ruidoso, Desarmónico)',
          causa: `Vivir en zonas urbanas contaminadas, ruidosas, con vecinos conflictivos o carentes de belleza natural afecta el estado emocional y vibracional del chakra corazón. La constante sobrestimulación auditiva y visual genera estrés inconsciente, irritabilidad y sensación de "cerrar" el corazón para protegerse. Los espacios desordenados o caóticos también bloquean la energía armónica del hogar y del cuerpo sutil.`,
          cura: `Armonizar el espacio vital con plantas purificadoras (lavanda, albahaca, jazmín). Utilizar difusores de aceites esenciales de rosa o geranio. Implementar feng shui para favorecer la circulación energética. Escuchar música de alta vibración (432 Hz). Mantener orden y limpieza visual para crear sensación de paz. Si es posible, mudarse a entornos naturales o menos cargados energéticamente.`,
        },
        {
          titulo: 'Alimentación (Inflamación, Tóxicos Alimentarios)',
          causa: `El consumo habitual de azúcares refinados, grasas saturadas, harinas blancas y ultraprocesados genera inflamación sistémica, afecta la microbiota intestinal y debilita el sistema cardiovascular, directamente conectado con el chakra corazón. La sangre se vuelve más densa y cargada de toxinas, disminuyendo la vitalidad celular y la oxigenación de los tejidos. En lo energético, esto entorpece la expansión amorosa y la capacidad de dar/recibir afecto.`,
          cura: `Consumir diariamente jugo verde con apio, perejil y limón para alcalinizar la sangre, oxigenar las células y desinflamar. Aumentar el consumo de grasas saludables (aguacate, nueces, aceite de oliva). Reducir al mínimo productos industrializados. Practicar ayunos intermitentes para permitir la regeneración celular. Suplementar con omega 3 para proteger el sistema cardiovascular.`,
        },
        {
          titulo: 'Deficiencia (Falta de Nutrientes Esenciales)',
          causa: `La carencia de minerales como magnesio, potasio y vitaminas esenciales (como D y B12) afecta la relajación muscular, el equilibrio nervioso y el funcionamiento del sistema inmunológico. Esto genera fatiga crónica, tristeza, baja tolerancia al estrés y sensación de debilidad vital. En términos sutiles, el cuerpo no tiene energía suficiente para sostener una vibración amorosa y elevada en el chakra corazón.`,
          cura: `Realizar análisis nutricionales y suplementar con magnesio, vitamina D3 y B12 según indicación profesional. Tomar baños de sol de 10 a 15 minutos diarios sin bloqueador en rostro y brazos. Consumir alimentos ricos en clorofila (espinaca, kale, alga espirulina). Practicar ejercicios de respiración profunda para aumentar la oxigenación sanguínea. Integrar superalimentos verdes (como matcha o chlorella) a la dieta diaria.`,
        },
      ],
    },
    {
      nombre: 'Garganta',
      color: 'blue',
      conectado: 'a la VERDAD',
      emocion: 'la MENTIRA',
      fondo: '../../../assets/chakras/blue.png',
      opciones: [
        {
          titulo: 'Familia/Amigos (Secretos Ocultos, Mentiras, Silencio)',
          causa:
            'Verdades no reveladas en el entorno familiar (como adopciones, traiciones o abusos) crean un ambiente de represión y miedo a la expresión, afectando la garganta y bloqueando la comunicación auténtica. Esto se hereda energéticamente y se manifiesta como miedo a hablar, dificultad para expresarse o sensación de opresión en la garganta.',
          cura: "Terapias de sonido con cuencos tibetanos en la zona de la garganta. Cantar mantras como 'HAM' por las mañanas. Escribir cartas de desahogo. Practicar vocalización de sonidos largos ('E', 'O') y respiración consciente para desbloquear la zona laríngea.",
        },
        {
          titulo: 'Profesión/Empresa (Deshonestidad, Manipulación Laboral)',
          causa:
            'Trabajos que obligan a mentir, manipular o callar verdades generan un profundo conflicto en el chakra garganta. La incoherencia interna afecta físicamente (pérdida de voz, faringitis) y energéticamente (sensación de haber vendido la voz o de no poder hablar con verdad).',
          cura: "Llevar lapislázuli o aguamarina durante el trabajo. Hacer 'autoentrevistas' frente al espejo para practicar la expresión auténtica. Establecer límites verbales claros. Liberar la voz gritando en la naturaleza o cantando sin juicio.",
        },
        {
          titulo: 'Choque/Accidente (Emociones No Expresadas Post-Trauma)',
          causa:
            'Eventos traumáticos no procesados emocional ni verbalmente se almacenan en la zona del cuello y garganta. Esto produce tensiones, bruxismo o dificultad para tragar. El chakra se cierra como defensa ante el dolor no expresado.',
          cura: 'Usar Flores de Bach como Star of Bethlehem y Rescue Remedy. Escribir o contar en voz alta lo vivido. Masajes en cuello y mandíbula con lavanda. Respiración consciente con suspiros audibles para liberar la carga emocional atrapada.',
        },
        {
          titulo: 'Trauma/Abuso (Reprimir la Voz Real)',
          causa:
            "El abuso verbal, físico o sexual enseña a callar por miedo a represalias. Se generan patrones de sumisión, dificultad para decir 'no', ronquera frecuente o infecciones respiratorias. El chakra garganta se bloquea por autocensura.",
          cura: "Tapping con frases como 'Es seguro para mí expresarme'. Participar en círculos de palabra sagrada. Gritar o cantar en espacios seguros. Afirmaciones frente al espejo como 'Tengo derecho a decir lo que siento'.",
        },
        {
          titulo: 'Relación de Pareja (Mentiras, Comunicación Deficiente)',
          causa:
            'Relaciones donde predomina la mentira, la manipulación emocional o la falta de comunicación honesta bloquean la garganta. Esto puede generar opresión, tartamudeo, llanto reprimido o angustia inexplicable.',
          cura: "Asistir a talleres de Comunicación No Violenta. Usar piedras como sodalita durante conversaciones clave. Hacer 'diálogo espejo' en pareja. Escribir o verbalizar rituales de perdón para sanar heridas comunicativas.",
        },
      ],
    },
    {
      nombre: 'Tercer ojo',
      color: 'purple',
      conectado: 'a la PERCEPCION',
      emocion: 'la ILUSION',
      fondo: '../../../assets/chakras/purple.png',
      opciones: [
        {
          titulo: 'Ciencia Errónea (Materialismo, Negación de lo Espiritual)',
          causa: `La mente educada en paradigmas estrictamente racionalistas o materialistas (donde solo lo tangible, medible o comprobable es real) bloquea la percepción intuitiva, la creatividad visionaria y el contacto con dimensiones superiores. Esta creencia limitante niega la validez de las sincronicidades, los sueños premonitorios, la energía sutil o la sabiduría espiritual interna, cerrando el "ojo interno".
A nivel físico puede causar migrañas, problemas de visión, insomnio o pensamientos obsesivos.`,
          cura: `Leer textos de física cuántica espiritual (por ejemplo: Amit Goswami, Gregg Braden) o filosofía oriental (Vedanta, Budismo Zen) para flexibilizar la mente. Realizar visualizaciones guiadas que estimulen imágenes internas. Practicar el "mindfulness" para soltar el exceso de análisis. Usar cristales como amatista o fluorita morada en la frente durante la meditación para abrir la percepción sutil.`,
        },
        {
          titulo:
            'Limitación Autoimpuesta (Creencias de Incompetencia o Falta de Talento)',
          causa: `Mensajes limitantes de la infancia ("No puedes", "No sirves para esto") se graban en el subconsciente bloqueando la confianza en la propia percepción, intuición y capacidad de visualizar un futuro mejor. Esto lleva a la persona a auto-sabotearse, dudar de sus ideas o depender de la opinión ajena.
Físicamente puede manifestarse como presión en la frente, confusión mental, dificultad para concentrarse o baja creatividad.`,
          cura: `Realizar sesiones de hipnosis regresiva o reprogramación subconsciente (PSYCH-K, ThetaHealing) para modificar las creencias raíz. Trabajar con afirmaciones diarias como: "Veo claramente mi camino" o "Confío en mi visión interior". Dibujar o pintar libremente (sin buscar perfección) para reactivar la imaginación. Dormir con un cuarzo ojo de halcón o labradorita bajo la almohada para estimular sueños lúcidos.`,
        },
        {
          titulo:
            'Dogmatismo Extremo (Religioso, Científico o Filosófico Cerrado)',
          causa: `La adhesión ciega a sistemas de creencias rígidos (religiosos, políticos, ideológicos o científicos) impide cuestionar, explorar nuevas perspectivas o aceptar misterios de la existencia. Este cierre mental desconecta al individuo de la sabiduría universal y del acceso a respuestas intuitivas o revelaciones espontáneas. Puede causar sensación de vacío espiritual, rigidez mental o fatiga por exceso de control mental.`,
          cura: `Viajar a culturas diferentes, asistir a charlas o leer autores de visiones opuestas a las propias para expandir la mente. Practicar "meditación de la vacuidad" (Zazen) donde se deja pasar todo pensamiento sin aferrarse a ninguno. Usar aceites esenciales de sándalo o incienso en la frente para estimular la apertura espiritual. Realizar ejercicios de contemplación del cielo estrellado para recordar la vastedad de la existencia.`,
        },
        {
          titulo: 'Desconexión del Verdadero Yo (Falsas Máscaras Sociales)',
          causa: `El uso constante de "máscaras" o roles para agradar, encajar o cumplir expectativas externas (familiares, laborales, sociales) genera una pérdida de identidad real. Esto bloquea el acceso a la voz interior, dificulta la toma de decisiones intuitivas y provoca confusión respecto al sentido de la vida. Puede causar visión borrosa, fatiga ocular, dolor de cabeza o falta de motivación.`,
          cura: `Meditar diariamente con la pregunta: "¿Quién soy más allá de mis roles?" o practicar ejercicios de escritura automática para dejar fluir mensajes del inconsciente. Retirarse temporalmente de redes sociales o ambientes que fomenten la comparación. Usar lapislázuli o sodalita sobre el entrecejo durante la noche. Llevar un diario de sueños para registrar mensajes simbólicos del inconsciente.`,
        },
        {
          titulo: 'Rechazo a la Espiritualidad (Miedo o Traumas Religiosos)',
          causa: `Personas que han sufrido imposiciones religiosas duras, fanatismos o abusos espirituales tienden a rechazar todo lo relacionado con espiritualidad, cerrando la puerta a su dimensión sutil e intuitiva. Este bloqueo impide conectar con guías internos, recibir señales o acceder a estados superiores de conciencia. Se manifiesta como insomnio, ansiedad nocturna o miedo irracional a lo desconocido.`,
          cura: `Pasar tiempo en soledad en la naturaleza, especialmente al amanecer o al anochecer, para reconectar con el misterio natural sin dogmas. Practicar meditaciones de silencio o contemplación de la respiración. Llevar piedras como amatista o azurita para proteger y abrir el tercer ojo suavemente. Evitar prácticas esotéricas agresivas o forzadas y priorizar el contacto natural con lo sagrado.`,
        },
      ],
    },
    {
      nombre: 'Corona',
      color: 'violet',
      conectado: 'a la ENERGIA COSMICA',
      emocion: 'el APEGO',
      fondo: '../../../assets/chakras/violet.png',
      opciones: [
        {
          titulo: '1. Karma: Deudas o Aprendizajes no Resueltos',
          causa:
            'Traumas kármicos colectivos: Por ejemplo, haber pertenecido a órdenes religiosas o espirituales en vidas pasadas donde se abusó del poder (como inquisidores, sacerdotes corruptos, o líderes que manipularon a otros). Pactos de silencio o lealtad: Acuerdos energéticos con grupos o almas afines para ocultar verdades (ejemplo: sociedades secretas, familias con secretos oscuros). Muerte violenta en vidas pasadas: Si en otra encarnación fuiste asesinado/a por defender tus creencias espirituales, puede haber un miedo inconsciente a destacar o a hablar tu verdad en esta vida. Sueños recurrentes con lugares históricos, personas desconocidas pero familiares, o situaciones donde te sientes atrapado/a. Sensación de culpa inexplicable o miedo a repetir errores del pasado. Dificultad para cerrar ciclos (siempre regresas a relaciones o situaciones similares).',

          cura: 'Regresión Kármica con Péndulo, Péndulo de cuarzo transparente o amatista, Enciende el incienso de sándalo y sostén el péndulo sobre tu chakra corona (parte superior de la cabeza). Pregunta: ¿Tengo un contrato kármico activo que deba liberar?.Si el péndulo gira en sentido positivo, formula: muesstrame en qué área de mi vida se manifiesta este karma. Anota las sensaciones, imágenes o palabras clave que lleguen.Finaliza con: “Libero este pacto con amor y perdón. Que se disuelva en luz. Baño de Descarga Kármica, Sal negra (o sal del Himalaya), romero cáscara de limón, Hierve los ingredientes en agua, déjala enfriar y viértela sobre tu cuerpo (del cuello hacia abajo) después de ducharte. Visualiza cómo el agua se lleva todas las memorias kármicas pesadas.',
        },
        {
          titulo: '2. Misión de Vida: Miedo al Propósito Espiritual',
          causa:
            'Programación de pobreza espiritual: Creencias como “Lo espiritual no da dinero” o “Debes sufrir para ser un alma pura”. Encarnaciones pasadas donde tu espiritualidad fue castigada (ejemplo: brujas quemadas, sabios exiliados). Miedo a la soledad: Creer que asumir tu misión te aislará de los demás. Saber intuitivamente qué debes hacer, pero procrastinarlo (ejemplo: postergar escribir un libro, iniciar un proyecto holístico). Sentir que “algo grande” te espera, pero no saber cómo acceder a ello. Dolores de cabeza frecuentes (especialmente en la coronilla).',

          cura: 'Ritual de Activación con Amatista y Selenita. Amatista (en bruto o en forma de geoda), selenita en varita, vela blanca. Coloca la amatista sobre tu cabeza y la selenita en el entrecejo. Enciende la vela y di: “Mi camino espiritual se revela con claridad y gracia”. Permanece en silencio 15 minutos, observando qué imágenes o mensajes llegan. Escritura Automática para Conectar con tu Misión. Antes de dormir, escribe en un cuaderno: “Guías, ¿cuál es el siguiente paso en mi misión?”. Al despertar, escribe lo primero que venga a tu mente, sin filtros.',
        },
        {
          titulo: '3. Manipulación/Hechizo: Energías Negativas Externas',
          causa:
            'Magia emocional: Alguien te ata energéticamente mediante objetos, fotos o palabras (aunque no sea consciente de ello). Envidiadores crónicos: Personas que constantemente te comparan o desean lo que tienes. Cansancio extremo sin causa médica (especialmente después de interactuar con ciertas personas). Sueños con serpientes, arañas o personas que te persiguen. Mala suerte repentina (accidentes pequeños, objetos que se rompen).',

          cura: 'Baño de Ruda y Sal Marina (Versión Potenciada). Vinagre de manzana (para disolver envidias), hojas de laurel (protección). Mezcla todos los ingredientes en un balde con agua fría. Vierte sobre tu cuerpo desde los hombros hacia abajo (evita la cabeza para no bloquear intuición). Repite 3 veces: “Todo mal deseo regresa a su origen, yo estoy limpio/a”. Espiral de Protección con Mirra. Quema resina de mirra en tu casa y dibuja una espiral en el aire con el humo, empezando desde la puerta hacia adentro. Esto crea un escudo energético.',
        },
        {
          titulo: '4. Dependencia/Enlaces: Cordones Energéticos Tóxicos',
          causa:
            'Relaciones kármicas de rescate: Creer que debes ayudar a alguien aunque te dañe (común en padres/hijos, parejas codependientes). Miedo a la soledad: Mantener vínculos por necesidad emocional, no por amor genuino. Pensar constantemente en una persona (aunque no la veas). Dolor en el plexo solar o corazón cuando recuerdas a alguien.',
          cura: 'Ritual de Cord-Cutting con Velas: 2 velas (1 blanca para ti, 1 negra para la otra persona), hilo de algodón. Ata el hilo entre las dos velas. Enciéndelas y visualiza cómo el fuego quema el cordón energético. Cuando las velas se consuman, entierra los restos lejos de tu casa. Meditación de Liberación con Sonido: Usa un cuenco tibetano o música de 432 Hz mientras repites: “Suelto todo lazo que me une al dolor”',
        },
        {
          titulo: '5. Bloqueos no Identificados: Diagnóstico con Péndulo',
          causa:
            'Entidades ancestrales: Espíritus de familiares que no cruzaron al otro plano y se aferran a ti. Auto-sabotaje inconsciente: Miedo al éxito, al amor o a la abundancia.',
          cura: 'Protocolo con Péndulo Estelar. Haz 3 preguntas clave: ¿Este bloqueo es mío? ¿Viene de mi linaje? ¿Es una entidad externa? Según la respuesta: Si es tuyo: Trabaja con afirmaciones. Si es del linaje: Quema fotos antiguas o escribe una carta de liberación. Si es entidad: Usa salvia o incienso de copal para limpiar tu espacio.',
        },
      ],
    },
  ];

  ngOnInit(): void {}

  volver() {
    this.ocultar = true;
    this.mosCha = false;
  }
  volver2() {
    this.principal = true;
    this.seleccion = false;
  }

  mostrarChakras() {
    this.ocultar = false;
    this.mosCha = true;
  }
  seleccionarChakra(chakra: any) {
    this.principal = false;
    this.seleccion = true;
    this.chakraSeleccionado = chakra;
  }
  select(obj: any) {
    this.modalChakra = true;
    this.objeto = obj;
  }
  cerrar() {
    this.modalChakra = false;
  }
}
