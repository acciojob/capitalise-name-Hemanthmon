//your JS code here. If required.let
let inputField = document.getElementById('fname');

inputField.onblur = function(){
	//so now we have to take the value from the input field
	let inputValue = inputField.value;
// so convert to uppercase value
	let upperCase = inputValue.toUpperCase();
	//and then set it back to the input field
	inputField.value = upperCase;
	
}