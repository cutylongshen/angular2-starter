import { Component } from '@angular/core';
import { state, trigger, animate, style, transition } from '@angular/core';

@Component({
    selector: 'mySpiltter',
    template: `
    <div>
        <h1 myHighlight>Splitter</h1>
        <splitter myHighlight></splitter>
    </div>
    `
})
export class SplitterPage {

    constructor() {
        console.log('enter')
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
