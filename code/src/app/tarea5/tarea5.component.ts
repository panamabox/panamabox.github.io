import { Component, OnInit, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'tarea5-cmp',
    moduleId: module.id,
    templateUrl: 'tarea5.component.html'
})

export class Tarea5Component implements OnInit{
    private questions: any[];
    private currentQuestion;
    private nativeElement: Node;
    private currentIndex;
    
    constructor(private renderer : Renderer, private element : ElementRef) {
        this.nativeElement = element.nativeElement;
    }
    
    ngOnInit(){
        this.questions = [
            {
                question: '¿Qué cuerpo de seguridad gestiona la expedición del DNI?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'La Policía Nacional.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'La Guardia Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'La Policía Local.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los trámites relativos al permiso de conducir se realizan en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'las comisarías de policía.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'las delegaciones de Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'las jefaturas de tráfico.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿A qué edad es obligatorio tener el DNI?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'A los 14 años.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'A los 16 años.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'A los 18 años.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿A qué edad se puede sacar el carné de conducir en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'A los 16 años.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'A los 18 años.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'A los 21 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Para solicitar el pasaporte hay que presentar...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'fotografía reciente y partida de nacimiento.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'DNI y partida de nacimiento.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'DNI y fotografía reciente.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El DNI o NIE, una fotografía reciente y un informe de aptitud psicológica son necesarios para solicitar el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'carné de conducir.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'pasaporte.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'número de identificación fiscal.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La tramitación del libro de familia se realiza en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Registro Civil.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'la Seguridad Social.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'las comisarías de policía.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La solicitud de nacionalidad debe presentarse en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Ministerio de Asuntos Exteriores y de Cooperación.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'una oficina del Registro Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Ministerio de Justicia.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Para qué gestión es necesario cumplir el siguiente requisito: «Haber residido en España durante 10 años de forma legal, continuada e inmediatamente anterior a la solicitud»?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Para solicitar la nacionalidad española.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Para solicitar una beca de estudios.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Para solicitar la ayuda por desempleo.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿A qué país puede viajar con su DNI en vigor?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'A Alemania.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'A Ecuador.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'A Marruecos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La certificación de nacimiento o nacionalidad, una fotografía reciente y el certificado de empadronamiento son necesarios para solicitar...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el carné de conducir.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el DNI.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'la tarjeta sanitaria.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El certificado de empadronamiento se solicita en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la oficina de Registro Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el ayuntamiento.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'la asociación de vecinos.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se llama la revisión que deben pasar obligatoriamente los coches?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'IBI (Impuesto sobre Bienes Inmuebles).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'ITV (Inspección Técnica de Vehículos).',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'ITE (Inspección Técnica de edificios).',
                        correct: false
                    }
                ]
            },
            {
                question: 'El IVTM (Impuesto de Vehículos de Tracción Mecánica) es el impuesto que pagan...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'los propietarios de coches aptos para la circulación.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'las personas que obtienen el permiso de conducir.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los viajeros que utilizan el transporte urbano.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se denomina la unión jurídica de dos personas que crea un vínculo conyugal mediante ciertos ritos o formalidades legales, con obligaciones y derechos?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Pareja de hecho.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Matrimonio.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Pareja formal.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de las siguientes familias es una familia numerosa en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Una pareja con 1 hijo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Una pareja con 2 hijos.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Una pareja con 3 hijos.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La baja por maternidad en España, de carácter general por un solo hijo, puede ser de hasta...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '10 semanas.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '16 semanas.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '20 semanas.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España, los matrimonios con hijos que se divorcian pueden tener su custodia...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'compartida.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'dividida.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'exclusiva.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los ... de una vivienda pagan anualmente el Impuesto sobre Bienes Inmuebles (IBI).',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'inquilinos',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'propietarios',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'inquilinos y propietarios',
                        correct: false
                    }
                ]
            },
            {
                question: '¿A cuál de estas tres acciones no tiene derecho el inquilino de una vivienda en alquiler?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Tener un recibo del alquiler del mes y de todos los gastos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Hacer los cambios y obras que quiera en la casa.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Recuperar la fianza al final del contrato de alquiler.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estas acciones no debe hacer el inquilino de una vivienda de alquiler?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Usar la vivienda para actividades comerciales.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Cuidar la vivienda y pagar los daños que haga.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Pagar los gastos de agua, luz y gas.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de las siguientes conductas no es adecuada ni responsable en una comunidad de vecinos?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Reducir el nivel de ruido entre las 22:00 y las 8:00 h.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Depositar la basura en bolsas bien cerradas.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Lavar coches y motos en el garaje.',
                        correct: true
                    }
                ]
            },
            {
                question: 'En España, los propietarios de los perros deben identificarlos con...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'un collar.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'un microchip.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'una cadena.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En un menú, una tarta de almendra es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'primer plato.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'segundo plato.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'postre.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La Rioja es una región famosa por...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el cava.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'la sidra.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el vino.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Qué comida típica española tiene como principal ingrediente el tomate?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'La paella.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El gazpacho.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el cocido.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El turrón y el mazapán son dulces típicos de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Navidad.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Semana Santa.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'San Juan.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El menú de tres platos que ofrecen los restaurantes de lunes a viernes al mediodía por un precio especial se llama...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'menú especial.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'menú del día.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'menú infantil.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La moneda de curso legal en España es, desde el año 2002, ...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la peseta.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el peso.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el euro.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El organismo que protege a los consumidores y usuarios es la...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Agencia Española de Protección de Datos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Agencia Española de Consumo, Seguridad Alimentaria y Nutrición.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Agencia Española de Medicamentos y Productos Sanitarios.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se denomina la resolución de la Dirección Nacional de Empleo por la que se fijan anualmente las fiestas laborables para cada año?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Calendario fiscal.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Calendario laboral.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Calendario español.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El horario de Canarias, con respecto a la Península, tiene...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'dos horas menos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'una hora menos.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'una hora más.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España hay 14 días festivos al año, nacionales, autonómicos y...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'regionales.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'provinciales.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'locales.',
                        correct: true
                    }
                ]
            },
            {
                question: 'En España, en general, los bancos tienen un horario de atención al público de lunes a viernes...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'de 8:30 a 14:00 h, sin pausa.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'de 8:30 a 17:00 h, sin pausa.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'de 8:30 a 19:00 h, con pausa.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estas etapas educativas no es obligatoria en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Infantil (hasta los 6 años).',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Primaria (entre 6 y 12 años).',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Secundaria ESO (entre 12 y 16 años).',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España hay pruebas especiales para el acceso de los adultos a la universidad a partir de los...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '18 años.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '23 años.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '25 años.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La ESO (Enseñanza Secundaria Obligatoria) es la enseñanza a alumnos...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'de 6 a 16 años.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'de 12 a 16 años.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'de 14 a 16 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El Bachillerato en España...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'es obligatorio.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'se compone de dos cursos académicos.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'es la enseñanza a alumnos de 14 a 16 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Para hacer Formación Profesional Básica es necesario...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'haber cumplido 15 años.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'haber completado el Bachillerato.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'haber pasado un año en el extranjero.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Para hacer Formación Profesional de Grado Medio se necesita...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'haber completado el Bachillerato.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'tener el título de Educación Secundaria Obligatoria (ESO).',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'tener más de 18 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los colegios públicos...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'pueden decidir su número de plazas.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'pueden contratar los profesores que quieran.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'están financiados por el Gobierno.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Además de los padres y profesores, ¿quiénes intervienen en el control y gestión de los centros educativos sostenidos por la Administración?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Los alumnos del centro.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Los inspectores de Educación.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Los concejales del municipio.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Un colegio concertado es un colegio privado que...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'recibe subvenciones del Gobierno.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'financian los padres de los alumnos.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'recibe dinero de los bancos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las EEOOII (Escuelas Oficiales de Idiomas)...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'pertenecen a las universidades.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'hacen exámenes en junio y en septiembre.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'solo admiten alumnos adultos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las bibliotecas públicas son gratuitas para...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'todos.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'los parados.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los niños.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Dónde se puede encontrar un servicio de préstamo?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'En un supermercado.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'En una biblioteca.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'En un taller de coches.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Dónde no está permitido hacer fotos ni filmaciones de vídeo generalmente?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'En un museo.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'En un supermercado.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'En un restaurante.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Dónde se puede encontrar el siguiente aviso: «La entrada incluye el acceso a la colección y a las exposiciones temporales coetáneas el día de la visita»?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'En unos grandes almacenes.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'En un museo.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'En un banco.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se llama el establecimiento, con un horario establecido, en el que se pres-',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Hospital.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Centro de salud.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Farmacia.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La tarjeta sanitaria europea permite acceder gratuitamente a la sanidad pública durante...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '6 meses.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '12 meses.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '2 años.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La documentación necesaria para cambiar de centro médico es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'DNI, Tarjeta Sanitaria anterior y el certificado de empadronamiento.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'DNI, historial médico y una carta de su médico anterior.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'DNI, Tarjeta Sanitaria anterior e historial médico.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es el número de teléfono único de asistencia al ciudadano ante cualquier emergencia en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '060.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '112.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '911.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los viajes de vacaciones para las personas mayores de 65 años los organiza...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el IEF (Instituto de Estudios Fiscales).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el IMSERSO (Instituto de Mayores y Servicios Sociales).',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el ICO (Instituto de Crédito Oficial).',
                        correct: false
                    }
                ]
            },
            {
                question: 'Una persona que tiene a su cargo hijos menores de 18 años o hijos mayores de edad discapacitados, puede recibir una...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'pensión de viudedad.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'prestación por desempleo.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'ayuda familiar.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál es el tiempo mínimo de cotización que da derecho a una pensión de jubilación?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '15 años.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: '20 años.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '25 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La organización que trabaja para conseguir la integración de las personas con discapacidad visual es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la ONCE.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'el CERMI.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Cáritas.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de los siguientes no es un medio público de comunicación audiovisual?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Televisión Española.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Instituto de la Cinematografía y de las Artes Audiovisuales.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Radio Nacional de España.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es el canal de televisión estatal que transmite noticias de actualidad nacionales e internacionales continuamente?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Teledeporte.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'La 1.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Canal 24 horas.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cómo se llama el informativo de la televisión pública Televisión Española que se ofrece en directo a las 15:00 y a las 21:00 horas?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Noticiario.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Telenoticias.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Telediario.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Al comprar un producto nuevo, ¿cuánto tiempo dura la garantía normalmente?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '1 año.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '2 años.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '3 años.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de las tres opciones no es correcta?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Un litro de leche.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Un kilo de patatas.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Una docena de pan.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Si compramos 250 gramos de queso, estamos comprando... de queso.',
                options: [
                    {
                        id: 'btn-1',
                        answer: '1/2 kilo',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '1/4 de kilo',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '1/3 kilo',
                        correct: false
                    }
                ]
            },
            {
                question: 'Si compramos una botella de agua de 750 ml, estamos comprando una botella de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '3/4 de litro.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: '1/2 litro.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '1 litro.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se llama el establecimiento donde se pueden comprar medicinas con precios regulados, con un horario establecido mínimo y servicios de guardia?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Hospital.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Centro de salud.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Farmacia.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál de estas tres recomendaciones podemos encontrar en un parque?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Respete las plantas y el mobiliario urbano.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Es conveniente abonar el billete con el importe exacto.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Mantenga la distancia de seguridad con el vehículo precedente.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Uno de los principales puertos de España en transporte de viajeros es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Gran Canaria.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Alicante.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Algeciras.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El aeropuerto Adolfo Suárez está en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Barcelona.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Madrid.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Bilbao.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En un coche es obligatorio el uso del cinturón de seguridad...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'solo en el asiento del conductor.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'en los asientos delanteros.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'en todos los asientos.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El límite de velocidad para los coches dentro de las ciudades es de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '40 km/h.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '50 km/h.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '60 km/h.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La estación de trenes de Atocha está en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Barcelona.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Madrid.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Bilbao.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los taxis en España...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'son todos de color rojo',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'se pueden compartir entre varios clientes.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'llevan una luz verde cuando están libres.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El acrónimo RENFE corresponde a:',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Red Nacional de Fondos Europeos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Red Nacional de los Ferrocarriles Españoles.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Red Nacional de Fundaciones Estatales.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿A qué usuarios de transporte se refiere este aviso: «El Abono Normal finalizará su validez al cumplir el cliente los 65 años. A partir de esta fecha podrá cargar el Abono Tercera Edad»?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'A parados.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'A jubilados.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'A niños.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es la edad mínima para trabajar en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '16 años.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: '18 años.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '21 años.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es el sector de mayor peso en la economía española?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Agricultura.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Servicios.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Construcción.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estos productos exporta España a otros países en grandes cantidades?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Frutas y legumbres.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Café.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Gas natural.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La norma principal que regula los derechos de los trabajadores en España es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Constitución.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Estatuto de los Trabajadores.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Servicio Público de Empleo Estatal.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Un acuerdo firmado entre la empresa y los representantes de los trabajadores (sindicatos) es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'un convenio colectivo.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'un código laboral.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'un finiquito.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Quién tiene derecho a afiliarse a un sindicato?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Los trabajadores autónomos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Los funcionarios.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Todos los trabajadores.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Qué es un Parador de Turismo?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Un albergue situado en el Camino de Santiago.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Un circuito turístico con varias paradas.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Un hotel con ubicación de interés histórico o cultural.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La jornada laboral que tiene una interrupción para comer se llama...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'jornada continua.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'jornada partida.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'jornada ordinaria.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se llama el documento oficial que recoge las fechas de todos los contratos de trabajo de una persona?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Informe de Vida Laboral.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Recibo de finiquito.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Certificado de profesionalidad.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Qué impuesto pagan los residentes en España en función de la renta o el dinero ganado (salario, ingresos como autónomo, etc.)?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'IRPF (Impuesto sobre la Renta de las Personas Físicas).',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'IVA (Impuesto sobre el Valor Añadido).',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'IS (Impuesto sobre Sociedades).',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es el impuesto que pagan al Estado todos los consumidores al comprar productos y bienes o contratar servicios?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'IRPF (Impuesto sobre la Renta de las Personas Físicas).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'IVA (Impuesto sobre el Valor Añadido).',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'IS (Impuesto sobre Sociedades).',
                        correct: false
                    }
                ]
            }
        ];
        
        this.shuffle();
        this.currentQuestion = this.questions[0];
        this.currentIndex = 0;
    }
    
    okClick(option: any) {
        var q : HTMLElement = this.element.nativeElement;
        var optionButton = q.getElementsByClassName(option.id)[0];
        
        if(option.correct) {
            optionButton.classList.remove('btn-default');
            optionButton.classList.add('btn-success');
            optionButton.classList.add('btn-fill');
        } else {
            optionButton.classList.remove('btn-default');
            optionButton.classList.add('btn-danger');
            optionButton.classList.add('btn-fill');
        }
        
        this.currentQuestion.options.map(option => {
            if(option.correct) {
                var optionButton = q.getElementsByClassName(option.id)[0];
                
                optionButton.classList.remove('btn-default');
                optionButton.classList.add('btn-success');
                optionButton.classList.add('btn-fill');
            }
        });
    }
    
    nextClick() {
        this.currentIndex = this.currentIndex + 1;
        if(this.currentIndex >= this.questions.length){
            this.currentIndex = 0;
        }
        this.currentQuestion = this.questions[this.currentIndex];
    }
    
    shuffle() {
      var currentIndex = this.questions.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = this.questions[currentIndex];
        this.questions[currentIndex] = this.questions[randomIndex];
        this.questions[randomIndex] = temporaryValue;
      }
    }
}
