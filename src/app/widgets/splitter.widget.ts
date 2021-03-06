import { Component } from '@angular/core';
import { DraggableOptions } from '@telerik/kendo-draggable';

@Component({
    selector: 'splitter',
    template: `
    <div>
        <h3>Splitter Widget</h3>
        <div style="width: 600px; height: 400px; border: 1px green solid">
            <div style="float: left; width: 200px; height: 400px; border: 1px red solid"></div>
            <div myDraggable (kendo.press)="press($event)"
                             (kendo.drag)="drag($event)"
                             (kendo.release) = "release($event)"
                style="float: left; width: 10px; height: 400px; border: 1px green solid"></div>
            <div>
                <h2 myHighlight>Right</h2>
            </div>
        <div>
    </div>
    `
})
export class SplitterWidget {

    private draggableOptions: DraggableOptions;

    constructor() {
        console.log('enter splitter.');
    }

    click(){
        console.log('splitter - click.');
    }

    press() {
        console.log('splitter - press.');
    }

    drag() {
        console.log('splitter - drag.');
    }

    release() {
        console.log('splitter - release.');
    }

}
