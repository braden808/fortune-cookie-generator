var names = ["you suck", "you suck more", "you suck the most", "you sucky suck suck", "you're zlatan"];




function makeFortune() {
	
	var localarray = names.slice();
	var node = document.createElement("LI");
	for (var i = 4; i >= 0; i--) {
 	randomFortune = localarray.splice(Math.floor(Math.random() * (i + 1)), 1);
	}
	console.log(randomFortune)
    randomFortune.appendChild(node);
}
