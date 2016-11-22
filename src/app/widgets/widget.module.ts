import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { HighlightDirective  } from '../directives/highlight.directive';
import { MyDraggableDirective } from '../myDirectives/draggable.directive';
import { SplitterWidget } from './splitter.widget';
import { SliderWidget } from './slider.widget';
import { SliderTicksWidget } from './slider-ticks.widget';

@NgModule({
    imports: [ CommonModule, InputsModule ],
    declarations: [ SplitterWidget, HighlightDirective, MyDraggableDirective, SliderWidget, SliderTicksWidget ],
    exports: [SplitterWidget, HighlightDirective, MyDraggableDirective, SliderTicksWidget, SliderWidget ]
})
export class widgetModule{

}