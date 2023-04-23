const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d6c2faa3dmsh922150c5e564f61p1c755ajsn0fa40da5fcd0',
		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
	}
};

fetch('https://myanimelist.p.rapidapi.com/anime/1535', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));