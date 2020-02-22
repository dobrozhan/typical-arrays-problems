
exports.min = function min (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    return Math.min(...array);
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    return Math.max(...array);
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    let count = array.length;
    let sum = array.reduce((previous, current) => current += previous);
    let avg = sum / count;
    return avg;
  } else {
    return 0;
  }
}