let extendProps = function extendProps(target: any, value?: any) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
    }

    return Object.assign.apply(Object, [{}, target].concat(sources));
};

let calculateAreasCount = function calculateAreasCount(max:number, min: number, smallStep: number): number {
    var _max = arguments.length <= 0 || max === undefined ? 0 : max;
    var _min = arguments.length <= 1 || min === undefined ? 0 : min;
    var _smallStep = arguments.length <= 2 || smallStep === undefined ? 1 : smallStep;

    if (smallStep <= 0) {
        throw new Error("Invalid argument: smallStep must be a positive number");
    }

    return Math.floor(Math.abs(_min - _max) / _smallStep);
};

let calculateFixedTrackSize = function calculateFixedTrackSize(_ref: any) {
    var max = _ref.max;
    var min = _ref.min;
    var smallStep = _ref.smallStep;
    var fixedTickWidth = _ref.fixedTickWidth;
    return (max - min) / smallStep * fixedTickWidth;
};

let calculateTrackSize = function calculateTrackSize(wrapperWidth: number, offset: number) {
    var BUTTONS_COUNT = 2;
    var trackOffset = parseFloat(offset+"") * BUTTONS_COUNT;
    var trackWidth = wrapperWidth - trackOffset - BUTTONS_COUNT;

    return trackWidth;
};

let calculateTicksCount = function calculateTicksCount(max:number, min: number, smallStep: number): number{
    let _max = arguments.length <= 0 || max === undefined ? 0 : max;
    let _min = arguments.length <= 1 || min === undefined ? 0 : min;
    let _smallStep = arguments.length <= 2 || smallStep === undefined ? 1 : smallStep;
    return calculateAreasCount(_max, _min, _smallStep) + 1;
};

var calculateValueFromTick = function calculateValueFromTick(index: number, _ref2: any) {
    var max = _ref2.max;
    var min = _ref2.min;
    var smallStep = _ref2.smallStep;
    var vertical = _ref2.vertical;

    var value = min + index * smallStep;

    return vertical ? Math.abs(value - max) : value;
};

var calculateValueFromTrack = function calculateValueFromTrack(clientRect: any, pageOffset: any, props: any) {
    var length: number = void 0,
        wrapperOffset: number = void 0;

    if (props.vertical) {
        var top = clientRect.top;
        var bottom = clientRect.bottom;

        length = top - bottom;
        wrapperOffset = pageOffset.pageY - bottom;
    } else {
        var left = clientRect.left;
        var right = clientRect.right;

        length = right - left;
        wrapperOffset = pageOffset.pageX - left;
    }

    return valueFromTrack(props, wrapperOffset, length);
};

var valueFromTrack = function valueFromTrack(props: any, wrapperOffset: number, length: number) {
    var max = props.max;
    var min = props.min;
    var smallStep = props.smallStep;

    var distance = max - min;
    var clickOffset = wrapperOffset / length;
    var maxTickValue = distance - distance % smallStep;
    var maxOffset = 100 / distance * maxTickValue / 100;
    var value = max;

    if (clickOffset < maxOffset) {
        value = wrapperOffset / length * distance + min;
    }
    return snapValue(extendProps(props, { value: value }));
};

var calculateTickSizes = function calculateTickSizes(trackSize: number, min: number, max: number, step: number) {
    var elementCount = Math.floor((max - min) / step) + 1;
    var distStep = trackSize / (max - min);
    var result: Array<any> = [];
    var usedSpace = 0;
    var endPoint = 0;

    for (var i = 0; i < elementCount; i++) {
        if (i === 0 || i === elementCount - 1) {
            endPoint += step / 2 * distStep;
        } else {
            endPoint += step * distStep;
        }

        var size = Math.round(endPoint - usedSpace);

        result.push(size);

        usedSpace += size;
    }
    return result;
};

var calculateHandlePosition = function calculateHandlePosition(_ref3: any) {
    var handleWidth = _ref3.handleWidth;
    var trackWidth = _ref3.trackWidth;
    var min = _ref3.min;
    var max = _ref3.max;
    var value = _ref3.value;

    var halfHandleWidth = Math.floor(handleWidth / 2);
    var step = trackWidth / Math.abs(max - min);
    return Math.floor(step * (value - min) - halfHandleWidth);
};

var decreaseValueToStep = function decreaseValueToStep(_ref4: any) {
    var max = _ref4.max;
    var min = _ref4.min;
    var smallStep = _ref4.smallStep;
    var value = _ref4.value;

    var result: number = void 0;
    if (value % smallStep === 0) {
        result = value - smallStep;
    } else {
        result = value - value % smallStep;
    }
    return trimValue(max, min, result);
};

var increaseValueToStep = function increaseValueToStep(_ref5: any) {
    var max = _ref5.max;
    var min = _ref5.min;
    var smallStep = _ref5.smallStep;
    var value = _ref5.value;

    var result = value - value % smallStep + smallStep;

    return trimValue(max, min, result);
};

var snapValue = function snapValue(props: any) {
    var smallStep = props.smallStep;
    var value = props.value;

    var left = decreaseValueToStep(props);
    var right = increaseValueToStep(props);

    if (value % smallStep === 0) {
        return value;
    }

    if (right - value <= smallStep / 2) {
        return right;
    }

    return left;
};

var trimValue = function trimValue(max: number, min: number, value: number) {
    if (value > max) {
        return max;
    }

    if (value < min) {
        return min;
    }

    return value;
};

var identity = function identity(value: any) {
    return value;
};

let SliderUtil = {
    calculateFixedTrackSize: calculateFixedTrackSize,
    calculateValueFromTick: calculateValueFromTick,
    calculateValueFromTrack: calculateValueFromTrack,
    calculateTrackSize: calculateTrackSize,
    calculateTicksCount: calculateTicksCount,
    calculateTickSizes: calculateTickSizes,
    calculateHandlePosition: calculateHandlePosition,
    decreaseValueToStep: decreaseValueToStep,
    identity: identity,
    increaseValueToStep: increaseValueToStep,
    trimValue: trimValue,
    snapValue: snapValue,
    valueFromTrack: valueFromTrack
};

export default SliderUtil;
    