// Object property shorthand

const name = 'Jason';
const userAge = 47;

const user = {
	name,
	age: userAge,
	location: 'Alabama',
};

// Object destructuring
const product = {
	label: 'Red notebook',
	price: 3,
	stock: 201,
	saleprice: undefined,
};

const { label: productLabel, stock, rating = 5 } = product;

console.log(productLabel);
console.log(stock);
console.log(rating);
