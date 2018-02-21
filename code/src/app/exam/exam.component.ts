import { Component, OnInit, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'exam-cmp',
    moduleId: module.id,
    templateUrl: 'exam.component.html'
})

export class ExamComponent implements OnInit{
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
                question: "La forma política del Estado español es la...",
                options: [
                    {
                        id: "btn-1",
                        answer: "monarquía parlamentaria",
                        correct: true
                    },
                    {
                        id: "btn-2",
                        answer: "república federal",
                        correct: false
                    },
                    {
                        id: "btn-3",
                        answer: "monarquía federal",
                        correct: false
                    }
                ]
            },
            {
                question: "Según la Constitución española, la soberanía nacional reside en el pueblo, del que proceden...",
                options: [
                    {
                        id: "btn-1",
                        answer: "las leyes orgánicas del Estado",
                        correct: false
                    },
                    {
                        id: "btn-2",
                        answer: "los estatutos de autonomía",
                        correct: false
                    },
                    {
                        id: "btn-3",
                        answer: "los poderes del Estado",
                        correct: true
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
