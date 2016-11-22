import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { widgetModule } from '../widgets/widget.module';
import { routing } from './playground.routing';
import { SplitterPage } from './splitter.page';
import { HighlightDirective  } from '../directives/highlight.directive';
import { MyDraggableDirective } from '../myDirectives/draggable.directive';

@NgModule({
    imports: [ CommonModule, routing, widgetModule ],
    declarations: [ SplitterPage ],
    exports: [ SplitterPage ]
})
export class PlayGroundModule{
}