// Write a function that takes an array of numbers
// and returns a new array with only the even numbers from the original array.

function evenNumbers(){

 let array1 = [1,2,3,4,5,6,7,8,9,10];

 let array2 = [];

 for (let i = 0; i < array1.length; i++){
    if (array1[i] % 2 == 0){
        array2.push( array1[i]) 
    } 
 }

 console.log(array2);
   

}

evenNumbers();