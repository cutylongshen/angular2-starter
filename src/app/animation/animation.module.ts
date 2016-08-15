import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './animation.routing';
import { AnimationPage } from './animation.page';

@NgModule({
    imports: [ CommonModule, routing ],
    declarations: [ AnimationPage ],
    exports: [ AnimationPage ]
})
export class AnimationModule{
}