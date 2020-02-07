let buttons = document.querySelector('.buttons'); //get all buttons
let theScreen = document.querySelector('.screen');
let stringForScreen = '';
let numberInput = '';
let leftSideNumbers = '';
let rightSideNumbers = '';
let operatorInput = '';
let answer = '';

buttons.addEventListener('click', function(e) {
    // console.log(e)
    console.log(e.target.parentElement.className);
    switch(e.target.parentElement.className) { //input switch case
        case 'numbers': 
            numberInput += e.target.innerText;
            // console.log('number was : ' + numberInput)
            if (leftSideNumbers == '') {
                stringForScreen += numberInput;
                theScreen.innerText = stringForScreen;
            }
            console.log('stringforscreen 1: ' + stringForScreen)
            break;
        case 'operators':
            operatorInput = e.target.innerText;
            stringForScreen += ' ' + operatorInput;
            theScreen.innerText = stringForScreen;
            console.log('stringforscreen 2: ' + stringForScreen)
            // console.log('operator was : ' +  operator);
            if (operatorInput == '+') {
                leftSideNumbers = numberInput;
                numberInput = '';
                operator = operatorInput;}
            // } else if(operatorInput == '='){
        case 'buttons':
            rightSideNumbers = numberInput;
            numberInput = '';
            stringForScreen += ' ' + rightSideNumbers;
            theScreen.innerText = stringForScreen;
            console.log('stringforscreen 3: ' + stringForScreen)
    }

    if (leftSideNumbers.length != 0 && rightSideNumbers != 0){
        switch(operator){
            case '+':
                answer = Number(leftSideNumbers) + Number(rightSideNumbers);
                stringForScreen += ' ' + '= ' + answer;
                theScreen.innerText = stringForScreen;
                console.log('stringforscreen 4: ' + stringForScreen)
                console.log(answer);
                // console.log(stringForScreen);
                leftSideNumbers = '';
                rightSideNumbers = '';
                operator = '';
        }
    }


});

