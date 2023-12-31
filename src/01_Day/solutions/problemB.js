import * as fs from "fs";

/**
 * Problem:
 * Your calculation isn't quite right.
 * It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".
 * Equipped with this new information, you now need to find the real first and last digit on each line.
 * Goal: the sum of all of the calibration values
 *
 * Tries:
 * - 53289
 * - 53264
 * - 53080
 * - 53227
 * - 54445
 * - 53236
 * - 53536
 */

// Read the content of the file and create a array containing all data, splitted by a new line (\n)
const input = fs.readFileSync("./../input_B/input.txt", "utf-8");
const calibrations = input.split("\n");
var sum = 0;

/** TODO:  Maybe use something like this:
 * var stringNum = {
    "one"   : "1",
    "two"   : "2",
    "three" : "3",
    "four"  : "4",
    "five"  : "5",
    "six"   : "6",
    "seven" : "7",
    "eight" : "8",
    "nine"  : "9"
};
 */

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

calibrations.forEach((calibration) => {
    var firstNumber = "";
    var lastNumber = "";
    // Split into subarray and check if it contains either a number or a string
    var line = "";
    for (let index = 0; index < calibration.length; index++) {
        const element = calibration[index];
        // IDEA: Try looking from the left until I find 1 match, then look from the right until I find 1 match
        if (element >= "0" && element <= "9" && firstNumber == "") {
            if (firstNumber == "") firstNumber = element;
        } else {
            line += element;
            var lastElem = 0;
            for (let j = 0; j < stringNum.length; j++) {
                if (line.lastIndexOf(stringNum[j]) > lastElem) {
                    lastElem = line.lastIndexOf(stringNum[j]);
                    const startEnd = getStartEnd(line, stringNum[j]);
                    const sub = line.substring(startEnd[0], startEnd[1] + 1);
                    const temp = stringToInt(sub);
                    if (temp != "0") {
                        if (firstNumber == "")
                            firstNumber = temp;
                        lastNumber = temp;
                    }
                }
            }
        }
    }
    if (lastNumber == "") lastNumber = firstNumber;
    console.log(firstNumber);
    console.log(lastNumber);
    sum += parseInt(firstNumber + lastNumber);
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

function getStartEnd(str, sub) {
    return [str.indexOf(sub), str.indexOf(sub) + sub.length - 1];
}
