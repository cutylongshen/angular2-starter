import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { AsideLeftComponent } from './layout/aside.left.component';

@Component({
    selector: 'my-app',
    directives: [ ROUTER_DIRECTIVES, HeaderComponent, FooterComponent, AsideLeftComponent],
    template: `
    <app-header></app-header>
    <div class="main">
        <app-aside-left></app-aside-left>
        <main>
            <router-outlet></router-outlet>
        </main>
    </div>
    <app-footer></app-footer>
    `
})
export class MyAppComponent {
}
