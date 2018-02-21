import { Component, OnInit, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'tarea3-cmp',
    moduleId: module.id,
    templateUrl: 'tarea3.component.html'
})

export class Tarea3Component implements OnInit{
    private questions: any[];
    private currentQuestion;
    private nativeElement: Node;
    private okButton;
    private nextButton;
    private currentIndex;
    
    constructor(private renderer : Renderer, private element : ElementRef) {
        this.nativeElement = element.nativeElement;
    }
    
    ngOnInit(){
        var q : HTMLElement = this.element.nativeElement;
        this.okButton = q.getElementsByClassName('btn-ok')[0];
        this.nextButton = q.getElementsByClassName('btn-next')[0];
        
        this.questions = [
            {
                question: '¿De qué comunidad autónoma forman parte Castellón, Valencia y Alicante?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Principado de Asturias.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Andalucía.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Comunidad Valenciana.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La capital de la comunidad autónoma de Cantabria es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Oviedo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Palma de Mallorca.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Santander.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿A qué grupo de islas pertenecen Mallorca, Menorca e Ibiza?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Islas Canarias.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Islas Baleares.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Islas Cíes.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿En qué comunidad autónoma se encuentra la ciudad de Pamplona?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Comunidad de Aragón.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Comunidad de Madrid.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Comunidad Foral de Navarra.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿Cuál de estas provincias no está en la comunidad autónoma de Galicia?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'A Coruña.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Cáceres.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Pontevedra.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuántas comunidades autónomas hay en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '7.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '17.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: '27.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿De qué comunidad autónoma es capital Sevilla?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Andalucía.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Extremadura.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Galicia.',
                        correct: false
                    }
                ]
            },
            {
                question: 'Barcelona es la capital de la comunidad autónoma de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Comunidad Valenciana.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Cataluña.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Cantabria.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La capital de la comunidad autónoma de Extremadura es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Badajoz.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Cáceres.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Mérida.',
                        correct: true
                    }
                ]
            },
            {
                question: 'Las instituciones de la comunidad autónoma de... tienen su sede en Valladolid.',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Canarias',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Castilla y León',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Castilla-La Mancha',
                        correct: false
                    }
                ]
            },
            {
                question: 'Huesca, Teruel y Zaragoza forman parte de la comunidad autónoma de...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Cataluña.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'País Vasco.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Aragón.',
                        correct: true
                    }
                ]
            },
            {
                question: '¿En qué comunidad autónoma se encuentra la ciudad de Logroño?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'La Rioja.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Castilla y León.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'País Vasco.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuál es la sede de las instituciones de la comunidad autónoma del País Vasco?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Bilbao.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Vitoria-Gasteiz.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'San Sebastián.',
                        correct: false
                    }
                ]
            },
            {
                question: 'La sede de las instituciones/capital de Castilla-La Mancha está en...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Ciudad Real.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Toledo.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Guadalajara.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En la costa norte de África se encuentran las ciudades autónomas de Ceuta y...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Almería.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Melilla.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Cádiz.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En el estrecho de Gibraltar se unen el océano Atlántico y el mar...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Cantábrico.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Menor.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Mediterráneo.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El Principado de Asturias limita al norte con...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el océano Atlántico.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'el mar Mediterráneo.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el mar Cantábrico.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La Región de Murcia limita al este con...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'el mar Mediterráneo.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'el océano Atlántico.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'el mar Cantábrico.',
                        correct: false
                    }
                ]
            },
            {
                question: 'En el centro de la península ibérica, los inviernos son fríos, los veranos calurosos y llueve poco. Este clima es...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'continental.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'oceánico.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'subtropical.',
                        correct: false
                    }
                ]
            },
            {
                question: 'El clima de Canarias se denomina...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'mediterráneo.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'oceánico.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'subtropical.',
                        correct: true
                    }
                ]
            },
            {
                question: 'El principal río que desemboca en el mar Mediterráneo es el...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Ebro.',
                        correct: true
                    },
                    {
                        id: 'btn-2',
                        answer: 'Duero.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: 'Tajo.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Cuántos parques nacionales hay en España?',
                options: [
                    {
                        id: 'btn-1',
                        answer: '10.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: '12.',
                        correct: false
                    },
                    {
                        id: 'btn-3',
                        answer: ') 15.',
                        correct: true
                    }
                ]
            },
            {
                question: 'La extensa llanura situada en la zona central de España se denomina...',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'península.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'meseta.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'sierra.',
                        correct: false
                    }
                ]
            },
            {
                question: '¿Qué sistema montañoso separa España de Francia?',
                options: [
                    {
                        id: 'btn-1',
                        answer: 'Picos de Europa.',
                        correct: false
                    },
                    {
                        id: 'btn-2',
                        answer: 'Pirineos.',
                        correct: true
                    },
                    {
                        id: 'btn-3',
                        answer: 'Sierra de Gredos.',
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
                    console.log("in 2");
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
