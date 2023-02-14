/////////////////////////////////////
// ARITHMETIC OPERATOR


// let x= 10;
// let y = 20;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

////////////////////////////////////////
//Increment
// console.log(++x);

// console.log(x++);
// console.log(x);


////////////////////////////////////////
//Decrement

// console.log(--x);


///////////////////////////////////////
// ASSIGNMENT OPERATOR

// let x = 10;

// x = x + 5;
// x += 5;

// x = x * 3;
// x *= 3;

/////////////////////////////////////////////
// COMPARISON OPERATOR

let x = 1;

//(These four are the relational operators)
console.log(x > 1);
console.log(x < 1);
console.log(x >= 1);
console.log(x <= 1);

// (These are the equality operators)

console.log(x === 1);     //x is equals to 1   
console.log(x !== 1);     //x is not equals to 1

//Strict equality compares type and value both

console.log(1 === 1);       //output is true because type and value is same  
console.log('1' === 1);   //output is false because type is different

//loose equality compares only value
console.log(1 == 1);          //output is true because value is same  
console.log('1' == 1);        //output is true because value is same  
console.log(true == 1);       //output is true because value is same  

///////////////////////////////////////////////

//TERNARY OPERATOR

//if a customer has more than 100 points then they are gold customers, otherwise, they are silver customers
let points = 150;
let type = points > 100 ? 'gold':'silver';

console.log(type);


