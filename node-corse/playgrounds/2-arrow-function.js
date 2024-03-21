// const square = function (x) {
// 	return x * x;
// };

// const square = (x) => {
// 	return x * x;
// };

// console.log(square(66));

const event = {
	name: 'Birthday Party',
	guestList: ['Smash', 'Calvin', 'Mocha'],
	printGuestList() {
		console.log('Guest list for ' + this.name);

		this.guestList.forEach((guest) => {
			console.log(guest + ' is attending ' + this.name);
		});
	},
};

event.printGuestList();
