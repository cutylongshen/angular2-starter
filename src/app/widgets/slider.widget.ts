import { Component, ElementRef, OnChanges, AfterViewInit, EventEmitter, OnDestroy, ViewChild, Input, Output, HostBinding, HostListener } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import SliderUtil from './slider.util';
import { SliderModel, SliderOptions } from './slider.model';
import { SliderTicksWidget } from './slider-ticks.widget';

@Component({
    selector: 'slider',
    template: `
<div class="k-slider-wrap k-slider-buttons">
    <a *ngIf="options.showButtons" #decreaseButton 
        class="k-button k-button-decrease" 
        [title]="options.decrementTitle" 
        [attr.aria-label]="options.decrementTitle" >
        <span [class.k-icon]="true" 
              [class.k-i-arrow-w]="!options.vertical" 
              [class.k-i-arrow-s]="options.vertical" >
        </span>
    </a>
    <a *ngIf="options.showButtons" #increaseButton 
        class="k-button k-button-increase" 
        [title]="options.incrementTitle" 
        [attr.aria-label]="options.incrementTitle" >
        <span [class.k-icon]="true" 
              [class.k-i-arrow-e]="!options.vertical" 
              [class.k-i-arrow-n]="options.vertical" >
        </span>
    </a>
    <slider-ticks #sliderTicks 
                *ngIf="options.tickPlacement !== 'none'" 
                [vertical]="options.vertical" 
                [ticksCount]="options.ticksCount" 
                [step]="options.smallStep" 
                (tickClick)="ifEnabled(onTickClick, $event)" >
    </slider-ticks>
    
    <div #track class="k-slider-track" (click)="ifEnabled(onTrackClick, $event)">
        <div #sliderSelection [class.k-slider-selection]="true" [class.k-pressed]="options.dragging"></div>
        <a #draghandle [class.k-draghandle]="true" [class.k-pressed]="options.dragging" [title]="options.dragHandleTitle" myDraggable 
            (kendo.drag)="ifEnabled(onHandleDrag ,$event)"
            (kendo.release)="ifEnabled(onHandleRelease, $event)" >Drag
        </a>
    </div>
</div>`
})

export class SliderWidget implements OnChanges, AfterViewInit, ControlValueAccessor, OnDestroy {
    @ViewChild("decreaseButton") decreaseButton: ElementRef;
    @ViewChild("increaseButton") increaseButton: ElementRef;
    @ViewChild("track") track: ElementRef;
    @ViewChild("sliderSelection") sliderSelection: ElementRef;
    @ViewChild("draghandle") draghandle: ElementRef;
    @ViewChild("sliderTicks") sliderTicks: SliderTicksWidget;
    @Input() options: SliderOptions;
    @Output() valueChange: EventEmitter<any>;

    @HostBinding('class.k-slider-horizontal') 
    get horizontalClass(): boolean {
        return !this.options.vertical;
    }
    @HostBinding('class.k-slider-vertical') 
    get verticalClass(): boolean {
        return this.options.vertical;
    };
    @HostBinding('class.k-slider') sliderClass: boolean = true;
    @HostBinding('class.k-widget') widgetClass: boolean = true;
    @HostBinding('class.k-state-default') stateDefaultClass: boolean = true;
    @HostBinding('class.k-slider-topleft') 
    get topLeftClass(): boolean {
        return this.options.tickPlacement === 'before';
    };
    @HostBinding('class.k-slider-bottomright') 
    get bottomRightClass(): boolean {
        return this.options.tickPlacement === 'after';
    }
    @HostBinding('class.k-state-disabled') 
    get disabledClass(): boolean {
        return this.options.disabled;
    }
    @HostBinding('tabIndex') 
    get tabIndex(): number {
        return this.options.disabled ? undefined : 0;
    }
    @HostBinding('attr.aria-disabled') 
    get ariaDisabled(): boolean {
        return this.options.disabled ? true : undefined
    };
    @HostBinding('attr.aria-valuemin') 
    get ariaMin(): number {
        return this.options.min;
    }
    @HostBinding('attr.aria-valuemax') 
    get ariaMax(): number {
        return this.options.max;
    }
    @HostBinding('attr.aria-valuenow') 
    get ariaValue(): number {
        return this.options.value ? this.options.value : this.options.min;
    }

