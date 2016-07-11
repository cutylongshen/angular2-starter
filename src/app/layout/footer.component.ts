import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'app-footer',
    directives: [ ROUTER_DIRECTIVES ],
    template: `
    <footer>
        <ul>
            <li><a href="#">&copy;&nbsp;Copy Right</a></li>
        </ul>
    </footer>
    `
})
export class FooterComponent {
}
