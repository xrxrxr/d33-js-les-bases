const books = [
  { title: 'Gatsby le magnifique', id: 133712, rended: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rended: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rended: 6 },
  { title: 'Les frères Karamazov', id: 450911, rended: 5 },
  { title: 'Guerre et Paix', id: 748147, rended: 19 }
];

function booksQuestioning(hash){
	if (hash.map(obj => obj.rended === 0).every(a => a === false)){console.log("Tous les livres ont été empruntés");}
	console.log(hash.sort(function(a,b){if (a.rended > b.rended) {return 1;} if (a.rended < b.rended) {return -1;} return 0;})[0])
	console.log(hash.sort(function(a,b){if (a.rended < b.rended) {return 1;} if (a.rended > b.rended) {return -1;} return 0;})[0])
	console.log(hash.find(book => book.id === 873495))
	console.log(hash.slice(0, hash.findIndex(book => book.id === 133712)).concat(hash.slice(hash.findIndex(book => book.id === 133712) + 1, hash.length)))
	console.log(hash.sort(function (a, b) { return a.title.localeCompare(b.title); }))
};

booksQuestioning(books);