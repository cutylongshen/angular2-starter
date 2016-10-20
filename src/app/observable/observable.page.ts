import { Component } from '@angular/core';
import { Observable, Subscriber } from "rxjs";

@Component({
    selector: 'my-app',
    template: `
    <div>
        <h1>Observable</h1>
        <button (click)="triggerClick()">Trigger Observable next</button>
    </div>
    `
})
export class ObservablePage {
    
    _observable : Observable<any>;
    _observer: Subscriber<any>;

    constructor(){

        // because observer will working async.
        // so we need save this reference
        let that = this;

        this._observable = Observable.create( function(observer) {
            
            // save observer reference
            that._observer = observer;
        });

        // subscribe this 
        this._observable.subscribe({
            next: (v) => {
                console.log( v );
            }
        })

    }

    triggerClick() {
        console.log('button clicked.');

        let t = new Date().getTime();
        this._observer.next( t );
        
    }

}
