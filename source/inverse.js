'use strict';

const inverse = (numbers, idxFreeze) => {
    if (numbers instanceof Array && (isFinite(idxFreeze) || idxFreeze === undefined)) {
        if (idxFreeze) {
            let leftChunk = numbers.slice(0, idxFreeze);
            let rightChunk = numbers.slice(idxFreeze);
            (idxFreeze > 0) ? leftChunk.push(...rightChunk.reverse()) : leftChunk.reverse().push(...rightChunk);
            return leftChunk;
        }
        return numbers.reverse();
    }
    throw new TypeError("Invalid arguments");
};
