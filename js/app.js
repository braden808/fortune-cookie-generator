var names = ["you suck", "you suck more", "you suck the most", "you sucky suck suck", "you're zlatan"];

function makeFortune() {
	var localarray = names.slice();
    var node = document.createElement("LI");
	var textnode = document.createTextNode(names[randomFortune]);
    for (var i = 4; i >= 0; i--) {
      randomFortune = (Math.floor(Math.random() * (i + 1)), 1);;
    }
    node.appendChild(textnode);
    document.getElementById("fortune-cookie-text").appendChild(node);
}
