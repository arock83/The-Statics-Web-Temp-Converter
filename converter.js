



function toCelsius(input) {
  var output = ((input*9)/5)+32;
	return output;
}

function toFahrenheit(input) {
  var output = ((input - 32)*5)/9;
	return	output;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var clear = document.getElementById("clear");
var CtoF = document.getElementById("CtoF");
var FtoC = document.getElementById("FtoC");
var outputField = document.getElementById("outputField");
var inputField = document.getElementById("inputField")
// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
    console.log("event", clickEvent);
    var input = inputField.value;
    var output;
  	if (CtoF.checked) {
  		output = toCelsius(input);
  	} else if (FtoC.checked) {
  		output = toFahrenheit(input);
  	} else {
  		alert("Please select a temperature type.")
  	}
    outputField.value = output;
}

function clearVals() {
    CtoF.checked = false;
    FtoC.checked = false;
    inputField.value = "";
    outputField.value = "";
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
clear.addEventListener("click", clearVals);
