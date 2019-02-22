function helloWorld(){
	firstName = prompt("What's your name ?");
	console.log(`Hello ${firstName}, seat your belt and get ready to chachacha`);
	return `Hello ${firstName}, seat your belt and get ready to chachacha !`;
}


// Bonjour Paris !
var hello_world = document.getElementById('hello_world');
hello_world.innerHTML = helloWorld();