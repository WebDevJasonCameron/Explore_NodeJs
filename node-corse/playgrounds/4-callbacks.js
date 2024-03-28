setTimeout(() => {
	console.log('One second is up');
}, 1000);

const names = ['Andrew', 'Jen', 'Jess'];
const shortNames = names.filter((name) => {
	return name.length <= 4;
});

const geocode = (address, callback) => {
	setTimeout(() => {
		const data = {
			lat: 0,
			long: 0,
		};

		callback(data);
	}, 2000);
};

geocode('Huntsville', (data) => {
	console.log(data);
});
