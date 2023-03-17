const ages = [3, 22,10, 18, 20];

console.log(ages.findIndex(checkAge));

function checkAge(age) {
  return age > 18;
}

