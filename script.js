// Function to convert inches to centimeters
function inchesToCentimeters(inches) {
    return inches * 2.54;
}

// Function to convert pounds to kilograms
function poundsToKilograms(pounds) {
    return pounds * 0.453592;
}

// Function to calculate BMI
function calculateBMI(heightInInches, weightInPounds) {
    var heightInCm = inchesToCentimeters(heightInInches);
    var weightInKg = poundsToKilograms(weightInPounds);

    console.log(heightInCm + ' cm');
    console.log(weightInKg + ' kg');

    // Convert height to meters
    var heightInMeters = heightInCm / 100;

    // Calculate BMI
    var bmi = weightInKg / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
}

// Event listener for the button click
document.getElementById('calculateButton').onclick = function() {
    var height = parseFloat(document.getElementById('heightInput').value);
    var weight = parseFloat(document.getElementById('weightInput').value);

    if (!isNaN(height) && !isNaN(weight)) {
        var bmi = calculateBMI(height, weight);
        document.getElementById('result').innerText = 'Your BMI is ' + bmi;
    } else {
        alert('Please enter valid values for height and weight.');
    }
};
