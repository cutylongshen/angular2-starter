import { Component, EventEmitter, Injector } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    directives: [ ROUTER_DIRECTIVES ],
    template: `
    <div>
        <router-outlet></router-outlet>
    </div>
    `,
    providers: [ ]
})
export class MainFrameComponent {
    constructor(private i: Injector){
        console.log("main frame loaded.");
    }
}
