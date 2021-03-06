import { Directive, EventEmitter, ElementRef, OnDestroy } from '@angular/core';
import Draggable from '@telerik/kendo-draggable';

@Directive({
    selector: '[kendoDraggable]',
    outputs: ['kendo.press', 'kendo.drag', 'kendo.release']
})
export class KendoDraggableDirective implements OnDestroy {
    kendo: any;
    private draggable;
    constructor(ngEl: ElementRef) {
        let _this = this;
        this.kendo = {
            drag: new EventEmitter(),
            press: new EventEmitter(),
            release: new EventEmitter()
        };
        if (typeof document !== 'undefined') {
            this.draggable = new Draggable({
                drag: function (e) { return _this.kendo.drag.next(e); },
                press: function (e) { return _this.kendo.press.next(e); },
                release: function (e) { return _this.kendo.release.next(e); }
            });
            this.draggable.bindTo(ngEl.nativeElement);
        }
    }
    ngOnDestroy(): void {
        if (typeof document !== 'undefined') {
            this.draggable.destroy();
        }
    }
}
