import { Component, ElementRef } from '@angular/core';
import { Subject, Subscriber } from "rxjs";
import Draggable from '@telerik/kendo-draggable';

@Component({
    selector: 'my-app',
    template: `
    <div>
        <h1>Subject</h1>
        <button (click)="triggerClick()">Trigger Subject next</button>
         <h2 kendoDraggable  (kendo.press)="pressHandler($event)"
            (kendo.drag)="dragHandler($event)"
            (kendo.release) = "releaseHandler($event)">kendo draggable</h2>
    
    </div>
    `
})
export class SubjectPage {

    _subject: Subject<any> = new Subject<any>();

    constructor(ref: ElementRef) {

        const draggable = new Draggable({
            press: function (e) {
                console.log("pressed", e.pageX, e.pageY);
            },
            drag: function (e) {
                console.log("drag", e.pageX, e.pageY);
            },
            release: function (e) {
                console.log("release", e.pageX, e.pageY);
            }
        });

        draggable.bindTo(ref.nativeElement);

        this._subject.subscribe(x => {
            console.log(x);
        });
    }

    triggerClick() {
        console.log('button clicked.');

        let t = new Date().getTime();
        this._subject.next(t);
    }

    public pressHandler() {
        console.log('...............press handler...........');
    }
    public dragHandler(e: any) {
        console.log("drag", e.pageX, e.pageY);
    }
    public releaseHandler() {
        console.log('...............release handler...........');
    }
}
