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

function bornInTheSeventies(hash){
  return hash.filter(entr => (entr.year > 1970) && (entr.year <= 1980));
}

function fullName(hash){
  return hash.map(entr => entr.first + " " + entr.last);
}

function ageEntrepreneur(hash){
  return hash.map(entr => entr.first + " " + entr.last + " aurait, aura ou a eu " + (2019 - entr.year) + " ans en 2019");
}

function sortingLastName(hash){
  return hash.sort(function (a, b) { return a.last.localeCompare(b.last); });
}

// Rendering Born in the Seventies
var born_seventies = document.getElementById('born_seventies');
born_seventies.innerHTML = "Les BigWigs nés dans les Seventies : "
bornInTheSeventies(entrepreneurs).forEach(function(element) {
   let name = document.createElement('div');
   let year = document.createElement('div');

   name.innerHTML = element.first + " " + element.last;
   year.innerHTML = "né en " + element.year;

   born_seventies.appendChild(name);
   born_seventies.appendChild(year);
});

// Rendering Full Name
var full_name = document.getElementById('full_name');
full_name.innerHTML = "Les noms complets de ces entrepreneurs à succès : "
fullName(entrepreneurs).forEach(function(element) {
   let name = document.createElement('div'); 
   name.innerHTML = element;
   full_name.appendChild(name);
});

// Rendering Age
var age_entrepreneur = document.getElementById('age_entrepreneur');
age_entrepreneur.innerHTML = "Les noms complets de ces entrepreneurs à succès : "
ageEntrepreneur(entrepreneurs).forEach(function(element) {
   let age = document.createElement('div'); 
   age.innerHTML = element;
   age_entrepreneur.appendChild(age);
});

// Sorting by Last Name
var sorting_last_name = document.getElementById('sorting_last_name');
sorting_last_name.innerHTML = "Alphabet as Larry Says : "
sortingLastName(entrepreneurs).forEach(function(element) {
  let name = document.createElement('div');
  name.innerHTML = element.first + " " + element.last;
  sorting_last_name.appendChild(name);
});

// early work and on console
function entrepreneursQuestioning(hash){
  console.log(hash.filter(entr => (entr.year > 1970) && (entr.year <= 1980)))
  console.log(hash.map(entr => entr.first + " " + entr.last))
  console.log(hash.map(entr => entr.first + " " + entr.last + " aurait, aura ou a eu " + (2019 - entr.year) + " ans en 2019"))
  console.log(hash.sort(function (a, b) { return a.last.localeCompare(b.last); }))
};

entrepreneursQuestioning(entrepreneurs);