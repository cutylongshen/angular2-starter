import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { widgetModule } from '../widgets/widget.module';
import { routing } from './playground.routing';
import { SplitterPage } from './splitter.page';
import { SliderPage } from './slider.page';
import { HighlightDirective  } from '../directives/highlight.directive';
import { MyDraggableDirective } from '../myDirectives/draggable.directive';

@NgModule({
    imports: [ BrowserModule, CommonModule, routing, widgetModule, FormsModule, ReactiveFormsModule ],
    declarations: [ SplitterPage, SliderPage ],
    exports: [ SplitterPage, SliderPage ]
})
export class PlayGroundModule{
}