    @HostListener('click')
    @HostListener('focus')
    active(): void {
        this.draghandle.nativeElement.focus();
    }

    @HostListener('keydown', ['$event'])
    keydown(event: any): void {
        this.onKeyDown(event);
    };

    @HostListener('blur')
    blur(): void {
        this.ngTouched();
    }

    private wrapper: any;
    private decreaseButtonSubscription: Subscription;
    private increaseButtonSubscription: Subscription;
    private keyBinding: any;
    private ngChange: any;
    private ngTouched: any;
    private decreaseValue: any;
    private increaseValue: any;

    constructor(private el: ElementRef) {
        let _this = this;
        this.valueChange = new EventEmitter();
        this.decreaseButtonSubscription = Subscription.EMPTY;
        this.increaseButtonSubscription = Subscription.EMPTY;
        this.keyBinding = this.bindKey();

        this.ifEnabled = function (callback, event) {
            if (!_this.options.disabled) {
                callback.call(_this, event);
            }
        };

        this.ngChange = function (value: any) { };

        this.ngTouched = function () { };

        this.decreaseValue = function () {
            _this.changeValue(SliderUtil.decreaseValueToStep(_this.getProps()));
        };
        this.increaseValue = function () {
            _this.changeValue(SliderUtil.increaseValueToStep(_this.getProps()));
        };
     
    }


    ngOnChanges(changes: any): void {
        this.options.ticksCount = SliderUtil.calculateTicksCount(this.options.max, this.options.min, this.options.smallStep);
    }

    ngAfterViewInit(): void {
        var _this = this;
        this.wrapper = this.el.nativeElement;
        if (!this.isDocumentAvailable()) {
            return;
        }
        if (this.options.showButtons) {
            this.decreaseButtonSubscription = this.setValueChangeInterval(this.decreaseButton.nativeElement, function () { return _this.decreaseValue(); });
            this.increaseButtonSubscription = this.setValueChangeInterval(this.increaseButton.nativeElement, function () { return _this.increaseValue(); });
        }
        this.sizeComponent(false);
        if (this.sliderTicks) {
            this.sliderTicks.tickElements
                .changes
                .subscribe(function () { return _this.sizeComponent(false); });
        }
    }

    ngOnDestroy(): void {
        this.decreaseButtonSubscription.unsubscribe();
        this.increaseButtonSubscription.unsubscribe();
    }

    onTrackClick(event: Event): void {
        var trackClientRect = this.track.nativeElement.getBoundingClientRect();
        this.changeValue(SliderUtil.calculateValueFromTrack(trackClientRect, event, this.getProps()));
    }

    onHandleDrag(event: Event): void {
        this.options.dragging = true;
        var element = this.track.nativeElement.getBoundingClientRect();
        this.changeValue(SliderUtil.calculateValueFromTrack(element, event, this.getProps()));
    };

    onHandleRelease(): void {
        this.options.dragging = false; //needed for animation
    }


    ifEnabled(callback: any, event: any) {
        if (!this.options.disabled) {
            callback.call(this, event);
        }
    }

    onKeyDown(event: KeyboardEvent): void {
        var props = this.getProps();
        var disabled = props.disabled, max = props.max, min = props.min;
        var handler = this.keyBinding[event.keyCode];
        if (handler && !disabled) {
            var value = handler(props);
            this.changeValue(SliderUtil.trimValue(max, min, value));
        }
    }

    writeValue(value: number): void {
        this.changeValue(value);
    }

    registerOnChange(fn: () => any): void {
        this.ngChange = fn;
    }

    registerOnTouched(fn: () => any): void {
        this.ngTouched = fn;
    }

    changeValue(value: number): void {
        this.options.value = value;
        this.ngChange(value);
        this.valueChange.emit(value);
        if (this.isDocumentAvailable()) {
            this.sizeComponent(true);
        }
    }

