import { Component, EventEmitter, Injector } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent } from './layout/header.component';

@Component({
    selector: 'my-app',
    directives: [ ROUTER_DIRECTIVES, HeaderComponent ],
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
