const axios = require('axios');

const searchingMonster = (monsterName) => {
	console.log('Searching...');

	axios.get('https://www.dnd5eapi.co/api/monsters').then((res) => {
		const monsters = res.data.results;
		const matchedMonster = monsters.find(
			(monster) => monster.name.toLowerCase() === monsterName
		);
		if (matchedMonster) {
			axios
				.get(`https://www.dnd5eapi.co${matchedMonster.url}`)
				.then((monsterResponse) => {
					const monsterData = monsterResponse.data;
					console.log(monsterData);
					console.log(monsterData.index);
					console.log(monsterData.name);
					console.log(monsterData.size);
					console.log(monsterData.type);
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
