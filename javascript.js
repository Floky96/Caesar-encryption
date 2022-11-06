'use strict'


function convert() {

    let userInputText = document.getElementById("userInputText").value;
    let userInputNumber = document.getElementById("userInputNumber").value;
    let conversionOutput = document.getElementById("conversionOutput");
    let asciiListText = "";
    let encrypted = "";
    let summed = "";
    let test = 0;

    conversionOutput.textContent = "";

    for (let i = 0; i < userInputText.length; i++) {

        if (userInputNumber < -26) {
            userInputNumber = userInputNumber % -26;
        }

        else if (userInputNumber > 26) {
            userInputNumber = userInputNumber % 26;
        }
        asciiListText = userInputText[i];
        encrypted = asciiListText.charCodeAt(0);
        summed = (asciiListText.charCodeAt(0) + userInputNumber);

        if (encrypted >= 65 && encrypted <= 90) {
            if (summed < 65) {
                summed += 26;
            }
            if (summed > 90) {
                summed = summed - 90 + 64;
            }
        }
        if (encrypted >= 97 && encrypted <= 122) {
            if (summed < 97) {
                summed += 26;
            }
            if (summed > 122) {
                summed = summed - 122 + 96;
            }
        }
        conversionOutput.textContent += (String.fromCharCode(summed));
    }

}

function reset() {
    let conversionOutput = document.getElementById("conversionOutput");
    conversionOutput.textContent = "";
}


