const books = [
  { title: 'Gatsby le magnifique', id: 133712, rended: 9 },
  { title: 'A la recherche du temps perdu', id: 237634, rended: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rended: 6 },
  { title: 'Les frères Karamazov', id: 450911, rended: 5 },
  { title: 'Guerre et Paix', id: 748147, rended: 19 }
];


function minRented(hash){
	return hash.sort(function(a,b){if (a.rended > b.rended) {return 1;} if (a.rended < b.rended) {return -1;} return 0;})[0]
}

function maxRented(hash){
	return hash.sort(function(a,b){if (a.rended < b.rended) {return 1;} if (a.rended > b.rended) {return -1;} return 0;})[0]
}

function idSearching(hash){
	return hash.find(book => book.id === 873495)
}

function deletingBooks(hash){
	return hash.slice(0, hash.findIndex(book => book.id === 133712)).concat(hash.slice(hash.findIndex(book => book.id === 133712) + 1, hash.length))
}

function alphaSortingBooks(hash){
	return hash.sort(function (a, b) { return a.title.localeCompare(b.title); })
}

// Rendering min Rented
var min_rented = document.getElementById('min_rented');
min_rented.innerHTML = minRented(books).title + " est le livre qui a été le moins lu, seules " + minRented(books).rended + " personnes se sont données la peine de le lire.";

// Rendering max Rented
var max_rented = document.getElementById('max_rented');
max_rented.innerHTML = maxRented(books).title + " est le livre le plus plébiscité par la critique. Ce ne sont pas moins de " + maxRented(books).rended + " personnes qui ont pris le temps de lire un ouvrage aussi long que 15034 messages Slack. Totalement *fifou* !";

// Rendering idSearching
var id_searching_books = document.getElementById('id_searching_books');
id_searching_books.innerHTML = "Le titre du livre ayant pour indice 873495 est : " + idSearching(books).title;

// Rendering Delete an Enter
var deleting_single_enter = document.getElementById('deleting_single_enter');
deleting_single_enter.innerHTML = "Voici la liste des livres sans celui contenant l'indice 133712 : "
deletingBooks(books).forEach(function(element) {
   let title = document.createElement('div');

   title.innerHTML = element.title;
   deleting_single_enter.appendChild(title);
});

// Rendering Alpha Sorting
//var hello = document.getElementById('hello');
//hello.innerHTML = "Les livres triés de manière alphabétiques sont : "
//alphaSortingBooks(books).forEach(function(element) {
//   let title = document.createElement('div');
//   let id = document.createElement('div');
//   let rended = document.createElement('div');

//   title.innerHTML = element.title;
//   id.innerHTML = "L'id du roman est : " + element.id;
//   rended.innerHTML = "Pour votre gouverne, ce bouquin a déjà été emprunté " + element.rended + " fois.";

//   hello.appendChild(title);
//   hello.appendChild(id);
//   hello.appendChild(rended);
//});


var hello = document.getElementById('alpha_books');
//hello.innerHTML = "Les livres triés de manière alphabétiques sont : "
alphaSortingBooks(books).forEach(function(element) {
   let listTBody = document.createElement('tbody');
   let listTr = document.createElement('tr');
   let title = document.createElement('td');
   let id = document.createElement('td');
   let rended = document.createElement('td');

   title.innerHTML = element.title;
   id.innerHTML = "L'Id du roman est : " + element.id;
   rended.innerHTML = "Pour votre gouverne, ce bouquin a déjà été emprunté " + element.rended + " fois.";
   listTr.innerHTML += title.outerHTML + id.outerHTML + rended.outerHTML
   listTBody.innerHTML += listTr.outerHTML

   hello.appendChild(listTBody);
});


// early work on that
function booksQuestioning(hash){
	if (hash.map(obj => obj.rended === 0).every(a => a === false)){console.log("Tous les livres ont été empruntés");}
	console.log(hash.sort(function(a,b){if (a.rended > b.rended) {return 1;} if (a.rended < b.rended) {return -1;} return 0;})[0])
	console.log(hash.sort(function(a,b){if (a.rended < b.rended) {return 1;} if (a.rended > b.rended) {return -1;} return 0;})[0])
	console.log("Le titre du livre ayant pour indice 873495 est : " + hash.find(book => book.id === 873495).title)
	console.log(hash.slice(0, hash.findIndex(book => book.id === 133712)).concat(hash.slice(hash.findIndex(book => book.id === 133712) + 1, hash.length)))
	console.log(hash.sort(function (a, b) { return a.title.localeCompare(b.title); }))
};

booksQuestioning(books)


