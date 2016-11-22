import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AnimationModule } from './animation/animation.module';
import { ContactModule } from './contact/contact.module';
import { ObservableModule } from './observable/observable.module';
import { SubjectModule } from './subject/subject.module';

import { routing } from './app-routes';
import { AppComponent } from './app.component';
import { MainFrameComponent } from './main-frame.component';
import { HeaderComponent } from './layout/header.component';
import { AsideLeftComponent } from './layout/aside.left.component';
import { FooterComponent } from './layout/footer.component';
import { HomePage } from './home.page';
import { MyAlert, MyAlertSuccess } from './myDirectives/myAlerts';

import { widgetModule  } from './widgets/widget.module';
import { PlayGroundModule } from './playground/playground.module';

import { SplitterPage } from './playground/splitter.page';

@NgModule({
    imports: [ BrowserModule, routing, AnimationModule, ContactModule, ObservableModule, SubjectModule, PlayGroundModule ],
    declarations: [ MainFrameComponent, HeaderComponent, AsideLeftComponent, FooterComponent, AppComponent, HomePage, MyAlert, MyAlertSuccess, SplitterPage ],
    bootstrap: [ AppComponent ]
})
export class AppModule{
}