let input = document.getElementById("name");
let number = document.querySelector("#number"); 
let btn = document.querySelector("#btn");
let ul = document.getElementsByTagName("ul")[0];


function addContacts(){
	let list = document.createElement("li");
	list.appendChild(document.createTextNode(input.value + " " + number.value));	
	ul.appendChild(list);
	input.value = ""
	number.value = ""

	let deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("Delete"));
	list.appendChild(deleteBtn);
	deleteBtn.onclick = removeParent;	
}



function clickFunction(){
	if (input.value.length > 0 && number.value.length > 0){
		addContacts();
	}
}

function keypressFunction(event){
	if (input.value.length > 0 && number.value.length > 0 
		&& event.keyCode === 13){
		addContacts();
	}
}


btn.addEventListener("click", clickFunction)

number.addEventListener("keypress", keypressFunction)


function removeParent(){
	this.parentNode.remove();
}

