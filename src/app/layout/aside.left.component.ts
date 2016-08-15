import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'app-aside-left',
    directives: [ ROUTER_DIRECTIVES ],
    template: `
    <aside class="left-sidebar">
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>

            </ul>
    </aside>
    `
})
export class AsideLeftComponent {
}
