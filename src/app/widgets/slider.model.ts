import SliderUtil from './slider.util';

export class SliderModel {

    private props: any;
    private wrapper: any;
    private track: any;
    private tickSizes: any;
    private handlePosition: any;

    constructor(props: any, wrapper: any, track: any) {
        this.props = props;
        this.wrapper = wrapper;
        this.track = track;
        this.tickSizes = this.getTickSizes();
    }

    getTickSizes() {
        var _props = this.props;
        var max = _props.max;
        var min = _props.min;
        var smallStep = _props.smallStep;
        var trackWidth = this.trackWidth();
        return SliderUtil.calculateTickSizes(trackWidth, min, max, smallStep);
    }

    trackWidth() {
        if (this.props.fixedTickWidth) {
            return SliderUtil.calculateFixedTrackSize(this.props);
        }
        return SliderUtil.calculateTrackSize(this.elementSize(this.wrapper), this.elementOffset(this.track));
    }

    resizeTrack() {
        var orientation = this.props.vertical ? 'height' : 'width';
        var trackWidth = this.trackWidth();
        this.track.style[orientation] = trackWidth + 'px';
    }

    resizeTicks(ticksContainer: any, ticks: any) {
        var dimension = this.props.vertical ? "height" : "width";
        var tickSizes = this.tickSizes;

        Array.prototype.slice.call(ticks).map(function (tick: any, index: number) {
            return tick.style[dimension] = tickSizes[index] + 'px';
        });

        if (this.props.vertical) {
            this.adjustPadding(ticksContainer);
        }
    }

    resizeWrapper() {
        var dimension = this.props.vertical ? "height" : "width";
        var wrapperSize = this.elementSize(this.wrapper);
        var trackWidth = SliderUtil.calculateTrackSize(wrapperSize, this.elementOffset(this.track));
        var fixedTrackWidth = SliderUtil.calculateFixedTrackSize(this.props);

        if (trackWidth > fixedTrackWidth) {
            this.wrapper.parentElement.style[dimension] = wrapperSize - (trackWidth - fixedTrackWidth) + 'px';
        } else {
            this.wrapper.parentElement.style[dimension] = wrapperSize + (fixedTrackWidth - trackWidth) + 'px';
        }
    }

    positionHandle(dragHandle: any) {
        var _props2 = this.props;
        var max = _props2.max;
        var min = _props2.min;
        var vertical = _props2.vertical;

        var position = vertical ? 'bottom' : 'left';
        var trackWidth = this.trackWidth();
        var value = SliderUtil.trimValue(max, min, this.props.value);

        this.handlePosition = SliderUtil.calculateHandlePosition({
            min: min,
            max: max,
            value: value,
            trackWidth: trackWidth,
            handleWidth: dragHandle.offsetWidth
        });

        dragHandle.style[position] = this.handlePosition + 'px';
    }

    positionSelection(dragHandle: any, selection: any) {
        var dimension = this.props.vertical ? 'height' : 'width';
        var handleWidth = Math.floor(dragHandle.offsetWidth / 2);
        selection.style[dimension] = this.handlePosition + handleWidth + 'px';
    }

    adjustPadding(ticksContainer: any) {
        var totalTickSize = this.tickSizes.reduce(function (prev: any, curr: any) {
            return prev + curr;
        }, 0);
        var trackWidth = this.trackWidth();
        var reminder = trackWidth - totalTickSize;

        if (reminder !== 0) {
            var padding = reminder + this.elementOffset(this.track);
            ticksContainer.style.paddingTop = padding + 'px';
        }
    }

    elementOffset(element: any) {
        var vertical = this.props.vertical;
        var style = getComputedStyle(element);
        return parseInt(vertical ? style.bottom : style.left, 10);
    }

    elementSize(element: any) {
        var vertical = this.props.vertical;
        return vertical ? element.clientHeight : element.clientWidth;
    }
}

export class SliderOptions {
    max: number;
    min?: number = 0;
    smallStep?: number = 1;
    value?: number = 0;
    ticksCount?: number;
    fixedTickWidth?: number;
    showButtons?: boolean = true;
    vertical?: boolean = false;
    disabled?: boolean = false;
    dragging?: boolean = false;
    decrementTitle?: string = "Decrement";
    incrementTitle?: string = "Increment";
    dragHandleTitle?: string = "Drag";
    tickPlacement?: string =  "both";
}
