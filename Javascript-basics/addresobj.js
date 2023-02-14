// street
//city
//zipcode
//ShowAddress(address)

let address ={
    street : 'a',
    city : 'b',
    zipcode : 'c',
};

function ShowAddress(address){
    for ( let key in address)
        console.log(key, address[key]);
}

ShowAddress(address);

