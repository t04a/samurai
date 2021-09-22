export function required(value) {
    if (value) return undefined;

    return 'Field is required'
}

/*export function maxLengthCreator(value) {
    function(value) {
        if (value.length > 30) return 'Max length is 30 symbols';

    }

    return undefined
}*/

export function maxLengthCreator(maxLength) {
    return function(value) {
        if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    }
}