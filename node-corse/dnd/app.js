const axios = require('axios');

const searchingMonster = (monsterName) => {
	console.log('Searching...');

	axios.get('https://www.dnd5eapi.co/api/monsters').then((res) => {
		const monsters = res.data.results;
		console.log(monsters);
		const matchedMonster = monsters.find(
			(monster) => monster.name.toLowerCase() === monsterName
		);

		if (matchedMonster) {
			axios
				.get(matchedMonster.url)
				.then((monsterResponse) => {
					const monsterData = monsterResponse.data;
					console.log(monsterData.name);
					console.log(monsterData.index);
				})
				.catch((err) => {
					console.log('Error fetching monster details.');
				});
		} else {
			console.log('Monster not found.');
		}
	});
};

searchingMonster('aboleth');
