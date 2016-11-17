import { Component } from '@angular/core';
import { state, trigger, animate, style, transition } from '@angular/core';

// <h1 @myAnimation="isOpen?'open':'closed' ">Hello, Angular 2 Animation!</h1> 

@Component({
    selector: 'my-app',
    template: `
    <div>
        <h1 [@myAnimation]="isOpen?'open':'closed' ">Hello, Angular 2 Animation!</h1>
        <button (click)="toggle()">Show/Hide</button>
    </div>
    `,
    animations: [
        trigger('myAnimation', [
            state('open', style( { opacity: 1})),
            state('closed', style({ opacity: 0 })),
            transition('open => closed', animate(500)),
            transition('closed => open', animate('0.5s'))
        ])
    ]
})
export class AnimationPage {

    isOpen: boolean = true;

    constructor(){
        console.log('enter')
    }

    toggle(){
        this.isOpen = !this.isOpen;
        console.log( this.isOpen );
    }

}
