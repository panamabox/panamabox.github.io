import { Component, OnInit, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'tarea1-cmp',
    moduleId: module.id,
    templateUrl: 'tarea1.component.html'
})

export class Tarea1Component implements OnInit{
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
                question: 'La forma política del Estado español es la...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'monarquía parlamentaria.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'república federal.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'monarquía federal.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Según la Constitución española, la soberanía nacional reside en el pueblo, del que proceden...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'las leyes orgánicas del Estado.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'los estatutos de autonomía.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los poderes del Estado.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los valores superiores del ordenamiento jurídico de España son: el pluralismo político, la libertad, la igualdad y la...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'fraternidad.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'justicia.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'solidaridad.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La Constitución reconoce y garantiza el derecho a la autonomía de las nacionali- dades y regiones que integran España y la ... entre todas ellas.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'fraternidad',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'igualdad',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'solidaridad',
                        correct: true
                    }
                ]
            },
            {
                question: 'La Constitución garantiza la libertad religiosa de los individuos y las comunidades, por eso España es un país...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'laico.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'católico.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'aconfesional.',
                        correct: true
                    }
                ]
            },
            {
                question: 'En la Constitución se establece la separación de los poderes judicial, legislativo y ...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'administrativo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'ejecutivo.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'económico.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El funcionamiento de las instituciones se garantiza por la ... de los poderes ejecu- tivo, legislativo y judicial.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'relación',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'separación',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'unión',
                        correct: false
                    }
                ]
            },
            {
                question: 'La Constitución garantiza la seguridad... de los españoles.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'jurídica',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'legislativa',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'ejecutiva',
                        correct: false
                    }
                ]
            },
            {
                question: 'La Constitución española fue firmada por el Rey, el presidente de las Cortes, el presidente del Congreso y el presidente del...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Senado.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Estado.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Deben respetar la Constitución y el resto de legislación vigente...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'los ciudadanos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'los poderes públicos.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los poderes públicos y los ciudadanos.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El referéndum para la aprobación de la Constitución española se celebró el día...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '22 de noviembre de 1975.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '15 de junio de 1977.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '6 de diciembre de 1978.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los proyectos de reforma constitucional deben ser aprobados por...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Congreso.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Senado.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'las dos Cámaras.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Qué tribunal interpreta la Constitución con respecto a actuaciones de los pode- res públicos?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El Tribunal de Cuentas.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El Tribunal Constitucional.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'El Tribunal Supremo.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El Tribunal Constitucional es ... de los poderes del Estado.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'dependiente',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'independiente',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'subordinado',
                        correct: false
                    }
                ]
            },
            {
                question: 'El jefe del Estado es ...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Rey.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el ministro de Asuntos Exteriores y de Cooperación.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El mando supremo de las Fuerzas Armadas corresponde al...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Rey.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'ministro de Defensa.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Si el Rey o la Reina de España fuera menor de edad, ¿quién sería el regente hasta su mayoría de edad?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El padre o la madre del Rey.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'El ministro del Interior.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los embajadores y otros representantes diplomáticos extranjeros son acreditados por ...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Rey.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'el presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el ministro de Asuntos Exteriores y de Cooperación.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Convocar elecciones corresponde al...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'ministro del Interior.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Rey.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La más alta representación del Estado español en las relaciones internacionales corresponde al...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Rey.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'presidente de Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'ministro de Asuntos Exteriores y de Cooperación.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El heredero o heredera de la Corona de España, desde su nacimiento, tiene el título de Príncipe o Princesa de ...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Andalucía.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Aragón.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Asturias.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El Rey de España vive en el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Palacio Real.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Palacio de la Zarzuela.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Palacio de la Moncloa.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El lugar donde se celebran actos de Estado presididos por el Rey es el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Palacio Real.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Palacio de la Zarzuela.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Palacio de la Moncloa.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Generalmente, se considera que el primer rey de España fue...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Fernando el Santo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Carlos I.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Felipe II.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La dinastía del Rey de España, que se inició en el siglo XVIII, es la dinastía...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Austria.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Baviera.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Borbón.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuántas franjas tiene la bandera de España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '2 horizontales.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '3 verticales.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '3 horizontales.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuántos colores tiene la bandera española?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '2.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: '3.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '4.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los colores de la bandera española son...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'blanco y rojo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'rojo y amarillo.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'amarillo y blanco.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las comunidades autónomas pueden utilizar, junto con la bandera de España, sus propias banderas en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'sus edificios públicos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'actos oficiales.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'sus edificios públicos y actos oficiales.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La bandera azul con 12 estrellas amarillas en círculo es el símbolo de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Unión Europea.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'la Organización de Se- guridad y Cooperación en Europa.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'la Comisión de Europa.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El escudo de España incluye en su interior la representación de la unión de Casti- lla, León, Navarra, Granada y...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Andalucía.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Aragón.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Asturias.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El bable.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El aragonés.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El euskera.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Todos los españoles tienen el deber de conocer la lengua... del Estado.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'autonómica',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'oficial',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'local',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El catalán.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'El murciano.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El asturleonés.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El murciano.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El valenciano.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'El bable.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estas opciones es una lengua cooficial en alguna comunidad autónoma?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El gallego.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'El aragonés.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El murciano.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El ... tiene como fin la promoción y la enseñanza del español y las lenguas cooficiales, y también la difusión de la cultura española e hispanoamericana.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Instituto Nacional de Administración Pública',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Instituto Nacional de Estadística',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'lnstituto Cervantes',
                        correct: true
                    }
                ]
            },
            {
                question: 'El Instituto Cervantes, el Instituto Ramon Llull y el Instituto Vasco Etxepare son organismos que promueven, respectivamente y entre otros, la difusión de las lenguas...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'española, catalana y vasca.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'española, catalana y gallega.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'gallega, catalana y vasca.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La sede de la Presidencia del Gobierno y residencia oficial del presidente es el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Palacio Real.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Palacio de la Zarzuela.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Palacio de la Moncloa.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Si en unas elecciones generales ningún candidato a la presidencia del Gobierno consigue la confianza del Congreso, ...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Congreso elige al candidato con más votos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Rey convoca nuevas elecciones.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Rey elige al candidato con más votos.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Quiénes forman parte del Gobierno?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Los ministros.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Los concejales.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Los alcaldes.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El poder ejecutivo corresponde...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'a los jueces y magistrados.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'al presidente del Gobierno y ministros.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'a los diputados y senadores.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los proyectos de ley son aprobados por...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Consejo de Ministros.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'el presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Congreso de los Diputados.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La administración civil de España corresponde al poder...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'ejecutivo.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'legislativo.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'judicial.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La política sanitaria del Gobierno corresponde al...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Ministerio de Sanidad, Servicios Sociales e Igualdad.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Ministerio de Empleo y Seguridad Social.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Ministerio de Asuntos Exteriores y Cooperación.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El gobierno responde en su gestión política ante...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Rey.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Senado.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Congreso de los Diputados.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El mando superior de las Fuerzas y Cuerpos de Seguridad del Estado corresponde al...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'ministro de Defensa.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'ministro del Interior.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'ministro de Justicia.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuántas veces ha presidido España el Consejo Europeo?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Dos veces.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Tres veces.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Cuatro veces.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuántas veces ha reformado España su Constitución para adaptarse a las deci- siones y directivas europeas?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Ninguna.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Una vez.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Dos veces.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿A cuál de estas organizaciones internacionales pertenece España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Al Mercado Común del Sur (MERCOSUR).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'A la Organización de las Naciones Unidas (ONU).',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'A la Unión Económica Euroasiática (UEE).',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las Cortes Generales representan al pueblo. Están formadas por el Senado y por...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Consejo de Ministros.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Congreso de los Diputados.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el ayuntamiento.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El poder legislativo corresponde...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'al presidente y los ministros.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'a los jueces y magistrados.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'a los diputados y senadores.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Las Cortes Generales controlan la acción...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'del Gobierno.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'de las comunidades autónomas.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'de las provincias.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los diputados del Congreso son elegidos para...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '3 años.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '4 años.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '5 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El criterio para determinar cuántos diputados corresponden a cada provincia, con excepción de las ciudades autónomas de Ceuta y Melilla, es el número de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'ciudades.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'habitantes.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'partidos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las poblaciones de las ciudades autónomas de Ceuta y Melilla están representadas en el Congreso cada una por...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '1 diputado.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: '2 diputados.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: '3 diputados.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Al poder legislativo le corresponde...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'crear empleo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'elaborar leyes.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'elegir alcaldes.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La tercera autoridad del Estado, tras el Rey y el presidente del Gobierno, es el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'ministro del Interior.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'jefe del Estado Mayor del Ejército.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'presidente del Congreso de los Diputados.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuántos ciudadanos deben respaldar una iniciativa legislativa para poder presentar una proposición de ley?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '400.000.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '500.000.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '600.000.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En primera votación para la elección del presidente del Gobierno, se requiere una mayoría... de los votos de los diputados del Congreso.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'absoluta',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'relativa',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'simple',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los miembros del Senado se eligen cada...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '3 años.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '4 años.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '5 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Si los presupuestos del Gobierno no se aprueban en el Congreso de los Diputados antes del día 1 de enero del año correspondiente...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'se prorrogan los del año anterior.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'se vuelve a votar la propuesta el día 2 de enero.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'se aprueba la propuesta del Gobierno automáticamente.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las leyes que se refieren a los derechos fundamentales y a las libertades públicas son...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'leyes orgánicas.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'decretos ley.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'leyes generales.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Para aprobar, modificar o derogar una ley orgánica, es necesaria en el Congreso una mayoría...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'simple.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'absoluta.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'relativa.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El primer periodo ordinario de reunión de las Cámaras es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'de agosto a noviembre.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'de septiembre a diciembre.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'de septiembre a noviembre.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El segundo periodo ordinario de reunión de las Cámaras es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'de febrero a junio.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'de enero a junio.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'de enero a julio.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La Cámara de representación territorial se llama...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Congreso de los Diputados.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Cámara de Comercio.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Senado.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuántos senadores se eligen en cada provincia, con excepción de las islas y las ciudades autónomas de Ceuta y Melilla?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '3.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '4.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '5.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las ciudades autónomas de Ceuta y Melilla eligen en las elecciones cada una de ellas a...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '1 senador.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '2 senadores.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '3 senadores.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las sesiones conjuntas del Congreso y el Senado son presididas por...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Rey.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el presidente del Congreso.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El poder judicial está constituido por...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'los ministros y el presidente',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'los jueces y magistrados',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'los diputados y senadores.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es de estos organismos forma parte del poder judicial?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El Tribunal de Cuentas.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El Tribunal Constitucional.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El Tribunal Supremo.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El órgano con funciones de gobierno del poder judicial es el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Ministerio de Justicia.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Tribunal Supremo.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Consejo General del Poder Judicial.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El Consejo General del Poder Judicial...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'es diferente en cada comunidad autónoma.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'está formado por ministros',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'garantiza la independencia de los jueces.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La defensa de la integridad territorial de España corresponde a...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Policía Nacional y la Guardia Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'las Fuerzas Armadas.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'la Policía Nacional y las policías autonómicas.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El Ejército español participa desde 1989 en misiones de paz de la...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Organización de Estados Iberoamericanos (OEI).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Unión Europea Occidental (UEO).',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Organización de Naciones Unidas (ONU).',
                        correct: true
                    }
                ]
            },
            {
                question: 'La vigilancia de puertos y aeropuertos, fronteras y costas corresponde a...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Guardia Civil.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'la Policía Local.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'la Policía Nacional.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El control de la entrada y salida del territorio nacional de españoles y extranjeros corresponde a...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Guardia Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'la Policía Local.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'la Policía Nacional.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La regulación del tráfico en las ciudades corresponde a...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Guardia Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'la Policía Local.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'la Policía Nacional.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se llama la policía autonómica de Cataluña?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Guardia Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Ertzaintza.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Mossos d’Esquadra.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cómo se llama la la policía autonómica del País Vasco?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Ertzaintza.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Guardia Civil.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Mossos d’Esquadra.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El supremo órgano consultivo del Gobierno de España es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Consejo de Ministros.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Consejo de Estado.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Consejo Económico y Social.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El órgano consultivo del Gobierno de España en el que están representados em- presarios, sindicatos y organizaciones sociales es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Consejo de Ministros.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Consejo de Estado.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Consejo Económico y Social.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Quién puede presentar una queja al Defensor del Pueblo?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Solo los ciudadanos legalmente residentes.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Solo los españoles mayores de 18 años.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Todos los ciudadanos, españoles o extranjeros.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿A quién informa de su gestión el Defensor del Pueblo?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Al Rey.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Al presidente del Gobierno.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'A las Cortes Generales.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál es el órgano que controla la gestión económico-financiera del Estado?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El Tribunal de Cuentas.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'El Tribunal Supremo.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El Tribunal Constitucional.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La inspección y recaudación de los impuestos que gestiona el Estado corresponde a...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Tribunal de Cuentas.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'la Agencia Tributaria.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Consejo Económico y Social.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El organismo que elabora y difunde estadísticas sobre España es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Consejo Económico y Social.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el Instituto Nacional de Estadística.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'la Agencia Tributaria.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es la publicación oficial del Estado que sirve para publicitar leyes, normas o convocatorias públicas?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El PAE (Portal de Administración Electrónica).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El BOE (Boletín Oficial del Estado).',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'El PAE (Portal de Administración Electrónica).',
                        correct: false
                    }
                ]
            },
            {
                question: 'El Gobierno ofrece toda la información sobre novedades e iniciativas de la Administración Electrónica de España a través del...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El PAE (Portal de Administración Electrónica).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El BOE (Boletín Oficial del Estado).',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El PAE (Portal de Administración Electrónica).',
                        correct: true
                    }
                ]
            },
            {
                question: 'El teléfono de la Administración General del Estado que ofrece información sobre empleo público, becas o ayudas y subvenciones, organismos de las Administraciones, etc., es el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '010.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '060.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '091.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El Estado español se organiza territorialmente en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'municipios, cantones y regiones administrativas.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'municipios, provincias y comunidades autónomas.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'municipios, distritos y estados federales.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las provincias limítrofes con características históricas, culturales y económicas comunes, las islas y las provincias con especial entidad regional histórica fueron la base de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'las comunidades autónomas.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'los distritos.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los municipios.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las leyes orgánicas normativas de las comunidades y ciudades autónomas de España se denominan...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'leyes de autonomía.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'estatutos de autonomía.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'reglamentos de autonomía.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La norma institucional fundamental de una comunidad autónoma es ...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Constitución española.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'el estatuto de autonomía.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Código Civil.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Quién es el representante de la Administración del Estado en una comunidad autónoma?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El presidente de la comunidad autónoma.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El delegado del Gobierno.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'El presidente de la Asamblea autonómica.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los fondos públicos en España creados para corregir los desequilibrios económicos de las distintas autonomías son el Fondo Complementario y el Fondo de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Solidaridad.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Compensación.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Autonomía.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La enseñanza de las lenguas cooficiales es competencia...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'del Estado.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'de la comunidad autónoma.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'de la provincia.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estas ciudades fue capital de España antes del reinado de Felipe II?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Madrid.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Salamanca.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Toledo.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál de estas ciudades es capital de España desde el reinado de Felipe II (ex- cepto durante un breve periodo)?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Madrid.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Salamanca.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Toledo.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En materia de relaciones internacionales, la competencia es de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Estado.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'las comunidades autónomas.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los ayuntamientos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En materia de nacionalidad, inmigración, emigración, extranjería y derecho de asilo, la competencia exclusiva es de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Estado.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'las comunidades autónomas.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los ayuntamientos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En materia de Sanidad e higiene, la competencia de gestión es de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Estado.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'las comunidades autónomas.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'los ayuntamientos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El desarrollo económico de una comunidad autónoma es competencia... de dicha comunidad, de acuerdo con la política económica nacional.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'compartida',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'exclusiva',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'tutelada',
                        correct: false
                    }
                ]
            },
            {
                question: 'El ayuntamiento está formado por el alcalde y...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'los concejales.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'los diputados.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'los senadores.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Quiénes forman parte del órgano ejecutivo de las comunidades autónomas?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El presidente y los ministros.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El alcalde y los concejales.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El presidente y los consejeros.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál es el órgano de gobierno en los municipios?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El ayuntamiento.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'La diputación.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El cabildo.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cómo se llaman los órganos de gobierno de las provincias españolas?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Cabildos.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Consejos Insulares.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Diputaciones.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál de estas tres ciudades españolas está entre las diez más pobladas?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Málaga.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Gijón.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Toledo.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los españoles son mayores de edad a los...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '16 años.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '18 años.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '21 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España la enseñanza básica es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'voluntaria y gratuita.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'obligatoria y gratuita.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'obligatoria y de pago.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los españoles pueden votar a partir de los...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '16 años.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '18 años.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '21 años.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los ciudadanos de la UE y de algunos países con acuerdos de reciprocidad, residentes en España, pueden votar en las elecciones...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'locales.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'autonómicas.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'generales.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España, los cargos de presidente y vocales de las mesas electorales son...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'obligatorios.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'voluntarios.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'permanentes.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿A quiénes se elige en las elecciones generales?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'A los senadores y diputados.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'A los senadores y eurodiputados.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'A los concejales y diputados.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El organismo que elabora el censo electoral en España es el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'PAE (Portal de Administración Electrónica).',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'INE (Instituto Nacional de Estadística).',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'PAE (Portal de Administración Electrónica).',
                        correct: false
                    }
                ]
            },
            {
                question: 'Pueden ser elegidos para algún cargo político en España los miembros de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'la Familia Real.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'los partidos políticos.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'las Fuerzas y Cuerpos de Seguridad en activo.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El registro de Organizaciones No Gubernamentales para Desarrollo (ONGD) está adscrito a la...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Agencia Española de Cooperación.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Agencia Tributaria.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Agencia Española de Protección de datos.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La organización que defiende y promueve los intereses de los trabajadores se denomina...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'asociación.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'partido.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'sindicato.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Quién tiene por finalidad garantizar la transparencia y objetividad de las eleccio- nes en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'La Administración electoral.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'La Administración electrónica.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'La Administración pública.',
                        correct: false
                    }
                ]
            }
        ];
        
        this.shuffle();
        this.currentQuestion = this.questions[0];
        this.currentIndex = 0;
    }
    
    okClick() {
        var q : HTMLElement = this.element.nativeElement;
        this.currentQuestion.options.map(option => {
            if(option.correct) {
                var optionButton = q.getElementsByClassName(option.id)[0];
                
                optionButton.classList.remove('btn-default');
                optionButton.classList.add('btn-success');
                optionButton.classList.add('btn-fill');
            } else {
                var optionButton = q.getElementsByClassName(option.id)[0];
                
                if(optionButton.classList.contains('active')) {
                    optionButton.classList.remove('btn-default');
                    optionButton.classList.add('btn-danger');
                    optionButton.classList.add('btn-fill');
                }
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
