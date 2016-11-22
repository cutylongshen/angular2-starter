import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AnimationModule } from './animation/animation.module';
import { ContactModule } from './contact/contact.module';
import { ObservableModule } from './observable/observable.module';
import { SubjectModule } from './subject/subject.module';

//  outputs: ['kendo.press', 'kendo.drag', 'kendo.release'],
// 	selector: '[kendoDraggable]'

import { InputsModule, KendoDraggableDirective } from '@progress/kendo-angular-inputs';

import { routing } from './app-routes';
import { AppComponent } from './app.component';
import { MainFrameComponent } from './main-frame.component';
import { HeaderComponent } from './layout/header.component';
import { AsideLeftComponent } from './layout/aside.left.component';
import { FooterComponent } from './layout/footer.component';
import { HomePage } from './home.page';
import { MyAlert, MyAlertSuccess } from './myDirectives/myAlerts';
import { MyDraggableDirective } from './myDirectives/draggable.directive';

import { widgetModule  } from './widgets/widget.module';
import { PlayGroundModule } from './playground/playground.module';

// InputsModule import KendoDraggableDirective, but doesn't export it.
// so we need do it byself.
// if InputsModule add KendoDraggableDirective to export, we can easy use it.
@NgModule({
    imports: [ BrowserModule, routing, AnimationModule, ContactModule, ObservableModule, SubjectModule, InputsModule, PlayGroundModule, widgetModule ],
    declarations: [ MainFrameComponent, HeaderComponent, AsideLeftComponent, FooterComponent, AppComponent, HomePage,
     MyAlert, MyAlertSuccess ],
    exports: [ MyDraggableDirective ],
    bootstrap: [ AppComponent ]
})
export class AppModule{
}