import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app-routes';
import { AppComponent } from './app.component';
import { MainFrameComponent } from './main-frame.component';
import { MyAlert, MyAlertSuccess } from './myDirectives/myAlerts';

@NgModule({
    imports: [ BrowserModule, routing ],
    declarations: [ MainFrameComponent, AppComponent, MyAlert, MyAlertSuccess ],
    bootstrap: [ AppComponent ]
})
export class AppModule{
}