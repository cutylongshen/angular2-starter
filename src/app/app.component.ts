import { Component, EventEmitter, Injector } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MyAlert, MyAlertSuccess } from './myDirectives/myAlerts';
import { TestService } from './test.service';

declare var process: any;

@Component({
    selector: 'my-app',
    directives: [ ROUTER_DIRECTIVES, MyAlertSuccess ],
    template: `
    <div>
        <h1>Hello, Angular 2!</h1>
        
        <div class="alert-success alert-dismissible">
            <span class="close">X</span>
            <p>message from a alert.</p>
        </div>
        <button class="alert-success">I am a alert.</button>
        <router-outlet></router-outlet>
    </div>
    `,
    providers: [ TestService ]
})
export class AppComponent {
    constructor(private i: Injector){
        let instance = i.get( TestService );
        instance.sayHello();
    }
}
