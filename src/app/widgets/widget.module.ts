import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { KendoDraggableDirective } from '@progress/kendo-angular-inputs';

import { HighlightDirective  } from '../directives/highlight.directive';

import { SplitterWidget } from './splitter.widget';

console.log( KendoDraggableDirective );

@NgModule({
    imports: [ CommonModule, InputsModule ],
    declarations: [ SplitterWidget, KendoDraggableDirective, HighlightDirective ],
    exports: [ SplitterWidget ]
})
export class widgetModule{

}