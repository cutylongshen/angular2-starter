import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { HighlightDirective  } from '../directives/highlight.directive';

import { SplitterWidget } from './splitter.widget';

@NgModule({
    imports: [ CommonModule, InputsModule ],
    declarations: [ SplitterWidget, HighlightDirective ],
    exports: [SplitterWidget, HighlightDirective ]
})
export class widgetModule{

}