import * as fs from "fs";

// Read the content of the file and create a array containing all data, splitted by a new line (\n)
const input = fs.readFileSync("./../input_A/input.txt", "utf-8");
const calibrations = input.split("\n");

// The final sum of all given numbers by the calibrations
var sum = 0;

calibrations.forEach(calibration => {
    var firstNumber = "";
    var lastNumber = "";
    // Split each line into all characters
    calibration.split('').forEach(letter => {
        // Check if it is a number and if firstnumber is still "" update it, otherwise update the second number
        if (letter >= '0' && letter <= '9') {
            if (firstNumber == "")
                firstNumber = letter;            
            // We don't need an else case because even if the first number is empty it is also the last number
            lastNumber = letter;
        }
    });
    sum += parseInt(firstNumber + lastNumber);
});
console.log(sum);