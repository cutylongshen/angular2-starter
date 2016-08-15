import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Subject, Subscriber } from "rxjs";

@Component({
    selector: 'my-app',
    directives: [ ROUTER_DIRECTIVES ],
    template: `
    <div>
        <h1>Subject</h1>
        <button (click)="triggerClick()">Trigger Subject next</button>
    </div>
    `
})
export class SubjectPage {
    
    _subject: Subject<any> = new Subject<any>();

    constructor(){
        this._subject.subscribe( x=>{
            console.log( x );
        });
    }

    triggerClick() {
        console.log('button clicked.');

        let t = new Date().getTime();
        this._subject.next( t );
    }

}
