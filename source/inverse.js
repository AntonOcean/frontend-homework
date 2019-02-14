'use strict';

const inverse = (numbers, idxFreeze) => {
    const isValidArguments = numbers instanceof Array && (isFinite(idxFreeze) || idxFreeze === undefined);

    if (!isValidArguments) {
        return []
    }

    if (!idxFreeze) {
        return numbers.reverse();
    }

    let leftChunk = numbers.slice(0, idxFreeze);
    let rightChunk = numbers.slice(idxFreeze);
    (idxFreeze > 0) ? leftChunk.push(...rightChunk.reverse()) : leftChunk.reverse().push(...rightChunk);

    return leftChunk;

};
