function generateFortuneCookie(){
    var fortunesList = ["You are amazing", "you suck", "you're cool", "you will be rich", "you will be successful", "you will fail"];
    var node = document.createElement("LI");
    var textnode = document.createTextNode(fortunesList);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
     for(int i = 0; i < fortunesList.length; i++) { 
		fortunesList[i] = i +1; 
}