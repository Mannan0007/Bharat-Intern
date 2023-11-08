

var celsiusInput = document.getElementById("celsiusInput");
var fahrenheitOutput = document.getElementById("fahrenheitOutput");

function celsiusToFahrenheit() {
    var celsiusValue = parseFloat(celsiusInput.value);
    var fahrenheitValue = (celsiusValue * 9 / 5) + 32;
    fahrenheitOutput.value = fahrenheitValue.toFixed(2); 
}


celsiusInput.addEventListener("input", celsiusToFahrenheit);




var celsiusInput2 = document.getElementById("celsiusInput2");
var kelvinOutput2 = document.getElementById("kelvinOutput2");

function celsiusToKelvin() {
    var celsiusValue = parseFloat(celsiusInput2.value);
    var kelvinValue = celsiusValue + 273.15;
    kelvinOutput2.value = kelvinValue.toFixed(2); 
}


celsiusInput2.addEventListener("input", celsiusToKelvin);


var fahrenheitInput = document.getElementById("fahrenheitInput");
var kelvinOutput = document.getElementById("kelvinOutput");

function fahrenheitToKelvin() {
    var fahrenheitValue = parseFloat(fahrenheitInput.value);
    var kelvinValue = (fahrenheitValue - 32) * 5 / 9 + 273.15;
    kelvinOutput.value = kelvinValue.toFixed(2); 
}


fahrenheitInput.addEventListener("input", fahrenheitToKelvin);


var fahrenheitInput2 = document.getElementById("fahrenheitInput2");
var celsiusOutput = document.getElementById("celsiusOutput");

function fahrenheitToCelsius() {
    var fahrenheitValue = parseFloat(fahrenheitInput2.value);
    var celsiusValue = (fahrenheitValue - 32) * 5 / 9;
    celsiusOutput.value = celsiusValue.toFixed(2); 
}


fahrenheitInput2.addEventListener("input", fahrenheitToCelsius);


var kelvinInput = document.getElementById("kelvinInput");
var celsiusOutput2 = document.getElementById("celsiusOutput2");


function kelvinToCelsius() {
    var kelvinValue = parseFloat(kelvinInput.value);
    var celsiusValue = kelvinValue - 273.15;
    celsiusOutput2.value = celsiusValue.toFixed(2); 
}


kelvinInput.addEventListener("input", kelvinToCelsius);


var kelvinInput2 = document.getElementById("kelvinInput2");
var fahrenheitOutput2 = document.getElementById("fahrenheitOutput2");


function kelvinToFahrenheit() {
    var kelvinValue = parseFloat(kelvinInput2.value);
    var fahrenheitValue = (kelvinValue - 273.15) * 9 / 5 + 32;
    fahrenheitOutput2.value = fahrenheitValue.toFixed(2); 
}


kelvinInput2.addEventListener("input", kelvinToFahrenheit);
