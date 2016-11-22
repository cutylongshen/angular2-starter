import { Directive, OnDestroy, EventEmitter, ElementRef } from '@angular/core';
import Draggable from '@telerik/kendo-draggable';

@Directive({
    selector: '[myDraggable]',
    outputs: ['kendo.press', 'kendo.drag', 'kendo.release'],
})
export class MyDraggableDirective implements OnDestroy {

    kendo: any;
    private draggable: Draggable;

    constructor(ngEl: ElementRef) {
        console.log( ngEl );
        let _this = this;
        this.kendo = {
            drag: new EventEmitter(),
            press: new EventEmitter(),
            release: new EventEmitter()
        };

        if (typeof document !== 'undefined') {
            this.draggable = new Draggable({
                drag: function (e: MouseEvent) { return _this.kendo.drag.next(e); },
                press: function (e: MouseEvent) { return _this.kendo.press.next(e); },
                release: function (e: MouseEvent) { return _this.kendo.release.next(e); }
            });
            this.draggable.bindTo(ngEl.nativeElement);
        }
    }

    ngOnDestroy() {
        if (typeof document !== 'undefined') {
            this.draggable.destroy();
        }
    }
}

