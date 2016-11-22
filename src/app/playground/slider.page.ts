import { Component } from '@angular/core';
import { state, trigger, animate, style, transition } from '@angular/core';
import { SliderOptions } from '../widgets/slider.model';

@Component({
    selector: 'mySlider',
    template: `
    <div style="margin: 10px;">
        <slider [options]="options"></slider>
    </div>
    `
})
export class SliderPage {
    private options: SliderOptions;

    constructor() {
        this.options = new SliderOptions();
        this.options.max = 100;
        this.options.smallStep = 5;
        this.options.value = 70;
        this.options.fixedTickWidth = 10;
    }
}