    protected onTickClick(event: Event): void {
        var sliderTicks = this.sliderTicks.tickElements.map(function (element: any) { return element.nativeElement; });
        var index = sliderTicks.indexOf(event.target);
        this.changeValue(SliderUtil.calculateValueFromTick(index, this.getProps()));
    }

    protected onIncrement(): void {
        this.increaseValue();
    }
    protected onDecrement(): void {
        this.decreaseValue();
    }
    protected isDocumentAvailable(): boolean {
        return typeof document !== 'undefined';
    }

    private setValueChangeInterval(element: any, callback: Function) {
        var _this = this;
        var mousedown = Observable.fromEvent(element, 'mousedown');
        var mouseup = Observable.fromEvent(element, 'mouseup');
        var mouseout = Observable.fromEvent(element, 'mouseout');

        var subscription = mousedown
            .filter(function (e: MouseEvent) { return e.button === 0; })
            .filter(function () { return !_this.options.disabled; })
            .concatMap(function (e) {
                return Observable.interval(150)
                    .startWith(-1)
                    .takeUntil(Observable.merge(mouseup, mouseout));
            })
            .subscribe(function () { return callback(); });
        return subscription;
    }

    private sizeComponent(animate: any) {
        var wrapper = this.wrapper.children[0];
        var props = this.getProps();
        var model = new SliderModel(props, wrapper, this.track.nativeElement);
        model.resizeTrack();

        if (this.sliderTicks) {
            model.resizeTicks(this.sliderTicks.container.nativeElement,
                this.sliderTicks.tickElements.map(function (element: any) {
                    return element.nativeElement;
                }));
        }
        this.handleAnimation(animate); //first time the widget is initialized the selection should not be animated
        model.positionHandle(this.draghandle.nativeElement);
        model.positionSelection(this.draghandle.nativeElement, this.sliderSelection.nativeElement);
        if (this.options.fixedTickWidth) {
            model.resizeWrapper();
        }
    }
    private handleAnimation(animate: any) {
        var transition = '';
        if (!animate) {
            transition = 'none';
        }
        this.draghandle.nativeElement.style.transition = transition;
        this.sliderSelection.nativeElement.style.transition = transition;
    }
    
    private getProps() {
        return {
            disabled: this.options.disabled,
            fixedTickWidth: this.options.fixedTickWidth,
            max: this.options.max,
            min: this.options.min,
            smallStep: this.options.smallStep,
            value: SliderUtil.trimValue(this.options.max, this.options.min, this.options.value),
            vertical: this.options.vertical
        };
    }

    private bindKey(): any {
        let keyBinding: any = {};
        keyBinding[Keys.left] = function (keyBinding: any) {
            var value = keyBinding.value, smallStep = keyBinding.smallStep;
            return value - smallStep;
        },
            keyBinding[Keys.right] = function (keyBinding: any) {
                var value = keyBinding.value, smallStep = keyBinding.smallStep;
                return value + smallStep;
            },
            keyBinding[Keys.down] = function (keyBinding: any) {
                var value = keyBinding.value, smallStep = keyBinding.smallStep;
                return value - smallStep;
            },
            keyBinding[Keys.up] = function (keyBinding: any) {
                var value = keyBinding.value, smallStep = keyBinding.smallStep;
                return value + smallStep;
            },
            keyBinding[Keys.home] = function (keyBinding: any) {
                var min = keyBinding.min;
                return min;
            },
            keyBinding[Keys.end] = function (keyBinding_a: any) {
                var max = keyBinding.max;
                return max;
            }
        return keyBinding;
    }
}


export type TickPlacement = 'before' | 'after' | 'both' | 'none';

export enum Keys {
    'backspace' = 8,
    'tab' = 9,
    'enter' = 13,
    'shift' = 16,
    'ctrl' = 17,
    'alt' = 18,
    'space' = 32,
    'page up' = 33,
    'page down' = 34,
    'end' = 35,
    'home' = 36,
    'left' = 37,
    'up' = 38,
    'right' = 39,
    'down' = 40,
}

