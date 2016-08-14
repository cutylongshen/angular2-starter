import { Directive, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

declare var process: any;

@Directive({
    selector: '.alert'
})
export class MyAlert {
    constructor(){
    }
}

@Directive({
    selector: '.alert-success',
    host: {
        '(click)': 'onClick($event)'
    }
})
export class MyAlertSuccess {
    constructor(){
        console.info("alter success loaded.");
    }

    onClick(event){
        console.log(`alert clicked.`);
        console.log(event );
    }
}
