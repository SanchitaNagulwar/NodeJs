// let address = createAddress('a','b','c');
// console.log(address);

let address = new Address('a','b','c');
console.log( address);


//factory function

// function createAddress(street,city,zipcode){
//    return{
//        street,
//        city,
//        zipcode,
//     };
// }

//constuctor function

function Address(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode =zipcode;
}