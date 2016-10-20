import { Component, EventEmitter, Injector } from '@angular/core';

import { HeaderComponent } from './layout/header.component';

@Component({
    selector: 'my-app',
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
