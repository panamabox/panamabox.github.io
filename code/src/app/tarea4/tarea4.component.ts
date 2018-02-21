import { Component, OnInit, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'tarea4-cmp',
    moduleId: module.id,
    templateUrl: 'tarea4.component.html'
})

export class Tarea4Component implements OnInit{
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
                question: 'Los personajes principales de la novela el Quijote son Don Quijote y...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Don Juan.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Sancho Panza.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'El Cid.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Miguel Hernández era un famoso... español nacido en Orihuela.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'cantante',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'actor',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'poeta',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál de estas tres obras literarias es de Federico García Lorca?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El Quijote.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El Cantar de Mio Cid.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'La casa de Bernarda Alba.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál es la profesión de Enrique Iglesias?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Cantante.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Guitarrista.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Actor.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Uno de los compositores españoles de música clásica más famosos es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Plácido Domingo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Josep Carreras.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Manuel de Falla.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál es la profesión de Penélope Cruz?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Cantante.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Guitarrista.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Actriz.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El Ballet Nacional de España realiza...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'danza clásica.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'danza contemporánea.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'distintos estilos de danza.',
                        correct: true
                    }
                ]
            },
            {
                question: '... es una famosa figura del pensamiento español.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Montserrat Caballé',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'María Zambrano',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Margarita Salas',
                        correct: false
                    }
                ]
            },
            {
                question: '... es responsable de los bienes del Estado que pertenecían a la Corona española.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Patrimonio Nacional',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Patrimonio Real',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Patrimonio Universal',
                        correct: false
                    }
                ]
            },
            {
                question: '¿En qué ciudad de España se encuentra una famosa mezquita, patrimonio de la Humanidad?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Santiago de Compostela.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Madrid.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Córdoba.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿En qué ciudad de España se encuentra La Alhambra, que es patrimonio de la Humanidad?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Sevilla.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Córdoba.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Granada.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿En qué ciudad se encuentra el monumento La Sagrada Familia de Gaudí?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'En Barcelona.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'En Granada.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'En Madrid.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Francisco de Goya era un famoso... español.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'pintor',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'músico',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'escritor',
                        correct: false
                    }
                ]
            },
            {
                question: 'Salvador Dalí era...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'escritor.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'director de cine.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'pintor.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Joaquín Sorolla es un famoso... nacido en Valencia.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'escritor',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'futbolista',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'pintor',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál de estos museos está en Bilbao?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El Museo Nacional Centro de Arte Reina Sofía.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'b) El Museo Thyssen-Bornemisza.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El Museo Guggenheim.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Qué es el Camino de Santiago?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Una obra de teatro.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Una ciudad de Galicia.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Una ruta de peregrinación.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿En qué año conquistaron Granada los Reyes Católicos?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'En 1452.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'En 1472.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'En 1492.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La guerra de la independencia en España transcurrió entre los años...',
                options: [
                    {
                        id: 'btn-1',
                        answer: '1701 - 1715.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '1808 - 1814.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '1936 - 1939.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿En qué fecha entró en vigor el Tratado de adhesión por el que España se integró',
                options: [
                    {
                        id: 'btn-1',
                        answer: '26 de julio de 1977.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'El 12 de junio de 1985.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El 1 de enero de 1986.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El rey de España que gobernó la mayor extensión conocida de territorios en el mundo fue...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Felipe II.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Felipe III.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Felipe IV.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Quién fue nombrado primer presidente de Gobierno después de la aprobación de la Constitución española de 1978?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Felipe González.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Adolfo Suárez.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Leopoldo Calvo Sotelo.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Desde 1975 y hasta junio de 2014, el rey de España era...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Juan Carlos I.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Felipe VI.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Alfonso XIII.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Qué toman los españoles la noche del 31 de diciembre para celebrar el cambio de año?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Lentejas.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Uvas.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Aceitunas.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Qué ciudad es famosa por sus Fallas?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Pontevedra.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Segovia.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Valencia.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál es la fiesta más famosa en Cádiz y Canarias?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El carnaval.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'La Semana Santa.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Los sanfermines.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Qué ciudad es famosa por su Feria de Abril?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Sevilla.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Segovia.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Salamanca.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Qué tres culturas convivieron en la España medieval?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'La cristiana, la judía y la musulmana.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'La fenicia, la judía y la musulmana.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'La griega, la cristiana y la judía.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El 6 de diciembre se celebra en España...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el Día de la Constitución.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'la llegada de Colón a América.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el Día del Libro.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Juan Ramón Jiménez recibió en 1956 el Premio Nobel de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Medicina.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Física.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Literatura.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Quién recibió el Premio Nobel de Fisiología y Medicina en 1959?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Santiago Ramón y Cajal.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Juan Ramón Jiménez.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Severo Ochoa.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El Cervantes es un premio que se concede a... de España e Hispanoamérica.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'actores',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'escritores',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'pintores',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los Premios Goya están relacionados con...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el cine.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'la literatura.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'la pintura.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Qué premios promueven en España los valores científicos, culturales y humanísticos que son patrimonio universal?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Los Premios Cervantes.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Los Premios Princesa de Asturias.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Los Premios Goya.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Dónde se desarrolla el Festival Internacional de Teatro Clásico de Mérida?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'En el Teatro romano.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'En la Ciudad deportiva.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'En el Museo Nacional de Arte Romano.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál de estos deportes tiene una competición denominada «La Vuelta»?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'El ciclismo.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'El fútbol.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'El tenis.',
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
