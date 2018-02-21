import { Component, OnInit, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'tarea2-cmp',
    moduleId: module.id,
    templateUrl: 'tarea2.component.html'
})

export class Tarea2Component implements OnInit{
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
                question: 'La mayoría de edad en España es a los 16 años.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los españoles tienen los mismos derechos fundamentales en cualquier parte del territorio del Estado.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los extranjeros en España tienen los mismos derechos que los españoles, aunque España no haya firmado tratados específicos al respecto con su país de origen.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los ciudadanos pueden proponer nuevas leyes ante el Defensor del Pueblo.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Se puede obligar a alguien a declarar su ideología, religión o creencias.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Se puede limitar a una persona el derecho a entrar y salir libremente de España por motivos ideológicos.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'En la Constitución no se habla del derecho a comunicar o recibir libremente información veraz por cualquier medio de difusión.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'La Constitución garantiza el derecho de los españoles a una vivienda digna.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España las fuerzas de seguridad pueden entrar en un domicilio privado sin resolución judicial en cualquier momento.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Se garantiza el secreto de las comunicaciones de los españoles, salvo resolución judicial.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Se reconoce la autonomía de las universidades en los términos que establezca la ley.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'La enseñanza básica (Primaria y Secundaria, de 6 a 16 años) es obligatoria y gratuita.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los profesores, los padres y los alumnos intervienen en el control y gestión de los centros sostenidos por la Administración con fondos públicos.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los profesores universitarios tienen derecho a enseñar con libertad, dentro de los límites de la Constitución.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los poderes públicos tienen obligación de fomentar la educación sanitaria, la educación física y el deporte.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los ciudadanos tienen derecho a la producción y creación literaria, artística, científica y técnica.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España se regulan mediante ley las causas de separación y disolución matrimonial.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Es obligatorio cumplir las sentencias de los jueces y tribunales.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Se puede ser condenado o sancionado por acciones u omisiones que en el momento de producirse no constituían delito.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Es obligatorio colaborar en un juicio, cuando así lo piden los jueces y tribunales.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Las penas de cárcel y las medidas de seguridad están orientadas en España hacia la reeducación y reinserción social.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Todos los españoles mayores de edad pueden ser elegidos para algún cargo público.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los ciudadanos tienen el derecho a participar en los asuntos públicos, directamente o por medio de representantes, libremente elegidos en las elecciones.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'En España no está reconocido el derecho de asociación.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'En caso de huelga, la ley no garantiza el mantenimiento de los servicios esenciales de la comunidad.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los trabajadores tienen derecho a la huelga para defender sus intereses laborales.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Todos deben contribuir al sostenimiento de los gastos públicos de acuerdo con su capacidad económica.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los poderes públicos deben mantener un régimen público de Seguridad Social para todos los ciudadanos.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Todos tienen derecho a disfrutar de un medio ambiente adecuado para el desarrollo de la persona, así como el deber de conservarlo.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los poderes públicos pueden promover la participación de la juventud en el desarrollo político, social, económico y cultural, si así lo desean.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los poderes públicos garantizarán la defensa de los consumidores y usuarios, protegiendo la seguridad, la salud y los intereses económicos de los mismos.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los poderes públicos pueden planificar y ejecutar los recursos públicos con total libertad y sin ningún tipo de criterio de gestión.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Los españoles pueden plantear reclamaciones ante instituciones europeas.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'Los españoles tienen la obligación de declarar los bienes que posean en el extranjero por un valor inferior a 50.000 euros.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
                    }
                ]
            },
            {
                question: 'Todos los españoles tienen el derecho y el deber de defender España.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: false
                    }
                ]
            },
            {
                question: 'En caso de grave riesgo o catástrofe pública los ciudadanos españoles pueden ayudar si quieren.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Verdadero',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Falso',
                        correct: true
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
