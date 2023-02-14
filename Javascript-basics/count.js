// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0


//Question2 :Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.ExamplesminMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

const minMax = (arr) => {
    let a = [];
    if (arr.length === 1) {
      a.push(Math.min(...arr));
    } else {
    a.push(Math.min(...arr));
    a.push(Math.max(...arr));
    }
    return a;
  };
  
  console.log(minMax([1, 2, 3, 4, 5]));
