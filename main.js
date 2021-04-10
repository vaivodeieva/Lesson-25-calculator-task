let activeNum = '';
let storedNum = '';
let activeOperator = '';



function operatorIsPressed(operator) {
    activeOperator = operator;
    compute();
    storedNum = activeNum;
    updateScreen();
    activeNum = '';
}


function numIsPressed(num) {
    activeNum += num;
    updateScreen();
}



function equalsIsPressed() {
    compute();
    updateScreen();
    activeNum = '';
    storedNum = '';
}


function clearScreen() {
    document.getElementById('screen').innerHTML = '';
    activeNum = '';
    storedNum = '';
}




function updateScreen() {
    document.getElementById('screen').innerHTML = activeNum;
}




function compute() {
    if (activeNum && storedNum && activeOperator) {
        switch (activeOperator) {
            case '+':
                activeNum = parseFloat(storedNum) + parseFloat(activeNum);
                break;
            case '-':
                activeNum = parseFloat(storedNum) - parseFloat(activeNum);
                break;
            case '*':
                activeNum = parseFloat(storedNum) * parseFloat(activeNum);
                break;
            case '/':
                activeNum = parseFloat(storedNum) / parseFloat(activeNum);
                break;

        }
    }
}

