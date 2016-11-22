import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitterWidget } from '../widgets/splitter.widget';
import { routing } from './playground.routing';
import { SplitterPage } from './splitter.page';

import { HighlightDirective  } from '../directives/highlight.directive';

@NgModule({
    imports: [ CommonModule, routing ],
    declarations: [ SplitterWidget, HighlightDirective ],
    exports: [ SplitterWidget ]
})
export class PlayGroundModule{
}