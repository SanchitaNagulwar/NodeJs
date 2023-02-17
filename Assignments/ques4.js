// Write a function that takes an array of strings and returns a new array 
// with all the strings converted to uppercase.

function uppercase(){

    var array2 = ["red","pink","white","orange","blue"];
    array2 = array2.map(array2 => array2.toUpperCase());

    return array2;
}

console.log(uppercase());

/////////////////////////////////////

// METHOD 2

// var array2 = ["melon","banana","apple","orange","lemon"];
// array2 = array2.map(function(x){ return x.toUpperCase(); })

// console.log(array2);

