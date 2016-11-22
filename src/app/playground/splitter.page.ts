import { Component } from '@angular/core';
import { state, trigger, animate, style, transition } from '@angular/core';

@Component({
    selector: 'xxx',
    template: `
    <div>
        <splitter myHighlight></splitter>
    </div>
    `
})
export class SplitterPage {

    constructor(){
        console.log('enter')
    }
}
