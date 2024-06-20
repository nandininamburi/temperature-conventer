// script.js

document.getElementById('convertBtn').addEventListener('click', function() {
    const tempInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDisplay = document.getElementById('resultDisplay');

    if (isNaN(tempInput) || tempInput === '') {
        resultDisplay.textContent = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedTemp;
    let convertedUnit;

    if (unit === 'celsius') {
        convertedTemp = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
        const kelvin = temperature + 273.15;
        resultDisplay.textContent = `${temperature} °C = ${convertedTemp.toFixed(2)} °F & ${kelvin.toFixed(2)} K`;
    } else if (unit === 'fahrenheit') {
        convertedTemp = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
        const kelvin = (temperature - 32) * 5/9 + 273.15;
        resultDisplay.textContent = `${ temperature } °C = ${ convertedTemp.toFixed(2) } °F & ${ kelvin.toFixed(2) } K`;
    } else if (unit === 'kelvin') {
        convertedTemp = temperature - 273.15;
        const fahrenheit = (temperature - 273.15) * 9/5 + 32;
        convertedUnit = 'Celsius';
        resultDisplay.textContent = `${temperature} C = ${convertedTemp.toFixed(2)} °F ${fahrenheit.toFixed(2)} °F`;
    }
});