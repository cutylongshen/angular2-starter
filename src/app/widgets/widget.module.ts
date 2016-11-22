import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { HighlightDirective  } from '../directives/highlight.directive';
import { MyDraggableDirective } from '../myDirectives/draggable.directive';
import { SplitterWidget } from './splitter.widget';

@NgModule({
    imports: [ CommonModule, InputsModule ],
    declarations: [ SplitterWidget, HighlightDirective, MyDraggableDirective ],
    exports: [SplitterWidget, HighlightDirective, MyDraggableDirective ]
})
export class widgetModule{

}