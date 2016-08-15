import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './subject.routing';
import { SubjectPage } from './subject.page';

@NgModule({
    imports: [ CommonModule, routing ],
    declarations: [ SubjectPage ],
    exports: [ SubjectPage ]
})
export class SubjectModule{
}