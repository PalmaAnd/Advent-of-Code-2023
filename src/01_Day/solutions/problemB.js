import * as fs from "fs";

// Read the content of the file and create a array containing all data, splitted by a new line (\n)
const input = fs.readFileSync("./../input_B/input.txt", "utf-8");
const calibrations = input.split("\n");
var sum = 0;
var stringNum = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];

const getStartEnd = (str, sub) => [
    str.indexOf(sub),
    str.indexOf(sub) + sub.length - 1,
];

calibrations.forEach((calibration) => {
    var firstNumber = "";
    var secondNumber = "";
    // Split into subarray and check if it contains either a number or a string
    var line = "";
    for (let index = 0; index < calibration.length; index++) {
        const element = calibration[index];
        line += element;
        if (element >= "0" && element <= "9") {
            if (firstNumber == "") {
                firstNumber = element;
            } else {
                secondNumber = element;
            }
            line = line.replace(element, "");
        } else {
            for (let j = 0; j < stringNum.length; j++) {
                if (line.indexOf(stringNum[j]) > -1) {
                    const startEnd = getStartEnd(line, stringNum[j]);
                    const sub = line.substring(startEnd[0], startEnd[1] + 1);
                    const temp = stringToInt(sub);
                    if (temp != "0") {
                        if (firstNumber == "") {
                            firstNumber = temp;
                        } else {
                            secondNumber = temp;
                        }
                    }
                    line = line.replace(sub, "");
                }
            }
        }
    }

    // If only 1 number was given
    if (secondNumber == "") {
        secondNumber = firstNumber;
    }
    sum += parseInt(firstNumber + secondNumber);
});

console.log(sum);

function stringToInt(number) {
    if (number == "one") {
        return "1";
    } else if (number == "two") {
        return "2";
    } else if (number == "three") {
        return "3";
    } else if (number == "four") {
        return "4";
    } else if (number == "five") {
        return "5";
    } else if (number == "six") {
        return "6";
    } else if (number == "seven") {
        return "7";
    } else if (number == "eight") {
        return "8";
    } else if (number == "nine") {
        return "9";
    }
    return "0";
}
