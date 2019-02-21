const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function entrepreneursQuestioning(hash){
	console.log(hash.filter(entr => (entr.year > 1970) && (entr.year <= 1980)))
	console.log(hash.map(entr => entr.first + " " + entr.last))
	console.log(hash.map(entr => entr.first + " " + entr.last + " aurait, aura ou a eu " + (2019 - entr.year) + " ans en 2019"))
	console.log(hash.sort(function (a, b) { return a.last.localeCompare(b.last); }))
};

entrepreneursQuestioning(entrepreneurs);