import * as fs from "fs";

// Read the content of the file and create a array containing all data, splitted by a new line (\n)
const input = fs.readFileSync("./../input_B/example.txt", "utf-8");
const calibrations = input.split("\n");
var sum = 0;
var stringNum = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

calibrations.forEach(calibration => {
    var firstNumber = 0;
    var secondNumber = 0;
    for (let index = 0; index < stringNum.length; index++) {
        const number = stringNum[index];
        if (calibration.indexOf(number) > -1) {
            
        }
    }
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

function stringToInt(number) {
    if (number == "one") {
        return '1';
    } else if (number == "two") {
        return '2';
    } else if (number == "three") {
        return '3';
    } else if (number == "four") {
        return '4';
    } else if (number == "five") {
        return '5';
    } else if (number == "six") {
        return '6';
    } else if (number == "seven") {
        return '7';
    } else if (number == "eight") {
        return '8';
    } else if (number == "nine") {
        return '9';
    }
    return '0;'
}