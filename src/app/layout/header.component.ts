import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <header class="navbar navbar-fixed-top">
        <a class="navbar-brand" href="#">
            <div class="logo"></div>
        </a>
        <ul class="pull-md-left">
            <li><a class="nav-link nav-item" [routerLink]="['/']"> Home</a></li>
            <li><a class="nav-link nav-item" [routerLink]="['/animation']">Animation</a></li>
            <li><a class="nav-link nav-item" [routerLink]="['/observable']">Observalbe</a></li>
            <li><a class="nav-link nav-item" [routerLink]="['/subject']">Subject</a></li>
            <li><a class="nav-link nav-item" href="#">Help</a></li>
        </ul>
        <ul class="pull-md-right">
            <li>Login</li>
        </ul>
    </header>
    `
})
export class HeaderComponent {
}
