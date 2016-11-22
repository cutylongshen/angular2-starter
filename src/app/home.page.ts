import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div>
       <h1 myDraggable (kendo.press)="pressHandler()"
            (kendo.drag)="dragHandler()"
            (kendo.release) = "releaseHandler()"
        >Hello, Angular 2! </h1>
       <h2 myDraggable  (kendo.press)="pressHandler($event)"
            (kendo.drag)="dragHandler($event)"
            (kendo.release) = "releaseHandler($event)">kendo draggable</h2>
    </div>
    `
})
export class HomePage {
    public pressHandler(){
        console.log('...............press handler...........');
    }
    public dragHandler(e: any){
        console.log("drag", e.pageX, e.pageY);
    }
    public releaseHandler(){
        console.log('...............release handler...........');
    }
}
