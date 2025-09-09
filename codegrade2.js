const speedLimit = 70;
const kmPerDemerit = 5;

const speedInput = document.getElementById('speedInput');
const calculateButton = document.getElementById('calculateButton');
const resultMessage = document.getElementById('resultMessage');

calculateButton.addEventListener('click', function() {
    let speed = parseInt(speedInput.value);

    if (isNaN(speed)) {
        resultMessage.textContent = "Invalid Input! Not A Number!";
    } else {
        let demeritPoints = 0;
        let message;

        if (speed <= speedLimit) {
            message = "OK";
        } else {
            demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);

            if (demeritPoints > 12) {
                message = "License suspended";
            } else {
                message = "The Demerit points are: " + demeritPoints;
            }
        }
        resultMessage.textContent = message;
    }
});