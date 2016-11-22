import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { state, trigger, animate, style, transition } from '@angular/core';
import { SliderOptions } from '../widgets/slider.model';

class Person {
    age: number;
}


@Component({
    selector: 'mySlider',
    template: `
    <h4>Only values smaller than 50 are valid</h4>
    <div style="margin: 10px;">
        <form [formGroup]="form">
            <slider formControlName="slider" ngDefaultControl [options]="options"></slider>
            <br/>
            The number is : {{options.value}}
            <br/>
            The form is valid: {{form.controls.slider.valid}}
        </form>
    </div>
    `
})
export class SliderPage {
    private person: Person;
    private options: SliderOptions;
    private form: FormGroup;

    constructor() {
        this.options = new SliderOptions();
        this.person = new Person();
        this.options.max = 100;
        this.options.smallStep = 5;
        this.options.value = 70;
        this.options.fixedTickWidth = 10;

        this.form = new FormGroup({
            slider: new FormControl(50, SliderValidator(50))
        });
    }
}

const SliderValidator = function (minValid) {   
    return function (control) {
        return control.value < minValid ? null : {
            valid: false
        }
    }
} 