import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    directives: [ ROUTER_DIRECTIVES ],
    template: `
    <div>
        <h1>Hello, Angular 2!</h1>
        <router-outlet></router-outlet>
    </div>
    `
})
export class MyAppComponent {
}
