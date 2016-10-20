import { Component, EventEmitter, Injector } from '@angular/core';

import { HeaderComponent } from './layout/header.component';
import { AsideLeftComponent } from './layout/aside.left.component';
import { FooterComponent } from './layout/footer.component';
import { MyAlert, MyAlertSuccess } from './myDirectives/myAlerts';
import { TestService } from './test.service';

declare var process: any;

@Component({
    selector: 'my-app',
    template: `
    <app-header></app-header>
    <div class="main">
        <app-aside-left></app-aside-left>
        <main>
            <div class="alert-success alert-dismissible">
            <span class="close">X</span>
            <p>message from a alert.</p>
        </div>
            <button class="alert-success">I am a alert.</button>
            <router-outlet></router-outlet>
        </main>
    </div>
    <app-footer></app-footer>
    `,
    providers: [ TestService ]
})
export class AppComponent {
    constructor(private i: Injector){
        let instance = i.get( TestService );
        instance.sayHello();
    }
}
