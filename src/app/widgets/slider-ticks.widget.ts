import { Component, Input, ViewChild, ViewChildren } from '@angular/core';
import { OnChanges, EventEmitter, QueryList, ElementRef } from '@angular/core';

class SliderTick {
    public first: any;
    public last: any;
    constructor(first: any, last: any){
        this.first = first;
        this.last = last;
    }
}

@Component({
    selector: 'slider-ticks',
    template: `
<ul #container class="k-reset k-slider-items">
    <li #tickElement *ngFor="let tick of ticks let idx=index " [ngClass]="tickClasses(tick)"
        title="{{createTitle(idx, step)}}"
        (click)="onClick($event)"
        role="presentation" >&nbsp;</li>
</ul>  
`
})
export class SliderTicksWidget implements OnChanges {
    @Input() vertical: boolean;
    @Input() ticksCount: number;;
    @Input() step: number;
    @Input() title: string;
    @Input() tickClick: EventEmitter<any>;
    @Input() ticks: Array<any> = [];
    @ViewChild("container") container: ElementRef;
    @ViewChildren("tickElement") tickElements: QueryList<ElementRef>;

    
    constructor() {
        this.tickClick = new EventEmitter();
        this.ticks = [];
    }
    
    ngOnChanges(changes: any): void {
        this.createTicks();
    }

    onClick(event: Event): void {
        this.tickClick.next(event);
    }

    tickClasses(tick: any): Object {
        return {
            'k-tick': true,
            'k-first': (tick.first && !this.vertical) || (tick.last && this.vertical),
            'k-last': (tick.last && !this.vertical) || (tick.first && this.vertical)
        };
    }

    private createTicks() {
        var result: Array<any> = [];
        for (var i = 0; i < this.ticksCount; i++) {
            var first = i === 0;
            var last = i === this.ticksCount - 1;
            var tick = new SliderTick(first, last);
            result.push(tick);
        }
        this.ticks = result;
    }

    private createTitle(idx: number, step: number): number {
        return (idx + 1) * step;
    }
}

