//fn to Max of two numbers

let number = max( 5 ,4);
console.log(number);

function max ( a, b){
    // if (a > b) return a;
    // else return b;

    //or
    return (a > b) ? a : b;
}

// landscape or portrait

let portrait = islandscape (400, 600);
console.log ( portrait );

function islandscape( a , b ){
    return (a < b);
}