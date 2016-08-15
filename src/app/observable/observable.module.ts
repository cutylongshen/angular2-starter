import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './observable.routing';
import { ObservablePage } from './observable.page';

@NgModule({
    imports: [ CommonModule, routing ],
    declarations: [ ObservablePage ],
    exports: [ ObservablePage ]
})
export class ObservableModule{
}