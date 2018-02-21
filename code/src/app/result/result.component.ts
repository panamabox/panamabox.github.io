import { Component, OnInit, Renderer, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'result-cmp',
    moduleId: module.id,
    templateUrl: 'result.component.html'
})

export class ResultComponent implements OnInit{
    private result;
    private questions;
    private sub: any;
    private nativeElement: Node;
    
    constructor(private route: ActivatedRoute, private renderer : Renderer, private element : ElementRef) {
        this.nativeElement = element.nativeElement;
    }
    
    ngOnInit(){
        this.sub = this.route.queryParams.subscribe(params => {
            this.result = params['result'];
            this.questions = params['questions'];
            
            var q : HTMLElement = this.element.nativeElement;
            var element = q.getElementsByClassName('result-icon')[0];
            
            if(this.result >= 15) {
                element.classList.remove('ti-face-sad');
                element.classList.add('ti-face-smile');
            } else {
                element.classList.remove('ti-face-smile');
                element.classList.add('ti-face-sad');
            }
        });
    }
}
