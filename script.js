function arrayFlat(arr, n) {
  function recursionFlat(currentArr, depth) {
    if (depth === n) {
      return currentArr;
    }

    const flattenedArray = [];

    for (const element of currentArr) {
      if (Array.isArray(element)) {
        flattenedArray.push(...recursionFlat(element, depth + 1));
      } else {
        flattenedArray.push(element);
      }
    }

    return flattenedArray;
  }

  return recursionFlat(arr, 0);
}

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const result = arrayFlat(arr, 1);
console.log(result);
