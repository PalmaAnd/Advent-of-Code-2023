import * as fs from "fs";

// Read the content of the file and create a array containing all data, splitted by a new line (\n)
const input = fs.readFileSync("./../input_A/input.txt", "utf-8");
const calibrations = input.split("\n");
var sum = 0;

calibrations.forEach(calibration => {
    var firstNumber = 0;
    var secondNumber = 0;
    calibration.split('').forEach(letter => {
        if (letter >= '0' && letter <= '9') {
            if (firstNumber == 0) {
                firstNumber = letter;            
            } else {
                secondNumber = letter;
            }
        }
    });
    if (secondNumber == 0) {
        secondNumber = firstNumber;
    }
    sum += parseInt(firstNumber + secondNumber);
});
console.log(sum);