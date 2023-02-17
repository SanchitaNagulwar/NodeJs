// Write a function that takes two numbers as input and returns the larger of the two numbers.

function largest(a, b) {

	if(a > b)
		return a;
	// else if(a === b)
	// 	return 0;
	else
		return b;
}

console.log(largest(5, 15));