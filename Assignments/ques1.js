// Write a function that takes an array of numbers and returns the sum of all the numbers in the array.

function sumArray(array) {
    const ourArray = [1, 4, 0, 9, -3];
    let sum = 0;
  
    for (let i = 0; i < ourArray.length; i += 1) {
      sum += ourArray[i];
    }
    
    return sum;
  }
  console.log(sumArray([2, 4, 5, 6]));